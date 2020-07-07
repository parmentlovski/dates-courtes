<?php

namespace App\Form;

use App\Entity\Product;
use App\Form\ApplicationType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\MoneyType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ProductType extends ApplicationType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('reserve', CheckboxType::class, [
                'label' => 'Est-ce une promotion stockée en réserve ?',
                'required' => false,
            ])
            ->add('rayon', TextType::class, $this->getConfiguration("Quel rayon ?", "Bio"))
            ->add('sousRayon', TextType::class, $this->getConfiguration(
                "Quel sous rayon ? (facultatif)",
                "Sucré",
                [
                    'required' => false,
                ]
            ))
            ->add('title', TextType::class, $this->getConfiguration("Nom du produit", "Innocent fruits rouges"))
            ->add('reference', IntegerType::class, $this->getConfiguration(
                "Les 3 derniers chiffres de la référence (facultatif)",
                "007",
                [
                    'required' => false
                ]
            ))
            ->add('price', MoneyType::class, $this->getConfiguration(
                "Quel prix ? (facultatif)",
                "3.50",
                [
                    'required' => false,
                    'invalid_message' => 'Format non valide, exemple : 1.27',
                    'currency' => null
                ]
            ))
            ->add('date', DateType::class, $this->getConfiguration("Date de péremption ?", "01/01/2021"));
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Product::class,
        ]);
    }
}
