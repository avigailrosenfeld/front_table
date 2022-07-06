function iterateTableTitles(result, element, option) {
    for (var property in result) {
        if (result.hasOwnProperty(property)) {
            if (typeof result[property] == "object") {
                var newElement = document.createElement('th')
                newElement.textContent = property
                element.appendChild(newElement)
                var newDropDownElement = document.createElement('option')
                newDropDownElement.textContent = property
                option.appendChild(newDropDownElement)
                iterateTableTitles(result[property], newElement, option)
            } else {
                var newElement = document.createElement('th')
                newElement.textContent = property
                element.appendChild(newElement)
                var newDropDownElement = document.createElement('option')
                newDropDownElement.textContent = property
                option.appendChild(newDropDownElement)
            }
        }
    }
}

function iterateTable(result, element, level = '') {
    for (var property in result) {
        if (result.hasOwnProperty(property)) {
            if (typeof result[property] == "object") {
                var nestedElement = document.createElement('tr')
                nestedElement.className = 'row' + level + ' ' + property
                element.appendChild(nestedElement);
                iterateTable(result[property], nestedElement, 'level')

            } else {
                var newElement = document.createElement('td')
                newElement.textContent = result[property]
                newElement.className = 'col' + ' ' + property
                element.appendChild(newElement)
            }
        }
    }
}

function filter() {
    var input, filter, table, tr, td, i, selected;
    selected = $('#properties_list').val()
    input = document.getElementById("table_filter")
    filter = input.value.toUpperCase()
    table = document.getElementById("main")
    tr = table.getElementsByClassName("row")
    td = table.getElementsByClassName(selected)

    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = "none"
      for (var j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1){
          tr[j].style.display = "" 
        }
      }  
    }
  }