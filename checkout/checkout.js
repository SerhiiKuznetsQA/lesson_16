// const products = [
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/1335/catalog_origin_325102.jpg",
//     name: "Шліфмашина",
//     price: 1299,
//     description:
//       "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
//   },
//   {
//     id: 4,
//     img: "https://static.dnipro-m.ua/cache/products/8284/catalog_origin_322127.jpg",
//     name: "Пила",
//     price: 11049,
//     description:
//       "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
//   },
//   {
//     id: 5,
//     img: "https://static.dnipro-m.ua/cache/products/2024/catalog_origin_323413.jpg",
//     name: "Рівень",
//     price: 897,
//     description:
//       "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
//   },
//   {
//     id: 6,
//     img: "https://static.dnipro-m.ua/cache/products/6566/catalog_origin_316315.jpg",
//     name: "Тример",
//     price: 3699,
//     description:
//       "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
//   },
//   {
//     id: 7,
//     img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
//     name: "Мотокоса",
//     price: 11049,
//     description:
//       "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
//   },
//   {
//     id: 8,
//     img: "https://static.dnipro-m.ua/cache/products/2745/catalog_origin_319770.jpg",
//     name: "Генератор",
//     price: 10890,
//     description:
//       "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
//   },
// ];

const LS_KEY = "checkout";
const list = document.querySelector(".js-list")
const clearBtn = document.querySelector(".js-clear")


const products = JSON.parse(localStorage.getItem(LS_KEY)) ?? [];
if (products.length) {
    clearBtn.hidden = false
 }
list.insertAdjacentHTML('afterbegin', createMarcup(products))
clearBtn.addEventListener("click", handlerClear);

function handlerClear(evt) {
    localStorage.removeItem(LS_KEY)
    location.href = "../index.html"
}
function createMarcup(arr) { 
    return arr.map(
        ({ img ,name,qty ,price}) => `
        <li class="cart-item">
        <img src="${img}" alt="${name}" class="product-img">
        <h2>${name}</h2>
        <p>Quantity:${qty} </p>
        <p>Total price:${price*qty} грн</p>
    </li>
    `
    ).join("");
}