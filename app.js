/**
 * ROSA BRILLANTE - CATÁLOGO REAL & INTERACTIVIDAD
 */

// Teléfono oficial de atención por WhatsApp (México)
const WHATSAPP_PHONE = '522381947741';

function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

// Catálogo Real extraído de la colección Canva
const jewelryProducts = [
  {
    "id": 1,
    "name": "Aretes Colgantes Corazón Pavé & Perla",
    "category": "perlas",
    "tag": "Más Vendido",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_1.png",
    "imageOriginal": "assets/images/aretes/original/arete_1.png",
    "specs": [
      "Doble caída asimétrica en fina cadena veneciana",
      "Corazón calado con incrustaciones en micro-pavé de circonias",
      "Perla esférica nacarada de alto lustre",
      "Broche tipo gancho francés seguro y liviano"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 2,
    "name": "Aretes Largos Corazón Granate & Perla",
    "category": "cristales",
    "tag": "Diseño Romántico",
    "metal": "Chapa de Oro Brillante",
    "imageCropped": "assets/images/aretes/cropped/arete_2.png",
    "imageOriginal": "assets/images/aretes/original/arete_2.png",
    "specs": [
      "Cristal central facetado tono granate en talla corazón",
      "Orla de microcirconias con acabado brillante continuo",
      "Caída de perla nacarada suspendida con micro-gota",
      "Hipoalergénico y ultraligero para uso prolongado"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 3,
    "name": "Aretes Búho Rubí & Perla Imperial",
    "category": "figuras",
    "tag": "Amuleto de Sabiduría",
    "metal": "Baño de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_3.png",
    "imageOriginal": "assets/images/aretes/original/arete_3.png",
    "specs": [
      "Dije finamente detallado en figura de búho con ojos de circonia",
      "Gema de cuerpo facetada en intenso color rubí",
      "Caída móvil con perla esférica nacarada",
      "Diseño exclusivo y de alta tendencia"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 4,
    "name": "Aretes Colgantes Rombo Champán & Perla",
    "category": "perlas",
    "tag": "Elegancia Sutil",
    "metal": "Chapa de Oro Amarillo",
    "imageCropped": "assets/images/aretes/cropped/arete_4.png",
    "imageOriginal": "assets/images/aretes/original/arete_4.png",
    "specs": [
      "Gema geométrica corte rombo en cristal translúcido champán",
      "Caída escalonada en cadena dorada con perla pulida",
      "Largo total estilizado ideal para cuello despejado",
      "Acabado pulido espejo de alta refracción"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 5,
    "name": "Aretes Roseta Amatista Lavanda & Perla",
    "category": "cristales",
    "tag": "Color & Brillo",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_5.png",
    "imageOriginal": "assets/images/aretes/original/arete_5.png",
    "specs": [
      "Gema facetada redonda en tono amatista / lavanda suave",
      "Cerco de microcirconias brillantes engastadas al bisel",
      "Terminación en perla sintética de alto brillo nacarado",
      "Movimiento fluido y destello con la luz natural"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 6,
    "name": "Aretes Silueta Delfín Dorado & Perla",
    "category": "figuras",
    "tag": "Inspiración Marina",
    "metal": "Chapa de Oro Pulido",
    "imageCropped": "assets/images/aretes/cropped/arete_6.png",
    "imageOriginal": "assets/images/aretes/original/arete_6.png",
    "specs": [
      "Dije de delfín esculpido con acentos de micro-piedras oscuras",
      "Doble hilo dorado con caída de perla pulida",
      "Estructura balanceada que no jala el lóbulo",
      "Material antialérgico de larga durabilidad"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 7,
    "name": "Aretes Felino Silueta Ónix & Perla",
    "category": "figuras",
    "tag": "Favorito Atelier",
    "metal": "Chapa de Oro Amarillo",
    "imageCropped": "assets/images/aretes/cropped/arete_7.png",
    "imageOriginal": "assets/images/aretes/original/arete_7.png",
    "specs": [
      "Elegante silueta felina con cristales en negro azabache (efecto ónix)",
      "Combinación moderna de contraste negro y dorado brillante",
      "Perla nacarada de movimiento libre",
      "Pieza llamativa y original"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 8,
    "name": "Aretes Geométricos Cuarzo Rosa Pastel",
    "category": "colgantes",
    "tag": "Rosa Brillante",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_8.png",
    "imageOriginal": "assets/images/aretes/original/arete_8.png",
    "specs": [
      "Cuarteto de cristales cuadrados en tono rosa ópalo lechoso",
      "Estructura geométrica calada con circonia superior brillante",
      "Cierre tipo ballestilla articulada de alta seguridad",
      "Estuche protector incluido para regalo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 9,
    "name": "Aretes Colgantes Esfera Pavé Texturizada",
    "category": "colgantes",
    "tag": "Clásico Texturizado",
    "metal": "Baño de Oro Amarillo",
    "imageCropped": "assets/images/aretes/cropped/arete_9.png",
    "imageOriginal": "assets/images/aretes/original/arete_9.png",
    "specs": [
      "Medallón esférico con relieve trenzado y micro-pavé frontal",
      "Diseño con brillo reflectante de 360 grados",
      "Gancho abatible de clic rápido y seguro",
      "Presentación en estuche blanco de terciopelo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 10,
    "name": "Broqueles Florales en Filigrana Dorada",
    "category": "huggies",
    "tag": "Uso Diario",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_10.png",
    "imageOriginal": "assets/images/aretes/original/arete_10.png",
    "specs": [
      "Diseño floral en filigrana artesanal con pavé central",
      "Modelo pegado al lóbulo, perfecto para el día a día",
      "Poste hipoalergénico con mariposa de presión cómoda",
      "Acabado pulido con brillo duradero"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 11,
    "name": "Aretes Abanico Dorado con Lágrima Ónix",
    "category": "colgantes",
    "tag": "Estilo Art Déco",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_11.png",
    "imageOriginal": "assets/images/aretes/original/arete_11.png",
    "specs": [
      "Forma geométrica de abanico con flores de circonia engastadas",
      "Gota colgante en negro ónix facetada en punta",
      "Aro articulado tipo huggie de fácil colocación",
      "Gran contraste visual entre oro cálido y negro profundo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 12,
    "name": "Huggies Corazón Rosa Opalescente Xuping",
    "category": "huggies",
    "tag": "Garantía Xuping",
    "metal": "Oro Rosa / Oro 18k Xuping",
    "imageCropped": "assets/images/aretes/cropped/arete_12.png",
    "imageOriginal": "assets/images/aretes/original/arete_12.png",
    "specs": [
      "Arracadas huggies con piedras de corazón en rosa opalescente",
      "Fabricación de calidad garantizada marca Xuping Jewelry",
      "Borde con micro-circonias suizas de corte diamante",
      "Cierre tipo clic invisible que no molesta al dormir"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 13,
    "name": "Aretes Gotas Cristal Esmeralda Imperial",
    "category": "cristales",
    "tag": "Verde Esmeralda",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_13.png",
    "imageOriginal": "assets/images/aretes/original/arete_13.png",
    "specs": [
      "Cristal facetado verde profundo corte gota",
      "Bisel bañado en oro de alta durabilidad",
      "Brillo reflectante tipo gema colombiana",
      "Cierre antialérgico"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 14,
    "name": "Arracadas Pavé Doble Hilo Circonias",
    "category": "huggies",
    "tag": "Esenciales",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_14.png",
    "imageOriginal": "assets/images/aretes/original/arete_14.png",
    "specs": [
      "Doble carril de circonias corte brillante",
      "Ajuste seguro de clic a presión",
      "Chapa de oro de 18k resistente al agua",
      "Ideal para layering en lóbulo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 15,
    "name": "Aretes Colgantes Mariposa Nácar & Circonia",
    "category": "figuras",
    "tag": "Edición Primavera",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_15.png",
    "imageOriginal": "assets/images/aretes/original/arete_15.png",
    "specs": [
      "Alas esculpidas con nácar genuino tornasol",
      "Cuerpo central con micro-pavé de circonias",
      "Caída fina que aporta movimiento suave",
      "Acabado libre de níquel"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 16,
    "name": "Aretes Trébol Cuatro Hojas Ópalo Negro",
    "category": "figuras",
    "tag": "Buena Fortuna",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_16.png",
    "imageOriginal": "assets/images/aretes/original/arete_16.png",
    "specs": [
      "Silueta clásica de trébol de cuatro hojas",
      "Incrustación en tono ónix negro brillante",
      "Borde de microesferas de oro estilo milgrain",
      "Poste con broche mariposa confort"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 17,
    "name": "Broqueles Estrella del Norte Circonia Solitaria",
    "category": "huggies",
    "tag": "Minimalista",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_17.png",
    "imageOriginal": "assets/images/aretes/original/arete_17.png",
    "specs": [
      "Estrella de 8 puntas grabada a relieve",
      "Circonia cúbica central de alta pureza",
      "Perfil bajo pegado a la oreja",
      "Chapa de oro 18k con brillo eterno"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 18,
    "name": "Aretes Cascada Cadenas Finas & Perlas Barrocas",
    "category": "perlas",
    "tag": "Gala & Noche",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_18.png",
    "imageOriginal": "assets/images/aretes/original/arete_18.png",
    "specs": [
      "Tres cadenas escalonadas de hilo de oro",
      "Perlas barrocas pulidas al extremo",
      "Movimiento líquido muy llamativo",
      "Ultralivianos a pesar del largo"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 19,
    "name": "Huggies Aro Trenzado Twist Francés",
    "category": "huggies",
    "tag": "Básico de Lujo",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_19.png",
    "imageOriginal": "assets/images/aretes/original/arete_19.png",
    "specs": [
      "Estructura tubular con texturizado helicoidal",
      "Cierre abatible integrado en el cuerpo del aro",
      "Oro amarillo pulido a espejo",
      "Apto para uso diario 24/7"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 20,
    "name": "Aretes Colgantes Gota Zafiro Real Facetado",
    "category": "cristales",
    "tag": "Azul Real",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_20.png",
    "imageOriginal": "assets/images/aretes/original/arete_20.png",
    "specs": [
      "Cristal corte pera en tono azul noche profundo",
      "Corona superior de microcirconias diamantes",
      "Caída flexible con gancho tipo anzuelo",
      "Diseño sofisticado para eventos formales"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 21,
    "name": "Aretes Luna Creciente & Estrella Pavé",
    "category": "figuras",
    "tag": "Colección Cosmos",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_21.png",
    "imageOriginal": "assets/images/aretes/original/arete_21.png",
    "specs": [
      "Silueta celestial asimétrica luna y estrella",
      "Pavé completo de circonias micro-engastadas",
      "Baño de oro 18k hipoalergénico",
      "Moderno y juvenil"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 22,
    "name": "Broqueles Perla Nacarada Clásica Bisel Dorado",
    "category": "perlas",
    "tag": "Eterno Clásico",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_22.png",
    "imageOriginal": "assets/images/aretes/original/arete_22.png",
    "specs": [
      "Perla redonda de 8 mm con brillo irisado",
      "Cáliz de cuatro garras en chapa de oro",
      "Broche de rosca suave para máxima seguridad",
      "Imprescindible en cualquier joyero"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 23,
    "name": "Aretes Óvalos Entrelazados Infinito",
    "category": "colgantes",
    "tag": "Geometría Pura",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_23.png",
    "imageOriginal": "assets/images/aretes/original/arete_23.png",
    "specs": [
      "Doble aro móvil con acabado satinado y brillante",
      "Eslabón central articulado",
      "Baño de oro amarillo 18 quilates",
      "Estiliza las facciones del rostro"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 24,
    "name": "Huggies Cuarzo Citrino Corte Baguette",
    "category": "cristales",
    "tag": "Tono Miel",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_24.png",
    "imageOriginal": "assets/images/aretes/original/arete_24.png",
    "specs": [
      "Cristal rectangular corte baguette color citrino",
      "Engaste en canal que protege los bordes de la gema",
      "Aro articulado de apertura fácil",
      "Estilo moderno minimalista"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 25,
    "name": "Aretes Colgantes Lágrima Amatista & Hilo Dorado",
    "category": "colgantes",
    "tag": "Toque Púrpura",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_25.png",
    "imageOriginal": "assets/images/aretes/original/arete_25.png",
    "specs": [
      "Gota facetada color amatista brillante",
      "Cadena veneciana de caída delicada",
      "Gancho estilizado francés",
      "Combinación regia de oro y violeta"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 26,
    "name": "Broqueles Flor de Loto Calada en Oro",
    "category": "figuras",
    "tag": "Atelier Zen",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_26.png",
    "imageOriginal": "assets/images/aretes/original/arete_26.png",
    "specs": [
      "Pétalos detallados en corte láser de precisión",
      "Centro con microcirconia solitaria",
      "Acabado pulido mate y brillante contrastado",
      "Poste seguro antialérgico"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 27,
    "name": "Aretes Maxi Argollas Ligeras Chapa 18k",
    "category": "colgantes",
    "tag": "Tendencia",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_27.png",
    "imageOriginal": "assets/images/aretes/original/arete_27.png",
    "specs": [
      "Aro amplio de 45 mm con tubo hueco ultraligero",
      "No jala ni deforma la oreja",
      "Broche de horquilla seguro",
      "Un ícono de la moda versátil"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 28,
    "name": "Huggies Mini Corazones Pespunteados Oro Rosa",
    "category": "huggies",
    "tag": "Oro Rosa",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_28.png",
    "imageOriginal": "assets/images/aretes/original/arete_28.png",
    "specs": [
      "Baño de oro rosado de alta resistencia",
      "Corazones grabados con textura de puntos",
      "Ajuste invisible a la oreja",
      "Perfectos para segundo o tercer orificio"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 29,
    "name": "Aretes Colgantes Racimo de Perlas Baby",
    "category": "perlas",
    "tag": "Delicadeza",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_29.png",
    "imageOriginal": "assets/images/aretes/original/arete_29.png",
    "specs": [
      "Pequeñas perlas esféricas reunidas en racimo",
      "Caída móvil que produce un destello perlado",
      "Base con circonia brillante",
      "Ideales para novias y graduaciones"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 30,
    "name": "Aretes Cruz Minimalista con Circonias Baguette",
    "category": "figuras",
    "tag": "Espiritualidad",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_30.png",
    "imageOriginal": "assets/images/aretes/original/arete_30.png",
    "specs": [
      "Figura de cruz estilizada con gemas transparentes",
      "Engaste en riel para máximo brillo",
      "Chapa de oro amarillo 18k",
      "Significado y elegancia en una sola pieza"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 31,
    "name": "Aretes Sol Radiante Cristal Topacio",
    "category": "cristales",
    "tag": "Luz Solar",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_31.png",
    "imageOriginal": "assets/images/aretes/original/arete_31.png",
    "specs": [
      "Cristal central facetado tono topacio miel",
      "Rayos esculpidos con micro-circonias suizas",
      "Gancho seguro con traba posterior",
      "Diseño imponente y cálido"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 32,
    "name": "Huggies Eslabón Cadena Cubana Micro-Pavé",
    "category": "huggies",
    "tag": "Urbano Chic",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_32.png",
    "imageOriginal": "assets/images/aretes/original/arete_32.png",
    "specs": [
      "Forma de eslabón cubano con pavé frontal",
      "Cierre tipo clic de precisión",
      "Baño triple de oro 18k",
      "Tendencia internacional de joyería"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 33,
    "name": "Aretes Colgantes Espirales Doradas Infinito",
    "category": "colgantes",
    "tag": "Movimiento",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_33.png",
    "imageOriginal": "assets/images/aretes/original/arete_33.png",
    "specs": [
      "Cintas helicoidales que giran al caminar",
      "Reflejo de luz en 360 grados",
      "Muy livianos y llamativos",
      "Gancho ergonómico"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 34,
    "name": "Broqueles Nudo de Amor Filigrana Marina",
    "category": "figuras",
    "tag": "Amor Eterno",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_34.png",
    "imageOriginal": "assets/images/aretes/original/arete_34.png",
    "specs": [
      "Hilos dorados entrelazados en forma de nudo",
      "Símbolo de unión y afecto eterno",
      "Poste hipoalergénico con tope seguro",
      "Acabado satinado de lujo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 35,
    "name": "Aretes Gotas Turmalina Rosa & Perla Pendular",
    "category": "perlas",
    "tag": "Rosa Romántico",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_35.png",
    "imageOriginal": "assets/images/aretes/original/arete_35.png",
    "specs": [
      "Gema cristalina en tono rosa turmalina",
      "Perla colgante nacarada de alta pureza",
      "Armazón chapado en oro 18k",
      "Exclusivo diseño de autor"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 36,
    "name": "Huggies Triple Hilera Circonias Pavé",
    "category": "huggies",
    "tag": "Brillo Máximo",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_36.png",
    "imageOriginal": "assets/images/aretes/original/arete_36.png",
    "specs": [
      "Tres líneas paralelas de circonias corte diamante",
      "Grosor elegante de 6 mm",
      "Cierre bisagra oculto",
      "Garantía de conservación del color"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 37,
    "name": "Aretes Colgantes Prisma Cristal Ahumado",
    "category": "cristales",
    "tag": "Estilo Glamour",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_37.png",
    "imageOriginal": "assets/images/aretes/original/arete_37.png",
    "specs": [
      "Cristal corte prisma en tono cuarzo ahumado",
      "Engaste en garras doradas pulidas",
      "Largo ideal para vestidos de fiesta",
      "Comodidad absoluta"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 38,
    "name": "Aretes Moneda Romana Réplica Antigua",
    "category": "figuras",
    "tag": "Herencia",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_38.png",
    "imageOriginal": "assets/images/aretes/original/arete_38.png",
    "specs": [
      "Medalla con relieve clásico estilo emperatriz",
      "Borde biselado rústico y elegante",
      "Chapa de oro envejecido brillante",
      "Muy buscado por amantes del vintage"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 39,
    "name": "Broqueles Trébol de Circonias Marquise",
    "category": "cristales",
    "tag": "Brillo Floral",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_39.png",
    "imageOriginal": "assets/images/aretes/original/arete_39.png",
    "specs": [
      "Cuatro cristales corte marquesa formando pétalos",
      "Micro-gota central de circonia",
      "Cierre de mariposa reforzado",
      "Un básico fino para toda ocasión"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 40,
    "name": "Aretes Largos Hilo Veneciano con Bola de Fuego",
    "category": "colgantes",
    "tag": "Estrella de Noche",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_40.png",
    "imageOriginal": "assets/images/aretes/original/arete_40.png",
    "specs": [
      "Esfera pavimentada con decenas de cristales",
      "Cadena pasante estilizada de 8 cm",
      "Permite ajustar la altura de caída al gusto",
      "Efecto de destello constante"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 41,
    "name": "Huggies Esmaltados Blanco Níveo & Circonia",
    "category": "huggies",
    "tag": "Blanco Puro",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_41.png",
    "imageOriginal": "assets/images/aretes/original/arete_41.png",
    "specs": [
      "Esmalte cerámico horneado al frío tono nácar",
      "Centro con circonia redonda de 4 mm",
      "Chapa de oro resistente a la corrosión",
      "Contraste moderno y fresco"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 42,
    "name": "Aretes Colgantes Lágrima Doble Cuarzo Turquesa",
    "category": "cristales",
    "tag": "Estilo Bohemio Chic",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_42.png",
    "imageOriginal": "assets/images/aretes/original/arete_42.png",
    "specs": [
      "Cristal translúcido en tono turquesa mediterráneo",
      "Marco doble de oro fino con grabado lateral",
      "Gancho francés con traba",
      "Aporta vida y color a cualquier atuendo"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 43,
    "name": "Aretes Círculos Concéntricos Pulidos",
    "category": "colgantes",
    "tag": "Arquitectura",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_43.png",
    "imageOriginal": "assets/images/aretes/original/arete_43.png",
    "specs": [
      "Tres aros móviles de diferentes diámetros",
      "Juego visual cinemático con el movimiento",
      "Oro 18k con acabado de alta refracción",
      "Pieza contemporánea y ligera"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 44,
    "name": "Broqueles Botón Barroco Perla Mayorica",
    "category": "perlas",
    "tag": "Señorial",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_44.png",
    "imageOriginal": "assets/images/aretes/original/arete_44.png",
    "specs": [
      "Media perla aplanada estilo mabe de 10 mm",
      "Orla trenzada en cordoncillo de oro",
      "Pegado exacto al lóbulo",
      "Atemporal y muy favorecedor"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 45,
    "name": "Huggies Rayo Celestial Micro-Pavé",
    "category": "huggies",
    "tag": "Fuerza & Estilo",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_45.png",
    "imageOriginal": "assets/images/aretes/original/arete_45.png",
    "specs": [
      "Dije de rayo colgante con cristales incrustados",
      "Arracada pequeña tipo dormilona",
      "Oro amarillo de 18k",
      "Ideal para combinaciones asimétricas"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 46,
    "name": "Aretes Colgantes Cuerda Marina Esmeralda",
    "category": "cristales",
    "tag": "Gemas Vivas",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_46.png",
    "imageOriginal": "assets/images/aretes/original/arete_46.png",
    "specs": [
      "Cristal octagonal verde esmeralda corte esmeralda",
      "Marco en texturado tipo cabo marinero",
      "Caída articulada de 4 cm",
      "Distinción y elegancia pura"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 47,
    "name": "Aretes Colgantes Hoja de Ginkgo Biloba",
    "category": "figuras",
    "tag": "Naturaleza Viva",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_47.png",
    "imageOriginal": "assets/images/aretes/original/arete_47.png",
    "specs": [
      "Hoja esculpida con venas detalladas en relieve",
      "Símbolo milenario de longevidad y paz",
      "Oro pulido satinado de 18k",
      "Liviano y suave al tacto"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 48,
    "name": "Broqueles Hexágono Cuarzo Rosa Biselado",
    "category": "cristales",
    "tag": "Geométrico Fino",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_48.png",
    "imageOriginal": "assets/images/aretes/original/arete_48.png",
    "specs": [
      "Forma hexagonal moderna con gema color rubí claro",
      "Bisel cerrado que no se engancha con la ropa",
      "Poste seguro antialérgico",
      "Especial para pieles sensibles"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 49,
    "name": "Aretes Colgantes Espiga de Trigo Perlas",
    "category": "perlas",
    "tag": "Abundancia",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_49.png",
    "imageOriginal": "assets/images/aretes/original/arete_49.png",
    "specs": [
      "Estructura ramificada con perlas en cada brote",
      "Inspiración campestre de alta costura",
      "Chapa de oro brillante 18 quilates",
      "Acabado artesanal impecable"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 50,
    "name": "Huggies Eslabón D Cuadrado Geométrico",
    "category": "huggies",
    "tag": "Moderno",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_50.png",
    "imageOriginal": "assets/images/aretes/original/arete_50.png",
    "specs": [
      "Silueta rectangular con bordes redondeados suaves",
      "Cierre tipo clic firme",
      "Oro amarillo bañado por inmersión",
      "Diseño unisex refinado"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 51,
    "name": "Aretes Colgantes Doble Gota Ópalo & Circonia",
    "category": "colgantes",
    "tag": "Alta Costura",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_51.png",
    "imageOriginal": "assets/images/aretes/original/arete_51.png",
    "specs": [
      "Dos lágrimas superpuestas en movimiento oscilante",
      "Cristal lechoso con reflejo iridiscente",
      "Chapa de oro 18k garantizada",
      "Excelente pieza para eventos"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 52,
    "name": "Broqueles Corona Real con Circonias Suizas",
    "category": "figuras",
    "tag": "Realeza",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_52.png",
    "imageOriginal": "assets/images/aretes/original/arete_52.png",
    "specs": [
      "Dije de corona miniatura con 5 puntas engastadas",
      "Detalle microscópico de orfebrería fina",
      "Broche de presión con silicona antideslizante",
      "Un obsequio tierno y significativo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 53,
    "name": "Aretes Largos Flecos de Oro 18k & Perlas",
    "category": "colgantes",
    "tag": "Impacto Visual",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_53.png",
    "imageOriginal": "assets/images/aretes/original/arete_53.png",
    "specs": [
      "Cinco cadenas paralelas con terminación en gota perlada",
      "Caída fluida de 7 cm",
      "Gancho seguro para oreja perforada",
      "El centro de todas las miradas"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 54,
    "name": "Huggies Media Caña Clásica Ancha",
    "category": "huggies",
    "tag": "Imprescindible",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_54.png",
    "imageOriginal": "assets/images/aretes/original/arete_54.png",
    "specs": [
      "Perfil abombado de 5 mm de espesor",
      "Oro pulido espejo sin incrustaciones",
      "Minimalismo puro que combina con cualquier collar",
      "Cierre abatible de alta precisión"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 55,
    "name": "Aretes Colgantes Corazón Asimétrico Cristales",
    "category": "cristales",
    "tag": "Amor Moderno",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_55.png",
    "imageOriginal": "assets/images/aretes/original/arete_55.png",
    "specs": [
      "Contorno de corazón vanguardista con cristales",
      "Caída oscilante de cadena fina",
      "Baño de oro 18k libre de plomo",
      "Diseño romántico no convencional"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 56,
    "name": "Aretes Flor de Cerezo Esmaltada & Circonia",
    "category": "figuras",
    "tag": "Flor Sakura",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_56.png",
    "imageOriginal": "assets/images/aretes/original/arete_56.png",
    "specs": [
      "Pétalos en tono rosa suave degradado",
      "Pistilo central con circonia brillante",
      "Poste hipoalergénico con mariposa",
      "Aporta frescura y dulzura al rostro"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 57,
    "name": "Broqueles Esfera Diamantada Chapa Oro",
    "category": "huggies",
    "tag": "Destellos 3D",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_57.png",
    "imageOriginal": "assets/images/aretes/original/arete_57.png",
    "specs": [
      "Esfera de 6 mm con corte diamantado a buril",
      "Refleja la luz en destellos tipo purpurina dorada",
      "Sin piedras que puedan caerse",
      "Durabilidad de por vida"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 58,
    "name": "Aretes Colgantes Lágrima Nácar Bisel Doble",
    "category": "perlas",
    "tag": "Nácar Puro",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_58.png",
    "imageOriginal": "assets/images/aretes/original/arete_58.png",
    "specs": [
      "Placa de nácar natural pulida en corte lágrima",
      "Cerco doble en oro amarillo brillante",
      "Caída móvil articulada",
      "Elegancia natural única"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 59,
    "name": "Huggies Dos Tonos Oro Amarillo y Rodio",
    "category": "huggies",
    "tag": "Bicolor",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_59.png",
    "imageOriginal": "assets/images/aretes/original/arete_59.png",
    "specs": [
      "Fusión elegante de baño de oro y baño de rodio blanco",
      "Línea diagonal de micro-circonias",
      "Aro ergonómico para uso continuo",
      "Combina con joyas doradas o plateadas"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 60,
    "name": "Aretes Colgantes Gotas de Cristal Rubí Intenso",
    "category": "cristales",
    "tag": "Rojo Pasión",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_60.png",
    "imageOriginal": "assets/images/aretes/original/arete_60.png",
    "specs": [
      "Gema facetada en corte pera rojo escarlata",
      "Engaste en cuatro garras de oro pulido",
      "Gancho curvo tipo cisne",
      "Color vibrante que realza la piel"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 61,
    "name": "Aretes Alas de Ángel Caladas en Filigrana",
    "category": "figuras",
    "tag": "Protección",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_61.png",
    "imageOriginal": "assets/images/aretes/original/arete_61.png",
    "specs": [
      "Plumas detalladas individualmente en relieve",
      "Símbolo de guía y serenidad",
      "Chapa de oro 18k con brillo persistente",
      "Ultraligeras y confortables"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 62,
    "name": "Broqueles Triángulo Geométrico Pavé",
    "category": "huggies",
    "tag": "Vanguardia",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_62.png",
    "imageOriginal": "assets/images/aretes/original/arete_62.png",
    "specs": [
      "Forma triangular con 6 microcirconias suizas",
      "Poste centrado para balance perfecto en lóbulo",
      "Hipoalergénico certificado",
      "Diseño pulcro y atemporal"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 63,
    "name": "Aretes Colgantes Romboide Esmalte Blanco & Oro",
    "category": "colgantes",
    "tag": "Geométrico Chic",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_63.png",
    "imageOriginal": "assets/images/aretes/original/arete_63.png",
    "specs": [
      "Rombo esmaltado en blanco satinado con marco de oro",
      "Caída de aro con perla suspendida",
      "Broche de presión seguro",
      "Sofisticado para el trabajo o reuniones"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 64,
    "name": "Huggies Estrella Polar Pavé & Cadena Conectora",
    "category": "huggies",
    "tag": "Tendencia Doble",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_64.png",
    "imageOriginal": "assets/images/aretes/original/arete_64.png",
    "specs": [
      "Arracada huggie con micro-cadena hacia broquel superior",
      "Estrella polar con circonias de corte diamante",
      "Chapa de oro 18k",
      "Ideal para orejas con doble perforación"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  },
  {
    "id": 65,
    "name": "Aretes Colgantes Lágrima Zafiro & Perla Cultivada",
    "category": "perlas",
    "tag": "Atelier Royal",
    "metal": "Baño de Oro Amarillo 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_65.png",
    "imageOriginal": "assets/images/aretes/original/arete_65.png",
    "specs": [
      "Gema corte corazón en tono zafiro real",
      "Caída pendular con perla esférica nacarada",
      "Chapa de oro amarillo 18k de alta calidad",
      "Garantía de acabado premium Rosa Brillante"
    ],
    "prices": {
      "MXN": 150,
      "USD": 7.5,
      "EUR": 7
    }
  },
  {
    "id": 66,
    "name": "Broqueles Perla de Agua Dulce & Botón Pavé",
    "category": "perlas",
    "tag": "Perla Sublime",
    "metal": "Chapa de Oro 18k",
    "imageCropped": "assets/images/aretes/cropped/arete_66.png",
    "imageOriginal": "assets/images/aretes/original/arete_66.png",
    "specs": [
      "Media perla de lustre superior",
      "Corona de microcirconias engastadas a mano",
      "Poste antialérgico de larga duración",
      "Pieza imprescindible para catálogo"
    ],
    "prices": {
      "MXN": 120,
      "USD": 6,
      "EUR": 5.5
    }
  }
];

// Estado de la aplicación
let currentCurrency = 'MXN';
let currentTheme = localStorage.getItem('rosa_brillante_theme') || 'light';
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let showingOriginalPhoto = false;
let currentModalProductId = null;

// Elementos del DOM
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById('themeToggle');
const currencySelect = document.getElementById('currencySelect');
const header = document.getElementById('header');
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Buscador y Ordenamiento (Escalabilidad)
const catalogSearchInput = document.getElementById('catalogSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const sortSelect = document.getElementById('sortSelect');

// Modal Elements
const modal = document.getElementById('quickViewModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalImg = document.getElementById('modalImg');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalMetal = document.getElementById('modalMetal');
const modalPrice = document.getElementById('modalPrice');
const modalSpecsList = document.getElementById('modalSpecsList');
const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
const modalReserveBtn = document.getElementById('modalReserveBtn');
const togglePhotoBtn = document.getElementById('togglePhotoBtn');

// Mobile Drawer Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerLinks = document.querySelectorAll('.drawer-link');

// Toast Element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Formulario de cita
const appointmentForm = document.getElementById('appointmentForm');
const newsletterForm = document.getElementById('newsletterForm');

/* ==========================================================================
   INICIALIZACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Aplicar tema y divisa inicial (Prioridad en MXN)
  applyTheme(currentTheme);
  const drawerCurrencySelect = document.getElementById('drawerCurrencySelect');
  if (currencySelect) {
    currencySelect.value = currentCurrency;
  }
  if (drawerCurrencySelect) {
    drawerCurrencySelect.value = currentCurrency;
  }

  // 2. Renderizar catálogo de productos reales y conteo dinámico
  renderCatalog();
  updateCategoryCounts();

  // 3. Event Listeners de Controles
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      if (drawerCurrencySelect) drawerCurrencySelect.value = currentCurrency;
      updatePrices();
    });
  }

  if (drawerCurrencySelect) {
    drawerCurrencySelect.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      if (currencySelect) currencySelect.value = currentCurrency;
      updatePrices();
    });
  }

  // 4. Filtros de categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  // 5. Buscador en tiempo real (Escalabilidad para colecciones grandes)
  if (catalogSearchInput) {
    catalogSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
      }
      renderCatalog();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (catalogSearchInput) {
        catalogSearchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        catalogSearchInput.focus();
        renderCatalog();
      }
    });
  }

  // 6. Ordenamiento de productos
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  // 7. Botón de alternar foto en Modal (recorte limpio vs empaque original)
  if (togglePhotoBtn) {
    togglePhotoBtn.addEventListener('click', toggleModalPhoto);
  }

  // 8. Modal Cerrar
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 9. Menú Móvil
  if (mobileMenuBtn && mobileDrawer && closeDrawerBtn) {
    mobileMenuBtn.addEventListener('click', () => mobileDrawer.classList.add('open'));
    closeDrawerBtn.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }

  // 10. Scroll Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 11. Formularios con redirección a WhatsApp oficial (+52 238 194 7741)
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value.trim();
      const contact = document.getElementById('clientContact').value.trim();
      const interestSelect = document.getElementById('interestCategory');
      const interestText = interestSelect ? interestSelect.options[interestSelect.selectedIndex].text : 'Consulta general';

      showToast(`Gracias ${name}. Conectando con WhatsApp de Rosa Brillante...`);
      appointmentForm.reset();

      const summaryMsg = `Hola Rosa Brillante, mi nombre es ${name}. Me comunico respecto a: ${interestText}. Mi número de teléfono es ${contact}. ¿Me podrían dar informes?`;
      setTimeout(() => {
        window.open(getWhatsAppUrl(summaryMsg), '_blank');
      }, 600);
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("¡Gracias! Te avisaremos de los nuevos modelos y promociones.");
      newsletterForm.reset();
    });
  }

  if (modalReserveBtn) {
    modalReserveBtn.addEventListener('click', () => {
      closeModal();
      const contactSec = document.getElementById('contacto');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

/* ==========================================================================
   RENDERIZADO DINÁMICO DEL CATÁLOGO
   ========================================================================== */
function renderCatalog() {
  if (!productsGrid) return;
  productsGrid.innerHTML = '';

  // 1. Filtrar por categoría
  let filtered = currentCategory === 'all' 
    ? [...jewelryProducts] 
    : jewelryProducts.filter(p => p.category === currentCategory);

  // 2. Filtrar por búsqueda de texto
  if (searchQuery) {
    filtered = filtered.filter(p => {
      const matchName = p.name.toLowerCase().includes(searchQuery);
      const matchMetal = p.metal.toLowerCase().includes(searchQuery);
      const matchTag = p.tag.toLowerCase().includes(searchQuery);
      const matchPrice = p.prices.MXN.toString().includes(searchQuery);
      const matchSpecs = p.specs.some(s => s.toLowerCase().includes(searchQuery));
      return matchName || matchMetal || matchTag || matchPrice || matchSpecs;
    });
  }

  // 3. Ordenar
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.prices[currentCurrency] - b.prices[currentCurrency]);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.prices[currentCurrency] - a.prices[currentCurrency]);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // 4. Si no hay resultados coincidentes
  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results-box">
        <i data-lucide="search-x"></i>
        <h3 class="no-results-title">No encontramos piezas para "${escapeHtml(searchQuery)}"</h3>
        <p class="no-results-text">
          Puedes intentar con otro término (ej. "perla", "corazón", "120", "150", "dorado") o consultar directamente con nuestro joyero si buscas un modelo especial.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-outline" onclick="resetCatalogFilters()">Ver Todas las Piezas</button>
          <a href="${getWhatsAppUrl('Hola Rosa Brillante, busco un modelo de arete que no vi en el catálogo web. ¿Podrían orientarme?')}" target="_blank" class="btn btn-gold">
            <i data-lucide="message-circle"></i> Consultar por WhatsApp
          </a>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // 5. Renderizar tarjetas de productos
  filtered.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    card.setAttribute('data-category', product.category);

    const formattedPrice = formatCurrency(product.prices[currentCurrency], currentCurrency);

    card.innerHTML = `
      <div class="product-image-wrap" onclick="openQuickView(${product.id})" role="button" tabindex="0" title="Ver detalle de ${escapeHtml(product.name)}">
        <span class="product-tag">${escapeHtml(product.tag)}</span>
        <img src="${product.imageCropped}" alt="${escapeHtml(product.name)}" class="product-img" loading="lazy">
        <div class="card-overlay-actions">
          <button class="btn-quick-view" onclick="event.stopPropagation(); openQuickView(${product.id})">
            <i data-lucide="eye"></i> Vista Rápida
          </button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-metal">${escapeHtml(product.metal)}</span>
        <h3 class="product-name" onclick="openQuickView(${product.id})" style="cursor: pointer;">${escapeHtml(product.name)}</h3>
        <p class="product-spec">${escapeHtml(product.specs[0])}</p>
        <div class="product-footer">
          <div class="product-price">${formattedPrice}</div>
          <button class="btn-consult-icon" onclick="consultWhatsApp(${product.id})" title="Pedir este arete por WhatsApp">
            <i data-lucide="message-circle"></i>
          </button>
        </div>
      </div>
    `;

    productsGrid.appendChild(card);
  });

  // Re-inicializar iconos de Lucide en las nuevas tarjetas
  if (window.lucide) {
    lucide.createIcons();
  }
}

function resetCatalogFilters() {
  currentCategory = 'all';
  searchQuery = '';
  currentSort = 'featured';
  if (catalogSearchInput) catalogSearchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  if (sortSelect) sortSelect.value = 'featured';
  filterBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === 'all');
  });
  renderCatalog();
}

function updateCategoryCounts() {
  filterBtns.forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const count = cat === 'all' 
      ? jewelryProducts.length 
      : jewelryProducts.filter(p => p.category === cat).length;
    const countEl = btn.querySelector('.filter-count');
    if (countEl) {
      countEl.textContent = `(${count})`;
    }
  });
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&#039;');
}

/* ==========================================================================
   GESTIÓN DE PRECIOS Y DIVISAS
   ========================================================================== */
function formatCurrency(amount, currency) {
  if (currency === 'MXN') return `$${amount.toLocaleString()} MXN`;
  if (currency === 'USD') return `$${amount.toFixed(2)} USD`;
  if (currency === 'EUR') return `€${amount.toFixed(2)} EUR`;
  return `$${amount.toLocaleString()} MXN`;
}

function updatePrices() {
  document.querySelectorAll('.product-card').forEach(card => {
    const id = parseInt(card.getAttribute('data-id'), 10);
    const product = jewelryProducts.find(p => p.id === id);
    if (product) {
      const priceEl = card.querySelector('.product-price');
      if (priceEl) {
        priceEl.textContent = formatCurrency(product.prices[currentCurrency], currentCurrency);
      }
    }
  });

  if (currentModalProductId) {
    const activeProduct = jewelryProducts.find(p => p.id === currentModalProductId);
    if (activeProduct) {
      modalPrice.textContent = formatCurrency(activeProduct.prices[currentCurrency], currentCurrency);
    }
  }
}

/* ==========================================================================
   MODAL DE VISTA RÁPIDA (QUICK VIEW)
   ========================================================================== */
function openQuickView(productId) {
  const product = jewelryProducts.find(p => p.id === productId);
  if (!product) return;

  currentModalProductId = productId;
  showingOriginalPhoto = true; // Abre directamente con la foto original

  modalImg.src = product.imageOriginal; // Foto original completa directamente
  modalImg.alt = product.name;
  modalTag.textContent = product.tag;
  modalTitle.textContent = product.name;
  modalMetal.textContent = product.metal;
  
  modalPrice.textContent = formatCurrency(product.prices[currentCurrency], currentCurrency);

  // Botón para alternar a recorte centrado si se desea
  if (togglePhotoBtn) {
    togglePhotoBtn.innerHTML = `<i data-lucide="crop"></i> <span>Ver recorte centrado</span>`;
  }

  // Lista de especificaciones
  modalSpecsList.innerHTML = '';
  product.specs.forEach(spec => {
    const li = document.createElement('li');
    li.textContent = spec;
    modalSpecsList.appendChild(li);
  });

  // Enlace directo al WhatsApp oficial de Rosa Brillante con número +52 238 194 7741
  const priceFormatted = formatCurrency(product.prices.MXN, 'MXN');
  const message = `Hola Rosa Brillante, me gustaría pedir la pieza: "${product.name}" (${priceFormatted}). ¿Tienen disponibilidad en su tienda o envío a domicilio?`;
  modalWhatsAppBtn.href = getWhatsAppUrl(message);

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const modalContainer = modal.querySelector('.modal-container');
  const modalBody = modal.querySelector('.modal-body');
  if (modalContainer) modalContainer.scrollTop = 0;
  if (modalBody) modalBody.scrollTop = 0;

  if (window.lucide) lucide.createIcons();
}

function toggleModalPhoto() {
  if (!currentModalProductId) return;
  const product = jewelryProducts.find(p => p.id === currentModalProductId);
  if (!product) return;

  showingOriginalPhoto = !showingOriginalPhoto;
  if (showingOriginalPhoto) {
    modalImg.src = product.imageOriginal;
    togglePhotoBtn.innerHTML = `<i data-lucide="crop"></i> <span>Ver recorte centrado</span>`;
    showToast("Mostrando foto original completa.");
  } else {
    modalImg.src = product.imageCropped;
    togglePhotoBtn.innerHTML = `<i data-lucide="image"></i> <span>Ver foto original completa</span>`;
    showToast("Mostrando recorte centrado.");
  }
  if (window.lucide) lucide.createIcons();
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function consultWhatsApp(productId) {
  const product = jewelryProducts.find(p => p.id === productId);
  if (!product) return;
  const priceFormatted = formatCurrency(product.prices.MXN, 'MXN');
  const message = `Hola Rosa Brillante, me interesa comprar la pieza "${product.name}" (${priceFormatted}). ¿Cómo puedo proceder con mi pedido?`;
  window.open(getWhatsAppUrl(message), '_blank');
}

/* ==========================================================================
   TEMA VISUAL & NOTIFICACIONES
   ========================================================================== */
function applyTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('rosa_brillante_theme', theme);
  currentTheme = theme;
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(`Atmósfera: ${newTheme === 'dark' ? 'Noir (Oscuro)' : 'Pearl Minimalist (Claro)'}`);
}

let toastTimeout;
function showToast(msg) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toastMessage.textContent = msg;
  toast.classList.add('show');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
