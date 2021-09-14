import pandas as pd

with open("speaker.txt", "w") as f:
	f.write("")
myset = {}
xls = pd.ExcelFile(r"gtl.xls") #use r before absolute file path 
sheetX = xls.parse(4)
chineseSpeaker = sheetX['講員 Speaker']
englishSpeaker = sheetX['Speaker']
language = sheetX['Language']
chineseLanguage = sheetX['語言']
church = sheetX['出版者 Church organization']
for i in range(0,len(chineseSpeaker)):
    myset[chineseSpeaker[i]] = {
        "speakerEn":englishSpeaker[i],
        "speakerCn":chineseSpeaker[i],
        "church":church[i],
        "language":language[i],
        "languageCn":chineseLanguage[i]
    }
print(myset)