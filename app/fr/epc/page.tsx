'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CalendarDays } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { EpcProcess, type EpcStep } from '@/components/epc-process'
import { getContent } from '@/lib/content'

export default function EPCPageFr() {
  const { breadcrumb, mining } = getContent('fr')

  const steps: EpcStep[] = [
    {
      number: 'Étape 1',
      name: 'Ingénierie',
      subtitle: 'Conception de l’usine minière et du schéma de procédé',
      description:
        'Nous définissons le schéma de procédé et l’agencement général de l’usine selon les propriétés du minerai et les conditions du site, en verrouillant le flowsheet et la sélection des équipements.',
      summary:
        'Appuyés par des laboratoires de recherche professionnels, nous fournissons une conception d’ingénierie sur mesure, des essais métallurgiques sur minerai jusqu’aux projets complets d’usines de traitement des minéraux.',
      features: [
        {
          title: 'Essais sur minerai et conception du schéma',
          description:
            'Sur la base des propriétés du minerai, sélection scientifique de la filière de traitement afin de maximiser les performances d’enrichissement et la rentabilité économique.',
        },
        {
          title: 'Conception numérique',
          description:
            'Utilisation de la CAO (CAD), de SolidWorks et de l’analyse par éléments finis ANSYS pour réaliser des schémas de procédé hautement adaptables et des plans d’implantation générale numériques.',
        },
        {
          title: 'Simulation et sélection précise des équipements',
          description:
            'Recours à la simulation 3D et à plus de 70 technologies brevetées homologuées pour associer la capacité optimale à des configurations d’équipements à faible consommation d’énergie.',
        },
      ],
      image: '/images/mining-plant.png',
    },
    {
      number: 'Étape 2',
      name: 'Fabrication',
      subtitle: 'Fabrication des équipements clés et contrôle qualité · Équipements d’atelier de production',
      description:
        'Les équipements principaux sont fabriqués en interne tandis que nous coordonnons l’approvisionnement mondial, garantissant le respect des délais de livraison et des normes de qualité.',
      summary:
        'Sinomining dispose de solides capacités de fabrication interne. Appuyés par une base de production moderne de 120 000 m² et plus de 160 équipements d’usinage de haute précision, nous nous concentrons sur la R&D indépendante et la fabrication de haute qualité d’équipements clés de traitement des minéraux.',
      features: [
        {
          title: 'Fabrication de précision en interne',
          description:
            'Grâce aux tours CNC, machines de découpe laser, soudage automatique à l’arc submergé, fonderie et atelier de caoutchouc industriel, nous assurons une production 100 % maîtrisée en interne des équipements clés tels que les cellules de flottation, agitateurs et épaississeurs.',
        },
        {
          title: 'Chaîne d’approvisionnement mondiale de haut standard',
          description:
            'Coordination des chaînes d’approvisionnement en composants auxiliaires de haute qualité avec une gestion rigoureuse des plannings, garantissant une livraison clé en main fiable de lignes complètes de traitement.',
        },
        {
          title: 'Assurance qualité stricte',
          description:
            'Mise en œuvre d’équipements d’équilibrage dynamique et statique, de contrôle par ultrasons et de détection de défauts par magnétoscopie, tout en appliquant intégralement le système de management de la qualité ISO 9001 sur l’ensemble du cycle de production.',
        },
      ],
      image: '/images/step2-manufacturing.jpg',
    },
    {
      number: 'Étape 3',
      name: 'Construction',
      subtitle: 'Installation sur site et mise en service',
      description:
        'Déploiement d’équipes d’ingénieurs expérimentés directement sur site pour superviser le montage mécanique, les essais à vide et la mise en service en charge complète.',
      summary:
        'Déploiement d’équipes d’ingénieurs professionnels expérimentés directement sur site pour réaliser efficacement l’installation des équipements, la mise en service individuelle des machines et les essais intégrés sur l’ensemble de la ligne.',
      features: [
        {
          title: 'Supervision professionnelle sur site',
          description:
            'Accompagnement du montage et de la mise en service en s’appuyant sur plus de 20 ans d’expérience de chantier et plus de 400 projets mondiaux pour garantir un travail sûr et standardisé sur terrains complexes.',
        },
        {
          title: 'Installation et essais de précision',
          description:
            'Étalonnage rigoureux des structures mécaniques, des systèmes d’entraînement et des nœuds de contrôle automatisé, suivi d’essais de fonctionnement machine par machine.',
        },
        {
          title: 'Essais intégrés systématiques',
          description:
            'Exécution de la mise en service automatisée sur l’ensemble du procédé afin d’assurer l’intégration dynamique et l’atteinte stable de la capacité nominale pour toute la ligne de traitement minéral.',
        },
      ],
      image: '/images/step3-flotation-line.png',
    },
    {
      number: 'Étape 4',
      name: 'Gestion',
      subtitle: 'Exploitation et optimisation continue',
      description:
        'Formation complète du personnel et suivi opérationnel à long terme pour optimiser les indicateurs de production et garantir une capacité durable.',
      summary:
        'Formation complète du personnel et suivi opérationnel à long terme pour optimiser les indicateurs de production et garantir une capacité durable.',
      features: [
        {
          title: 'Formation sur mesure du personnel',
          description:
            'Formation intégrée couvrant la théorie, la conduite pratique et la maintenance des équipements pour les équipes locales du client, leur permettant de développer rapidement une autonomie complète d’exploitation et de maintenance (O&M).',
        },
        {
          title: 'Suivi des performances et optimisation',
          description:
            'Surveillance dynamique des indicateurs d’économie d’énergie, de réduction des consommables et de taux de récupération, maximisant la valeur de la ligne grâce aux mises à niveau d’automatisation et au réglage fin du procédé.',
        },
        {
          title: 'Support après-vente mondial rapide',
          description:
            'Appui sur une assistance téléphonique 24h/24, des centres de service nationaux et internationaux et des stocks complets de pièces de rechange pour fournir un support technique rapide aux projets miniers du monde entier.',
        },
      ],
      image: '/images/services-workers.png',
    },
  ]

  const currentSection = mining.miningEquipment
  const recommendedProducts = [
    {
      slug: 'xcf-kyf-flotation-cell',
      name: 'Cellule de flottation type XCF-II / KYF-II',
      description:
        'Machine de flottation à aération forcée pour les opérations de dégrossissage, d’épuisement et de relavage.',
      image: '/images/About_us.jpg',
    },
    {
      slug: 'bf-flotation-cell',
      name: 'Cellule de flottation BF',
      description:
        'Cellule de flottation agitée à air forcé de grande capacité pour l’expansion des usines de traitement des minéraux.',
      image: '/images/image.png',
    },
    {
      slug: 'linear-vibrating-screen',
      name: 'Crible vibrant linéaire',
      description:
        'Criblage à haute efficacité et faible consommation d’énergie pour l’égouttage, le déschlammage et la classification.',
      image: '/images/linear-vibrating-screen.jpg',
    },
  ]
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  useEffect(() => {
    const step = Number(new URLSearchParams(window.location.search).get('step'))
    if (Number.isInteger(step) && step >= 0 && step < steps.length) {
      setActiveStepIndex(step)
    }
  }, [steps.length])

  const activeStep = steps[activeStepIndex]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader lang="fr" altHref="/en/epc" />
      <main className="flex-1">
        <BreadcrumbNav
          lang="fr"
          items={[
            { label: breadcrumb.home, href: '/fr' },
            { label: breadcrumb.mining },
          ]}
        />

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <EpcProcess
            steps={steps}
            ariaLabel="Étapes du projet EPCM"
            onActiveStepChange={(_, index) => {
              setActiveStepIndex(index)
            }}
          />
        </section>

        <section className="mx-auto max-w-[1600px] px-6 py-14 lg:px-10">
          <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden="true" />
            {mining.lastUpdated}
          </div>

          <p className="mx-auto mt-8 max-w-[77rem] text-balance text-center text-xl leading-relaxed text-foreground/85">
            {activeStep.summary}
          </p>
          {activeStep.features.length > 0 ? (
            <div className="mx-auto mt-8 grid max-w-[77rem] gap-14 sm:grid-cols-3">
              {activeStep.features.map((feature) => (
                <div key={feature.title} className="flex gap-3 text-left">
                  <span className="mt-1 text-accent" aria-hidden="true">✓</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {activeStepIndex === 0 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/angola.jpg" alt="Projet de tantale et niobium en Angola" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Projet de tantale et niobium en Angola</p>
            </div>
          ) : null}
          {activeStepIndex === 2 ? (
            <div className="mx-auto mt-8 max-w-5xl">
              <Image src="/images/step3-site-commissioning.png" alt="Projet minier de cuivre-plomb-zinc-soufre dans la province du Qinghai à 4 700 m d’altitude" width={1920} height={1080} className="h-auto w-full object-cover" />
              <p className="mt-3 text-center text-sm text-muted-foreground">Projet minier de cuivre-plomb-zinc-soufre dans la province du Qinghai à 4 700 m d’altitude</p>
            </div>
          ) : null}
          <div className="mt-6 flex justify-center">
            <Link
              href="/fr/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-all hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {currentSection.contactExperts}
            </Link>
          </div>
        </section>

        {activeStepIndex === 1 ? <section className="mx-auto max-w-[1600px] px-6 pb-20 lg:px-10">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            {currentSection.recommendedHeading}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {recommendedProducts.map((product) => (
              <div key={product.name} className="flex flex-col">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover scale-[1.15]"
                  />
                </div>
                <div className="cut-bl flex flex-1 flex-col justify-between gap-4 bg-secondary p-6 text-secondary-foreground">
                  <div>
                    <h3 className="font-heading text-xl font-bold">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/75">
                      {product.description}
                    </p>
                  </div>
                  <Link
                    href={`/fr/products/${product.slug}`}
                    className="cta-swap inline-flex h-9 w-fit items-center justify-center rounded-none bg-primary px-6 text-sm font-medium text-primary-foreground shadow-xs transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {currentSection.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section> : null}
      </main>
      <SiteFooter lang="fr" />
    </div>
  )
}
