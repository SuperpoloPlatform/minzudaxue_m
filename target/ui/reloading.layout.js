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
	RELOADING_LAYOUT = {
		name : "reloading.layout",
		method : {
			//选择男女
			ChooseMenAndWomen:function(){
				var sex_mark;
				if(this.GetProperty("Selected")=="True"){
					//alert(this.GetProperty("Selected"));
					var show_window = this.name+"_window";
					if(show_window == "select/bar_one_window"){
						sex_mark = "nan";
					}
					if(show_window == "select/bar_two_window"){
						sex_mark = "nv";
					}
					
					/* added by wangxin 2012-04-05 begin */
					player.sex = sex_mark ; //记录人物的性别
					/* added by wangxin 2012-04-05 end */
					
					for(var index in this.associatedWindow){
						var window = GUI.GUISheet.Get(this.associatedWindow[index]);
						window.SetProperty("Visible","False");
					}
					window = FUNCTION_DATA.get_windows(show_window);
					window.SetProperty("Visible","True");
				}
				//alert(sex_mark);
				Event.Send({
					name:"ui.click.change.sex",
					self:player,
					sex:sex_mark
				});
			},
			
			ChooseWepon_ok:function(){
				// 发出角色选择确定事件
				Event.Send({
					name:"role.select.enter.click",
					self:player,
				});
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
				// 切换到 场景主界面
				GUI.Windows.DestroyWindow(GUI.System.root);
				GUI.CreateObjectLayout(ZHUCAIDAN_LAYOUT,"/ui/data");
				var loadAnimation =GUI.Animations.LoadAnimations("/ui/data/zhucaidan.animation");
				if(!loadAnimation)
				{
					alert("animation文件导入失败了!!");
				}
				
				var anim = GUI.Animations.GetAnimation("set_help_alpha_one");
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				var instant = GUI.Animations.InstantiateAnimation(anim);
				var new_help_win = GUI.GUISheet.Get("zhucaidan/new_help_choose");
				instant.SetTargetWindow(new_help_win);
				instant.Start();
				//切换校园中的语言
				if(player.reloading_lan_state == "english"){
					for(var index in HELP_LAN_ENGLISH){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in HELP_LAN_ENGLISH[index]){
							window_name.SetProperty(i,HELP_LAN_ENGLISH[index][i]);
						}
					}
					//
					for (var index in LANGUAGE_ENGLISH){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in LANGUAGE_ENGLISH[index]){
							window_name.SetProperty(i,LANGUAGE_ENGLISH[index][i]);
						}
					}
					FUNCTION_DATA.get_windows("Multilingual_ok_yingwen/btn").SetProperty("Visible","True");
					FUNCTION_DATA.get_windows("Multilingual_ok_zhongwen/btn").SetProperty("Visible","False");
				}else{
					for(var index in HELP_LAN_CHINESE){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in HELP_LAN_CHINESE[index]){
							window_name.SetProperty(i,HELP_LAN_CHINESE[index][i]);
						}
					}
					//
					for (var index in LANGUAGE_CHINESE){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in LANGUAGE_CHINESE[index]){
							window_name.SetProperty(i,LANGUAGE_CHINESE[index][i]);
						}
					}
					FUNCTION_DATA.get_windows("Multilingual_ok_zhongwen/btn").SetProperty("Visible","True");
					FUNCTION_DATA.get_windows("Multilingual_ok_yingwen/btn").SetProperty("Visible","False");
				}
				FUNCTION_DATA.get_windows("search/but/text_background").SetProperty("Visible","False");
				//动态创建主菜单按钮
				var zuobiao = new Array();
				zuobiao[0] = "{{0.00845421,0},{0.515588,0},{0.104699,0},{0.990525,0}}";
				zuobiao[1] = "{{0.142963,0},{0.515588,0},{0.232777,0},{0.990525,0}}";
				zuobiao[2] = "{{0.273187,0},{0.515588,0},{0.363001,0},{0.990525,0}}";
				zuobiao[3] = "{{0.401697,0},{0.506445,0},{0.494767,0},{0.983511,0}}";
				zuobiao[4] = "{{0.533532,0},{0.506445,0},{0.626622,0},{0.983511,0}}";
				zuobiao[5] = "{{0.665362,0},{0.506445,0},{0.758432,0},{0.983511,0}}";
				zuobiao[6] = "{{0.793979,0},{0.506445,0},{0.887049,0},{0.983511,0}}";
				
				var zzuobiao = new Array();
				zzuobiao[0] = "{{0.196165,0},{0.869215,0},{0.284035,0},{0.914717,0}}";
				zzuobiao[1] = "{{0.276433,0},{0.869215,0},{0.365278,0},{0.914717,0}}";
				zzuobiao[2] = "{{0.355176,0},{0.869215,0},{0.445973,0},{0.914717,0}}";
				zzuobiao[3] = "{{0.435937,0},{0.869215,0},{0.521856,0},{0.914717,0}}";
				zzuobiao[4] = "{{0.527508,0},{0.869215,0},{0.580234,0},{0.914717,0}}";
				zzuobiao[5] = "{{0.606038,0},{0.869215,0},{0.658977,0},{0.914717,0}}";
				zzuobiao[6] = "{{0.684152,0},{0.869215,0},{0.740713,0},{0.914717,0}}";
				
				var anniu_name = new Array();
				anniu_name[0]="xiaoyuanjieshao";
				anniu_name[1]="zoupaoqiehuan";
				anniu_name[2]="shijiaoqiehuan";
				anniu_name[3]="shijiaokongzhi";
				anniu_name[4]="paizhao";
				anniu_name[5]="yuyanqiehuan";
				anniu_name[6]="bangzhu";
				var k = 0;
				var b="false";
				var r=1;
				for(index in JSON_ZHUCAIDAN){
					i = parseFloat(index);
					for(var j=0;j<anniu_name.length;j++){
						//常用的7个按钮
						if(JSON_ZHUCAIDAN[i]["chinese"] == FUNCTION_DATA.get_windows("menu_bar/button_"+ anniu_name[j]+"/window").GetProperty("text_theme")){
							FUNCTION_DATA.get_windows("menu_bar/button_"+ anniu_name[j]).SetProperty("UnifiedAreaRect",zuobiao[k]);
							FUNCTION_DATA.get_windows("menu_bar/button_"+ anniu_name[j]).SetProperty("Visible","True");
							FUNCTION_DATA.get_windows("menu_bar/button_"+ anniu_name[j]+"/window").SetProperty("UnifiedAreaRect",zzuobiao[k]);
							k++;
							b="true";
						}
					}
					//新button 图片文件按钮json文件的button顺序设置
					if(b=="false"){
						FUNCTION_DATA.get_windows("menu_bar/button_linshi"+r).SetProperty("UnifiedAreaRect",zuobiao[k]);
						FUNCTION_DATA.get_windows("menu_bar/button_linshi"+r).SetProperty("Visible","True");
						FUNCTION_DATA.get_windows("menu_bar/button_linshi"+r+"/window").SetProperty("UnifiedAreaRect",zzuobiao[k]);
						FUNCTION_DATA.get_windows("menu_bar/button_linshi"+r+"/window").SetProperty("text_theme",JSON_ZHUCAIDAN[i]["chinese"]);
						
					    FUNCTION_DATA.get_windows("menu_bar/button_linshi"+r).SetProperty("button_bg","set:zhucaidan_button_"+r+"-hover image:full_image");
					    FUNCTION_DATA.get_windows("linshi"+r+"_button/image").SetProperty("image","set:zhucaidan_button_"+r+"-normal image:full_image");
						k++;
						r++;
					}
					b="false";
				}
				//动态显示侧面按钮
				var czuobiao = new Array();
				czuobiao[0] = "{{0,0},{0,0},{1,0},{0.1,0}}";
				czuobiao[1] = "{{0,0},{0.11,0},{1,0},{0.21,0}}";
				czuobiao[2] = "{{0,0},{0.22,0},{1,0},{0.32,0}}";
				czuobiao[3] = "{{0,0},{0.33,0},{1,0},{0.43,0}}";
				czuobiao[4] = "{{0,0},{0.44,0},{1,0},{0.54,0}}";
				czuobiao[5] = "{{0,0},{0.55,0},{1,0},{0.65,0}}";
				
				var czzuobiao = new Array();
				czzuobiao[0] = "{{0.0,0},{0.04,0},{0.707376,0},{0.09,0}}";
				czzuobiao[1] = "{{0.0,0},{0.15,0},{0.707376,0},{0.20,0}}";
				czzuobiao[2] = "{{0.0,0},{0.25,0},{0.707376,0},{0.30,0}}";
				czzuobiao[3] = "{{0.0,0},{0.36,0},{0.707376,0},{0.41,0}}";
				czzuobiao[4] = "{{0.0,0},{0.47,0},{0.707376,0},{0.52,0}}";
				czzuobiao[5] = "{{0.0,0},{0.58,0},{0.707376,0},{0.63,0}}";
				var ce_name = new Array();
				ce_name[0]="manyou";
				ce_name[1]="xiaoditu";
				ce_name[2]="shezhi";
				ce_name[3]="zhanshi";
				ce_name[4]="qiehuan";
				ce_name[5]="zhuye";
				
				var n =0;
				var leng =0;
				for(index in JSON_PATH["rel_path"]){
					leng++;
				}
				for(index in JSON_ZHUCAIDAN_CEMIAN){
					i = parseFloat(index);
					for(var j=0;j<ce_name.length;j++){
						if(JSON_ZHUCAIDAN_CEMIAN[i]["chinese"] == FUNCTION_DATA.get_windows("menu_bar/button_"+ ce_name[j]+"/window").GetProperty("text_theme")){
							if("menu_bar/button_"+ce_name[j] == "menu_bar/button_qiehuan" && leng<2){
									FUNCTION_DATA.get_windows("menu_bar/button_qiehuan").SetProperty("Visible","Fasle");	
									continue;
							}
						FUNCTION_DATA.get_windows("menu_bar/button_"+ ce_name[j]).SetProperty("UnifiedAreaRect",czuobiao[n]);
						FUNCTION_DATA.get_windows("menu_bar/button_"+ ce_name[j]).SetProperty("Visible","True");
						FUNCTION_DATA.get_windows("menu_bar/button_"+ ce_name[j]+"/window").SetProperty("UnifiedAreaRect",czzuobiao[n]);
						n++;
						}
					}
					
				}
			
				
				
				//判断为雍和宫项目的时候换按钮
				if(JSON_SCHOOL["WindowSetting"]["title"]=="雍和宫"){
					// FUNCTION_DATA.get_windows("menu_bar/button_paizhao/window").SetProperty("text_theme","祈福墙");
					// FUNCTION_DATA.get_windows("menu_bar/button_paizhao/window").SetProperty("UnifiedAreaRect","{{0.512508,0},{0.869215,0},{0.580234,0},{0.914717,0}}");
					// FUNCTION_DATA.get_windows("menu_bar/button_paizhao").SetProperty("button_bg","set:help image:cifford_hover");
					// FUNCTION_DATA.get_windows("paizhao_button/image").SetProperty("image","set:help image:cifford_normal");
					
					//wangxin Add 2012-08-21 
					FUNCTION_DATA.get_windows("menu_bar/button_zhuye/window").SetProperty("text_theme","雍和宫主页");
					
					// FUNCTION_DATA.get_windows("menu_bar/button_shijiaoqiehuan/window").SetProperty("text_theme","法物流通");
					// FUNCTION_DATA.get_windows("menu_bar/button_shijiaoqiehuan").SetProperty("button_bg","set:help image:france_hover");
					// FUNCTION_DATA.get_windows("shijiaoqiehuan_button/image").SetProperty("image","set:help image:france_normal" );
				}
			},
			
			//选择发型
			ChooseWepon_hair:function(){
				var bar_nan = GUI.RadioButton.Get("select/bar_one");
				var bar_nv = GUI.RadioButton.Get("select/bar_two");
				var hair;
				if(bar_nv.GetProperty("Selected")=="True"){
					var root = GUI.GUISheet.Get("select_person/bar_two");
					if(!root)
					{
						CONSOLE.Write("\n Failed to Get '" + root.name + "' \n");	    
					}
					
					for(var index=0;index< root.childCount;index++)
					{
						var child_hair_window = root.GetChildAtIdx(index);
						
						if(child_hair_window.GetProperty("Selected")=="True"){
							//alert(child_hair_window.name);
							//hair = child_hair_window.GetProperty("button_bg");
							if(child_hair_window.GetProperty("button_bg") == "set:reloading image:woman_hair1"){
								hair = "toufa2"
							}
							if(child_hair_window.GetProperty("button_bg") == "set:reloading image:woman_hair2"){
								hair = "toufa1"
							}
						}
						
					}
					//alert(hair);
					Event.Send({
						name:"ui.click.woman.hair",
						self:player,
						image:hair
					});
				}else if(bar_nan.GetProperty("Selected")=="True"){
					var root = GUI.GUISheet.Get("select_person/nan_bar_two");
					if(!root)
					{
						CONSOLE.Write("\n Failed to Get '" + root.name + "' \n");	    
					}
					
					for(var index=0;index< root.childCount;index++)
					{
						var child_hair_window = root.GetChildAtIdx(index);
						
						if(child_hair_window.GetProperty("Selected")=="True"){
							if(child_hair_window.GetProperty("button_bg") == "set:reloading image:man_hair1"){
								hair = ["toufa2",""];
							}
							if(child_hair_window.GetProperty("button_bg") == "set:reloading image:men_hair2"){
								hair = ["toufa1","maozi"];
							}
							
						}
						
					}
					//alert(hair);
					Event.Send({
						name:"ui.click.man.hair",
						self:player,
						image:hair
					});
				}
			},
			//选择衣服
			ChooseWepon_clothese:function(){
				var bar_nan = GUI.RadioButton.Get("select/bar_one");
				var bar_nv = GUI.RadioButton.Get("select/bar_two");
				var clothese;
				if(bar_nv.GetProperty("Selected")=="True"){
					var root = GUI.GUISheet.Get("select_person/bar_one");
					if(!root)
					{
						CONSOLE.Write("\n Failed to Get '" + root.name + "' \n");	    
					}
					
					for(var index=0;index< root.childCount;index++)
					{
						var child_clothese_window = root.GetChildAtIdx(index);
						
						if(child_clothese_window.GetProperty("Selected")=="True"){
							if(child_clothese_window.GetProperty("button_bg") == "set:reloading image:woman_dress1"){
								clothese = "yifu2"
							}
							if(child_clothese_window.GetProperty("button_bg") == "set:reloading image:woman_dress2"){
								clothese = "yifu4"
							}
						}
						
					}
					//alert(clothese);
					Event.Send({
						name:"ui.click.woman.clothes",
						self:player,
						image:clothese
					});
				}else if(bar_nan.GetProperty("Selected")=="True"){
					var root = GUI.GUISheet.Get("select_person/nan_bar_one");
					if(!root)
					{
						CONSOLE.Write("\n Failed to Get '" + root.name + "' \n");	    
					}
					
					for(var index=0;index< root.childCount;index++)
					{
						var child_clothese_window = root.GetChildAtIdx(index);
						
						if(child_clothese_window.GetProperty("Selected")=="True"){
							if(child_clothese_window.GetProperty("button_bg") == "set:reloading image:men_dress1"){
								clothese = ["yifu1","kuzi1"];
							}
							if(child_clothese_window.GetProperty("button_bg") == "set:reloading image:men_dress2"){
								clothese = ["yifu2","kuzi2"];
							}
						}
						
					}
					//alert(clothese);
					Event.Send({
						name:"ui.click.man.clothes",
						self:player,
						image:clothese
					});
				}
				
			},
			youxuan : function(){
				Event.Send({
						name:"player.effect.rotateleft2",
						self:player
					});
			},
			youxuanstop : function(){
				Event.Send({
						name:"player.effect.rotateleft2.stop",
						self:player
					});
			},
			zuoxuan : function(){
				Event.Send({
						name:"player.effect.rotateright2",
						self:player
					});
			},
			zuoxuanstop : function(){
				Event.Send({
						name:"player.effect.rotateright2.stop",
						self:player
					});
			},
			choose_lan_click : function(){
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
			},
			english_or_chinese_click : function(){
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","False");
				//切换语言
				if(this.lan == "english"){
					player.reloading_lan_state = "english";
					for(var index in RELOAD_LAN_ENGLISH){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in RELOAD_LAN_ENGLISH[index]){
							window_name.SetProperty(i,RELOAD_LAN_ENGLISH[index][i]);
						}
					}
					LANGUAGE_STATE.state = "english";
				}else{
					player.reloading_lan_state = "chinese";
					for(var index in RELOAD_LAN_CHINESE){
						var window_name = FUNCTION_DATA.get_windows(index);
						for(var i in RELOAD_LAN_CHINESE[index]){
							window_name.SetProperty(i,RELOAD_LAN_CHINESE[index][i]);
						}
					}
					LANGUAGE_STATE.state = "chinese";
				}
			}	
			
		},
		window : {
			"select/bar_one":{
			   property:{
			      associatedWindow:function(obj,propt_name){
					GUI.System.SetDefaultMouseCursor("zhucaidan","mouse_jian");
				     obj[propt_name]=["select/bar_one_window","select/bar_two_window"];
				  }
			   },
			   event:{
			      "MouseClick":"ChooseMenAndWomen",				 
			   },
			   subscribe:{}
			},
			"select/bar_two":{
			   property:{
			      associatedWindow:function(obj,propt_name){
				     obj[propt_name]=["select/bar_two_window","select/bar_one_window"];
				  }
			   },
			   event:{
			      "MouseClick":"ChooseMenAndWomen",				 
			   },
			   subscribe:{}
			},
			"weapon_hair_nvone":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_hair",				 
			   },
			   subscribe:{}
			},
			"weapon_hair_nvtwo":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_hair",				 
			   },
			   subscribe:{}
			},
			"weapon_clothes_nvone":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_clothese",				 
			   },
			   subscribe:{}
			},
			"weapon_clothes_nvtwo":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_clothese",				 
			   },
			   subscribe:{}
			},
			"weapon_hair_nanone":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_hair",				 
			   },
			   subscribe:{}
			},
			"weapon_hair_nantwo":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_hair",				 
			   },
			   subscribe:{}
			},
			"weapon_clothes_nanone":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_clothese",				 
			   },
			   subscribe:{}
			},
			"weapon_clothes_nantwo":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_clothese",				 
			   },
			   subscribe:{}
			},
			"select_person/ok":{
				property:{
				 
			   },
			   event:{
			      "MouseClick":"ChooseWepon_ok",				 
			   },
			   subscribe:{}
			},
			"button/zuoxuan":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{0.0817791,0},{0.928054,0},{"+parseFloat(0.0817791+(0.192241-0.0817791)*UpdateWidth)+",0},{0.973573,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.0817791,0},{0.928054,0},{0.192241,0},{"+parseFloat(0.928054+(0.973573-0.928054)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{
			      "MouseButtonDown":"zuoxuan",
				  "MouseButtonUp":"zuoxuanstop"
			   },
			   subscribe:{}
			},
			"button/youxuan":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{0.350334,0},{0.928054,0},{"+parseFloat(0.350334+(0.461773-0.350334)*UpdateWidth)+",0},{0.975059,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.350334,0},{0.928054,0},{0.461773,0},{"+parseFloat(0.928054+(0.975059-0.928054)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{
			      "MouseButtonDown":"youxuan",
				  "MouseButtonUp":"youxuanstop"
			   },
			   subscribe:{}
			},
			"reloading/bar":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.575628,0},{0.162648,0},{0.898869,0},{0.807858,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.575628,0},{0.162648,0},{"+parseFloat(0.575628+(0.898869-0.575628)*UpdateWidth)+",0},{0.807858,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.575628,0},{0.162648,0},{0.898869,0},{"+parseFloat(0.162648+(0.807858-0.162648)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{},
			   subscribe:{}
			},
			"select_person/choose_lan":{
			   property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["select_person/choose_lan_bg"];
					},
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{0.677914,0},{0.0387148,0},{"+parseFloat(0.677914+(0.818236-0.677914)*UpdateWidth)+",0},{0.0724829,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.677914,0},{0.0387148,0},{0.818236,0},{"+parseFloat(0.0387148+(0.0724829-0.0387148)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{
			      "MouseClick":"choose_lan_click"
			   },
			   subscribe:{}
			},
			"select_person/choose_lan_bg":{
			   property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{0.677914,0},{0.0709357,0},{"+parseFloat(0.677914+(0.818236-0.677914)*UpdateWidth)+",0},{0.146414,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.677914,0},{0.0709357,0},{0.818236,0},{"+parseFloat(0.0709357+(0.146414-0.0709357)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{},
			   subscribe:{}
			},
			"select_person/choose_lan_chinese":{
			   property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["select_person/choose_lan_bg"];
					},
					lan :function (obj,propt_name){
						obj[propt_name]="chinese";
					}
			   },
			   event:{
			      "MouseClick":"english_or_chinese_click"
			   },
			   subscribe:{}
			},
			"select_person/choose_lan_english":{
			   property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["select_person/choose_lan_bg"];
					},
					lan :function (obj,propt_name){
						obj[propt_name]="english";
					}
			   },
			   event:{
			      "MouseClick":"english_or_chinese_click"
			   },
			   subscribe:{}
			}
		}
	}	
} catch( e )
{
	alert( e );
}