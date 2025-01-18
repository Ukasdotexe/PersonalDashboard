//
//
//

const pathMap = {
  courses: "courses.html",
  files: "files.html",
  plans: "plans.html",
  friends: "friends.html",
  projects: "projects.html",
  settings: "settings.html",
  profile: "profile.html",
  dashboard: "dashboard.html",
};

const formContainer = document.getElementById("social-media-username-form");

const backUpOptionsContainer = document.getElementById(
  "backup-option-container"
);
const menuBtn = document.querySelector("#menu");
const navMobile = document.getElementById("mobile");
const overlay = document.querySelector("#overlay");

const loadHtmlChild = async function (path) {
  try {
    //

    if (typeof path !== "string" || !path.trim()) {
      console.error("Invalid path: Path must be a non-empty string.");
      return;
    }

    const response = await fetch(path);

    if (!response.ok) {
      console.error(
        `Failed to fetch ${path}: ${response.status} ${response.statusText}`
      );
      return;
    }

    const text = await response.text();

    const containerElement = document.getElementById("children-container");

    if (!containerElement) {
      console.error("Element with ID 'children-container' not found.");
      return;
    }

    if (!text || text.trim().length === 0) {
      console.error(`The response from ${path} is empty or invalid HTML.`);
      return;
    }

    containerElement.innerHTML = "";
    containerElement.innerHTML = text;
  } catch (error) {
    console.log(error);
  }
};

const attachEventListeners = (containerId, mapping) => {
  const containerEl = document.getElementById(containerId);

  containerEl.addEventListener("click", (event) => {
    let target = event.target;

    // Ensure we are targeting an <a> element, or its closest <a> ancestor
    if (target.tagName !== "A") target = target.closest("a");

    // Iterate over the class names of the target element
    for (const className in mapping) {
      // Check if the clicked element or its closest ancestor has the class
      if (target.classList.contains(className)) {
        loadHtmlChild(mapping[className]);
        break; // Use the mapped value to load content
        // Stop after finding the first matching class
      }
    }
    console.log(containerEl);

    closeMenu();
  });
};

// Initialize the event listeners by passing the container ID and the mapping
attachEventListeners("sidenav", pathMap);
attachEventListeners("mobile", pathMap);

// loadHtmlChild("dashboard.html");
// loadHtmlChild("files.html");

if (formContainer)
  formContainer.addEventListener("focusin", (event) => {
    if (event.target.tagName === "INPUT") {
      const icon = event.target.nextElementSibling.querySelector("i");
      icon.classList.remove("text-grey-color");
    }
  });

if (formContainer)
  formContainer.addEventListener("focusout", (event) => {
    if (event.target.tagName === "INPUT") {
      const icon = event.target.nextElementSibling.querySelector("i");
      icon.classList.add("text-grey-color");
    }
  });

if (backUpOptionsContainer)
  backUpOptionsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".box")) {
      // Remove the styles from all boxes
      backUpOptionsContainer.querySelectorAll(".box").forEach((box) => {
        box.classList.remove("border-primary", "text-primary");
        box.querySelector("i")?.classList.remove("text-primary");
      });

      const clickedBox = event.target.closest(".box");
      clickedBox.classList.add("border-primary", "text-primary");

      const clickedIcon = clickedBox.querySelector("i");
      clickedIcon.classList.add("text-primary");
    }
  });

const toggleEls = document.querySelectorAll(".toggle");

toggleEls.forEach((toggleEl) => {
  toggleEl.addEventListener("click", function () {
    const toggleCircle = this.firstElementChild;
    const toggleIcon = toggleCircle.firstElementChild;

    this.classList.toggle("bg-primary");
    toggleCircle.classList.toggle("translate-x-11");

    toggleIcon.classList.toggle("fa-check");
    toggleIcon.classList.toggle("fa-xmark");
  });
});

// document.addEventListener("click", function () {
//
//   menu.classList.toggle("-translate-x-[100%]");
// });

// overlay.addEventListener("click", function () {
//   navMobile.classList.toggle("-translate-x-[100%]");
//   overlay.classList.toggle("hidden");
//   document.body.classList.remove("overflow-y-hidden");
// });

function openMenu() {
  navMobile.classList.remove("-translate-x-[100%]");
  overlay.classList.remove("hidden");
  document.body.classList.add("overflow-y-hidden");
}
function closeMenu() {
  navMobile.classList.add("-translate-x-[100%]");
  overlay.classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
}
menuBtn.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);

// document.querySelector(".dashboardP").addEventListener("click", function () {
//   loadHtmlChild("dashboard.html");
// });
