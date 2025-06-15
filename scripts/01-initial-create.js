const { DatabaseSync} = require("node:sqlite");


const db = new DatabaseSync("./data/cases.db");


db.exec(`
    create table if not exists cases (
        id int primary key,
        slug text,
        title text,
        shortDescription text,
        description text,
        tag text,
        date text,
        imageUrl text
    )
    `);

const insert = db.prepare("insert into cases (id, slug, title, shortDescription, description, tag, date, imageUrl) values (?,?,?,?, ?,?,?,?)");

insert.run(1, "gebruikerservaring-optimalisatie", "Optimalisatie van gebruikservaring", "We verbeteren digitale interacties en gebruikerservaring.", `
    <p>Het verbeteren van de gebruikerservaring staat centraal in onze aanpak. 
    We analyseren elk aspect van de interactie tussen gebruikers en digitale platforms.</p>
    <p>Door gebruik te maken van data-analyse en geavanceerde technologieën 
    zorgen we voor een naadloze en efficiënte ervaring.</p>
    <p>Onze oplossingen bieden meetbare resultaten, met een focus op gebruiksvriendelijkheid 
    en toegankelijkheid.</p>
    <p>Of het nu gaat om websites of mobiele applicaties, ons team levert maatwerk 
    dat aansluit bij de behoeften van jouw organisatie.</p>
    <p>Neem vandaag nog contact met ons op om te bespreken hoe we jouw digitale interacties kunnen verbeteren.</p>
`, "web-development", "20 juni 2025", "/images/theme/light/blog-1-800x600.jpg");

insert.run(2, "data-analyse-oplossingen", "Data-analyse oplossingen",  "Inzicht door data-analyse voor betere besluitvorming.", `
    <p>Data is de sleutel tot succes in de moderne wereld. 
    Ons team helpt organisaties om waardevolle inzichten te verkrijgen uit hun gegevens.</p>
    <p>Met geavanceerde tools en technieken zorgen we ervoor dat jouw data wordt omgezet in bruikbare informatie.</p>
    <p>Van voorspellende analyses tot realtime monitoring, wij bieden oplossingen die jouw bedrijf vooruit helpen.</p>
    <p>Onze expertise in data-analyse stelt je in staat om strategische beslissingen te nemen met vertrouwen.</p>
    <p>Ontdek hoe wij jouw data kunnen transformeren en jouw organisatie naar nieuwe hoogten kunnen brengen.</p>
`, "data-driven-solutions", "21 juni 2025", "/images/theme/light/blog-2-800x600.jpg");

insert.run(3, "cloud-integratie", "Cloud-integratie", "Efficiënte en veilige cloudoplossingen voor jouw bedrijf.", `
    <p>De overstap naar de cloud biedt ongekende mogelijkheden voor flexibiliteit en schaalbaarheid.</p>
    <p>Wij begeleiden jouw organisatie bij elke stap van de cloud-integratie, van planning tot implementatie.</p>
    <p>Onze oplossingen zijn ontworpen om jouw bedrijf efficiënter en veiliger te maken.</p>
    <p>Met onze expertise in cloudtechnologieën zorgen we voor een naadloze overgang en optimale prestaties.</p>
    <p>Laat ons jouw partner zijn in de digitale transformatie naar de cloud.</p>
`, "system-integrations", "22 juni 2025", "/images/theme/light/blog-3-800x600.jpg");

insert.run(4, "mobiele-app-ontwikkeling", "Mobiele app-ontwikkeling",  "Robuuste en gebruiksvriendelijke mobiele apps die impact maken.", `
    <p>Onze expertise in mobiele app-ontwikkeling stelt ons in staat om innovatieve en krachtige applicaties te leveren.</p>
    <p>Of het nu gaat om iOS of Android, wij bouwen op maat gemaakte apps die perfect aansluiten bij jouw bedrijfsdoelen.</p>
    <p>Met een focus op gebruiksvriendelijkheid en prestaties zorgen we ervoor dat jouw app een blijvende indruk maakt op gebruikers.</p>
    <p>Ons team begeleidt je vanaf het eerste concept tot de uiteindelijke implementatie en onderhoud.</p>
    <p>Ontdek hoe we jouw idee kunnen omzetten in een mobiele app die impact maakt.</p>
`, "web-development", "23 juni 2025", "/images/theme/light/blog-4-800x600.jpg");

