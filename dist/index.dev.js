"use strict";

console.log(el);

window.onresize = function () {
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (el) {
    el.checked = false;
  });
};