/**
 * Verkefnalýsing fyrir verkefni 7 með mörgum athugasemdum, sjá einnig yfirferð í fyrirlestri 9.
 * Sjá `scripts-plain.js` fyrir lausn án athugasemda.
 * Föll og breytur eru skjalaðar með jsdoc, athugasemdir á þessu:
 * // formi eru til nánari útskýringa.
 * eru aukalega og ekki nauðsynlegar.
 * Kóðabútar eru innan ``.
 *
 * @see https://jsdoc.app/
 */

// Til að byrja með skilgreinum við gögn sem við notum í forritinu okkar. Við þurfum að skilgreina
// - Vörur sem er hægt að kaupa
// - Körfu sem geymir vörur sem notandi vill kaupa
// Í báðum tilfellum notum við gagnaskipan (e. data structure) með því að nota hluti (objects),
// fylki (array) og grunn gildi (e. primitive values) eins og tölur (numbers) og strengi (string).

// Hér notum við _typedef_ til að skilgreina hvernig Product hluturinn okkar lítur út.
// Þetta er ekki JavaScript heldur sérstök skilgreining frá JSDoc sem VSCode notar til að hjálpa
// okkur við að skrifa með því að birta intellisense/autocomplete og hugsanlega sýna villur.
// Við getum látið VSCode sýna okkur villur:
// - Opna „Settings“ með Cmd + , (macOS) eða Ctrl + , (Windows) og slá „check js“ í leitargluggann.
// - Velja „JavaScript › Implicit Project Config: Check JS“ og haka í.
// https://code.visualstudio.com/docs/nodejs/working-with-javascript#_type-checking-javascript

/**
 * @typedef {Object} Product
 * @property {number} id Auðkenni vöru, jákvæð heiltala stærri en 0.
 * @property {string} title Titill vöru, ekki tómur strengur.
 * @property {string} description Lýsing á vöru, ekki tómur strengur.
 * @property {number} price Verð á vöru, jákvæð heiltala stærri en 0.
 */

// Við viljum geta haft fleiri en eina vöru þannig að við þurfum að hafa fylki af vörum.
// Við byrjum með fylki sem hefur færslur en gætum síðan í forritinu okkar bætt við vörum.

/**
 * Fylki af vörum sem hægt er að kaupa.
 * @type {Array<Product>}
 */
const products = [
  // Fyrsta stak í fylkinu, verður aðgengilegt sem `products[0]`
  {
    // Auðkennið er eitthvað sem við bara búum til sjálf, verður að vera einkvæmt en engin regla í
    // JavaScript passar upp á það.
    // Þar sem það er aðeins ein tegund af tölum í JavaScript þá verðum við að passa okkur hér að
    // nota heiltölu, ekkert sem bannar okkur að setja `1.1`.
    // Ef við kveikjum á að VSCode sýni villur og við breytum þessu í t.d. streng munum við sjá
    // villu með rauðum undirlínum og færslu í `Problems` glugganum.
    id: 1,

    // Titill er strengur, en gæti verið „tómi strengurinn“ (e. empty string) sem er bara `''`.
    // JavaScript gerir ekki greinarmun á tómum streng og strengjum sem innihalda eitthvað.
    // Við gætum líka notað `""` eða ` `` ` (backticks) til að skilgreina strengi en venjan er að
    // nota einfaldar gæsalappir/úrfellingarkommur (e. single quotes).
    title: 'HTML húfa',

    // Hér skilgreinum við streng í nýrri línu á eftir skilgreiningu á lykli (key) í hlutnum.
    description:
      'Húfa sem heldur hausnum heitum og hvíslar hugsanlega að þér hvaða element væri best að nota.',

    // Verð sem jákvæð heiltala. Getum líka notað `1000` en það er hægt að nota undirstrik (_) til
    // að gera stórar tölur læsilegri, t.d. `100_000_000`.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_separators
    price: 5_000,
  },
  {
    id: 2,
    title: 'CSS sokkar',
    description: 'Sokkar sem skalast vel með hvaða fótum sem er.',
    price: 3_000,
  },
  {
    id: 3,
    title: 'JavaScript jakki',
    description: 'Mjög töff jakki fyrir öll sem skrifa JavaScript reglulega.',
    price: 20_000,
  },
  // Hér gætum við bætt við fleiri vörum í byrjun.
];

// Skilgreinum hluti sem halda utan um það sem notandi ætlar að kaupa.

/**
 * @typedef {Object} CartLine
 * @property {Product} product Vara í körfu.
 * @property {number} quantity Fjöldi af vöru.
 */

