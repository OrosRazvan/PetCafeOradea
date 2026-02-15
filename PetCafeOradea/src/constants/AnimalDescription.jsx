import imgMira from "../assets/photos/mira/mira.jpg";
import imgTiramisu from "../assets/photos/tiramisu/tiramisu.jpg";
import imgAsh from "../assets/photos/ash/ash.jpg";
import imgDaisy from "../assets/photos/daisy/daisy.jpeg";
import imgChili from "../assets/photos/chili/chili.jpg";
import imgWinnie from "../assets/photos/winnie/winnie.jpeg";
import imgWendy from "../assets/photos/wendy/wendy.jpeg";
import imgMisu from "../assets/photos/misu/misu.jpg";
import imgBaghera from "../assets/photos/baghera/baghera.jpg";
import imgSmokey from "../assets/photos/smokey/smokey.jpeg";
import imgGarfield from "../assets/photos/garfield/garfield.jpeg";
import imgMochi from "../assets/photos/mochi/mochi.jpeg";
import imgNala from "../assets/photos/nala/nala.jpeg";

// Import dinamic pentru Mira
const imaginiMira = import.meta.glob('../assets/photos/mira/*.{jpg,jpeg,png}', { eager: true });
const imaginiMiraArray = Object.values(imaginiMira).map(module => module.default);
const additionalImagesMira = imaginiMiraArray.filter(img => img !== imgMira);

// Import dinamic pentru Tiramisu
const imaginiTiramisu = import.meta.glob('../assets/photos/tiramisu/*.{jpg,jpeg,png}', { eager: true });
const imaginiTiramisuArray = Object.values(imaginiTiramisu).map(module => module.default);
const additionalImagesTiramisu = imaginiTiramisuArray.filter(img => img !== imgTiramisu);

// Import dinamic pentru Ash
const imaginiAsh = import.meta.glob('../assets/photos/ash/*.{jpg,jpeg,png}', { eager: true });
const imaginiAshArray = Object.values(imaginiAsh).map(module => module.default);
const additionalImagesAsh = imaginiAshArray.filter(img => img !== imgAsh);

// Import dinamic pentru Misu
const imaginiMisu = import.meta.glob('../assets/photos/misu/*.{jpg,jpeg,png}', { eager: true });
const imaginiMisuArray = Object.values(imaginiMisu).map(module => module.default);
const additionalImagesMisu = imaginiMisuArray.filter(img => img !== imgMisu);

// Import dinamic pentru Baghera
const imaginiBaghera = import.meta.glob('../assets/photos/baghera/*.{jpg,jpeg,png}', { eager: true });
const imaginiBagheraArray = Object.values(imaginiBaghera).map(module => module.default);
const additionalImagesBaghera = imaginiBagheraArray.filter(img => img !== imgBaghera);

// Import dinamic pentru Smokey
const imaginiSmokey = import.meta.glob('../assets/photos/smokey/*.{jpg,jpeg,png}', { eager: true });
const imaginiSmokeyArray = Object.values(imaginiSmokey).map(module => module.default);
const additionalImagesSmokey = imaginiSmokeyArray.filter(img => img !== imgSmokey);

// Import dinamic pentru Garfield
const imaginiGarfield = import.meta.glob('../assets/photos/garfield/*.{jpg,jpeg,png}', { eager: true });
const imaginiGarfieldArray = Object.values(imaginiGarfield).map(module => module.default);
const additionalImagesGarfield = imaginiGarfieldArray.filter(img => img !== imgGarfield);

// Import dinamic pentru Mochi
const imaginiMochi = import.meta.glob('../assets/photos/mochi/*.{jpg,jpeg,png}', { eager: true });
const imaginiMochiArray = Object.values(imaginiMochi).map(module => module.default);
const additionalImagesMochi = imaginiMochiArray.filter(img => img !== imgMochi);

// Import dinamic pentru Nala
const imaginiNala = import.meta.glob('../assets/photos/nala/*.{jpg,jpeg,png}', { eager: true });
const imaginiNalaArray = Object.values(imaginiNala).map(module => module.default);
const additionalImagesNala = imaginiNalaArray.filter(img => img !== imgNala);

// Import dinamic pentru Daisy
const imaginiDaisy = import.meta.glob('../assets/photos/daisy/*.{jpg,jpeg,png}', { eager: true });
const imaginiDaisyArray = Object.values(imaginiDaisy).map(module => module.default);
const additionalImagesDaisy = imaginiDaisyArray.filter(img => img !== imgDaisy);

// Import dinamic pentru Chili
const imaginiChili = import.meta.glob('../assets/photos/chili/*.{jpg,jpeg,png}', { eager: true });
const imaginiChiliArray = Object.values(imaginiChili).map(module => module.default);
const additionalImagesChili = imaginiChiliArray.filter(img => img !== imgChili);