insert.run(5, "e-commerce-platforms", "E-commerce platforms",  "Complete e-commerce-oplossingen voor jouw online winkel.", `
    <p>Het opzetten van een succesvolle online winkel vereist expertise en precisie. Wij bieden beide.</p>
    <p>Met op maat gemaakte e-commerce-oplossingen helpen we jouw bedrijf groeien in de digitale wereld.</p>
    <p>Onze platforms zijn schaalbaar, veilig en gericht op het bieden van een naadloze gebruikerservaring.</p>
    <p>Van ontwerp tot implementatie, we zorgen ervoor dat jouw e-commerce site aansluit bij jouw merk en doelen.</p>
    <p>Kies voor een betrouwbare partner die jouw online onderneming naar het volgende niveau kan tillen.</p>
`, "e-commerce", "24 juni 2025", "/images/theme/light/blog-5-800x600.jpg");

insert.run(6, "cybersecurity-oplossingen", "Cybersecurity oplossingen", "Bescherm jouw digitale infrastructuur met onze expertise.", `
    <p>In een tijd waarin bedreigingen voortdurend evolueren, is cybersecurity belangrijker dan ooit.</p>
    <p>Wij bieden uitgebreide beveiligingsoplossingen om jouw data en systemen te beschermen.</p>
    <p>Van risicobeoordeling tot implementatie van geavanceerde beveiligingsprotocollen, we hebben alles in huis.</p>
    <p>Ons team werkt proactief om bedreigingen te identificeren en te neutraliseren voordat ze problemen veroorzaken.</p>
    <p>Zorg voor gemoedsrust met onze betrouwbare en effectieve cybersecurity-oplossingen.</p>
`, "system-integrations", "25 juni 2025", "/images/theme/light/blog-6-800x600.jpg");
insert.run(7, "api-integratie", "API-integratie","Naadloze API-koppelingen voor jouw systemen.", `
    <p>Het verbinden van verschillende systemen kan een uitdaging zijn, maar wij maken het eenvoudig.</p>
    <p>Met onze expertise in API-integratie zorgen we voor soepele en efficiënte koppelingen.</p>
    <p>Of het nu gaat om interne systemen of externe platforms, wij zorgen voor een foutloze synchronisatie.</p>
    <p>Onze aanpak minimaliseert downtime en maximaliseert de efficiëntie van jouw workflow.</p>
    <p>Laat ons jouw technologie naadloos laten samenwerken.</p>
`, "system-integrations", "26 juni 2025", "/images/theme/light/blog-7-800x600.jpg");

insert.run(8, "agile-softwareontwikkeling", "Agile Softwareontwikkeling",  "Flexibele en effectieve softwareontwikkelingsprocessen.", `
    <p>In een steeds veranderende wereld is wendbaarheid essentieel voor succes.</p>
    <p>Wij passen Agile-methodologieën toe om snel te kunnen reageren op jouw behoeften.</p>
    <p>Ons iteratieve ontwikkelingsproces zorgt ervoor dat je altijd betrokken bent en de controle behoudt.</p>
    <p>Van planning tot levering, we werken samen met jou om hoogwaardige software te leveren.</p>
    <p>Maak kennis met een partner die begrijpt hoe belangrijk flexibiliteit en efficiëntie zijn.</p>
`, "agile-development", "27 juni 2025", "/images/theme/light/blog-8-800x600.jpg");

