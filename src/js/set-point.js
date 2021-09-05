

window.onload = () => {
    const container = document.querySelector('.t-align_center');

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    console.log(height);

    const list = [

        {
            number: 1,
            x: 26.6,
            y: 62,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 2,
            x: 50,
            y: 40,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
        },
        {
            number: 3,
            x: 20,
            y: 40,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 4,
            x: 50,
            y: 40,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
        },
        {
            number: 5,
            x: 80,
            y: 80,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
            footerText: "на экскурсию",
            link: "#"
        },
        {
            number: 6,
            x: 90,
            y: 90,
            headerText: "Cвободен",
            ad: "Адрес: ул. Прибрежная, д. 11б",
            sq: "Площадь участка: 904 м<sup>2</sup>",
            toW: "До кромки воды: 550 м.",
            req: "Участок с обязательным подрядом",
        },

    ]

    pointTemplate = (point) => {
        const _x = point.x * width / 100;
        const _y = point.y * height / 100;
        const foo = point.footerText ? `<a href="${point.link}" target="" class="to-link">${point.footerText}</a>` : '';
        const posClass = point.x < 50 ? "right" : "left"
        return `<div class="map-point" style="left:${_x}px; top:${_y}px;">
                    <div class="img-point" data-point-id="${point.number}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                            <circle id="Ellipse_1" data-name="Ellipse 1" cx="15" cy="15" r="15" fill="rgba(24,138,228,0.82)" />
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="6.176" cy="6.176" r="6.176" transform="translate(8.824 8.824)"
                                fill="#fff" />
                        </svg>
                    </div>
                        <div class="message ${posClass}"  data-message-id = "${point.number}"  style="margin: 20px;">
                            <div class="_3LlQMfCvgA">
                            <a href="#" data-close-id="${point.number}" class="close">&times;</a>
                                <div class="map-text">
                                    <div>
                                        <p class="mes-header"><strong style="letter-spacing: 0em;">${point.headerText}</strong></p>
                                        <p>&nbsp;</p>
                                        <ul>
                                            <li style="text-align: left;">${point.ad}</li>
                                            <li style="text-align: left;">${point.sq}</li>
                                            <li style="text-align: left;">${point.toW}</li>
                                            <li style="text-align: left;">${point.req}</li>
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

    container.addEventListener('click', (e) => {
        if (e.target.dataset.pointId) {
            list.forEach(p => {
                container.querySelector(`div[data-message-id="${p.number}"]`).classList.remove('active')
                container.querySelector(`div[data-point-id="${p.number}"]`).classList.remove('active')
            })
            container.querySelector(`div[data-message-id="${e.target.dataset.pointId}"]`).classList.add('active')
            e.target.classList.add('active')
        }
        if (e.target.dataset.closeId) {
            e.preventDefault()
            container.querySelector(`div[data-message-id="${e.target.dataset.closeId}"]`).classList.remove('active')
            container.querySelector(`div[data-point-id="${e.target.dataset.closeId}"]`).classList.remove('active')
        }
    })
}