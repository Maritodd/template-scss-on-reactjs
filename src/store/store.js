import chih from "../images/chih.png";
import wilhelm from "../images/wilhelm.png";
import tray from "../images/tray.png";
import fynn from "../images/fynn.png";
import kevin from "../images/kevin.png";
import hu from "../images/hu.png";
import elena from "../images/elena.png";
import ferdinand from "../images/ferdinand.png";
import layer1 from "../images/layer1.png";
import layer2 from "../images/layer2.png";
import layer3 from "../images/layer3.png";
import layer4 from "../images/layer4.png";
import layer5 from "../images/layer5.png";
import serviceThme from "../images/service-thme.png";
import zeepin from "../images/zeepin.png";
import zeepinChart from "../images/zeepin-chart.png";
import diamond from "../images/diamond.png";
import diamondChart from "../images/diamond-chart.png";
import sophia from "../images/sophia.png";
import sophiaChart from "../images/sophia-chart.png";
import blue from "../images/blue.png";
import blueChart from "../images/blue-chart.png";
import sib from "../images/sib.png";
import sibChart from "../images/sib-d.png";
import stox from "../images/stox.png";
import stoxChart from "../images/stox-d.png";
import book from "../images/book.png";
import bookChart from "../images/book-d.png";
import myriad from "../images/myriad.png";
import myriadChart from "../images/myriad-d.png";


let store = {
    meetPage: {
        info: [
            {
                id: 1,
                name: "Wilhelm Gudelow",
                position: "Founder / Chief Executive Officer",
                photo: wilhelm,
                description: "Большой опыт создания успешных компаний и управления в сфере информационных технологий, реализации инфраструктурных проектов для крупных финансовых международных компаний."
            },
            {
                id: 2,
                name: "Tray Petrovsky",
                position: "Co-Founder / Chief Legal Officer",
                photo: tray,
                description: "Основатель международной юридической компании Swiss Financial Group, специализирующейся на хеджировании капитала, международных финансовых сделках, венчурном капитале и инвестициях."
            },
            {
                id: 3,
                name: "Fynn Bergström",
                position: "Entrepreneur / Chief Operating Officer",
                photo: fynn,
                description: "Серийный инвестор. Совладелец и основатель нескольких IT-компаний. Эксперт в области информационных технологий и управления проектами. Выпускник Школы бизнеса Бут Чикагского университета с MBA и крипто-энтузиаст."
            },
            {
                id: 4,
                name: "Kevin Rye",
                position: "Entrepreneur / Сhief Compliance Officer",
                photo: kevin,
                description: "15-летний опыт контроля и регулирования вопросов соответствия нормативным требованиям, в настоящее время работает по общим корпоративным вопросам и прямым иностранным инвестициям с упором на блокчейн и криптовалюту."
            },
            {
                id: 5,
                name: "Chih-Ming Tseng",
                position: "Chief Technology Officer",
                photo: chih,
                description: "ИТ-специалист с большим бэкграундом в разработке продуктов, обеспечения качества и поддержки. Занимается обработкой данных более 10 лет и обладает богатым опытом в области технологий ИИ, криптографии и архитектуры блокчейнов. Выпускник Китайского педагогического университета и Христианского университета Чанг Юнг, обладатель степени бакалавра в области разработки программного обеспечения."
            },
            {
                id: 6,
                name: "Hu Ting",
                position: "Chief Analytics Officer",
                photo: hu,
                description: "10-летний опыт работы в сфере потребительских исследований и развития бизнеса с акцентом на управление исследовательскими проектами, определение целей развития бизнеса и создание ERP-продуктов для клиентов. Глубокое понимание бизнес-процессов в банковском секторе, опыт участия в финансовых стартапах на основе технологии Blockchain."
            },
            {
                id: 7,
                name: "Elena Ovchinnikova",
                position: "Chief Networking Officer",
                photo: elena,
                description: "Опыт продаж и развития бизнеса в блокчейне. Сейчас работает над развитием долгосрочных партнерских отношений, анализом данных для существующих клиентов и поиском новых деловых связей. Понимание масштабов блокчейна в США, Европе и Азиатско-Тихоокеанском регионе помогло определить принципы успеха для наших клиентов"
            },
            {
                id: 8,
                name: "Fernando Zavertailo",
                position: "Chief Marketing Officer",
                photo: ferdinand,
                description: "Опыт в продвижении услуг на международных рынках, участие в продвижении четырнадцати проектов ICO и IEO, которые в совокупности привлекли более 100.000.000$. Выпускник MBA Школы менеджмента ESSCA в области цифрового маркетинга и электронного бизнеса."
            }
        ]
    },
    servicePage: {
        services: [
            {id: 1, service: 'Проведение IEO', photo: layer1, subtheme: serviceThme, text: "some text"},
            {id: 2, service: 'Проведение ICO', photo: layer2},
            {id: 3, service: 'Добавление проектов на биржи.', photo: layer3},
            {id: 4, service: 'Маркет-мейкинг и создание торговых ботов.', photo: layer4},
            {id: 5, service: 'Интеграция в экосистемы существующих продуктов.', photo: layer5},
            {id: 6, service: 'Обоснование ваших доходов для депозитов.', photo: layer1},
            {id: 7, service: 'Подбор партнера на доверительное управление.', photo: layer1},
            {id: 8, service: 'Внебиржевые OTC-сделки и анонимное инвестирование.', photo: layer1},
            {id: 9, service: 'Имущественные сделки за криптовалюту.', photo: layer1},
        ]
    },
    projectPage: {
        projects: [
            {id: 1, project: "Zeepin", tag:'(ZPD)', price: 'max $ 0,016431', logo: zeepin, chart:zeepinChart},
            {id: 2, project: "Dimond", tag:'(DMD)', price: 'max $ 34,16', logo: diamond, chart:diamondChart},
            {id: 3, project: "SophiaTX", tag:'(SPHTX)', price: 'max $ 1,396431', logo: sophia, chart:sophiaChart},
            {id: 4, project: "Blue Protocol", tag:'', price: 'max $ 1,966431', logo: blue, chart:blueChart},
            {id: 5, project: "SibCoin", tag:'(SIB)', price: 'max $ 5,206431', logo: sib , chart:sibChart},
            {id: 6, project: "Stox", tag:'(STX)', price: 'max $ 2,606431', logo: stox, chart:stoxChart},
            {id: 7, project: "Myriad", tag:'(XMY)', price: 'max $ 0,046431', logo: myriad, chart:myriadChart},
            {id: 8, project: "LBRY Credits", tag:'', price: 'max $ 1,236431', logo: book, chart:bookChart},
        ]
    },
    getState() {
        return this.store;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

export default store;
window.store = store;
