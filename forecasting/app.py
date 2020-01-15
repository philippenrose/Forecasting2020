# Import Dependencies

import os

import pandas as pd
import numpy as np
from datetime import datetime

from flask import Flask, jsonify, render_template
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/etfiso.sqlite"
# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()

# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# etf_table = Base.classes.etf_data


########## Initial Page Route ##########
@app.route('/')
def index():
    """Return the homepage."""
    return render_template('index.html')


########## Render other Templates ##########
@app.route('/home')
def home():
    """Return the homepage."""
    return render_template('index.html')

@app.route('/aboutus')
def aboutme():
    """Return the ETF search page"""
    return render_template('about.html')

@app.route('/machinelearn')
def machinelearn():
    """Return the ETF search page"""
    return render_template('machine.html')

@app.route('/frontml')
def machinelearn2():
    """Return the ETF search page"""
    return render_template('frontml.html')

@app.route('/risk')
def risk():
    """Return risk homepage"""
    return render_template('risk.html')

# ########## Route to search for specific ETF stats ##########
# @app.route("/ticker")
# def ticker():
#     """Return a list of unique tickers for the dropdown."""

#     sel = [
#         etf_table.ticker
#     ]
#     results = db.session.query(*sel).all()

#     # Dictionary entry for each row of information 
#     tickers = []

#     for r in results:
#         ticker = r
#         tickers.append(ticker)

#     # Removing duplicate ticker symbols    
#     seen = set()
#     unique_ticker = []

#     for t in tickers:
#         if t not in seen:
#             seen.add(t)
#             unique_ticker.append(t)

#     unique_tickers = []
#     no = 0
#     for t in unique_ticker:
#         etfs = {}
#         etfs["ticker"] = t
#         no = no + 1
#         etfs["id"] = no
#         unique_tickers.append(etfs)


#     return render_template('search.html')
    # return jsonify(unique_tickers)


########## Generate the Line Graph ##########
# @app.route("/line_graph/<etf>")
# def line_graph(etf):
#     """Return information to create a line graph."""

#     sel = [
#         etf_table.date,
#         etf_table.close,
#         etf_table.ticker
#     ]

#     results = db.session.query(*sel).filter(etf_table.ticker == etf).all()
#     # print(results)

#     etf_stats = []

#     for r in results:
#         etf = {}
#         etf["date"] = r[0]
#         etf["close"] = r[1]
#         etf["ticker"] = r[2]
#         etf_stats.append(etf)
 
#     # return render_template('search.html')
#     return jsonify(etf_stats)



####################################################
#####                TEST ROUTE                #####
####################################################

# @app.route("/test/<etf>")
# def test(etf):
#     """Return `date`, `close`, `ticker`"""

#     stmt = db.session.query(etf_table).statement
#     df = pd.read_sql_query(stmt, db.session.bind)
#     print(df)

#     # results = db.session.query(*sel).filter(daily_etf.date).all()
#     sample_data = df.loc[df[etf] == etf, ["date", "close", etf]]


#     sample_data.sort_values(by="date", ascending=False, inplace=True)

#     results = {
#         "tickers": sample_data[etf].tolist(),
#         "dates": sample_data.date.tolist(),
#         "close_prices": sample_data.close.values.tolist(),
#     }

#     return jsonify(results)
    # return jsonify(dates)


# @app.route("/test_graph/<etf>")
# def test_graph(etf):
#     """Return information to create a line graph."""
#     sel = [
#         etf_table.date,
#         etf_table.close,
#         etf_table.ticker
#     ]
#     results = db.session.query(*sel).filter(etf_table.ticker == etf).all()
#     # print(results)
#     etf_stats = []
#     for r in results:
#         etf = {}
#         etf["datum"] = r[0]
#         etf["close"] = r[1]
#         etf["ticker"] = r[2]
#         etf_stats.append(etf)
#     ###########
#     test = [{"close":111,"datum":"2015-01-01","ticker":"SPY"}]
#     return jsonify(test)
    #return jsonify(etf_stats)
    ##########


if __name__ == "__main__":
    app.run(debug=True)