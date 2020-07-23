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
            {id: 1, service: 'Проведение IEO', photo: layer1, subtheme: serviceThme},
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
