// ============================================================
// Peru 2026 — dane planu (dni 1–15 z 28 — ETAP 1: Lima → Titicaca → Lima)
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
  updated: "2026-07-23",
  demo: true,
  demoNote: "Etap 1 rozpisany (dni 1–15): Lima → Machu Picchu → dolina kawy → Święta Dolina → Cusco → Isla del Sol → powrót do Limy. Etap 2 (dni 16–28: Huaraz albo Amazonia) dojdzie po decyzji.",
  title: "Peru 2026",
  subtitle: "",
  start: "2026-09-02",
  end: "2026-09-29",
  totalDays: 28,
  travelers: ["Kacper", "Klaudiusz", "Małgorzata", "Ireneusz"],

  regions: {
    lima:     { name: "Lima",           light: "#2a78d6", dark: "#3987e5", photo: "img/lima-miraflores.jpg" },
    dolina:   { name: "Święta Dolina",  light: "#1baf7a", dark: "#199e70", photo: "img/valle-sagrado.jpg" },
    cafe:     { name: "Kawa / Santa Teresa", light: "#8a5a2b", dark: "#a06a35" },
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
      night: { place: "Lima — hotel blisko lotniska (Callao)", altitude: 0 },
      maxAltitude: 0,
      items: [
        { time: "06:00", min: 105, type: "flight", text: "Wylot z Wrocławia — KL1336 do Amsterdamu" },
        { time: "09:55", min: 750, type: "flight", text: "KL0743 Amsterdam → Lima", note: "Boeing 777-300ER; na przesiadkę w Amsterdamie 2 h 10 min" },
        { time: "15:25", type: "flight", text: "Lądowanie w Limie", note: "odprawa, bagaże, karta SIM i wymiana gotówki na lotnisku" },
        { time: "16:30", approx: true, min: 30, type: "car", text: "Przejazd do hotelu blisko lotniska", note: "autoryzowana taxi albo Uber — pomijamy naganiaczy. Baza tuż przy lotnisku; do Miraflores i innych miejsc podskakujemy taksówką osobno" },
        { type: "warn", text: "Jet lag: Peru jest 7 h ZA Polską (wrzesień). Lądowanie 15:25 = 22:25 wg zegara ciała. Wieczór: lekka kolacja, dużo światła, spać o normalnej lokalnej porze — najszybszy reset rytmu" },
      ],
    },
    {
      day: 2, date: "2026-09-03", region: "lima", status: "plan",
      note: "godziny orientacyjne — kolejność można dowolnie przestawiać",
      title: "Dzień w Limie",
      short: "zwiedzanie Limy",
      photo: "img/lima-centro.jpg",
      night: { place: "Lima — hotel blisko lotniska (Callao)", altitude: 0 },
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
        { time: "16:00", approx: true, type: "warn", text: "Zakup biletów do Machu Picchu NA MIEJSCU", note: "Centro Cultural MINCUL, 15:00–22:00, 1000 biletów/dzień, osobiście z dowodem. Od 6.05.2026: najpierw na jutro, a gdy wyprzedane — do 3 dni naprzód. Dlatego mamy 2 dni bufora (dni 5–6)" },
        { time: "19:00", approx: true, min: 90, type: "meal", text: "Kolacja i spokojny wieczór", note: "jutro wczesna pobudka" },
      ],
    },
    {
      day: 4, date: "2026-09-05", region: "dolina", status: "plan",
      title: "Machu Picchu",
      short: "Machu Picchu",
      photo: "img/machu-picchu.jpg",
      night: { place: "Aguas Calientes (bufor) albo Lucmabamba, jeśli zjazd dziś", altitude: 2040 },
      maxAltitude: 2430,
      items: [
        { time: "05:30", min: 25, type: "bus", text: "Autobus pod bramę Machu Picchu", note: "pierwsze kursy około 5:30, kolejka rośnie szybko; Consettur ~$35 r/t" },
        { time: "06:15", approx: true, min: 240, type: "ruins", text: "Machu Picchu z przewodnikiem", note: "przewodnik obowiązkowy; ~4 godziny na trasie; brak re-entry" },
        { time: "11:00", approx: true, min: 90, type: "meal", text: "Obiad w Machu Picchu Pueblo" },
        { type: "rest", text: "Popołudnie luźno. Opcja A: druga noc w Aguas jako bufor (pogoda / bilety). Opcja B: zjazd do doliny kawy tego samego dnia — pociąg do Hidroeléctrica + prywatna taxi do Lucmabamby" },
      ],
    },
    {
      day: 5, date: "2026-09-06", region: "cafe", status: "buffer",
      note: "dzień celowo NIEzaplanowany — rezerwa",
      title: "Dzień zapasowy (bufor)",
      short: "dzień zapasowy",
      night: { place: "Aguas Calientes albo Lucmabamba — wg sytuacji", altitude: 2040 },
      maxAltitude: 2430,
      items: [
        { type: "warn", text: "Dzień rezerwowy — nic nie planujemy. Wchodzi do gry, gdy MP przesunie się przez pogodę albo brak biletu na następny dzień. Jeśli niepotrzebny — wolny czas, zjazd do kawy albo do odzyskania na etap 2" },
      ],
    },
    {
      day: 6, date: "2026-09-07", region: "cafe", status: "plan",
      note: "dzień totalnego luzu — kawa, plantacje, organic; źródła na wieczór",
      title: "Dzień kawy w Lucmabambie — plantacje, hamaki, organic",
      short: "dzień kawy, luz",
      night: { place: "Lucmabamba / Santa Teresa (plantacja kawy)", altitude: 1700 },
      maxAltitude: 2700,
      items: [
        { time: "09:00", approx: true, min: 60, type: "rest", text: "Powolny poranek — kawa prosto z plantacji, hamak, cisza" },
        { time: "10:30", approx: true, min: 180, type: "sight", text: "Wizyta na farmie kawy (Flor de Café / Quellomayo)", note: "zbiór ziaren → prażenie na patelni → ręczne mielenie → degustacja; kawa organiczna 1400–2000 m" },
        { time: "13:30", approx: true, min: 90, type: "meal", text: "Obiad domowy u gospodarzy — organic" },
        { type: "rest", text: "Popołudnie: hamak, medytacja, spacer po plantacji — totalny reset" },
        { time: "16:30", approx: true, min: 120, type: "rest", text: "Wieczór: gorące źródła Cocalmayo (Santa Teresa)", note: "najczystsze źródła w regionie Cusco — turkusowa woda bez siarki, świeżo wyremontowane baseny, atmosfera rodzinna; ~10 PEN, otwarte do ~18–19. Z Lucmabamby ~20–30 min autem. UWAGA: ceja de selva — weź spray na komary" },
        { type: "hike", text: "OPCJA dla chętnych: ruiny Llactapata (2700 m) — widok na Machu Picchu z drugiej strony kanionu Aobamba" },
      ],
    },
    {
      day: 7, date: "2026-09-08", region: "dolina", status: "plan",
      note: "dzień transferowy — przełęcz Abra Málaga po drodze, a wieczorem PUSTA twierdza Ollantaytambo",
      title: "Transfer przez Abra Málaga + wieczorem twierdza Ollantaytambo",
      short: "Abra Málaga + twierdza",
      night: { place: "Ollantaytambo", altitude: 2792 },
      maxAltitude: 4316,
      items: [
        { time: "08:00", approx: true, min: 60, type: "car", text: "Prywatny transport Santa Teresa → Ollantaytambo", note: "~150 km, 4–5 h, setki serpentyn, ~350 PEN/auto; choroba lokomocyjna — tabletka wcześniej" },
        { time: "09:30", approx: true, min: 20, type: "sight", text: "Postój: dolina Huyro / Amaybamba — subtropik, plantacje kawy i herbaty" },
        { time: "11:00", approx: true, min: 45, type: "sight", text: "Przełęcz Abra Málaga 4316 m — Nevado Verónica 5682 m, lasy Polylepis", note: "krótka ekspozycja na wysokość, nocleg nisko — bezpiecznie; woda, bez alkoholu poprzedniego wieczora" },
        { time: "12:30", approx: true, min: 15, type: "ruins", text: "Las Peñas — resztki inkaskich murów (15 km przed Ollantaytambo)" },
        { time: "14:00", approx: true, min: 60, type: "meal", text: "Ollantaytambo: zakwaterowanie i obiad", note: "miasteczko zamieszkane nieprzerwanie od czasów Inków — kanały wzdłuż ulic działają od XV w." },
        { time: "15:00", approx: true, min: 150, type: "ruins", text: "Twierdza Ollantaytambo — wieczorem, gdy autokary odjadą", note: "otwarte do ~17:30 (potwierdzone 2026), a po 15:30 robi się pusto — wchodzicie w złotym świetle bez tłumu. Boleto Turístico (130 PEN, ważny 10 dni) kupujecie przy wejściu — to Wasz pierwszy punkt z listy. JEDYNA inkaska twierdza, która odparła Hiszpanów: w 1536 Manco Inca skierował wody Río Patacancha i zalał równinę — konnica Hernanda Pizarra (70 jeźdźców) uciekła nocą; wrócili z posiłkami, ale Manco zdążył zwiać do Vilcabamby. Zbudowana jak kolba kukurydzy (inkaska siatka ulic), brama do Antisuyo. Templo del Sol na szczycie: 6 bloków różowego granitu z kamieniołomu 6 km za rzeką. UWAGA: po 4–5 h w aucie to solidne podejście po tarasach — jak padnięci albo dojedziecie za późno, twierdza otwiera się o 7:00, można wejść rano przed wyjazdem" },
      ],
    },
    {
      day: 8, date: "2026-09-09", region: "dolina", status: "plan",
      note: "cała Święta Dolina w jednym dniu: Maras (Moray + Salineras) + Pisac; nocleg w Pisac. Cross-valley — start 08:00, bez szału",
      title: "Maras: Moray + Salineras + Pisac — Święta Dolina w jeden dzień",
      short: "Maras + Pisac",
      night: { place: "Pisac", altitude: 2970 },
      maxAltitude: 3500,
      items: [
        { time: "08:00", approx: true, min: 45, type: "car", text: "Prywatny kierowca na cały dzień (~250–300 PEN/auto)", note: "cross-valley dzień; ruszamy w miarę wcześnie, żeby Pisac zdążyć za dnia, a Moray/Salineras złapać jeszcze puste" },
        { time: "08:45", approx: true, min: 60, type: "ruins", text: "Moray — koncentryczne tarasy, inkaskie laboratorium rolnicze", note: "różnica temperatur między górnym a dolnym kręgiem do 15°C; w Boleto Turístico" },
        { time: "10:00", approx: true, min: 60, type: "sight", text: "Salineras de Maras — ~3000 basenów solnych od czasów przedinkaskich", note: "20 PEN, płatne GOTÓWKĄ, POZA Boleto — rodziny z Maras eksploatują je do dziś" },
        { time: "11:15", approx: true, min: 105, type: "car", text: "Przejazd prywatną taxi na drugi koniec doliny do Pisac + obiad po drodze", note: "~1–1,5 h; Apu Organic albo Cuchara de Palo przy plaza w Pisac" },
        { time: "14:00", approx: true, min: 180, type: "ruins", text: "Cytadela Pisac — Templo del Sol dorównuje Machu Picchu", note: "wchodzimy popołudniem, gdy jednodniówki znikają; otwarte do ~17:30, mamy czas bez pośpiechu. Tarasy w kształcie skrzydła kuropatwy (pisac = kuropatwa); Intihuatana wykuty w skale — „słup do wiązania słońca”; naprzeciw największy inkaski cmentarz w Andach — tysiące grobów w ścianie skalnej. W Boleto" },
        { type: "rest", text: "Nocleg w Pisac — wieczór w ciszy, gdy autokary odjadą. Targ zostaje na jutro rano" },
      ],
    },
    {
      day: 9, date: "2026-09-10", region: "cusco", status: "plan",
      note: "poranek luźno w Pisac (wysypianie), potem Cusco",
      title: "Rano targ w Pisac → Cusco: zakwaterowanie i zwiedzanie",
      short: "Pisac → Cusco",
      night: { place: "Cusco", altitude: 3400 },
      maxAltitude: 3400,
      items: [
        { time: "09:00", approx: true, min: 90, type: "sight", text: "Mercado de Pisac — rękodzieło i produkty z okolicznych wiosek", note: "spokojny poranek przed wyjazdem; 10.09 to czwartek — jeden z dni targowych" },
        { time: "10:30", approx: true, min: 60, type: "car", text: "Pisac → Cusco prywatną taxi / kierowcą (~45–60 min)" },
        { time: "12:00", approx: true, min: 60, type: "rest", text: "Zakwaterowanie w Cusco (3400 m)", note: "spokojnie z wysokością pierwszego dnia — dużo wody, herbata z koki" },
        { time: "13:30", approx: true, min: 90, type: "meal", text: "Obiad" },
        { time: "15:00", approx: true, min: 90, type: "ruins", text: "Qorikancha — Świątynia Słońca pod klasztorem Santo Domingo", note: "inkaskie mury nośne przetrwały trzęsienia, które waliły hiszpańską nadbudowę" },
        { time: "16:30", approx: true, min: 120, type: "sight", text: "Plaza de Armas, Katedra, dzielnica San Blas", note: "wieczorem wąskie uliczki San Blas — warsztaty artystów" },
      ],
    },
    {
      day: 10, date: "2026-09-11", region: "cusco", status: "plan",
      note: "aklimatyzacja przed Titicaca (3830 m)",
      title: "Cusco: Sacsayhuamán i okoliczne ruiny",
      short: "Sacsayhuamán",
      night: { place: "Cusco", altitude: 3400 },
      maxAltitude: 3700,
      items: [
        { time: "09:00", approx: true, min: 180, type: "ruins", text: "Sacsayhuamán + Q'enqo, Puka Pukara, Tambomachay", note: "megalityczne mury zygzakiem, bloki 100+ t; wszystkie 4 w Boleto Turístico" },
        { time: "13:00", approx: true, min: 90, type: "meal", text: "Mercado San Pedro — lokalne jedzenie i soki" },
        { type: "rest", text: "Popołudnie luźne — muzea (Inka, Precolombino) albo odpoczynek; ładujemy baterie przed Titicaca" },
        { type: "hike", text: "OPCJA zamiast luzu: całodniowa Palccoyo (Tęczowa Góra, łagodniejsza niż Vinicunca) — męcząca, wysoko" },
      ],
    },
    {
      day: 11, date: "2026-09-12", region: "titicaca", status: "plan",
      note: "autobus turystyczny Ruta del Sol — inkaskie zabytki załatwiamy PO DRODZE (Raqchi); pływających wysp NIE robimy",
      title: "Ruta del Sol: Cusco → Puno przez cztery przystanki",
      short: "Ruta del Sol → Puno",
      night: { place: "Puno", altitude: 3830 },
      maxAltitude: 4335,
      items: [
        { time: "06:40", min: 60, type: "bus", text: "Autobus Inka Express / Turismo Mer z Cusco", note: "~10–11 h z postojami, przewodnik + obiad w cenie; bilety wstępu osobno ~53 PEN. Rozkład sztywny — wyjątek od wysypiania" },
        { time: "08:00", approx: true, min: 45, type: "sight", text: "Andahuaylillas — „Kaplica Sykstyńska Andów”" },
        { time: "10:30", approx: true, min: 60, type: "ruins", text: "Raqchi — Świątynia Wiracocha", note: "najwyższy zachowany inkaski mur" },
        { time: "13:30", approx: true, min: 45, type: "sight", text: "Przełęcz La Raya 4335 m — dach trasy" },
        { time: "15:30", approx: true, min: 45, type: "ruins", text: "Muzeum Pukará — kultura sprzed Inków znad Titicaca" },
        { time: "17:30", approx: true, type: "hotel", text: "Przyjazd do Puno" },
      ],
    },
    {
      day: 12, date: "2026-09-13", region: "boliwia", status: "plan",
      note: "główny cel: dotrzeć do Copacabany i OD RAZU na łódź na Isla del Sol",
      title: "Puno → Copacabana → łódź na Isla del Sol",
      short: "→ Isla del Sol",
      night: { place: "Isla del Sol (Yumani, południe)", altitude: 3810 },
      maxAltitude: 3900,
      items: [
        { time: "06:30", approx: true, min: 210, type: "bus", text: "Wczesny autobus Puno → Copacabana, granica Kasani", note: "~3,5 h + odprawa; PL bez wizy do Boliwii — sprawdzić aktualny wjazd. Wcześnie, żeby zdążyć na łódź 13:30 (rozkład — wyjątek od wysypiania)" },
        { type: "ruins", text: "OPCJA po drodze (nic na siłę): Chucuito — inkaska świątynia Inca Uyo, tuż przy trasie nad jeziorem" },
        { time: "11:00", approx: true, min: 90, type: "meal", text: "Copacabana: szybki obiad, bazylika Matki Boskiej z Copacabany" },
        { time: "13:30", approx: true, min: 90, type: "boat", text: "Łódź Copacabana → Isla del Sol (Yumani)", note: "odpływy 8:30 i 13:30, ~1 h na południe; ~30–40 BOB; wstęp na wyspę 50 BOB" },
        { time: "15:30", approx: true, min: 120, type: "rest", text: "Zakwaterowanie w Yumani — zachód słońca nad jeziorem" },
      ],
    },
    {
      day: 13, date: "2026-09-14", region: "boliwia", status: "plan",
      note: "wyspa na luzie — wysypiamy się, zwiedzanie od 9:00",
      title: "Isla del Sol — kolebka Inków, pełny dzień",
      short: "Isla del Sol",
      night: { place: "Isla del Sol (Yumani, południe)", altitude: 3810 },
      maxAltitude: 4050,
      items: [
        { time: "09:00", approx: true, min: 180, type: "hike", text: "Wędrówka po południu wyspy: Pilko Kaina, Escalera del Inca, Fuente Sagrada", note: "„Titicaca” = Puma's Rock (ajmara); to świątynny rdzeń imperium Inków" },
        { type: "warn", text: "Północ wyspy (ruiny Chincana, Święta Skała) od 2019 zamknięta przez spór społeczności — stan na maj 2026 nierozwiązany; zweryfikować dostęp na miejscu" },
        { type: "rest", text: "Popołudnie: kontemplacja, taras widokowy, lokalna kawa/herbata" },
      ],
    },
    {
      day: 14, date: "2026-09-15", region: "titicaca", status: "plan",
      title: "Powrót: Isla del Sol → Copacabana → Puno",
      short: "powrót do Puno",
      night: { place: "Puno / Juliaca", altitude: 3830 },
      maxAltitude: 3830,
      items: [
        { time: "08:30", approx: true, min: 90, type: "boat", text: "Łódź Isla del Sol → Copacabana", note: "poranny odpływ ~8:30 — rozkład" },
        { time: "11:00", approx: true, min: 210, type: "bus", text: "Copacabana → Puno, granica Kasani", note: "nocleg bliżej lotniska w Juliaca dla porannego lotu" },
        { type: "rest", text: "Wieczór luźno przed lotem" },
      ],
    },
    {
      day: 15, date: "2026-09-16", region: "lima", status: "plan",
      note: "koniec etapu 1 — w Limie decyzja o etapie 2 (Huaraz albo Amazonia)",
      title: "Juliaca → Lima — koniec pierwszego etapu",
      short: "powrót do Limy",
      night: { place: "Lima", altitude: 0 },
      maxAltitude: 3825,
      items: [
        { time: "09:00", approx: true, min: 60, type: "car", text: "Transfer na lotnisko Juliaca (Inca Manco Cápac)" },
        { time: "11:00", approx: true, min: 105, type: "flight", text: "Lot Juliaca → Lima", note: "~1,5 h" },
        { time: "13:00", approx: true, type: "flight", text: "Przylot do Limy — tu decyzja: Huaraz czy Amazonia (Iquitos)", note: "etap 2 do ułożenia po researchu Kacpra" },
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
      name: "Plecaki i bagaż",
      icon: "bag",
      note: "Lecimy BEZ rejestrowanego. Limit KLM na osobę: podręczny 55×35×25 cm + mały bagaż 40×30×15 cm. Cały ekwipunek pakujemy w te dwie sztuki (3 panowie + 1 damski).",
      items: [
        { t: "Podręczny (duży) — 55×35×25 cm", qty: "1/os.", note: "główny bagaż, do schowka nad głową" },
        { t: "Mały plecak — 40×30×15 cm", qty: "1/os.", note: "pod fotel; do zwiedzania na miejscu" },
        { t: "REKOMENDACJA: Osprey Farpoint 55 (męski) / Fairview 55 (damski)", note: "łączy oba w JEDNYM: plecak 40 l + ODPINANY plecaczek 15 l = 2 bagaże w 1 sztuce. 55×35×23 cm, 1,9 kg, carry-on po odpięciu daypacka. Rzecz na lata. 639,99 zł (przecena z 859,99 zł), Skalnik — w magazynie", url: "https://www.skalnik.pl/plecak-farpoint-travel-55-antique-blue-1062824" },
        { t: "Wideo: jak działa Farpoint 55", sug: true, note: "prezentacja plecaka (od Kacpra)", url: "https://www.youtube.com/watch?v=zPb4BerhB0E" },
      ],
    },
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
        { t: "Papier toaletowy" },
        { t: "Ręcznik z mikrofibry" },
        { t: "Obcinaczka do paznokci" },
        { t: "Pilnik do paznokci" },
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
        { t: "Polisa ubezpieczeniowa — wydruk", sug: true },
        { t: "Gotówka USD", sug: true, note: "tylko banknoty 100 USD (najlepszy kurs wymiany na sole). Reszta z bankomatu — Banco de la Nación wypłaca bez prowizji po stronie Peru" },
        { t: "Zapasowa karta płatnicza", sug: true, note: "Revolut/inna — trzymana osobno od głównej" },
      ],
    },
  ],
  // pytanie otwarte do grupy — pokazane na dole widoku
  openQuestion: "Plecaki — ustalone: limit KLM to 55×35×25 + 40×30×15 na osobę; rekomendacja Osprey Farpoint 55 (M) / Fairview 55 (D) = 2 bagaże w 1. Kto ma już swój, a kto kupuje? Zróbmy jedno zamówienie.",
};
