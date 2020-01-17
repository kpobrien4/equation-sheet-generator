class Equation {
    static all = [];
  
    constructor(name, equation_content, field, id) {
      this.name = name;
      this.equation_content = equation_content;
      this.field = field
      this.id = id
      Equation.all.push(this);
    }
  
    template() {
      const newTemplate = document.createElement("div")
      newTemplate.innerHTML = `
      <span class="card-title"></span> 
      <div class="eqcard">
              <h4>${this.field.name}</h4>
              <p>${this.name}: ${this.equation_content}     <button data-id="${this.id}" class="delete">Remove</button> </p>
        <div>
      `
      return newTemplate      
    }

    equationData() {
      return {
        equation: {
          name: this.name,
          equation_content: this.equation_content,
          field_id: this.field_id
        },
      }
    }
    
// Not included right now.
    static updateEquation(event) {
      event.preventDefault();
      let id = this.dataset.id
      let data = createData();
      fetch(equationsUrl + `/${id}`, {
        method: "PATCH",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json()
      .then(data =>{
     }))
    }




    static deleteEquation(event) {
      event.preventDefault();
      let id = this.dataset.id
      fetch(Api.baseUrl + `/api/equations/${id}`, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => {
          this.parentNode.parentNode.remove()
        })
    }
  

  //   displayEditForm(){
  //     const editForm = document.createElement("form")
  //     editForm.innerHTML = `
  //     <div class="input-field">
  //       <input type="text" name="name" id="name">
  //     </div>
  // <div class="col s12 m6 l6">
  // <label for="equation_content">Equation</label>
  //     <form id="blog-form" action="#">
  //       <div class="input-field">
  //         <input type="text" name="equation_content" id="equation_content">
  //     </div>
  // <div class="col s12 m6 l6">
  // <label for="field">Field</label>
  //       <select id="mySelect">

  //       </select>
  //  </div>              
  //     <input type="submit" value="Add Equation" class="btn">
  //     `
  //   }


    display() {
      let newEquation = this.template()
      let buttonInEquation = newEquation.querySelector(".delete")
      // let editButton = newEquation.querySelector(".edit")
      // editButton.addEventListener("click", Equation.updateEquation)
      buttonInEquation.addEventListener("click", Equation.deleteEquation)
      document.getElementsByClassName("equations-lists")[0].appendChild(newEquation);
    }



  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }
