import os
import re
import time
import pymysql
from lxml import etree
from selenium import webdriver

conn = pymysql.connect(
    host='localhost',
    port=3306,
    charset='UTF8',
    user='root',
    password='521365zhh',
    db='diseasedb'
)
cur = conn.cursor()


def cleanstr(text, str):
    pos_end = text.find(str, 1)
    if pos_end > 0:
        text = text[0:pos_end]
    return text


file_dir = "../textFolder"
files = os.listdir(file_dir)

for file in files:
    fo = open(file_dir + "/" + file, 'r', encoding='utf-8')

    # step 1 Get the file id
    di_id = cleanstr(str(fo), '.txt')
    myre = r"[^0-9]"
    pattern1 = re.compile(myre)
    di_id = re.sub(myre, '', di_id)

    driver = webdriver.Chrome()
    url = 'https://promedmail.org/promed-post/?id=20220704.' + di_id
    driver.get(url=url)
    time.sleep(5)
    pageSource = driver.page_source
    tree = etree.HTML(pageSource)
    r = tree.xpath('//p[@class="publish_date_html"]//text()')
    di_date = cleanstr(r[1], ' ')
    di_date = di_date.strip()
    print(di_date)
    break