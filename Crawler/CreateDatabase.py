import pymysql

conn = pymysql.connect(
    host='localhost',
    port=3306,
    charset='UTF8',
    user='root',
    password='521365zhh',
)
cur = conn.cursor()
cur.execute("drop database if exists diseasedb")
cur.execute("create database diseasedb default charset utf8 collate utf8_general_ci")
cur.execute("use diseasedb")
sql = '''
create table disease(
    id char(7) not null primary key,
    name varchar(40) NOT NULL,
    date DATE,
    country varchar(20),
    cases INT DEFAULT 1,
    class varchar(10)
)
'''
cur.execute(sql)
conn.commit()
print("success")

cur.close()
conn.close()
