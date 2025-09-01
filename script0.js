const grayBtn = document.getElementById("grayBtn");
//grayScale
grayBtn.addEventListener("click", () => {
  document.body.classList.toggle("gray");
});
//colaps top nav

const btn = document.getElementById("toggleBtn");
const section = document.getElementById("mySection");
const icon = document.getElementById("iarrow");

btn.addEventListener("click", () => {
  if (section.style.maxHeight) {
    // Collapse
    section.style.maxHeight = null;
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  } else {
    // Expand to natural height
    section.style.maxHeight = section.scrollHeight + "px";
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  }
});

//callc hight
window.addEventListener("show.bs.offcanvas", function () {
  const navbar = document.querySelector(".navbar");
  const offset = navbar.offsetHeight;

  document.querySelectorAll(".custom-offcanvas").forEach((canvas) => {
    canvas.style.top = offset + "px";
    canvas.style.height = `calc(100% - ${offset}px)`;
  });
});

//colaps lang

const btn_lang = document.getElementById("toggleBtn_lang");
const section_lang = document.getElementById("mySection_lang");

btn_lang.addEventListener("click", () => {
  if (section_lang.style.maxHeight) {
    // Collapse
    section_lang.style.maxHeight = null;
  } else {
    // Expand to natural height
    section_lang.style.maxHeight = section_lang.scrollHeight + "px";
  }
});

//ministryDropdown

const btnMinistry = document.getElementById("ministryDropdown");
const sectionMinistry = document.getElementById("mySectionMinistry");
const iconMinistry = document.getElementById("iarrowMinistry");

btnMinistry.addEventListener("click", () => {
  if (sectionMinistry.style.maxHeight) {
    // Collapse
    sectionMinistry.style.maxHeight = null;
    iconMinistry.classList.remove("fa-chevron-up");
    iconMinistry.classList.add("fa-chevron-down");
  } else {
    // Expand to natural height
    sectionMinistry.style.maxHeight = sectionMinistry.scrollHeight + "px";
    iconMinistry.classList.remove("fa-chevron-down");
    iconMinistry.classList.add("fa-chevron-up");
  }
});

//Energy Dropdown

const btnEnergy = document.getElementById("EnergyDropdown");
const sectionEnergy = document.getElementById("mySectionEnergy");
const iconEnergy = document.getElementById("iarrowEnergy");

btnEnergy.addEventListener("click", () => {
  if (sectionEnergy.style.maxHeight) {
    // Collapse
    sectionEnergy.style.maxHeight = null;
    iconEnergy.classList.remove("fa-chevron-up");
    iconEnergy.classList.add("fa-chevron-down");
  } else {
    // Expand to natural height
    sectionEnergy.style.maxHeight = sectionEnergy.scrollHeight + "px";
    iconEnergy.classList.remove("fa-chevron-down");
    iconEnergy.classList.add("fa-chevron-up");
  }
});

//Media Dropdown

const btnMedia = document.getElementById("MediaDropdown");
const sectionMedia = document.getElementById("mySectionMedia");
const iconMedia = document.getElementById("iarrowMedia");

btnMedia.addEventListener("click", () => {
  if (sectionMedia.style.maxHeight) {
    // Collapse
    sectionMedia.style.maxHeight = null;
    iconMedia.classList.remove("fa-chevron-up");
    iconMedia.classList.add("fa-chevron-down");
  } else {
    // Expand to natural height
    sectionMedia.style.maxHeight = sectionMedia.scrollHeight + "px";
    iconMedia.classList.remove("fa-chevron-down");
    iconMedia.classList.add("fa-chevron-up");
  }
});
//Digital Dropdown

const btnDigital = document.getElementById("DigitalDropdown");
const sectionDigital = document.getElementById("mySectionDigital");
const iconDigital = document.getElementById("iarrowDigital");

btnDigital.addEventListener("click", () => {
  if (sectionDigital.style.maxHeight) {
    // Collapse
    sectionDigital.style.maxHeight = null;
    iconDigital.classList.remove("fa-chevron-up");
    iconDigital.classList.add("fa-chevron-down");
  } else {
    // Expand to natural height
    sectionDigital.style.maxHeight = sectionDigital.scrollHeight + "px";
    iconDigital.classList.remove("fa-chevron-down");
    iconDigital.classList.add("fa-chevron-up");
  }
});

////////  Languages Dropdown hover

const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("mySectionLanguages");

let isActive = false; // track click state

// Toggle active state on click
langBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    // Apply active styles
    langMenu.classList.add("open");

    langBtn.style.backgroundColor = "#1b8354";
    langBtn.style.color = "#ffffff";
    langBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    langBtn.style.borderRadius = "5%";
  } else {
    // Reset to normal
    resetBtnStyle();
    langMenu.classList.remove("open");
  }
});

// Apply hover style only if NOT active
langBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    langMenu.classList.add("open");

    langBtn.style.backgroundColor = "#1b8354";
    langBtn.style.color = "#ffffff";
    langBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    langBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
langBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    langMenu.classList.remove("open");
    resetBtnStyle();
  }
});

