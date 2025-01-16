//
//
//

const pathMap = {
  courses: "courses.html",
  files: "files.html",
  plans: "plans.html",
  friends: "friends.html",
  projects: "projects.html",
  // settings: "Settings.html",
};

const formContainer = document.getElementById("social-media-username-form");

const backUpOptionsContainer = document.getElementById(
  "backup-option-container"
);

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

    if (target.tagName != "a") target = target.closest("a");

    if (mapping[target.id]) {
      loadHtmlChild(mapping[target.id]);
    }
  });
};

// Initialize the event listeners by passing the container ID and the mapping
attachEventListeners("sidenav", pathMap);

// loadHtmlChild("files.html");

formContainer.addEventListener("focusin", (event) => {
  if (event.target.tagName === "INPUT") {
    const icon = event.target.nextElementSibling.querySelector("i");
    icon.classList.remove("text-grey-color");
  }
});

formContainer.addEventListener("focusout", (event) => {
  if (event.target.tagName === "INPUT") {
    const icon = event.target.nextElementSibling.querySelector("i");
    icon.classList.add("text-grey-color");
  }
});

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
