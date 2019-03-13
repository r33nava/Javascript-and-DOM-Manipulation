// from data.js
var tableData = data;


// Referece for tbody

var tbody = d3.select("#ufo-table>tbody"); 


tableData.forEach(function(ufoData) {

    var row = tbody.append('tr');

    Object.entries(ufoData).forEach(([key, value])=> {

        row.append('td').text(value);

    })

});



// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the 
//  `date/time` column to find rows that match user input.

var button = d3.select("#filter-btn");

// Attach event on selected element to event handler function

button.on("click", eventHandler);


function eventHandler() {

    d3.event.preventDefault();

    inputDate = d3.select(".form-control").node().value;

    console.log(inputDate);

    tbody.html("")

    filteredData = tableData.filter(data=> data.datetime === inputDate);

    console.log(filteredData);

    if (Object.keys(filteredData).length === 0) {

        tbody.html("<tr><td>Date out of range [1/1/2010 - 1/13/2010]</td></tr>");

    } else {

    filteredData.forEach(data=> {

        var row = tbody.append('tr');

        Object.values(data).forEach(val=> row.append('td').text(val));

    })}; 

}