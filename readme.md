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

### This left us with the following models:

- [**FB Prophet**](https://facebook.github.io/prophet/)
- [**LSTM Recurrent Nerual Network**](https://pythonprogramming.net/rnn-tensorflow-python-machine-learning-tutorial/)

### Prerequisites:

[![Homer_Simpson](https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDF_brfZPmjM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDF_brfZPmjM&docid=62W_6Z3P-tYylM&tbnid=rdpQ-p77XMo-EM%3A&vet=10ahUKEwjkxOKuwIbnAhUB7awKHc9CD88QMwgsKAAwAA..i&w=1280&h=720&bih=587&biw=1280&q=.https%2F%2Fyoutu.be%2FDF_brfZPmjM.jpg&ved=0ahUKEwjkxOKuwIbnAhUB7awKHc9CD88QMwgsKAAwAA&iact=mrc&uact=8)](https://youtu.be/DF_brfZPmjM)
