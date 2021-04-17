window.addEventListener('DOMContentLoaded', ()=> {
    function req() {
        // const reqvest = new XMLHttpRequest();
        // reqvest.open('GET', 'http://localhost:3000/people');
        // reqvest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // reqvest.send();
        // // reqvest.addEventListener('readystatechange', function() {
        // //     if(reqvest.readyState === 4 && reqvest.status == 200) {
        //     reqvest.addEventListener('load', function() {
        //     if(reqvest.status == 200) {
        //         let data = JSON.parse(reqvest.response);
        //         // console.log(data);
        //         createCard(data);

                
        //     } else {
        //         console.error('Что-то пошло не так');
        //     }
        // });
        getResourse("http://localhost:3000/people")
            .then(data => createCard(data.data))
            .catch(err => console.error(err));

        this.style.display = 'none';
    }
    document.querySelector('button').addEventListener('click', req, {'once': true});

    // async function getResourse(url) {
    //     const res = await fetch(`${url}`);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status ${res.status}`);
    //     }
    //     return await res.json();
    // }

    async function getResourse(url) {
        const res = await axios(`${url}`);

        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }
        return res;
    }

    function createCard(response) {
        response.forEach(item => {
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
    }
});