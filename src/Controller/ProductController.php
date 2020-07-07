<?php

namespace App\Controller;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProductController extends AbstractController
{
    /**
     * @Route("/produit", name="product_index")
     * @IsGranted("ROLE_USER")
     */
    public function index(ProductRepository $productRepo)
    {

        return $this->render('product/index.html.twig', [
            'products' => $productRepo->findBy([], ['date' => 'ASC'])
        ]);
    }

    /**
     * @Route("/produit/ajout", name="product_add")
     * @IsGranted("ROLE_USER")
     * 
     *  @return Response
     */
    public function add(Request $request, EntityManagerInterface $manager)
    {

        $product = new Product();

        $form = $this->createForm(ProductType::class, $product);

        if ($request->isMethod('POST')) {
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {

                $product->setUser($this->getUser());

                $manager->persist($product);
                $manager->flush();

                $this->addFlash(
                    'notice',
                    'a bien été ajouté'
                );
            } else {
                $this->addFlash(
                    'error',
                    'Erreur dans le formulaire'
                );
            }

        }

        return $this->render('product/add.html.twig', [
            'product' => $product,
            'form' => $form->createView()
        ]);
    }

    /**
     * Voir toutes les infos d'un produit 
     * @Route("/produit/{id}", name="product_show")
     * @IsGranted("ROLE_USER")
     */
    public function show(Product $product)
    {

        return $this->render('product/show.html.twig', [
            'product' => $product
        ]);
    }

     /**
     * Permet de modifier un produit 
     * 
     * @Route("/product/{id}/edit", name="product_edit")
     * @IsGranted("ROLE_USER")
     *
     * @return Response
     */
    public function edit(Product $product, Request $request, EntityManagerInterface $manager)
    {

        $form = $this->createForm(ProductType::class, $product);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $manager->persist($product);
            $manager->flush();

            $this->addFlash(
                'notice',
                "Le produit <" . $product->getTitle() . "> a bien été modifié !"
            );

            return $this->redirectToRoute('product_index');
        }

        return $this->render('product/edit.html.twig', [
            'form' => $form->createView(),
            'product' => $product,
        ]);
    }

    
    /**
     * @Route("/produit/{id}/delete", name="product_delete")
     * @IsGranted("ROLE_USER")
     * 
     * @param Product $product
     * @param EntityManagerInterface $manager
     * @return Response
     */
    public function delete(Product $product, EntityManagerInterface $manager)
    {
        $title = $product->getTitle();
        $manager->remove($product);
        $manager->flush();

        $this->addFlash(
            'notice',
            "Le produit " . $title . " a bien été supprimé"
        );

        return $this->redirectToRoute("product_index");
    }
}
