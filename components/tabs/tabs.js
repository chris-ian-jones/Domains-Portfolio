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

const tabs = document.querySelectorAll(".tab");
const domainSections = document.querySelectorAll("section.domain");

tabs.forEach(tab => tab.addEventListener("click", filterDomains));
