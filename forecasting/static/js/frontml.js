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
  picture1: "static/images/splv_seasonality.png",
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

var DIA = {
  picture1: "static/images/dia_seasonality.png",
  picture2: "static/images/dia_arima.png",
  picture3: "static/images/dia_arima2.png",
  picture4: "static/images/dia_fbproph_forecast.png",
};

var IBB = {
  picture1: "static/images/ibb_seasonality.png",
  picture2: "static/images/ibb_arima.png",
  picture3: "static/images/ibb_arima2.png",
  picture4: "static/images/ibb_fbproph_forecast.png",
};

var JNK = {
  picture1: "static/images/jnk_seasonality.png",
  picture2: "static/images/jnk_arima.png",
  picture3: "static/images/jnk_arima2.png",
  picture4: "static/images/jnk_fbproph_forecast.png",
};

var MBB = {
  picture1: "static/images/mbb_seasonality.png",
  picture2: "static/images/mbb_arima.png",
  picture3: "static/images/mbb_arima2.png",
  picture4: "static/images/mbb_fbproph_forecast.png",
};

var MINT = {
  picture1: "static/images/mint_seasonality.png",
  picture2: "static/images/mint_arima.png",
  picture3: "static/images/mint_arima2.png",
  picture4: "static/images/mint_fbproph_forecast.png",
};

var SCZ = {
  picture1: "static/images/scz_seasonality.png",
  picture2: "static/images/scz_arima.png",
  picture3: "static/images/scz_arima2.png",
  picture4: "static/images/scz_fbproph_forecast.png",
};

var SHY = {
  picture1: "static/images/shy_seasonality.png",
  picture2: "static/images/shy_arima.png",
  picture3: "static/images/shy_arima2.png",
  picture4: "static/images/shy_fbproph_forecast.png",
};

var VGT = {
  picture1: "static/images/vgt_seasonality.png",
  picture2: "static/images/vgt_arima.png",
  picture3: "static/images/vgt_arima2.png",
  picture4: "static/images/vgt_fbproph_forecast.png",
};

var VT = {
  picture1: "static/images/vt_seasonality.png",
  picture2: "static/images/vt_arima.png",
  picture3: "static/images/vt_arima2.png",
  picture4: "static/images/vt_fbproph_forecast.png",
};

var XLK = {
  picture1: "static/images/xlk_seasonality.png",
  picture2: "static/images/xlk_arima.png",
  picture3: "static/images/xlk_arima2.png",
  picture4: "static/images/xlk_fbproph_forecast.png",
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
    case "DIA":
      document.getElementById('modelpic').src = DIA[data]
      break;
    case "IBB":
      document.getElementById('modelpic').src = IBB[data]
      break;
    case "JNK":
      document.getElementById('modelpic').src = JNK[data]
      break;
    case "MBB":
      document.getElementById('modelpic').src = MBB[data]
      break;
    case "MINT":
      document.getElementById('modelpic').src = MINT[data]
      break;
    case "SCZ":
      document.getElementById('modelpic').src = SCZ[data]
      break;
    case "SHY":
      document.getElementById('modelpic').src = SHY[data]
      break;
    case "VGT":
      document.getElementById('modelpic').src = VGT[data]
      break;
    case "VT":
      document.getElementById('modelpic').src = VT[data]
      break;
    case "XLK":
      document.getElementById('modelpic').src = XLK[data]
      break;
    default:
    // code block
  }
// 
  d3.select(".ETFlabel").select("p").text(`ETF : ${inputValue}`)
}