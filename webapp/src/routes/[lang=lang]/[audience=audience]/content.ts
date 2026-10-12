import type { Audience } from '$lib/audiences';
import type { Language } from '$lib/i18n';

export type AudienceContent = {
	metaTitle: string;
	metaDescription: string;
	title: string;
	lead: string;
	sections: { title: string; body: string }[];
	faq: { question: string; answer: string }[];
};

export const content: Record<Language, Record<Audience, AudienceContent>> = {
	ro: {
		kids: {
			metaTitle: 'Capoeira pentru copii în Chișinău: artă marțială fără agresivitate',
			metaDescription:
				'Capoeira pentru copii de la 5 ani în Chișinău. Coordonare, echilibru, încredere și muzică live, fără meciuri și fără clasamente. Prima lecție este gratuită.',
			title: 'Capoeira pentru copii',
			lead: 'O activitate extrașcolară pentru copii de la 5 ani, cu mișcare, acrobații și muzică live. În capoeira nimeni nu câștigă și nimeni nu pierde.',
			sections: [
				{
					title: 'O artă marțială fără agresivitate',
					body: 'În capoeira, doi oameni joacă împreună în mijlocul unui cerc. Unul dă o lovitură controlată, celălalt se ferește și răspunde cu o mișcare a lui. Așa copiii învață să-și controleze forța și să aibă grijă de partener. Nu există meciuri, puncte sau clasamente, deci nu există nici presiunea de a bate pe cineva.'
				},
				{
					title: 'Ce dezvoltă copilul',
					body: 'Corpul lucrează tot timpul: coordonare, flexibilitate, echilibru și forță. Copiii învață roata, statul în mâini și alte acrobații, iar fiecare reușită le dă curaj pentru următoarea. Antrenamentul formează și caracterul: copiii învață să lucreze în echipă și să facă lucruri pe care nu credeau că le pot face.'
				},
				{
					title: 'Muzică la fiecare antrenament',
					body: 'Fiecare antrenament are muzică live, cântată la berimbau, atabaque și pandeiro. Copiii cântă cântece în portugheză, bat ritmul din palme și învață să cânte la instrumente. Fără să-și dea seama, învață și primele cuvinte în portugheză.'
				},
				{
					title: 'Copiii și părinții în același grup',
					body: 'Copiii se antrenează în același grup cu adulții, luni, miercuri și vineri, de la 18:30 la 20:30. Dacă vrei, poți intra și tu în antrenament, alături de copilul tău.'
				}
			],
			faq: [
				{
					question: 'De la ce vârstă poate începe copilul?',
					answer: 'Copiii pot începe de la 5 ani.'
				},
				{
					question: 'Este capoeira periculoasă sau agresivă?',
					answer:
						'Loviturile sunt controlate și trec pe lângă partener. Copiii învață întâi să se ferească și să se miște în siguranță. Atmosfera din sală este jucăușă, iar instructorul urmărește tot timpul grupul.'
				},
				{
					question: 'Copilul are nevoie de pregătire sportivă?',
					answer:
						'Nu. Copilul începe de la nivelul lui. Flexibilitatea, forța și acrobațiile vin cu timpul.'
				},
				{
					question: 'Pot să mă antrenez împreună cu copilul?',
					answer:
						'Da. Copiii și adulții se antrenează în același grup, așa că poți veni la antrenament împreună cu copilul.'
				},
				{
					question: 'Cât costă?',
					answer:
						'Prima lecție este gratuită. Pentru prețul abonamentului, sună-l pe instructor la 079 70 70 72.'
				},
				{
					question: 'Ce trebuie să aducă copilul la prima lecție?',
					answer: 'Haine comode de sport și o sticlă cu apă.'
				}
			]
		},
		adults: {
			metaTitle: 'Capoeira pentru adulți în Chișinău: mobilitate, forță și muzică',
			metaDescription:
				'Antrenamente pentru adulți în Chișinău, inclusiv începători: mobilitate, flexibilitate și forță prin capoeira, cu muzică live. Prima lecție este gratuită.',
			title: 'Capoeira pentru adulți',
			lead: 'Un antrenament pentru tot corpul, cu muzică live și cu un partener în față. Poți începe de la zero, la orice vârstă.',
			sections: [
				{
					title: 'Mobilitate și forță',
					body: 'Ginga, pasul de bază al capoeirei, te ține în mișcare tot antrenamentul. Loviturile, pozițiile joase și sprijinul pe mâini lucrează șoldurile, umerii și spatele. Forța vine din greutatea propriului corp. După câteva luni te miști mai ușor și ajungi mai jos fără efort.'
				},
				{
					title: 'Începi de la zero',
					body: 'Vârsta, forma fizică și ce ai făcut înainte nu contează. Fiecare lucrează la nivelul lui, iar mișcările grele vin după cele simple.'
				},
				{
					title: 'Altfel decât la sală',
					body: 'La sală repeți aceleași exerciții de unul singur. În capoeira te miști cu un partener, pe ritmul muzicii, și fiecare joc iese altfel. Trebuie să fii atent la celălalt, așa că mintea are și ea o pauză reală de la ziua de lucru.'
				},
				{
					title: 'Comunitate',
					body: 'Te antrenezi de trei ori pe săptămână cu aceiași oameni. Mergem împreună la evenimente și batizados în Chișinău și în alte orașe. Multe prietenii continuă și în afara sălii.'
				}
			],
			faq: [
				{
					question: 'Am peste 30 sau 40 de ani. Pot să încep?',
					answer:
						'Da. Vârsta nu contează. Începi cu mișcările simple și crești ritmul când corpul este pregătit.'
				},
				{
					question: 'Trebuie să fiu flexibil sau în formă?',
					answer: 'Nu. Flexibilitatea și forța vin cu antrenamentul.'
				},
				{
					question: 'Când au loc antrenamentele?',
					answer: 'Luni, miercuri și vineri, de la 18:30 la 20:30, pe Calea Ieșilor 10, et. 5.'
				},
				{
					question: 'Trebuie să știu portugheză sau să cânt?',
					answer:
						'Nu. Cântecele se învață la antrenament. Textele lor sunt și pe acest site, la secțiunea Cântece.'
				},
				{
					question: 'Cât costă?',
					answer:
						'Prima lecție este gratuită. Pentru prețul abonamentului, sună-l pe instructor la 079 70 70 72.'
				},
				{
					question: 'Ce îmbrac la prima lecție?',
					answer: 'Haine comode de sport și o sticlă cu apă.'
				}
			]
		},
		culture: {
			metaTitle: 'Cultură braziliană în Chișinău: capoeira, muzică și roda',
			metaDescription:
				'Muzica și tradițiile afro-braziliene în Chișinău: berimbau, atabaque, pandeiro, cântece în portugheză, roda și batizados. Alemar Capoeira Chișinău, din 2003.',
			title: 'Cultură braziliană în Chișinău',
			lead: 'Capoeira face parte din cultura Braziliei. La Alemar o cunoști prin muzică, cântece în portugheză și jocul din roda.',
			sections: [
				{
					title: 'Rădăcini afro-braziliene',
					body: 'Capoeira s-a născut în Brazilia, printre africanii aduși acolo ca sclavi. Lupta, dansul și muzica au crescut împreună, ca formă de rezistență. Din 2014, roda de capoeira este în patrimoniul cultural imaterial UNESCO.'
				},
				{
					title: 'Instrumentele',
					body: 'Berimbau este un arc cu o singură coardă și o tărtăcuță care amplifică sunetul. El conduce roda și dă ritmul jocului. Atabaque este o tobă înaltă, iar pandeiro este o tamburină. La antrenamente înveți să cânți la toate trei.'
				},
				{
					title: 'Cântece în portugheză',
					body: 'Cântecele de capoeira povestesc istoria Braziliei și vorbesc despre mari maeștri și despre viața de zi cu zi. Unul cântă, iar grupul răspunde în cor. Pe acest site găsești textele cântecelor pe care le cântăm, cu pronunție și traducere în română.'
				},
				{
					title: 'Roda și batizado',
					body: 'Roda este cercul în care se joacă. Grupul cântă și bate din palme, iar doi oameni joacă în mijloc. Batizado este sărbătoarea grupului, cu roda, workshopuri și spectacole. Mergem și la evenimente în alte orașe, de exemplu București și Tiraspol.'
				}
			],
			faq: [
				{
					question: 'Ce este capoeira?',
					answer:
						'Capoeira este o artă marțială braziliană care pune împreună lupta, acrobațiile, dansul și muzica live. Se joacă în doi, în mijlocul unui cerc numit roda.'
				},
				{
					question: 'Capoeira este dans sau artă marțială?',
					answer:
						'Este o artă marțială, dar se practică pe muzică și are multe elemente de dans. De aceea o aleg și oamenii care vin pentru cultura braziliană.'
				},
				{
					question: 'Trebuie să vorbesc portugheză?',
					answer:
						'Nu. Cântecele se învață la antrenament, iar textele cu traducere în română sunt pe acest site.'
				},
				{
					question: 'Ce este un batizado?',
					answer:
						'Batizado este sărbătoarea grupului. Programul include roda, workshopuri și spectacole.'
				},
				{
					question: 'Unde aflu de evenimente?',
					answer:
						'Evenimentele apar pe pagina principală a site-ului și pe pagina noastră de Facebook, @capoeiramd.'
				}
			]
		}
	},
	ru: {
		kids: {
			metaTitle: 'Капоэйра для детей в Кишинёве: боевое искусство без агрессии',
			metaDescription:
				'Капоэйра для детей от 5 лет в Кишинёве. Координация, равновесие, уверенность в себе и живая музыка, без соревнований и рейтингов. Первое занятие бесплатно.',
			title: 'Капоэйра для детей',
			lead: 'Внешкольное занятие для детей от 5 лет: движение, акробатика и живая музыка. В капоэйре никто не выигрывает и никто не проигрывает.',
			sections: [
				{
					title: 'Боевое искусство без агрессии',
					body: 'В капоэйре двое играют вместе в центре круга. Один делает контролируемый удар, другой уходит от него и отвечает своим движением. Так дети учатся контролировать силу и беречь партнёра. Здесь нет боёв на очки и рейтингов, а значит, нет и давления, что нужно кого-то победить.'
				},
				{
					title: 'Что развивают тренировки',
					body: 'Всё тело работает постоянно: координация, гибкость, равновесие и сила. Дети учатся делать колесо, стойку на руках и другие акробатические элементы, и каждый успех даёт смелость для следующего. Тренировки воспитывают и характер: дети учатся работать в команде и делать то, что раньше казалось им невозможным.'
				},
				{
					title: 'Музыка на каждой тренировке',
					body: 'На каждой тренировке звучит живая музыка: беримбау, атабаке и пандейро. Дети поют песни на португальском, хлопают в ритм и учатся играть на инструментах. Заодно они запоминают первые слова на португальском.'
				},
				{
					title: 'Дети и родители в одной группе',
					body: 'Дети тренируются в одной группе со взрослыми, по понедельникам, средам и пятницам, с 18:30 до 20:30. Если хотите, можете тренироваться вместе с ребёнком.'
				}
			],
			faq: [
				{
					question: 'С какого возраста ребёнок может начать?',
					answer: 'Дети могут начать с 5 лет.'
				},
				{
					question: 'Капоэйра опасна или агрессивна?',
					answer:
						'Удары контролируются и проходят мимо партнёра. Сначала дети учатся уходить от ударов и двигаться безопасно. В зале игровая атмосфера, а инструктор всё время следит за группой.'
				},
				{
					question: 'Нужна ли ребёнку спортивная подготовка?',
					answer:
						'Нет. Ребёнок начинает со своего уровня. Гибкость, сила и акробатика приходят со временем.'
				},
				{
					question: 'Могу ли я тренироваться вместе с ребёнком?',
					answer:
						'Да. Дети и взрослые тренируются в одной группе, поэтому вы можете приходить на тренировки вместе.'
				},
				{
					question: 'Сколько это стоит?',
					answer:
						'Первое занятие бесплатно. Стоимость абонемента уточняйте у инструктора по телефону 079 70 70 72.'
				},
				{
					question: 'Что взять на первое занятие?',
					answer: 'Удобную спортивную одежду и бутылку воды.'
				}
			]
		},
		adults: {
			metaTitle: 'Капоэйра для взрослых в Кишинёве: подвижность, сила и музыка',
			metaDescription:
				'Тренировки для взрослых в Кишинёве, в том числе для начинающих: подвижность, гибкость и сила через капоэйру, с живой музыкой. Первое занятие бесплатно.',
			title: 'Капоэйра для взрослых',
			lead: 'Тренировка для всего тела, с живой музыкой и партнёром напротив. Можно начать с нуля, в любом возрасте.',
			sections: [
				{
					title: 'Подвижность и сила',
					body: 'Жинга, базовый шаг капоэйры, держит вас в движении всю тренировку. Удары, низкие позиции и упоры на руки прорабатывают бёдра, плечи и спину. Сила приходит от работы с весом собственного тела. Через несколько месяцев вы двигаетесь легче и без труда опускаетесь ниже.'
				},
				{
					title: 'Начать с нуля',
					body: 'Возраст, физическая форма и прошлый опыт не важны. Каждый работает на своём уровне, а сложные движения идут после простых.'
				},
				{
					title: 'Не похоже на спортзал',
					body: 'В зале вы повторяете одни и те же упражнения в одиночку. В капоэйре вы двигаетесь с партнёром, под ритм музыки, и каждая игра получается другой. Нужно следить за партнёром, поэтому голова тоже по-настоящему отдыхает от рабочего дня.'
				},
				{
					title: 'Сообщество',
					body: 'Вы тренируетесь три раза в неделю с одними и теми же людьми. Мы вместе ездим на мероприятия и батизадо, в Кишинёве и в других городах. Многие дружат и вне зала.'
				}
			],
			faq: [
				{
					question: 'Мне больше 30 или 40 лет. Можно начать?',
					answer:
						'Да. Возраст не важен. Вы начинаете с простых движений и повышаете темп, когда тело готово.'
				},
				{
					question: 'Нужно ли быть гибким или в хорошей форме?',
					answer: 'Нет. Гибкость и сила приходят с тренировками.'
				},
				{
					question: 'Когда проходят тренировки?',
					answer:
						'По понедельникам, средам и пятницам, с 18:30 до 20:30, на Calea Ieșilor 10, 5-й этаж.'
				},
				{
					question: 'Нужно ли знать португальский или уметь петь?',
					answer:
						'Нет. Песни разучиваем на тренировках. Их тексты есть и на этом сайте, в разделе «Песни».'
				},
				{
					question: 'Сколько это стоит?',
					answer:
						'Первое занятие бесплатно. Стоимость абонемента уточняйте у инструктора по телефону 079 70 70 72.'
				},
				{
					question: 'Что надеть на первое занятие?',
					answer: 'Удобную спортивную одежду. Возьмите бутылку воды.'
				}
			]
		},
		culture: {
			metaTitle: 'Бразильская культура в Кишинёве: капоэйра, музыка и рода',
			metaDescription:
				'Афро-бразильская музыка и традиции в Кишинёве: беримбау, атабаке, пандейро, песни на португальском, рода и батизадо. Alemar Capoeira Кишинёв, с 2003 года.',
			title: 'Бразильская культура в Кишинёве',
			lead: 'Капоэйра — часть культуры Бразилии. В Alemar с ней знакомятся через музыку, песни на португальском и игру в роде.',
			sections: [
				{
					title: 'Афро-бразильские корни',
					body: 'Капоэйра родилась в Бразилии, среди африканцев, привезённых туда в рабство. Борьба, танец и музыка росли вместе, как форма сопротивления. С 2014 года рода капоэйры входит в список нематериального культурного наследия ЮНЕСКО.'
				},
				{
					title: 'Инструменты',
					body: 'Беримбау — это лук с одной струной и тыквой, которая усиливает звук. Он ведёт роду и задаёт ритм игры. Атабаке — высокий барабан, а пандейро — бубен. На тренировках вы учитесь играть на всех трёх.'
				},
				{
					title: 'Песни на португальском',
					body: 'Песни капоэйры рассказывают об истории Бразилии, о великих мастерах и о повседневной жизни. Один поёт, а группа отвечает хором. На этом сайте есть тексты песен, которые мы поём, с переводом на румынский.'
				},
				{
					title: 'Рода и батизадо',
					body: 'Рода — это круг, в котором идёт игра. Группа поёт и хлопает, а двое играют в центре. Батизадо — праздник группы, с родами, мастер-классами и выступлениями. Мы ездим и на мероприятия в другие города, например в Бухарест и Тирасполь.'
				}
			],
			faq: [
				{
					question: 'Что такое капоэйра?',
					answer:
						'Капоэйра — бразильское боевое искусство, которое соединяет борьбу, акробатику, танец и живую музыку. В неё играют вдвоём, в центре круга, который называется рода.'
				},
				{
					question: 'Капоэйра — это танец или боевое искусство?',
					answer:
						'Это боевое искусство, но в него играют под музыку, и оно во многом похоже на танец. Поэтому её выбирают и те, кто приходит ради бразильской культуры.'
				},
				{
					question: 'Нужно ли знать португальский?',
					answer:
						'Нет. Песни разучиваем на тренировках, а тексты с переводом на румынский есть на этом сайте.'
				},
				{
					question: 'Что такое батизадо?',
					answer: 'Батизадо — праздник группы. В программе рода, мастер-классы и выступления.'
				},
				{
					question: 'Где узнать о мероприятиях?',
					answer:
						'Мероприятия появляются на главной странице сайта и на нашей странице в Facebook, @capoeiramd.'
				}
			]
		}
	},
	en: {
		kids: {
			metaTitle: 'Capoeira for kids in Chișinău: a martial art without aggression',
			metaDescription:
				'Capoeira for children from age 5 in Chișinău. Coordination, balance, confidence and live music, with no matches and no rankings. The first class is free.',
			title: 'Capoeira for kids',
			lead: 'An after-school activity for children from age 5, with movement, acrobatics and live music. In capoeira nobody wins and nobody loses.',
			sections: [
				{
					title: 'A martial art without aggression',
					body: 'In capoeira, two people play together in the middle of a circle. One throws a controlled kick, the other moves out of the way and answers with a move of their own. This is how children learn to control their strength and look after their partner. There are no matches, points or rankings, so there is no pressure to beat anyone.'
				},
				{
					title: 'What your child builds',
					body: 'The whole body works the whole time: coordination, flexibility, balance and strength. Children learn cartwheels, handstands and other acrobatics, and each success gives them the nerve to try the next one. Training shapes character too: children learn to work as a team and to do things they did not think they could.'
				},
				{
					title: 'Music at every class',
					body: 'Every class has live music on the berimbau, atabaque and pandeiro. Children sing songs in Portuguese, clap the rhythm and learn to play the instruments. Along the way they pick up their first Portuguese words.'
				},
				{
					title: 'Kids and parents in one group',
					body: 'Children train in the same group as the adults, on Monday, Wednesday and Friday from 18:30 to 20:30. If you want, you can join the class next to your child.'
				}
			],
			faq: [
				{
					question: 'From what age can my child start?',
					answer: 'Children can start from age 5.'
				},
				{
					question: 'Is capoeira dangerous or aggressive?',
					answer:
						'Kicks are controlled and pass by the partner. Children first learn to dodge and to move safely. The mood in the room is playful, and the instructor watches the group the whole time.'
				},
				{
					question: 'Does my child need to be sporty?',
					answer:
						'No. Your child starts at their own level. Flexibility, strength and acrobatics come with time.'
				},
				{
					question: 'Can I train together with my child?',
					answer:
						'Yes. Children and adults train in the same group, so you can come to class together.'
				},
				{
					question: 'How much does it cost?',
					answer:
						'The first class is free. For membership prices, call the instructor at +373 79 70 70 72.'
				},
				{
					question: 'What should my child bring to the first class?',
					answer: 'Comfortable sports clothes and a bottle of water.'
				}
			]
		},
		adults: {
			metaTitle: 'Capoeira for adults in Chișinău: mobility, strength and music',
			metaDescription:
				'Training for adults in Chișinău, beginners included: mobility, flexibility and strength through capoeira, with live music. The first class is free.',
			title: 'Capoeira for adults',
			lead: 'A full-body workout with live music and a partner in front of you. You can start from zero, at any age.',
			sections: [
				{
					title: 'Mobility and strength',
					body: 'The ginga, the basic step of capoeira, keeps you moving for the whole class. Kicks, low stances and moves on your hands work the hips, shoulders and back. Strength comes from your own body weight. After a few months you move more easily and get low without effort.'
				},
				{
					title: 'Start from zero',
					body: 'Your age, your fitness and what you did before do not matter. Everyone works at their own level, and the hard moves come after the simple ones.'
				},
				{
					title: 'Different from the gym',
					body: 'At the gym you repeat the same exercises on your own. In capoeira you move with a partner, to the rhythm of the music, and every game turns out different. You have to pay attention to the other person, so your mind gets a real break from the working day too.'
				},
				{
					title: 'Community',
					body: 'You train three times a week with the same people. We go to events and batizados together, in Chișinău and in other cities. Many friendships carry on outside the room.'
				}
			],
			faq: [
				{
					question: 'I am over 30 or 40. Can I start?',
					answer:
						'Yes. Age does not matter. You start with simple moves and raise the pace when your body is ready.'
				},
				{
					question: 'Do I need to be flexible or fit?',
					answer: 'No. Flexibility and strength come with training.'
				},
				{
					question: 'When are the classes?',
					answer:
						'Monday, Wednesday and Friday, from 18:30 to 20:30, at Calea Ieșilor 10, 5th floor.'
				},
				{
					question: 'Do I need to speak Portuguese or sing?',
					answer:
						'No. You learn the songs in class. The lyrics are also on this site, in the Songs section.'
				},
				{
					question: 'How much does it cost?',
					answer:
						'The first class is free. For membership prices, call the instructor at +373 79 70 70 72.'
				},
				{
					question: 'What do I wear to the first class?',
					answer: 'Comfortable sports clothes. Bring a bottle of water.'
				}
			]
		},
		culture: {
			metaTitle: 'Brazilian culture in Chișinău: capoeira, music and the roda',
			metaDescription:
				'Afro-Brazilian music and traditions in Chișinău: berimbau, atabaque, pandeiro, songs in Portuguese, the roda and batizados. Alemar Capoeira Chișinău, since 2003.',
			title: 'Brazilian culture in Chișinău',
			lead: 'Capoeira is part of Brazilian culture. At Alemar you get to know it through music, songs in Portuguese and the game in the roda.',
			sections: [
				{
					title: 'Afro-Brazilian roots',
					body: 'Capoeira was born in Brazil, among Africans brought there as slaves. The fight, the dance and the music grew up together as a form of resistance. Since 2014, the capoeira roda has been on the UNESCO list of intangible cultural heritage.'
				},
				{
					title: 'The instruments',
					body: 'The berimbau is a bow with a single string and a gourd that makes the sound louder. It leads the roda and sets the rhythm of the game. The atabaque is a tall drum, and the pandeiro is a tambourine. In class you learn to play all three.'
				},
				{
					title: 'Songs in Portuguese',
					body: 'Capoeira songs tell the history of Brazil, the stories of great masters and everyday life. One person sings and the group answers in chorus. This site has the lyrics of the songs we sing, with Romanian translations.'
				},
				{
					title: 'The roda and the batizado',
					body: 'The roda is the circle where the game happens. The group sings and claps, and two people play in the middle. The batizado is the group celebration, with rodas, workshops and performances. We also travel to events in other cities, for example Bucharest and Tiraspol.'
				}
			],
			faq: [
				{
					question: 'What is capoeira?',
					answer:
						'Capoeira is a Brazilian martial art that brings together fighting, acrobatics, dance and live music. Two people play it in the middle of a circle called the roda.'
				},
				{
					question: 'Is capoeira a dance or a martial art?',
					answer:
						'It is a martial art, but it is played to music and has a lot of dance in it. That is why people who come for Brazilian culture choose it too.'
				},
				{
					question: 'Do I need to speak Portuguese?',
					answer:
						'No. You learn the songs in class, and the lyrics, with Romanian translations, are on this site.'
				},
				{
					question: 'What is a batizado?',
					answer: 'A batizado is the group celebration. It has rodas, workshops and performances.'
				},
				{
					question: 'Where can I find out about events?',
					answer:
						'Events appear on the home page of this site and on our Facebook page, @capoeiramd.'
				}
			]
		}
	}
};
