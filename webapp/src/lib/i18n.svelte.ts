import { getContext, setContext } from 'svelte';

export type Language = 'ro' | 'ru' | 'en';

export interface Translations {
	nav: { about: string; classes: string; events: string; contact: string; songs: string };
	hero: { tagline: string; line1: string; line2: string; cta: string; since: string };
	about: { title: string; quote: string; body: string; highlight: string };
	classes: {
		title: string;
		subtitle: string;
		days: string;
		daysLabel: string;
		time: string;
		timeLabel: string;
		location: string;
		locationLabel: string;
		free: string;
		cta: string;
	};
	gallery: { title: string };
	events: { title: string; subtitle: string; noEvents: string; stayTuned: string; location: string };
	contact: {
		title: string;
		subtitle: string;
		instructor: string;
		phone: string;
		address: string;
		cta: string;
		facebook: string;
	};
	footer: { tagline: string; since: string };
	meta: { landingTitle: string; landingDescription: string; aboutTitle: string; aboutDescription: string };
	aboutPage: {
		pageTitle: string;
		subtitle: string;
		history: string;
		forTitle: string;
		kidsTitle: string;
		kidsBody: string;
		adultsTitle: string;
		adultsBody: string;
		whyTitle: string;
		why: string[];
		communityTitle: string;
		communityBody: string;
		instructorTitle: string;
		instructorName: string;
		instructorBio: string;
		ctaText: string;
		backToHome: string;
	};
}

