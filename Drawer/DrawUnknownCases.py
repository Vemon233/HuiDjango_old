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

di_id_list = []
di_name_list = []
di_date_list = []
di_country_list = []
di_cases_list = []
di_class_list = []

sqlQuery = "SELECT * FROM disease WHERE class = 'undiagnosed'"
try:
    cur.execute(sqlQuery)
    results = cur.fetchall()
    for row in results:
        di_id_list.append(row[0])
        di_name_list.append(row[1])
        di_date_list.append(row[2])
        di_country_list.append(row[3])
        di_cases_list.append(row[4])
        di_class_list.append(row[5])
except pymysql.Error as e:
    print("Failed: "+str(e))
cur.close()
conn.close()


print('1')
print(len(di_id_list))
print(di_id_list)
print('2')
print(len(di_name_list))
print(di_name_list)
print('3')
print(len(di_date_list))
print(di_date_list)
print('4')
print(len(di_country_list))
print(di_country_list)
print('5')
print(len(di_cases_list))
print(di_cases_list)
print('6')
print(len(di_class_list))
print(di_class_list)
