

window.onload = () => {



    const container = document.querySelector('.t-align_center');

    const width = container.offsetWidth;
    const height = container.offsetHeight;



    const list = [

        {
            number: 1,
            x: 26.6,
            y: 62,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ],
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 2,
            x: 50,
            y: 40,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ]
        },
        {
            number: 3,
            x: 20,
            y: 40,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ],
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 4,
            x: 50,
            y: 40,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ],
        },
        {
            number: 5,
            x: 80,
            y: 80,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ],
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 66,
            x: 90,
            y: 90,
            headerText: "Cвободен",
            content: [
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
                { text: 'Площадь участка: 904 м<sup>2</sup>' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'До кромки воды: 550 м.' },
                { text: 'Адрес: ул. Прибрежная, д. 11б' },
            ],
        },

    ]

    pointTemplate = (point) => {
        const _x = point.x * width / 100;
        const _y = point.y * height / 100;
        const foo = point.footerText ? `<a href="${point.link}" target="" class="to-link">${point.footerText}</a>` : '';
        const posClass = point.x < 50 ? "right" : "left"

        const list = point.content ? point.content.map(c => ` <li class ="li" style="text-align: left;">${c.text}</li>`).join('') : ''
        return `<div class="map-point" data-number ="${point.number}"style="left:${_x}px; top:${_y}px;">
                    <div class="img-point" data-point-id="${point.number}">
                        <span class="view-point">${point.number}</span>
                    </div>
                        <div class="message ${posClass}"  data-message-id = "${point.number}"  style="margin: 20px;">
                            <div class="_3LlQMfCvgA">
                            <a href="#" data-close-id="${point.number}" class="close">&times;</a>
                                <div class="map-text">
                                    <div class="_div">
                                        <p class="mes-header"><strong style="letter-spacing: 0em;" class ="title">${point.headerText}</strong></p>
                                        <ul class="ul">
                                            ${list}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            ${foo}
                        </div>
                </div>`
    }

    list.forEach(point => {
        container.innerHTML += pointTemplate(point)
    })

    let isOpen = false

    

    container.addEventListener('click', (e) => {
        if (e.target.dataset.pointId) {
            list.forEach(p => {
                isOpen = false
                container.querySelector(`div[data-message-id="${p.number}"]`).classList.remove('active')
                container.querySelector(`div[data-point-id="${p.number}"]`).classList.remove('active')
            })
            container.querySelector(`div[data-message-id="${e.target.dataset.pointId}"]`).classList.add('active')
            e.target.classList.add('active')
            isOpen = true
        }
        if (e.target.dataset.closeId) {
            e.preventDefault()
            container.querySelector(`div[data-message-id="${e.target.dataset.closeId}"]`).classList.remove('active')
            container.querySelector(`div[data-point-id="${e.target.dataset.closeId}"]`).classList.remove('active')
            isOpen = false
        }
    })

    window.addEventListener('click', (e) => {
   

        if (isOpen && !e.target.classList.contains('map-point') &&
            !e.target.classList.contains('img-point') &&
            !e.target.classList.contains('message') &&
            !e.target.classList.contains('view-point') &&
            !e.target.classList.contains('_3LlQMfCvgA') &&
            !e.target.classList.contains('title') &&
            !e.target.classList.contains('mes-header') &&
            !e.target.classList.contains('li') &&
            !e.target.classList.contains('ul') &&
            !e.target.classList.contains('_div') &&
            !e.target.classList.contains('to-link')) {
            list.forEach(p => {
                container.querySelector(`div[data-message-id="${p.number}"]`).classList.remove('active')
                container.querySelector(`div[data-point-id="${p.number}"]`).classList.remove('active')
            })
        }
    })

    const realList = document.querySelectorAll('.map-point')

    window.addEventListener('resize', () => {
        realList.forEach(point => {
            const realPoint = list.find(({ number }) => +number === +point.dataset.number)
            const width = container.offsetWidth;
            const height = container.offsetHeight;
            point.style.left = realPoint.x * width / 100 + "px";
            point.style.top = realPoint.y * height / 100 + "px";
        })

    });
}