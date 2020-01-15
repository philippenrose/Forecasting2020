// will populate the dropdown list with each of the 100 ETFs
function etfListSetup() {
    var selector = d3.select("#selDataset");
    $("selDataset").prepend("<option value='' selected='selected'>(Select ETF)</option>");
    d3.csv("./static/js/tickers.csv").then((datas) => {
        // console.log(datas)
        // aaa = JSON.parse(aaa);
        datas.forEach((d) => {
            // console.log(d.ticker)
            selector
              .append("option")
              .text(d.ticker)
              .property("value", d.ticker)
        });
    });

//   var selector = d3.select("#selDataset");

//   $("#selDataset").prepend("<option value='' selected='selected'>(Select ETF)</option>");
//    d3.json(`/ticker`).then((aaa) => {
//       aaa.forEach((x) => {
//         selector
//            .append("option")
//            .text(`${x.ticker}`)
//            .property("value", x.ticker);
//       });
//     });
};
etfListSetup();

function buildStats() {

    // Grab the value from ETF dropdown
    var inputElement = d3.select("#selDataset");
    var searchEtf = inputElement.property("value");
    console.log(searchEtf);
    var url = `/line_graph/${searchEtf}`
    console.log(url)

    // Clear the previous line graph
    d3.select("#lineGraph").html("");

    // Calling flask for the jsonify data on specified ETF
  d3.json(url).then((response) => {
    //   console.log('got here');
    //   response = JSON.parse(response)
      console.log(response);

    // Create margins
      var margin = {top: 50, right: 10, bottom: 30, left: 50},
      width = 900 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#lineGraph").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // parse the date / time functional variable
        var parseTime = d3.timeParse("%Y-%m-%d");

        // parse the data
        response.forEach(function(d) {
            d.date = parseTime(d.date);
            d.close = +d.close;
        });

        // set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // scale the range
        x.domain(d3.extent(response, function(d) { return d.date; }));
        y.domain([d3.min(response, function(d){return d.close}),
            d3.max(response, function(d) { return d.close; })]);
        
        // define the line
        var valueline = d3.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.close); });
        // console.log(valueline)
 
        // // Add the valueline path.
        svg.append("path")
            .data([response])
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("class", "line")
            .attr("d", valueline);

        // Add the X Axis
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        // Add the Y Axis  
        svg.append("g")
            .call(d3.axisLeft(y));

        // appending y-axis title to the page
        svg.append('text')
        .attr('class', 'label')
        .attr('x', -(height / 2) - margin.left/2)
        .attr('y', -20)
        .attr('transform', 'rotate(-90)')
        .attr('text-anchor', 'middle')
        .text('Price in USD')

        // appending x-axis title to the page
        svg.append('text')
        .attr('class', 'label')
        .attr('x', width / 2 + margin.left)
        .attr('y', height + (margin.bottom / 2 ) + 40)
        .attr('text-anchor', 'middle')
        // .text('Time')

        // appending title to the page
        svg.append('text')
        .attr('class', 'title')
        .attr('x', width / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .text(`${searchEtf} Performance Since 2015`)

    }); //end of d3 promise
}; //end of function

function etfData() {


    // End Line Graph Build
    // Start Scorecard Build in the same promise

    // Dummy Data
    // var etfData = [
    //     {"Ticker": "SPY", "2019 Change": "+ 14.22%", "Predicted Change": "Sino-Tibetan"},
    //     {"Ticker": "BIV", "2019 Change": "+ 10.22%", "Predicted Change": "Indo-European"},
    //     {"Ticker": "BND", "2019 Change": "- 2.22%", "Predicted Change": "Indo-European"},
    //     {"Ticker": "BSV", "2019 Change": "+ 14.22%", "Predicted Change": "Indo-European"},
    //    ];
    // d3.csv("./static/js/metadata.csv").then((datas) => {
    //     // console.log(datas)
    //     datas.forEach((d) => {
    //         d.ID = +d.ID
    //         d.ticker = d.ticker;
    //         d.date = d.date;
    //         d.close = +d.close;
    //         }
    //     });

    //    console.log(etfData);
    //    console.log(searchEtf);
 
    // Use the variable searchEtf to grab relevant fund
    var metadata = d3.select("#etfScorecard")

    // clear html data from last call 
    metadata.html("");
    
    //   if (etfData.Ticker === searchEtf) {
    //     // create the list inside metadata table
    //     var row = metadata.append('ul');
    //     Object.entries(etfData).forEach(function([key,value]) {
    //     var cell = row.append('li');
    //     cell.text(`${key}: ${value}`);
    //     });

    //   }; //end if statement

};