/**
 * @typedef {Object} Cart
 * @property {Array<CartLine>} lines Fylki af línum í körfu.
 * @property {string|null} name Nafn á kaupanda ef skilgreint, annars `null`.
 * @property {string|null} address Heimilisfang kaupanda ef skilgreint, annars `null`.
 */

// Við notum `null` sem gildi fyrir `name` og `address` áður en notandi hefur skilgreint þau.

/**
 * Karfa sem geymir vörur sem notandi vill kaupa.
 * @type {Cart}
 */
const cart = {
  lines: [],
  name: null,
  address: null,
};

// Nú höfum við skilgreint gögnin sem forritið okkar notar. Næst skilgreinum við föll sem vinna með
// gögnin og inntak frá notanda.
// Athugið að hér erum við að setja öll föll í sömu skrá og sama scope, það myndi hjálpa okkur að
// setja föll í mismunandi skrár og nota módúla til að tengja saman, við gerum það í verkefni 8.

// --------------------------------------------------------
// Hjálparföll

/**
 * Sníða (e. format) verð fyrir íslenskar krónur með því að nota `Intl` vefstaðalinn.
 * Athugið að Chrome styður ekki íslensku og mun því ekki birta verð formuð að íslenskum reglum.
 * @example
 * const price = formatPrice(123000);
 * console.log(price); // Skrifar út `123.000 kr.`
 * @param {number} price Verð til að sníða.
 * @returns Verð sniðið með íslenskum krónu.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
 */
function formatPrice(price) {
  /* Útfæra */
}

/**
 * Athuga hvort `num` sé heiltala á bilinu `[min, max]`.
 * @param {number} num Tala til að athuga.
 * @param {number} min Lágmarksgildi tölu (að henni meðtaldri), sjálfgefið `0`.
 * @param {number} max Hámarksgildi tölu (að henni meðtaldri), sjálfgefið `Infinity`.
 * @returns `true` ef `num` er heiltala á bilinu `[min, max]`, annars `false`.
 */
function validateInteger(num, min = 0, max = Infinity) {
  /* Útfæra */
}

/**
 * Sníða upplýsingar um vöru og hugsanlega fjölda af henni til að birta notanda.
 * @example
 * ```text
 * HTML húfa — 5.000 kr.
 * CSS sokkar — 2x3.000 kr. samtals 6.000 kr.
 * ```
 * @param {Product} product Vara til að birta
 * @param {number | undefined} quantity Fjöldi af vöru, `undefined` ef ekki notað.
 * @returns Streng sem inniheldur upplýsingar um vöru og hugsanlega fjölda af henni.
 */
function formatProduct(product, quantity = undefined) {
  /* Útfæra */
}

/**
 * Skila streng sem inniheldur upplýsingar um körfu.
 * @example
 * ```text
 * HTML húfa — 5.000 kr.
 * CSS sokkar — 2x3.000 kr. samtals 6.000 kr.
 * Samtals: 11.000 kr.
 * ```
 * @param {Cart} cart Karfa til að fá upplýsingar um.
 * @returns Streng sem inniheldur upplýsingar um körfu.
 */
function cartInfo(cart) {
  /* Útfæra */
}

// --------------------------------------------------------
// Föll fyrir forritið

/**
 * Bætir vöru við `products` fylkið með því að biðja um upplýsingar frá notanda um:
 * - Titil, verður að vera ekki tómur strengur.
 * - Lýsingu, verður að vera ekki tómur strengur.
 * - Verð, verður að vera jákvæð heiltala stærri en 0.
 * Ef eitthvað er ekki löglegt eru birt villuskilaboð í console og hætt er í fallinu.
 * Annars er ný vara búin til og upplýsingar um hana birtar í console.
 * @returns undefined
 */