const translations: Record<Language, Translations> = {
	ro: {
		nav: {
			about: 'Despre',
			classes: 'Antrenamente',
			events: 'Evenimente',
			contact: 'Contact',
			songs: 'Cântece'
		},
		hero: {
			tagline: 'Artă marțială braziliană. Acrobații. Muzică.',
			line1: 'CAPOEIRA',
			line2: 'ÎN CHIȘINĂU',
			cta: 'Prima lecție gratuită',
			since: 'Activi din 2003'
		},
		about: {
			title: 'CE ESTE CAPOEIRA?',
			quote: 'Născută din rezistență. Forjată ca luptă. Vie prin muzică.',
			body: 'Capoeira este o artă marțială braziliană care combină tehnici de luptă, acrobații și muzică. Născută din rezistența africană în Brazilia, îmbină forța fizică cu strategia fluidă. Fiecare confruntare este un schimb în timp real — doi sportivi care se citesc și se contracarează.',
			highlight: 'Mai mult decât sport. O cultură.'
		},
		classes: {
			title: 'ANTRENAMENTE',
			subtitle: 'Pentru oricine, indiferent de vârstă sau nivel',
			days: 'Luni, Miercuri, Vineri',
			daysLabel: 'Zile',
			time: '18:30 – 20:30',
			timeLabel: 'Orar',
			location: 'Calea Ieșilor 10, et. 5',
			locationLabel: 'Locație',
			free: 'Prima lecție este gratuită',
			cta: 'Vino să încerci'
		},
		gallery: { title: 'GALERIE' },
		events: {
			title: 'EVENIMENTE',
			subtitle: 'Batizados, workshopuri și spectacole',
			noEvents: 'Niciun eveniment planificat momentan.',
			stayTuned: 'Urmărește-ne pe rețelele sociale pentru anunțuri.',
			location: 'Locație'
		},
		contact: {
			title: 'ALĂTURĂ-TE NOUĂ',
			subtitle: 'Prima lecție este gratuită. Vino cum ești.',
			instructor: 'Instructor',
			phone: 'Telefon',
			address: 'Calea Ieșilor 10, et. 5, Chișinău',
			cta: 'Contactează-ne',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Artă marțială braziliană. Acrobații. Muzică.',
			since: 'Activi din 2003 în Chișinău'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Chișinău — Artă Marțială Braziliană în Moldova',
			landingDescription:
				'Școală de capoeira în Chișinău, activă din 2003. Artă marțială braziliană, acrobații și muzică pentru toate vârstele. Prima lecție gratuită.',
			aboutTitle: 'Despre Alemar Capoeira Chișinău — Copii, Adulți, Comunitate',
			aboutDescription:
				'Descoperă capoeira în Chișinău. Sport pentru copii și adulți, indiferent de gen sau experiență. Comunitate activă, stil de viață sănătos.'
		},
		aboutPage: {
			pageTitle: 'DESPRE NOI',
			subtitle: 'Capoeira Chișinău — artă marțială, dans, muzică și comunitate din 2003',
			history:
				'Alemar Capoeira Chișinău activează din 2003, fiind prima și cea mai veche școală de capoeira din Moldova. De-a lungul anilor am format o comunitate unită de practicanți care împart nu doar sala de antrenament, ci și valorile acestui sport unic: respect, bucurie și conexiune umană.',
			forTitle: 'PENTRU CINE?',
			kidsTitle: 'COPII',
			kidsBody:
				'Capoeira este ideală pentru copii de la 5 ani. Antrenamentele dezvoltă coordonarea, flexibilitatea și echilibrul, dar cel mai important — formează caracterul. Copiii învață să comunice, să colaboreze și să-și depășească limitele într-un mediu sigur, jucăuș și muzical. Nu există concurs, nu există perdanți — capoeira se joacă împreună.',
			adultsTitle: 'ADULȚI',
			adultsBody:
				'Nu contează vârsta, forma fizică sau experiența anterioară. Adulții care practică capoeira câștigă condiție fizică, flexibilitate și o modalitate reală de a deconecta de la rutina zilnică. Mai mult, intri într-o comunitate autentică: antrenamente de trei ori pe săptămână, evenimente, batizaduri și relații care depășesc sala.',
			whyTitle: 'DE CE CAPOEIRA?',
			why: [
				'Antrenament complet — forță, flexibilitate, coordonare, echilibru',
				'Accesibil oricui, indiferent de vârstă, gen sau nivel fizic',
				'Muzică live la fiecare antrenament — berimbau, atabaque, pandeiro',
				'Artă marțială, dans și acrobații într-un singur sport',
				'Comunitate activă cu evenimente regulate și batizaduri',
				'Prima lecție este gratuită'
			],
			communityTitle: 'COMUNITATE',
			communityBody:
				'Capoeira nu se practică în singurătate. Roda — cercul în care se joacă — este o metaforă pentru viața comunității: fiecare participant contează, fiecare contribuie la energie. La Alemar Chișinău, studenții nu sunt numere — sunt parte dintr-un grup care crește împreună, indiferent de vârstă, gen sau naționalitate.',
			instructorTitle: 'INSTRUCTORUL',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic practică capoeira de peste două decenii și conduce grupul Alemar Chișinău din 2003. Sub îndrumarea sa, sute de studenți — copii și adulți, începători și avansați — au descoperit bucuria și profunzimea acestui sport unic.',
			ctaText: 'Vino la un antrenament',
			backToHome: 'Înapoi la pagina principală'
		}
	},
	ru: {
		nav: {
			about: 'О нас',
			classes: 'Тренировки',
			events: 'События',
			contact: 'Контакт',
			songs: 'Песни'
		},
		hero: {
			tagline: 'Бразильское боевое искусство. Акробатика. Музыка.',
			line1: 'КАПОЭЙРА',
			line2: 'В КИШИНЁВЕ',
			cta: 'Первый урок бесплатно',
			since: 'С 2003 года'
		},
		about: {
			title: 'ЧТО ТАКОЕ КАПОЭЙРА?',
			quote: 'Рождена из сопротивления. Закалена в бою. Жива через музыку.',
			body: 'Капоэйра — бразильское боевое искусство, сочетающее боевые техники, акробатику и музыку. Рождённая из африканского сопротивления в Бразилии, она объединяет физическую силу с боевой стратегией. Каждая схватка — живой обмен между двумя спортсменами, которые читают и нейтрализуют друг друга.',
			highlight: 'Больше чем спорт. Это культура.'
		},
		classes: {
			title: 'ТРЕНИРОВКИ',
			subtitle: 'Для всех, независимо от возраста и уровня',
			days: 'Понедельник, Среда, Пятница',
			daysLabel: 'Дни',
			time: '18:30 – 20:30',
			timeLabel: 'Расписание',
			location: 'Calea Ieșilor 10, эт. 5',
			locationLabel: 'Место',
			free: 'Первое занятие бесплатно',
			cta: 'Попробовать'
		},
		gallery: { title: 'ГАЛЕРЕЯ' },
		events: {
			title: 'СОБЫТИЯ',
			subtitle: 'Батизадо, мастер-классы и выступления',
			noEvents: 'На данный момент мероприятий нет.',
			stayTuned: 'Следите за нами в социальных сетях.',
			location: 'Место'
		},
		contact: {
			title: 'ПРИСОЕДИНЯЙСЯ',
			subtitle: 'Первый урок бесплатно. Приходи как есть.',
			instructor: 'Инструктор',
			phone: 'Телефон',
			address: 'Calea Ieșilor 10, эт. 5, Кишинёв',
			cta: 'Написать нам',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Бразильское боевое искусство. Акробатика. Музыка.',
			since: 'С 2003 года в Кишинёве'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Кишинёв — Бразильское Боевое Искусство в Молдове',
			landingDescription:
				'Школа капоэйры в Кишинёве, работает с 2003 года. Бразильское боевое искусство, акробатика и музыка для всех возрастов. Первое занятие бесплатно.',
			aboutTitle: 'О нас — Alemar Capoeira Кишинёв — Дети, Взрослые, Сообщество',
			aboutDescription:
				'Откройте для себя капоэйру в Кишинёве. Спорт для детей и взрослых, независимо от пола и опыта. Активное сообщество, здоровый образ жизни.'
		},
		aboutPage: {
			pageTitle: 'О НАС',
			subtitle: 'Капоэйра Кишинёв — боевое искусство, танец, музыка и сообщество с 2003 года',
			history:
				'Alemar Capoeira Chișinău работает с 2003 года и является первой и старейшей школой капоэйры в Молдове. За эти годы мы сформировали дружное сообщество практикующих, которые разделяют не только тренировочный зал, но и ценности этого уникального вида спорта: уважение, радость и человеческую связь.',
			forTitle: 'ДЛЯ КОГО?',
			kidsTitle: 'ДЕТИ',
			kidsBody:
				'Капоэйра идеально подходит для детей от 5 лет. Тренировки развивают координацию, гибкость и равновесие, но главное — формируют характер. Дети учатся общаться, сотрудничать и преодолевать свои ограничения в безопасной, игровой и музыкальной среде. Нет соревнований, нет проигравших — в капоэйру играют вместе.',
			adultsTitle: 'ВЗРОСЛЫЕ',
			adultsBody:
				'Возраст, физическая форма и предыдущий опыт не имеют значения. Взрослые, занимающиеся капоэйрой, улучшают физическую форму, гибкость и получают реальный способ отключиться от ежедневной рутины. Кроме того, вы вступаете в настоящее сообщество: тренировки три раза в неделю, мероприятия, батизадо и отношения, которые выходят за пределы зала.',
			whyTitle: 'ПОЧЕМУ КАПОЭЙРА?',
			why: [
				'Полная тренировка тела — сила, гибкость, координация, баланс',
				'Доступно для всех — независимо от возраста, пола и физической подготовки',
				'Живая музыка на каждой тренировке — берибао, атабаке, пандейро',
				'Боевое искусство, танец и акробатика в одном виде спорта',
				'Активное сообщество с регулярными мероприятиями и батизадо',
				'Первое занятие бесплатно'
			],
			communityTitle: 'СООБЩЕСТВО',
			communityBody:
				'Капоэйра не практикуется в одиночестве. Рода — круг, в котором играют — это метафора жизни сообщества: каждый участник важен, каждый вносит вклад в общую энергию. В Alemar Chișinău студенты — не числа, они часть группы, которая растёт вместе, независимо от возраста, пола или национальности.',
			instructorTitle: 'ИНСТРУКТОР',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Сержиу Мелник занимается капоэйрой более двух десятилетий и руководит группой Alemar Chișinău с 2003 года. Под его руководством сотни студентов — дети и взрослые, начинающие и продвинутые — открыли для себя радость и глубину этого уникального вида спорта.',
			ctaText: 'Прийти на тренировку',
			backToHome: 'На главную страницу'
		}
	},
	en: {
		nav: {
			about: 'About',
			classes: 'Classes',
			events: 'Events',
			contact: 'Contact',
			songs: 'Songs'
		},
		hero: {
			tagline: 'Brazilian Martial Art. Acrobatics. Music.',
			line1: 'CAPOEIRA',
			line2: 'IN CHIȘINĂU',
			cta: 'First class free',
			since: 'Active since 2003'
		},
		about: {
			title: 'WHAT IS CAPOEIRA?',
			quote: 'Born from resistance. Forged as combat. Alive through music.',
			body: 'Capoeira is a Brazilian martial art that combines combat techniques, acrobatics, and music. Born from African resistance in Brazil, it blends physical power with combat strategy. Every sparring match is a live exchange — two athletes reading and countering each other.',
			highlight: 'More than sport. A culture.'
		},
		classes: {
			title: 'CLASSES',
			subtitle: 'For everyone, regardless of age or level',
			days: 'Monday, Wednesday, Friday',
			daysLabel: 'Days',
			time: '18:30 – 20:30',
			timeLabel: 'Schedule',
			location: 'Calea Ieșilor 10, 5th floor',
			locationLabel: 'Location',
			free: 'First class is free',
			cta: 'Come and try'
		},
		gallery: { title: 'GALLERY' },
		events: {
			title: 'EVENTS',
			subtitle: 'Batizados, workshops and showcases',
			noEvents: 'No events planned at the moment.',
			stayTuned: 'Follow us on social media for announcements.',
			location: 'Location'
		},
		contact: {
			title: 'JOIN US',
			subtitle: 'First class is free. Come as you are.',
			instructor: 'Instructor',
			phone: 'Phone',
			address: 'Calea Ieșilor 10, 5th floor, Chișinău',
			cta: 'Get in touch',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Brazilian Martial Art. Acrobatics. Music.',
			since: 'Active since 2003 in Chișinău'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Chișinău — Brazilian Martial Art in Moldova',
			landingDescription:
				'Capoeira school in Chișinău, active since 2003. Brazilian martial art, acrobatics and music for all ages. First class free.',
			aboutTitle: 'About Alemar Capoeira Chișinău — Kids, Adults, Community',
			aboutDescription:
				'Discover capoeira in Chișinău. Sport for kids and adults of any gender or experience level. Active community, healthy lifestyle.'
		},
		aboutPage: {
			pageTitle: 'ABOUT US',
			subtitle: 'Capoeira Chișinău — martial art, dance, music and community since 2003',
			history:
				'Alemar Capoeira Chișinău has been active since 2003, making it the first and longest-running capoeira school in Moldova. Over the years we have built a tight-knit community of practitioners who share not just a training floor but the values of this unique discipline: respect, joy, and human connection.',
			forTitle: 'WHO IS IT FOR?',
			kidsTitle: 'KIDS',
			kidsBody:
				'Capoeira is ideal for children from age 5. Training develops coordination, flexibility and balance — but most importantly, it builds character. Kids learn to communicate, cooperate and push their own limits in a safe, playful, musical environment. No competition, no losers — capoeira is played together.',
			adultsTitle: 'ADULTS',
			adultsBody:
				"Age, fitness level, and prior experience don't matter. Adults who practice capoeira gain physical fitness, flexibility, and a genuine way to disconnect from daily routine. More than that, you join a real community: three sessions per week, events, batizados, and friendships that go beyond the training floor.",
			whyTitle: 'WHY CAPOEIRA?',
			why: [
				'Full-body workout — strength, flexibility, coordination, balance',
				'Accessible to everyone, regardless of age, gender, or fitness level',
				'Live music at every training session — berimbau, atabaque, pandeiro',
				'Martial art, dance, and acrobatics in one discipline',
				'Active community with regular events and batizados',
				'First class is free'
			],
			communityTitle: 'COMMUNITY',
			communityBody:
				'Capoeira is not a solo practice. The roda — the circle in which the game is played — is a metaphor for community life: every participant matters, every person contributes to the energy. At Alemar Chișinău, students are not numbers — they are part of a group that grows together, regardless of age, gender, or background.',
			instructorTitle: 'THE INSTRUCTOR',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic has been practicing capoeira for over two decades and has led the Alemar Chișinău group since 2003. Under his guidance, hundreds of students — children and adults, beginners and advanced — have discovered the joy and depth of this unique discipline.',
			ctaText: 'Come to a class',
			backToHome: 'Back to home page'
		}
	}
};

const LANGUAGE_KEY = Symbol('language');

export class LanguageStore {
	current = $state<Language>('ro');

	constructor(initial: Language = 'ro') {
		this.current = initial;
	}

	get t(): Translations {
		return translations[this.current];
	}

	set(lang: Language) {
		this.current = lang;
	}
}

export const setLanguageStore = (initialLang: Language = 'ro') => {
	const store = new LanguageStore(initialLang);
	setContext(LANGUAGE_KEY, store);
	return store;
};

export const useLanguageStore = () => getContext<LanguageStore>(LANGUAGE_KEY);
