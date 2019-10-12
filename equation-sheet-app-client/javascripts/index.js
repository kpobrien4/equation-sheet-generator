function createData() {
    return {
      equation: {
        name: document.getElementById('name').value,
        equation_content: document.getElementById('equation_content').value,
        field_id: document.getElementById("mySelect").value
      },
    }
  }

  function clearForm() {
    document.getElementById("name").value = ""
    document.getElementById("equation_content").value = ""
  }

function getFields() {
  fetch(fieldUrl)
  .then (resp => resp.json())
  .then(fields => {
   let selectField = document.getElementById("mySelect")
   fields.forEach(function(field){
     let option = document.createElement("option")
     option.value = field.id
     option.textContent = field.name
     selectField.appendChild(option)
   })
  })
}



function latexify() {
  algebra.toTex(document.getElementById("equation_content"))
}


function addSubmitEventToForm() {
    document.getElementById("equation-form").addEventListener('submit', Api.submitEquation);
  }


document.addEventListener("DOMContentLoaded", function() {   
    addSubmitEventToForm();
    getFields()
    Api.getEquations()
 });

