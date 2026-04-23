import { derived } from 'svelte/store';
import { language } from '$lib/stores/language';

export const messages = {
  ru: {
    nav: {
      home: 'Главная',
      biography: 'Биография',
      biographyDropdown: {
        mainDates: 'Основные даты',
        biographicalNotes: 'Биографические заметки',
        firstSteps: 'Начало жизненного пути',
        family: 'Семья',
        letters: 'Письма',
        notebooks: 'Из записных книжек',
        awardsAndDiplomas: 'Награды и дипломы'
      },
      research: 'Наука',
      researchDropdown: {
        majorAims: 'Основные направления научной и проектной деятельности',
        worksList: 'Список печатных трудов',
        sovietUrbanists: 'Советское общество урбанистов (1987-1992)',
        aspirantsCandidates: 'Список аспирантов и соискателей',
        cityDevelopmentModel: 'Имитационная модель развития города',
        interviewsMaterials: 'Список интервью и материалов о Юрии Петровиче',
        starredArticlesInterviews: 'Избранные статьи и интервью Юрия Петровича',
        articlesMaterials: 'Статьи и материалы о Юрии Петровиче'
      },
      projects: 'Проекты',
      projectsDropdown: {
        list: 'Список проектных работ',
        diploma1951: 'Диплом 1951 Дом Советов в Воронеже',
        volgograd: 'Волгоград 1952-1955',
        tolyatti: 'Тольятти 1964-1966',
        naberezhnyeChelny: 'Набережные Челны 1965-1968',
        astana: 'Астана Междунар. конкурс 1998',
        cdh: 'ЦДХ Конкурс 2001',
        federationSquare: 'Площадь Федерации Эскиз-идея 2005',
        memorialComplex: 'Мемориальный комплекс на Поклонной горе Конкурс 1986',
        newRaasnBuilding: 'Новое здание РААСН на Волхонке Конкурс 1997',
        residentialComplex: 'Крестьянская застава Конкурс 1998',
        zaradye: 'Зарядье Конкурс 2012',
        miscellaneous: 'Разное'
      },
      watercolorsGraphics: 'Акварели и Графика',
      watercolorsGraphicsDropdown: {
        watercolors1940_1970: 'Акварели 1940-1970-е',
        watercolors1980_2010: 'Акварели 1980-2010-е',
        pencilPastelMarker: 'Карандаш / пастель / фломастер',
        sketches: 'Зарисовки'
      },
      reviews: 'Друзья и Коллеги о Юрии Петровиче',
      reviewsDropdown: {
        kuzmin: 'А.В. Кузьмин',
        shubenkov: 'М.В. Шубенков',
        blinkin: 'М.Я. Блинкин',
        bondarenko: 'И.А. Бондаренко',
        frezinskaya: 'Н.Р. Фрезинская',
        rappaport: 'А.Г. Рапппапорт',
        vuchik: 'Вукан Р. Вучик',
        grigoryeva: 'Н.Ю. Григорьева',
        merzhanov: 'С.Б. Мержанов',
        lebedinskaya: 'Г.А. Лебединская',
        bezchastnov: 'М.И. Безчастнов',
        gurari: 'М.Н. Гурари',
        belonogova: 'М.А. Белоногова',
        tolstikhina: 'А.О. Толстихина',
        zheblyenok: 'Н.Н. Жеблиенок',
        glozman: 'О.С. Глозман',
        sirenko: 'Э.А. Сиренко',
        avazov: 'Р.Ш. Авазов',
        samaraAcademy: 'Самарская академия архитектуры',
        samaraUnion: 'Самарское отделение Союза архитекторов'
      },
      photoAndVarious: 'Фото и Разное',
      photoAndVariousDropdown: {
        tripsMeetings: 'Поездки и встречи',
        familyChronicle: 'Семейная хроника',
        congratulations: 'Поздравления, посвящения'
      }
    },
    home: {
      firstName: 'Юрий Петрович',
      lastName: 'БОЧАРОВ',
      born: '4.05.1926, Харьков -',
      died: '1.09.2023, Москва',
      bio:
        'Советский и российский архитектор, урбанист, академик РААСН, один из крупнейших учёных в области градостроительной науки. Основоположник теории гибкой планировочной структуры новых промышленных городов. Автор генпланов Тольятти и Набережные Челны',
      alt: 'Юрий Петрович Бочаров'
    },
    imageBox: {
      open: 'Открыть изображение',
      close: 'Закрыть изображение',
      previous: 'Предыдущее изображение',
      next: 'Следующее изображение'
    },
    placeholders: {
      comingSoon: 'Скоро появится'
    }
  },
  en: {
    nav: {
      home: 'Home',
      biography: 'Biography',
      biographyDropdown: {
        mainDates: 'Key Dates',
        biographicalNotes: 'Biographical Notes',
        firstSteps: 'Early Life',
        family: 'Family',
        letters: 'Letters',
        notebooks: 'From the Notebooks',
        awardsAndDiplomas: 'Awards and Diplomas'
      },
      research: 'Research',
      researchDropdown: {
        majorAims: 'Main Areas of Scientific and Design Work',
        worksList: 'List of Published Works',
        sovietUrbanists: 'Soviet Urbanists Society (1987-1992)',
        aspirantsCandidates: 'List of Postgraduate Students and Applicants',
        cityDevelopmentModel: 'City Development Simulation Model',
        interviewsMaterials: 'Interviews and Materials about Yury Petrovich',
        starredArticlesInterviews: 'Selected Articles and Interviews by Yury Petrovich',
        articlesMaterials: 'Articles and Materials about Yury Petrovich'
      },
      projects: 'Projects',
      projectsDropdown: {
        list: 'List of Project Works',
        diploma1951: '1951 Diploma, House of Soviets in Voronezh',
        volgograd: 'Volgograd 1952-1955',
        tolyatti: 'Tolyatti 1964-1966',
        naberezhnyeChelny: 'Naberezhnye Chelny 1965-1968',
        astana: 'Astana International Competition 1998',
        cdh: 'Central House of Artists Competition 2001',
        federationSquare: 'Federation Square Sketch Idea 2005',
        memorialComplex: 'Memorial Complex on Poklonnaya Hill Competition 1986',
        newRaasnBuilding: 'New RAAHN Building on Volkhonka Competition 1997',
        residentialComplex: 'Krestyanskaya Zastava Competition 1998',
        zaradye: 'Zaryadye Competition 2012',
        miscellaneous: 'Miscellaneous'
      },
      watercolorsGraphics: 'Watercolors and Graphics',
      watercolorsGraphicsDropdown: {
        watercolors1940_1970: 'Watercolors 1940s-1970s',
        watercolors1980_2010: 'Watercolors 1980s-2010s',
        pencilPastelMarker: 'Pencil / pastel / marker',
        sketches: 'Sketches'
      },
      reviews: 'Friends and Colleagues about Yury Petrovich',
      reviewsDropdown: {
        kuzmin: 'A.V. Kuzmin',
        shubenkov: 'M.V. Shubenkov',
        blinkin: 'M.Ya. Blinkin',
        bondarenko: 'I.A. Bondarenko',
        frezinskaya: 'N.R. Frezinskaya',
        rappaport: 'A.G. Rappaport',
        vuchik: 'Vukan R. Vuchic',
        grigoryeva: 'N.Yu. Grigoryeva',
        merzhanov: 'S.B. Merzhanov',
        lebedinskaya: 'G.A. Lebedinskaya',
        bezchastnov: 'M.I. Bezchastnov',
        gurari: 'M.N. Gurari',
        belonogova: 'M.A. Belonogova',
        tolstikhina: 'A.O. Tolstikhina',
        zheblyenok: 'N.N. Zheblienok',
        glozman: 'O.S. Glozman',
        sirenko: 'E.A. Sirenko',
        avazov: 'R.Sh. Avazov',
        samaraAcademy: 'Samara Academy of Architecture',
        samaraUnion: 'Samara branch of the Union of Architects'
      },
      photoAndVarious: 'Photos and Miscellaneous',
      photoAndVariousDropdown: {
        tripsMeetings: 'Trips and Meetings',
        familyChronicle: 'Family Chronicle',
        congratulations: 'Greetings and Dedications'
      }
    },
    home: {
      firstName: 'Yury Petrovich',
      lastName: 'BOCHAROV',
      born: '4.05.1926, Kharkiv -',
      died: '1.09.2023, Moscow',
      bio:
        'Soviet and Russian architect, urban planner, Academician of the Russian Academy of Architecture and Building Sciences, one of the leading scholars in urban planning. A founder of the theory of flexible planning structure for new industrial cities. Author of the master plans of Tolyatti and Naberezhnye Chelny',
      alt: 'Yury Petrovich Bocharov'
    },
    imageBox: {
      open: 'Open image',
      close: 'Close image',
      previous: 'Previous image',
      next: 'Next image'
    },
    placeholders: {
      comingSoon: 'Coming soon'
    }
  }
};

function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}

export const t = derived(language, ($language) => {
  const locale = messages[$language] ? $language : 'ru';

  return {
    locale,
    messages: messages[locale],
    format: (template, values) => format(template, values)
  };
});