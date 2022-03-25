const navbarBurger = () => {
  const burger = $(".navbar-burger"),
    menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

$(() => {
  console.log("Welcome to the CNCF's Hugo + Netlify starter");
  navbarBurger();
});

// show/hide left nav at small sizes
document.getElementById("leftnavToggle").onclick = function() {
  toggleNav()
};

function toggleNav() {
  var leftnav = document.getElementById("leftnav");
  if (leftnav.style.display === "none") {
    leftnav.style.display = "block";
    leftnavToggle.classList.add("open");
  } else {
    leftnav.style.display = "none";
    leftnavToggle.classList.remove("open");
  }
}

// Add copy button on code blocks
// This code is kindly shared under the MIT License by Tom Spencer in their most excellent [tutorial](https://www.tomspencer.dev/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/).

(function() {
  'use strict';

  if(!document.queryCommandSupported('copy')) {
    return;
  }

  function confirmationMsg(el, msg) {
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = "Copy";
    }, 1200);
  }

  function selectText(node) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    return selection;
  }
  
  // Create a copy button 
  function addCopyButton(containerEl) {
    var copyBtn = document.createElement("button");
    copyBtn.className = "highlight-copy-btn";
    copyBtn.textContent = "Copy";

    var codeEl = containerEl.firstElementChild;
    copyBtn.addEventListener('click', function() {
      try {
        var selection = selectText(codeEl);
        document.execCommand('copy');
        selection.removeAllRanges();

        confirmationMsg(copyBtn, 'Copied!')
      } catch(e) {
        console && console.log(e);
        confirmationMsg(copyBtn, 'Failed.')
      }
    });

    containerEl.appendChild(copyBtn);
  }

  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();


