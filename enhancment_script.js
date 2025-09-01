/**
 * Utility: Toggle grayscale mode for the entire page
 */
const grayBtn = document.getElementById("grayBtn");
grayBtn.addEventListener("click", () => {
  document.body.classList.toggle("gray");
});

/**
 * Generic function: Collapse/Expand a section with smooth animation
 * @param {HTMLElement} btn - The button that toggles the section
 * @param {HTMLElement} section - The collapsible section
 * @param {HTMLElement} [icon] - (Optional) The icon that changes up/down
 */
function setupCollapseToggle(btn, section, icon) {
  btn.addEventListener("click", () => {
    if (section.style.maxHeight) {
      // Collapse
      section.style.maxHeight = null;
      if (icon) {
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      }
    } else {
      // Expand to natural height
      section.style.maxHeight = section.scrollHeight + "px";
      if (icon) {
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    }
  });
}

/**
 * Generic function: Setup hover + click styles for buttons with dropdowns
 * @param {HTMLElement} btn - The button element
 * @param {HTMLElement} section - The dropdown section
 * @param {HTMLElement} [icon] - (Optional) Icon to toggle
 */
function setupHoverDropdown(btn, section, icon) {
  let isActive = false; // Track click state

  // Click toggle
  btn.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
      section.classList.add("open");
      applyActiveStyle(btn);
      if (icon) toggleIcon(icon, true);
    } else {
      section.classList.remove("open");
      resetBtnStyle(btn);
      if (icon) toggleIcon(icon, false);
    }
  });

  // Hover enter
  btn.addEventListener("mouseenter", () => {
    if (!isActive) {
      section.classList.add("open");
      applyActiveStyle(btn);
      if (icon) toggleIcon(icon, true);
    }
  });

  // Hover leave
  btn.addEventListener("mouseleave", () => {
    if (!isActive) {
      section.classList.remove("open");
      resetBtnStyle(btn);
      if (icon) toggleIcon(icon, false);
    }
  });
}

/**
 * Utility: Apply active button styles
 */
function applyActiveStyle(btn) {
  btn.style.backgroundColor = "#1b8354";
  btn.style.color = "#ffffff";
  btn.style.boxShadow = "0 6px 0 0 #54c08a";
  btn.style.borderRadius = "5%";
}

/**
 * Utility: Reset button styles
 */
function resetBtnStyle(btn) {
  btn.style.backgroundColor = "transparent";
  btn.style.color = "inherit";
  btn.style.boxShadow = "none";
  btn.style.borderRadius = "0";
}

/**
 * Utility: Toggle chevron icon direction
 */
function toggleIcon(icon, isOpen) {
  if (isOpen) {
    icon.classList.add("fa-chevron-up");
    icon.classList.remove("fa-chevron-down");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

/**
 * Adjust offcanvas position dynamically based on navbar height
 */
window.addEventListener("show.bs.offcanvas", function () {
  const navbar = document.querySelector(".navbar");
  const offset = navbar.offsetHeight;

  document.querySelectorAll(".custom-offcanvas").forEach((canvas) => {
    canvas.style.top = offset + "px";
    canvas.style.height = `calc(100% - ${offset}px)`;
  });
});

// ----------------------------
// Initialize All Dropdowns
// ----------------------------

// Simple collapses (with icons)
setupCollapseToggle(
  document.getElementById("toggleBtn"),
  document.getElementById("mySection"),
  document.getElementById("iarrow")
);

setupCollapseToggle(
  document.getElementById("toggleBtn_lang"),
  document.getElementById("mySection_lang")
);

setupCollapseToggle(
  document.getElementById("ministryDropdown"),
  document.getElementById("mySectionMinistry"),
  document.getElementById("iarrowMinistry")
);

setupCollapseToggle(
  document.getElementById("EnergyDropdown"),
  document.getElementById("mySectionEnergy"),
  document.getElementById("iarrowEnergy")
);

setupCollapseToggle(
  document.getElementById("MediaDropdown"),
  document.getElementById("mySectionMedia"),
  document.getElementById("iarrowMedia")
);

setupCollapseToggle(
  document.getElementById("DigitalDropdown"),
  document.getElementById("mySectionDigital"),
  document.getElementById("iarrowDigital")
);

// Hover-based dropdowns
setupHoverDropdown(
  document.getElementById("langBtn"),
  document.getElementById("mySectionLanguages")
);

setupHoverDropdown(
  document.getElementById("SearchBtn"),
  document.createElement("div")
); // placeholder if no dropdown
setupHoverDropdown(
  document.getElementById("ContactBtn"),
  document.createElement("div")
);
setupHoverDropdown(
  document.getElementById("RecruitmentBtn"),
  document.createElement("div")
);
setupHoverDropdown(
  document.getElementById("ServicesBtn"),
  document.createElement("div")
);

setupHoverDropdown(
  document.getElementById("MinistryBtn"),
  document.getElementById("mySectionMinistry1"),
  document.getElementById("arrowMinistry")
);

setupHoverDropdown(
  document.getElementById("EnergyBtn"),
  document.getElementById("mySectionEnergy1"),
  document.getElementById("arrowEnergy")
);

setupHoverDropdown(
  document.getElementById("MediaBtn"),
  document.getElementById("mySectionMedia1"),
  document.getElementById("arrowMedia")
);

setupHoverDropdown(
  document.getElementById("DocumentsBtn"),
  document.getElementById("mySectionDigital1"),
  document.getElementById("arrowDigital")
);
