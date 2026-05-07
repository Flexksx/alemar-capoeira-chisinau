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
			tagline: 'Artă marțială. Dans. Muzică.',
			line1: 'CAPOEIRA',
			line2: 'ÎN CHIȘINĂU',
			cta: 'Prima lecție gratuită',
			since: 'Activi din 2003'
		},
		about: {
			title: 'CE ESTE CAPOEIRA?',
			quote: 'O luptă care este un dans, un dans care este o luptă.',
			body: 'Capoeira este o artă marțială braziliană care îmbină luptă, dans, acrobații și muzică. Născută din rezistența africană, ea exprimă libertate, creativitate și comunitate. Fiecare joc este o conversație fizică — un dialog între doi oameni, fără cuvinte.',
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
			tagline: 'Artă marțială. Dans. Muzică.',
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
			tagline: 'Боевое искусство. Танец. Музыка.',
			line1: 'КАПОЭЙРА',
			line2: 'В КИШИНЁВЕ',
			cta: 'Первый урок бесплатно',
			since: 'С 2003 года'
		},
		about: {
			title: 'ЧТО ТАКОЕ КАПОЭЙРА?',
			quote: 'Борьба, которая является танцем, танец, который является борьбой.',
			body: 'Капоэйра — бразильское боевое искусство, объединяющее борьбу, танец, акробатику и музыку. Рождённая из африканского сопротивления, она выражает свободу, творчество и общность. Каждая игра — это физический диалог между двумя людьми.',
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
			tagline: 'Боевое искусство. Танец. Музыка.',
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
			tagline: 'Martial Art. Dance. Music.',
			line1: 'CAPOEIRA',
			line2: 'IN CHIȘINĂU',
			cta: 'First class free',
			since: 'Active since 2003'
		},
		about: {
			title: 'WHAT IS CAPOEIRA?',
			quote: 'A fight that is a dance, a dance that is a fight.',
			body: 'Capoeira is a Brazilian martial art that blends combat, dance, acrobatics, and music. Born from African resistance, it expresses freedom, creativity, and community. Every jogo is a physical conversation — a dialogue between two people, without words.',
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
			tagline: 'Martial Art. Dance. Music.',
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
