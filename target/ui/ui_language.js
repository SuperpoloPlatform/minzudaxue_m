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
	LANGUAGE_STATE = {
		state : "chinese",
		"chinese" : "LANGUAGE_CHINESE",
		"english" : "LANGUAGE_ENGLISH"
	},
	LANGUAGE_CHINESE = {
		"menu_bar/button_zhuye/window":{
			text_theme:JSON_UIHELP_DATA.homePageForButton.chinese,
			Font:"You10"
		},
		"menu_bar/button_zhanshi/window":{
			text_theme:"360全景展示",
			Font:"You10"
		},
		"about_road/arrive/window" :{
			Text:ROUTE_DATA.RouteTo.chinese,
			Font:"You10"
		},
		"about_road/transit/window" :{
			Text:ROUTE_DATA.SurroundingBus.chinese,
			Font:"You10"
		},
		"about_road/address" :{
			text_theme:"地理位置",
			Font:"You10"
		},
		"about_road/arrive" :{
			text_theme:"到达路线",
			Font:"You10"
		},
		"about_road/transit" :{
			text_theme:"周边公交",
			Font:"You10"
		},
		"about_sort/goto" :{
			text_theme:"前往",
			Font:"You10"
		},
		"about_sort/more" :{
			text_theme:"更多信息",
			Font:"You10"
		},
		"school_info/tab_window/about_road" :{
			text_theme:"路线指引", 
			Font:"You10"
		},
		"school_info/tab_window/about_sort" :{
			text_theme:"分类查询",
			Font:"You10"
		},
		"menu_bar/button_manyou/window" : {
			"text_theme" : "漫游",
			"Font" : "You10"
		},
		"menu_bar/button_shijiaokongzhi/window" : {
			"text_theme" : "视角控制",
			"Font" : "You10"
		},
		"menu_bar/button_shijiaoqiehuan/window" : {
			"text_theme" : "视角切换",
			"Font" : "You10"
		},
		"menu_bar/button_zoupaoqiehuan/window" : {
			"text_theme" : "走跑切换",
			"Font" : "You10"
		},
		"menu_bar/button_zoupaoqiehuan1/window" : {
			"text_theme" : "走跑切换",
			"Font" : "You10"
		},
		"menu_bar/button_yuyanqiehuan/window" : {
			"text_theme" : "设置",
			"Font" : "You10"
		},
		"menu_bar/button_paizhao/window" : {
			"text_theme" : "拍照",
			"Font" : "You10"
		},
		"menu_bar/button_xiaoditu/window" : {
			"text_theme" : "沙盘",
			"Font" : "You10"
		},
		"menu_bar/button_bangzhu/window" : {
			"text_theme" : "帮助",
			"Font" : "You10"
		},
		"menu_bar/button_shezhi/window" : {
			"text_theme" : "快速定位",
			"Font" : "You10"
		},
		"menu_bar/button_xiaoyuanjieshao/window" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.chinese,
			"Font" : "You10"
		},
		//simiaojieshao
		"school_info" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.chinese,
			"Font" : "You10"
		},
		"school_info/tab_window/about_school" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText1.chinese,
			"Font" : "You10"
		},
		"school_info/tab_window/about_photo" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText2.chinese,
			"Font" : "You10"
		},
		"school_info/tab_window/about_video" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText3.chinese,
			"Font" : "You10"
		},
		"about_school/content" : {
			"Text" : JSON_SCHOOL.ui.schoolIntroduce.introduceText.chinese,
			"Font" : "You10"
		},
		"about_photo/campus_scenery" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText4.chinese,
			"Font" : "You10"
		},
		"about_photo/campus_activity" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText5.chinese,
			"Font" : "You10"
		},
		"about_photo/campus_docenten" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText6.chinese,
			"Font" : "You10"
		},
		//manyouluxian
		"manyou/text/window" :{
			"text_theme" :"漫游路线",
			"Font" : "You12"
		},
		"manyou/one" :{
			"text_theme" :"空中漫游",
			"Font" :"You8"
		},
		"amanyou/two" :{
			"text_theme" :"地面漫游",
			"Font" :"You8"
		},
		
		//take photo
		"zhucaidan/tishikuang_Window/erji" :{
			"text_theme" :"提示框",
			"Font" :"You14"
		},
		"tishikuang_Window/window/erji" :{
			"text_theme" :"照相成功！",
			"Font" :"You14"
		},
		"tishikuang_Window/two/erji" :{
			"text_theme" :"查看相片",
			"Font" :"You10"
		},
		"zhucaidan/tishikuang_Window" :{
			"text_theme" :"照片展示",
			"Font" :"You10"
		},
		"zhucaidan/help" :{
			"text_theme" :"帮 助",
			"Font" :"You14"
		},
		"help/one" :{
			"text_theme" :"操作方式",
			"Font" :"You8"
		},
		"help/two" :{
			"text_theme" :"功能介绍",
			"Font" :"You8"
		},
		"help/three" :{
			"text_theme" :"关于我们",
			"Font" :"You8"
		},
		"pone/help/window/word_text" :{
			"Text" :"[padding='l:0 t:4 r:0 b:4']    自由漫游时，可使用键盘方向键或A(左)W（上）S（下）D（右）自由行走。",
			Font:"You10"
		},
		"help/school_manager/scientific" :{
			"Text" :JSON_SCHOOL.ui.schoolHelp.features.chinese,
			Font:"You10"
		},
		"three/help/window" :{
			"Text" :JSON_ABOUTWE.aboutWe.chinese,
			Font:"You10"
		},
		//setting
		"shezhi/text/window" :{
			"text_theme" :"设 置",
			"Font" :"You14"
		},
		"Multilingual/text/window" :{
			"text_theme" :"[padding=l:0 t:4 r:0 b:4]            语 言 切 换",
			"Font" :"You10"
		},
		"yinyeu/text/window" :{
			"text_theme" :"[padding=l:0 t:4 r:0 b:4]            音 乐 控 制",
			"Font" :"You10"
		},
		"shezhi_ok/btn" :{
			"text_theme" :"应 用",
			"Font" :"You8"
		},
		//shapan_new
		"school_sand/hoarse" :{
			"text_theme" :"返 回",
			"Font" :"You8"
		},
		"sand_table/ren/text" :{
			"text_theme" :"我在这里",
			"Font" :"You8"
		},
		"school_sand/menu/0/word" :{
			"text_theme" :"建筑",
			"Font" :"You10"
		},
		"school_sand/window/goto" :{
			"text_theme" :"前往",
			"Font" :"You8"
		},
		"school_sand/window/open" :{
			"text_theme" :"更多信息",
			"Font" :"You8"
		},
		//shapan
		"backing_out_Window/hoarse" :{
			"text_theme" :"返 回",
			"Font" :"You8"
		},
		"shapan_text/introschool/window" :{
			"text_theme" :"[padding='l:0 t:4 r:0 b:4'][colour='FFFFCC00']移动沙盘:[colour='FFFFFFFF']使用键盘的“W”和“S”键向前或向后移动沙盘，或者使用“R”和“F”键调整移动时的角度调整沙盘向下和向上\n\
[colour='FFFFCC00']旋转沙盘:[colour='FFFFFFFF']使用键盘“A”和“D”键可以向左和向右旋转沙盘         [colour='FFFFCC00']缩放沙盘:[colour='FFFFFFFF']使用鼠标滚轮放大或缩小沙盘。        \n\
[colour='FFFFCC00']使用沙盘定位:[colour='FFFFFFFF'](1)鼠标单击下面图标中的一个，这时沙盘中会有相应的位置提示。(2)鼠标单击沙盘中的位置名称，这时您可\n\
以瞬间移动到显示的位置。                                                                                     \n\
[colour='FF00FF00']                                                  沙盘操作说明 \n\
				 ",
			"Font" :"You12"
		},
		//sousuo
		"search/Editbox" : {
			"Text" : "请输入搜索信息",
			"Font" : "You8"
		},
		"serch/info_title" : {
			"text_theme" : "搜索结果",
			"Font" : "You10"
		},
		//serch_sand
		"school_sand_serch/hoarse_back" : {
			"text_theme" : "返 回",
			"Font" : "You8"
		},
		"school_sand_serch/window/goto" : {
			"text_theme" : "前往",
			"Font" : "You8"
		},
		//360全景展示
		"full_view_prompt/title":{
			"text_theme":"[padding=&apos;l:0 t:2 r:0 b:2&apos;]  360全景展示，可以为您另一种视野！是否进入360全景展示？",
			"Font" : "You10"
		},
		"full_view_prompt/yes_btn":{
			"text_theme":"是",
			"Font":"You8"
		},
		"full_view_prompt/no_btn":{
			"text_theme":"否",
			"Font":"You8"
		},
		"backing_out_Window/full_view":{
			"text_theme":"返 回",
			"Font":"You8"
		},
		"next_gate_Window/full_view":{
			"text_theme":"下一个门",
			"Font":"You8"
		},
		"ask_help_Window/full_view":{
			"text_theme":"帮 助",
			"Font":"You8"
		},
		"help/full_view/propmt_text":{
			"Text":"[padding=&apos;l:0 t:2 r:0 b:2&apos;]操作说明：\n\
  “←/A”左转，“→/D”右转，“R”抬头，“F”低头，鼠标左键双击停止旋转，鼠标拖拽旋转场景，鼠标滚轮拉伸",
			"Font":"You10"
		}
	},
	LANGUAGE_ENGLISH = {
		"menu_bar/button_zhuye/window":{
			text_theme:JSON_UIHELP_DATA.homePageForButton.english,
			Font:"You10"
		},
		"menu_bar/button_zhanshi/window":{
			text_theme:"360 panorama show",
			Font:"You10"
		},
		"about_road/arrive/window" :{
			Text:ROUTE_DATA.RouteTo.english,
			Font:"You10"
		},
		"about_road/transit/window" :{
			Text:ROUTE_DATA.SurroundingBus.english,
			Font:"You10"
		},
		"about_road/address" :{
			text_theme:"Geographical position",
			Font:"You10"
		},
		"about_road/arrive" :{
			text_theme:"Route to",
			Font:"You10"
		},
		"about_road/transit" :{
			text_theme:"Surrounding bus",
			Font:"You10"
		},
		"about_sort/goto" :{
			text_theme:"Go to",
			Font:"You10"
		},
		"about_sort/more" :{
			text_theme:"More...",
			Font:"You10"
		},
		"school_info/tab_window/about_road" :{
			text_theme:"Route guidance",
			Font:"You10"
		},
		"school_info/tab_window/about_sort" :{
			text_theme:"Classification inquires",
			Font:"You10"
		},
		"menu_bar/button_manyou/window" : {
			"text_theme" : "roaming",
			"Font" : "You10"
		},
		"menu_bar/button_shijiaokongzhi/window" : {
			"text_theme" : "Veil View",
			"Font" : "You10"
		},
		"menu_bar/button_shijiaoqiehuan/window" : {
			"text_theme" : " mode",
			"Font" : "You10"
		},
		"menu_bar/button_zoupaoqiehuan/window" : {
			"text_theme" : "go_run",
			"Font" : "You10"
		},
		"menu_bar/button_zoupaoqiehuan1/window" : {
			"text_theme" : "go_run",
			"Font" : "You10"
		},
		"menu_bar/button_yuyanqiehuan/window" : {
			"text_theme" : "Set",
			"Font" : "You10"
		},
		"menu_bar/button_paizhao/window" : {
			"text_theme" : "photo",
			"Font" : "You10"
		},
		"menu_bar/button_xiaoditu/window" : {
			"text_theme" : "hoarse",
			"Font" : "You10"
		},
		"menu_bar/button_bangzhu/window" : {
			"text_theme" : "help",
			"Font" : "You10"
		},
		"menu_bar/button_shezhi/window" : {
			"text_theme" : "toPlace",
			"Font" : "You10"
		},
		"menu_bar/button_xiaoyuanjieshao/window" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.english,
			"Font" : "You10"
		},
		//simiaojieshao
		"school_info" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.english,
			"Font" : "You10"
		},
		"school_info/tab_window/about_school" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText1.english,
			"Font" : "You10"
		},
		"school_info/tab_window/about_photo" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText2.english,
			"Font" : "You10"
		},
		"school_info/tab_window/about_video" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText3.english,
			"Font" : "You10"
		},
		"about_school/content" : {
			"Text" : JSON_SCHOOL.ui.schoolIntroduce.introduceText.english,
			"Font" : "You10"
		},
		"about_photo/campus_scenery" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText4.english,
			"Font" : "You10"
		},
		"about_photo/campus_activity" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText5.english,
			"Font" : "You10"
		},
		"about_photo/campus_docenten" : {
			"text_theme" : JSON_SCHOOL.ui.schoolIntroduce.buttonText.contentText.infoText6.english,
			"Font" : "You10"
		},
		//manyouluxian
		"manyou/text/window" :{
			"text_theme" :"Roaming route",
			"Font" : "You12"
		},
		"manyou/one" :{
			"text_theme" :"Air roaming",
			"Font" :"You8"
		},
		"amanyou/two" :{
			"text_theme" :"Ground roaming",
			"Font" :"You8"
		},
		
		//take photo
		"zhucaidan/tishikuang_Window/erji" :{
			"text_theme" :"tooltip",
			"Font" :"You14"
		},
		"tishikuang_Window/window/erji" :{
			"text_theme" :"success!",
			"Font" :"You14"
		},
		"tishikuang_Window/two/erji" :{
			"text_theme" :"View",
			"Font" :"You10"
		},
		"zhucaidan/tishikuang_Window" :{
			"text_theme" :"Photo View",
			"Font" :"You10"
		},
		"zhucaidan/help" :{
			"text_theme" :"help",
			"Font" :"You14"
		},
		"help/one" :{
			"text_theme" :"Mode of operation",
			"Font" :"You8"
		},
		"help/two" :{
			"text_theme" :"Features",
			"Font" :"You8"
		},
		"help/three" :{
			"text_theme" :"About Us",
			"Font" :"You8"
		},
		"pone/help/window/word_text" :{
			"Text" :"Free roaming, you can move around using the keyboard \n\
						arrow keys or A (left) W (up) S (down) D (right)",
			"Font" :"You8"
		},
		"help/school_manager/scientific" :{
			"Text" :JSON_SCHOOL.ui.schoolHelp.features.english,
			"Font" :"You8"
		},
		"three/help/window" :{
			"Text" :JSON_ABOUTWE.aboutWe.english,
			"Font" :"You8"
		},
		//setting
		"shezhi/text/window" :{
			"text_theme" :"Setting",
			"Font" :"You14"
		},
		"Multilingual/text/window" :{
			"text_theme" :"[padding=&apos;l:0 t:3 r:0 b:4&apos;]          Language switch",
			"Font" :"You10"
		},
		"yinyeu/text/window" :{
			"text_theme" :"[padding=&apos;l:0 t:4 r:0 b:4&apos;]            Music control",
			"Font" :"You10"
		},
		"shezhi_ok/btn" :{
			"text_theme" :"Apply",
			"Font" :"You8"
		},
		//shapan_new
		"school_sand/hoarse" :{
			"text_theme" :"Back",
			"Font" :"You8"
		},
		"school_sand/menu/0/word" :{
			"text_theme" :"Building",
			"Font" :"You10"
		},
		"school_sand/window/goto" :{
			"text_theme" :"Go",
			"Font" :"You8"
		},
		"school_sand/window/open" :{
			"text_theme" :"To network",
			"Font" :"You8"
		},
		//shapan
		"backing_out_Window/hoarse" :{
			"text_theme" :"Back",
			"Font" :"You8"
		},
		"shapan_text/introschool/window" :{
			"text_theme" :"[padding='l:0 t:4 r:0 b:4'][colour='FFFFCC00']Move sandbox:[colour='FFFFFFFF']use keybord's“W”and“S” to move it Forward or backward，Or use“R”and“F”adjust up or down.\n\
[colour='FFFFCC00']Rotation sandbox:[colour='FFFFFFFF']use keybord's“A”and“D”can rotate it left or right   [colour='FFFFCC00']Zoom sandbox:[colour='FFFFFFFF']Use your mouse wheel to \n\
zoom in or out on the sand table. [colour='FFFFCC00']use sandbox positioning: [colour='FFFFFFFF'](1)Mouse click the icon below,there will be a\n\
corresponding location in the sandbox。(2)Mouse click location name in the sandbox,You can instantly move to \n\
the display position。 					[colour='FF00FF00']	            Sandbox operating Description				\n\
				 ",
			"Font" :"You12"
		},
		"sand_table/ren/text" :{
			"text_theme" :"I'm here",
			"Font" :"You8"
		},
		//sousuo
		"search/Editbox" : {
			"Text" : "Enter search information",
			"Font" : "You8"
		},
		"serch/info_title" : {
			"text_theme" : "Search Results",
			"Font" : "You10"
		},
		//serch_sand
		"school_sand_serch/hoarse_back" : {
			"text_theme" : "Back",
			"Font" : "You8"
		},
		"school_sand_serch/window/goto" : {
			"text_theme" : "GO",
			"Font" : "You8"
		},
		//360全景展示
		"full_view_prompt/title":{
			"text_theme":"[padding=&apos;l:0 t:2 r:0 b:2&apos;]  360全景展示，可以为您另一种视野！是否进入360全景展示？",
			"Font" : "You10"
		},
		"full_view_prompt/yes_btn":{
			"text_theme":"Yes",
			"Font":"You8"
		},
		"full_view_prompt/no_btn":{
			"text_theme":"No",
			"Font":"You8"
		},
		"backing_out_Window/full_view":{
			"text_theme":"Go Back",
			"Font":"You8"
		},
		"next_gate_Window/full_view":{
			"text_theme":"Next Door",
			"Font":"You8"
		},
		"ask_help_Window/full_view":{
			"text_theme":"Help",
			"Font":"You8"
		},
		"help/full_view/propmt_text":{
			"Text":"[padding=&apos;l:0 t:2 r:0 b:2&apos;]Operating Instructions ：\n\
  '←/A' Turn left，'→/D' Turn right，'R' Look up，'F' Look down，and double-click the left mouse button to stop the rotation, drag the mouse to rotate scene, the mouse wheel stretch",
			"Font":"You10"
		}
	}
}catch(e){
	alert(e);
}