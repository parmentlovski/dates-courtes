<?php

namespace App\Form;

use App\Entity\User;
use App\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class RegistrationType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstName', TextType::class, $this->getConfiguration("Prénom", ""))
            ->add('lastName', TextType::class, $this->getConfiguration("Nom", ""))
            ->add('email', EmailType::class, $this->getConfiguration("Email", ""))
            ->add('password', PasswordType::class, $this->getConfiguration("Mot de passe", ""))
            ->add('passwordConfirm',  PasswordType::class, $this->getConfiguration("Confirmation du mot de passe", ""))
            ->add('validate', CheckboxType::class, [
                'invalid_message' => "Veuillez cocher la case",
                'label' => 'En s\'inscrivant vous acceptez les conditions générales',
                'required' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,    
        ]);
    }
}
