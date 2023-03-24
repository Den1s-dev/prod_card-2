const stars = document.querySelectorAll('.star');
  let rating = 0;
  

function setRating(rating) {
  stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active');
    } else {
        star.classList.remove('active');
    }
  });
}

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    rating = index + 1;
      setRating(rating);
  });

  star.addEventListener('mouseover', () => {
    setRating(index + 1);
  });

  star.addEventListener('mouseout', () => {
    setRating(rating);
  });
});



//price counter

// Получаем элементы со страницы
const priceElement = document.getElementById("cost");
const quantityElement = document.getElementById("quantity");
const incrementButton = document.querySelector(".pos");
const decrementButton = document.querySelector(".neg");

// Получаем стоимость товара из атрибута "value" элемента с классом "price"
const price = parseFloat(priceElement.getAttribute("value"));

// Функция для обновления цены на странице
function updatePrice() {
  const quantity = parseInt(quantityElement.value);
  const newPrice = (price * quantity).toFixed(2);
  priceElement.innerText = `${newPrice}`;
}

//уменьшение количества товара
function decrement() {
  if (quantityElement.value > 1) {
    quantityElement.value--;
    updatePrice();
  }
}

//увеличение количества товара
function increment() {
  if (quantityElement.value < 100) {
    quantityElement.value++;
    updatePrice();
  }
}



//accordion

const accordionHeading = document.querySelectorAll(".accordion");
  const accordionContent = document.querySelectorAll(".accordion-content");

  for (let i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].onclick = function() {
      if (this.nextElementSibling.style.maxHeight) {
        hideContent();
      } else {
        showContent(this);
      }
    };
  }

  function showContent(elem) {
    hideContent();
    elem.classList.add("active");
    elem.nextElementSibling.style.maxHeight =
      elem.nextElementSibling.scrollHeight + "px";
  }

  function hideContent() {
    for (let i = 0; i < accordionContent.length; i++) {
      accordionContent[i].style.maxHeight = null;
      accordionHeading[i].classList.remove("active");
    }
  }