insert.run(9, "innovatieve-ai-toepassingen", "Innovatieve AI-toepassingen",  "Slimme oplossingen met AI en machine learning.", `
    <p>Kunstmatige intelligentie opent nieuwe deuren voor automatisering en efficiëntie.</p>
    <p>Onze AI-oplossingen zijn ontworpen om jouw bedrijf slimmer en effectiever te maken.</p>
    <p>Van voorspellende modellen tot geavanceerde analyse, wij leveren resultaten die ertoe doen.</p>
    <p>Laat ons je helpen om AI te benutten om jouw bedrijfsdoelen te bereiken.</p>
    <p>Wij maken technologie toegankelijk en waardevol voor jouw organisatie.</p>
`, "data-driven-solutions", "28 juni 2025", "/images/theme/light/blog-9-800x600.jpg");

insert.run(10, "digitalisering-bedrijfsprocessen", "Digitalisering van bedrijfsprocessen", "Optimaliseer jouw workflow met digitale oplossingen.", `
    <p>Handmatige processen vertragen vaak de productiviteit en efficiëntie.</p>
    <p>Met onze digitale oplossingen tillen we jouw workflow naar een hoger niveau.</p>
    <p>Van procesautomatisering tot gegevensbeheer, wij bieden oplossingen die werken.</p>
    <p>Onze aanpak zorgt voor een soepele overgang en een blijvend voordeel voor jouw organisatie.</p>
    <p>Ontdek hoe digitalisering jouw bedrijfsprocessen kan transformeren.</p>
`, "agile-development", "29 juni 2025", "/images/theme/light/blog-1-800x600.jpg");

insert.run(11, "scalable-software-oplossingen", "Scalable Software-oplossingen",  "Software die met je meegroeit, ongeacht de schaal.", `
    <p>Je bedrijf groeit en je software moet meegroeien.</p>
    <p>Wij ontwerpen schaalbare oplossingen die voldoen aan jouw huidige en toekomstige eisen.</p>
    <p>Onze technologieën zorgen voor betrouwbaarheid en prestaties, ongeacht de omvang.</p>
    <p>Met onze expertise blijven jouw systemen soepel draaien, zelfs bij intensief gebruik.</p>
    <p>Laat ons jouw partner zijn in het bouwen van software die de groei van jouw bedrijf ondersteunt.</p>
`, "custom-software", "30 juni 2025", "/images/theme/light/blog-2-800x600.jpg");

insert.run(12, "procesautomatisering", "Procesautomatisering",  "Automatiseer je processen voor maximale efficiëntie.", `
    <p>Handmatige taken vertragen vaak het groeipotentieel van een organisatie.</p>
    <p>Wij bieden geavanceerde procesautomatisering om tijd te besparen en fouten te verminderen.</p>
    <p>Door repetitieve workflows te stroomlijnen, kunnen jouw teams zich concentreren op strategische initiatieven.</p>
    <p>Onze oplossingen zijn ontworpen om jouw bedrijfsprocessen eenvoudiger en effectiever te maken.</p>
    <p>Behaal meer met minder moeite door te kiezen voor onze innovatieve technologieën.</p>
`, "system-integrations", "1 juli 2025", "/images/theme/light/blog-3-800x600.jpg");

insert.run(13, "enterprise-software", "Enterprise Software",  "Complete oplossingen voor complexe bedrijfsbehoeften.", `
    <p>Grote organisaties hebben robuuste systemen nodig om hun processen te ondersteunen.</p>
    <p>Onze enterprise software-oplossingen zijn ontworpen om de meest complexe uitdagingen aan te pakken.</p>
    <p>Met een focus op schaalbaarheid en betrouwbaarheid bieden we technologieën die bedrijven ondersteunen.</p>
    <p>Of het nu gaat om interne systemen of klantgerichte oplossingen, wij leveren maatwerk.</p>
    <p>Laat ons jouw digitale backbone bouwen voor duurzaam succes.</p>
`, "custom-software", "2 juli 2025", "/images/theme/light/blog-4-800x600.jpg");