// Import dinamic pentru Wendy
const imaginiWendy = import.meta.glob('../assets/photos/wendy/*.{jpg,jpeg,png}', { eager: true });
const imaginiWendyArray = Object.values(imaginiWendy).map(module => module.default);
const additionalImagesWendy = imaginiWendyArray.filter(img => img !== imgWendy);

// Import dinamic pentru Winnie
const imaginiWinnie = import.meta.glob('../assets/photos/winnie/*.{jpg,jpeg,png}', { eager: true });
const imaginiWinnieArray = Object.values(imaginiWinnie).map(module => module.default);
const additionalImagesWinnie = imaginiWinnieArray.filter(img => img !== imgWinnie);

export const Mira = [
  {
    animalTitle: "Mira",
    imgURL: imgMira,
    smallText: "Sunt o domnisoara din rasa british shorthair, foarte calma, ador somnul si pliculețele...",
    denumire:
      "Sunt o domnisoara din rasa british shorthair, foarte calma, ador somnul si pliculețele. (Da, eu sunt pisicuta care adoarme pe spate intotdeauna).",
    additionalImages: additionalImagesMira,
  },
];

export const Tiramisu = [
  {
    animalTitle: "Tiramisu",
    imgURL: imgTiramisu,
    smallText: "Sunt o fetita din rasa Siameza, foarte iubitoare si jucausa. Adorm mereu in pătuțul cațeilor si nimeni ma poate...",
    denumire:
      "Sunt o fetita din rasa Siameza, foarte iubitoare si jucausa. Adorm mereu in pătuțul cațeilor si nimeni ma poate opri din a face asta!",
    additionalImages: additionalImagesTiramisu,
  },
];

export const Ash = [
  {
    animalTitle: "Ash",
    imgURL: imgAsh,
    smallText: "Eu sunt un motanel persan, evident prințul din local. Motto-ul meu in viata e “ai pliculet stau, n-ai pliculet ceau”...",
    denumire:
      "Eu sunt un motanel persan, evident prințul din local. Motto-ul meu in viata e “ai pliculet stau, n-ai pliculet ceau”. Imi plac la nebunie jucariile si mângăierea sub bărbiță. ",
    additionalImages: additionalImagesAsh,
  },
];

export const Misu = [
  {
    animalTitle: "Misu",
    imgURL: imgMisu,
    smallText: "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucaus si activ...",
    denumire:
      "Salut, numele meu este Mișu, sunt un motănel din rasa norvegiană de pădure, foarte jucaus si activ. Daca ar fi sa-mi gasesc un defect, acesta ar fi faptul ca sunt foarte curios…chiar prea curios uneori. Eu si Ash ne luptăm pentru titulatura de împărat al cafenelei zi de zi. Promit ca dacă voi fi ales președinte, voi exila toți câinii pe Marte.",
    additionalImages: additionalImagesMisu,
  },
];

export const Baghera = [
  {
    animalTitle: "Baghera",
    imgURL: imgBaghera,
    smallText: "Această pisică adoră să fie în centrul atenției și să primească alinturi. Se va așeza lângă tine pe canapea...",
    denumire:
      "Această pisică adoră să fie în centrul atenției și să primească alinturi. Se va așeza lângă tine pe canapea sau îți va „cerși” atenția prin frecarea ușoară a botului. Este perfectă pentru cei care caută o companie afectuoasă și devotată.",
    additionalImages: additionalImagesBaghera,
  },
];

export const Smokey = [
  {
    animalTitle: "Smokey",
    imgURL: imgSmokey,
    smallText: "Smokey este un motan British Shorthair cu blană deasă și catifelată, într-o nuanță elegantă de gri fumuriu, care parcă...",
    denumire:
      "Smokey este un motan British Shorthair cu blană deasă și catifelată, într-o nuanță elegantă de gri fumuriu, care parcă îi justifică perfect numele. Are o privire rotundă și curioasă, mereu atentă la ce se întâmplă în jur, dar mai ales la ce se află pe masă atunci când avem oaspeți. Cu o personalitate jucăușă și ușor șmecheră, Smokey a dezvoltat o pasiune neobișnuită: cafeaua oaspeților noștri. Nu o bea ca un motan obișnuit — el are propriul ritual. Se apropie tacticos, își strecoară cu maximă seriozitate lăbuța pufoasă în ceașcă și apoi gustă delicat de pe lăbuță, de parcă ar fi un mic somelier curios de aromă. Totul se întâmplă cu o naturalețe dezarmantă, sub privirile amuzate ale tuturor.",
    additionalImages: additionalImagesSmokey,
  },
];

