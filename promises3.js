/* Использование промисов и fetch */

fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        console.log(response)
        return response.json()
      })
      .then(json => console.log(json))
      .catch(error => console.log(error)) 