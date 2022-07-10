import dataTable from '../example_data.json' assert {type: 'json'}

//Get data from json 
let result = []
for(let i in dataTable){
    result.push(dataTable [i])
}

//Load select2
$("#properties_list").select2({});

//Build data table
let propertiesList = document.getElementById('properties_list')
let main = document.getElementById('main')
iterateTableTitles(result[0], main, propertiesList)
iterateTable(result, main)


