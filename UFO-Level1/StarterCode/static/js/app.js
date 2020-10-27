// from data.js
const tableData = data;
var tbody = d3.select("tbody");
function intTable(data){
    tbody.html("");

    data.forEach((ufoData) =>  {
    var datarow =  tbody.append("tr");
    // loop through each field in the data
    Object.values(ufoData).forEach((value)=>{
    var datacell = datarow.append("td")
        datacell.text(value);
     } )
     })
};
intTable(tableData);
// YOUR CODE HERE!
//select <tbody>
// var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");
// var table = d3.select("table");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    // let filterData = tableData;
    var input = d3.select("input");
    var inputValue = input.property("value");
// return value if matches
var filterDate = data.filter(data => data.datetime === inputValue)
// filterDate.forEach((runfilterData) => { 
//     var datarow =  tbody.append("tr");
//     // loop through each field in the data
//     Object.values(runfilterData).forEach((value) => {
//     var datacell = datarow.append("td")
//         datacell.text(value);
    //  } )
    intTable(filterDate);

};




// function intTable(data){
//     tbody.html("");

//     data.forEach((ufoData) =>  {
//     var datarow =  tbody.append("tr");
//     // loop through each field in the data
//     Object.values(ufoData).forEach((value)=>{
//     var datacell = datarow.append("td")
//         datacell.text(value);
//      } )
//      })
// };
// intTable(tableData);











