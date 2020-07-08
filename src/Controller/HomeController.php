<?php

namespace App\Controller;


use App\Entity\User;
use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    /**
     * Page d'accueil accessible que pour les users connecté 
     * @Route("/", name="app_home")
     * @IsGranted("ROLE_USER")
     * 
     * 
     * @return Response
     */
    public function home(ProductRepository $productRepo)
    {

        return $this->render('home/index.html.twig', [
            'products' => $productRepo->findBy([], ['date' => 'ASC'],20)
        ]);
    }

     /**
     * Page des mentions légales
     * @Route("/mentions-legales", name="app_mentions")
     * 
     *  @return Response
     */
    public function mentions() {
        return $this->render('home/mentions.html.twig');
    }

    /**
     * @Route("/produit/{id}/clear", name="product_clear")
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

        return $this->redirectToRoute("app_home");
    }

}
