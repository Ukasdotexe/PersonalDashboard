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

const coursesEl = document.getElementById("courses");
const filesEl = document.getElementById("files");
const plansEl = document.getElementById("plans");
const friendsEl = document.getElementById("friends");
const projectEl = document.getElementById("projects");

const attackClickEvent = function (element, path) {
  element.addEventListener("click", () => loadHtmlChild(path));
};

attackClickEvent(coursesEl, "courses.html");
attackClickEvent(filesEl, "files.html");
attackClickEvent(plansEl, "plans.html");
attackClickEvent(friendsEl, "friends.html");
attackClickEvent(projectEl, "projects.html");

// loadHtmlChild("files.html");
