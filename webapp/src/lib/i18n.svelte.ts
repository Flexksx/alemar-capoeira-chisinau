import { getContext, setContext } from 'svelte';

export type Language = 'ro' | 'ru' | 'en';

export interface Translations {
	nav: { classes: string; events: string; contact: string; songs: string };
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
}

const translations: Record<Language, Translations> = {
	ro: {
		nav: {
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
			location: 'Calea Ieșilor 10, et. 4',
			locationLabel: 'Locație',
			free: 'Prima lecție este gratuită',
			cta: 'Vino să încerci'
		},
		gallery: {
			title: 'GALERIE'
		},
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
			address: 'Calea Ieșilor 10, et. 4, Chișinău',
			cta: 'Contactează-ne',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Artă marțială braziliană. Acrobații. Muzică.',
			since: 'Activi din 2003 în Chișinău'
		}
	},
	ru: {
		nav: {
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
			location: 'Calea Ieșilor 10, эт. 4',
			locationLabel: 'Место',
			free: 'Первое занятие бесплатно',
			cta: 'Попробовать'
		},
		gallery: {
			title: 'ГАЛЕРЕЯ'
		},
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
			address: 'Calea Ieșilor 10, эт. 4, Кишинёв',
			cta: 'Написать нам',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Бразильское боевое искусство. Акробатика. Музыка.',
			since: 'С 2003 года в Кишинёве'
		}
	},
	en: {
		nav: {
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
			location: 'Calea Ieșilor 10, 4th floor',
			locationLabel: 'Location',
			free: 'First class is free',
			cta: 'Come and try'
		},
		gallery: {
			title: 'GALLERY'
		},
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
			address: 'Calea Ieșilor 10, 4th floor, Chișinău',
			cta: 'Get in touch',
			facebook: 'Facebook'
		},
		footer: {
			tagline: 'Brazilian Martial Art. Acrobatics. Music.',
			since: 'Active since 2003 in Chișinău'
		}
	}
};

const LANGUAGE_KEY = Symbol('language');

export class LanguageStore {
	current = $state<Language>('ro');

	get t(): Translations {
		return translations[this.current];
	}

	set(lang: Language) {
		this.current = lang;
	}
}

export const setLanguageStore = () => setContext(LANGUAGE_KEY, new LanguageStore());
export const useLanguageStore = () => getContext<LanguageStore>(LANGUAGE_KEY);