insert.run(14, "saas-platforms","SaaS Platforms", "Software-oplossingen geleverd als een service.", `
    <p>Met Software-as-a-Service (SaaS) bieden wij flexibele en schaalbare oplossingen.</p>
    <p>Onze platforms zijn toegankelijk, kosteneffectief en eenvoudig te implementeren.</p>
    <p>Met een focus op beveiliging en prestaties, zorgen we voor oplossingen die bedrijven ondersteunen.</p>
    <p>Onze SaaS-oplossingen kunnen eenvoudig worden geïntegreerd in jouw bestaande workflow.</p>
    <p>Laat ons jouw partner zijn in de digitale transformatie met SaaS-technologieën.</p>
`, "custom-software", "3 juli 2025", "/images/theme/light/blog-5-800x600.jpg");

insert.run(15, "machine-learning-modellen", "Machine Learning Modellen", "Innovatie met machine learning en data-analyse.", `
    <p>Machine learning opent nieuwe mogelijkheden voor intelligente automatisering en voorspellingen.</p>
    <p>Wij ontwikkelen op maat gemaakte machine learning-modellen om jouw data te benutten.</p>
    <p>Van geavanceerde voorspellingen tot procesoptimalisatie, wij leveren oplossingen die werken.</p>
    <p>Onze technologieën maken jouw organisatie slimmer en effectiever.</p>
    <p>Ontdek hoe wij machine learning kunnen toepassen om jouw doelen te bereiken.</p>
`, "data-driven-solutions", "4 juli 2025", "/images/theme/light/blog-6-800x600.jpg");

insert.run(16, "prestatieoptimalisatie", "Prestatieoptimalisatie", "Versnel jouw processen en verbeter prestaties.", `
    <p>Langzame systemen kunnen jouw bedrijfsdoelen belemmeren.</p>
    <p>Wij analyseren jouw infrastructuur en maken verbeteringen voor maximale snelheid en efficiëntie.</p>
    <p>Onze aanpak combineert geavanceerde technologieën met diepgaande kennis.</p>
    <p>Het resultaat? Snellere processen, minder downtime en meer productiviteit.</p>
    <p>Laat ons jouw systemen optimaliseren zodat je altijd een stap vooruit bent.</p>
`, "system-integrations", "5 juli 2025", "/images/theme/light/blog-7-800x600.jpg");

insert.run(17, "gebruiksvriendelijke-interfaces", "Gebruiksvriendelijke Interfaces",  "Intuïtieve ontwerpen voor tevreden gebruikers.", `
    <p>Een goed ontworpen interface is essentieel voor een positieve gebruikerservaring.</p>
    <p>Wij bouwen interfaces die intuïtief en aantrekkelijk zijn.</p>
    <p>Ons team zorgt voor een naadloze interactie tussen gebruikers en technologie.</p>
    <p>Van wireframes tot volledig ontwikkelde platforms, wij zetten jouw visie om in werkelijkheid.</p>
    <p>Geef jouw gebruikers de ervaring die ze verdienen met onze oplossingen.</p>
`, "web-development", "6 juli 2025", "/images/theme/light/blog-8-800x600.jpg");

insert.run(18, "databeveiliging", "Databeveiliging", "Bescherm jouw data met onze oplossingen.", `
    <p>Data is het hart van elk bedrijf, en het moet veilig worden bewaard.</p>
    <p>Wij bieden oplossingen die jouw data beschermen tegen interne en externe bedreigingen.</p>
    <p>Met onze beveiligingsprotocollen zorgen we voor vertrouwelijkheid, integriteit en beschikbaarheid.</p>
    <p>Laat ons jouw organisatie beschermen tegen de uitdagingen van de digitale wereld.</p>
`, "system-integrations", "7 juli 2025", "/images/theme/light/blog-9-800x600.jpg");

insert.run(19, "cross-platform-oplossingen", "Cross-platform Oplossingen",  "Apps en platforms die overal werken.", `
    <p>Met onze expertise in cross-platform technologieën zorgen we voor brede toegankelijkheid.</p>
    <p>Onze oplossingen werken soepel op verschillende apparaten en besturingssystemen.</p>
    <p>Van mobiele applicaties tot desktop software, wij bouwen met flexibiliteit in gedachten.</p>
    <p>Laat ons jouw visie realiseren, ongeacht het platform.</p>
`, "web-development", "8 juli 2025", "/images/theme/light/blog-1-800x600.jpg");

