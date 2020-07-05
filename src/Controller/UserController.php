<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AccountType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserController extends AbstractController
{
    /**
     *  Affiche et traite le formulaire de modification de profil 
     * 
     * @Route("/{slug}", name="user_profil")
     * @IsGranted("ROLE_USER")
     * 
     * @param User $user
     * 
     * @return Response
     */
    public function edit(User $user, Request $request, EntityManagerInterface $manager, UserPasswordEncoderInterface $encoder)
    {
        $form = $this->createForm(AccountType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $hash = $encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($hash);

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'Votre profil a bien été modifié'
            );
        }
        return $this->render('user/index.html.twig', [
            'user' => $user,
            'form' => $form->createView()
        ]);
    }
}
