// import the data from data.js
//const is used because we dont want the variable to be reassiagned or reused at all in our program

const tableData = data;


// Reference the HTML table using d3

var tbody = d3.select("tbody");

function buildTable(data){
    //clear data; tells java script to us an empty string when creating the table
    tbody.html("");

    //With this new function, we have essentially chained a for loop to our data.//
    // We also added an argument (dataRow) that will represent each row of the data as we iterate through the array.
    data.forEach((dataRow) => {
        //create a variable that will append a row to the table body
        //tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr")
        let row = tbody.append("tr");
        
        // loop through each field in the dataRow argument. These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table
        //By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings
        //.We've added forEach((val) to specify that we want one object per row.
        Object.values(dataRow).forEach((val) => {

                //action of appending data into a table data tag (<td>)
            let cell = row.append("td");
            //add the values
            cell.text(val);
        });

    });

}

function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");


    let filteredData = tableData;


     // Check to see if a date was entered and filter the
    // data using that date.

    if (date) {

        // Apply `filter` to the table data to only keep the

        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}


// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);