// Utility function to reset style
function resetBtnStyle() {
  langBtn.style.backgroundColor = "transparent";
  langBtn.style.color = "inherit";
  langBtn.style.boxShadow = "none";
  langBtn.style.borderRadius = "0";
}

//Search hover

const SearchBtn = document.getElementById("SearchBtn");

// Apply hover style only if NOT active
SearchBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    SearchBtn.style.backgroundColor = "#1b8354";
    SearchBtn.style.color = "#ffffff";
    SearchBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    SearchBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
SearchBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    SearchBtn.style.backgroundColor = "transparent";
    SearchBtn.style.color = "inherit";
    SearchBtn.style.boxShadow = "none";
    SearchBtn.style.borderRadius = "0";
  }
});

//Contact hover

const ContactBtn = document.getElementById("ContactBtn");

// Apply hover style only if NOT active
ContactBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    ContactBtn.style.backgroundColor = "#1b8354";
    ContactBtn.style.color = "#ffffff";
    ContactBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    ContactBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
ContactBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    ContactBtn.style.backgroundColor = "transparent";
    ContactBtn.style.color = "inherit";
    ContactBtn.style.boxShadow = "none";
    ContactBtn.style.borderRadius = "0";
  }
});

//Recruitment hover

const RecruitmentBtn = document.getElementById("RecruitmentBtn");

// Apply hover style only if NOT active
RecruitmentBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    RecruitmentBtn.style.backgroundColor = "#1b8354";
    RecruitmentBtn.style.color = "#ffffff";
    RecruitmentBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    RecruitmentBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
RecruitmentBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    RecruitmentBtn.style.backgroundColor = "transparent";
    RecruitmentBtn.style.color = "inherit";
    RecruitmentBtn.style.boxShadow = "none";
    RecruitmentBtn.style.borderRadius = "0";
  }
});

//Services hover

const ServicesBtn = document.getElementById("ServicesBtn");

// Apply hover style only if NOT active
ServicesBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    ServicesBtn.style.backgroundColor = "#1b8354";
    ServicesBtn.style.color = "#ffffff";
    ServicesBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    ServicesBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
ServicesBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    ServicesBtn.style.backgroundColor = "transparent";
    ServicesBtn.style.color = "inherit";
    ServicesBtn.style.boxShadow = "none";
    ServicesBtn.style.borderRadius = "0";
  }
});

////////  Ministry Dropdown hover

const MinistryBtn = document.getElementById("MinistryBtn");
const mySectionMinistry1 = document.getElementById("mySectionMinistry1");
const arrowMinistry = document.getElementById("arrowMinistry");

isActive = false; // track click state

// Toggle active state on click
MinistryBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    // Apply active styles
    mySectionMinistry1.classList.add("open");

    arrowMinistry.classList.add("fa-chevron-up");
    arrowMinistry.classList.remove("fa-chevron-down");

    MinistryBtn.style.backgroundColor = "#1b8354";
    MinistryBtn.style.color = "#ffffff";
    MinistryBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    MinistryBtn.style.borderRadius = "5%";
  } else {
    // Reset to normal

    mySectionMinistry1.classList.remove("open");

    arrowMinistry.classList.remove("fa-chevron-up");
    arrowMinistry.classList.add("fa-chevron-down");

    MinistryBtn.style.backgroundColor = "transparent";
    MinistryBtn.style.color = "inherit";
    MinistryBtn.style.boxShadow = "none";
    MinistryBtn.style.borderRadius = "0";
  }
});

// Apply hover style only if NOT active
MinistryBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    mySectionMinistry1.classList.add("open");
    arrowMinistry.classList.add("fa-chevron-up");
    arrowMinistry.classList.remove("fa-chevron-down");
    MinistryBtn.style.backgroundColor = "#1b8354";
    MinistryBtn.style.color = "#ffffff";
    MinistryBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    MinistryBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
MinistryBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    mySectionMinistry1.classList.remove("open");
    arrowMinistry.classList.remove("fa-chevron-up");
    arrowMinistry.classList.add("fa-chevron-down");
    MinistryBtn.style.backgroundColor = "transparent";
    MinistryBtn.style.color = "inherit";
    MinistryBtn.style.boxShadow = "none";
    MinistryBtn.style.borderRadius = "0";
  }
});

////////  Energy Dropdown hover

const EnergyBtn = document.getElementById("EnergyBtn");
const mySectionEnergy1 = document.getElementById("mySectionEnergy1");
const arrowEnergy = document.getElementById("arrowEnergy");

isActive = false; // track click state

// Toggle active state on click
EnergyBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    // Apply active styles
    mySectionEnergy1.classList.add("open");

    arrowEnergy.classList.add("fa-chevron-up");
    arrowEnergy.classList.remove("fa-chevron-down");

    EnergyBtn.style.backgroundColor = "#1b8354";
    EnergyBtn.style.color = "#ffffff";
    EnergyBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    EnergyBtn.style.borderRadius = "5%";
  } else {
    // Reset to normal
    mySectionEnergy1.classList.remove("open");

    arrowEnergy.classList.remove("fa-chevron-up");
    arrowEnergy.classList.add("fa-chevron-down");

    EnergyBtn.style.backgroundColor = "transparent";
    EnergyBtn.style.color = "inherit";
    EnergyBtn.style.boxShadow = "none";
    EnergyBtn.style.borderRadius = "0";
  }
});

