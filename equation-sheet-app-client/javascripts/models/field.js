class Field {
    static all = []
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
      Field.all.push(this);
    }
  
    equations() {
      Equation.all.filter(equation => equation.field.name === this.name);
    }
  
    static find(name) {
      return Field.all.find(field => field.name === name);
    }
  
    static findOrCreate(name) {
      let field = Field.find(name);
      if (field) {
        return field
      } else {
        return new Field(name);
      }
    }

  
    display() {
      document.getElementsByClassName("fields-lists")[0].innerHTML += this.template();
    }

    static renderAll() {
      Field.all.forEach(field => field.display())
    }
  }