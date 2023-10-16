# Vefforritun 1, 2023: Verkefni 7, JS #1

[Kynning og byrjun á verkefni úr fyrirlestri 9](https://youtu.be/95g4uylHkyQ).

## Markmið

- Búa til JavaScript forrit sem notar föll, flæðistýringar og ítranir.
- Nota strengi og tölur í JavaScript.
- Nota fylki og hluti í JavaScript.

## Grunnur

Gefinn er grunnur að verkefni:

- `package.json` með:
  - skilgreindum dependency-ium: `browser-sync`, `concurrently` og `cpy-cli`.
  - NPM scripts sem keyra upp „dev“ og „build“.
- `package-lock.json` skrá sem skilgreinir nákvæmlega hvaða dependency eru notuð _fyrir_ dependency-in okkar
- `index.html` með leiðbeiningum og tengingu við `scripts.js`.
- `.gitignore` sem passar upp á að `node_modules` mappan sé ekki geymd í git.
- `scripts.js` með grunni að forriti, athugasemdir og tillögur að útfærslum eru í skjalinu.

Skjölun á föllum og breytum notar [`jsdoc`](https://jsdoc.app/).

### NPM

Til að byrja að vinna verkefnið þarf að sækja það frá GitHub og keyra NPM:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2023-v7.git
# eða
git clone git@github.com:vefforritun/vef1-2023-v7.git

# Förum inn í möppu
cd vef1-2023-v7

# Sækjum öll dependency með NPM
npm install

# Keyrum NPM script fyrir development
npm run dev
```

## Virkni

Setja skal upp forrit sem leyfir kaup á vörum í gegnum `console`. Eftir að hafa opnað DevTools er hægt að nota eftirfarandi föll til að „kaupa“ vörur:

- `addProduct()` bætir við vöru, gefið fall.
- `showProducts()` listar upp allar vörur sem eru í boði.
- `addProductToCart()` biður notanda um að velja vöru og fjölda til að setja í körfu.
- `showCart()` til að sjá hvað er í körfu ásamt samtals verði.
- `checkout()` til að klára kaup og birta kvittun.

Sjá nánar í skjölun `scripts.js`. Einnig er hægt að nota `scripts-plain.js` sem inniheldur lágmark af athugasemdum.

Í `scripts.js` er merkt það sem þarf að útfæra með `/* Útfæra */`. Að auki við þau föll sem tiltekin eru þá eru nokkur hjálparföll sem koma úr sýnilausn. Ekki er krafa að nota þau.

Fyrir inntak og til að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin ásamt `console` hlutinn til að birta upplýsingar (`console.info()` og `console.error()`).

Sjá fyrirmynd úr sýnilausn í `v7-fyrirmynd.mp4`.

![Fyrirmynd](./v7-fyrirmynd.mp4)

## Netlify

Skila skal verkefninu keyrandi á Netlify. Gefið er `build` script í `package.json` og setja upp build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

- `index.html`
- `scripts.js`

## Mat

- 10% Verkefni sett upp GitHub og á Netlify og `build` scripta notuð.
- 30% `addProductToCart()` fall útfært.
- 20% `showProducts()` fall útfært.
- 20% `showCart()` fall útfært.
- 20% `checkout()` fall útfært.

## Sett fyrir

Verkefni sett fyrir mánudaginn 16. október 2023.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 26. október 2023.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `ahp9`
  - `dawidniescier`
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
