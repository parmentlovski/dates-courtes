<?php

namespace App\Controller;


use App\Entity\User;
use App\Repository\ProductRepository;
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
     * @IsGranted("ROLE_USER")
     * 
     *  @return Response
     */
    public function mentions() {
        return $this->render('home/mentions.html.twig');
    }

}
