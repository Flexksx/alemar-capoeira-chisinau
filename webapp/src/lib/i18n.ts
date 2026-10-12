import { getContext, setContext } from 'svelte';
import type { Audience } from './audiences';

export type Language = 'ro' | 'ru' | 'en';

export interface Translations {
	nav: { about: string; classes: string; events: string; contact: string; songs: string };
	hero: { tagline: string; line1: string; line2: string; cta: string; since: string };
	about: { title: string; quote: string; body: string; highlight: string; more: string };
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
	gallery: { title: string; close: string; previous: string; next: string; item: string };
	ui: { language: string; menu: string; close: string; pauseVideo: string; playVideo: string };
	events: {
		title: string;
		subtitle: string;
		noEvents: string;
		stayTuned: string;
		location: string;
	};
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
	audiences: {
		title: string;
		subtitle: string;
		more: string;
		cards: Record<Audience, { title: string; body: string }>;
	};
	audiencePage: { faqTitle: string; otherTitle: string; home: string };
	meta: {
		landingTitle: string;
		landingDescription: string;
		aboutTitle: string;
		aboutDescription: string;
	};
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
			body: 'Capoeira este o artă marțială braziliană care îmbină tehnici de luptă, acrobații și muzică. S-a născut din rezistența africană în Brazilia. Jocul cere forță și strategie: doi sportivi stau față în față și își răspund mișcare cu mișcare.',
			highlight: 'Un sport și o cultură întreagă în jurul lui.',
			more: 'Povestea noastră'
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
		gallery: {
			title: 'GALERIE',
			close: 'Închide',
			previous: 'Anterior',
			next: 'Următor',
			item: 'Element'
		},
		ui: {
			language: 'Limba',
			menu: 'Meniu',
			close: 'Închide',
			pauseVideo: 'Oprește video',
			playVideo: 'Pornește video'
		},
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
		audiences: {
			title: 'PENTRU CINE',
			subtitle: 'Copiii și adulții se antrenează în același grup.',
			more: 'Află mai mult',
			cards: {
				kids: {
					title: 'Copii',
					body: 'De la 5 ani. Coordonare, încredere și muzică, într-o artă marțială fără agresivitate.'
				},
				adults: {
					title: 'Adulți',
					body: 'Mobilitate și forță pentru tot corpul. Poți începe de la zero, la orice vârstă.'
				},
				culture: {
					title: 'Cultură braziliană',
					body: 'Instrumente, cântece în portugheză, roda și batizados.'
				}
			}
		},
		audiencePage: {
			faqTitle: 'ÎNTREBĂRI FRECVENTE',
			otherTitle: 'VEZI ȘI',
			home: 'Acasă'
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
				'Alemar Capoeira Chișinău s-a deschis în 2003. A fost prima școală de capoeira din Moldova și este cea mai veche care funcționează și azi. În timp, în jurul ei s-a format un grup apropiat, ținut împreună de respect reciproc și de bucuria jocului.',
			forTitle: 'PENTRU CINE?',
			kidsTitle: 'COPII',
			kidsBody:
				'Copiii pot începe de la 5 ani. Antrenamentul le dezvoltă coordonarea, flexibilitatea și echilibrul și le formează caracterul: copiii învață să lucreze împreună și să facă mișcări pe care nu credeau că le pot face. Sala este sigură și atmosfera jucăușă, iar muzica sună tot antrenamentul. Nimeni nu concurează și nimeni nu pierde, pentru că în capoeira se joacă împreună.',
			adultsTitle: 'ADULȚI',
			adultsBody:
				'Vârsta, forma fizică și ce ai făcut înainte nu contează. Adulții care se antrenează devin mai puternici și mai flexibili și au o pauză reală de la ziua de lucru. Devii și parte dintr-un grup: trei antrenamente pe săptămână, evenimente, batizados și prietenii care continuă în afara sălii.',
			whyTitle: 'DE CE CAPOEIRA?',
			why: [
				'Antrenament pentru tot corpul: forță, flexibilitate, coordonare și echilibru',
				'Deschis pentru orice vârstă, orice gen și orice nivel de pregătire',
				'Muzică live la fiecare antrenament, cântată la berimbau, atabaque și pandeiro',
				'Artă marțială, dans și acrobații în același sport',
				'O comunitate cu evenimente regulate și batizados',
				'Prima lecție este gratuită'
			],
			compareSection: {
				title: 'CAPOEIRA VS ALTE ARTE MARȚIALE',
				subtitle: 'Capoeira pune lupta, muzica, dansul și acrobația în aceeași practică.',
				capoeiraAdds: 'Capoeira adaugă:',
				cards: {
					karate: {
						name: 'Karate',
						desc: 'Artă marțială japoneză construită pe lovituri precise, kata și lupte formale. Este disciplinată și puternică. Se practică în liniște, fără muzică și fără dans.',
						contrast:
							'Percuția live dă ritmul fiecărui schimb. Ginga te ține în mișcare în loc să stai într-o poziție fixă, iar mișcările vin din tradiția afro-braziliană.'
					},
					judo: {
						name: 'Judo',
						desc: 'Artă marțială olimpică de grappling: proiecții, baleiaje și control la sol, executate cu precizie. Judo nu are lovituri, acrobații sau ritm muzical.',
						contrast:
							'Lovituri, fente și eschive, multe dintre ele acrobatice. Tot antrenamentul se face pe muzică live.'
					},
					taekwondo: {
						name: 'Taekwondo',
						desc: 'Artă marțială olimpică, cunoscută pentru lovituri înalte și rapide. Este atletică, iar antrenamentul este construit în jurul competițiilor formale și al câștigării meciului.',
						contrast:
							'Ginga, legănarea continuă a capoeirei, face din lovituri un schimb între doi parteneri. În roda nu se ține scorul și nu există câștigători.'
					},
					mma: {
						name: 'MMA',
						desc: 'Artele marțiale mixte combină loviturile și grappling-ul ca să obțină cel mai eficient rezultat. Sunt practice și acoperă multe tehnici. Accentul cade doar pe luptă, fără latură culturală și fără loc pentru exprimare.',
						contrast:
							'O cultură în spatele sportului. În roda, fiecare joc este o formă de exprimare la care ia parte tot grupul.'
					}
				}
			},
			communityTitle: 'COMUNITATE',
			communityBody:
				'Capoeira nu se practică de unul singur. Jocul are loc în roda, un cerc care funcționează doar dacă participă toți. La Alemar Chișinău elevii se cunosc între ei și progresează împreună, indiferent de vârstă, gen sau naționalitate.',
			instructorTitle: 'INSTRUCTORUL',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic practică capoeira de peste douăzeci de ani și conduce grupul Alemar Chișinău din 2003.',
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
			body: 'Капоэйра — бразильское боевое искусство, которое соединяет боевые техники, акробатику и музыку. Она выросла из сопротивления африканцев в Бразилии. Игра требует силы и стратегии: два спортсмена стоят друг против друга и отвечают движением на движение.',
			highlight: 'Спорт и целая культура вокруг него.',
			more: 'Наша история'
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
		gallery: {
			title: 'ГАЛЕРЕЯ',
			close: 'Закрыть',
			previous: 'Назад',
			next: 'Вперёд',
			item: 'Элемент'
		},
		ui: {
			language: 'Язык',
			menu: 'Меню',
			close: 'Закрыть',
			pauseVideo: 'Остановить видео',
			playVideo: 'Включить видео'
		},
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
		audiences: {
			title: 'ДЛЯ КОГО',
			subtitle: 'Дети и взрослые тренируются в одной группе.',
			more: 'Подробнее',
			cards: {
				kids: {
					title: 'Дети',
					body: 'С 5 лет. Координация, уверенность и музыка в боевом искусстве без агрессии.'
				},
				adults: {
					title: 'Взрослые',
					body: 'Подвижность и сила для всего тела. Можно начать с нуля, в любом возрасте.'
				},
				culture: {
					title: 'Бразильская культура',
					body: 'Инструменты, песни на португальском, рода и батизадо.'
				}
			}
		},
		audiencePage: {
			faqTitle: 'ЧАСТЫЕ ВОПРОСЫ',
			otherTitle: 'СМОТРИТЕ ТАКЖЕ',
			home: 'Главная'
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
				'Alemar Capoeira Chișinău открылась в 2003 году. Это была первая школа капоэйры в Молдове, и она остаётся самой старой из работающих. За эти годы вокруг неё собралась близкая группа, которую объединяют уважение друг к другу и радость игры.',
			forTitle: 'ДЛЯ КОГО?',
			kidsTitle: 'ДЕТИ',
			kidsBody:
				'Дети могут начать с 5 лет. Тренировки развивают координацию, гибкость и равновесие и воспитывают характер: дети учатся работать вместе и делать то, что раньше казалось им невозможным. В зале безопасно и весело, а музыка звучит всё занятие. Никто не соревнуется и никто не проигрывает, потому что в капоэйру играют вместе.',
			adultsTitle: 'ВЗРОСЛЫЕ',
			adultsBody:
				'Возраст, физическая форма и прошлый опыт не имеют значения. Взрослые, которые тренируются, становятся сильнее и гибче и по-настоящему отдыхают от рабочего дня. Вы также становитесь частью группы: три тренировки в неделю, мероприятия, батизадо и дружба, которая продолжается за стенами зала.',
			whyTitle: 'ПОЧЕМУ КАПОЭЙРА?',
			why: [
				'Тренировка для всего тела: сила, гибкость, координация и баланс',
				'Открыто для любого возраста, любого пола и любой подготовки',
				'Живая музыка на каждой тренировке, на беримбау, атабаке и пандейро',
				'Боевое искусство, танец и акробатика в одном виде спорта',
				'Сообщество с регулярными мероприятиями и батизадо',
				'Первое занятие бесплатно'
			],
			compareSection: {
				title: 'КАПОЭЙРА VS ДРУГИЕ БОЕВЫЕ ИСКУССТВА',
				subtitle: 'Капоэйра соединяет бой, музыку, танец и акробатику в одной практике.',
				capoeiraAdds: 'Капоэйра добавляет:',
				cards: {
					karate: {
						name: 'Карате',
						desc: 'Японское боевое искусство, построенное на точных ударах, ката и формальных поединках. Оно дисциплинированное и мощное. Тренируются в тишине, без музыки и танца.',
						contrast:
							'Живая перкуссия задаёт темп каждого обмена. Жинга держит вас в движении вместо статичной стойки, а сами движения идут из афро-бразильской традиции.'
					},
					judo: {
						name: 'Дзюдо',
						desc: 'Олимпийская борьба: броски, подсечки и контроль в партере, выполненные очень точно. В дзюдо нет ударов, акробатики и музыкального ритма.',
						contrast:
							'Удары, финты и уходы, многие из них акробатические. Вся тренировка идёт под живую музыку.'
					},
					taekwondo: {
						name: 'Тхэквондо',
						desc: 'Олимпийское боевое искусство, известное высокими и быстрыми ударами ногами. Оно атлетичное, а тренировки построены вокруг формальных соревнований и победы в поединке.',
						contrast:
							'Жинга, постоянное покачивание капоэйры, превращает удары в обмен между двумя партнёрами. В роде не ведут счёт и нет победителей.'
					},
					mma: {
						name: 'ММА',
						desc: 'Смешанные боевые искусства соединяют удары и борьбу ради максимальной эффективности. Они практичны и охватывают много техник. Всё внимание отдано бою, без культурной стороны и без места для самовыражения.',
						contrast:
							'Культура за спортом. В роде каждая игра становится способом выразить себя, и в ней участвует вся группа.'
					}
				}
			},
			communityTitle: 'СООБЩЕСТВО',
			communityBody:
				'Капоэйрой нельзя заниматься в одиночку. Игра идёт в роде, круге, который работает, только если участвуют все. В Alemar Chișinău ученики знают друг друга и вместе развиваются, независимо от возраста, пола или национальности.',
			instructorTitle: 'ИНСТРУКТОР',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Сержиу Мелник занимается капоэйрой больше двадцати лет и ведёт группу Alemar Chișinău с 2003 года.',
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
			tagline: 'Brazilian martial art. Acrobatics. Music.',
			line1: 'CAPOEIRA',
			line2: 'IN CHIȘINĂU',
			cta: 'First class free',
			since: 'Active since 2003'
		},
		about: {
			title: 'WHAT IS CAPOEIRA?',
			quote: 'It began as resistance, it works as a fight, and it lives through music.',
			body: 'Capoeira is a Brazilian martial art that mixes fighting technique, acrobatics, and music. It grew out of African resistance in Brazil. The game takes strength and strategy: two athletes face each other and answer move for move.',
			highlight: 'A sport, and a whole culture around it.',
			more: 'Our story'
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
		gallery: {
			title: 'GALLERY',
			close: 'Close',
			previous: 'Previous',
			next: 'Next',
			item: 'Item'
		},
		ui: {
			language: 'Language',
			menu: 'Menu',
			close: 'Close',
			pauseVideo: 'Pause video',
			playVideo: 'Play video'
		},
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
			tagline: 'Brazilian martial art. Acrobatics. Music.',
			since: 'Active since 2003 in Chișinău'
		},
		audiences: {
			title: 'WHO IT IS FOR',
			subtitle: 'Children and adults train in the same group.',
			more: 'Read more',
			cards: {
				kids: {
					title: 'Kids',
					body: 'From age 5. Coordination, confidence and music, in a martial art without aggression.'
				},
				adults: {
					title: 'Adults',
					body: 'Mobility and strength for the whole body. You can start from zero, at any age.'
				},
				culture: {
					title: 'Brazilian culture',
					body: 'Instruments, songs in Portuguese, the roda and batizados.'
				}
			}
		},
		audiencePage: {
			faqTitle: 'FREQUENTLY ASKED QUESTIONS',
			otherTitle: 'SEE ALSO',
			home: 'Home'
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
				'Alemar Capoeira Chișinău opened in 2003. It was the first capoeira school in Moldova and it is still the oldest one running. Over the years a close group formed around it, held together by mutual respect and the fun of the game.',
			forTitle: 'WHO IS IT FOR?',
			kidsTitle: 'KIDS',
			kidsBody:
				'Children can start at age 5. Training builds coordination, flexibility, and balance, and it shapes character: kids learn to work together and to do moves they did not think they could. The room is safe and the mood is playful, with music the whole time. Nobody competes and nobody loses, because capoeira is played together.',
			adultsTitle: 'ADULTS',
			adultsBody:
				'Your age, your fitness, and what you have done before do not matter. Adults who train here get stronger and more flexible, and they get a real break from the working day. You also join a group: three sessions a week, events, batizados, and friendships that carry on outside the gym.',
			whyTitle: 'WHY CAPOEIRA?',
			why: [
				'A full-body workout: strength, flexibility, coordination, and balance',
				'Open to any age, any gender, and any level of fitness',
				'Live music at every session, played on berimbau, atabaque, and pandeiro',
				'Martial art, dance, and acrobatics in the same sport',
				'A community with regular events and batizados',
				'First class is free'
			],
			compareSection: {
				title: 'CAPOEIRA VS OTHER MARTIAL ARTS',
				subtitle: 'Capoeira puts combat, music, dance, and acrobatics in the same practice.',
				capoeiraAdds: 'Capoeira adds:',
				cards: {
					karate: {
						name: 'Karate',
						desc: 'A striking art from Japan, built on precision, kata, and formal sparring. It is powerful and disciplined, and it is practiced in silence, with no music or dance.',
						contrast:
							'Live percussion sets the pace of every exchange. The ginga keeps you moving instead of holding a stance, and the moves come from Afro-Brazilian tradition.'
					},
					judo: {
						name: 'Judo',
						desc: 'An Olympic grappling art: throws, sweeps, and ground control, done with precision. Judo has no strikes, acrobatics, or musical rhythm.',
						contrast:
							'Kicks, feints, and escapes, many of them acrobatic. The whole session runs to live music.'
					},
					taekwondo: {
						name: 'Taekwondo',
						desc: 'An Olympic art known for high, fast kicks. It is athletic, and training is built around formal competition and winning the match.',
						contrast:
							'The ginga, the constant sway of capoeira, makes kicks an exchange between two partners. The roda keeps no score and has no winners.'
					},
					mma: {
						name: 'MMA',
						desc: 'Mixed martial arts combines striking and grappling to get the most effective result. It is practical and covers a lot of technique. The focus is on fighting alone, with no cultural side and no room for self-expression.',
						contrast:
							'A culture behind the sport. In the roda, every game is a form of self-expression that the whole group takes part in.'
					}
				}
			},
			communityTitle: 'COMMUNITY',
			communityBody:
				'You cannot practice capoeira on your own. The game happens in the roda, a circle that only works if everyone in it takes part. At Alemar Chișinău the students know each other and progress together, whatever their age, gender, or nationality.',
			instructorTitle: 'THE INSTRUCTOR',
			instructorName: 'Sergiu Melnic',
			instructorBio:
				'Sergiu Melnic has trained in capoeira for more than twenty years and has led the Alemar Chișinău group since 2003.',
			ctaText: 'Come to a class',
			backToHome: 'Back to home page'
		}
	}
};

const LANGUAGE_KEY = Symbol('language');

export class LanguageStore {
	#getLang: () => Language;

	constructor(getLang: () => Language) {
		this.#getLang = getLang;
	}

	get current(): Language {
		return this.#getLang();
	}

	get t(): Translations {
		return translations[this.current];
	}
}

export const setLanguageStore = (getLang: () => Language) => {
	const store = new LanguageStore(getLang);
	setContext(LANGUAGE_KEY, store);
	return store;
};

export const useLanguageStore = () => getContext<LanguageStore>(LANGUAGE_KEY);
