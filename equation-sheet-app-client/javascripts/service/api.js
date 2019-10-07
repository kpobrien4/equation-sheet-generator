class Api {
    static baseUrl = 'http://localhost:3000'
  
    static getFields() {
      fetch(Api.baseUrl + '/api/fields')
        .then(resp => resp.json())
        .then(fields => {
          fields.forEach(field => {
            let newField = new Field(field.name, field.description);
          })
          Field.renderAll();
        })
        .catch(errors => console.log('d', errors))
    }

  
  }