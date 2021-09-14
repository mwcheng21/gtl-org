
var template='<p><a href="audio/{id}.mp3" score="{score}">{titleCn} {speakerCn} {langCn} {titleEn} {speakerEn} {lang}</a></p>\n'
function isCharacterALetter(char) {
  return (/[a-zA-Z]/).test(char)
}
function split_at_index(value, index)
{
 return [value.substring(0, index), value.substring(index)];
}
function splitName(CnEnName){
  var idx = 0;
  if (CnEnName == undefined){
    return ["", ""]
  }
  for (const letter of CnEnName){
    if (isCharacterALetter(letter)){
      return split_at_index(CnEnName, idx);
    }
    idx++;
  }
}
function search(){
	var input = document.getElementById('searchBar').value;
	var isSpeaker=input.includes("speaker:") || input.includes("speakerCn:");
  var isTaiwan=input.includes("lang:tw")
	$("#speakers").hide()
  var names;
	if (isSpeaker){
		$("#speakerInfo").show()
    names = splitName(input.split('speaker:')[1])
    input=" speakerCn:" + names[0] + " speakerEn:" + names[1]
    if (names[0] == ""){
      input = " speakerEn:" + names[1]
    }
    if (names[1] == ""){
      input = " speakerCn:" + names[0]
    }
		$("#speakerName").html(names[0] + "/" + names[1])
	} else{
		$("#speakerInfo").hide()
	}
	var results = idx.search(input)
	output=results.length != 0 ? "" : "No results found";
	for (const i of results) {
		if (i.score > 3){
			result = documents.find(x => x.id === i.ref);
			tmpOutput = template.replace("{id}", result.id)
			tmpOutput = tmpOutput.replace("{titleCn}", result.titleCn == "nan" ? "" : result.titleCn)
			tmpOutput = tmpOutput.replace("{titleEn}", result.titleEn == "nan" ? "" : result.titleEn)
			tmpOutput = tmpOutput.replace("{speakerCn}", result.speakerCn == "nan" ? "" : result.speakerCn)
			tmpOutput = tmpOutput.replace("{speakerEn}", result.speakerEn == "nan" ? "" : result.speakerEn)
			tmpOutput = tmpOutput.replace("{langCn}", result.langCn == "nan" ? "" : result.langCn)
			tmpOutput = tmpOutput.replace("{lang}", result.lang == "nan" ? "" : result.lang)
			tmpOutput = tmpOutput.replace("{score}", i.score)
      if (isTaiwan && result.lang != "Taiwanese"){
        continue;
      }
			if (isSpeaker && !(tmpOutput.toUpperCase().includes(names[0].toUpperCase()) && tmpOutput.toUpperCase().includes(names[1].toUpperCase()))){
					continue
			}
      if (true){
        if (!(isSpeaker || isTaiwan)){
          if (!tmpOutput.toUpperCase().includes(input.toUpperCase())){
            continue
          }
        }
      }
      output+= tmpOutput
		}
	}
	$("#results").html(output)
	if (output == ""){
		$("#speakers").show()
	}
	return false;
}
var a;
function speakerClick(element){
  a = element
  const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
  args = "?"
  args += urlParams.has('lang') ? " lang=" + urlParams.get('lang') + "&" : ""
  var names = splitName(element.innerText)
  args += "speaker=" + names[0].split(',')[0].split(' ')[0] + names[1].split(',')[0]
  location.href=args
}