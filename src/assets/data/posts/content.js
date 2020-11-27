const max = `<p>Op de eerste dag van Adobe MAX 2020 werd er om 18 uur een live keynote gehost door Scott Belsky en enkele andere
vertegenwoordigers van Adobe. Tijdens de keynote, werd de impact van Adobe op de wereld besproken en de vele nieuwe
services en features die zij dit jaar zullen toevoegen aan hun arsenaal. Conan O'Brien was ook aanwezig en leverde
tijdens de keynote enkele grappige skits.</p>
<p>In de huidige pandemie, is het belang van creativiteit nog nooit zo duidelijk geweest. Adobe heeft er daarom voor
gezorgd dat mensen de mogelijkheid hebben hun creativiteit uit te drukken op verschillende manieren. Van kleurboeken
voor volwassenen tot gratis services en cursussen, er is altijd wel iets nieuws die je kan bijleren.</p>
<p>Adobe wil de mogelijkheid dingen te creëren zo toegankelijk en makkelijk mogelijk maken. Dit willen ze doen op drie
verschillende manieren: vaardigheden uitbreiden, samenwerking versnellen en nieuwe vormen van creëren loslaten. Met
deze drie pijlers in het achterhoofd, ging de keynote verder met het demonstreren van de nieuwe features in hun vele
applicaties.</p>
<p>Om samenwerking te verbeteren in de Creative Cloud, is het nu mogelijk assets te delen met de al de mensen in je
team. Zo heeft iedereen toegang tot de verschillende fonts, afbeeldingen, ... Deze assets kunnen dus ook gedeeld
worden over verschillende Adobe applicaties.</p>
<p>Er zijn veel nieuwe en verbeterde features in Adobe Photoshop. De feature die ik het interessantst vind, is de "Sky
Replacement". Dit maakt het mogelijk de lucht in een bepaalde foto snel aan te passen. De kleuren en schaduwen in de
foto worden ook aangepast om zo een realistisch beeld te vormen.</p>
<p>Een andere nieuwe functie in Photoshop is "Neural Filtering". Deze feature maakt het mogelijk mensen een andere
haarstijl te geven of hen te doen lachen in een foto. Dit wordt volledige gedaan aan de hand van AI en is een open
platform die door iedereen kan gebruikt worden.</p>
<p>Het nadeel van Neural Filtering is wel dat makkelijker is foto's te bewerken en mensen te misleiden. Hiervoor heeft
Adobe een nieuwe service voor uitgebracht, genaamd de "Content Authenticity Initiative". Aan de hand van deze
service zal men te weten kunnen komen of een foto bewerkt is en zo wel betrouwbaar is.</p>

<p class="quote">The initial mission of the CAI is to develop the industry standard for content attribution. By
augmenting subjective judgments about authenticity with objective facts about how a piece of content came to be, the
CAI aims to help content consumers make more informed decisions about what to trust.</p>
<p>Een applicatie waar ik nog nooit van gehoord had, is Adobe Fresco. Fresco is een programma waarmee je kan
tekenen/schilderen met de vele brushes van Adobe. Omdat ik zelf graag teken met een tekentabel, was ik heel
geïnteresseerd in de functionaliteit van dit programma. Het digitale kwasten zijn heel realistisch en leken mij de
moeite waard eens uit te proberen. Ik heb het programma dan zelf ook meteen geïnstalleerd.</p>
<p>Adobe XD is een programma die ik al meerdere keren heb gebruik voor het ontwerpen van websites en apps. Ik was dan
ook blij dat er enkele nieuwe feature zullen bijkomen. In de komende updates zullen we gebruik kunnen maken van
dynamische herordening van de layout, automatische padding en 3D transformaties.</p>
<p>Tenslotte zullen er een paar interessantte functionaliteiten worden toegevoegd aan Premier Pro. Zo zal men de
mogelijkheid hebben ondertitelingen automatisch te genereren en snel op te maken. Deze feature lijkt mij heel
interessant omdat heeft veel tijd zelf besparen.</p>
<p>De Adobe MAX was voor mij een interessante belevenis. Ik had niet verwacht dat er zo veel nieuwe interessante
features zouden worden toegevoegd. De onderbrekingen met Conan O'Brien waren tof en maakten het kijken van de
keynote ook leuker. Ik ben alvast benieuwd naar wat Adobe volgend jaar zal uitbrengen.</p>`

const hello = `<p>Het is geen geheim dat ik het geweldig vind om backends te ontwikkelen, vooral API's. Het is niet dat ik niet van het
schrijven van HTML, CSS of JavaScript houd, verre van zelfs. Ik geniet van de ontwerpfase van front-end-applicaties,
maar ik vind het gewoon leuk om de logica voor een systeem veel te veel te schrijven. Mijn oorspronkelijke idee voor
deze blog was het schrijven van een back-end in Laravel, compleet met een database, authenticatie om nieuwe posts te
maken,… Maar ik heb uiteindelijk toch besloten dit niet te doen. Waarom? Omdat ik iets nieuws wilde proberen. De
volgende vraag was dus: "Wat ga ik gebruiken om deze blog te maken?".</p>
<p>Ik herinner me dat een paar maanden geleden YouTube opende en een ​​video vond in mijn aanbevelingen genaamd "React
in 100 seconds" van Fireship. Aangezien ik al over React had gehoord, besloot ik de video te bekijken en ik moet
zeggen dat ik niet teleurgesteld was. Die dag besloot ik de tutorial op de officiële website te volgen en eens
kennis te maken met React. Na die tutorial was ik Hooked (je zal de grap later wel begrijpen).</p>
<h3>Van design tot realiteit</h3>
<p>Nadat ik React had gekozen als library, ging ik meteen aan de slag om mijn website te ontwerpen. Ik wilde een simpel
design en wilde niet al te veel verschillende pagina’s. Ik heb met Adobe XD enkele ontwerpen geprobeerd en heb
uiteindelijk gekozen voor het ontwerp dat je nu ziet.</p>
<p>Aan de hand van dit ontwerp heb ik ook mijn site ingedeeld in verschillende componenten. Voorbeelden hiervan zijn een
main pagina, een header, een footer, een quotegenerator, blogfeed, blogitem, … Ik ga in deze post de code niet
bespreken, maar als je geïnteresseerd bent hierin mag je me altijd contacteren.</p>
<h3>Development</h3>
<p>Toen ik een goede basis had, heb ik mijn blog online gezet via Firebase. Ik had deze service al meerdere keren
gebruik voor andere kleine projecten en heb er dus al wat ervaring mee. Het was wel de eerste keer dat ik een React
app op Firebase deployde. Het grote verschil met gewone (HTML, CSS en JavaScript) websites is dat een React app
eerst “opgebouwd” moet worden. Dit gebeurt in de build-folder met volgend commando:</p>
<p class="code">npm run build</p>
<p>Het deployen van een React app is relatief hetzelfde als bij gewone websites. Je maakt een nieuw project aan met de
Firebase console en initialiseert Firebase ook in je project folder. Het enige verschil met gewone webiste is dat je
hier de build-folder moet deployen in plaats van de public-folder.</p>

<p>Deze blog zal een soort speeltuin zijn voor mij om React beter te leren kennen en bij te leren. Ik hoop de jij, de
lezer, er ook iets van beleerd!</p>`

function getBlogPosts(){
    return  [
        {
            "title": "Adobe MAX keynote",
            "link": "adobe-max",
            "text": max,
            "date": "20-10-2020"
        },

        {
            "title": "Hello World",
            "link": "hello-world",
            "text": hello,
            "date": "20-10-2020"
        }
    ]
}

export default{
    getBlogPosts
}