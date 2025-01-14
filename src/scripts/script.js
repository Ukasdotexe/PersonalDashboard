"use strict";

const loadChildHTML = async (path) =>
  (document.getElementById("courses").innerHTML = await (
    await fetch(path)
  ).text());

loadChildHTML("courses.html");
