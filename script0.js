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

let isActive = false; // track click state

btn_lang.addEventListener("click", () => {
  if (section_lang.style.maxHeight) {
    // Collapse
    section_lang.style.maxHeight = null;
  } else {
    // Expand to natural height
    section_lang.style.maxHeight = section_lang.scrollHeight + "px";
  }
});

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

///////////////////////////
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
//ministryDropdown

////////  Languages Dropdown hover
//minstry and search and Energy
////////  Digital Dropdown hover
////////  Media Dropdown hover

document.addEventListener("DOMContentLoaded", () => {
  // Generic dropdown handler
  function setupDropdown({ btn, section, arrow }) {
    if (!btn || !section) {
      console.warn("Missing element(s) for dropdown:", { btn, section, arrow });
      return;
    }

    isActive = false; // true when user clicked to lock open
    let isHovering = false; // true while mouse is inside button OR dropdown
    const hoverCheckDelay = 10; // ms

    function applyActiveStyles() {
      section.classList.add("open");
      if (arrow) {
        arrow.classList.add("fa-chevron-up");
        arrow.classList.remove("fa-chevron-down");
      }
      btn.style.backgroundColor = "#1b8354";
      btn.style.color = "#ffffff";
      btn.style.boxShadow = "0 6px 0 0 #54c08a";
      btn.style.borderRadius = "5%";
    }

    function resetStyles() {
      section.classList.remove("open");
      if (arrow) {
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");
      }
      btn.style.backgroundColor = "transparent";
      btn.style.color = "inherit";
      btn.style.boxShadow = "none";
      btn.style.borderRadius = "0";
    }

    // Toggle active state on click
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      isActive = !isActive;
      if (isActive) applyActiveStyles();
      else if (!isHovering) resetStyles();
    });

    // Close if clicking outside
    document.addEventListener("click", (e) => {
      if (!btn.contains(e.target) && !section.contains(e.target)) {
        isActive = false;
        resetStyles();
      }
    });

    // Hover behavior on both button and dropdown
    [btn, section].forEach((el) => {
      el.addEventListener("mouseenter", () => {
        isHovering = true;
        if (!isActive) applyActiveStyles();
      });

      el.addEventListener("mouseleave", () => {
        setTimeout(() => {
          const stillOver = btn.matches(":hover") || section.matches(":hover");
          if (!stillOver) {
            isHovering = false;
            if (!isActive) resetStyles();
          }
        }, hoverCheckDelay);
      });
    });
  }

  // === Ministry dropdown ===
  const MinistryBtn = document.getElementById("MinistryBtn");
  const mySectionMinistry1 = document.getElementById("mySectionMinistry1");
  const arrowMinistry = document.getElementById("arrowMinistry");
  setupDropdown({
    btn: MinistryBtn,
    section: mySectionMinistry1,
    arrow: arrowMinistry,
  });

  // === Search dropdown ===
  const SearchBtn = document.getElementById("SearchBtn");
  const mySectionSearch = document.getElementById("mySectionSearch");
  setupDropdown({
    btn: SearchBtn,
    section: mySectionSearch,
    // arrow: arrowSearch   <-- add if needed
  });

  // === Energy dropdown ===
  const EnergyBtn = document.getElementById("EnergyBtn");
  const mySectionEnergy1 = document.getElementById("mySectionEnergy1");
  const arrowEnergy = document.getElementById("arrowEnergy");
  setupDropdown({
    btn: EnergyBtn,
    section: mySectionEnergy1,
    arrow: arrowEnergy,
  });

  // === Media dropdown ===
  const MediaBtn = document.getElementById("MediaBtn");
  const mySectionMedia1 = document.getElementById("mySectionMedia1");
  const arrowMedia = document.getElementById("arrowMedia");
  setupDropdown({
    btn: MediaBtn,
    section: mySectionMedia1,
    arrow: arrowMedia,
  });

  // === Documents dropdown ===
  const DocumentsBtn = document.getElementById("DocumentsBtn");
  const mySectionDigital1 = document.getElementById("mySectionDigital1");
  const arrowDigital = document.getElementById("arrowDigital");
  setupDropdown({
    btn: DocumentsBtn,
    section: mySectionDigital1,
    arrow: arrowDigital,
  });

  // === Languages dropdown ===
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("mySectionLanguages");
  const arrowLang = document.getElementById("arrowLang"); // optional if you have an arrow
  setupDropdown({
    btn: langBtn,
    section: langMenu,
    arrow: arrowLang,
  });
});
