const tabHeader = document.querySelector("#tab-header");

tabHeader.addEventListener("click", function(e) {
  const target = e.target;
  for (let i = 0, len = tabHeader.children.length; i < len; i++) {
    tabHeader.children[i].className = "tab-header_item";
  }
  const content = document.querySelector("#tab-content");
  for (let j = 0, length = content.children.length; j < length; j++) {
    content.children[j].className = "tab-item";
  }

  target.className += " active";
  content.children[target.dataset.index].className += " active";
});
