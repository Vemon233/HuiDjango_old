import os
import re
import pymysql

conn = pymysql.connect(
    host='localhost',
    port=3306,
    charset='UTF8',
    user='root',
    password='521365zhh',
    db='diseasedb'
)
cur = conn.cursor()


def clean_suffix(text, suffix):
    pos = text.find(suffix)
    if pos > -1:
        text = text[0:pos]
    return text


file_dir = "../textFolder"
files = os.listdir(file_dir)

for file in files:
    di_list = []
    fo = open(file_dir + "/" + file, 'r', encoding='utf-8')

    # step 1 Get the file id
    di_id = clean_suffix(str(fo), '.txt')
    myre = r"[^0-9]"
    pattern1 = re.compile(myre)
    di_id = re.sub(myre, '', di_id)
    di_list.append(di_id)

    iter_f = iter(fo)
    file_str = []
    for line in iter_f:
        file_str.append(line)

    # step 2 Get the disease name
    di_name = file_str[0]
    if di_name.find('Hand, foot & mouth disease') > -1:
        di_name = 'Hand foot & mouth disease'
    # a lot of remove the suffix here
    pos_end = di_name.find(' -')
    if pos_end < 0:
        pos_end = di_name.find(' (')
    di_name = di_name[0:pos_end]
    di_name = clean_suffix(di_name, 'UPDATE')
    di_name = clean_suffix(di_name, ' 20')
    di_name = clean_suffix(di_name, ' :')
    di_name = clean_suffix(di_name, ':')
    di_name = clean_suffix(di_name, ' (')
    di_name = clean_suffix(di_name, '(')
    di_name = clean_suffix(di_name, '- ')
    di_name = clean_suffix(di_name, ',')
    if di_name.endswith(' '):
        di_name = di_name.strip()
    di_list.append(di_name)

    # step 3 Get the class of disease
    di_class = ''
    if di_name.find('INTERNATIONAL JOURNAL') > -1:
        di_class = 'no_use'
    if di_name.find('RESEARCH') > -1:
        di_class = 'no_use'
    if di_name.find('ANNOUNCEMENTS') > -1:
        di_class = 'no_use'
    if di_name.find('ANTIMICROBIAL') > -1:
        di_class = 'no_use'
    if di_name.find('SURVEILLANCE') > -1:
        di_class = 'no_use'
    if di_name.find('WHO') > -1:
        di_class = 'no_use'
    if di_name.find('UNDIAGNOSED') > -1:
        di_class = 'undiagnosed'
    di_list.append(di_class)
    di_country = ''

    # step 4 Get the country of the disease
    magic_number = 0
    for line in file_str:
        pos_country = line.find('ProMED map of ')

        if magic_number == 1:
            if not di_country:
                di_country = line.strip()
            di_country = clean_suffix(di_country, ':')
            while di_country.find(', ') > -1:
                pos_comma = di_country.find(', ')
                pos_comma = pos_comma + 2
                di_country = di_country[pos_comma:]
            break

        if pos_country >= 0:
            pos_country = pos_country + 14
            di_country = line[pos_country:]
            di_country = di_country.strip()
            magic_number = 1
        else:
            pos_country = line.find('ProMED map:')
            if pos_country >= 0:
                pos_country = pos_country + 11
                di_country = line[pos_country:]
                di_country = di_country.strip()
                magic_number = 1

    if not di_country:
        di_country = file_str[0]
        pos_country = di_country.find(' - ')

        if pos_country >= 0:
            pos_country = pos_country + 3
            di_country = di_country[pos_country:]
        else:
            di_country = ''

        di_country = di_country.strip()
        di_country = clean_suffix(di_country, ' (')
        di_country = clean_suffix(di_country, ':')
        di_country = clean_suffix(di_country, ',')

    di_list.append(di_country)
    print(di_list)

    # step 5 Get the cases of the disease


# sqlQuery = " INSERT INTO disease (id, name, date, country, cases) VALUE (%s,%s,str_to_date(%s,'%%Y-%%m-%%d'),%s,%s) "
# value = ('5666666', 'Monkeypox', '2018-01-01', 'China', 5)
# try:
#     cur.execute(sqlQuery, value)
#     conn.commit()
#     print('数据插入成功！')
# except pymysql.Error as e:
#     print("数据插入失败："+e)
#     conn.rollback()
#
#
# conn.commit()
# print("success")
#
# cur.close()
# conn.close()
