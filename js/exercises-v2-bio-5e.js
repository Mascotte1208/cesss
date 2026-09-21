(function () {
    if (typeof BIO_CHAPITRES === 'undefined') return;
    var GENERIC_PATTERNS = [
        /^Quelle notion est directement liée au chapitre/,
        /^Quelle notion faut-il mobiliser pour résoudre un exercice sur/,
        /^Dans une question de type CESS portant sur .* quel élément doit apparaître dans le raisonnement/,
        /^Quelle démarche produit la solution la plus rigoureuse/,
        /^Quelle démarche convient pour analyser un document géographique/,
        /^Quelle démarche convient pour analyser une expérience/,
        /^Quelle pratique faut-il éviter dans une réponse sur/,
        /^Avant d.interpréter un graphique ou un tableau lié à/,
        /^Quelle structure convient à une réponse de synthèse sur/,
        /^Dans « .* », quelle notion faut-il savoir définir précisément/,
        /^Quel couple de notions doit être mis en relation pour expliquer le chapitre/,
        /^Comment vérifier que la notion .* est réellement comprise/,
        /^Dans une situation nouvelle portant sur/
    ];
    function isGeneric(q) { return GENERIC_PATTERNS.some(function (p) { return p.test(q); }); }

    var NOUVEAUX_EXERCICES = {
        'bio5_adn': [
            {
                question: "Avec quelle base l'adénine s'apparie-t-elle dans une molécule d'ADN ?",
                options: ["La thymine", "La guanine", "La cytosine", "L'uracile"],
                correct: 0,
                correction: "Dans l'ADN, l'appariement des bases suit la règle de complémentarité A–T et C–G. L'uracile n'existe pas dans l'ADN, elle remplace la thymine dans l'ARN.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Que signifie le fait que les deux brins d'une molécule d'ADN sont « antiparallèles » ?",
                options: [
                    "Ils sont orientés en sens opposé, l'un 5'→3' et l'autre 3'→5'",
                    "Ils portent une séquence de nucléotides identique",
                    "Ils se répliquent dans deux cellules différentes",
                    "Ils ne peuvent jamais s'apparier entre eux"
                ],
                correct: 0,
                correction: "L'antiparallélisme signifie que les deux brins de la double hélice courent en sens inverse l'un de l'autre, ce qui est essentiel pour comprendre le sens de lecture des enzymes de réplication.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Pourquoi la réplication de l'ADN est-elle qualifiée de « semi-conservative » ?",
                options: [
                    "Chaque nouvelle double hélice contient un brin ancien (parental) et un brin nouvellement synthétisé",
                    "Les deux brins nouveaux formés sont conservés ensemble dans le noyau d'origine",
                    "La moitié de la molécule d'ADN est détruite après chaque réplication",
                    "Un seul des deux brins parentaux est utilisé, l'autre étant éliminé"
                ],
                correct: 0,
                correction: "La réplication semi-conservative produit deux doubles hélices, chacune formée d'un ancien brin (matrice) et d'un brin complémentaire nouvellement synthétisé.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Les ADN polymérases ne synthétisent un nouveau brin que dans le sens 5' vers 3'. Quelle conséquence cela a-t-il sur la réplication des deux brins d'une molécule d'ADN ?",
                options: [
                    "Un brin est synthétisé en continu, l'autre par courts fragments discontinus (brin retardé)",
                    "Les deux brins sont toujours synthétisés de façon parfaitement continue",
                    "La réplication s'arrête définitivement sur le brin retardé",
                    "Le brin matrice est détruit dès qu'il a été lu une première fois"
                ],
                correct: 0,
                correction: "Comme la polymérisation ne se fait que 5'→3' et que les deux brins matrices sont antiparallèles, un brin est copié en continu (brin précoce) et l'autre par fragments discontinus ensuite reliés (brin retardé).",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une cellule dont l'enzyme de relecture de l'ADN polymérase est inactivée accumule un taux d'erreurs de réplication anormalement élevé. Que permet de conclure cette observation ?",
                options: [
                    "L'enzyme de relecture participe normalement à la réduction des erreurs commises pendant la réplication",
                    "L'ADN polymérase n'intervient pas du tout dans la réplication de l'ADN",
                    "Une mutation ne peut jamais toucher la molécule d'ADN d'une cellule",
                    "Le taux d'erreur de réplication est totalement indépendant des enzymes présentes"
                ],
                correct: 0,
                correction: "Les mécanismes de relecture et de réparation associés à la réplication réduisent fortement le taux d'erreur ; leur inactivation expérimentale confirme leur rôle en augmentant le nombre d'erreurs observées.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Deux cellules d'un même organisme (par exemple une cellule musculaire et un neurone) possèdent exactement le même génome mais des structures et des fonctions très différentes. Quel mécanisme explique le mieux cette observation ?",
                options: [
                    "Une régulation de l'expression des gènes (accessibilité de la chromatine, séquences régulatrices) fait que seule une partie du génome est utilisée dans chaque type cellulaire, sans que la séquence d'ADN change",
                    "Chaque cellule possède en réalité un génome différent adapté à sa fonction",
                    "La réplication introduit des mutations différentes selon le type cellulaire",
                    "Les chromosomes se dupliquent de façon différente selon la fonction de la cellule"
                ],
                correct: 0,
                correction: "Le génome contient des régions codantes, régulatrices et non codantes ; l'expression des gènes varie selon le type cellulaire et les signaux reçus, notamment via l'accessibilité de la chromatine, sans modification de la séquence d'ADN.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_proteines': [
            {
                question: "Quel est le rôle de l'épissage lors de la maturation de l'ARN pré-messager chez les eucaryotes ?",
                options: [
                    "Retirer les introns et relier les exons entre eux",
                    "Ajouter directement des acides aminés à la protéine naissante",
                    "Copier le brin d'ADN codant plutôt que le brin matrice",
                    "Traduire les codons de l'ARNm en acides aminés"
                ],
                correct: 0,
                correction: "L'épissage est une étape de maturation qui retire les introns du pré-ARNm et assemble les exons pour former l'ARNm mature, avant même que la traduction ne commence.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Quelle molécule assure la correspondance entre un codon de l'ARNm et l'acide aminé correspondant pendant la traduction ?",
                options: ["L'ARN de transfert (ARNt)", "L'ADN polymérase", "Le ribosome à lui seul", "L'ARN pré-messager"],
                correct: 0,
                correction: "Les ARNt apportent chacun un acide aminé spécifique et reconnaissent le codon correspondant sur l'ARNm grâce à leur anticodon ; le ribosome catalyse ensuite la liaison entre acides aminés successifs.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Un gène subit une substitution d'un nucléotide, mais la protéine produite reste strictement identique à la protéine d'origine. Quelle explication est la plus probable ?",
                options: [
                    "La mutation est silencieuse : la redondance du code génétique permet à un codon différent de coder le même acide aminé",
                    "La mutation a été réparée pendant la traduction de l'ARNm",
                    "La traduction n'a tout simplement pas eu lieu dans cette cellule",
                    "L'ARNm correspondant n'a jamais été transcrit"
                ],
                correct: 0,
                correction: "Le code génétique est redondant : plusieurs codons peuvent coder le même acide aminé, notamment lorsque la substitution touche la troisième base du codon. La protéine finale peut donc rester inchangée.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une mutation fait apparaître un codon stop prématuré au milieu d'un gène. Quelle est la conséquence directe sur la traduction ?",
                options: [
                    "Le ribosome arrête la traduction avant la fin prévue, produisant une protéine tronquée",
                    "Le ribosome ignore le codon stop et poursuit normalement la traduction",
                    "La transcription du gène recommence automatiquement depuis le début",
                    "L'ARNt corrige de lui-même l'erreur avant qu'elle n'affecte la protéine"
                ],
                correct: 0,
                correction: "Un codon stop signale l'arrêt de la traduction. Apparu prématurément, il produit une protéine incomplète, dont l'activité est souvent perdue ou modifiée selon la portion manquante.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Deux protéines ont exactement la même séquence d'acides aminés, mais l'une est active et l'autre non. D'après le cours, quel facteur peut expliquer cette différence ?",
                options: [
                    "Un repliement tridimensionnel différent, ou une modification après traduction, qui change la fonction sans modifier la séquence",
                    "Une transcription différente du même gène dans les deux cas",
                    "Un code génétique différent selon la cellule considérée",
                    "L'absence totale de ribosome dans l'une des deux cellules"
                ],
                correct: 0,
                correction: "La séquence détermine le repliement, mais la forme tridimensionnelle finale (éventuellement modifiée après traduction) conditionne l'activité réelle de la protéine, indépendamment d'un changement de séquence.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un chercheur observe qu'une substitution touchant la troisième base d'un codon modifie rarement l'acide aminé produit, alors qu'une substitution touchant la première base le modifie souvent. Comment expliquer cette différence à partir du code génétique ?",
                options: [
                    "La redondance du code génétique se concentre surtout sur la troisième position du codon, la rendant moins sensible aux substitutions",
                    "La troisième base d'un codon n'est jamais lue par le ribosome",
                    "L'ARNt ignore systématiquement la troisième base de chaque codon",
                    "La première base d'un codon ne fait pas réellement partie du code génétique"
                ],
                correct: 0,
                correction: "Le code génétique est dégénéré principalement au niveau de la troisième base des codons (souvent appelée « position oscillante »), ce qui explique que les substitutions à cet endroit sont plus souvent silencieuses.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_mendel': [
            {
                question: "Que signifie exactement le fait qu'un allèle soit « dominant » ?",
                options: [
                    "Il s'exprime dans le phénotype de l'individu hétérozygote",
                    "Il est plus fréquent que l'allèle récessif dans la population",
                    "Il produit toujours un phénotype plus avantageux pour l'organisme",
                    "Il est nécessairement présent en deux exemplaires chez tout individu"
                ],
                correct: 0,
                correction: "Dominant signifie exprimé chez l'hétérozygote, et non « plus fréquent », « meilleur » ou « plus fort » : c'est un piège classique à éviter.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "D'où provient biologiquement la loi de ségrégation des allèles énoncée par Mendel ?",
                options: [
                    "De la séparation des chromosomes homologues lors de la méiose",
                    "De la réplication de l'ADN lors de la mitose",
                    "De la fusion aléatoire de deux gamètes identiques",
                    "D'une mutation spontanée touchant un seul gène"
                ],
                correct: 0,
                correction: "La loi de ségrégation traduit, au niveau cellulaire, la séparation des deux chromosomes homologues (et donc des deux allèles d'un gène) lors de la formation des gamètes pendant la méiose.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Un croisement Aa × Aa donne théoriquement 1/4 AA, 1/2 Aa et 1/4 aa. Une famille réelle de quatre enfants ne présente pas exactement ces proportions. Comment l'expliquer ?",
                options: [
                    "Les proportions mendéliennes sont des probabilités qui ne se vérifient de façon fiable que sur de grands effectifs",
                    "La loi de Mendel ne s'applique pas aux familles humaines",
                    "Les gamètes ne se forment jamais au hasard chez l'être humain",
                    "L'un des deux parents n'était en réalité pas hétérozygote"
                ],
                correct: 0,
                correction: "Un échiquier de croisement calcule des probabilités, pas un résultat garanti pour une petite famille : les proportions attendues ne deviennent visibles que sur un grand nombre de descendants.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Pour deux gènes situés sur des chromosomes différents, quelle est la condition qui permet d'observer un assortiment indépendant lors de la formation des gamètes ?",
                options: [
                    "Les gènes ne doivent pas être liés, c'est-à-dire situés sur des chromosomes différents ou suffisamment éloignés sur un même chromosome",
                    "Les deux gènes étudiés doivent être récessifs",
                    "Les deux gènes doivent coder pour la même protéine",
                    "Les deux parents doivent être homozygotes pour les deux gènes"
                ],
                correct: 0,
                correction: "L'assortiment indépendant décrit par Mendel n'est attendu que si les deux gènes sont portés par des chromosomes différents, ou suffisamment éloignés sur un même chromosome pour ne pas être liés.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Pour résoudre un exercice de croisement génétique, quelle est la première étape correcte selon la méthode de résolution du cours ?",
                options: [
                    "Définir précisément les allèles étudiés et écrire les génotypes des parents avant de déterminer les gamètes",
                    "Dessiner directement l'échiquier de croisement sans définir les allèles au préalable",
                    "Calculer d'emblée les proportions phénotypiques attendues sans passer par les génotypes",
                    "Observer uniquement le phénotype des enfants pour en déduire les allèles des parents"
                ],
                correct: 0,
                correction: "La méthode conseillée est : définir les allèles, écrire les génotypes parentaux, déterminer les gamètes possibles, dresser le tableau de croisement, puis annoncer les probabilités génotypiques et phénotypiques.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Dans un arbre généalogique, un caractère apparaît chez des enfants alors qu'aucun des deux parents ne le manifeste. Quelle hypothèse est la plus cohérente avec cette observation ?",
                options: [
                    "Le caractère est récessif et les deux parents sont hétérozygotes, porteurs sans l'exprimer",
                    "Le caractère est dominant chez les deux parents mais invisible chez eux",
                    "Il s'agit forcément d'une mutation nouvelle apparue chez les deux enfants",
                    "Le gène responsable n'est transmis que par la mère aux enfants"
                ],
                correct: 0,
                correction: "L'apparition d'un caractère chez des enfants dont aucun parent ne le manifeste est typique d'un caractère récessif porté à l'état hétérozygote (donc non exprimé) par les deux parents.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_mutations': [
            {
                question: "Quelle est la définition exacte d'une mutation selon le cours ?",
                options: [
                    "Une modification stable de la séquence d'ADN : substitution, insertion, délétion ou remaniement chromosomique",
                    "Une erreur temporaire de traduction de l'ARNm par le ribosome",
                    "Un changement de forme d'une protéine sans aucune modification de l'ADN",
                    "Une variation de température qui modifie l'activité d'une enzyme"
                ],
                correct: 0,
                correction: "Une mutation est bien définie comme une modification stable de la séquence d'ADN, qui peut prendre la forme d'une substitution, d'une insertion, d'une délétion ou d'un remaniement chromosomique.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Pourquoi seules les mutations touchant la lignée germinale sont-elles directement transmissibles à la descendance ?",
                options: [
                    "Parce que ce sont les gamètes, issus de cette lignée, qui transmettent l'ADN aux enfants",
                    "Parce que les cellules somatiques ne contiennent pas d'ADN",
                    "Parce que les mutations germinales sont toujours réparées avant la fécondation",
                    "Parce que seules les cellules de la lignée germinale se divisent par mitose"
                ],
                correct: 0,
                correction: "Seule l'ADN des cellules de la lignée germinale (à l'origine des gamètes) est transmis à la génération suivante ; une mutation somatique reste limitée à l'organisme qui la porte.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Pourquoi une insertion ou une délétion d'un nombre de nucléotides non multiple de trois a-t-elle souvent un effet plus grave qu'une simple substitution ?",
                options: [
                    "Elle décale le cadre de lecture de tous les codons situés en aval, ce qui modifie potentiellement toute la suite de la protéine",
                    "Elle empêche systématiquement la transcription du gène concerné",
                    "Elle ne touche jamais une région codant réellement pour une protéine",
                    "Elle multiplie automatiquement par trois la longueur du gène"
                ],
                correct: 0,
                correction: "Une insertion ou délétion non multiple de trois provoque un décalage du cadre de lecture : tous les codons situés après la mutation sont lus différemment, ce qui change en général toute la fin de la protéine.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une substitution modifie un codon, mais l'acide aminé produit reste identique grâce à la redondance du code génétique. Quel terme désigne ce type de mutation ?",
                options: ["Une mutation silencieuse", "Une mutation non-sens", "Une mutation faux-sens", "Une mutation par décalage du cadre de lecture"],
                correct: 0,
                correction: "L'effet d'une mutation dépend de la région touchée : silencieuse quand l'acide aminé produit ne change pas, faux-sens quand il change, non-sens quand un codon stop apparaît.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Les UV provoquent des lésions dans l'ADN de cellules de peau. Certaines lésions sont réparées, mais une mutation persiste dans une cellule somatique et touche un gène contrôlant le cycle cellulaire. Quelle conclusion prudente peut-on tirer, selon le cours ?",
                options: [
                    "Cette mutation peut participer au développement d'un cancer, sans que cela suffise nécessairement à elle seule",
                    "Cette mutation sera automatiquement transmise aux enfants de cette personne",
                    "Cette mutation ne peut avoir aucun effet puisqu'elle est uniquement somatique",
                    "L'exposition aux UV ne modifie jamais la séquence d'ADN"
                ],
                correct: 0,
                correction: "Le cours précise que si une mutation persiste dans une cellule somatique et touche des gènes contrôlant le cycle cellulaire, elle peut participer à un cancer, sans y suffire toujours à elle seule.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un généticien compare une séquence d'ADN normale et une séquence mutée, traduit les deux versions en protéines, puis observe une différence de phénotype. Quelle règle de raisonnement doit-il respecter pour conclure correctement ?",
                options: [
                    "Relier prudemment la modification moléculaire observée au phénotype, sans dépasser ce que les données démontrent réellement",
                    "Affirmer directement que toute mutation entraîne nécessairement un phénotype visible",
                    "Ignorer l'étape de traduction et comparer uniquement les séquences d'ADN",
                    "Conclure immédiatement sans décrire les étapes du mécanisme dans leur ordre"
                ],
                correct: 0,
                correction: "La construction d'une réponse rigoureuse impose de décrire les étapes du mécanisme dans l'ordre puis de conclure sans dépasser ce que les données permettent réellement d'affirmer.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_metabolisme': [
            {
                question: "Quel est le rôle principal d'une enzyme dans une réaction métabolique ?",
                options: [
                    "Abaisser l'énergie d'activation de la réaction, sans être elle-même consommée",
                    "Fournir directement l'énergie nécessaire à la réaction sous forme d'ATP",
                    "Remplacer le substrat par un produit strictement identique",
                    "Déplacer l'équilibre énergétique global de la réaction"
                ],
                correct: 0,
                correction: "Les enzymes abaissent l'énergie d'activation d'une réaction sans être consommées ; elles orientent et accélèrent la transformation sans modifier l'équilibre énergétique global.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "De quoi dépend principalement la spécificité d'une enzyme pour un substrat donné ?",
                options: [
                    "De la forme de son site actif, complémentaire de celle du substrat",
                    "Uniquement de la température ambiante au moment de la réaction",
                    "De la quantité d'ATP disponible dans la cellule",
                    "De la couleur du substrat impliqué dans la réaction"
                ],
                correct: 0,
                correction: "La spécificité enzymatique repose sur la complémentarité de forme entre le site actif de l'enzyme et le substrat qu'elle reconnaît.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Sur une courbe représentant la vitesse d'une réaction enzymatique en fonction de la concentration en substrat, la vitesse augmente puis atteint un plateau. Comment expliquer ce plateau ?",
                options: [
                    "Les sites actifs des enzymes disponibles sont majoritairement occupés : ajouter du substrat n'accélère alors presque plus la réaction",
                    "L'enzyme est détruite dès que la concentration en substrat dépasse un certain seuil",
                    "Le substrat devient chimiquement inactif au-delà d'une certaine concentration",
                    "La température de la solution diminue automatiquement au niveau du plateau"
                ],
                correct: 0,
                correction: "Le plateau correspond à la saturation des sites actifs disponibles : toutes les enzymes travaillent déjà à leur vitesse maximale, donc ajouter du substrat n'accélère quasiment plus la réaction.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Dans une voie métabolique régulée par rétro-inhibition, que se passe-t-il lorsque le produit final s'accumule ?",
                options: [
                    "Le produit final freine l'activité d'une enzyme précoce de la voie, ralentissant sa propre production",
                    "Le produit final accélère l'activité de toutes les enzymes de la voie",
                    "Le substrat de départ est immédiatement détruit dans la cellule",
                    "La voie métabolique change complètement de direction chimique"
                ],
                correct: 0,
                correction: "La rétro-inhibition est un mécanisme de régulation où le produit final d'une voie freine une enzyme placée en amont, ce qui limite sa propre surproduction.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "En absence de dioxygène, une cellule musculaire recourt à la fermentation lactique plutôt qu'à la respiration cellulaire complète. Quelle est la conséquence énergétique de ce choix, selon le cours ?",
                options: [
                    "La fermentation régénère les coenzymes nécessaires à la glycolyse mais produit beaucoup moins d'ATP que la respiration complète",
                    "La fermentation produit davantage d'ATP que la respiration cellulaire complète",
                    "La fermentation n'a aucun lien avec la glycolyse qui la précède",
                    "La fermentation supprime totalement le besoin de glucose pour la cellule"
                ],
                correct: 0,
                correction: "En manque de dioxygène, la fermentation lactique régénère les coenzymes nécessaires à la poursuite de la glycolyse, mais fournit beaucoup moins d'ATP que la respiration cellulaire complète.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un exercice demande d'interpréter l'effet du pH sur l'activité d'une enzyme à partir d'une courbe expérimentale. Quelle précaution méthodologique le cours recommande-t-il ?",
                options: [
                    "Ne pas extrapoler au-delà du domaine de pH réellement testé, en gardant les autres paramètres constants avec un témoin",
                    "Supposer que l'enzyme se comporte de la même façon à tous les pH, même non testés",
                    "Faire varier plusieurs paramètres en même temps pour gagner du temps",
                    "Se limiter à décrire l'allure de la courbe sans comparer aucune valeur"
                ],
                correct: 0,
                correction: "Lire correctement une courbe enzymatique exige d'identifier l'optimum et le domaine réellement testé, de garder les autres paramètres constants grâce à un témoin, et de ne pas extrapoler au-delà des données mesurées.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_immunite': [
            {
                question: "Quel est le rôle des cellules dendritiques dans la réponse immunitaire ?",
                options: [
                    "Elles relient l'immunité innée et l'immunité adaptative en présentant des antigènes aux lymphocytes",
                    "Elles produisent directement des anticorps sans intervention des lymphocytes",
                    "Elles constituent à elles seules la barrière cutanée de l'organisme",
                    "Elles détruisent systématiquement les bactéries sans jamais activer de lymphocyte"
                ],
                correct: 0,
                correction: "Les cellules dendritiques capturent des antigènes et les présentent aux lymphocytes, faisant le lien entre la réponse immunitaire innée, rapide et non spécifique, et la réponse adaptative, spécifique de l'antigène.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Quelle cellule est principalement responsable de la réponse humorale, par production d'anticorps ?",
                options: ["Le lymphocyte B", "Le lymphocyte T", "La cellule dendritique", "Le phagocyte de l'immunité innée"],
                correct: 0,
                correction: "La réponse humorale repose sur les lymphocytes B qui, une fois activés, se différencient en cellules produisant des anticorps spécifiques de l'antigène rencontré.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Après activation par un antigène, un lymphocyte spécifique prolifère par expansion clonale. Quels types de cellules peuvent en résulter, selon le cours ?",
                options: [
                    "Des cellules effectrices et des cellules mémoire",
                    "Uniquement des cellules effectrices qui disparaissent après l'infection",
                    "Uniquement des cellules renforçant la barrière cutanée",
                    "Des anticorps produits directement, sans aucune intervention cellulaire"
                ],
                correct: 0,
                correction: "Après sélection et expansion clonale, les lymphocytes activés donnent naissance à des cellules effectrices, actives immédiatement, et à des cellules mémoire, qui persistent après l'infection.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Pourquoi une seconde exposition au même antigène déclenche-t-elle une réponse immunitaire plus rapide et plus forte que la première ?",
                options: [
                    "Des cellules mémoire issues de la première exposition permettent une reconnaissance et une activation plus rapides",
                    "Le système immunitaire inné devient alors totalement inactif",
                    "L'antigène change de nature biologique lors de la seconde exposition",
                    "Les anticorps de la première exposition détruisent l'antigène avant même qu'il soit reconnu"
                ],
                correct: 0,
                correction: "C'est le principe de la mémoire immunitaire : les cellules mémoire formées lors du premier contact permettent une réponse secondaire plus rapide et plus intense lors d'une nouvelle exposition au même antigène.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Un vaccin présente un antigène (ou une instruction antigénique) sans provoquer la maladie correspondante. Quel mécanisme immunitaire ce procédé exploite-t-il directement, selon le cours ?",
                options: [
                    "La mise en place d'une mémoire immunitaire qui prépare une réponse secondaire plus rapide en cas d'exposition réelle à l'agent",
                    "La destruction immédiate et définitive de tous les agents infectieux possibles",
                    "Le remplacement complet des barrières cutanées naturelles par une protection artificielle",
                    "La suppression du besoin de réponse immunitaire innée face à cet agent"
                ],
                correct: 0,
                correction: "La vaccination exploite la mémoire immunitaire : en présentant un antigène sans provoquer la maladie, elle prépare l'organisme à une réponse secondaire plus rapide et plus efficace en cas d'exposition réelle.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un patient prend des antibiotiques pour soigner une infection virale. D'après le cours, pourquoi ce traitement est-il inadapté et potentiellement problématique ?",
                options: [
                    "Les antibiotiques ciblent les bactéries et non les virus, et leur usage inapproprié favorise la sélection de bactéries résistantes",
                    "Les antibiotiques renforcent toujours l'immunité innée contre les virus",
                    "Les antibiotiques remplacent définitivement la mémoire immunitaire du patient",
                    "Les antibiotiques empêchent la formation de toute cellule mémoire"
                ],
                correct: 0,
                correction: "Les antibiotiques ciblent les bactéries et sont sans effet sur les virus ; leur mauvais usage, notamment sur des infections virales, favorise en plus la sélection de bactéries résistantes.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ],
        'bio5_microbes': [
            {
                question: "Quelle est la principale différence structurale entre une bactérie et un virus, selon le cours ?",
                options: [
                    "La bactérie est une cellule procaryote, alors que le virus est une entité acellulaire dépendant d'une cellule hôte pour se multiplier",
                    "La bactérie est toujours pathogène alors que le virus est toujours inoffensif",
                    "Le virus est une cellule eucaryote et la bactérie une cellule procaryote",
                    "La bactérie ne peut pas se multiplier sans cellule hôte, contrairement au virus"
                ],
                correct: 0,
                correction: "Les bactéries sont des cellules procaryotes capables de se diviser seules, tandis que les virus sont des entités acellulaires qui dépendent entièrement d'une cellule hôte pour se répliquer.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Pourquoi un microbiote stable peut-il jouer un rôle protecteur pour l'organisme hôte ?",
                options: [
                    "Il peut limiter l'installation d'agents pathogènes en occupant les niches disponibles",
                    "Il détruit systématiquement toute bactérie qui pénètre dans l'organisme",
                    "Il remplace entièrement le système immunitaire adaptatif de l'hôte",
                    "Il empêche toute transmission de microorganismes entre individus"
                ],
                correct: 0,
                correction: "Un microbiote stable peut limiter l'installation d'agents pathogènes, notamment en occupant l'espace et les ressources disponibles, ce qui réduit les possibilités d'implantation d'un nouvel agent.",
                niveau: "Comprendre",
                contentVersion: 1
            },
            {
                question: "Dans un antibiogramme, un disque d'antibiotique est entouré d'une grande zone sans croissance bactérienne. Que peut-on en conclure, avec prudence, selon le cours ?",
                options: [
                    "La bactérie testée montre une sensibilité à cet antibiotique dans les conditions du test, en tenant compte du diamètre et des normes de référence",
                    "La bactérie est totalement résistante à tous les antibiotiques existants",
                    "L'antibiotique a détruit le virus responsable de l'infection du patient",
                    "La taille de la zone sans croissance n'a aucune signification biologique"
                ],
                correct: 0,
                correction: "Une grande zone sans croissance autour d'un disque indique une sensibilité de la bactérie dans les conditions du test, mais la comparaison doit tenir compte du diamètre, des normes et de la diffusion propre à chaque molécule.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Une maladie infectieuse se déclare chez une personne exposée à un agent pathogène. Quels facteurs, selon le cours, déterminent conjointement si la maladie se développe réellement ?",
                options: [
                    "L'agent, la dose reçue, la porte d'entrée et l'état de l'hôte",
                    "Uniquement la virulence intrinsèque de l'agent, indépendamment de la personne exposée",
                    "Uniquement la quantité d'anticorps déjà présents chez la personne",
                    "Le hasard, sans lien avec des facteurs biologiques identifiables"
                ],
                correct: 0,
                correction: "Une maladie infectieuse dépend de l'agent, de la dose, de la porte d'entrée et de l'état de l'hôte : ces quatre facteurs combinés expliquent pourquoi une même exposition n'a pas toujours les mêmes conséquences.",
                niveau: "S'entraîner",
                contentVersion: 1
            },
            {
                question: "Pour interrompre une chaîne de transmission (réservoir, sortie, transmission, entrée, hôte), on recommande la vaccination, l'hygiène des mains, la ventilation et la sécurité alimentaire. Comment agissent ces mesures, selon le cours ?",
                options: [
                    "Chacune interrompt un maillon différent de la chaîne épidémiologique plutôt qu'une action unique et universelle",
                    "Toutes ces mesures agissent uniquement sur le réservoir de l'agent infectieux",
                    "Elles agissent toutes exclusivement sur la porte de sortie de l'agent",
                    "Elles n'ont d'effet que sur les infections virales et jamais sur les infections bactériennes"
                ],
                correct: 0,
                correction: "La chaîne épidémiologique relie réservoir, sortie, voie de transmission, entrée et hôte réceptif ; chaque mesure de prévention (hygiène, vaccination, ventilation, sécurité alimentaire) interrompt un maillon différent de cette chaîne.",
                niveau: "Type CESS",
                contentVersion: 1
            },
            {
                question: "Un patient développe une infection causée par un champignon microscopique. Quelle affirmation est correcte concernant la nature cellulaire de cet agent, selon le cours ?",
                options: [
                    "Le champignon est un organisme eucaryote, comme les protozoaires, à la différence des bactéries qui sont procaryotes",
                    "Le champignon est une entité acellulaire, comme les virus",
                    "Le champignon est une cellule procaryote similaire à la bactérie",
                    "Le champignon ne peut jamais provoquer d'infection chez l'être humain"
                ],
                correct: 0,
                correction: "Le cours distingue les bactéries (cellules procaryotes), les virus (entités acellulaires) et les champignons et protozoaires, qui sont eucaryotes.",
                niveau: "Type CESS",
                contentVersion: 1
            }
        ]
    };

    ['5e'].forEach(function (year) {
        (BIO_CHAPITRES[year] || []).forEach(function (chapitre) {
            var nouveaux = NOUVEAUX_EXERCICES[chapitre.id];
            if (!nouveaux) return;
            chapitre.exercices = (chapitre.exercices || []).filter(function (e) { return !isGeneric(e.question); });
            nouveaux.forEach(function (ex) { chapitre.exercices.push(ex); });
        });
    });
})();
