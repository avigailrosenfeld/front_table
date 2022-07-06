import dataTable from '../data_table.json' assert {type: 'json'}

var result = []
for(var i in dataTable){
    result.push(dataTable [i])
}

$("#properties_list").select2({});

var propertiesList = document.getElementById('properties_list')
var main = document.getElementById('main')
iterateTableTitles(result[0], main, propertiesList)
iterateTable(result, main)


