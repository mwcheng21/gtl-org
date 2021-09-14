import pandas as pd

def cleanString(i):
	output = str(i).replace('""', '"')
	return output.replace('"', "'")
with open("index.js", "w") as f:
	f.write("")
with open("index.js", "a") as f:
	f.write("const documents = [\n")
	xls = pd.ExcelFile(r"gtl.xls") #use r before absolute file path 
	sheetX = xls.parse(4)
	subject = sheetX['Subject Code']
	audioId = sheetX['The Code']
	chineseSpeaker = sheetX['講員 Speaker']
	chineseTitle = sheetX['主題 Title']
	englishSpeaker = sheetX['Speaker']
	englishTitle = sheetX['English']
	language = sheetX['Language']
	chineseLanguage = sheetX['語言']

	for i in range(0,len(audioId)):
		output="\t{\n"
		output+=f'\t\tid:"{audioId[i]}",\n'
		#output+=f'\t\sub:"{subject[i]}",\n'
		output+=f'\t\tlang:"{language[i]}",\n'
		output+=f'\t\tlangCn:"{chineseLanguage[i]}",\n'
		output+=f'\t\tspeakerCn:"{chineseSpeaker[i]}",\n'
		output+=f'\t\tspeakerEn:"{englishSpeaker[i]}",\n'
		output+=f'\t\ttitleCn:"{cleanString(chineseTitle[i])}",\n'
		output+=f'\t\ttitleEn:"{cleanString(englishTitle[i])}"\n'
		output+="\t}"
		if (i != len(audioId)-1):
			output+=","
		output+="\n"
		f.write(output)

	f.write("\n]")