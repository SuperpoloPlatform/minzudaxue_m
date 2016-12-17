/**************************************************************************
 *
 *  This file is part of the UGE(Uniform Game Engine).
 *  Copyright (C) by SanPolo Co.Ltd. 
 *  All rights reserved.
 *
 *  See http://uge.spolo.org/ for more information.
 *
 *  SanPolo Co.Ltd
 *  http://uge.spolo.org/  sales@spolo.org uge-support@spolo.org
 *
**************************************************************************/
try{
	/*********************************************************************
	*id : "数据编号"
	{
		meshobj : "world中meshobj的name"
		name : "建筑的名称"
		image : "建筑图片"
		intro : "建筑简介"
	}
	**********************************************************************/
	

	BULID_DATA = {
		"0" : {   //图书馆
			meshobj : "bud_16",
			image : "/ui/data/image/tushuguan.jpg",
			chinese:{
				name : "图书馆",
				intro : " [padding='l:0 t:3 r:0 b:3']  在惠园的西南隅，坐落着神韵不凡的新图\n\
[padding='l:0 t:3 r:0 b:3']书馆——刘銮熊楼。新图书馆由通透的玻璃\n\
[padding='l:0 t:3 r:0 b:3']幕墙和厚重的石材呈现出中文“书”字的象\n\
[padding='l:0 t:3 r:0 b:3']形，在明媚的阳光中,投射出浓浓的文化气\n\
[padding='l:0 t:3 r:0 b:3']韵。\n\
[padding='l:0 t:3 r:0 b:3']  图书馆下载使用超星专用浏览器，浏览2000\n\
[padding='l:0 t:3 r:0 b:3']年以前的经贸类图书建立图书馆FTP站点为校\n\
[padding='l:0 t:3 r:0 b:3']内师生的学习、科研 、交流、娱乐提供服务。\n\
[padding='l:0 t:3 r:0 b:3']重点内容包括英语学习、点重内容包括英语\n\
[padding='l:0 t:3 r:0 b:3']学习、各类工具软件、开发软件、及mp3 等。"
			},
			english :{
				name :"Library",
				intro : "  Library of all the economic and trade-\n\
						books are all converted to fulltext sea-\n\
						rch. Readers need a one-time download \n\
						special browser, you can browse our lib-\n\
						rary in 2000 before economic and trade \n\
						books. And the establishment of the Lib-\n\
						rary FTP site to provide services for \n\
						teachers and students learning, research,\n\
						communication, entertainment. Highlights\n\
						include learning English, all kinds of \n\
						tools, software development, and mp3.\n\
						  Hui Park's southwest corner, is the \n\
						extraordinary charm of the new library -\n\
						 Joseph Lau Luen-hung floor. The new li-\n\
						brary by transparent glass walls and a \n\
						heavy stone showing pictograms of the \n\
						Chinese 'book', in the sunshine, the tr-\n\
						ansmission out of a deep cultural artis-\n\
						tically."
			}
		},
		"1" : {   //诚信楼
			meshobj : "bud_02",
			image : "/ui/data/image/chengxinlou.jpg",
			chinese :{
				name : "诚信楼",
				intro : "[padding='l:0 t:3 r:0 b:3']  诚信楼简约质朴的各种教室，是自习的绝\n\
[padding='l:0 t:3 r:0 b:3']佳之地。悬挂在二层墙壁上的一幅幅静物和\n\
[padding='l:0 t:3 r:0 b:3']人物水彩画，错落有致，令人驻足。不会忘\n\
[padding='l:0 t:3 r:0 b:3']记国际会议厅里众多大型活动，国际顶尖学\n\
[padding='l:0 t:3 r:0 b:3']者和外国友人的身影，那精彩纷呈的热闹场\n\
[padding='l:0 t:3 r:0 b:3']面，思想和灵感交锋的火花。"
			},
			english :{
				name :"Cheng Xin",
				intro :"  The simple rustic variety of classroo-\n\
						ms,is an excellent place to study hall. \n\
						A rate of still life and figure waterco-\n\
						lor hanging in the two-story walls, pat-\n\
						chwork,it is stopped. Will never forget \n\
						the manylarge-scale activities of the I-\n\
						nternational Conference Hall, the shadow\n\
						of the top international scholars and \n\
						foreign friends, the lively scene of br-\n\
						illiant ideas and inspiration clash spa-\n\
						rks."
			}
			
		},
		"2" : {		//虹远楼
			meshobj : "bud_17",
			
			image : "/ui/data/image/hongyuanlou.jpg",
			chinese :{
				name : "虹远楼",
				intro : "[padding='l:0 t:3 r:0 b:3']  贸大人用这种仅属于我们自己的方式表达对\n\
[padding='l:0 t:3 r:0 b:3']母校的热爱之情和对奥运、对祖国的真诚祝福。\n\
[padding='l:0 t:3 r:0 b:3']“虹远”见证了我们初入惠园的羞涩和稚嫩，\n\
[padding='l:0 t:3 r:0 b:3']见证了我们挥洒汗水的青春，更见证了我们日\n\
[padding='l:0 t:3 r:0 b:3']趋成熟和自信的成长。"
			},
			english :{
				name :"Hong Yuan",
				intro :"  Trade and adults with this, only our \n\
						own way to express a love for their alm-\n\
						a mater and the sincere wishes of the O-\n\
						lympic Games, the motherland. Rainbow w-\n\
						itnessed Hui Park we entering the shy a-\n\
						nd immature to witness the youth of our \n\
						sweat, witness our growing maturity and \n\
						confidence to grow."
			}
		},
		"3" : {		//求索楼
			meshobj : "bud_14",
			image : "/ui/data/image/qiusuolou.jpg",
			chinese :{
				name : "求索楼",
				intro : "[padding='l:0 t:3 r:0 b:3']  “路漫漫其修远兮，吾将上下而求索”，也\n\
[padding='l:0 t:3 r:0 b:3']许正是因屈原的千古名句，才使“求索楼”的\n\
[padding='l:0 t:3 r:0 b:3']名称直沁人心。她犹如一道道绿色的瀑布，把\n\
[padding='l:0 t:3 r:0 b:3']朴素的楼房打扮得格外爽气。"
			},
			english :{
				name :"Qiu Suo",
				intro :"  'Long Way for its repair Xi Yuan, Wu \n\
						Jiang from top to bottom and search' Pe-\n\
						rhaps it is due to Qu Yuan, famous thro-\n\
						ugh the ages, the name of the quest flat\n\
						straight heart ooze. She is like a Road \n\
						green waterfall, dress up a plain build-\n\
						ing exceptionally Shuangqi."
			}
		},
		"4" : {		//眼镜湖
			meshobj : "bud_36",
			image : "/ui/data/image/tushuguan.jpg",
			chinese :{
				name : "眼镜湖",
				intro : "[padding='l:0 t:3 r:0 b:3']  想在惠园寻一片蓝天、觅一方净土，几乎所\n\
[padding='l:0 t:3 r:0 b:3']有人都会告诉你同一个名字——“眼镜湖”。\n\
[padding='l:0 t:3 r:0 b:3']因为眼镜湖是那样平静；那份包容，让人能够\n\
[padding='l:0 t:3 r:0 b:3']安心地“偷得浮生半日闲”。惠园的眼镜湖却\n\
[padding='l:0 t:3 r:0 b:3']从没有凉秋，只有静静的安心和暖暖的温馨。"
			},
			english :{
				name :"Glasses Lake",
				intro :"  Want to Hui Park, look for a blue sky,\n\
						looking for a party to the Pure Land, \n\
						and almost everyone will tell you the \n\
						same name - 'glasses Lake'.Because glas-\n\
						ses Lake is so calm; that tolerance, pe-\n\
						ople can feel at ease to snatch half a \n\
						day. Hui Park, the glasses Lake never \n\
						Liangqiu to the quiet peace of mind and \n\
						a warm cozy. "
			}
		},
		"5" : {		//南门
			meshobj : "ent_01",
			image : "/ui/data/image/nanmen.jpg",
			chinese :{
				name : "南门",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"South Gate",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"6" : {		//宁远楼
			meshobj : "bud_01",
			image : "/ui/data/image/ningyuanlou.jpg",
			chinese :{
				name : "宁远楼",
				intro : "[padding='l:0 t:3 r:0 b:3']  对外经济贸易大学法学院成立于1984年。\n\
[padding='l:0 t:3 r:0 b:3']经过20多年的发展，目前已经成为学科体系\n\
[padding='l:0 t:3 r:0 b:3']设置完整、国际化特色鲜明、教学和学术水\n\
[padding='l:0 t:3 r:0 b:3']平全国一流的法学院。学院设有完整的本\n\
[padding='l:0 t:3 r:0 b:3']科、硕士、博士课程体系，拥有国际法、民\n\
[padding='l:0 t:3 r:0 b:3']商法两个博士点和法学硕士一级学科点，并\n\
[padding='l:0 t:3 r:0 b:3']设有国际法学博士后流动站。2002年，国际\n\
[padding='l:0 t:3 r:0 b:3']法学专业被批准为国家级重点学科；2006\n\
[padding='l:0 t:3 r:0 b:3']年，民商法学专业被评为北京市重点学科；\n\
[padding='l:0 t:3 r:0 b:3']2007年，法学院获评教育部“国际化法学人\n\
[padding='l:0 t:3 r:0 b:3']才特色专业建设点”及教育部“全国双语教\n\
[padding='l:0 t:3 r:0 b:3']学示范点”。法学院还是中国法学会国际经\n\
[padding='l:0 t:3 r:0 b:3']济法研究会的常设机构所在地。"
			},
			english :{
				name :"Ning Yuan",
				intro :"  The Law School was established in 1984.\n\
						After 20 years of development, has beco-\n\
						me the disciplinary system is set, the \n\
						distinctive characteristics of internat-\n\
						ional teaching and academic standards of\n\
						the national first-class law school. The\n\
						College has a complete system of underg-\n\
						raduate, graduate, and doctoral programs,\n\
						 with international law, a discipline \n\
						point of the Civil and Commercial Law two\n\
						doctoral and Master of Laws, and with \n\
						International Law postdoctoral."
			}
		},
		"7" : {		//计算机中心
			meshobj : "bud_05",
			image : "/ui/data/image/jisuanjizhongxin.jpg",
			chinese :{
				name : "计算机中心",
				intro : "[padding='l:0 t:3 r:0 b:3']  对外经济贸易大学网络与教育技术中心成立\n\
[padding='l:0 t:3 r:0 b:3']于2007年6月，由原网络中心和电教中心整合\n\
[padding='l:0 t:3 r:0 b:3']而成。网络与教育技术中心是学校公共服务体\n\
[padding='l:0 t:3 r:0 b:3']系的重要组成部分，负责校园网的规划、建设、\n\
[padding='l:0 t:3 r:0 b:3']运行与管理；负责全校的教育技术工作；面向\n\
[padding='l:0 t:3 r:0 b:3']全校师生开展网络及现代教育技术服务。目前，\n\
[padding='l:0 t:3 r:0 b:3']网络与教育技术中心现有在职人员43人。\n\
[padding='l:0 t:3 r:0 b:3']  为了便于管理，中心内设综合办公室、网络\n\
[padding='l:0 t:3 r:0 b:3']运行室、信息应用室、信息开发室、网络维护\n\
[padding='l:0 t:3 r:0 b:3']室、教学管理部、音像制作部、资料部和技术\n\
[padding='l:0 t:3 r:0 b:3']部。\n\
[padding='l:0 t:3 r:0 b:3']  网络与教育技术中心的定位：积极努力做好\n\
[padding='l:0 t:3 r:0 b:3']网络与教育技术资源的建设、开发、运行管理\n\
[padding='l:0 t:3 r:0 b:3']工作，最大限度地发挥网络与教育技术资源作\n\
[padding='l:0 t:3 r:0 b:3']用，为学校教学、科研、管理和改革服务。"
			},
			english :{
				name :"computerCenter",
				intro :"  Network and Educational Technology Ce-\n\
						nter was established in June 2007, the \n\
						original network center and audio-visua-\n\
						lcenter consolidation is made. Network \n\
						and Education Technology Center is an \n\
						important part of school public service \n\
						system, responsible for the campus netw-\n\
						ork planning, construction, operation \n\
						and management; responsible for the tec-\n\
						hnical work of the entire school educat-\n\
						ion; for teachers and students to carry \n\
						out the network and modern educational \n\
						technology services. At present, the ex-\n\
						isting network and the Educational Tech-\n\
						nology Center serving officers 43."
			}
		},
		"8" : {		//华德公寓
			meshobj : "bud_18",
			image : "/ui/data/image/huadegongyu.jpg",
			chinese :{
				name : "华德公寓",
				intro : "[padding='l:0 t:3 r:0 b:3']  华德公寓是德国政府援建的中档涉外公寓，\n\
[padding='l:0 t:3 r:0 b:3']拥有多套商务套房、专家公寓、标准间、大床\n\
[padding='l:0 t:3 r:0 b:3']房、写字间和会议室。各房间阳光性能好，宁\n\
[padding='l:0 t:3 r:0 b:3']静平和，整个建筑呈现德式风情，与中国东方\n\
[padding='l:0 t:3 r:0 b:3']装饰风格相结合。套房采用整体精装修，名牌\n\
[padding='l:0 t:3 r:0 b:3']厨具、洁具，所有材料无不精心挑选。"
			},
			english :{
				name : "Hua De",
				intro :"  Hua De Apartment is  funded by the Ge-\n\
						rman government's mid-range foreign apa-\n\
						rtments, with multiple sets of business \n\
						suites, experts apartments, standard ro-\n\
						oms, bed rooms, offices and conference \n\
						rooms. Sun performance of each room, qu-\n\
						iet, peaceful, and the whole building \n\
						presents a German style atmosphere, com-\n\
						bining with China Eastern decorative st-\n\
						yle. The suite overall fine decoration, \n\
						brand-name kitchenware, sanitary ware, \n\
						all materials are all carefully selected."
			}
		},
		"9" : {		//视听中心
			meshobj : "bud_06",
			image : "/ui/data/image/shitingzhongxin.jpg",
			chinese :{
				name : "视听中心",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Audio-visual",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"10" : {		//电教楼
			meshobj : "bud_07",
			image : "/ui/data/image/dianjiaolou.jpg",
			chinese :{
				name : "电教楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"E-classroom",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"11" : {		//求真楼
			meshobj : "bud_03",
			image : "/ui/data/image/qiuzhenlou.jpg",
			chinese :{
				name : "求真楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Qiu Zhen",
				intro :"   Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"12" : {		//汇德公寓
			meshobj : "bud_33",
			image : "/ui/data/image/huidegongyu.jpg",
			chinese :{
				name : "汇德公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui De",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"13" : {		//第一食堂
			meshobj : "bud_10",
			image : "/ui/data/image/diyishitang.jpg",
			chinese :{
				name : "第一食堂",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"firstCanteen",
				intro :"  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"14" : {		//清远楼
			meshobj : "bud_12",
			image : "/ui/data/image/qingyuanlou.jpg",
			chinese :{
				name : "清远楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Qing Yuan",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"15" : {		//体育中心
			meshobj : "bud_13",
			image : "/ui/data/image/tiyuzhongxin.jpg",
			chinese :{
				name : "体育中心",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Sports Center",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"16" : {		//行政楼
			meshobj : "bud_15",
			image : "/ui/data/image/xingzhenglou.jpg",
			chinese :{
				name : "行政楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Administrative",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"17" : {		//汇智公寓
			meshobj : "bud_32",
			image : "/ui/data/image/huizhigongyu.jpg",
			chinese :{
				name : "汇智公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Zhi",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"18" : {		//东门
			meshobj : "ent_02",
			image : "/ui/data/image/dongmen.jpg",
			chinese :{
				name : "东门",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name : "East Gate",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"19" : {		//西门
			meshobj : "ent_03",
			image : "/ui/data/image/ximen.jpg",
			chinese :{
				name : "西门",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name : "West Gate",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"20" : {		//高远楼
			meshobj : "bud_w3",
			image : "/ui/data/image/gaoyuanlou.jpg",
			chinese :{
				name : "高远楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name : "Gao Yuan",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"21" : {		//第二食堂
			meshobj : "bud_11",
			image : "/ui/data/image/dianjiaolou.jpg",
			chinese :{
				name : "第二食堂",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Second canteen",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"22" : {		//学士园
			meshobj : "bud_22",
			image : "/ui/data/image/xueshiyuan.jpg",
			chinese :{
				name : "学士园",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Bachelor Park",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"23" : {		//博学楼
			meshobj : "bud_21",
			image : "/ui/data/image/boxuelou.jpg",
			chinese :{
				name : "博学楼",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Bo Xue",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"24" : {		//汇贤公寓
			meshobj : "bud_24",
			image : "/ui/data/image/huixiangongyu.jpg",
			chinese :{
				name : "汇贤公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Xian",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"25" : {		//汇忠公寓
			meshobj : "bud_25",
			image : "/ui/data/image/huizhonggongyu.jpg",
			chinese :{
				name : "汇忠公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Zhong",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"26" : {		//金鑫公寓
			meshobj : "bud_26",
			image : "/ui/data/image/jinxingongyu.jpg",
			chinese :{
				name : "金鑫公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Jin Xin",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"27" : {		//汇新公寓
			meshobj : "bud_23",
			image : "/ui/data/image/huixingongyu.jpg",
			chinese :{
				name : "汇新公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Xin",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"28" : {		//汇宾公寓
			meshobj : "bud_27",
			image : "/ui/data/image/huibingongyu.jpg",
			chinese :{
				name : "汇宾公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Bin",
				intro :"  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"29" : {		//汇才公寓
			meshobj : "bud_28",
			image : "/ui/data/image/huicaigongyu.jpg",
			chinese :{
				name : "汇才公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Cai",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"30" : {		//汇文公寓
			meshobj : "bud_29",
			image : "/ui/data/image/huiwengongyu.jpg",
			chinese :{
				name : "汇文公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Wen",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"31" : {		//汇美公寓
			meshobj : "bud_30",
			image : "/ui/data/image/huimeigongyu.jpg",
			chinese :{
				name : "汇美公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Mei",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		},
		"32" : {		//汇康公寓
			meshobj : "bud_31",
			image : "/ui/data/image/huikanggongyu.jpg",
			chinese :{
				name : "汇康公寓",
				intro : "[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学，座落于首都北京朝阳区。\n\
[padding='l:0 t:2 r:0 b:2']校园草木葱郁，环境幽雅。功能齐全的教学楼，\n\
[padding='l:0 t:2 r:0 b:2']藏书丰富、自动化管理的图书馆，拥有卫星地\n\
[padding='l:0 t:2 r:0 b:2']面站和现代化的实验室的教育技术中心，设备\n\
[padding='l:0 t:2 r:0 b:2']先进齐全的网络与计算中心，可供正式比赛使\n\
[padding='l:0 t:2 r:0 b:2']用的运动场和游泳场，舒适方便的学生公寓，\n\
[padding='l:0 t:2 r:0 b:2']神采飞扬的学生，温文尔雅的教师…一切，都\n\
[padding='l:0 t:2 r:0 b:2']透露出这所高等学府的青春活力、现代气息。\n\
[padding='l:0 t:2 r:0 b:2']  对外经济贸易大学创建于1951年。2000年以\n\
[padding='l:0 t:2 r:0 b:2']前为原对外贸易经济合作部所属。2000年6月，\n\
[padding='l:0 t:2 r:0 b:2']原中国金融学院与原对外经济贸易大学合并成\n\
[padding='l:0 t:2 r:0 b:2']立新的对外经济贸易大学，转为教育部直属。\n\
[padding='l:0 t:2 r:0 b:2']这是一所随着国家的发展而迅速扩展的全国重\n\
[padding='l:0 t:2 r:0 b:2']点大学，是一所在国内外享有声誉的著名学府。\n\
[padding='l:0 t:2 r:0 b:2']1997年成为首批被列入国家高等教育“211工\n\
[padding='l:0 t:2 r:0 b:2']程”重点建设的高校，目前正朝着一流大学的\n\
[padding='l:0 t:2 r:0 b:2']目标奋进。"
			},
			english :{
				name :"Hui Kang",
				intro : "  Located in the capital city of Beijing\n\
						Chaoyang District. Campus vegetation is\n\
						lush and elegant environment. Fully fun-\n\
						ctional school buildings, stocked, auto-\n\
						mated management of the Library, Educat-\n\
						ional Technology Center has a satellite\n\
						ground station and a modern language la-\n\
						boratory, advanced equipment and comple-\n\
						te the network and computing center, st-\n\
						adium and swimming pool available for \n\
						race use. convenient and comfortable st-\n\
						udent apartments, students in high spir-\n\
						its, gentle teachers ... all are reveal-\n\
						ing the youthful vitality of this insti-\n\
						tution of higher learning and modern at-\n\
						mosphere."
			}
		}
	}
	//校园介绍
	/*id : "数据编号"
	{
		name : "触发控件名称"
		text : "文本内容"
		image : "建筑图片"
	}
	**********************************************************************/
	SCHOOL_DATA = {
		0 : {
			name : "manager_school/dangweishuzi",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']王玲，女，汉族，1956年6月生，福建省人。\n\
[padding='l:0 t:2 r:0 b:2']1974年11月加入中国共产党。\n\
[padding='l:0 t:2 r:0 b:2']2005年7月中共对外经济贸易大学第十届委员\n\
[padding='l:0 t:2 r:0 b:2']会第一次全体会议当选为党委常委、书记。"
			},
			english : {
				text :"\n\
							Wang Ling, female, Han nationality, born in \n\
							June 1956, Fujian Province. He joined the \n\
							Communist Party of China in November 1974.\n\
							Tenth Committee of Chinese Communist Foreign \n\
							Trade and Economic University in July 2005 \n\
							the first plenary session of the Party \n\
							Standing Committee, was elected secretary."
			},
			image : "set:xiaoyuanjieshao image:wangling",
			address :""
		},
		1 : {
			name : "manager_school/xiaozhang",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']施建军，男，汉族，1955年10月生，安徽省人。\n\
[padding='l:0 t:2 r:0 b:2']1984年4月加入中国共产党。经济学博士，教授，\n\
[padding='l:0 t:2 r:0 b:2']博士生导师，享受国务院政府特殊津贴专家。\n\
[padding='l:0 t:2 r:0 b:2']2009年5月被任命为对外经济贸易大学党委委员、\n\
[padding='l:0 t:2 r:0 b:2']常委、校长。"
				},
			english : {
				text :"\n\
							Shi Jianjun, male, Han nationality, the \n\
							October 1955 Health, Anhui Province, peop\n\
							-le. He joined the Communist Party of Chi\n\
							-na in April 1984. Ph.D. in Economics, pr\n\
							-ofessor, doctoral tutor, from the State \n\
							Council special allowance.\n\
							May 2009 was appointed as the Foreign Eco\n\
							-nomic and Trade University Party Committ\n\
							-ee member, Standing Committee, the princ\n\
							-ipal."
			},
			image : "set:xiaoyuanjieshao image:shijianjun",
			address :""
		},
		2 : {
			name : "manager_school/fudangweishuzione",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']杨逢华，男，汉族，1953年8月生，江苏省人。\n\
[padding='l:0 t:2 r:0 b:2']1970年2月加入中国共产党。硕士研究生学历，\n\
[padding='l:0 t:2 r:0 b:2']教授，享受国务院政府特殊津贴专家。\n\
[padding='l:0 t:2 r:0 b:2']2005年7月中共对外经济贸易大学第十届委员会\n\
[padding='l:0 t:2 r:0 b:2']第一次全体会议当选为党委常委、副书记。\n\
[padding='l:0 t:2 r:0 b:2']2005年7月中共对外经济贸易大学纪律委员会第\n\
[padding='l:0 t:2 r:0 b:2']一次全体会议当选为纪委委员、书记。"
				},
			english : {
				text :"		Yang Fenghua, male, Han nationality, born \n\
							in August 1953, Jiangsu Province. He join\n\
							-ed the Communist Party of China in Febru\n\
							-ary 1970. Graduatedegree, professors from \n\
							the State Council special allowance.\n\
							Tenth Committee of Chinese Communist Fore\n\
							-ign Trade and Economic University in July \n\
							2005 the first plenary meeting elected as \n\
							the Party Standing Committee, deputy secre\n\
							-tary of the. Disciplinary Committee of Ch\n\
							-inese Communist Foreign Trade andEconomic \n\
							University in July 2005 the first plenary \n\
							meeting of the elected members for the Co\n\
							-mmission for Discipline Inspection, secr\n\
							-etary"
			},
			image : "set:xiaoyuanjieshao image:yangfenghua",
			address :""
		},
		3 : {
			name : "school_manager/scientific/guoji",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']国际经济贸易学院从2009年起对本科生\n\
[padding='l:0 t:3 r:0 b:3']实施按经济学（贸易、金融、经济）大类招\n\
[padding='l:0 t:3 r:0 b:3']生，下设国际经济与贸易专业、金融学专业、\n\
[padding='l:0 t:3 r:0 b:3']物流管理专业（国际运输与物流方向）、经\n\
[padding='l:0 t:3 r:0 b:3']济学专业（国际税务方向）、经济学（经济\n\
[padding='l:0 t:3 r:0 b:3']与金融学）荣誉学士实验班等五个专业或方\n\
[padding='l:0 t:3 r:0 b:3']向。"
			},
			english : {
				text :"		School of International Relations, Foreign \n\
							Trade and Economic university teaching and \n\
							research strength of one of the colleges. \n\
							College of the existing Department of Poli\n\
							-tical Science, International Department of \n\
							Political Science, Department of Internatio\n\
							-nal Political Economy, Foreign Department \n\
							of the four teaching units, and the establ\n\
							-ishment of the International Energy and \n\
							Environment Research Center, Economic Dipl\n\
							-omacy Research Center, International Migr\n\
							-ation and National Security Research Center, \n\
							soft power with the National Center for \n\
							Strategic Studies, contemporary Chinese \n\
							political development research center, five \n\
							research institutions, has initially formed \n\
							a reasonable structure, layout and neat tea\n\
							-ching and research system."
			},
			image : "",
			address :""
		},
		4 : {
			name : "school_manager/scientific/waiyu",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学外语学院下设阿拉伯语\n\
[padding='l:0 t:3 r:0 b:3']系、法语系、德语系、意大利语系、日语系、\n\
[padding='l:0 t:3 r:0 b:3']朝（韩）语系、俄语系、西班牙语系、越南\n\
[padding='l:0 t:3 r:0 b:3']语系、葡萄牙语系十个学系和中德语言培训\n\
[padding='l:0 t:3 r:0 b:3']中心、中意语言培训中心。十个专业除葡萄\n\
[padding='l:0 t:3 r:0 b:3']牙语外均创建于二十世纪五十年代初期，系\n\
[padding='l:0 t:3 r:0 b:3']国内同类院校中开设较早的学科点。"
			},
			english : {
				text :"		Foreign Language Institute under the Departm\n\
							-ent of Arabic, French Department, German De\n\
							-partment, Italian Department, Japanese Depa\n\
							-rtment, North Korea (Korean) languages​​, Rus\n\
							-sian, Spanish-speaking, Vietnamese language, \n\
							Portuguese-speaking ten Department of Chinese \n\
							and German language training centers, Italian \n\
							language trainingcenter. Ten professional in \n\
							addition to Portuguese, founded in the early \n\
							1950s, the domestic similar institutions in \n\
							the creation of an earlier discipline."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		5 : {
			name : "school_manager/scientific/baoxian",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学保险经济学院（简称\n\
[padding='l:0 t:3 r:0 b:3']保险学院）由原对外经济贸易大学保险系和\n\
[padding='l:0 t:3 r:0 b:3']原中国金融学院保险系合并而成，是全国高\n\
[padding='l:0 t:3 r:0 b:3']校中最早开设专业保险课程的院校之一。保\n\
[padding='l:0 t:3 r:0 b:3']险学院下设四个学系：风险管理与保险学系、\n\
[padding='l:0 t:3 r:0 b:3']员工福利与社会保障学系、统计与精算学系、\n\
[padding='l:0 t:3 r:0 b:3']健康保险与管理学系。设有两个研究中心：\n\
[padding='l:0 t:3 r:0 b:3']保险法研究中心、中国风险管理与保险研究\n\
[padding='l:0 t:3 r:0 b:3']中心。"
			},
			english : {
				text :"		School of Insurance at UIBE is one of the \n\
							earliest academic programs dedicated to \n\
							international risk management education and \n\
							research around China. With more than 20 \n\
							years’ development, the school has ranked the \n\
							leading level among the universities in China, \n\
							making great achievements in the education and \n\
							research on international risk management & \n\
							insurance and Social Security."
			},
			image : "set:xiaoyuanjieshao image:baoxianxueyuan",
			address :""
		},
		6 : {
			name : "school_manager/teaching/dangan",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']档案馆隶属于校长办公室，主要负责全\n\
[padding='l:0 t:3 r:0 b:3']校档案的收集 、整理、 保管、 统计及学历\n\
[padding='l:0 t:3 r:0 b:3']认证工作，室藏档案主要包括历年学校教学、\n\
[padding='l:0 t:3 r:0 b:3']文书、基建、科研档案及实物档案，是我校\n\
[padding='l:0 t:3 r:0 b:3']信息资源的集中地，为适应信息时代的发展，\n\
[padding='l:0 t:3 r:0 b:3']我校档案管理建设将逐步实现信息化、网络\n\
[padding='l:0 t:3 r:0 b:3']化、数字化，提高档案管理及利用水平,为广\n\
[padding='l:0 t:3 r:0 b:3']大师生提供资料共享服务。"
			},
			english : {
				text :"		Archives belonging to the principal's office, \n\
							primarily responsible for the school file to \n\
							collect, collate, custody, statistics and aca\n\
							-demic qualifications, work room possession of \n\
							the file including the calendar year, school \n\
							teaching, instruments, infrastructure, research \n\
							files and physical files, is the focus of our \n\
							school's information resources, to adapt to the \n\
							development of the information age, school reco\n\
							-rds management building will be the progressive \n\
							realization of the information, networking, digi\n\
							-tal file management and utilization levels for \n\
							the majority of teachers and students to provide \n\
							information on shared services"
			},
			image : "set:xiaoyuanjieshao image:1",
			address :""
		},
		7 : {
			name : "school_manager/teaching/libary",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']在惠园的西南隅，坐落着神韵不凡的新图书馆\n\
[padding='l:0 t:3 r:0 b:3']——刘銮熊楼。新图书馆由通透的玻璃幕墙和\n\
[padding='l:0 t:3 r:0 b:3']厚重的石材呈现出中文“书”字的象形，在明\n\
[padding='l:0 t:3 r:0 b:3']媚的阳光中,投射出浓浓的文化气韵。\n\
[padding='l:0 t:3 r:0 b:3']  图书馆下载使用超星专用浏览器，浏览2000年\n\
[padding='l:0 t:3 r:0 b:3']以前的经贸类图书建立图书馆FTP站点为校内师\n\
[padding='l:0 t:3 r:0 b:3']生的学习、科研 、交流、娱乐提供服务。重点\n\
[padding='l:0 t:3 r:0 b:3']内容包括英语学习、点重内容包括英语学习、各\n\
[padding='l:0 t:3 r:0 b:3']类工具软件、开发软件、及mp3 等"
			},
			english : {
				text :"  Library of all the economic and trade-\n\
						books are all converted to fulltext sea-\n\
						rch. Readers need a one-time download \n\
						special browser, you can browse our lib-\n\
						rary in 2000 before economic and trade \n\
						books. And the establishment of the Lib-\n\
						rary FTP site to provide services for \n\
						teachers and students learning, research,\n\
						communication, entertainment. Highlights\n\
						include learning English, all kinds of \n\
						tools, software development, and mp3.\n\
						  Hui Park's southwest corner, is the \n\
						extraordinary charm of the new library -\n\
						 Joseph Lau Luen-hung floor. The new li-\n\
						brary by transparent glass walls and a \n\
						heavy stone showing pictograms of the \n\
						Chinese 'book', in the sunshine, the tr-\n\
						ansmission out of a deep cultural artis-\n\
						tically."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		8 : {
			name : "school_manager/teaching/net",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']网络与教育技术中心是学校公共服务体\n\
[padding='l:0 t:3 r:0 b:3']系的重要组成部分，负责校园网的规划、建\n\
[padding='l:0 t:3 r:0 b:3']设、运行与管理；负责全校的教育技术工作；\n\
[padding='l:0 t:3 r:0 b:3']面向全校师生开展网络及现代教育技术服务。\n\
[padding='l:0 t:3 r:0 b:3']目前，网络与教育技术中心现有在职人员43\n\
[padding='l:0 t:3 r:0 b:3']人。\n\
[padding='l:0 t:3 r:0 b:3']  为了便于管理，中心内设综合办公室、\n\
[padding='l:0 t:3 r:0 b:3']网络运行室、信息应用室、信息开发室、网\n\
[padding='l:0 t:3 r:0 b:3']络维护室、教学管理部、音像制作部、资料\n\
[padding='l:0 t:3 r:0 b:3']部和技术部。\n\
[padding='l:0 t:3 r:0 b:3']  网络与教育技术中心的定位：积极努力\n\
[padding='l:0 t:3 r:0 b:3']做好网络与教育技术资源的建设、开发、运\n\
[padding='l:0 t:3 r:0 b:3']行管理工作，最大限度地发挥网络与教育技\n\
[padding='l:0 t:3 r:0 b:3']术资源作用，为学校教学、科研、管理和改\n\
[padding='l:0 t:3 r:0 b:3']革服务。"
			},
			english : {
				text :"  Network and Educational Technology Ce-\n\
						nter was established in June 2007, the \n\
						original network center and audio-visua-\n\
						lcenter consolidation is made. Network \n\
						and Education Technology Center is an \n\
						important part of school public service \n\
						system, responsible for the campus netw-\n\
						ork planning, construction, operation \n\
						and management; responsible for the tec-\n\
						hnical work of the entire school educat-\n\
						ion; for teachers and students to carry \n\
						out the network and modern educational \n\
						technology services. At present, the ex-\n\
						isting network and the Educational Tech-\n\
						nology Center serving officers 43."
			},
			image : "set:xiaoyuanjieshao image:3",
			address :""
		},
		15 : {
			name : "school_culture/xiaohui",
			chinese : {
				text : "校徽"
			},
			english : {
				text :""
			},
			image : "set:fengjing image:xiaohui_bg",
			address :""
		},
		16 : {
			name : "school_culture/xiaoge",
			chinese : {
				text : "校歌"
			},
			english : {
				text :""
			},
			image : "set:fengjing image:xiaoge_bg",
			address :""
		},
		17 : {
			name : "manager_school/fudangweishuzitwo",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']陈建香，女，汉族，1956年5月生，陕西省人。\n\
[padding='l:0 t:2 r:0 b:2']1976年8月加入中国共产党。经济学学士，高级\n\
[padding='l:0 t:2 r:0 b:2']经济师。\n\
[padding='l:0 t:2 r:0 b:2']2005年7月中共对外经济贸易大学第十届委员会\n\
[padding='l:0 t:2 r:0 b:2']第一次全体会议当选为党委常委、副书记。"
				},
			english : {
				text :"\n\
							Chen Chien-Hong, female, Han nationality, born \n\
							in May 1956, Shaanxi Province. He joined the \n\
							Communist Party of China in August 1976. Bachelor \n\
							of Economics, Senior Economist.\n\
							Tenth Committee of Chinese Communist Foreign Trade \n\
							and Economic University in July 2005 the first \n\
							plenary meeting elected as the Party Standing \n\
							Committee, deputy secretary of the."
			},
			image : "set:xiaoyuanjieshao image:chenjianxiang",
			address :""
		},
		18 : {
			name : "manager_school/fuxiaozhangone",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']刘亚，男，汉族，1959年2月生，辽宁省人。\n\
[padding='l:0 t:2 r:0 b:2']986年10月加入中国共产党。经济学博士，教\n\
[padding='l:0 t:2 r:0 b:2']授，博士生导师，享受国务院政府特殊津贴专\n\
[padding='l:0 t:2 r:0 b:2']家。2009年5月被任命为对外经济贸易大学新\n\
[padding='l:0 t:2 r:0 b:2']一任副校长。"
				},
			english : {
				text :"\n\
							Liu Ya, male, Han nationality, February 1959 \n\
							born in Liaoning Province people. He joined \n\
							the Communist Party of China in October 1986. \n\
							Ph.D. in Economics, professor, doctoral tutor, \n\
							from the State Council special allowance.\n\
							May 2009 was appointed as the new vice princip\n\
							-al of he Foreign Economic and Trade University."
			},
			image : "set:xiaoyuanjieshao image:liuya",
			address :""
		},
		19 : {
			name : "manager_school/fuxiaozhangtwo",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']胡福印，男，汉族，1953年2月生，山东省人。\n\
[padding='l:0 t:2 r:0 b:2']1972年4月加入中国共产党。2009年5月被任命\n\
[padding='l:0 t:2 r:0 b:2']为对外经济贸易大学新一任副校长。"
				},
			english : {
				text :"\n\
							Hu Fu-Indian, male, Han nationality, born in \n\
							February 1953, Shandong Province. He joined \n\
							the Communist Party of China in April 1972.\n\
							May 2009 was appointed as the new vice princi\n\
							-pal of the Foreign Economic and Trade Univer\n\
							-sity."
			},
			image : "set:xiaoyuanjieshao image:hufuyin",
			address :""
		},
		20 : {
			name : "manager_school/fuxiaozhangthree",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']林桂军，男，汉族，1959年6月生，北京市人。\n\
[padding='l:0 t:2 r:0 b:2']1982年7月加入中国共产党。经济学博士，教\n\
[padding='l:0 t:2 r:0 b:2']授，博士生导师，享受国务院特殊津贴专家。 \n\
[padding='l:0 t:2 r:0 b:2']2009年5月被任命为对外经济贸易大学新一任\n\
[padding='l:0 t:2 r:0 b:2']副校长。"
				},
			english : {
				text :"\n\
							Lingui Jun, male, Han nationality, born in Ju\n\
							-ne 1959, Beijing. He joined the Communist Pa\n\
							-rty of China in July 1982. Doctor of Economi\n\
							-cs, professor, doctoral tutor, the State Cou\n\
							-ncil special allowance.\n\
							May 2009 was appointed as the new vice princi\n\
							-pal of the Foreign Economic and Trade Univer\n\
							-sity."
			},
			image : "set:xiaoyuanjieshao image:linguijun",
			address :""
		},
		21 : {
			name : "manager_school/fuxiaozhangfour",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']张新民，男，汉族，1962年12月生，北京市人。\n\
[padding='l:0 t:2 r:0 b:2']1985年6月加入中国共产党。管理学博士，教\n\
[padding='l:0 t:2 r:0 b:2']授，博士生导师，享受国务院政府特殊津贴专\n\
[padding='l:0 t:2 r:0 b:2']家。2009年5月被任命为对外经济贸易大学党委\n\
[padding='l:0 t:2 r:0 b:2']常委、副校长。"
				},
			english : {
				text :"\n\
							Zhang Xinmin, male, Han nationality, born in \n\
							December 1962, the Beijing people. He joined \n\
							the Communist Party of China in June 1985. \n\
							Management Ph.D., professor and doctoral sup\n\
							-ervisor, from the State Council special \n\
							allowance.\n\
							May 2009 was appointed as the Foreign Econom\n\
							-ic and Trade University Party Committee and \n\
							Vice-Chancellor."
			},
			image : "set:xiaoyuanjieshao image:zhangxinmin",
			address :""
		},
		22 : {
			name : "manager_school/fuxiaozhangfive",
			chinese :{
				text : "[padding='l:0 t:2 r:0 b:2']赵忠秀，男，汉族，1966年3月生，江苏人。\n\
[padding='l:0 t:2 r:0 b:2']1986年11月加入中国共产党。经济学博士，教授，\n\
[padding='l:0 t:2 r:0 b:2']博士生导师，享受国务院政府特殊津贴专家。\n\
[padding='l:0 t:2 r:0 b:2']2011年5月任对外经济贸易大学党委常委、副校\n\
[padding='l:0 t:2 r:0 b:2']长。"
				},
			english : {
				text :"\n\
							The Zhao Zhongxiu, male, Han nationality, bor\n\
							-n in March 1966, Jiangsu. He joined the Comm\n\
							-unist Party of China in November 1986. Ph.D. \n\
							in Economics, professor, doctoral tutor, from the State Council sp\n\
							the State Council special allowance.\n\
							May 2011, he was appointed Foreign Economic \n\
							and Trade University Party Committee and Vice\n\
							-Chancellor."
			},
			image : "set:xiaoyuanjieshao image:zhaozhongxiu",
			address :""
		},
		23 : {
			name : "school_manager/scientific/guanli",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']公共管理学院是以经济类、管理类、法\n\
[padding='l:0 t:3 r:0 b:3']学类和外语类等学科为支撑的培养应用型人\n\
[padding='l:0 t:3 r:0 b:3']才的具有鲜明特色的学院，在对外经贸管理、\n\
[padding='l:0 t:3 r:0 b:3']海关管理和文化事业管理等领域具有自己的\n\
[padding='l:0 t:3 r:0 b:3']突出优势。公共管理学院设有行政管理系、\n\
[padding='l:0 t:3 r:0 b:3']公共事业管理系、公共经济系和海关管理系\n\
[padding='l:0 t:3 r:0 b:3']四个系，此外，还设有关务研究中心、行业\n\
[padding='l:0 t:3 r:0 b:3']协会研究中心、社会稳定与危机管理研究中\n\
[padding='l:0 t:3 r:0 b:3']心和文化与休闲管理研究中心等多个研究机\n\
[padding='l:0 t:3 r:0 b:3']构。"
			},
			english : {
				text :"		School of Public Administration based on such dis\n\
							-ciplines as economics, management, law and forei\n\
							-gn languages ​​supported for Applied Talents of the \n\
							Academy of the distinctive features, its outstandi\n\
							-ng advantages in the field of foreign trade manag\n\
							-ement, customs administration, and culture manage\n\
							-ment. Institute of Public Administration with Exe\n\
							-cutive Management, Department of Management, public \n\
							utilities, public economics and customs administra\n\
							-tion of four departments, in addition, also set \n\
							the Service Research Center Research Center of the \n\
							industry associations, social stability and crisis \n\
							management centers and cultural and leisure manage\n\
							-ment Research Center and other research instituti\n\
							-ons."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		24 : {
			name : "school_manager/scientific/guanxi",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']国际关系学院是对外经济贸易大学教学\n\
[padding='l:0 t:3 r:0 b:3']与科研实力雄厚的学院之一。学院现有政治\n\
[padding='l:0 t:3 r:0 b:3']学系、国际政治学系、国际政治经济学系、\n\
[padding='l:0 t:3 r:0 b:3']外交学系等4个教学单位，并设立了国际能\n\
[padding='l:0 t:3 r:0 b:3']源与环境研究中心、经济外交研究中心、国\n\
[padding='l:0 t:3 r:0 b:3']际移民与国家安全研究中心、软实力与国家\n\
[padding='l:0 t:3 r:0 b:3']战略研究中心、当代中国政治发展研究中心\n\
[padding='l:0 t:3 r:0 b:3']等5个研究机构，已经初步形成了结构合理、\n\
[padding='l:0 t:3 r:0 b:3']布局整齐的教学和科研体系。"
			},
			english : {
				text :"		School of Public Administration based on such disc\n\
							-iplines as economics, management, law and foreign \n\
							languages ​​supported for Applied Talents of the Aca\n\
							-demy of the distinctive features, its outstanding \n\
							advantages in the field of foreign trade management, \n\
							customs administration, and culture management. Ins\n\
							-titute of Public Administration with Executive Mana\n\
							-gement, Department of Management, public utilities, \n\
							public economics and customs administration of four \n\
							departments, in addition, also set the Service Rese\n\
							-arch Center Research Center of the industry associ\n\
							-ations, social stability and crisis management cen\n\
							-ters and cultural and leisure management Research \n\
							Center and other research institutions."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		25 : {
			name : "school_manager/scientific/jinrong",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学金融学院是国内一流\n\
[padding='l:0 t:3 r:0 b:3']金融学院之一。学院成立于2001年3月，是\n\
[padding='l:0 t:3 r:0 b:3']原对外经济贸易大学和中国金融学院合并后，\n\
[padding='l:0 t:3 r:0 b:3']在原中国金融学院金融系、工商管理系、国\n\
[padding='l:0 t:3 r:0 b:3']际经济系等主要学系基础上组建而成。学院\n\
[padding='l:0 t:3 r:0 b:3']秉承两校特色，具备专业化程度强，国际化\n\
[padding='l:0 t:3 r:0 b:3']程度高的特点，并与金融业界保持广泛而紧\n\
[padding='l:0 t:3 r:0 b:3']密的联系。学院以学科建设为龙头，以人才\n\
[padding='l:0 t:3 r:0 b:3']培养为本，以科学研究为突破口，力争打造\n\
[padding='l:0 t:3 r:0 b:3']国内一流、国际知名的中国金融教育和研究\n\
[padding='l:0 t:3 r:0 b:3']平台。"
			},
			english : {
				text :"		This is one of the first-class financial school. Fo\n\
							-rmed on the basis of the original Chinese Institut\n\
							-e of Finance, Department of Finance, Department of \n\
							Business Administration, Department of Economics De\n\
							-partment of the College was founded in March 2001, \n\
							the Foreign Economic and Trade University and the \n\
							Chinese financial institutions to. Institute of adh\n\
							-ering to the characteristics of the two schools, \n\
							with the degree of specialization and a high degree \n\
							of internationalization features, and maintain exte\n\
							-nsive and close ties with the financial industry. \n\
							College to the construction of the discipline as a \n\
							leader-oriented personnel training, scientific rese\n\
							-arch as a breakthrough, and strive to create the d\n\
							-omestic first-class, internationally renowned fina\n\
							-ncial education and research platform."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		26 : {
			name : "school_manager/scientific/shangxue",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']国际商学院以“创造管理新知，培养高\n\
[padding='l:0 t:3 r:0 b:3']素质全球化工商管理人才”为使命，以“成\n\
[padding='l:0 t:3 r:0 b:3']为中国领先的商学院”为愿景，以“不断优\n\
[padding='l:0 t:3 r:0 b:3']化师资结构和质量，持续改进内部管理机制，\n\
[padding='l:0 t:3 r:0 b:3']通过提升教学、科研和社会服务的整体质量，\n\
[padding='l:0 t:3 r:0 b:3']实现从‘商学院的国际化’到‘国际化的商\n\
[padding='l:0 t:3 r:0 b:3']学院的跨越’”作为学院发展战略。\n\
[padding='l:0 t:3 r:0 b:3']国际商学院本科教育开设会计学、工商管理、\n\
[padding='l:0 t:3 r:0 b:3']财务管理、人力资源管理、市场营销5个专\n\
[padding='l:0 t:3 r:0 b:3']业，在校本科生1500余人。现有大学本科、\n\
[padding='l:0 t:3 r:0 b:3']硕士和博士研究生三个培养层次。"
			},
			english : {
				text :"		International Business School to create management \n\
							new train high-quality globalization of industry \n\
							and commerce management personnel for the mission \n\
							to become China's leading business schools 'for the \n\
							vision to constantly optimize the teacher structure \n\
							and quality, continuous improvement of internal \n\
							management mechanism, byenhance the overall quality \n\
							of teaching, research and social services, from \n\
							'the internationalization of the business school' to \n\
							'international business school across' as' develop\n\
							-ment strategy."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		27 : {
			name : "school_manager/scientific/xinxi",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学信息学院成立于全球\n\
[padding='l:0 t:3 r:0 b:3']经济逐步融合、信息化带动工业化的全新时\n\
[padding='l:0 t:3 r:0 b:3']代。学院目前设有3个系、有信息管理与信\n\
[padding='l:0 t:3 r:0 b:3']息系统、电子商务（国际商务方向、金融服\n\
[padding='l:0 t:3 r:0 b:3']务外包方向）三个本科专业方向、电子商务\n\
[padding='l:0 t:3 r:0 b:3']（网络营销）留学生本科专业、产业经济学\n\
[padding='l:0 t:3 r:0 b:3']（电子商务）和金融学（金融服务外包）两\n\
[padding='l:0 t:3 r:0 b:3']个硕士专业、产业经济学（网络金融服务）\n\
[padding='l:0 t:3 r:0 b:3']博士研究生方向。\n\
  [padding='l:0 t:3 r:0 b:3']学院注重发挥经济学、管理学和信息技\n\
[padding='l:0 t:3 r:0 b:3']术相结合的学科优势，近年来教学科研成果\n\
[padding='l:0 t:3 r:0 b:3']十分显著。"
			},
			english : {
				text :"		School of Information was established in the global \n\
							economy, the gradual integration of the new era of \n\
							information technology to stimulate industrialization. \n\
							Institute currently has three departments, informat\n\
							-ion management and information systems, e-commerce \n\
							international business directions, financial services \n\
							outsourcing direction three undergraduate majors, \n\
							undergraduate students of e-business (network marke\n\
							ting) professional, industrial economics (e-commerce \n\
							two Master) and Finance (financial services outsourc\n\
							ing), industrial economics (network financial servic\n\
							es), the direction of doctoral students. "
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		28 : {
			name : "school_manager/scientific/yinyu",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']英语学院是对外经济贸易大学历史最悠\n\
[padding='l:0 t:3 r:0 b:3']久、师资力量最雄厚的学院之一。设立于\n\
[padding='l:0 t:3 r:0 b:3']1951年学校成立之初的英语专业是我校最重\n\
[padding='l:0 t:3 r:0 b:3']要且最有影响力的专业之一，学院下设商务\n\
[padding='l:0 t:3 r:0 b:3']英语学系、翻译系、语言文学系及通用英语\n\
[padding='l:0 t:3 r:0 b:3']学系4个学系；此外，还设有商务英语与跨\n\
[padding='l:0 t:3 r:0 b:3']文化研究中心、商务英语研究所、翻译研究\n\
[padding='l:0 t:3 r:0 b:3']所、英语国别文化研究所等科研机构。"
			},
			english : {
				text :"		English Language Institute is one of the Foreign Eco\n\
							-nomic and Trade University, the oldest and most pow\n\
							-erful teachers College. The English major is establ\n\
							-ished in the beginning of the school was founded in \n\
							1951, my school is the most important and most influ\n\
							-ential professional one, under the College of Busin\n\
							-ess Department of English, Translation, Language and \n\
							Literature Department and the General Department of \n\
							English, 4 Department of; In addition, it also has a \n\
							Business English and Intercultural Research Center, \n\
							Institute of Business English, Graduate Institute of \n\
							Translation, English Country cultural Institute and \n\
							other research institutions."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		29 : {
			name : "school_manager/scientific/faxue",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学法学院成立于1984年。\n\
[padding='l:0 t:3 r:0 b:3']经过20多年的发展，目前已经成为学科体系\n\
[padding='l:0 t:3 r:0 b:3']设置完整、国际化特色鲜明、教学和学术水\n\
[padding='l:0 t:3 r:0 b:3']平全国一流的法学院。学院设有完整的本科、\n\
[padding='l:0 t:3 r:0 b:3']硕士、博士课程体系，拥有国际法、民商法\n\
[padding='l:0 t:3 r:0 b:3']两个博士点和法学硕士一级学科点，并设有\n\
[padding='l:0 t:3 r:0 b:3']国际法学博士后流动站。"
			},
			english : {
				text :"		The University of International Business and Econo\n\
							-mics Law School, is one of the first four higher \n\
							education academies with doctoral programs. Founded \n\
							in 1984, the UIBE Law School has undergone signific\n\
							-ant development as China has opened up to the world. \n\
							At present, it has two doctoral programs (Internatio\n\
							-nal Law and Civil Law), first-rate master programs, \n\
							postdoctoral programs and a student body of over 1000. "
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		30 : {
			name : "school_manager/scientific/jingji",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']国际经济研究院是对外经济贸易大学直\n\
[padding='l:0 t:3 r:0 b:3']属综合性研究与教学机构，成立于1982年。\n\
[padding='l:0 t:3 r:0 b:3']经过20多年发展，已形成一支高、中、初级\n\
[padding='l:0 t:3 r:0 b:3']职称相互补充，老中青搭配合理的学术梯队。\n\
[padding='l:0 t:3 r:0 b:3']现有专职研究人员和行政辅助人员30余人，\n\
[padding='l:0 t:3 r:0 b:3']具备高级职称的科研人员占2/3，1/2的科研\n\
[padding='l:0 t:3 r:0 b:3']人员具有博士学位，其中不乏在学术界有很\n\
[padding='l:0 t:3 r:0 b:3']深影响的专家学者。研究人员多具有较为全\n\
[padding='l:0 t:3 r:0 b:3']面的专业知识、较高的外语水平、较强的综\n\
[padding='l:0 t:3 r:0 b:3']合研究与双语教学能力，而且相当一部分研\n\
[padding='l:0 t:3 r:0 b:3']究人员还具有在我国驻外使领馆及国外大学\n\
[padding='l:0 t:3 r:0 b:3']工作和学习的经历。"
			},
			english : {
				text :"		Institute for International Economics is directly und\n\
							-er the Foreign Economic and Trade University, a comp\n\
							-rehensive research and teaching institutions, was es\n\
							-tablished in 1982. After 20 years of development, has \n\
							formed a high, middle and junior titles complement ea\n\
							-ch other, we bring together with a reasonable academic \n\
							echelon. Existing full-time researchers and administr\n\
							-ative support staff of more than 30 people, with the \n\
							title of senior researchers accounted for 2/3, 1/2 of \n\
							the researchers with a doctorate, many of whom have a \n\
							deep impact in the academic experts and scholars. And \n\
							more researchers with a more comprehensive expertise, a \n\
							high level of foreign language, strong comprehensive \n\
							study of bilingual teaching ability, and a considerable \n\
							part of the researchers in our overseas consulates and \n\
							foreign universities and learning experience."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		31 : {
			name : "school_manager/scientific/wto",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']中国世界贸易组织研究院是由对外经济\n\
[padding='l:0 t:3 r:0 b:3']贸易大学主办的一个科研、教学与咨询服务\n\
[padding='l:0 t:3 r:0 b:3']一体化的实体机构。研究院的宗旨是根据我\n\
[padding='l:0 t:3 r:0 b:3']国改革开放和建立社会主义市场经济的基本\n\
[padding='l:0 t:3 r:0 b:3']国策，以及加入世界贸易组织的客观要求，\n\
[padding='l:0 t:3 r:0 b:3']专门从事以世界贸易组织为基础的多边经济\n\
[padding='l:0 t:3 r:0 b:3']贸易体制、经济一体化及各国相关经贸政策\n\
[padding='l:0 t:3 r:0 b:3']等综合性国际问题研究，为我国融入国际经\n\
[padding='l:0 t:3 r:0 b:3']济体系、参与国际竞争和进行现代化建设服\n\
[padding='l:0 t:3 r:0 b:3']务。研究院将按照教育部对重点研究基地的\n\
[padding='l:0 t:3 r:0 b:3']要求，努力建设成为我国WTO领域的科学研\n\
[padding='l:0 t:3 r:0 b:3']究基地、人才培养培训基地、全国学术交流\n\
[padding='l:0 t:3 r:0 b:3']和资料信息基地、咨询服务基地和科研体制\n\
[padding='l:0 t:3 r:0 b:3']改革的试验基地。"
			},
			english : {
				text :"		China WTO Research Institute is sponsored by the Foreign \n\
							Economic and Trade University, a research, teaching, int\n\
							-egration and consulting services entity. The purpose of \n\
							the Research Institute of China's reform and opening up \n\
							and the basic national policy of the socialist market econ\n\
							-omy, and the addition of the objective requirements of the \n\
							WTO, which specializes in the WTO-based multilateral econo\n\
							-mic and trade system, economic integration and national ec\n\
							-onomic and trade policies comprehensive international \n\
							Studies, China's integration into the international economy, \n\
							and participate in international competition and moderniza\n\
							-tion. The Institute will in accordance with the requireme\n\
							-nts of the Ministry of Education Key Research Base, and \n\
							strive to build China's WTO areas of scientific research \n\
							base, talent training base for national academic exchanges \n\
							and data and information base, consulting service base and \n\
							experimental bases of the scientific research system."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		32 : {
			name : "school_manager/scientific/zhiye",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']“学习是终身的职业”。创建于1994年\n\
[padding='l:0 t:3 r:0 b:3']的对外经济贸易大学继续教育学院紧紧抓住\n\
[padding='l:0 t:3 r:0 b:3']了上个世纪末所出现的一个重要的政策机遇\n\
[padding='l:0 t:3 r:0 b:3']期，在蓬勃兴起的高考扩招的浪潮中异军突\n\
[padding='l:0 t:3 r:0 b:3']起，成为中国特色高等继续教育领域里的一\n\
[padding='l:0 t:3 r:0 b:3']支生力军和排头兵。今天的继续教育学院，\n\
[padding='l:0 t:3 r:0 b:3']已经在继续教育的秩序、质量和规范性建设\n\
[padding='l:0 t:3 r:0 b:3']方面享有盛名，已经成为一个令北京乃至全\n\
[padding='l:0 t:3 r:0 b:3']国的一些在职青年不断追求和向往的、能够\n\
[padding='l:0 t:3 r:0 b:3']比较完整地体现出继续教育价值的、社会化\n\
[padding='l:0 t:3 r:0 b:3']的大众教育品牌,是一个“团结、拼搏、开\n\
[padding='l:0 t:3 r:0 b:3']拓、创新”这些光荣的文化元素已经融合于\n\
[padding='l:0 t:3 r:0 b:3']继教人的精神和性格之中的继续教育学院。"
			},
			english : {
				text :"		'Learning is a lifelong career.' Foreign Trade and Economic \n\
							University, founded in 1994 to continue the Institute of Ed\n\
							-ucation firmly grasp the end of the last century, an impor\n\
							-tant policy opportunity, the sudden emergence of the wave \n\
							of the burgeoning college entrance examination enrollment, \n\
							to become the field of higher continuing education with Chi\n\
							-nese characteristics a new force and the vanguard. Today's \n\
							School of Continuing Education, in order to continue educat\n\
							-ion, quality and construction of normative reputation, has \n\
							become a way to make Beijing and even some young people wor\n\
							-king in the constant pursuit of and yearning for, and able \n\
							to completely reflect the continuing education value, socia\n\
							-lization of public education brand is a 'unity, hard work, \n\
							pioneering and innovative' these glorious cultural elements \n\
							have been integrated in Jijiao people's spirit and character \n\
							of the School of Continuing Education."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		33 : {
			name : "school_manager/scientific/yuancheng",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学远程教育学院（简称\n\
[padding='l:0 t:3 r:0 b:3']“贸大远程”）在中国加入WTO后，经教育\n\
[padding='l:0 t:3 r:0 b:3']部批准于2002年3月成立，是学校的职能部\n\
[padding='l:0 t:3 r:0 b:3']门和直属院系之一，归口管理全校网络教育\n\
[padding='l:0 t:3 r:0 b:3']的专科、本科、研究生等各层次的日常工作。\n\
  [padding='l:0 t:3 r:0 b:3']贸大远程以学校深厚的国际化背景和国\n\
[padding='l:0 t:3 r:0 b:3']内首屈一指的外经贸特色为依托，立足高、\n\
[padding='l:0 t:3 r:0 b:3']精、特，涵盖专、本、研，针对广大在职人\n\
[padding='l:0 t:3 r:0 b:3']员为主的社会公民，通过建立各地远程学习\n\
[padding='l:0 t:3 r:0 b:3']中心，覆盖全国、面向国际。"
			},
			english : {
				text :"		After China's accession to the WTO, Foreign Trade and \n\
							Economic University Distance Education (referred to as \n\
							'trade remote'), approved by the Ministry of Education \n\
							was established in March 2002, is the one of the school's \n\
							departments and affiliated faculty, centralized manage\n\
							-ment of all online educationcollege, undergraduate, and \n\
							graduate students at all levels of daily work. Trade la\n\
							-rge remote schools profound international background and \n\
							the country's leading foreign trade and economic charact\n\
							-eristics based on high, fine, special covers specifically, \n\
							the research, the citizen, based for the majority of \n\
							service personnel through the establishment of distan\n\
							-ce learning around the center covering the whole cou\n\
							-ntry, international in outlook."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		34 : {
			name : "school_manager/scientific/zhongfa",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		35 : {
			name : "school_manager/scientific/yanxiu",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学高级研修学院建立于\n\
[padding='l:0 t:3 r:0 b:3']2002年3月，办学方向是发展高层次的非学\n\
[padding='l:0 t:3 r:0 b:3']历教育。著名经济学家吴敬琏为我院题词：\n\
[padding='l:0 t:3 r:0 b:3']希望对外经济贸易大学的这一重要探索取得\n\
[padding='l:0 t:3 r:0 b:3']成功。\n\
  [padding='l:0 t:3 r:0 b:3']我校对办好高级研修学院高度重视，由\n\
[padding='l:0 t:3 r:0 b:3']学校领导担任院长，统一调度全校的教育资\n\
[padding='l:0 t:3 r:0 b:3']源，致力于培养学院按照国家的发展方向，\n\
[padding='l:0 t:3 r:0 b:3']适应时代与社会的进步要求，在改革创新中\n\
[padding='l:0 t:3 r:0 b:3']进行多样化高端办学的能力。"
			},
			english : {
				text :"		Advanced Training Institute of Foreign Trade and \n\
							Economic University was established in March 2002, \n\
							the direction of running is the development of \n\
							high-level non-degree education. The famous econ\n\
							-omist of the hospital, I wrote an inscription: \n\
							the success of this important exploration of the \n\
							Foreign Trade and Economic University. I proofread \n\
							run the Advanced Training Institute attaches great \n\
							importance to school leaders as president, unified \n\
							scheduling of the school's educational resources, \n\
							is committed to developing the College in accordan\n\
							-ce with the direction of development of the coun\n\
							-try to adapt to the times and social progress in \n\
							the reform and innovation to diversify end of sch\n\
							-ool capacity."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		36 : {
			name : "school_manager/scientific/sixiang",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']思想政治理论课教学科研部，简称思政\n\
[padding='l:0 t:3 r:0 b:3']教研部，是学校根据中宣部、教育部《关于\n\
[padding='l:0 t:3 r:0 b:3']进一步加强高等学校思想政治理论课教师队\n\
[padding='l:0 t:3 r:0 b:3']伍建设的意见》等文件精神，于2009年11月\n\
[padding='l:0 t:3 r:0 b:3']在原人文与社会科学学院的哲学社会学系、\n\
[padding='l:0 t:3 r:0 b:3']历史文化系等学系基础上组建而成的。思政\n\
[padding='l:0 t:3 r:0 b:3']教研部是直属校党委领导下的独立二级教学\n\
[padding='l:0 t:3 r:0 b:3']科研机构，是学校思想政治理论课教学部门\n\
[padding='l:0 t:3 r:0 b:3']和马克思主义理论研究机构，是学校马克思\n\
[padding='l:0 t:3 r:0 b:3']主义理论学科点的依托单位，负责全校思想\n\
[padding='l:0 t:3 r:0 b:3']政治理论课的教学和科研管理工作。"
			},
			english : {
				text :"		This is the schools in the Central Propaganda Department, \n\
							the Ministry of Education views on further strengthening \n\
							the colleges and universities ideological and political \n\
							theory Teachers 'spirit of the document in November 2009 \n\
							in philosophy of the original Humanities and Social Scie\n\
							-nces Department of Sociology, Department of history and \n\
							culturesuch as the Department of the basis formed. Ideol\n\
							-ogical Department of Research and independent secondary \n\
							teaching and research institutions directly under the pa\n\
							-rty committee under the leadership of the school ideolo\n\
							-gical and political theory teaching departments and the \n\
							Marxist theoretical research institutions, the school of \n\
							Marxist theory disciplinary points based on the unit res\n\
							-ponsible for the school ideological and political theory \n\
							teaching and research management."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		36 : {
			name : "school_manager/scientific/zhongwen",
			chinese :{
				text : "  [padding='l:0 t:3 r:0 b:3']中国语言文学学院的前身是具有二十余\n\
[padding='l:0 t:3 r:0 b:3']年历史的中文教研室。经教育部批准，2002\n\
[padding='l:0 t:3 r:0 b:3']年设立汉语言文学本科专业，2008年设立对\n\
[padding='l:0 t:3 r:0 b:3']外汉语本科专业。学院目前共有专职教师29\n\
[padding='l:0 t:3 r:0 b:3']人，其中具有高级职称的15人，占52%，具\n\
[padding='l:0 t:3 r:0 b:3']有博士学位的21人，占72% 。依托汉语言文\n\
[padding='l:0 t:3 r:0 b:3']学和对外汉语两个本科专业进行学科建设，\n\
[padding='l:0 t:3 r:0 b:3']学院正积极申办汉语言文学一级学科硕士点\n\
[padding='l:0 t:3 r:0 b:3']和国际汉语教育硕士点。"
			},
			english : {
				text :"		The predecessor of the Chinese Institute of Language and \n\
							Literature Department of the Chinese has a history of more \n\
							than twenty years. Approved by the Ministry of Education, \n\
							established in 2002, the Chinese Language and Literature \n\
							undergraduate programs, established in 2008, the Chinese \n\
							as a Foreign Language undergraduate. College are currently \n\
							full-time teachers and 29, including 15 with senior profes\n\
							-sional titles, accounting for 52%, with a doctorate and 21, \n\
							accounting for 72%. Relying on the Chinese Language and \n\
							Literature and Foreign Language undergraduate discipline \n\
							construction, the Institute is actively bidding to a dis\n\
							-cipline of Chinese Language and Literature master's degree \n\
							and international Chinese education master's degree."
			},
			image : "set:xiaoyuanjieshao image:yingyuxueyuan",
			address :""
		},
		37 : {
			name : "school_manager/teaching/chuban",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']1980年，原对外经济贸易部国际贸易研\n\
[padding='l:0 t:3 r:0 b:3']究所与原北京对外贸易学院联合成立对外贸\n\
[padding='l:0 t:3 r:0 b:3']易出版社，在原北京对外贸易学院设立第二\n\
[padding='l:0 t:3 r:0 b:3']发行组。对外贸易出版社第二发行组就是本\n\
[padding='l:0 t:3 r:0 b:3']社最早的前身。1983年6月经原对外经济贸\n\
[padding='l:0 t:3 r:0 b:3']易部和国家出版局批准，成立对外贸易教育\n\
[padding='l:0 t:3 r:0 b:3']出版社，1994年对外贸易教育出版社更名为\n\
[padding='l:0 t:3 r:0 b:3']对外经济贸易大学出版社。对外经济贸易大\n\
[padding='l:0 t:3 r:0 b:3']学出版社现为教育部主管的全国重点大学出\n\
[padding='l:0 t:3 r:0 b:3']版社，拥有图书、电子、音像出版权。在改\n\
[padding='l:0 t:3 r:0 b:3']革开放中，对外经济贸易大学出版社的事业\n\
[padding='l:0 t:3 r:0 b:3']茁壮成长。"
			},
			english : {
				text :"		1980, the former Ministry of Foreign Economic and \n\
							Trade International Trade Institute and the Beijing \n\
							Institute of Foreign Trade set up jointly by the \n\
							Foreign Trade Publishing House, the former Beijing \n\
							Institute of Foreign Trade set up a second issue \n\
							group. The second release of the foreign trade pu\n\
							-blishers is the Head Office of the earliest pred\n\
							-ecessor. 1983 6 menstrual Foreign Ministry of Ec\n\
							-onomy and Trade and the State Publication Bureau \n\
							approved the establishment of foreign trade Education \n\
							Press, Education Publishing House of the foreign \n\
							trade in 1994 was renamed the Foreign Economic and \n\
							Trade University Press. Foreign Trade and Economic \n\
							University Press is now in charge of the Ministry of \n\
							Education, National Key University Press, books, ele\n\
							-ctronics, audio and video out of copyright. In the \n\
							reform and opening up the cause of the Foreign Econ\n\
							-omic and Trade University Press thrive."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		38 : {
			name : "school_manager/teaching/xueshu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		39 : {
			name : "school_manager/teaching/yanxiu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学高级研修学院建立于\n\
[padding='l:0 t:3 r:0 b:3']2002年3月，办学方向是发展高层次的非学\n\
[padding='l:0 t:3 r:0 b:3']历教育。著名经济学家吴敬琏为我院题词：\n\
[padding='l:0 t:3 r:0 b:3']希望对外经济贸易大学的这一重要探索取得\n\
[padding='l:0 t:3 r:0 b:3']成功。\n\
  [padding='l:0 t:3 r:0 b:3']我校对办好高级研修学院高度重视，由\n\
[padding='l:0 t:3 r:0 b:3']学校领导担任院长，统一调度全校的教育资\n\
[padding='l:0 t:3 r:0 b:3']源，致力于培养学院按照国家的发展方向，\n\
[padding='l:0 t:3 r:0 b:3']适应时代与社会的进步要求，在改革创新中\n\
[padding='l:0 t:3 r:0 b:3']进行多样化高端办学的能力。"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		40 : {
			name : "school_manager/teaching/peixun",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']“学习是终身的职业”。创建于1994年的对\n\
[padding='l:0 t:3 r:0 b:3']外经济贸易大学继续教育学院紧紧抓住了上\n\
[padding='l:0 t:3 r:0 b:3']个世纪末所出现的一个重要的政策机遇期，\n\
[padding='l:0 t:3 r:0 b:3']在蓬勃兴起的高考扩招的浪潮中异军突起，\n\
[padding='l:0 t:3 r:0 b:3']成为中国特色高等继续教育领域里的一支生\n\
[padding='l:0 t:3 r:0 b:3']力军和排头兵。今天的继续教育学院，已经\n\
[padding='l:0 t:3 r:0 b:3']在继续教育的秩序、质量和规范性建设方面\n\
[padding='l:0 t:3 r:0 b:3']享有盛名，已经成为一个令北京乃至全国一\n\
[padding='l:0 t:3 r:0 b:3']些在职青年不断追求和向往的、能够比较完\n\
[padding='l:0 t:3 r:0 b:3']整地体现出继续教育价值的、社会化的大众\n\
[padding='l:0 t:3 r:0 b:3']教育品牌,是一个“团结、拼搏、开拓、创\n\
[padding='l:0 t:3 r:0 b:3']新”这些光荣的文化元素已经融合于继教人\n\
[padding='l:0 t:3 r:0 b:3']的精神和性格之中的继续教育学院。"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		41 : {
			name : "school_manager/teaching/tuichuang",
			chinese : {
				text : "  [padding='l:0 t:2 r:0 b:2']基地主要任务党委宣传部是在国家汉办\n\
[padding='l:0 t:2 r:0 b:2']的领导下，进行国际商务汉语教学与资源开\n\
[padding='l:0 t:2 r:0 b:2']发工作。据悉，基地将立足中国、面向世界、\n\
[padding='l:0 t:2 r:0 b:2']服务全球，集成政府、教学与科研机构、企\n\
[padding='l:0 t:2 r:0 b:2']业（市场）等各类国际商务汉语推广资源，\n\
[padding='l:0 t:2 r:0 b:2']汇集国际商务与语言教学领域的精英人才和\n\
[padding='l:0 t:2 r:0 b:2']技术、经验，不断满足、开拓、培育日益扩\n\
[padding='l:0 t:2 r:0 b:2']大的世界范围内国际商务汉语的学习需求，\n\
[padding='l:0 t:2 r:0 b:2']通过与国际通用语言标准对接，制定国际商\n\
[padding='l:0 t:2 r:0 b:2']务汉语语言等级标准，开发国际商务汉语考\n\
[padding='l:0 t:2 r:0 b:2']试系统，形成教材、多媒体和网络教学软件\n\
[padding='l:0 t:2 r:0 b:2']等产品的研发和生产的核心，建设并普及国\n\
[padding='l:0 t:2 r:0 b:2']际商务汉语教师培训全球权威机构，夯实国\n\
[padding='l:0 t:2 r:0 b:2']际商务汉语学科基础，最终形成完整的产业\n\
[padding='l:0 t:2 r:0 b:2']链条，打造品牌竞争力，实现国际商务汉语\n\
[padding='l:0 t:2 r:0 b:2']的顺利推广，努力建设成为在国家汉办领导\n\
[padding='l:0 t:2 r:0 b:2']下从事国际商务汉语推广的国家级重点基地。"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		42 : {
			name : "school_manager/dangqun/dangwei",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']1．按照党委的决定，组织安排党委的各种会议、\n\
[padding='l:0 t:3 r:0 b:3']学习和重要活动。\n\
[padding='l:0 t:3 r:0 b:3']2．负责党委常委会、党委会的会议记录和会议\n\
[padding='l:0 t:3 r:0 b:3']纪要的整理，党委各类文件（工作计划、总结、\n\
[padding='l:0 t:3 r:0 b:3']报告、通知）、信函的起草工作。\n\
[padding='l:0 t:3 r:0 b:3']3．协调和检查督促各单位、各部门贯彻执行党\n\
[padding='l:0 t:3 r:0 b:3']委决议的情况及进程。\n\
[padding='l:0 t:3 r:0 b:3']4．根据党委的工作意图和要求，深入实际调查\n\
[padding='l:0 t:3 r:0 b:3']研究，总结经验，分析、研究并提出带有政策\n\
[padding='l:0 t:3 r:0 b:3']性、倾向性的问题，为党委决策提供有价值的咨\n\
[padding='l:0 t:3 r:0 b:3']询意见。"
			},
			english : {
				text :"		1 In accordance with the decision of the party committees, \n\
							organization of various meetings of party committees, \n\
							learning, and important events.\n\
							\n\
							2  . Responsible party standing committee, party committee \n\
							meeting records and minutes of the meeting finishing, party \n\
							all types of documents (work plans, summary reports, notices) \n\
							the drafting of the letter.\n\
							\n\
							3. Coordination and inspection and supervision of various \n\
							units, departments carry out the implementation of the \n\
							party committee resolution process.\n\
							\n\
							4. According to the intent and requirements of the Party \n\
							committees, in-depth investigation and study, sum up exper\n\
							-ience, analysis, study it and submit with policy, tendent\n\
							-ious, to provide valuable consulting advice for the party \n\
							committee decision-making."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		9 : {
			name : "school_manager/dangqun/zuzhi",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']抓好学校基层党组织建设，指导基层党支部工作和\n\
[padding='l:0 t:3 r:0 b:3']党员的组织生活，做好基层党支部委员的培训工作。\n\
[padding='l:0 t:3 r:0 b:3']做好积极分子培养和党员发展、教育、管理工作。\n\
[padding='l:0 t:3 r:0 b:3']制定并落实干部队伍建设规划，协助党委抓好各院、\n\
[padding='l:0 t:3 r:0 b:3']部处、直属单位领导班子建设；负责各院（系）、\n\
[padding='l:0 t:3 r:0 b:3']部处、直属单位领导干部的考察、选拔、任用、管\n\
[padding='l:0 t:3 r:0 b:3']理、考核工作。负责党员组织关系转接，党费收缴、\n\
[padding='l:0 t:3 r:0 b:3']管理和使用，党内统计等工作；加强自身建设，制\n\
[padding='l:0 t:3 r:0 b:3']定和完善组织工作各项规章制度，不断推进组织工\n\
[padding='l:0 t:3 r:0 b:3']作科学化、制度化、规范化。"
			},
			english : {
				text :"		Grasp the school grass-roots party organizations to guide \n\
							the organizational life of the grass-roots party branches \n\
							and party members to do the training of members of the gr\n\
							-assroots party branches. Good activists culture and party \n\
							members, education and management. To develop and implement \n\
							the contingent of cadres planning to help the party comm\n\
							-ittees to do a good job each hospital, the Department of \n\
							Department, the units directly under the building of leading \n\
							bodies; responsible for the institution (department), \n\
							Ministry of Department, the inspection of the units directly \n\
							under the leadership cadres, selection, appointment, \n\
							management, assessment work. Adapter is responsible for party \n\
							members and organizational relationships, dues collection, \n\
							management and use of inner-party statistical work; to \n\
							strengthen self-construction, to develop and improve the \n\
							organization of the rules and regulations, continuously push \n\
							forward the organization of scientific, institutionalized \n\
							and standardized"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		43 : {
			name : "school_manager/dangqun/tongzhan",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']联系方式\n\
[padding='l:0 t:3 r:0 b:3']办公地址：对外经济贸易大学行政楼142室\n\
[padding='l:0 t:3 r:0 b:3']邮政编码：100029\n\
[padding='l:0 t:3 r:0 b:3']联系电话：64495098\n\
[padding='l:0 t:3 r:0 b:3']传真：64495098\n\
[padding='l:0 t:3 r:0 b:3']电子信箱：tzbjy@uibe.edu.cn"
			},
			english : {
				text :"		Contact\n\
							Office Address: Foreign Trade and Economic University \n\
							Administration Building 142, Room\n\
							Postal Code: 100029\n\
							Tel: 64495098\n\
							Fax: 64495098\n\
							E-mail: tzbjy@uibe.edu.cn"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		44 : {
			name : "school_manager/dangqun/xuanchuan",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']（1）宣传部办公室。进行宣传部日常办公事务管理。\n\
[padding='l:0 t:3 r:0 b:3']负责工作通报、人员联系、财务处理、文件收发、资\n\
[padding='l:0 t:3 r:0 b:3']料配送、用品管理、会议安排及其它日常工作事项。\n\
[padding='l:0 t:3 r:0 b:3']（2）理论研究室。进行宣传思想工作的理论研究工\n\
[padding='l:0 t:3 r:0 b:3']作。负责处理校党委中心组具体事务、校党建和思\n\
[padding='l:0 t:3 r:0 b:3']想政治工作研究会秘书处宣传组具体事务，编辑《\n\
[padding='l:0 t:3 r:0 b:3']学习与思考》杂志和其它理论学习与教育材料。\n\
[padding='l:0 t:3 r:0 b:3']（3）校报编辑室。进行校报《对外经济贸易大学》\n\
[padding='l:0 t:3 r:0 b:3']的采、编、印、发等工作。负责定期编发校报。组\n\
[padding='l:0 t:3 r:0 b:3']织校报记者团的业务活动。负责进行对外宣传活动。\n\
[padding='l:0 t:3 r:0 b:3']下设校报学生记者团。"
			},
			english : {
				text :"		(1) Office of the Propaganda Department. Propaganda \n\
							Department of the routine office management. Responsible \n\
							for work communication, contact, financial processing, \n\
							send and receive files, data distribution, supplies \n\
							management, meeting arrangements, and other everyday \n\
							matters.\n\
							(2) Theoretical Research. Propaganda and ideological \n\
							work of theoretical research. Responsible for specific \n\
							matters to deal with the party committee central group, \n\
							the Research Council Secretariat advocacy group specific \n\
							matters, edit, Learning and Thinking 'magazine of the \n\
							school party building and ideological and political work \n\
							and other theoretical study and educational materials.\n\
							(3) newspaper editorial office. The newspaper 'Foreign \n\
							Economic and Trade University, collected, compiled, \n\
							printed, work. Responsible for regularly compiled and \n\
							distributed newspaper. Organize the business activities \n\
							of the newspaper press corps. Responsible for conducting \n\
							outreach activities. Consists of newspaper student press \n\
							corps."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		45 : {
			name : "school_manager/dangqun/xuesheng",
			chinese : {
				text : "[padding='l:0 t:1 r:0 b:2']本科生招生工作。根据教育部的有关文件精神和我\n\
[padding='l:0 t:1 r:0 b:2']校的发展规模及学科发展规划，制定修改年度招生\n\
[padding='l:0 t:1 r:0 b:2']章程,编制年度招生计划并报校长办公会批准；组\n\
[padding='l:0 t:1 r:0 b:2']织开展招生宣传和招生咨询工作；组织开展录取工\n\
[padding='l:0 t:1 r:0 b:2']作；有关招生的调查研究及总结工作。\n\
[padding='l:0 t:1 r:0 b:2']本科生、第二学士学位的学籍管理。本科生、第二\n\
[padding='l:0 t:1 r:0 b:2']学士学位的新生学籍注册、学年注册和档案管理工\n\
[padding='l:0 t:1 r:0 b:2']作。\n\
[padding='l:0 t:1 r:0 b:2']学生的思想教育工作。包括综合测评、评优表彰、\n\
[padding='l:0 t:1 r:0 b:2']评定奖学金、开学典礼的筹备工作。\n\
[padding='l:0 t:1 r:0 b:2']辅导员队伍管理工作。包括工作人员的选拔、进修、\n\
[padding='l:0 t:1 r:0 b:2']培训、职称评定工作等。\n\
[padding='l:0 t:1 r:0 b:2']助学工作。包括国家助学贷款、学校困难补助、勤\n\
[padding='l:0 t:1 r:0 b:2']工助学、各类奖助学金的发放和管理以及指导贫困\n\
[padding='l:0 t:1 r:0 b:2']生社团开展工作。\n\
[padding='l:0 t:1 r:0 b:2']心理健康教育和咨询工作。通过课堂教学、开展个\n\
[padding='l:0 t:1 r:0 b:2']别心理咨询、团体心理辅导、心理健康知识宣传系\n\
[padding='l:0 t:1 r:0 b:2']列活动、维护更新心理网页、发放心理健康报等多\n\
[padding='l:0 t:1 r:0 b:2']种途径，帮助在校学生了解和掌握维护心理健康的\n\
[padding='l:0 t:2 r:0 b:2']基本知识和方法，培养和增进良好的心理素质。"
			},
			english : {
				text :"		Undergraduate Admissions work. According to the spirit \n\
							of the relevant documents of the Ministry of Education \n\
							and the scale of development in my school and subject \n\
							development plans formulated to modify the annual enro\n\
							-llment charter, the preparation of the annual enrollment \n\
							plan shall be reported to the principal's office approved; \n\
							organizations Enrollment and admissions consulting work; \n\
							organizations in the admission process; related investi\n\
							-gation and review the work of the enrollment.\n\
							Undergraduate, second-degree enrollment. Freshmen enrol\n\
							-lment registration for undergraduate, second degree, the \n\
							school year, registration and records management."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		46 : {
			name : "school_manager/dangqun/xiaowei",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		47 : {
			name : "school_manager/dangqun/xiaogong",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']对外经济贸易大学工会第十三届委员会委员（21人）\n\
\n\
[padding='l:0 t:3 r:0 b:3']马兰（女）、王云海、王红伟（女）、白建军、祁\n\
[padding='l:0 t:3 r:0 b:3']雪冻、李慧明（女)、 李占海、孟令东、金玮（女）、\n\
[padding='l:0 t:3 r:0 b:3']陈建香（女）、张石榴、张卫滨、周建林、祝传臣、\n\
[padding='l:0 t:3 r:0 b:3']封玉兰（女）、胡东旭、段桂良、郭岩海、徐凯峰、\n\
[padding='l:0 t:3 r:0 b:3']陶建初（女）、戴明（女）"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		48 : {
			name : "school_manager/xingzheng/guoji",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']学校的工作计划、总结、报告、请示、通知、函件\n\
[padding='l:0 t:3 r:0 b:3']等的起草工作；组织和安排校长办公会及其他全校\n\
[padding='l:0 t:3 r:0 b:3']性行政工作会议及有关活动，并负责记录和整理会\n\
[padding='l:0 t:3 r:0 b:3']议记要；重大事项、重要活动、重大会议的组织协\n\
[padding='l:0 t:3 r:0 b:3']调；组织学校行政公文的运行管理，包括收发、传\n\
[padding='l:0 t:3 r:0 b:3']递、催办、归档和发文核稿工作；学校印信的使用\n\
[padding='l:0 t:3 r:0 b:3']和管理；组织协调学校对外联络及接待工作；管理\n\
[padding='l:0 t:3 r:0 b:3']学校标志、标牌、旗帜制作与维护，学校无形资产\n\
[padding='l:0 t:3 r:0 b:3']的开发、利用与管理；信息工作和信访工作，如接\n\
[padding='l:0 t:3 r:0 b:3']听校长热线、收集校长信箱的信息，检查督促学校\n\
[padding='l:0 t:3 r:0 b:3']决议和校领导指示的落实情况；"
			},
			english : {
				text :"		Work of the school program, summary report, the \n\
							drafting of referrals, notices, letters, etc.;\n\
							Principal office will be for organizations and \n\
							arrangements and other school administrative \n\
							meetings and related activities, and is respons\n\
							-ible for recording and finishing the Meeting;\n\
							Organization and coordination on major issues, \n\
							important events, major conferences;\n\
							Organize the operation and management of the school \n\
							administration documents, including transceivers, \n\
							transmission, reminders, archiving and issued a \n\
							document vetting the draft work;\n\
							The use and management of the school seal"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		49 : {
			name : "school_manager/xingzheng/xueke",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		50 : {
			name : "school_manager/xingzheng/renli",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']人事处主要工作职责：按照干部管理权限，负责全\n\
[padding='l:0 t:3 r:0 b:3']校的机构设置、人员编制、人员调配；师资管理、\n\
[padding='l:0 t:3 r:0 b:3']专业技术职务评聘与管理；教职工进修培训；科及\n\
[padding='l:0 t:3 r:0 b:3']科以下干部以及工人的人事管理；劳动工资管理、\n\
[padding='l:0 t:3 r:0 b:3']社会保障工作；人事档案管理；人才交流中心的工\n\
[padding='l:0 t:3 r:0 b:3']作。"
			},
			english : {
				text :"		Personnel Main duties: In accordance with the cadre manage\n\
							-ment authority, the agency responsible for the whole school \n\
							setting, staffing, personnel deployment; teacher management, \n\
							professional and technical post evaluation and management; \n\
							staff refresher training; cadres and workers in the following \n\
							Branch and Division of Personnel Management; management of \n\
							labor and wages, social security work; the management of per\n\
							-sonnel files; talent exchange center."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		51 : {
			name : "school_manager/xingzheng/caiwu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		52 : {
			name : "school_manager/xingzheng/jijian",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']纪委办公室是学校纪委的日常办事机构，在校纪委\n\
[padding='l:0 t:3 r:0 b:3']的领导下开展工作。其主要职责是：\n\
 [padding='l:0 t:3 r:0 b:3']一、组织和准备校纪委会议和校纪委召集的会议，\n\
[padding='l:0 t:3 r:0 b:3']负责会议记录，整理印发会议文件。\n\
 [padding='l:0 t:3 r:0 b:3']二、起草校纪委的工作文件。\n\
 [padding='l:0 t:3 r:0 b:3']三、负责协调各部门，开展党风廉政建设和反腐败\n\
[padding='l:0 t:3 r:0 b:3']的工作。\n\
 [padding='l:0 t:3 r:0 b:3']四、会同有关部门对党员进行党风、党纪和廉洁自\n\
[padding='l:0 t:3 r:0 b:3']律教育。\n\
 [padding='l:0 t:3 r:0 b:3']五、承办违纪案件的核查和审理工作，督促由各党\n\
[padding='l:0 t:3 r:0 b:3']总支办理的案件。\n\
 [padding='l:0 t:3 r:0 b:3']六、处理有关纪检方面的来信来访，负责承办、转\n\
[padding='l:0 t:3 r:0 b:3']办和催办工作。\n\
 [padding='l:0 t:3 r:0 b:3']七、负责纪检信息工作、校纪委的印章管理工作、\n\
[padding='l:0 t:3 r:0 b:3']纪委文件档案管理工作。\n\
 [padding='l:0 t:3 r:0 b:3']八、承办校纪委交办的其他工作。"
			},
			english : {
				text :"		Commission for Discipline Inspection Office of the daily \n\
							office of the school discipline inspection commission, \n\
							and work under the leadership of the School Discipline \n\
							Inspection Commission."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		53 : {
			name : "school_manager/xingzheng/shenji",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']为提高教育资金使用效益服务，为教育改革和发展\n\
[padding='l:0 t:3 r:0 b:3']服务”的总体原则，依照相关法律法规、规章制度\n\
[padding='l:0 t:3 r:0 b:3']和高校内部审计指南，协调内部外部两个审计资源，\n\
[padding='l:0 t:3 r:0 b:3']对学校与资源利用有关的业务活动及其内部控制的\n\
[padding='l:0 t:3 r:0 b:3']适当性、合法性和有效性进行审查、确认、咨询，\n\
[padding='l:0 t:3 r:0 b:3']以促进学校内部管理，提高资金使用效益，维护学\n\
[padding='l:0 t:3 r:0 b:3']校经济工作秩序，保障学校事业发展目标的实现。\n\
[padding='l:0 t:3 r:0 b:3']内部审计工作内容主要包括：学校财务预算执行与\n\
[padding='l:0 t:3 r:0 b:3']决算审计、学校及所属部门财务收支审计、领导干\n\
[padding='l:0 t:3 r:0 b:3']部经济责任审计、财经活动内部控制和效益审计、\n\
[padding='l:0 t:3 r:0 b:3']建设工程审计（包括基建、修缮等）、专项资金审\n\
[padding='l:0 t:3 r:0 b:3']计以及学校或主管部门要求进行的其他审计。"
			},
			english : {
				text :"		To enhance the education capital efficiency, the general \n\
							principles of education reform and development services , \n\
							in accordance with relevant laws and regulations, rules \n\
							and regulations and university internal audit guide, coo\n\
							-rdinate both internal and external audit resources, sch\n\
							-ools and resources related to business activities and its \n\
							adequacy of internal controls, the legitimacy and effectiv\n\
							-eness of the review, confirmed that consultation, to prom\n\
							-ote the schools' internal management, improve capital eff\n\
							-iciency, maintenance of schools of economic work order to \n\
							protect the school career goals."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		54 : {
			name : "school_manager/xingzheng/jiaowu",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']教务处是在校长、主管教学副校长领导下，对全校\n\
[padding='l:0 t:3 r:0 b:3']本科教学工作进行组织、管理和研讨的职能部门。\n\
[padding='l:0 t:3 r:0 b:3']教务处的主要任务是根据国家的教育方针和政策，\n\
[padding='l:0 t:3 r:0 b:3']根据大学教学过程的规律和特点，对教与学双方进\n\
[padding='l:0 t:3 r:0 b:3']行有效的组织、指挥、协调和监督，确保教学过程\n\
[padding='l:0 t:3 r:0 b:3']顺利进行，确保教学质量不断提高，同时，广泛收\n\
[padding='l:0 t:3 r:0 b:3']集国内外教学信息，研究教育教学规律，为学校领\n\
[padding='l:0 t:3 r:0 b:3']导进行有关教学方面的决策提供咨询。"
			},
			english : {
				text :"		Office of Academic Affairs, under the leadership of the prin\n\
							-cipals in charge of teaching Vice-Chancellor, organization, \n\
							management and discussion of all undergraduate teaching work \n\
							departments. The main task of the Office of Academic Affairs \n\
							according to the national education policy and policy, accor\n\
							-ding to the rules and characteristics of the university tea\n\
							-ching process, both teaching and learning effective organiz\n\
							-ation, command, coordination and supervision, to ensure that \n\
							the teaching process is carried out smoothly, ensuring the \n\
							continuous improvement of the quality of teaching Meanwhile, \n\
							the extensive collection of domestic and international teaching \n\
							information, research and education teaching law to provide \n\
							advice for school leaders about the teaching of decision-ma\n\
							-king."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		55 : {
			name : "school_manager/xingzheng/xuesheng",
			chinese : {
				text : "[padding='l:0 t:1 r:0 b:2']本科生招生工作。根据教育部的有关文件精神和我\n\
[padding='l:0 t:1 r:0 b:2']校的发展规模及学科发展规划，制定修改年度招生\n\
[padding='l:0 t:1 r:0 b:2']章程,编制年度招生计划并报校长办公会批准；组\n\
[padding='l:0 t:1 r:0 b:2']织开展招生宣传和招生咨询工作；组织开展录取工\n\
[padding='l:0 t:1 r:0 b:2']作；有关招生的调查研究及总结工作。\n\
[padding='l:0 t:1 r:0 b:2']本科生、第二学士学位的学籍管理。本科生、第二\n\
[padding='l:0 t:1 r:0 b:2']学士学位的新生学籍注册、学年注册和档案管理工\n\
[padding='l:0 t:1 r:0 b:2']作。\n\
[padding='l:0 t:1 r:0 b:2']学生的思想教育工作。包括综合测评、评优表彰、\n\
[padding='l:0 t:1 r:0 b:2']评定奖学金、开学典礼的筹备工作。\n\
[padding='l:0 t:1 r:0 b:2']辅导员队伍管理工作。包括工作人员的选拔、进修、\n\
[padding='l:0 t:1 r:0 b:2']培训、职称评定工作等。\n\
[padding='l:0 t:1 r:0 b:2']助学工作。包括国家助学贷款、学校困难补助、勤\n\
[padding='l:0 t:1 r:0 b:2']工助学、各类奖助学金的发放和管理以及指导贫困\n\
[padding='l:0 t:1 r:0 b:2']生社团开展工作。\n\
[padding='l:0 t:1 r:0 b:2']心理健康教育和咨询工作。通过课堂教学、开展个\n\
[padding='l:0 t:1 r:0 b:2']别心理咨询、团体心理辅导、心理健康知识宣传系\n\
[padding='l:0 t:1 r:0 b:2']列活动、维护更新心理网页、发放心理健康报等多\n\
[padding='l:0 t:1 r:0 b:2']种途径，帮助在校学生了解和掌握维护心理健康的\n\
[padding='l:0 t:1 r:0 b:2']基本知识和方法，培养和增进良好的心理素质。"
			},
			english : {
				text :"		Undergraduate Admissions work. According to the spirit of \n\
							the relevant documents of the Ministry of Education and the \n\
							scale of development in my school and subject development \n\
							plans formulated to modify the annual enrollment charter, \n\
							the preparation of the annual enrollment plan shall be repo\n\
							-rted to the principal's office approved; organizations Enr\n\
							-ollment and admissions consulting work; organizations in \n\
							the admission process; related investigation and review the \n\
							work of the enrollment."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		56 : {
			name : "school_manager/xingzheng/jiuye",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']就业指导中心的职责主要包括：制定、组织和实施\n\
[padding='l:0 t:3 r:0 b:3']我校毕业生就业工作发展规划和计划；组织、开展\n\
[padding='l:0 t:3 r:0 b:3']与毕业生就业相关的调查研究工作；组织、开展毕\n\
[padding='l:0 t:3 r:0 b:3']业生就业工作的对外宣传，规范和拓宽就业市场，\n\
[padding='l:0 t:3 r:0 b:3']进一步优化就业环境；组织、实施毕业生就业的招\n\
[padding='l:0 t:3 r:0 b:3']聘活动，为毕业生提供优质的就业指导和服务；组\n\
[padding='l:0 t:3 r:0 b:3']织、开展与毕业生就业相关的培训工作。"
			},
			english : {
				text :"		The duties of the employment guidance center include: deve\n\
							-lopment, organization and implementation of our graduates \n\
							employment development programs and plans; organization to \n\
							carry out research work related to the employment of gradu\n\
							-ates; organizations, employment of graduates work in outr\n\
							-each, norms and broaden the job market, and further optim\n\
							-ize the environment for employment; organization, the imp\n\
							-lementation of the recruitment activities of the employment \n\
							of graduates, for graduates to provide quality employment \n\
							guidance and services; organization, and Employment-related \n\
							training."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		57 : {
			name : "school_manager/xingzheng/keyan",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']科研处是主管本校科学研究工作的职能机构，是校\n\
[padding='l:0 t:3 r:0 b:3']学术委员会的常设机构。其主要职责是：编制全校\n\
[padding='l:0 t:3 r:0 b:3']科学研究的中长期规划；制定和修订学校科研管理\n\
[padding='l:0 t:3 r:0 b:3']制度；组织开展全校性和校际间、国际间的学术和\n\
[padding='l:0 t:3 r:0 b:3']科研活动，管理、指导和检查全校科学研究工作；\n\
[padding='l:0 t:3 r:0 b:3']规划和管理各类科研课题，合理配置学校科研资源，\n\
[padding='l:0 t:3 r:0 b:3']组织进行大的科研攻关项目；组织科研成果申报、\n\
[padding='l:0 t:3 r:0 b:3']统计以及优秀科研成果评奖；组织学术专著出版资\n\
[padding='l:0 t:3 r:0 b:3']助的评审；管理校属各类研究机构，负责本科生、\n\
[padding='l:0 t:3 r:0 b:3']研究生科研活动的管理；教育部及北京市重点研究\n\
[padding='l:0 t:3 r:0 b:3']基地的申报与管理；审核教师和科研人员的科研工\n\
[padding='l:0 t:3 r:0 b:3']作量。此外，作为“安子介国际贸易研究奖”秘书\n\
[padding='l:0 t:3 r:0 b:3']处，科研处还负责组织和落实该奖项的申报、评选、\n\
[padding='l:0 t:3 r:0 b:3']奖励等工作。"
			},
			english : {
				text :"		The Research Department is in charge of the functions of the \n\
							school of scientific research institutions, and the permanent \n\
							establishment of the Academic Committee. Its main functions \n\
							are: preparation of the school of scientific research and long\n\
							-term planning; the formulation and revision of school research \n\
							and management system; organized whole-school and interschool, \n\
							international academic and research activities, manage, guide \n\
							and inspect the school of scientific research work; planning and \n\
							management of all research projects, the rational allocation of \n\
							school research resources, organizations, major scientific rese\n\
							-arch projects; organization to declare scientific research, st\n\
							-atistics, as well as outstanding achievements in scientific re\n\
							-search awards; "
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		58 : {
			name : "school_manager/xingzheng/jiaoliu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']对外经济贸易大学重视校际交流和合作，目前\n\
[padding='l:0 t:3 r:0 b:3']已与遍及世界49个国家和地区的200余所大学和研\n\
[padding='l:0 t:3 r:0 b:3']究机构建立了校际交流关系，其中：亚洲地区57所，\n\
[padding='l:0 t:3 r:0 b:3']欧洲地区69所，美洲地区46所，非洲地区4所，大\n\
[padding='l:0 t:3 r:0 b:3']洋洲地区8所。"
			},
			english : {
				text :"		Foreign Economic and Trade University attaches importance to \n\
							the inter-school exchanges and cooperation and has established \n\
							intercollegiate exchange relations with more than 200 universi\n\
							-ties and research institutions in 49 countries and regions \n\
							around the world, where: 69 of 57 in Asia, Europe, the Americas \n\
							region 46, Africa region 4, and 8 of the Oceania region."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		59 : {
			name : "school_manager/xingzheng/baowei",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']组织全处（部）干部职工政治理论学习，抓好\n\
[padding='l:0 t:3 r:0 b:3']领导班子和职工队伍建设，努力提高全员政治业务\n\
[padding='l:0 t:3 r:0 b:3']素质；组织起草规章制度、计划、总结、请示、报\n\
[padding='l:0 t:3 r:0 b:3']告、简报、通报、告示等文书材料，审签处（部）\n\
[padding='l:0 t:3 r:0 b:3']发文件；安排全处（部）的工作，主持召开处务会；\n\
[padding='l:0 t:3 r:0 b:3']定期对全校的各类安全情况进行研判，向党委和上\n\
[padding='l:0 t:3 r:0 b:3']级机关报告发现的问题和解决办法；督促、检查和\n\
[padding='l:0 t:3 r:0 b:3']指导副处（部）长及各办公室负责人完成份内工作；\n\
[padding='l:0 t:3 r:0 b:3']统一调配力量，保证校内重大安全保卫任务的完成\n\
[padding='l:0 t:3 r:0 b:3']和各种案件、事故的协查和处理；负责对参加重大\n\
[padding='l:0 t:3 r:0 b:3']政治活动人员的政审；组织本部门做好首长、外宾\n\
[padding='l:0 t:3 r:0 b:3']来校的安全保卫工作和大型集会、大型文体活动的\n\
[padding='l:0 t:3 r:0 b:3']安全保卫工作；负责制订保卫处（部）的经费计划\n\
[padding='l:0 t:3 r:0 b:3']和审批各项经费支出。"
			},
			english : {
				text :"		Organize all Department (Department) cadres and workers of \n\
							political theory, a good job of leading bodies and employee \n\
							team building, efforts to improve the full political and pr\n\
							-ofessional qualities; organized the drafting of rules and \n\
							regulations, plans, summary of referrals, reports, present\n\
							-ations, communications, notices and other instruments, ma\n\
							-terials , Shen Qian Department (the Department) issued a \n\
							document;"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		60 : {
			name : "school_manager/xingzheng/tuixiu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']据校志记载，我校职工退休始于1958年2月，\n\
[padding='l:0 t:3 r:0 b:3']干部的离休始于1981年。为了做好离休干部的管理\n\
[padding='l:0 t:3 r:0 b:3']工作，学校于1981年9月成立了老干部办公室，由\n\
[padding='l:0 t:3 r:0 b:3']人事处代管。为适应离退休人员人数不断增多，工\n\
[padding='l:0 t:3 r:0 b:3']作量不断增大的新情况，学校决定于1990年底独立\n\
[padding='l:0 t:3 r:0 b:3']设置了老干部处，在校领导的关心、分管校领导具\n\
[padding='l:0 t:3 r:0 b:3']体指导及学校各部门协作支持下，专司统一管理全\n\
[padding='l:0 t:3 r:0 b:3']校离退休人员的学习、生活及服务工作之职，使离\n\
[padding='l:0 t:3 r:0 b:3']退休人员能够老有所养、老有所为、老有所乐、老\n\
[padding='l:0 t:3 r:0 b:3']有所教、老有所医。1999年机构改革时更名为离退\n\
[padding='l:0 t:3 r:0 b:3']休人员工作部。\n\
  [padding='l:0 t:3 r:0 b:3']2001年3月为适应两校合并新形势，学校重组了\n\
[padding='l:0 t:3 r:0 b:3']管理人员，并将名称更改为离退休人员工作处。现\n\
[padding='l:0 t:3 r:0 b:3']在我处由处长、总支书记及工作人员组成。"
			},
			english : {
				text :"		According to the school is recorded, the school retirement \n\
							began in February 1958, retired cadres began in 1981. Order \n\
							to carry out the management of retired cadres, the school \n\
							was established in September 1981 the veteran office, hosted \n\
							by the Personnel Office. In order to meet the increasing num\n\
							-ber of retired personnel, increasing workload, the school \n\
							decided that the veteran at the independent set at the end of \n\
							1990, concern in school leadership, school leaders in charge \n\
							of specific guidance and school departments under the support \n\
							of the collaboration, specially the post of the unified manag\n\
							-ement of all retired personnel, learning, living and service \n\
							work, so that retired personnel to a sense of security, sense \n\
							of worthiness, old music, old education, the old medical care. \n\
							Institutional reform in 1999 changed its name to the retired \n\
							personnel department."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		61 : {
			name : "school_manager/xingzheng/zichan",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']资产管理处成立于1999年7月，现职处级领导三名，\n\
[padding='l:0 t:3 r:0 b:3']下设6个机构。 负责学校各类房产的管理；负责全\n\
[padding='l:0 t:3 r:0 b:3']校物资、设备的管理； 负责学校校办企业的管理。\n\
[padding='l:0 t:3 r:0 b:3']办公地点：清远楼二层"
			},
			english : {
				text :"		The Asset Management Department was established in July \n\
							1999, the division-level leadership of the incumbent three, \n\
							consists of six institutions.\n\
							Responsible for the management of the school all kinds of \n\
							real estate; responsible for the management of school sup\n\
							-plies, equipment; responsible for the management of the \n\
							school run enterprises.\n\
							Office Location: Qingyuan, 2nd Floor"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		62 : {
			name : "school_manager/xingzheng/jijianchu",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		63 : {
			name : "school_manager/xingzheng/houqing",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']后勤工作是学校教学、科研和师生员工学习生活的\n\
[padding='l:0 t:3 r:0 b:3']重要保障。“服务教学、服务科研、服务师生员工\n\
[padding='l:0 t:3 r:0 b:3']和管理育人、服务育人、环境育人”，是后勤工作\n\
[padding='l:0 t:3 r:0 b:3']的指导方针。建校以来，后勤处一直承担着伙食、\n\
[padding='l:0 t:3 r:0 b:3']房屋、校园行政、绿化卫生、交通、供暖、通讯、\n\
[padding='l:0 t:3 r:0 b:3']医疗保健、幼儿保教、商业、家属委员会等项后勤\n\
[padding='l:0 t:3 r:0 b:3']管理和服务工作。"
			},
			english : {
				text :"		The logistics of the school teaching, research and staff \n\
							and students to learn an important guarantee of life. \n\
							'Service teaching, service and scientific research, service \n\
							staff and students and educating people, Fuwuyuren, Huan\n\
							-jingyuren guidelines of the logistical work. Since its \n\
							establishment, the Logistics Department has been responsible \n\
							for food, housing, campus administration, green, health, \n\
							transportation, heating, communications, health care, early \n\
							childhood education, business, family members of the Commi\n\
							-ttee and other logistics management and services."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		64 : {
			name : "public_service/net",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']网络与教育技术中心是学校公共服务体\n\
[padding='l:0 t:3 r:0 b:3']系的重要组成部分，负责校园网的规划、建\n\
[padding='l:0 t:3 r:0 b:3']设、运行与管理；负责全校的教育技术工作；\n\
[padding='l:0 t:3 r:0 b:3']面向全校师生开展网络及现代教育技术服务。\n\
[padding='l:0 t:3 r:0 b:3']目前，网络与教育技术中心现有在职人员43\n\
[padding='l:0 t:3 r:0 b:3']人。\n\
[padding='l:0 t:3 r:0 b:3']  为了便于管理，中心内设综合办公室、\n\
[padding='l:0 t:3 r:0 b:3']网络运行室、信息应用室、信息开发室、网\n\
[padding='l:0 t:3 r:0 b:3']络维护室、教学管理部、音像制作部、资料\n\
[padding='l:0 t:3 r:0 b:3']部和技术部。\n\
[padding='l:0 t:3 r:0 b:3']  网络与教育技术中心的定位：积极努力\n\
[padding='l:0 t:3 r:0 b:3']做好网络与教育技术资源的建设、开发、运\n\
[padding='l:0 t:3 r:0 b:3']行管理工作，最大限度地发挥网络与教育技\n\
[padding='l:0 t:3 r:0 b:3']术资源作用，为学校教学、科研、管理和改\n\
[padding='l:0 t:3 r:0 b:3']革服务。"
			},
			english : {
				text :"		Responsible for campus network management and maintenance, \n\
							teaching and research services, responsible for the language \n\
							laboratory, audio-visual center data compilation; provide \n\
							all kinds of audio and video data, audio and video production \n\
							of courseware for teaching; responsible for the school TV \n\
							station and satellite ground, responsible for office automation \n\
							support, the school division Health-on environment, computer \n\
							applications training, and external cooperation projects"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		65 : {
			name : "public_service/libary",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']在惠园的西南隅，坐落着神韵不凡的新图书馆\n\
[padding='l:0 t:3 r:0 b:3']——刘銮熊楼。新图书馆由通透的玻璃幕墙和\n\
[padding='l:0 t:3 r:0 b:3']厚重的石材呈现出中文“书”字的象形，在明\n\
[padding='l:0 t:3 r:0 b:3']媚的阳光中,投射出浓浓的文化气韵。\n\
[padding='l:0 t:3 r:0 b:3']  图书馆下载使用超星专用浏览器，浏览2000年\n\
[padding='l:0 t:3 r:0 b:3']以前的经贸类图书建立图书馆FTP站点为校内师\n\
[padding='l:0 t:3 r:0 b:3']生的学习、科研 、交流、娱乐提供服务。重点\n\
[padding='l:0 t:3 r:0 b:3']内容包括英语学习、点重内容包括英语学习、各\n\
[padding='l:0 t:3 r:0 b:3']类工具软件、开发软件、及mp3 等"
			},
			english : {
				text :"		Download Superstar dedicated browser, browse to the previous \n\
							economic and trade books in 2000\n\
							The establishment of libraries FTP site to provide services \n\
							for teachers and students learning, research, communication, \n\
							entertainment. Highlights include learning English, all kinds \n\
							of tools, software development, and mp3"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		66 : {
			name : "public_service/chuban",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']1980年，原对外经济贸易部国际贸易研\n\
[padding='l:0 t:3 r:0 b:3']究所与原北京对外贸易学院联合成立对外贸\n\
[padding='l:0 t:3 r:0 b:3']易出版社，在原北京对外贸易学院设立第二\n\
[padding='l:0 t:3 r:0 b:3']发行组。对外贸易出版社第二发行组就是本\n\
[padding='l:0 t:3 r:0 b:3']社最早的前身。1983年6月经原对外经济贸\n\
[padding='l:0 t:3 r:0 b:3']易部和国家出版局批准，成立对外贸易教育\n\
[padding='l:0 t:3 r:0 b:3']出版社，1994年对外贸易教育出版社更名为\n\
[padding='l:0 t:3 r:0 b:3']对外经济贸易大学出版社。对外经济贸易大\n\
[padding='l:0 t:3 r:0 b:3']学出版社现为教育部主管的全国重点大学出\n\
[padding='l:0 t:3 r:0 b:3']版社，拥有图书、电子、音像出版权。在改\n\
[padding='l:0 t:3 r:0 b:3']革开放中，对外经济贸易大学出版社的事业\n\
[padding='l:0 t:3 r:0 b:3']茁壮成长。"
			},
			english : {
				text :"		Was established in June 1983, the central publishing is now in \n\
							charge of the Ministry of Education to establish a dedicated, \n\
							pragmatic, pioneering the development of 'community wind, a \n\
							clear direction of development for the 21st century, has become \n\
							a beginning to take shape, book of nearly 100 species of Press."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		67 : {
			name : "public_service/bbs",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']两种登录方式：\n\
[padding='l:0 t:3 r:0 b:3']1.通过web方式。即通过现在此种方式使用本\n\
[padding='l:0 t:3 r:0 b:3']bbs。在发表文章前您需要有一个帐号。尚未\n\
[padding='l:0 t:3 r:0 b:3']有帐号者，请到新用户注册。\n\
[padding='l:0 t:3 r:0 b:3']2.通过telnet方式进行访问。（推荐）建议\n\
[padding='l:0 t:3 r:0 b:3']使用软件cterm。注意您在telnet上的帐号和\n\
[padding='l:0 t:3 r:0 b:3']您在web上所使用的帐号是通用的。"
			},
			english : {
				text :"		Two login:\n\
							(1) through the web mode. Now this way the bbs. Posts before \n\
							you need to have an account. Yet have an account, please go \n\
							to the new user registration.\n\
							Be accessed via telnet. (Recommended) recommend the use of \n\
							the software cterm. Note that you telnet to the account and \n\
							your account on the web is common."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		68 : {
			name : "public_service/xiaoyou",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']为历届毕业生与在校生提供了一个广泛的交\n\
[padding='l:0 t:3 r:0 b:3']流空间。这里你可以了解50年代到90年代的\n\
[padding='l:0 t:3 r:0 b:3']我校知名校友，可以联谊班级活动，可以寻\n\
[padding='l:0 t:3 r:0 b:3']人，可以留言，也可以参加各地的校友会…，\n\
[padding='l:0 t:3 r:0 b:3']她将会是令你满意的信息交流场所。"
			},
			english : {
				text :"		Of graduates and students in a wide range of exchanges. \n\
							Here you can learn about the famous alumni of the school \n\
							in the 1950s to the 1990s, friendship class activities, \n\
							tracing, you can leave a message, can also participate in \n\
							the Alumni Association of the around ... she will make you \n\
							satisfied with the exchange of information spaces."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		69 : {
			name : "public_service/xiaoshi",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']档案馆隶属于校长办公室，主要负责全\n\
[padding='l:0 t:3 r:0 b:3']校档案的收集 、整理、 保管、 统计及学历\n\
[padding='l:0 t:3 r:0 b:3']认证工作，室藏档案主要包括历年学校教学、\n\
[padding='l:0 t:3 r:0 b:3']文书、基建、科研档案及实物档案，是我校\n\
[padding='l:0 t:3 r:0 b:3']信息资源的集中地，为适应信息时代的发展，\n\
[padding='l:0 t:3 r:0 b:3']我校档案管理建设将逐步实现信息化、网络\n\
[padding='l:0 t:3 r:0 b:3']化、数字化，提高档案管理及利用水平,为广\n\
[padding='l:0 t:3 r:0 b:3']大师生提供资料共享服务。"
			},
			english : {
				text :"		Archives are primarily responsible for receiving \n\
							(collecting), sorting, identification, statistics, custody \n\
							of the various types of files and information of the \n\
							school is the only institution to file proof issued \n\
							by the school.\n\
							The History Museum is mainly responsible for collection \n\
							of historical data, search of precious objects, such as \n\
							organization and display of historical materials."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		70 : {
			name : "public_service/qinggong",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']隶属于校学生工作部，专门负责为我校学生\n\
[padding='l:0 t:3 r:0 b:3']联系勤工助学岗位的全职全能的机构。我们\n\
[padding='l:0 t:3 r:0 b:3']充分利用我校在外贸、外语、法律及工商企\n\
[padding='l:0 t:3 r:0 b:3']业管理上的优势，竭诚为广大企事业单位及\n\
[padding='l:0 t:3 r:0 b:3']个人提供多种服务。"
			},
			english : {
				text :"		Part of the students, specializing in full-time all\n\
							-powerful institution of the student contact work-study \n\
							jobs for my school. We make full use of the school \n\
							advantages in foreign trade, foreign languages, law \n\
							and business management, and offers a variety of ser\n\
							-vice and dedication to the majority of enterprises \n\
							and individuals."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		71 : {
			name : "public_service/houqing",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']后勤工作是学校教学、科研和师生员工学习生活的\n\
[padding='l:0 t:3 r:0 b:3']重要保障。“服务教学、服务科研、服务师生员工\n\
[padding='l:0 t:3 r:0 b:3']和管理育人、服务育人、环境育人”，是后勤工作\n\
[padding='l:0 t:3 r:0 b:3']的指导方针。建校以来，后勤处一直承担着伙食、\n\
[padding='l:0 t:3 r:0 b:3']房屋、校园行政、绿化卫生、交通、供暖、通讯、\n\
[padding='l:0 t:3 r:0 b:3']医疗保健、幼儿保教、商业、家属委员会等项后勤\n\
[padding='l:0 t:3 r:0 b:3']管理和服务工作。"
			},
			english : {
				text :"		From student housing management center, classroom building \n\
							management center, administrative center, home Authority's \n\
							four centers combined to form the property center is respo\n\
							-nsible for campus student apartments, academic buildings \n\
							and campus environment, green cleaning and other daily \n\
							property management to complete the Logistics Group layout \n\
							kinds of protection the various tasks assigned by the work \n\
							and school."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		72 : {
			name : "public_service/gongyu",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']华德公寓隶属于著名学府“对外经济贸易大\n\
[padding='l:0 t:3 r:0 b:3']学”，紧临亚奥商圈，地理位置优越、交通\n\
[padding='l:0 t:3 r:0 b:3']便利。"
			},
			english : {
				text :"		Ward apartment is part of the famous universities in the \n\
							Foreign Economic and Trade University, close to the Olympic \n\
							district, geographical location and convenient transportation."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		73 : {
			name : "public_service/sheke",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']招投标办公室。"
			},
			english : {
				text :"Bidding office."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		74 : {
			name : "public_service/caigou",
			chinese : {
				text : "[padding='l:0 t:3 r:0 b:3']协议供货是政府集中采购的一种采购方式。\n\
[padding='l:0 t:3 r:0 b:3']各单位采购协议供货范围内的货物时，可直\n\
[padding='l:0 t:3 r:0 b:3']接登陆“中国政府采购网（http://zyzfcg.\n\
[padding='l:0 t:3 r:0 b:3']ggj.gov.cn）”政府采购协议供货专栏,上\n\
[padding='l:0 t:3 r:0 b:3']网查询所需货物，并直接与有关供应商联系\n\
[padding='l:0 t:3 r:0 b:3']供货。"
			},
			english : {
				text :"		The supply agreement is a procurement method for centraliz\n\
							-ed government procurement. Each unit purchase agreement \n\
							within the scope of supply of goods, you can log in direct\n\
							-ly to the Chinese Government Procurement Network \n\
							http://zyzfcg.ggj.gov.cn) Agreement on Government Procurem\n\
							-ent supplier column, online searching for the required \n\
							goods and directly contact the supplier concerned supplier."
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		75 : {
			name : "life_facility/repast/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"第一食堂"
		},
		76 : {
			name : "life_facility/repast/two",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :"Second canteen"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"第二食堂"
		},
		77 : {
			name : "life_facility/repast/three",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"惠园餐厅"
		},
		78 : {
			name : "life_facility/yule/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"篮球场"
		},
		79 : {
			name : "life_facility/yule/two",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"足球场"
		},
		80 : {
			name : "life_facility/yule/three",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"排球场"
		},
		81 : {
			name : "life_facility/yule/four",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"网球场"
		},
		82 : {
			name : "life_facility/zhusu/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"华德公寓"
		},
		83 : {
			name : "life_facility/zhusu/two",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇贤公寓"
		},
		84 : {
			name : "life_facility/zhusu/three",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇忠公寓"
		},
		85 : {
			name : "life_facility/zhusu/four",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇宾公寓"
		},
		86 : {
			name : "life_facility/zhusu/five",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇才公寓"
		},
		87 : {
			name : "life_facility/zhusu/six",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇文公寓"
		},
		88 : {
			name : "life_facility/zhusu/seven",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇美公寓"
		},
		89 : {
			name : "life_facility/zhusu/eight",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :"汇康公寓"
			},
			image : "set:xiaoyuanjieshao image:2",
			address :""
		},
		90 : {
			name : "life_facility/zhusu/nine",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇智公寓"
		},
		91 : {
			name : "life_facility/zhusu/ten",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"汇德公寓"
		},
		92 : {
			name : "life_facility/yinhang/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"招商银行"
		},
		93 : {
			name : "life_facility/yinhang/two",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"建设银行"
		},
		94 : {
			name : "life_facility/shangdian/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"华德公寓"
		},
		95 : {
			name : "life_facility/yiliao/one",
			chinese : {
				text : "  [padding='l:0 t:3 r:0 b:3']"
			},
			english : {
				text :""
			},
			image : "set:xiaoyuanjieshao image:2",
			address :"知行楼"
		}
	}
}catch(e){
	alert(e);
}