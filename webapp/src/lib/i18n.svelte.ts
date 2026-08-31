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
		instagram: string;
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
		compareSection: {
			title: string;
			subtitle: string;
			capoeiraAdds: string;
			cards: {
				karate: { name: string; desc: string; contrast: string };
				judo: { name: string; desc: string; contrast: string };
				taekwondo: { name: string; desc: string; contrast: string };
				mma: { name: string; desc: string; contrast: string };
			};
		};
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
			quote: 'A început ca rezistență, funcționează ca luptă și trăiește prin muzică.',
			body: 'Capoeira este o artă marțială braziliană care îmbină tehnici de luptă, acrobații și muzică. S-a născut din rezistența africană în Brazilia. Forța fizică și strategia fluidă lucrează împreună: doi sportivi stau față în față și își răspund mișcare cu mișcare, în timp real.',
			highlight: 'Un sport și o cultură întreagă în jurul lui.'
		},
		classes: {
			title: 'ANTRENAMENTE',
			subtitle: 'Orice vârstă, orice nivel',
			days: 'Luni, Miercuri, Vineri',
			daysLabel: 'Zile',
			time: '18:30 – 20:30',
			timeLabel: 'Orar',
			location: 'Calea Ieșilor 10, et. 5',
			locationLabel: 'Locație',
			free: 'Prima lecție este gratuită',
			cta: 'Vino la un antrenament'
		},
		gallery: { title: 'GALERIE' },
		events: {
			title: 'EVENIMENTE',
			subtitle: 'Batizados, workshopuri și spectacole',
			noEvents: 'Niciun eveniment planificat momentan.',
			stayTuned: 'Urmărește-ne pe Facebook pentru anunțuri.',
			location: 'Locație'
		},
		contact: {
			title: 'ALĂTURĂ-TE NOUĂ',
			subtitle: 'Prima lecție este gratuită. Vino cum ești.',
			instructor: 'Instructor',
			phone: 'Telefon',
			address: 'Calea Ieșilor 10, et. 5, Chișinău',
			cta: 'Contactează-ne',
			facebook: 'Facebook',
			instagram: 'Instagram'
		},
		footer: {
			tagline: 'Artă marțială braziliană. Acrobații. Muzică.',
			since: 'Activi din 2003 în Chișinău'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Chișinău: artă marțială braziliană în Moldova',
			landingDescription:
				'Școală de capoeira în Chișinău, activă din 2003. Artă marțială braziliană, acrobații și muzică pentru toate vârstele. Prima lecție gratuită.',
			aboutTitle: 'Despre Alemar Capoeira Chișinău: copii, adulți, comunitate',
			aboutDescription:
				'Capoeira în Chișinău pentru copii și adulți, la orice nivel de experiență. Antrenamente de trei ori pe săptămână și o comunitate activă din 2003.'
		},
		aboutPage: {
			pageTitle: 'DESPRE NOI',
			subtitle: 'Artă marțială, dans, muzică și o comunitate în Chișinău, din 2003.',
			history:
				'Alemar Capoeira Chișinău s-a deschis în 2003. A fost prima școală de capoeira din Moldova și rămâne cea mai veche care funcționează. În timp s-a format un grup apropiat în jurul ei. Pe oameni îi ține împreună respectul unul pentru altul, bucuria jocului și cei cu care se antrenează.',
			forTitle: 'PENTRU CINE?',
			kidsTitle: 'COPII',
			kidsBody:
				'Copiii pot începe de la 5 ani. Antrenamentul dezvoltă coordonarea, flexibilitatea și echilibrul, dar formează și caracterul. Copiii învață să vorbească între ei, să lucreze împreună și să treacă peste ce credeau că pot. Sala este sigură, atmosfera este jucăușă și muzica sună tot timpul. Nimeni nu concurează și nimeni nu pierde, pentru că în capoeira se joacă împreună.',
			adultsTitle: 'ADULȚI',
			adultsBody:
				'Vârsta, forma fizică și ce ai făcut înainte nu contează. Adulții care se antrenează devin mai puternici și mai flexibili și au o pauză reală de la ziua de lucru. Intri și într-un grup: trei antrenamente pe săptămână, evenimente, batizaduri și prietenii care continuă în afara sălii.',
			whyTitle: 'DE CE CAPOEIRA?',
			why: [
				'Antrenament pentru tot corpul: forță, flexibilitate, coordonare și echilibru',
				'Deschis pentru orice vârstă, orice gen și orice nivel de pregătire',
				'Muzică live la fiecare antrenament, cântată la berimbau, atabaque și pandeiro',
				'Artă marțială, dans și acrobații în același sport',
				'O comunitate cu evenimente regulate și batizaduri',
				'Prima lecție este gratuită'
			],
			compareSection: {
				title: 'CAPOEIRA VS ALTE ARTE MARȚIALE',
				subtitle:
					'Capoeira este singura artă marțială care pune lupta, muzica, dansul și acrobația în aceeași practică.',
				capoeiraAdds: 'Capoeira adaugă:',
				cards: {
					karate: {
						name: 'Karate',
						desc: 'Artă marțială japoneză construită pe lovituri precise, kata și lupte formale. Este disciplinată și puternică, și este și tăcută. Tehnica duce toată practica, fără muzică și fără dans.',
						contrast:
							'Percuția live dă ritmul fiecărui schimb. Ginga te ține în mișcare în loc să stai într-o poziție fixă, iar rădăcinile afro-braziliene se văd în mișcarea în sine.'
					},
					judo: {
						name: 'Judo',
						desc: 'Artă de grappling olimpică. Proiecții, baleiaje și control la sol, făcute cu multă precizie. Judo este construit ca să funcționeze, nu ca să arate bine, așa că nu are lovituri, nu are acrobații și nu are ritm după care să te iei.',
						contrast:
							'Lovituri explozive, fente în aer și eschive care transformă apărarea în ceva de privit. Muzica live curge sub tot antrenamentul.'
					},
					taekwondo: {
						name: 'Taekwondo',
						desc: 'Artă marțială olimpică știută pentru lovituri înalte și rapide și pentru competiții formale. Este atletică și iute. Este și construită în jurul câștigării unui meci, nu al jocului.',
						contrast:
							'Ginga, legănarea care nu se oprește niciodată, transformă loviturile într-o conversație. Roda ia locul tabelei de scor, așa că ai parteneri în loc de câștigători.'
					},
					mma: {
						name: 'MMA',
						desc: 'Artele marțiale mixte pun laolaltă loviturile și grappling-ul ca să obțină cel mai bun rezultat. Sunt practice și acoperă mult teren. Sunt și numai despre luptă, fără latură culturală și fără loc pentru expresie.',
						contrast:
							'Loc să te exprimi, o cultură în spatele sportului și roda. În cerc, fiecare joc este o reprezentație la care ia parte tot grupul.'
					}
				}
			},
			communityTitle: 'COMUNITATE',
			communityBody:
				'Capoeira nu se practică singur. Jocul are loc în roda, cercul în care se intră, iar cercul merge doar dacă participă toți. La Alemar Chișinău studenții se cunosc și cresc împreună, indiferent de vârstă, gen sau naționalitate.',
			instructorTitle: 'INSTRUCTORUL',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic practică capoeira de peste douăzeci de ani și conduce grupul Alemar Chișinău din 2003. Sute de studenți au trecut prin sala lui: copii și adulți, începători și avansați.',
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
			quote: 'Она началась как сопротивление, работает как бой и живёт через музыку.',
			body: 'Бразильское боевое искусство капоэйра соединяет боевые техники, акробатику и музыку. Она выросла из африканского сопротивления в Бразилии. Физическая сила и боевая стратегия работают вместе: два спортсмена стоят друг против друга и отвечают движением на движение, в реальном времени.',
			highlight: 'Спорт и целая культура вокруг него.'
		},
		classes: {
			title: 'ТРЕНИРОВКИ',
			subtitle: 'Любой возраст, любой уровень',
			days: 'Понедельник, Среда, Пятница',
			daysLabel: 'Дни',
			time: '18:30 – 20:30',
			timeLabel: 'Расписание',
			location: 'Calea Ieșilor 10, эт. 5',
			locationLabel: 'Место',
			free: 'Первое занятие бесплатно',
			cta: 'Прийти на тренировку'
		},
		gallery: { title: 'ГАЛЕРЕЯ' },
		events: {
			title: 'СОБЫТИЯ',
			subtitle: 'Батизадо, мастер-классы и выступления',
			noEvents: 'На данный момент мероприятий нет.',
			stayTuned: 'Следите за анонсами в нашем Facebook.',
			location: 'Место'
		},
		contact: {
			title: 'ПРИСОЕДИНЯЙСЯ',
			subtitle: 'Первый урок бесплатно. Приходи как есть.',
			instructor: 'Инструктор',
			phone: 'Телефон',
			address: 'Calea Ieșilor 10, эт. 5, Кишинёв',
			cta: 'Написать нам',
			facebook: 'Facebook',
			instagram: 'Instagram'
		},
		footer: {
			tagline: 'Бразильское боевое искусство. Акробатика. Музыка.',
			since: 'С 2003 года в Кишинёве'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Кишинёв: бразильское боевое искусство в Молдове',
			landingDescription:
				'Школа капоэйры в Кишинёве, работает с 2003 года. Бразильское боевое искусство, акробатика и музыка для всех возрастов. Первое занятие бесплатно.',
			aboutTitle: 'О школе Alemar Capoeira Кишинёв: дети, взрослые, сообщество',
			aboutDescription:
				'Капоэйра в Кишинёве для детей и взрослых, с любым опытом. Тренировки три раза в неделю и активное сообщество с 2003 года.'
		},
		aboutPage: {
			pageTitle: 'О НАС',
			subtitle: 'Боевое искусство, танец, музыка и сообщество в Кишинёве, с 2003 года.',
			history:
				'Alemar Capoeira Chișinău открылась в 2003 году. Это была первая школа капоэйры в Молдове, и она остаётся самой старой из работающих. За эти годы вокруг неё собралась близкая группа. Людей держат вместе уважение друг к другу, радость игры и те, с кем они тренируются.',
			forTitle: 'ДЛЯ КОГО?',
			kidsTitle: 'ДЕТИ',
			kidsBody:
				'Дети могут начать с 5 лет. Тренировки развивают координацию, гибкость и равновесие, а ещё формируют характер. Дети учатся разговаривать друг с другом, работать вместе и делать больше, чем считали возможным. В зале безопасно, настроение игровое, музыка звучит всё занятие. Никто не соревнуется и никто не проигрывает, потому что в капоэйру играют вместе.',
			adultsTitle: 'ВЗРОСЛЫЕ',
			adultsBody:
				'Возраст, физическая форма и прошлый опыт не имеют значения. Взрослые, которые тренируются, становятся сильнее и гибче и получают настоящий перерыв от рабочего дня. Вы также входите в группу: три тренировки в неделю, мероприятия, батизадо и дружба, которая продолжается за стенами зала.',
			whyTitle: 'ПОЧЕМУ КАПОЭЙРА?',
			why: [
				'Тренировка для всего тела: сила, гибкость, координация и баланс',
				'Открыто для любого возраста, любого пола и любой подготовки',
				'Живая музыка на каждой тренировке, на беримбау, атабаке и пандейро',
				'Боевое искусство, танец и акробатика в одном и том же виде спорта',
				'Сообщество с регулярными мероприятиями и батизадо',
				'Первое занятие бесплатно'
			],
			compareSection: {
				title: 'КАПОЭЙРА VS ДРУГИЕ БОЕВЫЕ ИСКУССТВА',
				subtitle: 'Только капоэйра соединяет бой, музыку, танец и акробатику в одной практике.',
				capoeiraAdds: 'Капоэйра добавляет:',
				cards: {
					karate: {
						name: 'Карате',
						desc: 'Японское боевое искусство, построенное на точных ударах, ката и формальных поединках. Оно дисциплинированное и мощное, и ещё оно молчаливое. Всю практику несёт техника, без музыки и без танца.',
						contrast:
							'Живая перкуссия задаёт темп каждого обмена. Гинга держит вас в движении вместо статичной стойки, а афро-бразильские корни видны в самом движении.'
					},
					judo: {
						name: 'Дзюдо',
						desc: 'Олимпийская борьба. Броски, подсечки и контроль на земле, сделанные очень точно. Дзюдо построено, чтобы работать, а не чтобы красиво выглядеть, поэтому в нём нет ударов, нет акробатики и нет ритма.',
						contrast:
							'Взрывные удары, финты в воздухе и уходы, которые превращают защиту в зрелище. Живая музыка идёт под всей тренировкой.'
					},
					taekwondo: {
						name: 'Тхэквондо',
						desc: 'Олимпийское боевое искусство, известное высокими быстрыми ударами и формальными соревнованиями. Оно атлетичное и быстрое. Оно ещё и построено вокруг победы в матче, а не вокруг игры.',
						contrast:
							'Гинга, покачивание, которое не останавливается, превращает удары в разговор. Рода занимает место табло, поэтому у вас есть партнёры, а не победители.'
					},
					mma: {
						name: 'ММА',
						desc: 'Смешанные боевые искусства складывают удары и борьбу, чтобы получить лучший результат. Они практичны и охватывают многое. Они ещё и только про бой, без культурной стороны и без места для выражения.',
						contrast:
							'Место, чтобы выразить себя, культура за спортом и рода. В круге каждая игра становится выступлением, в котором участвует вся группа.'
					}
				}
			},
			communityTitle: 'СООБЩЕСТВО',
			communityBody:
				'Капоэйрой нельзя заниматься в одиночку. Игра идёт в роде, в круге, и круг работает только если участвуют все. В Alemar Chișinău студенты знают друг друга и растут вместе, независимо от возраста, пола или национальности.',
			instructorTitle: 'ИНСТРУКТОР',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Сержиу Мелник занимается капоэйрой больше двадцати лет и ведёт группу Alemar Chișinău с 2003 года. Через его занятия прошли сотни студентов: дети и взрослые, новички и продвинутые.',
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
			quote: 'It began as resistance, it works as a fight, and it lives through music.',
			body: 'Capoeira is a Brazilian martial art that mixes fighting technique, acrobatics, and music. It grew out of African resistance in Brazil. Physical power and combat strategy work together: two athletes face each other and answer move for move, in real time.',
			highlight: 'A sport, and a whole culture around it.'
		},
		classes: {
			title: 'CLASSES',
			subtitle: 'Any age, any level',
			days: 'Monday, Wednesday, Friday',
			daysLabel: 'Days',
			time: '18:30 – 20:30',
			timeLabel: 'Schedule',
			location: 'Calea Ieșilor 10, 5th floor',
			locationLabel: 'Location',
			free: 'First class is free',
			cta: 'Come try a class'
		},
		gallery: { title: 'GALLERY' },
		events: {
			title: 'EVENTS',
			subtitle: 'Batizados, workshops and showcases',
			noEvents: 'No events planned at the moment.',
			stayTuned: 'Follow us on Facebook for announcements.',
			location: 'Location'
		},
		contact: {
			title: 'JOIN US',
			subtitle: 'First class is free. Come as you are.',
			instructor: 'Instructor',
			phone: 'Phone',
			address: 'Calea Ieșilor 10, 5th floor, Chișinău',
			cta: 'Get in touch',
			facebook: 'Facebook',
			instagram: 'Instagram'
		},
		footer: {
			tagline: 'Brazilian Martial Art. Acrobatics. Music.',
			since: 'Active since 2003 in Chișinău'
		},
		meta: {
			landingTitle: 'Alemar Capoeira Chișinău: Brazilian martial art in Moldova',
			landingDescription:
				'Capoeira school in Chișinău, active since 2003. Brazilian martial art, acrobatics and music for all ages. First class free.',
			aboutTitle: 'About Alemar Capoeira Chișinău: kids, adults, community',
			aboutDescription:
				'Capoeira in Chișinău for kids and adults, at any level of experience. Three sessions a week and an active community since 2003.'
		},
		aboutPage: {
			pageTitle: 'ABOUT US',
			subtitle: 'Martial art, dance, music, and a community in Chișinău since 2003.',
			history:
				'Alemar Capoeira Chișinău opened in 2003. It was the first capoeira school in Moldova and it is still the oldest one running. Over the years a close group formed around it. What holds the group together is respect for each other, the fun of the game, and the people you train with.',
			forTitle: 'WHO IS IT FOR?',
			kidsTitle: 'KIDS',
			kidsBody:
				'Children can start at age 5. Training builds coordination, flexibility, and balance, and it builds character too. Kids learn to talk to each other, work together, and get past what they thought they could do. The room is safe, the mood is playful, and the music runs the whole time. Nobody competes and nobody loses, because capoeira is played together.',
			adultsTitle: 'ADULTS',
			adultsBody:
				'Your age, your fitness, and what you have done before do not matter. Adults who train here get stronger and more flexible, and they get a real break from the working day. You also join a group: three sessions a week, events, batizados, and friendships that carry on outside the gym.',
			whyTitle: 'WHY CAPOEIRA?',
			why: [
				'A full body workout: strength, flexibility, coordination, and balance',
				'Open to any age, any gender, and any level of fitness',
				'Live music at every session, played on berimbau, atabaque, and pandeiro',
				'Martial art, dance, and acrobatics in the same sport',
				'A community with regular events and batizados',
				'First class is free'
			],
			compareSection: {
				title: 'CAPOEIRA VS OTHER MARTIAL ARTS',
				subtitle:
					'Capoeira is the only martial art that puts combat, music, dance, and acrobatics in the same practice.',
				capoeiraAdds: 'Capoeira adds:',
				cards: {
					karate: {
						name: 'Karate',
						desc: 'A striking art from Japan, built on precision, katas, and formal sparring. It is powerful and disciplined, and it is also silent. Technique carries the whole practice, without music or dance.',
						contrast:
							'Live percussion sets the pace of every exchange. The ginga keeps you moving instead of holding a stance, and the Afro-Brazilian roots show in the movement itself.'
					},
					judo: {
						name: 'Judo',
						desc: 'An Olympic grappling art. Throws, sweeps, and ground control, done with a lot of precision. Judo is built to work rather than to look good, so it has no strikes, no acrobatics, and no rhythm to follow.',
						contrast:
							'Kicks, feints in the air, and escapes that turn defense into something worth watching. Live music runs under the whole session.'
					},
					taekwondo: {
						name: 'Taekwondo',
						desc: 'An Olympic art known for high, fast kicks and formal competition. It is athletic and quick. It is also built around winning a match rather than playing a game.',
						contrast:
							'The ginga, a steady sway that never stops, turns kicks into a conversation. The roda takes the place of the scoreboard, so you get partners instead of winners.'
					},
					mma: {
						name: 'MMA',
						desc: 'Mixed martial arts puts striking and grappling together to get the most effective result. It is practical and it covers a lot of ground. It is also only about fighting, with no cultural side and no room for expression.',
						contrast:
							'Room to express yourself, a culture behind the sport, and the roda. In the circle every game is a performance the whole group takes part in.'
					}
				}
			},
			communityTitle: 'COMMUNITY',
			communityBody:
				'You cannot practice capoeira on your own. The game happens in the roda, the circle, and the circle only works if everyone in it takes part. At Alemar Chișinău the students know each other and grow together, whatever their age, gender, or background.',
			instructorTitle: 'THE INSTRUCTOR',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic has trained in capoeira for more than twenty years and has led the Alemar Chișinău group since 2003. Hundreds of students have come through his classes: children and adults, first-timers and advanced.',
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
