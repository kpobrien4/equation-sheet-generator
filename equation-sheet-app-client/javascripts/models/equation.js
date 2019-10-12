class Equation {
    static all = [];
  
    constructor(name, equation_content, field) {
      this.name = name;
      this.equation_content = equation_content;
      this.field = field
      Equation.all.push(this);
    }
  
    template() {
      // let power = this.equation_content.split("^")[1]
      // this.equation_content = this.equation_content.replace(`^${power}`, `&sup${power}`)
      return `
          <div class="card-content">
              <span class="card-title"></span> 
              <h4>${this.field.name}</h4>
              <p>${this.name}: ${this.equation_content} <input type="submit" value="Remove" class="delete"></p>
        </div>
      `

    }

    display() {
       let deleteBtn = document.createElement('button')
       deleteBtn.setAttribute('class', 'delete-equation-btn')
       deleteBtn.innerText = 'Remove'
       deleteBtn.addEventListener('click', event => this.deleteEquation(event, this))
      document.getElementsByClassName("equations-lists")[0].innerHTML += this.template();
    }

    deleteEquation() {
      event.preventDefault()
      fetch(`${equationsUrl}/${this.id}`,{
          method: 'DELETE'
      })
      .then(() => { 
          document.getElementById(`${this.id}`).remove()
          Equation.all = Equation.all.filter(equation => equation.id !== this.id)
      })
  }

  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }