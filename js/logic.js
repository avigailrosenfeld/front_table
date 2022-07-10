//Recursive nested header table and drop down for filter
function iterateTableTitles(result, element, option) {
    for (let property in result) {
        if (result.hasOwnProperty(property)) {
            if (typeof result[property] === "object") {
                let newElement = document.createElement('th')
                newElement.textContent = property
                element.appendChild(newElement)
                //Preper drop down
                let newDropDownElement = document.createElement('option')
                newDropDownElement.textContent = property
                option.appendChild(newDropDownElement)
                //For object child
                iterateTableTitles(result[property], newElement, option)
            } else {
                let newElement = document.createElement('th')
                newElement.textContent = property
                element.appendChild(newElement)
                //Preper drop down
                let newDropDownElement = document.createElement('option')
                newDropDownElement.textContent = property
                option.appendChild(newDropDownElement)
            }
        }
    }
}

//Recursive nested data table
function iterateTable(result, element, level = '') {
    for (let property in result) {
        if (result.hasOwnProperty(property)) {
            if (typeof result[property] === "object") {
                let nestedElement = document.createElement('tr')
                nestedElement.className = 'row' + level + ' ' + property
                element.appendChild(nestedElement);
                //For object child
                iterateTable(result[property], nestedElement, 'level')

            } else {
                let newElement = document.createElement('td')
                newElement.textContent = result[property]
                newElement.className = 'col' + ' ' + property
                element.appendChild(newElement)
            }
        }
    }
}

//Filter data table
function filter() {
    let input, filter, table, tr, td, i, selected;
    selected = $('#properties_list').val()
    input = document.getElementById("table_filter")
    filter = input.value.toUpperCase()
    table = document.getElementById("main")
    tr = table.getElementsByClassName("row")
    td = table.getElementsByClassName(selected)

    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "none"
      for (let j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1){
          tr[j].style.display = "" 
        }
      }  
    }
  }