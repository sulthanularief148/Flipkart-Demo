const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

menuToggle.addEventListener('click', function() {
	menu.classList.toggle('active');
});

close.addEventListener('click', function() {
	menu.classList.remove('active');
});

const reviewForm = document.getElementById('review-form');
const reviewsSection = document.querySelector('.customer-reviews');

reviewForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const productName = document.getElementById('product-name').value;
  const reviewDescription = document.getElementById('review-description').value;
  const reviewRating = document.getElementById('review-rating').value;

  if (productName && reviewDescription && reviewRating) {
    const review = document.createElement('div');
    review.classList.add('customer-review');

    const productNameHeading = document.createElement('h4');
    productNameHeading.textContent = productName;
    review.appendChild(productNameHeading);

    const reviewDescriptionParagraph = document.createElement('p');
    reviewDescriptionParagraph.textContent = reviewDescription;
    review.appendChild(reviewDescriptionParagraph);

    const rating = document.createElement('div');
    rating.classList.add('rating');
    for (let i = 0; i < reviewRating; i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      rating.appendChild(star);
    }
    review.appendChild(rating);
    reviewsSection.appendChild(review);

// Clear form
reviewForm.reset();
}
});



// Dark/Light mode button
var theme = document.getElementById("btnSwitch");
document.getElementById('btnSwitch').addEventListener('click',()=>{
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    theme.innerHTML = "Dark"
      document.documentElement.setAttribute('data-bs-theme','light')
  }
  else {
      document.documentElement.setAttribute('data-bs-theme','dark')
      theme.innerHTML = "Light"
  }
})

