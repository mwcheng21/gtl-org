const documents = [
	{
		id:"0001a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(一) 耶穌降生",
		titleEn:"The Life of Jesus: Birth of Jesus"
	},
	{
		id:"0001b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(一) 選召門徒",
		titleEn:"The Life of Jesus: The calling of Disciples"
	},
	{
		id:"0001",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"Pastor LC Cheng",
		titleCn:"良友之聲－真神上帝(一)",
		titleEn:"The Living God(1)"
	},
	{
		id:"0002a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(二) 耶穌傳道",
		titleEn:"The Life of Jesus: The preaching of Jesus"
	},
	{
		id:"0002b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(二) 登山寶訓",
		titleEn:"The Life of Jesus: The Beatitude"
	},
	{
		id:"0002",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－真神上帝(二)",
		titleEn:"The Living God(2)"
	},
	{
		id:"0003a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(三) 天國比喻",
		titleEn:"The Life of Jesus: The Parables of Kingdom of God"
	},
	{
		id:"0003b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(三) 耶穌醫病",
		titleEn:"The Life of Jesus: The healing of Jesus"
	},
	{
		id:"0003",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－真神上帝(三)",
		titleEn:"The Living God(3)"
	},
	{
		id:"0004a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(四) 登山變像",
		titleEn:"The Life of Jesus"
	},
	{
		id:"0004b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(四) 愛與饒恕",
		titleEn:"The Life of Jesus: love and forgiveness"
	},
	{
		id:"0004",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－真神上帝(四)",
		titleEn:"The Living God(4)"
	},
	{
		id:"0005a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(五) 良牧耶穌",
		titleEn:"The Life of Jesus: Jesus the good shepherd"
	},
	{
		id:"0005b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(五) 論真財寶",
		titleEn:"The Life of Jesus: On true treasure"
	},
	{
		id:"0005",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－真神上帝(五)",
		titleEn:"The Living God(5)"
	},
	{
		id:"0006a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(六) 浪子回頭",
		titleEn:"The Life of Jesus: The prodigal"
	},
	{
		id:"0006b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(六) 禱告真義",
		titleEn:"The Life of Jesus: The true meaning of prayer"
	},
	{
		id:"0006",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－人類之來源(一)",
		titleEn:"Beginnings of Mankind(1)"
	},
	{
		id:"0007a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(七) 和散那王",
		titleEn:"The Life of Jesus: King of Hosanna"
	},
	{
		id:"0007b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(七) 最後晚餐",
		titleEn:"The Life of Jesus: The last Supper"
	},
	{
		id:"0007",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－人類之來源(二)",
		titleEn:"Beginnings of Mankind(2)"
	},
	{
		id:"0008a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(八) 臨別訓言",
		titleEn:"The Life of Jesus: The farewell teaching"
	},
	{
		id:"0008b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(八) 耶穌被賣",
		titleEn:"The Life of Jesus: The sell of Jesus"
	},
	{
		id:"0008",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－人類之來源(三)",
		titleEn:"Beginnings of Mankind(3)"
	},
	{
		id:"0009a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(九) 耶穌受難",
		titleEn:"The Life of Jesus: Crucifixion"
	},
	{
		id:"0009b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌生平(九) 耶穌復活",
		titleEn:"The Life of Jesus: Resurrection"
	},
	{
		id:"0009",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－天使是什麼(一)",
		titleEn:"What is Angel (1)"
	},
	{
		id:"0010a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(一) 耶穌降生",
		titleEn:"The biography of Jesus: The birth of Jesus"
	},
	{
		id:"0010b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(一) 選召門徒",
		titleEn:"The biography of Jesus: The calling of disciples"
	},
	{
		id:"0010",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－天使是什麼(二)",
		titleEn:"What is Angel (2)"
	},
	{
		id:"0011a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(二) 耶穌傳道",
		titleEn:"The biography of Jesus: The preaching of Jesus"
	},
	{
		id:"0011b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(二) 登山寶訓",
		titleEn:"The biography of Jesus:  The Beatitude"
	},
	{
		id:"0011",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－魔鬼是什麼(一)",
		titleEn:"What is the Devil(1)"
	},
	{
		id:"0012a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(三) 天國比喻",
		titleEn:"The biography of Jesus: The Parables of Kingdom of God"
	},
	{
		id:"0012b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(三) 耶穌醫病",
		titleEn:"The biography of Jesus: The healing of Jesus"
	},
	{
		id:"0012",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－魔鬼是什麼(二)",
		titleEn:"What is the Devil(2)"
	},
	{
		id:"0013a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(四) 登山變像",
		titleEn:"The biography of Jesus"
	},
	{
		id:"0013b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(四) 愛與饒恕",
		titleEn:"The biography of Jesus: love and forgiveness"
	},
	{
		id:"0013",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－魔鬼是什麼(三)",
		titleEn:"What is the Devil(3)"
	},
	{
		id:"0014a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(五) 良牧耶穌",
		titleEn:"The biography of Jesus: Jesus the good shepherd"
	},
	{
		id:"0014b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(五) 論真財寶",
		titleEn:"The biography of Jesus: On true treasure"
	},
	{
		id:"0014",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－罪入了世界(一)",
		titleEn:"Sin Entered the World(1)"
	},
	{
		id:"0015a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(六) 浪子回頭",
		titleEn:"The biography of Jesus: The prodigal"
	},
	{
		id:"0015b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(六) 禱告真義",
		titleEn:"The biography of Jesus: The true meaning of prayer"
	},
	{
		id:"0015",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－罪入了世界(二)",
		titleEn:"Sin Entered the World(2)"
	},
	{
		id:"0016a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(七) 和散那王",
		titleEn:"The biography of Jesus: king of Hosanna"
	},
	{
		id:"0016b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(七) 最後晚餐",
		titleEn:"The biography of Jesus: The last Supper"
	},
	{
		id:"0016",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－罪入了世界(三)",
		titleEn:"Sin Entered the World(3)"
	},
	{
		id:"0017a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(八) 臨別訓言",
		titleEn:"The biography of Jesus: The farewell teaching"
	},
	{
		id:"0017b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(八) 耶穌被賣",
		titleEn:"The biography of Jesus: The sell of Jesus"
	},
	{
		id:"0017",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(一)",
		titleEn:"The Wonderful Book(1)"
	},
	{
		id:"0018a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(九) 耶穌受難",
		titleEn:"The biography of Jesus: Crucitixion"
	},
	{
		id:"0018b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"耶穌傳(九) 耶穌復活",
		titleEn:"The biography ofJesus: Resurrection"
	},
	{
		id:"0018",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(二)",
		titleEn:"The Wonderful Book(2)"
	},
	{
		id:"0019a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬太福音(一)1章～9章",
		titleEn:"The broadcasting play of Gospel:Matthew(一)ch1-9"
	},
	{
		id:"0019b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬太福音(一)10章～16章",
		titleEn:"The broadcasting play of Gospel:Matthew(一)ch10-16"
	},
	{
		id:"0019",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(三)",
		titleEn:"The Wonderful Book(3)"
	},
	{
		id:"0020a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬太福音(二)16章23節～23章",
		titleEn:"The broadcasting play of Gospel:Matthew(二)ch16:23-ch23"
	},
	{
		id:"0020b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬太福音(二)24章～28章",
		titleEn:"The broadcasting play of Gospel:Matthew(二)ch24-ch28"
	},
	{
		id:"0020",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(四)",
		titleEn:"The Wonderful Book(4)"
	},
	{
		id:"0021a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬可福音(一)1章～5章20節",
		titleEn:"The broadcasting play of Gospel:Mark(一)ch1-ch5:20"
	},
	{
		id:"0021b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬可福音(一)5章21節～9章13",
		titleEn:"The broadcasting play of Gospel:Mark(一)ch5:21-ch9:13"
	},
	{
		id:"0021",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(五)",
		titleEn:"The Wonderful Book(5)"
	},
	{
		id:"0022a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬可福音(二)9章14節～12章",
		titleEn:"The broadcasting play of Gospel:Mark(二)ch9:14-ch12"
	},
	{
		id:"0022b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:馬可福音(二)13章～16章",
		titleEn:"The broadcasting play of Gospel:Mark(二)ch13-ch16"
	},
	{
		id:"0022",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奇妙的書(六)",
		titleEn:"The Wonderful Book(6)"
	},
	{
		id:"0023a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(一)1章～3章",
		titleEn:"The broadcasting play of Gospel:Luke(一)ch1-ch3"
	},
	{
		id:"0023b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(一)4章～7章23節",
		titleEn:"The broadcasting play of Gospel:Luke(一)ch4-ch7:23"
	},
	{
		id:"0023",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－誡命(一)",
		titleEn:"The Commandments(1)"
	},
	{
		id:"0024a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(二)7章24節～9章",
		titleEn:"The broadcasting play of Gospel:Luke(二)ch7:24-ch9"
	},
	{
		id:"0024b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(二)10章～13章21節",
		titleEn:"The broadcasting play of Gospel:Luke(二)ch10-ch13:21"
	},
	{
		id:"0024",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－誡命(二)",
		titleEn:"The Commandments(2)"
	},
	{
		id:"0025a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(三) 13章22節～20章",
		titleEn:"The broadcasting play of Gospel:Luke(三)ch13:22-ch20"
	},
	{
		id:"0025b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:路加福音(三) 21章～24章",
		titleEn:"The broadcasting play of Gospel:Luke(三)ch21-ch24"
	},
	{
		id:"0025",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－誡命(三)",
		titleEn:"The Commandments(3)"
	},
	{
		id:"0026a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:約翰福音(一) 1章～4章",
		titleEn:"The broadcasting play of Gospel:John(一)ch1-ch4"
	},
	{
		id:"0026b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:約翰福音(一) 5章～7章",
		titleEn:"The broadcasting play of Gospel:John(一)ch5-ch7"
	},
	{
		id:"0026",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－信心(一)",
		titleEn:"The Faith(1)"
	},
	{
		id:"0027a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:約翰福音(二) 8章～13章",
		titleEn:"The broadcasting play of Gospel:John(二)ch8-ch13"
	},
	{
		id:"0027b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"四福音廣播劇:約翰福音(二) 14章～21章",
		titleEn:"The broadcasting play of Gospel:John(二)ch14-ch21"
	},
	{
		id:"0027",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－信心(二)",
		titleEn:"The Faith(2)"
	},
	{
		id:"0028a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(一) 一家之主",
		titleEn:"The broadcasting play of Happy family: The lord of family"
	},
	{
		id:"0028b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(一) 生死邊緣",
		titleEn:"The broadcasting play of Happy family: The edge of life anddeath"
	},
	{
		id:"0028",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(一)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0029a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(二) 無限的愛",
		titleEn:"The broadcasting play of Happy family: The endless love"
	},
	{
		id:"0029b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(二) 得勝的生命",
		titleEn:"The broadcasting play of Happy family: The Victorious life"
	},
	{
		id:"0029",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(二)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0030a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(三) 親情淚",
		titleEn:"The broadcasting play of Happy family: The tear of compassion"
	},
	{
		id:"0030b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(三) 天倫夢迴",
		titleEn:"The broadcasting play of Happy family: The remembrance of family Love"
	},
	{
		id:"0030",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(三)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0031a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(四) 滿庭香",
		titleEn:"The broadcasting play of Happy family: A family of scent"
	},
	{
		id:"0031b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(四) 愛的回首",
		titleEn:"The broadcasting play of Happy family: The retuming of love"
	},
	{
		id:"0031",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(四)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0032a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(五) 心靈之歌",
		titleEn:"The broadcasting play of Happy family: The song of heart"
	},
	{
		id:"0032b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(五) 尋找迷失的我",
		titleEn:"The broadcasting play of Happy family: Looking for the Lost"
	},
	{
		id:"0032",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(五)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0033a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(六) 泡沫人生",
		titleEn:"The broadcasting play of Happy family: The bubbling life"
	},
	{
		id:"0033b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(六) 深愛情天",
		titleEn:"The broadcasting play of Happy family: A compassionate world"
	},
	{
		id:"0033",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－耶穌基督的降生(六)",
		titleEn:"The birth of Jesus Christ"
	},
	{
		id:"0034a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(七) 信望愛",
		titleEn:"The broadcasting play of Happy family: Faith, Hope and love"
	},
	{
		id:"0034b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(七) 黑暗之光",
		titleEn:"The broadcasting play of Happy family: The light of darkness"
	},
	{
		id:"0034",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(一)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0035a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(八) 喜樂人生",
		titleEn:"The broadcasting play of Happy family: The Joyful life"
	},
	{
		id:"0035b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(八) 愛的誓約",
		titleEn:"The broadcasting play of Happy family: The oath of love"
	},
	{
		id:"0035",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(二)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0036a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(九) 天堂之旅",
		titleEn:"The broadcasting play of Happy family: The journey of heaven"
	},
	{
		id:"0036b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"幸福家庭廣播劇(九) 勇者的心",
		titleEn:"The broadcasting play of Happy family: The heart of courage"
	},
	{
		id:"0036",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(三)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0037a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(1)王女士",
		titleEn:"Voice of Righteousness Lady wang"
	},
	{
		id:"0037b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(1)",
		titleEn:"Voice of Righteousness Lady wang"
	},
	{
		id:"0037",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(四)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0038a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(2)溪水旁",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0038b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(2)",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0038",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(五)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0039a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(3)十字路口",
		titleEn:"Voice of Righteousness At the Crossing"
	},
	{
		id:"0039b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(3)",
		titleEn:"Voice of Righteousness At the Crossing"
	},
	{
		id:"0039",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－為什麼要信耶穌(六)",
		titleEn:"Why believe in Jesus"
	},
	{
		id:"0040a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(8)愛的園地",
		titleEn:"Voice of Righteousness The field of love"
	},
	{
		id:"0040b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(8)",
		titleEn:"Voice of Righteousness The field of love"
	},
	{
		id:"0040",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝之救贖計劃(一)",
		titleEn:"The Salvation plan of God"
	},
	{
		id:"0041a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(9)十字路口",
		titleEn:"Voice of Righteousness At the Crossing"
	},
	{
		id:"0041b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(9)",
		titleEn:"Voice of Righteousness At the Crossing"
	},
	{
		id:"0041",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝之救贖計劃(二)",
		titleEn:"The Salvation plan of God"
	},
	{
		id:"0042a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-03 三十年感恩大慶",
		titleEn:"Voice of Righteousness The celebration of thirty years blessing"
	},
	{
		id:"0042b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-03",
		titleEn:"Voice of Righteousness The celebration of thirty years blessing"
	},
	{
		id:"0042",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝之救贖計劃(三)",
		titleEn:"The Salvation plan of God"
	},
	{
		id:"0043a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-04 幸福家庭",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0043b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-04",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0043",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝之救贖計劃(四)",
		titleEn:"The Salvation plan of God"
	},
	{
		id:"0044a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-05 幸福家庭",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0044b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-05",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0044",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝之救贖計劃(五)",
		titleEn:"The Salvation plan of God"
	},
	{
		id:"0045a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-06 幸福家庭",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0045b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-06",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0045",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－因信稱義(一)",
		titleEn:"Righteousness by faith"
	},
	{
		id:"0046a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-12 溪水旁",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0046b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-12",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0046",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－因信稱義(二)",
		titleEn:"Righteousness by faith"
	},
	{
		id:"0047a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-02 幸福指南:戒毒",
		titleEn:"Voice of Righteousness The guidepost of happiness: restricting drugs"
	},
	{
		id:"0047b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-02",
		titleEn:"Voice of Righteousness The guidepost of happiness: restricting drugs"
	},
	{
		id:"0047",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－認罪(一)",
		titleEn:"The confessions"
	},
	{
		id:"0048a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-07 幸福家庭",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0048b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-07",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0048",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－認罪(二)",
		titleEn:"The confessions"
	},
	{
		id:"0049a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-08 幸福家庭",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0049b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-08",
		titleEn:"Voice of Righteousness Happy family"
	},
	{
		id:"0049",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－認罪(三)",
		titleEn:"The confessions"
	},
	{
		id:"0050a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(1)王先生",
		titleEn:"Voice of Righteousness Mr. Wang"
	},
	{
		id:"0050b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(1)",
		titleEn:"Voice of Righteousness Mr. Wang"
	},
	{
		id:"0050",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－認罪(四)",
		titleEn:"The confessions"
	},
	{
		id:"0051a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(2)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0051b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(2)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0051",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－悔改",
		titleEn:"The Repentance"
	},
	{
		id:"0052a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(9)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0052b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(9)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0052",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－重生(一)",
		titleEn:"To be born again"
	},
	{
		id:"0053a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-05",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0053b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-05",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0053",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－重生(二)",
		titleEn:"To be born again"
	},
	{
		id:"0054a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-07",
		titleEn:"Voice of Righteousness  "
	},
	{
		id:"0054b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音97-07",
		titleEn:"Voice of Righteousness  "
	},
	{
		id:"0054",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖靈(一)",
		titleEn:"The Holy Spirit"
	},
	{
		id:"0055a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(10)",
		titleEn:"Voice of Righteousness  "
	},
	{
		id:"0055b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(10)",
		titleEn:"Voice of Righteousness  "
	},
	{
		id:"0055",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖靈(二)",
		titleEn:"The Holy Spirit"
	},
	{
		id:"0056a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(12)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0056b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音(12)",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0056",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖靈(三)",
		titleEn:"The Holy Spirit"
	},
	{
		id:"0057a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-02 十字路口之光",
		titleEn:"Voice of Righteousness The light at the crossing"
	},
	{
		id:"0057b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-02",
		titleEn:"Voice of Righteousness The light at the crossing"
	},
	{
		id:"0057",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖靈之恩賜(一)",
		titleEn:"Gifts of the Holy Spirit"
	},
	{
		id:"0058a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-03 吸毒",
		titleEn:"Voice of Righteousness Drug addicted"
	},
	{
		id:"0058b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-03",
		titleEn:"Voice of Righteousness Drug addicted"
	},
	{
		id:"0058",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖靈之恩賜(二)",
		titleEn:"Gifts of the Holy Spirit"
	},
	{
		id:"0059a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-06 骨肉之親",
		titleEn:"Voice of Righteousness The commitment of Kinsmen"
	},
	{
		id:"0059b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-06",
		titleEn:"Voice of Righteousness The commitment of Kinsmen"
	},
	{
		id:"0059",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－趕鬼的恩賜(一)",
		titleEn:"The gift of driving out demons"
	},
	{
		id:"0060a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-07 幸福指南",
		titleEn:"Voice of Righteousness The guidepost of happiness"
	},
	{
		id:"0060b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-07",
		titleEn:"Voice of Righteousness The guidepost of happiness"
	},
	{
		id:"0060",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－趕鬼的恩賜(二)",
		titleEn:"The gift of driving out demons"
	},
	{
		id:"0061a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-08 機會",
		titleEn:"Voice of Righteousness Chance"
	},
	{
		id:"0061b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-08",
		titleEn:"Voice of Righteousness Chance"
	},
	{
		id:"0061",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－趕鬼的恩賜(三)",
		titleEn:"The gift of driving out demons"
	},
	{
		id:"0062a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"安妮與我",
		titleEn:"Annie and I"
	},
	{
		id:"0062b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"吸毒者得救",
		titleEn:"The drug was saved"
	},
	{
		id:"0062",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲---聖靈與鬼靈之分別(一)",
		titleEn:"The distinction beween the Holy Spirit  and the evil spirit"
	},
	{
		id:"0063a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"平安夜 國語",
		titleEn:"The silent night Chinese"
	},
	{
		id:"0063b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"平安夜 台語",
		titleEn:"The silent night Taiwanese"
	},
	{
		id:"0063",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲---聖靈與鬼靈之分別(二",
		titleEn:"The distinction beween the Holy Spirit  and the evil spirit"
	},
	{
		id:"0064a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"愛的呼喚 國語",
		titleEn:"The voice of love Chinese"
	},
	{
		id:"0064b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"愛的呼喚 台語",
		titleEn:"The voice of love Taiwanese"
	},
	{
		id:"0064",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝國在何處(一)",
		titleEn:"Where is the Kingdom of God"
	},
	{
		id:"0065a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義廣播中心簡介",
		titleEn:"The introduction of Voice of righteousness Chinese"
	},
	{
		id:"0065b",
		lang:"Taiwanese",
		langCn:"華語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義廣播中心簡介",
		titleEn:"The introduction of Voice of righteousness Taiwanese"
	},
	{
		id:"0065",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－上帝國在何處(二)",
		titleEn:"Where is the Kingdomof God"
	},
	{
		id:"0066a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"主啊!醫治我",
		titleEn:"Oh! Lord Heal me"
	},
	{
		id:"0066b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"主啊!醫治我(續)",
		titleEn:"Oh! Lord Heal me"
	},
	{
		id:"0066",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－洗禮(一)",
		titleEn:"The Baptism"
	},
	{
		id:"0067a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"以天父的事為念",
		titleEn:"Minding on things of Heavenly Father(一)"
	},
	{
		id:"0067b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"以天父的事為念(續)",
		titleEn:"Minding on things of Heavenly Father(一)"
	},
	{
		id:"0067",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－洗禮(二)",
		titleEn:"The Baptism"
	},
	{
		id:"0068a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"有愛才有羊",
		titleEn:"With loving, sheep following'"
	},
	{
		id:"0068b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"nan",
		titleCn:"有愛才有羊(續)",
		titleEn:"With loving, sheep following'"
	},
	{
		id:"0068",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－婚姻(一)",
		titleEn:"The Marriage"
	},
	{
		id:"0069a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"nan",
		titleCn:"新約精華(1)  福音的起源",
		titleEn:"New Testament Essentials(1) Beginning of the Gospel"
	},
	{
		id:"0069b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"nan",
		titleCn:"新約精華(1)",
		titleEn:"New Testament Essentials(1) Beginning of the Gospel Continued"
	},
	{
		id:"0069",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－婚姻(二)",
		titleEn:"The Marriage"
	},
	{
		id:"0070a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(2) 聖經的中心信息",
		titleEn:"New Testament essentials(2) The essential message of the Bible"
	},
	{
		id:"0070b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"0070",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－婚姻(三)",
		titleEn:"The Marriage"
	},
	{
		id:"0071a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(3) 聖靈的內住和帶領",
		titleEn:"New Testament essentials(3) The indwelling and guidance of the Holy Spirit"
	},
	{
		id:"0071b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"0071",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－基督化家庭(一)",
		titleEn:"The Christianized Family"
	},
	{
		id:"0072a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(4)  認識真正的你",
		titleEn:"New Testament essentials(4)  Knowledge of the true self"
	},
	{
		id:"0072b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"0072",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－基督化家庭(二)",
		titleEn:"The Christianized Family"
	},
	{
		id:"0073a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(5)  真知道祂",
		titleEn:"To true know Him"
	},
	{
		id:"0073b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"0073",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－祈禱(一)",
		titleEn:"On Prayer"
	},
	{
		id:"0074a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(6)  上帝國的國民",
		titleEn:"New Testament Essentials(6) People of the Kingdom"
	},
	{
		id:"0074b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(6)  上帝國的國民(續)",
		titleEn:"New Testament Essentials(6) People of the Kingdom Continued"
	},
	{
		id:"0074",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－祈禱(二)",
		titleEn:"On Prayer"
	},
	{
		id:"0075a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(7)  參與上帝國的建造",
		titleEn:"New Testament Essentials(7) Involvement of Building the Kingdom"
	},
	{
		id:"0075b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(7)  參與上帝國的建造(續)",
		titleEn:"New Testament Essentials(7) Involvement of Building the Kingdom Continued"
	},
	{
		id:"0075",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－健康生活(一)",
		titleEn:"Healthy Living"
	},
	{
		id:"0076a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(8)  得勝的凱歌",
		titleEn:"New Testament Essentials(8) The Song of Victory"
	},
	{
		id:"0076b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"新約精華(8)  得勝的凱歌(續)",
		titleEn:"New Testament Essentials(8) The Song of Victory Continued"
	},
	{
		id:"0076",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－健康生活(二)",
		titleEn:"Healthy Living"
	},
	{
		id:"0077a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"好的撒瑪利亞人",
		titleEn:"The good samaritan"
	},
	{
		id:"0077b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"知足的秘訣",
		titleEn:"The secret of adequacy"
	},
	{
		id:"0077",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－主的醫治(一)",
		titleEn:"Cure of the Lord"
	},
	{
		id:"0078a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"主是好牧者",
		titleEn:"The Lord is a good shepherd"
	},
	{
		id:"0078b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"轉禍為福",
		titleEn:"Turning tragedy to blessing"
	},
	{
		id:"0078",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－主的醫治(二)",
		titleEn:"Cure of the Lord"
	},
	{
		id:"0079a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"不要憂慮",
		titleEn:"Don't worry"
	},
	{
		id:"0079b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"根基立在磐石上",
		titleEn:"Root set on the rock"
	},
	{
		id:"0079",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－教會(一)",
		titleEn:"Church"
	},
	{
		id:"0080a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"在風浪中的平安",
		titleEn:"Pearl in the wave"
	},
	{
		id:"0080b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"得蒙赦罪之福",
		titleEn:"The blessing of being forgiven"
	},
	{
		id:"0080",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－教會(二)",
		titleEn:"Church"
	},
	{
		id:"0081a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"甘大基太監的得救",
		titleEn:"The redemption"
	},
	{
		id:"0081b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"你的名是否錄在天上?",
		titleEn:"Is your name listed in heaven?"
	},
	{
		id:"0081",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－傳福音",
		titleEn:"Evangelizing"
	},
	{
		id:"0082a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"浪子的父親T",
		titleEn:"The prodigal's father"
	},
	{
		id:"0082b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"孝與慈",
		titleEn:"Filial Piety and Kindness"
	},
	{
		id:"0082",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖餐(一)",
		titleEn:"Eucharist"
	},
	{
		id:"0083a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"果樹與糖糠",
		titleEn:"Fruit tree"
	},
	{
		id:"0083b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"真理必叫你們得自由",
		titleEn:"The truth makes you free"
	},
	{
		id:"0083",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－聖餐(二)",
		titleEn:"Eucharist"
	},
	{
		id:"0084a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"看哪,上帝的羔羊",
		titleEn:"Look! The Lamb of God'"
	},
	{
		id:"0084b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督復活的信息",
		titleEn:"The message of Resurrection"
	},
	{
		id:"0084",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奉獻(一)",
		titleEn:"Offering"
	},
	{
		id:"0085a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督的寶血",
		titleEn:"The blood of Christ"
	},
	{
		id:"0085b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督的寶血(續)",
		titleEn:"The blood of Christ"
	},
	{
		id:"0085",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奉獻(二)",
		titleEn:"Offering"
	},
	{
		id:"0086a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"在各各他山上的十字架",
		titleEn:"The Cross on Golgotha"
	},
	{
		id:"0086b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"在各各他山上的十字架(續)",
		titleEn:"The Cross on Golgotha"
	},
	{
		id:"0086",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－奉獻(三)",
		titleEn:"Offering"
	},
	{
		id:"0087a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"認識基督為至寶",
		titleEn:"Excellency of the Knowledge of Christ"
	},
	{
		id:"0087b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"認識基督為至寶(續)",
		titleEn:"Excellency of the Knowledge of Christ"
	},
	{
		id:"0087",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲－信徒之儀表",
		titleEn:"Apparel of Believers"
	},
	{
		id:"0088a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"主所賜的平安",
		titleEn:"The Peace of God"
	},
	{
		id:"0088b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"主所賜的平安(續)",
		titleEn:"The Peace of God"
	},
	{
		id:"0088",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲---基督復臨",
		titleEn:"Second Coming of Christ"
	},
	{
		id:"0089a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"歷代聖徒-馬雅各醫師",
		titleEn:"Saints of past generations Dr. Thomas Maxwell"
	},
	{
		id:"0089b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"歷代聖徒-嚴清華牧師",
		titleEn:"Saints of past generations Rev. Ching-Hwa Yen"
	},
	{
		id:"0089",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲---基督復臨之預言(一)",
		titleEn:"Second Coming of Christ"
	},
	{
		id:"0090a",
		lang:"Taiwanese/English",
		langCn:"台語/英文 ",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"讚美與見証",
		titleEn:"Praise and Witness"
	},
	{
		id:"0090b",
		lang:"Taiwanese/English",
		langCn:"台語/英文 ",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"如何選擇配偶？",
		titleEn:"How to choose your spouse？"
	},
	{
		id:"0090",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友之聲---基督復臨之預言(二)",
		titleEn:"Second Coming of Christ"
	},
	{
		id:"0091a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(一)上帝的愛",
		titleEn:"Voice of Gospel God's love"
	},
	{
		id:"0091b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(一)上帝的愛(續)",
		titleEn:"Voice of Gospel God's love"
	},
	{
		id:"0091",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(一)祈禱受阻的原因",
		titleEn:"Reasons for Hindered Prayer"
	},
	{
		id:"0092a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(二)喜樂的人生",
		titleEn:"Voice of Gospel The life of Joyfulness"
	},
	{
		id:"0092b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(二)喜樂人生(續)",
		titleEn:"Voice of Gospel The life of Joyfulness"
	},
	{
		id:"0092",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(一)天使飛在空中",
		titleEn:"Angels in the air"
	},
	{
		id:"0093a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(三)耶穌是誰？",
		titleEn:"Voice of Gospel Who is Jesus？"
	},
	{
		id:"0093b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(三)耶穌是誰(續)",
		titleEn:"Voice of Gospel Who is Jesus？"
	},
	{
		id:"0093",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(二)如何積財在天",
		titleEn:"Treasure in heaven"
	},
	{
		id:"0094a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(四)真實的故事",
		titleEn:"Voice of Gospel True story"
	},
	{
		id:"0094b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(四)真實故事(續)",
		titleEn:"Voice of Gospel True story"
	},
	{
		id:"0094",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(二)如何處理怒氣",
		titleEn:"Dealing with anger"
	},
	{
		id:"0095a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(五)盼望的人生",
		titleEn:"Voice of Gospel The life of Hope"
	},
	{
		id:"0095b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(五)盼望人生(續)",
		titleEn:"Voice of Gospel The life of Hope"
	},
	{
		id:"0095",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(三)舊樂園與新樂園",
		titleEn:"Old and new paradise"
	},
	{
		id:"0096a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(六)受苦有益",
		titleEn:"Voice of Gospel To suffer is to gain"
	},
	{
		id:"0096b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(六)受苦有益(續)",
		titleEn:"Voice of Gospel To suffer is to gain"
	},
	{
		id:"0096",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(三)羅得的日子",
		titleEn:"Day of Lot"
	},
	{
		id:"0097a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(七)愛的真諦",
		titleEn:"Voice of Gospel The real Love"
	},
	{
		id:"0097b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"福音之聲(七)愛的真諦(續)",
		titleEn:"Voice of Gospel The real Love"
	},
	{
		id:"0097",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(四)不得赦免的罪",
		titleEn:"Unpardoned Sin"
	},
	{
		id:"0098a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(一)聖經是上帝所默示的",
		titleEn:"Probing of faith All scripture is given by inspiration of God"
	},
	{
		id:"0098b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(一)聖經是上帝所默示(續)",
		titleEn:"Probing of faith All scripture is given by inspiration of God"
	},
	{
		id:"0098",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(四)信道是從聽道來",
		titleEn:"Faith comes from hearing the message"
	},
	{
		id:"0099a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(二)有一位真神存在 ",
		titleEn:"Probing of faith There is a real God"
	},
	{
		id:"0099b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(二)有一位真神存在(續) ",
		titleEn:"Probing of faith There is a real God"
	},
	{
		id:"0099",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(五)好的撒瑪利亞人",
		titleEn:"Good Samaritan"
	},
	{
		id:"0100a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(三)人類是上帝所創造的 ",
		titleEn:"Probing of faith Human being is created by God"
	},
	{
		id:"0100b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(三)人類是上帝所創造(續)",
		titleEn:"Probing of faith Human being is created by God"
	},
	{
		id:"0100",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(五)傳道與神蹟",
		titleEn:"Evangelizing and Miracles"
	},
	{
		id:"0101a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(四)人有靈魂  ",
		titleEn:"Probing of faith Human has soul"
	},
	{
		id:"0101b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(四)人有靈魂(續)  ",
		titleEn:"Probing of faith Human has soul"
	},
	{
		id:"0101",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(六)天國的福音",
		titleEn:"The Gospel of Kingdom of God"
	},
	{
		id:"0102a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(五)有天堂與地嶽 ",
		titleEn:"Probing of faith Heaven and hell"
	},
	{
		id:"0102b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(五)有天堂與地嶽(續) ",
		titleEn:"Probing of faith Heaven and hell"
	},
	{
		id:"0102",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(六)被鬼附的勝了他",
		titleEn:"The demon possess or overcame him"
	},
	{
		id:"0103a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(六)世人都犯了罪 ",
		titleEn:"Probing of faith The world has sinned against God"
	},
	{
		id:"0103b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(六)世人都犯了罪(續)",
		titleEn:"Probing of faith The world has sinned against God"
	},
	{
		id:"0103",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(七)屬靈的戰爭",
		titleEn:"Spiritual Warfare"
	},
	{
		id:"0104a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(七)耶穌是基督真神之子",
		titleEn:"Probing of faith Jesus is God"
	},
	{
		id:"0104b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(七)耶穌是基督真神之子(續)",
		titleEn:"Probing of faith Jesus is God"
	},
	{
		id:"0104",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(七)生命冊",
		titleEn:"Book of life"
	},
	{
		id:"0105a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(八)救贖工作的功效",
		titleEn:"Probing of faith The efficacy of redemptive work"
	},
	{
		id:"0105b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(八)救贖工作的功效(續)",
		titleEn:"Probing of faith The efficacy of redemptive work"
	},
	{
		id:"0105",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(八)受苦的原因",
		titleEn:"Reason of suffering"
	},
	{
		id:"0106a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(九)耶穌從死裡復活了 ",
		titleEn:"Probing of faith Jesus raised from the dead"
	},
	{
		id:"0106b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(九)耶穌從死裡復活了(續)",
		titleEn:"Probing of faith Jesus raised from the dead"
	},
	{
		id:"0106",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(八)你們要謹慎",
		titleEn:"You have to be cautious"
	},
	{
		id:"0107a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(十)基督必定再臨為王 ",
		titleEn:"Probing of faith Christ shall come again as King"
	},
	{
		id:"0107b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰的探究(十)基督必定再臨為王(續)",
		titleEn:"Probing of faith Christ shall come again as King"
	},
	{
		id:"0107",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(特一)饒恕的美德",
		titleEn:"The good character of forgiveness"
	},
	{
		id:"0108a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(一)基督再臨的應許 ",
		titleEn:"Second coming of Christ The promise of second coming"
	},
	{
		id:"0108b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(一)基督再臨的應許(續) ",
		titleEn:"Second coming of Christ The promise of second coming"
	},
	{
		id:"0108",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"聖經講座(特一)-末日的兆頭",
		titleEn:"The sign of the end"
	},
	{
		id:"0109a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(二)橄欖山上的預言  ",
		titleEn:"Second coming of Christ The prophesy on the Mount of Olive"
	},
	{
		id:"0109b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(二)橄欖山上的預言(續)  ",
		titleEn:"Second coming of Christ The prophesy on the Mount of Olive"
	},
	{
		id:"0110a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(三)時侯的神蹟  ",
		titleEn:"Second coming of Christ The time of miracle"
	},
	{
		id:"0110b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(三)時侯的神蹟(續) ",
		titleEn:"Second coming of Christ The time of miracle"
	},
	{
		id:"0111a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(四)夢中的巨像 ",
		titleEn:"Second coming of Christ The dream of great image"
	},
	{
		id:"0111b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(四)夢中的巨像(續) ",
		titleEn:"Second coming of Christ The dream of great image"
	},
	{
		id:"0112a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(五)異象中的四獸",
		titleEn:"The second coming of Christ The vision of four great beasts"
	},
	{
		id:"0112b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(五)異象中的四獸(續)",
		titleEn:"The second coming of Christ The vision of four great beasts"
	},
	{
		id:"0112",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"不會舊的新",
		titleEn:"The new which never become old"
	},
	{
		id:"0113a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(六)以色列的復國",
		titleEn:"The second coming of Christ The restoration of Israel"
	},
	{
		id:"0113b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(六)以色列的復國(續)",
		titleEn:"The second coming of Christ The restoration of Israel"
	},
	{
		id:"0113",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"今世的入世觀",
		titleEn:"Entering today's world"
	},
	{
		id:"0114a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(七)大災難",
		titleEn:"The second coming of Christ The great disaster"
	},
	{
		id:"0114b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(七)大災難(續)",
		titleEn:"The second coming of Christ The great disaster"
	},
	{
		id:"0114",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"柔和謙卑之能力",
		titleEn:"The power of kindness and humbleness"
	},
	{
		id:"0115a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(八)敵基督",
		titleEn:"The second coming of Christ Antichrist"
	},
	{
		id:"0115b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(八)敵基督(續)",
		titleEn:"The second coming of Christ Antichrist"
	},
	{
		id:"0115",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"生命的量器",
		titleEn:"The measurement of life"
	},
	{
		id:"0116a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(九)啟示錄的四騎士",
		titleEn:"The second coming of Christ The four horseback riders of Revelation"
	},
	{
		id:"0116b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(九)啟示錄的四騎士(續)",
		titleEn:"The second coming of Christ The four horseback riders of Revelation"
	},
	{
		id:"0116",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"枉然與恩典之距離",
		titleEn:"The distance between futility and grace"
	},
	{
		id:"0117a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十)哈米吉多頓的大戰",
		titleEn:"The second coming of Christ The Battle of Armagedon"
	},
	{
		id:"0117b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十)哈米吉多頓的大戰(續)",
		titleEn:"The second coming of Christ The Battle of Armagedon"
	},
	{
		id:"0117",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"如鹿渴慕溪水",
		titleEn:"As a deer thirst for water"
	},
	{
		id:"0118a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十一)空中再臨與被提",
		titleEn:"The second coming of Christ Descending from heaven and judgement"
	},
	{
		id:"0118b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十一)空中再臨與被提(續)",
		titleEn:"The second coming of Christ Descending from heaven and judgement"
	},
	{
		id:"0118",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"禱告的人生哲學",
		titleEn:"The life philosophy of prayer"
	},
	{
		id:"0119a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十二)地上再臨與審判",
		titleEn:"The second coming of Christ Descending on earth and judgement"
	},
	{
		id:"0119b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十二)地上再臨與審判(續)",
		titleEn:"The second coming of Christ Descending on earth and judgement"
	},
	{
		id:"0119",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"至於我和我一家",
		titleEn:"As for me and my family"
	},
	{
		id:"0120a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十三)工作的審判",
		titleEn:"The second coming of Christ The judgement according to their works"
	},
	{
		id:"0120b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十三)工作的審判(續)",
		titleEn:"The second coming of Christ The judgement according to their works"
	},
	{
		id:"0120",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"無法計算的恩典",
		titleEn:"The immeasurable grace"
	},
	{
		id:"0121a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十四)羔羊的婚筵",
		titleEn:"The second coming of Christ The marriage supper of the Lamb"
	},
	{
		id:"0121b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十四)羔羊的婚筵(續)",
		titleEn:"The second coming of Christ The marriage supper of the Lamb"
	},
	{
		id:"0121",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"多瑪的疑問",
		titleEn:"The doubt of Thomas"
	},
	{
		id:"0122a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十五)千禧年王國",
		titleEn:"The second coming of Christ a thousand years Kingdom"
	},
	{
		id:"0122b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十五)千禧年王國(續)",
		titleEn:"The second coming of Christ a thousand years Kingdom"
	},
	{
		id:"0122",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"憂傷痛悔的心",
		titleEn:"The heart of sorrow and regret"
	},
	{
		id:"0123a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十六)白色大寶座的審判",
		titleEn:"The second coming of Christ The judgement of a great white throne"
	},
	{
		id:"0123b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十六)白色大寶座審判(續)",
		titleEn:"The second coming of Christ The judgement of a great white throne"
	},
	{
		id:"0123",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"異象之謎",
		titleEn:"The puzzle of Vision"
	},
	{
		id:"0124a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十七)新天新地",
		titleEn:"The second coming of Christ A new heaven amd a new earth"
	},
	{
		id:"0124b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十七)新天新地(續)",
		titleEn:"The second coming of Christ A new heaven amd a new earth"
	},
	{
		id:"0124",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"十分之一的奧秘",
		titleEn:"The mystery of tithes"
	},
	{
		id:"0125a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十八)新耶路撒冷聖城",
		titleEn:"The second coming of Christ The new Jerusalem Holy city"
	},
	{
		id:"0125b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十八)新耶路撒冷聖城(續)",
		titleEn:"The second coming of Christ The new Jerusalem Holy city"
	},
	{
		id:"0125",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"雲上的歌",
		titleEn:"The song on the cloud"
	},
	{
		id:"0126a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十九)亞西亞七教會",
		titleEn:"The second coming of Christ the seven churches in Asia"
	},
	{
		id:"0126b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(十九)亞西亞七教會(續)",
		titleEn:"The second coming of Christ the seven churches in Asia"
	},
	{
		id:"0126",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"恩賜之美",
		titleEn:"The beauty of giftedness"
	},
	{
		id:"0127a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(二十)預備迎接基督再臨",
		titleEn:"The second coming of Christ Preparing to receive the second coming"
	},
	{
		id:"0127b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"基督再臨(二十)預備迎接基督再臨(續)",
		titleEn:"The second coming of Christ Preparing to receive the second coming"
	},
	{
		id:"0127",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"復活的榮耀",
		titleEn:"The glory of resurrection(1)"
	},
	{
		id:"0128a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音 98-09",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0128b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音 98-09",
		titleEn:"Voice of Righteousness"
	},
	{
		id:"0128",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"箴言之心",
		titleEn:"The heart of Proverb"
	},
	{
		id:"0129a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音 98-10  溪水旁",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0129b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音98-10",
		titleEn:"Voice of Righteousness Beside the brook"
	},
	{
		id:"0129",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"靈界之謎",
		titleEn:"The mystery of the spiritual"
	},
	{
		id:"0130a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"在愛中彼此建造 弗4:15-16",
		titleEn:"Building in Love"
	},
	{
		id:"0130b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"在真道上長大成熟 弗4:11-14",
		titleEn:"To grow and mature in the word"
	},
	{
		id:"0130",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"愛裡面的計劃",
		titleEn:"The plan in love"
	},
	{
		id:"0131a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"起初的世界 創1:1-5",
		titleEn:"At the beginning world"
	},
	{
		id:"0131b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"恢復人的本像 創1:26-27",
		titleEn:"To revive man's nature"
	},
	{
		id:"0131",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"神與父母之間",
		titleEn:"Between God and parents"
	},
	{
		id:"0132a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"人算什麼？ 詩8:1-9",
		titleEn:"What is man?"
	},
	{
		id:"0132b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"你的週休得享安息嗎？ 創2:1-3",
		titleEn:"Have you got rest on weekends?"
	},
	{
		id:"0132",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"浪子的今世觀",
		titleEn:"The life view of the prodigal son"
	},
	{
		id:"0133a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"清明的省思 路24:1-8",
		titleEn:"The reflection on ching ming aniversary"
	},
	{
		id:"0133b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"清明的省思 路24:1-8",
		titleEn:"The reflection on ching ming aniversary"
	},
	{
		id:"0133",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"喜樂的良藥",
		titleEn:"The health of joy"
	},
	{
		id:"0134a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"願你們平安 約20:19-23",
		titleEn:"Wish you all peace"
	},
	{
		id:"0134b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"認識人的本位 創2:15-17",
		titleEn:"To Know man's nature"
	},
	{
		id:"0134",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"教會肢體的淚水",
		titleEn:"The cry of church body"
	},
	{
		id:"0135a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"起初的婚姻 創2:18-25",
		titleEn:"The marrage at the Beginning"
	},
	{
		id:"0135b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"從母愛思神恩 創21:8-21",
		titleEn:"Thinking about Mother's Love to God's grace"
	},
	{
		id:"0135",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"活祭之美",
		titleEn:"The beauty of living sacrifice"
	},
	{
		id:"0136a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"從伊甸園到失樂園 創3:1-7",
		titleEn:"From Eden to Lost paradise"
	},
	{
		id:"0136b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"追根究底談恐懼 創3:8-9",
		titleEn:"The discovery of fear"
	},
	{
		id:"0136",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"人生的光明面",
		titleEn:"The bright side of life(1)"
	},
	{
		id:"0137a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"你在那裡 創3:7-11",
		titleEn:"Where are you?"
	},
	{
		id:"0137b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰的開始 創3:14-15",
		titleEn:"Spiritual Warfare"
	},
	{
		id:"0137",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"禱告的藝術",
		titleEn:"The art of prayer"
	},
	{
		id:"0138a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"落實聖餐的生活模式 太26:26-28",
		titleEn:"The living model of true communion  Matt. 26:26-28"
	},
	{
		id:"0138b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"你為什麼發怒呢？ 創4:1-8",
		titleEn:"Why are you angry?"
	},
	{
		id:"0138",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"屬靈的平交道",
		titleEn:"The crossroad of the spiritual"
	},
	{
		id:"0139a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"你兄弟在那裡？ 創4:8-16",
		titleEn:"Where is your brother"
	},
	{
		id:"0139b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"永遠的爸爸 路15:11-24",
		titleEn:"Father of forever"
	},
	{
		id:"0139",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"落在土裡的麥子",
		titleEn:"The kernel of wheat on the ground"
	},
	{
		id:"0140a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"上帝是輕慢不得的 撒母耳記下11:26-27",
		titleEn:"God can't be mocked"
	},
	{
		id:"0140b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"求告耶和華的名 創4:15-26",
		titleEn:"Cry for the name of Jehovah"
	},
	{
		id:"0140",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"窯匠的手",
		titleEn:"The hand of potter"
	},
	{
		id:"0141a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"與上帝同行(一)創5:21-24  來11:5-6",
		titleEn:"Walk with God"
	},
	{
		id:"0141b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"與上帝同行(二)來11:5-6 羅12:1-2",
		titleEn:"Walk with God"
	},
	{
		id:"0141",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"最美的愛",
		titleEn:"The most beautiful love"
	},
	{
		id:"0142a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"投資在永恒的國度 太6:19-21",
		titleEn:"Invest in the eternal"
	},
	{
		id:"0142b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"王武聰牧師",
		speakerEn:"nan",
		titleCn:"事奉尼希米11章1-2節",
		titleEn:"Service  Neh11:1-2"
	},
	{
		id:"0142",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"差傳的眼",
		titleEn:"The eye for missions"
	},
	{
		id:"0143a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"教會誕生使徒行傳2章1-13節",
		titleEn:"The birth of the church  Acts 2:1-13"
	},
	{
		id:"0143b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"教會誕生(續)使徒行傳2章1-13節",
		titleEn:"The birth of the church(continued)  Acts 2:1-13"
	},
	{
		id:"0143",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"永恒的事奉",
		titleEn:"The eternal ministry"
	},
	{
		id:"0144a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"願你們平安約翰20章19-29節",
		titleEn:"May peace be with you  John 20:19-29"
	},
	{
		id:"0144b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"願你們平安(續)約翰20章19-29節",
		titleEn:"May peace be with you (continued)  John 20:19-29"
	},
	{
		id:"0144",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"磐石之歌",
		titleEn:"The song of solid rock"
	},
	{
		id:"0145a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"良善又忠心的僕人馬太25章14-30節",
		titleEn:"Good and faithful servant  Matthew 25:14-30"
	},
	{
		id:"0145b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"良善又忠心的僕人(續)馬太25章14-30節",
		titleEn:"Good and faihful servant(continued)  Matthew 25:14-30"
	},
	{
		id:"0145",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"耶和華以勒",
		titleEn:"The Lord will provide"
	},
	{
		id:"0146a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"五旬節後的教會使徒行傳2章1-4節",
		titleEn:"The church after pentecost  Acts 2:1-4"
	},
	{
		id:"0146b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"聖靈降臨教會大興使徒行傳2章36-47節",
		titleEn:"The coming of the Holy Spirit and the revival of the church Acts 2:36-47"
	},
	{
		id:"0146",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"生命傳承之美",
		titleEn:"The beauty of passing on life"
	},
	{
		id:"0147a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"失而復得路加15章1-10節",
		titleEn:"Once lost but now gain  Luke 15:1-10"
	},
	{
		id:"0147b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"失而復得(續)路加15章11-31節",
		titleEn:"Once lost but now gain(continued) Luke 15:11-31"
	},
	{
		id:"0147",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"枉網惘",
		titleEn:"The puzzle of waste"
	},
	{
		id:"0148a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"在腓立比的傳道使徒行傳16章6-40節",
		titleEn:"The preaching in Philippians  Acts 16:6-40"
	},
	{
		id:"0148b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"信徒五要羅馬12章1-2節",
		titleEn:"Five elements of the believers  Rmans 12:1-2"
	},
	{
		id:"0148",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"回憶的智慧",
		titleEn:"The wisdom of memory"
	},
	{
		id:"0149a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"在空墓外哭主約翰20章11-23節",
		titleEn:"Weeping at the empty tomb  John 20:11-23"
	},
	{
		id:"0149b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"福音是免費的禮物以弗所2章4-10節 約翰3章16節",
		titleEn:"The gospel is the free gift  Ephesiane 2:4-10"
	},
	{
		id:"0149",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"有智慧的政治觀",
		titleEn:"The wise political view"
	},
	{
		id:"0150a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"放蕩子的故事路加15章11-32節",
		titleEn:"The prodigal son  Luke 15:11-32"
	},
	{
		id:"0150b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鍾子時牧師 Pastor Chu Shi Chung",
		speakerEn:"nan",
		titleCn:"三大錯覺路加12章13-21節",
		titleEn:"The three illusions  Luke 12:13-21"
	},
	{
		id:"0150",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"試探的自欺",
		titleEn:"The self-deceit of temptation"
	},
	{
		id:"0151a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回的爭議",
		titleEn:"The dispute of incarnation"
	},
	{
		id:"0151b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回的爭議(續)",
		titleEn:"The dispute of incarnation(continued)"
	},
	{
		id:"0151",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"基督徒的命運觀",
		titleEn:"Christians treating fate"
	},
	{
		id:"0152a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回說的由來",
		titleEn:"The origin of the incarnation"
	},
	{
		id:"0152b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回說的由來(續)",
		titleEn:"The origin of the incarnation(continued)"
	},
	{
		id:"0152",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的解釋",
		titleEn:"The explanation of more abundance"
	},
	{
		id:"0153a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"六道輪回的真相",
		titleEn:"The truth about the six-way of incarnation"
	},
	{
		id:"0153b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"六道輪回的真相(續)",
		titleEn:"The truth about the six-way of incarnation(continued)"
	},
	{
		id:"0153",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"我靈鎮靜",
		titleEn:"My soul is calm"
	},
	{
		id:"0154a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回現象的祕密",
		titleEn:"The secret of incarnation phenomenon"
	},
	{
		id:"0154b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"輪回現象的祕密(續)",
		titleEn:"The secret of incarnation phenomenon(continued)"
	},
	{
		id:"0154",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"本性難移",
		titleEn:"It is hard to change oneself"
	},
	{
		id:"0155a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"催眠的祕密",
		titleEn:"The secret of hyponosis"
	},
	{
		id:"0155b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"催眠的祕密(續)",
		titleEn:"The secret of hyponosis(continued)"
	},
	{
		id:"0155",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"基督徒的氣質",
		titleEn:"A Christian's character"
	},
	{
		id:"0156a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"紅能辟邪的祕密",
		titleEn:"The secret of red protects from evil"
	},
	{
		id:"0156b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"紅能辟邪的祕密(續)",
		titleEn:"The secret of red protects from evil(continued)"
	},
	{
		id:"0156",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"以馬內利",
		titleEn:"Emmanuel"
	},
	{
		id:"0157a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"做夢的祕密",
		titleEn:"The secret of dream"
	},
	{
		id:"0157b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"做夢的祕密(續)",
		titleEn:"The secret of dream(continued)"
	},
	{
		id:"0157",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"一切都變成新的",
		titleEn:"All become new"
	},
	{
		id:"0158a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"風水的祕密",
		titleEn:"The secret of fen-shui"
	},
	{
		id:"0158b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"風水的祕密(續)",
		titleEn:" The secret of fen-shui(continued)"
	},
	{
		id:"0158",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"難解的一根刺",
		titleEn:"The hardness of a thorn in the flesh"
	},
	{
		id:"0159a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(一)為何需要改教信耶穌 使徒行傳4章12節",
		titleEn:"Why believe in Jesus  Acts 4:12"
	},
	{
		id:"0159b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(一)為何需要改教信耶穌(續) 使徒行傳4章12節",
		titleEn:"Why believe in Jesus(continued)  Acts 4:12"
	},
	{
		id:"0159",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"空虛面面觀",
		titleEn:"To face the appearances of vanity"
	},
	{
		id:"0160a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(二)罪與拯救 羅馬3章23-27節",
		titleEn:"Sin and salvation  Romans 3:23-27"
	},
	{
		id:"0160b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(二)罪與拯救(續) 羅馬3章23-27節",
		titleEn:"Sin and salvation(continued)  Romans 3:23-27"
	},
	{
		id:"0160",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"人生的光明面(二)",
		titleEn:"The shining aspect of life"
	},
	{
		id:"0161a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(三)耶穌基督的拯救 希伯來9章11-22節",
		titleEn:"The salvation of Jesus Christ  Hebrews 9:11-22"
	},
	{
		id:"0161b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(三)耶穌基督的拯救(續) 希伯來9章11-22節",
		titleEn:"The salvation of Jesus Christ(continued)  Hebrews 9:11-22"
	},
	{
		id:"0161",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"年歲的冠冕",
		titleEn:"The crown of year"
	},
	{
		id:"0162a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(四)主耶穌為何需要降生 彼前3章17-22節",
		titleEn:"Why Jesus had to be born?  1 Peter 3:17-22"
	},
	{
		id:"0162b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(四)主耶穌為何需要降生(續) 彼前3章17-22節",
		titleEn:"Why Jesus had to be born?(continued)  1 Peter 3:17-22"
	},
	{
		id:"0162",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"愛我們屬靈的家",
		titleEn:"Love our spiritual home"
	},
	{
		id:"0163a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(五)他們為何要受洗 使徒行傳2章37-42節",
		titleEn:"Why are they baptized?  Acts 2:37-42"
	},
	{
		id:"0163b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(五)他們為何要受洗(續) 使徒行傳2章37-42節",
		titleEn:"Why are they baptized?(continued)  Acts 2:37-42"
	},
	{
		id:"0163",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"貴重的器皿",
		titleEn:"The honored vessel"
	},
	{
		id:"0164a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(六)他們是怎麼得救的? 使徒行傳16章25-34節",
		titleEn:"How are they saved?  Acts 16:25-34"
	},
	{
		id:"0164b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(六)他們是怎麼得救的?(續) 使徒行傳16章25-34節",
		titleEn:"How are they saved?(continued)  Acts 16:25-34"
	},
	{
		id:"0164",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"屬靈錯解的危機",
		titleEn:"The risk of misinterpreting spirituality"
	},
	{
		id:"0165a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(七)如何恭守聖餐 哥前11章23-34節",
		titleEn:"How to observe the communion?  1 Corinthians 11:23-34"
	},
	{
		id:"0165b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(七)如何恭守聖餐(續) 哥前11章23-34節",
		titleEn:"How to observe the communion?(continued)  1 Corinthians 11:23-34"
	},
	{
		id:"0165",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"溫暖的教會",
		titleEn:"A warmhearted church"
	},
	{
		id:"0166a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(八)教會存在的意義 提前3章14-16節",
		titleEn:"The meaning of the existence of church  1 Timothy 3:14-16"
	},
	{
		id:"0166b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"葉明翰牧師 Pastor John M Yeh",
		speakerEn:"nan",
		titleCn:"受洗課程(八)教會存在的意義(續) 提前3章14-16節",
		titleEn:"The meaning of the existence of church(continued) 1 Timothy 3:14-16    "
	},
	{
		id:"0166",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"生命的列車",
		titleEn:"A trolley of life"
	},
	{
		id:"0167a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"約瑟",
		titleEn:"Joseph "
	},
	{
		id:"0167b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"馬利亞",
		titleEn:"Mary "
	},
	{
		id:"0167",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"受難週的心情",
		titleEn:"The heart of Good Fridays"
	},
	{
		id:"0168a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"撒迦利亞",
		titleEn:"Zechariah "
	},
	{
		id:"0168b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"博士與希律",
		titleEn:"Magi and Herod "
	},
	{
		id:"0168",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"復活的榮耀",
		titleEn:"The glory of Resurrection"
	},
	{
		id:"0169a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"天使與牧者",
		titleEn:"Angel and Shepherd"
	},
	{
		id:"0169b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"西面與亞拿",
		titleEn:"Simeon and Anna"
	},
	{
		id:"0169",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"成長的喜悅",
		titleEn:"The joy of growth"
	},
	{
		id:"0170a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"藍色的幽谷(A)",
		titleEn:"The blue valley ( A)"
	},
	{
		id:"0170b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"藍色的幽谷(B)",
		titleEn:"The blue valley ( B)"
	},
	{
		id:"0170",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"苦悶的人心",
		titleEn:"A Sorrowful heart"
	},
	{
		id:"0171a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"青澀的少年(A)",
		titleEn:"The immature young man(A)"
	},
	{
		id:"0171b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"青澀的少年(B)",
		titleEn:"The immature young man(B)"
	},
	{
		id:"0171",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"智慧與愚拙之隔",
		titleEn:"The segregation between the wise and the fool"
	},
	{
		id:"0172a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"粉紅的迷思(A)",
		titleEn:"The myth of marriage (A)"
	},
	{
		id:"0172b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"粉紅的迷思(B)",
		titleEn:"The myth of marriage (B)"
	},
	{
		id:"0172",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"時間的有情與無情",
		titleEn:"The leniency and ruthlessness of time"
	},
	{
		id:"0173a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"壓傷的蘆葦(A)",
		titleEn:"The bruised reed (A)"
	},
	{
		id:"0173b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"壓傷的蘆葦(B)",
		titleEn:"The bruised reed (B)"
	},
	{
		id:"0173",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"高敏智牧師",
		speakerEn:"nan",
		titleCn:"異象的深度",
		titleEn:"The depth of vision"
	},
	{
		id:"0174a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"浴火的鳳凰(A)",
		titleEn:"The burning phoenix (A)"
	},
	{
		id:"0174b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"浴火的鳳凰(B)",
		titleEn:"The burning phoenix (B)"
	},
	{
		id:"0175a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"單親的關懷(A)",
		titleEn:"The single parent's caring(A)"
	},
	{
		id:"0175b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"單親的關懷(B)",
		titleEn:"The single parent's caring(B)"
	},
	{
		id:"0176a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(一A)琴瑟和鳴",
		titleEn:"The couple's warm love(1A)sounds of one accord"
	},
	{
		id:"0176b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(一B)琴瑟和鳴",
		titleEn:"The couple's warm love(1B)sounds of one accord"
	},
	{
		id:"0177a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(二A)我跟你說",
		titleEn:"The couple's warm love(2A)I tell you"
	},
	{
		id:"0177b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(二B)我跟你說",
		titleEn:"The couple's warm love(2B)I tell you"
	},
	{
		id:"0178a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(三A)輕輕聽我",
		titleEn:"The couple's warm love(3A)To listen to me gently"
	},
	{
		id:"0178b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(三B)輕輕聽我",
		titleEn:"The couple's warm love(3B)To listen to me gently"
	},
	{
		id:"0179a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(四A)南腔北調",
		titleEn:"The couple's warm love(4A)The south tone and north voice"
	},
	{
		id:"0179b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(四B)南腔北調",
		titleEn:"The couple's warm love(4B)The south tone and north voice"
	},
	{
		id:"0180a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(五A)建立自尊",
		titleEn:"The couple's warm love(5A)To build self respect"
	},
	{
		id:"0180b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(五B)建立自尊",
		titleEn:"The couple's warm love(5B)To build self respect"
	},
	{
		id:"0181a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(六A)雞飛狗跳",
		titleEn:"The couple's warm love(6A)In a mess"
	},
	{
		id:"0181b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"夫妻溫馨情(六B)雞飛狗跳",
		titleEn:"The couple's warm love(6B)In a mess"
	},
	{
		id:"0182a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(一A)愛與忍耐",
		titleEn:"Love never ending (1A)Love and Patience"
	},
	{
		id:"0182b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(一B)愛與恩慈",
		titleEn:"Love never ending (1B)Love and Mercy"
	},
	{
		id:"0183a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(二A)愛與嫉妒",
		titleEn:"Love never ending (2A)Love and Jealous"
	},
	{
		id:"0183b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(二B)愛與權力",
		titleEn:"Love never ending (2B)Love and Power"
	},
	{
		id:"0184a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(三A)愛與誇口",
		titleEn:"Love never ending (3A)Love and boast"
	},
	{
		id:"0184b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(三B)愛與暴力",
		titleEn:"Love never ending (3B)Love and violence"
	},
	{
		id:"0185a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(四A)愛與自我",
		titleEn:"Love never ending (4A)Love and ego"
	},
	{
		id:"0185b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(四B)愛與包容",
		titleEn:"Love never ending (4B)Love and Tolerance"
	},
	{
		id:"0186a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(五A)愛與憤怒",
		titleEn:"Love never ending (5A)Love and Rage"
	},
	{
		id:"0186b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(五B)愛與相信",
		titleEn:"Love never ending (5B)Love and Believe"
	},
	{
		id:"0187a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(六A)愛與記恨",
		titleEn:"Love never ending (5A)Love and Hatred"
	},
	{
		id:"0187b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(六B)愛與真理",
		titleEn:"Love never ending (5B)Love and Truth"
	},
	{
		id:"0188a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(七A)愛與公義",
		titleEn:"Love never ending (5A)Love and Justice"
	},
	{
		id:"0188b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(七B)愛與盼望",
		titleEn:"Love never ending (5B)Love and Hope"
	},
	{
		id:"0189a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(八A)愛與永恒",
		titleEn:"Love never ending (5A)Love and Eternal"
	},
	{
		id:"0189b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:" Heavenly Ladder",
		titleCn:"愛永不止息(八A)彼此相愛",
		titleEn:"Love never ending (5A)Love one other"
	},
	{
		id:"0190a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(一A)",
		titleEn:"The healing of spiritual rebuilding(1A)"
	},
	{
		id:"0190b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(一B)",
		titleEn:"The healing of spiritual rebuilding(1B)"
	},
	{
		id:"0191a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(二A)",
		titleEn:"The healing of spiritual rebuilding(2A)"
	},
	{
		id:"0191b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(二B)",
		titleEn:"The healing of spiritual rebuilding(2B)"
	},
	{
		id:"0192a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(三A)",
		titleEn:"The healing of spiritual rebuilding(3A)"
	},
	{
		id:"0192b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"心靈重整醫治特會(三B)",
		titleEn:"The healing of spiritual rebuilding(3B)"
	},
	{
		id:"0193a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主啊！醫治我(A) 　　　",
		titleEn:"Lord ! Heal me(A) "
	},
	{
		id:"0193b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主啊！醫治我(B) 　　　",
		titleEn:"Lord ! Heal me(B) "
	},
	{
		id:"0194a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"饒恕－醫治心靈創傷之道(A)",
		titleEn:"Forgive - The way of the healing of spiritual wound (A)"
	},
	{
		id:"0194b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"饒恕－醫治心靈創傷之道(B)",
		titleEn:"Forgive - The way of the healing of spiritual wound (B)"
	},
	{
		id:"0195a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"作個祝福的人(A)",
		titleEn:"To be a blessed person(A)"
	},
	{
		id:"0195b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"作個祝福的人(B)",
		titleEn:"To be a blessed person(B)"
	},
	{
		id:"0196a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"差遣－成為祝福(A)",
		titleEn:"To send a missionary -To become a blessing (A)"
	},
	{
		id:"0196b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"差遣－成為祝福(B)",
		titleEn:"To send a missionary -To become a blessing (B)"
	},
	{
		id:"0197a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"迎接上帝的同在(一)代上15:1 -3",
		titleEn:"To receive God with us(1)"
	},
	{
		id:"0197b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"迎接上帝的同在(二)代上15:1 -3",
		titleEn:"To receive God with us(2)"
	},
	{
		id:"0198a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"迎接上帝的同在(三)代上15:11-15",
		titleEn:"To receive God with us(3)"
	},
	{
		id:"0199a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"作一個感恩的人(上)路17:11-19",
		titleEn:"To be a grateful person(a)"
	},
	{
		id:"0199b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"作一個感恩的人(下)路17:11-19",
		titleEn:"To be a grateful person(b)"
	},
	{
		id:"0200a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"過一個主所喜悅的聖誕節慶 路2:8-20",
		titleEn:"To celebrate a Christmas which the Lord delight"
	},
	{
		id:"0200b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"過一個主所喜悅的聖誕節慶(續) 路2:8-20",
		titleEn:"To celebrate a Christmas which the Lord delight"
	},
	{
		id:"0201a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"無比的愛(上)約3:16",
		titleEn:"No better love(a)"
	},
	{
		id:"0201b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"無比的愛(下)約3:16",
		titleEn:"No better love(b)"
	},
	{
		id:"0202a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"立定志向討主的喜悅(上)林後5:9,腓3:13-14",
		titleEn:"To make up mind to let the Lord glad(a)"
	},
	{
		id:"0202b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"立定志向討主的喜悅(下)林後5:9,腓3:13-14",
		titleEn:"To make up mind to let the Lord glad(b)"
	},
	{
		id:"0203a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"作一個繼續成長的人",
		titleEn:"To be a growing person"
	},
	{
		id:"0204a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"充滿能力的見証(上)",
		titleEn:"A witness with  power(a)"
	},
	{
		id:"0204b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"充滿能力的見証(下)",
		titleEn:"A witness with  power(b)"
	},
	{
		id:"0205a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"生命改變的見証(上)",
		titleEn:"A witness with  changed life(a)"
	},
	{
		id:"0205b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"生命改變的見証(下)",
		titleEn:"A witness with  changed life(b)"
	},
	{
		id:"0206a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"能力見証的祕訣(上)",
		titleEn:"The secret of powerful witness(a)"
	},
	{
		id:"0206b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"能力見証的祕訣(下)",
		titleEn:"The secret of powerful witness(b)"
	},
	{
		id:"0207a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"有效事奉的祕訣(上)",
		titleEn:"The secret of effective services(a)"
	},
	{
		id:"0207b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"有效事奉的祕訣(下)",
		titleEn:"The secret of effective services(b)"
	},
	{
		id:"0208a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"天窗(上)",
		titleEn:"Heavenly window(a)"
	},
	{
		id:"0208b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"天窗(下)",
		titleEn:"Heavenly window(b)"
	},
	{
		id:"0209a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主要用他(上)",
		titleEn:"The Lord needs him(a)"
	},
	{
		id:"0209b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主要用他(下)",
		titleEn:"The Lord needs him(b)"
	},
	{
		id:"0210a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"因祂活著(上)",
		titleEn:"For He lives(a)"
	},
	{
		id:"0210b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"因祂活著(下)",
		titleEn:"For He lives(b)"
	},
	{
		id:"0211a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"信仰的傳承(上)",
		titleEn:"The continuity of faith(a)"
	},
	{
		id:"0211b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"信仰的傳承(下)",
		titleEn:"The continuity of faith(b)"
	},
	{
		id:"0212a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"順著聖靈來生活(上)",
		titleEn:"To live by obeying the holy spirit(a)"
	},
	{
		id:"0212b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"順著聖靈來生活(下)",
		titleEn:"To live by obeying the holy spirit(b)"
	},
	{
		id:"0213a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主阿! 醫治我(上)",
		titleEn:"Oh Lord ! Heal me(a)"
	},
	{
		id:"0213b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"主阿! 醫治我(下)",
		titleEn:"Oh Lord ! Heal me(b)"
	},
	{
		id:"0214a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"看哪! 你們的神(上)",
		titleEn:"Look! Your God !(a)"
	},
	{
		id:"0214b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"EFC",
		titleCn:"看哪! 你們的神(下)",
		titleEn:"Look! Your God !(b)"
	},
	{
		id:"0215a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義之音",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"事奉體會- 李師母",
		titleEn:"The appreciation of services"
	},
	{
		id:"0215b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義之音",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音",
		titleEn:"Voice of righteousness"
	},
	{
		id:"0216a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義之音",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"溪水邊: 談天說地",
		titleEn:"The brook side : to chat about anything"
	},
	{
		id:"0216b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義之音",
		speakerEn:"Sin-I Lutheran Broadcasting Center",
		titleCn:"信義之音",
		titleEn:"Voice of righteousness."
	},
	{
		id:"0217a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"施洗約翰(一):先知(上)太4:1-12",
		titleEn:"John the baptist(1):Prophet(a)"
	},
	{
		id:"0217b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"施洗約翰(一):先知(下)太4:1-12",
		titleEn:"John the baptist(1):Prophet(b)"
	},
	{
		id:"0218a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"施洗約翰(二):宣教    約1:6-8,1:35-37,3:28-30",
		titleEn:"John the baptist(2):To evangelize"
	},
	{
		id:"0218b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"施洗約翰(二):三位一體神",
		titleEn:"John the baptist(2):The trinity"
	},
	{
		id:"0219a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"施洗約翰(三):殉道    太11:1-15,6:14-29",
		titleEn:"John the baptist(3):To be a martyr"
	},
	{
		id:"0220a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"耶穌傳道(一):受洗(上)太3:13-17",
		titleEn:"The Lord's evangelism(1):Baptism(a)"
	},
	{
		id:"0220b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"耶穌傳道(一):受洗(下)太3:13-17",
		titleEn:"The Lord's evangelism(1):Baptism(b)"
	},
	{
		id:"0221a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"耶穌傳道(二):受試    太4:1-11",
		titleEn:"The Lord's evangelism(2):  The temptation"
	},
	{
		id:"0222a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"耶穌傳道(三):召徒(上)太4:18-22",
		titleEn:"The Lord's evangelism(3):  The calling of disciples(a)"
	},
	{
		id:"0222b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"耶穌傳道(三):召徒(下)太4:18-22",
		titleEn:"The Lord's evangelism(3):  The calling of disciples(b)"
	},
	{
		id:"0223a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(一):光鹽(上)    太5:13-16",
		titleEn:"Law (1):  A light and salt(a)"
	},
	{
		id:"0223b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(一):光鹽(下)    太5:13-16",
		titleEn:"Law (1):  A light and salt(b)"
	},
	{
		id:"0224a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(二):成全(上)    太6:17-20",
		titleEn:"Law (2):  To accomplish(a)"
	},
	{
		id:"0224b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(二):成全(下)    太6:17-20",
		titleEn:"Law (2):  To accomplish(b)"
	},
	{
		id:"0225a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(三):仇恨        太5:21-26",
		titleEn:"Law (3):  The hatred"
	},
	{
		id:"0225b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(三):如何讀聖經  太5:21-26",
		titleEn:"Law (3):  How to read the Bible"
	},
	{
		id:"0226a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(四):姦淫(上)    太5:21-26",
		titleEn:"Law (4):  The adultery(a)"
	},
	{
		id:"0226b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(四):姦淫(下)    太5:27-32",
		titleEn:"Law (4):  The adultery(b)"
	},
	{
		id:"0227a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(五):誓言        太5:33-37",
		titleEn:"Law (5):  The oath"
	},
	{
		id:"0228a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(六):愛敵(上)    太5:38-48",
		titleEn:"Law (6):  To love your enemy(a)"
	},
	{
		id:"0228b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"律法(六):愛敵(下)    太5:38-48",
		titleEn:"Law (6):  To love your enemy(b)"
	},
	{
		id:"0229a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"敬虔(一):施捨(上)    太6:1-4",
		titleEn:"Piety (1):  To give to the poor(a)"
	},
	{
		id:"0229b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"敬虔(一):施捨(下)    太6:1-4",
		titleEn:"Piety (1):  To give to the poor(b)"
	},
	{
		id:"0230a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"敬虔(二):禱告(上)    太6:5-8",
		titleEn:"Piety (2):  On prayer(a)"
	},
	{
		id:"0230b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"敬虔(二):禱告(下)    太6:5-8",
		titleEn:"Piety (2):  On prayer(b)"
	},
	{
		id:"0231a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"敬虔(三):禁食        太6:16-18",
		titleEn:"Piety (3):  On fasting"
	},
	{
		id:"0233a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(二):願爾名聖  太6:9-14",
		titleEn:"The Lord's prayer (2): Hallowed be your name"
	},
	{
		id:"0234a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(三):爾國降臨  太6:9-13",
		titleEn:"The Lord's prayer (3): Your Kingdom come"
	},
	{
		id:"0235a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(四):爾旨得成(上)太6:9-13",
		titleEn:"The Lord's prayer (4): Your will be done(a)"
	},
	{
		id:"0235b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(四):爾旨得成(下)太6:9-13",
		titleEn:"The Lord's prayer (4): Your will be done(b)"
	},
	{
		id:"0236a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(五):賜阮日糧    太6:9-13",
		titleEn:"The Lord's prayer (5): Give us our daily bread"
	},
	{
		id:"0237a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(六):救阮過失    太6:9-13",
		titleEn:"The Lord's prayer (6): Lead us not into temptation"
	},
	{
		id:"0238a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(七):救阮惡離(上)太6:9-13",
		titleEn:"The Lord's prayer (7): Deliver us from evil(a)"
	},
	{
		id:"0238b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"主禱文(七):救阮惡離(下)太6:9-13",
		titleEn:"The Lord's prayer (7): Deliver us from evil(b)"
	},
	{
		id:"0239a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"感謝的心(上)西2:6-7",
		titleEn:"The thankful heart(1)"
	},
	{
		id:"0239b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"感謝的心(下)西2:6-7",
		titleEn:"The thankful heart(2)"
	},
	{
		id:"0240a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"得勝的人生",
		titleEn:"Overcoming life"
	},
	{
		id:"0241a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"聖殿",
		titleEn:"Holy temple"
	},
	{
		id:"0242a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"財寶",
		titleEn:"The treasure"
	},
	{
		id:"0242b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"和平人君",
		titleEn:"The prince of peace"
	},
	{
		id:"0243a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(一):愛的真諦(上)",
		titleEn:"The life of love (1):The genuine love(a)"
	},
	{
		id:"0243b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(一):愛的真諦(上)",
		titleEn:"The life of love (1):The genuine love(b)"
	},
	{
		id:"0244a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(二):上帝是愛(上)",
		titleEn:"The life of love (2):God is love(a)"
	},
	{
		id:"0244b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(二):上帝是愛(上)",
		titleEn:"The life of love (2):God is love(b)"
	},
	{
		id:"0245a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(三):疼愛自己(上)",
		titleEn:"The life of love (3):To love yourself(a)"
	},
	{
		id:"0245b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"愛的人生(三):疼愛自己(上)",
		titleEn:"The life of love (3):To love yourself(b)"
	},
	{
		id:"0246a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(一):羅馬書概論(上)",
		titleEn:"Romans (1): An introduction to Romans (a)"
	},
	{
		id:"0246b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(一):羅馬書概論(下)",
		titleEn:"Romans (1): An introduction to Romans (a)"
	},
	{
		id:"0247a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二):羅馬書序論(一上)",
		titleEn:"Romans (2): The prelude (1a)"
	},
	{
		id:"0247b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二):羅馬書序論(一下)",
		titleEn:"Romans (2): The prelude (1b)"
	},
	{
		id:"0248a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(三):羅馬書序論(二上)",
		titleEn:"Romans (3): The prelude (2a)"
	},
	{
		id:"0248b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(三):羅馬書序論(二下)",
		titleEn:"Romans (3): The prelude (2b)"
	},
	{
		id:"0249a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(四):羅馬書序論(三上)",
		titleEn:"Romans (4): The prelude (3a)"
	},
	{
		id:"0249b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(四):羅馬書序論(三下)",
		titleEn:"Romans (4): The prelude (3b)"
	},
	{
		id:"0250a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(五):外邦人的罪(上)",
		titleEn:"Romans (5): The sins of Gentile (a)"
	},
	{
		id:"0250b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(五):外邦人的罪(下)",
		titleEn:"Romans (5): The sins of Gentile (b)"
	},
	{
		id:"0251a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(六):猶太人的罪(上)",
		titleEn:"Romans (6): The sins of Jew (a)"
	},
	{
		id:"0251b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(六):猶太人的罪(下)",
		titleEn:"Romans (6): The sins of Jew (b)"
	},
	{
		id:"0252a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(七):普世人的罪(上)",
		titleEn:"Romans (7): The sins of the world (a)"
	},
	{
		id:"0252b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(七):普世人的罪(下)",
		titleEn:"Romans (7): The sins of the world (b)"
	},
	{
		id:"0253a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(八):稱義的概論(上)",
		titleEn:"Romans (8): On justification (a)"
	},
	{
		id:"0253b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(八):稱義的概論(下)",
		titleEn:"Romans (8): On justification (b)"
	},
	{
		id:"0254a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(九):稱義的例証(上)",
		titleEn:"Romans (9): The examples of justification (a)"
	},
	{
		id:"0254b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(九):稱義的例証(下)",
		titleEn:"Romans (9): The examples of justification (b)"
	},
	{
		id:"0255a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十):稱義的福份(上)",
		titleEn:"Romans (10): The blessings of justification (a)"
	},
	{
		id:"0255b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十):稱義的福份(下)",
		titleEn:"Romans (10): The blessings of justification (b)"
	},
	{
		id:"0256a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十一):稱義的根源(上)",
		titleEn:"Romans (11): The origin of justification (a)"
	},
	{
		id:"0256b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十一):稱義的根源(下)",
		titleEn:"Romans (11): The origin of justification (b)"
	},
	{
		id:"0257a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十二):與主聯合(上)",
		titleEn:"Romans (12): Unification with the Lord (a)"
	},
	{
		id:"0257b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十二):與主聯合(下)",
		titleEn:"Romans (12): Unification with the Lord (b)"
	},
	{
		id:"0258a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十三):心中二律(上)",
		titleEn:"Romans (13): Two laws of heart (a)"
	},
	{
		id:"0258b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十三):心中二律(下)",
		titleEn:"Romans (13): Two laws of heart (b)"
	},
	{
		id:"0259a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十四):隨從聖靈(上)",
		titleEn:"Romans (14): To follow the Holy spirit (a)"
	},
	{
		id:"0259b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十四):隨從聖靈(下)",
		titleEn:"Romans (14): To follow the Holy spirit (b)"
	},
	{
		id:"0260a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十五):榮耀的盼望(一)",
		titleEn:"Romans (15): Glorious expectation (a)"
	},
	{
		id:"0260b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十五):榮耀的盼望(二)",
		titleEn:"Romans (15): Glorious expectation (b)"
	},
	{
		id:"0261a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十六):榮耀的盼望(三)",
		titleEn:"Romans (16): Glorious expectation (c)"
	},
	{
		id:"0261b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十六):榮耀的盼望(四)",
		titleEn:"Romans (16): Glorious expectation (d)"
	},
	{
		id:"0262a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十七):揀選的主權(上)",
		titleEn:"Romans (17): The power of choice (a)"
	},
	{
		id:"0262b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十七):揀選的主權(下)",
		titleEn:"Romans (17): The power of choice (b)"
	},
	{
		id:"0263a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十八):揀選的原則(上)",
		titleEn:"Romans (18): The principle of choice (a)"
	},
	{
		id:"0263b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十八):揀選的原則(下)",
		titleEn:"Romans (18): The principle of choice (b)"
	},
	{
		id:"0264a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十九):揀選的應許(上)",
		titleEn:"Romans (19): The promise of choice (a)"
	},
	{
		id:"0264b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(十九):揀選的應許(下)",
		titleEn:"Romans (19): The promise of choice (b)"
	},
	{
		id:"0265a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十):事奉的三原則(上)",
		titleEn:"Romans (20): The three principles of service (a)"
	},
	{
		id:"0265b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十):事奉的三原則(下)",
		titleEn:"Romans (20): The three principles of service (b)"
	},
	{
		id:"0266a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十一):處世的三認識(上)",
		titleEn:"Romans (21): The three precepts of living (a)"
	},
	{
		id:"0266b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十一):處世的三認識(下)",
		titleEn:"Romans (21): The three precepts of living (b)"
	},
	{
		id:"0267a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十二):待人的三種心(上)",
		titleEn:"Romans (22): The three kinds of heart of dealing with people (a)"
	},
	{
		id:"0267b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十二):待人的三種心(下)",
		titleEn:"Romans (22): The three kinds of heart of dealing with people (b)"
	},
	{
		id:"0268a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十三):最後的心語(上)",
		titleEn:"Romans (23): The last word of heart (a)"
	},
	{
		id:"0268b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十三):最後的心語(下)",
		titleEn:"Romans (23): The last word of heart (b)"
	},
	{
		id:"0269a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十四):最後的問安(上)",
		titleEn:"Romans (24): The last greeting (a)"
	},
	{
		id:"0269b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"羅馬書(二十四):最後的問安(下)",
		titleEn:"Romans (24): The last greeting (b)"
	},
	{
		id:"0270a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(一):全本聖經總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (1): The general comment to The Bible (a)"
	},
	{
		id:"0270b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(一):全本聖經總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (1): The general comment to The Bible (b)"
	},
	{
		id:"0271a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二):舊約聖經總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (2): The general comment to The Old Testment (a)"
	},
	{
		id:"0271b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二):舊約聖經總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (2): The general comment to The Old Testment (b)"
	},
	{
		id:"0272a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(三):創世記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (3): The general comment to Genesis (a)"
	},
	{
		id:"0272b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(三):創世記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (3): The general comment to Genesis (b)"
	},
	{
		id:"0273a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(四):出埃及記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (4): The general comment to Exodus (a)"
	},
	{
		id:"0273b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(四):出埃及記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (4): The general comment to Exodus (b)"
	},
	{
		id:"0274a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(五):利未記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (5): The general comment to Leviticus (a)"
	},
	{
		id:"0274b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(五):利未記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (5): The general comment to Leviticus (b)"
	},
	{
		id:"0275a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(六):民數記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (6): The general comment to Numbers (a)"
	},
	{
		id:"0275b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(六):民數記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (6): The general comment to Numbers (b)"
	},
	{
		id:"0276a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(七):申命記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (7): The general comment to Deuteronomy (a)"
	},
	{
		id:"0276b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(七):申命記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (7): The general comment to Deuteronomy (b)"
	},
	{
		id:"0277a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(八):約書亞記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (8): The general comment to Joshua (a)"
	},
	{
		id:"0277b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(八):約書亞記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (8): The general comment to Joshua (b)"
	},
	{
		id:"0278a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(九):士師記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (9): The general comment to Judges (a)"
	},
	{
		id:"0278b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(九):士師記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (9): The general comment to Judges (b)"
	},
	{
		id:"0279a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十):路得記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (10): The general comment to Ruth (a)"
	},
	{
		id:"0279b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十):路得記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (10): The general comment to Ruth (b)"
	},
	{
		id:"0280a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十一):撒母耳記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (11): The general comment to Samuel (a)"
	},
	{
		id:"0280b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十一):撒母耳記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (11): The general comment to Samuel (b)"
	},
	{
		id:"0281a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十二):列王紀總論",
		titleEn:"An Introduction to The Old Testment Bible (12): The general comment to Kings (a)"
	},
	{
		id:"0281b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十二):歷代志總論",
		titleEn:"An Introduction to The Old Testment Bible (12): The general comment to Kings (b)"
	},
	{
		id:"0282a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十三):以斯拉記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (13): The general comment to Ezra (a)"
	},
	{
		id:"0282b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十三):以斯拉記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (13): The general comment to Ezra (b)"
	},
	{
		id:"0283a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十四):尼希米記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (14): The general comment to Nehemiah (a)"
	},
	{
		id:"0283b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十四):尼希米記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (14): The general comment to Nehemiah (b)"
	},
	{
		id:"0284a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十五):以斯帖記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (15): The general comment to Esther (a)"
	},
	{
		id:"0284b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十五):以斯帖記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (15): The general comment to Esther (b)"
	},
	{
		id:"0285a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十六):約伯記總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (16): The general comment to Job (a)"
	},
	{
		id:"0285b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十六):約伯記總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (16): The general comment to Job (b)"
	},
	{
		id:"0286a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十七):詩篇總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (17): The general comment to Psalm (a)"
	},
	{
		id:"0286b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十七):詩篇總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (17): The general comment to Psalm (b)"
	},
	{
		id:"0287a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十八):箴言總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (18): The general comment to Proverbs (a)"
	},
	{
		id:"0287b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十八):箴言總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (18): The general comment to Proverbs (b)"
	},
	{
		id:"0288a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十九):傳道書總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (19): The general comment to Ecclesiastes (a)"
	},
	{
		id:"0288b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(十九):傳道書總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (19): The general comment to Ecclesiastes (b)"
	},
	{
		id:"0289a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十):雅歌總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (20): The general comment to Song of Songs (a)"
	},
	{
		id:"0289b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十):雅歌總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (20): The general comment to Song of Songs (b)"
	},
	{
		id:"0290a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十一):以賽亞書總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (21): The general comment to Isaiah (a)"
	},
	{
		id:"0290b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十一):以賽亞書總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (21): The general comment to Isaiah (b)"
	},
	{
		id:"0291a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十二):耶利米書總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (22): The general comment to Jeremiah (a)"
	},
	{
		id:"0291b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十二):耶利米書總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (22): The general comment to Jeremiah (b)"
	},
	{
		id:"0292a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十三):耶利米哀歌總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (23): The general comment to Lamentations (a)"
	},
	{
		id:"0292b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十三):耶利米哀歌總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (23): The general comment to Lamentations (b)"
	},
	{
		id:"0293a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十四):以西結書總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (24): The general comment to Ezekiel (a)"
	},
	{
		id:"0293b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十四):以西結書總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (24): The general comment to Ezekiel (b)"
	},
	{
		id:"0294a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十五):但以理書總論(上)",
		titleEn:"An Introduction to The Old Testment Bible (25): The general comment to Daniel (a)"
	},
	{
		id:"0294b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十五):但以理書總論(下)",
		titleEn:"An Introduction to The Old Testment Bible (25): The general comment to Daniel (b)"
	},
	{
		id:"0295a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十六):何西阿書總論",
		titleEn:"An Introduction to The Old Testment Bible (26): The general comment to Hosea"
	},
	{
		id:"0295b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十六):約珥書總論",
		titleEn:"An Introduction to The Old Testment Bible (26): The general comment to Joel"
	},
	{
		id:"0296a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十七):阿摩司書總論",
		titleEn:"An Introduction to The Old Testment Bible (27): The general comment to Amos"
	},
	{
		id:"0296b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十七):俄巴底亞書及那鴻書總論",
		titleEn:"An Introduction to The Old Testment Bible (27): The general comment to Obadiah and Nahum"
	},
	{
		id:"0297a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十八):約拿書總論",
		titleEn:"An Introduction to The Old Testment Bible (28): The general comment to Jonah"
	},
	{
		id:"0297b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十八):彌迦書總論",
		titleEn:"An Introduction to The Old Testment Bible (28): The general comment to Micah"
	},
	{
		id:"0298a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十九):哈巴谷書總論",
		titleEn:"An Introduction to The Old Testment Bible (29): The general comment to Habakkuk"
	},
	{
		id:"0298b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(二十九):西番雅書總論",
		titleEn:"An Introduction to The Old Testment Bible (29): The general comment to Zephaniah"
	},
	{
		id:"0299a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(三十):撒迦利亞書總論",
		titleEn:"An Introduction to The Old Testment Bible (30): The general comment to Zechariah"
	},
	{
		id:"0299b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"舊約聖經概論(三十):瑪拉基書總論",
		titleEn:"An Introduction to The Old Testment Bible (30): The general comment to Malachi"
	},
	{
		id:"0300a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(一):新約聖經概論(上)",
		titleEn:"An Introduction to The New Testment Bible (1): The general comment to The New Testment (a)"
	},
	{
		id:"0300b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(一):新約聖經概論(下)",
		titleEn:"An Introduction to The New Testment Bible (1): The general comment to The New Testment (b)"
	},
	{
		id:"0301a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(二):馬太福音總論(上)",
		titleEn:"An Introduction to The New Testment Bible (2): The general comment to Matthew(a)"
	},
	{
		id:"0301b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(二):馬太福音總論(下)",
		titleEn:"An Introduction to The New Testment Bible (2): The general comment to Matthew(b)"
	},
	{
		id:"0302a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(三):馬可福音總論(上)",
		titleEn:"An Introduction to The New Testment Bible (3): The general comment to Mark(a)"
	},
	{
		id:"0302b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(三):馬可福音總論(下)",
		titleEn:"An Introduction to The New Testment Bible (3): The general comment to Mark(b)"
	},
	{
		id:"0303a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(四):路加福音總論(上)",
		titleEn:"An Introduction to The New Testment Bible (4): The general comment to Luke(a)"
	},
	{
		id:"0303b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(四):路加福音總論(下)",
		titleEn:"An Introduction to The New Testment Bible (4): The general comment to Luke(b)"
	},
	{
		id:"0304a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(五):約翰福音總論(上)",
		titleEn:"An Introduction to The New Testment Bible (5): The general comment to John(a)"
	},
	{
		id:"0304b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(五):約翰福音總論(下)",
		titleEn:"An Introduction to The New Testment Bible (5): The general comment to John(b)"
	},
	{
		id:"0305a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(六):使徒行傳總論(上)",
		titleEn:"An Introduction to The New Testment Bible (6): The general comment to Acts(a)"
	},
	{
		id:"0305b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(六):使徒行傳總論(下)",
		titleEn:"An Introduction to The New Testment Bible (6): The general comment to Acts(b)"
	},
	{
		id:"0306a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(七):羅馬書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (7): The general comment to Romans(a)"
	},
	{
		id:"0306b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(七):羅馬書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (7): The general comment to Romans(b)"
	},
	{
		id:"0307a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(八):哥林多前書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (8): The general comment to 1 Corinthians (a)"
	},
	{
		id:"0307b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(八):哥林多前書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (8): The general comment to 1 Corinthians (b)"
	},
	{
		id:"0308a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(九):哥林多後書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (9): The general comment to 2 Corinthians (a)"
	},
	{
		id:"0308b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(九):哥林多後書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (9): The general comment to 2 Corinthians (b)"
	},
	{
		id:"0309a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十):加拉太書總論",
		titleEn:"An Introduction to The New Testment Bible (10): The general comment to Galatians"
	},
	{
		id:"0309b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十):以弗所書總論",
		titleEn:"An Introduction to The New Testment Bible (10): The general comment to Ephesians"
	},
	{
		id:"0310a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十一):腓立比書總論",
		titleEn:"An Introduction to The New Testment Bible (11): The general comment to Philippians"
	},
	{
		id:"0310b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十一):歌羅西書總論",
		titleEn:"An Introduction to The New Testment Bible (11): The general comment to Colossians"
	},
	{
		id:"0311a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十二):帖撒羅尼迦前書總論",
		titleEn:"An Introduction to The New Testment Bible (12): The general comment to 1 Thessalonians"
	},
	{
		id:"0311b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十二):帖撒羅尼迦後書總論",
		titleEn:"An Introduction to The New Testment Bible (12): The general comment to 2 Thessalonians"
	},
	{
		id:"0312a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十三):提摩太前後書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (13): The general comment to Timothy"
	},
	{
		id:"0312b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十三):提摩太前後書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (13): The general comment to Timothy"
	},
	{
		id:"0313a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十四):提多書總論",
		titleEn:"An Introduction to The New Testment Bible (14): The general comment to Titus"
	},
	{
		id:"0313b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十四):腓利門書總論",
		titleEn:"An Introduction to The New Testment Bible (14): The general comment to Philemon"
	},
	{
		id:"0314a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十五):希伯來書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (15): The general comment to Hebrews (a)"
	},
	{
		id:"0314b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十五):希伯來書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (15): The general comment to Hebrews (b)"
	},
	{
		id:"0315a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十六):雅各書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (16): The general comment to James (a)"
	},
	{
		id:"0315b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十六):雅各書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (16): The general comment to James (b)"
	},
	{
		id:"0316a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十七):彼得前後書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (17): The general comment to Peter (a)"
	},
	{
		id:"0316b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十七):彼得前後書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (17): The general comment to Peter (b)"
	},
	{
		id:"0317a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十八):約翰壹書總論(上)",
		titleEn:"An Introduction to The New Testment Bible (18): The general comment to 1 John (a)"
	},
	{
		id:"0317b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十八):約翰壹書總論(下)",
		titleEn:"An Introduction to The New Testment Bible (18): The general comment to 1 John (b)"
	},
	{
		id:"0318b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(十九):猶大書總論",
		titleEn:"An Introduction to The New Testment Bible (19): The general comment to Jude"
	},
	{
		id:"0319a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(二十):啟示錄總論(上)",
		titleEn:"An Introduction to The New Testment Bible (20): The general comment to Revelation (a)"
	},
	{
		id:"0319b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"新約聖經概論(二十):啟示錄總論(下)",
		titleEn:"An Introduction to The New Testment Bible (20): The general comment to Revelation (b)"
	},
	{
		id:"0320a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(一):緒論",
		titleEn:"The sermon on the mount (1): A preface"
	},
	{
		id:"0320b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(一):八福(1)虛心的人有福了",
		titleEn:"The sermon on the mount (1): The Beatitudes : Blessed are the poor in spirit"
	},
	{
		id:"0321a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(二):八福(2)哀慟的人有福了",
		titleEn:"The sermon on the mount (2): The Beatitudes : The mournful"
	},
	{
		id:"0321b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(二):八福(3)溫柔的人有福了",
		titleEn:"The sermon on the mount (2): The Beatitudes : The meek"
	},
	{
		id:"0322a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(三):八福(4)清心的人有福了",
		titleEn:"The sermon on the mount (3): The Beatitudes : The pure in heart"
	},
	{
		id:"0322b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(三):八福(5)為義受逼迫的人有福了",
		titleEn:"The sermon on the mount (3): The Beatitudes : To be persecuted because of righteousness"
	},
	{
		id:"0323a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(四):鹽與光",
		titleEn:"The sermon on the mount (4): Salt and light"
	},
	{
		id:"0323b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(四):律法的成全",
		titleEn:"The sermon on the mount (4): To be perfected in law"
	},
	{
		id:"0324a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(五):律法的新釋(上)",
		titleEn:"The sermon on the mount (5): The new explanation of Law (a)"
	},
	{
		id:"0324b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(五):律法的新釋(下)",
		titleEn:"The sermon on the mount (5): The new explanation of Law (b)"
	},
	{
		id:"0325a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(六):要愛你的仇敵(上)",
		titleEn:"The sermon on the mount (6): Love your enemy (a)"
	},
	{
		id:"0325b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(六):要愛你的仇敵(下)",
		titleEn:"The sermon on the mount (6): Love your enemy (b)"
	},
	{
		id:"0326a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(七):當將善事行在暗中(上)",
		titleEn:"The sermon on the mount (7): To do good in the dark (a)"
	},
	{
		id:"0326b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(七):當將善事行在暗中(下)",
		titleEn:"The sermon on the mount (7): To do good in the dark (b)"
	},
	{
		id:"0327a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(八):主禱文(上)",
		titleEn:"The sermon on the mount (8): The Lord's Prayer (a)"
	},
	{
		id:"0327b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(八):主禱文(下)",
		titleEn:"The sermon on the mount (8): The Lord's Prayer (b)"
	},
	{
		id:"0328a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(九):錢財的善用(上)",
		titleEn:"The sermon on the mount (9): To make good use of money (a)"
	},
	{
		id:"0328b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(九):錢財的善用(下)",
		titleEn:"The sermon on the mount (9): To make good use of money (b)"
	},
	{
		id:"0329a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十):不要憂慮(上)",
		titleEn:"The sermon on the mount (10): Do not worry (a)"
	},
	{
		id:"0329b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十):不要憂慮(下)",
		titleEn:"The sermon on the mount (10): Do not worry (b)"
	},
	{
		id:"0330a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十一):不要論斷人(上)",
		titleEn:"The sermon on the mount (11): Do not judge others (a)"
	},
	{
		id:"0330b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十一):不要論斷人(下)",
		titleEn:"The sermon on the mount (11): Do not judge others (b)"
	},
	{
		id:"0331a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十二):祈禱的原則(上)",
		titleEn:"The sermon on the mount (12): The principles of prayer (a)"
	},
	{
		id:"0331b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十二):祈禱的原則(下)",
		titleEn:"The sermon on the mount (12): The principles of prayer (b)"
	},
	{
		id:"0332a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十三):屬靈的先後律(上)",
		titleEn:"The sermon on the mount (13): The priority of spiritual Law (a)"
	},
	{
		id:"0332b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十三):屬靈的先後律(下)",
		titleEn:"The sermon on the mount (13): The priority of spiritual Law (b)"
	},
	{
		id:"0333a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十四):兩種道路(上)",
		titleEn:"The sermon on the mount (14): Two roads (a)"
	},
	{
		id:"0333b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十四):兩種道路(下)",
		titleEn:"The sermon on the mount (14): Two roads (b)"
	},
	{
		id:"0334a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十五):兩種果樹",
		titleEn:"The sermon on the mount (15): Two kinds of fruits"
	},
	{
		id:"0334b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"登山寶訓(十五):兩種房基",
		titleEn:"The sermon on the mount (15): Two foundations"
	},
	{
		id:"0335a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(一):聖經(上)",
		titleEn:"The basic faith(1 ): The Bible (a)"
	},
	{
		id:"0335b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(一):聖經(下)",
		titleEn:"The basic faith(1 ): The Bible (b)"
	},
	{
		id:"0336a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(二):真神(上)",
		titleEn:"The basic faith(2 ): The true God (a)"
	},
	{
		id:"0336b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(二):真神(下)",
		titleEn:"The basic faith(2 ): The true God (b)"
	},
	{
		id:"0337a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(三):基督(上)",
		titleEn:"The basic faith(3 ): The Christ (a)"
	},
	{
		id:"0337b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(三):基督(下)",
		titleEn:"The basic faith(3 ): The Christ (b)"
	},
	{
		id:"0338a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(四):聖靈(上)",
		titleEn:"The basic faith(4 ): The Holy Spirit (a)"
	},
	{
		id:"0338b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(四):聖靈(下)",
		titleEn:"The basic faith(4 ): The Holy Spirit (b)"
	},
	{
		id:"0339a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(五):人類(上)",
		titleEn:"The basic faith(5 ): Human(a)"
	},
	{
		id:"0339b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(五):人類(下)",
		titleEn:"The basic faith(5 ): Human(b)"
	},
	{
		id:"0340a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(六):罪惡(上)",
		titleEn:"The basic faith(6 ): sins(a)"
	},
	{
		id:"0340b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(六):罪惡(下)",
		titleEn:"The basic faith(6 ): sins(b)"
	},
	{
		id:"0341a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(七):救贖(上)",
		titleEn:"The basic faith(7 ): The salvation(a)"
	},
	{
		id:"0341b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(七):救贖(下)",
		titleEn:"The basic faith(7 ): The salvation(b)"
	},
	{
		id:"0342a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(八):蒙恩(上)",
		titleEn:"The basic faith(8 ): The grace (a)"
	},
	{
		id:"0342b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(八):蒙恩(下)",
		titleEn:"The basic faith(8 ): The grace (b)"
	},
	{
		id:"0343a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(九):教會(上)",
		titleEn:"The basic faith(9 ): The church (a)"
	},
	{
		id:"0343b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(九):教會(下)",
		titleEn:"The basic faith(9 ): The church (b)"
	},
	{
		id:"0344a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(十):來世",
		titleEn:"The basic faith(1 0):The after life"
	},
	{
		id:"0344b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"信仰基本要道(十):末世",
		titleEn:"The basic faith(1 0):The end"
	},
	{
		id:"0345a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(一):概論(上)",
		titleEn:"Revelation (1):The general comment to Revelation (a)"
	},
	{
		id:"0345b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(一):概論(下)",
		titleEn:"Revelation (1):The general comment to Revelation (b)"
	},
	{
		id:"0346a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(二):基督顯現的異象(上)",
		titleEn:"Revelation (2):The vision of Christ's appearance (a)"
	},
	{
		id:"0346b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(二):基督顯現的異象(下)",
		titleEn:"Revelation (2):The vision of Christ's appearance (b)"
	},
	{
		id:"0347a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(三):致以弗所教會的信(上)",
		titleEn:"Revelation (3):The church in Ephesus(a)"
	},
	{
		id:"0347b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(三):致以弗所教會的信(下)",
		titleEn:"Revelation (3):The church in Ephesus(b)"
	},
	{
		id:"0348a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(四):致士每拿教會的信",
		titleEn:"Revelation (4):The church in Smyrna"
	},
	{
		id:"0348b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(四):致別迦摩教會的信",
		titleEn:"Revelation (4):The church in Pergamos"
	},
	{
		id:"0349a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(五):致推雅推喇教會的信",
		titleEn:"Revelation (5):The church in Thyatira"
	},
	{
		id:"0349b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(五):致撒狄教會的信",
		titleEn:"Revelation (5):The church in Sardis"
	},
	{
		id:"0350a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(六):致非拉鐵非教會的信",
		titleEn:"Revelation (6):The church in Philadelphia"
	},
	{
		id:"0350b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(六):致老底嘉教會的信",
		titleEn:"Revelation (6):The church in Laodicea"
	},
	{
		id:"0351a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(七):天上的敬拜",
		titleEn:"Revelation (7):The heaven's worship"
	},
	{
		id:"0351b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(七):羔羊取書卷",
		titleEn:"Revelation (7):A Lamb took scroll"
	},
	{
		id:"0352a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(八):七個封印(上)",
		titleEn:"Revelation (8):The seven seals (a)"
	},
	{
		id:"0352b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(八):七個封印(下)",
		titleEn:"Revelation (8):The seven seals (b)"
	},
	{
		id:"0353a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(九):以色列的受印",
		titleEn:"Revelation (9):The sealed Israel"
	},
	{
		id:"0353b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(九):穿白衣的群眾",
		titleEn:"Revelation (9):The Great Multitude in White Robes"
	},
	{
		id:"0354a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十):蝗蟲的災害",
		titleEn:"Revelation (10): The harm of locusts"
	},
	{
		id:"0354b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十):兩億的軍隊",
		titleEn:"Revelation (10): The two hundred million troops"
	},
	{
		id:"0355a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十一):兩個見証人(上)",
		titleEn:"Revelation (11): The two witnesses(a)"
	},
	{
		id:"0355b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十一):兩個見証人(下)",
		titleEn:"Revelation (11): The two witnesses(b)"
	},
	{
		id:"0356a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十二):龍與婦人(上)",
		titleEn:"Revelation (12): The Dragon and the Woman(a)"
	},
	{
		id:"0356b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十二):龍與婦人(下)",
		titleEn:"Revelation (12): The Dragon and the Woman(b)"
	},
	{
		id:"0357a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十三):敵基督與假先知(上)",
		titleEn:"Revelation (13): The anti-Christ and false prophet (a)"
	},
	{
		id:"0357b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十三):敵基督與假先知(下)",
		titleEn:"Revelation (13): The anti-Christ and false prophet (b)"
	},
	{
		id:"0358a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十四):大暴風前的寧靜(上)",
		titleEn:"Revelation (14): The calm before the storm (a)"
	},
	{
		id:"0358b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十四):大暴風前的寧靜(下)",
		titleEn:"Revelation (14): The calm before the storm (b)"
	},
	{
		id:"0359a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十五):七個金碗隨一傾倒(上)",
		titleEn:"Revelation (15): The seven Bowls of God's wrath (a)"
	},
	{
		id:"0359b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十五):七個金碗隨一傾倒(下)",
		titleEn:"Revelation (15): The seven Bowls of God's wrath (b)"
	},
	{
		id:"0360a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十六):大巴比倫的傾覆(上)",
		titleEn:"Revelation (16): The final victory of Christ (a)"
	},
	{
		id:"0360b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十六):大巴比倫的傾覆(下)",
		titleEn:"Revelation (16): The final victory of Christ (b)"
	},
	{
		id:"0361a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十七):基督至終的得勝(上)",
		titleEn:"Revelation (17): The final victory of Christ (a)"
	},
	{
		id:"0361b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十七):基督至終的得勝(下)",
		titleEn:"Revelation (17): The final victory of Christ (b)"
	},
	{
		id:"0362a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十八):王國與審判(上)",
		titleEn:"Revelation (18): The Kindom and Judge (a)"
	},
	{
		id:"0362b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十八):王國與審判(下)",
		titleEn:"Revelation (18): The Kindom and Judge (b)"
	},
	{
		id:"0363a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十九):新天新地新聖城(上)",
		titleEn:"Revelation (19): New heaven ,new earth ,the new Holy City (a)"
	},
	{
		id:"0363b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(十九):新天新地新聖城(下)",
		titleEn:"Revelation (19): New heaven ,new earth ,the new Holy City (b)"
	},
	{
		id:"0364a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(二十):樂園與應允(上)",
		titleEn:"Revelation (20): The paradise and Promise(a)"
	},
	{
		id:"0364b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"啟示錄(二十):樂園與應允(下)",
		titleEn:"Revelation (20): The paradise and Promise(b)"
	},
	{
		id:"0365a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"得勝的人生",
		titleEn:"Victorious life. Rev. Mathew Tsai"
	},
	{
		id:"0366a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"聖殿 ",
		titleEn:"The Holy temple. Rev. Mathew Tsai"
	},
	{
		id:"0367a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"奉獻",
		titleEn:"The offering. Rev. Mathew Tsai"
	},
	{
		id:"0368a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"救阮脫離兇惡",
		titleEn:"Deliver us from the evil one. Rev. Mathew Tsai"
	},
	{
		id:"0368b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"救阮脫離兇惡(續)",
		titleEn:"Deliver us from the evil one. (continue) Rev. Mathew Tsai"
	},
	{
		id:"0369a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻七大殺手",
		titleEn:"The seven killers in marriage. Rev. Mathew Tsai"
	},
	{
		id:"0369b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻七大殺手(續)",
		titleEn:"The seven killers in marriage. (continue) Rev. Mathew Tsai"
	},
	{
		id:"0370a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"財寶",
		titleEn:"The treasures. Rev. Mathew Tsai"
	},
	{
		id:"0370b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"和平人君",
		titleEn:"Peaceful king. Rev. Mathew Tsai"
	},
	{
		id:"0371a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"思慮",
		titleEn:"Worrying. Rev. Mathew Tsai"
	},
	{
		id:"0372a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"論斷",
		titleEn:"Judging others. Rev. Mathew Tsai"
	},
	{
		id:"0372b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"論斷(續)",
		titleEn:"Judging others. (continue) Rev. Mathew Tsai"
	},
	{
		id:"0373a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"復活的見証",
		titleEn:"The testimony of resurrection. Rev. Mathew Tsai"
	},
	{
		id:"0373b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"復活的見證(續)",
		titleEn:"The testimony of resurrection. (continue) Rev. Mathew Tsai"
	},
	{
		id:"0374a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"金律(待人)",
		titleEn:"The golden rules. Rev. Mathew Tsai"
	},
	{
		id:"0375a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"門路",
		titleEn:"The gates. Rev. Mathew Tsai"
	},
	{
		id:"0376a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"果樹",
		titleEn:"The fruit tree. Rev. Mathew Tsai"
	},
	{
		id:"0376b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"果樹(續)",
		titleEn:"The fruit tree. (continue) Rev. Mathew Tsai"
	},
	{
		id:"0377a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"楊永慶傳道",
		speakerEn:"nan",
		titleCn:"工作倦怠怎麼辦",
		titleEn:"How to do in working with tiredness. Evangelist Philip Yang  "
	},
	{
		id:"0378a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"楊永慶傳道",
		speakerEn:"nan",
		titleCn:"阿爸父上帝",
		titleEn:"Abba Father God. Evangelist Philip Yang"
	},
	{
		id:"0379a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"楊永慶傳道",
		speakerEn:"nan",
		titleCn:"成為禱告的教會",
		titleEn:"Becoming the church of prayers. Evangelist Philip Yang"
	},
	{
		id:"0380a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(一)貧窮",
		titleEn:"The beatitudes(1) Poverty. Rev. Mathew Tsai"
	},
	{
		id:"0380b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(一)哀慟",
		titleEn:"The beatitudes(1) Mourning. Rev. Mathew Tsai"
	},
	{
		id:"0381a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(二)溫柔",
		titleEn:"The beatitudes(2) The meek. Rev. Mathew Tsai"
	},
	{
		id:"0381b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(二)慕義",
		titleEn:"The beatitudes(2) Hunger for righteousness. Rev. Mathew Tsai"
	},
	{
		id:"0382a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(三)憐恤",
		titleEn:"The beatitudes(3) The merciful. Rev. Mathew Tsai"
	},
	{
		id:"0382b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(三)清心",
		titleEn:"The beatitudes(3) The pure in heart. Rev. Mathew Tsai"
	},
	{
		id:"0383a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(四)和平  Peace",
		titleEn:"The beatitudes(4) The peacemaker. Rev. Mathew Tsai"
	},
	{
		id:"0383b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"幸福的人生(四)逼迫",
		titleEn:"The beatitudes(4) The persecuted. Rev. Mathew Tsai"
	},
	{
		id:"0384a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(一)人的地位",
		titleEn:"What is man?(1) The status of man. Rev. C. Z. Tong"
	},
	{
		id:"0384b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(一)人的地位(續)",
		titleEn:"What is man?(1) The status of man.(contine) Rev. C. Z. Tong"
	},
	{
		id:"0385a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(二)人的價值 ",
		titleEn:"What is man?(2) The value of man. Rev. C. Z. Tong"
	},
	{
		id:"0385b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(二)人的價值(續)",
		titleEn:"What is man?(2) The value of man. (continue) Rev. C. Z. Tong "
	},
	{
		id:"0386a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(三)人的歸處",
		titleEn:"What is man?(3) The home of man. Rev. C. Z. Tong "
	},
	{
		id:"0386b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(三)人的歸處(續)",
		titleEn:"What is man?(3) The home of man.(continue) Rev. C. Z. Tong. "
	},
	{
		id:"0387a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(四)人的危機",
		titleEn:"What is man?(4) The crisis of man. Rev. C. Z. Tong"
	},
	{
		id:"0387b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"唐崇榮牧師  人是什麼(四)人的危機 ",
		titleEn:"What is man?(4) The crisis of man.(continue) Rev. C. Z. Tong"
	},
	{
		id:"0388a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(一)家庭的品質",
		titleEn:"Marriage and family(1) The quality of family. Rev. S. Y. Ko"
	},
	{
		id:"0388b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(一)家庭的品質(續)",
		titleEn:"Marriage and family(1) The quality of family.(continue) Rev. S. Y. Ko"
	},
	{
		id:"0389a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(二)和睦同居",
		titleEn:"Marriage and family(2) The harmony living. Rev. S. Y. Ko"
	},
	{
		id:"0389b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(二)和睦同居(續)",
		titleEn:"Marriage and family(2) The harmony living. Rev. S. Y. Ko"
	},
	{
		id:"0390a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(三)得失與恩怨",
		titleEn:"Marriage and family(3) Gain and loss. Rev. S. Y. Ko"
	},
	{
		id:"0390b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(三)得失與恩怨(續)",
		titleEn:"Marriage and family(3) Gain and loss.(continue) Rev. S. Y. Ko"
	},
	{
		id:"0391a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(四)代溝問題",
		titleEn:"Marriage and family(4) Generation gap. Rev. S. Y. Ko"
	},
	{
		id:"0391b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"寇世遠牧師  婚姻與家庭(四)代溝問題(續)",
		titleEn:"Marriage and family(4) Generation gap.(cntinue) Rev. S. Y. Ko"
	},
	{
		id:"0392a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白雅各牧師  婚姻與家庭(五)如何幫助兒女尋找對象",
		titleEn:"Marriage and family(5) How to help seeking a mate for your children. Rev. Y. K. Pai"
	},
	{
		id:"0392b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白雅各牧師  婚姻與家庭(五)如何幫助兒女尋找對象(續)",
		titleEn:"Marriage and family(5) How to help seeking a mate for your children.(continue) Rev. Y. K. Pai"
	},
	{
		id:"0393a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白雅各牧師  婚姻與家庭(六)家庭問題",
		titleEn:"Marriage and family(6) The family problem. Rev. Y. K. Pai"
	},
	{
		id:"0393b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白雅各牧師  婚姻與家庭(六)家庭問題(續)",
		titleEn:"Marriage and family(6) The family problem.(contine) Rev. Y. K. Pai  "
	},
	{
		id:"0394a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃維仁博士  原生家庭(一)原生家庭對個人的影響",
		titleEn:"The original family(1) The personal influence from the original family. Dr. W. Z. Huang"
	},
	{
		id:"0394b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃維仁博士  原生家庭(一)人的基本需要是什麼",
		titleEn:"The original family(1) What is the basic needs of man. Dr. W. Z. Huang"
	},
	{
		id:"0395a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃維仁博士  原生家庭(二)如何處理過去的創傷",
		titleEn:"The original family(2) How to deal with the past hurt? Dr. W. Z. Huang"
	},
	{
		id:"0395b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃維仁博士  原生家庭(二)生命經驗的新學習",
		titleEn:"The original family(2) The new learning of life's experiences. Dr. W. Z. Huang"
	},
	{
		id:"0396a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士  童年往事(一)愛知多少",
		titleEn:"The childhood memony(1) What is love? Dr. C. Y. Huang"
	},
	{
		id:"0396b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士  童年往事(一)蒙福的家庭",
		titleEn:"The childhood memony(1) The blessed family. Dr. C. Y. Huang"
	},
	{
		id:"0397a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士  童年往事(二)快樂的童年",
		titleEn:"The childhood memony(2) The happy childhood. Dr. C. Y. Huang"
	},
	{
		id:"0397b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士  童年往事(二)快樂的親子關係 ",
		titleEn:"The childhood memony(2) The happy parental and child relationship. Dr. C. Y. Huang"
	},
	{
		id:"0398a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃文雄醫師  與狼共舞(一)認識新時代的青少年",
		titleEn:"Dance with the wolf(1) Get to know the teenager in the new age. Luke Huang, MD"
	},
	{
		id:"0398b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃文雄醫師  與狼共舞(一)如何做青少年的朋友",
		titleEn:"Dance with the wolf(1) How to be the friend of the teenager? Luke Huang, MD"
	},
	{
		id:"0399a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"吳家棟牧師  與狼共舞(二)如何有效管教青少年",
		titleEn:"Dance with the wolf(2) How to discipline the teenager effectively? Rev. Ka Tong Gaw"
	},
	{
		id:"0399b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"吳家棟牧師  與狼共舞(二)如何幫助青少年迎向挑戰",
		titleEn:"Dance with the wolf(2) How to help the teenager to face the challenges? Rev. Ka Tong Gaw"
	},
	{
		id:"0400a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"余裕義牧師  中年危機(一)認識中年 ",
		titleEn:"The middle-life crisis(1) Get to know the middle age. Rev. Y. I. Yu "
	},
	{
		id:"0400b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"余裕義牧師  中年危機(一)中年危機的特徵",
		titleEn:"The middle-life crisis(1) The symptoms of the mid-life crisis. Rev. Y. I. Yu"
	},
	{
		id:"0401a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"余裕義牧師  中年危機(二)中年危機的預防",
		titleEn:"The middle-life crisis(2) the prevention of the mid-life crisis. Rev. Y. I. Yu"
	},
	{
		id:"0401b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"余裕義牧師  中年危機(二)中年婚外情的迷思",
		titleEn:"The middle-life crisis(2) The myth of mid-life. Rev. Y. I. Yu"
	},
	{
		id:"0402a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"滌然女士  金色年華(一)老人問題知多少",
		titleEn:"Golden age(1) The older people issue. Ms. Z. Ti"
	},
	{
		id:"0402b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"滌然女士  金色年華(一)家有一老如有一寶",
		titleEn:"Golden age(1) An elder at home like having a treasure. Ms. Z. Ti"
	},
	{
		id:"0403a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"滌然女士  金色年華(二)與長輩快樂相處的祕訣",
		titleEn:"Golden age(2) The secret of getting along well with the elders. Ms. Z. Ti"
	},
	{
		id:"0403b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"滌然女士  金色年華(二)老年生活樂無涯",
		titleEn:"Golden age(2) The happy life of the elders. Ms. Z. Ti"
	},
	{
		id:"0404a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士   管與教(一)愛與管教",
		titleEn:"Dare to discipline(1) Dare to discipline. Dr. C. Y. Huang"
	},
	{
		id:"0404b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士   管與教(一)愛與管教(續)",
		titleEn:"Dare to discipline(1) Dare to discipline.(continue) Dr. C. Y. Huang"
	},
	{
		id:"0405a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士   管與教(二)創造良好的親子關係 ",
		titleEn:"Dare to discipline(2) Creating a good parental and child relationship. Dr. C. Y. Huang"
	},
	{
		id:"0405b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃清一博士   管與教(二)創造良好的親子關係(續)",
		titleEn:"Dare to discipline(2) Creating a good parental and child relationship.(continue) Dr. C. Y. Huang"
	},
	{
		id:"0406a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"周淑慧牧師  情緒之謎(一)情緒這玩意兒",
		titleEn:"The riddle of the emotions(1) Emotion,What is it? Rev. Susan Chou"
	},
	{
		id:"0406b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"周淑慧牧師  情緒之謎(一)如何疏導及善用情緒",
		titleEn:"The riddle of the emotions(1) How to make good use of the emotion? Rev. Susan Chou"
	},
	{
		id:"0407a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"周淑慧牧師  情緒之謎(二)憂鬱這玩意兒",
		titleEn:"The riddle of the emotions(2) Melancholy, What is it? Rev. Susan Chou"
	},
	{
		id:"0407b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"周淑慧牧師  情緒之謎(二)如何培養健康的情緒",
		titleEn:"The riddle of the emotions(2) How to cultivate the healthy emotions? Rev. Susan Chou "
	},
	{
		id:"0408a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  做我真好(一)自我形像是什麼",
		titleEn:"It is great to be myself!(1)What is the self-image? Ms. T. W. Huang"
	},
	{
		id:"0408b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  做我真好(一)自我形像是如何形成",
		titleEn:"It is great to be myself!(1) How the self-image forms? Ms. T. W. Huang"
	},
	{
		id:"0409a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  做我真好(二)自我形像對個人的影響",
		titleEn:"It is great to be myself!(2) The influence of self-image to the individual. Mr. T. W. Huang"
	},
	{
		id:"0409b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  做我真好(二)如何塑造健康的自我形像",
		titleEn:"It is great to be myself!(2) How to have a healthy self-image. Ms. T. W. Huang"
	},
	{
		id:"0410a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  好男好女(一)做個幸褔的女人",
		titleEn:"Good man and woman(1)Be a happy woman. Ms. T. W. Huang"
	},
	{
		id:"0410b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"黃慈文女士  好男好女(一)做個幸福的女人(續)",
		titleEn:"Good man and woman(1) Be a happy woman.(continue) Ms. T.W. Huang"
	},
	{
		id:"0411a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  好男好女(二)做個成功的男人",
		titleEn:"Good man and woman(2) Be a sucessful man. Ms. T. W. Huang"
	},
	{
		id:"0411b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  好男好女(二)做個成功的男人(續)",
		titleEn:"Good man and woman(2) Be a sucessful man.(continue) Dr. K. F. Yeh"
	},
	{
		id:"0412a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  新好男人(一)現代婚姻難!",
		titleEn:"The new good man(1) The modern marriage, not easy! Dr. K. F. Yeh"
	},
	{
		id:"0412b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  新好男人(一)如何經營好您的婚姻",
		titleEn:"The new good man(1) How to run well on your marriage? Dr. K. F. Yeh"
	},
	{
		id:"0413a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  新好男人(二)現代父親難!",
		titleEn:"The new good man(2) The modern dad, not easy! Dr. K. F. Yeh "
	},
	{
		id:"0413b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"葉高芳博士  新好男人(二)如何成為新好父親",
		titleEn:"The new good man(2) How to be a new good dad? Dr. K. F. Yeh"
	},
	{
		id:"0414a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(一)怎樣體驗神的慈愛與赦免",
		titleEn:"Filled with the Holy Spirit and service(1) How to experience God's love and forgivenese? Dr. K. Z. Cheng"
	},
	{
		id:"0414b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(一)怎樣體驗神的慈愛與赦免(續)",
		titleEn:"Filled with the Holy Spirit and service(1) How to experience God's love and forgivense?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0415a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(二)怎樣被聖靈充滿",
		titleEn:"Filled with the Holy Spirit and service(2) How to be filled with the Holy Spirit? Dr. K. Z. Cheng"
	},
	{
		id:"0415b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(二)怎樣被聖靈充滿(續)",
		titleEn:"Filled with the Holy Spirit and service(2) How to be filled with the Holy Spirit?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0416a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(三)怎樣靠聖靈行事",
		titleEn:"Filled with the Holy Spirit and service(3) How to depend on the Holy Spirit? Dr. K. Z. Cheng"
	},
	{
		id:"0416b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(三)怎樣靠聖靈行事(續)",
		titleEn:"Filled with the Holy Spirit and service(3) How to depend on the Holy Spirit?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0417a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(四)怎樣在聖靈中作見証",
		titleEn:"Filled with the Holy Spirit and service(4) How to be a witness in the Holy Spirit? Dr. K. Z. Cheng"
	},
	{
		id:"0417b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(四)怎樣在聖靈中作見證(續)",
		titleEn:"Filled with the Holy Spirit and service(4) How to be a witness in the Holy Spirit?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0418a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(五)大使命",
		titleEn:"Filled with the Holy Spirit and service(5) The great commission. Dr. K. Z. Cheng"
	},
	{
		id:"0418b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(五)大使命(續)",
		titleEn:"Filled with the Holy Spirit and service(5) The great commission.(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0419a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(六)華人通天之道與天國",
		titleEn:"Filled with the Holy Spirit and service(6) The concept of heaven in Chinese culture and the kingdom of heaven. Dr. K. Z. Cheng"
	},
	{
		id:"0419b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(六)華人通天之道與天國(續)",
		titleEn:"Filled with the Holy Spirit and service(6) The concept of heaven in Chinese culture and the kingdom of heaven.(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0420a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(七)自由何價",
		titleEn:"Filled with the Holy Spirit and service(7) What freedom values? Dr. K. Z. Cheng"
	},
	{
		id:"0420b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(七)自由何價(續)",
		titleEn:"Filled with the Holy Spirit and service(7) What freedom  values?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0421a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(八)如何勝過懼怕",
		titleEn:"Filled with the Holy Spirit and service(8) How to overcome the fear? Dr. K. Z. Cheng"
	},
	{
		id:"0421b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  聖靈充滿與事奉(八)如何勝過懼怕(續)",
		titleEn:"Filled with the Holy Spirit and service(8) How to overcome the fear?(continue) Dr. K. Z. Cheng"
	},
	{
		id:"0422a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(一) 呼召過超然生活  ",
		titleEn:"How to live a victorious life?(1) A call to supernatural living. Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0422b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(一)呼召過超然生活(續)",
		titleEn:"How to live a victorious life?(1) A call to supernatural living.(continue) Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0423a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(二) 呼召過聖潔生活 ",
		titleEn:"How to live a victorious life?(2)  A call to holiness of life. Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0423b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(二)  呼召過聖潔生活(續) ",
		titleEn:"How to live a victorious life?(2) A call to holiness of life. (continue) Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0424a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(三)如何對福音有一顆熱忱的心 ",
		titleEn:"How to live a victorious life?(3) How to develop and maintain a heart for our Lord and evangelism? Dr. Bill Bright, English/Chinese "
	},
	{
		id:"0424b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(三)如何對福音有一顆熱忱的心(續)",
		titleEn:"How to live a victorious life?(3) How to develop and maintain a heart for our Lord and evangelism? (continue) Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0425a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(四)主在學園傳道會的神蹟 ",
		titleEn:"How to live a victorious life?(4) The miracle of campus crusade for Christ international. Dr. Bill Bright, English/ chinese"
	},
	{
		id:"0425b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白立德博士  如何過得勝生活(四)主在學園傳道會的神蹟(續) ",
		titleEn:"How to live a victorious life?(4) The miracle of campus crusade for Christ international. (continue) Dr. Bill Bright, English/Chinese"
	},
	{
		id:"0426a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白薇娜博士  如何過得勝生活(五)禱告與福音 ",
		titleEn:"How to live a victorious life?(5) Prayer and evangelism. Dr. Vonette Bright, English/Chinese "
	},
	{
		id:"0426b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"白薇娜博士  如何過得勝生活(五)禱告與福音(續) ",
		titleEn:"How to live a victorious life?(5) Prayer and evangelism.(continue) Dr. Vonette Bright, English/Chinese"
	},
	{
		id:"0427a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"達勒斯博士  如何過得勝生活(六) 為何我參與大使命 ",
		titleEn:"How to live a victorious life?(6) Why I am involved in the great commission? Dr. Stephen Douglass, English/ Chinese"
	},
	{
		id:"0427b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"達勒斯博士  如何過得勝生活(六)為何我參與大使命(續)",
		titleEn:"How to live a victorious life?(6) Why I am involved in the great commission?(continue) Dr. Stephen Douglass, English/Chinese"
	},
	{
		id:"0428a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"金俊坤博士  如何過得勝生活(七)禱告與遍傳",
		titleEn:"How to live a victorious life?(7) Prayer and saturation. Dr. Joon Gon Kim, English/ Chinese"
	},
	{
		id:"0428b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"金俊坤博士  如何過得勝生活(七)禱告與遍傳(續)",
		titleEn:"How to live a victorious life?(7) Prayer and saturation.(continue) Dr. Joon Gon Kim, English/Chinese"
	},
	{
		id:"0429a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  如何過得勝生活(八)華人事工的展望 ",
		titleEn:"How to live a victorious life?(8)Outlook  of Chinese evangelistic ministries. Dr. David Hock Tey, Chinese/English"
	},
	{
		id:"0429b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"台福傳播中心",
		speakerEn:"EFC Communication Center",
		titleCn:"鄭國治博士  如何過得勝生活(八)華人事工的展望(續) ",
		titleEn:"How to live a victorious life?(8)Outlook of Chinese evangelistic ministries.(continue) Dr. David Hock Tey, Chinese/English"
	},
	{
		id:"0430a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(1)",
		titleEn:"Inner Life:Praise(1)"
	},
	{
		id:"0430b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(1續)",
		titleEn:"Inner Life:Praise(1 continued) "
	},
	{
		id:"0431a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(2)",
		titleEn:"Inner Life:Praise(2)"
	},
	{
		id:"0431b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(2續)",
		titleEn:"Inner Life:Praise(2 continued) "
	},
	{
		id:"0432a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(3)",
		titleEn:"Inner Life:Praise(3)"
	},
	{
		id:"0432b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(3續)",
		titleEn:"Inner Life:Praise(3 continued)"
	},
	{
		id:"0432b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(4續)",
		titleEn:"Inner Life:Praise(4 continued)     "
	},
	{
		id:"0433a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:讚美(4)",
		titleEn:"Inner Life:Praise(4)"
	},
	{
		id:"0434a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(1)",
		titleEn:"Inner Life:Waiting on God(1) "
	},
	{
		id:"0434b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(1續)",
		titleEn:"Inner Life:Waiting on God  (1 continued)"
	},
	{
		id:"0435a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(2)",
		titleEn:"Inner Life:Waiting on God(2) "
	},
	{
		id:"0435b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(2續)",
		titleEn:"Inner Life:Waiting on God  (2 continued)"
	},
	{
		id:"0436a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(3)",
		titleEn:"Inner Life:Waiting on God(3) "
	},
	{
		id:"0436b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(3續)",
		titleEn:"Inner Life:Waiting on God (3 continued)"
	},
	{
		id:"0437a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(4)",
		titleEn:"Inner Life:Waiting on God(4) "
	},
	{
		id:"0437b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(4續)",
		titleEn:"Inner Life:Waiting on God  (4 continued)"
	},
	{
		id:"0438a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(5)",
		titleEn:"Inner Life:Waiting on God(5) "
	},
	{
		id:"0438b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(5續)",
		titleEn:"Inner Life:Waiting on God(5 continued)"
	},
	{
		id:"0439a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(6)",
		titleEn:"Inner Life:Waiting on God(6) "
	},
	{
		id:"0439b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(6續)",
		titleEn:"Inner Life:Waiting on God(6 continued)"
	},
	{
		id:"0440a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(7)",
		titleEn:"Inner Life:Waiting on God(7) "
	},
	{
		id:"0440b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:等候神(7續)",
		titleEn:"Inner Life:Waiting on God (7 continued)"
	},
	{
		id:"0441a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(1)",
		titleEn:"Way of Victory(1)      "
	},
	{
		id:"0441b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(1續)",
		titleEn:"Way of Victory (1 continued)"
	},
	{
		id:"0442a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(2)",
		titleEn:"Way of Victory(2) "
	},
	{
		id:"0442b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(2續)",
		titleEn:"Way of Victory(2 continued)"
	},
	{
		id:"0443a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(3)",
		titleEn:"Way of Victory(3)"
	},
	{
		id:"0443b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(3續)",
		titleEn:"Way of Victory  (3 continued)"
	},
	{
		id:"0444a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(4)",
		titleEn:"Way of Victory(4) "
	},
	{
		id:"0444b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(4續)",
		titleEn:"Way of Victory  (4 continued)"
	},
	{
		id:"0445a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(5)",
		titleEn:"Way of Victory(5)  "
	},
	{
		id:"0445b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(5續)",
		titleEn:"Way of Victory  (5 continued)"
	},
	{
		id:"0446a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(6)",
		titleEn:"Way of Victory(6) "
	},
	{
		id:"0446b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(6續)",
		titleEn:"Way of Victory (6 continued) "
	},
	{
		id:"0447a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(7)",
		titleEn:"Way of Victory(7) "
	},
	{
		id:"0447b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(7續)",
		titleEn:"Way of Victory  (7 continued)"
	},
	{
		id:"0448a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(8)",
		titleEn:"Way of Victory(8) "
	},
	{
		id:"0448b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(8續)",
		titleEn:"Way of Victory  (8 continued)"
	},
	{
		id:"0449a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(9)",
		titleEn:"Way of Victory(9) "
	},
	{
		id:"0449b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(9續)",
		titleEn:"Way of Victory   (9 continued) "
	},
	{
		id:"0450a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(10)",
		titleEn:"Way of Victory(10) "
	},
	{
		id:"0450b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(10續)",
		titleEn:"Way of Victory   (10 continued)"
	},
	{
		id:"0451a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(11)",
		titleEn:"Way of Victory(11)"
	},
	{
		id:"0451b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(11續)",
		titleEn:"Way of Victory (11 continued)"
	},
	{
		id:"0452a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(12)",
		titleEn:"Way of Victory(12) "
	},
	{
		id:"0452b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:爭戰得勝之方(12續)",
		titleEn:"Way of Victory   (12 continued)"
	},
	{
		id:"0453a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(1)",
		titleEn:"The principle of God’s way(1) "
	},
	{
		id:"0453b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(1續)",
		titleEn:"The principle of God's way  (1 continued)"
	},
	{
		id:"0454a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(2)",
		titleEn:"The principle of God’s way(2) "
	},
	{
		id:"0454b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(2續)",
		titleEn:"The principle of God's way (2 continued)"
	},
	{
		id:"0455a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(3)",
		titleEn:"The principle of God’s way(3) "
	},
	{
		id:"0455b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(3續)",
		titleEn:"The principle of God's way  (3 continued)"
	},
	{
		id:"0456a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(4)",
		titleEn:"The principle of God’s way(4) "
	},
	{
		id:"0456b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(4續)",
		titleEn:"The principle of God's way   (4 continued)"
	},
	{
		id:"0457a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(5)",
		titleEn:"The principle of God’s way(5) "
	},
	{
		id:"0457b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(5續)",
		titleEn:"The principle of God's way  (5 continued)"
	},
	{
		id:"0458a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(6)",
		titleEn:"The principle of God’s way(6) "
	},
	{
		id:"0458b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(6續)",
		titleEn:"The principle of God's way  (6 continued)"
	},
	{
		id:"0459a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(7)",
		titleEn:"The principle of God’s way(7) "
	},
	{
		id:"0459b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(7續)",
		titleEn:"The principle of God's way  (7 continued)"
	},
	{
		id:"0460a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(8)",
		titleEn:"The principle of God’s way(8)  "
	},
	{
		id:"0460b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(8續)",
		titleEn:"The principle of God's way  (8 continued)"
	},
	{
		id:"0461a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(9)",
		titleEn:"The principle of God’s way(9) "
	},
	{
		id:"0461b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(9續)",
		titleEn:"The principle of God's way  (9 continued)"
	},
	{
		id:"0462a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(10)",
		titleEn:"The principle of God’s way(10) "
	},
	{
		id:"0462b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(10續)",
		titleEn:"The principle of God's way  (10 continued)"
	},
	{
		id:"0463a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(11)",
		titleEn:"The principle of God’s way(11) "
	},
	{
		id:"0463b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(11續)",
		titleEn:"The principle of God's way  (11 continued)"
	},
	{
		id:"0464a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(12)",
		titleEn:"The principle of God’s way(12)"
	},
	{
		id:"0464b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(12續)",
		titleEn:"The principle of God's way  (12continued)"
	},
	{
		id:"0465a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(13)",
		titleEn:" The principle of God’s way(13)"
	},
	{
		id:"0465b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(13續)",
		titleEn:"The principle of God's way (13 continued)"
	},
	{
		id:"0466a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(14)",
		titleEn:"The principle of God’s way(14)"
	},
	{
		id:"0466b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(14續)",
		titleEn:"The principle of God's way  (14continued)"
	},
	{
		id:"0467a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(15)",
		titleEn:"The principle of God’s way(15)"
	},
	{
		id:"0467b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(15續)",
		titleEn:"The principle of God's way(15continued)"
	},
	{
		id:"0468a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(16)",
		titleEn:"The principle of God’s way(16)"
	},
	{
		id:"0468b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神作事的法則(16續)",
		titleEn:"The principle of God's way (16 continued)"
	},
	{
		id:"0469a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(1)一生一世",
		titleEn:"The Married Life(1)    Life Together "
	},
	{
		id:"0469b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(1)一生一世(續)",
		titleEn:"The Married Life(1) Life Together(continued)"
	},
	{
		id:"0470a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(2)二人一體",
		titleEn:"The Married Life(2)   Two becomes One"
	},
	{
		id:"0470b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(2)二人一體(續)",
		titleEn:"The Married Life(2)   Two becomes one(continued)"
	},
	{
		id:"0471a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(3)三角戀愛",
		titleEn:"The Married Life(3)  Triangle Love"
	},
	{
		id:"0471b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"婚姻一二三(3)三角戀愛(續)",
		titleEn:"The Married Life(3)   Triangle Love(continued)"
	},
	{
		id:"0472a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"有負擔的禱告",
		titleEn:"Prayer with Burden  "
	},
	{
		id:"0472b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"超越虛空 進入豊盛",
		titleEn:"From Vanity to Abundance "
	},
	{
		id:"0473a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"營養食物",
		titleEn:"Nutritious Food"
	},
	{
		id:"0473b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"從失敗中得勝",
		titleEn:"Win Over the Failure"
	},
	{
		id:"0474a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"願你的國降臨",
		titleEn:"May Your Kingdom Comes                    "
	},
	{
		id:"0474b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"赦免的福音",
		titleEn:"The Gospel of Forgiveness  "
	},
	{
		id:"0475a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(1)與配偶同心同行",
		titleEn:"Walk with your partner "
	},
	{
		id:"0475b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(1)與配偶同心同行(續)",
		titleEn:"Walk with your partner  (continued)"
	},
	{
		id:"0476a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(2)與子女同心同行",
		titleEn:"Walk with your children  "
	},
	{
		id:"0476b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(2)與子女同心同行(續)",
		titleEn:"Walk with your children   (continued)"
	},
	{
		id:"0477a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(3)與弟兄姐妹同心同行",
		titleEn:"Walk with brothers and sisters in Christ"
	},
	{
		id:"0477b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"(3)與弟兄姐妹同心同行(續)",
		titleEn:"Walk with brothers and sisters in Christ (continued)"
	},
	{
		id:"0478a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"從是鄰舍到作鄰舍",
		titleEn:"From a neighbor to be a good neighbor"
	},
	{
		id:"0478b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"從是鄰舍到作鄰舍(續)",
		titleEn:"From a neighbor to be a good neighbor(cont.)"
	},
	{
		id:"0479a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"(2)盡己愛上帝",
		titleEn:"Love the Lord Wholeheartedly "
	},
	{
		id:"0479b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"(2)盡己愛上帝(續)",
		titleEn:"Love the Lord Wholeheartedly (continued)"
	},
	{
		id:"0480a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"(3)愛鄰舍如同自己",
		titleEn:"Love your neighbors as yourself"
	},
	{
		id:"0480b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"nan",
		titleCn:"(3)愛鄰舍如同自己(續)",
		titleEn:"Love your neighbors as yourself  (continued)"
	},
	{
		id:"0481a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃文雄醫師",
		speakerEn:"nan",
		titleCn:"如何在醫療崗位上引人歸主",
		titleEn:"How to lead people to God  as a doctor"
	},
	{
		id:"0481b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃文雄醫師",
		speakerEn:"nan",
		titleCn:"如何在醫療崗位上引人歸主(續)",
		titleEn:"How to lead people to God as a doctor (continued)"
	},
	{
		id:"0482a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(1)屬靈的維他命",
		titleEn:"Make me a blessing(1)  Spiritual Vitamins"
	},
	{
		id:"0482b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(1)屬靈的維他命(續)",
		titleEn:"Make me a blessing(1)  Spiritual Vitamins (continued)"
	},
	{
		id:"0483a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(2)自我的認識及成長",
		titleEn:"Make me a blessing  (2) Know yourself and grow"
	},
	{
		id:"0483b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(2)自我的認識及成長(續)",
		titleEn:"Make me a blessing (2) Know yourself and grow(continued)    "
	},
	{
		id:"0484a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(3)婦女參與大使命的行列",
		titleEn:"Make me a blessing(3) Women in Great Commission "
	},
	{
		id:"0484b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(3)婦女參與大使命的行列(續)",
		titleEn:"Make me a blessing(3)Women in Great Commission(continued)"
	},
	{
		id:"0485a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(4)智慧的婦女",
		titleEn:"Make me a blessing(4) The wise women"
	},
	{
		id:"0485b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(4)智慧的婦女(續)",
		titleEn:"Make me a blessing(4) The wise women(continued)"
	},
	{
		id:"0486a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(5)使我成祝福",
		titleEn:"Make me a blessing(5) Make me a blessing"
	},
	{
		id:"0486b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(5)使我成祝福(續)",
		titleEn:"Make me a blessing(5) Make me a blessing(continued)"
	},
	{
		id:"0487a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(6)十誡(1)",
		titleEn:"Make me a blessing(6) Ten Commandments(1)"
	},
	{
		id:"0487b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(6)十誡(1續)",
		titleEn:"Make me a blessing(6) Ten Commandments(1 continued)"
	},
	{
		id:"0488a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(7)十誡(2)",
		titleEn:"Make me a blessing(7) Ten Commandments(2)"
	},
	{
		id:"0488b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(7)十誡(2續)",
		titleEn:"Make me a blessing(7) Ten Commandments(2 continued)"
	},
	{
		id:"0489a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(8)十誡(3)",
		titleEn:"Make me a blessing(8) Ten Commandments(3)"
	},
	{
		id:"0489b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美師母",
		speakerEn:"nan",
		titleCn:"使我成祝福(8)十誡(3續)",
		titleEn:"Make me a blessing(8)  Ten Commandments(3 continued)"
	},
	{
		id:"0490a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(1)",
		titleEn:"More Abundant Life(1)  "
	},
	{
		id:"0490b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(1續)",
		titleEn:"More Abundant Life(1 continued)"
	},
	{
		id:"0491a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(2)",
		titleEn:"More Abundant Life(2) "
	},
	{
		id:"0491b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(2續)",
		titleEn:"More Abundant Life(2 continued)"
	},
	{
		id:"0492a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(3)",
		titleEn:"More Abundant Life(3) "
	},
	{
		id:"0492b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(3續)",
		titleEn:"More Abundant Life(3 continued)"
	},
	{
		id:"0493a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(4)",
		titleEn:"More Abundant Life(4) "
	},
	{
		id:"0493b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(4續)",
		titleEn:"More Abundant Life(4 continued)"
	},
	{
		id:"0494a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(5)",
		titleEn:"More Abundant Life(5) "
	},
	{
		id:"0494b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(5續)",
		titleEn:"More Abundant Life(5 continued)"
	},
	{
		id:"0495a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(6)",
		titleEn:"More Abundant Life(6) "
	},
	{
		id:"0495b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"更豊盛的生命(6續)",
		titleEn:"More Abundant Life(6 continued)"
	},
	{
		id:"0496a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"住在基督裡(1)",
		titleEn:"Abide in Christ(1)"
	},
	{
		id:"0496b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"住在基督裡(1續)",
		titleEn:"Abide in Christ(1 continued)"
	},
	{
		id:"0497a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"住在基督裡(2)",
		titleEn:"Abide in Christ(2)"
	},
	{
		id:"0497b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"住在基督裡(2續)",
		titleEn:"Abide in Christ(2 continued)"
	},
	{
		id:"0498a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96五旬節特會(1)",
		titleEn:"96 Pentecost Revival Conference(1)"
	},
	{
		id:"0498b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96 五旬節特會(1續)",
		titleEn:"96 Pentecost Revival Conference (1 continued)"
	},
	{
		id:"0499a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96 五旬節特會(2)",
		titleEn:"96 Pentecost Revival Conference(2)"
	},
	{
		id:"0499b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96 五旬節特會(2續)",
		titleEn:"96 Pentecost Revival Conference"
	},
	{
		id:"0500a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96 五旬節特會(3)",
		titleEn:"96 Pentecost Revival Conference(3)"
	},
	{
		id:"0500b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"96 五甸節特會(3續)",
		titleEn:"96 Pentecost Revival Conference (3 continued)"
	},
	{
		id:"0501a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(1)",
		titleEn:"97 Pentecost Revival Conference(1)"
	},
	{
		id:"0501b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(1續)",
		titleEn:"97 Pentecost Revival Conference (1 continued)"
	},
	{
		id:"0502a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(2)",
		titleEn:"97 Pentecost Revival Conference(2)"
	},
	{
		id:"0502b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(2續)",
		titleEn:"97 Pentecost Revival Conference (2 continued)"
	},
	{
		id:"0503a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(3)",
		titleEn:"97 Pentecost Revival Conference(3)"
	},
	{
		id:"0503b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"97 五旬節特會(3續)",
		titleEn:"97 Pentecost Revival Conference (3 continued)"
	},
	{
		id:"0504a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(1)住在基督裡",
		titleEn:"Ephesians(1) Abide in Christ"
	},
	{
		id:"0504b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(1)住在基督裡(續)",
		titleEn:"Ephesians(1) Abide in Christ (continued)"
	},
	{
		id:"0505a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(2)真知道祂",
		titleEn:"Ephesians(2)  True knowledge of God"
	},
	{
		id:"0505b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(2)真知道祂(續)",
		titleEn:"Ephesians(2)  True knowledge of God (continued)"
	},
	{
		id:"0506a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(3)恩召的指望",
		titleEn:"Ephesians(3)  The hope of being called"
	},
	{
		id:"0506b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(3)恩召的指望(續)",
		titleEn:"Ephesians(3) The hope of being called (continued)"
	},
	{
		id:"0507a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(4)向信的人所顯的能力何等浩大",
		titleEn:"Ephesians (1) How mighty power to those whom believe "
	},
	{
		id:"0507b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(4)向信的人所顯的能力何等浩大(續)",
		titleEn:"Ephesians(4)  How mighty power to those whom believe  (continued)"
	},
	{
		id:"0508a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(5)真認識神的人",
		titleEn:"Ephesians(5)  The people who truly know God"
	},
	{
		id:"0508b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(5)真認識神的人(續)",
		titleEn:"Ephesians(5) The people who truly know God (continued)"
	},
	{
		id:"0509a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(6)與神同行的生活",
		titleEn:"Ephesians(6)  Life of walking with God "
	},
	{
		id:"0509b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(6)與神同行的生活(續)",
		titleEn:"Ephesians(6)  Life of walking with God (continued)  "
	},
	{
		id:"0510a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(7)極豊盛的恩典",
		titleEn:"Ephesians(7) Abundant Grace"
	},
	{
		id:"0510b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(7)極豊盛的恩典(續)",
		titleEn:"Ephesians(7) Abundant Grace (continued)"
	},
	{
		id:"0511a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(8)福音的奧秘",
		titleEn:"Ephesians(8) Mystery of the Gospel"
	},
	{
		id:"0511b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(8)福音的奧秘(續)",
		titleEn:"Ephesians(8) Mystery of the the Gospel (continued)"
	},
	{
		id:"0512a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(9)榮耀的教會",
		titleEn:"Ephesians(9) The glorious church "
	},
	{
		id:"0512b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(9)榮耀的教會(續)",
		titleEn:"Ephesians(9)  The glorious church (continued)"
	},
	{
		id:"0513a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(10)讚美",
		titleEn:"Ephesians(10) Praise "
	},
	{
		id:"0513b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(10)讚美(續)",
		titleEn:"Ephesians(10) Praise (continued)"
	},
	{
		id:"0514a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(11)成全聖徒",
		titleEn:"Ephesians(11)  Perfecting the Saints"
	},
	{
		id:"0514b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(11)成全聖徒(續)",
		titleEn:"Ephesians(11) Perfecting the Saints(continued) "
	},
	{
		id:"0515a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(12)聖靈的工作(1)",
		titleEn:"Ephesians(12) The work of the Holy Spirit(1)"
	},
	{
		id:"0515b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(12)聖靈的工作(1續)",
		titleEn:"Ephesians(12) The work of the Holy Spirit (1 continued)"
	},
	{
		id:"0516a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(13)聖靈的工作(2)",
		titleEn:"Ephesians(13) The work of the Holy Spirit(2)"
	},
	{
		id:"0516b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(13)聖靈的工作(2續)",
		titleEn:"Ephesians(13) The work of the Holy Spirit(2 continued)"
	},
	{
		id:"0517a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(14)屬靈爭戰(1)",
		titleEn:"Ephesians(14) The spiritual warfare(1)"
	},
	{
		id:"0517b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(14)屬靈爭戰(1續)",
		titleEn:"Ephesians(14) The Spiritual warfare(1 continued)"
	},
	{
		id:"0518a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(15)屬靈爭戰(2)",
		titleEn:"Ephesians(15) The Spiritual warfare(2)"
	},
	{
		id:"0518b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(15)屬靈爭戰(2續)",
		titleEn:"Ephesians(15)  The Spiritual warfare(2 continued)"
	},
	{
		id:"0519a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(16)與耶穌一同復活",
		titleEn:"Ephesians(16)   Resurrected with Christ"
	},
	{
		id:"0519b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(16)與耶穌一同復活(續)",
		titleEn:"Ephesians(16) Resurrected with Christ (continued)"
	},
	{
		id:"0520a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(17)屬靈爭戰(3)",
		titleEn:"Ephesians(17)  The Spiritual warfare(3)"
	},
	{
		id:"0520b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(17)屬靈爭戰(3續)",
		titleEn:"Ephesians(17)  The Spiritual warfare(3 continued)"
	},
	{
		id:"0521a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(18)屬靈爭戰(4)",
		titleEn:"Ephesians(18) The Spiritual warfare(4)"
	},
	{
		id:"0521b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(18)屬靈爭戰(4續)",
		titleEn:"Ephesians(18) The Spiritual warfare(4 continued)                "
	},
	{
		id:"0522a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(19)基督化家庭",
		titleEn:"Ephesians(19) The Christian Family"
	},
	{
		id:"0522b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(19)基督化家庭(續)",
		titleEn:"Ephesians(19) The Christian Family (continued)"
	},
	{
		id:"0523a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(20)百節各按各職",
		titleEn:"Ephesians(20)  The whole body is joined and held together by every supporting ligament"
	},
	{
		id:"0523b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(20)百節各按各職(續)",
		titleEn:"Ephesians(20) The whole body is joined and held together by every supporting ligament (continued)"
	},
	{
		id:"0524a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(21)話語的建造",
		titleEn:"Ephesians(21) The building up by words"
	},
	{
		id:"0524b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(21)話語的建造(續)",
		titleEn:"Ephesians(21)  The building up by words(continued)"
	},
	{
		id:"0525a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(22)話語的拆毀",
		titleEn:"Ephesians(22)  The destruction by words"
	},
	{
		id:"0525b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(22)話語的拆毀(續)",
		titleEn:"Ephesians(22) The destruction by words(continued)"
	},
	{
		id:"0526a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(23)多方禱告(1)",
		titleEn:"Ephesians(23) Pray always(1)"
	},
	{
		id:"0526b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(23)多方禱告(1續)",
		titleEn:"Ephesians(23) Pray always(1 continued)"
	},
	{
		id:"0527a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(24)多方禱告(2)",
		titleEn:"Ephesians(24)  Pray always(2)"
	},
	{
		id:"0527b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(24)多方禱告(2續)",
		titleEn:"Ephesians(24)  Pray always(2 continued)"
	},
	{
		id:"0528a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(25)愛的建造(1)",
		titleEn:"Ephesians(25) The building up by love(1)"
	},
	{
		id:"0528b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(25)愛的建造(1續)",
		titleEn:"Ephesians(25) The building up by love(1 continued)"
	},
	{
		id:"0529a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(26)愛的建造(2)",
		titleEn:"Ephesians(26) The building up by love(2)"
	},
	{
		id:"0529b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(26)愛的建造(2續)",
		titleEn:"Ephesians(26)  The building up by love(2 continued)"
	},
	{
		id:"0530a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(27)信心的建造(1)",
		titleEn:"Ephesians(27) The building up of the faith(1)"
	},
	{
		id:"0530b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(27)信心的建造(1續)",
		titleEn:"Ephesians(27) The building up of the faith(1 continued)"
	},
	{
		id:"0531a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(28)信心的建造(2)",
		titleEn:"Ephesians(28) The building up of the faith(2)"
	},
	{
		id:"0531b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(28)信心的建造(2續)",
		titleEn:"Ephesians(28) The building up of the faith(2 continued)"
	},
	{
		id:"0532a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(29)信心的建造(3)",
		titleEn:"Ephesians(29) The building up of the faith(3)"
	},
	{
		id:"0532b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(29)信心的建造(3續)",
		titleEn:"Ephesians(29) The building up of the faith(3 continued)"
	},
	{
		id:"0533a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(30)總結",
		titleEn:"Ephesians(30) Conclusion"
	},
	{
		id:"0533b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"以弗所書(30)總結(續)",
		titleEn:"Ephesians(30) Conclusion (continued)"
	},
	{
		id:"0534a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(1) 1章1節至8節",
		titleEn:"Song of Songs(1): Chapter1 Verses1-8"
	},
	{
		id:"0534b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(1續)",
		titleEn:"Song of Songs(1 continued)  "
	},
	{
		id:"0535a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(2) 1章8節至17節 ",
		titleEn:"Song of Songs(2):Chapter1 Verses8-17"
	},
	{
		id:"0535b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(2續)",
		titleEn:"Song of Songs(2 continued)"
	},
	{
		id:"0536a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(3) 2章至3章5節 ",
		titleEn:"Song of Songs(3):Chapter 2-3 Verses 5"
	},
	{
		id:"0536b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(3續)",
		titleEn:"Song of Songs(3 continued)"
	},
	{
		id:"0537a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(4) 3章6節至4章6節",
		titleEn:"Song of Songs(4): Chapter 3 Verses 6-Chapter 4 Verses 6"
	},
	{
		id:"0537b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(4續)",
		titleEn:"Song of Songs(4 continued)"
	},
	{
		id:"0538a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(5) 4章6節至5章1節",
		titleEn:"Song of Songs(5):Chapter 4 Verses 6-Chapter 5 Verses 1"
	},
	{
		id:"0538b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(5續)",
		titleEn:"Song of Songs(5 continued)"
	},
	{
		id:"0539a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(6) 5章2節至6章3節",
		titleEn:"Song of Songs(6): Chapter 5 Verses 2-Chapter 6 Verses 3"
	},
	{
		id:"0539b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(6續)",
		titleEn:"Song of Songs(6 continued)"
	},
	{
		id:"0540a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(7) 6章4節至13節",
		titleEn:"Song of Songs(7): Chapter 6 Verses 4-13"
	},
	{
		id:"0540b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(7續)",
		titleEn:"Song of Songs(7 continued)"
	},
	{
		id:"0541a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(8) 7章",
		titleEn:"Song of Songs(8): Chapter 7"
	},
	{
		id:"0541b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(8續)",
		titleEn:"Song of Songs(8 continued)"
	},
	{
		id:"0542a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(9) 8章",
		titleEn:"Song of Songs(9): Chapter 8"
	},
	{
		id:"0542b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌查經(9續)",
		titleEn:"Song of Songs(9 continued)"
	},
	{
		id:"0543a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(1)渴慕神",
		titleEn:"Conclusion:Hungry for God(1)"
	},
	{
		id:"0543b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(1續)渴慕神",
		titleEn:"Hungry for God(1 continued)"
	},
	{
		id:"0544a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(2)內在的生活",
		titleEn:"Conclusion:Inner Life(2)"
	},
	{
		id:"0544b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(2續)內在的生活",
		titleEn:"Inner Life(2 continued)"
	},
	{
		id:"0545a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(3)關鎖的園",
		titleEn:"A garden locked-up(3)"
	},
	{
		id:"0545b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(3續)關鎖的園",
		titleEn:"A garden locked-up(3 continued)"
	},
	{
		id:"0546a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(4)話語",
		titleEn:"Conclusion:The word(4)"
	},
	{
		id:"0546b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(4續)話語",
		titleEn:"Conclusion:The word(4 continued)"
	},
	{
		id:"0547a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(5)順服(1)",
		titleEn:"Conclusion:Obedience(5-1)"
	},
	{
		id:"0547b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(5續)順服(1續)",
		titleEn:"Obedience(5-1 continued)"
	},
	{
		id:"0548a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(6)順服(2)",
		titleEn:"Conclusion:Obedience(6-2)"
	},
	{
		id:"0548b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(6續)順服(2續)",
		titleEn:"Obedience(6-2 continued)"
	},
	{
		id:"0549a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(7)靠著良人",
		titleEn:"Leaning on the lover(7)"
	},
	{
		id:"0549b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(7續)靠著良人",
		titleEn:"Leaning on the lover(7 continued)"
	},
	{
		id:"0550a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(8)十字架(1)",
		titleEn:"Conclusion:The cross(8-1)"
	},
	{
		id:"0550b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(8續)十字架(1續)",
		titleEn:"The cross(8-1 continued)"
	},
	{
		id:"0551a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(9)十字架(2)",
		titleEn:"Conclusion:The cross(9-2)"
	},
	{
		id:"0551b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(9續)十字架(2續)",
		titleEn:"The cross(9-2 continued)"
	},
	{
		id:"0552a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(10)我的良人",
		titleEn:"Conclusion:My lover(10)"
	},
	{
		id:"0552b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(10續)我的良人",
		titleEn:"My lover(10 continued)"
	},
	{
		id:"0553a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(11)威武如展開旌旗的軍隊",
		titleEn:"Majestic as the stars in procession(11)"
	},
	{
		id:"0553b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(11續)威武如展開旌旗的軍隊 ",
		titleEn:"Majestic as the stars in procession(11 continued)"
	},
	{
		id:"0554a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(12)與主交通",
		titleEn:"To communicate with the Lord(12)"
	},
	{
		id:"0554b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(12續)與主交通",
		titleEn:"To communicate with the Lord(12 continued)"
	},
	{
		id:"0555a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(13)代禱",
		titleEn:"Conclusion:Intercessory prayers(13)"
	},
	{
		id:"0555b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(13續)代禱",
		titleEn:"Intercessory prayers(13 continued)"
	},
	{
		id:"0556a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(14)愛的事奉(1)",
		titleEn:"The ministry of love(14-1)"
	},
	{
		id:"0556b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(14續)愛的事奉(1續)",
		titleEn:"The ministry of love (14-1 continued)"
	},
	{
		id:"0557a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(15)愛的事奉(2)",
		titleEn:"The ministry of love(15-2)"
	},
	{
		id:"0557b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(15續)愛的事奉(2續)",
		titleEn:"The ministry of love(15-2continued)"
	},
	{
		id:"0558a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(16)專一的心志",
		titleEn:"The single-minded heart(16)"
	},
	{
		id:"0558b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"雅歌總結(16續)專一的心志",
		titleEn:"The single-minded heart(16 continued)"
	},
	{
		id:"0559a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (1)",
		titleEn:"The kingdom of God (1)"
	},
	{
		id:"0559b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (1續)  ",
		titleEn:"The kingdom of God (1 continued)"
	},
	{
		id:"0560a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (2)",
		titleEn:"The kingdom of God (2)"
	},
	{
		id:"0560b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (2續)",
		titleEn:"The kingdom of God (2 continued)"
	},
	{
		id:"0561a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (3)",
		titleEn:"The kingdom of God (3)"
	},
	{
		id:"0561b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (3續)",
		titleEn:"The kingdom of God (3 continued)"
	},
	{
		id:"0562a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (4)",
		titleEn:"The kingdom of God (4)"
	},
	{
		id:"0562b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (4續)",
		titleEn:"The kingdom of God (4 continued)"
	},
	{
		id:"0563a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (5)",
		titleEn:"The kingdom of God (5)"
	},
	{
		id:"0563b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (5續)",
		titleEn:"The kingdom of God (5 continued)"
	},
	{
		id:"0564a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (6)",
		titleEn:"The kingdom of God (6)"
	},
	{
		id:"0564b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (6續)",
		titleEn:"The kingdom of God (6 continued)"
	},
	{
		id:"0565a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (7)",
		titleEn:"The kingdom of God (7)"
	},
	{
		id:"0565b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (7續)",
		titleEn:"The kingdom of God (7 continued)"
	},
	{
		id:"0566a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (8)",
		titleEn:"The kingdom of God (8)"
	},
	{
		id:"0566b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (8續)",
		titleEn:"The kingdom of God (8 continued)"
	},
	{
		id:"0567a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (9)  ",
		titleEn:"The kingdom of God (9)"
	},
	{
		id:"0567b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (9續)",
		titleEn:"The kingdom of God (9 continued)"
	},
	{
		id:"0568a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (10)",
		titleEn:"The kingdom of God (10)"
	},
	{
		id:"0568b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (10續)",
		titleEn:"The kingdom of God (10 continued)"
	},
	{
		id:"0569a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (11)",
		titleEn:"The kingdom of God (11)"
	},
	{
		id:"0569b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (11續)",
		titleEn:"The kingdom of God (11 continued)"
	},
	{
		id:"0570a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (12)",
		titleEn:"The kingdom of God (12)"
	},
	{
		id:"0570b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (12續)",
		titleEn:"The kingdom of God (12 continued)"
	},
	{
		id:"0571a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (13)",
		titleEn:"The kingdom of God (13)"
	},
	{
		id:"0571b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (13續)",
		titleEn:"The kingdom of God (13 continued)"
	},
	{
		id:"0572a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (14)",
		titleEn:"The kingdom of God (14)"
	},
	{
		id:"0572b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (14續)",
		titleEn:"The kingdom of God (14 continued)"
	},
	{
		id:"0573a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (15)",
		titleEn:"The kingdom of God (15)"
	},
	{
		id:"0573b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (15續)",
		titleEn:"The kingdom of God (15 continued)"
	},
	{
		id:"0574a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (16)",
		titleEn:"The kingdom of God (16)"
	},
	{
		id:"0574b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"神的國 (16續)",
		titleEn:"The kingdom of God (16 continued)"
	},
	{
		id:"0575a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (1)",
		titleEn:"Knowing God (1)"
	},
	{
		id:"0575b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(1續)",
		titleEn:"Knowing God (1 continued)"
	},
	{
		id:"0576a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (2)",
		titleEn:"Knowing God (2)"
	},
	{
		id:"0576b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(2續)",
		titleEn:"Knowing God(2 continued)"
	},
	{
		id:"0577a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (3)",
		titleEn:"Knowing God (3)"
	},
	{
		id:"0577b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(3續)",
		titleEn:"Knowing God(3 continued)"
	},
	{
		id:"0578a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (4)",
		titleEn:"Knowing God (4)"
	},
	{
		id:"0578b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(4續)",
		titleEn:"Knowing God(4 continued)"
	},
	{
		id:"0579a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (5)",
		titleEn:"Knowing God (5)"
	},
	{
		id:"0579b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(5續)",
		titleEn:"Knowing God(5 continued)"
	},
	{
		id:"0580a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (6)",
		titleEn:"Knowing God (6)"
	},
	{
		id:"0580b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(6續)",
		titleEn:"Knowing God(6 continued)"
	},
	{
		id:"0581a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (7)",
		titleEn:"Knowing God (7)"
	},
	{
		id:"0581b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(7續)",
		titleEn:"Knowing God(7 continued)"
	},
	{
		id:"0582a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神 (8)",
		titleEn:"Knowing God (8)"
	},
	{
		id:"0582b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"認識神(8續)",
		titleEn:"Knowing God(8 continued)"
	},
	{
		id:"0583a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 內在生活的真諦 (1)",
		titleEn:"Inner Life: The true inner life (1)"
	},
	{
		id:"0583b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活的真諦 (1續)",
		titleEn:"The true inner life (1 continued)"
	},
	{
		id:"0584a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活的真諦(2)",
		titleEn:"The true inner life(2)"
	},
	{
		id:"0584b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活的真諦 (2續)",
		titleEn:"The true inner life (2 continued)"
	},
	{
		id:"0585a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活的真諦(3)",
		titleEn:"The true inner life(3)"
	},
	{
		id:"0585b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活的真諦 (3續)",
		titleEn:"The true inner life (3 continued)"
	},
	{
		id:"0586a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 恩召的指望 (1)",
		titleEn:" Inner Life: The hope of being called (1)"
	},
	{
		id:"0586b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (1續)",
		titleEn:"The hope of being called (1 continued)"
	},
	{
		id:"0587a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (2)",
		titleEn:"The hope of being called (2)"
	},
	{
		id:"0587b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (2續)",
		titleEn:"The hope of being called (2 continued)"
	},
	{
		id:"0588a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (3)",
		titleEn:"The hope of being called (3)"
	},
	{
		id:"0588b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (3續)",
		titleEn:"The hope of being called(3 continued)"
	},
	{
		id:"0589a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (4)",
		titleEn:"The hope of being called (4)"
	},
	{
		id:"0589b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"恩召的指望 (4續)",
		titleEn:"The hope of being called(4 continued)"
	},
	{
		id:"0590a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 聖靈充滿 (1)",
		titleEn:"Inner Life: The filling of the Holy Spirit (1)"
	},
	{
		id:"0590b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(1續)",
		titleEn:"The filling of the Holy Spirit (1 continued)"
	},
	{
		id:"0591a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿 (2)",
		titleEn:"The filling of the Holy Spirit (2)"
	},
	{
		id:"0591b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(2續)",
		titleEn:"The filling of the Holy Spirit (2 continued)"
	},
	{
		id:"0592a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿 (3)",
		titleEn:"The filling of the Holy Spirit (3)"
	},
	{
		id:"0592b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(3續)",
		titleEn:"The filling of the Holy Spirit (3 continued)"
	},
	{
		id:"0593a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿 (4)",
		titleEn:"The filling of the Holy Spirit (4)"
	},
	{
		id:"0593b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(4續)",
		titleEn:"The filling of the Holy Spirit (4 continued)"
	},
	{
		id:"0594a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿 (5)",
		titleEn:"The filling of the Holy Spirit (5)"
	},
	{
		id:"0594b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(5續)",
		titleEn:"The filling of the Holy Spirit (5 continued)"
	},
	{
		id:"0595a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿 (6)",
		titleEn:"The filling of the Holy Spirit (6)"
	},
	{
		id:"0595b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"聖靈充滿(6續)",
		titleEn:"The filling of the Holy Spirit (6 continued)"
	},
	{
		id:"0596a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 順服 (1)",
		titleEn:"Inner Life: Obedience (1)"
	},
	{
		id:"0596b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活:順服(1續)",
		titleEn:"Inner Life: Obedience (1 continued)"
	},
	{
		id:"0597a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (2)",
		titleEn:"Obedience (2)"
	},
	{
		id:"0597b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (2續)",
		titleEn:"Obedience (2 continued)"
	},
	{
		id:"0598a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (3)",
		titleEn:"Obedience (3)"
	},
	{
		id:"0598b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (3續)",
		titleEn:"Obedience (3 continued)"
	},
	{
		id:"0599a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (4)",
		titleEn:"Obedience (4)"
	},
	{
		id:"0599b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (4續)",
		titleEn:"Obedience (4 continued)"
	},
	{
		id:"0600a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (5)",
		titleEn:"Obedience (5)"
	},
	{
		id:"0600b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (5續)",
		titleEn:"Obedience (5 continued)"
	},
	{
		id:"0601a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (6)",
		titleEn:"Obedience (6)"
	},
	{
		id:"0601b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (6續)",
		titleEn:"Obedience (6 continued)"
	},
	{
		id:"0602a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (7)",
		titleEn:"Obedience (7)"
	},
	{
		id:"0602b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (7續)",
		titleEn:"Obedience (7 continued)"
	},
	{
		id:"0603a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (8)",
		titleEn:"Obedience (8)"
	},
	{
		id:"0603b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (8續)",
		titleEn:"Obedience (8 continued)"
	},
	{
		id:"0604a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (9)",
		titleEn:"Obedience (9)"
	},
	{
		id:"0604b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (9續)",
		titleEn:"Obedience (9 continued)"
	},
	{
		id:"0605a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (10)",
		titleEn:"Obedience (10)"
	},
	{
		id:"0605b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (10續)",
		titleEn:"Obedience(10 continued)"
	},
	{
		id:"0606a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (11)",
		titleEn:"Obedience (11) "
	},
	{
		id:"0606b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (11續)",
		titleEn:"Obedience(11 continued)"
	},
	{
		id:"0607a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (12)",
		titleEn:"Obedience (12)"
	},
	{
		id:"0607b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"順服 (12續)",
		titleEn:"Obedience(12 continued)"
	},
	{
		id:"0608a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (1)",
		titleEn:"Ministry (1)"
	},
	{
		id:"0608b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (1續)",
		titleEn:"Ministry (1 continued)"
	},
	{
		id:"0609a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (2)",
		titleEn:"Ministry (2)"
	},
	{
		id:"0609b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (2續)",
		titleEn:"Ministry (2 continued)"
	},
	{
		id:"0610a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (3)",
		titleEn:"Ministry (3)"
	},
	{
		id:"0610b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (3續)",
		titleEn:"Ministry (3 continued)"
	},
	{
		id:"0611a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (4)",
		titleEn:"Ministry (4) "
	},
	{
		id:"0611b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (4續)",
		titleEn:"Ministry (4 continued)"
	},
	{
		id:"0612a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (5)",
		titleEn:"Ministry (5)"
	},
	{
		id:"0612b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (5續)",
		titleEn:"Ministry (5 continued)"
	},
	{
		id:"0613a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (6)",
		titleEn:"Ministry (6)"
	},
	{
		id:"0613b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (6續)",
		titleEn:"Ministry (6 continued)"
	},
	{
		id:"0614a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (7)",
		titleEn:"Ministry (7) "
	},
	{
		id:"0614b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (7續)",
		titleEn:"Ministry (7 continued) "
	},
	{
		id:"0615a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (8)",
		titleEn:"Ministry (8)"
	},
	{
		id:"0615b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"服事 (8續)",
		titleEn:"Ministry (8 continued) "
	},
	{
		id:"0616a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (1)",
		titleEn:"How to know God's Will (1)"
	},
	{
		id:"0616b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (1續)",
		titleEn:"How to know God's Will (1 continued)"
	},
	{
		id:"0617a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (2)",
		titleEn:"How to know God's Will (2)"
	},
	{
		id:"0617b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (2續)",
		titleEn:"How to know God's Will (2 continued)"
	},
	{
		id:"0618a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (3)",
		titleEn:"How to know God's Will (3)"
	},
	{
		id:"0618b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (3續)",
		titleEn:"How to know God's Will (3 continued)"
	},
	{
		id:"0619a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (4)",
		titleEn:"How to know God's Will (4)"
	},
	{
		id:"0619b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (4續)",
		titleEn:"How to know God's Will (4 continued)"
	},
	{
		id:"0620a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (5)",
		titleEn:"How to know God's Will (5)"
	},
	{
		id:"0620b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (5續)",
		titleEn:"How to know God's Will (5 continued)"
	},
	{
		id:"0621a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (6)",
		titleEn:"How to know God's Will (6)"
	},
	{
		id:"0621b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (6續)",
		titleEn:"How to know God's Will (6 continued)"
	},
	{
		id:"0622a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (7)",
		titleEn:"How to know God's Will (7)"
	},
	{
		id:"0622b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (7續)",
		titleEn:"How to know God's Will (7 continued)"
	},
	{
		id:"0623a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (8)",
		titleEn:"How to know God's Will (8)"
	},
	{
		id:"0623b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (8續)",
		titleEn:"How to know God's Will (8 continued)"
	},
	{
		id:"0624a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (9)",
		titleEn:"How to know God's Will (9)"
	},
	{
		id:"0624b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何明白神的旨意 (9續)",
		titleEn:"How to know God's Will (9 continued)"
	},
	{
		id:"0625a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 謙卑 (1)",
		titleEn:"Inner Life: Humble (1)"
	},
	{
		id:"0625b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"內在生活: 謙卑 (1續)",
		titleEn:"Inner Life: Humble (1 continued)"
	},
	{
		id:"0626a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (2)",
		titleEn:"Humble (2) "
	},
	{
		id:"0626b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (2續)",
		titleEn:"Humble (2 continued)"
	},
	{
		id:"0627a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (3)",
		titleEn:"Humble (3)"
	},
	{
		id:"0627b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (3續)",
		titleEn:"Humble (3 continued)"
	},
	{
		id:"0628a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (4)",
		titleEn:"Humble (4)"
	},
	{
		id:"0628b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (4續)",
		titleEn:"Humble (4 continued)"
	},
	{
		id:"0629a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (5)",
		titleEn:"Humble (5)"
	},
	{
		id:"0629b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (5續)",
		titleEn:"Humble (5 continued)"
	},
	{
		id:"0630a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (6)",
		titleEn:"Humble (6)"
	},
	{
		id:"0630b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (6續)",
		titleEn:"Humble (6 continued)"
	},
	{
		id:"0631a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (7)",
		titleEn:"Humble (7)"
	},
	{
		id:"0631b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (7續)",
		titleEn:"Humble (7 continued)"
	},
	{
		id:"0632a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (8)",
		titleEn:"Humble (8)"
	},
	{
		id:"0632b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (8續)",
		titleEn:"Humble (8 continued) "
	},
	{
		id:"0633a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (9)",
		titleEn:"Humble (9)"
	},
	{
		id:"0633b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (9續)",
		titleEn:"Humble (9 continued)"
	},
	{
		id:"0634a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (10)",
		titleEn:"Humble (10)"
	},
	{
		id:"0634b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (10續)",
		titleEn:"Humble (10 continued)"
	},
	{
		id:"0635a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (11)",
		titleEn:"Humble (11) "
	},
	{
		id:"0635b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (11續)",
		titleEn:"Humble (11 continued)"
	},
	{
		id:"0636a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (12)",
		titleEn:"Humble (12) "
	},
	{
		id:"0636b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (12續)",
		titleEn:"Humble (12 continued)"
	},
	{
		id:"0637a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (13)",
		titleEn:"Humble (13)"
	},
	{
		id:"0637b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (13續)",
		titleEn:"Humble (13 continued)"
	},
	{
		id:"0638a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (14)",
		titleEn:"Humble (14)"
	},
	{
		id:"0638b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (14續)",
		titleEn:"Humble (14 continued)"
	},
	{
		id:"0639a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (15)",
		titleEn:"Humble (15) "
	},
	{
		id:"0639b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (15續)",
		titleEn:"Humble (15 continued)"
	},
	{
		id:"0640a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (16)",
		titleEn:"Humble (16)"
	},
	{
		id:"0640b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"謙卑 (16續)",
		titleEn:"Humble (16 continued)"
	},
	{
		id:"0641a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (1)",
		titleEn:"How to train up the children: Discipline (1)"
	},
	{
		id:"0641b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (1續)",
		titleEn:"How to train up the children: Discipline (1 continued)"
	},
	{
		id:"0642a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (2)",
		titleEn:"How to train up the children: Discipline (2)"
	},
	{
		id:"0642b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (2續)",
		titleEn:"How to train up the children: Discipline (2 continued)"
	},
	{
		id:"0643a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (3)",
		titleEn:"How to train up the children: Discipline (3)"
	},
	{
		id:"0643b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (3續)",
		titleEn:"How to train up the children: Disciplin (3 continued)"
	},
	{
		id:"0644a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (4)",
		titleEn:"How to train up the children: Discipline (4)"
	},
	{
		id:"0644b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (4續)",
		titleEn:"How to train up the children: Discipline (4 continued)"
	},
	{
		id:"0645a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (5)",
		titleEn:"How to train up the children: Discipline (5)"
	},
	{
		id:"0645b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (5續)",
		titleEn:"How to train up the children: Discipline (5 continued)"
	},
	{
		id:"0646a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (6)",
		titleEn:"How to train up the children: Discipline (6)"
	},
	{
		id:"0646b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 教養篇 (6續)",
		titleEn:"How to train up the children: Discipline (6 continued)"
	},
	{
		id:"0647a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (1)",
		titleEn:"How to train up the children: Love (1)"
	},
	{
		id:"0647b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (1續)",
		titleEn:"How to train up the children: Love (1 continued)"
	},
	{
		id:"0648a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (2)",
		titleEn:"How to train up the children: Love (2)"
	},
	{
		id:"0648b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (2續)",
		titleEn:"How to train up the children: Love (2 continued)"
	},
	{
		id:"0649a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (3)",
		titleEn:"How to train up the children: Love (3)"
	},
	{
		id:"0649b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (3續)",
		titleEn:"How to train up the children: Love (3 continued)"
	},
	{
		id:"0650a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (4)",
		titleEn:"How to train up the children: Love (4)"
	},
	{
		id:"0650b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養孩童: 愛篇 (4續)",
		titleEn:"How to train up the children: Love (4 continued)"
	},
	{
		id:"0651a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (1)",
		titleEn:"How to train up the teens (1)"
	},
	{
		id:"0651b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (1續)",
		titleEn:"How to train up the teens (1 continued)  "
	},
	{
		id:"0652a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (2)",
		titleEn:"How to train up the teens (2)"
	},
	{
		id:"0652b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (2續)",
		titleEn:"How to train up the teens (2 continued)"
	},
	{
		id:"0653a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (3)",
		titleEn:"How to train up the teens (3)"
	},
	{
		id:"0653b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (3續)",
		titleEn:"How to train up the teens (3 continued)"
	},
	{
		id:"0654a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (4) ",
		titleEn:"How to train up the teens (4 )"
	},
	{
		id:"0654b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (4續)",
		titleEn:"How to train up the teens (4 continued)"
	},
	{
		id:"0655a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (5)",
		titleEn:"How to train up the teens (5)"
	},
	{
		id:"0655b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (5續)",
		titleEn:"How to train up the teens (5 continued)"
	},
	{
		id:"0656a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (6)",
		titleEn:"How to train up the teens (6)"
	},
	{
		id:"0656b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"如何教養青少年 (6續)",
		titleEn:"How to train up the teens (6 continued)"
	},
	{
		id:"0657a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (1): 夫妻間的溝通",
		titleEn:"The secret to get along well with your spouse (1): The communication within"
	},
	{
		id:"0657b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (1續): 夫妻間的溝通",
		titleEn:"The secret to get along well with your spouse (1 continued): The communication within"
	},
	{
		id:"0658a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (2): 夫妻間的溝通",
		titleEn:"The secret to get along well with your spouse (2):The communication within"
	},
	{
		id:"0658b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (2續): 夫妻間的溝通",
		titleEn:"The secret to get along well with your spouse (2 continued):The communication within"
	},
	{
		id:"0659a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (3): 夫妻間的金錢觀",
		titleEn:"The secret to get along well with your spouse (3):Mutual concept of money"
	},
	{
		id:"0659b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (3續): 夫妻間的金錢觀",
		titleEn:"The secret to get along well with your spouse (3 continued): Mutual concept of money"
	},
	{
		id:"0660a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (4): 夫妻間的金錢觀",
		titleEn:"The secret to get along well with your spouse (4): Mutual concept of money"
	},
	{
		id:"0660b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (4續): 夫妻間的金錢觀",
		titleEn:"The secret to get along well with your spouse (4 continued):Mutual concept of money"
	},
	{
		id:"0661a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (5): 姻親關係",
		titleEn:"The secret to get along well with your spouse (5): In-Laws relationship"
	},
	{
		id:"0661b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (5續): 姻親關係",
		titleEn:"The secret to get along well with your spouse (5 continued): In-Laws relationship"
	},
	{
		id:"0662a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (6): 姻親關係",
		titleEn:"The secret to get along well with your spouse (6): In-Laws relationship"
	},
	{
		id:"0662b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"夫妻相處要訣 (6續): 姻親關係",
		titleEn:"The secret to get along well with your spouse (6 continued): In-Laws relationship"
	},
	{
		id:"0663a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (1)",
		titleEn:"Friendship and marriage (1)"
	},
	{
		id:"0663b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (1續)",
		titleEn:"Friendship and marriage (1 continued)"
	},
	{
		id:"0664a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (2)",
		titleEn:"Friendship and marriage (2)"
	},
	{
		id:"0664b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (2續)",
		titleEn:"Friendship and marriage (2 continued)"
	},
	{
		id:"0665a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (3)",
		titleEn:"Friendship and marriage (3)"
	},
	{
		id:"0665b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (3續)",
		titleEn:"Friendship and marriage (3 continued)"
	},
	{
		id:"0666a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (4)",
		titleEn:"Friendship and marriage (4)"
	},
	{
		id:"0666b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (4續)",
		titleEn:"Friendship and marriage (4 continued)"
	},
	{
		id:"0667a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (5)",
		titleEn:"Friendship and marriage (5)"
	},
	{
		id:"0667b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (5續)",
		titleEn:"Friendship and marriage (5 continued)"
	},
	{
		id:"0668a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (6)",
		titleEn:"Friendship and marriage (6)"
	},
	{
		id:"0668b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (6續)",
		titleEn:"Friendship and marriage (6 continued)"
	},
	{
		id:"0669a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (7)",
		titleEn:"Friendship and marriage (7)"
	},
	{
		id:"0669b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (7續)",
		titleEn:"Friendship and marriage (7 continued)"
	},
	{
		id:"0670a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (8)",
		titleEn:"Friendship and marriage (8)"
	},
	{
		id:"0670b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"nan",
		titleCn:"交友與婚姻 (8續)",
		titleEn:"Friendship and marriage (8 continued)"
	},
	{
		id:"0671a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (1)",
		titleEn:"Basic Bible Study (1)"
	},
	{
		id:"0671b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (1續)",
		titleEn:"Basic Bible Study (1 continued)"
	},
	{
		id:"0672a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (2)",
		titleEn:"Basic Bible Study (2)"
	},
	{
		id:"0672b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (2續)",
		titleEn:"Basic Bible Study (2 continued)"
	},
	{
		id:"0673a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (3)",
		titleEn:"Basic Bible Study (3)"
	},
	{
		id:"0673b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (3續)",
		titleEn:"Basic Bible Study (3 continued)"
	},
	{
		id:"0674a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (4)",
		titleEn:"Basic Bible Study (4)"
	},
	{
		id:"0674b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (4續)",
		titleEn:"Basic Bible Study (4 continued)"
	},
	{
		id:"0675a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (5)",
		titleEn:"Basic Bible Study (5)"
	},
	{
		id:"0675b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (5續)",
		titleEn:"Basic Bible Study (5 continued)"
	},
	{
		id:"0676a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (6)",
		titleEn:"Basic Bible Study (6)"
	},
	{
		id:"0676b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (6續)",
		titleEn:"Basic Bible Study (6 continued)"
	},
	{
		id:"0677a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (7)",
		titleEn:"Basic Bible Study (7)"
	},
	{
		id:"0677b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (7續)",
		titleEn:"Basic Bible Study (7 continued)"
	},
	{
		id:"0678a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (8)",
		titleEn:"Basic Bible Study (8)"
	},
	{
		id:"0678b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (8續)",
		titleEn:"Basic Bible Study (8 continued)"
	},
	{
		id:"0679a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (9)",
		titleEn:"Basic Bible Study (9)"
	},
	{
		id:"0679b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (9續)",
		titleEn:"Basic Bible Study (9 continued)"
	},
	{
		id:"0680a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (10)",
		titleEn:"Basic Bible Study (10)"
	},
	{
		id:"0680b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"基礎讀經法 (10續)",
		titleEn:"Basic Bible Study (10 continued)"
	},
	{
		id:"0681a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (1)",
		titleEn:"The pilgrim in the wildness (1)"
	},
	{
		id:"0681b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (1續)",
		titleEn:"The pilgrim in the wildness (1 cont.)"
	},
	{
		id:"0682a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (2)",
		titleEn:"The pilgrim in the wildness (2)"
	},
	{
		id:"0682b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (2續)",
		titleEn:"The pilgrim in the wildness (2 cont.)"
	},
	{
		id:"0683a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (3)",
		titleEn:"The pilgrim in the wildness (3)"
	},
	{
		id:"0683b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (3續)",
		titleEn:"The pilgrim in the wildness (3 cont.)"
	},
	{
		id:"0684a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (4)",
		titleEn:"The pilgrim in the wildness (4)"
	},
	{
		id:"0684b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (4續)",
		titleEn:"The pilgrim in the wildness (4 cont.)"
	},
	{
		id:"0685a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (5)",
		titleEn:"The pilgrim in the wildness (5)"
	},
	{
		id:"0685b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (5續)",
		titleEn:"The pilgrim in the wildness (5 cont.)"
	},
	{
		id:"0686a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (6)",
		titleEn:"The pilgrim in the wildness (6)"
	},
	{
		id:"0686b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (6續)",
		titleEn:"The pilgrim in the wildness (6 cont.)"
	},
	{
		id:"0687a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (7)",
		titleEn:"The pilgrim in the wildness (7)"
	},
	{
		id:"0687b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (7續)",
		titleEn:"The pilgrim in the wildness (7 cont.)"
	},
	{
		id:"0688a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (8)",
		titleEn:"The pilgrim in the wildness (8)"
	},
	{
		id:"0688b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (8續)",
		titleEn:"The pilgrim in the wildness (8 cont.)"
	},
	{
		id:"0689a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (9)",
		titleEn:"The pilgrim in the wildness (9)"
	},
	{
		id:"0690a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"曠野歷程 (10)",
		titleEn:"The pilgrim in the wildness (10)"
	},
	{
		id:"0691a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (1)",
		titleEn:"Luke (1)"
	},
	{
		id:"0692a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (2)",
		titleEn:"Luke (2)"
	},
	{
		id:"0692b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (2續)",
		titleEn:"Luke (2 continued)"
	},
	{
		id:"0693a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (3)",
		titleEn:"Luke (3)"
	},
	{
		id:"0693b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (3續)",
		titleEn:"Luke (3 continued)"
	},
	{
		id:"0694a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (4)",
		titleEn:"Luke (4)"
	},
	{
		id:"0694b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (4續)",
		titleEn:"Luke (4 continued)"
	},
	{
		id:"0695a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (5)",
		titleEn:"Luke (5)"
	},
	{
		id:"0695b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (5續)",
		titleEn:"Luke (5 continued)"
	},
	{
		id:"0696a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (6)",
		titleEn:"Luke (6)"
	},
	{
		id:"0696b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (6續)",
		titleEn:"Luke (6 continued)"
	},
	{
		id:"0697a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (7)",
		titleEn:"Luke (7)"
	},
	{
		id:"0698a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (8)",
		titleEn:"Luke (8)"
	},
	{
		id:"0699a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (9)",
		titleEn:"Luke (9)"
	},
	{
		id:"0700a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (10)",
		titleEn:"Luke (10)"
	},
	{
		id:"0701a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (11)",
		titleEn:"Luke (11)"
	},
	{
		id:"0701b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (11續)",
		titleEn:"Luke (11 continued)"
	},
	{
		id:"0702a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"路加福音 (12)",
		titleEn:"Luke (12)"
	},
	{
		id:"0703a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (1)",
		titleEn:"(1) Samuel (1)"
	},
	{
		id:"0703b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (1續)",
		titleEn:"(1) Samuel (1 continued)"
	},
	{
		id:"0704a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (2)",
		titleEn:"(1) Samuel (2)"
	},
	{
		id:"0704b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (2續)",
		titleEn:"(1) Samuel (2 continued)"
	},
	{
		id:"0705a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (3)",
		titleEn:"(1) Samuel (3)"
	},
	{
		id:"0705b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (3續)",
		titleEn:"(1) Samuel (3 continued)"
	},
	{
		id:"0706a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (4)",
		titleEn:"(1) Samuel (4)"
	},
	{
		id:"0706b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (4續)",
		titleEn:"(1) Samuel (4 continued)"
	},
	{
		id:"0707a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (5)",
		titleEn:"(1) Samuel (5)"
	},
	{
		id:"0707b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"撒母耳記(上) (5續)",
		titleEn:"(1) Samuel (5 continued)"
	},
	{
		id:"0708a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上)1—39章(1)",
		titleEn:"(1) Isaiah (1)"
	},
	{
		id:"0708b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (1續)",
		titleEn:"(1) Isaiah (1 cont.)"
	},
	{
		id:"0709a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (2)",
		titleEn:"(1) Isaiah (2)"
	},
	{
		id:"0709b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (2續)",
		titleEn:"(1) Isaiah (2 cont.)"
	},
	{
		id:"0710a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (3)",
		titleEn:"(1) Isaiah (3)"
	},
	{
		id:"0710b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (3續)",
		titleEn:"(1) Isaiah (3 cont.)"
	},
	{
		id:"0711a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (4)",
		titleEn:"(1) Isaiah (4)"
	},
	{
		id:"0711b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (4續)",
		titleEn:"(1) Isaiah (4 cont.)"
	},
	{
		id:"0712a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (5)",
		titleEn:"(1) Isaiah (5)"
	},
	{
		id:"0712b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (5續)",
		titleEn:"(1) Isaiah (5 cont.)"
	},
	{
		id:"0713a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (6)",
		titleEn:"(1) Isaiah (6)"
	},
	{
		id:"0713b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (6續)",
		titleEn:"(1) Isaiah (6 cont.)"
	},
	{
		id:"0714a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (7)",
		titleEn:"(1) Isaiah (7)"
	},
	{
		id:"0714b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (7續)",
		titleEn:"(1) Isaiah (7 cont.)"
	},
	{
		id:"0715a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (8)",
		titleEn:"(1) Isaiah (8)"
	},
	{
		id:"0715b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(上) (8續)",
		titleEn:"(1) Isaiah (8 cont.)"
	},
	{
		id:"0716a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下)40—66章(1)",
		titleEn:"(2) Isaiah (1)"
	},
	{
		id:"0716b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (1續)",
		titleEn:"(2) Isaiah (1 cont.)"
	},
	{
		id:"0717a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (2)",
		titleEn:"(2) Isaiah (2)"
	},
	{
		id:"0717b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (2續)",
		titleEn:"(2) Isaiah (2 cont.)"
	},
	{
		id:"0718a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (3)",
		titleEn:"(2) Isaiah (3)"
	},
	{
		id:"0718b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (3續)",
		titleEn:"(2) Isaiah (3 cont.)"
	},
	{
		id:"0719a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (4)",
		titleEn:"(2) Isaiah (4)"
	},
	{
		id:"0719b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (4續)",
		titleEn:"(2) Isaiah (4 cont.)   "
	},
	{
		id:"0720a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (5)",
		titleEn:"(2) Isaiah (5)"
	},
	{
		id:"0720b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"以賽亞書(下) (5續)",
		titleEn:"(2) Isaiah (5 cont.)"
	},
	{
		id:"0721a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (1)",
		titleEn:"Revelation (1)"
	},
	{
		id:"0721b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (1續)",
		titleEn:"Revelation (1 cont.)"
	},
	{
		id:"0722a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (2)",
		titleEn:"Revelation (2)"
	},
	{
		id:"0722b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (2續)",
		titleEn:"Revelation (2 cont.)"
	},
	{
		id:"0723a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (3)",
		titleEn:"Revelation (3)"
	},
	{
		id:"0723b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (3續)",
		titleEn:"Revelation (3 cont.)"
	},
	{
		id:"0724a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (4)",
		titleEn:"Revelation (4)"
	},
	{
		id:"0724b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (4續)",
		titleEn:"Revelation (4 cont.)"
	},
	{
		id:"0725a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (5)",
		titleEn:"Revelation (5)"
	},
	{
		id:"0725b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (5續)",
		titleEn:"Revelation (5 cont.)"
	},
	{
		id:"0726a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (6)",
		titleEn:"Revelation (6)"
	},
	{
		id:"0726b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (6續)",
		titleEn:"Revelation (6 cont.)"
	},
	{
		id:"0727a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (7)",
		titleEn:"Revelation (7)"
	},
	{
		id:"0727b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (7續)",
		titleEn:"Revelation (7 cont.)"
	},
	{
		id:"0728a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (8)",
		titleEn:"Revelation (8)"
	},
	{
		id:"0728b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (8續)",
		titleEn:"Revelation (8 cont.)"
	},
	{
		id:"0729a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (9)",
		titleEn:"Revelation (9)"
	},
	{
		id:"0729b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (9續)",
		titleEn:"Revelation (9 cont.)"
	},
	{
		id:"0730a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (10)",
		titleEn:"Revelation (10)"
	},
	{
		id:"0730b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (10續)",
		titleEn:"Revelation (10 cont.)"
	},
	{
		id:"0731a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (11)",
		titleEn:"Revelation (11)"
	},
	{
		id:"0731b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (11續)",
		titleEn:"Revelation (11 cont.)"
	},
	{
		id:"0732a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (12)",
		titleEn:"Revelation (12)"
	},
	{
		id:"0732b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曹力中牧師",
		speakerEn:"nan",
		titleCn:"啟示錄 (12續)",
		titleEn:"Revelation (12 cont.)"
	},
	{
		id:"0733a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(1)",
		titleEn:"A Summary Of Biblical christian Faith(1)"
	},
	{
		id:"0733b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(1)續",
		titleEn:"A Summary Of Biblical christian Faith(1)continued"
	},
	{
		id:"0734a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(2)",
		titleEn:"A Summary Of Biblical christian Faith(2)"
	},
	{
		id:"0734b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(2)續",
		titleEn:"A Summary Of Biblical christian Faith(2)continued"
	},
	{
		id:"0735a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(3)",
		titleEn:"A Summary Of Biblical christian Faith(3)"
	},
	{
		id:"0735b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(3)續",
		titleEn:"A Summary Of Biblical christian Faith(3)continued"
	},
	{
		id:"0736a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(4)",
		titleEn:"A Summary Of Biblical christian Faith(4)"
	},
	{
		id:"0736b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(4)續",
		titleEn:"A Summary Of Biblical christian Faith(4)continued"
	},
	{
		id:"0737a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(5)",
		titleEn:"A Summary Of Biblical christian Faith(5)"
	},
	{
		id:"0737b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(5)續",
		titleEn:"A Summary Of Biblical christian Faith(5)continued"
	},
	{
		id:"0738a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(6)",
		titleEn:"A Summary Of Biblical christian Faith(6)"
	},
	{
		id:"0738b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(6)續",
		titleEn:"A Summary Of Biblical christian Faith(6)continued"
	},
	{
		id:"0739a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(7)",
		titleEn:"A Summary Of Biblical christian Faith(7)"
	},
	{
		id:"0739b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(7)續",
		titleEn:"A Summary Of Biblical christian Faith(7)continued"
	},
	{
		id:"0740a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(8)",
		titleEn:"A Summary Of Biblical christian Faith(8)"
	},
	{
		id:"0740b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(8)續",
		titleEn:"A Summary Of Biblical christian Faith(8)continued"
	},
	{
		id:"0741a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(9)",
		titleEn:"A Summary Of Biblical christian Faith(9)"
	},
	{
		id:"0741b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(9)續",
		titleEn:"A Summary Of Biblical christian Faith(9)continued"
	},
	{
		id:"0742a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(10)",
		titleEn:"A Summary Of Biblical christian Faith(10)"
	},
	{
		id:"0742b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(10)續",
		titleEn:"A Summary Of Biblical christian Faith(10)continued"
	},
	{
		id:"0743a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(11)",
		titleEn:"A Summary Of Biblical christian Faith(11)"
	},
	{
		id:"0743b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(11)續",
		titleEn:"A Summary Of Biblical christian Faith(11)continued"
	},
	{
		id:"0744a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(12)",
		titleEn:"A Summary Of Biblical christian Faith(12)"
	},
	{
		id:"0744b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(12)續",
		titleEn:"A Summary Of Biblical christian Faith(12)continued"
	},
	{
		id:"0745a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(13)",
		titleEn:"A Summary Of Biblical christian Faith(13)"
	},
	{
		id:"0745b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(13)續",
		titleEn:"A Summary Of Biblical christian Faith(13)continued"
	},
	{
		id:"0746a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(14)",
		titleEn:"A Summary Of Biblical christian Faith(14)"
	},
	{
		id:"0746b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(14)續",
		titleEn:"A Summary Of Biblical christian Faith(14)continued"
	},
	{
		id:"0747a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(15)",
		titleEn:"A Summary Of Biblical christian Faith(15)"
	},
	{
		id:"0747b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(15)續",
		titleEn:"A Summary Of Biblical christian Faith(15)continued"
	},
	{
		id:"0748a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(16)",
		titleEn:"A Summary Of Biblical christian Faith(16)"
	},
	{
		id:"0748b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(16)續",
		titleEn:"A Summary Of Biblical christian Faith(16)continued"
	},
	{
		id:"0749a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(17)",
		titleEn:"A Summary Of Biblical christian Faith(17)"
	},
	{
		id:"0749b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(17)續",
		titleEn:"A Summary Of Biblical christian Faith(17)continued"
	},
	{
		id:"0750a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(18)",
		titleEn:"A Summary Of Biblical christian Faith(18)"
	},
	{
		id:"0750b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(18)續",
		titleEn:"A Summary Of Biblical christian Faith(18)continued"
	},
	{
		id:"0751a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(19)",
		titleEn:"A Summary Of Biblical christian Faith(19)"
	},
	{
		id:"0751b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(19)續",
		titleEn:"A Summary Of Biblical christian Faith(19)continued"
	},
	{
		id:"0752a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督教信仰綱要(20)",
		titleEn:"A Summary Of Biblical christian Faith(20)"
	},
	{
		id:"0753a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(1)",
		titleEn:"Books of Gospel(1)"
	},
	{
		id:"0753b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(1)續",
		titleEn:"Books of Gospel(1)continued"
	},
	{
		id:"0754a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(2)",
		titleEn:"Books of Gospel(2)"
	},
	{
		id:"0754b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(2)續",
		titleEn:"Books of Gospel(2)continued"
	},
	{
		id:"0755a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(3)",
		titleEn:"Books of Gospel(3)"
	},
	{
		id:"0755b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(3)續",
		titleEn:"Books of Gospel(3)continued"
	},
	{
		id:"0756a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(4)",
		titleEn:"Books of Gospel(4)"
	},
	{
		id:"0756b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(4)續",
		titleEn:"Books of Gospel(4)continued"
	},
	{
		id:"0757a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(5)",
		titleEn:"Books of Gospel(5)"
	},
	{
		id:"0757b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(5)續",
		titleEn:"Books of Gospel(5)continued"
	},
	{
		id:"0758a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(6)",
		titleEn:"Books of Gospel(6)"
	},
	{
		id:"0758b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(6)續",
		titleEn:"Books of Gospel(6)continued"
	},
	{
		id:"0759a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(7)",
		titleEn:"Books of Gospel(7)"
	},
	{
		id:"0759b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(7)續",
		titleEn:"Books of Gospel(7)continued"
	},
	{
		id:"0760a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(8)",
		titleEn:"Books of Gospel(8)"
	},
	{
		id:"0760b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(8)續",
		titleEn:"Books of Gospel(8)continued"
	},
	{
		id:"0761a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(9)",
		titleEn:"Books of Gospel(9)"
	},
	{
		id:"0761b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(9)續",
		titleEn:"Books of Gospel(9)continued"
	},
	{
		id:"0762a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(10)",
		titleEn:"Books of Gospel(10)"
	},
	{
		id:"0762b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(10)續",
		titleEn:"Books of Gospel(10)continued"
	},
	{
		id:"0763a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(11)",
		titleEn:"Books of Gospel(11)"
	},
	{
		id:"0763b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(11)續",
		titleEn:"Books of Gospel(11)continued"
	},
	{
		id:"0764a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(12)",
		titleEn:"Books of Gospel(12)"
	},
	{
		id:"0764b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(12)續",
		titleEn:"Books of Gospel(12)continued"
	},
	{
		id:"0765a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(13)",
		titleEn:"Books of Gospel(13)"
	},
	{
		id:"0765b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(13)續",
		titleEn:"Books of Gospel(13)continued"
	},
	{
		id:"0766a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(14)",
		titleEn:"Books of Gospel(14)"
	},
	{
		id:"0766b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(14)續",
		titleEn:"Books of Gospel(14)continued"
	},
	{
		id:"0767a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(15)",
		titleEn:"Books of Gospel(15)"
	},
	{
		id:"0767b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(15)續",
		titleEn:"Books of Gospel(15)continued"
	},
	{
		id:"0768a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(16)",
		titleEn:"Books of Gospel(16)"
	},
	{
		id:"0768b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(16)續",
		titleEn:"Books of Gospel(16)continued"
	},
	{
		id:"0769a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(17)",
		titleEn:"Books of Gospel(17)"
	},
	{
		id:"0769b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(17)續",
		titleEn:"Books of Gospel(17)continued"
	},
	{
		id:"0770a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(18)",
		titleEn:"Books of Gospel(18)"
	},
	{
		id:"0770b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(18)續",
		titleEn:"Books of Gospel(18)continued"
	},
	{
		id:"0771a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(19)",
		titleEn:"Books of Gospel(19)"
	},
	{
		id:"0771b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(19)續",
		titleEn:"Books of Gospel(19)continued"
	},
	{
		id:"0772a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"福音書(20)",
		titleEn:"Books of Gospel(20)"
	},
	{
		id:"0773a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(1)",
		titleEn:"Acfs of the Aposties(1)"
	},
	{
		id:"0773b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(1)續",
		titleEn:"Acfs of the Aposties (1)continued"
	},
	{
		id:"0774a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(2)",
		titleEn:"Acfs of the Aposties (2)"
	},
	{
		id:"0774b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(2)續",
		titleEn:"Acfs of the Aposties (2)continued"
	},
	{
		id:"0775a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(3)",
		titleEn:"Acfs of the Aposties (3)"
	},
	{
		id:"0775b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(3)續",
		titleEn:"Acfs of the Aposties (3)continued"
	},
	{
		id:"0776a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(4) ",
		titleEn:"Acfs of the Aposties (4)"
	},
	{
		id:"0776b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(4)續",
		titleEn:"Acfs of the Aposties (4)continued"
	},
	{
		id:"0777a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(5)",
		titleEn:"Acfs of the Aposties (5)"
	},
	{
		id:"0777b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(5)續",
		titleEn:"Acfs of the Aposties (5)continued"
	},
	{
		id:"0778a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(6) ",
		titleEn:"Acfs of the Aposties (6)"
	},
	{
		id:"0778b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(6)續",
		titleEn:"Acfs of the Aposties (6)continued"
	},
	{
		id:"0779a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(7)",
		titleEn:"Acfs of the Aposties (7)"
	},
	{
		id:"0779b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(7)續",
		titleEn:"Acfs of the Aposties (7)continued"
	},
	{
		id:"0780a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(8)",
		titleEn:"Acfs of the Aposties (8)"
	},
	{
		id:"0780b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(8)續",
		titleEn:"Acfs of the Aposties (8)continued"
	},
	{
		id:"0781a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(9)",
		titleEn:"Acfs of the Aposties (9)"
	},
	{
		id:"0781b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(9)續",
		titleEn:"Acfs of the Aposties (9)continued"
	},
	{
		id:"0782a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(10)",
		titleEn:"Acfs of the Aposties (10)"
	},
	{
		id:"0782b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(10)續",
		titleEn:"Acfs of the Aposties (10)continued"
	},
	{
		id:"0783a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(11)",
		titleEn:"Acfs of the Aposties (11)"
	},
	{
		id:"0783b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(11)續",
		titleEn:"Acfs of the Aposties (11)continued"
	},
	{
		id:"0784a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(12)",
		titleEn:"Acfs of the Aposties (12)"
	},
	{
		id:"0784b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(12)續",
		titleEn:"Acfs of the Aposties (12)continued"
	},
	{
		id:"0785a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(13)",
		titleEn:"Acfs of the Aposties (13)"
	},
	{
		id:"0785b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(13)續",
		titleEn:"Acfs of the Aposties (13)continued"
	},
	{
		id:"0786a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(14)",
		titleEn:"Acfs of the Aposties (14)"
	},
	{
		id:"0786b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(14)續",
		titleEn:"Acfs of the Aposties (14)continued"
	},
	{
		id:"0787a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(15)",
		titleEn:"Acfs of the Aposties (15)"
	},
	{
		id:"0787b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(15)續",
		titleEn:"Acfs of the Aposties (15)continued"
	},
	{
		id:"0788a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(16)",
		titleEn:"Acfs of the Aposties (16)"
	},
	{
		id:"0788b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(16)續",
		titleEn:"Acfs of the Aposties (16)continued"
	},
	{
		id:"0789a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(17)",
		titleEn:"Acfs of the Aposties (17)"
	},
	{
		id:"0789b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(17)續",
		titleEn:"Acfs of the Aposties (17)continued"
	},
	{
		id:"0790a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(18)",
		titleEn:"Acfs of the Aposties (18)"
	},
	{
		id:"0790b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(18)續",
		titleEn:"Acfs of the Aposties (18)continued"
	},
	{
		id:"0791a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(19)",
		titleEn:"Acfs of the Aposties (19)"
	},
	{
		id:"0791b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(19)續",
		titleEn:"Acfs of the Aposties (19)continued"
	},
	{
		id:"0792a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"使徒行傳(20)",
		titleEn:"Acfs of the Aposties (20)"
	},
	{
		id:"0793a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(1) ",
		titleEn:"Romans(1)"
	},
	{
		id:"0793b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(1)續",
		titleEn:"Romans(1)continued"
	},
	{
		id:"0794a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(2) ",
		titleEn:"Romans(2)"
	},
	{
		id:"0794b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(2)續",
		titleEn:"Romans(2)continued"
	},
	{
		id:"0795a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(3) ",
		titleEn:"Romans(3)"
	},
	{
		id:"0795b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(3)續",
		titleEn:"Romans(3)continued"
	},
	{
		id:"0796a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(4) ",
		titleEn:"Romans(4)"
	},
	{
		id:"0796b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(4)續",
		titleEn:"Romans(4)continued"
	},
	{
		id:"0797a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(5) ",
		titleEn:"Romans(5)"
	},
	{
		id:"0797b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(5)續",
		titleEn:"Romans(5)continued"
	},
	{
		id:"0798a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(6) ",
		titleEn:"Romans(6)"
	},
	{
		id:"0798b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(6)續",
		titleEn:"Romans(6)continued"
	},
	{
		id:"0799a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(7)",
		titleEn:"Romans(7)"
	},
	{
		id:"0799b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(7)續",
		titleEn:"Romans(7)continued"
	},
	{
		id:"0800a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(8) ",
		titleEn:"Romans(8)"
	},
	{
		id:"0800b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(8)續",
		titleEn:"Romans(8)continued"
	},
	{
		id:"0801a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(9) ",
		titleEn:"Romans(9)"
	},
	{
		id:"0801b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(9)續",
		titleEn:"Romans(9)continued"
	},
	{
		id:"0802a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(10) ",
		titleEn:"Romans(10)"
	},
	{
		id:"0802b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(10)續",
		titleEn:"Romans(10)continued"
	},
	{
		id:"0803a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(11) ",
		titleEn:"Romans(11)"
	},
	{
		id:"0803b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(11)續",
		titleEn:"Romans(11)continued"
	},
	{
		id:"0804a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(12) ",
		titleEn:"Romans(12)"
	},
	{
		id:"0804b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(12)續",
		titleEn:"Romans(12)continued"
	},
	{
		id:"0805a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(13) ",
		titleEn:"Romans(13)"
	},
	{
		id:"0805b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(13)續",
		titleEn:"Romans(13)continued"
	},
	{
		id:"0806a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(14) ",
		titleEn:"Romans(14)"
	},
	{
		id:"0806b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(14)續",
		titleEn:"Romans(14)continued"
	},
	{
		id:"0807a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(15) ",
		titleEn:"Romans(15)"
	},
	{
		id:"0807b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(15)續",
		titleEn:"Romans(15)continued"
	},
	{
		id:"0808a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(16) ",
		titleEn:"Romans(16)"
	},
	{
		id:"0808b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(16)續",
		titleEn:"Romans(16)continued"
	},
	{
		id:"0809a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(17) ",
		titleEn:"Romans(17)"
	},
	{
		id:"0809b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(17)續",
		titleEn:"Romans(17)continued"
	},
	{
		id:"0810a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(18) ",
		titleEn:"Romans(18)"
	},
	{
		id:"0810b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(18)續",
		titleEn:"Romans(18)continued"
	},
	{
		id:"0811a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(19) ",
		titleEn:"Romans(19)"
	},
	{
		id:"0811b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(19)續",
		titleEn:"Romans(19)continued"
	},
	{
		id:"0812a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"羅馬書(20) ",
		titleEn:"Romans(20)"
	},
	{
		id:"0813a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(1)",
		titleEn:"Hebrews(1)"
	},
	{
		id:"0813b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(1)續",
		titleEn:"Hebrews(1)continued"
	},
	{
		id:"0814a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(2)",
		titleEn:"Hebrews(2)"
	},
	{
		id:"0814b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(2)續",
		titleEn:"Hebrews(2) continued"
	},
	{
		id:"0815a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(3)",
		titleEn:"Hebrews(3)"
	},
	{
		id:"0815b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(3)續",
		titleEn:"Hebrews(3) continued"
	},
	{
		id:"0816a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(4)",
		titleEn:"Hebrews(4)"
	},
	{
		id:"0816b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(4)續",
		titleEn:"Hebrews(4) continued"
	},
	{
		id:"0817a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(5)",
		titleEn:"Hebrews(5)"
	},
	{
		id:"0817b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(5)續",
		titleEn:"Hebrews(5)continued"
	},
	{
		id:"0818a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(6)",
		titleEn:"Hebrews(6)"
	},
	{
		id:"0818b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(6)續",
		titleEn:"Hebrews(6) continued"
	},
	{
		id:"0819a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(7)",
		titleEn:"Hebrews(7)"
	},
	{
		id:"0819b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(7)續",
		titleEn:"Hebrews(7) continued"
	},
	{
		id:"0820a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(8)",
		titleEn:"Hebrews(8)"
	},
	{
		id:"0820b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(8)續",
		titleEn:"Hebrews(8) continued"
	},
	{
		id:"0821a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(9)",
		titleEn:"Hebrews(9)"
	},
	{
		id:"0821b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(9)續",
		titleEn:"Hebrews(9)continued"
	},
	{
		id:"0822a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(10)",
		titleEn:"Hebrews(10)"
	},
	{
		id:"0822b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(10)續",
		titleEn:"Hebrews(10) continued"
	},
	{
		id:"0823a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(11)",
		titleEn:"Hebrews(11)"
	},
	{
		id:"0823b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(11)續",
		titleEn:"Hebrews(11) continued"
	},
	{
		id:"0824a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(12)",
		titleEn:"Hebrews(12)"
	},
	{
		id:"0824b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(12)續",
		titleEn:"Hebrews(12) continued"
	},
	{
		id:"0825a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(13)",
		titleEn:"Hebrews(13)"
	},
	{
		id:"0825b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(13)續",
		titleEn:"Hebrews(13) continued"
	},
	{
		id:"0826a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(14)",
		titleEn:"Hebrews(14)"
	},
	{
		id:"0826b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(14)續",
		titleEn:"Hebrews(14) continued"
	},
	{
		id:"0827a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(15)",
		titleEn:"Hebrews(15)"
	},
	{
		id:"0827b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(15)續",
		titleEn:"Hebrews(15) continued"
	},
	{
		id:"0828a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(16)",
		titleEn:"Hebrews(16)"
	},
	{
		id:"0828b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(16)續",
		titleEn:"Hebrews(16) continued"
	},
	{
		id:"0829a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(17)",
		titleEn:"Hebrews(17)"
	},
	{
		id:"0829b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(17)續",
		titleEn:"Hebrews(17) continued"
	},
	{
		id:"0830a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(18)",
		titleEn:"Hebrews(18)"
	},
	{
		id:"0830b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(18)續",
		titleEn:"Hebrews(18) continued"
	},
	{
		id:"0831a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(19)",
		titleEn:"Hebrews(19)"
	},
	{
		id:"0831b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(19)續",
		titleEn:"Hebrews(19) continued"
	},
	{
		id:"0832a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"希伯來書(20)",
		titleEn:"Hebrews(20)"
	},
	{
		id:"0833a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(1)",
		titleEn:"Revelation(1)"
	},
	{
		id:"0833b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(1)續",
		titleEn:"Revelation(1)continued"
	},
	{
		id:"0834a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(2)",
		titleEn:"Revelation(2)"
	},
	{
		id:"0834b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(2)續",
		titleEn:"Revelation(2)continued"
	},
	{
		id:"0835a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(3)",
		titleEn:"Revelation(3)"
	},
	{
		id:"0835b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(3)續",
		titleEn:"Revelation(3)continued"
	},
	{
		id:"0836a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(4)",
		titleEn:"Revelation(4)"
	},
	{
		id:"0836b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(4)續",
		titleEn:"Revelation(4)continued"
	},
	{
		id:"0837a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(5)",
		titleEn:"Revelation(5)"
	},
	{
		id:"0837b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(5)續",
		titleEn:"Revelation(5)continued"
	},
	{
		id:"0838a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(6)",
		titleEn:"Revelation(6)"
	},
	{
		id:"0838b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(6)續",
		titleEn:"Revelation(6)continued"
	},
	{
		id:"0839a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(7)",
		titleEn:"Revelation(7)"
	},
	{
		id:"0839b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(7)續",
		titleEn:"Revelation(7)continued"
	},
	{
		id:"0840a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(8)",
		titleEn:"Revelation(8)"
	},
	{
		id:"0840b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(8)續",
		titleEn:"Revelation(8)continued"
	},
	{
		id:"0841a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(9)",
		titleEn:"Revelation(9)"
	},
	{
		id:"0841b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(9)續",
		titleEn:"Revelation(9)continued"
	},
	{
		id:"0842a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(10)",
		titleEn:"Revelation(10)"
	},
	{
		id:"0842b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(10)續",
		titleEn:"Revelation(10)continued"
	},
	{
		id:"0843a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(11)",
		titleEn:"Revelation(11)"
	},
	{
		id:"0843b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(11)續",
		titleEn:"Revelation(11)continued"
	},
	{
		id:"0844a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(12)",
		titleEn:"Revelation(12)"
	},
	{
		id:"0844b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(12)續",
		titleEn:"Revelation(12)continued"
	},
	{
		id:"0845a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(13)",
		titleEn:"Revelation(13)"
	},
	{
		id:"0845b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(13)續",
		titleEn:"Revelation(13)continued"
	},
	{
		id:"0846a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(14)",
		titleEn:"Revelation(14)"
	},
	{
		id:"0846b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(14)續",
		titleEn:"Revelation(14)continued"
	},
	{
		id:"0847a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(15)",
		titleEn:"Revelation(15)"
	},
	{
		id:"0847b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(15)續",
		titleEn:"Revelation(15)continued"
	},
	{
		id:"0848a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(16)",
		titleEn:"Revelation(16)"
	},
	{
		id:"0848b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(16)續",
		titleEn:"Revelation(16)continued"
	},
	{
		id:"0849a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(17)",
		titleEn:"Revelation(17)"
	},
	{
		id:"0849b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(17)續",
		titleEn:"Revelation(17)continued"
	},
	{
		id:"0850a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(18)",
		titleEn:"Revelation(18)"
	},
	{
		id:"0850b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(18)續",
		titleEn:"Revelation(18)continued"
	},
	{
		id:"0851a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(19)",
		titleEn:"Revelation(19)"
	},
	{
		id:"0851b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(19)續",
		titleEn:"Revelation(19)continued"
	},
	{
		id:"0852a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"啟示文學(20)",
		titleEn:"Revelation(20)"
	},
	{
		id:"0853a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(1)",
		titleEn:"Jesus Christ(1)"
	},
	{
		id:"0853b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(1)續",
		titleEn:"Jesus Christ(1)continued"
	},
	{
		id:"0854a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(2)",
		titleEn:"Jesus Christ(2)"
	},
	{
		id:"0854b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(2)續",
		titleEn:"Jesus Christ(2)continued"
	},
	{
		id:"0855a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(3)",
		titleEn:"Jesus Christ(3)"
	},
	{
		id:"0855b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(3)續",
		titleEn:"Jesus Christ(3)continued"
	},
	{
		id:"0856a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(4)",
		titleEn:"Jesus Christ(4)"
	},
	{
		id:"0856b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(4)續",
		titleEn:"Jesus Christ(4)continued"
	},
	{
		id:"0857a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(5)",
		titleEn:"Jesus Christ(5)"
	},
	{
		id:"0857b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(5)續",
		titleEn:"Jesus Christ(5)continued"
	},
	{
		id:"0858a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(6)",
		titleEn:"Jesus Christ(6)"
	},
	{
		id:"0858b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(6)續",
		titleEn:"Jesus Christ(6)continued"
	},
	{
		id:"0859a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(7)",
		titleEn:"Jesus Christ(7)"
	},
	{
		id:"0859b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(7)續",
		titleEn:"Jesus Christ(7)continued"
	},
	{
		id:"0860a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(8)",
		titleEn:"Jesus Christ(8)"
	},
	{
		id:"0860b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(8)續",
		titleEn:"Jesus Christ(8)continued"
	},
	{
		id:"0861a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(9)",
		titleEn:"Jesus Christ(9)"
	},
	{
		id:"0861b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(9)續",
		titleEn:"Jesus Christ(9)continued"
	},
	{
		id:"0862a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(10)",
		titleEn:"Jesus Christ(10)"
	},
	{
		id:"0862b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(10)續",
		titleEn:"Jesus Christ(10)continued"
	},
	{
		id:"0863a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(11)",
		titleEn:"Jesus Christ(11)"
	},
	{
		id:"0863b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(11)續",
		titleEn:"Jesus Christ(11)continued"
	},
	{
		id:"0864a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(12)",
		titleEn:"Jesus Christ(12)"
	},
	{
		id:"0864b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(12)續",
		titleEn:"Jesus Christ(12)continued"
	},
	{
		id:"0865a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(13)",
		titleEn:"Jesus Christ(13)"
	},
	{
		id:"0865b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(13)續",
		titleEn:"Jesus Christ(13)continued"
	},
	{
		id:"0866a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso ",
		titleCn:"基督論(14)",
		titleEn:"Jesus Christ (14)"
	},
	{
		id:"0866b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso ",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"0867a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(15)",
		titleEn:"Jesus Christ(15)"
	},
	{
		id:"0867b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(15)續",
		titleEn:"Jesus Christ(15)continued"
	},
	{
		id:"0868a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(16)",
		titleEn:"Jesus Christ(16)"
	},
	{
		id:"0868b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(16)續",
		titleEn:"Jesus Christ(16)continued"
	},
	{
		id:"0869a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(17)",
		titleEn:"Jesus Christ(17)"
	},
	{
		id:"0869b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(17)續",
		titleEn:"Jesus Christ(17)continued"
	},
	{
		id:"0870a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(18)",
		titleEn:"Jesus Christ(18)"
	},
	{
		id:"0870b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(18)續",
		titleEn:"Jesus Christ(18)continued"
	},
	{
		id:"0871a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(19)",
		titleEn:"Jesus Christ(19)"
	},
	{
		id:"0871b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(19)續",
		titleEn:"Jesus Christ(19)continued"
	},
	{
		id:"0872a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"基督論(20)",
		titleEn:"Jesus Christ(20)"
	},
	{
		id:"0873a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(1)",
		titleEn:"Christian Church History(1)"
	},
	{
		id:"0873b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(1)續",
		titleEn:"Christian Church History(1)continued"
	},
	{
		id:"0874a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(2)",
		titleEn:"Christian Church History(2)"
	},
	{
		id:"0874b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(2)續",
		titleEn:"Christian Church History(2)continued"
	},
	{
		id:"0875a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(3)",
		titleEn:"Christian Church History(3)"
	},
	{
		id:"0875b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(3)續",
		titleEn:"Christian Church History(3)continued"
	},
	{
		id:"0876a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(4)",
		titleEn:"Christian Church History(4)"
	},
	{
		id:"0876b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(4)續",
		titleEn:"Christian Church History(4)continued"
	},
	{
		id:"0877a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(5)",
		titleEn:"Christian Church History(5)"
	},
	{
		id:"0877b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(5)續",
		titleEn:"Christian Church History(5)continued"
	},
	{
		id:"0878a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(6)",
		titleEn:"Christian Church History(6)"
	},
	{
		id:"0878b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(6)續",
		titleEn:"Christian Church History(6)continued"
	},
	{
		id:"0879a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(7)",
		titleEn:"Christian Church History(7)"
	},
	{
		id:"0879b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(7)續",
		titleEn:"Christian Church History(7)continued"
	},
	{
		id:"0880a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(8)",
		titleEn:"Christian Church History(8)"
	},
	{
		id:"0880b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(8)續",
		titleEn:"Christian Church History(8)continued"
	},
	{
		id:"0881a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(9)",
		titleEn:"Christian Church History(9)"
	},
	{
		id:"0881b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(9)續",
		titleEn:"Christian Church History(9)continued"
	},
	{
		id:"0882a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(10)",
		titleEn:"Christian Church History(10)"
	},
	{
		id:"0882b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(10)續",
		titleEn:"Christian Church History(10)continued"
	},
	{
		id:"0883a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(11)",
		titleEn:"Christian Church History(11)"
	},
	{
		id:"0883b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(11)續",
		titleEn:"Christian Church History(11)continued"
	},
	{
		id:"0884a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(12)",
		titleEn:"Christian Church History(12)"
	},
	{
		id:"0884b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(12)續",
		titleEn:"Christian Church History(12)continued"
	},
	{
		id:"0885a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(13)",
		titleEn:"Christian Church History(13)"
	},
	{
		id:"0885b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(13)續",
		titleEn:"Christian Church History(13)continued"
	},
	{
		id:"0886a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(14)",
		titleEn:"Christian Church History(14)"
	},
	{
		id:"0886b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(14)續",
		titleEn:"Christian Church History(14)continued"
	},
	{
		id:"0887a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(15)",
		titleEn:"Christian Church History(15)"
	},
	{
		id:"0887b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(15)續",
		titleEn:"Christian Church History(15)continued"
	},
	{
		id:"0888a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(16)",
		titleEn:"Christian Church History(16)"
	},
	{
		id:"0888b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(16)續",
		titleEn:"Christian Church History(16)continued"
	},
	{
		id:"0889a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(17)",
		titleEn:"Christian Church History(17)"
	},
	{
		id:"0889b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(17)續",
		titleEn:"Christian Church History(17)continued"
	},
	{
		id:"0890a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(18)",
		titleEn:"Christian Church History(18)"
	},
	{
		id:"0890b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(18)續",
		titleEn:"Christian Church History(18)continued"
	},
	{
		id:"0891a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(19)",
		titleEn:"Christian Church History(19)"
	},
	{
		id:"0891b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(19)續",
		titleEn:"Christian Church History(19)continued"
	},
	{
		id:"0892a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃彼得牧師",
		speakerEn:"nan",
		titleCn:"教會歷史(20)",
		titleEn:"Christian Church History(20)"
	},
	{
		id:"0893a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(1)",
		titleEn:"Song of life(1)  Wang-chuen-fong (1)"
	},
	{
		id:"0893b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(1續)",
		titleEn:"Song of life(1)  Wang-chuen-fong (1 continued)"
	},
	{
		id:"0894a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(2) ",
		titleEn:"Song of life(1)  Wang-chuen-fong(2)"
	},
	{
		id:"0894b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(2續)",
		titleEn:"Song of life(1)  Wang-chuen-fong(2 continued)"
	},
	{
		id:"0895a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(1)",
		titleEn:"Song of life(2)  Buh-leau-chyng(1)"
	},
	{
		id:"0895b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(1續)",
		titleEn:"Song of life(2)  Buh-leau-chyng(1 continued)"
	},
	{
		id:"0896a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(2)",
		titleEn:"Song of life(2)  Buh-leau-chyng(2)"
	},
	{
		id:"0896b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(2續)",
		titleEn:"Song of life(2)  Buh-leau-chyng(2 continued)"
	},
	{
		id:"0897a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(1)",
		titleEn:"Song of life(3)  Gau-shan-ching(1)"
	},
	{
		id:"0897b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(1續)",
		titleEn:"Song of life(3)  Gau-shan-ching(1 continued)"
	},
	{
		id:"0898a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:" 人生之歌(3)  高山青(2)",
		titleEn:"Song of life(3)  Gau-shan-ching(2)"
	},
	{
		id:"0898b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(2續)",
		titleEn:"Song of life(3)  Gau-shan-ching(2 continued)"
	},
	{
		id:"0899a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(1)",
		titleEn:"Song of life(4)  Si-jih-yau(1)"
	},
	{
		id:"0899b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(1續)",
		titleEn:"Song of life(4)  Si-jih-yau(1 continued)"
	},
	{
		id:"0900a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4) 四季謠(2)",
		titleEn:"Song of life(4)  Si-jih-yau(2)"
	},
	{
		id:"0900b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(2續)",
		titleEn:"Song of life(4)  Si-jih-yau(2 continued)"
	},
	{
		id:"0901a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(1)",
		titleEn:"Song of life(5)  Bu-poh-woang(1)"
	},
	{
		id:"0901b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(1續)",
		titleEn:"Song of life(5)  Bu-poh-woang(1 continued)"
	},
	{
		id:"0902a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(2)",
		titleEn:"Song of life(5)  Bu-poh-woang(2)"
	},
	{
		id:"0902b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(2續)",
		titleEn:"Song of life(5)  Bu-poh-woang(2 continued) "
	},
	{
		id:"0903a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(1)",
		titleEn:"Song of life(1)  Wang-chuen-fong(1)"
	},
	{
		id:"0903b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(1續)",
		titleEn:"Song of life(1)  Wang-chuen-fong(1 continued)"
	},
	{
		id:"0904a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(2)",
		titleEn:"Song of life(1)  Wang-chuen-fong(2)"
	},
	{
		id:"0904b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(1)  望春風(2續)",
		titleEn:"Song of life(1)  Wang-chuen-fong(2 continued)"
	},
	{
		id:"0905a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(1)",
		titleEn:"Song of life(2)  Buh-leau-chyng(1)"
	},
	{
		id:"0905b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(1續)",
		titleEn:"Song of life(2)  Buh-leau-chyng(1 continued)"
	},
	{
		id:"0906a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(2)",
		titleEn:"Song of life(2)  Buh-leau-chyng(2)"
	},
	{
		id:"0906b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(2)  不了情(2續)",
		titleEn:"Song of life(2)  Buh-leau-chyng(2 continued)"
	},
	{
		id:"0907a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(1)",
		titleEn:"Song of life(3)  Gau-shan-ching(1)"
	},
	{
		id:"0907b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(1續)",
		titleEn:"Song of life(3)  Gau-shan-ching(1 continued)"
	},
	{
		id:"0908a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(2)",
		titleEn:"Song of life(3)  Gau-shan-ching(2)"
	},
	{
		id:"0908b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(3)  高山青(2續)",
		titleEn:"Song of life(3)  Gau-shan-ching(2 continued)"
	},
	{
		id:"0909a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(1)",
		titleEn:"Song of life(4)  Si-jih-yau(1)"
	},
	{
		id:"0909b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:" 人生之歌(4)  四季謠(1續)",
		titleEn:"Song of life(4)  Si-jih-yau(1 continued)"
	},
	{
		id:"0910a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(2)",
		titleEn:"Song of life(4)  Si-jih-yau(2)"
	},
	{
		id:"0910b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(4)  四季謠(2續)",
		titleEn:"Song of life(4)  Si-jih-yau(2 continued)"
	},
	{
		id:"0911a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(1)",
		titleEn:"Song of life(5)  Bu-poh-woang(1)"
	},
	{
		id:"0911b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(1續)",
		titleEn:"Song of life(5)  Bu-poh-woang(1 continued)"
	},
	{
		id:"0912a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(2)",
		titleEn:"Song of life(5)  Bu-poh-woang(2)"
	},
	{
		id:"0912b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"台福傳播中心",
		speakerEn:"nan",
		titleCn:"人生之歌(5)  補破網(2續)",
		titleEn:"Song of life(5)  Bu-poh-woang(2 continued)"
	},
	{
		id:"0913a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 99-11",
		titleEn:"Voice of righteousness 99-11"
	},
	{
		id:"0913b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 99-11(續) ",
		titleEn:"Voice of righteousness 99-11(cont.)"
	},
	{
		id:"0914a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 99-12    ",
		titleEn:"Voice of righteousness 99-12"
	},
	{
		id:"0914b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 99-12(續) ",
		titleEn:"Voice of righteousness 99-12(cont.)"
	},
	{
		id:"0915a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-01  ",
		titleEn:"Voice of righteousness 00-01"
	},
	{
		id:"0915b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-01(續)",
		titleEn:"Voice of righteousness 00-01(cont.)"
	},
	{
		id:"0916a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-02    ",
		titleEn:"Voice of righteousness 00-02"
	},
	{
		id:"0916b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-02(續) ",
		titleEn:"Voice of righteousness 00-02(cont.)"
	},
	{
		id:"0917a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-03    ",
		titleEn:"Voice of righteousness 00-03"
	},
	{
		id:"0917b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"信義之音 00-03(續) ",
		titleEn:"Voice of righteousness 00-03(cont.)"
	},
	{
		id:"0918a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-14",
		titleEn:"Dessert for the soul 99-04-14"
	},
	{
		id:"0918b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-14(續)  ",
		titleEn:"Dessert for the soul 99-04-14 (continued)"
	},
	{
		id:"0919a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-21  ",
		titleEn:"Dessert for the soul 99-04-21"
	},
	{
		id:"0919b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-21(續)",
		titleEn:"Dessert for the soul 99-04-21 (continued)"
	},
	{
		id:"0920a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-28  ",
		titleEn:"Dessert for the soul 99-04-28"
	},
	{
		id:"0920b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-04-28(續)",
		titleEn:"Dessert for the soul 99-04-28 (continued)"
	},
	{
		id:"0921a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-05-05  ",
		titleEn:"Dessert for the soul 99-05-05"
	},
	{
		id:"0921b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"信義廣播中心",
		speakerEn:"nan",
		titleCn:"心靈小點心 99-05-05(續)",
		titleEn:"Dessert for the soul 99-05-05 (continued)"
	},
	{
		id:"0922a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友會會友見証(1)",
		titleEn:"Testimony from members of Good Friend Church"
	},
	{
		id:"0923b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良精牧師",
		speakerEn:"nan",
		titleCn:"良友會會友見証(2) ",
		titleEn:"Testimony from members of Good Friend Church"
	},
	{
		id:"0924a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(1) 擊敗沮喪之靈",
		titleEn:"Spiritual warfare(1) Spirit of defeating depression"
	},
	{
		id:"0924b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(1) 擊敗沮喪之靈(續)",
		titleEn:"Spiritual warfare(1) Spirit of defeating depression (cont.)"
	},
	{
		id:"0925a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(2) 擊敗貪婪之靈",
		titleEn:"Spiritual warfare(2) Spirit of defeating greed"
	},
	{
		id:"0925b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(2) 擊敗貪婪之靈(續)",
		titleEn:"Spiritual warfare(2) Spirit of defeating greed (cont.)"
	},
	{
		id:"0926a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(3) 擊敗謊言之靈",
		titleEn:"Spiritual warfare(3) Spirit of defeating lie"
	},
	{
		id:"0926b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(3) 擊敗謊言之靈(續)",
		titleEn:"Spiritual warfare(3) Spirit of defeating lie (continued)"
	},
	{
		id:"0927a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(4) 擊敗行邪術之靈",
		titleEn:"Spiritual warfare(4) Spirit of defeating the evil-doer"
	},
	{
		id:"0927b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"屬靈爭戰(4) 擊敗行邪術之靈(續)",
		titleEn:"Spiritual warfare(4) Spirit of defeating the evil-doer(cont)"
	},
	{
		id:"0928a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(1) 詩篇19篇 ",
		titleEn:"To be near to God(1) Psalms 19:"
	},
	{
		id:"0928b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(1) 詩篇19篇(續)",
		titleEn:"To be near to God(1) Psalms 19: (continued)"
	},
	{
		id:"0929a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(2) 詩篇16篇",
		titleEn:"To be near to God(2) Psalms 16:"
	},
	{
		id:"0929b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(2) 詩篇16篇(續)",
		titleEn:"To be near to God(2) Psalms 16: (continued)"
	},
	{
		id:"0930a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(3) 詩篇27篇",
		titleEn:"To be near to God(3) Psalms 27:"
	},
	{
		id:"0930b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(3) 詩篇27篇(續)",
		titleEn:"To be near to God(3) Psalms 27: (continued)"
	},
	{
		id:"0931a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(4) 詩篇32篇",
		titleEn:"To be near to God(4) Psalms 32:"
	},
	{
		id:"0931b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"親近神(4) 詩篇32篇(續)",
		titleEn:"To be near to God(4) Psalms 32: (continued)"
	},
	{
		id:"0932a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"在危機中的力量 ",
		titleEn:"Strength in the crisis"
	},
	{
		id:"0932b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"在危機中的力量(續) ",
		titleEn:"Strength in the crisis (continued)"
	},
	{
		id:"0933a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"在危機中的成長 ",
		titleEn:"Growth in the crisis "
	},
	{
		id:"0933b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"nan",
		titleCn:"在危機中的成長(續) ",
		titleEn:"Growth in the crisis (continued)"
	},
	{
		id:"0934b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（一）在基督裡的美(續)",
		titleEn:"1988 Mother's Spiritual retreat(一) colossians Beauty in Christ (continued)"
	},
	{
		id:"0935a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（二）在基督裡的美",
		titleEn:"1988 Mother's Spiritual retreat(二) colossians Beauty in Christ"
	},
	{
		id:"0935b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（二）在基督裡的美(續)",
		titleEn:"1988 Mother's Spiritual retreat(二) colossians Beauty in Christ (continued)"
	},
	{
		id:"0936a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（三）在基督裡的美",
		titleEn:"1988 Mother's Spiritual retreat(三) colossians Beauty in Christ"
	},
	{
		id:"0936b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（三）在基督裡的美(續)",
		titleEn:"1988 Mother's Spiritual retreat(三) colossians Beauty in Christ (continued)"
	},
	{
		id:"0937a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（四）在基督裡的美",
		titleEn:"1988 Mother's Spiritual retreat(四) colossians Beauty in Christ"
	},
	{
		id:"0937b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（四）在基督裡的美(續)",
		titleEn:"1988 Mother's Spiritual retreat(四) colossians Beauty in Christ (continued)"
	},
	{
		id:"0938a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（五）在基督裡的美",
		titleEn:"1988 Mother's Spiritual retreat(五) colossians Beauty in Christ"
	},
	{
		id:"0938b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1988媽媽靈修會：歌羅西書（五）在基督裡的美(續)",
		titleEn:"1988 Mother's Spiritual retreat(五) colossians Beauty in Christ (continued)"
	},
	{
		id:"0939a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（一）",
		titleEn:"1991 Mother's Spiritual Ephesians(一)"
	},
	{
		id:"0939b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（一）(續)",
		titleEn:"1991 Mother's Spiritual Ephesians(一) (continued)"
	},
	{
		id:"0940a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（二）",
		titleEn:"1991 Mother's Spiritual Ephesians(二)"
	},
	{
		id:"0940b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（二）(續)",
		titleEn:"1991 Mother's Spiritual Ephesians(二) (continued)"
	},
	{
		id:"0941a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（三）",
		titleEn:"1991 Mother's Spiritual Ephesians(三)"
	},
	{
		id:"0941b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1991媽媽靈修會：以弗所1-3章（三）(續)",
		titleEn:"1991 Mother's Spiritual Ephesians(三) (continued)"
	},
	{
		id:"0942a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（一）認識自己",
		titleEn:"1995 Mother's Spiritual (一)To Know yourself"
	},
	{
		id:"0942b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（一）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (一)To Know yourself (continued)"
	},
	{
		id:"0943a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（二）認識自己",
		titleEn:"1995 Mother's Spiritual (二)To Know yourself"
	},
	{
		id:"0943b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（二）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (二)To Know yourself (continued)"
	},
	{
		id:"0944a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（三）認識自己",
		titleEn:"1995 Mother's Spiritual (三)To Know yourself"
	},
	{
		id:"0944b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（三）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (三)To Know yourself (continued)"
	},
	{
		id:"0945a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（四）認識自己",
		titleEn:"1995 Mother's Spiritual (四)To Know yourself"
	},
	{
		id:"0945b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（四）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (四)To Know yourself (continued)"
	},
	{
		id:"0946a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（五）認識自己",
		titleEn:"1995 Mother's Spiritual (五)To Know yourself"
	},
	{
		id:"0946b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（五）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (五)To Know yourself (continued)"
	},
	{
		id:"0947a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（六）認識自己",
		titleEn:"1995 Mother's Spiritual (六)To Know yourself"
	},
	{
		id:"0947b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1995媽媽靈修會（六）認識自己(續)",
		titleEn:"1995 Mother's Spiritual (六)To Know yourself (continued)"
	},
	{
		id:"0948a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"報佳音(一)以賽亞9:1-7",
		titleEn:"Good News to you(一)Isaiah"
	},
	{
		id:"0948b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"報佳音(一)以賽亞9:1-7(續)",
		titleEn:"Good News to you(一)Isaiah (continued)"
	},
	{
		id:"0949a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"報佳音(二)以賽亞9:6-7",
		titleEn:"Good News to you(二)Isaiah"
	},
	{
		id:"0949b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"報佳音(二)以賽亞9:6-7(續)",
		titleEn:"Good News to you(二)Isaiah (continued)"
	},
	{
		id:"0950a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(一)可1:9-20",
		titleEn:"Investment of Life"
	},
	{
		id:"0950b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(一)可1:9-20(續)",
		titleEn:"Investment of Life (continued)"
	},
	{
		id:"0951a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(二)太16:13-26",
		titleEn:"Investment of Life"
	},
	{
		id:"0951b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(二)太16:13-26(續)",
		titleEn:"Investment of Life (continued)"
	},
	{
		id:"0952a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"奉耶穌基督之名(一)徒4:8-31",
		titleEn:"In the name of Jesus Christ at4:8-31"
	},
	{
		id:"0952b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"奉耶穌基督之名(一)徒4:8-31(續)",
		titleEn:"In the name of Jesus Christ at4:8-31 (continued)"
	},
	{
		id:"0953a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"奉耶穌基督之名(二)徒4:36,5：16",
		titleEn:"In the name of Jesus Christ at4:36,5:16"
	},
	{
		id:"0953b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"奉耶穌基督之名(二)徒4:36,5：16(續)",
		titleEn:"In the name of Jesus Christ at4:36,5:16 (continued)"
	},
	{
		id:"0954a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"聆聽十字架上主的聲音(一)路23:18-49",
		titleEn:"Listening to the voice of the Lord who's on the cross"
	},
	{
		id:"0954b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"聆聽十字架上主的聲音(一)路23:18-49(續)",
		titleEn:"Listening to the voice of the Lord who's on the cross (continued)"
	},
	{
		id:"0955a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"聆聽復活主的聲音(二)約21:1-14",
		titleEn:"Listening to the voice of resurrected Lord"
	},
	{
		id:"0955b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"聆聽復活主的聲音(二)約21:1-14(續)",
		titleEn:"Listening to the voice of resurrected Lord (continued)"
	},
	{
		id:"0956a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"建立神同在的氣:和平 腓4:6-9",
		titleEn:"To build a mood of  living with God's peace"
	},
	{
		id:"0956b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"建立神同在的氣:和平 腓4:6-9(續)",
		titleEn:"To build a mood of  living with God's peace (continued)"
	},
	{
		id:"0957a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"建立神同在的家庭氣氛:愛 林前13:4-12",
		titleEn:"To build a mood of  family living with God's Love"
	},
	{
		id:"0958a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"建立神同在的氣氛:喜樂",
		titleEn:"To build a mood of family living with God's Toy"
	},
	{
		id:"0958b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"建立神同在的氣氛:喜樂(續)",
		titleEn:"To build a mood of family living with God's Toy (continued)"
	},
	{
		id:"0959a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"差遣他們出去(一)可 6:1-12",
		titleEn:"To send them out"
	},
	{
		id:"0959b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"差遣他們出去(一)可 6:1-12(續)",
		titleEn:"To send them out (continued)"
	},
	{
		id:"0960a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"差遣他們出去(二)可 6:30-44",
		titleEn:"To send them out"
	},
	{
		id:"0960b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"差遣他們出去(二)可 6:30-44(續)",
		titleEn:"To send them out (continued)"
	},
	{
		id:"0961a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(一)路18:35-43",
		titleEn:"Jesus has come"
	},
	{
		id:"0961b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(一)路18:35-43(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0962a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(二)路19:1-10",
		titleEn:"Jesus has come"
	},
	{
		id:"0962b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(二)路19:1-10(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0963a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(三)路19:11-27",
		titleEn:"Jesus has come"
	},
	{
		id:"0963b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(三)路19:11-27(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0964a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(一)路18:35-43",
		titleEn:"Jesus has come"
	},
	{
		id:"0964b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(一)路18:35-43(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0965a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(二)路19:1-10",
		titleEn:"Jesus has come"
	},
	{
		id:"0965b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(二)路19:1-10(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0966a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(三)路19:11-27",
		titleEn:"Jesus has come"
	},
	{
		id:"0966b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌來了(三)路19:11-27(續)",
		titleEn:"Jesus has come (continued)"
	},
	{
		id:"0967a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌與苦難(一)路19:28-44",
		titleEn:"Jesus and suffering"
	},
	{
		id:"0967b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌與苦難(一)路19:28-44(續)",
		titleEn:"Jesus and suffering (continued)"
	},
	{
		id:"0968a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌與苦難(二)路23:34,44-49",
		titleEn:"Jesus and suffering"
	},
	{
		id:"0968b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"耶穌與苦難(二)路23:34,44-49(續)",
		titleEn:"Jesus and suffering (continued)"
	},
	{
		id:"0969a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"我與世界-餵養我的羊約21:1-17",
		titleEn:"I and the world -to feed my sheep"
	},
	{
		id:"0969b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"我與世界-餵養我的羊約21:1-17(續)",
		titleEn:"I and the world -to feed my sheep (continued)"
	},
	{
		id:"0970a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"你能經歷神(三)王上19:1-18",
		titleEn:"You can feel God"
	},
	{
		id:"0970b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"你能經歷神(三)王上19:1-18(續)",
		titleEn:"You can feel God (continued)"
	},
	{
		id:"0971a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的分享:母愛 賽49:15-18",
		titleEn:"Sharing of life:Mother's Love"
	},
	{
		id:"0971b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的分享:母愛 賽49:15-18(續)",
		titleEn:"Sharing of life:Mother's Love (continued)"
	},
	{
		id:"0972a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資:天職 羅12:1-16",
		titleEn:"Investment of life:God's ordination"
	},
	{
		id:"0972b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資:天職 羅12:1-16(續)",
		titleEn:"Investment of life:God's ordination (continued)"
	},
	{
		id:"0973a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的完整:靈魂體 貼前5:15-24",
		titleEn:"Integral of life:Spirit,soul and body"
	},
	{
		id:"0973b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的完整:靈魂體 貼前5:15-24(續)",
		titleEn:"Integral of life:Spirit,soul and body (continued)"
	},
	{
		id:"0974a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命熱火為主燃 行傳22:1-21",
		titleEn:"Life burning for the Lord"
	},
	{
		id:"0974b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命熱火為主燃 行傳22:1-21(續)",
		titleEn:"Life burning for the Lord (continued)"
	},
	{
		id:"0975a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"人生旅途  詩90",
		titleEn:"Travel of life"
	},
	{
		id:"0975b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"人生旅途  詩90(續)",
		titleEn:"Travel of life (continued)"
	},
	{
		id:"0976a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"亞當的沈默 創1:26-28,3:1-13",
		titleEn:"Silence of Adam"
	},
	{
		id:"0976b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"亞當的沈默 創1:26-28,3:1-13(續)",
		titleEn:"Silence of Adam (continued)"
	},
	{
		id:"0977a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"母親你是蒙福的 出2:1-10",
		titleEn:"Mother you are blessed"
	},
	{
		id:"0977b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"母親你是蒙福的 出2:1-10(續)",
		titleEn:"Mother you are blessed (continued)"
	},
	{
		id:"0978a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"蒙福家庭的根基 提後1:1-14",
		titleEn:"Foundation of blessed family"
	},
	{
		id:"0978b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"蒙福家庭的根基 提後1:1-14(續)",
		titleEn:"Foundation of blessed family (continued)"
	},
	{
		id:"0979a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.英雄的預備",
		titleEn:"A. Preparation of a hero"
	},
	{
		id:"0979b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0980a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.工人與工作",
		titleEn:"A.Worker and Work"
	},
	{
		id:"0980b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0981a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.致命的吸引力87.4.5",
		titleEn:"A. Fatal attraction"
	},
	{
		id:"0981b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0982a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.英雄本色86.4.19",
		titleEn:"A. Real character of a hero"
	},
	{
		id:"0982b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0983a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.福音的傳人86.04.27",
		titleEn:"A. The inherent man of the Gospel"
	},
	{
		id:"0983b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0984a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.解剖大人物86.08.31",
		titleEn:"A. Anatomy of great people"
	},
	{
		id:"0984b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0985a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.捆綁的愛88.04.11",
		titleEn:"A. Love of binding"
	},
	{
		id:"0985b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0986a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.驚天動地的震撼89.04.23",
		titleEn:"A. Astonished"
	},
	{
		id:"0986b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0987a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.個性與靈性89.08.06",
		titleEn:"A. Character and spirituality"
	},
	{
		id:"0987b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0988a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.權威與權位95.12",
		titleEn:"A. Authority and Power"
	},
	{
		id:"0988b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0989a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.危險的任務98.05.20",
		titleEn:"A. Mission of danger"
	},
	{
		id:"0989b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0990a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.危險的禱告98.06.28",
		titleEn:"A. Prayer in danger"
	},
	{
		id:"0990b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0991a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.危險的試探99.08.08",
		titleEn:"A. Risk of temptation"
	},
	{
		id:"0991b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0992a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.危險的愛98.06.28",
		titleEn:"A. Risk of love"
	},
	{
		id:"0992b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0993a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.危險的事奉",
		titleEn:"A. Risk of service"
	},
	{
		id:"0993b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0994a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.另一類的接觸99.02.28",
		titleEn:"A. Another encounter"
	},
	{
		id:"0994b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0995a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.跨世紀之音-康華 賽40:  99.10.3",
		titleEn:"A. Voice of leaping centuries"
	},
	{
		id:"0995b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0996a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.跨世紀的傳聲器",
		titleEn:"A. Microphone of leaping centuries"
	},
	{
		id:"0996b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0997a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.救傳培靈-跟隨基督(1)98.04.30",
		titleEn:"A. Spiritual redemption-following Christ"
	},
	{
		id:"0997b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"0998a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.救傳培靈-跟隨基督(2)98.04.30",
		titleEn:"A. Spiritual redemption-following Christ"
	},
	{
		id:"0999a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.救傳培靈-跟隨基督(3)98.05.01",
		titleEn:"A. Spiritual redemption-following Christ"
	},
	{
		id:"0999b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1000a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.救傳培靈-跟隨基督(4)98.05.01",
		titleEn:"A. Spiritual redemption-following Christ"
	},
	{
		id:"1000b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1001a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的接觸(1)",
		titleEn:"A. Different encounter"
	},
	{
		id:"1001b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1002a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的溝通(2)",
		titleEn:"A. Different communication"
	},
	{
		id:"1002b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1003a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的安慰(3)",
		titleEn:"A. Different comfort"
	},
	{
		id:"1003b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1004a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的家庭(4)",
		titleEn:"A. Different family"
	},
	{
		id:"1004b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1005a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的傳道(5)",
		titleEn:"A. Different preaching of the Gospel"
	},
	{
		id:"1005b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1006a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.不一樣的聲音(6)",
		titleEn:"A. Different Voice"
	},
	{
		id:"1006b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1009a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.心靈捕手(1)",
		titleEn:"A. Spiritual captor"
	},
	{
		id:"1009b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1010a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.心靈捕手(2)",
		titleEn:"A. Spiritual captor"
	},
	{
		id:"1010b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1011a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.循理會婦女靈修會-生命成長(哈巴谷書)",
		titleEn:"A. Methodist women spiritual meeting-the growth of life "
	},
	{
		id:"1011b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1012a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.循理會北區婦女靈修會",
		titleEn:"A. Methodist women spiritual meeting "
	},
	{
		id:"1012b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1013a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.循理會北區婦女靈修會",
		titleEn:"A. Methodist women spiritual meeting "
	},
	{
		id:"1013b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1014a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.基督之家第五家-跨世紀的工人",
		titleEn:"A. Christ family-family number 5-Worker of leaping centuries"
	},
	{
		id:"1014b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1015a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.基督之家第五家-跨世紀的家庭",
		titleEn:"A. Christ family-family number 5-Family of leaping centuries"
	},
	{
		id:"1015b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1016a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.基督之家第五家-跨世紀的教會",
		titleEn:"A. Christ family-family number 5-Church of leaping centuries"
	},
	{
		id:"1016b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1017a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.時權造英雄(1)",
		titleEn:"A. Hero made by Time"
	},
	{
		id:"1018a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.個性與靈性(2)",
		titleEn:"A. Character and spirituality"
	},
	{
		id:"1018b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1019a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.其實你不懂我的心(3)",
		titleEn:"A. Actually you don't know what I mean"
	},
	{
		id:"1019b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1020a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.有感染力教會(4)",
		titleEn:"A. Church with power"
	},
	{
		id:"1020b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1021a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.活出生命的色彩(傳12:)",
		titleEn:"A. Live out the colors of life"
	},
	{
		id:"1021b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1022a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.價格與價值",
		titleEn:"A. Price and Value"
	},
	{
		id:"1023a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.父親的背影(大衛)",
		titleEn:"A. Shadow of a father"
	},
	{
		id:"1023b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1024a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.無顏見江東父老",
		titleEn:"A. Shame to see one's kin"
	},
	{
		id:"1024b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1025a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.感恩的捆綁",
		titleEn:"A. Bandage of thanks"
	},
	{
		id:"1025b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1026a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.那撫摸生命琴弦的手",
		titleEn:"A. Hand which touched life's string"
	},
	{
		id:"1027a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.一位母親的哭泣",
		titleEn:"A. Crying of a mother"
	},
	{
		id:"1027b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1029a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.我就是這樣長大的-給沙法",
		titleEn:"A. I grew up this way-King Jehoshaphat"
	},
	{
		id:"1029b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1030a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.奇妙的接觸",
		titleEn:"A. Wonderful encounter"
	},
	{
		id:"1030b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1031a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.大人物的落敗",
		titleEn:"A. Fall of famous people"
	},
	{
		id:"1031b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1032a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(1)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1032b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1033a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(2)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1033b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1034a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(3)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1034b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1035a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(4)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1035b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1036a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(5)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1036b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1037a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.舊約歷史(6)",
		titleEn:"A. History of the old Testament"
	},
	{
		id:"1037b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1038a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(1)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1038b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1039a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(2)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1039b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1040a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(3)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1040b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1041a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(4)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1041b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1042a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(5)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1042b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1043a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.詩歌智慧書(6)",
		titleEn:"A. Hymnal wisdom book"
	},
	{
		id:"1044a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(1)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1044b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1045a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(2)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1045b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1046a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(3)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1046b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1047a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(4)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1047b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1048a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(5)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1048b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1049a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.阿摩司書(6)",
		titleEn:"A. Book of Amos"
	},
	{
		id:"1049b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1050a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(1)",
		titleEn:"A. Revelation"
	},
	{
		id:"1050b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1051a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(2)",
		titleEn:"A. Revelation"
	},
	{
		id:"1051b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1052a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(3)",
		titleEn:"A. Revelation"
	},
	{
		id:"1052b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1053a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(4)",
		titleEn:"A. Revelation"
	},
	{
		id:"1053b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1054a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(5)",
		titleEn:"A. Revelation"
	},
	{
		id:"1054b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1055a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(6)",
		titleEn:"A. Revelation"
	},
	{
		id:"1055b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1056a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"A.啟示錄(7)",
		titleEn:"A. Revelation"
	},
	{
		id:"1056b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu. Ph. D.",
		titleCn:"B.續",
		titleEn:"B. continued"
	},
	{
		id:"1057a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.饒恕",
		titleEn:"A. Forgiveness "
	},
	{
		id:"1057b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(太6:9-15)",
		titleEn:"B. continued"
	},
	{
		id:"1058a",
		lang:"Taiwanese/Chinese",
		langCn:"台語/華語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.人生的重擔與安息",
		titleEn:"A. Burden and the Rest of Life"
	},
	{
		id:"1058b",
		lang:"Taiwanese/Chinese",
		langCn:"台語/華語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(敬拜讚美團)(太11:28-29)",
		titleEn:"B. continued"
	},
	{
		id:"1059a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.慢慢的動怒",
		titleEn:"A. Slow to Anger"
	},
	{
		id:"1059b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(雅各1:19-21)",
		titleEn:"B. continued"
	},
	{
		id:"1060a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.聖靈隆臨必得著能力",
		titleEn:"A. Receiving Power when the Holy Spirit Comes"
	},
	{
		id:"1060b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(徒1:8 2:1-4 37-47)",
		titleEn:"B. continued"
	},
	{
		id:"1061a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.與你的上帝同行",
		titleEn:"A. Walk with God"
	},
	{
		id:"1061b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(彌迦6:6-8)",
		titleEn:"B. continued"
	},
	{
		id:"1062a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"A.作所有信主之人的榜樣",
		titleEn:"A. Be Example to All Believers"
	},
	{
		id:"1062b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳獻平牧師",
		speakerEn:"Rev. Hsien-ping Chen",
		titleCn:"B.續(帖前1:2-10)",
		titleEn:"B. continued"
	},
	{
		id:"1063a",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語聖歌(一)A.",
		titleEn:"A. Taiwanese Hymn"
	},
	{
		id:"1063b",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語聖歌(一)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1064a",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語新聖詩(二)A.",
		titleEn:"A. Taiwanese New Hymn"
	},
	{
		id:"1064b",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語新聖詩(二)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1065a",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語新選集(三)A.",
		titleEn:"A. Taiwanese New Hymn"
	},
	{
		id:"1065b",
		lang:"nan",
		langCn:"台/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"台語新選集(三)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1066a",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語萬民頌揚(一)A.",
		titleEn:"A. Chinese All People Song's Ringing"
	},
	{
		id:"1066b",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語萬民頌揚(一)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1067a",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語生命聖詩(二)A.",
		titleEn:"A. Chinese Life Hymn"
	},
	{
		id:"1067b",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語生命聖詩(二)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1068a",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語聖誕專集(三)A.",
		titleEn:"A. Chinese Christmas Songs "
	},
	{
		id:"1068b",
		lang:"nan",
		langCn:"華/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"華語聖誕專集(三)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1069a",
		lang:"nan",
		langCn:"日/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"日本聖歌(一)A.",
		titleEn:"A. Japanese Hymn"
	},
	{
		id:"1069b",
		lang:"nan",
		langCn:"日/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"日本聖歌(一)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1070a",
		lang:"nan",
		langCn:"日/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"日本讚美歌(二)A.",
		titleEn:"A. Japanese Worship and Praise"
	},
	{
		id:"1070b",
		lang:"nan",
		langCn:"日/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"日本讚美歌(二)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1071a",
		lang:"nan",
		langCn:"英/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"英語聖誕專輯A.",
		titleEn:"A. English Christmas Album"
	},
	{
		id:"1071b",
		lang:"nan",
		langCn:"英/唱",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"英語聖誕專輯B.續",
		titleEn:"B. continued"
	},
	{
		id:"1072a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(一)A.榮耀的顯像",
		titleEn:"Matthew (一)A.The Image of Glory"
	},
	{
		id:"1072b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(一)B愛心與信心",
		titleEn:"Matthew (一) B.Love and Faith"
	},
	{
		id:"1073a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(二)A.饒恕",
		titleEn:"Matthew (二)A.Forgiveness"
	},
	{
		id:"1073b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(二)B財富",
		titleEn:"Matthew (二) B.Treasures"
	},
	{
		id:"1074a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(三)A前後",
		titleEn:"Matthew (三)A.Before & after"
	},
	{
		id:"1074b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"馬太福音系列(三)B大小",
		titleEn:"Matthew (三) B.Great & Little"
	},
	{
		id:"1075a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的生活A.",
		titleEn:"A. May your Kingdom come in the midst of my Life"
	},
	{
		id:"1075b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的生活B續",
		titleEn:"B. continued"
	},
	{
		id:"1076a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的事奉A.",
		titleEn:"A. May your Kingdom come in my ministry"
	},
	{
		id:"1076b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的事奉B續",
		titleEn:"B. continued"
	},
	{
		id:"1077a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的生涯A.",
		titleEn:"A. May your Kingdom come in my Career"
	},
	{
		id:"1077b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在我的生涯B續",
		titleEn:"B. continued"
	},
	{
		id:"1078a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在各城各鄉A.",
		titleEn:"A. May your Kingdom come in Town & City"
	},
	{
		id:"1078b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨在各城各鄉B續",
		titleEn:"B. continued"
	},
	{
		id:"1079a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨A.",
		titleEn:"A. May your Kingdom come "
	},
	{
		id:"1079b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"夏忠堅牧師",
		speakerEn:"Rev. C. C. Shia",
		titleCn:"願你的國降臨B續",
		titleEn:"B. continued"
	},
	{
		id:"1080a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的生活(一)A.",
		titleEn:"A. May your Kingdom come in my life "
	},
	{
		id:"1080b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的生活(一)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1081a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的事奉A.",
		titleEn:"A. May your Kingdom come in my ministry"
	},
	{
		id:"1081b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的事奉B續",
		titleEn:"B. continued"
	},
	{
		id:"1082a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的生涯A.",
		titleEn:"A. May your Kingdom come in my Career"
	},
	{
		id:"1082b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在我的生涯B續",
		titleEn:"B. continued"
	},
	{
		id:"1083a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在各城各鄰A.",
		titleEn:"A. May your Kingdom come in Town & City"
	},
	{
		id:"1083b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨在各城各鄰B續",
		titleEn:"B. continued"
	},
	{
		id:"1084a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨=追求認識主(一)A.",
		titleEn:"A. May your Kingdom come - Pursue Knowing God "
	},
	{
		id:"1084b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. L. F. Tseng",
		titleCn:"願你的國降臨=追求認識主(一)B.續",
		titleEn:"B. continued"
	},
	{
		id:"1085a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"定意尋求神的面A.",
		titleEn:"A. Determined Seeking the Face of God"
	},
	{
		id:"1085b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"定意尋求神的面B.續",
		titleEn:"B. continued"
	},
	{
		id:"1086a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"教會如何得著復興A.",
		titleEn:"A. How the Church Be Revived"
	},
	{
		id:"1086b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"教會如何得著復興B.續",
		titleEn:"B. continued"
	},
	{
		id:"1087a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"詹正義牧師",
		speakerEn:"Rev. Silas Chan",
		titleCn:"與神一同作王A.",
		titleEn:"A. Crown the Lord"
	},
	{
		id:"1087b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"詹正義牧師",
		speakerEn:"Rev. Silas Chan",
		titleCn:"與神一同作王B.續",
		titleEn:"B. continued"
	},
	{
		id:"1088a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"遇見耶和華軍隊的元帥",
		titleEn:"A. Meet the General of Jehovah's Army"
	},
	{
		id:"1089a",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"鶼鰈情深-情愛的培養A.",
		titleEn:"A. Love for Intimacy-the Cultivation of Love"
	},
	{
		id:"1089b",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"鶼鰈情深-情愛的培養B.續",
		titleEn:"B. continued"
	},
	{
		id:"1090a",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"祝福兒女的藝術A.",
		titleEn:"A. Art of Blessing Children"
	},
	{
		id:"1090b",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"祝福兒女的藝術B.續",
		titleEn:"B. continued"
	},
	{
		id:"1091a",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"教養青春期兒女的妙招A",
		titleEn:"A. The Way to Train up Teenagers"
	},
	{
		id:"1091b",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"教養青春期兒女的妙招B.續",
		titleEn:"B. continued"
	},
	{
		id:"1092a",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"美化夫婦間的溝通A.",
		titleEn:"A. Wonderful Communication of Husband and Wife"
	},
	{
		id:"1092b",
		lang:"English/Taiwanese",
		langCn:"華/台語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. S. C. Lee",
		titleCn:"美化夫婦間的溝通B.續",
		titleEn:"B. continued"
	},
	{
		id:"1100a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"nan",
		titleCn:"如何增進人際的關係A.",
		titleEn:"A. How to improve the interpersonal relationship"
	},
	{
		id:"1101a",
		lang:"Taiwanese",
		langCn:"台/唱 ",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"願你平安",
		titleEn:"Peace be with you"
	},
	{
		id:"1101b",
		lang:"Taiwanese",
		langCn:"台/唱 ",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1102a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Common Christian sayings"
	},
	{
		id:"1102b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1103a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 1:1-18"
	},
	{
		id:"1103b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1104a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 1:19-27"
	},
	{
		id:"1104b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1105a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 2:1 to 3:1"
	},
	{
		id:"1105b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1106a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 3:2 to 4:2"
	},
	{
		id:"1106b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1107a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 4:3-17"
	},
	{
		id:"1107b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1108a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"James 5:1-20"
	},
	{
		id:"1108b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1109a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"A radical way, radical life"
	},
	{
		id:"1109b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1110a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Fret not"
	},
	{
		id:"1110b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Rev. Ronald Pope",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"1111a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:" 黃文雄醫師",
		speakerEn:"Luke Huang MD",
		titleCn:"聖經的形成",
		titleEn:"The formation of the Bible"
	},
	{
		id:"1111b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:" 黃文雄醫師",
		speakerEn:"Luke Huang MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1112a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"主啊! 領我到豐盛(1)",
		titleEn:"Oh! Lord! Lead me into abundance(1)"
	},
	{
		id:"1112b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1113a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"主啊! 領我到豐盛(2)",
		titleEn:"Oh! Lord! Lead me into abundance(2)"
	},
	{
		id:"1113b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1114a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"主啊! 領我到豐盛(3)",
		titleEn:"Oh! Lord! Lead me into abundance(3)"
	},
	{
		id:"1114b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1115a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"主啊! 領我到豐盛(4)",
		titleEn:"Oh! Lord! Lead me into abundance(4)"
	},
	{
		id:"1115b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1116a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會--為我骨肉之親(1)",
		titleEn:"1990 EFC Retreat for my kinsmen sake(1)"
	},
	{
		id:"1116b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1117a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會--為我骨肉之親(2)",
		titleEn:"1990 EFC Retreat for my kinsmen sake(2)"
	},
	{
		id:"1117b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1118a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會--為我骨肉之親(3)",
		titleEn:"1990 EFC Retreat for my kinsmen sake(3)"
	},
	{
		id:"1118b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1119a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會--為我骨肉之親(4)",
		titleEn:"1990 EFC Retreat for my kinsmen sake(4)"
	},
	{
		id:"1119b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1120a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會--為我骨肉之親(5)",
		titleEn:"1990 EFC Retreat for my kinsmen sake(5)"
	},
	{
		id:"1120b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1121a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(1)",
		titleEn:"Question and Answer (1)"
	},
	{
		id:"1121b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1122a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(2)",
		titleEn:"Question and Answer (2)"
	},
	{
		id:"1122b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:" 唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1123a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:" 查經(1)",
		titleEn:"Bible Study(1)"
	},
	{
		id:"1123b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1124a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:" 查經(2)",
		titleEn:"Bible Study(2)"
	},
	{
		id:"1124b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1125a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"在愛中建造(1)",
		titleEn:"Building up in love(1)"
	},
	{
		id:"1125b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1126a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"在愛中建造(2)",
		titleEn:"Building up in love(2)"
	},
	{
		id:"1126b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1127a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"在愛中建造(3)",
		titleEn:"Building up in love(3)"
	},
	{
		id:"1127b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1128a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"在愛中建造(4)",
		titleEn:"Building up in love(4)"
	},
	{
		id:"1128b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1129a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"在愛中建造(5)",
		titleEn:"Building up in love(5)"
	},
	{
		id:"1129b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1130a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(1)",
		titleEn:"Question and Answer (1)"
	},
	{
		id:"1130b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1131a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(2)",
		titleEn:"Question and Answer (2)"
	},
	{
		id:"1131b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1132a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"耶穌的讀經生活(1)",
		titleEn:"The devotional life of Jesus Christ(1)"
	},
	{
		id:"1132b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1133a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"耶穌的讀經生活(2)",
		titleEn:"The devotional life of Jesus Christ(2)"
	},
	{
		id:"1133b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃彼得牧師",
		speakerEn:"Rev. Peter Wongso",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1134a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(1)",
		titleEn:"Authority of the Bible(1)"
	},
	{
		id:"1134b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1135a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(2)",
		titleEn:"Authority of the Bible(2)"
	},
	{
		id:"1135b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1136a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(3)",
		titleEn:"Authority of the Bible(3)"
	},
	{
		id:"1136b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1137a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(4)",
		titleEn:"Authority of the Bible(4)"
	},
	{
		id:"1137b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1138a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(5)",
		titleEn:"Authority of the Bible(5)"
	},
	{
		id:"1138b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1139a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(6)",
		titleEn:"Authority of the Bible(6)"
	},
	{
		id:"1139b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1140a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(7)",
		titleEn:"Authority of the Bible(7)"
	},
	{
		id:"1140b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1141a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(8)",
		titleEn:"Authority of the Bible(8)"
	},
	{
		id:"1141b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1142a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(9)",
		titleEn:"Authority of the Bible(9)"
	},
	{
		id:"1142b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1143a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"聖經的權威(10)",
		titleEn:"Authority of the Bible(10)"
	},
	{
		id:"1143b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1144a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(1)",
		titleEn:"Biblical interpretation(1)"
	},
	{
		id:"1144b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1145a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(2)",
		titleEn:"Biblical interpretation(2)"
	},
	{
		id:"1145b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1146a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(3)",
		titleEn:"Biblical interpretation(3)"
	},
	{
		id:"1146b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1147a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(4)",
		titleEn:"Biblical interpretation(4)"
	},
	{
		id:"1147b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1148a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(5)",
		titleEn:"Biblical interpretation(5)"
	},
	{
		id:"1148b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1149a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(6)",
		titleEn:"Biblical interpretation(6)"
	},
	{
		id:"1149b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1150a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(7)",
		titleEn:"Biblical interpretation(7)"
	},
	{
		id:"1150b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1151a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(8)",
		titleEn:"Biblical interpretation(8)"
	},
	{
		id:"1151b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1152a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(9)",
		titleEn:"Biblical interpretation(9)"
	},
	{
		id:"1152b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1153a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(10)",
		titleEn:"Biblical interpretation(10)"
	},
	{
		id:"1153b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1154a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(11)",
		titleEn:"Biblical interpretation(11)"
	},
	{
		id:"1154b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1155a",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"解經原則(12)",
		titleEn:"Biblical interpretation(12)"
	},
	{
		id:"1155b",
		lang:"English/Chinese",
		langCn:" 英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1156a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(1)",
		titleEn:"Questions and Answers(1)"
	},
	{
		id:"1156b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1157a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(2)",
		titleEn:"Questions and Answers(2)"
	},
	{
		id:"1157b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1158a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(3)",
		titleEn:"Questions and Answers(3)"
	},
	{
		id:"1158b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1159a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(4)",
		titleEn:"Questions and Answers(4)"
	},
	{
		id:"1159b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1160a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(5)",
		titleEn:"Questions and Answers(5)"
	},
	{
		id:"1160b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1161a",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"問題解答(6)",
		titleEn:"Questions and Answers(6)"
	},
	{
		id:"1161b",
		lang:"English/Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1162a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(1)",
		titleEn:"Old Testaments Survey(1)"
	},
	{
		id:"1162b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1163a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(2)",
		titleEn:"Old Testaments Survey(2)"
	},
	{
		id:"1163b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1164a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(3)",
		titleEn:"Old Testaments Survey(3)"
	},
	{
		id:"1164b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1165a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(4)",
		titleEn:"Old Testaments Survey(4)"
	},
	{
		id:"1165b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1166a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(5)",
		titleEn:"Old Testaments Survey(5)"
	},
	{
		id:"1166b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1167a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(6)",
		titleEn:"Old Testaments Survey(6)"
	},
	{
		id:"1167b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1168a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(7)",
		titleEn:"Old Testaments Survey(7)"
	},
	{
		id:"1168b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1169a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(8)",
		titleEn:"Old Testaments Survey(8)"
	},
	{
		id:"1169b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1170a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(9)",
		titleEn:"Old Testaments Survey(9)"
	},
	{
		id:"1170b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1171a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(10)",
		titleEn:"Old Testaments Survey(10)"
	},
	{
		id:"1171b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1172a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(11)",
		titleEn:"Old Testaments Survey(11)"
	},
	{
		id:"1172b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1173a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(12)",
		titleEn:"Old Testaments Survey(12)"
	},
	{
		id:"1173b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1174a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(13)",
		titleEn:"Old Testaments Survey(13)"
	},
	{
		id:"1174b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1175a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(14)",
		titleEn:"Old Testaments Survey(14)"
	},
	{
		id:"1175b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1176a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(15)",
		titleEn:"Old Testaments Survey(15)"
	},
	{
		id:"1176b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1177a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(16)",
		titleEn:"Old Testaments Survey(16)"
	},
	{
		id:"1177b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1178a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(17)",
		titleEn:"Old Testaments Survey(17)"
	},
	{
		id:"1178b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1179a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"舊約概論(18)",
		titleEn:"Old Testaments Survey(18)"
	},
	{
		id:"1179b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1180a",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"新約中的道德基礎(1)",
		titleEn:"Ethics(1)"
	},
	{
		id:"1180b",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1181a",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"新約中的道德基礎(2)",
		titleEn:"Ethics(2)"
	},
	{
		id:"1181b",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1182a",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"新約中的道德基礎(3)",
		titleEn:"Ethics(3)"
	},
	{
		id:"1182b",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1183a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(1)",
		titleEn:"Study in Ephesians(1)"
	},
	{
		id:"1183b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1184a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(2)",
		titleEn:"Study in Ephesians(2)"
	},
	{
		id:"1184b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1185a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(3)",
		titleEn:"Study in Ephesians(3)"
	},
	{
		id:"1185b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1186a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(4)",
		titleEn:"Study in Ephesians(4)"
	},
	{
		id:"1186b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1187a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(5)",
		titleEn:"Study in Ephesians(5)"
	},
	{
		id:"1187b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1188a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(6)",
		titleEn:"Study in Ephesians(6)"
	},
	{
		id:"1188b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1189a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"以弗所書查經(7)",
		titleEn:"Study in Ephesians(7)"
	},
	{
		id:"1189b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1190a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"腓立比書研讀(1)",
		titleEn:"Study in Philippians(1)"
	},
	{
		id:"1190b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1191a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"腓立比書研讀(2)",
		titleEn:"Study in Philippians(2)"
	},
	{
		id:"1191b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1192a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"腓立比書研讀(3)",
		titleEn:"Study in Philippians(3)"
	},
	{
		id:"1192b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1193a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"腓立比書研讀(4)",
		titleEn:"Study in Philippians(4)"
	},
	{
		id:"1193b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1194a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"歌羅西書查經(1)",
		titleEn:"Exposition on Colossians(1)"
	},
	{
		id:"1194b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1195a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"歌羅西書查經(2)",
		titleEn:"Exposition on Colossians(2)"
	},
	{
		id:"1195b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1196a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"歌羅西書查經(3)",
		titleEn:"Exposition on Colossians(3)"
	},
	{
		id:"1196b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1197a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"歌羅西書查經(4)",
		titleEn:"Exposition on Colossians(4)"
	},
	{
		id:"1197b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1198a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(1)",
		titleEn:"Exposition on Thessalonians(1)"
	},
	{
		id:"1198b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1199a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(2)",
		titleEn:"Exposition on Thessalonians(2)"
	},
	{
		id:"1199b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1200a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(3)",
		titleEn:"Exposition on Thessalonians(3)"
	},
	{
		id:"1200b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1201a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(4)",
		titleEn:"Exposition on Thessalonians(4)"
	},
	{
		id:"1201b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1202a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(5)",
		titleEn:"Exposition on Thessalonians(5)"
	},
	{
		id:"1202b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1203a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"帖撒羅尼迦前後書研經(6)",
		titleEn:"Exposition on Thessalonians(6)"
	},
	{
		id:"1203b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1204a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"雅各書釋義(1)",
		titleEn:"Book of James(1)"
	},
	{
		id:"1204b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1205a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"雅各書釋義(2)",
		titleEn:"Book of James(2)"
	},
	{
		id:"1205b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1206a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"雅各書釋義(3)",
		titleEn:"Book of James(3)"
	},
	{
		id:"1206b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1207a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"雅各書釋義(4)",
		titleEn:"Book of James(4)"
	},
	{
		id:"1207b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1208a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"雅各書釋義(5)",
		titleEn:"Book of James(5)"
	},
	{
		id:"1208b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1209a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"耶穌囿漕鄐l",
		titleEn:"Jesus, The Son of God"
	},
	{
		id:"1209b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1210a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"永生(1)",
		titleEn:"Eternal life(1)"
	},
	{
		id:"1210b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1211a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"永生(2)",
		titleEn:"Eternal life(2)"
	},
	{
		id:"1211b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1212a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"永生(3)",
		titleEn:"Eternal life(3)"
	},
	{
		id:"1212b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1213a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"基本護教學(1)",
		titleEn:"Fundamental Apologetics(1)"
	},
	{
		id:"1213b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1214a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"基本護教學(2)",
		titleEn:"Fundamental Apologetics(2)"
	},
	{
		id:"1214b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1215a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"基本護教學(3)",
		titleEn:"Fundamental Apologetics(3)"
	},
	{
		id:"1215b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1216a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"基本護教學(4)",
		titleEn:"Fundamental Apologetics(4)"
	},
	{
		id:"1216b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1217a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"基督徒在不信的世界中如何生活 ",
		titleEn:"The Christian in the Secular World"
	},
	{
		id:"1217b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1218a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"婦女在教會中地位",
		titleEn:"Woman's Position in Church"
	},
	{
		id:"1218b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1219a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"離婚和再婚",
		titleEn:"Divorce and Re-marriage"
	},
	{
		id:"1219b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1220a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人在宇宙中的地位(1)",
		titleEn:"Man, Original Position in the Universe(1)"
	},
	{
		id:"1220b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1221a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人在宇宙中的地位(2)",
		titleEn:"Man, Original Position in the Universe(2)"
	},
	{
		id:"1221b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1222a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人靈魂的價值(1)",
		titleEn:"The value of your soul(1)"
	},
	{
		id:"1222b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1223a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人靈魂的價值(2)",
		titleEn:"The value of your soul(2)"
	},
	{
		id:"1223b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1224a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人靈魂的價值(3)",
		titleEn:"The value of your soul(3)"
	},
	{
		id:"1224b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1225a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人靈魂的價值(4)",
		titleEn:"The value of your soul(4)"
	},
	{
		id:"1225b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1226a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"教義上的不同",
		titleEn:"Doctrinal Difference"
	},
	{
		id:"1226b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1227a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"真理與信仰(1)",
		titleEn:"Truth and Faith(1)"
	},
	{
		id:"1227b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1228a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"真理與信仰(2)",
		titleEn:"Truth and Faith(2)"
	},
	{
		id:"1228b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1229a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"真理與信仰(3)",
		titleEn:"Truth and Faith(3)"
	},
	{
		id:"1229b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1230a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"真理與信仰(4)",
		titleEn:"Truth and Faith(4)"
	},
	{
		id:"1230b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1231a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"固守真道(1)",
		titleEn:"Holding the Faith(1)"
	},
	{
		id:"1231b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1232a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"固守真道(2)",
		titleEn:"Holding the Faith(2)"
	},
	{
		id:"1232b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1233a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"固守真道(3)",
		titleEn:"Holding the Faith(3)"
	},
	{
		id:"1233b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1234a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"固守真道(4)",
		titleEn:"Holding the Faith(4)"
	},
	{
		id:"1234b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1235a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(1)",
		titleEn:"Question and answer(1)"
	},
	{
		id:"1235b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1236a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"問題解答(2)",
		titleEn:"Question and answer(2)"
	},
	{
		id:"1236b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語 ",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1237a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"對上帝存在的信仰(1)",
		titleEn:"Faith in God's Existence(1)"
	},
	{
		id:"1237b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1238a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"對上帝存在的信仰(2)",
		titleEn:"Faith in God's Existence(2)"
	},
	{
		id:"1238b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1239a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"對上帝存在的信仰(3)",
		titleEn:"Faith in God's Existence(3)"
	},
	{
		id:"1239b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1240a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"對上帝存在的信仰(4)",
		titleEn:"Faith in God's Existence(4)"
	},
	{
		id:"1240b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1241a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"神的形像(1)",
		titleEn:"God's Image(1)"
	},
	{
		id:"1241b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1242a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"神的形像(2)",
		titleEn:"God's Image(2)"
	},
	{
		id:"1242b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1243a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"三位一体",
		titleEn:"Three into one, The trinity"
	},
	{
		id:"1244a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(1)",
		titleEn:"To know Him(1)"
	},
	{
		id:"1244b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1245a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(2)",
		titleEn:"To know Him(2)"
	},
	{
		id:"1245b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1246a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(3)",
		titleEn:"To know Him(3)"
	},
	{
		id:"1246b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1247a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(4)",
		titleEn:"To know Him(4)"
	},
	{
		id:"1247b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1248a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(5)",
		titleEn:"To know Him(5)"
	},
	{
		id:"1248b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1249a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"知道祂(6)",
		titleEn:"To know Him(6)"
	},
	{
		id:"1249b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1250a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"主啊! 你是誰?(1)",
		titleEn:"Lord, Who are you?(1)"
	},
	{
		id:"1250b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1251a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"主啊! 你是誰?(2)",
		titleEn:"Lord, Who are you?(2)"
	},
	{
		id:"1251b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1252a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"主啊! 你是誰?(3)",
		titleEn:"Lord, Who are you?(3)"
	},
	{
		id:"1252b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1253a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"主啊! 你是誰?(4)",
		titleEn:"Lord, Who are you?(4)"
	},
	{
		id:"1253b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1254a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"主啊! 你是誰?(5)",
		titleEn:"Lord, Who are you?(5)"
	},
	{
		id:"1254b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1255a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(1)",
		titleEn:"Know what you believe(1)"
	},
	{
		id:"1255b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1256a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(2)",
		titleEn:"Know what you believe(2)"
	},
	{
		id:"1256b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1257a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(3)",
		titleEn:"Know what you believe(3)"
	},
	{
		id:"1257b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1258a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(4)",
		titleEn:"Know what you believe(4)"
	},
	{
		id:"1258b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1259a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(5)",
		titleEn:"Know what you believe(5)"
	},
	{
		id:"1259b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1260a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(6)",
		titleEn:"Know what you believe(6)"
	},
	{
		id:"1260b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1261a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(7)",
		titleEn:"Know what you believe(7)"
	},
	{
		id:"1261b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1262a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(8)",
		titleEn:"Know what you believe(8)"
	},
	{
		id:"1262b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1263a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(9)",
		titleEn:"Know what you believe(9)"
	},
	{
		id:"1263b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1264a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"深知你所信的是誰(10)",
		titleEn:"Know what you believe(10)"
	},
	{
		id:"1264b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1265a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(1)",
		titleEn:"Life with wisdom(1)"
	},
	{
		id:"1265b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1266a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(2)",
		titleEn:"Life with wisdom(2)"
	},
	{
		id:"1266b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1267a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(3)",
		titleEn:"Life with wisdom(3)"
	},
	{
		id:"1267b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1268a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(4)",
		titleEn:"Life with wisdom(4)"
	},
	{
		id:"1268b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1269a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(5)",
		titleEn:"Life with wisdom(5)"
	},
	{
		id:"1269b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1270a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"智慧的人生(6)",
		titleEn:"Life with wisdom(6)"
	},
	{
		id:"1271a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒的喜樂 ",
		titleEn:"The Joy of Christians"
	},
	{
		id:"1271b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1272a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"與神相會",
		titleEn:"Face to Face with God"
	},
	{
		id:"1272b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1273a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"認識神的道路",
		titleEn:"To Know God's Way"
	},
	{
		id:"1273b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1274a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人失敗的原因",
		titleEn:"The Reason for Human Failure"
	},
	{
		id:"1274b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1275a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"信心的意義",
		titleEn:"Meaning of Our Faith"
	},
	{
		id:"1275b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1276a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"弟兄彼此相愛",
		titleEn:"Love One Another"
	},
	{
		id:"1276b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1277a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"時代的挑戰 ",
		titleEn:"Contemporary Challenge"
	},
	{
		id:"1277b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1278a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒有活力的生活(1)",
		titleEn:"Dynamic Christian Living(1)"
	},
	{
		id:"1278b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1279a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒有活力的生活(2)",
		titleEn:"Dynamic Christian Living(2)"
	},
	{
		id:"1279b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1280a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒有活力的生活(3)",
		titleEn:"Dynamic Christian Living(3)"
	},
	{
		id:"1280b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1281a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒有活力的生活(4)",
		titleEn:"Dynamic Christian Living(4)"
	},
	{
		id:"1281b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1282a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠(1)人生的意義",
		titleEn:"The Meaning of Life"
	},
	{
		id:"1282b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1283a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠(2)人生的困難",
		titleEn:"The Difficulty of Life"
	},
	{
		id:"1283b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1284a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠(3)人生的目的",
		titleEn:"The Purpose of Life"
	},
	{
		id:"1284b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1285a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"兒童人格的形成和發展(1)",
		titleEn:"Developing Children Personality(1)"
	},
	{
		id:"1285b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1286a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"兒童人格的形成和發展(2)",
		titleEn:"Developing Children Personality(2)"
	},
	{
		id:"1286b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1287a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"兒童人格的形成和發展(3)",
		titleEn:"Developing Children Personality(3)"
	},
	{
		id:"1287b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1288a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"婆媳之間",
		titleEn:"Mother and Daughter-in-law Relationship"
	},
	{
		id:"1288b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1289a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"夫妻之道",
		titleEn:"Husband and Wife Relationship"
	},
	{
		id:"1289b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1290a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"幸福家庭",
		titleEn:"Blessed Family"
	},
	{
		id:"1290b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1291a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒的家庭教育(1)",
		titleEn:"Christian Education at Home(1)"
	},
	{
		id:"1291b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1292a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"基督徒的家庭教育(2)",
		titleEn:"Christian Education at Home(2)"
	},
	{
		id:"1292b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1293a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"佛教,孔子,老子和耶穌基督",
		titleEn:"Buddha, Confucius, Lao Tze or Jesus Christ"
	},
	{
		id:"1293b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1294a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中的力量",
		titleEn:"The strength in crisis "
	},
	{
		id:"1294b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1295a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中的成長",
		titleEn:"The growth in crisis"
	},
	{
		id:"1295b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1296a",
		lang:"Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中被建立",
		titleEn:"The Built-up in crisis"
	},
	{
		id:"1296b",
		lang:"Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1297a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中跟隨主",
		titleEn:"To follow the Lord in crisis"
	},
	{
		id:"1297b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1298a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中蒙潔淨",
		titleEn:"Being cleaned in crisis"
	},
	{
		id:"1298b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1299a",
		lang:"Chinese",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"危機中有主同行",
		titleEn:"Walk with the Lord in crisis"
	},
	{
		id:"1299b",
		lang:"Chinese",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1300a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"恩典中的驚奇(1)",
		titleEn:"Surprised by grace(1)"
	},
	{
		id:"1300b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1301a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"恩典中的驚奇(2) 投靠神的趐膀下",
		titleEn:"Surprised by grace(2) Relying on God under his wings "
	},
	{
		id:"1301b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1302a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"恩典中的驚奇(3) 末後的恩比先前更大",
		titleEn:"Surprised by grace(3) The grace coming after is greater than the Former"
	},
	{
		id:"1302b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1303a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣(1)",
		titleEn:"No more the same(1)"
	},
	{
		id:"1303b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1304a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣(2)",
		titleEn:"No more the same(2)"
	},
	{
		id:"1304b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1305a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣(3)",
		titleEn:"No more the same(3)"
	},
	{
		id:"1305b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1306a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在眼淚中遇見神(1)",
		titleEn:"Meet the Lord in tears(1)"
	},
	{
		id:"1306b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1307a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在寧靜中遇見神(2)",
		titleEn:"Meet the Lord in tranquility(2)"
	},
	{
		id:"1307b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1308a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在懺悔中遇見神(3)",
		titleEn:"Meet the Lord in confession(3)"
	},
	{
		id:"1308b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1309a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"求主用我",
		titleEn:"May the Lord used me"
	},
	{
		id:"1309b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1310",
		lang:"Taiwanese/Music ",
		langCn:"台語/唱",
		speakerCn:"頌恩樂坊",
		speakerEn:"Praise His grace Musicians",
		titleCn:"阿母,我想念您",
		titleEn:"Mother, I am thinking of you"
	},
	{
		id:"1311a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"聖經的功用",
		titleEn:"Inerrancy of the Bible "
	},
	{
		id:"1311b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1312a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"奇妙的天書—聖經",
		titleEn:"Marvelous heavenly book"
	},
	{
		id:"1312b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1313a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"詩篇84篇",
		titleEn:"Psalm 84"
	},
	{
		id:"1313b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1314a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"能力的源頭—聖靈",
		titleEn:"Source of power—Holy spirit"
	},
	{
		id:"1314b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1315a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"能力的來源—神的話",
		titleEn:"Source of power—God's word"
	},
	{
		id:"1315b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1316a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"主的自我介紹",
		titleEn:"The Lord's self introduction"
	},
	{
		id:"1316b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1317a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"耶穌最後的話",
		titleEn:"Last words of Jesus"
	},
	{
		id:"1317b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1318a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"誠實",
		titleEn:"Honesty"
	},
	{
		id:"1318b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1319a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"得罪",
		titleEn:"Being wrong"
	},
	{
		id:"1319b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1320a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"神的命令",
		titleEn:"God's commands"
	},
	{
		id:"1320b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1321a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"永不滅亡的保証",
		titleEn:"Eternal assurance"
	},
	{
		id:"1321b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1322a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"得救之道",
		titleEn:"The way of salvation"
	},
	{
		id:"1322b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1323a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"愛的新命令",
		titleEn:"A new commandment of love"
	},
	{
		id:"1323b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1324a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"福音之道",
		titleEn:"The gospel"
	},
	{
		id:"1324b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1325a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"膽怯",
		titleEn:"Timidity"
	},
	{
		id:"1325b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1326a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"行的道理",
		titleEn:"The way to walk"
	},
	{
		id:"1326b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1327a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"孝道的延伸",
		titleEn:"Extension of submission to father"
	},
	{
		id:"1327b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1328a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"十架之道",
		titleEn:"The way of the cross"
	},
	{
		id:"1328b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1329a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"三種喜樂",
		titleEn:"Three kinds of happiness"
	},
	{
		id:"1329b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1330a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"主的稱讚",
		titleEn:"Praise from the Lord"
	},
	{
		id:"1330b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1331a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"生命的最高點",
		titleEn:"The peak of life"
	},
	{
		id:"1331b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1332a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"禱告何益",
		titleEn:"What are the benefits of prayer?"
	},
	{
		id:"1332b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1333a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"神賜福給事奉祂的人",
		titleEn:"God blesses people who serve Him"
	},
	{
		id:"1333b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1334a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"天國的憲法",
		titleEn:"Constitution of heavenly kingdom"
	},
	{
		id:"1334b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1335a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"初信專題(1)",
		titleEn:"Gospel workshop(1)"
	},
	{
		id:"1335b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1336a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"初信專題(2)",
		titleEn:"Gospel workshop(2)"
	},
	{
		id:"1336b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1337a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"三種任憑的過犯",
		titleEn:"Man has freedom to sin"
	},
	{
		id:"1337b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1338a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"五旬節的真諦",
		titleEn:"The truth meaning of Pentecost"
	},
	{
		id:"1338b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1339a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"基督徒和羊,狼,蛇和鴿子 ",
		titleEn:"Christian and sheep, wolves, serpents and doves"
	},
	{
		id:"1339b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1340a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"中國文化傳統的福音性(1) *",
		titleEn:"Characteristics of Gospel in Chinese(1)"
	},
	{
		id:"1340b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1341a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"中國文化傳統的福音性(2)",
		titleEn:"Characteristics of Gospel in Chinese(2)"
	},
	{
		id:"1341b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1342a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"中國文化傳統的福音性(3)",
		titleEn:"Characteristics of Gospel in Chinese(3)"
	},
	{
		id:"1342b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1343a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"福音與中國文化",
		titleEn:"Gospel and Chinese culture"
	},
	{
		id:"1343b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1344a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"基督徒的宇宙觀, 價值觀 ",
		titleEn:"Cosmic view sense of christian values"
	},
	{
		id:"1344b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1345a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"基督徒對聖經應有的態度",
		titleEn:"Christians'  proper attitude to Bible"
	},
	{
		id:"1345b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1346a",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"問題解答",
		titleEn:"Questions and answers"
	},
	{
		id:"1346b",
		lang:"English/Chinese",
		langCn:"英/華語 ",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1347a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"基督徒和神的關係",
		titleEn:"Relationship between christians& God"
	},
	{
		id:"1347b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1348a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"基督徒的裝備",
		titleEn:"The christian armor"
	},
	{
		id:"1348b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1349a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"什麼是福音",
		titleEn:"What is the gospel?"
	},
	{
		id:"1349b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1350a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"什麼不是福音",
		titleEn:"What is not the gospel?"
	},
	{
		id:"1350b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1351a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"五種壓力",
		titleEn:"Five kinds of pressure"
	},
	{
		id:"1351b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1352a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"各各他山的三個十字架",
		titleEn:"Calvary's three crosses"
	},
	{
		id:"1352b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1353a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"罪的定義",
		titleEn:"Definition of sin"
	},
	{
		id:"1353b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1354a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"寇世遠個人見証",
		titleEn:"S. Y. Kou's personal testimony"
	},
	{
		id:"1355a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"十字架的面面觀(1)",
		titleEn:"Many facets of the cross(1) "
	},
	{
		id:"1355b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1356a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"十字架的面面觀(2)",
		titleEn:"Many facets of the cross(2)"
	},
	{
		id:"1356b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1357a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"十字架的面面觀(3)",
		titleEn:"Many facets of the cross(3)"
	},
	{
		id:"1357b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1358a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"十字架的面面觀(4)",
		titleEn:"Many facets of the cross(4)"
	},
	{
		id:"1358b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1359a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"神的三問",
		titleEn:"Three questions from God"
	},
	{
		id:"1359b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1360a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"彼此相愛",
		titleEn:"Love each other"
	},
	{
		id:"1360b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1361a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"讀經何益",
		titleEn:"Why study the Bible?"
	},
	{
		id:"1361b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠牧師 ",
		speakerEn:"Rev.S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1362a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(1)",
		titleEn:"Interpretation of the Bible(1)"
	},
	{
		id:"1362b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1363a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(2)",
		titleEn:"Interpretation of the Bible(2)"
	},
	{
		id:"1363b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1364a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(3)",
		titleEn:"Interpretation of the Bible(3)"
	},
	{
		id:"1364b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1365a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(4)",
		titleEn:"Interpretation of the Bible(4)"
	},
	{
		id:"1365b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1366a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(5)",
		titleEn:"Interpretation of the Bible(5)"
	},
	{
		id:"1366b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1367a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(6)",
		titleEn:"Interpretation of the Bible(6)"
	},
	{
		id:"1367b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1368a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(7)",
		titleEn:"Interpretation of the Bible(7)"
	},
	{
		id:"1368b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1369a",
		lang:"Chinese/English",
		langCn:"華/英",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(8)",
		titleEn:"Interpretation of the Bible(8)"
	},
	{
		id:"1370a",
		lang:"English",
		langCn:"英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(9)",
		titleEn:"Interpretation of the Bible(9)"
	},
	{
		id:"1370b",
		lang:"English",
		langCn:"英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1371a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(10)",
		titleEn:"Interpretation of the Bible(10)"
	},
	{
		id:"1371b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1372a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(11)",
		titleEn:"Interpretation of the Bible(11)"
	},
	{
		id:"1372b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1373a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(12)",
		titleEn:"Interpretation of the Bible(12)"
	},
	{
		id:"1373b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1374a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(13)",
		titleEn:"Interpretation of the Bible(13)"
	},
	{
		id:"1374b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1375a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(14)",
		titleEn:"Interpretation of the Bible(14)"
	},
	{
		id:"1375b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1376a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"聖經註解學(15)",
		titleEn:"Interpretation of the Bible(15)"
	},
	{
		id:"1376b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1377a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"認識真神",
		titleEn:"Knowing God"
	},
	{
		id:"1377b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1378a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"要良善要忠心",
		titleEn:"Be kind and be faithful"
	},
	{
		id:"1378b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1379a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"信徒的條件",
		titleEn:"Qualification of believer"
	},
	{
		id:"1379b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1380a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"屬靈的爭戰(1)",
		titleEn:"Spiritual warfare(1)"
	},
	{
		id:"1380b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1381a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"屬靈的爭戰(2)",
		titleEn:"Spiritual warfare(2)"
	},
	{
		id:"1381b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1382a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"屬靈的爭戰(3)",
		titleEn:"Spiritual warfare(3)"
	},
	{
		id:"1382b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1383a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"屬靈的爭戰(4)",
		titleEn:"Spiritual warfare(4)"
	},
	{
		id:"1383b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1384a",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"屬靈的爭戰(5)",
		titleEn:"Spiritual warfare(5)"
	},
	{
		id:"1384b",
		lang:"Chinese",
		langCn:"華/廣語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1385a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"醫治疾病",
		titleEn:"Healing the sick"
	},
	{
		id:"1385b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1386a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"問題解答(1)",
		titleEn:"Questions and answers(1)"
	},
	{
		id:"1386b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1387a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"問題解答(2)",
		titleEn:"Questions and answers(2)"
	},
	{
		id:"1387b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1388a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"問題解答(3)",
		titleEn:"Questions and answers(3)"
	},
	{
		id:"1388b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1389a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"問題解答(4)",
		titleEn:"Questions and answers(4)"
	},
	{
		id:"1389b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1390a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"永火",
		titleEn:"Eternal fire"
	},
	{
		id:"1390b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1391a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"罪的本質",
		titleEn:"The nature of sin"
	},
	{
		id:"1391b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1392a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"進窄門,走小路,承受永生(1)",
		titleEn:"Narrow way to eternity(1)"
	},
	{
		id:"1392b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1393a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"進窄門,走小路,承受永生(2)",
		titleEn:"Narrow way to eternity(2)"
	},
	{
		id:"1393b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1394a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"我們如何與主同行",
		titleEn:"How do we walk with the Lord?"
	},
	{
		id:"1394b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1395a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"要逃掉這些事",
		titleEn:"To escape all these things"
	},
	{
		id:"1395b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1396a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(1)",
		titleEn:"Salvation, victory, reward(1)"
	},
	{
		id:"1396b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1397a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(2)",
		titleEn:"Salvation, victory, reward(2)"
	},
	{
		id:"1397b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1398a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(3)",
		titleEn:"Salvation, victory, reward(3)"
	},
	{
		id:"1398b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1399a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(4)",
		titleEn:"Salvation, victory, reward(4)"
	},
	{
		id:"1399b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1400a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(5)",
		titleEn:"Salvation, victory, reward(5)"
	},
	{
		id:"1400b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1401a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救,得勝,得賞(6)",
		titleEn:"Salvation, victory, reward(6)"
	},
	{
		id:"1401b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1402a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"教會怎樣成長",
		titleEn:"How the church grows"
	},
	{
		id:"1402b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1403a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣禱告",
		titleEn:"How to pray"
	},
	{
		id:"1403b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1404a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(1)",
		titleEn:"How to spread the light of the gospel(1)"
	},
	{
		id:"1404b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1405a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(2)",
		titleEn:"How to spread the light of the gospel(2)"
	},
	{
		id:"1405b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1406a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(3)",
		titleEn:"How to spread the light of the gospel(3)"
	},
	{
		id:"1406b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1407a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(4)",
		titleEn:"How to spread the light of the gospel(4)"
	},
	{
		id:"1407b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1408a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(5)",
		titleEn:"How to spread the light of the gospel(5)"
	},
	{
		id:"1408b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1409a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(6)",
		titleEn:"How to spread the light of the gospel(6)"
	},
	{
		id:"1409b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1410a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"怎樣為主發光(7)",
		titleEn:"How to spread the light of the gospel(7)"
	},
	{
		id:"1410b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1411a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(1)",
		titleEn:"Kingdom and discipleship(1)"
	},
	{
		id:"1411b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1412a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(2)",
		titleEn:"Kingdom and discipleship(2)"
	},
	{
		id:"1412b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1413a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(3)",
		titleEn:"Kingdom and discipleship(3)"
	},
	{
		id:"1413b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1414a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(4)",
		titleEn:"Kingdom and discipleship(4)"
	},
	{
		id:"1414b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1415a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(5)",
		titleEn:"Kingdom and discipleship(5)"
	},
	{
		id:"1415b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1416a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(6)",
		titleEn:"Kingdom and discipleship(6)"
	},
	{
		id:"1416b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1417a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(7)",
		titleEn:"Kingdom and discipleship(7)"
	},
	{
		id:"1417b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1418a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"國度與操練(8)",
		titleEn:"Kingdom and discipleship(8)"
	},
	{
		id:"1418b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1419a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救的真理(1)",
		titleEn:"The truth of salvation(1)"
	},
	{
		id:"1419b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1420a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救的真理(2)",
		titleEn:"The truth of salvation(2)"
	},
	{
		id:"1420b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1421a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救的真理(3)",
		titleEn:"The truth of salvation(3)"
	},
	{
		id:"1421b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1422a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救的真理(4)",
		titleEn:"The truth of salvation(4)"
	},
	{
		id:"1422b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1423a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"得救的真理(5)",
		titleEn:"The truth of salvation(5)"
	},
	{
		id:"1423b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1424a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"培靈(1)",
		titleEn:"Revival(1)"
	},
	{
		id:"1424b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1425a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"培靈(2)",
		titleEn:"Revival(2)"
	},
	{
		id:"1425b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1426a",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"培靈(3)",
		titleEn:"Revival(3)"
	},
	{
		id:"1426b",
		lang:"Chinese",
		langCn:"華語 ",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1427a",
		lang:"Taiwanese/Hymn",
		langCn:"台語/唱",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"至好朋友",
		titleEn:"What a friend"
	},
	{
		id:"1427b",
		lang:"Taiwanese/Hymn",
		langCn:"台語/唱",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1428a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"屬靈透視力(1)",
		titleEn:"Deepen your perspective(1)"
	},
	{
		id:"1428b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1429a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"屬靈透視力(2)",
		titleEn:"Deepen your perspective(2)"
	},
	{
		id:"1429b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1430a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"屬靈透視力(3)",
		titleEn:"Deepen your perspective(3)"
	},
	{
		id:"1430b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1431a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"屬靈透視力(4)",
		titleEn:"Deepen your perspective(4)"
	},
	{
		id:"1431b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1432a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"如何帶領小組查經(1)",
		titleEn:"How to lead group Bible study(1)"
	},
	{
		id:"1432b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1433a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"如何帶領小組查經(2)",
		titleEn:"How to lead group Bible Study(2)"
	},
	{
		id:"1433b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李順長牧師",
		speakerEn:"Rev. Gordon Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1434a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"如何帶領小組查經(1)",
		titleEn:"How to lead group Bible study(1)"
	},
	{
		id:"1434b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1435a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"如何帶領小組查經(2)",
		titleEn:"How to lead group Bible study(2)"
	},
	{
		id:"1435b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1436a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"如何帶領小組查經(3)",
		titleEn:"How to lead group Bible study(3)"
	},
	{
		id:"1436b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李林靜芝師母",
		speakerEn:"Mrs. Sophie Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1437a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(1)",
		titleEn:"Study in Nehemiah(1)"
	},
	{
		id:"1438a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(2)",
		titleEn:"Study in Nehemiah(2)"
	},
	{
		id:"1438b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1439a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(3)",
		titleEn:"Study in Nehemiah(3)"
	},
	{
		id:"1439b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1440a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(4)",
		titleEn:"Study in Nehemiah(4)"
	},
	{
		id:"1440b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1441a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(5)",
		titleEn:"Study in Nehemiah(5)"
	},
	{
		id:"1441b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1442a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"尼希米記讀經(6)",
		titleEn:"Study in Nehemiah(6)"
	},
	{
		id:"1442b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1443a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"約翰福音3章16節",
		titleEn:"John 3:16"
	},
	{
		id:"1443b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1444a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"十架七言",
		titleEn:"7 words on the cross"
	},
	{
		id:"1444b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1445a",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"基督徒生活講座(1)",
		titleEn:"Towards Christian living(1)"
	},
	{
		id:"1445b",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1446a",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"基督徒生活講座(2)",
		titleEn:"Towards Christian living(2)"
	},
	{
		id:"1446b",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1447a",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"基督徒生活講座(3)",
		titleEn:"Towards Christian living(3)"
	},
	{
		id:"1447b",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1448a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(1)",
		titleEn:"Marriage and the family(1)"
	},
	{
		id:"1448b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1449a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(2)",
		titleEn:"Marriage and the family(2)"
	},
	{
		id:"1449b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1450a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(3)",
		titleEn:"Marriage and the family(3)"
	},
	{
		id:"1450b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1451a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(4)",
		titleEn:"Marriage and the family(4)"
	},
	{
		id:"1451b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1452a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(5)",
		titleEn:"Marriage and the family(5)"
	},
	{
		id:"1452b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1453a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"婚姻與家庭(6)",
		titleEn:"Marriage and the family(6)"
	},
	{
		id:"1453b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1454a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(1)",
		titleEn:"Family and service(1)"
	},
	{
		id:"1454b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1455a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(2)",
		titleEn:"Family and service(2)"
	},
	{
		id:"1455b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1456a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(3)",
		titleEn:"Family and service(3)"
	},
	{
		id:"1456b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1457a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(4)",
		titleEn:"Family and service(4)"
	},
	{
		id:"1457b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1458a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(5)",
		titleEn:"Family and service(5)"
	},
	{
		id:"1458b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1459a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(6)",
		titleEn:"Family and service(6)"
	},
	{
		id:"1459b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1460a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"家庭與事奉(7)",
		titleEn:"Family and service(7)"
	},
	{
		id:"1460b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1461a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"基督徒的世界觀(1)",
		titleEn:"Christian’s view of the word(1)"
	},
	{
		id:"1461b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1462a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"基督徒的世界觀(2)",
		titleEn:"Christian’s view of the word(2)"
	},
	{
		id:"1462b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1463a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"凡事謝恩",
		titleEn:"In all things give thanks"
	},
	{
		id:"1463b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1464a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"異象的重要性",
		titleEn:"The importance of vision"
	},
	{
		id:"1464b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1465a",
		lang:"Chinese",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"你當預備迎見你的神",
		titleEn:"Prepare to meet God"
	},
	{
		id:"1465b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1466a",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"有深度的人生",
		titleEn:"A real meaningful life"
	},
	{
		id:"1466b",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1467a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"夫婦之間(1)",
		titleEn:"Husband and wife(1)"
	},
	{
		id:"1467b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1468a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"夫婦之間(2)",
		titleEn:"Husband and wife(2)"
	},
	{
		id:"1468b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1469a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"上下代之間(1)",
		titleEn:"Inter-Generation relationship(1)"
	},
	{
		id:"1469b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1470a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"上下代之間(2)",
		titleEn:"Inter-Generation relationship(2)"
	},
	{
		id:"1470b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滌然師毋",
		speakerEn:"Mrs. Evelyn Shih",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1471a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(1)",
		titleEn:"Streams in the desert(1)"
	},
	{
		id:"1471b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1472a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(2)",
		titleEn:"Streams in the desert(2)"
	},
	{
		id:"1472b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1473a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(3)",
		titleEn:"Streams in the desert(3)"
	},
	{
		id:"1473b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1474a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(4)",
		titleEn:"Streams in the desert(4)"
	},
	{
		id:"1474b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1475a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(5)",
		titleEn:"Streams in the desert(5)"
	},
	{
		id:"1475b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1476a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(6)",
		titleEn:"Streams in the desert(6)"
	},
	{
		id:"1476b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1477a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(7)",
		titleEn:"Streams in the desert(7)"
	},
	{
		id:"1477b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1478a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(8)",
		titleEn:"Streams in the desert(8)"
	},
	{
		id:"1478b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1479a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(9)",
		titleEn:"Streams in the desert(9)"
	},
	{
		id:"1479b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1480a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"荒漠甘泉誦讀(10)",
		titleEn:"Streams in the desert(10)"
	},
	{
		id:"1480b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"荒漠甘泉",
		speakerEn:"Streams in the desert",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1481a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"摩西蒙召(1)",
		titleEn:"The calling of Moses(1)"
	},
	{
		id:"1482a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"摩西蒙召(2)",
		titleEn:"The calling of Moses(2)"
	},
	{
		id:"1482b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1483a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"摩西蒙召(3)",
		titleEn:"The calling of Moses(3)"
	},
	{
		id:"1483b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1484a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"摩西蒙召(4)",
		titleEn:"The calling of Moses(4)"
	},
	{
		id:"1484b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1485a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"主的復活與生命",
		titleEn:"Jesus’ resurrection and life"
	},
	{
		id:"1485b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1486a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"得勝的生活",
		titleEn:"The victorious life"
	},
	{
		id:"1486b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1487a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"從絕望中得生命",
		titleEn:"Recovery from despair"
	},
	{
		id:"1487b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1488a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"為永生的食物勞力",
		titleEn:"Working hard for eternal food"
	},
	{
		id:"1488b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1489a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"真實的信心",
		titleEn:"True faith"
	},
	{
		id:"1489b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1490a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"絕對的順服",
		titleEn:"Absolute obedience"
	},
	{
		id:"1490b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1491a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"靠神得脫諸難",
		titleEn:"Overcome troubles by faith in God"
	},
	{
		id:"1491b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1492a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"生命的糧",
		titleEn:"Food of life"
	},
	{
		id:"1492b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1493a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"信得生命",
		titleEn:"Gain eternal life by faith"
	},
	{
		id:"1493b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"沈保羅牧師",
		speakerEn:"Rev. Paul Shen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1494a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"摩西生平(1)",
		titleEn:"The life of Moses(1)"
	},
	{
		id:"1494b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1495a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"摩西生平(2)",
		titleEn:"The life of Moses(2)"
	},
	{
		id:"1495b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1496a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"摩西生平(3)",
		titleEn:"The life of Moses(3)"
	},
	{
		id:"1496b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1497a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"摩西生平(4)",
		titleEn:"The life of Moses(4)"
	},
	{
		id:"1497b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1498a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(1)",
		titleEn:"Behold, I am coming soon(1)"
	},
	{
		id:"1498b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1499a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(2)",
		titleEn:"Behold, I am coming soon(2)"
	},
	{
		id:"1499b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1500a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(3)",
		titleEn:"Behold, I am coming soon(3)"
	},
	{
		id:"1500b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1501a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(4)",
		titleEn:"Behold, I am coming soon(4)"
	},
	{
		id:"1501b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1502a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(5)",
		titleEn:"Behold, I am coming soon(5)"
	},
	{
		id:"1502b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1503a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(6)",
		titleEn:"Behold, I am coming soon(6)"
	},
	{
		id:"1503b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1504a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"看啊! 我必快來(7)",
		titleEn:"Behold, I am coming soon(7)"
	},
	{
		id:"1504b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1505a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"神奇妙永恒的愛",
		titleEn:"God’s wonderful and eternal love"
	},
	{
		id:"1505b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1506a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"教會崇拜之內容(1)",
		titleEn:"Content of worship in the church(1)"
	},
	{
		id:"1506b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1507a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"教會崇拜之內容(2)",
		titleEn:"Content of worship in the church(2)"
	},
	{
		id:"1507b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1508a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"律法與恩典",
		titleEn:"Law and grace"
	},
	{
		id:"1508b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐佑之牧師",
		speakerEn:"Rev. Samuel Tang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1509a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"釋經學(1)",
		titleEn:"Hermeneutics(1)"
	},
	{
		id:"1509b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1510a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"釋經學(2)",
		titleEn:"Hermeneutics(2)"
	},
	{
		id:"1510b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1511a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"釋經學(3)",
		titleEn:"Hermeneutics(3)"
	},
	{
		id:"1511b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1512a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"釋經學(4)",
		titleEn:"Hermeneutics(4)"
	},
	{
		id:"1512b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1513a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"釋經學(5)",
		titleEn:"Hermeneutics(5)"
	},
	{
		id:"1513b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1514a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"以賽亞的異象",
		titleEn:"Isaiah’s vision"
	},
	{
		id:"1514b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1515a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"保羅心中的三件事",
		titleEn:"Three things in Paul’s heart"
	},
	{
		id:"1515b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1516a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"如何順從聖靈的帶領(1)",
		titleEn:"Guidance of the Holy Spirit(1)"
	},
	{
		id:"1516b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1517a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"如何順從聖靈的帶領(2)",
		titleEn:"Guidance of the Holy Spirit(2)"
	},
	{
		id:"1517b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1518a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"認識耶穌是主",
		titleEn:"Knowing Jesus is Lord"
	},
	{
		id:"1518b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1519a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"認識耶穌是救主",
		titleEn:"Know Jesus as the Savior"
	},
	{
		id:"1519b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1520a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"耶穌—道路,真理,生命(1)",
		titleEn:"Jesus—The way, the truth, the life(1)"
	},
	{
		id:"1520b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1521a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"耶穌—道路,真理,生命(2)",
		titleEn:"Jesus—The way, the truth, the life(2)"
	},
	{
		id:"1521b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1522a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"耶穌—道路,真理,生命(3)",
		titleEn:"Jesus—The way, the truth, the life(3)"
	},
	{
		id:"1522b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1523a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"聖經中的十大奧祕(1)",
		titleEn:"Ten mysteries of the Bible(1)"
	},
	{
		id:"1523b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1524a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"聖經中的十大奧祕(2)",
		titleEn:"Ten mysteries of the Bible(2)"
	},
	{
		id:"1524b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1525a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"聖經中的十大奧祕(3)",
		titleEn:"Ten mysteries of the Bible(3)"
	},
	{
		id:"1525b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1526a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"聖經中的十大奧祕(4)",
		titleEn:"Ten mysteries of the Bible(4)"
	},
	{
		id:"1526b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1527a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"聖經中的十大奧祕(5)",
		titleEn:"Ten mysteries of the Bible(5)"
	},
	{
		id:"1528a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(1)",
		titleEn:"Spiritual revival(1)"
	},
	{
		id:"1528b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1529a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(2)",
		titleEn:"Spiritual revival(2)"
	},
	{
		id:"1529b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1530a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(3)",
		titleEn:"Spiritual revival(3)"
	},
	{
		id:"1530b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1531a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(4)",
		titleEn:"Spiritual revival(4)"
	},
	{
		id:"1531b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1532a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(5)",
		titleEn:"Spiritual revival(5)"
	},
	{
		id:"1532b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1533a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"靈命的復興(6)",
		titleEn:"Spiritual revival(6)"
	},
	{
		id:"1534a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(1)",
		titleEn:"Ten essentials in spiritual life(1)"
	},
	{
		id:"1534b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1535a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(2)",
		titleEn:"Ten essentials in spiritual life(2)"
	},
	{
		id:"1535b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1536a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(3)",
		titleEn:"Ten essentials in spiritual life(3)"
	},
	{
		id:"1536b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1537a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(4)",
		titleEn:"Ten essentials in spiritual life(4)"
	},
	{
		id:"1537b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1538a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(5)",
		titleEn:"Ten essentials in spiritual life(5)"
	},
	{
		id:"1538b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1539a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬靈生命的十大關鍵(6)",
		titleEn:"Ten essentials in spiritual life(6)"
	},
	{
		id:"1539b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1540a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(1)",
		titleEn:"Equipping the believers to serve(1)"
	},
	{
		id:"1540b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1541a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(2)",
		titleEn:"Equipping the believers to serve(2)"
	},
	{
		id:"1541b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1542a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(3)",
		titleEn:"Equipping the believers to serve(3)"
	},
	{
		id:"1542b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1543a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(4)",
		titleEn:"Equipping the believers to serve(4)"
	},
	{
		id:"1543b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1544a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(5)",
		titleEn:"Equipping the believers to serve(5)"
	},
	{
		id:"1545a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"成全聖徒各盡其職(6)",
		titleEn:"Equipping the believers to serve(6)"
	},
	{
		id:"1545b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1546a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(1)",
		titleEn:"Life and service(1)"
	},
	{
		id:"1546b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1547a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(2)",
		titleEn:"Life and service(2)"
	},
	{
		id:"1547b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1548a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(3)",
		titleEn:"Life and service(3)"
	},
	{
		id:"1548b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1549a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(4)",
		titleEn:"Life and service(4)"
	},
	{
		id:"1549b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1550a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(5)",
		titleEn:"Life and service(5)"
	},
	{
		id:"1550b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1551a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(6)",
		titleEn:"Life and service(6)"
	},
	{
		id:"1551b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1552a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(7)",
		titleEn:"Life and service(7)"
	},
	{
		id:"1552b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1553a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"生命與事奉(8)",
		titleEn:"Life and service(8)"
	},
	{
		id:"1553b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1554a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(1)",
		titleEn:"Discipleship(1)"
	},
	{
		id:"1554b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1555a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(2)",
		titleEn:"Discipleship(2)"
	},
	{
		id:"1555b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1556a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(3)",
		titleEn:"Discipleship(3)"
	},
	{
		id:"1556b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1557a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(4)",
		titleEn:"Discipleship(4)"
	},
	{
		id:"1557b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1558a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(5)",
		titleEn:"Discipleship(5)"
	},
	{
		id:"1558b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1559a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(6)",
		titleEn:"Discipleship(6)"
	},
	{
		id:"1559b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1560a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"門徒訓練(7)",
		titleEn:"Discipleship(7)"
	},
	{
		id:"1561a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(1)",
		titleEn:"Holy Spirit’s overflowing love(1)"
	},
	{
		id:"1561b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1562a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(2)",
		titleEn:"Holy Spirit’s overflowing love(2)"
	},
	{
		id:"1562b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1563a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(3)",
		titleEn:"Holy Spirit’s overflowing love(3)"
	},
	{
		id:"1563b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1564a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(4)",
		titleEn:"Holy Spirit’s overflowing love(4)"
	},
	{
		id:"1564b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1565a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(5)",
		titleEn:"Holy Spirit’s overflowing love(5)"
	},
	{
		id:"1565b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1566a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(6)",
		titleEn:"Holy Spirit’s overflowing love(6)"
	},
	{
		id:"1566b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1567a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(7)",
		titleEn:"Holy Spirit’s overflowing love(7)"
	},
	{
		id:"1568a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"愛的澆灌(8)",
		titleEn:"Holy Spirit’s overflowing love(8)"
	},
	{
		id:"1568b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1569a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"建立基督的身體(1)",
		titleEn:"Build up the body of Christ(1)"
	},
	{
		id:"1569b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1570a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"建立基督的身體(2)",
		titleEn:"Build up the body of Christ(2)"
	},
	{
		id:"1570b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1571a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"建立基督的身體(3)",
		titleEn:"Build up the body of Christ(3)"
	},
	{
		id:"1571b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1572a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"建立基督的身體(4)",
		titleEn:"Build up the body of Christ(4)"
	},
	{
		id:"1572b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1573a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"更深的生命與事奉(1)",
		titleEn:"Deeper life and service(1)"
	},
	{
		id:"1573b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1574a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"更深的生命與事奉(2)",
		titleEn:"Deeper life and service(2)"
	},
	{
		id:"1574b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1575a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"更深的生命與事奉(3)",
		titleEn:"Deeper life and service(3)"
	},
	{
		id:"1575b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1576a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"更深的生命與事奉(4)",
		titleEn:"Deeper life and service(4)"
	},
	{
		id:"1576b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1577a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"迷惑",
		titleEn:"Temptation"
	},
	{
		id:"1577b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"不要半途而廢",
		titleEn:"Do not give up on the half way"
	},
	{
		id:"1578a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"屬世與屬靈的對比",
		titleEn:"Contrast of worldly and spiritual things"
	},
	{
		id:"1578b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1579a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"使徒們救靈魂的方法",
		titleEn:"Apostles’ ways of saving souls"
	},
	{
		id:"1579b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1580a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"以色列人所拜的偶像",
		titleEn:"Idols Israel worshipped"
	},
	{
		id:"1580b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1581a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"能力與實行",
		titleEn:"Power and practice"
	},
	{
		id:"1581b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1582a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"合乎神心意的事奉(1)",
		titleEn:"Serving God according to His will(1)"
	},
	{
		id:"1582b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1583a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"合乎神心意的事奉(2)",
		titleEn:"Serving God according to His will(2)"
	},
	{
		id:"1583b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"滕近輝牧師",
		speakerEn:"Rev. Philip Teng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1584a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西—神僕的模範(1)",
		titleEn:"Moses—Example of the Lord’s servant(1)"
	},
	{
		id:"1584b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1585a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西—神僕的模範(2)",
		titleEn:"Moses—Example of the Lord’s servant(2)"
	},
	{
		id:"1585b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1586a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"大衛生平—基督徒靈命的範例(1)",
		titleEn:"Life of David—Example for christians(1)"
	},
	{
		id:"1586b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1587a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"大衛生平—基督徒靈命的範例(2)",
		titleEn:"Life of David—Example for christians(2)"
	},
	{
		id:"1587b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1588a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"大衛生平—基督徒靈命的範例(3)",
		titleEn:"Life of David—Example for christians(3)"
	},
	{
		id:"1588b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1589a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"大衛生平—基督徒靈命的範例(4)",
		titleEn:"Life of David—Example for christians(4)"
	},
	{
		id:"1589b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1590a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(1)",
		titleEn:"Five books of Moses(1)"
	},
	{
		id:"1590b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1591a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(2)",
		titleEn:"Five books of Moses(2)"
	},
	{
		id:"1591b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1592a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(3)",
		titleEn:"Five books of Moses(3)"
	},
	{
		id:"1592b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1593a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(4)",
		titleEn:"Five books of Moses(4)"
	},
	{
		id:"1593b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1594a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(5)",
		titleEn:"Five books of Moses(5)"
	},
	{
		id:"1594b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1595a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(6)",
		titleEn:"Five books of Moses(6)"
	},
	{
		id:"1595b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1596a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(7)",
		titleEn:"Five books of Moses(7)"
	},
	{
		id:"1596b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1597a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"摩西五經(8)",
		titleEn:"Five books of Moses(8)"
	},
	{
		id:"1597b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1598a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(1)",
		titleEn:"Study of Psalms(1)"
	},
	{
		id:"1598b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1599a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(2)",
		titleEn:"Study of Psalms(2)"
	},
	{
		id:"1599b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1600a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(3)",
		titleEn:"Study of Psalms(3)"
	},
	{
		id:"1600b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1601a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(4)",
		titleEn:"Study of Psalms(4)"
	},
	{
		id:"1601b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1602a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(5)",
		titleEn:"Study of Psalms(5)"
	},
	{
		id:"1602b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1603a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"詩篇研讀(6)",
		titleEn:"Study of Psalms(6)"
	},
	{
		id:"1603b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1604a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(1)",
		titleEn:"Life and ministry of apostle Paul(1)"
	},
	{
		id:"1604b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1605a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(2)",
		titleEn:"Life and ministry of apostle Paul(2)"
	},
	{
		id:"1605b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1606a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(3)",
		titleEn:"Life and ministry of apostle Paul(3)"
	},
	{
		id:"1606b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1607a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(4)",
		titleEn:"Life and ministry of apostle Paul(4)"
	},
	{
		id:"1607b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1608a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(5)",
		titleEn:"Life and ministry of apostle Paul(5)"
	},
	{
		id:"1608b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1609a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(6)",
		titleEn:"Life and ministry of apostle Paul(6)"
	},
	{
		id:"1609b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1610a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(7)",
		titleEn:"Life and ministry of apostle Paul(7)"
	},
	{
		id:"1610b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1611a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(8)",
		titleEn:"Life and ministry of apostle Paul(8)"
	},
	{
		id:"1611b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1612a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(9)",
		titleEn:"Life and ministry of apostle Paul(9)"
	},
	{
		id:"1612b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1613a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(10)",
		titleEn:"Life and ministry of apostle Paul(10)"
	},
	{
		id:"1613b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1614a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"保羅的生平與職事(11)",
		titleEn:"Life and ministry of apostle Paul(11)"
	},
	{
		id:"1614b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1615a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"八福(1)",
		titleEn:"Eight happiness(1)"
	},
	{
		id:"1615b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1616a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"八福(2)",
		titleEn:"Eight happiness(2)"
	},
	{
		id:"1616b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1617a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"十字架的復活與大能(1)",
		titleEn:"Ressurection and power of the cross(1)"
	},
	{
		id:"1617b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1618a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"十字架的復活與大能(2)",
		titleEn:"Ressurection and power of the cross(2)"
	},
	{
		id:"1618b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1619a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"十字架的復活與大能(3)",
		titleEn:"Ressurection and power of the cross(3)"
	},
	{
		id:"1619b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1620a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"十字架的復活與大能(4)",
		titleEn:"Ressurection and power of the cross(4)"
	},
	{
		id:"1620b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1621a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"十字架的復活與大能(5)",
		titleEn:"Ressurection and power of the cross(5)"
	},
	{
		id:"1621b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1622a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"主的復活(1)",
		titleEn:"The Lord is risen(1)"
	},
	{
		id:"1622b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1623a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"主的復活(2)",
		titleEn:"The Lord is risen(2)"
	},
	{
		id:"1623b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1624a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"主的復活(3)",
		titleEn:"The Lord is risen(3)"
	},
	{
		id:"1624b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1625a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"主的復活(4)",
		titleEn:"The Lord is risen(4)"
	},
	{
		id:"1625b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1626a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"主的復活(5)",
		titleEn:"The Lord is risen(5)"
	},
	{
		id:"1626b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1627a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"基督徒的日常生活",
		titleEn:"Christian daily living"
	},
	{
		id:"1627b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1628a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"信徒,門徒,基督徒",
		titleEn:"Believer, disciples and christians"
	},
	{
		id:"1628b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1629a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"怎樣造就基督徒(1)",
		titleEn:"How to build up christians’ faith(1)"
	},
	{
		id:"1629b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1630a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"怎樣造就基督徒(2)",
		titleEn:"How to build up christians’ faith(2)"
	},
	{
		id:"1630b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1631a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"愛的交通",
		titleEn:"Fellowship in love"
	},
	{
		id:"1631b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1632a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"基督徒的稱義與行義",
		titleEn:"Justification and righteousness of christians"
	},
	{
		id:"1632b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1633a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"如何求問神",
		titleEn:"How to know God’s will"
	},
	{
		id:"1633b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1634a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"人生的目的",
		titleEn:"The purpose of life"
	},
	{
		id:"1634b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1635a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"問題解答",
		titleEn:"Questions and answers"
	},
	{
		id:"1635b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林三綱牧師",
		speakerEn:"Rev. Bellman Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1636a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(1)",
		titleEn:"Exposition on Isaiah(1)"
	},
	{
		id:"1636b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1637a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(2)",
		titleEn:"Exposition on Isaiah(2)"
	},
	{
		id:"1637b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1638a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(3)",
		titleEn:"Exposition on Isaiah(3)"
	},
	{
		id:"1638b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1639a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(4)",
		titleEn:"Exposition on Isaiah(4)"
	},
	{
		id:"1639b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1640a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(5)",
		titleEn:"Exposition on Isaiah(5)"
	},
	{
		id:"1640b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1641a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(6)",
		titleEn:"Exposition on Isaiah(6)"
	},
	{
		id:"1641b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1642a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(7)",
		titleEn:"Exposition on Isaiah(7)"
	},
	{
		id:"1642b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1644a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(9)",
		titleEn:"Exposition on Isaiah(9)"
	},
	{
		id:"1644b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1645a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(10)",
		titleEn:"Exposition on Isaiah(10)"
	},
	{
		id:"1645b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1646a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(11)",
		titleEn:"Exposition on Isaiah(11)"
	},
	{
		id:"1646b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1647a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(12)",
		titleEn:"Exposition on Isaiah(12)"
	},
	{
		id:"1647b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1648a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(13)",
		titleEn:"Exposition on Isaiah(13)"
	},
	{
		id:"1648b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1649a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(14)",
		titleEn:"Exposition on Isaiah(14)"
	},
	{
		id:"1649b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1650a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(15)",
		titleEn:"Exposition on Isaiah(15)"
	},
	{
		id:"1650b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1651a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(16)",
		titleEn:"Exposition on Isaiah(16)"
	},
	{
		id:"1651b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1652a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(17)",
		titleEn:"Exposition on Isaiah(17)"
	},
	{
		id:"1652b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1653a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(18)",
		titleEn:"Exposition on Isaiah(18)"
	},
	{
		id:"1653b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1654a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(19)",
		titleEn:"Exposition on Isaiah(19)"
	},
	{
		id:"1654b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1655a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(20)",
		titleEn:"Exposition on Isaiah(20)"
	},
	{
		id:"1655b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1656a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(21)",
		titleEn:"Exposition on Isaiah(21)"
	},
	{
		id:"1656b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1657a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(22)",
		titleEn:"Exposition on Isaiah(22)"
	},
	{
		id:"1657b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1658a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(23)",
		titleEn:"Exposition on Isaiah(23)"
	},
	{
		id:"1658b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1659a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(24)",
		titleEn:"Exposition on Isaiah(24)"
	},
	{
		id:"1659b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1660a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(25)",
		titleEn:"Exposition on Isaiah(25)"
	},
	{
		id:"1660b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1661a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(26)",
		titleEn:"Exposition on Isaiah(26)"
	},
	{
		id:"1661b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1662a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(27)",
		titleEn:"Exposition on Isaiah(27)"
	},
	{
		id:"1662b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1663a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(28)",
		titleEn:"Exposition on Isaiah(28)"
	},
	{
		id:"1663b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1664a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(29)",
		titleEn:"Exposition on Isaiah(29)"
	},
	{
		id:"1664b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1665a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(30)",
		titleEn:"Exposition on Isaiah(30)"
	},
	{
		id:"1665b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1666a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(31)",
		titleEn:"Exposition on Isaiah(31)"
	},
	{
		id:"1666b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1667a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(32)",
		titleEn:"Exposition on Isaiah(32)"
	},
	{
		id:"1667b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1668a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(33)",
		titleEn:"Exposition on Isaiah(33)"
	},
	{
		id:"1668b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1669a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(34)",
		titleEn:"Exposition on Isaiah(34)"
	},
	{
		id:"1669b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1670a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(35)",
		titleEn:"Exposition on Isaiah(35)"
	},
	{
		id:"1670b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1671a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(36)",
		titleEn:"Exposition on Isaiah(36)"
	},
	{
		id:"1671b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1672a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(37)",
		titleEn:"Exposition on Isaiah(37)"
	},
	{
		id:"1672b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1673a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(38)",
		titleEn:"Exposition on Isaiah(38)"
	},
	{
		id:"1673b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1674a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(39)",
		titleEn:"Exposition on Isaiah(39)"
	},
	{
		id:"1674b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1675a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(40)",
		titleEn:"Exposition on Isaiah(40)"
	},
	{
		id:"1675b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1676a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(41)",
		titleEn:"Exposition on Isaiah(41)"
	},
	{
		id:"1676b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1677a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(42)",
		titleEn:"Exposition on Isaiah(42)"
	},
	{
		id:"1677b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1678a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(43)",
		titleEn:"Exposition on Isaiah(43)"
	},
	{
		id:"1678b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1679a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(44)",
		titleEn:"Exposition on Isaiah(44)"
	},
	{
		id:"1679b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1680a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"以賽亞書(45)",
		titleEn:"Exposition on Isaiah(45)"
	},
	{
		id:"1680b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1681a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(1)",
		titleEn:"Life of Christ(1)"
	},
	{
		id:"1681b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1682a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(2)",
		titleEn:"Life of Christ(2)"
	},
	{
		id:"1682b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1683a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(3)",
		titleEn:"Life of Christ(3)"
	},
	{
		id:"1683b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1684a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(4)",
		titleEn:"Life of Christ(4)"
	},
	{
		id:"1684b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1685a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(5)",
		titleEn:"Life of Christ(5)"
	},
	{
		id:"1686a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(6)",
		titleEn:"Life of Christ(6)"
	},
	{
		id:"1686b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1687a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(7)",
		titleEn:"Life of Christ(7)"
	},
	{
		id:"1687b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1688a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(8)",
		titleEn:"Life of Christ(8)"
	},
	{
		id:"1688b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1689a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(9)",
		titleEn:"Life of Christ(9)"
	},
	{
		id:"1689b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1690a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(10)",
		titleEn:"Life of Christ(10)"
	},
	{
		id:"1690b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1691a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(11)",
		titleEn:"Life of Christ(11)"
	},
	{
		id:"1691b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1692a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(12)",
		titleEn:"Life of Christ(12)"
	},
	{
		id:"1692b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1693a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(13)",
		titleEn:"Life of Christ(13)"
	},
	{
		id:"1693b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1694a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(14)",
		titleEn:"Life of Christ(14)"
	},
	{
		id:"1694b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1695a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(15)",
		titleEn:"Life of Christ(15)"
	},
	{
		id:"1695b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1696a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(16)",
		titleEn:"Life of Christ(16)"
	},
	{
		id:"1696b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1697a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(17)",
		titleEn:"Life of Christ(17)"
	},
	{
		id:"1697b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1698a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(18)",
		titleEn:"Life of Christ(18)"
	},
	{
		id:"1698b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1699a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(19)",
		titleEn:"Life of Christ(19)"
	},
	{
		id:"1699b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1700a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(20)",
		titleEn:"Life of Christ(20)"
	},
	{
		id:"1700b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1701a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(21)",
		titleEn:"Life of Christ(21)"
	},
	{
		id:"1701b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1702a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(22)",
		titleEn:"Life of Christ(22)"
	},
	{
		id:"1702b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1703a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(23)",
		titleEn:"Life of Christ(23)"
	},
	{
		id:"1703b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1704a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(24)",
		titleEn:"Life of Christ(24)"
	},
	{
		id:"1704b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1705a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(25)",
		titleEn:"Life of Christ(25)"
	},
	{
		id:"1705b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1706a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(26)",
		titleEn:"Life of Christ(26)"
	},
	{
		id:"1706b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1707a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(27)",
		titleEn:"Life of Christ(27)"
	},
	{
		id:"1707b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1708a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(28)",
		titleEn:"Life of Christ(28)"
	},
	{
		id:"1708b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1709a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(29)",
		titleEn:"Life of Christ(29)"
	},
	{
		id:"1709b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1710a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(30)",
		titleEn:"Life of Christ(30)"
	},
	{
		id:"1710b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1711a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(31)",
		titleEn:"Life of Christ(31)"
	},
	{
		id:"1711b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1712a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(32)",
		titleEn:"Life of Christ(32)"
	},
	{
		id:"1712b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1713a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(33)",
		titleEn:"Life of Christ(33)"
	},
	{
		id:"1713b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1714a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(34)",
		titleEn:"Life of Christ(34)"
	},
	{
		id:"1714b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1715a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(35)",
		titleEn:"Life of Christ(35)"
	},
	{
		id:"1715b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1716a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(36)",
		titleEn:"Life of Christ(36)"
	},
	{
		id:"1716b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1717a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(37)",
		titleEn:"Life of Christ(37)"
	},
	{
		id:"1717b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1718a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(38)",
		titleEn:"Life of Christ(38)"
	},
	{
		id:"1718b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1719a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(39)",
		titleEn:"Life of Christ(39)"
	},
	{
		id:"1719b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1720a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(40)",
		titleEn:"Life of Christ(40)"
	},
	{
		id:"1720b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1721a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(41)",
		titleEn:"Life of Christ(41)"
	},
	{
		id:"1721b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1722a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"基督生平(42)",
		titleEn:"Life of Christ(42)"
	},
	{
		id:"1722b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"于力工牧師",
		speakerEn:"Rev. Moses Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1723a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"得救",
		titleEn:"Salvation"
	},
	{
		id:"1723b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1724a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev. Joseph Wang",
		titleCn:"重生",
		titleEn:"The new birth"
	},
	{
		id:"1724b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"王守仁牧師",
		speakerEn:"Rev.Joseph Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1725a",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"為什麼信聖經是上帝的話 ",
		titleEn:"Why Bible is God's word"
	},
	{
		id:"1725b",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1726a",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"如何讀聖經",
		titleEn:"How to study the Bible"
	},
	{
		id:"1726b",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1727a",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"神在聖經中對人的啟示",
		titleEn:"Biblical revelation to men"
	},
	{
		id:"1727b",
		lang:"Chinese",
		langCn:" 華語 ",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1728a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"聖經問答(1)",
		titleEn:"Practical questions & answers(1)"
	},
	{
		id:"1728b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1729a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"聖經問答(2)",
		titleEn:"Practical questions & answers(2)"
	},
	{
		id:"1729b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1730a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"詩篇23篇(1)",
		titleEn:"Psalms(1)"
	},
	{
		id:"1730b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1731a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"詩篇 23篇(2)",
		titleEn:"Psalms(2)"
	},
	{
		id:"1731b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1732a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"詩篇 23 篇(3)",
		titleEn:"Psalms(3)"
	},
	{
		id:"1732b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1733a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"詩篇 23 篇(4) ",
		titleEn:"Psalms(4)"
	},
	{
		id:"1733b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1734a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"撒但對約伯的第一次攻擊",
		titleEn:"Job—Satan's first attack"
	},
	{
		id:"1734b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1735a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"撒但對約伯的第二次攻擊",
		titleEn:"Job---Satan's second attack"
	},
	{
		id:"1735b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1736a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"三個失敗的安慰者",
		titleEn:" Failure of 3 friends of Job"
	},
	{
		id:"1736b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1737a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"認識耶和華",
		titleEn:"To know Jehovah"
	},
	{
		id:"1737b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1738a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"認識神的兒子",
		titleEn:"To know God's Son"
	},
	{
		id:"1738b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1739a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"在基督裡 ",
		titleEn:"In Christ"
	},
	{
		id:"1739b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1740a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"重生之道",
		titleEn:"The way to be born again"
	},
	{
		id:"1740b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1741a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信望愛(1)",
		titleEn:"Faith, Hope, Love(1)"
	},
	{
		id:"1741b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1742a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信望愛(2)",
		titleEn:"Faith, Hope, Love(2)"
	},
	{
		id:"1742b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1743a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信望愛(3) ",
		titleEn:"Faith, Hope, Love(3)"
	},
	{
		id:"1743b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1744a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信心的建立",
		titleEn:"Establishment of faith"
	},
	{
		id:"1744b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1745a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"一句最寶貴的話",
		titleEn:"One precious word"
	},
	{
		id:"1745b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1746a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"基督徒的三種追求",
		titleEn:"Three things christians seek"
	},
	{
		id:"1746b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1747a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(1)",
		titleEn:"Nations & priests(1)"
	},
	{
		id:"1747b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1748a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(2)",
		titleEn:"Nations & priests(2)"
	},
	{
		id:"1748b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1749a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(3)",
		titleEn:"Nations & priests(3)"
	},
	{
		id:"1749b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1750a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(4)",
		titleEn:"Nations & priests(4)"
	},
	{
		id:"1750b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1751a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(5)",
		titleEn:"Nations & priests(5)"
	},
	{
		id:"1751b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1752a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(6)",
		titleEn:"Nations & priests(6)"
	},
	{
		id:"1752b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1753a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"國民與祭司(7)",
		titleEn:"Nations & priests(7)"
	},
	{
		id:"1753b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1754a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"事奉與長進(1)",
		titleEn:"Growing in spirit & service(1)"
	},
	{
		id:"1754b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1755a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"事奉與長進(2)",
		titleEn:"Growing in spirit & service(2)"
	},
	{
		id:"1755b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1756a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"事奉與生活(1)",
		titleEn:"Service & christian life (1)"
	},
	{
		id:"1756b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1757a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"事奉與生活(2)",
		titleEn:"Service & christian life(2)"
	},
	{
		id:"1757b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1758a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"引導與事奉(1)",
		titleEn:"How to know God's guidance(1)"
	},
	{
		id:"1758b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1759a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"引導與事奉(2)",
		titleEn:"How to know God's guidance(2)"
	},
	{
		id:"1759b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1760a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"引導與事奉(3)",
		titleEn:"How to know God's guidance(3)"
	},
	{
		id:"1760b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1761a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"尊主為大",
		titleEn:"Magnify the Lord"
	},
	{
		id:"1761b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1762a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"焦源濂個人見証",
		titleEn:"Personal testimony"
	},
	{
		id:"1762b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1763a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"認識人",
		titleEn:"To know man"
	},
	{
		id:"1763b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1764a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信仰問題(1)",
		titleEn:"The christian faith(1)"
	},
	{
		id:"1764b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1765a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信仰問題(2)",
		titleEn:"The christian faith(2)"
	},
	{
		id:"1765b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1766a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信仰問題(3)",
		titleEn:"The christian faith(3)"
	},
	{
		id:"1766b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1767a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"信仰問題(4)",
		titleEn:"The christian faith(4)"
	},
	{
		id:"1768a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"疑團盡消皆大歡喜",
		titleEn:"Doubts gone and final rejoicing"
	},
	{
		id:"1768b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1769a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"跟隨主",
		titleEn:"Follow Jesus"
	},
	{
		id:"1769b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1770a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"怎樣做個有福氣的人",
		titleEn:"How to become a blessed person"
	},
	{
		id:"1770b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1771a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"教會是一個生命的合一體",
		titleEn:"Church---A unity of life"
	},
	{
		id:"1771b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"焦源濂牧師",
		speakerEn:"Rev. Stephen Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1772a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(1)",
		titleEn:"Genesis(1)"
	},
	{
		id:"1772b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1773a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(2)",
		titleEn:"Genesis(2)"
	},
	{
		id:"1773b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1774a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(3)",
		titleEn:"Genesis(3)"
	},
	{
		id:"1774b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1775a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(4)",
		titleEn:"Genesis(4)"
	},
	{
		id:"1775b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1776a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(5)",
		titleEn:"Genesis(5)"
	},
	{
		id:"1777a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1777b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(6)",
		titleEn:"Genesis(6)"
	},
	{
		id:"1778a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1778b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(7)",
		titleEn:"Genesis(7)"
	},
	{
		id:"1779a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1779b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"創世記(8)",
		titleEn:"Genesis(8)"
	},
	{
		id:"1780a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1780b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"利未記(1)",
		titleEn:"Leviticus(1)"
	},
	{
		id:"1781a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1781b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"利未記(2)",
		titleEn:"Leviticus(2)"
	},
	{
		id:"1782a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1782b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"利未記(3)",
		titleEn:"Leviticus(3)"
	},
	{
		id:"1783b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"利未記(4)",
		titleEn:"Leviticus(4)"
	},
	{
		id:"1784a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"先知書(1)",
		titleEn:"Books of the prophets(1)"
	},
	{
		id:"1784b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1785a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"先知書(2)",
		titleEn:"Books of the prophets(2)"
	},
	{
		id:"1785b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1786a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"先知書(3)",
		titleEn:"Books of the prophets(3)"
	},
	{
		id:"1786b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1787a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"先知書(4)",
		titleEn:"Books of the prophets(4)"
	},
	{
		id:"1787b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1788a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(1)",
		titleEn:"Essentials of the four Gospels(1)"
	},
	{
		id:"1788b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1789a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(2)",
		titleEn:"Essentials of the four Gospels(2)"
	},
	{
		id:"1789b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1790a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(3)",
		titleEn:"Essentials of the four Gospels(3)"
	},
	{
		id:"1790b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1791a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(4)",
		titleEn:"Essentials of the four Gospels(4)"
	},
	{
		id:"1791b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1792a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(5)",
		titleEn:"Essentials of the four Gospels(5)"
	},
	{
		id:"1792b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1793a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(6)",
		titleEn:"Essentials of the four Gospels(6)"
	},
	{
		id:"1793b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1794a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"四福音精義(7)",
		titleEn:"Essentials of the four Gospels(7)"
	},
	{
		id:"1794b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1795a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"保羅所見的異象",
		titleEn:"See vision of Paul"
	},
	{
		id:"1796a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"聖靈的工作(1)",
		titleEn:"Work of the Holy Spirit(1)"
	},
	{
		id:"1796b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1797a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"聖靈的工作(2)",
		titleEn:"Work of the Holy Spirit(2)"
	},
	{
		id:"1797b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1798a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"聖靈的工作(3)",
		titleEn:"Work of the Holy Spirit(3)"
	},
	{
		id:"1798b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1799a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"聖靈的工作(4)",
		titleEn:"Work of the Holy Spirit(4)"
	},
	{
		id:"1799b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1800a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"效法基督",
		titleEn:"Learn from Jesus"
	},
	{
		id:"1800b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1801a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"信心與愛心",
		titleEn:"Faith and love"
	},
	{
		id:"1801b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1802a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"十架的感受",
		titleEn:"Crucified with Christ"
	},
	{
		id:"1802b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1803a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"神的慈愛比生命更好",
		titleEn:"God's love is better than life"
	},
	{
		id:"1803b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1804a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"永生的代價",
		titleEn:"The price of eternal life"
	},
	{
		id:"1804b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1805a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"靈修短講",
		titleEn:"Devotion"
	},
	{
		id:"1805b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1806a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"放下顧慮",
		titleEn:"Do not worry"
	},
	{
		id:"1806b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1807a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"神與你同在",
		titleEn:"God be with you"
	},
	{
		id:"1807b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1808a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"憂慮良藥",
		titleEn:"The best cure for worries"
	},
	{
		id:"1808b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1809a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"向死誇勝",
		titleEn:"Victory over death"
	},
	{
		id:"1809b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1810a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"人生經驗談",
		titleEn:"Experience in life"
	},
	{
		id:"1810b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1811a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"與神同行(1)",
		titleEn:"Daily walk with the Lord(1)"
	},
	{
		id:"1811b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1812a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"與神同行(2)",
		titleEn:"Daily walk with the Lord(2)"
	},
	{
		id:"1812b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1813a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"與神同行(3)",
		titleEn:"Daily walk with the Lord(3)"
	},
	{
		id:"1813b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1814a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"為主傳福音",
		titleEn:"Preaching gospel for God"
	},
	{
		id:"1814b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"曾霖芳牧師",
		speakerEn:"Rev. Lam-Fong Tsang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1815a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"問題解答",
		titleEn:"Question and Answers"
	},
	{
		id:"1815b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1816a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"先知以賽亞",
		titleEn:"Prophet Isaiah"
	},
	{
		id:"1816b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1817a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"先知摩西",
		titleEn:"Prophet Moses"
	},
	{
		id:"1817b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1818a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"先知以利亞",
		titleEn:"Prophet Elijah"
	},
	{
		id:"1818b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1819a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(1)",
		titleEn:"Zephaniah(1)"
	},
	{
		id:"1819b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1820a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(2)",
		titleEn:"Zephaniah(2)"
	},
	{
		id:"1820b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1821a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(3)",
		titleEn:"Zephaniah(3)"
	},
	{
		id:"1821b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1822a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(4)",
		titleEn:"Zephaniah(4)"
	},
	{
		id:"1822b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1823a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(5)",
		titleEn:"Zephaniah(5)"
	},
	{
		id:"1823b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1824a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"西番雅書(6)",
		titleEn:"Zephaniah(6)"
	},
	{
		id:"1824b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1825a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈巴谷書(1)",
		titleEn:"Habbakuk(1)"
	},
	{
		id:"1825b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1826a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈巴谷書(2)",
		titleEn:"Habbakuk(2)"
	},
	{
		id:"1826b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1827a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈巴谷書(3)",
		titleEn:"Habbakuk(3)"
	},
	{
		id:"1827b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1828a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈該書(1)",
		titleEn:"Haggai(1)"
	},
	{
		id:"1828b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1829a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈該書(2)",
		titleEn:"Haggai(2)"
	},
	{
		id:"1829b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1830a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈該書(3)",
		titleEn:"Haggai(3)"
	},
	{
		id:"1830b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1831a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"哈該書(4)",
		titleEn:"Haggai(4)"
	},
	{
		id:"1831b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1832a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"使徒保羅",
		titleEn:"Apostle Paul"
	},
	{
		id:"1832b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1833a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"基督徒的基本信仰(1)",
		titleEn:"Basic christian faith(1)"
	},
	{
		id:"1833b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1834a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"基督徒的基本信仰(2)",
		titleEn:"Basic christian faith(2)"
	},
	{
		id:"1834b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1835a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"初信須知",
		titleEn:"For new christians"
	},
	{
		id:"1835b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1836a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"以耶和華為神",
		titleEn:"Jehovah—Our Lord"
	},
	{
		id:"1836b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1837a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"聖靈澆灌與傳福音",
		titleEn:"Holy Spirit power to preach Gospel"
	},
	{
		id:"1837b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1838a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"什麼是被聖靈充滿",
		titleEn:"The filling of the Holy Spirit"
	},
	{
		id:"1838b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1839a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"耶穌必快來",
		titleEn:"Jesus is coming soon"
	},
	{
		id:"1839b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1840a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"主再來(1)",
		titleEn:"Second coming of Christ(1)"
	},
	{
		id:"1840b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1841a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"主再來(2)",
		titleEn:"Second coming of Christ(2)"
	},
	{
		id:"1841b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1842a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"主再來(3)",
		titleEn:"Second coming of Christ(3)"
	},
	{
		id:"1842b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1843a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"末世的現象",
		titleEn:"Today’s world"
	},
	{
		id:"1843b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1844a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"預備將來",
		titleEn:"Prepare for the future"
	},
	{
		id:"1844b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1845a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"屬肉體與屬靈",
		titleEn:"Of the flesh and of the spirit"
	},
	{
		id:"1845b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1846a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"屬靈的軍隊與武器",
		titleEn:"Spiritual army and weapons"
	},
	{
		id:"1846b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1847a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"這個時代與所要的人",
		titleEn:"The man for this generation"
	},
	{
		id:"1847b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"continued"
	},
	{
		id:"1848a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"追求主",
		titleEn:"Seek the Lord"
	},
	{
		id:"1848b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1849a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"人生中最重要的選擇(1)",
		titleEn:"Most important choice of our life(1)"
	},
	{
		id:"1849b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1850a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"人生中最重要的選擇(2)",
		titleEn:"Most important choice of our life(2)"
	},
	{
		id:"1850b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1851a",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"除滅偶像敬拜真神",
		titleEn:"Destroy all Idols, worship true God"
	},
	{
		id:"1851b",
		lang:"Chinese/Cantonese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1852a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"什麼樣的禱告能蒙神應許",
		titleEn:"What prayers God will answer"
	},
	{
		id:"1852b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1853a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"吳勇的個人見証",
		titleEn:"Personal testimony"
	},
	{
		id:"1853b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1854a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"豊盛的生命(1)",
		titleEn:"Abundant life(1)"
	},
	{
		id:"1854b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1855a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"豊盛的生命(2)",
		titleEn:"Abundant life(2)"
	},
	{
		id:"1855b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1856a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"豊盛的生命(3)",
		titleEn:"Abundant life(3)"
	},
	{
		id:"1856b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1857a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"豊盛的生命(4)",
		titleEn:"Abundant life(4)"
	},
	{
		id:"1857b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1858a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"教會的事奉",
		titleEn:"Service in the church"
	},
	{
		id:"1858b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1859a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"神的揀選與裝備",
		titleEn:"God’s selection and equipment"
	},
	{
		id:"1859b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1860a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"滿足人的需要",
		titleEn:"Satisfy human needs"
	},
	{
		id:"1860b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1861a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"要依靠厚賜百物的神",
		titleEn:"Trust in God who supplies"
	},
	{
		id:"1861b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1862a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"我們追求的事",
		titleEn:"Things we strive for"
	},
	{
		id:"1862b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1863a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"讓祂揀選與使用",
		titleEn:"Let Him choose and make"
	},
	{
		id:"1863b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1864a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"傳福音迎接主來",
		titleEn:"Spread Gospel to welcome Christ"
	},
	{
		id:"1864b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1865a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"吳勇長老",
		speakerEn:"Elder Yung WU",
		titleCn:"神要我們有怎麼樣的教會",
		titleEn:"God’s kind of church"
	},
	{
		id:"1866a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"老(1)",
		titleEn:"Old(1)"
	},
	{
		id:"1866b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1867a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"老(2)",
		titleEn:"Old(2)"
	},
	{
		id:"1867b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1868a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"老(3)",
		titleEn:"Old(3)"
	},
	{
		id:"1868b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1869a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(1)",
		titleEn:"Exposition on Revelation(1)"
	},
	{
		id:"1869b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1870a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(2)",
		titleEn:"Exposition on Revelation(2)"
	},
	{
		id:"1870b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1871a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(3)",
		titleEn:"Exposition on Revelation(3)"
	},
	{
		id:"1872a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(4)",
		titleEn:"Exposition on Revelation(4)"
	},
	{
		id:"1872b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1873a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(5)",
		titleEn:"Exposition on Revelation(5)"
	},
	{
		id:"1873b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1874a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"啟示錄再講(6)",
		titleEn:"Exposition on Revelation(6)"
	},
	{
		id:"1874b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1875a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"靈程初步",
		titleEn:"Basics for new christians"
	},
	{
		id:"1875b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"神, 人, 耶穌(1)",
		titleEn:"God, man, Jesus(1)"
	},
	{
		id:"1876a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1877a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1877b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"神, 人, 耶穌(2)",
		titleEn:"God, man, Jesus(2)"
	},
	{
		id:"1878b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"神, 人, 耶穌(3)",
		titleEn:"God, man, Jesus(3)"
	},
	{
		id:"1879a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"神, 人, 耶穌(4)",
		titleEn:"God, man, Jesus(4)"
	},
	{
		id:"1879b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1880a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌—天堂的道路(1)",
		titleEn:"Jesus—The way to Heaven(1)"
	},
	{
		id:"1880b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1881a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌—天堂的道路(2)",
		titleEn:"Jesus—The way to Hesven(2)"
	},
	{
		id:"1881b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1882a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"死與罪的關係(1)",
		titleEn:"Relationship between death and sin(1)"
	},
	{
		id:"1882b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1883a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"死與罪的關係(2)",
		titleEn:"Relationship between death and sin(2)"
	},
	{
		id:"1883b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1884a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"死與罪的關係(3)",
		titleEn:"Relationship between death and sin(3)"
	},
	{
		id:"1884b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1885a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"死與罪的關係(4)",
		titleEn:"Relationship between death and sin(4)"
	},
	{
		id:"1885b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1886a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"天堂(1)",
		titleEn:"Heaven(1)"
	},
	{
		id:"1886b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1887a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"天堂(2)",
		titleEn:"Heaven(2)"
	},
	{
		id:"1887b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1888a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"地獄(1)",
		titleEn:"Hell(1)"
	},
	{
		id:"1888b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1889a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"地獄(2)",
		titleEn:"Hell(2)"
	},
	{
		id:"1889b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1890a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(1)",
		titleEn:"Signs of Christ’s second coming(1)"
	},
	{
		id:"1890b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1891a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(2)",
		titleEn:"Signs of Christ’s second coming(2)"
	},
	{
		id:"1891b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1892a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(3)",
		titleEn:"Signs of Christ’s second coming(3)"
	},
	{
		id:"1892b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1893a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(4)",
		titleEn:"Signs of Christ’s second coming(4)"
	},
	{
		id:"1893b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1894a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(5)",
		titleEn:"Signs of Christ’s second coming(5)"
	},
	{
		id:"1894b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1895a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(6)",
		titleEn:"Signs of Christ’s second coming(6)"
	},
	{
		id:"1895b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1896a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"耶穌快要再來的預兆(7)",
		titleEn:"Signs of Christ’s second coming(7)"
	},
	{
		id:"1896b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1897a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"生與死的答案(1)",
		titleEn:"Jesus—Answer to life and death(1)"
	},
	{
		id:"1897b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1898a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"生與死的答案(2)",
		titleEn:"Jesus—Answer to life and death(2)"
	},
	{
		id:"1898b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1899a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"神的榮耀,顯現,離開,回來(1)",
		titleEn:"God’s glory, revealed,departed and returned(1)"
	},
	{
		id:"1899b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1900a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"神的榮耀,顯現,離開,回來(2)",
		titleEn:"God’s glory, revealed, departed and returned(2)"
	},
	{
		id:"1900b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1901a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"神的榮耀,顯現,離開,回來(3)",
		titleEn:"God’s glory, revealed, departed and returned(3)"
	},
	{
		id:"1901b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1902a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"神的榮耀,顯現,離開,回來(4)",
		titleEn:"God’s glory, revealed, departed and returned(4)"
	},
	{
		id:"1902b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1903a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"神的榮耀,顯現,離開,回來(5)",
		titleEn:"God’s glory, revealed, departed and returned(5)"
	},
	{
		id:"1904a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命之道",
		titleEn:"The Way of life"
	},
	{
		id:"1904b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1905a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"道路,真理,生命(1)",
		titleEn:"The way, the truth, the life(1)"
	},
	{
		id:"1905b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1906a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"道路,真理,生命(2)",
		titleEn:"The way, the truth, the life(2)"
	},
	{
		id:"1906b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1907a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"道路,真理,生命(3)",
		titleEn:"The way, the truth, the life(3)"
	},
	{
		id:"1907b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1908a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"道路,真理,生命(4)",
		titleEn:"The way, the truth, the life(4)"
	},
	{
		id:"1908b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1909a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"四福音中的耶穌",
		titleEn:"Jesus in four Gospels"
	},
	{
		id:"1909b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1910a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(1)",
		titleEn:"What shall I do, Lord?(1)"
	},
	{
		id:"1910b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1911a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(2)",
		titleEn:"What shall I do, Lord?(2)"
	},
	{
		id:"1911b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1912a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(3)",
		titleEn:"What shall I do, Lord?(3)"
	},
	{
		id:"1912b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1913a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(4)",
		titleEn:"What shall I do, Lord?(4)"
	},
	{
		id:"1913b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1914a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(5)",
		titleEn:"What shall I do, Lord?(5)"
	},
	{
		id:"1914b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1915a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(6)",
		titleEn:"What shall I do, Lord?(6)"
	},
	{
		id:"1915b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1916a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"主啊!我當做什麼?(7)",
		titleEn:"What shall I do, Lord?(7)"
	},
	{
		id:"1916b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1917a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"基督徒事奉的基本原則",
		titleEn:"Basic principles of Christian service"
	},
	{
		id:"1917b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1918a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"見証與見証人(1)",
		titleEn:"Personal testimony(1)"
	},
	{
		id:"1918b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1919a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"見証與見証人(2)",
		titleEn:"Personal testimony(2)"
	},
	{
		id:"1919b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1920a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"見証與見証人(3)",
		titleEn:"Personal testimony(3)"
	},
	{
		id:"1920b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1921a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"見証與見証人(4)",
		titleEn:"Personal testimony(4)"
	},
	{
		id:"1921b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1922a",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"教會的合一",
		titleEn:"Unify the church"
	},
	{
		id:"1922b",
		lang:"Chinese/English",
		langCn:"華語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1923a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇: 怎樣讀聖經 (1)",
		titleEn:"Psalm 119: How to study Bible (1)"
	},
	{
		id:"1923b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1924a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(2)",
		titleEn:"Psalm 119—How to study Bible(2)"
	},
	{
		id:"1924b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1925a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119 篇—怎樣讀聖經(3)",
		titleEn:"Psalm 119—How to study Bible(3)"
	},
	{
		id:"1925b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1926a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(4)",
		titleEn:"Psalm 119—How to study Bible(4)"
	},
	{
		id:"1926b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1927a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(5)",
		titleEn:"Psalm 119—How to study Bible(5)"
	},
	{
		id:"1927b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1928a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(6)",
		titleEn:"Psalm 119—How to study Bible(6)"
	},
	{
		id:"1928b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1929a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(7)",
		titleEn:"Psalm 119—How to study Bible(7)"
	},
	{
		id:"1929b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1930a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(8)",
		titleEn:"Psalm 119—How to study Bible(8)"
	},
	{
		id:"1931a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(9)",
		titleEn:"Psalm 119—How to study Bible(9)"
	},
	{
		id:"1931b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1932a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(10)",
		titleEn:"Psalm 119—How to study Bible(10)"
	},
	{
		id:"1932b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1933a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(11)",
		titleEn:"Psalm 119—How to study Bible(11)"
	},
	{
		id:"1933b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1934a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(12)",
		titleEn:"Psalm 119—How to study Bible(12)"
	},
	{
		id:"1934b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1935a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(13)",
		titleEn:"Psalm 119—How to study Bible(13)"
	},
	{
		id:"1935b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1936a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(14)",
		titleEn:"Psalm 119—How to study Bible(14)"
	},
	{
		id:"1936b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1937a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(15)",
		titleEn:"Psalm 119—How to study Bible(15)"
	},
	{
		id:"1937b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1938a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(16)",
		titleEn:"Psalm 119—How to study Bible(16)"
	},
	{
		id:"1938b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1939a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(17)",
		titleEn:"Psalm 119—How to study Bible(17)"
	},
	{
		id:"1939b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1940a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(18)",
		titleEn:"Psalm 119—How to study Bible(18)"
	},
	{
		id:"1940b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1941a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(19)",
		titleEn:"Psalm 119—How to study Bible(19)"
	},
	{
		id:"1941b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1942a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(20)",
		titleEn:"Psalm 119—How to study Bible(20)"
	},
	{
		id:"1942b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1943a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(21)",
		titleEn:"Psalm 119—How to study Bible(21)"
	},
	{
		id:"1943b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1944a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(22)",
		titleEn:"Psalm 119—How to study Bible(22)"
	},
	{
		id:"1944b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1945a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(23)",
		titleEn:"Psalm 119—How to study Bible(23)"
	},
	{
		id:"1945b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1946a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(24)",
		titleEn:"Psalm 119—How to study Bible(24)"
	},
	{
		id:"1946b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1947a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"詩篇119篇—怎樣讀聖經(25)",
		titleEn:"Psalm 119—How to study Bible(25)"
	},
	{
		id:"1948a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(1)",
		titleEn:"Abundant life—Psalm23(1)"
	},
	{
		id:"1948b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1949a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(2)",
		titleEn:"Abundant life—Psalm 23(2)"
	},
	{
		id:"1949b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1950a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(3)",
		titleEn:"Abundant life—Psalm 23(3)"
	},
	{
		id:"1950b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1951a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(4)",
		titleEn:"Abundant life—Psalm23(4)"
	},
	{
		id:"1951b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1952a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(5)",
		titleEn:"Abundant life—Psalm 23(5)"
	},
	{
		id:"1952b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1953a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(6)",
		titleEn:"Abundant life—Psalm 23(6)"
	},
	{
		id:"1953b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1954a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(7)",
		titleEn:"Abundant life—Psalm 23(7)"
	},
	{
		id:"1954b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1955a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(8)",
		titleEn:"Abundant life—Psalm 23(8)"
	},
	{
		id:"1955b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1956a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"更豊盛的生命—詩篇23篇(9)",
		titleEn:"Abundant life—Psalm 23(9)"
	},
	{
		id:"1956b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1957a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(1)",
		titleEn:"The joy of the Holy Spirit(1)"
	},
	{
		id:"1957b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1958a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(2)",
		titleEn:"The joy of the Holy Spirit(2)"
	},
	{
		id:"1958b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1959a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(3)",
		titleEn:"The joy of the Holy Spirit(3)"
	},
	{
		id:"1959b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1960a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(4)",
		titleEn:"The joy of the Holy Spirit(4)"
	},
	{
		id:"1960b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1961a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(5)",
		titleEn:"The joy of the Holy Spirit(5)"
	},
	{
		id:"1961b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1962a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"聖靈中的喜樂(6)",
		titleEn:"The joy of the Holy Spirit(6)"
	},
	{
		id:"1962b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳希曾牧師",
		speakerEn:"Rev. Christian Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1963a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"約拿書(1)",
		titleEn:"Exposition on Jonah(1)"
	},
	{
		id:"1963b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1964a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"約拿書(2)",
		titleEn:"Exposition on Jonah(2)"
	},
	{
		id:"1964b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1965a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"約拿書(3)",
		titleEn:"Exposition on Jonah(3)"
	},
	{
		id:"1965b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1966a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(1)",
		titleEn:"Acts(1)"
	},
	{
		id:"1966b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1967a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(2)",
		titleEn:"Acts(2)"
	},
	{
		id:"1967b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1968a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(3)",
		titleEn:"Acts(3)"
	},
	{
		id:"1968b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1969a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(4)",
		titleEn:"Acts(4)"
	},
	{
		id:"1969b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1970a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(5)",
		titleEn:"Acts(5)"
	},
	{
		id:"1970b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1971a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(6)",
		titleEn:"Acts(6)"
	},
	{
		id:"1971b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1972a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(7)",
		titleEn:"Acts(7)"
	},
	{
		id:"1972b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1973a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(8)",
		titleEn:"Acts(8)"
	},
	{
		id:"1973b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1974a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(9)",
		titleEn:"Acts(9)"
	},
	{
		id:"1974b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1975a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(10)",
		titleEn:"Acts(10)"
	},
	{
		id:"1975b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1976a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(11)",
		titleEn:"Acts(11)"
	},
	{
		id:"1976b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1977a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(12)",
		titleEn:"Acts(12)"
	},
	{
		id:"1977b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1978a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(13)",
		titleEn:"Acts(13)"
	},
	{
		id:"1978b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1979a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(14)",
		titleEn:"Acts(14)"
	},
	{
		id:"1979b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1980a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(15)",
		titleEn:"Acts(15)"
	},
	{
		id:"1980b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1981a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(16)",
		titleEn:"Acts(16)"
	},
	{
		id:"1981b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1982a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(17)",
		titleEn:"Acts(17)"
	},
	{
		id:"1982b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1983a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(18)",
		titleEn:"Acts(18)"
	},
	{
		id:"1983b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1984a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(19)",
		titleEn:"Acts(19)"
	},
	{
		id:"1984b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1985a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(20)",
		titleEn:"Acts(20)"
	},
	{
		id:"1985b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1986a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(21)",
		titleEn:"Acts(21)"
	},
	{
		id:"1986b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1987a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(22)",
		titleEn:"Acts(22)"
	},
	{
		id:"1987b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1988a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(23)",
		titleEn:"Acts(23)"
	},
	{
		id:"1989a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(24)",
		titleEn:"Acts(24)"
	},
	{
		id:"1989b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1990a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(25)",
		titleEn:"Acts(25)"
	},
	{
		id:"1990b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1991a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"使徒行傳查經(26)",
		titleEn:"Acts(26)"
	},
	{
		id:"1991b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1992a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"腓立比書釋義(1)",
		titleEn:"Exposition on Philippians(1)"
	},
	{
		id:"1992b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1993a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"腓立比書釋義(2)",
		titleEn:"Exposition on Philippians(2)"
	},
	{
		id:"1993b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1994a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"腓立比書釋義(3)",
		titleEn:"Exposition on Philippians(3)"
	},
	{
		id:"1994b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1995a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"腓立比書釋義(4)",
		titleEn:"Exposition on Philippians(4)"
	},
	{
		id:"1995b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1996a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"腓立比書釋義(5)",
		titleEn:"Exposition on Philippians(5)"
	},
	{
		id:"1996b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1997a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(1)",
		titleEn:"Revelation(1)"
	},
	{
		id:"1997b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1998a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(2)",
		titleEn:"Revelation(2)"
	},
	{
		id:"1998b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"1999a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(3)",
		titleEn:"Revelation(3)"
	},
	{
		id:"1999b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2000a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(4)",
		titleEn:"Revelation(4)"
	},
	{
		id:"2000b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2001a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(5)",
		titleEn:"Revelation(5)"
	},
	{
		id:"2001b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2002a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(6)",
		titleEn:"Revelation(6)"
	},
	{
		id:"2002b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2003a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"啟示錄(7)",
		titleEn:"Revelation(7)"
	},
	{
		id:"2003b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2004a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"西西亞七教會(1)",
		titleEn:"Seven churches in Revelation(1)"
	},
	{
		id:"2004b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2005a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"西西亞七教會(2)",
		titleEn:"Seven churches in Revelation(2)"
	},
	{
		id:"2005b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2006a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"西西亞七教會(3)",
		titleEn:"Seven churches in Revelation(3)"
	},
	{
		id:"2006b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2007a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"西西亞七教會(4)",
		titleEn:"Seven churches in Revelation(4)"
	},
	{
		id:"2007b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2008a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"有福的人",
		titleEn:"The blessed"
	},
	{
		id:"2008b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2009a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"感恩與事奉",
		titleEn:"Thanksgiving and service"
	},
	{
		id:"2009b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"敬拜與認識",
		titleEn:"Worship and knowing"
	},
	{
		id:"2010a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(1)",
		titleEn:"Exodus(1)"
	},
	{
		id:"2010b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2011a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(2)",
		titleEn:"Exodus(2)"
	},
	{
		id:"2011b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2012a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(3)",
		titleEn:"Exodus(3)"
	},
	{
		id:"2012b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2013a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(4)",
		titleEn:"Exodus(4)"
	},
	{
		id:"2013b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2014a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(5)",
		titleEn:"Exodus(5)"
	},
	{
		id:"2014b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2015a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(6)",
		titleEn:"Exodus(6)"
	},
	{
		id:"2015b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2016a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(7)",
		titleEn:"Exodus(7)"
	},
	{
		id:"2016b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2017a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(8)",
		titleEn:"Exodus(8)"
	},
	{
		id:"2017b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2018a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(9)",
		titleEn:"Exodus (9)"
	},
	{
		id:"2018b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2019a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(10)",
		titleEn:"Exodus(10)"
	},
	{
		id:"2019b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2020a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(11)",
		titleEn:"Exodus(11)"
	},
	{
		id:"2020b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2021a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(12)",
		titleEn:"Exodus(12)"
	},
	{
		id:"2021b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2022a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(13)",
		titleEn:"Exodus(13)"
	},
	{
		id:"2022b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2023a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(14)",
		titleEn:"Exodus(14)"
	},
	{
		id:"2023b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2024a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(15)",
		titleEn:"Exodus(15)"
	},
	{
		id:"2024b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2025a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(16)",
		titleEn:"Exodus(16)"
	},
	{
		id:"2025b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2026a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(17)",
		titleEn:"Exodus(17)"
	},
	{
		id:"2026b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2027a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(18)",
		titleEn:"Exodus(18)"
	},
	{
		id:"2027b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2028a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"出埃及記(19)",
		titleEn:"Exodus(19)"
	},
	{
		id:"2028b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2029a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(1)",
		titleEn:"Song of Solomon(1)"
	},
	{
		id:"2029b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2030a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(2)",
		titleEn:"Song of Solomon(2)"
	},
	{
		id:"2030b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2031a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(3)",
		titleEn:"Song of Solomon(3)"
	},
	{
		id:"2031b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2032a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(4)",
		titleEn:"Song of Solomon(4)"
	},
	{
		id:"2032b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2033a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(5)",
		titleEn:"Song of Solomon(5)"
	},
	{
		id:"2033b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2034a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(6)",
		titleEn:"Song of Solomon(6)"
	},
	{
		id:"2034b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2035a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(7)",
		titleEn:"Song of Solomon(7)"
	},
	{
		id:"2035b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2036a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(8)",
		titleEn:"Song of Solomon(8)"
	},
	{
		id:"2036b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2037a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(9)",
		titleEn:"Song of Solomon(9)"
	},
	{
		id:"2037b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continue"
	},
	{
		id:"2038a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(10)",
		titleEn:"Song of Solomon(10)"
	},
	{
		id:"2038b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2039a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(11)",
		titleEn:"Song of Solomon(11)"
	},
	{
		id:"2039b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2040a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(12)",
		titleEn:"Song of Solomon(12)"
	},
	{
		id:"2041a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(13)",
		titleEn:"Song of Solomon(13)"
	},
	{
		id:"2041b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2042a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(14)",
		titleEn:"Song of Solomon(14)"
	},
	{
		id:"2042b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2043a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(15)",
		titleEn:"Song of Solomon(15)"
	},
	{
		id:"2043b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2044a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(16)",
		titleEn:"Song of Solomon(16)"
	},
	{
		id:"2044b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2045a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(17)",
		titleEn:"Song of Solomon(17)"
	},
	{
		id:"2045b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2046a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(18)",
		titleEn:"Song of Solomon(18)"
	},
	{
		id:"2046b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2047a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(19)",
		titleEn:"Song of Solomon(19)"
	},
	{
		id:"2047b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2048a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"雅歌(20)",
		titleEn:"Song of Solomon(20)"
	},
	{
		id:"2048b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"王國顯牧師",
		speakerEn:"Rev. Kwok-Hing Wong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2049a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(1)",
		titleEn:"Exposition on Daniel(1)"
	},
	{
		id:"2049b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2050a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(2)",
		titleEn:"Exposition on Daniel(2)"
	},
	{
		id:"2050b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2051a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(3)",
		titleEn:"Exposition on Daniel(3)"
	},
	{
		id:"2051b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2052a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(4)",
		titleEn:"Exposition on Daniel(4)"
	},
	{
		id:"2052b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2053a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(5)",
		titleEn:"Exposition on Daniel(5)"
	},
	{
		id:"2053b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2054a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(6)",
		titleEn:"Exposition on Daniel(6)"
	},
	{
		id:"2054b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2055a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(7)",
		titleEn:"Exposition on Daniel(7)"
	},
	{
		id:"2055b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2056a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"但以理書釋義(8)",
		titleEn:"Exposition on Daniel(8)"
	},
	{
		id:"2056b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2057a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(1)",
		titleEn:"End time prophecy(1)"
	},
	{
		id:"2057b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2058a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(2)",
		titleEn:"End time prophecy(2)"
	},
	{
		id:"2058b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2059a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(3)",
		titleEn:"End time prophecy(3)"
	},
	{
		id:"2059b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2060a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(4)",
		titleEn:"End time prophecy(4)"
	},
	{
		id:"2060b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2061a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(5)",
		titleEn:"End time prophecy(5)"
	},
	{
		id:"2061b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2062a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"聖經預言在末世的應驗(6)",
		titleEn:"End time prophecy(6)"
	},
	{
		id:"2062b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2063a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(1)",
		titleEn:"Evidences of Christ’s return(1)"
	},
	{
		id:"2063b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2064a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(2)",
		titleEn:"Evidences of Christ’s return(2)"
	},
	{
		id:"2064b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2065a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(3)",
		titleEn:"Evidences of Christ’s return(3)"
	},
	{
		id:"2065b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2066a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(4)",
		titleEn:"Evidences of Christ’s return(4)"
	},
	{
		id:"2066b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2067a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(5)",
		titleEn:"Evidences of Christ’s return(5)"
	},
	{
		id:"2067b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2068a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(6)",
		titleEn:"Evidences of Christ’s return(6)"
	},
	{
		id:"2068b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2069a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"耶穌快來的各樣憑據(7)",
		titleEn:"Evidences of Christ’s return(7)"
	},
	{
		id:"2069b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2070a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(1)",
		titleEn:"Life of Christian victory(1)"
	},
	{
		id:"2070b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2071a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(2)",
		titleEn:"Life of Christian victory(2)"
	},
	{
		id:"2071b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2072a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(3)",
		titleEn:"Life of Christian victory(3)"
	},
	{
		id:"2072b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2073a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(4)",
		titleEn:"Life of Christian victory(4)"
	},
	{
		id:"2073b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2074a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(5)",
		titleEn:"Life of Christian victory(5)"
	},
	{
		id:"2074b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2075a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"得勝的基督徒生活(6)",
		titleEn:"Life of Christian victory(6)"
	},
	{
		id:"2075b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何守瑛牧師",
		speakerEn:"Rev. Caroline Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2076a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"人",
		titleEn:"Man"
	},
	{
		id:"2076b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2077a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"安息",
		titleEn:"Sabbath"
	},
	{
		id:"2077b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2078a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"聖經的家譜(1)",
		titleEn:"The Genealogy of the Bible(1)"
	},
	{
		id:"2078b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2079a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"聖經的家譜(2)",
		titleEn:"The Genealogy of the Bible(2)"
	},
	{
		id:"2080a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"創世記概論",
		titleEn:"Genesis"
	},
	{
		id:"2080b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2081a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"宇宙的起源",
		titleEn:"The beginning of  universe"
	},
	{
		id:"2081b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2082a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神起初的創造",
		titleEn:"Creation God made in the beginning"
	},
	{
		id:"2082b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2083a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"魔鬼的背叛與創造",
		titleEn:"Rebellion and destruction of Satan"
	},
	{
		id:"2083b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2084a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"時間",
		titleEn:"Time"
	},
	{
		id:"2084b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2085a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"生物的來源",
		titleEn:"The beginning of living things"
	},
	{
		id:"2085b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2086a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"伊甸園",
		titleEn:"Garden of Eden"
	},
	{
		id:"2086b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2087a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"生命樹與善惡樹",
		titleEn:"The tree of life and of good and evil"
	},
	{
		id:"2087b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2088a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"創世記的四道河",
		titleEn:"The four rivers of Genesis"
	},
	{
		id:"2088b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2089a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"幸福的婚姻",
		titleEn:"Happy marriage"
	},
	{
		id:"2089b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2090a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"亞當與夏娃的墮落",
		titleEn:"The fall of Adam and Eve"
	},
	{
		id:"2090b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2091a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"耶和華神",
		titleEn:"Jehovah God"
	},
	{
		id:"2091b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2092a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神的羔羊",
		titleEn:"God’s sheep"
	},
	{
		id:"2092b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2093a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"真神之愛(1)",
		titleEn:"The true love of God(1)"
	},
	{
		id:"2093b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2094a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"真神之愛(2)",
		titleEn:"The true love of God(2)"
	},
	{
		id:"2094b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2095a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"真神之愛(3)",
		titleEn:"The true love of God(3)"
	},
	{
		id:"2095b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2096a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"真神之愛(4)",
		titleEn:"The true love of God(4)"
	},
	{
		id:"2096b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2097a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"往下扎根,向上結果(1)",
		titleEn:"Strong roots give good fruit(1)"
	},
	{
		id:"2097b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2098a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"往下扎根,向上結果(2)",
		titleEn:"Strong roots give good fruit(2)"
	},
	{
		id:"2098b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2099a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"往下扎根,向上結果(3)",
		titleEn:"Strong roots give good fruit(3)"
	},
	{
		id:"2099b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2100a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"往下扎根,向上結果(4)",
		titleEn:"Strong roots give good fruit(4)"
	},
	{
		id:"2100b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2101a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"家人的交通(1)",
		titleEn:"Family fellowship(1)"
	},
	{
		id:"2101b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2102a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"家人的交通(2)",
		titleEn:"Family fellowship(2)"
	},
	{
		id:"2102b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2103a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"家人的交通(3)",
		titleEn:"Family fellowship(3)"
	},
	{
		id:"2103b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2104a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"家人的交通(4)",
		titleEn:"Family fellowship(4)"
	},
	{
		id:"2104b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"游宏湘牧師",
		speakerEn:"Rev. Wally Yew",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2105a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"為羊捨命的大牧人",
		titleEn:"Good shepherd dies for sheep"
	},
	{
		id:"2105b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2106a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義(1)",
		titleEn:"Meaning of the new birth(1)"
	},
	{
		id:"2106b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2107a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義(2)",
		titleEn:"Meaning of the new birth(2)"
	},
	{
		id:"2107b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2108a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"得了重生的人還能犯罪麼?",
		titleEn:"Should believers still sin?"
	},
	{
		id:"2108b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2109a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"為什麼要重生",
		titleEn:"Why we have to be born again"
	},
	{
		id:"2109b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2110a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"愛神的當恨罪惡",
		titleEn:"Hate all sin "
	},
	{
		id:"2110b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2111a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"兩樣隨身寶物",
		titleEn:"Two precious things daily"
	},
	{
		id:"2111b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續 ",
		titleEn:"Continued"
	},
	{
		id:"2112a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"基督徒生活的兩個原則",
		titleEn:"True principles in Christian life"
	},
	{
		id:"2112b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2113a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"你結了什麼果子",
		titleEn:"What kind of fruit you bear"
	},
	{
		id:"2113b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2114a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"王明道的見証",
		titleEn:"Testimonies"
	},
	{
		id:"2115a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(1)",
		titleEn:"Principles of Bible interpretation(1)"
	},
	{
		id:"2115b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2116a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(2)",
		titleEn:"Principles of Bible interpretation(2)"
	},
	{
		id:"2116b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2117a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(3)",
		titleEn:"Principles of Bible interpretation(3)"
	},
	{
		id:"2117b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2118a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(4)",
		titleEn:"Principles of Bible interpretation(4)"
	},
	{
		id:"2118b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2119a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(5)",
		titleEn:"Principles of Bible interpretation(5)"
	},
	{
		id:"2119b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2120a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則(6)",
		titleEn:"Principles of Bible interpretation(6)"
	},
	{
		id:"2120b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2121a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"解經原則",
		titleEn:"Principles of Bible interpretation"
	},
	{
		id:"2121b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"陳終道牧師",
		speakerEn:"Rev. Stephen Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2122a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"我們所信的是誰",
		titleEn:"What we believe"
	},
	{
		id:"2122b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2123a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"科學和基督徒的信仰(1)",
		titleEn:"Science and Christian faith(1)"
	},
	{
		id:"2123b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2124a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"科學和基督徒的信仰(2)",
		titleEn:"Science and Christian faith(2)"
	},
	{
		id:"2124b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2125a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"科學和基督徒的信仰(3)",
		titleEn:"Science and Christian faith(3)"
	},
	{
		id:"2125b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2126a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"科學和基督徒的信仰(4)",
		titleEn:"Science and Christian faith(4)"
	},
	{
		id:"2126b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2127a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"永恒與不朽",
		titleEn:"Eternity and everlasting life"
	},
	{
		id:"2127b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2128a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"你必需重生",
		titleEn:"You must be born again"
	},
	{
		id:"2128b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2129a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"韓偉醫師",
		speakerEn:"Paul W. Han, MD",
		titleCn:"個人見証",
		titleEn:"Personal testimony"
	},
	{
		id:"2130a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"三層的救恩",
		titleEn:"Three parts of salvation"
	},
	{
		id:"2130b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2131a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"行事為人(1)",
		titleEn:"Lead and life worthy of your calling(1)"
	},
	{
		id:"2132a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"行事為人(2)",
		titleEn:"Lead and life worthy of your calling(2)"
	},
	{
		id:"2132b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2133a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"行事為人(3)",
		titleEn:"Lead and life worthy of your calling(3)"
	},
	{
		id:"2133b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2134a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"行事為人(4)",
		titleEn:"Lead and life worthy of your calling(4)"
	},
	{
		id:"2134b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2135a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"什麼是教會",
		titleEn:"What is the church"
	},
	{
		id:"2135b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"袁爭先牧師",
		speakerEn:"Rev. James Yuan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2136a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"釋經學(1)",
		titleEn:"Interpretation of the Bible(1)"
	},
	{
		id:"2136b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2137a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"釋經學(2)",
		titleEn:"Interpretation of the Bible(2)"
	},
	{
		id:"2137b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2138a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"釋經學(3)",
		titleEn:"Interpretation of the Bible(3)"
	},
	{
		id:"2138b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2139a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"釋經學(4)",
		titleEn:"Interpretation of the Bible(4)"
	},
	{
		id:"2139b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2140a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"釋經學(5)",
		titleEn:"Interpretation of the Bible(5)"
	},
	{
		id:"2140b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鮑會園牧師",
		speakerEn:"Rev. John Pao",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2141a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"以詩歌禱告讚美神",
		titleEn:"Praise God with hymns"
	},
	{
		id:"2141b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2142a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"夫婦如何與神交通(1)",
		titleEn:"Couple’s fellowship with God(1)"
	},
	{
		id:"2142b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2143a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"夫婦如何與神交通(2)",
		titleEn:"Couple’s fellowship with God(2)"
	},
	{
		id:"2144a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"如何與子女交通(1)",
		titleEn:"How to communicate with children(1)"
	},
	{
		id:"2144b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2145a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱清泰牧師",
		speakerEn:"Rev.Peter Chiu",
		titleCn:"如何與子女交通(2)",
		titleEn:"How to communicate with children(2)"
	},
	{
		id:"2146a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"怎樣做個人佈道工作(1)",
		titleEn:"Personal evangelism(1)"
	},
	{
		id:"2146b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2147a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"怎樣做個人佈道工作(2)",
		titleEn:"Personal evangelism(2)"
	},
	{
		id:"2147b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2148a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"怎樣做個人佈道工作(3)",
		titleEn:"Personal evangelism(3)"
	},
	{
		id:"2148b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2149a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"寧威亞牧師",
		speakerEn:"Rev. Peter Ning",
		titleCn:"怎樣做個人佈道工作(4)",
		titleEn:"Personal evangelism(4)"
	},
	{
		id:"2150a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"我們為什麼要信",
		titleEn:"Why do I believe?"
	},
	{
		id:"2150b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2151a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"聖靈",
		titleEn:"The Holy Spirit"
	},
	{
		id:"2151b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2152a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"你是主的門徒嗎?(1)",
		titleEn:"Are you the Lord’s disciple?(1)"
	},
	{
		id:"2152b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2153a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"你是主的門徒嗎?(2)",
		titleEn:"Are you the Lord’s disciple?(2)"
	},
	{
		id:"2153b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳喜謙牧師",
		speakerEn:"Rev. Hay Him Chan",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2154a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"希伯來書釋義(1)",
		titleEn:"Study in Hebrews(1)"
	},
	{
		id:"2154b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2155a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"希伯來書釋義(2)",
		titleEn:"Study in Hebrews(2)"
	},
	{
		id:"2155b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2156a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"希伯來書釋義(3)",
		titleEn:"Study in Hebrews(3)"
	},
	{
		id:"2156b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2157a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"希伯來書釋義(4)",
		titleEn:"Study in Hebrews(4)"
	},
	{
		id:"2157b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"棣慕華牧師",
		speakerEn:"Rev. Charles Devol",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2158a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"怎樣用錄音帶做佈道工作(1)",
		titleEn:"Tape evangelism(1)"
	},
	{
		id:"2158b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"美妙人生(1)",
		titleEn:"Wonderful life(1)"
	},
	{
		id:"2159a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"怎樣用錄音帶做佈道工作(2)",
		titleEn:"Tape evangelism(2)"
	},
	{
		id:"2159b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2160a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"美妙人生(3)",
		titleEn:"Wonderful life(3)"
	},
	{
		id:"2160b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"麥希貞牧師",
		speakerEn:"Rev. Hay-Chun Maak",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2161a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃仁光博士",
		speakerEn:"J. K. Huang,Ph D",
		titleCn:"科學,理智與信仰(1)",
		titleEn:"Science, reason and faith(1)"
	},
	{
		id:"2161b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃仁光博士",
		speakerEn:"J. K. Huang,Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2162a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃仁光博士",
		speakerEn:"J. K. Huang,Ph D",
		titleCn:"科學,理智與信仰(2)",
		titleEn:"Science, reason and faith(2)"
	},
	{
		id:"2162b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃仁光博士",
		speakerEn:"J. K. Huang,Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2163a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"超越的愛",
		titleEn:"Supreme love"
	},
	{
		id:"2164a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"保惠師—聖靈",
		titleEn:"The Holy Spirit"
	},
	{
		id:"2164b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2165a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(1)",
		titleEn:"Revelation(1)"
	},
	{
		id:"2165b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2166a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(2)",
		titleEn:"Revelation(2)"
	},
	{
		id:"2166b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2167a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(3)",
		titleEn:"Revelation(3)"
	},
	{
		id:"2167b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2168a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(4)",
		titleEn:"Revelation(4)"
	},
	{
		id:"2168b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2169a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(5)",
		titleEn:"Revelation(5)"
	},
	{
		id:"2169b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2170a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(6)",
		titleEn:"Revelation(6)"
	},
	{
		id:"2170b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2171a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(7)",
		titleEn:"Revelation(7)"
	},
	{
		id:"2171b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2172a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(8)",
		titleEn:"Revelation(8)"
	},
	{
		id:"2172b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2173a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(9)",
		titleEn:"Revelation(9)"
	},
	{
		id:"2173b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2174a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(10)",
		titleEn:"Revelation(10)"
	},
	{
		id:"2174b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2175a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(11)",
		titleEn:"Revelation(11)"
	},
	{
		id:"2175b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2176a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(12)",
		titleEn:"Revelation(12)"
	},
	{
		id:"2176b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2177a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(13)",
		titleEn:"Revelation(13)"
	},
	{
		id:"2177b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2178a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(14)",
		titleEn:"Revelation(14)"
	},
	{
		id:"2178b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2179a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(15)",
		titleEn:"Revelation(15)"
	},
	{
		id:"2179b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2180a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(16)",
		titleEn:"Revelation(16)"
	},
	{
		id:"2180b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2181a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(17)",
		titleEn:"Revelation(17)"
	},
	{
		id:"2181b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2182a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(18)",
		titleEn:"Revelation(18)"
	},
	{
		id:"2182b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2183a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳獻章博士",
		speakerEn:"Timothy S. Wu Ph D",
		titleCn:"啟示錄(19)",
		titleEn:"Revelation(19)"
	},
	{
		id:"2184a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"美滿家庭的榜樣",
		titleEn:"Building a Christian family"
	},
	{
		id:"2184b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2185a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"事奉者的維他命C",
		titleEn:"Vitamin C of servant"
	},
	{
		id:"2185b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2186a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"事奉者的有效事奉",
		titleEn:"Efficient servant"
	},
	{
		id:"2186b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2187a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"過充實的人生",
		titleEn:"How to live a fruitful life"
	},
	{
		id:"2187b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2188a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"生命, 生活, 事奉(1)",
		titleEn:"Life, Living and service(1)"
	},
	{
		id:"2188b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2189a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"生命, 生活, 事奉(2)",
		titleEn:"Life, living and service(2)"
	},
	{
		id:"2189b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2190a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"心意更新",
		titleEn:"Renewal mind"
	},
	{
		id:"2190b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2191a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:" 生活的更新",
		titleEn:"Renewal life"
	},
	{
		id:"2191b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2192a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"事奉的更新",
		titleEn:"Renewal ministry"
	},
	{
		id:"2192b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2193a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"悔改與復興",
		titleEn:"Repentance and revival"
	},
	{
		id:"2193b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2194a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"生根建造",
		titleEn:"Rooted and build-up"
	},
	{
		id:"2195a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"生命的突破",
		titleEn:"Break through of life"
	},
	{
		id:"2195b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2196a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"教會的建立",
		titleEn:"Establishment of the church"
	},
	{
		id:"2196b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2197a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"生命的再造",
		titleEn:"Rebuilding of the life"
	},
	{
		id:"2197b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2198a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"樂園的重建",
		titleEn:"Rebuild of the paradise"
	},
	{
		id:"2198b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2199a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"人際關係的更新",
		titleEn:"Renewal of interpersonal relationship"
	},
	{
		id:"2199b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊祖鯤牧師",
		speakerEn:"Rev. C. K. Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2200a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"家庭信息: 祕訣",
		titleEn:"Message for the family—Secret"
	},
	{
		id:"2200b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2201a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"家庭信息: 十架窄路",
		titleEn:"Message for the family—Narrow path to the cross"
	},
	{
		id:"2201b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2202a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"家庭信息: 得與失",
		titleEn:"Message for the family—Gain and loss"
	},
	{
		id:"2202b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2203a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"家庭信息: 失樂園",
		titleEn:"Message for the family—Paradise lost"
	},
	{
		id:"2203b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2204a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"家庭信息: 復樂園",
		titleEn:"Message for the family—Paradise regain"
	},
	{
		id:"2204b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"康來昌牧師",
		speakerEn:"Rev. L. C. Kang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2205a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為世界的祝福(1)",
		titleEn:"To be the blessing of the world(1)"
	},
	{
		id:"2205b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2206a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為世界的祝福(2)",
		titleEn:"To be the blessing of the world(2)"
	},
	{
		id:"2206b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2207a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為教會的祝福(1)",
		titleEn:"To be the blessing of the church(1)"
	},
	{
		id:"2207b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2208a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為教會的祝福(2)",
		titleEn:"To be the blessing of the church(2)"
	},
	{
		id:"2209a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為仇敵的祝福",
		titleEn:"To be the blessing of the enemy"
	},
	{
		id:"2209b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2210a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"成為兒女的祝福",
		titleEn:"To be the blessing of our children"
	},
	{
		id:"2210b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"謝宏忠牧師",
		speakerEn:"Rev. H. C. Shieh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2211a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"信心的道路成為祝福",
		titleEn:"The blessing to the path of faith"
	},
	{
		id:"2211b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2212a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"愛心的服事成為祝福",
		titleEn:"The blessing to the ministry of love"
	},
	{
		id:"2212b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2213a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"忠心到底代代蒙福",
		titleEn:"Be blessed for the faithful dedication"
	},
	{
		id:"2213b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2214a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳逸豪牧師",
		speakerEn:"Rev. Evan Chen",
		titleCn:"觸動生命的敬拜",
		titleEn:"The worship of dynamic life"
	},
	{
		id:"2214b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳逸豪牧師",
		speakerEn:"Rev. Evan Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2215a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳宗清牧師",
		speakerEn:"Rev. Grant Chen",
		titleCn:"生命的事奉",
		titleEn:"The ministry of life"
	},
	{
		id:"2215b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳宗清牧師",
		speakerEn:"Rev. Grant Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2216a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鍾馨慧夫婦",
		speakerEn:"Mrs. S. H. Chung",
		titleCn:"靠主面對青少年問題",
		titleEn:"Challenge the teens by the power of God"
	},
	{
		id:"2216b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鍾馨慧夫婦",
		speakerEn:"Mrs. S. H. Chung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2217a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良信醫師夫婦",
		speakerEn:"Dr. & Mrs. Stephen Cheng",
		titleCn:"四十年生涯歷程",
		titleEn:"Forty years’ life journey"
	},
	{
		id:"2217b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"鄭良信醫師夫婦",
		speakerEn:"Dr. & Mrs. Stephen Cheng",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2218a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黎彼得牧師",
		speakerEn:"Rev. Peter Li",
		titleCn:"從保羅身上學習事奉",
		titleEn:"How to serve by the example of Paul"
	},
	{
		id:"2218b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黎彼得牧師",
		speakerEn:"Rev. Peter Li",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2219a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林祥源牧師",
		speakerEn:"Rev. S. Y. Lin",
		titleCn:"僕人領袖的形象",
		titleEn:"The image of the servant’s leader"
	},
	{
		id:"2220a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉民和牧師",
		speakerEn:"Rev. M. H. Liu",
		titleCn:"晨曦會工作分享",
		titleEn:"Sharing from morning light"
	},
	{
		id:"2221a",
		lang:"English",
		langCn:"英語",
		speakerCn:"nan",
		speakerEn:"Rev. Timothy Tseng",
		titleCn:"nan",
		titleEn:"Believing is seeing"
	},
	{
		id:"2222a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. M. C. Chen",
		titleCn:"服事的生活",
		titleEn:"Life of ministry"
	},
	{
		id:"2223a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邵遵瀾牧師",
		speakerEn:"Rev. C. L. Shao",
		titleCn:"美好的靈性",
		titleEn:"Wonderful spirituality"
	},
	{
		id:"2224a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邵遵瀾牧師",
		speakerEn:"Rev. C. L. Shao",
		titleCn:"耶和華與基甸的刀",
		titleEn:"Jehovah and the knife of Gideon"
	},
	{
		id:"2225a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邊云波牧師",
		speakerEn:"Rev. Benny Pope",
		titleCn:"邊云波的心路歷程",
		titleEn:"Benny Pope’s life journey"
	},
	{
		id:"2226a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張路加牧師",
		speakerEn:"Rev. Luke Chang",
		titleCn:"一件皆大歡喜的事",
		titleEn:"An enjoyful thing"
	},
	{
		id:"2227a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"論斷",
		titleEn:"Judgment"
	},
	{
		id:"2228a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李秀全牧師",
		speakerEn:"Rev. Morley Lee",
		titleCn:"朋友與同工",
		titleEn:"Friends and co-workers"
	},
	{
		id:"2229a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"詹正義牧師",
		speakerEn:"Rev. Silas Chan",
		titleCn:"大衛服事了他的世代",
		titleEn:"David serves his generation"
	},
	{
		id:"2230a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"主觀的救恩",
		titleEn:"Subjective salvation"
	},
	{
		id:"2230b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"林道亮牧師",
		speakerEn:"Rev. Timothy Lin",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2231a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"葛瑞麥金塔博士",
		speakerEn:"Gary L. Mcintosh Ph D",
		titleCn:"多元化教會增長(1)--以一不能蓋全",
		titleEn:"Multiple cultural church growth(1)--One size doesn’t fit all"
	},
	{
		id:"2231b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"葛瑞麥金塔博士",
		speakerEn:"Gary L. Mcintosh Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2232a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"葛瑞麥金塔博士",
		speakerEn:"Gary L. Mcintosh Ph D",
		titleCn:"多元化教會增長(2)--以一不能蓋全",
		titleEn:"Multiple cultural church growth(2)--One size doesn’t fit all"
	},
	{
		id:"2232b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"葛瑞麥金塔博士",
		speakerEn:"Gary L. Mcintosh Ph D",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2233a",
		lang:"English/Taiwanese",
		langCn:"英/台語",
		speakerCn:"葛瑞麥金塔博士",
		speakerEn:"Gary L. Mcintosh Ph D",
		titleCn:"多元化教會增長(3)--以一不能蓋全",
		titleEn:"Multiple cultural church growth(3)--One size doesn’t fit all"
	},
	{
		id:"2234a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"報佳音,傳平安",
		titleEn:"Proclaim the good news and peace"
	},
	{
		id:"2235a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"人生的寶貝",
		titleEn:"The treasure of life"
	},
	{
		id:"2235b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2236a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"應當隨身佩帶的寶物",
		titleEn:"The treasure to carry along"
	},
	{
		id:"2236b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2237a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"無名的見証人",
		titleEn:"Nameless witnesses"
	},
	{
		id:"2237b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2238a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"我們報好信去",
		titleEn:"Let's proclaim the good news"
	},
	{
		id:"2238b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2239a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"透視的眼光(1)",
		titleEn:"See-through vision(1)"
	},
	{
		id:"2239b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2240a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"透視的眼光(2)",
		titleEn:"See-through vision(2)"
	},
	{
		id:"2240b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2241a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"舉起救恩的杯",
		titleEn:"Uphold the cup of salvation"
	},
	{
		id:"2241b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2242a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"與主在各各他",
		titleEn:"With the Lord at Golgotha"
	},
	{
		id:"2242b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2243a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"紀念祂的死",
		titleEn:"Remember His death"
	},
	{
		id:"2244a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"與主在提比哩亞海邊",
		titleEn:"With the Lord at Tiberias"
	},
	{
		id:"2244b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2245a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"愛的挑戰",
		titleEn:"The loving challenge"
	},
	{
		id:"2245b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2246a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"主阿!保守我的家",
		titleEn:"Lord! Protect my home"
	},
	{
		id:"2246b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2247a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"怎樣孝敬父母",
		titleEn:"How to respect parents"
	},
	{
		id:"2247b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2248a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"建立健康的家",
		titleEn:"Build up a healthy home"
	},
	{
		id:"2248b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2249a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"生命的改變與成長",
		titleEn:"The change and growth of life"
	},
	{
		id:"2249b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2250a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"能力的來源--聖靈",
		titleEn:"The source of power--The Holy spirit"
	},
	{
		id:"2250b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2251a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"父親的愛",
		titleEn:"The father's love"
	},
	{
		id:"2251b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2252a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"佳美的腳蹤",
		titleEn:"The beautiful footprints"
	},
	{
		id:"2252b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2253a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"火熱的心",
		titleEn:"The earnest heart"
	},
	{
		id:"2253b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2254a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"舉目向田觀看,莊稼熟了",
		titleEn:"Look up the field! The harvest is ready"
	},
	{
		id:"2255a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"舉目向田觀看,莊稼熟了",
		titleEn:"Look up the field! The harvest is ready"
	},
	{
		id:"2255b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2256a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"建立上好的教會",
		titleEn:"To establish the best church"
	},
	{
		id:"2256b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2257a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"憐憫的心",
		titleEn:"Merciful heart"
	},
	{
		id:"2257b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2258a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"起初的愛",
		titleEn:"The first love"
	},
	{
		id:"2258b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2259a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"合一的美",
		titleEn:"Unity of love"
	},
	{
		id:"2259b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2260a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"新約的執事",
		titleEn:"The new covenant decon"
	},
	{
		id:"2260b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2261a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"壓傷的蘆葦祂不折斷",
		titleEn:"A bruised reed He will not break"
	},
	{
		id:"2262a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"愛主而事奉主",
		titleEn:"Serving the Lord in love"
	},
	{
		id:"2262b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2263a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"為我骨肉之親",
		titleEn:"For my kinsmen's sake"
	},
	{
		id:"2264a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"為你的城市禱告與傳道",
		titleEn:"Pray and preach for your city"
	},
	{
		id:"2264b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2265a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"我的口要說出讚美的話",
		titleEn:"I will speak the word of praise"
	},
	{
		id:"2266a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"我的口要說出讚美的話",
		titleEn:"I will speak the word of praise"
	},
	{
		id:"2267a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"凡事謝恩",
		titleEn:"In everything give thanks!"
	},
	{
		id:"2268a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"凡事謝恩",
		titleEn:"In everything give thanks!"
	},
	{
		id:"2269a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"由哀的感謝",
		titleEn:"Wholehearted thanksgiving"
	},
	{
		id:"2269b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2270a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"乞丐王子",
		titleEn:"Prince of beggar"
	},
	{
		id:"2271a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"乞丐王子",
		titleEn:"Prince of beggar"
	},
	{
		id:"2272a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"照亮世界的光",
		titleEn:"Shining light for the world"
	},
	{
		id:"2273a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"照亮世界的光",
		titleEn:"Shining light for the world"
	},
	{
		id:"2274a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"天上人間",
		titleEn:"The heavenly earth"
	},
	{
		id:"2275a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"天上人間",
		titleEn:"The heavenly earth"
	},
	{
		id:"2275b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2276a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"以基督的心為心",
		titleEn:"Heart for the Christ's heart"
	},
	{
		id:"2276b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2277a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"與神相遇在年終",
		titleEn:"To meet God at the end of year"
	},
	{
		id:"2278a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"擴張帳募,堅固撅子",
		titleEn:"Enlarge the place of your tent, strengthen your stakes"
	},
	{
		id:"2279a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"擴張帳募,堅固撅子",
		titleEn:"Enlarge the place of your tent, strengthen your stakes"
	},
	{
		id:"2279b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2280a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"每日查考聖經",
		titleEn:"Daily devotion"
	},
	{
		id:"2281a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"每日查考聖經",
		titleEn:"Daily devotion"
	},
	{
		id:"2281b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2282a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"在上帝面前的時間",
		titleEn:"Time spent with God"
	},
	{
		id:"2282b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2283a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"耶穌與人類的關係",
		titleEn:"The relationship between Jesus and man"
	},
	{
		id:"2283b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2284a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"讓主服事你",
		titleEn:"Let the Lord serve you"
	},
	{
		id:"2285a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"心的移植",
		titleEn:"Transplanting of heart"
	},
	{
		id:"2286a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"關不住的鐵門",
		titleEn:"The iron gate that hard to close"
	},
	{
		id:"2286b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2287a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"關不住的鐵門",
		titleEn:"The iron gate that hard to close"
	},
	{
		id:"2287b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2288a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"誰肯為我們去呢",
		titleEn:"Who can we send?"
	},
	{
		id:"2288b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2289a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"苦難與被建立",
		titleEn:"Suffering and building-up"
	},
	{
		id:"2289b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2291a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"慶祝主復活",
		titleEn:"Celebration of the rising Lord"
	},
	{
		id:"2291b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2292a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"歡喜傳福音",
		titleEn:"The joy of sharing the gospel"
	},
	{
		id:"2292b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2293a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"蒙主賜福的家庭",
		titleEn:"Blessed family"
	},
	{
		id:"2293b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2294a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"蒙主賜褔的家庭",
		titleEn:"Blessed family"
	},
	{
		id:"2294b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2295a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"偉大的母親--約基別",
		titleEn:"The great mother--Jochebed"
	},
	{
		id:"2295b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2296a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"建立健康的家庭",
		titleEn:"Establishing the health family"
	},
	{
		id:"2296b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2297a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"人生的機會",
		titleEn:"Opportunity for life"
	},
	{
		id:"2297b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2298a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"趁著白日",
		titleEn:"While it's the day"
	},
	{
		id:"2298b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2299a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"能力的來源--聖靈",
		titleEn:"Source of power--the Holy Spirit"
	},
	{
		id:"2299b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2300a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"父親的心",
		titleEn:"The heart of the father"
	},
	{
		id:"2300b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2301a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"蒙召與屬靈的恩賜",
		titleEn:"The gift of calling and the spirit"
	},
	{
		id:"2301b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2302a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"我不以福音為恥",
		titleEn:"I am not ashamed of the gospel"
	},
	{
		id:"2302b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2303a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"建立別人的人",
		titleEn:"The edifying person"
	},
	{
		id:"2303b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2304a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"為福音的緣故",
		titleEn:"For the sake of the gospel"
	},
	{
		id:"2304b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2305a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"健全的心靈",
		titleEn:"The well--being"
	},
	{
		id:"2305b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2306a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"耶和華是我的牧者",
		titleEn:"The Lord is my shepher"
	},
	{
		id:"2306b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2307a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"釋放",
		titleEn:"Set free"
	},
	{
		id:"2307b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2308a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"教會服事與見証",
		titleEn:"The church ministry and testimony"
	},
	{
		id:"2309a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"教會國度與使命",
		titleEn:"The church kingdom and mission"
	},
	{
		id:"2309b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2310a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"粧稼多,工人少",
		titleEn:"The harvest is ripe but the labor is few"
	},
	{
		id:"2310b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2311a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"五餅二魚的人生",
		titleEn:"The life of five loaves and two fishes"
	},
	{
		id:"2311b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2312a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"我的民哪,你們當聽我的話",
		titleEn:"My people! Listen to Me"
	},
	{
		id:"2312b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2313a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"選擇成為感恩喜樂的人",
		titleEn:"Choose to be man of joy and thanksgiving"
	},
	{
		id:"2313b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2314a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"使感謝歸於上帝",
		titleEn:"All the thanks be to God"
	},
	{
		id:"2314b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2315a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"建立內心的平安",
		titleEn:"Build up inner peace"
	},
	{
		id:"2315b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2316a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"以馬內利",
		titleEn:"Emmanuel"
	},
	{
		id:"2316b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2317a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"聖誕節的敬拜",
		titleEn:"The Christmas worship"
	},
	{
		id:"2317b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2318a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"遵行大使命",
		titleEn:"Obeying the great commision"
	},
	{
		id:"2319a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"人人傳道,造就自己",
		titleEn:"Everyone preaching and edifying oneself"
	},
	{
		id:"2319b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2320a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"耶穌哭了",
		titleEn:"Jesus cry"
	},
	{
		id:"2320b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2321a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"還福音的債",
		titleEn:"Pay the debt of the gospel"
	},
	{
		id:"2321b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2322a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"念母愛想主恩",
		titleEn:"Remember the Lord's grace and mother's love"
	},
	{
		id:"2322b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2323a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"信仰與實際生活",
		titleEn:"Belief and life"
	},
	{
		id:"2323b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2324a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"效法馬其頓教會",
		titleEn:"Imitate the church of Macedonia"
	},
	{
		id:"2324b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2325a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"來吧!上帝的美宴",
		titleEn:"Come for God's feast"
	},
	{
		id:"2325b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2326a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"齊心努力,並肩作戰",
		titleEn:"Fight with unity"
	},
	{
		id:"2326b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2327a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"基督心目中的我",
		titleEn:"How Christ looks at me"
	},
	{
		id:"2327b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2328a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"歸家",
		titleEn:"Homecoming"
	},
	{
		id:"2328b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2329a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"有異象與使命的基督徒",
		titleEn:"Christian with vision and mission"
	},
	{
		id:"2329b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2330a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"感恩與愛主",
		titleEn:"Thanksgiving and loving the Lord"
	},
	{
		id:"2331a",
		lang:"Taiwanese Chinese",
		langCn:"台華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"忠心與職責",
		titleEn:"Faithfulness and well-done"
	},
	{
		id:"2331b",
		lang:"Taiwanese Chinese",
		langCn:"台華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2332a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"充滿能力的見証",
		titleEn:"Powerful testimony"
	},
	{
		id:"2332b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2333a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"與人同得福音的好處",
		titleEn:"Sharing the good news with others"
	},
	{
		id:"2333b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2334a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"生命的思攷與選擇",
		titleEn:"Meditating and making choice of life"
	},
	{
		id:"2334b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2335a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"十字架下的沉思",
		titleEn:"Meditation under the cross"
	},
	{
		id:"2335b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2336a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"面對未來十年教會的挑戰",
		titleEn:"Facing the challenges of the church in coming 10 years"
	},
	{
		id:"2336b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2337a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"第一重要的誡命",
		titleEn:"The greatest commandament"
	},
	{
		id:"2337b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2338a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"成全聖徒,建立基督身体",
		titleEn:"Prepare God's people for works of service, so that the body of Christ may be build up"
	},
	{
		id:"2338b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2339a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"重建的愛和關懷",
		titleEn:"Rebuilt love and relationship"
	},
	{
		id:"2339b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2341a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"有影響力的生命",
		titleEn:"The influential life"
	},
	{
		id:"2341b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2342a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"帶祝福給人的使女",
		titleEn:"The Lord's servant bringing the blessing to the others"
	},
	{
		id:"2342b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"吳德聖牧師",
		speakerEn:"Rev. Samuel Wu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2343a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"Y 2 K",
		titleEn:"Y 2 K"
	},
	{
		id:"2343b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2344a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迎接上帝的時機",
		titleEn:"The time to meet the Lord"
	},
	{
		id:"2344b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2345a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"心靈駭客",
		titleEn:"Spiritual heaker"
	},
	{
		id:"2345b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2346a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"生命之旅",
		titleEn:"The life journey"
	},
	{
		id:"2346b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2347a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"禾場的呼聲",
		titleEn:"The joyful cry in the field"
	},
	{
		id:"2347b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2348a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"基列的乳香",
		titleEn:"Gilead's aroma"
	},
	{
		id:"2348b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2349a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"打造燦爛人生",
		titleEn:"Making the bright shining life"
	},
	{
		id:"2349b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2350a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"遵你意行",
		titleEn:"Do the Lord's will"
	},
	{
		id:"2350b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2351a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"如何知道神的旨意",
		titleEn:"How to know God's will?"
	},
	{
		id:"2351b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2352a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"成為有價值的人",
		titleEn:"To be a man of value"
	},
	{
		id:"2353a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"把這山給我",
		titleEn:"Give me the mountain"
	},
	{
		id:"2353b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2354a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"鎖定生命的指標",
		titleEn:"Make sure the guideline for life"
	},
	{
		id:"2354b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2355a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"給自己一個神蹟",
		titleEn:"A Miracle for oneself"
	},
	{
		id:"2355b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2356a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"擁有饒恕的本錢",
		titleEn:"The ownership for forgiveness"
	},
	{
		id:"2356b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2357a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"人格的特質和服事",
		titleEn:"The character of personality and ministry"
	},
	{
		id:"2357b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2358a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"基立溪旁的經歷",
		titleEn:"The experience in the Kerith Ravine"
	},
	{
		id:"2358b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2359a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"什麼叫做幸福",
		titleEn:"What is happiness?"
	},
	{
		id:"2359b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2360a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"感恩的實際表現",
		titleEn:"The manifestation of thanksgiving"
	},
	{
		id:"2360b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2361a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"要做比這更大的事",
		titleEn:"To achieve the greater things"
	},
	{
		id:"2361b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2362a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"到底有沒有天使",
		titleEn:"Do angels exist?"
	},
	{
		id:"2362b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2363a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"到底有沒有天使",
		titleEn:"Do angels exist?"
	},
	{
		id:"2363b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2364a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"永遠的好消息",
		titleEn:"Everlasting good news"
	},
	{
		id:"2364b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2365a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"教會第一個神蹟的意義",
		titleEn:"The significance of first miracle in church"
	},
	{
		id:"2365b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2366a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"生命的突破",
		titleEn:"The breakthrough of life"
	},
	{
		id:"2367a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"上帝眼中的我",
		titleEn:"Me in the eyes of God"
	},
	{
		id:"2368a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"喜樂的秘訣",
		titleEn:"The secret of joy"
	},
	{
		id:"2368b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2369a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"有智慧的人生",
		titleEn:"The wisdom of life"
	},
	{
		id:"2369b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2370a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"誰能看見上帝",
		titleEn:"Who can see God"
	},
	{
		id:"2371a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"渴慕上帝的殿",
		titleEn:"Adore the temple of God"
	},
	{
		id:"2371b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2372a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"信仰的足跡",
		titleEn:"The footprints of belief"
	},
	{
		id:"2372b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2373a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"心靈的起點",
		titleEn:"The beginning of the soul"
	},
	{
		id:"2373b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2374a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"一切都將成為美好",
		titleEn:"All will become beautiful"
	},
	{
		id:"2374b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2375a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"感恩的真諦",
		titleEn:"The truth about thanksgiving"
	},
	{
		id:"2376a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"開我信心的眼睛",
		titleEn:"Open my eyes for faith"
	},
	{
		id:"2376b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2377a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"和平的使者",
		titleEn:"Ambassador for peace"
	},
	{
		id:"2378a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"從天上來的聲音",
		titleEn:"The voice from above"
	},
	{
		id:"2378b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2379a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"大喜的信息",
		titleEn:"The great message"
	},
	{
		id:"2379b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2380a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"把船開到水深之處",
		titleEn:"Put out into deep water"
	},
	{
		id:"2380b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2381a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"正月初一",
		titleEn:"January 1st"
	},
	{
		id:"2382a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"活潑長存的道",
		titleEn:"The word of God is living and stays forever"
	},
	{
		id:"2382b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2383a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"流出生命的活水",
		titleEn:"The living water of life"
	},
	{
		id:"2383b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2384a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"流出生命的活水",
		titleEn:"The living water of life"
	},
	{
		id:"2384b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2385a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"愛的旋律",
		titleEn:"Melody of love"
	},
	{
		id:"2385b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2386a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"你們來看",
		titleEn:"Come! All ye people"
	},
	{
		id:"2386b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2387a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"你們來看",
		titleEn:"Come! All ye people"
	},
	{
		id:"2387b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2388a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"天生贏家",
		titleEn:"A born winner"
	},
	{
		id:"2388b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2389a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"誰是我的鄰舍",
		titleEn:"Who is my neighbor?"
	},
	{
		id:"2389b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2390a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"誰是我的鄰舍",
		titleEn:"Who is my neighbor?"
	},
	{
		id:"2390b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2391a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"十字架下你和我",
		titleEn:"You and me under the cross"
	},
	{
		id:"2391b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2392a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"十字架下祂和我",
		titleEn:"He and me under the cross"
	},
	{
		id:"2392b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2393a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"默想主耶穌",
		titleEn:"Meditating on Jesus Christ"
	},
	{
		id:"2393b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2394a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"復活的基督",
		titleEn:"The resurrected Christ"
	},
	{
		id:"2395a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"打開一道有趣之門",
		titleEn:"Open a fascinating door"
	},
	{
		id:"2395b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2396a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"與眾不同的信仰",
		titleEn:"The peculiar belief"
	},
	{
		id:"2396b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2397a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"會思想的蘆葦",
		titleEn:"The thinking reed"
	},
	{
		id:"2398a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"真哭",
		titleEn:"True cry"
	},
	{
		id:"2399a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"真愛",
		titleEn:"True love"
	},
	{
		id:"2399b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2400a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"真實的敬拜",
		titleEn:"Truth and worship"
	},
	{
		id:"2400b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2401a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"福音出擊",
		titleEn:"Strike for the gospel"
	},
	{
		id:"2401b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2402a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"別讓地球再流淚",
		titleEn:"Let not the earth cry"
	},
	{
		id:"2403a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"進入父親的心中",
		titleEn:"Enter the heart of the father"
	},
	{
		id:"2405a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"普拉精神",
		titleEn:"The Purah's spirit"
	},
	{
		id:"2405b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2406a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"溝通的調劑",
		titleEn:"How to communicate"
	},
	{
		id:"2406b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2407a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"得享滿足的途徑",
		titleEn:"The way to get satisfied"
	},
	{
		id:"2408a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"亂世中的呼召",
		titleEn:"The calling in the midst of confused world"
	},
	{
		id:"2408b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2409a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"我也差你",
		titleEn:"I am also sending you"
	},
	{
		id:"2409b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2410a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"瞭解你工作的力點",
		titleEn:"Understand the strength of your work"
	},
	{
		id:"2411a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"明白神工作的季節",
		titleEn:"Understand the season for God's work"
	},
	{
		id:"2411b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2412a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"肯定自己的身份",
		titleEn:"Assure One's own identity"
	},
	{
		id:"2412b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2413a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"嗎哪的定律",
		titleEn:"The rule of manna"
	},
	{
		id:"2414a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"今日逃城",
		titleEn:"Today's abandoned city"
	},
	{
		id:"2415a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"得享滿足的途徑",
		titleEn:"The way to get satisfied"
	},
	{
		id:"2415b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2416b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2417a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"萬國禱告的殿",
		titleEn:"The temple for all nation's prayers"
	},
	{
		id:"2417b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2418a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"更新,突破,成長",
		titleEn:"Renewal, breakthrough and growth"
	},
	{
		id:"2418b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2419a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"建立穩固的根基",
		titleEn:"Establish the solid foundation"
	},
	{
		id:"2419b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2420a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"建立穩固的根基",
		titleEn:"Establish the solid foundation"
	},
	{
		id:"2420b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2421a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"感恩的筵席",
		titleEn:"The table for thanksgiving"
	},
	{
		id:"2421b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2422a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"感恩的筵席",
		titleEn:"The table for thanksgiving"
	},
	{
		id:"2422b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2423a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"真知道祂",
		titleEn:"To know Him truly"
	},
	{
		id:"2423b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2424a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"真知道祂",
		titleEn:"To know Him truly"
	},
	{
		id:"2424b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2425a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迎接嶄新的Y 2 K",
		titleEn:"Welcome the brandnew Y 2 K"
	},
	{
		id:"2425b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2426a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迎接嶄新的Y 2 K",
		titleEn:"Welcome the brandnew Y 2 K"
	},
	{
		id:"2426b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2427a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"進入聖靈的更新",
		titleEn:"Enter the spiritual renewal"
	},
	{
		id:"2427b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2428a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"聖靈充滿的意義",
		titleEn:"The significance of filling with the Holy Spirit"
	},
	{
		id:"2429a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"敬拜的生活",
		titleEn:"The life of worship"
	},
	{
		id:"2430a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"聖潔的意義",
		titleEn:"The meaning of holiness"
	},
	{
		id:"2431a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"聖潔的意義",
		titleEn:"The meaning of holiness"
	},
	{
		id:"2432a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"活出聖潔的生命",
		titleEn:"Living out the life of holiness"
	},
	{
		id:"2433a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"活出聖潔的生命",
		titleEn:"Living out the life of holiness"
	},
	{
		id:"2434a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"跨世紀的彩虹",
		titleEn:"The rainbow of cross-century"
	},
	{
		id:"2435a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"跨世紀的彩虹",
		titleEn:"The rainbow of cross-century"
	},
	{
		id:"2436a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"邁向黎明",
		titleEn:"Stepping out for morning broken"
	},
	{
		id:"2437a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"邁向黎明",
		titleEn:"Stepping out for morning broken"
	},
	{
		id:"2438a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"點燃福音的火焰",
		titleEn:"Light up the fire for the gospel"
	},
	{
		id:"2438b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2439a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"點燃福音的火焰",
		titleEn:"Light up the fire for the gospel"
	},
	{
		id:"2440a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"進入應許之地",
		titleEn:"Enter the promised land"
	},
	{
		id:"2441a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"進入應許之地",
		titleEn:"Enter the promised land"
	},
	{
		id:"2443a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第一站",
		titleEn:"Canon's first stop"
	},
	{
		id:"2444a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第一站",
		titleEn:"Canon's first stop"
	},
	{
		id:"2445a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第二站",
		titleEn:"Canon's second stop"
	},
	{
		id:"2446a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第二站",
		titleEn:"Canon's second stop"
	},
	{
		id:"2447a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第三站",
		titleEn:"Canon's third stop"
	},
	{
		id:"2448a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"迦南第三站",
		titleEn:"Canon's third stop"
	},
	{
		id:"2449a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"成為福音的夥伴",
		titleEn:"Be the gospel's partner"
	},
	{
		id:"2450a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳福音的要訣",
		titleEn:"The secret of evengelism"
	},
	{
		id:"2451a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳福音的要訣",
		titleEn:"The secret of evengelism"
	},
	{
		id:"2451b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2452a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳福音的心志",
		titleEn:"The heart for evengelism"
	},
	{
		id:"2452b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2453a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳福音的心志",
		titleEn:"The heart for evengelism"
	},
	{
		id:"2453b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2454a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"建立福音的團隊",
		titleEn:"Build the team for the gospel"
	},
	{
		id:"2454b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2455a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"建立福音的團隊",
		titleEn:"Build the team for the gospel"
	},
	{
		id:"2455b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2456a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"活出與福音相稱的生活",
		titleEn:"Living out the life matching with the gospel"
	},
	{
		id:"2457a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"活出與福音相稱的生活",
		titleEn:"Living out the life matching with the gospel"
	},
	{
		id:"2458a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"禾田的呼喚",
		titleEn:"The calling from the field"
	},
	{
		id:"2459a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳永遠的福音",
		titleEn:"Share me everlasting gospel"
	},
	{
		id:"2460a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"傳永遠的福音",
		titleEn:"Share me everlasting gospel"
	},
	{
		id:"2461a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"成為傳福音的教會",
		titleEn:"Become the church of the gospel"
	},
	{
		id:"2462a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"成為傳福音的教會",
		titleEn:"Become the church of the gospel"
	},
	{
		id:"2464a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"如何愛社區",
		titleEn:"How to love the community"
	},
	{
		id:"2465a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"如何愛教會",
		titleEn:"How to love the church"
	},
	{
		id:"2466a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"主的榮耀與全能",
		titleEn:"The Lord's glory and almighty"
	},
	{
		id:"2467a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"求主教導我們禱告",
		titleEn:"Lord, Teach us how to pray"
	},
	{
		id:"2467b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2468a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"與天父有約",
		titleEn:"Meeting with the heavenly father"
	},
	{
		id:"2469a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"與天父有約",
		titleEn:"Meeting with the heavenly father"
	},
	{
		id:"2470a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"強而有力的禱告",
		titleEn:"Strong and powerful prayers"
	},
	{
		id:"2471a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"強而有力的禱告",
		titleEn:"Strong and powerful prayers"
	},
	{
		id:"2471b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2472a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"上帝的電話號碼",
		titleEn:"God's phone number"
	},
	{
		id:"2473a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"上帝的電話號碼",
		titleEn:"God's phone number"
	},
	{
		id:"2474a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"先求衪的國",
		titleEn:"Seek ye first the kingdom of God"
	},
	{
		id:"2475a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"先求祂的義",
		titleEn:"Seek His righteousness"
	},
	{
		id:"2476a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"先求衪的義",
		titleEn:"Seek His righteousness"
	},
	{
		id:"2477a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"全人關懷",
		titleEn:"Caring for whole well-being"
	},
	{
		id:"2478a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"全人關懷",
		titleEn:"Caring for whole well-being"
	},
	{
		id:"2479a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"在關愛中成長",
		titleEn:"Growing in love"
	},
	{
		id:"2480a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"在關愛中成長",
		titleEn:"Growing in love"
	},
	{
		id:"2481a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"信仰四不",
		titleEn:"Four-no in belief"
	},
	{
		id:"2482a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"信仰四不",
		titleEn:"Four-no in belief"
	},
	{
		id:"2483a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"打造贏家",
		titleEn:"Create the winner"
	},
	{
		id:"2483b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2484a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"愛恩一起來",
		titleEn:"Let's come to love in grace"
	},
	{
		id:"2485a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"愛恩一起來",
		titleEn:"Let's come to love in grace"
	},
	{
		id:"2486a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"成為有影響力的人",
		titleEn:"Become a man of influence"
	},
	{
		id:"2487a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"為我骨肉之親",
		titleEn:"For the sake of my kinsmen"
	},
	{
		id:"2488a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"為我骨肉之親",
		titleEn:"For the sake of my kinsmen"
	},
	{
		id:"2489a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"享受有好牧者的人生",
		titleEn:"Enjoy the life with a good shepher"
	},
	{
		id:"2490a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"享受有好牧者的人生",
		titleEn:"Enjoy the life with a good shepher"
	},
	{
		id:"2490b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2491a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"突破宣道的欄阻",
		titleEn:"Break the barriers of evangelism"
	},
	{
		id:"2491b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2492a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"突破宣道的欄阻",
		titleEn:"Break the barriers of evangelism"
	},
	{
		id:"2492b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2493a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"復興的真義",
		titleEn:"The true meaning of revival"
	},
	{
		id:"2494a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"復興的真義",
		titleEn:"The true meaning of revival"
	},
	{
		id:"2494b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2495a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"教會復興的步驟",
		titleEn:"The steps to church revival"
	},
	{
		id:"2495b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2496a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"教會復興的步驟",
		titleEn:"The steps to church revival"
	},
	{
		id:"2496b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2497a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"善用勞動驅力",
		titleEn:"Make good use of labor force"
	},
	{
		id:"2497b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2498a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"善用勞動驅力",
		titleEn:"Make good use of labor force"
	},
	{
		id:"2499a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"除舊布新",
		titleEn:"The old has gone and the new has come"
	},
	{
		id:"2501a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"住在至高者隱密處",
		titleEn:"Live under the hiding place of the highest"
	},
	{
		id:"2501b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2502a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"模範的福音使者",
		titleEn:"The model of gospel messenger"
	},
	{
		id:"2503a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"活出王權",
		titleEn:"To be soverign"
	},
	{
		id:"2505a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"虛空與充實",
		titleEn:"Vanity and fulness"
	},
	{
		id:"2506a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"竭力傳揚祂",
		titleEn:"Preaching Him wholeheartedly"
	},
	{
		id:"2507a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"竭力傳揚祂",
		titleEn:"Preaching Him wholeheartedly"
	},
	{
		id:"2508a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"上帝的公義與赦免",
		titleEn:"God's righteousness and forgiveness"
	},
	{
		id:"2509a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"上蒂的公義與赦免",
		titleEn:"God's righteousness and forgiveness"
	},
	{
		id:"2511a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"困境中的覺醒",
		titleEn:"Awakening in suffering"
	},
	{
		id:"2512a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"困境中的覺醒",
		titleEn:"Awakening in suffering "
	},
	{
		id:"2513a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"你對來世知多少",
		titleEn:"Do you know the coming life?"
	},
	{
		id:"2513b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2514a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"天賜生命凱歌",
		titleEn:"The victorious song of heaven-given life"
	},
	{
		id:"2514b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2515a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"一位最親密的朋友",
		titleEn:"A closest friend"
	},
	{
		id:"2516a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉瑞義牧師",
		speakerEn:"Rev. Donald Liu",
		titleCn:"萬國禱告的殿",
		titleEn:"The temple for all nation's prayers"
	},
	{
		id:"2516a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"一位最親密的朋友",
		titleEn:"A closest friend"
	},
	{
		id:"2517a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"從禱告到復興",
		titleEn:"From prayer to revival"
	},
	{
		id:"2518a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"從禱告到復興",
		titleEn:"From prayer to revival"
	},
	{
		id:"2519a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"教會的使命",
		titleEn:"The mission of the church"
	},
	{
		id:"2520a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"教會的使命",
		titleEn:"The mission of the church"
	},
	{
		id:"2520b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"莊澤豊牧師",
		speakerEn:"Rev.Tse Feng Chuang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2521a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"看啊! 你們的神",
		titleEn:"Behold! Your God"
	},
	{
		id:"2521b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2522a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"劉富理牧師",
		speakerEn:"Rev. Felix Liu",
		titleCn:"看啊! 你們的神",
		titleEn:"Behold! Your God"
	},
	{
		id:"2523a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev Susan Chou",
		titleCn:"生命的事奉",
		titleEn:"The ministry of life"
	},
	{
		id:"2524a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev Susan Chou",
		titleCn:"生命的事奉",
		titleEn:"The ministry of life"
	},
	{
		id:"2524b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2525a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(1)",
		titleEn:"Personal evangelism(1)"
	},
	{
		id:"2525b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2526a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(2)",
		titleEn:"Personal evangelism(2)"
	},
	{
		id:"2526b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2527a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(3)",
		titleEn:"Personal evangelism(3)"
	},
	{
		id:"2527b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2528a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(4)",
		titleEn:"Personal evangelism(4)"
	},
	{
		id:"2528b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2529a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(5)",
		titleEn:"Personal evangelism(5)"
	},
	{
		id:"2529b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2530a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(6)",
		titleEn:"Personal evangelism(6)"
	},
	{
		id:"2530b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2531a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(7) ",
		titleEn:"Personal evangelism(7)"
	},
	{
		id:"2532a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(8)",
		titleEn:"Personal evangelism(8)"
	},
	{
		id:"2532b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2533a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(9)",
		titleEn:"Personal evangelism(9)"
	},
	{
		id:"2533b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2534a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(10)",
		titleEn:"Personal evangelism(10)"
	},
	{
		id:"2534b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2535a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(11)",
		titleEn:"Personal evangelism(11)"
	},
	{
		id:"2535b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2536a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"個人談道(12)",
		titleEn:"Personal evangelism(12)"
	},
	{
		id:"2536b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2537a",
		lang:"Chinese",
		langCn:"華語廣播劇",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"飛躍的生命",
		titleEn:"Soaring Life"
	},
	{
		id:"2537b",
		lang:"Chinese",
		langCn:"華語廣播劇",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2538a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Pride--Part 1,  Proverbs 6--30"
	},
	{
		id:"2538b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2539a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Pride--Part 2,  Proverbs 6--30"
	},
	{
		id:"2539b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2540a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Humility,  Proverbs 3--29"
	},
	{
		id:"2540b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2541a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Laziness, Proverbs 6--28"
	},
	{
		id:"2541b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2542a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Diligence, Proverbs 6--28"
	},
	{
		id:"2542b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2543a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Self-Control, Proverbs 22--31"
	},
	{
		id:"2543b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2544a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Anger, Proverbs 12--30"
	},
	{
		id:"2544b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2545a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Lying--Part 1, Proverbs 4--26"
	},
	{
		id:"2545b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2546a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Lying--Part 2, Proverbs 4--26"
	},
	{
		id:"2546b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2547a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Truth, Proverbs 3--29"
	},
	{
		id:"2547b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2548a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"The tongue, Proverbs 6--29"
	},
	{
		id:"2548b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2549a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Gossip, Proverbs 10--26"
	},
	{
		id:"2549b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2550a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Strife. Proverbs 10--30"
	},
	{
		id:"2550b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2551a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Friends, Proverbs 12--27"
	},
	{
		id:"2551b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2552a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"The immoral person, Proverbs 2--31"
	},
	{
		id:"2552b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2553a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Integrity, Proverbs 10--28"
	},
	{
		id:"2553b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2554a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Wealth--Part 1, Proverbs 1--30"
	},
	{
		id:"2554b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2555a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Wealth--Part 2, Proverbs 1--30"
	},
	{
		id:"2555b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2556a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Wealth--Part 3, Proverbs 1--30"
	},
	{
		id:"2556b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2557a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Poverty--Part 1, Proverbs 10--31"
	},
	{
		id:"2557b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2558a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Poverty--Part 2, Proverbs 10--31"
	},
	{
		id:"2558b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2559a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Self--Destruction--Part 1, Proverbs 1--29"
	},
	{
		id:"2559b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2560a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Self--Destruction--Part 2, Proverbs 1--29"
	},
	{
		id:"2560b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward H Pauley, Ph D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2561a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang MD",
		titleCn:"個人談道的要領",
		titleEn:"Guideline for personal evangelism"
	},
	{
		id:"2561b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃文雄醫師",
		speakerEn:"Luke Huang MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2562a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美博士",
		speakerEn:"Dr. Rebecca Liu",
		titleCn:"人生異象的重建及預備",
		titleEn:"The rebuilt and preparation for life vision"
	},
	{
		id:"2562b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉王仁美博士",
		speakerEn:"Dr. Rebecca Liu",
		titleCn:"續",
		titleEn:"Continued "
	},
	{
		id:"2563a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉高芳博士",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"家庭的需要",
		titleEn:"The needs of the family"
	},
	{
		id:"2563b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉高芳博士",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2564a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉高芳博士",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"夫妻事工",
		titleEn:"Husband and wife ministry"
	},
	{
		id:"2564b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉高芳博士",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2565a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"信仰的首要: 敬畏神",
		titleEn:"The importance of belief: Fear the Lord"
	},
	{
		id:"2565b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2566a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"佈道的需要",
		titleEn:"The need for evangelism"
	},
	{
		id:"2566b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2567a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"全人醫治特會(1) 主啊! 醫治我",
		titleEn:"Whole being healing(1) Lord! Heal me"
	},
	{
		id:"2567b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2568a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"全人醫治特會(2) 醫治心靈的創傷",
		titleEn:"Whole being healing(2) Heal the wound of the soul"
	},
	{
		id:"2568b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"劉富理牧師",
		speakerEn:"Dr. Joshua Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2569a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"全人醫治特會(1) 原生家庭",
		titleEn:"Whole being healing(1) Procreative family"
	},
	{
		id:"2569b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2570a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"全人醫治特會(2) 生命傷痕",
		titleEn:"Whole being healing(2) The wound of life"
	},
	{
		id:"2570b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2571a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(1) 智慧",
		titleEn:"Proverbs(1) Wisdom"
	},
	{
		id:"2571b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"敬畏",
		titleEn:"Reverence"
	},
	{
		id:"2572a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(2) 試探",
		titleEn:"Proverbs(2) Temptation"
	},
	{
		id:"2573a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(3) 尋求",
		titleEn:"Proverbs(3) To seek"
	},
	{
		id:"2573b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"謹守",
		titleEn:"To keep"
	},
	{
		id:"2574a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(4) 上帝",
		titleEn:"Proverbs(4) God"
	},
	{
		id:"2574b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"珍寶",
		titleEn:"To Treasure"
	},
	{
		id:"2575a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(5) 鄰舍",
		titleEn:"Proverbs(5) Neighbor"
	},
	{
		id:"2575b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"傳家寶",
		titleEn:"The pass-on treasure"
	},
	{
		id:"2576a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(6) 心",
		titleEn:"Proverbs(6) Heart"
	},
	{
		id:"2576b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"性",
		titleEn:"Sex"
	},
	{
		id:"2577a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(7) 作保",
		titleEn:"Proverbs(7) To guarantee"
	},
	{
		id:"2577b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"觀察",
		titleEn:"To observe"
	},
	{
		id:"2578a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(8) 惡人",
		titleEn:"Proverbs(8) The wicked"
	},
	{
		id:"2578b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"姦淫",
		titleEn:"Adultery"
	},
	{
		id:"2579a",
		lang:"Taiwanese",
		langCn:"台齬",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(9) 啟示",
		titleEn:"Proverbs(9) Revelation"
	},
	{
		id:"2579b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"勤勞",
		titleEn:"Hard-working"
	},
	{
		id:"2580a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(10) 施捨",
		titleEn:"Proverbs(10) To give"
	},
	{
		id:"2580b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"舌頭",
		titleEn:"The tongue"
	},
	{
		id:"2581a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(11) 管教",
		titleEn:"Proverbs(11) To discipline"
	},
	{
		id:"2581b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"宜家",
		titleEn:"To make an orderly home"
	},
	{
		id:"2582a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(12) 人心",
		titleEn:"Proverbs(12) Human heart"
	},
	{
		id:"2582b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"父子",
		titleEn:"Father and son"
	},
	{
		id:"2583a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"箴言(13) 耳朵  ",
		titleEn:"Proverbs(13) The ear"
	},
	{
		id:"2583b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"憤怒",
		titleEn:"The anger"
	},
	{
		id:"2584a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1987 媽媽靈修會(1)願你吸引我:雅歌書",
		titleEn:"May you draw me closer(1):The Song of Songs"
	},
	{
		id:"2584b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2585a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1987 媽媽靈修會(2)願你吸引我:雅歌書",
		titleEn:"May you draw me closer(2):The Song of Songs"
	},
	{
		id:"2585b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2586a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1987 媽媽靈修會(3)願你吸引我:雅歌書",
		titleEn:"May you draw me closer(3):The Song of Songs"
	},
	{
		id:"2586b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2587a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"1987 媽媽靈修會(4)願你吸引我:雅歌書",
		titleEn:"May you draw me closer(4):The Song of Songs"
	},
	{
		id:"2587b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2588a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(1)馬可1:9—20",
		titleEn:"The life investment(1)Mark 1:9—20"
	},
	{
		id:"2588b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2589a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的投資(2)馬太16:13—26",
		titleEn:"The life investment(2)Mathew 16:13—26"
	},
	{
		id:"2589b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2590a",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"親近神(1)詩篇19:",
		titleEn:"To be near God(1)Psalm 19:"
	},
	{
		id:"2590b",
		lang:"Taiwanese/Chinese",
		langCn:"台/華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2591a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"親近神(2)詩篇16:",
		titleEn:"To be near God(2)Psalm 16:"
	},
	{
		id:"2591b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2592a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"親近神(3)詩27:",
		titleEn:"To be near God(3)Psalm 27:"
	},
	{
		id:"2592b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2593a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"重整生命的陞旗(1)當你失敗時",
		titleEn:"To rebuild the banner of life(1)When you fail"
	},
	{
		id:"2593b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2594a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"重整生命的陞旗(2)當你環境轉變時",
		titleEn:"To rebuild the banner of life(2)When your environment changes"
	},
	{
		id:"2595a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"重整生命的陞旗(3)當你受撒旦攻擊時",
		titleEn:"To rebuild the banner of life(3)When Satan attacks you"
	},
	{
		id:"2595b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2596a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(1)",
		titleEn:"Renew your relationship with the Lord(1)"
	},
	{
		id:"2596b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2597a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(2)",
		titleEn:"Renew your relationship with the Lord(2)"
	},
	{
		id:"2597b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2598a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(3)",
		titleEn:"Renew your relationship with the Lord(3)"
	},
	{
		id:"2598b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2599a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(1)",
		titleEn:"Renew your relationship with the Lord(1)"
	},
	{
		id:"2599b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2600a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(2)",
		titleEn:"Renew your relationship with the Lord(2)"
	},
	{
		id:"2600b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2601a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更新與主之關係(3)",
		titleEn:"Renew your relationship with the Lord(3)"
	},
	{
		id:"2601b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2602a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣 (1) 約 4:1-30 ",
		titleEn:"No longer the same (1) John 4:1-30"
	},
	{
		id:"2602b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2603a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣 (2) 約 4:31-38",
		titleEn:"No longer the same (2) John 4:31-38"
	},
	{
		id:"2603b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2604a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣 (3) 約 6:34-44, 51-69",
		titleEn:"No longer the same (3) John 6:34-44, 51-69"
	},
	{
		id:"2604b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2605a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"他選擇了十字架 (1) 太 26:36-46",
		titleEn:"He chooses the cross (1) Mathew 26:36-46"
	},
	{
		id:"2605b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2606a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"他選擇了十字架 (2) 太 27:27-37",
		titleEn:"He chooses the cross (2) Mathew 27:27-37"
	},
	{
		id:"2606b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2607a",
		lang:"Chinese",
		langCn:"華/英",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"復活的大能  太  28:1-10",
		titleEn:"The power of resurrection,  Mathew 28:1-10"
	},
	{
		id:"2607b",
		lang:"Chinese",
		langCn:"華/英",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2608a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在個性上的成長 (1) 撒上 3:1-10, 19-21",
		titleEn:"The grow in characters (1) 1 Samuel 3:1-10, 19-21 "
	},
	{
		id:"2608b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2609a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在個性上的成長 (2) 撒上 9:1-7",
		titleEn:"The grow in characters (2) 1 Samuel 9:1-7 "
	},
	{
		id:"2609b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2610a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在個性上的成長 (3) 撒上 17:34-36, 41-49",
		titleEn:"The grow in characters (3) 1 Samuel 17:34-36, 41-49"
	},
	{
		id:"2610b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2611a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在眼淚中遇見神 (1) 詩42: 43:",
		titleEn:"To meet God in tears (1) Psalm 42: 43:"
	},
	{
		id:"2611b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2612a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在寧靜中遇見神 (2) 詩 46:",
		titleEn:"To meet God in Tranquility (2) Psalm 46:"
	},
	{
		id:"2612b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2613a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"在懺悔中遇見神 (3) 詩 51:",
		titleEn:"To meet God in repentance (3) Paslm 51:"
	},
	{
		id:"2613b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2614a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更美的約, 利4:27-31, 來9:1-15",
		titleEn:"The better covenant, Lev. 4:27-31, Heb. 9:1-15"
	},
	{
		id:"2614b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2615a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"更美的應許, 來10:19-25, 路23:33-43",
		titleEn:"The better promise, Heb.10:19-25, Luke 23:33-43"
	},
	{
		id:"2615b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2616a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"生命的重要糧食, 詩119:9-16",
		titleEn:"The prime food in life, Psalm 119:9-16"
	},
	{
		id:"2616b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2617a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"成為鼓勵者, 林後4:1-18",
		titleEn:"To be an encomager, 2 Cor. 4:1-18"
	},
	{
		id:"2617b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2618a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"求主用我 (1) 可1:9-20",
		titleEn:"May God use me (1) Mark 1:9-20"
	},
	{
		id:"2618b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2619a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"求主用我 (2) 但1:1-16",
		titleEn:"May God use me (2) Dan. 1:1-16"
	},
	{
		id:"2619b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2620a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"求主用我 (3) 但2:1-5, :17-20, :31-45",
		titleEn:"May God use me (3) Dan. 2:1-5, :17-20, :31-45"
	},
	{
		id:"2620b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2621a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"求主用我 (4) 但3:1-7, :3-18, :24-25",
		titleEn:"May God use me (4) Dan 3:1-7, :3-18, :24-25"
	},
	{
		id:"2621b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2622a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (1) 關懷與協談",
		titleEn:"The extention of Logos E.S. (1):Care and counseling"
	},
	{
		id:"2622b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2623a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (2) 關懷與協談",
		titleEn:"The extention of Logos E.S. (2):Care and counseling"
	},
	{
		id:"2623b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2624a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (3) 關懷與協談",
		titleEn:"The extention of Logos E.S. (3):Care and counseling"
	},
	{
		id:"2624b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2625a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (4) 如何與垂死的病人談話",
		titleEn:"The extention of Logos E.S. (4):Care and counseling How to talk with the dying"
	},
	{
		id:"2625b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2626a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (5) 如何與垂死的病人談話",
		titleEn:"The extention of Logos E.S. (5):Care and counseling How to talk with the dying"
	},
	{
		id:"2626b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2627a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (6) 如何與哀傷家庭協談",
		titleEn:"The extention of Logos E.S. (6):How to counsel the grieving family"
	},
	{
		id:"2627b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2628a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (7) 婚姻與協談",
		titleEn:"The extention of Logos E.S. (7):Marriage and counseling"
	},
	{
		id:"2628b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2629a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (8) 婚姻與協談",
		titleEn:"The extention of Logos E.S. (8):Marriage and counseling"
	},
	{
		id:"2629b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2630a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"台福神學院延伸課 (9) 青少年問題",
		titleEn:"The extention of Logos E.S. (9):The teenage problem"
	},
	{
		id:"2630b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2631a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"2000 年學前靈修會: 拆毀與建造 (1)",
		titleEn:"2000 Retreat: Tear down and plant (1)"
	},
	{
		id:"2631b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2632a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"2000 年學前靈修會: 拆毀與建造 (2)",
		titleEn:"2000 Retreat: Tear down and plant (2)"
	},
	{
		id:"2632b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2633a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"2000 年學前靈修會: 拆毀與建造 (3)",
		titleEn:"2000 Retreat: Tear down and plant (3)"
	},
	{
		id:"2633b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"姜禮振牧師",
		speakerEn:"Rev. Michael Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2634a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"雅各-從自然人到屬靈人",
		titleEn:"James-From natural man to spiritual man"
	},
	{
		id:"2635a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳維和牧師",
		speakerEn:"Rev. John Wu",
		titleCn:"老兵不死",
		titleEn:"The old soldier never fails"
	},
	{
		id:"2636a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李桂安先生",
		speakerEn:"Mr. K. A. Lee",
		titleCn:"主啊! 這是不可的",
		titleEn:"Lord! This can’t be done"
	},
	{
		id:"2637a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"我不以福音為恥",
		titleEn:"I am not ashamed of the Gospel"
	},
	{
		id:"2638a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"許彗芬傳道",
		speakerEn:"Minister H. F. Hsu",
		titleCn:"對準目標的事奉",
		titleEn:"The targeted ministry"
	},
	{
		id:"2639a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭昌國牧師",
		speakerEn:"Rev. C. K. Cheng",
		titleCn:"神要人怎樣生活",
		titleEn:"The will of God for man’s life"
	},
	{
		id:"2640a",
		lang:"English",
		langCn:"英語",
		speakerCn:"nan",
		speakerEn:"Dr. John Lillis",
		titleCn:"nan",
		titleEn:"The goodness of God"
	},
	{
		id:"2641a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李元進長老",
		speakerEn:"Mr. Y. C. Lee",
		titleCn:"從以弗所書看治理教會的要素",
		titleEn:"From the book of Ephesians to learn the elements of church management"
	},
	{
		id:"2641b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李元進長老",
		speakerEn:"Mr. Y. C. Lee",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2642a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合佈道會: 真理的存在 (1)",
		titleEn:"The existence of the truth (1)"
	},
	{
		id:"2642b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2643a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合佈道會: 真理的存在 (2)",
		titleEn:"The existence of the truth (2)"
	},
	{
		id:"2643b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2644a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合佈道會: 真理的存在 (3)",
		titleEn:"The existence of truth (3)"
	},
	{
		id:"2644b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2645a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合佈道會: 思想的理性(4)",
		titleEn:"The rationality of thinking (4)"
	},
	{
		id:"2645b",
		lang:"Chinese/Hymn",
		langCn:"華語/唱",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合佈道會: 思想的理性(4)",
		titleEn:"The rationality of thinking (4)"
	},
	{
		id:"2646a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會: 靠聖靈成事 (1)",
		titleEn:"To achieve by the Holy Spirit (1)"
	},
	{
		id:"2646b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2647a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會: 靠聖靈成事 (2)",
		titleEn:"To achieve by the Holy Spirit (2)"
	},
	{
		id:"2648a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會: 靠聖靈成事 (3)",
		titleEn:"To achieve by the Holy Spirit (3)"
	},
	{
		id:"2648b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2649a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"台福聯合靈修會: 靠聖靈成事 (4)",
		titleEn:"To achieve by the Holy Spirit (4)"
	},
	{
		id:"2649b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2650a",
		lang:"Taiwanese/Choir",
		langCn:"台語/唱",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"榮光歸上帝",
		titleEn:"To God be the glory"
	},
	{
		id:"2650b",
		lang:"Taiwanese/Choir",
		langCn:"台語/唱",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2651a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"健康人生",
		titleEn:"The healthy life"
	},
	{
		id:"2651b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2652a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"愛的培育",
		titleEn:"The cultivation of love"
	},
	{
		id:"2652b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2653a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"美滿婚姻",
		titleEn:"Fulfilled marriage"
	},
	{
		id:"2653b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2654a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"兒女的性教育",
		titleEn:"The children’s sex education"
	},
	{
		id:"2654b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2655a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"交友與婚姻",
		titleEn:"Friendship and marriage"
	},
	{
		id:"2655b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2656a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"健康門徒",
		titleEn:"The healthy disciple"
	},
	{
		id:"2656b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2657a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"創造與進化 (1)",
		titleEn:"Creation and evolution (1)"
	},
	{
		id:"2657b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2658a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"創造與進化 (2)",
		titleEn:"Creation and evolution (2)"
	},
	{
		id:"2658b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2659a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"猿人真面目",
		titleEn:"The truth about the ape"
	},
	{
		id:"2659b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇緋雲女士",
		speakerEn:"Ms. F. Y. Su",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2660a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"恐龍與洪水 (1)",
		titleEn:"Dinosaur and the flood (1)"
	},
	{
		id:"2660b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2661a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"恐龍與洪水 (2)",
		titleEn:"Dinosaur and the flood (2)"
	},
	{
		id:"2661b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"何仲柯先生",
		speakerEn:"Mr. C. K. Ho",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2662a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"知識份子與基督教 (1)",
		titleEn:"The intellect and christianity (1)"
	},
	{
		id:"2662b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2663a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"知識份子與基督教 (2)",
		titleEn:"The intellect and Christianity (2)"
	},
	{
		id:"2663b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2664a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"知識份子與基督教 (3)",
		titleEn:"The intellect and Christianity (3)"
	},
	{
		id:"2664b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2665a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"知識份子與基督教 (4)",
		titleEn:"The intellect and Christianity (4)"
	},
	{
		id:"2665b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2666a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"知識份子與基督教 (5)",
		titleEn:"The intellect and Christianity (5)"
	},
	{
		id:"2667a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (1)",
		titleEn:"Modern science and Christian faith (1)"
	},
	{
		id:"2667b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2668a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (2)",
		titleEn:"Modern science and Christian faith (2)"
	},
	{
		id:"2668b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2669a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (3)",
		titleEn:"Modern science and Christian faith (3)"
	},
	{
		id:"2669b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2670a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (4)",
		titleEn:"Modern science and Christian faith (4)"
	},
	{
		id:"2670b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2671a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (5)",
		titleEn:"Modern science and Christian faith (5)"
	},
	{
		id:"2671b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2672a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (6)",
		titleEn:"Modern science and Christian faith (6)"
	},
	{
		id:"2672b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2673a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (7)",
		titleEn:"Modern science and Christian faith (7)"
	},
	{
		id:"2673b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2674a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"現代科學與基督教信仰 (8)",
		titleEn:"Modern science and Christian faith (8)"
	},
	{
		id:"2674b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2675a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"永不止息的愛",
		titleEn:"Love never fails"
	},
	{
		id:"2675b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2676a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"當你仰望星空的時候",
		titleEn:"When you look up the sky"
	},
	{
		id:"2676b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2677a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"世上最值得認識的人",
		titleEn:"The most worthy people to know"
	},
	{
		id:"2677b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2678a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"我是道路,真理,生命 (1)",
		titleEn:"I am the way, the truth and the life (1)"
	},
	{
		id:"2678b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2679a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"我是道路,真理,生命 (2)",
		titleEn:"I am the way, the truth and the life (2)"
	},
	{
		id:"2679b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2680a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"我是道路,真理,生命 (3)",
		titleEn:"I am the way, the truth and the life (3)"
	},
	{
		id:"2680b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2681a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"我是道路,真理,生命 (4)",
		titleEn:"I am the way, the truth and the life (4)"
	},
	{
		id:"2681b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2682a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"我是道路,真理,生命 (5)",
		titleEn:"I am the way, the truth and the life (5)"
	},
	{
		id:"2682b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2683a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"人生的追求",
		titleEn:"The pursuit of life"
	},
	{
		id:"2683b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2684a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"蒙恩與感恩",
		titleEn:"Blessed and thanksgiving"
	},
	{
		id:"2684b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2685a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"今生與永生",
		titleEn:"This life and eternal life"
	},
	{
		id:"2685b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2686a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (1)",
		titleEn:"Testimony (1)"
	},
	{
		id:"2687a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (2)",
		titleEn:"Testimony (2)"
	},
	{
		id:"2688a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (3)",
		titleEn:"Testimony (3)"
	},
	{
		id:"2689a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (4)",
		titleEn:"Testimony (4)"
	},
	{
		id:"2690a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (5)",
		titleEn:"Testimony (5)"
	},
	{
		id:"2691a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張道明先生",
		speakerEn:"Mr. Tao-ming Chang",
		titleCn:"見證 (6)",
		titleEn:"Testimony (6)"
	},
	{
		id:"2692a",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"許志偉先生",
		speakerEn:"Mr. C. H. Hsu",
		titleCn:"生命見證",
		titleEn:"Life testimony"
	},
	{
		id:"2692b",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"許志偉先生",
		speakerEn:"Mr. C. H. Hsu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2693a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"人生如戲,恩愛夫妻 (1)",
		titleEn:"Life is as play, loving couple (1)"
	},
	{
		id:"2693b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2694a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"人生如戲,恩愛夫妻 (2)",
		titleEn:"Life is as play, loving couple (2)"
	},
	{
		id:"2694b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2695a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"人生如戲,恩愛夫妻 (3)",
		titleEn:"Life is as play, loving couple (3)"
	},
	{
		id:"2695b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"喬宏夫婦",
		speakerEn:"Mr. & Mrs. H. Chau",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2696a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡元雲先生",
		speakerEn:"Mr. Y. Y. Tsai",
		titleCn:"個人見證",
		titleEn:"Personal testimony"
	},
	{
		id:"2696b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡元雲先生",
		speakerEn:"Mr. Y. Y. Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2697a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"我為何要信耶穌",
		titleEn:"Why do I believe in Jesus?"
	},
	{
		id:"2697b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2698a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"個人見證",
		titleEn:"Personal testimony"
	},
	{
		id:"2698b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2699a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"信仰的人生(1)",
		titleEn:"A life of belief (1)"
	},
	{
		id:"2699b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2700a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"信仰的人生(2)",
		titleEn:"A life of belief (2)"
	},
	{
		id:"2701a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"聖經權威,生命見證 (1)",
		titleEn:"The authority of the Bible, life testimony (1)"
	},
	{
		id:"2701b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2702a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"聖經權威,生命見證 (2)",
		titleEn:"The authority of the Bible, life testimony (2)"
	},
	{
		id:"2702b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2703a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"聖經權威,生命見證 (3)",
		titleEn:"The authority of the Bible, life testimony (3)"
	},
	{
		id:"2703b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2704a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠監督",
		speakerEn:"Rev. S. Y. Kou",
		titleCn:"讀經何益",
		titleEn:"What is the benefit of reading the Bible?"
	},
	{
		id:"2704b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"寇世遠監督",
		speakerEn:"Rev. S. Y. Kou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2705a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"聖經的重要性",
		titleEn:"The importance of the Bible"
	},
	{
		id:"2705b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"田養吾牧師",
		speakerEn:"Rev. Yiang-Wu Tien",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2706a",
		lang:"Hymns/Chinese",
		langCn:"讚美詩歌/華語",
		speakerCn:"楊心斐牧師",
		speakerEn:"Rev. S. F. Yang",
		titleCn:"天父:  (1) 向耶和華唱新歌  (2) 耶 和華是我力量 (3) 耶和華是愛 (4) 詩篇二十三篇(朗誦) (5) 輕輕聽 (6) 我只仰望祢",
		titleEn:"Heavenly Father: To sing a new song to Jehovah; Jehovah is my strength; Jehovah is love; Psalm 23; Listen gently!;  I only look up you!"
	},
	{
		id:"2706b",
		lang:"Hymns/Chinese",
		langCn:"讚美詩歌/華語",
		speakerCn:"楊心斐牧師",
		speakerEn:"Rev. S. F. Yang",
		titleCn:"(1) 阿爸父 (2) 天父 (3) 用我一生 (4) 我以禱告來到祢跟前 (5) 中國早晨五點鐘",
		titleEn:"Aba Father!; Heavenly Father; Use my life; I come before you with prayers; Chinese morning at 5 o’clock"
	},
	{
		id:"2707a",
		lang:"Hymns/Chinese",
		langCn:"讚美詩歌/華語",
		speakerCn:"楊心斐牧師",
		speakerEn:"Rev. S. F. Yang",
		titleCn:"大海中的道路: (1) 空谷的回音 (2) 主愛滋潤我心 (3) 奇異恩典 (4) 耶酥愛你 (5) 祂悄悄踏過",
		titleEn:"The way in the midst of the ocean: The echo of valley; God’s love showers my heart; Amazing grace; Jesus love you; He walks through silently"
	},
	{
		id:"2707b",
		lang:"Hymns/Chinese",
		langCn:"讚美詩歌/華語",
		speakerCn:"楊心斐牧師",
		speakerEn:"Rev. S. F. Yang",
		titleCn:"(1) 主我原單屬祢 (2) 最知心的朋友 (3) 給我一顆中國心 (4) 大海中的道路",
		titleEn:"Lord! I belong to you; The closest friend; Please give me a heart for China; The way in the midst of the ocean"
	},
	{
		id:"2708a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (1) ",
		titleEn:"The truth about born-again (1)"
	},
	{
		id:"2708b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2709a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (2)",
		titleEn:"The truth about born-again (2)"
	},
	{
		id:"2709b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2710a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (3)",
		titleEn:"The truth about born-again (3)"
	},
	{
		id:"2710b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2711a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (4)",
		titleEn:"The truth about born-again (4)"
	},
	{
		id:"2711b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2712a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (5)",
		titleEn:"The truth about born-again (5)"
	},
	{
		id:"2712b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2713a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (6)",
		titleEn:"The truth about born-again (6)"
	},
	{
		id:"2713b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2714a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (7)",
		titleEn:"The truth about born-again (7)"
	},
	{
		id:"2714b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2715a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"重生真義 (8)",
		titleEn:"The truth about born-again (8)"
	},
	{
		id:"2715b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王明道牧師",
		speakerEn:"Rev. Ming-Tao Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2716a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"不能動搖的根基",
		titleEn:"Unshakable foundation"
	},
	{
		id:"2716b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2717a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠: 人生的目的",
		titleEn:"Gain and lost: The purpose of life"
	},
	{
		id:"2717b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2718a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠: 人生的意義",
		titleEn:"Gain and lost: The meaning of life"
	},
	{
		id:"2718b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2719a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"賺與賠: 人生的困難",
		titleEn:"Gain and lost: The adversity of life"
	},
	{
		id:"2719b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2720a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"人失敗的原因",
		titleEn:"Why man fails?"
	},
	{
		id:"2720b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2721a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"時代的挑戰",
		titleEn:"The challenge for the age"
	},
	{
		id:"2721b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2722a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"信心的內容",
		titleEn:"The element of faith"
	},
	{
		id:"2722b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2723a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"信心的意義",
		titleEn:"The meaning of faith"
	},
	{
		id:"2723b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"唐崇榮牧師",
		speakerEn:"Rev. Stephen Tong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2724a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"如何明白神的旨意",
		titleEn:"How to know God’s will?"
	},
	{
		id:"2725a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"信心與行為",
		titleEn:"Faith and deeds"
	},
	{
		id:"2725b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2726a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"基督的復活",
		titleEn:"Christ’s resurrection"
	},
	{
		id:"2726b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2727a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"信主之後",
		titleEn:"After you believe"
	},
	{
		id:"2727b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2728a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"真理的探索 (1) ",
		titleEn:"The search for the truth (1)"
	},
	{
		id:"2728b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2729a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"真理的探索 (2)",
		titleEn:"The search for the truth (2)"
	},
	{
		id:"2729b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2730a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"中國人的苦根與甜根",
		titleEn:"The bitter and sweet root for Chinese"
	},
	{
		id:"2730b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2731a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"天: 我們永恆的家 (1) ",
		titleEn:"The heaven: Our eternal home (1)"
	},
	{
		id:"2731b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2732a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"天: 我們永恆的家 (2)",
		titleEn:"The heaven: Our eternal home (2)"
	},
	{
		id:"2732b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"徐華醫師",
		speakerEn:"Hua Hsu, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2733a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王永信牧師",
		speakerEn:"Rev. Y. S. Wang",
		titleCn:"事奉與國度觀",
		titleEn:"Ministry and the vision of the kingdom "
	},
	{
		id:"2733b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"王永信牧師",
		speakerEn:"Rev. Y. S. Wang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2734a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邸摩西先生",
		speakerEn:"Mr. M. S. Ti",
		titleCn:"神國與教會 (1)",
		titleEn:"God’s kingdom and the church (1)"
	},
	{
		id:"2734b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邸摩西先生",
		speakerEn:"Mr. M. S. Ti",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2735a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邸摩西先生",
		speakerEn:"Mr. M. S. Ti",
		titleCn:"神國與教會 (2)",
		titleEn:"God’s kingdom and the church (2)"
	},
	{
		id:"2735b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邸摩西先生",
		speakerEn:"Mr. M. S. Ti",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2736a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"俞崇恩先生",
		speakerEn:"Mr. C. C. Yu",
		titleCn:"神國與十架窄路",
		titleEn:"God’s kingdom and the narrow way to the cross"
	},
	{
		id:"2736b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"俞崇恩先生",
		speakerEn:"Mr. C. C. Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2737a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃得恩先生",
		speakerEn:"Mr. T. U. Huang",
		titleCn:"神國與基督再來",
		titleEn:"God’s kingdom and Christ’s second coming"
	},
	{
		id:"2737b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"黃得恩先生",
		speakerEn:"Mr. T. U. Huang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2738a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"家庭與事奉 (1)",
		titleEn:"Family and ministry (1)"
	},
	{
		id:"2738b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2739a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"家庭與事奉 (2)",
		titleEn:"Family and ministry (2)"
	},
	{
		id:"2739b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2740a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"家庭與事奉 (3)",
		titleEn:"Family and ministry (3)"
	},
	{
		id:"2740b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉陳淑淑女士",
		speakerEn:"Mrs. S. S. Yeh",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2741a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"饒孝楫先生",
		speakerEn:"Mr. S. C. Rau",
		titleCn:"做主僕人 (1)",
		titleEn:"To be God’s servant (1)"
	},
	{
		id:"2741b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"饒孝楫先生",
		speakerEn:"Mr. S. C. Rau",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2742a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"饒孝楫先生",
		speakerEn:"Mr. S. C. Rau",
		titleCn:"做主僕人 (2)",
		titleEn:"To be God’s servant (2)"
	},
	{
		id:"2742b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"饒孝楫先生",
		speakerEn:"Mr. S. C. Rau",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2743a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"祝健先生",
		speakerEn:"Mr. Z. Chu",
		titleCn:"禱告與操練 (1)",
		titleEn:"Prayer and discipline (1)"
	},
	{
		id:"2743b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"祝健先生",
		speakerEn:"Mr. Z. Chu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2744a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"祝健先生",
		speakerEn:"Mr. Z. Chu",
		titleCn:"禱告與操練 (2)",
		titleEn:"Prayer and discipline (2)"
	},
	{
		id:"2744b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"祝健先生",
		speakerEn:"Mr. Z. Chu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2745a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (1)",
		titleEn:"Life and ministry (1)"
	},
	{
		id:"2745b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2746a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (2)",
		titleEn:"Life and ministry (2)"
	},
	{
		id:"2746b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2747a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (3)",
		titleEn:"Life and ministry (3)"
	},
	{
		id:"2747b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2748a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (4)",
		titleEn:"Life and ministry (4)"
	},
	{
		id:"2748b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2749a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (5)",
		titleEn:"Life and ministry (5)"
	},
	{
		id:"2749b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2750a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (6)",
		titleEn:"Life and ministry (6)"
	},
	{
		id:"2750b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2751a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (7)",
		titleEn:"Life and ministry (7)"
	},
	{
		id:"2751b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2752a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (8)",
		titleEn:"Life and ministry (8)"
	},
	{
		id:"2752b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2753a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (9)",
		titleEn:"Life and ministry (9)"
	},
	{
		id:"2753b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2754a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"生命與服事 (10)",
		titleEn:"Life and ministry (10)"
	},
	{
		id:"2754b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"江守道牧師",
		speakerEn:"Rev. Stephen Kaung",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2755a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"謙卑",
		titleEn:"Humility"
	},
	{
		id:"2755b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2756a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"風雨之聲",
		titleEn:"The sound of the sky"
	},
	{
		id:"2756b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"馮秉誠先生",
		speakerEn:"Mr. B. C. Fong",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2757a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"老子與基督 (1)",
		titleEn:"Lao-tzu and Christ (1)"
	},
	{
		id:"2757b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2758a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"老子與基督 (2)",
		titleEn:"Lao-Tzu and Christ (2)"
	},
	{
		id:"2758b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"遠志明先生",
		speakerEn:"Mr. Z. M. Yun",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2759a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"蒙福人系列 (1) 信心之父: 亞伯拉罕",
		titleEn:"The blessed man series (1) The father of faith: Abraham"
	},
	{
		id:"2759b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2760a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"蒙福人系列 (2) 上帝王子: 雅各",
		titleEn:"The blessed man series (2): The prince of God: Jacob"
	},
	{
		id:"2760b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2761a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"蒙福人系列 (3) 耶穌母親: 馬利亞",
		titleEn:"The blessed man series (3): Jesus’mother: Mary"
	},
	{
		id:"2761b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蔡茂堂牧師",
		speakerEn:"Rev. Mathew Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2762a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"2003 愛恩培靈會 (1) 你需要活水江河",
		titleEn:"2003 EFC Invine revival conference(1) You need the river of living water  "
	},
	{
		id:"2762b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2763a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"2003 愛恩培靈會 (2) 認識三一真神",
		titleEn:"2003 EFC Irvine revival conference (2) Knowing the true God-Trinity"
	},
	{
		id:"2763b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2764a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"2003 愛恩培靈會 (3) 聖靈與恩賜",
		titleEn:"2003 EFC Irvine revival conference (3) The Holy Spirit and the gift"
	},
	{
		id:"2764b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2765a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"2003 愛恩培靈會 (4) 一場不可避免的戰爭",
		titleEn:"2003 EFC Irvine revival conference (4) An unavoidable war"
	},
	{
		id:"2765b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2766a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"2003 愛恩培靈會 (5) 認識醫治的神蹟",
		titleEn:"2003 EFC Irvine revival conference (5) To know the miracle of healing"
	},
	{
		id:"2766b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"張景祥牧師",
		speakerEn:"Rev. John Chang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2767a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"神所預備的先鋒",
		titleEn:"The pioneer God has prepared"
	},
	{
		id:"2767b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2768a",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣的家庭 (1) 路加1:8-25  箴言31:10-22",
		titleEn:"The family no longer the same (1) Luke 1:8-25, Proverbs 31:10-22"
	},
	{
		id:"2768b",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2769a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣的家庭 (2) 箴言31:23-27",
		titleEn:"The family no longer the same (2) Proverbs 31:23-27"
	},
	{
		id:"2769b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2770a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"不再一樣的家庭 (3) 箴言31:28-31",
		titleEn:"The family no longer the same (3) Proverbs 31:28-31"
	},
	{
		id:"2770b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev. Susan Chou",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2771a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"神蹟的人生",
		titleEn:"The miraculous life"
	},
	{
		id:"2772a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"基督徒的四種美德",
		titleEn:"Christian’s four virtues"
	},
	{
		id:"2773a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"蒙恩的基督徒信仰生活",
		titleEn:"The blessed Christian life"
	},
	{
		id:"2774a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"附帶記念的美事",
		titleEn:"Appendant memory of a beautiful thing"
	},
	{
		id:"2775a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"基督徒與感恩節",
		titleEn:"Christian and thanksgiving"
	},
	{
		id:"2776a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"蒙恩的教會",
		titleEn:"The blessed Church"
	},
	{
		id:"2776b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2777a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"信心的看見,眼目光明",
		titleEn:"The sight by faith"
	},
	{
		id:"2777b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"魔鬼的地步,與聖靈的擔憂",
		titleEn:"The way of the Devil and the worry of the Holy Spirit"
	},
	{
		id:"2778a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"長進的教會-安提阿 ",
		titleEn:"The growth of the church-Antioch"
	},
	{
		id:"2778b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"巴底買",
		titleEn:"Bartimaeus"
	},
	{
		id:"2779b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"耶穌的空墳墓",
		titleEn:"The empty tomb of Jesus Christ"
	},
	{
		id:"2780a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"摸我的是誰?",
		titleEn:"Who touch me?"
	},
	{
		id:"2780b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"教會復興的條件",
		titleEn:"The elements of church revival"
	},
	{
		id:"2781a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"神的名何其美!",
		titleEn:"How beautiful is God’s name!"
	},
	{
		id:"2781b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2782a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"蒙福的崇拜",
		titleEn:"The blessed worship"
	},
	{
		id:"2782b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"蒙福的崇拜, 詩122:",
		titleEn:"The blessed worship, Psalms 122:"
	},
	{
		id:"2783a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"一件事",
		titleEn:"One thing"
	},
	{
		id:"2783b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"續 1",
		titleEn:"Continued 1"
	},
	{
		id:"2784a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"一件事, 續2",
		titleEn:"One thing, Continued 2"
	},
	{
		id:"2784b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"創造你的人生",
		titleEn:"Create your life"
	},
	{
		id:"2785a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"正月初一",
		titleEn:"Jan. 1"
	},
	{
		id:"2785b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"好的事奉",
		titleEn:"Wonderful service"
	},
	{
		id:"2786a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"什麼是永生",
		titleEn:"What is eternal life?"
	},
	{
		id:"2786b",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"承受永生",
		titleEn:"To receive the eternal life"
	},
	{
		id:"2787a",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"無知的人",
		titleEn:"Man of ignorance"
	},
	{
		id:"2787b",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"智慧的人",
		titleEn:"Man of wisdom"
	},
	{
		id:"2788a",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"基督徒與教會",
		titleEn:"Christian and the church"
	},
	{
		id:"2788b",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"救恩的泉源",
		titleEn:"The fountain of the salvation"
	},
	{
		id:"2789a",
		lang:"Taiwanese/English",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"介入歷史中的神",
		titleEn:"The God who interferes in the history"
	},
	{
		id:"2789b",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"道成肉身",
		titleEn:"The word became the fresh"
	},
	{
		id:"2790a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"第二次的機會",
		titleEn:"The second chance"
	},
	{
		id:"2790b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"新春的呼聲: 起來與我同去",
		titleEn:"The call for the new spring: Rise up and come with me"
	},
	{
		id:"2791a",
		lang:"Taiwanese/English",
		langCn:"台/英語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"摩西五經中的基督",
		titleEn:"Christ in Pentatench"
	},
	{
		id:"2791b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"敬畏耶和華的父親",
		titleEn:"Fear the father of Jehovah"
	},
	{
		id:"2792a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"大工的屬靈經歷",
		titleEn:"The great worker’s spiritual journey"
	},
	{
		id:"2792b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"蔡登燦牧師",
		speakerEn:"Rev. Caleb Tsai",
		titleCn:"斷過奶的孩子",
		titleEn:"The weanling child"
	},
	{
		id:"2793a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"2003 冬令會信息: 真知道祂, 真認識祂 (1)",
		titleEn:"2003 Winter retreat message: To truly know Him (1)"
	},
	{
		id:"2793b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2794a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"2003 冬令會信息: 真知道祂, 真認識祂 (2)",
		titleEn:"2003 Winter retreat message: To truly know Him (2)"
	},
	{
		id:"2794b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2795a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"2003 冬令會信息: 真知 道祂, 真認識祂 (3)",
		titleEn:"2003 Winter retreat message: To truly know Him (3)"
	},
	{
		id:"2795b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2796a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"2003 冬令會信息: 真知 道祂, 真認識祂 (4)",
		titleEn:"2003 Winter retreat message: To truly know Him (4)"
	},
	{
		id:"2796b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2797a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"2003 冬令會信息: 真知道祂, 真認識祂 (5)",
		titleEn:"2003 Winter retreat message: To truly know Him (5)"
	},
	{
		id:"2797b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"江秀琴牧師",
		speakerEn:"Rev. Grace Chiang",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2798a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"The fear of God,  Proverbs 1:1-7"
	},
	{
		id:"2798b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2799a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Acquire wisdom, Proverbs 4:5, 7"
	},
	{
		id:"2799b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2800a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Evil, Proverbs 1-30:"
	},
	{
		id:"2800b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2801a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Planning, Proverbs 3, 16:"
	},
	{
		id:"2801b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2802a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Counsel (1), Proverbs 11-27:"
	},
	{
		id:"2802b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2803a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Counsel (2), Proverbs 11-27:"
	},
	{
		id:"2803b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2804a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Justice (1), Proverbs 11-31:"
	},
	{
		id:"2804b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2805a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Justice (2), Proverbs 11-31:"
	},
	{
		id:"2805b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2806a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Trust God, not yourself, Proverbs 3-30:"
	},
	{
		id:"2806b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2807a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Wisdom for parents and children (1), Proverbs 1-30:"
	},
	{
		id:"2808a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Wisdom for parents and children (2), Proverbs 1-30:"
	},
	{
		id:"2808b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2809a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Scripture, 2 Peter 1:16-21"
	},
	{
		id:"2809b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2810a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"False teachers, 2 Peter 2:1 "
	},
	{
		id:"2810b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2811a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Sure judgment and sure rescue, 2 Peter 2:2-9"
	},
	{
		id:"2812a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"False teachers’ characteristics, 2 Peter 2:10-22"
	},
	{
		id:"2813a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Delayed return, 2 Peter 3:1-9"
	},
	{
		id:"2813b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2814a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"New heavens and new earth, 2 Peter 3:10-18"
	},
	{
		id:"2814b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Edward Pauley, PH D",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2815a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (1)",
		titleEn:"Revelation (1)"
	},
	{
		id:"2815b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2816a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (2)",
		titleEn:"Revelation (2)"
	},
	{
		id:"2817a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (3) & (4)",
		titleEn:"Revelation (3) & (4)"
	},
	{
		id:"2817b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2818a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (5)",
		titleEn:"Revelation (5)"
	},
	{
		id:"2818b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2819a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (6)",
		titleEn:"Revelation (6)"
	},
	{
		id:"2819b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2820a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (7)",
		titleEn:"Revelation (7)"
	},
	{
		id:"2820b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2821a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (8)",
		titleEn:"Revelation (8)"
	},
	{
		id:"2821b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2822a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示論 (9)",
		titleEn:"Revelation (9)"
	},
	{
		id:"2822b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2823a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (1) ",
		titleEn:"Theology thought (1)"
	},
	{
		id:"2824a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (2)",
		titleEn:"Theology thought (2)"
	},
	{
		id:"2824b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2825a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (3)",
		titleEn:"Theology thought (3)"
	},
	{
		id:"2825b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2826a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (4)  ",
		titleEn:"Theology thought (4)"
	},
	{
		id:"2826b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2827a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (5)",
		titleEn:"Theology thought (5)"
	},
	{
		id:"2827b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2828a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神學思想簡介 (6)",
		titleEn:"Theology thought (6)"
	},
	{
		id:"2828b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2829a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"21世紀神學思想導向 (1)",
		titleEn:"Theology (1)"
	},
	{
		id:"2829b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2830a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"21世紀神學思想導向 (2)",
		titleEn:"Theology (2)"
	},
	{
		id:"2830b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2831a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"21世紀神學思想導向 (3)",
		titleEn:"Theology (3)"
	},
	{
		id:"2831b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2832a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"如何被聖靈充滿",
		titleEn:"How to be filled with Holy Spirit "
	},
	{
		id:"2832b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2833a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"靠聖靈行事",
		titleEn:"How to walk in the spirit"
	},
	{
		id:"2833b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2834a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"基督的死與聖餐的関係",
		titleEn:"The relationship between the death of Christ and Communion"
	},
	{
		id:"2834b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2835a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"神在肉身顯現的奧秘",
		titleEn:"The word become flesh"
	},
	{
		id:"2836a",
		lang:"Chinese/Taiwanese",
		langCn:"華/台語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"罪人與救恩 (1)",
		titleEn:"Sin and salvation (1)"
	},
	{
		id:"2836b",
		lang:"Chinese/Taiwanese",
		langCn:"華/台語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2837a",
		lang:"Chinese/Taiwanese",
		langCn:"華/台語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"罪人與救恩 (2)",
		titleEn:"Sin and salvation (2)"
	},
	{
		id:"2838a",
		lang:"Chinese/Taiwanese",
		langCn:"華/台語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"立約與救恩 (1)",
		titleEn:"Covenant and salvation (1)"
	},
	{
		id:"2839a",
		lang:"Chinese/Taiwanese",
		langCn:"華/台語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"立約與救恩 (2)",
		titleEn:"Covenant and salvation (2)"
	},
	{
		id:"2840a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"揀選與救恩",
		titleEn:"The chosen and the salvation"
	},
	{
		id:"2840b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2841a",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"主再來與救恩",
		titleEn:"The second coming and salvation"
	},
	{
		id:"2841b",
		lang:"Chinese/Cantonese",
		langCn:"華/廣語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2842a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (1)",
		titleEn:"Revelation, rational and faith (1)"
	},
	{
		id:"2842b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2843a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (2)",
		titleEn:"Revelation, rational and faith (2)"
	},
	{
		id:"2843b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2844a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (3)",
		titleEn:"Revelation, rational and faith (3)"
	},
	{
		id:"2844b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2845a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (4)",
		titleEn:"Revelation, rational and faith (4)"
	},
	{
		id:"2845b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2846a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (5)",
		titleEn:"Revelation, rational and faith (5)"
	},
	{
		id:"2846b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2847a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (6)",
		titleEn:"Revelation, rational and faith (6)"
	},
	{
		id:"2847b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2848a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (7)",
		titleEn:"Revelation, rational and faith (7)"
	},
	{
		id:"2848b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2849a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (8)",
		titleEn:"Revelation, rational and faith (8)"
	},
	{
		id:"2849b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2850a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (9)",
		titleEn:"Revelation, rational and faith (9)"
	},
	{
		id:"2850b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2851a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (10)",
		titleEn:"Revelation, rational and faith (10)"
	},
	{
		id:"2851b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2852a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (11)",
		titleEn:"Revelation, rational and faith (11)"
	},
	{
		id:"2852b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2853a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (12)",
		titleEn:"Revelation, rational and faith (12)"
	},
	{
		id:"2853b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2854a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (13)",
		titleEn:"Revelation, rational and faith (13)"
	},
	{
		id:"2854b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2855a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (14)",
		titleEn:"Revelation, rational and faith (14)"
	},
	{
		id:"2855b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2856a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (15)",
		titleEn:"Revelation, rational and faith (15)"
	},
	{
		id:"2856b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2857a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (16)",
		titleEn:"Revelation, rational and faith (16)"
	},
	{
		id:"2857b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2858a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (17)",
		titleEn:"Revelation, rational and faith (17)"
	},
	{
		id:"2858b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2859a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"啟示, 理性, 信仰 (18)",
		titleEn:"Revelation, rational and faith (18)"
	},
	{
		id:"2859b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2860a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"屬靈事奉的秘訣",
		titleEn:"The secret of spiritual ministry"
	},
	{
		id:"2860b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2861a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (1)",
		titleEn:"Homiletics (1)"
	},
	{
		id:"2861b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2862a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (2)",
		titleEn:"Homiletics (2)"
	},
	{
		id:"2862b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2863a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (3)",
		titleEn:"Homiletics (3)"
	},
	{
		id:"2863b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2864a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (4)",
		titleEn:"Homiletics (4)"
	},
	{
		id:"2864b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2865a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (5)",
		titleEn:"Homiletics (5)"
	},
	{
		id:"2865b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2866b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"傳道人與講道的裝備 (6)",
		titleEn:"Homiletics (6)"
	},
	{
		id:"2867a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識法輪功 (1)",
		titleEn:"Falungong (1)"
	},
	{
		id:"2868a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識法輪功 (2)",
		titleEn:"Falungong (2)"
	},
	{
		id:"2869a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識法輪功 (3)",
		titleEn:"Falungong (3)"
	},
	{
		id:"2870a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識法輪功 (4)",
		titleEn:"Falungong (4)"
	},
	{
		id:"2871b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識法輪功 (5)",
		titleEn:"Falungong (5)"
	},
	{
		id:"2872a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識異端 (1)",
		titleEn:"Cults and eastern religion (1)"
	},
	{
		id:"2872b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2873a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鄭國治牧師",
		speakerEn:"Rev. David Tey",
		titleCn:"辨識異端 (2)",
		titleEn:"Cults and eastern religion (2)"
	},
	{
		id:"2874a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"亞當背叛: 照神約定而活",
		titleEn:"Adam’s betrayal: To walk in God’s covenant"
	},
	{
		id:"2874b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2875a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"該隱動怒: 放輕鬆一點",
		titleEn:"Cain’s anger: Learn to be relaxing"
	},
	{
		id:"2876a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"亞伯拉罕獻子: 教養兒女的功課",
		titleEn:"Abraham’s offering of son: The lesson of raising up children"
	},
	{
		id:"2876b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2877a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"以撒娶妻: 上天撮合的婚姻",
		titleEn:"Isaac’s marriage: The heavenly matchmaking"
	},
	{
		id:"2877b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2878a",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"約瑟棄袍: 拒絕偏差的誘惑",
		titleEn:"Joseph’s forsaken cloak: Refuse to be tempted"
	},
	{
		id:"2878b",
		lang:"Taiwanese",
		langCn:"台語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2879a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"鍾世豪牧師",
		speakerEn:"Rev. S. H. Chung",
		titleCn:"葡萄園的工人",
		titleEn:"Vineyard’s worker"
	},
	{
		id:"2880a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱茂松牧師",
		speakerEn:"Rev. M. S. Chiu",
		titleCn:"傳道的四不一沒有",
		titleEn:"Four no of preaching the good news "
	},
	{
		id:"2880b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"邱茂松牧師",
		speakerEn:"Rev. M. S. Chiu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2881a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"馮志超牧師",
		speakerEn:"Rev. C. C. Fong",
		titleCn:"神國工人的特質",
		titleEn:"The quality of kingdom’s workers"
	},
	{
		id:"2882a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張德泉牧師",
		speakerEn:"Rev. Clifford Chang",
		titleCn:"教會聖樂的服事",
		titleEn:"The ministry of church’s hymnal"
	},
	{
		id:"2883a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"楊心斐牧師",
		speakerEn:"Rev. S. F. Yang",
		titleCn:"以利亞的信心生活",
		titleEn:"Elijah’s faith of life"
	},
	{
		id:"2884a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Prologue: Revelation,  Rev. 1:1-4"
	},
	{
		id:"2884b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2885a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Jesus Christ our Lord,  Rev. 1: 5-6"
	},
	{
		id:"2886a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Revelation 1:7"
	},
	{
		id:"2886b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2887a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Alpha and Omega,  Rev. 1:8"
	},
	{
		id:"2887b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2888a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Truth and patience,  Rev. 1:9"
	},
	{
		id:"2888b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2889a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"The glorified risen Christ (1)  John 1:10-15"
	},
	{
		id:"2889b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2890a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"The glorified risen Christ (2)  Rev. 1:16-18"
	},
	{
		id:"2890b",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Continued"
	},
	{
		id:"2891a",
		lang:"English",
		langCn:"nan",
		speakerCn:"nan",
		speakerEn:"Dr. Edward Pauley",
		titleCn:"nan",
		titleEn:"Letter to Ephesus,  Rev. 2:1-4"
	},
	{
		id:"2892",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(一): (1) 會幕聖所的設置及其意義  (2) 燔祭及其意義",
		titleEn:"Seminar on Leviticus(1):  (1) The establishment and its meaning of the Tabernacle  (2)The burnt offering and its significance"
	},
	{
		id:"2893",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(二): (3) 素祭及其意義 (4) 平安祭及其意義",
		titleEn:"Seminar on Leviticus (2): (3) The grain offering and its significance   (4) The fellowship offering and its significance"
	},
	{
		id:"2894",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(三): (5) 贖罪祭及其意義   (6) 贖愆祭及其意義",
		titleEn:"Seminar on Leviticus (3):  (5) The sin offering and its significance (6) The guilt offering and its significance "
	},
	{
		id:"2895",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(四): (7) 祭司的責任及其意義  (8) 祭司的按立, 事奉及其意義",
		titleEn:"Seminar of Leviticus (4):  (7)  The duty and its significance of the priest  (8) The setting up, ministry and its significance of the priest"
	},
	{
		id:"2896",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(五)  (9)  潔淨與聖潔之禮及其意義  (10) 贖罪日及其意義",
		titleEn:"Seminar on Leviticus (5):  (9)  The ritual and its significance of cleanness and holiness  (10) The day  of atonement and its significance"
	},
	{
		id:"2897",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(六)  (11)  以色列人的節期及其意義之一  (12)  以色列人的節期及其意義之二",
		titleEn:"Seminar on Leviticus (6):  (11)  The feasts of Israelites and their meanings  (12) The feasts of Israelites and their meanings"
	},
	{
		id:"2898",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(一): (1) 啟示文學概論   (2)  啟示錄概論之一",
		titleEn:"Apocalyptic literature (1):  (1) The survey of apocalyptic literature(2)  The survey of the book of revelation"
	},
	{
		id:"2899",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(二):  (3) 啟示錄概論之二  (4)  啟示錄: 所看見的事和現在的事之一",
		titleEn:"Apocalyptic literaturl (2):  (3)  The survey of the book of revelation  (4)  Revelation: The things he saw and are happening now"
	},
	{
		id:"2900",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(三):  (5)  啟示錄: 所看見的事和現在的事之二  (6)  啟示錄: 將來必成的事之一",
		titleEn:"Apocalyptic literaturl (3):  (5)  Revelation:  The things he saw and are happening now  (6)  Revelation:  The things soon to take place"
	},
	{
		id:"2901",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示 文學(四):  (7)  啟示錄:  將來必成的事之二   (8)  啟示錄: 將來必成的事之三",
		titleEn:"Apocalyptic literaturl (4):  (7)  Revelation: The things soon to take place  (8)   Revelation:  The things soon to take place"
	},
	{
		id:"2902",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(五):  (9)  啟示錄:  將來必成的事之四   (10)  啟示錄: 將來必成的事之五",
		titleEn:"Apocalyptic literaturl (5):  (9)  Revelation:  The things soon to take place  (10)  Revelation:  The things soon to take place"
	},
	{
		id:"2903",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(六):",
		titleEn:"Apocalyptic literaturl (6):"
	},
	{
		id:"2903",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啓示文學 (6):  (11)  但以理書: 背景及第一章 (12) 但以理書: 尼布甲尼薩的三個功課",
		titleEn:"Revelation (6):  (11) The book of Daniel:  The background & chapter 1 (12) The book of Daniel:  Three lessons for king Nebuchadnezzar"
	},
	{
		id:"2904",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(七):",
		titleEn:"Apocalyptic literaturl (7):"
	},
	{
		id:"2904",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (7) :  (13)  但以理書: 但以理的禱告生活  (13) 但以理書:  但以理的四個異象之一",
		titleEn:"Revelation (7)  (13) The book of Daniel:  Daniel's prayer life (14) The book of Daniel:  Daniel's first vision"
	},
	{
		id:"2905",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學(八):",
		titleEn:"Apocalyptic literaturl (8):"
	},
	{
		id:"2905",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啓示文學(8):  (15)  但以理書:  但以理的四個異象之二  (16) 但以理書:  但以理的四個異象之三及馬太24章",
		titleEn:"Revelation (8):  (15)  The book of Daniel:  Daniel’s second vision  (16) The book of Daniel:  Daniel’s third vision and Matthew chapter 24"
	},
	{
		id:"2906",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"個人佈道法(一):  (1)  什麼是福音  (2)  人往何處去",
		titleEn:"Personal evangelism (1):  (1)  What is the gospel?  (2)  Where do men go?"
	},
	{
		id:"2907",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"個人佈道法(二):  (3)  為什麽要傳福音 (4)  創造我們的神 (5)  神所創造的人",
		titleEn:"Personal evangelism (2):  (3)  Why bothers with evangelism? (4)  God who create us (5)  Man created by God"
	},
	{
		id:"2908",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"個人佈道法(三):  (6)  神所創造的天使 (7)  魔鬼的由來",
		titleEn:"Personal evangelism (3):  (6)  The angel created by God   (7)  How the Devil comes?"
	},
	{
		id:"2909",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"個人佈道法(四):  (8)  壞天使在世上的活動   (9)  人的犯罪   (10)  神的救恩",
		titleEn:"Personal evangelism (4):  (8)  The activities in the world by Evil Angel  (9) The sin of man  (10)   God's  redemption"
	},
	{
		id:"2910",
		lang:"Chinese ",
		langCn:"華語廣播劇",
		speakerCn:"劉瑞賢牧師",
		speakerEn:"Rev. David Liu",
		titleCn:"飛躍的生命",
		titleEn:"Soaring life"
	},
	{
		id:"2911",
		lang:"Taiwanese Choir",
		langCn:"台語 詩歌",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"願你平安",
		titleEn:"Peace be with you"
	},
	{
		id:"2912",
		lang:"Taiwanese Choir",
		langCn:"台語 詩歌",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"至好朋友",
		titleEn:"What a friend"
	},
	{
		id:"2913",
		lang:"Taiwanese Choir",
		langCn:"台語 詩歌",
		speakerCn:"愛恩教會詩班",
		speakerEn:"EFC Irvine Choir",
		titleCn:"榮光歸於上帝",
		titleEn:"To God be the glory "
	},
	{
		id:"2914a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"謝挺老師",
		speakerEn:"Ms. Tong Shieh",
		titleCn:"被揀選的危機",
		titleEn:"The Crisis of being chosen"
	},
	{
		id:"2916a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李永旭醫師",
		speakerEn:"Dr. Stephen Lee, MD",
		titleCn:"築壇獻祭",
		titleEn:"Build up the altar for sacrifice"
	},
	{
		id:"2916b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"李永旭醫師",
		speakerEn:"Dr. Stephen Lee, MD",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2917a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"周淑慧牧師",
		speakerEn:"Rev Susan Chou",
		titleCn:"你們去吧! 我差你們去!",
		titleEn:"Go!  I have sent you!"
	},
	{
		id:"2918a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"俞蒙恩弟兄",
		speakerEn:"Mr. M U. Yu",
		titleCn:"耶穌基督奴僕的心",
		titleEn:"Jesus Christ—the heart of servant"
	},
	{
		id:"2918b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"俞蒙恩弟兄",
		speakerEn:"Mr. M U. Yu",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2919a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葉宏光牧師",
		speakerEn:"Rev. H K Yeh",
		titleCn:"我心旋律分享",
		titleEn:"My melody of heart sharing"
	},
	{
		id:"2920a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"柯聯基長老",
		speakerEn:"Mr. L C Ko",
		titleCn:"恩典和恩賜的事奉",
		titleEn:"The service of grace and gift"
	},
	{
		id:"2920b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"柯聯基長老",
		speakerEn:"Mr. L C Ko",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2921a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"蘇文隆牧師",
		speakerEn:"Rev. Wilfred Su",
		titleCn:"受難節的省思",
		titleEn:"The meditation of the Good Friday"
	},
	{
		id:"2921b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"吳黃蓮英博士",
		speakerEn:"Dr. L I Huang Wu ",
		titleCn:"基督十架的再思",
		titleEn:"The meditation of the cross of Christ"
	},
	{
		id:"2922a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"認識聖靈",
		titleEn:"To know the Holy Spirit"
	},
	{
		id:"2922b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2923a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"如何被聖靈充滿",
		titleEn:"How to be filled with the Holy Spirit"
	},
	{
		id:"2923b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2924a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"聖靈的恩賜",
		titleEn:"The gifts of the Holy Spirit"
	},
	{
		id:"2924b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2925a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"滿有聖靈",
		titleEn:"Full of the Holy Spirit"
	},
	{
		id:"2925b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2926a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"靈修",
		titleEn:"Quiet time"
	},
	{
		id:"2926b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2927a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"生活中與主交通",
		titleEn:"Fellowship with God in life"
	},
	{
		id:"2927b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"隨從聖靈",
		titleEn:"Following the Holy Spirit"
	},
	{
		id:"2928a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"復興的起點:悔改",
		titleEn:"The beginning of revival: Repentance"
	},
	{
		id:"2928b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2929a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"信心的榜樣",
		titleEn:"The example of faith"
	},
	{
		id:"2929b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2930a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"以謙讓出名",
		titleEn:"Famous for the humility"
	},
	{
		id:"2931a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"喜樂的秘訣",
		titleEn:"The secret of joy"
	},
	{
		id:"2932a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"苦難的超越",
		titleEn:"Overcome the suffering"
	},
	{
		id:"2933a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"捨己",
		titleEn:"Giving up self"
	},
	{
		id:"2933b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2934a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"明白神的旨意",
		titleEn:"To know God’s will"
	},
	{
		id:"2934b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2935a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"順服恩膏的教訓",
		titleEn:"Obey the teaching of the anointed"
	},
	{
		id:"2935b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2936a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"順服聖靈的管教",
		titleEn:"Obey the discipline of the Holy Spirit"
	},
	{
		id:"2936b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2937a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"罪的處理",
		titleEn:"Handle the sins"
	},
	{
		id:"2937b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2938a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"與世界分別",
		titleEn:"To separate with the world"
	},
	{
		id:"2938b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2939a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"重生",
		titleEn:"Born again"
	},
	{
		id:"2939b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2940a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"往事的了結",
		titleEn:"Finish the past"
	},
	{
		id:"2940b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2941a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"晨更",
		titleEn:"Morning devotion"
	},
	{
		id:"2941b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2942a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"奉獻",
		titleEn:"Sacrifice"
	},
	{
		id:"2942b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2943a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"屬靈爭戰",
		titleEn:"Spiritual battle"
	},
	{
		id:"2943b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2944a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"聖靈充滿",
		titleEn:"Full of the Holy Spirit"
	},
	{
		id:"2944b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2945a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"神的大能",
		titleEn:"God’s power"
	},
	{
		id:"2945b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2946a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"改變的大能",
		titleEn:"The power to change"
	},
	{
		id:"2947a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"恩膏的使命",
		titleEn:"The mission of the anointed"
	},
	{
		id:"2948a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"你要被聖靈充滿",
		titleEn:"You should be filled with the Holy Spirit"
	},
	{
		id:"2949a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"敬拜的人生",
		titleEn:"The worshipping life"
	},
	{
		id:"2949b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2950a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"榮上加榮的生命",
		titleEn:"The even more glorious life"
	},
	{
		id:"2951a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"國度的禱告 (主禱文)",
		titleEn:"The prayer for the kingdom"
	},
	{
		id:"2951b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"國度的人才",
		titleEn:"The elite for the kingdom"
	},
	{
		id:"2952a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"禱讀 (晨更)",
		titleEn:"Bible study for morning devotion"
	},
	{
		id:"2952b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"禱讀 (如何讀經)",
		titleEn:"How to study the Bible"
	},
	{
		id:"2953a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"禁食禱告",
		titleEn:"Fasting prayer"
	},
	{
		id:"2953b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"代禱 (1)",
		titleEn:"Intercessory prayer (1)"
	},
	{
		id:"2954a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"代禱 (2)",
		titleEn:"Intercessory prayer (2)"
	},
	{
		id:"2954b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"團體的禱告",
		titleEn:"The collective prayer"
	},
	{
		id:"2955a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"讚美感謝的禱告",
		titleEn:"The praising prayer"
	},
	{
		id:"2955b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"有功效的禱告",
		titleEn:"The effective prayer"
	},
	{
		id:"2956a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"認罪的禱告",
		titleEn:"The confessing prayer"
	},
	{
		id:"2956b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"默想等候的禱告",
		titleEn:"The prayer of waiting meditatively"
	},
	{
		id:"2957a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"禱告: 一切的根基",
		titleEn:"Prayer: The foundation for everything"
	},
	{
		id:"2958a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"靠聖靈禱告",
		titleEn:"Prayer by the Holy Spirit"
	},
	{
		id:"2959a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"神造人的目的",
		titleEn:"The purpose of creation"
	},
	{
		id:"2959b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"得勝者的入門",
		titleEn:"How to be a conqueror"
	},
	{
		id:"2960a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"得勝者的事奉",
		titleEn:"The ministry of the conqueror"
	},
	{
		id:"2960b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"得勝者的是事奉: 忠心",
		titleEn:"Faithfulness"
	},
	{
		id:"2961a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"得勝者的事奉: 權柄",
		titleEn:"Authority"
	},
	{
		id:"2961b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"得勝者的事奉: 禱告",
		titleEn:"Prayer"
	},
	{
		id:"2962a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"事奉的恩賜",
		titleEn:"The gift of the ministry"
	},
	{
		id:"2962b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"事奉的能力 (1)",
		titleEn:"The power of the ministry (1)"
	},
	{
		id:"2963a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"事奉的能力 (2)",
		titleEn:"The power of the ministry (2)"
	},
	{
		id:"2963b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"捨己  (1)",
		titleEn:"Sacrefice self (1)"
	},
	{
		id:"2964a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"苦難",
		titleEn:"Suffering"
	},
	{
		id:"2964b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"捨己 (2)",
		titleEn:"Sacrefice self (2)"
	},
	{
		id:"2965a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"主在主裡面 (1)",
		titleEn:"The Lord in the Lord (1)"
	},
	{
		id:"2965b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"主在主裡面 (2)",
		titleEn:"The Lord in the Lord (2)"
	},
	{
		id:"2966a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"主在主理面 (3)",
		titleEn:"The Lord in the Lord (3)"
	},
	{
		id:"2966b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2967a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"愛神的益處",
		titleEn:"The good about loving God"
	},
	{
		id:"2968a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"不能隔絕的愛",
		titleEn:"The undivided love"
	},
	{
		id:"2968b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2969a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"愛是最大的",
		titleEn:"Love is the greatest"
	},
	{
		id:"2970a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"美夢成真",
		titleEn:"Dream come true"
	},
	{
		id:"2970b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2971a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"雙重的祝福",
		titleEn:"The double portion of blessing"
	},
	{
		id:"2971b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2972a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"真基督徒",
		titleEn:"The true Christian"
	},
	{
		id:"2973a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"胸懷世界的基督徒",
		titleEn:"The global Christian"
	},
	{
		id:"2973b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2974a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"你還缺少一件?",
		titleEn:"Are you still lacking one thing?"
	},
	{
		id:"2975a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"中國心, 神州情",
		titleEn:"Heart for China"
	},
	{
		id:"2975b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"陳敏欽牧師",
		speakerEn:"Rev. Peter Chen",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2975b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2976a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"復興之鑰",
		titleEn:"The key to revival"
	},
	{
		id:"2976b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2977a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"異象",
		titleEn:"The vision"
	},
	{
		id:"2977b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2978a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"重建大衛的帳幕",
		titleEn:"Rebuild the tent of David"
	},
	{
		id:"2979a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"擴張你的帳幕",
		titleEn:"Extend your tent"
	},
	{
		id:"2980a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"婚姻",
		titleEn:"Marriage"
	},
	{
		id:"2980b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2981a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"另一半的追尋",
		titleEn:"The pursuit of the other half"
	},
	{
		id:"2981b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2982a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"戀愛與交友",
		titleEn:"Falling in love and make friends"
	},
	{
		id:"2982b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2983a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"夫妻的角色",
		titleEn:"The role for husband and wife"
	},
	{
		id:"2983b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2984a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"溝通的藝術",
		titleEn:"The art of communication"
	},
	{
		id:"2984b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2985a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"饒恕與和好",
		titleEn:"Forgiveness and make peace"
	},
	{
		id:"2985b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2986a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"建立強壯的家庭",
		titleEn:"To establish a strong family"
	},
	{
		id:"2987a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"為人父母",
		titleEn:"To be parents"
	},
	{
		id:"2987b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2988a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"如何管教兒女",
		titleEn:"How to dicipline children"
	},
	{
		id:"2988b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2989a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"如何培養敬虔的兒女",
		titleEn:"How to raise up faithful children"
	},
	{
		id:"2989b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2990a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"兒女的品格",
		titleEn:"The characters of children"
	},
	{
		id:"2990b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2991a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"如何舉行家庭崇拜",
		titleEn:"How to hold a family devotion"
	},
	{
		id:"2992a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"合一的教會",
		titleEn:"The unity of the church"
	},
	{
		id:"2993a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"大使命的教會",
		titleEn:"The church’s great commission"
	},
	{
		id:"2993b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2994a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"末後的日子",
		titleEn:"The last days"
	},
	{
		id:"2995a",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"預備主再來",
		titleEn:"Prepare for the Lord’s coming"
	},
	{
		id:"2995b",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"葛國光牧師",
		speakerEn:"Rev. Mark Ger",
		titleCn:"續",
		titleEn:"Continued"
	},
	{
		id:"2996",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(1) 會幕聖所",
		titleEn:"Leviticus (1) Tabernacle"
	},
	{
		id:"2997",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(2) 燔祭 ",
		titleEn:"Leviticus (2) Burnt offering"
	},
	{
		id:"2998",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(3) 素祭 ",
		titleEn:"Leviticus (3) Grain offering"
	},
	{
		id:"2999",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(4) 平安祭 ",
		titleEn:"Leviticus (4) Fellowship offering"
	},
	{
		id:"3000",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(5) 贖罪祭 ",
		titleEn:"Leviticus (5) Sin offering"
	},
	{
		id:"3001",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(6) 贖愆祭 ",
		titleEn:"Leviticus (6) Guilt offering"
	},
	{
		id:"3002",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(7) 祭司的責任 ",
		titleEn:"Leviticus (7) Responsibility of prests"
	},
	{
		id:"3003",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(8) 祭司的按立及事奉 ",
		titleEn:"Leviticus (8) Ordenation and service of the prests"
	},
	{
		id:"3004",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(9) 潔淨與聖潔之禮 ",
		titleEn:"Leviticus (9) Clean and unclean"
	},
	{
		id:"3005",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(10) 贖罪 ",
		titleEn:"Leviticus (10) Blood"
	},
	{
		id:"3006",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(11) 節期之一 ",
		titleEn:"Leviticus (11) Festivals (1)"
	},
	{
		id:"3007",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"利未記講座(12) 節期之二 ",
		titleEn:"Leviticus (12) Festivals (2)"
	},
	{
		id:"3008",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (1)",
		titleEn:"Apologetics (1)"
	},
	{
		id:"3009",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (2) ",
		titleEn:"Apologetics (2)"
	},
	{
		id:"3010",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (3) ",
		titleEn:"Apologetics (3)"
	},
	{
		id:"3011",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (4) ",
		titleEn:"Apologetics (4)"
	},
	{
		id:"3012",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (5) ",
		titleEn:"Apologetics (5)"
	},
	{
		id:"3013",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (6) ",
		titleEn:"Apologetics (6)"
	},
	{
		id:"3014",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (7) ",
		titleEn:"Apologetics (7)"
	},
	{
		id:"3015",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (8) ",
		titleEn:"Apologetics (8)"
	},
	{
		id:"3016",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (9) ",
		titleEn:"Apologetics (9)"
	},
	{
		id:"3017",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"羅錦參牧師",
		speakerEn:"Rev. J S Lo",
		titleCn:"基督教護教學講座 (10) ",
		titleEn:"Apologetics (10)"
	},
	{
		id:"3018",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (1) 啟示文學概論",
		titleEn:"Revelation (1)"
	},
	{
		id:"3019",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (2) 啟示錄概論之一",
		titleEn:"Revelation (2)"
	},
	{
		id:"3020",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (3) 啟示錄概論之二 ",
		titleEn:"Revelation (3)"
	},
	{
		id:"3021",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (4) 啟示錄: 所看見的事和現在的事之一",
		titleEn:"Revelation (4)"
	},
	{
		id:"3022",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (5) 啟示錄: 所看見的事和現在的事之二",
		titleEn:"Revelation (5)"
	},
	{
		id:"3023",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (6) 啟示錄: 將來必成的事之一",
		titleEn:"Revelation (6)"
	},
	{
		id:"3024",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (7) 啟示錄: 將來必成的事之二",
		titleEn:"Revelation (7)"
	},
	{
		id:"3025",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (8) 啟示錄: 將來必成的事之三",
		titleEn:"Revelation (8)"
	},
	{
		id:"3026",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (9) 啟示錄: 將來必成的事之四",
		titleEn:"Revelation (9)"
	},
	{
		id:"3027",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (10) 啟示錄: 將來必成的事之五",
		titleEn:"Revelation (10)"
	},
	{
		id:"3028",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (11) 但以理書: 背景及第一章",
		titleEn:"Revelation (11)"
	},
	{
		id:"3029",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (12) 但以理書: 尼布甲尼撤的三個功課",
		titleEn:"Revelation (12)"
	},
	{
		id:"3030",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (13) 但以理書: 但以理的禱告生活",
		titleEn:"Revelation (13)"
	},
	{
		id:"3031",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (14) 但以理書: 但以理的四個異象之一",
		titleEn:"Revelation (14)"
	},
	{
		id:"3032",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (15) 但以理書: 但以理的四個異象之二",
		titleEn:"Revelation (15)"
	},
	{
		id:"3033",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張玉明牧師",
		speakerEn:"Rev. Joseph Chang",
		titleCn:"啟示文學 (16) 但以理書: 但以理的四個異象之三及馬太24章",
		titleEn:"Revelation (16)"
	},
	{
		id:"3055",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (1)",
		titleEn:"Sermon preparation (1)"
	},
	{
		id:"3056",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (2) ",
		titleEn:"Sermon preparation (2)"
	},
	{
		id:"3057",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (3) ",
		titleEn:"Sermon preparation (3)"
	},
	{
		id:"3058",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (4) ",
		titleEn:"Sermon preparation (4)"
	},
	{
		id:"3059",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (5) ",
		titleEn:"Sermon preparation (5)"
	},
	{
		id:"3060",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (6) ",
		titleEn:"Sermon preparation (6)"
	},
	{
		id:"3061",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (7) ",
		titleEn:"Sermon preparation (7)"
	},
	{
		id:"3062",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (8) ",
		titleEn:"Sermon preparation (8)"
	},
	{
		id:"3063",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (9) ",
		titleEn:"Sermon preparation (9)"
	},
	{
		id:"3064",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (10) ",
		titleEn:"Sermon preparation (10)"
	},
	{
		id:"3065",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (11) ",
		titleEn:"Sermon preparation (11)"
	},
	{
		id:"3066",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (12) ",
		titleEn:"Sermon preparation (12)"
	},
	{
		id:"3067",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (13) ",
		titleEn:"Sermon preparation (13)"
	},
	{
		id:"3068",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (14) ",
		titleEn:"Sermon preparation (14)"
	},
	{
		id:"3069",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (15) ",
		titleEn:"Sermon preparation (15)"
	},
	{
		id:"3070",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (16) ",
		titleEn:"Sermon preparation (16)"
	},
	{
		id:"3071",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (17) ",
		titleEn:"Sermon preparation (17)"
	},
	{
		id:"3072",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (18) ",
		titleEn:"Sermon preparation (18)"
	},
	{
		id:"3073",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (19) ",
		titleEn:"Sermon preparation (19)"
	},
	{
		id:"3074",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (20) ",
		titleEn:"Sermon preparation (20)"
	},
	{
		id:"3075",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (21) ",
		titleEn:"Sermon preparation (21)"
	},
	{
		id:"3076",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (22) ",
		titleEn:"Sermon preparation (22)"
	},
	{
		id:"3077",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (23) ",
		titleEn:"Sermon preparation (23)"
	},
	{
		id:"3078",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (24) ",
		titleEn:"Sermon preparation (24)"
	},
	{
		id:"3079",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (25) ",
		titleEn:"Sermon preparation (25)"
	},
	{
		id:"3080",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (26) ",
		titleEn:"Sermon preparation (26)"
	},
	{
		id:"3081",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (27) ",
		titleEn:"Sermon preparation (27)"
	},
	{
		id:"3082",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (28) ",
		titleEn:"Sermon preparation (28)"
	},
	{
		id:"3083",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (29) ",
		titleEn:"Sermon preparation (29)"
	},
	{
		id:"3084",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"釋經講道學 (30) ",
		titleEn:"Sermon preparation (30)"
	},
	{
		id:"3085",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (1) ",
		titleEn:"Lesson (1)"
	},
	{
		id:"3086",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (2) ",
		titleEn:"Lesson (2)"
	},
	{
		id:"3087",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (3) ",
		titleEn:"Lesson (3)"
	},
	{
		id:"3088",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (4) ",
		titleEn:"Lesson (4)"
	},
	{
		id:"3089",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (5) ",
		titleEn:"Lesson (5)"
	},
	{
		id:"3090",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (6) ",
		titleEn:"Lesson (6)"
	},
	{
		id:"3091",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (7) ",
		titleEn:"Lesson (7)"
	},
	{
		id:"3092",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (8) ",
		titleEn:"Lesson (8)"
	},
	{
		id:"3093",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (9) ",
		titleEn:"Lesson (9)"
	},
	{
		id:"3094",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (10) ",
		titleEn:"Lesson (10)"
	},
	{
		id:"3095",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (11) ",
		titleEn:"Lesson (11)"
	},
	{
		id:"3096",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (12) ",
		titleEn:"Lesson (12)"
	},
	{
		id:"3097",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (13) ",
		titleEn:"Lesson (13)"
	},
	{
		id:"3098",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (14) ",
		titleEn:"Lesson (14)"
	},
	{
		id:"3099",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (15) ",
		titleEn:"Lesson (15)"
	},
	{
		id:"3100",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (16) ",
		titleEn:"Lesson (16)"
	},
	{
		id:"3101",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (17) ",
		titleEn:"Lesson (17)"
	},
	{
		id:"3102",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (18) ",
		titleEn:"Lesson (18)"
	},
	{
		id:"3103",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (19) ",
		titleEn:"Lesson (19)"
	},
	{
		id:"3104",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (20) ",
		titleEn:"Lesson (20)"
	},
	{
		id:"3105",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (21) ",
		titleEn:"Lesson (21)"
	},
	{
		id:"3106",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (22) ",
		titleEn:"Lesson (22)"
	},
	{
		id:"3107",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (23) ",
		titleEn:"Lesson (23)"
	},
	{
		id:"3108",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"張子華牧師",
		speakerEn:"Rev. Fred Cheung",
		titleCn:"教牧生活與事奉 (24) ",
		titleEn:"Lesson (24)"
	},
	{
		id:"3109",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"重聖經看基督教兒童教育策略 (1)",
		titleEn:"Biblical view of the strategy of children education (1)"
	},
	{
		id:"3110",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"重聖經看基督教兒童教育策略 (2)",
		titleEn:" Biblical view of the strategy of children education (2)"
	},
	{
		id:"3111",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"瞭解兒童 (1) ",
		titleEn:"Understand children (1)"
	},
	{
		id:"3112",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"瞭解兒童 (2) ",
		titleEn:"Understand children (2)"
	},
	{
		id:"3113",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"改變生命的教導 (1) ",
		titleEn:"Life changing teaching (1)"
	},
	{
		id:"3114",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"改變生命的教導 (2) ",
		titleEn:"Life changing teaching (2)"
	},
	{
		id:"3115",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"改變生命的教導 (3) ",
		titleEn:"Life changing teaching (3)"
	},
	{
		id:"3116",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"改變生命的教導 (4) ",
		titleEn:"Life changing teaching (4)"
	},
	{
		id:"3117",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"主日學教學法 (1) ",
		titleEn:"Basic teaching methods (1)"
	},
	{
		id:"3118",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"主日學教學法 (2) ",
		titleEn:"Basic teaching methods (2)"
	},
	{
		id:"3119",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"主日學教學法 (3) ",
		titleEn:"Basic teaching methods (3)"
	},
	{
		id:"3120",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金佩師母",
		speakerEn:"Mrs. P Chin",
		titleCn:"主日學教學法 (4) ",
		titleEn:"Basic teaching methods (4)"
	},
	{
		id:"3121",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (1)",
		titleEn:"Children song (1)"
	},
	{
		id:"3122",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (2) ",
		titleEn:"Children song (2)"
	},
	{
		id:"3123",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (3) ",
		titleEn:"Children song (3)"
	},
	{
		id:"3124",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (4) ",
		titleEn:"Children song (4)"
	},
	{
		id:"3125",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (5) ",
		titleEn:"Children song (5)"
	},
	{
		id:"3126",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (6) ",
		titleEn:"Children song (6)"
	},
	{
		id:"3127",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (7) ",
		titleEn:"Children song (7)"
	},
	{
		id:"3128",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (8) ",
		titleEn:"Children song (8)"
	},
	{
		id:"3129",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (9) ",
		titleEn:"Children song (9)"
	},
	{
		id:"3130",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (10) ",
		titleEn:"Children song (10)"
	},
	{
		id:"3131",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (11) ",
		titleEn:"Children song (11)"
	},
	{
		id:"3132",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (12)",
		titleEn:"Children song (12)"
	},
	{
		id:"3133",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (13) ",
		titleEn:"Children song (13)"
	},
	{
		id:"3134",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (14) ",
		titleEn:"Children song (14)"
	},
	{
		id:"3135",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (15) ",
		titleEn:"Children song (15)"
	},
	{
		id:"3136",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (16) ",
		titleEn:"Children song (16)"
	},
	{
		id:"3137",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (17) ",
		titleEn:"Children song (17)"
	},
	{
		id:"3138",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (18) ",
		titleEn:"Children song (18)"
	},
	{
		id:"3139",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (19) ",
		titleEn:"Children song (19)"
	},
	{
		id:"3140",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (20) ",
		titleEn:"Children song (20)"
	},
	{
		id:"3141",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (21) ",
		titleEn:"Children song (21)"
	},
	{
		id:"3142",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (22) ",
		titleEn:"Children song (22)"
	},
	{
		id:"3143",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (23) ",
		titleEn:"Children song (23)"
	},
	{
		id:"3144",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (24) ",
		titleEn:"Children song (24)"
	},
	{
		id:"3145",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (25) ",
		titleEn:"Children song (25)"
	},
	{
		id:"3146",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (26) ",
		titleEn:"Children song (26)"
	},
	{
		id:"3147",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (27) ",
		titleEn:"Children song (27)"
	},
	{
		id:"3148",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (28) ",
		titleEn:"Children song (28)"
	},
	{
		id:"3149",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (29) ",
		titleEn:"Children song (29)"
	},
	{
		id:"3150",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (30) ",
		titleEn:"Children song (30)"
	},
	{
		id:"3151",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (31) ",
		titleEn:"Children song (31)"
	},
	{
		id:"3152",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (32) ",
		titleEn:"Children song (32)"
	},
	{
		id:"3153",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (33) ",
		titleEn:"Children song (33)"
	},
	{
		id:"3154",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (34) ",
		titleEn:"Children song (34)"
	},
	{
		id:"3155",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (35) ",
		titleEn:"Children song (35)"
	},
	{
		id:"3156",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (36) ",
		titleEn:"Children song (36)"
	},
	{
		id:"3157",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (37) ",
		titleEn:"Children song (37)"
	},
	{
		id:"3158",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (38) ",
		titleEn:"Children song (38)"
	},
	{
		id:"3159",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (39) ",
		titleEn:"Children song (39)"
	},
	{
		id:"3160",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (40) ",
		titleEn:"Children song (40)"
	},
	{
		id:"3161",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (41) ",
		titleEn:"Children song (41)"
	},
	{
		id:"3162",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (42) ",
		titleEn:"Children song (42)"
	},
	{
		id:"3163",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (43) ",
		titleEn:"Children song (43)"
	},
	{
		id:"3164",
		lang:"Chinese/music",
		langCn:"華/唱",
		speakerCn:"甘霖媒体資訊",
		speakerEn:"G Media Resources",
		titleCn:"兒童詩歌精選 (44) ",
		titleEn:"Children song (44)"
	},
	{
		id:"3165",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金偉聖牧師",
		speakerEn:"Rev.Y S Chin",
		titleCn:"脫離苦毒",
		titleEn:"Bitterness"
	},
	{
		id:"3166",
		lang:"Chinese/English",
		langCn:"華/英語",
		speakerCn:"蔡元雲醫師",
		speakerEn:"Dr. Y Y Tsai",
		titleCn:"民族身份與宣教",
		titleEn:"Racial identity and mission"
	},
	{
		id:"3167",
		lang:"English/Chinese",
		langCn:"英/華語",
		speakerCn:"Dr. Rymond Bakke",
		speakerEn:"Dr. Rymond Bakke",
		titleCn:"城市與宣教",
		titleEn:"Urbanization and mission"
	},
	{
		id:"3168",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (1)",
		titleEn:"Matthew (1)"
	},
	{
		id:"3169",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (2) ",
		titleEn:"Matthew (2)"
	},
	{
		id:"3170",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (3) ",
		titleEn:"Matthew (3)"
	},
	{
		id:"3171",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (4) ",
		titleEn:"Matthew (4)"
	},
	{
		id:"3172",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (5) ",
		titleEn:"Matthew (5)"
	},
	{
		id:"3173",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (6) ",
		titleEn:"Matthew (6)"
	},
	{
		id:"3174",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (7) ",
		titleEn:"Matthew (7)"
	},
	{
		id:"3175",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (8) ",
		titleEn:"Matthew (8)"
	},
	{
		id:"3176",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (9) ",
		titleEn:"Matthew (9)"
	},
	{
		id:"3177",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (10) ",
		titleEn:"Matthew (10)"
	},
	{
		id:"3178",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (11) ",
		titleEn:"Matthew (11)"
	},
	{
		id:"3179",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (12) ",
		titleEn:"Matthew (12)"
	},
	{
		id:"3180",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (13) ",
		titleEn:"Matthew (13)"
	},
	{
		id:"3181",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (14) ",
		titleEn:"Matthew (14)"
	},
	{
		id:"3182",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (15) ",
		titleEn:"Matthew (15)"
	},
	{
		id:"3183",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬太福音 (16) ",
		titleEn:"Matthew (16)"
	},
	{
		id:"3184",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬可福音 (1) ",
		titleEn:"Mark (1)"
	},
	{
		id:"3185",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬可福音 (2) ",
		titleEn:"Mark (2)"
	},
	{
		id:"3186",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
		titleCn:"馬可福音 (3) ",
		titleEn:"Mark (3)"
	},
	{
		id:"3187",
		lang:"Chinese",
		langCn:"華語",
		speakerCn:"金華牧師/金佩師母",
		speakerEn:"Rev. H Chin/Mrs P Chin",
