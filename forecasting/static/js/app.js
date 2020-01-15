// set the dimensions and margins of the graph
var width = 450
    height = 450
    margin = 40

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
var radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// create 2 data_set
var data1 = {a: 3, b: 2, c:2, d:2, e:2, f:40, g:80, h:60, i:20, j:0, k:0}
var data2 = {a: 2, b: 40, c:1, d:2, e:40, f:40, g:40, h:40, i:3, j:0, k:0}
var data3 = {a: 2, b: 20, c:20, d:2, e:20, f:20, g:20, h:2, i:2, j:0, k:0}
var data4 = {a: 11, b: 20, c:32, d:32, e:11, f:3, g:2, h:2, i:3, j:0, k:0}
var data5 = {a: 11, b: 20, c:30, d:30, e:11, f:2, g:1, h:2, i:2, j:0, k:0}

var risky = ({
    "Risk Level":"High Risk",
    "Mean Annual Return": "1.49",
    "Average Return": "18.95",
    "Alpha":"6.16",
    "Beta":"1.21",
    "Sharpe":"0.97",
    "R-Squared":"63.79",
    "Standard Deviation":"17.98",
    "Treynor":"14.38"
    })

   
var modhigh = ({
        "Risk Level":"Moderate High",
        "Mean Annual Return": "1.35",
        "Average Return": "17.4",
        "Alpha":"5.73",
        "Beta":"1.06",
        "Sharpe":"0.91",
        "R-Squared":"55.37",
        "Standard Deviation":"16.85",
        "Treynor":"14.36",
    })
var mod = ({
        "Risk Level":"Moderate",
        "Mean Annual Return": "1.19",
        "Average Return": "15.11",
        "Alpha":"5.97",
        "Beta":"0.81",
        "Sharpe":"0.94",
        "R-Squared":"47.85",
        "Standard Deviation":"14.1",
        "Treynor":"19.28",
    })
var modlow = ({
        "Risk Level":"Moderate Low",
        "Mean Annual Return": "0.83",
        "Average Return": "12.10",
        "Alpha":"3.38",
        "Beta":"0.62",
        "Sharpe":"0.71",
        "R-Squared":"34.96",
        "Standard Deviation":"12.67",
        "Treynor":"18.44",
    })
var low = ({
        "Risk Level":"Low",
        "Mean Annual Return": "0.84",
        "Average Return": "12.34",
        "Alpha":"4.01",
        "Beta":"0.56",
        "Sharpe":"0.74",
        "R-Squared":"30.15",
        "Standard Deviation":"12.43",
        "Treynor":"20.06",
    })


// set the color scale
var color = d3.scaleOrdinal()
  .domain(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"])
  .range(d3.schemeCategory20b);

// A function that create / update the plot for a given variable:
function update(data) {

  // Compute the position of each group on the pie:
  var pie = d3.pie()
    .value(function(d) {return d.value; })
    .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var data_ready = pie(d3.entries(data))

  // map to data
  var u = svg.selectAll("path")
    .data(data_ready)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  u
    .enter()
    .append('path')
    .merge(u)
    .transition()
    .duration(1000)
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data.key)) })
    .attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1)    

  u
    .exit()
    .remove()


}



// Initialize the plot with the first dataset
update(data3)
    

function riskcard(data) {
  const $summary3 = $('#summary3');

  $summary3.html('');

  let htmlString = '<ul>';
  // $summary3.append('<ul>');

  Object.entries(data).forEach(function ([key, value]) {
      // console.log(`${key}: ${value}`);

      // $summary3.html('');
      htmlString += `<p>${key}: ${value}</p>`;
  });

  htmlString += '</ul>';

  $summary3.append(htmlString);
}

riskcard(mod)


// Legend Code

var svg2 = d3.select("#my_dataviz2")

svg2.append("circle").attr("cx",20).attr("cy",70).attr("r", 6).style("fill", "#373C76")
svg2.append("circle").attr("cx",20).attr("cy",100).attr("r", 6).style("fill", "#5253A3")
svg2.append("circle").attr("cx",20).attr("cy",130).attr("r", 6).style("fill", "#6B6ECE")
svg2.append("circle").attr("cx",20).attr("cy",160).attr("r", 6).style("fill", "#9D9EDE")
svg2.append("circle").attr("cx",20).attr("cy",190).attr("r", 6).style("fill", "#637A32")
svg2.append("circle").attr("cx",20).attr("cy",220).attr("r", 6).style("fill", "#8CA152")
svg2.append("circle").attr("cx",20).attr("cy",250).attr("r", 6).style("fill", "#B4D06C")
svg2.append("circle").attr("cx",20).attr("cy",280).attr("r", 6).style("fill", "#CDDC9B")
svg2.append("circle").attr("cx",20).attr("cy",310).attr("r", 6).style("fill", "#8B6C33")
svg2.append("circle").attr("cx",20).attr("cy",340).attr("r", 6).style("fill", "#BE9E39")
svg2.append("circle").attr("cx",20).attr("cy",370).attr("r", 6).style("fill", "#E9BB51")
svg2.append("text").attr("x", 40).attr("y", 70).text("Communication").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 100).text("Real Estate").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 130).text("Utilities").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 160).text("Consumer Defensive").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 190).text("Financial").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 220).text("Consumer Cyclical").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 250).text("Technology").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 280).text("Healthcare").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 310).text("Industrials").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 340).text("Energy").style("font-size", "15px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 40).attr("y", 370).text("Materials").style("font-size", "15px").attr("alignment-baseline","middle")
