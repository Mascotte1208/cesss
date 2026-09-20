(function () {
    if (typeof CESS_LIBRARY_DATA === 'undefined' || typeof findChapter !== 'function') return;
    var REPLACEMENTS = {
        'lib_histoire_4e_1': {
            1: {
                question: "Que désigne le terme « Renaissance » dans l'histoire européenne ?",
                options: [
                    "Un mouvement culturel et artistique qui redécouvre l'Antiquité gréco-romaine et met l'humain au centre (l'humanisme), né en Italie au XIVe siècle",
                    "Un mouvement religieux qui conteste l'autorité du pape et divise l'Europe chrétienne",
                    "Une période de conquêtes coloniales européennes en Amérique et en Asie",
                    "Un régime politique dans lequel le roi concentre tous les pouvoirs sans contrôle du Parlement"
                ],
                correct: 0,
                correction: "La Renaissance est un mouvement culturel, artistique et intellectuel né en Italie au XIVe siècle, qui redécouvre l'Antiquité gréco-romaine et place l'être humain au centre de la pensée (l'humanisme)."
            },
            2: {
                question: "Quelle chaîne cause → conséquence décrit correctement la naissance de la Renaissance ?",
                options: [
                    "L'essor du commerce et des villes italiennes (Florence, Venise, Rome) crée une bourgeoisie riche qui finance les artistes et savants → cela favorise la redécouverte de l'Antiquité et l'essor de l'humanisme",
                    "La prise de Constantinople par les Ottomans ferme les routes vers l'Asie → les marins portugais cherchent une nouvelle route maritime",
                    "La révolte des nobles pendant la Fronde affaiblit la monarchie française → Louis XIV décide de gouverner seul",
                    "La publication des 95 thèses de Luther contre les indulgences → l'Église catholique organise le Concile de Trente"
                ],
                correct: 0,
                correction: "C'est l'enrichissement des villes italiennes grâce au commerce qui permet le mécénat des artistes et savants, condition de la Renaissance ; les trois autres chaînes concernent d'autres événements (grandes découvertes, Fronde, Réforme)."
            },
            3: {
                question: "Quelle caractéristique définit le travail des grands artistes de la Renaissance (Léonard de Vinci, Michel-Ange...) ?",
                options: [
                    "Ils cherchent à représenter le monde avec réalisme et à exprimer un idéal de beauté inspiré de l'Antiquité, notamment grâce à la perspective",
                    "Ils peignent uniquement des scènes religieuses médiévales sans se soucier du réalisme des corps",
                    "Ils rejettent tout l'héritage antique pour inventer un style entièrement nouveau",
                    "Ils travaillent surtout pour illustrer l'Encyclopédie de Diderot et d'Alembert"
                ],
                correct: 0,
                correction: "Les artistes de la Renaissance cherchent le réalisme et la beauté idéale du corps humain en s'inspirant de l'Antiquité gréco-romaine, notamment grâce à la maîtrise de la perspective."
            },
            4: {
                question: "Quelle chaîne cause → conséquence explique correctement l'essor des grands artistes de la Renaissance ?",
                options: [
                    "Le mécénat de riches familles comme les Médicis à Florence finance les artistes → ceux-ci développent la perspective et l'étude anatomique → un art réaliste rayonne dans toute l'Europe",
                    "Le pape interdit toute représentation du corps humain → les artistes se tournent uniquement vers les paysages",
                    "La crise économique de l'Italie ruine tous les mécènes → les artistes de la Renaissance cessent immédiatement de travailler",
                    "Les artistes de la Renaissance inventent l'imprimerie pour diffuser leurs propres œuvres"
                ],
                correct: 0,
                correction: "Le mécénat de familles comme les Médicis permet aux artistes de travailler et de développer des techniques nouvelles (perspective, anatomie), diffusées ensuite dans toute l'Europe."
            },
            5: {
                question: "Que désignent « les grandes découvertes géographiques » des XVe-XVIe siècles ?",
                options: [
                    "Les explorations maritimes menées surtout par les Portugais et les Espagnols, qui ouvrent de nouvelles routes vers l'Asie et mènent à la découverte du continent américain",
                    "Les réformes administratives menées par Louis XIV pour moderniser l'administration française",
                    "Le mouvement intellectuel qui diffuse les idées de raison et de tolérance au XVIIIe siècle",
                    "Les révoltes paysannes qui éclatent en France à la fin du XVIIIe siècle contre les impôts"
                ],
                correct: 0,
                correction: "Les grandes découvertes désignent les explorations maritimes portugaises et espagnoles à partir du milieu du XVe siècle, qui ouvrent de nouvelles routes et mènent à la découverte de l'Amérique."
            },
            6: {
                question: "Quelle chaîne cause → conséquence explique correctement les grandes découvertes géographiques ?",
                options: [
                    "La prise de Constantinople par les Ottomans (1453) ferme les routes terrestres vers l'Asie → les Européens cherchent une route maritime vers les épices → les Portugais et les Espagnols explorent de nouveaux océans",
                    "Louis XIV finance des expéditions vers l'Amérique pour affirmer sa puissance militaire dès 1453",
                    "L'invention de l'imprimerie par Gutenberg pousse directement Christophe Colomb à partir vers l'ouest dès 1453",
                    "La signature de la Déclaration des droits de l'homme en 1789 encourage les explorateurs à chercher de nouvelles terres"
                ],
                correct: 0,
                correction: "La fermeture des routes terrestres vers l'Asie après la prise de Constantinople (1453) pousse les Européens à chercher une route maritime, ce qui déclenche les grandes découvertes."
            },
            7: {
                question: "Quelle affirmation décrit correctement une conséquence majeure des grandes découvertes pour les peuples amérindiens ?",
                options: [
                    "Les découvertes provoquent une catastrophe démographique chez les Amérindiens, notamment à cause des maladies apportées par les Européens et de la violence de la colonisation",
                    "Les peuples amérindiens bénéficient immédiatement d'un meilleur niveau de vie grâce aux Européens",
                    "Les Amérindiens conquièrent l'Europe grâce à leurs propres expéditions maritimes",
                    "Les découvertes n'ont aucun effet sur la démographie amérindienne, seule l'économie européenne change"
                ],
                correct: 0,
                correction: "Les grandes découvertes provoquent des catastrophes pour les peuples amérindiens : maladies importées, violences et bouleversements liés à la colonisation européenne."
            },
            8: {
                question: "Quelle chaîne cause → conséquence décrit correctement un effet économique des grandes découvertes ?",
                options: [
                    "L'exploitation de mines d'argent comme celles de Potosí en Amérique → un afflux massif de métaux précieux vers l'Europe → une forte inflation des prix en Europe",
                    "La construction du château de Versailles provoque un afflux d'or vers l'Espagne",
                    "La signature du traité des XXIV articles en 1839 ouvre les mines de Potosí en Amérique",
                    "L'abolition des privilèges féodaux en France en 1789 développe le commerce atlantique avec l'Amérique"
                ],
                correct: 0,
                correction: "L'afflux d'or et d'argent venus des mines américaines (comme Potosí) a provoqué une forte inflation en Europe et développé le commerce atlantique."
            },
            9: {
                question: "Comment peut-on définir la monarchie absolue telle qu'elle existe en France sous Louis XIV ?",
                options: [
                    "Un régime où le roi concentre les pouvoirs législatif, exécutif et judiciaire, sans être limité par une constitution ou un parlement, son autorité étant justifiée par le droit divin",
                    "Un régime où le roi partage le pouvoir avec un parlement élu qui vote les lois et contrôle le budget",
                    "Un régime où plusieurs princes se partagent le pouvoir sous l'autorité d'un empereur élu",
                    "Un régime dans lequel le pouvoir est confié à des représentants élus par les citoyens selon une Constitution"
                ],
                correct: 0,
                correction: "La monarchie absolue concentre tous les pouvoirs entre les mains du roi, sans constitution ni parlement pour le limiter ; son pouvoir est justifié par le droit divin."
            },
            10: {
                question: "Quelle chaîne cause → conséquence explique correctement les fondements de l'absolutisme ?",
                options: [
                    "La théorie du droit divin (le roi tient son pouvoir de Dieu, théorisée par Bossuet) → légitime la concentration de tous les pouvoirs entre les mains du roi → aucune institution ne peut légalement s'opposer à sa volonté",
                    "La défaite de l'Invincible Armada espagnole pousse Louis XIV à instaurer le droit divin en France",
                    "Le vote du Bill of Rights par le Parlement anglais en 1689 renforce le pouvoir absolu du roi de France",
                    "La convocation des États généraux en 1789 fonde la théorie du droit divin en France"
                ],
                correct: 0,
                correction: "C'est la théorie du droit divin, selon laquelle le roi tient son pouvoir de Dieu, qui légitime la concentration de tous les pouvoirs entre ses mains, sans contre-pouvoir possible."
            },
            11: {
                question: "Que retient-on du règne de Louis XIV, le « Roi-Soleil » ?",
                options: [
                    "Il règne personnellement à partir de 1661 (sans Premier ministre) après la Fronde, et son règne (1643-1715, soit 72 ans) est le plus long de l'histoire de France",
                    "Il partage le pouvoir avec un Parlement qui vote les lois du royaume, comme en Angleterre après 1689",
                    "Il est exécuté par le Parlement après avoir tenté d'imposer des impôts sans son accord",
                    "Il abolit la monarchie et proclame une République en France dès 1661"
                ],
                correct: 0,
                correction: "Louis XIV règne 72 ans (1643-1715), le plus long règne de l'histoire de France, et gouverne personnellement sans Premier ministre à partir de 1661, après la Fronde."
            },
            12: {
                question: "Quelle chaîne cause → conséquence explique correctement le rôle du château de Versailles sous Louis XIV ?",
                options: [
                    "Louis XIV veut éloigner la noblesse de Paris et affirmer sa puissance après la Fronde → il fait construire Versailles et y attire la noblesse → l'étiquette et les cérémonies quotidiennes occupent les nobles et les tiennent éloignés du pouvoir réel",
                    "Colbert impose le protectionnisme économique, ce qui pousse Louis XIV à construire Versailles pour loger les manufactures royales",
                    "Le Bill of Rights anglais de 1689 limite le pouvoir royal, ce qui pousse Louis XIV à construire Versailles en réaction",
                    "La défaite navale d'Aboukir face aux Anglais pousse Louis XIV à se retirer à Versailles pour se cacher"
                ],
                correct: 0,
                correction: "Versailles est construit pour éloigner la noblesse de Paris (souvenir de la Fronde) et la contrôler par l'étiquette de cour, tout en affirmant la puissance royale."
            },
            13: {
                question: "Qu'est-ce que le « despotisme éclairé », illustré par des souverains comme Frédéric II de Prusse ou Catherine II de Russie ?",
                options: [
                    "Un régime où le monarque garde un pouvoir absolu tout en s'inspirant des idées des Lumières pour mener des réformes (éducation, justice, administration)",
                    "Un régime où le pouvoir du roi est totalement supprimé au profit d'une assemblée élue par le peuple",
                    "Un régime dans lequel le roi renonce à toute réforme et gouverne uniquement selon la tradition religieuse",
                    "Un régime où la noblesse partage également le pouvoir avec le clergé et le peuple selon une constitution écrite"
                ],
                correct: 0,
                correction: "Le despotisme éclairé combine pouvoir absolu conservé par le monarque et réformes inspirées des idées des Lumières (éducation, justice, administration)."
            },
            14: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'action réformatrice d'un souverain comme Joseph II en Autriche ?",
                options: [
                    "Joseph II impose des réformes centralisatrices inspirées des Lumières dans les Pays-Bas autrichiens → cela heurte les privilèges provinciaux et religieux → les résistances contribuent au déclenchement de la révolution brabançonne",
                    "Catherine II de Russie abolit le servage, ce qui provoque une révolte des nobles russes qui la renversent",
                    "Frédéric II de Prusse convoque un parlement élu, ce qui met fin à l'absolutisme en Prusse",
                    "Pierre le Grand fonde Saint-Pétersbourg, ce qui pousse la Russie à abandonner toute réforme occidentale"
                ],
                correct: 0,
                correction: "Les réformes centralisatrices imposées d'en haut par Joseph II heurtent les privilèges provinciaux et religieux des Pays-Bas autrichiens, ce qui alimente la révolution brabançonne."
            }
        },
        'lib_histoire_4e_2': {
            1: {
                question: "Que désigne le mouvement des Lumières au XVIIIe siècle ?",
                options: [
                    "Un mouvement intellectuel européen qui prône l'usage de la raison pour comprendre le monde et améliorer la société, en défendant la tolérance, le progrès et la liberté",
                    "Un mouvement religieux qui vise à réformer l'Église catholique de l'intérieur au XVIe siècle",
                    "Un mouvement artistique qui redécouvre l'Antiquité gréco-romaine et met l'homme au centre",
                    "Un mouvement politique qui réclame l'indépendance des colonies américaines vis-à-vis de l'Angleterre"
                ],
                correct: 0,
                correction: "Les Lumières désignent un mouvement intellectuel européen du XVIIIe siècle qui prône l'usage de la raison, la tolérance, le progrès et la liberté."
            },
            2: {
                question: "Quelle chaîne cause → conséquence décrit correctement la naissance des idées des Lumières ?",
                options: [
                    "L'essor de l'imprimerie et des réseaux de savants diffuse largement les connaissances → les philosophes soumettent institutions et traditions à la critique de la raison → une opinion publique plus critique de l'absolutisme se développe",
                    "La défaite de l'Invincible Armada espagnole en 1588 pousse les philosophes français à écrire l'Encyclopédie",
                    "La construction de Versailles par Louis XIV inspire directement Voltaire à écrire ses Lettres philosophiques",
                    "La chute de Robespierre en 1794 provoque l'apparition du mouvement des Lumières en France"
                ],
                correct: 0,
                correction: "C'est l'essor de l'imprimerie et des réseaux savants qui permet la diffusion des idées critiques des Lumières et l'émergence d'une opinion publique plus critique."
            },
            3: {
                question: "Lequel de ces philosophes des Lumières est correctement associé à son idée principale ?",
                options: [
                    "Montesquieu défend la séparation des pouvoirs (législatif, exécutif, judiciaire) dans De l'Esprit des lois",
                    "Voltaire dirige l'Encyclopédie avec d'Alembert pour rassembler tout le savoir humain",
                    "Rousseau défend le libéralisme économique et le marché autorégulé",
                    "Locke théorise la séparation des pouvoirs entre législatif, exécutif et judiciaire"
                ],
                correct: 0,
                correction: "Montesquieu, dans De l'Esprit des lois (1748), théorise la séparation des pouvoirs législatif, exécutif et judiciaire."
            },
            4: {
                question: "Quelle chaîne cause → conséquence illustre correctement l'action d'un philosophe des Lumières ?",
                options: [
                    "Montesquieu observe les abus du pouvoir absolu → il théorise la séparation des pouvoirs législatif, exécutif et judiciaire → cette idée inspirera plus tard les constitutions des révolutions atlantiques",
                    "Diderot publie Du Contrat social, ce qui pousse Louis XVI à convoquer les États généraux en 1789",
                    "Adam Smith théorise la séparation des pouvoirs, ce qui fonde le libéralisme économique britannique",
                    "Voltaire dirige l'Encyclopédie avec d'Alembert, ce qui lui vaut d'être guillotiné pendant la Terreur"
                ],
                correct: 0,
                correction: "Montesquieu théorise la séparation des pouvoirs en réaction aux abus de l'absolutisme, une idée qui inspirera les constitutions des révolutions américaine et française."
            },
            5: {
                question: "Qu'est-ce que l'Encyclopédie de Diderot et d'Alembert (1751-1772) ?",
                options: [
                    "Un ouvrage en 28 volumes qui rassemble l'ensemble des connaissances humaines de l'époque, dans le but de diffuser la raison et le savoir malgré la censure",
                    "Un recueil des lois françaises rédigé par Louis XIV pour codifier le droit du royaume",
                    "Un traité signé entre les grandes puissances européennes pour réorganiser l'Europe après Napoléon",
                    "Un journal clandestin publié pendant la Révolution française pour dénoncer les ennemis de la République"
                ],
                correct: 0,
                correction: "L'Encyclopédie, dirigée par Diderot et d'Alembert, rassemble en 28 volumes l'ensemble des connaissances humaines pour diffuser la raison et le savoir."
            },
            6: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'histoire de l'Encyclopédie ?",
                options: [
                    "Diderot et d'Alembert veulent diffuser la raison et le savoir → l'ouvrage est censuré à deux reprises (1752 et 1759) par le pouvoir royal et religieux → il continue à circuler clandestinement et devient une arme intellectuelle contre l'Ancien Régime",
                    "Le roi Louis XV finance l'Encyclopédie dès le départ et la diffuse librement dans tout le royaume",
                    "L'Encyclopédie est rédigée après la Révolution française pour remplacer la Déclaration des droits de l'homme",
                    "L'Église catholique commande l'Encyclopédie pour renforcer l'autorité du pape"
                ],
                correct: 0,
                correction: "Malgré deux censures (1752 et 1759), l'Encyclopédie continue de circuler clandestinement et devient une arme intellectuelle contre l'Ancien Régime."
            },
            7: {
                question: "Que désigne la « raison », notion centrale des Lumières ?",
                options: [
                    "La capacité de l'être humain à juger et comprendre le monde par lui-même, en s'appuyant sur l'observation et la logique plutôt que sur la tradition ou la superstition",
                    "Le pouvoir du roi de gouverner sans être limité par une constitution ou un parlement",
                    "L'ensemble des droits inaliénables que possède tout être humain dès la naissance, comme la liberté et la propriété",
                    "Le principe selon lequel les pouvoirs législatif, exécutif et judiciaire doivent être séparés"
                ],
                correct: 0,
                correction: "La raison désigne la capacité de comprendre le monde par le jugement et l'observation, contre la superstition et l'ignorance — un idéal résumé par la formule de Kant citée dans le cours."
            },
            8: {
                question: "Que désignent les « droits naturels », défendus notamment par John Locke ?",
                options: [
                    "Des droits inaliénables que possède tout être humain dès la naissance, comme la vie, la liberté et la propriété, indépendamment de toute loi",
                    "Les privilèges fiscaux accordés à la noblesse et au clergé sous l'Ancien Régime",
                    "Le pouvoir absolu que le roi tient de Dieu selon la théorie du droit divin",
                    "La capacité de raisonner de façon critique en s'appuyant sur l'observation, défendue par les philosophes des Lumières"
                ],
                correct: 0,
                correction: "Les droits naturels, théorisés notamment par Locke, sont des droits inaliénables (vie, liberté, propriété) que possède tout être humain indépendamment des lois positives."
            },
            9: {
                question: "Que désigne le principe de la « séparation des pouvoirs », théorisé par Montesquieu ?",
                options: [
                    "L'idée que les pouvoirs législatif, exécutif et judiciaire doivent être exercés par des institutions distinctes afin d'éviter les abus du pouvoir absolu",
                    "L'idée que le roi doit concentrer tous les pouvoirs pour gouverner efficacement, sans partage",
                    "L'idée que le peuple doit élire directement tous les juges et fonctionnaires de l'État",
                    "L'idée que chaque province doit posséder sa propre monnaie et sa propre armée"
                ],
                correct: 0,
                correction: "La séparation des pouvoirs, théorisée par Montesquieu, consiste à confier les pouvoirs législatif, exécutif et judiciaire à des institutions distinctes pour éviter les abus."
            },
            10: {
                question: "Parmi ces événements liés aux Lumières, lequel s'est produit en premier ?",
                options: [
                    "La publication de L'Esprit des lois de Montesquieu (1748)",
                    "Le début de la publication de l'Encyclopédie de Diderot et d'Alembert (1751)",
                    "La publication de Du Contrat social de Rousseau (1762)",
                    "La publication de La Richesse des Nations d'Adam Smith (1776)"
                ],
                correct: 0,
                correction: "L'Esprit des lois de Montesquieu paraît en 1748, avant l'Encyclopédie (1751), Du Contrat social (1762) et La Richesse des Nations (1776)."
            },
            11: {
                question: "Pour critiquer un extrait d'une œuvre d'un philosophe des Lumières comme source historique, quelle démarche est correcte ?",
                options: [
                    "Identifier l'auteur, la date et le contexte de rédaction, puis se rappeler que le texte défend un point de vue engagé (souvent censuré) et ne reflète pas forcément l'opinion majoritaire de l'époque",
                    "Considérer que tout texte publié au XVIIIe siècle reflète automatiquement l'opinion de l'ensemble de la population",
                    "Ignorer l'auteur et la date, car seul le contenu des idées compte pour juger une source historique",
                    "Admettre le texte comme un fait vérifié dès lors qu'il a été écrit par un philosophe célèbre"
                ],
                correct: 0,
                correction: "Une source doit être critiquée en identifiant son auteur, sa date, son contexte et son intention : un texte philosophique engagé ne représente qu'un point de vue, pas l'opinion générale."
            },
            12: {
                question: "Parmi ces philosophes des Lumières, lequel est né en premier ?",
                options: [
                    "John Locke (1632-1704)",
                    "Montesquieu (1689-1755)",
                    "Voltaire (1694-1778)",
                    "Jean-Jacques Rousseau (1712-1778)"
                ],
                correct: 0,
                correction: "John Locke (1632-1704) est né avant Montesquieu, Voltaire et Rousseau, qui appartiennent tous à des générations postérieures de philosophes des Lumières."
            },
            13: {
                question: "Que faut-il vérifier en priorité pour évaluer la fiabilité d'un extrait tiré d'une œuvre philosophique du XVIIIe siècle ?",
                options: [
                    "Qui est l'auteur, à quelle date et dans quel contexte (censure, débat) il écrit, et quelle intention il poursuit (convaincre, critiquer, réformer)",
                    "Uniquement la longueur du texte, un texte plus long étant toujours plus fiable",
                    "Uniquement si le texte a été traduit dans plusieurs langues européennes",
                    "Seulement si l'auteur est toujours d'accord avec les autres philosophes des Lumières"
                ],
                correct: 0,
                correction: "La fiabilité d'une source s'évalue en identifiant son auteur, sa date, son contexte de production et son intention, jamais sur sa longueur ou sa diffusion."
            }
        },
        'lib_histoire_4e_3': {
            1: {
                question: "Que peut-on dire des 13 colonies britanniques d'Amérique du Nord au milieu du XVIIIe siècle ?",
                options: [
                    "Elles comptent environ 2,5 millions d'habitants, jouissent d'une large autonomie locale (avec une assemblée élue) mais restent soumises à la métropole britannique pour le commerce et la fiscalité",
                    "Elles forment un royaume totalement indépendant de la couronne britannique depuis leur fondation",
                    "Elles sont gouvernées directement par le roi de France, qui y nomme des intendants",
                    "Elles pratiquent le suffrage universel masculin et disposent déjà d'une constitution écrite en 1750"
                ],
                correct: 0,
                correction: "Au milieu du XVIIIe siècle, les 13 colonies comptent environ 2,5 millions d'habitants, ont une large autonomie locale mais dépendent de la métropole britannique pour le commerce et la fiscalité."
            },
            2: {
                question: "Quelle chaîne cause → conséquence est correcte concernant les colonies anglaises d'Amérique du Nord ?",
                options: [
                    "Chaque colonie dispose d'une assemblée représentative élue localement → cela habitue les colons à l'autogouvernement → lorsque l'Angleterre impose de nouvelles taxes sans les consulter, ils la perçoivent comme une atteinte à un droit acquis",
                    "Le roi de France nomme des gouverneurs dans les colonies anglaises, ce qui pousse les colons à réclamer l'indépendance",
                    "La Déclaration des droits de l'homme de 1789 inspire la création des assemblées coloniales américaines dans les années 1750",
                    "Les colonies anglaises adoptent le suffrage universel dès leur fondation, ce qui provoque une intervention militaire britannique"
                ],
                correct: 0,
                correction: "L'habitude de l'autogouvernement local via les assemblées coloniales explique le rejet des taxes imposées sans consultation par le Parlement britannique."
            },
            3: {
                question: "Quel est le principal grief des colons américains à l'origine de la rupture avec l'Angleterre ?",
                options: [
                    "Ils refusent d'être taxés par un Parlement britannique où ils n'ont aucun représentant élu (« no taxation without representation »)",
                    "Ils réclament l'abolition immédiate de l'esclavage dans toutes les colonies britanniques",
                    "Ils veulent imposer une religion d'État unique dans les 13 colonies",
                    "Ils exigent le droit de commercer librement avec la France, alors qu'aucune taxe n'est en cause"
                ],
                correct: 0,
                correction: "Le grief central des colons est le refus d'être taxés par un Parlement britannique où ils n'ont pas de représentant élu, résumé par « no taxation without representation »."
            },
            4: {
                question: "Quelle chaîne cause → conséquence décrit correctement un épisode des causes de la rupture entre colons et Angleterre ?",
                options: [
                    "Le Parlement britannique impose le Stamp Act (1765), une taxe sur les documents officiels → les colons, non représentés au Parlement, s'indignent → ils organisent un boycott des produits britanniques",
                    "Le roi George III abolit toutes les taxes coloniales en 1765 et les colons le remercient par un grand banquet",
                    "La prise de la Bastille en 1789 pousse le Parlement britannique à voter le Stamp Act en 1765",
                    "Les colons instaurent eux-mêmes le Stamp Act pour financer leur propre armée"
                ],
                correct: 0,
                correction: "Le Stamp Act (1765), taxe imposée sans consultation des colons, provoque leur indignation et un boycott des produits britanniques."
            },
            5: {
                question: "Quelle affirmation décrit correctement la situation de la France en 1789 ?",
                options: [
                    "La France, plus grande puissance d'Europe avec 28 millions d'habitants, traverse une crise financière, sociale et alimentaire qui va provoquer la Révolution",
                    "La France est un petit royaume appauvri qui vient de perdre toutes ses colonies face à l'Angleterre",
                    "La France connaît une période de paix sociale totale, sans aucune tension entre les ordres",
                    "La France a déjà adopté une monarchie constitutionnelle depuis plusieurs décennies en 1789"
                ],
                correct: 0,
                correction: "En 1789, la France, plus grande puissance d'Europe (28 millions d'habitants), traverse une crise financière, sociale, des idées et alimentaire qui conduit à la Révolution."
            },
            6: {
                question: "Quelle chaîne cause → conséquence explique correctement la crise financière de la France en 1789 ?",
                options: [
                    "Les dépenses militaires et le train de vie de la cour de Versailles endettent lourdement l'État → le roi ne peut plus lever de nouveaux impôts sans l'accord des États généraux → il est contraint de les convoquer en mai 1789",
                    "La récolte de blé exceptionnelle de 1788 enrichit les paysans, ce qui pousse le roi à convoquer les États généraux pour partager cette richesse",
                    "Le Tiers État refuse de payer le moindre impôt depuis 1750, ce qui ruine immédiatement l'État avant 1789",
                    "La signature du traité des XXIV articles en 1839 endette la France et provoque la convocation des États généraux"
                ],
                correct: 0,
                correction: "L'endettement dû aux dépenses militaires et à la cour de Versailles oblige le roi à convoquer les États généraux en mai 1789 pour obtenir de nouveaux impôts."
            },
            7: {
                question: "Quel événement marque le véritable début de la Révolution française en 1789 ?",
                options: [
                    "Le Tiers État, réuni en États généraux, se proclame Assemblée nationale le 17 juin 1789, affirmant que le peuple est souverain",
                    "L'exécution de Louis XVI le 21 janvier 1793",
                    "Le sacre de Napoléon Ier à Notre-Dame de Paris le 2 décembre 1804",
                    "Le coup d'État du 18 brumaire (9 novembre 1799)"
                ],
                correct: 0,
                correction: "Le 17 juin 1789, le Tiers État se proclame Assemblée nationale, affirmant la souveraineté du peuple : c'est le véritable point de départ de la Révolution."
            },
            8: {
                question: "Quelle chaîne cause → conséquence décrit correctement un moment clé du déroulement de la Révolution française ?",
                options: [
                    "Le Tiers État se proclame Assemblée nationale le 17 juin 1789 → craignant d'être dispersés par le roi, les députés prêtent le Serment du Jeu de Paume (20 juin) → ils jurent de ne pas se séparer avant d'avoir donné une constitution à la France",
                    "Louis XVI convoque volontairement l'Assemblée nationale en 1789 pour abolir la monarchie",
                    "La prise de la Bastille en 1789 provoque directement l'exécution de Louis XVI le jour même",
                    "La Terreur de 1793-1794 pousse le Tiers État à se proclamer Assemblée nationale en 1789"
                ],
                correct: 0,
                correction: "Après s'être proclamés Assemblée nationale, les députés du Tiers État prêtent le Serment du Jeu de Paume (20 juin 1789), jurant de donner une constitution à la France."
            },
            9: {
                question: "Que proclame la Déclaration des droits de l'homme et du citoyen du 26 août 1789 ?",
                options: [
                    "Que les hommes naissent et demeurent libres et égaux en droits, et que la souveraineté réside essentiellement dans la nation",
                    "Que le roi tient son pouvoir de Dieu et que la noblesse conserve tous ses privilèges",
                    "Que l'esclavage est aboli immédiatement dans toutes les colonies françaises dès 1789",
                    "Que toutes les femmes obtiennent le droit de vote au même titre que les hommes"
                ],
                correct: 0,
                correction: "La Déclaration de 1789 proclame la liberté et l'égalité en droits des hommes, et fait résider la souveraineté dans la nation (articles 1 et 3)."
            },
            10: {
                question: "Quelle chaîne cause → conséquence décrit correctement une limite de la Déclaration des droits de l'homme de 1789 ?",
                options: [
                    "La Déclaration proclame l'égalité en droits mais exclut de fait les femmes → Olympe de Gouges rédige en 1791 la Déclaration des droits de la femme et de la citoyenne → elle est guillotinée en 1793",
                    "La Déclaration accorde le droit de vote à toutes les femmes dès 1789, ce qui provoque une révolte de la noblesse",
                    "La Déclaration abolit immédiatement l'esclavage en 1789, que Napoléon rétablit dès 1791",
                    "La Déclaration instaure le suffrage universel masculin dès 1789, qui est supprimé en 1848"
                ],
                correct: 0,
                correction: "La Déclaration de 1789 exclut de fait les femmes, ce qui pousse Olympe de Gouges à rédiger en 1791 sa propre déclaration, avant d'être guillotinée en 1793."
            },
            11: {
                question: "Que retient-on des révolutions anglaises du XVIIe siècle ?",
                options: [
                    "Charles Ier, en conflit avec le Parlement, est exécuté en 1649 ; après la République autoritaire de Cromwell, la monarchie est restaurée en 1660, puis la Glorieuse Révolution de 1688 aboutit au Bill of Rights (1689)",
                    "Louis XIV fait exécuter le Parlement français et instaure une République en 1649",
                    "Guillaume d'Orange abolit totalement la monarchie anglaise en 1689 pour instaurer une dictature",
                    "La Glorieuse Révolution de 1688 renforce les pleins pouvoirs absolus du roi d'Angleterre"
                ],
                correct: 0,
                correction: "Charles Ier est exécuté en 1649, la République de Cromwell devient autoritaire, la monarchie est restaurée en 1660, puis la Glorieuse Révolution (1688) aboutit au Bill of Rights (1689)."
            },
            12: {
                question: "Quelle chaîne cause → conséquence décrit correctement les révolutions anglaises du XVIIe siècle ?",
                options: [
                    "Des conflits fiscaux et religieux opposent Charles Ier au Parlement → le roi est vaincu puis exécuté en 1649 → après une période de crises, la Glorieuse Révolution de 1688 aboutit à une monarchie parlementaire encadrée par le Bill of Rights",
                    "Le Bill of Rights de 1689 provoque l'exécution de Charles Ier en 1649",
                    "Cromwell restaure la monarchie absolue en 1660 après avoir aboli le Parlement",
                    "La victoire de Charles Ier sur le Parlement instaure une monarchie absolue définitive en Angleterre"
                ],
                correct: 0,
                correction: "Des conflits fiscaux et religieux mènent à l'exécution de Charles Ier (1649), puis, après la République et la Restauration, la Glorieuse Révolution (1688) instaure une monarchie parlementaire."
            },
            13: {
                question: "Que retient-on de la Révolution haïtienne ?",
                options: [
                    "L'insurrection des esclaves de Saint-Domingue commence en 1791, la Convention abolit l'esclavage dans les colonies françaises en 1794, et Haïti proclame son indépendance en 1804",
                    "Napoléon abolit définitivement l'esclavage dans toutes les colonies françaises en 1802",
                    "Saint-Domingue devient indépendante en 1789 grâce à une réforme pacifique de Louis XVI",
                    "La Convention rétablit l'esclavage en 1794 pour financer les guerres révolutionnaires"
                ],
                correct: 0,
                correction: "L'insurrection des esclaves de Saint-Domingue commence en 1791, l'esclavage est aboli par la Convention en 1794, et Haïti proclame son indépendance en 1804."
            },
            14: {
                question: "Quelle chaîne cause → conséquence décrit correctement la Révolution haïtienne ?",
                options: [
                    "La violence du système esclavagiste et la diffusion des principes révolutionnaires français poussent les esclaves de Saint-Domingue à se soulever en 1791 → une guerre sociale et anticoloniale s'ensuit → Haïti proclame son indépendance en 1804, premier État né d'une révolte d'esclaves victorieuse",
                    "Napoléon envoie une armée qui rétablit durablement l'esclavage à Haïti en 1802 sans aucune résistance",
                    "La Déclaration des droits de l'homme de 1789 abolit directement l'esclavage à Haïti dès sa publication",
                    "La défaite de Napoléon à Waterloo en 1815 provoque l'indépendance d'Haïti la même année"
                ],
                correct: 0,
                correction: "La violence de l'esclavage et la diffusion des idées révolutionnaires provoquent le soulèvement de 1791, puis une guerre anticoloniale qui aboutit à l'indépendance d'Haïti en 1804."
            },
            15: {
                question: "Que retient-on des révolutions brabançonne et liégeoise (1789-1790) ?",
                options: [
                    "La révolution brabançonne s'oppose aux réformes centralisatrices de Joseph II et proclame les États belgiques unis en 1790, tandis qu'à Liège la contestation vise le prince-évêque ; les deux mouvements sont réprimés ou renversés avant l'annexion française",
                    "Elles proclament l'indépendance définitive de la Belgique, reconnue par toutes les puissances européennes dès 1790",
                    "Elles sont menées par Léopold Ier pour instaurer une monarchie constitutionnelle belge",
                    "Elles visent à réclamer l'indépendance des colonies belges en Amérique du Nord"
                ],
                correct: 0,
                correction: "La révolution brabançonne s'oppose aux réformes de Joseph II et proclame les États belgiques unis en 1790, tandis qu'à Liège la contestation vise le prince-évêque ; ces mouvements sont finalement réprimés."
            },
            16: {
                question: "Quelle chaîne cause → conséquence décrit correctement la révolution brabançonne ?",
                options: [
                    "Joseph II impose des réformes centralisatrices dans les Pays-Bas autrichiens → cela heurte les privilèges provinciaux, religieux et corporatifs → une coalition de conservateurs et de démocrates proclame les États belgiques unis en 1790, avant d'être réprimée",
                    "Le Congrès de Vienne de 1815 provoque directement la révolution brabançonne de 1789",
                    "La révolution brabançonne aboutit immédiatement à une indépendance belge reconnue jusqu'en 1830",
                    "Guillaume Ier d'Orange dirige personnellement la révolution brabançonne contre l'Autriche"
                ],
                correct: 0,
                correction: "Les réformes centralisatrices de Joseph II heurtent les privilèges des Pays-Bas autrichiens, provoquant la révolte qui aboutit à la proclamation (éphémère) des États belgiques unis en 1790."
            }
        },
        'lib_histoire_4e_4': {
            1: {
                question: "Qu'est-ce que la Réforme protestante, apparue au XVIe siècle ?",
                options: [
                    "Un mouvement religieux qui conteste l'autorité de l'Église catholique romaine, né en réaction à sa corruption et à des pratiques comme la vente des indulgences",
                    "Un mouvement culturel qui redécouvre les textes de l'Antiquité gréco-romaine et met l'humain au centre",
                    "Un mouvement intellectuel qui prône l'usage de la raison pour comprendre le monde et améliorer la société",
                    "Un mouvement qui vise à réformer l'administration de l'État français sous Napoléon"
                ],
                correct: 0,
                correction: "La Réforme est un mouvement religieux du XVIe siècle qui conteste l'autorité de l'Église catholique, notamment à cause de sa corruption et de la vente des indulgences."
            },
            2: {
                question: "Quelle chaîne cause → conséquence explique correctement le déclenchement de la Réforme protestante ?",
                options: [
                    "L'Église vend des indulgences (pardon des péchés contre de l'argent), ce qui scandalise de nombreux croyants → Martin Luther publie en 1517 ses 95 thèses contre cette pratique → un mouvement de contestation religieuse se développe en Europe",
                    "Le Concile de Trente condamne les indulgences en 1545, ce qui pousse Luther à rédiger ses 95 thèses en 1517",
                    "La convocation des États généraux en 1789 provoque la vente des indulgences par l'Église",
                    "La construction de Versailles par Louis XIV finance la vente des indulgences par le pape"
                ],
                correct: 0,
                correction: "Le scandale de la vente des indulgences pousse Luther à publier ses 95 thèses en 1517, déclenchant le mouvement de contestation religieuse qui devient la Réforme."
            },
            3: {
                question: "Que défend Martin Luther, à l'origine de la Réforme protestante en Allemagne ?",
                options: [
                    "Il rédige en 1517 les 95 thèses contre la vente des indulgences et défend l'idée que le salut s'obtient par la foi seule, sans intermédiaire de l'Église",
                    "Il défend la séparation des pouvoirs législatif, exécutif et judiciaire dans un ouvrage du XVIIIe siècle",
                    "Il dirige le Concile de Trente pour réformer l'Église catholique de l'intérieur",
                    "Il codifie le droit civil français et garantit l'égalité devant la loi"
                ],
                correct: 0,
                correction: "Martin Luther publie en 1517 ses 95 thèses contre les indulgences et défend l'idée que le salut s'obtient par la foi seule, sans intermédiaire de l'Église."
            },
            4: {
                question: "Quelle chaîne cause → conséquence décrit correctement la diffusion de la Réforme protestante en Europe ?",
                options: [
                    "Luther publie ses 95 thèses en 1517 en Allemagne → ses idées se diffusent grâce à l'imprimerie → Calvin développe ensuite à Genève sa propre version de la Réforme, qui se répand en Suisse, en France et aux Pays-Bas",
                    "Calvin publie ses idées avant Luther, ce qui pousse ce dernier à rédiger ses 95 thèses en réaction",
                    "Le pape adopte immédiatement les idées de Luther et les impose dans toute l'Église catholique",
                    "La Réforme protestante naît en Angleterre avec le Bill of Rights de 1689"
                ],
                correct: 0,
                correction: "Après la publication des 95 thèses de Luther (1517), diffusées grâce à l'imprimerie, Calvin développe à Genève sa propre Réforme, qui se répand ensuite en Europe."
            },
            5: {
                question: "Qu'est-ce que la Contre-Réforme (ou Réforme catholique) ?",
                options: [
                    "La réaction de l'Église catholique face aux succès du protestantisme, combinant réforme interne et lutte contre les protestants, notamment lors du Concile de Trente",
                    "Le mouvement mené par Luther et Calvin pour réformer l'Église catholique de l'intérieur",
                    "La réforme administrative menée par Napoléon pour réorganiser l'Église de France après le Concordat de 1801",
                    "Le mouvement des Lumières qui critique l'Église catholique au nom de la raison"
                ],
                correct: 0,
                correction: "La Contre-Réforme est la réaction de l'Église catholique face au protestantisme, combinant réforme interne (Concile de Trente) et lutte contre les protestants."
            },
            6: {
                question: "Quelle chaîne cause → conséquence décrit correctement la Contre-Réforme catholique ?",
                options: [
                    "Les succès du protestantisme menacent l'autorité de l'Église catholique → celle-ci réunit le Concile de Trente (1545-1563) pour définir ses dogmes et réformer le clergé → l'Église catholique se réorganise pour mieux résister au protestantisme",
                    "Le Concile de Trente approuve officiellement les 95 thèses de Luther, et le protestantisme devient religion d'État en Italie",
                    "La vente des indulgences est renforcée par le Concile de Trente, ce qui relance le succès du protestantisme",
                    "Le Concile de Trente proclame la séparation de l'Église et de l'État en Europe, ce qui met fin aux guerres de religion"
                ],
                correct: 0,
                correction: "Face aux succès du protestantisme, l'Église catholique réunit le Concile de Trente (1545-1563), qui redéfinit les dogmes et réforme le clergé pour mieux résister à la Réforme."
            },
            7: {
                question: "Que désignent les guerres de religion en France (1562-1598) ?",
                options: [
                    "Une série de guerres civiles meurtrières opposant catholiques et protestants (huguenots) en France",
                    "Une série de guerres opposant la France et l'Angleterre pour le contrôle du commerce colonial",
                    "Un conflit opposant le roi de France au Parlement anglais au sujet des impôts",
                    "Une guerre menée par Napoléon contre l'Espagne et le Portugal"
                ],
                correct: 0,
                correction: "Les guerres de religion (1562-1598) sont une série de guerres civiles meurtrières opposant catholiques et protestants (huguenots) en France."
            },
            8: {
                question: "Quelle chaîne cause → conséquence décrit correctement le déclenchement des guerres de religion en France ?",
                options: [
                    "Les tensions entre catholiques et protestants s'aggravent → le massacre de Wassy en 1562, où des protestants sont tués par des hommes du duc de Guise, provoque l'indignation des huguenots → une série de guerres civiles éclate en France jusqu'en 1598",
                    "La signature de l'édit de Nantes en 1598 déclenche le massacre de Wassy en 1562",
                    "Le massacre de Wassy est organisé par des protestants contre des catholiques en 1598",
                    "Louis XIV interdit le protestantisme en 1562, ce qui provoque le massacre de Wassy"
                ],
                correct: 0,
                correction: "Le massacre de Wassy (1562), où des protestants sont tués par des hommes du duc de Guise, déclenche les guerres de religion qui durent jusqu'en 1598."
            },
            9: {
                question: "Comment Napoléon Bonaparte s'impose-t-il avant de devenir Premier consul ?",
                options: [
                    "Il se distingue par ses victoires militaires en Italie (1796-1797) puis lors de la campagne d'Égypte (1798-1799), avant de prendre le pouvoir par le coup d'État du 18 brumaire (9 novembre 1799)",
                    "Il est élu démocratiquement président de la République française par un vote populaire en 1799",
                    "Il hérite du trône de France à la mort de Louis XVI en 1793",
                    "Il est nommé roi de France par le Congrès de Vienne en 1815"
                ],
                correct: 0,
                correction: "Napoléon s'impose par ses victoires militaires en Italie (1796-1797) et en Égypte (1798-1799), avant de prendre le pouvoir par le coup d'État du 18 brumaire (1799)."
            },
            10: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'ascension de Napoléon Bonaparte ?",
                options: [
                    "Ses victoires militaires en Italie et en Égypte lui donnent une immense popularité → il profite de l'instabilité et de l'impopularité du Directoire → il s'empare du pouvoir par le coup d'État du 18 brumaire (1799) et devient Premier consul",
                    "Le Directoire, très populaire et stable, choisit Napoléon comme Premier consul par un vote unanime",
                    "La défaite navale d'Aboukir face aux Anglais rend Napoléon si populaire qu'il est immédiatement sacré empereur",
                    "Le sacre de Napoléon en 1804 précède et provoque le coup d'État du 18 brumaire de 1799"
                ],
                correct: 0,
                correction: "La popularité acquise par ses victoires militaires, combinée à l'instabilité du Directoire, permet à Napoléon de s'emparer du pouvoir par le coup d'État du 18 brumaire (1799)."
            },
            11: {
                question: "Quelle affirmation décrit correctement les réformes de Napoléon ?",
                options: [
                    "Napoléon réorganise profondément l'État français avec des réformes durables : le Code civil (1804), le Concordat (1801), la création des lycées (1802), la Banque de France (1800) et les préfets",
                    "Napoléon supprime toute administration centralisée et rend le pouvoir aux provinces autonomes",
                    "Napoléon abolit le Code civil pour rétablir les lois de l'Ancien Régime",
                    "Napoléon rompt totalement avec l'Église catholique et interdit toute pratique religieuse en France"
                ],
                correct: 0,
                correction: "Napoléon met en place des réformes durables : Code civil (1804), Concordat (1801), lycées (1802), Banque de France (1800) et préfets, qui structurent durablement l'État."
            },
            12: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'impact du Code civil napoléonien (1804) ?",
                options: [
                    "Napoléon fait codifier le droit français dans le Code civil de 1804, garantissant l'égalité devant la loi et la propriété → ce code est exporté dans toute l'Europe napoléonienne → il reste aujourd'hui la base du droit dans plusieurs pays, dont la France et la Belgique",
                    "Le Code civil rétablit les privilèges de la noblesse et du clergé dans toute l'Europe",
                    "Le Code civil est aboli dès la chute de Napoléon en 1815 et ne laisse aucune trace",
                    "Le Congrès de Vienne rédige le Code civil en 1815 pour remplacer les lois napoléoniennes"
                ],
                correct: 0,
                correction: "Le Code civil (1804), qui garantit l'égalité devant la loi, est exporté dans toute l'Europe napoléonienne et reste aujourd'hui la base du droit dans plusieurs pays, dont la Belgique."
            },
            13: {
                question: "Quelle affirmation décrit correctement les limites de la domination napoléonienne en Europe ?",
                options: [
                    "Le blocus continental ruine les économies européennes sans vaincre l'Angleterre, et les résistances nationales (guérilla espagnole, campagne de Russie de 1812) épuisent l'Empire et réveillent les nationalismes",
                    "L'Empire napoléonien ne rencontre aucune résistance en Europe jusqu'à sa chute soudaine en 1815",
                    "Le blocus continental renforce durablement le commerce entre la France et l'Angleterre",
                    "La campagne de Russie de 1812 est une victoire totale qui consolide l'Empire napoléonien"
                ],
                correct: 0,
                correction: "Le blocus continental ruine les économies européennes sans faire plier l'Angleterre, tandis que la guérilla espagnole et le désastre de la campagne de Russie (1812) épuisent l'Empire."
            },
            14: {
                question: "Quelle chaîne cause → conséquence décrit correctement un facteur de la chute de Napoléon ?",
                options: [
                    "Napoléon impose le blocus continental contre l'Angleterre → cela ruine les économies européennes sans faire plier l'Angleterre, protégée par sa marine → le mécontentement nourrit des résistances nationales qui affaiblissent l'Empire",
                    "Le blocus continental enrichit l'Angleterre qui devient l'alliée principale de Napoléon",
                    "La résistance espagnole soutient militairement Napoléon contre l'Angleterre",
                    "La campagne de Russie de 1812 est un franc succès qui pousse le tsar à s'allier définitivement à Napoléon"
                ],
                correct: 0,
                correction: "Le blocus continental ruine les économies européennes sans vaincre l'Angleterre, ce qui nourrit des résistances nationales qui affaiblissent progressivement l'Empire napoléonien."
            }
        },
        'lib_histoire_4e_5': {
            1: {
                question: "Que désigne la révolution industrielle ?",
                options: [
                    "La transformation profonde des modes de production qui débute en Angleterre dans les années 1760-1780, marquant le passage d'une économie agricole et artisanale à une économie industrielle et urbaine",
                    "Le mouvement de contestation politique qui provoque la Révolution française de 1789",
                    "La réorganisation administrative de l'Europe décidée par le Congrès de Vienne en 1815",
                    "L'ensemble des réformes juridiques mises en place par Napoléon avec le Code civil"
                ],
                correct: 0,
                correction: "La révolution industrielle est la transformation profonde des modes de production qui débute en Angleterre (1760-1780) et fait passer d'une économie agricole à une économie industrielle et urbaine."
            },
            2: {
                question: "Quelle chaîne cause → conséquence explique correctement pourquoi la révolution industrielle démarre d'abord en Angleterre ?",
                options: [
                    "L'Angleterre dispose d'abondantes réserves de charbon, de capitaux issus du commerce colonial et d'un marché déjà unifié → ces atouts favorisent les premières innovations techniques → l'Angleterre devient le premier pays industrialisé dès la fin du XVIIIe siècle",
                    "La défaite de l'Angleterre à Waterloo en 1815 la pousse à s'industrialiser en urgence pour se reconstruire",
                    "Le blocus continental imposé par Napoléon provoque l'industrialisation immédiate de l'Angleterre dès 1760",
                    "L'abondance de mines d'argent en Angleterre finance directement la première révolution industrielle"
                ],
                correct: 0,
                correction: "Le charbon abondant, les capitaux issus du commerce colonial et un marché unifié expliquent pourquoi l'Angleterre s'industrialise la première, dès la fin du XVIIIe siècle."
            },
            3: {
                question: "Quelle innovation technique est associée à James Watt et joue un rôle clé dans la révolution industrielle ?",
                options: [
                    "La machine à vapeur perfectionnée par James Watt, utilisée dans les mines, les filatures et les transports",
                    "Le métier à tisser mécanique inventé par Denis Diderot pour l'industrie textile",
                    "Le moteur à combustion interne utilisé dans les premières automobiles du XVIIIe siècle",
                    "L'imprimerie à caractères mobiles, utilisée pour diffuser les idées des Lumières"
                ],
                correct: 0,
                correction: "James Watt perfectionne la machine à vapeur (1769), utilisée ensuite dans les mines, les filatures et les transports, moteur essentiel de la révolution industrielle."
            },
            4: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'impact de la machine à vapeur de James Watt (1769) ?",
                options: [
                    "James Watt perfectionne la machine à vapeur en 1769 → cette énergie mécanique peut désormais être utilisée dans les mines, les filatures et les transports → la production industrielle et les déplacements sont profondément transformés",
                    "James Watt invente la machine à vapeur pour remplacer le Code civil de Napoléon",
                    "La machine à vapeur de Watt est utilisée pour la première fois dans la construction du château de Versailles",
                    "La machine à vapeur provoque directement la Révolution française de 1789 en ruinant les paysans"
                ],
                correct: 0,
                correction: "La machine à vapeur de Watt (1769) permet d'utiliser une nouvelle source d'énergie dans les mines, les filatures et les transports, transformant profondément la production."
            },
            5: {
                question: "Comment étaient les conditions de vie et de travail des ouvriers au début de la révolution industrielle ?",
                options: [
                    "Elles étaient souvent catastrophiques : le prolétariat industriel, nouvelle classe sociale, travaillait de longues heures dans des conditions difficiles, surtout dans la première moitié du XIXe siècle",
                    "Elles étaient déjà très encadrées par une législation sociale protectrice dès le début du XIXe siècle",
                    "Les ouvriers bénéficiaient d'un salaire minimum garanti par la loi dès 1800",
                    "Le travail des enfants était interdit partout en Europe dès le début de la révolution industrielle"
                ],
                correct: 0,
                correction: "Les conditions de vie et de travail du prolétariat industriel étaient souvent catastrophiques, surtout dans la première moitié du XIXe siècle, avant les premières lois sociales."
            },
            6: {
                question: "Quelle chaîne cause → conséquence décrit correctement les conditions de travail ouvrières au XIXe siècle ?",
                options: [
                    "Les usines emploient une main-d'œuvre nombreuse sans réglementation sociale → les ouvriers travaillent 14 à 16 heures par jour, 6 jours sur 7, dans des conditions dangereuses → cela nourrit la contestation sociale et l'émergence du mouvement ouvrier",
                    "Les patrons réduisent volontairement le temps de travail à 8 heures par jour dès 1800 pour améliorer la productivité",
                    "Le Code civil de Napoléon impose immédiatement des horaires de travail limités dans les usines",
                    "Les mauvaises conditions de travail poussent le gouvernement anglais à interdire l'industrialisation dès 1760"
                ],
                correct: 0,
                correction: "L'absence de réglementation sociale entraîne des journées de 14 à 16 heures dans des conditions dangereuses, ce qui alimente la contestation ouvrière et l'émergence du mouvement social."
            },
            7: {
                question: "Quelle est la différence essentielle entre libéralisme économique et socialisme face à la question sociale au XIXe siècle ?",
                options: [
                    "Le libéralisme (Adam Smith) prône le marché libre et le laissez-faire, tandis que le socialisme critique la propriété privée et le capitalisme et propose une organisation plus collective de l'économie",
                    "Le libéralisme et le socialisme défendent tous deux exactement les mêmes solutions face à la question sociale",
                    "Le socialisme défend le laissez-faire économique tandis que le libéralisme réclame la collectivisation des moyens de production",
                    "Le libéralisme est un mouvement religieux tandis que le socialisme est un mouvement uniquement artistique"
                ],
                correct: 0,
                correction: "Le libéralisme économique défend le marché libre et le laissez-faire, tandis que le socialisme critique la propriété privée et le capitalisme au nom d'une organisation plus collective."
            },
            8: {
                question: "Quelle chaîne cause → conséquence décrit correctement une réponse à la question sociale au XIXe siècle ?",
                options: [
                    "Les mauvaises conditions de vie ouvrières créées par l'industrialisation suscitent des critiques → des penseurs socialistes proposent de remettre en cause la propriété privée et le capitalisme → des mouvements ouvriers et des idées socialistes se développent en réaction au libéralisme économique",
                    "Adam Smith invente le socialisme pour protéger les ouvriers des abus du capitalisme",
                    "Le libéralisme économique naît en réaction aux idées socialistes de Marx, apparues avant Adam Smith",
                    "La question sociale disparaît totalement dès l'apparition du libéralisme économique au XVIIIe siècle"
                ],
                correct: 0,
                correction: "Les mauvaises conditions ouvrières créées par l'industrialisation suscitent des critiques socialistes du capitalisme, qui nourrissent le développement du mouvement ouvrier."
            },
            9: {
                question: "Que désignent les « innovations » techniques qui caractérisent la révolution industrielle ?",
                options: [
                    "Les inventions et perfectionnements techniques (comme la machine à vapeur) qui transforment les modes de production et permettent le développement de l'industrie",
                    "Les réformes juridiques mises en place par Napoléon pour codifier le droit français",
                    "Les principes philosophiques défendus par les penseurs des Lumières comme la raison et la tolérance",
                    "Les traités diplomatiques signés entre les grandes puissances européennes après 1815"
                ],
                correct: 0,
                correction: "Les innovations de la révolution industrielle sont les inventions techniques (comme la machine à vapeur) qui transforment les modes de production."
            },
            10: {
                question: "Parmi ces événements liés à l'industrialisation belge, lequel s'est produit en premier ?",
                options: [
                    "La fondation des usines métallurgiques Cockerill à Seraing (1817)",
                    "L'indépendance de la Belgique (1830)",
                    "L'ouverture de la première ligne de chemin de fer Bruxelles-Malines (1835)",
                    "L'adoption du suffrage universel masculin tempéré par le vote plural (1893)"
                ],
                correct: 0,
                correction: "John Cockerill fonde ses usines métallurgiques à Seraing en 1817, avant l'indépendance belge (1830), le chemin de fer Bruxelles-Malines (1835) et le suffrage tempéré (1893)."
            },
            11: {
                question: "Pour évaluer une source historique (photographie, rapport d'usine, témoignage) sur l'industrialisation belge, que faut-il d'abord identifier ?",
                options: [
                    "La nature du document, son auteur, sa date et son intention, car un patron, un ouvrier ou un fonctionnaire ne décrivent pas l'industrialisation de la même manière",
                    "Uniquement la qualité esthétique du document, qui suffit à juger sa fiabilité",
                    "Seulement le nombre de pages du document, un document plus long étant automatiquement plus fiable",
                    "Rien, car tout document du XIXe siècle décrit forcément la réalité de façon neutre et objective"
                ],
                correct: 0,
                correction: "Il faut identifier la nature, l'auteur, la date et l'intention d'un document, car le point de vue d'un patron, d'un ouvrier ou d'un fonctionnaire diffère fortement."
            },
            12: {
                question: "Parmi ces innovations de la seconde industrialisation, laquelle a été mise au point en premier ?",
                options: [
                    "Le téléphone (Alexander Graham Bell, 1876)",
                    "L'ampoule électrique à incandescence commercialisée par Thomas Edison (1879)",
                    "L'automobile à moteur à explosion de Karl Benz (1886)",
                    "Le tramway électrique (fin des années 1880)"
                ],
                correct: 0,
                correction: "Le téléphone de Bell (1876) précède l'ampoule électrique d'Edison (1879), l'automobile de Benz (1886) et le tramway électrique (fin des années 1880)."
            },
            13: {
                question: "Que faut-il prendre en compte pour évaluer la fiabilité d'une photographie d'usine ou d'une publicité de la Belle Époque comme source historique ?",
                options: [
                    "Qui l'a produite et dans quel but (informer, vendre, valoriser une entreprise), car elle peut donner une image idéalisée qui cache les inégalités sociales de l'époque",
                    "Une photographie est toujours totalement neutre et montre la réalité sociale complète de l'époque",
                    "Seule la date de la photographie compte, son auteur et son intention n'ont aucune importance",
                    "Une publicité d'époque doit être considérée comme un document officiel de l'État belge"
                ],
                correct: 0,
                correction: "Une photographie ou une publicité d'entreprise peut donner une image idéalisée de la réalité : il faut identifier son auteur et son intention avant de l'utiliser comme source."
            }
        },
        'lib_histoire_4e_6': {
            1: {
                question: "Quelle affirmation décrit correctement l'industrialisation de la Belgique au XIXe siècle ?",
                options: [
                    "La Belgique devient le premier grand espace industrialisé du continent européen, avec le charbon, la métallurgie et le textile structurant les bassins wallons et certaines villes flamandes",
                    "La Belgique reste un pays exclusivement agricole tout au long du XIXe siècle",
                    "L'industrialisation belge démarre plus tard et plus lentement que celle de la France et de l'Allemagne",
                    "L'industrialisation touche uniformément toutes les régions belges sans aucune inégalité"
                ],
                correct: 0,
                correction: "La Belgique devient le premier grand espace industrialisé du continent, avec le charbon, la métallurgie et le textile structurant les bassins wallons et certaines villes flamandes."
            },
            2: {
                question: "Quelle chaîne cause → conséquence décrit correctement l'industrialisation de la Belgique ?",
                options: [
                    "Les ressources charbonnières, les capitaux et les techniques disponibles favorisent la concentration des usines et des transports (comme le chemin de fer Bruxelles-Malines dès 1835) → la production augmente fortement → cela entraîne une urbanisation rapide et de nouvelles dépendances économiques",
                    "L'absence totale de charbon en Belgique pousse le pays à se spécialiser uniquement dans l'agriculture",
                    "Le traité des XXIV articles de 1839 impose l'industrialisation forcée de la Wallonie",
                    "L'industrialisation belge démarre uniquement après l'adoption du suffrage universel en 1893"
                ],
                correct: 0,
                correction: "Les ressources charbonnières, les capitaux et le chemin de fer (dès 1835) favorisent la concentration industrielle, ce qui provoque une forte urbanisation et de nouvelles dépendances."
            },
            3: {
                question: "Quelle affirmation décrit correctement l'évolution politique de la Belgique à la fin du XIXe siècle ?",
                options: [
                    "Le suffrage universel masculin tempéré par le vote plural est adopté en 1893, tandis que catholiques, libéraux et socialistes organisent des réseaux sociaux et politiques (les piliers) et le mouvement flamand obtient un usage légal croissant du néerlandais",
                    "Le suffrage universel pur et simple pour tous les hommes et femmes est instauré dès 1830",
                    "Le vote censitaire est renforcé en 1893 pour réduire encore le nombre d'électeurs",
                    "Le néerlandais est interdit dans l'administration belge à partir de 1893"
                ],
                correct: 0,
                correction: "En 1893, le suffrage universel masculin tempéré par le vote plural est adopté, tandis que se développent les piliers politiques (catholique, libéral, socialiste) et l'usage légal du néerlandais."
            },
            4: {
                question: "Quelle chaîne cause → conséquence décrit correctement la démocratisation en Belgique ?",
                options: [
                    "Les mobilisations populaires et la construction de partis de masse (catholique, libéral, socialiste) exercent une pression croissante → le suffrage universel masculin tempéré par le vote plural est adopté en 1893 → le suffrage masculin devient égal (un homme, une voix) après 1918",
                    "Le vote plural de 1893 est aboli immédiatement par le Congrès national de 1830",
                    "Le suffrage universel masculin égal est instauré dès l'indépendance en 1830, avant tout mouvement populaire",
                    "La Constitution belge de 1831 accorde directement le droit de vote à toutes les femmes"
                ],
                correct: 0,
                correction: "La pression des mobilisations populaires et des partis de masse aboutit au suffrage tempéré de 1893, puis au suffrage universel masculin égal après 1918."
            },
            5: {
                question: "Que désigne « l'indépendance de 1830 » de la Belgique ?",
                options: [
                    "La proclamation par le gouvernement provisoire, en octobre 1830, de la séparation de la Belgique d'avec le royaume des Pays-Bas, à la suite de l'insurrection d'août-septembre 1830",
                    "L'adoption de la Constitution belge, considérée comme l'une des plus libérales d'Europe",
                    "La reconnaissance de la neutralité belge par les grandes puissances lors du traité des XXIV articles",
                    "L'instauration du suffrage universel masculin tempéré par le vote plural"
                ],
                correct: 0,
                correction: "L'indépendance de 1830 est proclamée par le gouvernement provisoire en octobre 1830, à la suite de l'insurrection d'août-septembre contre le royaume des Pays-Bas."
            },
            6: {
                question: "Que désigne la Constitution belge, adoptée le 7 février 1831 ?",
                options: [
                    "Le texte fondamental qui établit une monarchie constitutionnelle et garantit des libertés fondamentales (presse, enseignement, association, culte), considéré comme l'un des plus libéraux d'Europe à l'époque",
                    "Le traité international qui reconnaît la neutralité et l'indépendance de la Belgique face aux grandes puissances",
                    "La déclaration proclamant l'indépendance de la Belgique par le gouvernement provisoire",
                    "L'accord établissant le suffrage universel masculin en Belgique"
                ],
                correct: 0,
                correction: "La Constitution belge de 1831 établit une monarchie constitutionnelle et garantit des libertés fondamentales, ce qui en fait l'une des plus libérales d'Europe à l'époque."
            },
            7: {
                question: "Que désigne le terme « industrialisation » appliqué à la Belgique du XIXe siècle ?",
                options: [
                    "Le processus par lequel le charbon, la métallurgie et le textile se développent massivement, faisant de la Belgique le premier grand espace industrialisé du continent",
                    "Le processus d'adoption progressive du suffrage universel masculin en Belgique",
                    "Le processus de reconnaissance internationale de la neutralité belge par les grandes puissances",
                    "Le processus d'organisation de la société belge en piliers catholique, libéral et socialiste"
                ],
                correct: 0,
                correction: "L'industrialisation désigne le développement massif du charbon, de la métallurgie et du textile qui fait de la Belgique le premier grand espace industrialisé du continent."
            },
            8: {
                question: "Que désignent les « clivages politiques » qui traversent la Belgique du XIXe siècle ?",
                options: [
                    "Les oppositions religieuses, politiques, linguistiques et économiques qui structurent la vie politique belge, notamment entre catholiques, libéraux et (plus tard) socialistes",
                    "Les conflits militaires entre la Belgique et les Pays-Bas qui se poursuivent après 1830",
                    "Les différences de ressources en charbon entre la Wallonie et la Flandre uniquement",
                    "Les accords diplomatiques signés entre la Belgique et les grandes puissances européennes"
                ],
                correct: 0,
                correction: "Les clivages politiques désignent les oppositions religieuses, politiques, linguistiques et économiques qui structurent la vie politique belge, entre catholiques, libéraux et socialistes."
            },
            9: {
                question: "Que désigne la « question linguistique » dans la Belgique du XIXe siècle ?",
                options: [
                    "Le débat autour de la place du néerlandais face au français, porté notamment par le mouvement flamand qui obtient un usage légal croissant du néerlandais",
                    "Le débat sur l'adoption du suffrage universel masculin en 1893",
                    "Le conflit entre catholiques et libéraux au sujet de l'enseignement",
                    "Le débat sur la reconnaissance internationale de la neutralité belge en 1839"
                ],
                correct: 0,
                correction: "La question linguistique porte sur la place du néerlandais face au français, le mouvement flamand obtenant progressivement un usage légal croissant du néerlandais."
            },
            10: {
                question: "Parmi ces événements de la révolution belge de 1830, lequel s'est produit en premier ?",
                options: [
                    "La représentation de l'opéra La Muette de Portici à Bruxelles, qui déclenche l'insurrection (août 1830)",
                    "Le combat des Quatre Journées à Bruxelles (septembre 1830)",
                    "La proclamation de l'indépendance de la Belgique par le gouvernement provisoire (4 octobre 1830)",
                    "L'adoption de la Constitution belge (7 février 1831)"
                ],
                correct: 0,
                correction: "L'opéra La Muette de Portici (août 1830) déclenche l'insurrection, avant le combat des Quatre Journées (septembre), la proclamation de l'indépendance (octobre) et la Constitution (février 1831)."
            },
            11: {
                question: "Pour évaluer un témoignage ou une gravure représentant les journées de septembre 1830 à Bruxelles, quelle démarche est correcte ?",
                options: [
                    "Identifier l'auteur, la date de production et son camp (patriote belge ou partisan hollandais), car le récit d'un événement révolutionnaire est souvent orienté selon le point de vue de celui qui le raconte",
                    "Considérer que toute image de 1830 montre exactement la réalité sans aucune déformation",
                    "Ignorer la date de production, seule l'identité de l'auteur ayant de l'importance",
                    "Admettre qu'un témoignage écrit après les faits est toujours plus fiable qu'un témoignage écrit pendant les faits"
                ],
                correct: 0,
                correction: "Un témoignage ou une gravure sur 1830 doit être analysé selon son auteur, sa date et son camp, car le récit d'un événement révolutionnaire est souvent orienté."
            },
            12: {
                question: "Parmi ces événements de la démocratisation en Belgique, lequel s'est produit en premier ?",
                options: [
                    "La fondation du Parti ouvrier belge (POB, 1885)",
                    "L'adoption du suffrage universel masculin tempéré par le vote plural (1893)",
                    "La loi d'égalité linguistique entre le français et le néerlandais (1898)",
                    "L'instauration du suffrage universel masculin pur et simple, un homme une voix (1918)"
                ],
                correct: 0,
                correction: "Le Parti ouvrier belge est fondé en 1885, avant le suffrage tempéré de 1893, la loi d'égalité linguistique de 1898 et le suffrage masculin égal de 1918."
            },
            13: {
                question: "Pour évaluer un tract électoral ou un journal de parti publié en Belgique à la fin du XIXe siècle, quelle démarche est correcte ?",
                options: [
                    "Identifier le parti ou le pilier (catholique, libéral, socialiste) qui l'a produit et son intention, car chaque document politique défend un point de vue partisan et ne représente pas l'ensemble de l'opinion",
                    "Considérer que tout journal de l'époque exprime une opinion neutre représentant tous les Belges",
                    "Ignorer le parti d'origine du document, seul le contenu comptant pour juger sa fiabilité",
                    "Admettre le document comme un fait officiel de l'État belge, quel que soit son auteur"
                ],
                correct: 0,
                correction: "Un tract ou un journal de parti défend un point de vue partisan (catholique, libéral ou socialiste) : il faut identifier son origine et son intention avant de l'utiliser comme source."
            }
        }
    };
    Object.keys(REPLACEMENTS).forEach(function (id) {
        var chapter = findChapter(id);
        if (!chapter) return;
        var repl = REPLACEMENTS[id];
        Object.keys(repl).forEach(function (idxStr) {
            var i = Number(idxStr);
            var ex = chapter.exercices[i];
            if (!ex) return;
            var r = repl[idxStr];
            ex.question = r.question;
            ex.options = r.options;
            ex.correct = r.correct;
            ex.correction = r.correction;
            ex.contentVersion = (ex.contentVersion || 0) + 1;
        });
    });
})();
