window.addEventListener('DOMContentLoaded', ()=> {
    function req() {
        const reqvest = new XMLHttpRequest();
        reqvest.open('GET', 'http://localhost:3000/people');
        reqvest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        reqvest.send();
        // reqvest.addEventListener('readystatechange', function() {
        //     if(reqvest.readyState === 4 && reqvest.status == 200) {
            reqvest.addEventListener('load', function() {
            if(reqvest.status == 200) {
                let data = JSON.parse(reqvest.response);
                // console.log(data);

                data.forEach(item => {
                    let card = document.createElement('div');

                    card.classList.add('card');

                    let icon;
                    if(item.sex === 'male') {
                        icon = "icons/mars.png"
                    } else {
                        icon = "icons/female.png"
                    }

                    card.innerHTML = `
                        <img src="${item.photo}" alt="photo">
                        <div class="name">${item.name} ${item.surname}</div>
                        <div class="sex">
                            <img src=${icon} alt="male">
                        </div>
                        <div class="age">${item.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card);
                });
            } else {
                console.error('Что-то пошло не так');
            }
        });
        console.log(this);
        this.remove();
    }
    document.querySelector('button').addEventListener('click', req, {'once': true});
});