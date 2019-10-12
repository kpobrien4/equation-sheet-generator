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
        <div class="card">
            <div class="card-content">
              <span class="card-title"></span> 
              <p>${this.name}: ${this.equation_content} <input type="submit" value="Remove" class="btn"></p> 
            </div>
        </div>
      `
    }

    
  


    display() {
       let h4 = document.createElement("h4")
       h4.innerHTML = `${this.field.name}`

      document.getElementsByClassName("equations-lists")[0].innerHTML += this.template();
    }

     removeEquation(submit, equation) {
      fetch(`${equationsUrl}/${equation.id}`,{
          method: 'DELETE'
      })
      .then( () => { submit.target.parentNode.parentElement.removeChild(submit.target.parentNode) } )
      .catch( error => console.log );
    }
  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }