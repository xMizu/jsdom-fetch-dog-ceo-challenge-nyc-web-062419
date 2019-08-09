console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => json.message.forEach(imageCreate));

  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => breed(json));

  let imageCreate = function(src) {
    let dogPic = document.getElementById("dog-image-container");
    let image = document.createElement("IMG");
    image.src = src;
    dogPic.prepend(image);
  };
  const breedUl = document.getElementById("dog-breeds");

  function breed(json) {
    let arr = Object.keys(json.message);
    arr.forEach(function(name) {
      breedUl.innerHTML += `<li>${name}</li>`;
    });
  }

  breedUl.addEventListener("click", function(e) {
    e.target.style.color = "red";
  });

  const dropdown = document.getElementById("breed-dropdown");

  dropdown.addEventListener("change", e => {
    const allList = breedUl.querySelectorAll("li");
    allList.forEach(function(list) {
      toggleFilter(list);
    });
  });

  function toggleFilter() {
    const allList = breedUl.querySelectorAll("li");
    allList.forEach(function(list) {
      list.innerText.startsWith(`${dropdown.value}`)
        ? (list.style.display = "")
        : (list.style.display = "none");
    });
  }
});
