export const state = () => ({
    isAuthorized: true,
    pageInfo: {
        'how-to-fly': {
            pTitle: "Застраховать полет",
            pText: "Как запланировать полет и получить разрешение",
            btnText:"Запланировать полет",
            btnLink:"/",
            pData: [
                {
                    step: 1,
                    stepName: "Заполните<br>профиль",
                    stepContent: "При формировании заявки на полет БВС в согласующие инстанции, в них необходимо указывать персональные данные заявителя. Заполнив данные в своем профиле, Вы сможете быстро формировать необходимые заявки и получать разрешения на полет.",
                    videoURL: "https://www.youtube.com/watch?v=4xyb_tA-uw0&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=3",
                    footer: 'Летайте без лишних хлопот! Ознакомьтесь с порядком использования воздушного пространства РФ беспилотными воздушными судами на сайте <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">Росавиации</a>. С дополнительными полезными материалами вы можете ознакомиться <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">тут</a>.', 
                },
                {
                    step: 2,
                    stepName: "Зарегистрируйте<br>БВС",
                    stepContent: "Точные технические характеристики широкого круга моделей БВС поддерживаются самой платформой. Выбрав нужную модель БВС из справочника, Вам не придется вносить его характеристики вручную.",
                    videoURL: "https://www.youtube.com/watch?v=LV235z6qOUI&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=4",
                    footer: ""
                },
                {
                    step: 3,
                    stepName: "Запланируйте<br>полет",
                    stepContent: "Летаете в развлекательных или профессиональных целях? Платформа предлагает удобный способ планирования полетов для любой цели. Обозначте район полета, уточните детали, а все остальной за Вас сделает платформа!",
                    videoURL: "",
                    footer: ""
                },
                {
                    step: 4,
                    stepName: "Согласуйте<br>полет",
                    stepContent: "Наша платформа самостоятельно определяет инстанций для согласования полета и подготавливает все необходимые документы. Вам остается лишь контролировать процесс через получаемые от платформы уведомления.",
                    videoURL: "https://www.youtube.com/watch?v=U2ZJCMiQuo8&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=5",
                    footer: ""
                },
            ]
        },
        'how-to-insure': {
            pTitle: "Совершить полет",
            pText: "Как запланировать полет и получить разрешение",
            btnText:"Оформить страховку",
            btnLink:"/",
            pData: [
                {
                    step: 1,
                    stepName: "Укажите условия<br>страхования",
                    stepContent: "Укажите основные условия для страхования и платформа подберет подходящие варианты страховых продуктов.",
                    videoURL: "https://www.youtube.com/watch?v=4xyb_tA-uw0&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=3",
                    footer: 'Летайте без лишних хлопот! Ознакомьтесь с порядком использования воздушного пространства РФ беспилотными воздушными судами на сайте <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">Росавиации</a>. С дополнительными полезными материалами вы можете ознакомиться <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">тут</a>.', 
                },
                {
                    step: 2,
                    stepName: "Выберите страховую<br>компанию",
                    stepContent: "Ознакомтесь с условиями  страхования и выберите оптимальный для себя вариант. Платформа поможет провести сравнение предложений и предложит самые выгодные для Вас.",
                    videoURL: "https://www.youtube.com/watch?v=LV235z6qOUI&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=4",
                    footer: ""
                },
                {
                    step: 3,
                    stepName: "Оформите<br>полис",
                    stepContent: "Внесите детальные атрибуты для расчета и ознакомтесь с черновиком страхового полиса. Если все верно, произведите оплату и оформленный полис поступит к вам на email.",
                    videoURL: "",
                    footer: ""
                },
            ]
        },
        'how-to-find-work': {
            pTitle: "Найти работу",
            pText: "Как найти заказ на выполнение работы",
            btnText:"Начать поиск",
            btnLink:"/",
            pData: [
                {
                    step: 1,
                    stepName: "Заполните<br>анкету",
                    stepContent: "Заполните анкету указав свои навыки и опыт, укажите возможные районы исполнения работ и  ожидания по оплате. Мы будем Вас информировать о всех новых заказах подходящих под Ваши предпочтения.",
                    videoURL: "https://www.youtube.com/watch?v=4xyb_tA-uw0&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=3",
                    footer: 'Летайте без лишних хлопот! Ознакомьтесь с порядком использования воздушного пространства РФ беспилотными воздушными судами на сайте <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">Росавиации</a>. С дополнительными полезными материалами вы можете ознакомиться <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">тут</a>.', 
                },
                {
                    step: 2,
                    stepName: "Получайте<br>уведомления",
                    stepContent: "Наш маркетплейс самостоятельно подберет для Вас подходящие заказы и своевременно уведомит о публикации  новых интересных для Вас работах.",
                    videoURL: "https://www.youtube.com/watch?v=LV235z6qOUI&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=4",
                    footer: ""
                },
                {
                    step: 3,
                    stepName: "Подавайте заявки<br>на участие",
                    stepContent: "Если Вас заинтересовал заказ, подайте заявку на его исполнение. Заявка будет оцениваться заказчиком работ по многим критериям, укажите свой план работ и получите конкурентное преимущество!",
                    videoURL: "",
                    footer: ""
                },
                {
                    step: 4,
                    stepName: "Заключайте<br>договоры",
                    stepContent: "Договорились об условиях с заказчиком? Заключите договор на нашей платформе. Это позволит оперативно отчитываться о ходе работ и быстрее исполнить заказ!",
                    videoURL: "https://www.youtube.com/watch?v=U2ZJCMiQuo8&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=5",
                    footer: ""
                },
            ]
        },
        'how-to-find-perfomer': {
            pTitle: "Совершить полет",
            pText: "how-to-find-perfomer (такой текстовки не было в макете) Как запланировать полет и получить разрешение",
            btnText:"Запланировать полет",
            btnLink:"/",
            pData: [
                {
                    step: 1,
                    stepName: "Заполните<br>профиль",
                    stepContent: "При формировании заявки на полет БВС в согласующие инстанции, в них необходимо указывать персональные данные заявителя. Заполнив данные в своем профиле, Вы сможете быстро формировать необходимые заявки и получать разрешения на полет.",
                    videoURL: "https://www.youtube.com/watch?v=4xyb_tA-uw0&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=3",
                    footer: 'Летайте без лишних хлопот! Ознакомьтесь с порядком использования воздушного пространства РФ беспилотными воздушными судами на сайте <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">Росавиации</a>. С дополнительными полезными материалами вы можете ознакомиться <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">тут</a>.', 
                },
                {
                    step: 2,
                    stepName: "Зарегистрируйте<br>БВС",
                    stepContent: "Точные технические характеристики широкого круга моделей БВС поддерживаются самой платформой. Выбрав нужную модель БВС из справочника, Вам не придется вносить его характеристики вручную.",
                    videoURL: "https://www.youtube.com/watch?v=LV235z6qOUI&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=4",
                    footer: ""
                },
                {
                    step: 3,
                    stepName: "Запланируйте<br>полет",
                    stepContent: "Летаете в развлекательных или профессиональных целях? Платформа предлагает удобный способ планирования полетов для любой цели. Обозначте район полета, уточните детали, а все остальной за Вас сделает платформа!",
                    videoURL: "",
                    footer: ""
                },
                {
                    step: 4,
                    stepName: "Согласуйте<br>полет",
                    stepContent: "Наша платформа самостоятельно определяет инстанций для согласования полета и подготавливает все необходимые документы. Вам остается лишь контролировать процесс через получаемые от платформы уведомления.",
                    videoURL: "https://www.youtube.com/watch?v=U2ZJCMiQuo8&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=5",
                    footer: ""
                },
            ]
        },
        'how-to-ads': {
            pTitle: "Совершить полет",
            pText: "how-to-ads (такой текстовки не было в макете) Как запланировать полет и получить разрешение",
            btnText:"Запланировать полет",
            btnLink:"/",
            pData: [
                {
                    step: 1,
                    stepName: "Заполните<br>профиль",
                    stepContent: "При формировании заявки на полет БВС в согласующие инстанции, в них необходимо указывать персональные данные заявителя. Заполнив данные в своем профиле, Вы сможете быстро формировать необходимые заявки и получать разрешения на полет.",
                    videoURL: "https://www.youtube.com/watch?v=4xyb_tA-uw0&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=3",
                    footer: 'Летайте без лишних хлопот! Ознакомьтесь с порядком использования воздушного пространства РФ беспилотными воздушными судами на сайте <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">Росавиации</a>. С дополнительными полезными материалами вы можете ознакомиться <a href="https://favt.gov.ru/poryadok-ispolzovaniya-bespilotnyh-vozdychnih-sudov/">тут</a>.', 
                },
                {
                    step: 2,
                    stepName: "Зарегистрируйте<br>БВС",
                    stepContent: "Точные технические характеристики широкого круга моделей БВС поддерживаются самой платформой. Выбрав нужную модель БВС из справочника, Вам не придется вносить его характеристики вручную.",
                    videoURL: "https://www.youtube.com/watch?v=LV235z6qOUI&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=4",
                    footer: ""
                },
                {
                    step: 3,
                    stepName: "Запланируйте<br>полет",
                    stepContent: "Летаете в развлекательных или профессиональных целях? Платформа предлагает удобный способ планирования полетов для любой цели. Обозначте район полета, уточните детали, а все остальной за Вас сделает платформа!",
                    videoURL: "",
                    footer: ""
                },
                {
                    step: 4,
                    stepName: "Согласуйте<br>полет",
                    stepContent: "Наша платформа самостоятельно определяет инстанций для согласования полета и подготавливает все необходимые документы. Вам остается лишь контролировать процесс через получаемые от платформы уведомления.",
                    videoURL: "https://www.youtube.com/watch?v=U2ZJCMiQuo8&list=PLvTBThJr861yMBhpKafII3HZLAYujuNWw&index=5",
                    footer: ""
                },
            ]
        },
    }
})

export const getters = {
    isAuthorized (state) {
        return state.isAuthorized
    },

    getPageInfo: (state) => (pageName) => {
        return state.pageInfo[pageName]
    },
}