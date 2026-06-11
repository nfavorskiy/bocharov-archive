// Exhaustive flat map of every URL segment → human-readable label.
// Used by Breadcrumbs.svelte. Add a new entry here whenever a new route is added.
export const routeLabels = {
  ru: {
    // ── top-level ──────────────────────────────────────────────────────────
    biography:                      "Биография",
    research:                       "Наука",
    projects:                       "Проекты",
    watercolorsGraphics:            "Акварели и Графика",
    reviews:                        "Коллеги и Друзья о Юрии Бочарове",
    photoAndVarious:                "Фотохроника",

    // ── biography ──────────────────────────────────────────────────────────
    mainDates:                      "Основные даты",
    briefBiography:                 "Краткая биография",
    family:                         "Семья",
    letters:                        "Письма 1955-1957",
    congratulations:                "Поздравления, посвящения, разное",
    awardsAndDiplomas:              "Награды и дипломы",
    notebooks:                      "Из записных книжек",

    // ── research ───────────────────────────────────────────────────────────
    majorAims:                      "Основные направления научной и проектной деятельности",
    worksList:                      "Список печатных работ",
    sovietUrbanists:                "Советское общество урбанистов 1987-1992",
    aspirantsCandidates:            "Список аспирантов и соискателей",
    cityDevelopmentModel:           "Имитационная модель долгосрочного развития города",
    doctoralDissertation:           "Автореферат докторской диссертации 1967",
    defenseAnnouncement:            "Объявление о защите 1967",
    interviewsMaterials:            "Список интервью Ю.П. Бочарова и материалов о нём",
    starredArticlesInterviews:      "Избранные статьи и интервью Юрия Бочарова",
    articlesMaterials:              "Материалы о Ю.П. Бочарове",

    // ── projects ───────────────────────────────────────────────────────────
    list:                           "Список проектных работ",
    diploma1951:                    "Диплом МАРХИ 1951",
    volgograd:                      "Волгоград 1951-1958",

    tolyatti:                       "Тольятти 1964-1977",
    booklet:                        "Буклет 1967. Город ТОЛЬЯТТИ Генеральный план новой части города",

    naberezhnyeChelny:              "Набережные Челны 1968-1975",
    memorialComplex:                "Мемориал на Поклонной горе. Конкурс 1986",
    astana:                         "Астана. Международный конкурс 1998",
    cdh:                            "Центральный Дом Художника. Конкурс 2001",
    federationSquare:               "Площадь Федерации. Эскиз-идея 2005",
    newRaasnBuilding:               "Здание РААСН на Волхонке. Конкурс 1997",
    residentialComplex:             "Крестьянская застава. Конкурс 1998",
    zaradye:                        "Зарядье. Конкурс 2012",
    miscellaneous:                  "Разное",

    // ── watercolors & graphics ─────────────────────────────────────────────
    watercolors1940_1970:           "Акварели 1940-1970-е",
    watercolors1980_2010:           "Акварели 1980-2010-е",
    pencilPastelMarker:             "Карандаш / пастель / фломастер",
    sketches:                       "Зарисовки",

    // ── reviews – dynamic [id] segments ────────────────────────────────────
    kuzmin:                         "А.В. Кузьмин",
    shubenkov:                      "М.В. Шубенков",
    blinkin:                        "М.Я. Блинкин",
    bondarenko:                     "И.А. Бондаренко",
    frezinskaya:                    "Н.Р. Фрезинская",
    rappaport:                      "А.Г. Рапппапорт",
    vuchik:                         "Вукан Р. Вучик",
    grigoryeva:                     "Н.Ю. Григорьева",
    nashchokina:                    "М.В. Нащокина",
    gurari:                         "М.Н. Гурари",
    merzhanov:                      "С.Б. Мержанов",
    lebedinskaya:                   "Г.А. Лебединская",
    bezchastnov:                    "М.И. Безчастнов",
    mescheryakova:                  "Н.А. Мещерякова",
    belonogova:                     "М.А. Белоногова",
    tolstikhina:                    "А.О. Толстихина",
    zheblyenok:                     "Н.Н. Жеблиенок",
    glozman:                        "О.С. Глозман",
    sirenko:                        "Э.А. Сиренко",
    avazov:                         "Р.Ш. Авазов",
    samaraAcademy:                  "Самарская академия архитектуры",
    samaraUnion:                    "Самарское отделение Союза архитекторов",

    // ── photoAndVarious ────────────────────────────────────────────────────
    photos:                         "Фото 1920-1950-х",
    tripsMeetings:                  "Поездки и встречи",
    familyChronicle:                "Семейная хроника",
  },

  en: {
    // ── top-level ──────────────────────────────────────────────────────────
    biography:                      "Biography",
    research:                       "Science",
    projects:                       "Projects",
    watercolorsGraphics:            "Watercolors & Graphics",
    reviews:                        "Colleagues & Friends about Yuri Bocharov",
    photoAndVarious:                "Photo Gallery",

    // ── biography ──────────────────────────────────────────────────────────
    mainDates:                      "Key Dates",
    briefBiography:                 "Brief Biography",
    family:                         "Family",
    letters:                        "Letters 1955-1957",
    congratulations:                "Greetings, Dedications & Miscellaneous",
    awardsAndDiplomas:              "Awards & Diplomas",
    notebooks:                      "From Notebooks",

    // ── research ───────────────────────────────────────────────────────────
    majorAims:                      "Main Areas of Scientific & Design Work",
    worksList:                      "List of Published Works",
    sovietUrbanists:                "Soviet Urbanists Society 1987-1992",
    aspirantsCandidates:            "List of Postgraduate Students & Applicants",
    cityDevelopmentModel:           "Simulation Model of Long-term City Development",
    doctoralDissertation:           "Abstract of the Doctoral Dissertation 1967",
    defenseAnnouncement:            "Announcement of the Doctoral Dissertation Defense 1967",
    interviewsMaterials:            "List of Yuri Bocharov's Interviews & Materials about him",
    starredArticlesInterviews:      "Yuri Bocharov's Selected Articles & Interviews",
    articlesMaterials:              "Materials about Yuri Bocharov",

    // ── projects ───────────────────────────────────────────────────────────
    list:                           "List of Projects",
    diploma1951:                    "MARHI Diploma 1951",
    volgograd:                      "Volgograd 1951-1958",

    tolyatti:                       "Tolyatti 1964-1977",
    booklet:                        "Booklet 1967. City of TOLYATTI General Plan of the New Part of the City",
    
    naberezhnyeChelny:              "Naberezhnye Chelny 1968-1975",
    memorialComplex:                "Memorial on Poklonnaya Hill Competition 1986",
    astana:                         "Astana International Competition 1998",
    cdh:                            "Central House of Artists Competition 2001",
    federationSquare:               "Federation Square Sketch Idea 2005",
    newRaasnBuilding:               "RAASN Building on Volkhonka Street Competition 1997",
    residentialComplex:             "Krestyanskaya Zastava Competition 1998",
    zaradye:                        "Zaryadye Competition 2012",
    miscellaneous:                  "Miscellaneous",

    // ── watercolors & graphics ─────────────────────────────────────────────
    watercolors1940_1970:           "Watercolors 1940s-1970s",
    watercolors1980_2010:           "Watercolors 1980s-2010s",
    pencilPastelMarker:             "Pencil / Pastel / Marker",
    sketches:                       "Sketches",

    // ── reviews – dynamic [id] segments ────────────────────────────────────
    kuzmin:                         "Alexander V. Kuzmin",
    shubenkov:                      "Mikhail V. Shubenkov",
    blinkin:                        "Mikhail Ya. Blinkin",
    bondarenko:                     "Igor A. Bondarenko",
    frezinskaya:                    "Nataliya R. Frezinskaya",
    rappaport:                      "Alexander G. Rappaport",
    vuchik:                         "Vukan R. Vuchic",
    grigoryeva:                     "Nataliya Yu. Grigoryeva",
    nashchokina:                    "Maria V. Nashchokina",
    gurari:                         "Mark N. Gurari",
    merzhanov:                      "Sergey B. Merzhanov",
    lebedinskaya:                   "Galina A. Lebedinskaya",
    bezchastnov:                    "Mikhail I. Bezchastnov",
    mescheryakova:                  "Nataliya A. Meshcheryakova",
    belonogova:                     "Marina A. Belonogova",
    tolstikhina:                    "Alexandra O. Tolstikhina",
    zheblyenok:                     "Nataliya N. Zheblienok",
    glozman:                        "Olga S. Glozman",
    sirenko:                        "Elina A. Sirenko",
    avazov:                         "Rakhim Sh. Avazov",
    samaraAcademy:                  "Samara Academy of Architecture",
    samaraUnion:                    "Samara Branch of the Union of Architects",

    // ── photoAndVarious ────────────────────────────────────────────────────
    photos:                         "Photos 1920s-1950s",
    tripsMeetings:                  "Trips & Meetings",
    familyChronicle:                "Family Chronicle",
  }
};