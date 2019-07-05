const featuredDomainsContainer = document.querySelector(".featured-domains");
const featuredButtons = featuredDomainsContainer.querySelectorAll("button");
const domainsSectionContainer = document.querySelector(".domains-sections");
const domainsSectionButtons = domainsSectionContainer.querySelectorAll(
  "button"
);

function openContactPage() {
  window.open("contact.html", "_blank");
}
featuredButtons.forEach(featuredButton =>
  featuredButton.addEventListener("click", openContactPage)
);
domainsSectionButtons.forEach(domainsSectionButton =>
  domainsSectionButton.addEventListener("click", openContactPage)
);
