/* =====================================================================
   GOMBAO33 — USTAWIENIA SKLEPU
   Tu zmieniasz wszystko: produkty, ceny, rozmiary, dostawę, płatności
   i swoje dane. Pola z "" (puste) uzupełnij przed startem sklepu.
   ===================================================================== */
window.GOMBAO = {

  /* --- PRODUKTY ---------------------------------------------------- */
  products: [
    {
      id: 'zip-hoodie',
      name: 'GOMBAO33 ZIP HOODIE',
      price: 500,                          // zł
      img: 'img/hoodie.webp',
      // rozmiary: true = dostępny, false = wyprzedany (przekreślony)
      sizes: { S: true, M: true, L: true, XL: true },
      desc: 'Rozpinana bluza oversize w morsko-fioletową kratę. Fioletowe ściągacze, kieszeń kangurka i metalowy suwak z zawieszką. Opadające ramiona, w środku miękka, drapana dzianina.',
      details: ['Krój oversize', 'Metalowy suwak', 'Kieszeń kangurka', 'Fioletowe ściągacze']
    },
    {
      id: 'tee',
      name: 'GOMBAO33 T-SHIRT',
      price: 500,
      img: 'img/tee.webp',
      scale: 0.95,                         // wielkość zdjęcia na stronie (1 = jak bluza)
      sizes: { S: true, M: true, L: true, XL: true },
      desc: 'Ciężka czarna koszulka o kroju boxy z grubym, prążkowanym kołnierzem. Z przodu duży, rozmyty print gołębia, który schodzi do samego dołu.',
      details: ['Krój boxy', 'Gruby prążkowany kołnierz', 'Duży print z przodu']
    },
    {
      id: 'tour-tee',
      name: 'GOMBAO33 TOUR TEE',
      price: 500,
      img: 'img/tour-front.webp',          // przód
      imgBack: 'img/tour-back.webp',       // tył (opcjonalnie)
      sizes: { S: true, M: true, L: true, XL: true },
      desc: 'Czarna koszulka boxy z trasy 2026. Z przodu kolaż z koncertów i wisiorek 33, z tyłu lista wszystkich miast trasy w morskim kolorze.',
      details: ['Krój boxy', 'Print przód i tył', 'Trasa 2026']
    },
    {
      id: 'sky-polo',
      name: 'GOMBAO33 SKY POLO',
      price: 500,
      img: 'img/skypolo-front.webp',
      imgBack: 'img/skypolo-back.webp',
      sizes: { S: true, M: true, L: true, XL: true },
      desc: 'Polówka oversize z nadrukiem chmur na całości. Z przodu gotyckie GOMBAO, 33 i lecące ptaki, z tyłu podpis i wielkie 33.',
      details: ['Krój oversize', 'Nadruk na całości', 'Kołnierzyk polo']
    },
    {
      id: 'pigeon-polo',
      name: 'GOMBAO33 PIGEON POLO',
      price: 500,
      img: 'img/pigeonpolo-front.webp',
      imgBack: 'img/pigeonpolo-back.webp',
      sizes: { S: true, M: true, L: true, XL: true },
      desc: 'Morska polówka oversize z gołębiem na całości, czarnym kołnierzykiem i czarnymi lamówkami. Z tyłu podpis GOMBAO i wielkie 33.',
      details: ['Krój oversize', 'Nadruk na całości', 'Czarny kołnierzyk']
    }
  ],

  /* --- DOSTAWA ----------------------------------------------------- */
  shipping: [
    { id: 'inpost', name: 'InPost Paczkomat', price: 15, locker: true },   // locker: true = pyta o kod Paczkomatu
    { id: 'kurier', name: 'Kurier', price: 20 }
  ],
  freeShippingFrom: 0,                     // 0 = brak darmowej dostawy; np. 1000 = darmowa od 1000 zł

  /* --- PŁATNOŚCI ---------------------------------------------------
     Klient po złożeniu zamówienia widzi numer zamówienia i dane do
     płatności. Uzupełnij przynajmniej jedną metodę. */
  payments: {
    blikPhone: '',                         // np. '500 600 700'  → BLIK na telefon
    bankAccount: '',                       // np. '12 3456 7890 1234 5678 9012 3456' → przelew
    bankRecipient: ''                      // imię i nazwisko / nazwa odbiorcy przelewu
  },

  /* --- ZAMÓWIENIA NA MAILA -----------------------------------------
     Załóż darmowy formularz na https://formspree.io (New Form),
     skopiuj adres w stylu https://formspree.io/f/abcdwxyz i wklej tutaj.
     Każde zamówienie przyjdzie Ci wtedy mailem ze wszystkimi danymi. */
  orderEndpoint: '',

  /* --- KONTAKT ----------------------------------------------------- */
  contact: {
    email: '',                             // np. 'kontakt@gombao33.pl'
    instagram: ''                          // sama nazwa, np. 'gombao33'
  },

  /* --- DANE SPRZEDAWCY (wymagane prawem w regulaminie) ------------- */
  seller: {
    name: '',                              // imię i nazwisko albo nazwa firmy
    address: '',                           // adres do korespondencji i zwrotów
    nip: '',                               // jeśli masz firmę (puste = nie pokazuj)
    regon: ''
  },

  returnDays: 14,                          // dni na zwrot (min. 14 dla konsumentów)
  shippingDays: '1–3 dni robocze'
};
