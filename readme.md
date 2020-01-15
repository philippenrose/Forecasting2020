# Forecasting 20/20

## Purpose:
Predicting and forecasting ETF performance with machine learning.

## Process:

We tested and compared various machine learning algorithims, reliability, and ease of use.

Our first attempt used a Linear Regression model and we were not impressed with it's ability to forecast accurately. 

We decided to simplify our project by eliminating all models that didn't meet the following criteria:

1. The algorithim was relatively simple to use.
2. Results had a margin of error of 1 percent or less. 
3. The models were conducive for time series prediction.

### This left us with the following models to focus on:

- [**FB Prophet**](https://facebook.github.io/prophet/)
- [**LSTM Recurrent Nerual Network**](https://pythonprogramming.net/rnn-tensorflow-python-machine-learning-tutorial/)
- [**ARIMA**](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average/)

### Predictions:

Most of our predictions were within 1-2% from the actual closing price. However, it is not very useful with colatile ETF's and for sudden events like this years market peak.

We recommend that this model only be used to facilitate a trading strategy and not become the trading strategy itself.

