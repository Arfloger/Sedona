 var title = document.querySelector(".search-form-title");
 var form = document.querySelector(".form-content");

 title.addEventListener("click", function (event) {
   event.preventDefault();
   form.classList.toggle("form-content-show");
 });
