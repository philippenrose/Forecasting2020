var SPY = {
  picture1: "static/images/spymovement.png",
  picture2: "static/images/spypred.png",
  picture3: "static/images/spypred2.png",
  picture4: "static/images/spy_fbproph_forecast.png",
};

var LQD = {
  picture1: "static/images/lqdmovement.png",
  picture2: "static/images/lqdpred.png",
  picture3: "static/images/lqdpred2.png",
  picture4: "static/images/lqd_fbproph_forecast.png",
};

var QQQ = {
  picture1: "static/images/qqqmovement.png",
  picture2: "static/images/qqqpred.png",
  picture3: "static/images/qqqpred2.png",
  picture4: "static/images/qqq_fbproph_forecast.png",
};

var SPLV = {
  picture1: "static/images/splvmovement.png",
  picture2: "static/images/splvpred.png",
  picture3: "static/images/splvpred2.png",
  picture4: "static/images/splv_fbproph_forecast.png",
};

var VV = {
  picture1: "static/images/vvmovement.png",
  picture2: "static/images/vvpred.png",
  picture3: "static/images/vvpred2.png",
  picture4: "static/images/vv_fbproph_forecast.png",
};

function picture2(data) {

  var inputElement = d3.select("#selDataset");
  var inputValue = inputElement.property("value");

  switch (inputValue) {
    case "SPY":
      document.getElementById('modelpic').src = SPY[data]
      break;
    case "LQD":
      document.getElementById('modelpic').src = LQD[data]
      break;
    case "VV":
      document.getElementById('modelpic').src = VV[data]
      break;
    case "QQQ":
      document.getElementById('modelpic').src = QQQ[data]
      break;
    case "SPLV":
      document.getElementById('modelpic').src = SPLV[data]
      break;
    default:
    // code block
  }
// 
  d3.select(".ETFlabel").select("p").text(`ETF : ${inputValue}`)
}