#*
# 0)Infinate loop: refresh "https://www.sec.gov/cgi-bin/browse-edgar?company=&CIK=&type=&owner=include&count=100&action=getcurrent"
#
#   1)get new xml file of all filings
#   2)through xml file, download xml file for each specific filing that is form 4, 8k
#   3)parse xml file
#   4)store data in an array 
#   4)
#  *#
import requests
import feedparser
from datetime import datetime
import xml.etree.ElementTree as ET

################################     Funtions      ################################
def main():
    #get daily ndex records
    get_daily_index_record()
    
    #iteratre through file
    get_xml_files()

def get_daily_index_record():

    # get year, month and date
    year=str(datetime.now().year)
    month=datetime.now().month
    month=str(month) if month>9  else "0"+str(month)
    day=(datetime.now().day-1)
    day= str(day) if day>9 else "0"+str(day)

    #determine which quarter
    quarter=("QTR"+str(int(int(month)/4 +1)))

    #generate url for daily index
    daily_index_url="https://www.sec.gov/Archives/edgar/daily-index/"+year+"/"+quarter+"/sitemap."+year+month+day+".xml"

    # request access to url
    r = requests.get(daily_index_url, allow_redirects=True)

    # open the url in a file
    open('edgar.xml', 'wb').write(r.content)
    print(daily_index_url)

def get_xml_files():

    tree=ET.parse("edgar.xml")
    root=tree.getroot()

    children=root.getchildren()
    link=[]

    for child in children:
        node=child.getchildren()
        for n in node:
            if("http://www" in str(n.text)):
                link.append(n.text)

    # for child in root.iter('loc'):
    #     #for every loc, check if there is a "0000000000" present
    #     # if the zeroes are NOT present, translate to the XML file
    #     print("child: "+child.attrib)


################################     __Main__      ################################
main()