class Equation {
    static all = [];
  
    constructor(name, equation_content, field) {
      this.name = name;
      this.equation_content = equation_content;
      this.field = field
      Equation.all.push(this);
    }
  
    template() {
      return `
        <div class="card">
            <div class="card-content">
              <span class="card-title"></span>
              <h4> ${this.field.name} </h4>
              <p>${this.name}: ${this.equation_content}</p>
            </div>
        </div>
      `
    }
  

    display() {
        document.getElementsByClassName("equations-lists")[0].innerHTML += this.template();
      }
  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }