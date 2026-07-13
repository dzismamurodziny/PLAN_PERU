// ============================================================
// Peru 2026 — dane planu (WERSJA DEMO: dni 1–4 z 28)
// Jedyny plik do edycji przy aktualizacji planu.
// Źródło prawdy: ../plan.md + ../watki/. Ten plik = widok.
//
// Pola pozycji dnia:
//   time  "06:00"  — godzina startu (opcjonalna; bez niej pozycja idzie na listę „w ciągu dnia")
//   approx true    — godzina orientacyjna (wyświetla się jako „ok. 06:00")
//   min   105      — czas trwania w minutach (rysuje pasek proporcjonalnej długości)
//   note  "..."    — dopisek drobnym drukiem
//
// Pole dnia:
//   short "..."    — 2–3 słowa na kafelek „Stories"
//   photo "img/x.jpg" — zdjęcie kafelka (opcjonalne; bez niego bierze regions[region].photo)
//
// Zdjęcia leżą w img/ (wolne fotki z Wikimedia Commons). Nowy dzień bez photo
// dostaje domyślne zdjęcie regionu; własny kadr = dopisz photo w dniu.
// ============================================================

const TRIP = {
  updated: "2026-07-13",
  demo: true,
  demoNote: "Wersja demonstracyjna — pierwsze cztery dni. Dalszy ciąg trasy (Święta Dolina, Cusco, Titicaca, Huaraz, Amazonia) dojdzie po ułożeniu kolejności.",
  title: "Peru 2026",
  subtitle: "",
  start: "2026-09-02",
  end: "2026-09-29",
  totalDays: 28,
  travelers: ["Kacper", "Klaudiusz", "Małgorzata", "Ireneusz"],

  regions: {
    lima:     { name: "Lima",           light: "#2a78d6", dark: "#3987e5", photo: "img/lima-miraflores.jpg" },
    dolina:   { name: "Święta Dolina",  light: "#1baf7a", dark: "#199e70", photo: "img/valle-sagrado.jpg" },
    cusco:    { name: "Cusco",          light: "#eb6834", dark: "#d95926" },
    titicaca: { name: "Titicaca",       light: "#4a3aa7", dark: "#9085e9" },
    boliwia:  { name: "Boliwia",        light: "#eda100", dark: "#c98500" },
    huaraz:   { name: "Huaraz",         light: "#e87ba4", dark: "#d55181" },
    amazonia: { name: "Amazonia",       light: "#008300", dark: "#008300" },
  },

  days: [
    {
      day: 1, date: "2026-09-02", region: "lima", status: "locked",
      title: "Podróż i przylot do Limy",
      short: "przylot do Limy",
      night: { place: "Lima, Miraflores", altitude: 0 },
      maxAltitude: 0,
      items: [
        { time: "06:00", min: 105, type: "flight", text: "Wylot z Wrocławia — KL1336 do Amsterdamu" },
        { time: "09:55", min: 750, type: "flight", text: "KL0743 Amsterdam → Lima", note: "Boeing 777-300ER; na przesiadkę w Amsterdamie 2 h 10 min" },
        { time: "15:25", type: "flight", text: "Lądowanie w Limie", note: "odprawa, bagaże, karta SIM i wymiana gotówki na lotnisku" },
        { time: "16:30", approx: true, min: 45, type: "car", text: "Przejazd do hotelu w Miraflores", note: "autoryzowana taxi albo Uber — pomijamy naganiaczy w hali przylotów" },
      ],
    },
    {
      day: 2, date: "2026-09-03", region: "lima", status: "plan",
      note: "godziny orientacyjne — kolejność można dowolnie przestawiać",
      title: "Dzień w Limie",
      short: "zwiedzanie Limy",
      photo: "img/lima-centro.jpg",
      night: { place: "Lima, Miraflores", altitude: 0 },
      maxAltitude: 0,
      items: [
        { time: "09:30", approx: true, min: 120, type: "sight", text: "Miraflores: klify nad Pacyfikiem, malecón, Parque del Amor" },
        { time: "12:00", approx: true, min: 90, type: "meal", text: "Obiad w cevichería", note: "Lima to kulinarna stolica kontynentu, a cevicherie serwują w porze obiadu — wieczorem świeżej ryby już nie ma" },
        { time: "14:00", approx: true, min: 90, type: "ruins", text: "Huaca Pucllana — ceglana piramida w środku miasta", note: "kultura Lima, około 400 r. n.e.; zwiedzanie wyłącznie z przewodnikiem" },
        { time: "16:00", approx: true, min: 120, type: "sight", text: "Centrum historyczne: Plaza de Armas, katedra, San Francisco", note: "kolonialna starówka z listy UNESCO; w San Francisco katakumby" },
        { time: "19:00", approx: true, min: 150, type: "sight", text: "Wieczór w Barranco — dzielnica artystów", note: "Most Westchnień, murale, kolacja z widokiem na ocean" },
      ],
    },
    {
      day: 3, date: "2026-09-04", region: "dolina", status: "plan",
      note: "godziny orientacyjne — do potwierdzenia po rezerwacji lotu i pociągu",
      title: "Lot do Cusco i od razu w dół — pociągiem pod Machu Picchu",
      short: "dojazd pod Machu Picchu",
      night: { place: "Machu Picchu Pueblo (Aguas Calientes)", altitude: 2040 },
      maxAltitude: 3400,
      items: [
        { time: "07:00", approx: true, min: 85, type: "flight", text: "Lot Lima → Cusco (do rezerwacji)", note: "najlepiej najwcześniejszy poranny — mniejsze ryzyko opóźnień" },
        { time: "09:00", approx: true, min: 105, type: "car", text: "Transfer z lotniska prosto do Ollantaytambo", note: "Cusco (3400 m) tylko tranzytem — od razu schodzimy na 2790 m, łagodny start aklimatyzacji" },
        { time: "11:00", approx: true, min: 130, type: "rest", text: "Ollantaytambo: obiad i spacer inkaskimi uliczkami", note: "miasteczko zamieszkane nieprzerwanie od czasów Inków, z oryginalnymi kanałami wzdłuż ulic" },
        { time: "13:30", approx: true, min: 105, type: "train", text: "Pociąg do Machu Picchu Pueblo", note: "PeruRail albo Inca Rail; miejsca po lewej stronie — widoki na kanion Urubamby" },
        { time: "16:00", approx: true, type: "warn", text: "Zakup biletów do Machu Picchu na jutro", note: "dzienna pula w kasie bywa wyczerpana — wrzesień to wysoki sezon; zasady sprzedaży zweryfikujemy przed wyjazdem" },
        { time: "19:00", approx: true, min: 90, type: "meal", text: "Kolacja i spokojny wieczór", note: "jutro wczesna pobudka" },
      ],
    },
    {
      day: 4, date: "2026-09-05", region: "dolina", status: "plan",
      title: "Machu Picchu",
      short: "Machu Picchu",
      photo: "img/machu-picchu.jpg",
      night: { place: "do ustalenia — druga noc na miejscu albo powrót do Doliny", altitude: 2040 },
      maxAltitude: 2430,
      items: [
        { time: "05:30", min: 25, type: "bus", text: "Autobus pod bramę Machu Picchu", note: "pierwsze kursy około 5:30, kolejka rośnie szybko" },
        { time: "06:15", approx: true, min: 240, type: "ruins", text: "Machu Picchu z przewodnikiem", note: "przewodnik spod bramy albo rezerwacja dzień wcześniej; cztery godziny na trasie zwiedzania" },
        { time: "11:00", approx: true, min: 90, type: "meal", text: "Obiad w Machu Picchu Pueblo" },
        { type: "rest", text: "Popołudnie do decyzji: druga noc na miejscu albo pociąg powrotny do Doliny" },
      ],
    },
  ],
};

// ============================================================
// Ekwipunek — lista pakowania (checkboxy zapisują się w przeglądarce)
// Filozofia: PODRĘCZNY + mały plecak 15 l. Im mniej, tym lepiej — brakujące
// rzeczy dokupujemy na miejscu. Materiały techniczne (szybkoschnące), NIE bawełna.
//
// Pola pozycji:
//   t    "..."   — nazwa (wymagane)
//   qty  "3–4"   — ilość / sztuki (opcjonalne)
//   note "..."   — dopisek: marka, model, wskazówka
//   url  "..."   — link do konkretnego produktu (klikalny)
//   sug  true    — propozycja asystenta do rozważenia (nie było na liście Kacpra)
//   warn true    — uwaga bagażowa (podręczny!) — wyróżniona na żółto
// ============================================================
const GEAR = {
  intro: "Pakujemy się w PODRĘCZNY + mały plecak/torebkę 15 l. Zasada: im mniej, tym lepiej — brakujące rzeczy dokupimy na miejscu. Mniejszy bagaż = szybsze transfery, zero czekania na taśmę, 100% kontroli. Odzież techniczna (szybkoschnąca), NIE bawełna.",
  categories: [
    {
      name: "Odzież",
      icon: "shirt",
      items: [
        { t: "Kurtka przeciwdeszczowa z membraną", note: "min. 10 000 mm, najlepiej 15–20 000 mm. Np. Decathlon Quechua MH500" },
        { t: "Koszulki krótki rękaw", qty: "3–4", note: "sportowe / trekkingowe / do biegania — szybkoschnące" },
        { t: "Bielizna", qty: "6", note: "najlepiej wełna merino — Brubeck" },
        { t: "Skarpety niskie za kostkę", qty: "4 pary", note: "Bridgedale lub Smartwool" },
        { t: "Skarpety wysokie merino", qty: "2 pary", note: "tylko Smartwool" },
        { t: "Polar / bluza / cienka puchówka", qty: "1" },
        { t: "Koszulka termoaktywna długi rękaw", qty: "1", note: "Brubeck" },
        { t: "Krótkie spodenki", qty: "1" },
        { t: "Spodnie długie", qty: "2", note: "najlepiej z odpinaną nogawką. Decathlon Simond MT500" },
        { t: "Koszula długi rękaw, trekkingowa", qty: "1" },
        { t: "Strój kąpielowy", qty: "1" },
        { t: "Cienka czapka", qty: "1" },
        { t: "Komin Buff merino", qty: "1", note: "bardzo się przydaje", url: "https://allegro.pl/oferta/termoaktywna-chusta-buff-lightweight-merino-wool-solid-grey-17923169879" },
        { t: "Rękawiczki średnie", qty: "1 para", note: "nie grube, nie cienkie" },
        { t: "Kapelusz / czapka z daszkiem", qty: "1", sug: true, note: "słońce na wysokości i w dżungli mocno praży — rondo chroni kark i twarz" },
      ],
    },
    {
      name: "Obuwie",
      icon: "shoe",
      items: [
        { t: "Buty niskie trekkingowe", qty: "1 para" },
        { t: "Sandały (typu Monk / Keen)", qty: "1 para", note: "chodzenie, pod prysznic, do wody. Podeszwa Vibram, nie ślizgają się. Monk robione ręcznie w PL — 14 dni realizacji" },
        { t: "Klapki", qty: "1 para" },
      ],
    },
    {
      name: "Kosmetyczka",
      icon: "bath",
      note: "Wg uznania, ale NIC powyżej 100 ml (podręczny!). Lepiej mniej — drogeria jest na miejscu.",
      items: [
        { t: "Szczoteczka + pasta" },
        { t: "Antyperspirant" },
        { t: "Mydło", note: "najlepiej w kostce — nie liczy się do limitu płynów" },
        { t: "Maszynka do golenia" },
        { t: "Mokre chusteczki" },
        { t: "Papier toaletowy", note: "1 rolka na start — w wielu miejscach go brak" },
        { t: "Ręcznik z mikrofibry" },
        { t: "Obcinaczka do paznokci" },
        { t: "Pilnik do paznokci" },
        { t: "Szczotka / grzebień", sug: true },
        { t: "Pomadka do ust", sug: true, note: "usta pękają na wysokości i suchym powietrzu; z filtrem UV najlepiej" },
      ],
    },
    {
      name: "Zdrowie i apteczka",
      icon: "cross",
      items: [
        { t: "Apteczka + zapas własnych leków" },
        { t: "Krem z filtrem UV", note: "wysoki SPF — słońce na wysokości bezlitosne" },
        { t: "Spray na komary", note: "do Amazonii z DEET 30–50%" },
        { t: "Probiotyk", note: "Aliness ProbioBalance Travel", url: "https://allegro.pl/oferta/aliness-probiobalance-travel-30-kapsulek-vege-18708058217" },
        { t: "Płyn do dezynfekcji 100 ml" },
        { t: "Ból/gorączka: ibuprofen + paracetamol", sug: true },
        { t: "Plastry na pęcherze / opatrunkowe", sug: true, note: "Compeed — długie trekkingi" },
      ],
    },
    {
      name: "Elektronika",
      icon: "plug",
      items: [
        { t: "Powerbank 10 000 mAh", note: "w podręcznym, nie w rejestrowanym (i tak lecimy bez rejestrowanego)" },
        { t: "Adapter podróżny + szybka ładowarka", note: "w Peru inne gniazdka. YATO YT-81300 USB/USB-C", url: "https://allegro.pl/oferta/uniwersalny-adapter-podrozny-z-szybka-ladowarka-yato-yt-81300-usb-usb-c-usa-17402230744" },
        { t: "Latarka czołowa", note: "najlepiej czołówka; polecana firma Ledlenser" },
        { t: "Słuchawki", note: "najlepiej z aktywną redukcją szumów (ANC) — ratują na 19 h lotu i w nocnych autobusach" },
        { t: "Kabel USB zapasowy", sug: true, note: "kable padają najczęściej — zapasowy waży grosze" },
        { t: "Ładowarka jako rozgałęziacz / 2. port", sug: true, note: "4 osoby, mało gniazdek w hostelach" },
        { t: "Zapasowy telefon (każdy)", sug: true, note: "zalogowane banki, mObywatel, Google, WhatsApp itp. — ratunek gdy główny padnie/zginie/ukradną. Kacper pomoże skonfigurować" },
      ],
    },
    {
      name: "Akcesoria",
      icon: "gear",
      items: [
        { t: "Okulary przeciwsłoneczne" },
        { t: "Poncho lub mini parasolka" },
        { t: "Butelka 1 l wielokrotnego użytku", note: "Majestic Sport Tritan BPA-free — niezniszczalna", url: "https://allegro.pl/oferta/butelka-na-wode-duza-sportowa-bidon-tritan-bpa-free-majestic-sport-1l-15251722808" },
        { t: "Opaska na oczy do spania" },
        { t: "Saszetka biodrowa „nerka”" },
        { t: "Organizery / packing cubes", sug: true, note: "kluczowe przy podręcznym — porządek i kompresja objętości. Kacper zamówi z Temu; Naturehike dobre" },
        { t: "Worek wodoszczelny (dry bag)", sug: true, note: "łódź w Amazonii, deszcz, mokre rzeczy" },
        { t: "Zatyczki do uszu", sug: true, note: "nocne autobusy, hostele, koguty o świcie" },
      ],
    },
    {
      name: "Dokumenty i pieniądze",
      icon: "id",
      items: [
        { t: "PASZPORT", note: "ważny min. 6 mies. od wjazdu" },
        { t: "Kopia paszportu (papier)", qty: "2", note: "zeskanowana i wydrukowana" },
        { t: "Skan paszportu w chmurze / mailu", sug: true, note: "dostęp gdy papier zginie" },
        { t: "Polisa ubezpieczeniowa — wydruk", sug: true, note: "z numerem alarmowym; koszty medyczne w Peru potrafią zaskoczyć. Kacper jakąś znajdzie" },
        { t: "Gotówka USD", sug: true, note: "tylko banknoty 100 USD (najlepszy kurs wymiany na sole). Reszta z bankomatu — Banco de la Nación wypłaca bez prowizji po stronie Peru" },
        { t: "Zapasowa karta płatnicza", sug: true, note: "Revolut/inna — trzymana osobno od głównej" },
      ],
    },
  ],
  // pytanie otwarte do grupy — pokazane na dole widoku
  openQuestion: "Plecaki: co macie? (Kacper: 2× duży plecak, 1 podręczny, 1 mini). Ustalmy, żeby nie kupować na daremnie.",
};
