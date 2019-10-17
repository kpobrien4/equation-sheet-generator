class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getEquations() {
      fetch(Api.baseUrl + '/api/equations/')
        .then(resp => resp.json())
        .then(equations => {
          equations.forEach(equation => {
            let newEquation = new Equation(equation.name, equation.equation_content, equation.field, equation.id);
          })
          Equation.renderAll();
        })
        .catch(errors => console.log('d', errors))
    }
  
    static submitEquation(event) {
      event.preventDefault();
      let data = createData();
      fetch(Api.baseUrl + '/api/equations', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
           let field = Field.findOrCreate(data.field.name);
           let equation = new Equation(data.name, data.equation_content, field, data.id);
          equation.display();
        })
        clearForm()
    }
  
  }