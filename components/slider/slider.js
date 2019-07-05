const soldDomainsSlides = document.querySelectorAll(".sold-domain-info");

const sliderButtons = document.querySelectorAll(".slider-button");

sliderButtons.forEach(sliderButton =>
  sliderButton.addEventListener("click", changeSlide)
);

let activeSlidePositionOne = 0;
let activeSlidePositionTwo = 1;
let activeSlidePositionThree = 2;

function changeSlide() {
  const soldDomainsSlides = document.querySelectorAll(".sold-domain-info");
  soldDomainsSlides.forEach(soldDomainSlide =>
    soldDomainSlide.classList.remove("active-sold-domain")
  );

  if (activeSlidePositionOne === 0) {
    activeSlidePositionOne = activeSlidePositionOne + 3;
    activeSlidePositionTwo = activeSlidePositionTwo + 3;
    activeSlidePositionThree = activeSlidePositionThree + 3;

    soldDomainsSlides[activeSlidePositionOne].classList.add(
      "active-sold-domain"
    );
    soldDomainsSlides[activeSlidePositionTwo].classList.add(
      "active-sold-domain"
    );
    soldDomainsSlides[activeSlidePositionThree].classList.add(
      "active-sold-domain"
    );
  } else {
    activeSlidePositionOne = 0;
    activeSlidePositionTwo = 1;
    activeSlidePositionThree = 2;

    soldDomainsSlides[activeSlidePositionOne].classList.add(
      "active-sold-domain"
    );
    soldDomainsSlides[activeSlidePositionTwo].classList.add(
      "active-sold-domain"
    );
    soldDomainsSlides[activeSlidePositionThree].classList.add(
      "active-sold-domain"
    );
  }
}
