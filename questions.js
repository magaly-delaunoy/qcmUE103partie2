/*
  Banque de questions – UE PY00103T, Partie 2
  Approche comportementale, cognitive et émotionnelle (CM 1 à 6)

  ⚠️ Dans chaque question, la BONNE réponse est TOUJOURS la première de la liste "options".
  Le jeu mélange automatiquement l'ordre des réponses à l'affichage.
  Pour ajouter une question, copie un bloc { ... } et modifie-le.
*/
const QUESTIONS = [
  // ───────── CM 1-2 : Les troubles mentaux ─────────
  {
    q: "En quelle année l'OMS a-t-elle été fondée, et combien compte-t-elle d'États membres ?",
    options: ["1948 · 194 États membres", "1945 · 150 États membres", "1964 · 194 États membres", "1948 · 120 États membres"],
    e: "L'OMS, fondée en 1948, est une institution spécialisée des Nations Unies qui compte 194 États membres."
  },
  {
    q: "Selon l'OMS, comment se caractérise la santé ?",
    options: [
      "Un état complet de bien-être physique, mental et social, et pas seulement l'absence de maladie",
      "Uniquement l'absence de maladie ou d'infirmité",
      "Un état de bien-être mental uniquement",
      "La capacité à se conformer aux normes de sa société"
    ],
    e: "Les aspects physiques, sociaux et psychologiques sont des composantes essentielles de la santé."
  },
  {
    q: "Dans son rapport de 2022, comment l'OMS conceptualise-t-elle la santé mentale ?",
    options: [
      "Comme un continuum complexe, d'un état optimal à des états invalidants très douloureux",
      "Comme une opposition stricte entre « sain » et « malade »",
      "Comme l'absence de tout symptôme psychiatrique",
      "Comme un trait de personnalité stable"
    ],
    e: "Divers facteurs (sociaux, individuels, familiaux, structurels) font varier la position des individus sur ce continuum."
  },
  {
    q: "Selon l'OMS, quelle proportion de la population mondiale est concernée par un trouble mental au cours de la vie ?",
    options: ["Environ 25 %", "Environ 5 %", "Environ 10 %", "Environ 50 %"],
    e: "Environ 25 % de la population mondiale, ce qui en fait un enjeu majeur de santé publique."
  },
  {
    q: "D'après Ozer et al. (2003), parmi les personnes exposées à un stresseur traumatique, quelle part développe un trouble de stress post-traumatique (TSPT) ?",
    options: ["5 à 10 %", "50 à 60 %", "25 à 30 %", "Presque toutes"],
    e: "50 à 60 % de la population américaine est exposée à un traumatisme, mais seuls 5 à 10 % développent un TSPT. Des facteurs personnels et environnementaux (soutien social…) jouent un rôle médiateur."
  },
  {
    q: "Que montre l'étude de Santé publique sur les attentats de 2015 concernant la population générale ?",
    options: [
      "L'exposition continue aux images était associée à un risque accru de symptômes de TSPT",
      "Seules les victimes directes pouvaient développer un TSPT",
      "L'exposition aux images protégeait contre le TSPT",
      "Aucun lien n'a été trouvé"
    ],
    e: "On peut souffrir d'un TSPT sans avoir été directement confronté aux événements : l'exposition répétée aux images est un facteur de risque."
  },
  {
    q: "Selon Guimon et al., comment la stigmatisation peut-elle aggraver le handicap initial ?",
    options: [
      "Par les arrêts de suivi médical et l'inobservance thérapeutique",
      "En améliorant l'estime de soi",
      "En favorisant l'insertion sociale",
      "En réduisant mécaniquement les symptômes"
    ],
    e: "La stigmatisation peut retarder l'accès aux soins et réduire les chances de guérison et d'insertion sociale."
  },
  {
    q: "Quels sont les trois types de stigmates décrits par Erving Goffman ?",
    options: [
      "Les stigmates corporels, les tares de caractère et les stigmates tribaux",
      "Les stigmates physiques, mentaux et sociaux",
      "Les stigmates visibles, invisibles et acquis",
      "Les stigmates familiaux, professionnels et culturels"
    ],
    e: "Goffman (« Stigmate », 1975) distingue : monstruosités du corps, tares de caractère, stigmates tribaux (nationalité, ethnie, religion…)."
  },
  {
    q: "Quelle est la différence entre stigmatisation et discrimination ?",
    options: [
      "La discrimination est plus spécifique : traiter différemment une personne par rapport à une autre dans une situation comparable",
      "La discrimination est une notion plus large que la stigmatisation",
      "Les deux termes sont strictement synonymes",
      "La discrimination désigne uniquement un traitement favorable"
    ],
    e: "La discrimination peut être négative ou positive ; elle est moins large que la stigmatisation."
  },
  {
    q: "Selon Giordana (2020), à quoi les représentations sociales des troubles psychiatriques sont-elles associées ?",
    options: [
      "À la dangerosité, à la violence et à l'imprévisibilité",
      "À un génie créatif hors du commun",
      "À une contagiosité du trouble",
      "À un manque de volonté uniquement"
    ],
    e: "S'y ajoute une perception infantile du monde (« l'idiot du village »)."
  },
  {
    q: "Selon Tassone-Monchicourt et al. (2010), quelle part des crimes n'est PAS commise par des personnes ayant des troubles psychiatriques ?",
    options: ["95 %", "50 %", "75 %", "30 %"],
    e: "La forte médiatisation de certains faits de criminalité renforce pourtant le stéréotype liant dangerosité, criminalité et maladie mentale."
  },
  {
    q: "Qui a élaboré la déclaration d'Helsinki, en 1964 ?",
    options: ["L'Association Médicale Mondiale", "L'OMS", "L'Union européenne", "L'Association Américaine de Psychologie"],
    e: "Elle énonce des principes éthiques pour la recherche médicale sur des êtres humains, et recommande aussi de lutter contre la stigmatisation en santé mentale."
  },
  {
    q: "Que montre l'étude de Greiner et al. (2022) sur le trouble de la personnalité borderline (TPB) ?",
    options: [
      "C'est l'un des troubles les plus stigmatisés, et les représentations négatives peuvent dégrader la qualité des soins",
      "Tous les soignants maîtrisent parfaitement les connaissances sur ce trouble",
      "Le TPB est un trouble rare sans impact sur la prise en charge",
      "Tous les soignants lui attribuent un bon pronostic"
    ],
    e: "D'où l'intérêt d'étudier les représentations pour les rendre plus conformes à la réalité clinique."
  },
  {
    q: "Dans l'étude de Rousseau, Callahan & Chabrol (2012) auprès de 942 adolescents, quelle stratégie de contrôle du poids est la plus citée pour les TCA ?",
    options: ["La restriction alimentaire", "L'exercice physique", "Les laxatifs", "Le tabagisme"],
    e: "La restriction alimentaire et les vomissements sont les plus cités ; exercice, coupe-faim, laxatifs et tabac le sont très peu."
  },
  {
    q: "Quelle caractéristique majeure de l'anorexie et de la boulimie n'est citée que par une minorité d'adolescents ?",
    options: ["L'insatisfaction corporelle", "Les problèmes psychologiques", "La restriction alimentaire", "Les vomissements"],
    e: "Elle est pourtant présente chez toutes les personnes souffrant d'anorexie ou de boulimie."
  },
  {
    q: "Pourquoi étudier les représentations des adolescents avant de créer un programme de prévention des TCA ?",
    options: [
      "Pour éviter de leur transmettre des stratégies méconnues qu'ils pourraient expérimenter ensuite",
      "Pour dépister les troubles en classe",
      "Pour remplacer le traitement médical",
      "Pour calculer le coût économique des TCA"
    ],
    e: "Connaître précisément leurs connaissances et croyances permet de concevoir une prévention adaptée et sans effet pervers."
  },

  // ───────── CM 1-2 : Psychopathologie, normal et pathologique ─────────
  {
    q: "Que signifie « pathos », racine du mot « pathologie » ?",
    options: ["Maladie (en grec)", "Esprit (en latin)", "Science (en grec)", "Comportement (en latin)"],
    e: "Le Larousse (1999) définit la psychopathologie comme « la science des souffrances de l'esprit »."
  },
  {
    q: "Quelle différence Bouvet & Boudoukha (2014) font-ils entre psychopathologie et psychiatrie ?",
    options: [
      "La psychiatrie recouvre aussi la thérapeutique, la prophylaxie et la réadaptation",
      "La psychopathologie recouvre la thérapeutique, pas la psychiatrie",
      "Il n'y a aucune différence",
      "La psychopathologie ne s'intéresse qu'aux troubles d'origine organique"
    ],
    e: "La psychopathologie s'intéresse spécifiquement à la compréhension et à la connaissance des maladies psychiques."
  },
  {
    q: "Qui est considéré comme le fondateur de la psychologie comme science autonome en France ?",
    options: ["Théodule Ribot", "Karl Jaspers", "Albert Bandura", "Jean Piaget"],
    e: "Ribot a fait entrer la psychologie à l'université et promu la psychologie expérimentale ; sa thèse de 1873 porte sur l'Hérédité psychologique."
  },
  {
    q: "Quel ouvrage de Karl Jaspers (1913) a profondément marqué la psychiatrie française ?",
    options: ["Psychopathologie générale", "Stigmate", "Hérédité psychologique", "Les personnalités pathologiques"],
    e: "Jaspers a aussi introduit la notion de « psychogenèse »."
  },
  {
    q: "Lequel de ces éléments est un critère pour qualifier un comportement de « pathologique » (Boudoukha & Bouvet, 2014) ?",
    options: [
      "L'intensité et la durée de la souffrance exprimée",
      "Le niveau de revenu de la personne",
      "L'appartenance à un groupe religieux",
      "Le nombre de personnes dans son entourage"
    ],
    e: "Les trois critères : conscience de la réalité et inadaptation ; intensité et durée de la souffrance ; limitation, menace ou danger pour soi-même et autrui."
  },
  {
    q: "Pour le QI, quelles sont la moyenne et l'écart-type utilisés dans l'illustration de la courbe de Gauss ?",
    options: ["Moyenne 100 · écart-type 15", "Moyenne 100 · écart-type 10", "Moyenne 120 · écart-type 15", "Moyenne 50 · écart-type 15"],
    e: "La normalité statistique se réfère à la moyenne, le « pathologique » étant le « déviant »."
  },
  {
    q: "Quelle limite de la normalité statistique le cours souligne-t-il ?",
    options: [
      "Tout écart à la moyenne n'est pas forcément pathologique (ex. un QI très élevé)",
      "Elle ne repose sur aucune mesure",
      "Elle est identique dans toutes les cultures par définition",
      "Elle dépend uniquement de l'avis du psychologue"
    ],
    e: "Elle offre un cadre de référence indispensable mais insuffisant pour délimiter le normal et le pathologique."
  },
  {
    q: "Que désigne le « relativisme culturel » dans la normalité idéale/sociétale ?",
    options: [
      "Ce qui est normal dans une culture peut être jugé anormal dans une autre",
      "Les normes sont identiques dans toutes les sociétés",
      "La normalité se mesure à la moyenne d'un échantillon",
      "La normalité dépend du bien-être de l'individu uniquement"
    ],
    e: "Les critères énoncés par une société donnée varient selon les contextes culturels, sociaux et religieux."
  },
  {
    q: "Quelle limite Guelfi (2014) pointe-t-il pour la normalité fonctionnelle ?",
    options: [
      "Certains comportements satisfaisants pour l'individu (ex. la manipulation) font souffrir autrui",
      "Elle ignore l'épanouissement personnel",
      "Elle ne s'applique qu'aux enfants",
      "Elle se réduit à la moyenne statistique"
    ],
    e: "La normalité fonctionnelle renvoie à l'épanouissement personnel et au fonctionnement optimal de l'individu."
  },
  {
    q: "Dans la normalité « subjective », de quoi faut-il tenir compte selon Guelfi (2014) ?",
    options: [
      "De la représentation personnelle de la normalité chez l'évaluateur",
      "De la moyenne de la population",
      "Des règles des institutions sociales",
      "Du QI de la personne évaluée"
    ],
    e: "Par exemple, des accès colériques peuvent être évalués différemment selon que l'évaluateur y est régulièrement confronté ou non."
  },

  // ───────── CM 3 : Histoire et épistémologie ─────────
  {
    q: "Que signifie le « Zeitgeist » ?",
    options: ["L'esprit d'une époque", "La loi du plus fort", "Le conditionnement par l'environnement", "L'inconscient collectif"],
    e: "Pour comprendre une découverte ou un courant de pensée, il faut le replacer dans le Zeitgeist de son époque."
  },
  {
    q: "Quelle pensée antique a le plus influencé l'approche cognitivo-comportementale ?",
    options: ["Le stoïcisme (Épictète)", "L'épicurisme", "Le scepticisme", "Le platonisme"],
    e: "Épictète : ce ne sont pas les événements qui dérangent les hommes, mais ce qu'ils pensent de ces événements."
  },
  {
    q: "Qui a le premier posé le problème de la division entre corps et esprit, repris bien plus tard par Descartes ?",
    options: ["Platon", "Aristote", "Épictète", "Darwin"],
    e: "Platon : dualisme versus monisme. L'intérêt pour la psyché existait bien avant la psychologie scientifique."
  },
  {
    q: "Quelle approche épistémologique s'appuie sur les travaux de Darwin et met l'accent sur l'adaptation ?",
    options: ["Le fonctionnalisme", "Le structuralisme", "L'associationnisme", "Le positivisme"],
    e: "Piaget a repris cette notion d'adaptation pour expliquer les processus cognitifs (assimilation et accommodation)."
  },
  {
    q: "Que met en avant l'associationnisme ?",
    options: [
      "La relation de cause à effet entre événements, reliant vécu sensoriel, perception et pensée",
      "L'observation exclusive des processus inconscients",
      "L'étude de la seule réalité physiologique",
      "L'existence d'un stade psychosexuel unique"
    ],
    e: "C'est l'une des approches épistémologiques qui ont influencé l'évolution de la psychologie."
  },

  // ───────── CM 4 : Apprentissage et conditionnement ─────────
  {
    q: "Dans l'expérience de Pavlov, quel est le stimulus inconditionnel ?",
    options: ["La présentation de la nourriture", "La sonnerie", "La salivation", "La cage"],
    e: "La salivation est la réponse. La nourriture déclenche naturellement la réponse : c'est le stimulus inconditionnel."
  },
  {
    q: "Au cours de l'apprentissage, la sonnerie (stimulus neutre) devient…",
    options: ["Un stimulus conditionnel", "Un stimulus inconditionnel", "Un renforçateur négatif", "Une punition"],
    e: "Elle devient capable à elle seule de déclencher la réponse salivaire : c'est le conditionnement répondant."
  },
  {
    q: "Un rat apprend à appuyer sur un levier pour arrêter des chocs électriques. De quel conditionnement s'agit-il ?",
    options: ["Le conditionnement opérant", "Le conditionnement répondant", "L'apprentissage vicariant", "Un simple instinct"],
    e: "Le rat « choisit » un comportement qui lui est favorable : l'action est renforcée par le soulagement."
  },
  {
    q: "Quelle est la différence fondamentale entre renforcement et punition ?",
    options: [
      "Le renforcement augmente la probabilité d'un comportement, la punition cherche à la réduire",
      "Le renforcement réduit un comportement, la punition l'augmente",
      "Les deux augmentent un comportement",
      "Les deux n'agissent que sur les émotions"
    ],
    e: "Pour choisir, il faut établir si l'on souhaite augmenter (renforcer) ou diminuer un comportement."
  },
  {
    q: "« Faire la vaisselle pour éviter un conflit avec son conjoint » illustre…",
    options: ["Un renforcement négatif", "Un renforcement positif", "Une punition", "Un conditionnement répondant"],
    e: "Le renforcement négatif = évitement de quelque chose de nocif. Il augmente le comportement, comme le renforcement positif (compliment, argent…)."
  },
  {
    q: "Pourquoi la punition est-elle rarement efficace ?",
    options: [
      "Elle se prête à des associations inattendues et souvent négatives (honte, humiliation…)",
      "Elle augmente toujours le comportement visé",
      "Elle supprime à coup sûr le comportement",
      "Elle ne déclenche jamais d'émotion"
    ],
    e: "Ces émotions négatives peuvent s'associer à d'autres éléments (l'école, la leçon…) et créer d'autres problèmes."
  },
  {
    q: "Pour Tolman (1939), le renforcement est surtout…",
    options: [
      "Une variable de performance, pas la seule variable d'apprentissage",
      "La seule variable de l'apprentissage",
      "Un stimulus inconditionnel",
      "Sans aucun rôle dans le comportement"
    ],
    e: "Une fois qu'il a appris, l'organisme choisit de refaire ou non : le renforcement intervient à ce niveau, ce qui a marqué l'arrivée du cognitivisme."
  },

  // ───────── CM 5 : Du comportementalisme aux TCC ─────────
  {
    q: "Quelle proposition de Carl Rogers a fait évoluer la pratique clinique ?",
    options: [
      "L'acceptation inconditionnelle du patient et le focus sur l'alliance thérapeutique",
      "L'association libre",
      "La théorie psychosexuelle du développement",
      "Le conditionnement opérant"
    ],
    e: "Les humanistes se centrent sur le vécu des individus dans leur contexte."
  },
  {
    q: "Qu'ont proposé Dollard et Miller ?",
    options: [
      "Un modèle d'apprentissage basé sur les expériences précoces et cumulatives, sans modèle de développement rigide",
      "Une théorie des stades psychosexuels",
      "Une théorie de l'attachement",
      "Un modèle exclusivement physiologique"
    ],
    e: "Contrairement aux freudiens, leur cadre laisse une liberté subjective à l'individu quant à la pathologie qui l'affecte."
  },
  {
    q: "Laquelle de ces notions n'est PAS centrale dans la théorie de l'apprentissage social de Bandura ?",
    options: ["L'association libre", "L'apprentissage vicariant", "Le déterminisme réciproque", "Le sentiment d'auto-efficacité"],
    e: "Bandura : apprentissage par observation (vicariant), déterminisme réciproque, auto-efficacité, modelling. L'association libre est une pratique psychanalytique classique."
  },

  // ───────── CM 6 : Autres domaines et TCC ─────────
  {
    q: "Quelle théorie de Bowlby éclaire la création du lien avec l'autre et l'exploration du monde par l'enfant ?",
    options: ["La théorie de l'attachement", "Le conditionnement opérant", "L'apprentissage social", "Le fonctionnalisme"],
    e: "L'attachement est impliqué dans la capacité de l'enfant à explorer son monde en toute sécurité."
  },
  {
    q: "Qu'apporte la psychologie expérimentale, appuyée sur l'épistémologie positiviste, à la psychologie clinique ?",
    options: [
      "Une méthodologie rigoureuse : hypothèses réfutables et attention à la validité interne et externe",
      "L'interprétation des rêves",
      "L'introspection comme méthode principale",
      "Le recours exclusif à l'association libre"
    ],
    e: "La TCC est avant tout une approche empirique qui a démontré son efficacité sur la souffrance psychique."
  },
  {
    q: "Que montrent des études menées auprès de patients suivant une psychothérapie TCC ?",
    options: [
      "Des modifications cérébrales positives suite à la psychothérapie",
      "Aucun changement au niveau cérébral",
      "Une détérioration des fonctions mnésiques",
      "Une disparition immédiate de tous les symptômes"
    ],
    e: "Ces résultats viennent confirmer, expliquer et valider les acquis d'une psychothérapie efficace."
  }
];
