class Field {
    static all = []
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
      Field.all.push(this);
    }
  
    fields() {
      Field.all.filter(field => equation.field.name === this.name);
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
  }