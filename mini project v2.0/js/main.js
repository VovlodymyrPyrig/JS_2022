// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

let divMain = document.createElement('div');
divMain.classList.add('main');
document.body.appendChild(divMain);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users =>{
        let arr = [];
        for (const user of users) {
            arr.push(user);
        }
        for (const arrElement of arr) {
            let divElement = document.createElement('div');
            divElement.classList.add('box');
            divMain.appendChild(divElement);

            let pElement = document.createElement('p');
            pElement.innerText =`id: ${arrElement.id} \n name: ${arrElement.name}`;
            divElement.appendChild(pElement);

            let divA = document.createElement('div');
            divA.classList.add('aBox');
            divElement.appendChild(divA);

            let aElement = document.createElement('a');
            aElement.innerText = 'all information about this user';
            aElement.href = 'user-details.html';
            divA.appendChild(aElement);

            aElement.onclick =() =>{
                localStorage.setItem('user', JSON.stringify(arrElement));
            }


        }
    })