function addProduct() {
  // Til einföldunar gerum við ekki greinarmun á „Cancel“ og „Escape“ og tómum gildum frá notanda.

  // Förum í gegnum hvort og eitt gildi sem við viljum og pössum að við höfum eitthvað gildi.
  // Gildi sem við fáum í gegnum `prompt` eru annaðhvort `null` ef notandi ýtir á „Cancel“ eða „Esc“
  // eða strengur.
  // Ef við fáum ógilt gildi hættum við í fallinu með því að nota `return` sem skilar `undefined`.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
  // Þetta er kallað „early exit“ og er gott til að koma í veg fyrir að þurfa að skrifa auka
  // skilyrði í if-setningum en getur valdið vandræðum í einhverjum tilfellum.
  // https://en.wikipedia.org/wiki/Structured_programming#Early_exit
  const title = prompt('Titill:');
  if (!title) {
    console.error('Titill má ekki vera tómur.');
    return;
  }

  const description = prompt('Lýsing:');
  if (!description) {
    console.error('Lýsing má ekki vera tóm.');
    return;
  }

  // Gerum greinarmun á verði sem streng...
  const priceAsString = prompt('Verð:');
  if (!priceAsString) {
    console.error('Verð má ekki vera tómt.');
    return;
  }

  // og síðan verði sem við getum unnið með sem tölu.
  // Hér notum við `Number.parseInt` til að breyta streng í heiltölu.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
  const price = Number.parseInt(priceAsString, 10);

  // Athugum hvort við fáum löglega heiltölu sem er stærri en 0 með því að nota hjálparfallið okkar.
  if (!validateInteger(price, 1)) {
    console.error('Verð verður að vera jákvæð heiltala.');
    return;
  }

  // Búum til auðkenni fyrir vöruna okkar sem einfaldlega næstu heiltölu út frá fjölda vara sem við
  // höfum nú þegar.
  const id = products.length + 1;

  // Búum til vöruna okkar sem hlut með því að nota „object literal“.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

  // Notum jsdoc til að fá villuathugun í vscode

  /** @type {Product} */
  const product = {
    id,
    title,
    description,
    price,
  };

  // Bætum vörunni aftast við fylkið okkar.
  products.push(product);

  // Birtum upplýsingar um vöru sem við bjuggum til.
  console.info(`Vöru bætt við:\n${formatProduct(product)}`);

  // Hér er ekkert return, þá skilar fallið `undefined`.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
}

/**
 * Birta lista af vörum í console.
 * @example
 * ```text
 * #1 HTML húfa — Húfa sem heldur hausnum heitum og hvíslar hugsanlega að þér hvaða element væri best að nota. — 5.000 kr.
 * ```
 * @returns undefined
 */
function showProducts() {
  /* Útfæra */
  /* Hér ætti að nota `formatPrice` hjálparfall */
}

/**
 * Bæta vöru við körfu.
 * Byrjar á að biðja um auðkenni vöru sem notandi vill bæta við körfu.
 * Ef auðkenni er ekki heiltala, eru birt villa í console með skilaboðunum:
 * „Auðkenni vöru er ekki löglegt, verður að vera heiltala stærri en 0.“
 * Ef vara finnst ekki með gefnu auðkenni, eru birt villa í console með skilaboðunum:
 * „Vara fannst ekki.“
 * Því næst er beðið um fjölda af vöru sem notandi vill bæta við körfu. Ef fjöldi er ekki heiltala
 * á bilinu `[1, 100>`, eru birtar villuskilaboð í console með skilaboðunum:
 * „Fjöldi er ekki löglegur, lágmark 1 og hámark 99.“
 * Ef vara og fjöldi eru lögleg gildi er vöru bætt við körfu. Ef vara er nú þegar í körfu er fjöldi
 * uppfærður, annars er nýrri línu bætt við körfu.
 *
 * @returns undefined
 */
function addProductToCart() {
  /* Útfæra */

  /* Hér ætti að nota `validateInteger` hjálparfall til að staðfesta gögn frá notanda */
  
  /* Til að athuga hvort vara sé til í `cart` þarf að nota `cart.lines.find` */
}

/**
 * Birta upplýsingar um körfu í console. Ef ekkert er í körfu er „Karfan er tóm.“ birt, annars
 * birtum við upplýsingar um vörur í körfu og heildarverð.
 *
 * @example
 * ```text
 * HTML húfa — 5.000 kr.
 * CSS sokkar — 2x3.000 kr. samtals 6.000 kr.
 * Samtals: 11.000 kr.
 * ```
 * @returns undefined
 */
function showCart() {
  /* Útfæra */
}

/**
 * Klárar kaup og birtir kvittun í console.
 * Ef ekkert er í körfu eru birt skilboð í console:
 * „Karfan er tóm.“
 * Annars er notandi beðinn um nafn og heimilisfang, ef annaðhvort er tómt eru birt villuskilaboð í
 * console og hætt í falli.
 * Ef allt er í lagi er kvittun birt í console með upplýsingum um pöntun og heildarverð.
 * @example
 * ```text
 * Pöntun móttekin <nafn>.
 * Vörur verða sendar á <heimilisfang>.
 *
 * HTML húfa — 5.000 kr.
 * CSS sokkar — 2x3.000 kr. samtals 6.000 kr.
 * Samtals: 11.000 kr.
 * ```
 * @returns undefined
 */
function checkout() {
  /* Útfæra */
}
