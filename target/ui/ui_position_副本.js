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
		name : "地址名称"
		position_x : "x轴坐标"
		position_y : "y轴坐标"
		position_z : "z轴坐标"
		rotation_y:"偏转角度"
	}
	**********************************************************************/
	

	// POSITION = {
		// "0" : {   //南门
			// name : "南门" ,
			// position_x : 125.8470 ,
			// position_y : -0.0 ,
			// position_z : -339.2792 ,
			// rotation_y : -3.1316
		// },
		// "1" : {   //宁远楼
			// name : "宁远楼" ,
			// position_x : 154.7917 ,
			// position_y : -0.0 ,
			// position_z : -273.3030 ,
			// rotation_y : 1.5394 
		// },
		// "2" : {   //行政楼
			// name : "行政楼" ,
			// position_x : 177.6899 ,
			// position_y : -0.0 ,
			// position_z : -138.2063 ,
			// rotation_y : 1.6003
		// },
		// "3" : {   //东门
			// name : "东门" ,
			// position_x : 266.4118 ,
			// position_y : -0.0 ,
			// position_z : 12.3715 ,
			// rotation_y : -1.5348
		// },
		// "4" : {   //清远楼  
			// name : "清远楼" ,
			// position_x : 167.9883 ,
			// position_y : 0.2 ,
			// position_z : 103.733 ,
			// rotation_y : 1.513 
		// },
		// "5" : {   //体育中心 
			// name : "体育中心" ,
			// position_x : 171.1173 ,
			// position_y : 0 ,
			// position_z : 144.7125 ,
			// rotation_y : 1.4789 
		// },
		// "6" : {   //虹远楼 
			// name : "虹远楼" ,
			// position_x : 134.0468 ,
			// position_y : 0 ,
			// position_z : 237.4023 ,
			// rotation_y : 1.512 
		// },
		// "7" : {   //诚信楼
			// name : "诚信楼" ,
			// position_x : 125.4996 ,
			// position_y : -0.0 ,
			// position_z : -149.3684 ,
			// rotation_y : -3.1348
		// },
		// "8" : {   //视听中心
			// name : "视听中心" ,
			// position_x : 60.3128 ,
			// position_y : -0.0 ,
			// position_z : -146.4429 ,
			// rotation_y : -0.0404
		// },
		// "9" : {   //体育场
			// name : "体育场" ,
			// position_x : 64.9857 ,
			// position_y : 0.1999 ,
			// position_z : 107.3719 ,
			// rotation_y : -2.9948 
		// },
		// "10" : {   //汇新楼  
			// name : "汇新楼" ,
			// position_x : -13.55987 ,
			// position_y : 0 ,
			// position_z : 314.3121 ,
			// rotation_y : 0.953 
		// },
		// "11" : {   //第一食堂
			// name : "第一食堂" ,
			// position_x : 3.8009 ,
			// position_y : -0.0 ,
			// position_z : -74.8662 ,
			// rotation_y : -2.8976 
		// },
		// "12" : {   //电教楼
			// name : "电教楼" ,
			// position_x : 12.0299 ,
			// position_y : 0.1999 ,
			// position_z : -152. ,
			// rotation_y : -0.0873
		// },
		// "13" : {   //求索楼
			// name : "求索楼" ,
			// position_x : -2.4125 ,
			// position_y : -0.0 ,
			// position_z : -245.5767 ,
			// rotation_y : 3.0294
		// },
		// "14" : {   //求真楼
			// name : "求真楼" ,
			// position_x : -81.1498,
			// position_y :  0.0,
			// position_z : -127.9187,
			// rotation_y : 3.0335
		// },
		// "15" : {   //计算中心
			// name : "计算中心" ,
			// position_x : -92.5545,
			// position_y :  0.0,
			// position_z : -74.7222,
			// rotation_y : 0.6055
		// },
		// "16" : {   //慧智公寓
			// name : "汇智公寓" ,
			// position_x : -93.6432 ,
			// position_y : 0.2 ,
			// position_z : -25.5707 ,
			// rotation_y : 3.0124
		// },
		// "17" : {   //汇美公寓
			// name : "汇美公寓" ,
			// position_x : -82.3358 ,
			// position_y : 0.2 ,
			// position_z : 64.0126 ,
			// rotation_y : -3.0123
		// },
		// "18" : {   //汇才公寓
			// name : "汇才公寓" ,
			// position_x : -59.4799 ,
			// position_y : 0.2 ,
			// position_z : 170.3928 ,
			// rotation_y : 0.0560
		// },
		// "19" : {   //篮球场
			// name : "篮球场" ,
			// position_x : -141.5632 ,
			// position_y : 0.2 ,
			// position_z : 257.4805 ,
			// rotation_y : 1.5034
		// },
		// "20" : {   //汇宾公寓
			// name : "汇宾公寓" ,
			// position_x : -114.7334,
			// position_y : 0.0 ,
			// position_z : 189.2999 ,
			// rotation_y : -3.0810
		// },
		// "21" : {   //汇文公寓
			// name : "汇文公寓" ,
			// position_x : -80.0866 ,
			// position_y : 0.2 ,
			// position_z : 103.0326 ,
			// rotation_y : -3.1135
		// },
		// "22" : {   //汇康公寓
			// name : "汇康公寓" ,
			// position_x : -83.6808 ,
			// position_y : 0.0 ,
			// position_z : 17.4069 ,
			// rotation_y : 3.0735
		// },
		// "23" : {   //汇德公寓
			// name : "汇德公寓" ,
			// position_x : -40.1667 ,
			// position_y : 0.2 ,
			// position_z : -31.8367 ,
			// rotation_y : 0.0387
		// },
		// "24" : {   //新图书馆
			// name : "新图书馆" ,
			// position_x : -78.3153 ,
			// position_y : 0.0 ,
			// position_z : -270.5516 ,
			// rotation_y : -1.5916 
		// },
		// "25" : {   //第二食堂, 0.20000006258487701, 80.81060028076172
			// name : "第二食堂" ,
			// position_x : -161.3777618408203 ,
			// position_y : 0.2 ,
			// position_z : 80.81060028076172 ,
			// rotation_y : 3.057385206222534
		// },
		// "26" : {   //汇贤公寓
			// name : "汇贤公寓" ,
			// position_x : -191.7913 ,
			// position_y : 0.2 ,
			// position_z : 199.5729 ,
			// rotation_y : 3.0874 
		// },
		// "27" : {   //汇忠公寓
			// name : "汇忠公寓" ,
			// position_x : -190.7108 ,
			// position_y : 0.2 ,
			// position_z : 242.1327 ,
			// rotation_y : -2.9466 
		// },
		// "28" : {   //足球场
			// name : "足球场" ,
			// position_x : -211.0968 ,
			// position_y : 0.2 ,
			// position_z : 219.3462 ,
			// rotation_y : -1.5913
		// },
		// "29" : {   //博学楼
			// name : "博学楼" ,
			// position_x : -238.5736 ,
			// position_y : 0.0 ,
			// position_z : 127.5505 ,
			// rotation_y : 3.0864 
		// },
		// "30" : {   //知行楼
			// name : "知行楼" ,
			// position_x : -201.9218 ,
			// position_y : 0.0 ,
			// position_z : 65.8642 ,
			// rotation_y : -0.0342 
		// },
		// "31" : {   //华德公寓
			// name : "华德公寓" ,
			// position_x : -252.3542 ,
			// position_y : 0.2 ,
			// position_z : -70.6502 ,
			// rotation_y : -0.5884
		// },
		// "32" : {   //高远楼
			// name : "高远楼" ,
			// position_x : -230.0502 ,
			// position_y : 0.7000 ,
			// position_z : -280.8967 ,
			// rotation_y : 3.0335
		// },
		// "33" : {   //西门
			// name : "西门" ,
			// position_x : -284.3246 ,
			// position_y : 0.0 ,
			// position_z : 15.2359 ,
			// rotation_y : 1.6006
		// },
		// "34" : {   //招商银行
			// name : "招商银行" ,
			// position_x :-12.333307266235352 ,
			// position_y : 0.2 ,
			// position_z : -23.991065979003906 ,
			// rotation_y : 1.9726
		// },
		// "35" : {   //建设银行
			// name : "建设银行" ,
			// position_x : -138.4703826904297,
			// position_y : 0.6857855319976807 ,
			// position_z : -49.50034713745117 ,
			// rotation_y : 1.3378
		// },
		// "37" : {   //排球场
			// name : "排球场" ,
			// position_x : 94.28556060791016 ,
			// position_y : 0.2 ,
			// position_z : 140.9390869140625 ,
			// rotation_y : 2.6253
		// },
		// "38" : {   //网球场
			// name : "网球场" ,
			// position_x : -284.3246 ,
			// position_y : 0.7,
			// position_z : -224.9412841796875 ,
			// rotation_y :  2.9794986248016357
		// },
		// "39" : {   //惠园餐厅
			// name : "惠园餐厅" ,
			// position_x : -181.8201 ,
			// position_y : 0.0 ,
			// position_z : 144.7129 ,
			// rotation_y : -0.1151
		// }
		
	// }
	/***********************************************
	* MINI_MAP={ index : 3,现在地图比例的大小
	*	data : {   id:{
	*					areaSize :""
	*					xrationx :
	*					zrationy :
	*					ui_x :
	*					ui_y :
	*					width :
	*					height:
	*		}}
	****************************************************/
	// SAND_DATA = {
		// "life_facility/repast/one":"sand_table/canyin_one",
		// "life_facility/repast/two":"sand_table/canyin_two",
		// "life_facility/repast/three":"sand_table/canyin_three",
		// "life_facility/yule/one":"sand_table/yule_two",
		// "life_facility/yule/two":"sand_table/yule_one",
		// "life_facility/yule/three":"sand_table/yule_four",
		// "life_facility/yule/four":"sand_table/yule_five",
		// "life_facility/zhusu/one":"sand_table/zhusu_nine",
		// "life_facility/zhusu/two":"sand_table/zhusu_two",
		// "life_facility/zhusu/three":"sand_table/zhusu_one",
		// "life_facility/zhusu/four":"sand_table/zhusu_three",
		// "life_facility/zhusu/five":"sand_table/zhusu_five",
		// "life_facility/zhusu/six":"sand_table/zhusu_four",
		// "life_facility/zhusu/seven":"sand_table/zhusu_six",
		// "life_facility/zhusu/eight":"sand_table/zhusu_ten",
		// "life_facility/zhusu/nine":"sand_table/zhusu_seven",
		// "life_facility/zhusu/ten":"sand_table/zhusu_eight",
		// "life_facility/yinhang/one":"sand_table/yinhang_one",
		// "life_facility/yinhang/two":"sand_table/yinhang_two",
		// "life_facility/yiliao/one":"sand_table/yiliao_one",
	// }
