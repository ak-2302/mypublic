import json
from bs4 import BeautifulSoup
path = "manaba - home.html"
with open(path,"r",encoding="utf-8") as f:
    data = f.read()
    bs = BeautifulSoup(data)
list=bs.find_all("span",class_="courselist-title")
dict={}
for i in list:
    try:
        dict[str(i.a.get("title"))] = {}
        dict[str(i.a.get("title"))]["manaba"] = "https://manaba.tsukuba.ac.jp/ct/"+str(i.a.get("href"))
        dict[str(i.a.get("title"))]["shirabasu"] = "https://kdb.tsukuba.ac.jp/syllabi/2024/"
    except:
        True
with open("data.json","w",encoding="utf-8") as f:
    json.dump(dict,f,ensure_ascii=False)