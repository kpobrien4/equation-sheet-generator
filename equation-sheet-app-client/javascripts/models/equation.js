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
      // let power = this.equation_content.split("^")[1]
      // this.equation_content = this.equation_content.replace(`^${power}`, `&sup${power}`)
      const newTemplate = document.createElement("div")
      newTemplate.innerHTML = `
      <span class="card-title"></span> 
              <h4>${this.field.name}</h4>
              <p>${this.name}: ${this.equation_content} <button data-id="${this.id}" class="delete">Remove</button></p>
      `
      return newTemplate      
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
  


    display() {
      let newEquation = this.template()
      let buttonInEquation = newEquation.querySelector("button")
      buttonInEquation.addEventListener("click", Equation.deleteEquation)
      document.getElementsByClassName("equations-lists")[0].appendChild(newEquation);
    }



  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }