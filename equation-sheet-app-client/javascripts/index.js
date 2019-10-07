function addSubmitEventToForm() {
    document.getElementById("blog-form").addEventListener('submit', Api.submitBlog);
  }


document.addEventListener("DOMContentLoaded", function() {   
    addSubmitEventToForm();
 });