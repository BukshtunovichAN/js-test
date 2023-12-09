const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ****Мой вариант***//

// const listEl = document.querySelector(".gallery");
// listEl.classList.add("flex-gallery");
// const makeImages = (images) => {
//   return images.map((image) => {
//     const itemEl = document.createElement("li");
//     const imagEl = document.createElement("img");
//     imagEl.src = image.url;
//     imagEl.alt = image.alt;
//     imagEl.width = 500;
//     itemEl.classList.add("item");
//     imagEl.classList.add("image");
//     itemEl.appendChild(imagEl);
//     return listEl.insertBefore(itemEl, listEl.firstElementChild);
//   });
// };

// const elements = makeImages(images);
// listEl.append(...elements);

// ** другой вариант**//

const gallery = document.querySelector(".gallery");

// Генерация HTML для каждого изображения и вставка их в галерею
const imagesHTML = images
  .map(
    (image) => `<li>
    <img src="${image.url}" alt="${image.alt}" width=500>
  </li>`
  )
  .join("");

console.log("imagesHTML:", imagesHTML);
// Вставка сгенерированной разметки в галерею
gallery.insertAdjacentHTML("beforeend", imagesHTML);

// Добавление класса для оформления галереи (flexbox или grid)
gallery.classList.add("flex-gallery");
