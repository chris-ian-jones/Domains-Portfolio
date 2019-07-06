// function to first remove custom css on all 'active' tabs and domains,
// then add the custom css on all tabs / domains which have the same data-tab as selected tab
function filterDomains() {
  domainSections.forEach(domain => domain.classList.remove("active-domain"));
  tabs.forEach(tab => tab.classList.remove("active-tab"));

  if (this.dataset.tab === "all") {
    domainSections.forEach(domain => domain.classList.add("active-domain"));
    const allTab = document.querySelector(`.tab[data-tab="all"]`);
    allTab.classList.add("active-tab");
  } else {
    const activeDomains = document.querySelectorAll(
      `section.domain[data-tab="${this.dataset.tab}"]`
    );
    activeDomains.forEach(activeDomain =>
      activeDomain.classList.add("active-domain")
    );
    const pricedTab = document.querySelector(`.tab[data-tab="priced"]`);
    pricedTab.classList.add("active-tab");
  }
}

// grab all tabs
const tabs = document.querySelectorAll(".tab");

//grab all domain sections
const domainSections = document.querySelectorAll("section.domain");

// loop though NodeList of tabs and add click event listener to call filterDomains function
tabs.forEach(tab => tab.addEventListener("click", filterDomains));
