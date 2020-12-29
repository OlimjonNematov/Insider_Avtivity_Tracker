# *
# 0)Infinate loop: refresh "https://www.sec.gov/cgi-bin/browse-edgar?company=&CIK=&type=&owner=include&count=100&action=getcurrent"
#
#   1)get new xml file of all filings
#   2)through xml file, download xml file for each specific filing that is form 4, 8k
#   3)parse xml file
#   4)store data in an array
#   4)
#  *#

from datetime import datetime
import xml.etree.ElementTree as ET
import sys
import os
import webbrowser
import time
import json
import requests
import asyncio
from datetime import datetime
# from urllib.request import urlretrieve as retrieve
################################     insider def      ################################


def main():
    # get daily ndex records
    get_daily_index_record()

    # iteratre through file
    get_xml_files()


def get_daily_index_record():

    # get year, month and date
    year = str(datetime.now().year)
    month = datetime.now().month
    month = str(month) if month > 9 else "0"+str(month)
    day = (datetime.now().day-1)
    day = str(day) if day > 9 else "0"+str(day)

    # determine which quarter
    quarter = ("QTR"+str(int(int(month)/4 + 1)))

    # generate url for daily index
    daily_index_url = "https://www.sec.gov/Archives/edgar/daily-index/" + \
        year+"/"+quarter+"/sitemap."+year+month+day+".xml"

    # request access to url
    r = requests.get(daily_index_url, allow_redirects=True)

    # open the url in a file
    open('edgar.xml', 'wb').write(r.content)


def get_xml_files():

    tree = ET.parse("edgar.xml")
    root = tree.getroot()

    children = root.getchildren()
    links = []

    for child in children:
        node = child.getchildren()
        for n in node:
            if("http://www" in str(n.text)):
                links.append(n.text)

    return links

    # for child in root.iter('loc'):
    #     #for every loc, check if there is a "0000000000" present
    #     # if the zeroes are NOT present, translate to the XML file
    #     print("child: "+child.attrib)

# main()

################################     Description      ################################
# api key fro stocks:  I1EB1GQCSSFFJ3LD
# documentation: https://www.alphavantage.co/documentation/

# This application goes through every security traded in the US through the NYSE and Nasdaq.
# For each stock, the program checks for the current intraday percent change.
# look for these indicators: SMA, MACD, RSI, OBV,

################################     stocks func       ################################

# GETTING DATA SET


def csv_to_list(path):
    lines = []
    with open(path) as file:
        lines = file.readlines()
    return lines


def get_symbols(list):
    new_list = []
    for line in list:
        end = line.find('\"', 1, 7)
        new_list.append((line[1: end]))
    new_list.pop(0)
    return new_list


def get_tickers():
    # urls for download
    nasdaq_url = "https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download"
    nyse_url = "https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nyse&render=download"
    path = "/Users/olimjonnematov/Downloads/companylist.csv"
    # download csv for nasdaq stocks
    # get nasdaq
    webbrowser.open(nasdaq_url)
    time.sleep(2)
    nasdaq_list = csv_to_list(path)
    nasdaq_list = get_symbols(nasdaq_list)
    os.remove(path)
    # get nyse
    webbrowser.open(nyse_url)
    time.sleep(2)
    nyse_list = csv_to_list(path)
    nyse_list = get_symbols(nyse_list)

    # combine the lists
    full_list = nasdaq_list+nyse_list
    os.remove(path)
    return full_list


def get_indicators(stock):
    # date = datetime.today().strftime('%Y-%m-%d')
    # time.sleep(2)
    date = "2020-12-24"
    try:
        # SMA https://www.alphavantage.co/query?function=SMA&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=demo
        response = requests.get("https://www.alphavantage.co/query?function=SMA&symbol=" +
                                stock + "&interval=weekly&time_period=10&series_type=open&apikey=I1EB1GQCSSFFJ3LD")
        response_dict = json.loads(response.text)
        sma = (response_dict["Technical Analysis: SMA"]
               [str(date)]["SMA"])
        response.close()
    except:
        sma = "na"

    try:
        # MACD https://www.alphavantage.co/query?function=MACD&symbol=IBM&interval=daily&series_type=open&apikey=demo
        response = requests.get("https://www.alphavantage.co/query?function=MACD&symbol=" +
                                stock+"&interval=daily&series_type=open&apikey=I1EB1GQCSSFFJ3LD")
        response_dict = json.loads(response.text)
        macd = (response_dict["Technical Analysis: MACD"]
                [str(date)]["MACD"])
        response.close()
    except:
        macd = "na"

    try:
        # RSI https://www.alphavantage.co/query?function=RSI&symbol=IBM&interval=weekly&time_period=10&series_type=open&apikey=demo
        response = requests.get("https://www.alphavantage.co/query?function=RSI&symbol=" +
                                stock + "&interval=weekly&time_period=10&series_type=open&apikey=I1EB1GQCSSFFJ3LD")
        response_dict = json.loads(response.text)
        rsi = (response_dict["Technical Analysis: RSI"]
               [str(date)]["RSI"])
        response.close()
    except:
        rsi = "na"

    try:
        # OBV https://www.alphavantage.co/query?function=OBV&symbol=IBM&interval=weekly&apikey=demo
        response = requests.get("https://www.alphavantage.co/query?function=OBV&symbol=" +
                                stock+"&interval=weekly&apikey=I1EB1GQCSSFFJ3LD")
        response_dict = json.loads(response.text)
        obv = (response_dict["Technical Analysis: OBV"]
               [str(date)]["OBV"])  # change this to current date
        response.close()
    except:
        obv = "na"

    return[stock+" " + str(sma)+" "+str(macd)+" "+str(rsi)+" "+str(obv)]


def for_all(list):
    # api key fro stocks:  I1EB1GQCSSFFJ3LD
    # documentation: https://www.alphavantage.co/documentation/
    updated_list = []

    # for stock in list:
    for stock in list:
        updated_list.append(get_indicators(stock))
    return updated_list


def write_data_to_file(list):
    with open('data.txt', 'w') as f:
        for item in list:
            f.write("%s\n" % item)


################################     __Main__      ################################
# get all trading ticker symbols on nasdaq and nyse
stock_symbols = get_tickers()
print("found "+str(len(stock_symbols))+" tickers")

# for each symbol, use api to get perspective SMA -- MACD -- RSI -- OBV
write_data_to_file(for_all(stock_symbols))

print("done")
