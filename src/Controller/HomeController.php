<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

class HomeController extends AbstractController
{
    /**
     * Page d'accueil accessible que pour les users connecté 
     * @Route("/", name="app_home")
     * @IsGranted("ROLE_USER")
     */
    public function home()
    {
        return $this->render('home/index.html.twig');
    }

}
