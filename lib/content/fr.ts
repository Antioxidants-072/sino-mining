import type { SiteContent } from './types'
import { frProductsPart1 } from './fr-products-1'
import { frProductsPart2 } from './fr-products-2'

export const fr: SiteContent = {
  brandName: 'SINOMINING',
  header: {
    utilityLinks: [
      { label: 'Accueil', href: '/' },
      { label: 'À propos', href: '/about' },
      { label: 'Produits', href: '/products' },
      { label: 'Réalisations', href: '/success-stories' },
      { label: 'EPCM', href: '/epc' },
      { label: 'Contacter les ventes', href: '/contact' },
    ],
    productLinks: [
      { label: 'EPC de traitement des minéraux', href: '/epc' },
      { label: 'Équipements de traitement des minéraux', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
    ],
    contactSales: 'Contacter les ventes',
    searchLabel: 'Rechercher',
    searchPlaceholder: 'Rechercher des produits ou des actualités…',
    searchNoResults: 'Aucun résultat correspondant',
    searchSectionProducts: 'Produits',
    searchSectionNews: 'Actualités',
    searchSeeAll: 'Tout voir',
    searchAllProductsLabel: 'Parcourir tous les produits',
    searchAllNewsLabel: 'Parcourir toutes les actualités',
    langLabel: 'Changer de langue',
    langSwitchLabel: 'Français',
    availableLanguages: [
      { code: 'zh', label: 'Chinois',   nativeName: '中文',     flag: '🇨🇳', available: true },
      { code: 'en', label: 'Anglais',   nativeName: 'English',  flag: '🇬🇧', available: true },
      { code: 'es', label: 'Espagnol',  nativeName: 'Español',  flag: '🇪🇸', available: true },
      { code: 'ru', label: 'Russe',     nativeName: 'Русский',  flag: '🇷🇺', available: true },
      { code: 'fr', label: 'Français',  nativeName: 'Français', flag: '🇫🇷', available: true },
    ],
  },
  footer: {
    description:
      'Anhui Sinomining Machinery fournit des solutions complètes d’équipements miniers de bout en bout à ses clients dans le monde entier.',
    columns: [
      {
        title: 'Entreprise',
        links: ['À propos de nous', 'Partenaires'],
      },
      {
        title: 'Activités',
        links: [
          'Solutions',
          'EPC de traitement des minéraux',
          'Équipements de traitement des minéraux',
        ],
      },
      {
        title: 'Contact',
        links: ['Implantations', 'Contacter les ventes'],
      },
    ],
    copyright: '© 2026 AnHui Sinomining Machinery. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
  },
  hero: {
    slides: [
      {
        titleLines: [
          'Fournisseur EPCM de classe mondiale en traitement des minéraux',
          'Sinomining Machinery',
        ],
        subtitle:
          'Essais de minerais · Conception minière · Fabrication · Mise en service · Formation du personnel',
        cta: 'En savoir plus',
        image: '/images/hero-epc-service.png',
        imageAlt:
          'Site moderne de traitement des minéraux EPC avec une mine à ciel ouvert et des ingénieurs inspectant les équipements',
      },
      {
        titleLines: [
          'Votre partenaire de confiance en services miniers',
          'de bout en bout',
        ],
        subtitle: 'Vous fixez l’objectif. Nous fournissons la solution.',
        cta: 'En savoir plus',
        image: '/images/hero-mining-pit.png',
        imageAlt:
          'Vue aérienne d’une grande mine à ciel ouvert montrant des parois rocheuses en gradins et des camions de transport',
      },
      {
        titleLines: [
          'Leader en Chine, expert de calibre mondial',
          'en équipements de traitement des minéraux / cellules de flottation',
        ],
        subtitle: 'Technologie de pointe. Performances exceptionnelles.',
        cta: 'Voir les produits',
        image: '/images/hero-flotation-workshop.png',
        imageAlt:
          'Rangées de cellules de flottation en fonctionnement dans une usine moderne de traitement des minéraux avec passerelles en acier',
      },
    ],
  },
  aboutTeaser: {
    eyebrow: 'À propos de nous',
    title: 'Deux décennies d’expertise en équipements miniers',
    body: 'Fondée en 1958, Anhui Sinomining Machinery intègre la R&D, la conception, la fabrication et les services pour fournir des solutions complètes de traitement des minéraux dans plus de 20 provinces et à des clients du monde entier.',
    stats: [
      { value: '1958', label: 'Fondation' },
      { value: '120 000 m²', label: 'Superficie totale' },
      { value: '280+', label: 'Professionnels' },
    ],
    image: '/images/About_us.jpg',
    imageAlt: 'Équipe d’ingénierie d’Anhui Sinomining Machinery au travail',
    cta: 'À propos de nous',
  },
  businessGrid: {
    heading: 'Nos activités',
    subtitle:
      'Maîtriser le traitement des minéraux, fournir des solutions EPCM de bout en bout.',
    items: [
      {
        title: 'Ingénierie',
        description:
          'Essais métallurgiques, conception minière et planification des procédés pour des projets performants.',
        image: '/images/mining-plant.png',
        alt: 'Site complet d’ingénierie d’usine de traitement des minéraux',
        cta: 'En savoir plus',
      },
      {
        title: 'Fabrication',
        description:
          'Fabrication interne avec contrôle qualité rigoureux et livraison fiable pour des usines de traitement complètes.',
        image: '/images/step2-production-workshop.png',
        alt: 'Atelier de production et équipements de fabrication',
        cta: 'En savoir plus',
      },
      {
        title: 'Construction',
        description:
          'Installation, mise en service et construction d’usines sûres et précises.',
        image: '/images/step3-flotation-line.png',
        alt: 'Ligne de traitement des minéraux et équipements sur site',
        cta: 'En savoir plus',
      },
      {
        title: 'Gestion',
        description:
          'Planification de projet, formation et soutien opérationnel pour une performance durable.',
        image: '/images/services-workers.png',
        alt: 'Deux ingénieurs miniers effectuant la maintenance d’un équipement de concassage',
        cta: 'En savoir plus',
      },
    ],
  },
  latestReleases: {
    heading: 'Dernières publications',
    allLink: 'Toutes les publications',
  },
  contactCTA: {
    heading: 'Contactez-nous',
    description:
      'AnHui Sinomining Machinery et ses distributeurs offrent un service personnalisé où que vous soyez. Trouvez les contacts commerciaux et techniques ainsi que des informations générales ou soumettez une demande commerciale.',
    cta: 'Accéder aux contacts',
  },
  breadcrumb: {
    home: 'Accueil',
    mining: 'Exploitation minière',
    crushing: 'Concassage',
    newsroom: 'Actualités',
    allProducts: 'Tous les produits',
  },
  productsPage: {
    heading: 'Tous les produits',
    subtitle:
      'Gamme complète d’équipements pour le concassage, le criblage, le traitement des minéraux, l’alimentation et la manutention des matériaux, conçue pour une chaîne de production complète de la mine au port.',
    allLabel: 'Toutes les catégories',
    viewDetails: 'Voir les détails',
    resultsLabelTemplate: '{count} produits',
    categories: [
      { id: 'flotation', label: 'Équipements de flottation' },
      { id: 'agitation', label: 'Équipements d’agitation' },
      { id: 'thickening', label: 'Équipements d’épaississement' },
      { id: 'screening', label: 'Équipements de criblage' },
      { id: 'milling', label: 'Équipements de broyage à boulets' },
      { id: 'magnetic', label: 'Séparation magnétique' },
      { id: 'gravity', label: 'Séparation gravimétrique' },
      { id: 'filtration', label: 'Filtration et séchage' },
      { id: 'conveying', label: 'Convoyage et alimentation' },
      { id: 'production', label: 'Lignes de production' },
      { id: 'crushers', label: 'Équipements de concassage' },
      { id: 'mining', label: 'Équipements miniers' },
    ],
    products: [...frProductsPart1, ...frProductsPart2],
  },
  mining: {
    tabs: ['Équipements miniers', 'Convoyage et alimentation'],
    heroTitle: 'Exploitation minière',
    heroSubtitle: 'Équipements miniers fiables et solutions de convoyage',
    heroAlt: 'Équipements miniers et systèmes de convoyage',
    lastUpdated: 'Dernière mise à jour : août 2026',
    miningEquipment: {
      title: 'Équipements miniers',
      subtitle: 'Équipements miniers fiables et solutions de convoyage',
      body: 'Anhui Sinomining Machinery propose des solutions complètes d’équipements miniers comprenant des molettes de puits, des skips, des cages de mine, des berlines, des pousseurs de berlines, des taquets d’arrêt et d’autres équipements clés pour des systèmes d’extraction par puits fiables.',
      contactExperts: 'Contactez nos experts commerciaux',
      recommendedHeading: 'Produits recommandés',
      viewDetails: 'Voir les détails',
      products: [
        {
          slug: 'mine-sheave-wheel',
          categoryId: 'mining',
          name: 'Molette de mine',
          description:
            'Robuste et durable, avec d’excellentes performances de sécurité, une forte capacité de charge, une excellente résistance aux défaillances ainsi qu’une utilisation et une maintenance aisées.',
          image: '/images/mine-sheave-wheel.jpg',
        },
        {
          slug: 'skip',
          categoryId: 'mining',
          name: 'Skip',
          description:
            'Poids réduit, faible puissance moteur, rendement élevé ; chargement et déchargement mécanisés, temps de cycle court et grande capacité de traitement.',
          image: '/images/skip.jpg',
        },
        {
          slug: 'cage',
          categoryId: 'mining',
          name: 'Cage de mine',
          description:
            'Large plage d’applications, adaptée aux puits de différentes profondeurs ; haute sécurité, faible consommation d’énergie et longue durée de vie.',
          image: '/images/cage.jpg',
        },
      ],
    },
    conveying: {
      title: 'Convoyage et alimentation',
      subtitle: 'Équipements performants de convoyage et d’alimentation',
      body: 'Anhui Sinomining Machinery fournit des convoyeurs, des alimentateurs à tablier métallique et d’autres équipements de convoyage et d’alimentation de structure simple et de fonctionnement fiable, largement utilisés dans la manutention de matériaux miniers.',
      contactExperts: 'Contactez nos experts commerciaux',
      recommendedHeading: 'Produits recommandés',
      viewDetails: 'Voir les détails',
      products: [
        {
          slug: 'screw-conveyor',
          categoryId: 'conveying',
          name: 'Convoyeur à vis',
          description:
            'Structure simple, section transversale compacte, bonne étanchéité, fonctionnement fiable et faible coût de fabrication.',
          image: '/images/screw-conveyor.jpg',
        },
        {
          slug: 'heavy-duty-apron-feeder',
          categoryId: 'conveying',
          name: 'Alimentateur à tablier lourd',
          description:
            'Robuste et durable avec une grande fiabilité, régulation de vitesse par variateur de fréquence pour l’alimentation, adapté à diverses conditions minières.',
          image: '/images/heavy-duty-apron-feeder.png',
        },
        {
          slug: 'car-pusher',
          categoryId: 'mining',
          name: 'Pousseur de berlines',
          description:
            'Faible taux de défaillance, maintenance aisée, régulation pratique de la vitesse, qualité fiable et longue durée de vie.',
          image: '/images/car-pusher.jpg',
        },
      ],
    },
  },
  newsroom: {
    heading: 'Actualités',
    subtitle:
      'Restez informé des derniers lancements de produits, partenariats de projets et actualités d’AnHui Sinomining Machinery.',
  },
  releases: [
    {
      slug: 'xcf-kyf-50-trial-run',
      category: 'Actualités de l’entreprise',
      date: '22 avril 2022 09:01',
      title:
        'Sinomining Machinery félicite son client pour le succès des essais de mise en service de la machine de flottation XCF/KYF de 50 m³ !',
      excerpt:
        'Depuis des années, Sinomining Machinery se consacre aux équipements de traitement des minéraux pour les mines métalliques. Ses machines de flottation ont été déployées avec succès dans des mines métalliques de grande envergure, acquérant une large reconnaissance dans l’industrie.',
      image: '/images/news/image1.jpg',
    },
    {
      slug: 'hpgr-iron-ore',
      category: 'Actualités du secteur',
      date: '22 avril 2021 10:53',
      title: 'Presse à rouleaux haute pression (HPGR)',
      excerpt:
        'La presse à rouleaux haute pression (HPGR) est un nouveau type d’équipement de concassage à haute efficacité et économe en énergie développé au milieu des années 1980, offrant un débit élevé, une granulométrie fine, un rendement supérieur et un taux de disponibilité élevé.',
      image: '/images/news/image2.jpg',
    },
  ],
  pressReleaseDetails: [
    {
      slug: 'xcf-kyf-50-trial-run',
      kind: 'press-release',
      category: 'Actualités de l’entreprise',
      date: '22 avril 2022 09:01',
      title:
        'Sinomining Machinery félicite son client pour le succès des essais de mise en service de la machine de flottation XCF/KYF de 50 m³ !',
      heroImage: '/images/flotation-machine.png',
      heroAlt:
        'Vue sur site de la machine de flottation XCF/KYF de 50 m³, célébrant un essai de mise en service réussi',
      sections: [
        {
          body: 'Depuis des années, Sinomining Machinery se consacre aux équipements de traitement des minéraux pour les mines métalliques. Ses machines de flottation ont été appliquées avec succès dans de grandes mines métalliques, suscitant une large reconnaissance et de vifs éloges dans l’industrie. Couvrant les secteurs des métaux non ferreux et des minéraux non métalliques, Sinomining s’aligne sur la tendance de développement de l’industrie minière métallique vers des opérations à grande échelle, intelligentes et à fort volume. Ses équipements fonctionnent de manière fiable grâce à une technologie de pointe, offrant d’excellents indicateurs minéralurgiques et des taux de récupération élevés.',
        },
        {
          body: 'Sinomining Machinery couvre une superficie de 180 mu (environ 12 hectares) avec 60 000 mètres carrés d’usines de fabrication modernes. Elle est reconnue comme Entreprise nationale de haute technologie, membre du comité d’experts du Comité national des machines minières, fournisseur de services d’excellence dans l’industrie aurifère chinoise, entreprise provinciale « Spécialisée, Raffinée, Différenciée et Innovante » (SRDI) et station provinciale de recherche postdoctorale. Sinomining a participé à la rédaction de 8 normes nationales et détient plus de 50 brevets nationaux. Ses produits phares comprennent les machines de flottation, les colonnes de flottation, les cuves d’agitation et les épaississeurs. En tant que grande entreprise spécialisée intégrant la R&D, la conception, la fabrication, l’installation, la mise en service et l’exploitation d’équipements miniers, Sinomining se consacre depuis longtemps à la conception technique, aux services techniques et à la fabrication dans les domaines du traitement des minéraux, de la métallurgie, de la chimie et de la protection de l’environnement.',
        },
      ],
      backLabel: 'Retour aux actualités',
      backHref: '/fr/newsroom',
      contactCta: 'Contactez nos experts commerciaux',
      productsLabel: 'Voir les produits associés',
      productsHref: '/products',
    },
    {
      slug: 'hpgr-iron-ore',
      kind: 'press-release',
      category: 'Actualités du secteur',
      date: '22 avril 2021 10:53',
      title: 'Presse à rouleaux haute pression (HPGR)',
      heroImage: '/images/crushing-equipment.png',
      heroAlt:
        'Schéma d’une presse à rouleaux haute pression montrant deux rouleaux contrarotatifs',
      sections: [
        {
          body: 'La presse à rouleaux haute pression (HPGR) est un nouveau type d’équipement de concassage très efficace et économe en énergie développé au milieu des années 1980. Au début de son application industrielle, limitée par la technologie de résistance à l’usure de la surface des rouleaux, elle était principalement utilisée dans l’industrie cimentière. Avec la maturation des technologies clés — telles que les surfaces de rouleaux à goujons résistants à l’usure, les entraînements par coupleur hydraulique et les liaisons directes des arbres de rouleaux par arbres à cardan — elle a été appliquée avec succès dans les mines métalliques en Chine et à l’international, en particulier dans les mines de minerai de fer, pour concasser des minerais métalliques de dureté moyenne à élevée. La presse HPGR se caractérise par une grande capacité de traitement, une granulométrie fine du produit, une efficacité de concassage élevée et un taux de disponibilité élevé, ce qui en fait un équipement idéal pour le concassage fin et ultrafin du minerai de fer. En combinant les pratiques historiques de production du traitement du minerai de fer, cet article passe en revue les procédés de concassage HPGR et leurs applications industrielles dans la comminution du minerai de fer.',
        },
        {
          heading: '1. Caractéristiques structurelles et principe de fonctionnement du HPGR',
          body: 'Bien que similaire par sa structure aux concasseurs à deux cylindres dotés de deux rouleaux de travail, la presse HPGR fonctionne selon un principe de concassage totalement différent. Elle se compose d’un bâti, de rouleaux de travail haute pression, d’un système hydraulique et d’un système d’alimentation. Les composants de travail clés sont une paire de rouleaux haute pression disposés en parallèle qui tournent en sens inverse. Chaque rouleau est entraîné par un moteur via un réducteur planétaire ; le rouleau fixe reste stationnaire, tandis que le rouleau mobile se déplace le long de glissières horizontales. Le système hydraulique agissant sur l’arbre du rouleau mobile applique une pression de travail extrêmement élevée (jusqu’à 300 MPa) sur les surfaces des rouleaux.',
        },
        {
          body: 'Le principe de fonctionnement de la presse HPGR repose sur le concassage interparticulaire (broyage en lit de matière), proposé par le professeur Schönert en Allemagne à la fin des années 1970, qui guide depuis lors la conception et la modernisation des équipements de comminution économes en énergie. Pendant le fonctionnement, le matériau d’alimentation entre dans la cavité de concassage située entre les deux rouleaux à travers une trappe réglable en condition d’alimentation en charge. Entraîné conjointement par le poids de la colonne de matériau et la rotation opposée des deux rouleaux, le matériau est forcé dans la cavité de concassage convergente et compacté. Lorsqu’il atteint une certaine pression, le matériau se fragmente et est évacué sous forme de galettes denses microfissurées. Ces galettes contiennent une forte proportion de particules fines et ultrafines ainsi que des microfissures internes, ce qui réduit considérablement leur résistance mécanique et augmente indirectement le débit et l’efficacité de broyage des broyeurs situés en aval. Le principe du concassage interparticulaire du HPGR est illustré à la Figure 1.',
        },
        {
          heading: 'Figure 1 : Schéma du principe de concassage interparticulaire dans une presse HPGR',
          image: '/images/news/image1.jpg',
          imageAlt: 'Schéma du principe de concassage interparticulaire dans une presse HPGR',
        },
        {
          heading: '2. Schémas de procédé de concassage typiques',
          body: 'Dans les schémas de concassage conventionnels, la presse HPGR est principalement utilisée comme équipement de concassage fin tertiaire ou de concassage ultrafin quaternaire au sein d’un procédé à trois étages et un seul circuit fermé. Les schémas typiques se répartissent en procédés en circuit ouvert et en circuit fermé ; les circuits fermés se divisent eux-mêmes en circuits fermés avec recyclage des bords et en circuits fermés avec criblage de contrôle. Les schémas de concassage typiques sont présentés à la Figure 2.',
        },
        {
          heading: 'Figure 2 : Schémas typiques de concassage avec presse HPGR',
          image: '/images/news/image2.jpg',
          imageAlt: 'Diagramme des schémas typiques de concassage avec presse HPGR',
        },
      ],
      backLabel: 'Retour aux actualités',
      backHref: '/fr/newsroom',
      contactCta: 'Contactez nos experts commerciaux',
      productsLabel: 'Voir les produits associés',
      productsHref: '/products',
    },
  ],
  about: {
    slug: 'about',
    kind: 'about',
    title: 'À propos de nous',
    subtitle:
      'Deux décennies d’expertise dans les équipements miniers, offrant des solutions de bout en bout aux clients du monde entier',
    heroImage: '/images/About_us.jpg',
    heroAlt: 'Usine moderne et installations de R&D d’Anhui Sinomining Machinery',
    facts: [
      { label: 'Fondation', value: '1958' },
      { label: 'Superficie totale', value: '120 000 m²' },
      { label: 'Ateliers, bureaux et R&D', value: '60 000 m²' },
      { label: 'Professionnels spécialisés', value: '280+' },
    ],
    sections: [
      {
        heading: 'Présentation de l’entreprise',
        body: 'Anhui Sinomining Machinery Co., Ltd. tire ses origines de 1958 et dispose d’un capital social de 110 millions de RMB. Spécialisée dans la production d’équipements de traitement des minéraux — notamment des machines de flottation, des cuves d’agitation, des épaississeurs et des systèmes de dosage automatique — ainsi que dans les contrats généraux EPC clés en main pour les usines de traitement, c’est une grande entreprise spécialisée intégrant la R&D, la conception technique, la fabrication, l’installation, la mise en service et l’exploitation. L’entreprise se consacre depuis longtemps à la conception, à la fabrication et aux services techniques d’équipements pour le traitement des minéraux, la métallurgie, la chimie et la protection de l’environnement.\n\nAnhui Sinomining Machinery est reconnue comme Entreprise nationale de haute technologie, membre du comité d’experts du Comité national des machines minières et unité de rédaction de 6 normes industrielles nationales. Elle a obtenu des titres prestigieux tels que « Fournisseur de services d’excellence de l’industrie aurifère chinoise », « Station provinciale de recherche postdoctorale », « Entreprise provinciale SRDI », « Centre technologique d’entreprise municipal de Huaibei » et « Usine verte de Huaibei ».\n\nÉtablie en 2008, l’entreprise est située au cœur de la zone de développement économique de Suixi, dans la province de l’Anhui. Le site couvre une superficie de 120 000 mètres carrés, abritant 60 000 mètres carrés d’ateliers standardisés modernes, de bureaux et d’un centre de R&D, entièrement équipés en infrastructures d’eau, d’électricité, d’internet et de transport routier.\n\nL’usine de fabrication exploite actuellement plus de 160 ensembles d’équipements d’usinage avancés, notamment des centres d’usinage, des tours CNC, des grenailleuses, des aléseuses-fraiseuses, des machines d’oxycoupage, des rouleuses de tôles et des machines de soudage à l’arc submergé. Anhui Sinomining emploie plus de 280 collaborateurs, dont plus de 60 techniciens et ingénieurs de niveau intermédiaire et supérieur.',
      },
      {
        heading: 'R&D et technologie',
        body: 'Anhui Sinomining dispose d’une équipe interne dédiée à la R&D et à la recherche scientifique, se concentrant principalement sur les mises à niveau techniques et les procédés de fabrication des machines de flottation, épaississeurs, systèmes de dosage, cuves d’agitation et leurs systèmes de contrôle automatisé associés.\n\nL’entreprise détient actuellement plus de 70 brevets nationaux autorisés. S’appuyant sur des technologies étrangères importées, Anhui Sinomining améliore continuellement ses gammes de produits en fonction des conditions réelles de terrain, garantissant à la fois leur applicabilité et leur supériorité technologique.\n\nL’entreprise entretient des programmes de R&D collaboratifs avec des institutions renommées telles que la Central South University, la Northeastern University, la China University of Mining and Technology et l’University of Science and Technology Beijing. Grâce à ces partenariats, Anhui Sinomining a développé des technologies de pointe — telles que la décharge à sec des résidus miniers — qui atteignent les normes nationales et internationales les plus élevées.',
      },
      {
        heading: 'Qualité et service après-vente',
        body: 'Anhui Sinomining est certifiée selon le système de management de la qualité ISO9001, le système de management environnemental ISO14001 et le système de management de la santé et de la sécurité au travail ISO45001. La philosophie opérationnelle fondamentale de l’entreprise est « Établir l’intégrité, stimuler l’innovation, fournir des services de qualité et atteindre la satisfaction client ».\n\nAnhui Sinomining exploite un réseau complet de service après-vente avec des centres de service localisés dans plus de 20 provinces, régions autonomes et municipalités en Chine.\n\nEngagement de service : dès réception des demandes des clients par téléphone ou par fax, l’équipe de service répond dans les 10 minutes, fournit une solution de dépannage dans un délai d’une heure et arrive sur site dans les 24 heures pour diagnostiquer, réparer ou remplacer les composants. Une ligne d’assistance dédiée 24h/24 et 7j/7 (+86-18805856690) est disponible en permanence.',
      },
      {
        heading: 'Références et réalisations',
        list: [
          'Métaux non ferreux : réalisation de grands projets nationaux, notamment l’extension de la mine de plomb-zinc de 1,5 Mt/an de Western Mining, le projet plomb-zinc de 2 000 t/j de MCC Group à une altitude extrême de 4 700 mètres, le projet plomb-zinc de 5 000 t/j de Hunan Linwu Nanfang Mining, Sichuan Tianqi Lithium et le traitement des scories de cuivre de China Nerin Engineering. Coopération technique approfondie avec China Gold, Chinalco, China Minmetals, Western Mining, Western Gold et Jinguai Silver',
          'Métaux ferreux : déploiement d’équipements en production commerciale complète au sein de grandes entreprises minières telles que Chongqing Iron & Steel, Pangang Group, Baosteel Xinjiang Bayi Iron & Steel, Lingang Group et Hesteel Group',
          'Phosphates et engrais composés : exécution de projets clés comprenant la mine de phosphate de 6 Mt/an de CNOOC Hubei Dayukou, Yihua Group, Zhongfu Chemical, Hubei Xinyangfeng et Chongqing Fuling Chemical',
          'Minéraux non métalliques : solide expérience établie dans les secteurs du traitement du graphite, du charbon et du quartz',
        ],
      },
      {
        heading: 'Marque et vision mondiale',
        body: 'Titulaire de droits d’importation et d’exportation indépendants, Anhui Sinomining exporte ses produits dans plus de 20 pays et régions, dont le Chili, le Pérou, la Russie, la République démocratique du Congo, la Zambie, le Soudan, le Vietnam, les Philippines, le Kazakhstan et le Laos. En tant que membre du comité d’experts du Comité national des machines minières, Anhui Sinomining s’aligne sur les plus grandes marques mondiales, poursuivant sa vision à long terme de bâtir une marque internationale durable et d’accompagner la transformation de l’industrie minière mondiale.',
      },
    ],
    backLabel: 'Retour à l’accueil',
    backHref: '/fr',
    contactCta: 'Contactez nos experts commerciaux',
    productsLabel: 'Parcourir tous les produits',
    productsHref: '/products',
  },
  contactPage: {
    heading: 'Contactez-nous',
    subtitle:
      'Sinomining assure un service avant-vente et après-vente réactif et efficace. Soumettez votre demande via le formulaire ci-dessous ou contactez-nous directement.',
    heroImage: '/images/mining-plant.png',
    heroAlt: 'Vue aérienne d’une grande usine de traitement des minéraux dans le désert',
    hotlineLabel: 'Téléphone de renseignement',
    hotline: '+86 18805856690',
    formHeading: 'Envoyer une demande commerciale',
    formNameLabel: 'Nom complet',
    formCompanyLabel: 'Nom de l’entreprise',
    formEmailLabel: 'Adresse e-mail',
    formPhoneLabel: 'Numéro de téléphone',
    formMessageLabel: 'Message',
    formMessagePlaceholder:
      'Parlez-nous de votre projet, des caractéristiques du minerai et de la capacité de traitement visée',
    formSubmitLabel: 'Envoyer la demande',
    officesHeading: 'Nos bureaux',
    offices: [
      {
        region: 'Usine en Chine (Huaibei, Anhui)',
        address:
          'Zone de développement économique de Suixi, Huaibei, Anhui, Chine',
        phone: '+86 15212631188',
        landline: '+86 18805856690',
        email: 'a87945298@163.com',
      },
      {
        region: 'Bureau (Hangzhou, Zhejiang)',
        address: 'Qianjiang New City Phase II, Hangzhou, Zhejiang, Chine',
        phone: '+86 18805856690',
        landline: '+86 18658113082',
        email: 'marketing1@ahznkjzz.com',
      },
    ],
  },
}