insert.run(20, "digitale-transformatie", "Digitale Transformatie", "Transformeer jouw organisatie met technologie.", `
    <p>De digitale wereld biedt kansen, en wij helpen jou deze te benutten.</p>
    <p>Met onze oplossingen zorgen we voor een naadloze overgang naar digitale processen.</p>
    <p>Van strategie tot implementatie, wij begeleiden jou bij elke stap.</p>
    <p>Laat ons jouw digitale transformatie ondersteunen en jouw organisatie naar nieuwe hoogten brengen.</p>
`, "agile-development", "9 juli 2025", "/images/theme/light/blog-2-800x600.jpg");

insert.run(21, "embedded-systemen", "Embedded Systemen", "Efficiënte software voor embedded oplossingen.", `
    <p>Onze expertise in embedded systemen helpt bedrijven om complexe technologieën eenvoudig te integreren.</p>
    <p>Wij bouwen software die betrouwbaar en schaalbaar is voor embedded toepassingen.</p>
    <p>Van productieapparatuur tot IoT-apparaten, wij leveren oplossingen die werken.</p>
    <p>Ontdek hoe onze embedded technologieën jouw processen kunnen verbeteren.</p>
`, "custom-software", "10 juli 2025", "/images/theme/light/blog-3-800x600.jpg");

insert.run(22, "technische-consultancy", "Technische Consultancy", "Advies en ondersteuning voor technische groei.", `
    <p>Wij bieden deskundig advies om jouw technologie en processen te verbeteren.</p>
    <p>Met diepgaande kennis helpen we jou strategische beslissingen te nemen.</p>
    <p>Onze consultancy-oplossingen zijn op maat gemaakt om aan jouw unieke behoeften te voldoen.</p>
    <p>Laat ons jouw gids zijn in de wereld van technologie en innovatie.</p>
`, "agile-development", "11 juli 2025", "/images/theme/light/blog-4-800x600.jpg");

insert.run(23, "real-time-analyse", "Real-Time Analyse",  "Direct inzicht met real-time datatoepassingen.", `
    <p>Snelle en accurate gegevens zijn cruciaal voor goede besluitvorming.</p>
    <p>Wij leveren real-time analyse-oplossingen die jouw bedrijf ondersteunen.</p>
    <p>Van datavisualisatie tot procesmonitoring, wij bieden technologie die werkt.</p>
    <p>Ontdek hoe real-time gegevens jouw organisatie effectiever maken.</p>
`, "data-driven-solutions", "12 juli 2025", "/images/theme/light/blog-5-800x600.jpg");

insert.run(24, "video-herkenningstechnologie", "Video-herkenningstechnologie", "Innovatieve oplossingen met beeldanalyse.", `
    <p>Beeldanalyse speelt een steeds grotere rol in moderne toepassingen.</p>
    <p>Wij bieden oplossingen met geavanceerde videoherkenningstechnologie.</p>
    <p>Van beveiliging tot marketing, onze technologieën hebben een breed scala aan toepassingen.</p>
    <p>Laat ons jouw idee verwezenlijken met onze expertise in beeldanalyse.</p>
`, "data-driven-solutions", "13 juli 2025", "/images/theme/light/blog-6-800x600.jpg");

insert.run(25, "platforms-op-maat", "Platforms op maat", "Softwareoplossingen die perfect aansluiten bij jouw wensen.", `
    <p>Niet elke organisatie past binnen een standaardoplossing, en dat begrijpen wij.</p>
    <p>Onze op maat gemaakte platforms zijn ontworpen om precies te voldoen aan jouw unieke behoeften.</p>
    <p>Of het nu gaat om complexe bedrijfsprocessen of eenvoudige tools, wij bieden een oplossing die werkt.</p>
    <p>Met flexibiliteit en schaalbaarheid bouwen wij software die jouw organisatie ondersteunt.</p>
    <p>Kies voor maatwerk dat jouw visie tot leven brengt.</p>
`, "custom-software", "14 juli 2025", "/images/theme/light/blog-7-800x600.jpg");

