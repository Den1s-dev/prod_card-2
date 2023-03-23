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

//amount counter
function increment(){
    let counter = document.getElementById('quantity');
        counter.value = parseInt(counter.value) + 1;
    }

function decrement(){
    let counter = document.getElementById('quantity');
    if(parseInt(counter.value) > 1) {
        counter.value = parseInt(counter.value) - 1;
    }   
}


//accordion

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    const currentAccordionItem = event.currentTarget.parentNode;
    currentAccordionItem.classList.toggle("active");

    const accordionBody = currentAccordionItem.querySelector(
      ".accordion-body"
    );
    accordionBody.classList.toggle("active");
  });
});