/***********************************************
	* HELP_DATA={ index : 0,
	*	data : {   id:{
	*					"window_name" :"",
	*                   "areasize":"",
	*					"text_window" :"help/propmt_text",
	*					"chinese" :{"text_theme":""},
	*					"english" :{"text_theme":""},
	*					"visible_window" :"null"or "window_name",
	*		}}
	****************************************************/
	HELP_DATA={
		index : 0,
		min:0,
		max:15,
		data : {
			0 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.036098,0},{0.667093,0},{0.520977,0},{0.928571,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : JSON_NEW_HELP.help_txt.introduce_text
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.introduce_text
				},
				"visible_window" : "help/start/propmt" 
			},
			1 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.115122,0},{0.665817,0},{0.600001,0},{0.927295,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : "祈福墙\n\
[padding='l:0 t:4 r:0 b:4']    点击进入祈福墙场景。"
				},
				"english" : {
					"text_theme" : "Go to run switch\n\
[padding='l:0 t:2 r:0 b:2']  Characters roaming, click to go to run the toggle button, you can switch between running and walking action."
				},
				"visible_window" : "null" 
			},
			2 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.197073,0},{0.665817,0},{0.681952,0},{0.927295,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : "法物流通\n\
[padding='l:0 t:2 r:0 b:2']    点击进入法物流通场景."
				},
				"english" : {
					"text_theme" : "Perspective switch\n\
[padding='l:0 t:2 r:0 b:2']  Click this button, you can achieve the first, third person perspective conversion."
				},
				"visible_window" : "null" 
			},
			3 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.275121,0},{0.664542,0},{0.760001,0},{0.92602,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : "视角切换\n\
[padding='l:0 t:4 r:0 b:4']    点击这个按钮，可以实现第一、三人称的视角转换。"

				},
				"english" : {
					"text_theme" : "Perspective of control\n\
[padding='l:0 t:2 r:0 b:2']  'Perspective control' button, click on the bottom of the screen to the scene perspective control panel.The left side of the four arrows to change the character perspective.The right side of the four arrows to control the perspective of mobile process."
				},
				"visible_window" : "null" 
			},
			4 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.355121,0},{0.664542,0},{0.840001,0},{0.92602,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					//JSON_NEW_HELP.help_txt.take_photos
					"text_theme" : "视角控制\n\
[padding='l:0 t:4 r:0 b:4']    点击屏幕下方“视角控制”按钮，场景中出现视角控制面板。左侧四个箭头可改变人物视角，右侧四个箭头可控制视角移动过程。"
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.take_photos
				},
				"visible_window" : "null" 
			},
			5 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.436097,0},{0.664542,0},{0.920976,0},{0.92602,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : JSON_NEW_HELP.help_txt.system_settings
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.system_settings
				},
				"visible_window" : "null" 
			},
			6 :{
				"window_name":"help/zhucaidan",
				"areasize" : "{{0.515121,0},{0.663266,0},{1,0},{0.924744,0}}",
				"text_window" :"help/propmt_text",
				"chinese" : {
					"text_theme" : JSON_NEW_HELP.help_txt.ask_help
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.ask_help
				},
				"visible_window" : "null" 
			},
			7 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.520974,0},{0.520886,0},{0.947318,0},{0.726243,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : JSON_UIHELP_DATA.homePage.chinese
				},
				"english" : {
					"text_theme" : JSON_UIHELP_DATA.homePage.english
				},
				"visible_window" : "help/zhucaidan" 
			},
			8 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.520974,0},{0.456886,0},{0.947318,0},{0.662243,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "雍和宫主页\n\
[padding='l:0 t:4 r:0 b:4']    点击屏幕右方“雍和宫主页”按钮，就可以跳转到校园主页。"
				},
				"english" : {
					"text_theme" : "360 panorama show\n\
[padding='l:0 t:2 r:0 b:2']   Click on the right screen '360 panorama show' button,"
				},
				"visible_window" : "null" 
			},
			9 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.520974,0},{0.386886,0},{0.947318,0},{0.592243,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "360全景展示\n\
[padding='l:0 t:4 r:0 b:4']    点击屏幕右方“360全景展示”按钮，可欣赏校园360全景。"
				},
				"english" : {
					"text_theme" : "360 panorama show\n\
[padding='l:0 t:2 r:0 b:2']   Click on the right screen '360 panorama show' button,"
				},
				"visible_window" : "null" 
			},
			10 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.527802,0},{0.33097,0},{0.954147,0},{0.536325,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "快速定位\n\
[padding='l:0 t:4 r:0 b:4']    点击屏幕右方“快速定位”按钮，弹出场景的缩略图，可以直观的看到场景中的建筑设施，点击图片上的位置按钮，可以快速到达您想要去的地方。"
				},
				"english" : {
					"text_theme" : "toPlace\n\
[padding='l:0 t:2 r:0 b:2']  Click on the right screen 'toPlace' button,pop-up scene thumbnails, you can visually see thescene of building facilities, click on the picture of location button, you can quickly arrival the place you want to go."
				},
				"visible_window" : "null" 
			},
			11 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.526827,0},{0.279745,0},{0.953171,0},{0.485101,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : JSON_NEW_HELP.help_txt.sand_table
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.sand_table
				},
				"visible_window" : "null" 
			},
			12 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.525852,0},{0.21852,0},{0.952195,0},{0.423877,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : JSON_NEW_HELP.help_txt.wander_route
				},
				"english" : {
					"text_theme" : JSON_NEW_HELP_ENGLISH.help_txt.wander_route
				},
				"visible_window" : "null" 
			},
			13 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.327804,0},{0.192602,0},{0.754147,0},{0.397958,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "地图收缩按钮\n\
[padding='l:0 t:4 r:0 b:4']    点击按钮，实现地图展开/隐藏的切换。"
				},
				"english" : {
					"text_theme" : "map contraction button\n\
[padding='l:0 t:2 r:0 b:2']  The local map is an expanded state, click on the shrink button, map hidden; map is hidden, click the button, the map carried."
				},
				"visible_window" : "null" 
			},
			14 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.304389,0},{0.0433673,0},{0.730733,0},{0.248724,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "地图缩小\n\
[padding='l:0 t:4 r:0 b:4']    点击地图缩小按钮，可见范围变大，精度降低。"
				},
				"english" : {
					"text_theme" : "Map to narrow\n\
[padding='l:0 t:2 r:0 b:2']  Click map to narrow the button, the visible range of the larger, lower accuracy."
				},
				"visible_window" : "null" 
			},
			15 :{
				"window_name":"help/mini_map",
				"areasize" : "{{0.304389,0},{0.00765303,0},{0.730733,0},{0.21301,0}}",
				"text_window" :"help/mini/propmt_text",
				"chinese" : {
					"text_theme" : "地图放大\n\
[padding='l:0 t:4 r:0 b:4']    点击地图放大按钮，可见范围变小，精度增加。"
				},
				"english" : {
					"text_theme" : "Map to enlarge\n\
[padding='l:0 t:2 r:0 b:2']  Click map to enlarge button visible range becomes smaller, the accuracy increases."
				},
				"visible_window" : "null" 
			}
		}
	}
}catch(e){
	alert(e);
}