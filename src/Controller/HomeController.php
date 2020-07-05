<?php

namespace App\Controller;


use App\Entity\User;
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
    public function home()
    {
        return $this->render('home/index.html.twig');
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