// Apply hover style only if NOT active
EnergyBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    mySectionEnergy1.classList.add("open");
    arrowEnergy.classList.add("fa-chevron-up");
    arrowEnergy.classList.remove("fa-chevron-down");

    EnergyBtn.style.backgroundColor = "#1b8354";
    EnergyBtn.style.color = "#ffffff";
    EnergyBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    EnergyBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
EnergyBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    mySectionEnergy1.classList.remove("open");

    arrowEnergy.classList.remove("fa-chevron-up");
    arrowEnergy.classList.add("fa-chevron-down");
    EnergyBtn.style.backgroundColor = "transparent";
    EnergyBtn.style.color = "inherit";
    EnergyBtn.style.boxShadow = "none";
    EnergyBtn.style.borderRadius = "0";
  }
});

////////  Digital Dropdown hover

const MediaBtn = document.getElementById("MediaBtn");
const mySectionMedia1 = document.getElementById("mySectionMedia1");
const arrowMedia = document.getElementById("arrowMedia");

isActive = false; // track click state

// Toggle active state on click
MediaBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    // Apply active styles
    mySectionMedia1.classList.add("open");

    arrowMedia.classList.add("fa-chevron-up");
    arrowMedia.classList.remove("fa-chevron-down");

    MediaBtn.style.backgroundColor = "#1b8354";
    MediaBtn.style.color = "#ffffff";
    MediaBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    MediaBtn.style.borderRadius = "5%";
  } else {
    // Reset to normal
    mySectionMedia1.classList.remove("open");

    arrowMedia.classList.remove("fa-chevron-up");
    arrowMedia.classList.add("fa-chevron-down");

    MediaBtn.style.backgroundColor = "transparent";
    MediaBtn.style.color = "inherit";
    MediaBtn.style.boxShadow = "none";
    MediaBtn.style.borderRadius = "0";
  }
});

// Apply hover style only if NOT active
MediaBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    mySectionMedia1.classList.add("open");
    arrowMedia.classList.add("fa-chevron-up");
    arrowMedia.classList.remove("fa-chevron-down");

    MediaBtn.style.backgroundColor = "#1b8354";
    MediaBtn.style.color = "#ffffff";
    MediaBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    MediaBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
MediaBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    mySectionMedia1.classList.remove("open");

    arrowMedia.classList.remove("fa-chevron-up");
    arrowMedia.classList.add("fa-chevron-down");

    MediaBtn.style.backgroundColor = "transparent";
    MediaBtn.style.color = "inherit";
    MediaBtn.style.boxShadow = "none";
    MediaBtn.style.borderRadius = "0";
  }
});

////////  Media Dropdown hover

const DocumentsBtn = document.getElementById("DocumentsBtn");
const mySectionDigital1 = document.getElementById("mySectionDigital1");
const arrowDigital = document.getElementById("arrowDigital");

isActive = false; // track click state

// Toggle active state on click
DocumentsBtn.addEventListener("click", () => {
  isActive = !isActive;

  if (isActive) {
    // Apply active styles
    mySectionDigital1.classList.add("open");

    arrowDigital.classList.add("fa-chevron-up");
    arrowDigital.classList.remove("fa-chevron-down");

    DocumentsBtn.style.backgroundColor = "#1b8354";
    DocumentsBtn.style.color = "#ffffff";
    DocumentsBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    DocumentsBtn.style.borderRadius = "5%";
  } else {
    // Reset to normal
    mySectionDigital1.classList.remove("open");

    arrowDigital.classList.remove("fa-chevron-up");
    arrowDigital.classList.add("fa-chevron-down");

    DocumentsBtn.style.backgroundColor = "transparent";
    DocumentsBtn.style.color = "inherit";
    DocumentsBtn.style.boxShadow = "none";
    DocumentsBtn.style.borderRadius = "0";
  }
});

// Apply hover style only if NOT active
DocumentsBtn.addEventListener("mouseenter", () => {
  if (!isActive) {
    mySectionDigital1.classList.add("open");
    arrowDigital.classList.add("fa-chevron-up");
    arrowDigital.classList.remove("fa-chevron-down");

    DocumentsBtn.style.backgroundColor = "#1b8354";
    DocumentsBtn.style.color = "#ffffff";
    DocumentsBtn.style.boxShadow = "0 6px 0 0 #54c08a";
    DocumentsBtn.style.borderRadius = "5%";
  }
});

// Reset on mouse leave only if NOT active
DocumentsBtn.addEventListener("mouseleave", () => {
  if (!isActive) {
    mySectionDigital1.classList.remove("open");

    arrowDigital.classList.remove("fa-chevron-up");
    arrowDigital.classList.add("fa-chevron-down");

    DocumentsBtn.style.backgroundColor = "transparent";
    DocumentsBtn.style.color = "inherit";
    DocumentsBtn.style.boxShadow = "none";
    DocumentsBtn.style.borderRadius = "0";
  }
});