export const Garfield = [
  {
    animalTitle: "Garfield",
    imgURL: imgGarfield,
    smallText: "Garfield este un motănel de rasă comună, cu blănița galben-aurie, numai bună de mângâiat, și cu o expresie care trădează pofta lui...",
    denumire:
      "Garfield este un motănel de rasă comună, cu blănița galben-aurie, numai bună de mângâiat, și cu o expresie care trădează pofta lui constantă pentru micile plăceri ale vieții. Este genul de pisic care pare mereu relaxat, dar care devine brusc foarte atent atunci când simte miros de cafea. Marele lui punct slab este cafeaua cu lapte, în special latte-ul. De îndată ce apare o cană cu spumă cremoasă, Garfield se transformă într-un adevărat inspector: se apropie curios, adulmecă serios și urmărește fiecare mișcare, sperând să prindă măcar o picătură. Pentru el, combinația de cafea și lapte este apogeul răsfățului, chiar dacă doar gustată pe furiș.",
    additionalImages: additionalImagesGarfield,
  },
];

export const Mochi = [
  {
    animalTitle: "Mochi",
    imgURL: imgMochi,
    smallText: "Mochi este o pisicuță specială, născută din două rase deosebite: Birmaneză, moștenită de la mama ei, Tiramisu, și Persană Ash...",
    denumire:
      "Mochi este o pisicuță specială, născută din două rase deosebite: Birmaneză, moștenită de la mama ei, Tiramisu, și Persană Ash, de la elegantul domn Ash. Din această combinație a primit nu doar frumusețea, ci și ambele caractere ale părinților ei. Așa se face că Mochi poate fi uneori distantă și liniștită, fără prea mult chef de alint, iar alteori te poate surprinde iubindu-te mai mult ca niciodată, cu o afecțiune profundă și sinceră. Este o pisicuță a contrastelor dulci: calmă, fină, dar cu momente de iubire intensă care îți topesc inima 🐾🤍",
    additionalImages: additionalImagesMochi,
  },
];

export const Nala = [
  {
    animalTitle: "Nala",
    imgURL: imgNala,
    smallText: "Nala este o pisică de rasă comună, dar cu un aspect care amintește mult de o pisică bengaleză....",
    denumire:
      "Nala este o pisică de rasă comună, dar cu un aspect care amintește mult de o pisică bengaleză. Are energie din plin, este extrem de activă și mereu pusă pe năzbâtii, genul de pisică ce nu poate sta locului nicio clipă. Când părinții mei adoptivi m-au întâlnit prima dată, au spus că sunt fetiță și mi-au pus numele Nala. Dar am crescut, iar adevărul a ieșit la iveală: sunt, de fapt, un mascul „feroce”. Așa a apărut și numele meu adevărat — Nelu’ 😼. Lui Nelu’ îi place distracția mai mult decât orice. Este mereu în alertă, gata de joacă, alergat, sărit și explorat. Așa că, un mic sfat: ține-ți bine ceștile când Nelu’ e treaz, pentru că nimic nu e în siguranță atunci când cheful de joacă își face apariția ☕🐾",
    additionalImages: additionalImagesNala,
  },
];

export const Daisy = [
  {
    animalTitle: "Daisy",
    imgURL: imgDaisy,
    smallText: "Sunt o fetita din rasa Pomeranian, jucausa si blanda, dar nu cu toata lumea...",
    denumire:
      "Sunt o fetita din rasa Pomeranian, jucausa si blanda, dar nu cu toata lumea! Daca dorm, va rog sa ma lasati sa-mi fac semnul de frumusete ca altfel s-a zis cu voi!",
    additionalImages: additionalImagesDaisy,
  },
];

export const Chili = [
  {
    animalTitle: "Chili",
    imgURL: imgChili,
    smallText: "Sunt o fetita din rasa Pug, jucausa si foarte energica, dar si somnul e pe masura...",
    denumire:
      "Sunt o fetita din rasa Pug, jucausa si foarte energica, dar si somnul e pe masura!",
    additionalImages: additionalImagesChili,
  },
];

export const Wendy = [
  {
    animalTitle: "Wendy",
    imgURL: imgWendy,
    smallText: "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna. Ne plac gustarile si sa ne jucam cu pisicutele!",
    additionalImages: additionalImagesWendy,
  },
];

export const Winnie = [
  {
    animalTitle: "Winnie",
    imgURL: imgWinnie,
    smallText: "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna...",
    denumire:
      "Suntem doua surori din rasa Teckel, foarte jucause si adormim mereu impreuna. Ne plac gustarile si sa ne jucam cu pisicutele!",
    additionalImages: additionalImagesWinnie,
  },
];