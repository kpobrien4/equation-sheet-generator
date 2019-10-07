class Equation {
    static all = [];
  
    constructor(name, equation_content) {
      this.name = name;
      this.equation_content = equation_content;
      Equation.all.push(this);
    }
  
    template() {
      return `
        <div class="card">
            <div class="card-content">
              <span class="card-title">${this.name}</span>
              <p>${this.equation_content}</p>
            </div>
        </div>
      `
    }
  
  
    static renderAll() {
      Equation.all.forEach(equation => equation.display())
    }
  }