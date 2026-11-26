// Product 9: https://sinominingmach.com/pd.jsp?fromColId=106&id=9
// Preserve the source order and all eight points, including the repeated discharge adjustment.
const translations = {
  en: {
    labels: ['Application range', 'Product advantages', 'Performance features', 'Working principle', 'Technical parameters'],
    applicationRange: 'Medium-size crushing of various ores and bulk materials in mining, smelting, building materials, road and railway construction, water conservancy and the chemical industry.',
    advantages: ['Long service life, with low maintenance and failure rates.'],
    features: [
      'The crushing chamber is deep and has no dead zones, increasing feed capacity and output.',
      'The crushing ratio is high, and the product particle size is uniform.',
      'The shim-type discharge opening adjustment device is reliable and convenient, with a wide adjustment range that increases equipment flexibility.',
      'The lubrication system is safe and reliable, parts are easy to replace, and equipment maintenance and servicing are simple.',
      'The structure is simple, operation is reliable, and operating costs are low.',
      'Energy savings: the individual machine saves 15%–30% of energy; system-level energy savings are more than twofold.',
      'The discharge opening has a wide adjustment range to meet the requirements of different users.',
      'Low noise and little dust.',
    ],
    workingPrinciple: 'The main structure of the jaw crusher is similar to that of a conventional jaw crusher. It comprises a frame, eccentric shaft, belt pulley, side guard wheels, toggle plate, clearance adjustment screw, return spring, fixed jaw plate, moving jaw plate and other components. The European-style jaw crusher also uses compression with a curved jaw motion. During operation, the motor drives the belt and pulley, and the eccentric shaft moves the moving jaw up and down. As the moving jaw rises, the angle between the toggle plate and the moving jaw increases, pushing the moving jaw plate towards the fixed jaw plate. The material is broken between the two plates by squeezing, pressing, rubbing and grinding. As the moving jaw descends, the angle decreases and the pull rod and spring draw the moving jaw plate away from the fixed jaw plate. The crushed material discharges freely under gravity through the opening at the bottom of the crushing chamber. The European-style jaw crusher therefore operates intermittently, with crushing and discharge alternating in the chamber. As the motor continues to rotate, the moving jaw repeatedly crushes and discharges material, enabling production in quantity.',
  },
  es: {
    labels: ['Campo de aplicación', 'Ventajas del producto', 'Características de funcionamiento', 'Principio de funcionamiento', 'Parámetros técnicos'],
    applicationRange: 'Trituración a tamaño medio de distintos minerales y materiales de gran tamaño en minería, fundición, materiales de construcción, carreteras, ferrocarriles, obras hidráulicas e industria química.',
    advantages: ['Larga vida útil, con baja frecuencia de mantenimiento y de averías.'],
    features: [
      'La cámara de trituración es profunda y carece de zonas muertas, lo que aumenta la capacidad de alimentación y la producción.',
      'La relación de trituración es elevada y el tamaño de las partículas del producto es uniforme.',
      'El dispositivo de ajuste de la abertura de descarga mediante calces es fiable y práctico. Su amplio intervalo de ajuste aumenta la flexibilidad del equipo.',
      'El sistema de lubricación es seguro y fiable, las piezas son fáciles de sustituir y el mantenimiento y el cuidado del equipo son sencillos.',
      'La estructura es sencilla, el funcionamiento es fiable y los costes de operación son bajos.',
      'Ahorro de energía: la máquina por sí sola ahorra entre un 15 % y un 30 % de energía; a escala del sistema, el ahorro energético es más del doble.',
      'La abertura de descarga tiene un amplio intervalo de ajuste para satisfacer los requisitos de distintos usuarios.',
      'Bajo nivel de ruido y poca generación de polvo.',
    ],
    workingPrinciple: 'La estructura principal de la trituradora de mandíbulas es similar a la de una trituradora de mandíbulas convencional. Consta de bastidor, eje excéntrico, polea, ruedas de protección lateral, placa de articulación, tornillo de ajuste de holgura, resorte de retorno y placas de mandíbula fija y móvil, entre otros componentes. La trituradora de mandíbulas de tipo europeo también tritura por compresión con un movimiento curvilíneo. Durante el funcionamiento, el motor acciona la correa y la polea, y el eje excéntrico mueve la mandíbula móvil hacia arriba y hacia abajo. Cuando esta sube, aumenta el ángulo entre la placa de articulación y la mandíbula móvil, lo que empuja la placa móvil hacia la fija. El material se fragmenta entre ambas placas por compresión, presión, fricción y molienda. Cuando la mandíbula móvil baja, el ángulo disminuye y la placa móvil se separa de la fija por la acción del tirante y del resorte. El material triturado sale libremente por gravedad a través de la abertura inferior de la cámara. Por tanto, la trituradora de mandíbulas de tipo europeo funciona de forma intermitente: la trituración y la descarga se alternan en la cámara. Al girar el motor de forma continua, la mandíbula móvil repite los ciclos de trituración y descarga, lo que permite la producción en serie.',
  },
  ru: {
    labels: ['Область применения', 'Преимущества оборудования', 'Эксплуатационные особенности', 'Принцип работы', 'Технические параметры'],
    applicationRange: 'Среднее дробление различных руд и крупнокусковых материалов в горнодобывающей промышленности, металлургии, производстве строительных материалов, дорожном и железнодорожном строительстве, водном хозяйстве и химической промышленности.',
    advantages: ['Длительный срок службы, низкая частота ремонтов и отказов.'],
    features: [
      'Глубокая камера дробления не имеет мёртвых зон, что увеличивает пропускную способность при загрузке и производительность.',
      'Высокая степень дробления и равномерная крупность продукта.',
      'Устройство регулировки разгрузочной щели с помощью прокладок надёжно и удобно. Широкий диапазон регулировки повышает гибкость применения оборудования.',
      'Система смазки безопасна и надёжна, детали легко заменяются, уход за оборудованием и его техническое обслуживание просты.',
      'Простая конструкция, надёжная работа и низкие эксплуатационные расходы.',
      'Энергосбережение: отдельная машина экономит 15–30 % энергии; на уровне системы экономия энергии более чем двукратная.',
      'Широкий диапазон регулировки разгрузочной щели позволяет учитывать требования разных пользователей.',
      'Низкий уровень шума и незначительное пылеобразование.',
    ],
    workingPrinciple: 'По основной конструкции щековая дробилка сходна с традиционной щековой дробилкой. В её состав входят станина, эксцентриковый вал, шкив, боковые защитные колёса, распорная плита, винт регулировки зазора, возвратная пружина, неподвижная и подвижная дробящие плиты и другие детали. Щековая дробилка европейского типа также дробит материал сжатием при криволинейном движении щеки. Во время работы электродвигатель приводит в движение ремень и шкив, а эксцентриковый вал перемещает подвижную щеку вверх и вниз. При подъёме щеки угол между ней и распорной плитой увеличивается, и подвижная дробящая плита приближается к неподвижной. Между плитами материал разрушается под действием сжатия, давления, истирания и раздавливания. При опускании щеки угол уменьшается, и тяга с пружиной отводят подвижную плиту от неподвижной. Измельчённый материал свободно выходит под действием силы тяжести через разгрузочное отверстие внизу камеры. Таким образом, щековая дробилка европейского типа работает прерывисто: дробление и разгрузка в камере чередуются. При непрерывном вращении электродвигателя подвижная щека циклически дробит и разгружает материал, обеспечивая серийное производство.',
  },
  fr: {
    labels: ['Domaine d’application', 'Avantages du produit', 'Caractéristiques de fonctionnement', 'Principe de fonctionnement', 'Paramètres techniques'],
    applicationRange: 'Concassage à granulométrie moyenne de divers minerais et matériaux en gros blocs dans les mines, la métallurgie, les matériaux de construction, les travaux routiers, ferroviaires et hydrauliques et l’industrie chimique.',
    advantages: ['Longue durée de vie et faible fréquence des interventions de maintenance et des pannes.'],
    features: [
      'La chambre de concassage est profonde et ne présente aucune zone morte, ce qui augmente la capacité d’alimentation et la production.',
      'Le rapport de réduction est élevé et la granulométrie du produit est uniforme.',
      'Le dispositif de réglage de l’ouverture de décharge par cales est fiable et pratique. Sa large plage de réglage accroît la souplesse d’utilisation de l’équipement.',
      'Le système de lubrification est sûr et fiable, les pièces sont faciles à remplacer et l’entretien et la maintenance de l’équipement sont simples.',
      'La structure est simple, le fonctionnement fiable et les coûts d’exploitation faibles.',
      'Économies d’énergie : la machine seule économise de 15 à 30 % d’énergie ; à l’échelle du système, les économies d’énergie sont plus que doublées.',
      'La large plage de réglage de l’ouverture de décharge permet de répondre aux besoins de différents utilisateurs.',
      'Faible niveau de bruit et peu de poussière.',
    ],
    workingPrinciple: 'La structure principale du concasseur à mâchoires est similaire à celle d’un concasseur à mâchoires classique. Elle comprend notamment le bâti, l’arbre excentrique, la poulie, les roues de protection latérales, la plaque de poussée, la vis de réglage du jeu, le ressort de rappel et les plaques de mâchoire fixe et mobile. Le concasseur à mâchoires de type européen concasse lui aussi par compression avec un mouvement curviligne. En fonctionnement, le moteur entraîne la courroie et la poulie ; l’arbre excentrique fait monter et descendre la mâchoire mobile. Lorsqu’elle monte, l’angle entre la plaque de poussée et la mâchoire mobile augmente, ce qui rapproche la plaque mobile de la plaque fixe. Le matériau est fragmenté entre les deux plaques par serrage, pression, frottement et broyage. Lorsque la mâchoire mobile descend, cet angle diminue et le tirant et le ressort écartent la plaque mobile de la plaque fixe. Le matériau concassé s’évacue librement par gravité par l’ouverture située au bas de la chambre. Le concasseur à mâchoires de type européen fonctionne donc de manière intermittente : le concassage et la décharge alternent dans la chambre. La rotation continue du moteur permet à la mâchoire mobile de répéter les cycles de concassage et de décharge et d’assurer ainsi la production en série.',
  },
}

export function jawCrusherDetail(lang: keyof typeof translations) {
  const { labels, ...body } = translations[lang]
  return { ...body, catalogOnly: false, applicationLabel: labels[0], advantagesLabel: labels[1], featuresLabel: labels[2], workingPrincipleLabel: labels[3],
    specImage: { caption: labels[4], src: '/images/product-details/jaw-crusher/specifications.jpg', width: 785, height: 434 },
  }
}
