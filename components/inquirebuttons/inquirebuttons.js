// grab the containers for the featured domains, and main domains container
const featuredDomainsContainer = document.querySelector(".featured-domains");
const domainsSectionContainer = document.querySelector(".domains-sections");
// grab all the buttons within the two containers
const featuredButtons = featuredDomainsContainer.querySelectorAll("button");
const domainsSectionButtons = domainsSectionContainer.querySelectorAll(
  "button"
);

const filteredButtons = Array.from(domainsSectionButtons).filter(
  button => button.className != "EscrowButtonPrimary"
);

// function to open the contact page in new tab
function openContactPage() {
  window.open("contact.html", "_blank");
}

// add event listeners for all buttons for both containers of domains
// calling the openContactPage function upon being clicked
featuredButtons.forEach(featuredButton =>
  featuredButton.addEventListener("click", openContactPage)
);

filteredButtons.forEach(filteredButton => {
  console.log("filteredButton", filteredButton);
  filteredButton.addEventListener("click", openContactPage);
});
