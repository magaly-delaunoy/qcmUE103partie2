/*
  Banque de questions – UE PY00103T, Partie 2
  Approche comportementale, cognitive et émotionnelle (CM 1 à 6)

  Deux types de questions :
  • QCM : { q, options: [4 réponses], e }  → la BONNE réponse est TOUJOURS la première de la liste
    "options" (le jeu mélange l'ordre à l'affichage).
  • VRAI/FAUX : { type: "vf", vrai: true ou false, q: "affirmation", e }
  "e" = explication affichée après la réponse.
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
  },

  // ───────── Questions supplémentaires ─────────
  {
    q: "Selon l'OMS, quelle part de la population mondiale n'a pas accès aux services de santé essentiels ?",
    options: ["Au moins la moitié", "Environ 10 %", "Environ un quart", "Moins de 5 %"],
    e: "L'OMS considère l'accès à des soins adaptés et abordables comme un droit fondamental, alors qu'au moins la moitié de la population mondiale n'y a pas accès."
  },
  {
    q: "Que vise la « couverture sanitaire universelle » encouragée par l'OMS ?",
    options: [
      "Que chaque personne puisse recourir aux services de santé essentiels, de la promotion aux soins palliatifs, où et quand elle en a besoin",
      "Réserver les soins aux personnes ayant un diagnostic psychiatrique",
      "Remplacer la prévention par le traitement médicamenteux",
      "Limiter les soins à l'hôpital"
    ],
    e: "Elle englobe promotion de la santé, prévention, traitement, réadaptation et soins palliatifs."
  },
  {
    q: "Quelle place occupent les maladies mentales parmi les maladies les plus fréquentes, d'après le cours ?",
    options: ["La 3e place, après le cancer et les maladies cardiovasculaires", "La 1re place", "La 10e place", "La dernière place"],
    e: "Elles sont associées à une souffrance importante pour la personne et son entourage, et à un coût économique élevé."
  },
  {
    q: "Que révèle Gurin (1990) à propos des problèmes de santé, émotionnels ou de dépendance ?",
    options: [
      "Une rémission spontanée : 90 % des interrogés disent avoir surmonté un problème significatif dans l'année",
      "Aucune personne ne s'en remet sans traitement",
      "Que les troubles sont toujours chroniques",
      "Que seule l'hospitalisation permet de guérir"
    ],
    e: "Il existe donc une rémission spontanée, même si les troubles mentaux restent coûteux sur le plan humain et économique."
  },
  {
    q: "Que montre l'enquête de l'APA (2004) sur les maladies psychiques ?",
    options: [
      "Elles sont considérées comme moins honteuses, la grande majorité consulterait probablement un professionnel",
      "Elles sont plus stigmatisées qu'avant",
      "Personne ne souhaite consulter un professionnel",
      "La honte n'est jamais une raison de ne pas demander d'aide"
    ],
    e: "Pourtant, 20 % identifient encore la honte comme raison majeure de ne pas demander de l'aide."
  },
  {
    q: "Quelles personnes bénéficient le moins d'une prise en charge psychologique (Minami & Wampold, 2008) ?",
    options: [
      "Les personnes défavorisées : personnes âgées, minorités ethniques, niveau socio-économique bas",
      "Les personnes les plus diplômées",
      "Les jeunes adultes en milieu urbain",
      "Les personnes en emploi stable"
    ],
    e: "Aux États-Unis, moins de 16 % des personnes présentant des problèmes psychologiques sont vues par des cliniciens."
  },
  {
    q: "Dans l'enquête MGEN (2014), quelle est, pour 8 personnes sur 10, la meilleure réponse aux souffrances psychiques ?",
    options: ["La psychothérapie", "Le traitement médicamenteux", "L'hospitalisation", "Le repos seul"],
    e: "Viennent ensuite le soutien de l'entourage (65 %), le traitement médicamenteux (58 %) et l'hospitalisation (47 %)."
  },
  {
    q: "Lequel de ces éléments est une manifestation du TSPT décrite dans le cours ?",
    options: [
      "Des réviviscences et des flash-backs",
      "Une euphorie durable",
      "Des idées de grandeur",
      "Une perte totale du langage"
    ],
    e: "Le TSPT s'accompagne aussi de ruminations, d'évitement, d'hypervigilance et de troubles de la concentration et du sommeil."
  },
  {
    q: "Dans l'étude sur les attentats de janvier 2015, quel groupe présentait la prévalence de TSPT la plus élevée ?",
    options: [
      "Les personnes directement menacées",
      "Les témoins à proximité",
      "Les intervenants (policiers, soignants)",
      "Les témoins indirects éloignés"
    ],
    e: "La prévalence allait de 3 % chez les témoins à proximité jusqu'à 31 % chez les personnes directement menacées."
  },
  {
    q: "Comment peut-on définir la stigmatisation ?",
    options: [
      "Toute expérience négative vécue parce qu'on possède une caractéristique ne correspondant pas aux normes d'une société",
      "Un traitement médical spécifique aux troubles mentaux",
      "Un trouble de la personnalité",
      "Une restriction légale des droits uniquement"
    ],
    e: "La caractéristique (physique, psychologique…) est appelée « stigmate »."
  },
  {
    q: "Lequel est une conséquence possible de la stigmatisation sur la qualité de vie ?",
    options: [
      "Une baisse de l'estime de soi et un isolement",
      "Un meilleur accès aux soins",
      "Une meilleure observance thérapeutique",
      "Une hausse de l'estime de soi"
    ],
    e: "Elle peut aussi entraîner stress, inadaptation sociale, marginalisation et exclusion de la sphère professionnelle."
  },
  {
    q: "Que rappelle le rapport du Sénat (Goujon & Gautier) cité dans le cours ?",
    options: [
      "Tout malade mental n'est pas dangereux, et la dangerosité n'est pas nécessairement permanente",
      "Tout malade mental est dangereux",
      "Toute personne dangereuse a un trouble mental",
      "La dangerosité est toujours un état permanent"
    ],
    e: "Il invite à ne pas confondre dangerosité et maladie mentale."
  },
  {
    q: "Selon Pignon et al. (2017), à quoi est liée la stigmatisation des troubles psychiatriques ?",
    options: [
      "Aux représentations relayées par les médias, notamment après des faits divers violents",
      "À la seule ignorance des soignants",
      "À l'absence de traitement efficace",
      "À l'âge des patients"
    ],
    e: "Le travail de Pignon et al. porte sur l'évolution des représentations sociales des troubles bipolaires."
  },
  {
    q: "Quelle recommandation figure dans la déclaration d'Helsinki sur la santé mentale (citée par Roelandt & Caria, 2007) ?",
    options: [
      "Reconnaître l'expertise et l'expérience des patients et des aidants",
      "Limiter la participation des familles",
      "Réduire la santé mentale à l'hospitalisation",
      "Séparer la prévention des soins"
    ],
    e: "Elle recommande aussi de lutter collectivement contre la stigmatisation, la discrimination et l'inégalité."
  },
  {
    q: "Comment le DSM-5 caractérise-t-il le trouble de la personnalité borderline ?",
    options: [
      "Un mode général d'instabilité des relations, de l'image de soi et des affects, avec une impulsivité marquée",
      "Un mode général de méfiance envers autrui",
      "Une peur excessive du jugement d'autrui, avec inhibition sociale",
      "Une indifférence durable aux relations sociales"
    ],
    e: "Il est présent au début de l'âge adulte et dans différents contextes. Les critères diagnostiques ne sont pas à connaître."
  },
  {
    q: "Quel est le titre de la thèse de 1873 de Théodule Ribot ?",
    options: ["L'Hérédité psychologique", "Psychopathologie générale", "Stigmate", "Les troubles de la mémoire"],
    e: "C'est la première thèse française de psychologie construite sur des bases et une démarche scientifiques."
  },
  {
    q: "Que désigne la notion de « psychogenèse » introduite par Jaspers ?",
    options: [
      "L'étude de l'origine et de l'évolution des phénomènes psychiques",
      "L'origine génétique des troubles uniquement",
      "La classification des maladies mentales",
      "Le traitement par la parole"
    ],
    e: "Jaspers y associe la notion de « processus » : développement des maladies mentales et modification des signes cliniques."
  },
  {
    q: "Comment Fouques et Bioy (2020) situent-ils la psychopathologie ?",
    options: [
      "Comme une discipline à part entière, transversale à la psychiatrie, la psychologie clinique et la psychanalyse",
      "Comme une sous-branche de la psychiatrie",
      "Comme une méthode de la neurologie",
      "Comme une branche de la sociologie"
    ],
    e: "Elle étudie les fonctionnements désignés comme anormaux, qu'ils relèvent ou non d'une maladie mentale."
  },
  {
    q: "Comment Piéron (1963) définit-il la psychopathologie ?",
    options: [
      "L'étude des troubles mentaux : description, classification, mécanismes et évolution",
      "L'étude du seul comportement observable",
      "La science de l'inconscient",
      "La mesure de l'intelligence"
    ],
    e: "Elle serait proche de la psychologie clinique et de la psychiatrie."
  },
  {
    q: "Combien de conceptions de la normalité le cours présente-t-il, après la normalité statistique ?",
    options: [
      "Trois autres : idéale/sociétale, fonctionnelle et subjective",
      "Une seule : la normalité sociale",
      "Cinq autres, toutes médicales",
      "Aucune, la normalité est universelle"
    ],
    e: "Statistique, idéale/sociétale, fonctionnelle et « subjective » (selon l'évaluateur) : aucune n'est suffisante à elle seule."
  },
  {
    q: "Pourquoi faut-il tenir compte du Zeitgeist pour comprendre un courant de pensée ?",
    options: [
      "Pour comprendre comment et pourquoi la science a évolué dans une direction donnée",
      "Pour mesurer l'efficacité d'un traitement",
      "Pour établir un diagnostic",
      "Pour calculer un écart-type"
    ],
    e: "Le regard rétrospectif aide, mais les détails et nuances sont trop souvent oubliés."
  },
  {
    q: "Quelle découverte de Breuer et Freud marque l'histoire de la psychothérapie selon le cours ?",
    options: [
      "Une méthode qui écoute l'individu dans sa souffrance, avec compassion et compréhension",
      "Le conditionnement opérant",
      "La théorie de l'attachement",
      "Les tests d'intelligence"
    ],
    e: "Mais les origines de la psychologie se trouvent bien avant cette découverte."
  },
  {
    q: "Qu'est-ce qui poussera la psychologie à considérer les processus non observables (cognitifs) ?",
    options: [
      "La diffusion des travaux de Piaget et le Zeitgeist de l'après-Première Guerre mondiale",
      "L'invention de l'imagerie cérébrale",
      "L'abandon de toute méthode empirique",
      "La disparition du comportementalisme au XIXe siècle"
    ],
    e: "C'est alors que l'approche cognitiviste prend de plus en plus d'importance."
  },
  {
    q: "Quels processus Piaget a-t-il repris pour expliquer les processus cognitifs dans l'apprentissage ?",
    options: ["L'accommodation et l'assimilation", "Le renforcement et la punition", "L'attachement et la séparation", "Le conditionnement et l'extinction"],
    e: "Il a repris la notion d'adaptation, centrale dans le fonctionnalisme de Darwin."
  },
  {
    q: "Quels auteurs sont cités parmi les comportementalistes à l'origine de l'approche TCC ?",
    options: ["Watson, Thorndike, Skinner et, bien plus tard, Bandura", "Freud, Jung, Adler et Lacan", "Platon, Descartes et Épictète", "Rogers, Maslow et Bowlby"],
    e: "Leurs objets d'étude portaient sur les réactions des organismes selon les contextes."
  },
  {
    q: "Sur quoi repose le modèle de la psychopathologie dans l'approche TCC ?",
    options: [
      "Sur l'apprentissage : le cumul des expériences et des vécus contribue à la capacité de s'adapter ou non",
      "Sur l'hérédité exclusivement",
      "Sur les conflits inconscients",
      "Sur l'interprétation des rêves"
    ],
    e: "La TCC cherche d'abord à comprendre le processus d'apprentissage responsable de l'état actuel de l'individu, puis propose des moyens de l'améliorer."
  },
  {
    q: "Comment qualifier la réponse de salivation dans le conditionnement répondant de Pavlov ?",
    options: ["Une réponse innée, physiologique et le plus souvent inconsciente", "Un choix délibéré de l'animal", "Une réponse apprise par imitation", "Une réponse uniquement cognitive"],
    e: "À l'inverse, le conditionnement opérant implique un choix de l'organisme pour favoriser un comportement plutôt qu'un autre."
  },
  {
    q: "Une fois que le rat a appris que le levier arrête les chocs, le fait d'appuyer chaque fois qu'il veut les arrêter est…",
    options: ["Une performance", "L'apprentissage lui-même", "Une punition", "Un conditionnement répondant"],
    e: "Le renforcement augmente les chances que l'organisme exécute ce qu'il a appris : il agit sur la performance."
  },
  {
    q: "Par quoi la perception de l'individu est-elle influencée lors du traitement de l'information ?",
    options: [
      "Par ses biais cognitifs, ses apprentissages antérieurs, son état physiologique et émotionnel",
      "Uniquement par les stimuli extérieurs",
      "Uniquement par la mémoire à court terme",
      "Par aucun facteur individuel"
    ],
    e: "L'apprentissage implique aussi les processus de mémoire."
  },
  {
    q: "Selon Tolman, que regroupe l'apprentissage en plus du renforcement ?",
    options: [
      "La motivation, l'imitation, le modelling et les processus cognitifs de mémoire",
      "Uniquement les stimuli inconditionnels",
      "Uniquement la punition",
      "Seulement les réflexes"
    ],
    e: "Plus le renforcement est motivant, plus on tend à reproduire l'apprentissage."
  },
  {
    q: "Pourquoi l'approche purement comportementaliste s'est-elle avérée insuffisante ?",
    options: [
      "Elle était trop réductionniste pour expliquer le comportement et proposer une prise en charge exhaustive",
      "Elle n'utilisait aucune observation",
      "Elle ne s'intéressait qu'aux rêves",
      "Elle ignorait totalement le conditionnement"
    ],
    e: "L'arrivée du cognitivisme (Zeitgeist !) a permis de dépasser ces limites."
  },
  {
    q: "Quelles limites des pratiques classiques les psychanalystes ont-ils exprimées, d'après le cours ?",
    options: [
      "L'association libre, la non-intervention du thérapeute et le manque d'objectif thérapeutique",
      "L'excès de manuels diagnostiques",
      "L'usage trop fréquent de tests",
      "L'absence de théorie du développement"
    ],
    e: "Cette frustration a conduit certains théoriciens, dont Dollard et Miller, à chercher une compréhension plus empirique."
  },
  {
    q: "Quel auteur a fourni, par ses travaux menés dès les années 1950, la base empirique démontrant la scientificité des TCC ?",
    options: ["Albert Bandura", "Sigmund Freud", "Carl Rogers", "Karl Jaspers"],
    e: "Bandura intègre les épistémologies comportementaliste, fonctionnaliste et cognitiviste dans sa théorie de l'apprentissage social."
  },
  {
    q: "Quels aspects de la psychologie cognitive influencent la compréhension de la psychopathologie ?",
    options: [
      "Les capacités attentionnelles, le traitement de l'information et les processus de mémoire",
      "Uniquement les rêves",
      "Uniquement les réflexes innés",
      "L'astrologie et la graphologie"
    ],
    e: "Ces découvertes affinent les méthodes cliniques et la compréhension du rôle du cerveau dans les dysfonctionnements."
  },
  {
    q: "Que permettent la neuropsychologie et la psychophysiologie selon le cours ?",
    options: [
      "Mieux comprendre la psychopathologie en termes de fonctionnement ou dysfonctionnement cérébral",
      "Se passer de toute psychothérapie",
      "Supprimer la notion de trouble mental",
      "Remplacer la psychologie clinique"
    ],
    e: "Elles renseignent aussi sur les moyens de mieux traiter les troubles."
  },
  // ───────── Vrai / Faux (questions d'auto-test des CM 3 à 6) ─────────
  {
    type: "vf",
    vrai: true,
    q: "Le « Zeitgeist » désigne l'esprit d'une époque, un esprit qui évolue constamment selon les attitudes et le contexte de la société.",
    e: "C'est pour cela qu'il est utile pour comprendre pourquoi la psychologie a évolué dans certaines directions."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le Zeitgeist est un concept figé qui reste identique d'une époque à l'autre.",
    e: "Faux : cet esprit évolue constamment, car il est sujet aux attitudes et au contexte de la société."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour comprendre une découverte, un événement historique ou un courant de pensée, il faut tenir compte du Zeitgeist.",
    e: "Le regard rétrospectif aide à comprendre comment et pourquoi la science a évolué, mais les détails et nuances sont trop souvent oubliés."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le Zeitgeist ne comprend que les connaissances scientifiques d'une époque, pas ses événements.",
    e: "Faux : il comprend toute l'actualité d'une époque, c'est-à-dire les événements, mais aussi les connaissances et grandes découvertes."
  },
  {
    type: "vf",
    vrai: true,
    q: "La découverte de Breuer et Freud propose d'écouter l'individu dans sa souffrance, avec une attitude de compassion et de compréhension.",
    e: "Elle a marqué l'histoire de la psychologie clinique, notamment de la psychothérapie."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les origines de la psychologie commencent avec la découverte de Breuer et Freud ; il n'y avait rien avant.",
    e: "Faux : les origines de la psychologie se trouvent bien avant, jusque dans la philosophie grecque."
  },
  {
    type: "vf",
    vrai: true,
    q: "Platon est le premier à avoir posé le problème de la division entre corps et esprit, question reprise bien plus tard par Descartes.",
    e: "Dualisme versus monisme : l'intérêt pour la psyché existait bien avant la psychologie scientifique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le problème de la division entre corps et esprit a été posé pour la première fois par Descartes.",
    e: "Faux : c'est Platon qui l'a posé en premier ; Descartes l'a repris bien plus tard."
  },
  {
    type: "vf",
    vrai: true,
    q: "« Ce n'est pas les événements qui dérangent les hommes, mais surtout ce qu'ils pensent de ces événements » est une phrase d'Épictète.",
    e: "Les stoïciens mettaient l'accent sur l'acceptation du monde et de ses événements, un rôle décisif pour la bonne santé mentale."
  },
  {
    type: "vf",
    vrai: false,
    q: "C'est la pensée stoïque qui a le plus influencé l'approche psychanalytique.",
    e: "Faux : c'est l'approche cognitivo-comportementale que la pensée stoïque a le plus influencée."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'associationnisme met en avant la relation de « cause à effet » des événements.",
    e: "Il permet de comprendre le lien entre le vécu sensoriel, la perception et la pensée qui en découle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le fonctionnalisme s'appuie surtout sur les travaux de Pavlov sur le conditionnement.",
    e: "Faux : il s'appuie surtout sur les travaux de Darwin sur la survie et l'évolution de l'espèce."
  },
  {
    type: "vf",
    vrai: true,
    q: "Piaget a repris la notion d'adaptation du fonctionnalisme pour expliquer les processus cognitifs dans l'apprentissage (accommodation et assimilation).",
    e: "La capacité de s'adapter est primordiale pour la survie et le bien-être, y compris sur le plan psychologique."
  },
  {
    type: "vf",
    vrai: true,
    q: "À la naissance de la psychologie scientifique, les structuralistes s'intéressaient surtout à la réalité physiologique pour comprendre les différences individuelles.",
    e: "Ces travaux ont ensuite été intégrés dans l'approche comportementaliste du début du XXe siècle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les structuralistes s'intéressaient surtout aux processus cognitifs non observables.",
    e: "Faux : ils s'intéressaient surtout à la réalité physiologique de l'individu. Les processus non observables seront considérés plus tard avec le cognitivisme."
  },
  {
    type: "vf",
    vrai: true,
    q: "Au début du XXe siècle, l'observation directe du comportement devient l'approche fondamentale de la psychologie scientifique.",
    e: "Le comportementalisme est resté l'approche la plus empirique jusqu'à la première moitié du XXe siècle."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le comportementalisme s'impose parce qu'il permet de mieux comprendre les processus cachés (pensée, émotion).",
    e: "Faux : il s'impose à défaut de mieux comprendre ces processus « cachés », et reste l'approche la plus empirique de l'époque."
  },
  {
    type: "vf",
    vrai: true,
    q: "La diffusion des travaux de Piaget et le Zeitgeist de l'après-Première Guerre mondiale ont favorisé l'essor du cognitivisme.",
    e: "La psychologie s'est alors mise à considérer les processus non observables : les aspects cognitifs."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'essor du cognitivisme est dû uniquement à la diffusion des travaux de Freud.",
    e: "Faux : ce sont la diffusion des travaux de Piaget et le Zeitgeist post-Première Guerre mondiale qui poussent la psychologie vers les processus cognitifs."
  },
  {
    type: "vf",
    vrai: true,
    q: "La psychologie expérimentale s'appuie sur l'épistémologie positiviste et exige une méthodologie systématique et rigoureuse.",
    e: "Elle a eu un effet décisif sur la psychologie clinique, qui a dû devenir plus empirique."
  },
  {
    type: "vf",
    vrai: false,
    q: "La psychologie expérimentale s'appuie sur l'épistémologie fonctionnaliste.",
    e: "Faux : elle s'appuie sur l'épistémologie positiviste."
  },
  {
    type: "vf",
    vrai: true,
    q: "En psychologie expérimentale, une étude doit être conceptualisée en hypothèses réfutables et tenir compte de la validité externe et interne.",
    e: "Une hypothèse réfutable peut être mise à l'épreuve des données et éventuellement infirmée, ce qui garantit une démarche scientifique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Une bonne hypothèse expérimentale est formulée de telle sorte qu'aucune donnée ne puisse jamais la contredire.",
    e: "Faux : une hypothèse réfutable peut être testée et infirmée par les données, c'est ce qui la rend scientifique."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les capacités attentionnelles, le traitement de l'information et les processus de mémoire enrichissent la compréhension de la psychopathologie.",
    e: "Les variables qui parasitent les processus cognitifs sont aussi de mieux en mieux comprises, ce qui affine les méthodes cliniques."
  },
  {
    type: "vf",
    vrai: true,
    q: "Piaget a eu une influence importante sur la conceptualisation de la cognition grâce à ses travaux sur la pensée de l'enfant et son évolution.",
    e: "Il s'inscrit dans la psychologie développementale."
  },
  {
    type: "vf",
    vrai: false,
    q: "La théorie de l'attachement est l'apport principal de Piaget à la psychologie développementale.",
    e: "Faux : la théorie de l'attachement est de Bowlby ; Piaget a surtout influencé la conceptualisation de la cognition."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Bowlby, l'attachement conditionne la capacité de l'enfant à explorer son monde en toute sécurité.",
    e: "Il construit ainsi son monde à partir de ses expériences et des liens cognitifs qu'il en fait."
  },
  {
    type: "vf",
    vrai: false,
    q: "La théorie de l'attachement de Bowlby porte surtout sur le développement du langage.",
    e: "Faux : elle porte sur la création du lien avec l'autre, et sur la manière dont ces relations contribuent à l'apprentissage et à l'organisation cognitive."
  },
  {
    type: "vf",
    vrai: true,
    q: "Des études menées auprès de patients suivant une TCC ont mis en évidence des modifications positives au niveau cérébral.",
    e: "Cela vient confirmer, expliquer et valider les acquis d'une psychothérapie efficace."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les observations cérébrales réalisées après une TCC infirment l'efficacité de cette psychothérapie.",
    e: "Faux : elles confirment, expliquent et valident l'efficacité d'une psychothérapie efficace."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les comportementalistes se sont concentrés sur les éléments observables, ce qui ne permettait qu'une compréhension partielle de la psychopathologie.",
    e: "D'où l'intérêt d'intégrer les apports de la cognition et des approches humanistes."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'approche comportementaliste pure offrait une compréhension exhaustive de la psychopathologie.",
    e: "Faux : en se concentrant sur le comportement observable, elle n'en offrait qu'une compréhension partielle."
  },
  {
    type: "vf",
    vrai: true,
    q: "Carl Rogers a été parmi les premiers à proposer de se focaliser sur l'alliance thérapeutique, notamment par l'acceptation inconditionnelle du patient.",
    e: "Cette diversité de pratiques a eu un effet très positif sur la prise en charge."
  },
  {
    type: "vf",
    vrai: false,
    q: "Carl Rogers est à l'origine de la méthode de l'association libre.",
    e: "Faux : Rogers est associé à l'acceptation inconditionnelle et à l'alliance thérapeutique. L'association libre est une pratique psychanalytique classique."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les humanistes centrent leur approche sur le vécu des individus dans leur contexte individuel.",
    e: "L'individu est conçu comme ayant besoin de s'adapter au mieux à son contexte."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'association libre, la non-intervention du psychothérapeute et le manque d'objectif thérapeutique ont provoqué de la frustration chez certains psychanalystes.",
    e: "Quelques théoriciens ont alors cherché à mieux comprendre ces limites d'un point de vue empirique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Certains psychanalystes étaient frustrés par un excès d'interventions du psychothérapeute dans les pratiques classiques.",
    e: "Faux : ils critiquaient au contraire la non-intervention du psychothérapeute (avec l'association libre et le manque d'objectif thérapeutique)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les deux ouvrages fondateurs de Dollard et Miller sont « Imitation and Social Learning » et « Psychopathology and Psychotherapy ».",
    e: "Ils y proposent un nouveau cadre théorique pour comprendre la psychopathologie."
  },
  {
    type: "vf",
    vrai: false,
    q: "Les deux ouvrages fondateurs de Dollard et Miller sont « Stigmate » et « Psychopathologie générale ».",
    e: "Faux : ce sont « Imitation and Social Learning » et « Psychopathology and Psychotherapy »."
  },
  {
    type: "vf",
    vrai: true,
    q: "Contrairement aux freudiens, Dollard et Miller ne contraignent pas la compréhension des patients à un modèle rigide de développement comme la théorie psychosexuelle de Freud.",
    e: "Leur modèle s'articule autour d'expériences précoces et cumulatives, et laisse une liberté subjective à l'individu quant à la pathologie qui l'affecte."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le modèle de Dollard et Miller explique la prise en charge, mais pas la genèse de la psychopathologie.",
    e: "Faux : ce modèle d'apprentissage explique la genèse de la psychopathologie et donne aussi des moyens théoriques pour la prise en charge."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans sa théorie de l'apprentissage social, Bandura intègre les épistémologies comportementaliste, fonctionnaliste et cognitiviste.",
    e: "Il vise une compréhension exhaustive de la psychopathologie et utilise les mêmes théories pour remédier à la souffrance psychique."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans sa théorie de l'apprentissage social, Bandura intègre les épistémologies structuraliste, psychanalytique et humaniste.",
    e: "Faux : ce sont les épistémologies comportementaliste, fonctionnaliste et cognitiviste."
  },
  {
    type: "vf",
    vrai: true,
    q: "L'apprentissage vicariant, dans la théorie de Bandura, désigne l'apprentissage par observation.",
    e: "Les autres notions clés sont le déterminisme réciproque, le sentiment d'auto-efficacité et le modelling."
  },
  {
    type: "vf",
    vrai: false,
    q: "L'apprentissage vicariant désigne l'apprentissage par conditionnement répondant.",
    e: "Faux : c'est l'apprentissage par observation."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le sentiment d'auto-efficacité désigne la croyance d'une personne en sa capacité de réaliser une tâche ou de faire face à une situation.",
    e: "C'est l'une des quatre notions clés de Bandura, avec l'apprentissage vicariant, le déterminisme réciproque et le modelling."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le déterminisme réciproque, chez Bandura, renvoie à l'influence mutuelle entre l'individu, son comportement et son environnement.",
    e: "Aucun de ces éléments n'agit seul : ils s'influencent les uns les autres."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les travaux de Bandura, débutés dans les années 1950, servent de base empirique pour démontrer la scientificité de l'approche TCC.",
    e: "Ils ont continué tout au long de sa vie (1935-2021)."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le modèle TCC de la psychopathologie repose sur l'apprentissage : c'est le cumul des expériences qui contribue à la capacité de s'adapter ou non.",
    e: "Cette adaptation ou inadaptation impacte fortement le fonctionnement psychologique général."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le modèle TCC de la psychopathologie repose avant tout sur l'interprétation des conflits inconscients.",
    e: "Faux : il repose sur l'apprentissage."
  },
  {
    type: "vf",
    vrai: true,
    q: "Watson, Thorndike et Skinner sont cités parmi les premiers comportementalistes, Bandura venant bien plus tard.",
    e: "Les TCC ont ensuite intégré la cognition en même temps que la psychologie."
  },
  {
    type: "vf",
    vrai: true,
    q: "Les premiers comportementalistes (Watson, Thorndike, Skinner) ont longtemps cru que le renforcement était une variable d'apprentissage.",
    e: "C'est Tolman qui, en 1939, a remis cette idée en question."
  },
  {
    type: "vf",
    vrai: false,
    q: "Tolman a démontré en 1939 que le renforcement explique à lui seul l'apprentissage.",
    e: "Faux : il a démontré que le renforcement n'explique pas à lui seul l'apprentissage ; c'est une variable de performance."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans l'exemple de Pavlov, la nourriture est le stimulus inconditionnel et la sonnerie devient, au cours de l'apprentissage, un stimulus conditionnel.",
    e: "Le stimulus conditionnel est alors capable à lui seul de déclencher la réponse salivaire."
  },
  {
    type: "vf",
    vrai: false,
    q: "Dans l'exemple de Pavlov, la sonnerie est le stimulus inconditionnel dès le départ.",
    e: "Faux : au départ la sonnerie est un stimulus neutre. Le stimulus inconditionnel est la nourriture."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le conditionnement répondant correspond à une réponse innée, physiologique et le plus souvent inconsciente.",
    e: "L'exemple classique est la salivation chez le chien de Pavlov."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le conditionnement opérant correspond à une réponse innée, physiologique et inconsciente.",
    e: "Faux : le conditionnement opérant implique le choix (très subjectif) de l'organisme de favoriser un comportement plutôt qu'un autre."
  },
  {
    type: "vf",
    vrai: true,
    q: "Dans l'exemple du rat, il associe l'appui sur le levier au soulagement de l'arrêt des chocs électriques.",
    e: "C'est le principe du conditionnement opérant : l'action lui est favorable et renforce son comportement."
  },
  {
    type: "vf",
    vrai: true,
    q: "La punition est rarement efficace parce qu'elle se prête à des associations inattendues, souvent négatives.",
    e: "Par exemple honte ou humiliation, qui peuvent s'associer à d'autres éléments comme l'école ou la leçon."
  },
  {
    type: "vf",
    vrai: false,
    q: "La punition diminue toujours le comportement visé et n'entraîne aucun effet secondaire.",
    e: "Faux : elle peut diminuer un comportement (mais pas toujours) et risque de créer d'autres problèmes."
  },
  {
    type: "vf",
    vrai: true,
    q: "Le renforcement positif et le renforcement négatif augmentent tous les deux la probabilité d'un comportement.",
    e: "Positif : acquisition d'un élément positif (un compliment). Négatif : évitement de quelque chose de nocif (faire la vaisselle pour éviter un conflit)."
  },
  {
    type: "vf",
    vrai: false,
    q: "Le renforcement négatif cherche à diminuer la probabilité d'un comportement.",
    e: "Faux : tout renforcement vise à augmenter un comportement. Le renforcement négatif passe par l'évitement de quelque chose de nocif."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Tolman, le renforcement est une variable de performance.",
    e: "Une fois l'apprentissage acquis, l'organisme peut choisir de le refaire ou non : le renforcement intervient à ce niveau."
  },
  {
    type: "vf",
    vrai: true,
    q: "Pour Tolman, l'apprentissage regroupe la motivation, l'imitation, le modelling et les processus cognitifs de mémoire.",
    e: "Le renforcement n'en est donc qu'une composante parmi d'autres."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon Tolman, le renforcement est une variable d'apprentissage et non de performance.",
    e: "Faux : c'est l'inverse, le renforcement est une variable de performance."
  },
  {
    type: "vf",
    vrai: true,
    q: "Quand le rat, qui a appris que le levier arrête les chocs, appuie dessus chaque fois qu'il veut les arrêter, il s'agit d'une performance et non de l'apprentissage.",
    e: "Le renforcement augmente les chances que l'organisme exécute ce qu'il a appris."
  },
  {
    type: "vf",
    vrai: false,
    q: "Selon Tolman, plus le renforcement est motivant, moins on a tendance à reproduire l'apprentissage.",
    e: "Faux : plus le renforcement est motivant, plus on a tendance à reproduire l'apprentissage."
  }
];
