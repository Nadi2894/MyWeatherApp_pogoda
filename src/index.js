function form(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search_input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search_form");
searchForm.addEventListener("submit", form);
