

// let dropdown = $('#selDataset');

// dropdown.empty();

// dropdown.append('<option selected="true" disabled>Choose ETF</option>');
// dropdown.prop('selectedIndex', 0);


// const jsonurl = 'https://api.myjson.com/bins/16vwi6';

// $.getJSON(jsonurl, function (data) {
//   $.each(data, function (key, entry) {
//     dropdown.append($('<option></option>').attr('value', entry.symbol).text(entry.name));
//   })
// });


// var pic1 = [
//   {
//   "ticket":"SPY",
//   "link":"spymovement.png"
//   },
//   {
//   "ticker":"VV",
//   "link":"vvmovement.png"
//   },
//   {
//   "ticker":"QQQ",
//   "link":"link":"spymovement.png"
// },
// {
//   "ticker":"SPLV",
//   "link":"link":"spymovement.png"
// },
// {
//   "ticker":"LQD",
//   "link":"link":"spymovement.png"
// },
// {
//   "ticker":"MBB",
//   "link":"link":"spymovement.png"
// }]

var pic1 = "spymovement.png"

// var pic1 =  [
//  {
//   "ticker": "SPY",
//   "image": "images/allimages/spymovement.png"
// },
// {
//   "ticker": "VV",
//   "image": "images/allimages/vvmovement.png"
// },
// {
//   "ticker": "QQQ",
//   "image": "images/allimages/qqqmovement.png"
// },
// {
//   "ticker": "SPLV",
//   "image": "images/allimages/splvmovement.png"
// },
// {
//   "ticker": "LQD",
//   "image": "images/allimages/lqdmovement.png"
// },
// {
//   "ticker": "MBB",
//   "image": "images/allimages/mbbmovement.png"
// }];

var pic2 = ({
  "SPY":"spypred.png"
})

var pic3 = ({
  "SPY":"spypred2.png"
},
  {
    "ticker":"VV"
  })

var pic4 = ({
  "SPY":"what.png"
})

var pic2 = "spypred.png"

var pic3 = "spypred2.png"

var pic4 = "what.png"
// var mod = ({
//   "Risk Level":"Moderate",
//   "Mean Annual Return": "1.19",
//   "Average Return": "15.11",
//   "Alpha":"5.97",
//   "Beta":"0.81",
//   "Sharpe":"0.94",
//   "R-Squared":"47.85",
//   "Standard Deviation":"14.1",
//   "Treynor":"19.28",
// })

// {
//   "sectors": "Computer and Technology",
//   "stock_prices": "$20.36 per share",
//   "symbol": "AAPL",
//   "hq_location": "Cupertino, California",
//   "pe_growth": 1.87,
//   "esg_per": "5.93%",
//   "market_cap": "$1.18 trillion",
//   "annual_sales": "$260.17 billion",
//   "website": "http://www.apple.com/",
//   "name": "Apple Inc.",
//   "sub_sector": "Technology Hardware, Storage & Peripherals",
//   "employees": "137,000",
//   "ptc_flow": 17.21
// }


function modelOne(data) {

    // if (data==="Choose ETF") return;

    var img = d3.select("#modelpic")
    console.log(data)
    img.append("img").attr('xlink:src', `${data}`).attr("width",500).attr("height",300)

}

// function picture(data){ 


//   var inputElement = d3.select("#selDataset");

//   var inputValue = inputElement.property("value");
//   console.log(inputValue);

//   var filteredData = inputValue.filter(data => data.ticker === inputValue);
//   console.log(filteredData)
  
//   var imageurl= filteredData.filter(d => dd.image);
//   console.log(imageurl)

//   if (inputValue=filteredData) {
//   // document.getElementById('modelpic').src=`${data}`
//     document.getElementById('modelpic').src=`${imageurl}`
//   }

// };

function picture(data) {
    document.getElementById('modelpic').src=`${data}`
}


// function riskcard(data) {
//   const $summary3 = $('#modelpic');

//   $summary3.html('');

//   let htmlString = '<img';
//   // $summary3.append('<ul>');

//   if (inputValue=filteredData) {
//   Object.entries(data).forEach(function ([key, value]) {
//       // console.log(`${key}: ${value}`);

//       // $summary3.html('');
//       htmlString += `<p>${key}: ${value}</p>`;
//   });
// }

//   htmlString += '</img>';

//   $summary3.append(htmlString);
// }


// function buildCharts(sample) {

//   // @TODO: Use `d3.json` to fetch the sample data for the plots
//   var chartData=`/samples/${sample}`;
 
//     // @TODO: Build a Bubble Chart using the sample data
//     d3.json(chartData).then(function(data) {
//       var xData = data.otu_ids;
//       var yData = data.sample_values;
//       var size = data.sample_vales;
//       var colour = data.otu_ids;
//       var labels = data.otu_labels;
//       var hover = data.otu_labels;        
//     )}
//   };

  