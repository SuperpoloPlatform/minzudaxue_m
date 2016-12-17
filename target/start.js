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

try {
	//获取程序开始运行时的系统时间
	Plugin.Load("spp.script.ipc");
	
	var startTime = new Date().getTime();
	//校区
	load('/json/json_path.js');
	if(!JSON_PATH){
		alert("json_path.js is not found or no infomation !");
	}
	//主菜单侧面按钮
	load('/json/json_zhucaidan_cemian.js')
	if(!JSON_ZHUCAIDAN_CEMIAN){
		alert("json_zhucaidan_cemian.js is not found ！");
		return ;
	}
	//主菜单按钮
	load('/json/json_zhucaidan.js')
	if(!JSON_ZHUCAIDAN){
		alert("json_zhucaidan.js is not found ！");
		return ;
	}
	load('/json/json.js')
	if(!JSON_SCHOOL){
		alert("json.js is not found ！");
		return ;
	}
	load('/json/sand_360.js')
	if(!FLASH_PANORAMA){
		alert("sand_360.js is not found ！");
		return ;
	}
	//新手帮助
	load('/json/json_new_help.js')	
	if(!JSON_NEW_HELP){
		alert("json_new_help.js is not found ！");
		return ;
	}
	//新手帮助--英语内容
	load('/json/json_new_help_english.js')	
	if(!JSON_NEW_HELP){
		alert("json_new_help_english.js is not found ！");
		return ;
	}
	//沙盘
	load('/json/ui_sand.js')
	if(!SAND_TABLE){
		alert("!SAND_TABLE");
	}
	//沙盘视角
	load("/json/sand_view.js")
	if(!SAND_VIEW){
		alert("!SAND_VIEW");
	}
	//搜索
	load('/json/ui_search.js')
	if(!SEARCH_DATA){
		alert("!SEARCH_DATA");
	}
	//小地图
	load('/json/map.js')
	if(!MINI_MAP){
		alert("!MINI_MAP");
	}
	//light数据 岳朝凤添加
	load('/json/light.js')
	if(!CONFIG_LIGHT){
		alert("light.js is not found ！");
	}
	//新增--快速定位json文件 岳朝凤 2012-6-13
	load('/json/quick_position.js')
	if(!CONFIG_LIGHT){
		alert("quick_position.js is not found ！");
	}	
	//路线指引的json文件
	load("/json/ui_route.js");
	if(!ROUTE_DATA){
		alert("ui_route.js is not found or no infomation !");
	}
	//视频集
	load("/json/video_frequency.js");
	if(!VIDEO_FREQUENCY){
		alert("video_frequency.js is not found or no infomation !");
	}
	//校园主页
	load("/json/ui_help.js");
	if(!JSON_UIHELP_DATA){
		alert("ui_help.js is not found or no infomation !");
	}
	//漫游路线
	 load('/json/json_wander.js')	
	if(!JSON_WANDER){
		alert("json_wander.js is not found ！");
		return ;
	} 
	//校园主页及视频页数据格式
	load('/json/url.js');
	if(!URL){
		alert("url.js is not found ！");
		return ;
	}
	//主菜单--帮助--关于我们
	load('/json/json_aboutwe.js');
	if(!JSON_ABOUTWE){
		alert("json_aboutwe.js is not found ！");
		return ;
	}
	
	//360全景展示
	load('/json/json_full_view.js');
	if(!FULL_VIEW_POSITION){
		alert("json_full_view.js is not found ！");
		return ;
	}
	
	// billboard必须一个font server的支持。"crystalspace.font.server.default","iFontServer"
	var fntserver = Registry.Get("iFontServer","crystalspace.font.server.default");

	// 全局变量，方便调试。
	var CONSOLE = Registry.Get("iConsole");
	// 这里自定义一个控制台输出函数，方便使用
	// 使用时直接调用 iprint('输出结果'); 即可
	var iReporter = Registry.Get("iReporter");
	var iprint = function(msg){
		System.Report(msg, iReporter.DEBUG/* 4 */, "\n[Debug]");
	}
	
	//通过获取目录行中有没有“--anti_aliasing 参数”，来判定是否需要打开抗锯齿。
	if(CmdLine.GetOption('anti_aliasing',0)){
		ConfigMan.Set("Video.OpenGL.MultiSamples", 16);
	}

	Plugin.Load("spp.script.cspace.core");
	// 加载 GUI 插件
	Plugin.Load("spp.script.gui.cegui");
	//加载插件，是的启动变为最大化
	Plugin.Load("spp.behaviourlayer.jscript");
	size = System.Maximize();
	SystemWidth =size[0];
	SystemHeight =size[1];
	UpdateWidth=(1024*SystemHeight)/(768*SystemWidth);
	UpdateHeight=(768*SystemWidth)/(1024*SystemHeight);
	
	// 打开应用程序窗口
	Event.Send("application.open", true);
	
	// 修改窗口的标题栏
	C3D.g3d.driver2d.native.SetTitle(JSON_SCHOOL.WindowSetting.title);
	
	// 加载系统中的 js 库
	require("objlayout.js");	// 这里是加载 Entity 支持库
	require("ui.js");	// 这里加载 GUI 支持库
	
	//这里添加判断，是否加载loader.js
	var isThreadedLoader = false;
	if(CmdLine.GetOption("thread"))
	{
		isThreadedLoader = true;
	}
	if(isThreadedLoader)
	{
		//iprint("加载库文件 loader.js");
		// 加载场景使用的库
		require("loader.js");
	}
	require("cursesui.js");	// 在CUI上画图用的
	require("wanders.js");	//这里加载漫游支持库
	
	// 这里自定义一个文件加载函数，方便使用
	var iload = function(file){
		if(!load(file)){
			alert("could not to load the file '"+file+"'!!");
		}
	}
		
	// 加载逻辑相关的文件
	//iload('/logic/logic_index.js');
	// 加载UI相关的文件
	iload('/ui/ui.scheme.js');
	iload('/ui/planimage.layout.js');
	
	// 创建GUI所需要的scheme和字体，通常文件名为 ui.scheme.js ，其中的对象名为 UIDATA;
	GUI.CreateObjectScheme(UIDATA,"/ui/data");   
		//加载欢迎界面的图片集
	if(GUI.Imagesets.IsPresent("planimage")){
		GUI.Imagesets.DestroyImageset(GUI.Imagesets.Get("planimage"));
	}
	GUI.Imagesets.CreateImageset("planimage","/ui/data/planimage.jpg");
	// 这里先创建进度条的 UI 
	GUI.CreateObjectLayout(PLANIMAGE_LAYOUT,"/ui/data");
	
	//GUI.CreateObjectLayout(ZHUCAIDAN_LAYOUT,"/ui/data");		
	//GUI.CreateObjectLayout(RELOADING_LAYOUT,"/ui/data");
	//下面这个方式，通过传入一个对象来初始化。这里我们以JSON格式来定义这个初始化对象。（比如`PLAYER`）
	//这个对象可以被保存在文件中，可以动态加载，加载进来就可以定义若干entity.
	//这里的entity你可以随意添加属性，就是普通的js对象！
	//我们的编辑器将会编辑产生一个entity def json，加载进来就是Entities.CreateEntity中的参数。
	
	//iCamera = Entities.CreateEntity(CAMERA);
	//player = Entities.CreateEntity(PLAYER);		
 	//music_bg = Entities.CreateEntity(MUSIC_BG);	
	
	//bill_b = Entities.CreateEntity(BILL_B);
	
	//使用硬鼠标
	C3D.g2d.SetMouseCursor(C3D.g2d.csmcArrow);
	// 获得 3D 支持，渲染场景。
	engine = Registry.Get('iEngine');
	// g3d = Registry.Get('iGraphics3D');
	// view = new iView(engine,g3d);
	var count = Event.InstallHelper('3d','frame');
}catch(e){
	alert('error:',e);
}
