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
	SAND_ENTRY ={
		sand_entry : "entry"
	},
	ZHUCAIDAN_LAYOUT = {
		name : "zhucaidan.layout",
		method : {
			setVisibles : function (){
				
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				//隐藏搜索功能的UI
				if(FUNCTION_DATA.get_windows(this.searchWindow[0]).GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_show(this.associatedWindow);
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					//alert("anim is undefined and createAnimation Start \n");
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					var bool="False";
					//按钮名
					var buttons=new Array();
					buttons[0]="one_manyou_one";
					buttons[1]="one_manyou_two";
					buttons[2]="two_manyou_one";
					buttons[3]="two_manyou_two";
					
					var zuobiao=new Array();
					zuobiao[0]="{{-0.22748,0},{0.149508,0},{0.167848,0},{0.341381,0}}";
					zuobiao[1]="{{0.257019,0},{0.155535,0},{0.652349,0},{0.353435,0}}";
					zuobiao[2]="{{-0.227329,0},{0.524423,0},{0.176128,0},{0.722243,0}}";
					zuobiao[3]="{{0.262739,0},{0.53045,0},{0.666195,0},{0.722243,0}}";
					var j=0;
					for(var i=0; i<buttons.length;i++){
						for(var index in JSON_WANDER["wander_route"]){
							if(index==buttons[i]){
								FUNCTION_DATA.get_windows(index).SetProperty("text_theme",JSON_WANDER["wander_route"][index]["chinese_name"]);
								FUNCTION_DATA.get_windows(index).SetProperty("UnifiedAreaRect",zuobiao[j]);
								FUNCTION_DATA.get_windows(index).SetProperty("Visible","True");
								j++
								break;
							}
						}
					}
				}else{
					//执行动画
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					//alert("anim is undefined and createAnimation Start \n");
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					//System.Sleep(5000);
					Event.Send({
							name : "player.ui.Animations.close",
							window : this.associatedWindow[0]
					});
					//关闭窗口
					//FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","False");
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					for (var i = 0;i<menu_window.childCount;i++ )
					{
						var menu_name = menu_window.GetChildAtIdx(i);
						menu_name.SetProperty("Selected","False");
					}	
				}
				//点击漫游--关闭按钮，显示搜索编辑框
				if(this.name == "manyou/close_button"){
					FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","True");
				}
				if(this.name == "menu_bar/button_xiaoyuanjieshao" || this.name == "menu_bar/button_shezhi" || this.name == "menu_bar/button_yuyanqiehuan" || this.name == "menu_bar/button_manyou" || this.name == "menu_bar/button_bangzhu"){
					//判断是否为漫游---设置搜索编辑框隐藏/显示
					if(this.name == "menu_bar/button_manyou"){
						var search_Win = FUNCTION_DATA.get_windows("serch/menu_bar");
						var isVisible = search_Win.GetProperty("Visible");
						if (isVisible == "True") 
						{
							FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","False");
						}
						else
						{
							FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","True");
						}
					}
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					var top_menu = FUNCTION_DATA.get_windows("zhucaidan/menu_bar_up");
					for(var i = 0;i<menu_window.childCount;i++){
						var bar_name = menu_window.GetChildAtIdx(i);
						if(i<5){
								bar_name.GetChildAtIdx(0).SetProperty("image","set:zhucaidan_button_"+(i+1)+"-normal image:full_image");
								continue;
						}
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							//alert(other_image.split("_")[0]);
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
							
						}
					}
					for(var i = 0;i<top_menu.childCount;i++){
						var bar_name = top_menu.GetChildAtIdx(i);
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							//alert(other_image.split("_")[0]);
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
							
						}
					}
					
					for (var i = 0;i<this.childCount;i++ )
					{
						var window_name = this.GetChildAtIdx(i);
						window_name.SetProperty("image",this.GetProperty("button_bg"));
					}
				}
			},
			/*	修改--快速定位kuaisudingwei方法 动态创建位置按钮 岳朝凤 2012-6-13	*/
			kuaisudingwei:function(){
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				/*	调用setVisible方法	*/
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_show(this.associatedWindow);
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
				}else{
					//执行动画
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					Event.Send({
							name : "player.ui.Animations.close",
							window : this.associatedWindow[0]
					});
					//关闭窗口
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					for (var i = 0;i<menu_window.childCount;i++ )
					{
						var menu_name = menu_window.GetChildAtIdx(i);
						menu_name.SetProperty("Selected","False");
					}	
				}
				
				if(this.name == "menu_bar/button_xiaoyuanjieshao" || this.name == "menu_bar/button_shezhi" || this.name == "menu_bar/button_yuyanqiehuan" || this.name == "menu_bar/button_manyou" || this.name == "menu_bar/button_bangzhu"){
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					var top_menu = FUNCTION_DATA.get_windows("zhucaidan/menu_bar_up");
					for(var i = 0;i<menu_window.childCount;i++){
						var bar_name = menu_window.GetChildAtIdx(i);
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
						}
					}
					for(var i = 0;i<top_menu.childCount;i++){
						var bar_name = top_menu.GetChildAtIdx(i);
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
							
						}
					}
					
					for (var i = 0;i<this.childCount;i++ )
					{
						var window_name = this.GetChildAtIdx(i);
						window_name.SetProperty("image",this.GetProperty("button_bg"));
					}
				}
				
				/*	动态创建快速定位按钮	*/
				//判断是否需要动态创建按钮
				if(player.is_create_dingwei_btn){
					//获取父窗口
					var map_bg = FUNCTION_DATA.get_windows("kuaisudingwei/map_bg");
					var createButton = new Array;
					for(var index in POSITION_DATA){
						var info = "kuaisudinwei/dingwei" + index;
						//创建button
						var button = GUI.Windows.CreateWindow("General/RadioButton",info);
						//设置window属性
						//设置button的其他属性
						button.SetProperty("HoverImage","set:kuaisudingwei image:kuaisudingwei_btn");
						button.SetProperty("text_theme",POSITION_DATA[index].name.chinese_name);
						
						button.SetProperty("NormalImage","set:kuaisudingwei image:kuaisudingwei_btn");
						button.SetProperty("SelectedImage","set:kuaisudingwei image:kuaisudingwei_btn");
						button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
						button.SetProperty("SelectedTextColour","FF000000");
						//按钮name大于4的时候加长
						if(POSITION_DATA[index].name.chinese_name.length>4){
							var t= new Array();
							t=POSITION_DATA[index].ui_position;
							var a=t.split("},{");
							a=a[2].split(",0");
							i = parseFloat(a[0]);
							var y=i+(POSITION_DATA[index].name.chinese_name.length-4)*0.03;
						    a=t.toString();
							a=a.replace("{"+i+",0}","{"+y+",0}");
							button.SetProperty("UnifiedAreaRect",a);
						}else{
							button.SetProperty("UnifiedAreaRect",POSITION_DATA[index].ui_position);
						}
						button.SetProperty("NormalTextColour","FF000000");
						button.SetProperty("SelectedTextColour","FF000000");
						//设置创建button的父窗口
						button.parent=map_bg;
						createButton.push(button.name);
						player.dingwei_btn = createButton;
						/*	button触发事件	*/
						//屏蔽鼠标点击地面行走事件
						FUNCTION_DATA.get_windows(player.dingwei_btn[index]).Subscribe(GUI.Windows.MouseEntersArea,function(){
							Event.Send({
								name : "ui.mouse.hover.isrolemove"
							});
						});
						// FUNCTION_DATA.get_windows(player.dingwei_btn[index]).Subscribe(GUI.Windows.MouseLeavesArea,function(){
							// Event.Send({
								// name : "ui.mouse.out.isrolemove"
							// });
						// });
						//点击位置按钮--快速定位
						FUNCTION_DATA.get_windows(player.dingwei_btn[index]).Subscribe(GUI.Windows.MouseClick,function(){
							for(var i = 0 ; i<player.dingwei_btn.length ; i++){
								var locate_btn = FUNCTION_DATA.get_windows(player.dingwei_btn[i]);
								if(locate_btn.GetProperty("Selected")=="True"){
									var pos_name = locate_btn.GetProperty("text_theme");
									for(var index in POSITION_DATA)
									{
										if(POSITION_DATA[index].name.chinese_name == pos_name || POSITION_DATA[index].name.english_name == pos_name){
											Event.Send({
												name : "player.effect.quick.arrive.position",
												player : player,
												id : POSITION_DATA[index]
											});
										}
									}
								}
								/*	调用set_visible方法	*/
								var show_window = FUNCTION_DATA.get_windows("zhucaidan/kuaisudingwei");
								if(!show_window)
								{
									CONSOLE.Write("\n Failed to Get '" + show_window.name + "' \n");	    
								}
								var isVisible = show_window.GetProperty("Visible");
								if (isVisible == "True") {
									show_window.SetProperty("Visible","False");
								}
							}
						});
					}
					player.is_create_dingwei_btn = false;
				}
				//判断当前的语言状态---修改button名称
				if(LANGUAGE_STATE.state =="chinese"){
					for(var i = 0 ; i<player.dingwei_btn.length ; i++){
						var button = FUNCTION_DATA.get_windows(player.dingwei_btn[i]);
						button.SetProperty("text_theme",POSITION_DATA[i].name.chinese_name);
					}
				}else{
					for(var i = 0 ; i<player.dingwei_btn.length ; i++){
						var button = FUNCTION_DATA.get_windows(player.dingwei_btn[i]);
						button.SetProperty("text_theme",POSITION_DATA[i].name.english_name);
					}
				}
			},
			/*	360全景展示	*/
			enter_full_view:function(){
			
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				player.role_ok = "false";
				//记录角色的上一个状态
				player.previous_forward_state = player.current_forward_state;
				var id = player.fview_id;
				
				//隐藏主菜单ui
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				FUNCTION_DATA.set_hide(windowse);
				//隐藏是否进入全景展示提示框
				FUNCTION_DATA.set_visibles(this.hideWindow);
				//显示 "返回" 和 "下一个门" 按钮
				if(FUNCTION_DATA.get_windows(this.showWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_show(this.showWindow);
				}
				
				/* 	设置环境亮度 <ambient> 和 太阳光 <light>	*/
				//获取sectorList
				var sectorList = engine.sectors;
				//获取sector
				var sector = sectorList.Get(0);
				//将进入全景时的环境光亮度值记录下来
				player.FV_ambient = sector.ambient;
				//将环境光亮度值提高
				sector.ambient = ([1.0,1.0,1.0]);
				//获取lightlist
				var lightlist = sector.lights ;
				//获取light
				var light = lightlist.Get(0);
				//获取并记录太阳光的值
				player.FV_light = light.color;
				//设置太阳光的值
				light.color = ([0,0,0]);
				
				//获取并记录进入全景展示之前的坐标信息
				player.befFV_pos = player.pcarray['pcmesh'].position;
				player.befFV_rot = player.pcarray['pcmesh'].rotation;
				//更换Box贴图
				// Event.Send({
					// name : "change.box.textures",
					// id : id
				// });
				
				player.pcarray['pcmesh'].SetVisible(false);
				//切换绑定的meshobj
				player.pcarray['pcmesh'].SetMesh("mesh_camera");
				
				//将人物定位到6面贴图盒子中心--比如[0,0,0] 点
				player.pcarray['pcmesh'].MoveMesh([1.979339599609375,-90,1.4561538696289062],[0,0,0]);
				
				//设置为第三人称视角 --否则有bug
				if(player.personMode == "firstperson"){
					iCamera.pcarray['pcdefaultcamera'].SetCamera("thirdperson");
				}
				
				// 修改移动速度
				player.pcarray['pcactormove'].PerformAction
				(
					'SetSpeed', 
						['movement', 0.2 ], 
						['running', 0.2 ], 
						['rotation', 0.2 ], 
						['jumping', 0.2 ]
				);
				//设置自动旋转
				player.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);
				player.isRotateRight = true;
				//这里需要设置一个变量，屏蔽键盘的其他操作
				player.isFullView = true;
				//屏蔽鼠标点击事件
				player.canMouseCtrlMove = false;
				player.is_close_MouseAxis0 = true ;
			},
			no_enter_full_view:function(){
				//隐藏是否进入全景展示提示框
				FUNCTION_DATA.set_visibles(this.hideWindow);
			},
			full_view_Instruction:function(){
				//	显示操作说明
				FUNCTION_DATA.set_visibles(this.showWindow);
			},
			full_view_Instruction_close:function(){
				//	隐藏操作说明
				FUNCTION_DATA.set_visibles(this.hideWindow);
			},
			exit_full_view:function(){
				
				player.role_ok = "ok";
				var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
				for (var i = 0;i<menu_window.childCount;i++ )
				{
					var menu_name = menu_window.GetChildAtIdx(i);
					menu_name.SetProperty("Selected","False");
				}
				//隐藏 "返回" 和 "下一个门" 按钮
				FUNCTION_DATA.set_hide(this.hideWindow);
				//其他UI的显示/隐藏
				FUNCTION_DATA.set_visibles(this.showWindow);
				
				/* 	还原太阳光和环境亮度值	*/
				//获取sectorList
				var sectorList = engine.sectors;
				//获取sector
				var sector = sectorList.Get(0);
				//将环境光亮度值设置为进入全景之前的值---还原
				sector.ambient = player.FV_ambient;
				//获取lightlist
				var lightlist = sector.lights ;
				//获取light
				var light = lightlist.Get(0);
				//还原太阳光
				light.color = player.FV_light;
				
				//不屏蔽键盘事件
				player.isFullView = false;
				//屏蔽鼠标点击事件
				player.canMouseCtrlMove = true;
				
				//还原人物当时状态	切换绑定的meshobj	判断人物性别
				if(player.sex == "nv"){
					player.pcarray['pcmesh'].SetMesh("woman");
				}
				if(player.sex == "nan"){
					player.pcarray['pcmesh'].SetMesh("man");
				}
				
				player.pcarray['pctimer'].PerformAction('Clear', ['name','setPlayerVisible']);
				//启动pctimer，让人物显示出来
				player.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', false], 
					['name', 'setPlayerVisible']
				);
				
				//切换到相应人称视角
				if(player.personMode == "firstperson"){
					iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','firstperson']);
				}else{
					// 如果是第三人称 , 则显示角色
					player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
				}
				
				//返回进入全景展示之前的坐标
				var back_pos = player.befFV_pos;
				var back_rot = player.befFV_rot;
				player.pcarray['pcmesh'].MoveMesh(
					[
						back_pos.x,
						back_pos.y,
						back_pos.z
					],
					[
						back_rot.x,
						0-back_rot.y,
						back_rot.z
					]
				);
				
				//停止旋转
				Event.Send({
					name : "player.effect.rotateright.stop",
					player : player
				});
				// 将角色的状态修改为前一个状态
				player.current_forward_state = player.previous_forward_state;
			},
			from_next_gate_exit:function(){
				
				player.role_ok = "ok";
				var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
				for (var i = 0;i<menu_window.childCount;i++ )
				{
					var menu_name = menu_window.GetChildAtIdx(i);
					menu_name.SetProperty("Selected","False");
				}
				//隐藏 "返回" 和 "下一个门" 按钮
				FUNCTION_DATA.set_hide(this.hideWindow);
				//其他UI的显示/隐藏
				FUNCTION_DATA.set_visibles(this.showWindow);
				
				//获取sectorList
				var sectorList = engine.sectors;
				//获取sector
				var sector = sectorList.Get(0);
				//将环境光亮度值设置为进入全景之前的值---还原
				sector.ambient = player.FV_ambient;
				//获取lightlist
				var lightlist = sector.lights ;
				//获取light
				var light = lightlist.Get(0);
				//还原太阳光
				light.color = player.FV_light;
				
				//不屏蔽键盘事件
				player.isFullView = false;
				//屏蔽鼠标点击事件
				player.canMouseCtrlMove = true;
				
				//还原人物当时状态	切换绑定的meshobj	判断人物性别
				if(player.sex == "nv"){
					player.pcarray['pcmesh'].SetMesh("woman");
				}
				if(player.sex == "nan"){
					player.pcarray['pcmesh'].SetMesh("man");
				}
				//启动pctimer，让人物显示出来
				player.pcarray['pctimer'].PerformAction('Clear', ['name','setPlayerVisible']);
				player.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', false], 
					['name', 'setPlayerVisible']
				);
				//切换到相应人称视角
				if(player.personMode == "firstperson"){
					iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','firstperson']);
				}else{
					// 如果是第三人称 , 则显示角色
					player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
				}
				
				//退出全景展示定位到另一个点
				var id = player.fview_id;
				player.pcarray['pcmesh'].MoveMesh
				(
					[
						FULL_VIEW_POSITION[id].next_gate.next_pos_x,
						FULL_VIEW_POSITION[id].next_gate.next_pos_y,
						FULL_VIEW_POSITION[id].next_gate.next_pos_z
					],
					[
						0,
						0-FULL_VIEW_POSITION[id].next_gate.next_rot_y,
						0
					]
				);
				
				//停止旋转
				Event.Send({
					name : "player.effect.rotateright.stop",
					player : player
				});
				// 将角色的状态修改为前一个状态
				player.current_forward_state = player.previous_forward_state;
			},
			
			//视角控制按钮按下时
			controlDown :function (){
				switch (this.control)
				{
				case "turn_left":
					Event.Send({
						name : "player.effect.rotateleft",
						player : player
					});
					break;
				case "turn_right":
					Event.Send({
						name : "player.effect.rotateright",
						player : player
					});
					break;
				case "turn_up":
					Event.Send({
						name : "player.effect.rotateup_shijiaokongzhi", //wangxin update
						player : player
					});
					break;
				case "turn_down":
					Event.Send({
						name : "player.effect.rotatedown_shijiaokongzhi",// wangxin update
						player : player
					});
					break;
				case "move_left":
					Event.Send({
						name : "player.effect.StrafeLeft",
						player : player
					});
					break;
				case "move_right":
					Event.Send({
						name : "player.effect.StrafeRight",
						player : player
					});
					break;
				case "move_up":
					Event.Send({
						name : "player.effect.StrafeUp",
						player : player
					});
					break;
				case "move_down":
					Event.Send({
						name : "player.effect.StrafeDown",
						player : player
					});
					break;
				case "move_ahead":
					Event.Send({
						name : "player.effect.forward.begin",
						player : player
					});
					break;
				case "move_back":
					Event.Send({
						name : "player.effect.backward",
						player : player
					});
					break;
				default:
					break;
				}
			},
			//视角控制按钮松开时
			controlUp :function () {
				switch (this.control)
				{
				case "turn_left":
					Event.Send({
						name : "player.effect.rotateleft.stop",
						player : player
					});
					break;
				case "turn_right":
					Event.Send({
						name : "player.effect.rotateright.stop",
						player : player
					});
					break;
				case "turn_up":
					Event.Send({
						name : "player.effect.rotateup.stop_shijiaokongzhi",// wangxin update
						player : player
					});
					break;
				case "turn_down":
					Event.Send({
						name : "player.effect.rotatedown.stop_shijiaokongzhi", //wangxin update
						player : player
					});
					break;
				case "move_left":
					Event.Send({
						name : "player.effect.StrafeLeft.stop",
						player : player
					});
					break;
				case "move_right":
					Event.Send({
						name : "player.effect.StrafeRight.stop",
						player : player
					});
					break;
				case "move_up":
					Event.Send({
						name : "player.effect.StrafeUp.stop",
						player : player
					});
					break;
				case "move_down":
					Event.Send({
						name : "player.effect.StrafeDown.stop",
						player : player
					});
					break;
				case "move_ahead":
					Event.Send({
						name : "player.effect.forward.stop",
						player : player
					});
					break;
				case "move_back":
					Event.Send({
						name : "player.effect.backward.stop",
						player : player
					});
					break;
				default:
					break;
				}
			},
			//校园介绍选项卡的切换
			/****************************************************
			this.root : 要关闭和隐藏的窗口的根窗口 
			this.num : 在此根窗口下，显示或隐藏的窗口开始的小标的最小值
			******************************************************/
			setSelectTab : function (){
				// if(this.url){
					// var path =System.StartupPath()+"\\ui\\website\\";
					// var pa = path.replace(/[\/\\]/g,'\\');
					// System.Open(this.url,pa);
				// }
				var windows = new Array;
				var name = this.name+"/window";
				//windows.push(name);
				
				var roots = FUNCTION_DATA.get_windows(this.root);
				for (var i = this.num;i<roots.childCount;i++ )
				{
					var window_name = roots.GetChildAtIdx(i);
					windows.push(window_name.name);
				}
				FUNCTION_DATA.set_hide(windows);
				FUNCTION_DATA.set_show([name]);
			},
			display_tishi : function (){
				
				player.mini_map_state = "true";
				var anim = GUI.Animations.GetAnimation("set_menu_alpha_one");
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				//alert("anim is undefined and createAnimation Start \n");
				var instant = GUI.Animations.InstantiateAnimation(anim);
				var image = FUNCTION_DATA.get_windows(this.GetChildAtIdx(0).name);
			//	alert(image.name);
				instant.SetTargetWindow(image);
				instant.Start();
				var wnd = FUNCTION_DATA.get_windows(this.name + "/window");
				//alert(wnd.name);
				if(wnd){
					wnd.SetProperty("Visible","True");
				}
				////CONSOLE.WriteLine("enter!");
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
			},
			cancel_tishi : function (){
				//alert(222);
				player.mini_map_state = "false";
				// var window = FUNCTION_DATA.get_windows(this.assoWindow[0]);
				// if(window.GetProperty("Visible")=="True"){
					// FUNCTION_DATA.set_hide(this.assoWindow);
				// }
				
				var anim = GUI.Animations.GetAnimation("set_menu_alpha_two");
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				var instant = GUI.Animations.InstantiateAnimation(anim);
				var image = FUNCTION_DATA.get_windows(this.GetChildAtIdx(0).name);
				instant.SetTargetWindow(image);
				instant.Start();
				var wnd = FUNCTION_DATA.get_windows(this.name + "/window");
				if(wnd){
					
					wnd.SetProperty("Visible","False");
				}
				////CONSOLE.WriteLine("leave!");
				Event.Send({
						name : "ui.mouse.out.isrolemove"
				});
			},
			click_set_gaoliang_image : function(){
				var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
				var top_menu = FUNCTION_DATA.get_windows("zhucaidan/menu_bar_up");
				for(var i = 0;i<menu_window.childCount;i++){
					
					var bar_name = menu_window.GetChildAtIdx(i);
				    //	alert( bar_name.GetChildAtIdx(0).name+"1111111111111");
					 if(i<5){
					    bar_name.GetChildAtIdx(0).SetProperty("image","set:zhucaidan_button_"+(i+1)+"-normal image:full_image");
						//alert("set:zhucaidan_button_"+(i+1)+"-normal image:full_image");					
					    continue;
					 }
				
					var other_image = "";
					other_image = bar_name.GetProperty("button_bg").split("image:")[1];
					if(other_image){
						//alert(other_image.split("_")[0]);
						bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
					}
				}
				for(var i = 0;i<top_menu.childCount;i++){
						var bar_name = top_menu.GetChildAtIdx(i);
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							//alert(other_image.split("_")[0]);
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
						
						}
					}
				//alert(player.window_name_bar_choose);
				
				menu =  FUNCTION_DATA.get_windows(player.window_name_bar);
				//alert(player.window_name_bar);
				for (var i = 0;i<menu.childCount;i++ )
				{
					var window_name = menu.GetChildAtIdx(i);
					
					 if(window_name.name.substring(0,6)=="linshi"){
						//window_name.name.substring(7);
						var t = window_name.name.substring(7);
						window_name.SetProperty("image","set:zhucaidan_button_"+t+"-hover image:full_image");
					   // alert();
					    continue;
					 }
					
					window_name.SetProperty("image",menu.GetProperty("button_bg"));
				}
				
				
			},
			//take photos
			paizhao : function (){
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				//判断是否是雍和宫项目
				// if(JSON_SCHOOL["WindowSetting"]["title"]=="雍和宫"){
					// player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[125.8470,0.0,-339.2792]],['rotation',[0,-3.1316,0]]);
				// }else{
					Event.Send({
						name : "effect.take.photos",
						self : player
					});
				// }
			},
			tishikuang_Window_close_button_Clicked : function (){//王鑫修改(2012-06-09)
				FUNCTION_DATA.get_windows("zhucaidan/tishikuang_Window/erji").SetProperty("Visible","False");
			},
			//查看大照片
			click_photos_look : function (){
				var big_bg_image_data =	FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("bg_image");
				if(big_bg_image_data!=""){
					FUNCTION_DATA.get_windows("tishikuang_Window/datu").SetProperty("bg_image",big_bg_image_data);
					FUNCTION_DATA.set_hide(this.image_window);
					FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","True");
				}
			},
			tishikuang_erji_close : function(){
				FUNCTION_DATA.get_windows("zhucaidan/tishikuang_Window/erji").SetProperty("Visible","False");
			},
			//关闭相片ui
			click_close_look : function (){
				FUNCTION_DATA.get_windows("zhucaidan/tishikuang_Window/erji").SetProperty("Visible","False");
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(this.image_window);
					FUNCTION_DATA.set_visibles(this.associatedWindow);
					FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","True");
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					//alert("anim is undefined and createAnimation Start \n");
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					
				}else{
					//执行动画
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					//alert("anim is undefined and createAnimation Start \n");
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					//System.Sleep(5000);
					Event.Send({
							name : "player.ui.Animations.close",
							window : this.associatedWindow[0]
					});
				}
			},
			zoupaoqiehuan : function (){
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				this.SetProperty("Selected","False");
				var sel = FUNCTION_DATA.get_windows(this.selected);
				sel.SetProperty("Selected","True");
				if(FUNCTION_DATA.get_windows("menu_bar/button_zoupaoqiehuan").GetProperty("Selected")=="True"){
					Event.Send({
						name : "effect.go.run.change",
						palyer : this,
						start : "zou",
						id : 2
					});
				}else{
					Event.Send({
						name : "effect.go.run.change",
						player : this,
						start : "pao",
						id : 2
					});
				}
				
			},
			
			//hoarse_in 沙盘
			hoarse_in : function (){
				FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				SAND_ENTRY["sand_entry"]="entry_true";
				player.role_ok = "false";
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				FUNCTION_DATA.set_hide(windowse);
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				Event.Send({
						name : "player.effect.hoarse"
					});
				var player_wnd = FUNCTION_DATA.get_windows("sand_table/ren");
				player_wnd.jointPivot=[player.current_position.x,player.current_position.y,player.current_position.z];
				player_wnd.jointMethod = 5;
				player_wnd.SetProperty("Visible" , "True");
				player_wnd.jointVisibleCtrl = true;
				var sand_wnd = FUNCTION_DATA.get_windows("school_sand/sand");
				for (var i = 0; i<sand_wnd.childCount; i++)
				{
					var child_wnd = sand_wnd.GetChildAtIdx(i);
					child_wnd.jointVisibleCtrl = false;
					child_wnd.SetProperty("Visible","False");
				}
				 for (var index in this.image_window)
				 {
					 var image_wnd = FUNCTION_DATA.get_windows(this.image_window[index]);
					 image = image_wnd.GetProperty("image");
					// alert(image.lastIndexOf("-"));
					// var str = image.substring(image.lastIndexOf("-"),20);
					// str = str.substring(str.lastIndexOf(" "));
				
					 
					 image_wnd.SetProperty("image",image);
				 }
				if(this.select_window)
				{
					var select = FUNCTION_DATA.get_windows(this.select_window);
					for (var i =0 ; i < select.childCount ; i++)
					{
						var select_wnd = select.GetChildAtIdx(i);
						if(select_wnd.GetProperty("Selected") == "True")
						{
							var show = FUNCTION_DATA.get_windows(SAND_DATA[select_wnd.name]);
							show.jointVisibleCtrl = true;
							show.SetProperty("Visible","True");
							break;
						}
					}
				}
			},
			//沙盘返回
			backing_out_hoarse :  function () {
				player.role_ok = "ok";
				player.is_in_shapan = "false";
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
				for (var i = 0;i<menu_window.childCount;i++ )
				{
					var menu_name = menu_window.GetChildAtIdx(i);
					menu_name.SetProperty("Selected","False");
				}
				if(this.assoWindow){
					FUNCTION_DATA.set_hide(this.assoWindow);
					Event.Send({
						name : "player.effect.hoarse.backing_out"
					});
				}
				if(this.location){
					Event.Send({
						name : "player.effect.quick.to.position_shapan",
						player : player,
						id : SAND_TABLE[SAND_TABLE_STATE]
					});
				}
				var player_wnd = FUNCTION_DATA.get_windows("sand_table/ren");
				player_wnd.jointVisibleCtrl = false;
				player_wnd.SetProperty("Visible" , "False");
				FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","True");
				if(GUI.Windows.IsWindowPresent("school_sand_serch/hoarse_mark")){
					FUNCTION_DATA.get_windows("school_sand_serch/hoarse_mark").jointVisibleCtrl = false;
					FUNCTION_DATA.get_windows("school_sand_serch/hoarse_mark").SetProperty("Visible","False");
				}
				FUNCTION_DATA.get_windows("serch/content_info").SetProperty("Visible","False");
				FUNCTION_DATA.get_windows("school_sand_serch/window/info").SetProperty("Visible","False");
				//FUNCTION_DATA.get_windows("shapan_bg/introschool").jointVisibleCtrl = false;
				FUNCTION_DATA.get_windows("shapan_bg/introschool").SetProperty("Visible","False");
				FUNCTION_DATA.get_windows("school_sand").SetProperty("Visible","False");
			},
			//沙盘介绍移入
			shapan_bg_introschool_Enter : function (){
				var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				//alert("anim is undefined and createAnimation Start \n");
				var instant = GUI.Animations.InstantiateAnimation(anim);
				instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
				instant.Start();
			},
			//沙盘介绍移出
			shapan_bg_introschool_Leave : function (){
				var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				//alert("anim is undefined and createAnimation Start \n");
				var instant = GUI.Animations.InstantiateAnimation(anim);
				instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
				instant.Start();
			},
			//点击空中漫游
			setmanyou_air: function (){
				FUNCTION_DATA.get_windows(this.assoWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.assoWindow[1]).SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("NormalImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("HoverImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("PushedImage","set:introschool image:tab_hover");
				
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("NormalImage","set:introschool image:tab_normal");
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("HoverImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("PushedImage","set:introschool image:tab_hover");
			},
			//点击地面漫游
			setmanyou_floor: function (){
				FUNCTION_DATA.get_windows(this.assoWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.assoWindow[1]).SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("NormalImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("HoverImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[2]).SetProperty("PushedImage","set:introschool image:tab_hover");
				
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("NormalImage","set:introschool image:tab_normal");
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("HoverImage","set:introschool image:tab_hover");
				FUNCTION_DATA.get_windows(this.assoWindow[3]).SetProperty("PushedImage","set:introschool image:tab_hover");
			},
			//////////漫游路径按钮  调用logic方法
			one_manyou_one_logic: function (){
				player.role_ok = "false";
				FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
				//FUNCTION_DATA.set_visibles(this.associatedWindow);
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				
				FUNCTION_DATA.set_hide(windowse);
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var show = FUNCTION_DATA.get_windows("manyou_kongzhi/zanting/btn");
				show.SetProperty("Visible","True");
				var hide = FUNCTION_DATA.get_windows("manyou_kongzhi/jixu/btn");
				hide.SetProperty("Visible","False");
				Event.Send({
					name : "player.effect.wander.begin",
					value : JSON_WANDER.wander_route.one_manyou_one.sequence_name
				});
			},
			one_manyou_two_logic: function (){
				player.role_ok = "false";
				FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				
				FUNCTION_DATA.set_hide(windowse);
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var show = FUNCTION_DATA.get_windows("manyou_kongzhi/zanting/btn");
				show.SetProperty("Visible","True");
				var hide = FUNCTION_DATA.get_windows("manyou_kongzhi/jixu/btn");
				hide.SetProperty("Visible","False");
				Event.Send({
					name : "player.effect.wander.begin",
					value : JSON_WANDER.wander_route.one_manyou_two.sequence_name
				});
			},
			two_manyou_one_logic: function (){
				player.role_ok = "false";
				FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				
				FUNCTION_DATA.set_hide(windowse);
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var show = FUNCTION_DATA.get_windows("manyou_kongzhi/zanting/btn");
				show.SetProperty("Visible","True");
				var hide = FUNCTION_DATA.get_windows("manyou_kongzhi/jixu/btn");
				hide.SetProperty("Visible","False");
				Event.Send({
					name : "player.effect.wander.begin",
					value : JSON_WANDER.wander_route.two_manyou_one.sequence_name
				});
			},
			two_manyou_two_logic: function (){
				player.role_ok = "false";
				FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				
				FUNCTION_DATA.set_hide(windowse);
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var show = FUNCTION_DATA.get_windows("manyou_kongzhi/zanting/btn");
				show.SetProperty("Visible","True");
				var hide = FUNCTION_DATA.get_windows("manyou_kongzhi/jixu/btn");
				hide.SetProperty("Visible","False");
				Event.Send({
					name : "player.effect.wander.begin",
					value : JSON_WANDER.wander_route.two_manyou_two.sequence_name
				});
			},
			//暂停
			manyou_kongzhi_zanting: function (){
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				Event.Send({
					name : "player.effect.wander.pause"
				});
			},
			//继续
			manyou_kongzhi_jixu: function (){
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				Event.Send({
					name : "player.effect.wander.resume"
				});
			},
			//停止
			manyou_kongzhi_tingzhi: function (){
				player.role_ok = "ok";
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","True");
				Event.Send({
					name : "player.effect.wander.stop"
				});
			},
			//通用按钮
			linshi1 : function (){
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				if(FUNCTION_DATA.get_windows("menu_bar/button_linshi1/window").GetProperty("text_theme")=="法物流通"){
					player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[125.8470,0.0,-339.2792]],['rotation',[0,-3.1316,0]]);
				}
				if(FUNCTION_DATA.get_windows("menu_bar/button_linshi1/window").GetProperty("text_theme")=="祈福墙"){
					player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[125.8470,0.0,-39.2792]],['rotation',[0,-3.1316,0]]);
				}
				
			},
			linshi2 : function (){
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				if(FUNCTION_DATA.get_windows("menu_bar/button_linshi2/window").GetProperty("text_theme")=="法物流通"){
					player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[125.8470,0.0,-339.2792]],['rotation',[0,-3.1316,0]]);
				}
				if(FUNCTION_DATA.get_windows("menu_bar/button_linshi2/window").GetProperty("text_theme")=="祈福墙"){
					player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[125.8470,0.0,-39.2792]],['rotation',[0,-3.1316,0]]);
				}
				
			},
			//视角切换
			shijiaoqiehuan : function (){
					player.window_name_bar = this.menu_window[0];
					ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
					Event.Send({
							name : "effect.camare.change.mode",
							self : player
					 });
				// }
			},
			//xiaoditu
			mini_map_jiantou : function(){
				player.mini_map_state = "true";
				////CONSOLE.WriteLine(player.mini_map_state);
				////CONSOLE.WriteLine("enter!");
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
			},
			mimi_map_leave :function(){
				player.mini_map_state = "false";
				////CONSOLE.WriteLine("leave!");
				if(this.name == "school_sand_serch/window/info"){
					Event.Send({
							name : "ui.mouse.out.isrolemove"
					});
				}
			},
			xiaoyuanjieshao_win : function (){
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				var windowse = new Array;
				var targetType = GUI.Windows.GetTargetType(this.root);
			//CONSOLE.WriteLine(this.root+"              GUI.Windows.GetTargetType             "+targetType);
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					// alert(window_name.name);
					windowse.push(window_name.name);
				}
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_show(this.associatedWindow);
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					//alert("anim is undefined and createAnimation Start \n");
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
				}else{
					//执行动画
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
					Event.Send({
							name : "player.ui.Animations.close",
							window : this.associatedWindow[0]
					});
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					for (var i = 0;i<menu_window.childCount;i++ )
					{
						var menu_name = menu_window.GetChildAtIdx(i);
						menu_name.SetProperty("Selected","False");
					}	
				}
				if(this.name == "menu_bar/button_xiaoyuanjieshao" || this.name == "menu_bar/button_shezhi" || this.name == "menu_bar/button_yuyanqiehuan" || this.name == "menu_bar/button_manyou" || this.name == "menu_bar/button_bangzhu"){
					var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
					var top_menu = FUNCTION_DATA.get_windows("zhucaidan/menu_bar_up");
					for(var i = 0;i<menu_window.childCount;i++){
						var bar_name = menu_window.GetChildAtIdx(i);
						if(i<5){
							bar_name.GetChildAtIdx(0).SetProperty("image","set:zhucaidan_button_"+(i+1)+"-normal image:full_image");
							//alert("set:zhucaidan_button_"+(i+1)+"-normal image:full_image");					
							continue;
							}
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							//alert(other_image.split("_")[0]);
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
							
						}
					}
					for(var i = 0;i<top_menu.childCount;i++){
						var bar_name = top_menu.GetChildAtIdx(i);
						var other_image = "";
						other_image = bar_name.GetProperty("button_bg").split("image:")[1];
						if(other_image){
							//alert(other_image.split("_")[0]);
							bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
							
							
						}
					}
					
					for (var i = 0;i<this.childCount;i++ )
					{
						var window_name = this.GetChildAtIdx(i);
						window_name.SetProperty("image",this.GetProperty("button_bg"));
					}
				}
				//动态的创建视频Button
				if(player.first_in_xiaoyuanjieshao == true){
					var pos_x = 0.00392865;
					var pos_y = 0.117216;
					for(var index in VIDEO_FREQUENCY){
						if(VIDEO_FREQUENCY[index].chinese !=""){
							var info = "shipin/info_btn"+index;
							var button = GUI.Windows.CreateWindow("General/RadioButton",info);
							if(index ==0){
								button.SetProperty("Selected","True");
							}
							button.SetProperty("HoverImage","set:introschool image:btn_down");
							button.SetProperty("NormalImage","set:introschool image:btn_normal");
							button.SetProperty("SelectedImage","set:introschool image:btn_down");
							button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
							button.SetProperty("UnifiedAreaRect","{{"+pos_x+",0},{0.056825,0},{"+pos_y+",0},{0.939892,0}}");
							button.SetProperty("text_theme",VIDEO_FREQUENCY[index][LANGUAGE_STATE.state]);
							button.parent=FUNCTION_DATA.get_windows("about_video/tab_window");
							player.shipin_lei.push(button.name);
							pos_x+=0.13;
							pos_y+=0.13;
						}
					}
				
					//button 触发事件
					for(var index = 0; index<player.shipin_lei.length;index++){
						var tab_btn=FUNCTION_DATA.get_windows(player.shipin_lei[index]);
						tab_btn.Subscribe(GUI.Windows.MouseClick,function(){
							for(var i = 0 ; i<player.shipin_lei.length ; i++){
								var win_btn = FUNCTION_DATA.get_windows(player.shipin_lei[i]);
								if(win_btn.GetProperty("Selected")=="True"){
									for(var index in VIDEO_FREQUENCY){
										FUNCTION_DATA.get_windows(VIDEO_FREQUENCY[index].english).SetProperty("Visible","False");
									}
									FUNCTION_DATA.get_windows(VIDEO_FREQUENCY[i].english).SetProperty("Visible","True");
								}
							}
						});
						
						tab_btn.Subscribe(GUI.Windows.MouseEntersArea,function(){
							Event.Send({
								name : "ui.mouse.hover.isrolemove"
							});
						});	
						// tab_btn.Subscribe(GUI.Windows.MouseLeavesArea,function(){
							// Event.Send({
									// name : "ui.mouse.out.isrolemove"
							// });
						// });
					}
					//shipin/info_btn 子button触发事件
					for(var i in VIDEO_FREQUENCY){
						for(var index in VIDEO_FREQUENCY[i].genus){
							if(VIDEO_FREQUENCY[i].genus[index].chinese !=""){
								var chi_btn = FUNCTION_DATA.get_windows("shipin/info_btn"+i+index);
								chi_btn.Subscribe(GUI.Windows.MouseClick,function(){
									for(var k in VIDEO_FREQUENCY){
										if(FUNCTION_DATA.get_windows(VIDEO_FREQUENCY[k].english).GetProperty("Visible")=="True"){
											for(var m =0 ; m<FUNCTION_DATA.get_windows(VIDEO_FREQUENCY[k].english).childCount;m++){
												var child = FUNCTION_DATA.get_windows(VIDEO_FREQUENCY[k].english).GetChildAtIdx(m);
												if(child.GetProperty("Selected")=="True"){
													var path =System.StartupPath()+"\\ui\\website\\video\\";
													var pa = path.replace(/[\/\\]/g,'\\');
													System.Open(VIDEO_FREQUENCY[k].genus[m].url,pa);
												}
											}
										}
									}
								});		
								chi_btn.Subscribe(GUI.Windows.MouseEntersArea,function(){
									Event.Send({
										name : "ui.mouse.hover.isrolemove"
									});
								});	
								// chi_btn.Subscribe(GUI.Windows.MouseLeavesArea,function(){
									// Event.Send({
											// name : "ui.mouse.out.isrolemove"
									// });
								// });
							}
						}
					}
					player.first_in_xiaoyuanjieshao = false;
				}
			},
			change_language : function (){
				if(this.language == "english"){
					FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
					FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				}else
				if(this.language == "chinese"){
					FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
					FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				}
			},
			//设置确认
			shezhi_ok_Clicked : function () {
				var anim = GUI.Animations.GetAnimation("zhucaidan/multilingual2");
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				var instant = GUI.Animations.InstantiateAnimation(anim);
				instant.SetTargetWindow(FUNCTION_DATA.get_windows("zhucaidan/multilingual"));
				instant.Start();
				Event.Send({
						name : "player.ui.Animations.close",
						window : this.associatedWindow[0]
				});
				//声音控制
				//开
				if(FUNCTION_DATA.get_windows("yinyue_on/btn").GetProperty("Visible")=="True")
				{   
					if(player.music_state_int !=1){
						player.music_state_int = 1;
						Event.Send({
							name : "music.effect.play"
						});	
					}
				}else{//关
					if(player.music_state_int !=0){
						player.music_state_int = 0;
						Event.Send({
							name : "music.effect.stop"
						});
						
					}
				}
					var treeItem=FUNCTION_DATA.get_windows("about_sort/tree");
				//语言控制
				//中文
				if(FUNCTION_DATA.get_windows("Multilingual_ok_zhongwen/btn").GetProperty("Visible")=="True"){
					//列表查询更换语言
					if(LANGUAGE_STATE.state!="chinese"){
						var tree=JSON_SCHOOL["ui"]["categorys"]["category"];
						for(var i=0;i<tree.length;i++)
						{
							if(tree[i][LANGUAGE_STATE.state]!=""){
								var item=treeItem.FindNextItemWithText(tree[i][LANGUAGE_STATE.state]);
								item.text=tree[i]["chinese"];
								var tree_item=tree[i]["seed"];
								for(var j=0;j<tree_item.length;j++){
									if(tree_item[j][LANGUAGE_STATE.state]["name"]!=""){
										var second=treeItem.FindNextItemWithText(tree_item[j][LANGUAGE_STATE.state]["name"]);
										second.text=tree_item[j]["chinese"]["name"];
									}
								}
							}
						}
						for (var index in LANGUAGE_CHINESE){
							var window_name = FUNCTION_DATA.get_windows(index);
							for(var i in LANGUAGE_CHINESE[index]){
								window_name.SetProperty(i,LANGUAGE_CHINESE[index][i]);
							}
							 LANGUAGE_STATE.state ="chinese";
						}
					}
				}else{//英文
					if(LANGUAGE_STATE.state!="english"){
					//列表查询更换语言
						var tree=JSON_SCHOOL["ui"]["categorys"]["category"];
						for(var i=0;i<tree.length;i++)
						{
							if(tree[i][LANGUAGE_STATE.state]!=""){
								var item=treeItem.FindNextItemWithText(tree[i][LANGUAGE_STATE.state]);
								item.text=tree[i]["english"];
								var tree_item=tree[i]["seed"];
								for(var j=0;j<tree_item.length;j++){
									if(tree_item[j][LANGUAGE_STATE.state]["name"]!=""){
										var second=treeItem.FindNextItemWithText(tree_item[j][LANGUAGE_STATE.state]["name"]);
										second.text=tree_item[j]["english"]["name"];
									}
								}
							}
						}
						for (var index in LANGUAGE_ENGLISH){
							var window_name = FUNCTION_DATA.get_windows(index);
							for(var i in LANGUAGE_ENGLISH[index]){
								window_name.SetProperty(i,LANGUAGE_ENGLISH[index][i]);
							}
							LANGUAGE_STATE.state ="english";
						}
					}
				}
				FUNCTION_DATA.get_windows("search/but/text_background").SetProperty("Visible","False");
			},
		
			//打开视角控制
			shijiaokongzhi_in : function () {
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_visibles(this.associatedWindow);
					var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
					if(!anim)
					{
						alert("动画获取失败了!!");
					}
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
					instant.Start();
				}else{
					FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","False");
				};
				Event.Send({
						name : "logic.effect.shijiaokongzhi_in"
					});
			},
			//关闭视角控制
			shijiaokongzhi_close : function () {
				var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
				for (var i = 0;i<menu_window.childCount;i++ )
				{
					var menu_name = menu_window.GetChildAtIdx(i);
					menu_name.SetProperty("Selected","False");
				}
				Event.Send({
						name : "logic.effect.shijiaokongzhi_close"
					});
				var anim = GUI.Animations.GetAnimation("zhucaidan/shijiaokongzhi2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
				if(!anim)
				{
					alert("动画获取失败了!!");
				}
				//alert("anim is undefined and createAnimation Start \n");
				var instant = GUI.Animations.InstantiateAnimation(anim);
				instant.SetTargetWindow(FUNCTION_DATA.get_windows("zhucaidan/shijiaokongzhi"));
				instant.Start();
				FUNCTION_DATA.set_show(this.associatedWindow);
				Event.Send({
						name : "player.ui.Animations.close",
						window : "zhucaidan/shijiaokongzhi"
				});
			},
			//音乐关闭music_close
			music_close : function () {
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				//Event.Send({
				//		name : "music.effect.stop"
				//	});
			},
			//音乐打开 music_open
			music_open : function () {
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				//Event.Send({
				//		name : "music.effect.play"
				//	});
			},
			//帮助一级
			one_help_window : function (){
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.associatedWindow[2]).SetProperty("Visible","False");
			},
			//帮助二级
			two_help_window : function (){
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.associatedWindow[2]).SetProperty("Visible","False");
			},
			//帮助三级
			three_help_window : function (){
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.associatedWindow[2]).SetProperty("Visible","False");
			},
			//学校介绍更换文本和图片
			setChange : function (){
				var image = new Array ;
				var word = new Array ; 
				for (var index in SCHOOL_DATA )
				{
					if(this.name == SCHOOL_DATA[index].name)
					{
						if(this.associatedImage)
						{
							image.push(SCHOOL_DATA[index].image);
							FUNCTION_DATA.set_image(this.associatedImage,image);
						}
						if(this.associatedText)
						{	
						
							word.push(SCHOOL_DATA[index][LANGUAGE_STATE.state].text);
							FUNCTION_DATA.set_word(this.associatedText , word);
						}
					}
				}
			},
			//小地图背景图片的变大与变小
			setMapChange : function (){
				switch(this.state)
				{
					case "add" :
						if(parseInt(MINI_MAP.index)!=5)
						{
							MINI_MAP.index = parseInt(MINI_MAP.index)+1;
						}
						break;
					case "sub":
						if(parseInt(MINI_MAP.index)!=1)
						{
							MINI_MAP.index = parseInt(MINI_MAP.index)-1;
						}
						break;
					default:
						break;
				}
			},
			sub_alpha : function (){
				var image_window = FUNCTION_DATA.get_windows( this.name + "/image");
				var subAlpha = GUI.Animations.GetAnimation("sub_alpha");
				if(!subAlpha)
				{
					alert("动画获取失败!!");
				}
				var instance = GUI.Animations.InstantiateAnimation(subAlpha);
				instance.SetTargetWindow(image_window);
				instance.Start();
				var wnd = FUNCTION_DATA.get_windows(this.name + "/word");
				wnd.SetProperty("Visible" , "True");
			},
			add_alpha : function (){
				var image_window = FUNCTION_DATA.get_windows( this.name + "/image");
				var addAlpha = GUI.Animations.GetAnimation("add_alpha");
				if(!addAlpha)
				{
					alert("动画获取失败!!");
				}
				var instance = GUI.Animations.InstantiateAnimation(addAlpha);
				instance.SetTargetWindow(image_window);
				instance.Start();
				var wnd = FUNCTION_DATA.get_windows(this.name + "/word");
				wnd.SetProperty("Visible" , "False");
			},
			"sand_change" : function (){
					//判断按钮
					var k;
							if(this.state=="bulid"){
								k=0;
							}
							if(this.state=="teach"){
								k=1;
							}
							if(this.state=="admin"){
								k=2;
							}
							if(this.state=="unit"){
								k=3;
							}
							if(this.state=="flat"){
								k=4;
							}
							if(this.state=="living"){
								k=5;
							}
							if(this.state=="traffic"){
								k=6;
							}
							if(this.state=="other"){
								k=7;
							}
					var t=k;
					var visible_false = 1;
					//判断当前语言模式
					var language;
					if(LANGUAGE_STATE["state"]=="chinese"){
						language="chinese";
					}else{
						language="english";
					}
					//
					if(FUNCTION_DATA.get_windows("school_sand/sand").GetProperty("Visible")=="False"){
						 FUNCTION_DATA.get_windows("school_sand/sand").SetProperty("Visible","True");
					}
					//默认气泡大小
					for(var i=1;i<31;i++){
					   FUNCTION_DATA.get_windows("1_"+i+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + 0.354383+",0},{" + 1 + ",0}}");
					}
					//动态创建沙盘气泡
					if(SAND_ENTRY["sand_entry"]=="entry_true"){
						for(var i=0;i<JSON_SCHOOL["ui"]["categorys"]["category"]["length"];i++){
							if(JSON_SCHOOL["ui"]["categorys"]["category"][i][language]==FUNCTION_DATA.get_windows("school_sand/menu/"+k+"/word").GetProperty("text_theme"))
							{
								for(var u=1;u<JSON_SCHOOL["ui"]["categorys"]["category"][i]["seed"]["length"]+1;u++)
								{
									if(JSON_SCHOOL["ui"]["categorys"]["category"][i]["seed"][u-1][language]["name"]!=""){
									
										FUNCTION_DATA.get_windows("sand/1_"+u).jointPivot = JSON_SCHOOL["ui"]["categorys"]["category"][i]["seed"][u-1]["uiPosition"];
										FUNCTION_DATA.get_windows("sand/1_"+u).jointMethod = 5;
										FUNCTION_DATA.get_windows("1_"+u+"/button/t").SetProperty("text_theme",JSON_SCHOOL["ui"]["categorys"]["category"][i]["seed"][u-1][language]["name"]);
										FUNCTION_DATA.get_windows("sand/1_"+u).SetProperty("Visible","True");
										//建筑物名称大于4个字的时候动态加长气泡
										var txt=JSON_SCHOOL["ui"]["categorys"]["category"][i]["seed"][u-1][language]["name"];
										if(language=="english"){
											if(txt.length<8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((8-txt.length)*0.01))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-8)*0.04))+",0},{" + 1 + ",0}}");
											}
										}else{
											if(txt.length<5){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383-((6-txt.length)*0.008))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>=8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383+((txt.length-6)*0.073))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>=5 && txt.length<8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383+((txt.length-4)*0.072))+",0},{" + 1 + ",0}}");
											}
											
										}
										visible_false +=1;
									}
									var addAlpha = GUI.Animations.GetAnimation("add_alpha");
									if(!addAlpha)
									{
										alert("动画获取失败!!");
									}
									var instance = GUI.Animations.InstantiateAnimation(addAlpha);
									instance.SetTargetWindow(FUNCTION_DATA.get_windows("sand/1_"+u));
									instance.Start();
								}
								for(var j=visible_false;j<31;j++){
									FUNCTION_DATA.get_windows("sand/1_"+j).jointVisibleCtrl = false;
									FUNCTION_DATA.get_windows("sand/1_"+j).SetProperty("Visible","False");
								}
							}	
						}
					
					}
					//动态创建360全景气泡
					if(SAND_ENTRY["sand_entry"]=="entry_true1"){
						for(var index in FLASH_PANORAMA){
							var i = parseFloat(index);
							if(FLASH_PANORAMA[i][language]==FUNCTION_DATA.get_windows("school_sand/menu/"+k+"/word").GetProperty("text_theme"))
							{
								for(var u=1;u<FLASH_PANORAMA[i]["genus"]["length"]+1;u++)
								{
									if(FLASH_PANORAMA[i]["genus"][u-1]["name"][language]!=""){
										FUNCTION_DATA.get_windows("sand/1_"+u).jointPivot = [FLASH_PANORAMA[i]["genus"][u-1]["position_x"],FLASH_PANORAMA[i]["genus"][u-1]["position_y"],FLASH_PANORAMA[i]["genus"][u-1]["position_z"]];
										FUNCTION_DATA.get_windows("sand/1_"+u).jointMethod = 5;
										FUNCTION_DATA.get_windows("1_"+u+"/button/t").SetProperty("text_theme",FLASH_PANORAMA[i]["genus"][u-1]["name"][language]);
										FUNCTION_DATA.get_windows("sand/1_"+u).SetProperty("Visible","True");
										//建筑物名称大于4个字的时候动态加长气泡
										var txt=FLASH_PANORAMA[i]["genus"][u-1]["name"][language];
										if(language=="english"){
											if(txt.length<8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((8-txt.length)*0.02))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-8)*0.04))+",0},{" + 1 + ",0}}");
											}
										}else{
											if(txt.length<5){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383-((6-txt.length)*0.008))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>=8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383+((txt.length-6)*0.073))+",0},{" + 1 + ",0}}");
											}
											if(txt.length>=5 && txt.length<8){
												FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.254383+((txt.length-4)*0.072))+",0},{" + 1 + ",0}}");
											}
										}
										visible_false +=1;
									}
									var addAlpha = GUI.Animations.GetAnimation("add_alpha");
									if(!addAlpha)
									{
										alert("动画获取失败!!");
									}
									var instance = GUI.Animations.InstantiateAnimation(addAlpha);
									instance.SetTargetWindow(FUNCTION_DATA.get_windows("sand/1_"+u));
									instance.Start();
								}
								for(var j=visible_false;j<31;j++){
									FUNCTION_DATA.get_windows("sand/1_"+j).jointVisibleCtrl = false;
									FUNCTION_DATA.get_windows("sand/1_"+j).SetProperty("Visible","False");
								}
							}	
						}
					}
						
					//按钮图片更换  点击的变亮，其余变暗
				for( var index in this.associatedWindow)
				{
					var name = this.associatedWindow[index].substring(this.associatedWindow[index].lastIndexOf("/")+1);
					if(name == t)
					{
					
						var btn = FUNCTION_DATA.get_windows(this.associatedWindow[index] +"/image" );
						var img = btn.GetProperty("image");
						btn.SetProperty("image",img.replace("-normal","-hover"));
					}else{
						var image_window = FUNCTION_DATA.get_windows( this.associatedWindow[index] +"/image");
						var image = image_window.GetProperty("image");
						image_window.SetProperty("image",image.replace("-hover","-normal"));
					}
				}
			},
			"displayMap" : function (){
				var map = FUNCTION_DATA.get_windows(this.animationWindow[0]);
				var menu = FUNCTION_DATA.get_windows(this.animationWindow[1]);
				var anim_map = GUI.Animations.GetAnimation(this.name + "/map");
				var anim_menu = GUI.Animations.GetAnimation(this.name + "/menu");
				if(!anim_map || !anim_menu){
					alert("动画获取失败!!");
				}
				var instance = GUI.Animations.InstantiateAnimation(anim_map);
				instance.SetTargetWindow(map);
				instance.Start();
				var inst = GUI.Animations.InstantiateAnimation(anim_menu);
				inst.SetTargetWindow(menu);
				inst.Start();
				this.SetProperty("Visible","False");
				var wnd = FUNCTION_DATA.get_windows(this.associatedWindow);
				wnd.SetProperty("Visible","True");
			},
			new_help_choose_no :function(){
				var win_name = FUNCTION_DATA.get_windows(this.associatedWindow[0]);
				win_name.SetProperty("Visible","False");
			},
			new_help_choose_yes :function(){
				player.mouseOver= true; //当前为帮助模式 
				var win_name = FUNCTION_DATA.get_windows(this.associatedWindow[0]);
				win_name.SetProperty("Visible","False");
				FUNCTION_DATA.get_windows(this.associatedWindow[1]).SetProperty("Visible","True");
			},
			but_enterarea :function(){
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
			},
			but_leavearea :function(){
				Event.Send({
						name : "ui.mouse.out.isrolemove"
				});
			},
						//帮助UI下一个
			help_ui_next : function () {
				//alert(HELP_DATA.index);
				//遍历json_zhucaidan.js记录长度
				var JSON_ZHUCAIDAN_length = 0;
				var JSON_ZHUCAIDAN_CEMIAN_length = 0;
				var JSON_ZHUCAIDAN_array = new Array;
				var JSON_ZHUCAIDAN_CEMIAN_array = new Array;
				var center_t=new Array;
				var t =new Array;
				var record ;//记录右侧边栏是从几开始（789.. ）
				for(var index in JSON_ZHUCAIDAN){
					JSON_ZHUCAIDAN_length++;
					JSON_ZHUCAIDAN_array.push(index);
				}
				for(var index in JSON_ZHUCAIDAN_CEMIAN){
					JSON_ZHUCAIDAN_CEMIAN_length++;
					JSON_ZHUCAIDAN_CEMIAN_array.push(index);
				}
				
				for(var i in JSON_ZHUCAIDAN_CEMIAN_array){
					var n =Math.abs(parseInt(JSON_ZHUCAIDAN_CEMIAN_array[i])-4);
					center_t.push(n);
				}
				for(var index = center_t.length-1;index>=0;index--){
					t.push(center_t[index]);
				}
				
				//颠倒数组元素
				JSON_ZHUCAIDAN_CEMIAN_array.reverse();
				switch(JSON_ZHUCAIDAN_CEMIAN_length){
					case 6:
					record = 7;
					break;
					case 5:
					record = 8;
					break;
					case 4:
					record = 9;
					break;
					case 3:
					record= 10;
					break;
					case 2:
					record=11;
					break;
					case 1:
					record=12;
					break;
					default:
					record=7;
				}
				if(HELP_DATA.index == HELP_DATA.min){
					FUNCTION_DATA.get_windows("help/last").SetProperty("Visible","False");
				}else{
					FUNCTION_DATA.get_windows("help/last").SetProperty("Visible","True");
				}
				if(HELP_DATA.index <= HELP_DATA.max){
					
					var text_wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index].text_window);
					var wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index].window_name);
					if(HELP_DATA.data[HELP_DATA.index].visible_window != "null"){
						var visible_wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index].visible_window );
						visible_wnd.SetProperty("Visible","False");
						wnd.SetProperty("Visible","True");
						wnd.SetProperty("UnifiedAreaRect",HELP_DATA.data[HELP_DATA.index].areasize);
						if(HELP_DATA.index < 7){
							text_wnd.SetProperty("text_theme" ,HELP_DATA.data[HELP_DATA.index][LANGUAGE_STATE.state].text_theme);
						}else{
							text_wnd.SetProperty("text_theme",HELP_DATA.data[5-parseInt(JSON_ZHUCAIDAN_CEMIAN_array[HELP_DATA.index-record])+7][LANGUAGE_STATE.state].text_theme);
							
						}
						
						
					}else{
						var anim = GUI.Animations.GetAnimation("add_alphas");
						var effector2 = anim.CreateAffector(anim,"UnifiedAreaRect", "URect");
						effector2.CreateKeyFrame(0.0,HELP_DATA.data[HELP_DATA.index-1].areasize ,0);
						effector2.CreateKeyFrame(1, HELP_DATA.data[HELP_DATA.index].areasize,0);
						var instant = GUI.Animations.InstantiateAnimation(anim);
						instant.SetTargetWindow(wnd);
						instant.Start(false);
						var anims = GUI.Animations.GetAnimation("add_alpha_help");
						var effector = anims.CreateAffector(anims,"text_theme" ,"String");
						//为新手帮助text赋值
						if(HELP_DATA.index < 7){
							effector.CreateKeyFrame(0.5,HELP_DATA.data[JSON_ZHUCAIDAN_array[HELP_DATA.index]][LANGUAGE_STATE.state].text_theme,0);
						}else if(HELP_DATA.index>6 && HELP_DATA.index<13){
							effector.CreateKeyFrame(0.5,HELP_DATA.data[parseInt(t[HELP_DATA.index-record])+8][LANGUAGE_STATE.state].text_theme,0);
						}else{
							effector.CreateKeyFrame(0.5,HELP_DATA.data[HELP_DATA.index][LANGUAGE_STATE.state].text_theme,0);
						}
						var instant = GUI.Animations.InstantiateAnimation(anims);
						instant.SetTargetWindow(text_wnd);
						instant.Start(false);
					}
					if(HELP_DATA.index == JSON_ZHUCAIDAN_length-1){
						switch(JSON_ZHUCAIDAN_CEMIAN_length){
							case 6:
							HELP_DATA.index = 7;
							HELP_DATA.data[7].visible_window = "help/zhucaidan";
							break;
							case 5:
							HELP_DATA.index = 8;
							HELP_DATA.data[8].visible_window = "help/zhucaidan";
							break;
							case 4:
							HELP_DATA.data[9].visible_window = "help/zhucaidan";
							HELP_DATA.index = 9;
							break;
							case 3:
							HELP_DATA.data[10].visible_window = "help/zhucaidan";
							HELP_DATA.index = 10;
							break;
							case 2:
							HELP_DATA.data[11].visible_window = "help/zhucaidan";
							HELP_DATA.index = 11;
							break;
							case 1:
							HELP_DATA.data[12].visible_window = "help/zhucaidan";
							HELP_DATA.index = 12;
							break;
							default:
							HELP_DATA.index = 7;
						}
					}else{
						HELP_DATA.index +=1;
					}
				}else{
					var root = FUNCTION_DATA.get_windows("help/for_ui");
					root.SetProperty("Visible","False");
					for (var i =0; i<root.childCount; i++)
					{
						var child = root.GetChildAtIdx(i);
						child.SetProperty("Visible","False");
					}
					var show_wnd = FUNCTION_DATA.get_windows("help/start/propmt");
					show_wnd.SetProperty("Visible","True");
					
					Event.Send({
							name : "ui.mouse.out.isrolemove"
					});
					FUNCTION_DATA.get_windows("zhucaidan/new_help_choose").SetProperty("Visible","True");
				}
				//alert(HELP_DATA.index);
			},
			//关闭帮助UI
			close_help : function () {
				FUNCTION_DATA.set_visibles(this.associatedWindow);
				var root = FUNCTION_DATA.get_windows(this.associatedWindow[0]);
				for (var i =0; i<root.childCount; i++)
				{
					var child = root.GetChildAtIdx(i);
					child.SetProperty("Visible","False");
				}
				FUNCTION_DATA.set_show(this.show);
				FUNCTION_DATA.get_windows("zhucaidan/new_help_choose").SetProperty("Visible","True");
				Event.Send({
							name : "ui.mouse.out.isrolemove"
					});
			},
			//帮助上一个
			help_last : function (){
				//alert(HELP_DATA.index);
				//遍历json_zhucaidan.js记录长度
				var JSON_ZHUCAIDAN_length = 0;
				var JSON_ZHUCAIDAN_CEMIAN_length = 0;
				var JSON_ZHUCAIDAN_array = new Array;
				var JSON_ZHUCAIDAN_CEMIAN_array = new Array;
				var center_t=new Array;
				var t =new Array;
				var record ;
				
				for(var index in JSON_ZHUCAIDAN){
					JSON_ZHUCAIDAN_length++;
					JSON_ZHUCAIDAN_array.push(index);
				}
				for(var index in JSON_ZHUCAIDAN_CEMIAN){
					JSON_ZHUCAIDAN_CEMIAN_length++;
					
					JSON_ZHUCAIDAN_CEMIAN_array.push(index);
				}
				//颠倒数组元素
				JSON_ZHUCAIDAN_CEMIAN_array.reverse();
				if(HELP_DATA.index == 13-JSON_ZHUCAIDAN_CEMIAN_length){
						HELP_DATA.index=JSON_ZHUCAIDAN_length;
				}
				switch(JSON_ZHUCAIDAN_CEMIAN_length){
					case 6:
					record = 9;
					break;
					case 5:
					record = 10;
					break;
					case 4:
					record = 11;
					break;
					case 3:
					record = 12;
					break;
					case 2:
					record = 13;
					break;
					case 1:
					record = 14;
					break;
					default:
					record=8;
				}
				if((HELP_DATA.index-2) <= 0){
					FUNCTION_DATA.get_windows("help/last").SetProperty("Visible","False");
				}else{
					FUNCTION_DATA.get_windows("help/last").SetProperty("Visible","True");
				}
				var text_wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index-2].text_window);
				var wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index-2].window_name);
				
				if(HELP_DATA.index == 14-JSON_ZHUCAIDAN_CEMIAN_length){
					var visible_wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index].window_name );
					HELP_DATA.index=JSON_ZHUCAIDAN_length+1;
					wnd = FUNCTION_DATA.get_windows(HELP_DATA.data[HELP_DATA.index-2].window_name);
					visible_wnd.SetProperty("Visible","False");
					wnd.SetProperty("Visible","True");
					wnd.SetProperty("UnifiedAreaRect",HELP_DATA.data[HELP_DATA.index-2].areasize);
					
					text_wnd.SetProperty("text_theme",HELP_DATA.data[HELP_DATA.index-2][LANGUAGE_STATE.state].text_theme);
				
				}else{
					var anim = GUI.Animations.GetAnimation("add_alphas");
					var effector2 = anim.CreateAffector(anim,"UnifiedAreaRect", "URect");
					effector2.CreateKeyFrame(0.0,HELP_DATA.data[HELP_DATA.index-1].areasize ,0);
					effector2.CreateKeyFrame(0.5, HELP_DATA.data[HELP_DATA.index-2].areasize,0);
					var instant = GUI.Animations.InstantiateAnimation(anim);
					instant.SetTargetWindow(wnd);
					instant.Start(false);
					var anims = GUI.Animations.GetAnimation("add_alpha_help");
					var effector = anims.CreateAffector(anims,"text_theme" ,"String");
					if(HELP_DATA.index<8){
							effector.CreateKeyFrame(0.25,HELP_DATA.data[JSON_ZHUCAIDAN_array[HELP_DATA.index-2]][LANGUAGE_STATE.state].text_theme,0);
					}else if(HELP_DATA.index>7 && HELP_DATA.index<14){				
							effector.CreateKeyFrame(0.5,HELP_DATA.data[5-parseInt(JSON_ZHUCAIDAN_CEMIAN_array[HELP_DATA.index-record])+7][LANGUAGE_STATE.state].text_theme,0);
					}else{
							effector.CreateKeyFrame(0.5,HELP_DATA.data[HELP_DATA.index-2][LANGUAGE_STATE.state].text_theme,0);
					}
					var instant = GUI.Animations.InstantiateAnimation(anims);
					instant.SetTargetWindow(text_wnd);
					instant.Start(false);
				}
					
				HELP_DATA.index -=1;
				//alert(HELP_DATA.index);
			},
			chang_photo : function (){
				var images = (this.name).substring((this.name).lastIndexOf("_")+1);
				var imagesets = "1_"+images+".jpg";
				var text = "[image-size='w:520 h:320'][image='set:1_" + images + " image:full_image']\n" + JSON_SCHOOL.ui.schoolIntroduce.img[images][imagesets];
				FUNCTION_DATA.get_windows(this.textWindow).SetProperty("text_theme",text);
			},
			next_or_last_photo : function (){
				var text_wnd = FUNCTION_DATA.get_windows(this.textWindow);
				var images = text_wnd.GetProperty("text_theme");
				images = images.substring(images.indexOf("set:")+4,images.indexOf(" image:"));
				var str = images.substring(images.lastIndexOf("_")+1);
				images =images.substring(0,images.indexOf("_"));
				if(this.state == "next")
				{
					images = parseInt(images) + 1;
				}else{
					images = parseInt(images) - 1;
				}
				if(GUI.Imagesets.IsPresent(images+"_"+str)){
					imagesets = images + "_"+ str + ".jpg";
					var text = "[image-size='w:520 h:320'][image='set:" + images + "_" + str + " image:full_image']\n" + JSON_SCHOOL.ui.schoolIntroduce.img[str][imagesets];
					text_wnd.SetProperty("text_theme",text);
				}
			},
			goto_url:function (){
				System.Open(this.url);
			},
			serch_btn_enter:function (){
				this.SetProperty("button_bg","set:help image:serch_bg_hover");
				player.mini_map_state = "true";
				Event.Send({
						name : "ui.mouse.hover.isrolemove"
				});
			},
			serch_btn_leave:function (){
				this.SetProperty("button_bg","set:help image:serch_bg");
				player.mini_map_state = "false";
				Event.Send({
						name : "ui.mouse.out.isrolemove"
				});
			},
			serch_info_open:function(){
				//调用setVisibles方法
				var windowse = new Array;
				var rootse = FUNCTION_DATA.get_windows(this.root);
				for (var i = 0;i<rootse.childCount;i++ )
				{
					var window_name = rootse.GetChildAtIdx(i);
					windowse.push(window_name.name);
				}
				if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_show(this.associatedWindow);
				}
				
				var text = FUNCTION_DATA.get_windows("serch/info/text");
				text.SetProperty("Text","");
				for(var i=1;i<=player.list_info_length;i++){
					var info1 = "serch/info_btn"+i;
					var image_info1 = "serch/image_btn"+i;
					if(GUI.Windows.IsWindowPresent(info1)){
						GUI.Windows.DestroyWindow(image_info1);
						GUI.Windows.DestroyWindow(info1);
					}
				}
				player.list_info_length = player.list_info.length;
				//窗口的显示与隐藏
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
				FUNCTION_DATA.get_windows("search/but/text_background").SetProperty("Visible","False");
				//动态的添加button
				//GUI.GUISheet.Get
				var t_info = "";
				var creButton = new Array;
				var fastBtn =new Array;
				var shapanBtn =new Array;
				var autoGo =new Array;
				for(var i=1;i<=player.list_info.length;i++){
					//image
					var image_info= "serch/image_btn"+i;
					var button_image = GUI.Windows.CreateWindow("General/Button",image_info);
					button_image.SetProperty("HoverImage","set:help image:help_bg");
					button_image.SetProperty("NormalImage","set:help image:help_bg");
					button_image.SetProperty("PushedImage","set:help image:help_bg");
					button_image.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					button_image.SetProperty("UnifiedAreaRect","{{0.294216,0},{0.0750201,0},{0.589866,0},{0.2848698,0}}");
					button_image.SetProperty("text_theme","暂无");
					button_image.parent=text;
					//button
					var info = "serch/info_btn"+i;
					var button = GUI.Windows.CreateWindow("General/RadioButton",info);
					////CONSOLE.WriteLine("button.name:"+button.name);
					button.SetProperty("HoverImage","set:help image:help_bg");
					button.SetProperty("NormalImage","set:help image:help_bg");
					button.SetProperty("SelectedImage","set:help image:help_bg");
					button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					button.SetProperty("UnifiedAreaRect","{{0.404216,0},{0.0740201,0},{0.999866,0},{0.2838698,0}}");
					button.SetProperty("text_theme",player.list_info[i-1]);
					button.parent=text;
					creButton.push(button.name);
					
					//搜索上的快速定位按钮
					var info1 ="fastLocation"+i;
					var button1 = GUI.Windows.CreateWindow("General/RadioButton",info1);
					button1.SetProperty("HoverImage","");
					button1.SetProperty("NormalImage","");
					button1.SetProperty("SelectedImage","");
					button1.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					button1.SetProperty("UnifiedAreaRect","{{0.034216,0},{0.6640201,0},{0.359866,0},{0.9738698,0}}");
					if(LANGUAGE_STATE.state == "chinese"){
						button1.SetProperty("text_theme","快速定位");
					}else{
						button1.SetProperty("text_theme","quick_to");
					}
					if(player.is_inShaPan){
						button1.SetProperty("Visible","False");
					}else{
						button1.SetProperty("Visible","True");
					}
					button1.parent=button;
					fastBtn.push(button1.name);
					
					//搜索上的沙盘按钮
					var info2 ="shapan"+i;
					var button2 = GUI.Windows.CreateWindow("General/RadioButton",info2);
					button2.SetProperty("HoverImage","");
					button2.SetProperty("NormalImage","");
					button2.SetProperty("SelectedImage","");
					button2.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					//王新修改(2012-06-09)
					//button2.SetProperty("UnifiedAreaRect","{{0.399866,0},{0.6640201,0},{0.589866,0},{0.9738698,0}}");
					if(player.is_inShaPan){
						button2.SetProperty("UnifiedAreaRect","{{0.399866,0},{0.6640201,0},{0.589866,0},{0.9738698,0}}");
					}else{
						button2.SetProperty("UnifiedAreaRect","{{0.631866,0},{0.6640201,0},{0.959866,0},{0.9738698,0}}");
					}
					if(LANGUAGE_STATE.state == "chinese"){
						button2.SetProperty("text_theme","沙盘");
					}else{
						button2.SetProperty("text_theme","shapan");
					}
					button2.parent=button;
					shapanBtn.push(button2.name);
					
					//搜索上的走过去按钮
					var info3 ="xunlu"+i;
					var button3 = GUI.Windows.CreateWindow("General/RadioButton",info3);
					button3.SetProperty("HoverImage","");
					button3.SetProperty("NormalImage","");
					button3.SetProperty("SelectedImage","");
					button3.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					//王鑫修改(2012-06-09)
					//button3.SetProperty("UnifiedAreaRect","{{0.631866,0},{0.6640201,0},{0.959866,0},{0.9738698,0}}");
					//button3.SetProperty("text_theme","走过去");
					//button3.parent=button;
					button3.SetProperty("UnifiedAreaRect","{{0.399866,0},{0.6640201,0},{0.589866,0},{0.9738698,0}}");
					//button3.SetProperty("UnifiedAreaRect","{{0.631866,0},{0.6640201,0},{0.959866,0},{0.9738698,0}}");//王鑫修改
					button3.SetProperty("text_theme","走过去");
					button3.parent=button;
					button3.SetProperty("Visible","False");//改后可以注释掉(王鑫说明)
					autoGo.push(button3.name);
					t_info +="\n\
							[window='"+image_info+"'] [window='"+info+"']\n\
						";
					text.SetProperty("Text",t_info);
					
				}
				//button 触发事件
				for(var i=1;i<=player.list_info.length;i++){
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseEnters,function(){
						player.mini_map_state = "true";
						////CONSOLE.WriteLine(player.mini_map_state);
						////CONSOLE.WriteLine("enter!");
						Event.Send({
								name : "ui.mouse.hover.isrolemove"
						});
					});
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseLeaves,function(){
						player.mini_map_state = "false";
						CONSOLE.WriteLine("leave!");
						// Event.Send({
								// name : "ui.mouse.out.isrolemove"
						// });
					});
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseClick,function(){
						for(var i = 0 ; i<creButton.length ; i++){
							var list_btn = FUNCTION_DATA.get_windows(creButton[i]);
							if(list_btn.GetProperty("Selected")=="True"){
								FUNCTION_DATA.get_windows("school_sand_serch/window/info").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/window/goto").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("school_sand_serch/window/close").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/window/text").SetProperty("text_theme",list_btn.GetProperty("text_theme"));
							}
						}
					});
					FUNCTION_DATA.get_windows(shapanBtn[i-1]).Subscribe(GUI.Windows.MouseEnters,function(){
						player.mini_map_state = "true";
						////CONSOLE.WriteLine(player.mini_map_state);
						////CONSOLE.WriteLine("enter!");
						Event.Send({
								name : "ui.mouse.hover.isrolemove"
						});
					});
					FUNCTION_DATA.get_windows(shapanBtn[i-1]).Subscribe(GUI.Windows.MouseLeaves,function(){
						player.mini_map_state = "false";
						CONSOLE.WriteLine("leave!");
						// Event.Send({
								// name : "ui.mouse.out.isrolemove"
						// });
					});
					//shapanBtn
					
					FUNCTION_DATA.get_windows(shapanBtn[i-1]).Subscribe(GUI.Windows.MouseClick,function(){
						for(var i = 0 ; i<shapanBtn.length ; i++){
							var list_btn = FUNCTION_DATA.get_windows(shapanBtn[i]);
							if(list_btn.GetProperty("Selected")=="True"){
								var i_mark =i;
								for(var i = 0 ; i<shapanBtn.length ; i++){
									if(i!=i_mark){
										list_btn.SetProperty("Selected","False");
									}
								}
								if(player.is_in_shapan =="false"){
									Event.Send({
										name : "player.effect.hoarse"
									});
								}
								player.is_in_shapan ="true"
								//窗口的显示与隐藏
								var btn_parent = list_btn.parent;
								FUNCTION_DATA.get_windows("school_sand").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand/sand").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("zhucaidan/menu_bar").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("zhucaidan/mini_map").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("zhucaidan/mini_map/menu").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("school_sand_serch/hoarse_back").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/hoarse_mark").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/window/info").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/window/goto").SetProperty("Visible","True");
								FUNCTION_DATA.get_windows("school_sand_serch/window/close").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("school_sand_serch/window/text").SetProperty("text_theme",btn_parent.GetProperty("text_theme"));
								//让沙盘的button不显示
								FUNCTION_DATA.get_windows("school_sand/menu").SetProperty("Visible","False");
								FUNCTION_DATA.get_windows("school_sand/button").SetProperty("Visible","False");
								for(var j=1;j<31;j++){
									FUNCTION_DATA.get_windows("sand/1_"+j).jointVisibleCtrl = false;
									FUNCTION_DATA.get_windows("sand/1_"+j).SetProperty("Visible","False");
								}
								var txt=btn_parent.GetProperty("text_theme");
								for(index in  SAND_TABLE){
									if(btn_parent.GetProperty("text_theme") == SAND_TABLE[index].name["chinese"]){
										//动态设置气泡的长度
										if(txt.length>4){
										   FUNCTION_DATA.get_windows("1_1/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-4)*0.07))+",0},{" + 1 + ",0}}");
									     }
										if(txt.length<4){
										   FUNCTION_DATA.get_windows("1_1/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((4-txt.length)*0.07))+",0},{" + 1 + ",0}}");
										 }
										 FUNCTION_DATA.get_windows("sand/1_1").jointPivot =[SAND_TABLE[index].position_x,SAND_TABLE[index].position_y,SAND_TABLE[index].position_z];
										 FUNCTION_DATA.get_windows("sand/1_1").jointMethod = 5;
										 FUNCTION_DATA.get_windows("1_1/button/t").SetProperty("text_theme",btn_parent.GetProperty("text_theme"));
										 FUNCTION_DATA.get_windows("sand/1_1").SetProperty("Visible","True");
										SAND_TABLE_STATE = index;
									}
									//王鑫添加英文搜索的沙盘功能.
									if(btn_parent.GetProperty("text_theme") == SAND_TABLE[index].name["english"]){
										if(txt.length>8){
										   FUNCTION_DATA.get_windows("1_1/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-8)*0.04))+",0},{" + 1 + ",0}}");
									     }
										if(txt.length<8){
										   FUNCTION_DATA.get_windows("1_1/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((8-txt.length)*0.02))+",0},{" + 1 + ",0}}");
										 }
										 FUNCTION_DATA.get_windows("sand/1_1").jointPivot =[SAND_TABLE[index].position_x,SAND_TABLE[index].position_y,SAND_TABLE[index].position_z];
										 FUNCTION_DATA.get_windows("sand/1_1").jointMethod = 5;
										 FUNCTION_DATA.get_windows("1_1/button/t").SetProperty("text_theme",btn_parent.GetProperty("text_theme"));
										 FUNCTION_DATA.get_windows("sand/1_1").SetProperty("Visible","True");
										SAND_TABLE_STATE = index;
									}
								}
							}
						}
						//消除搜索提示窗体(王鑫修改2012-06-14)
						var search_close_btn = FUNCTION_DATA.get_windows("search/info_close");
						search_close_btn.FireEvent("Clicked");
					});
					
					FUNCTION_DATA.get_windows(fastBtn[i-1]).Subscribe(GUI.Windows.MouseEnters,function(){
						player.mini_map_state = "true";
						////CONSOLE.WriteLine(player.mini_map_state);
						////CONSOLE.WriteLine("enter!");
						Event.Send({
								name : "ui.mouse.hover.isrolemove"
						});
					});
					FUNCTION_DATA.get_windows(fastBtn[i-1]).Subscribe(GUI.Windows.MouseLeaves,function(){
						player.mini_map_state = "false";
						CONSOLE.WriteLine("leave!");
						// Event.Send({
								// name : "ui.mouse.out.isrolemove"
						// });
					});
					//fastBtn
					FUNCTION_DATA.get_windows(fastBtn[i-1]).Subscribe(GUI.Windows.MouseClick,function(){
						for(var i = 0 ; i<fastBtn.length ; i++){
							var list_btn = FUNCTION_DATA.get_windows(fastBtn[i]);
							if(list_btn.GetProperty("Selected")=="True"){
								var i_mark =i;
								for(var i = 0 ; i<fastBtn.length ; i++){
									if(i!=i_mark){
										list_btn.SetProperty("Selected","False");
									}
								}
								FUNCTION_DATA.get_windows("school_sand_serch/window/info").SetProperty("Visible","False");
								for(index in  SAND_TABLE){
									var btn_parent = list_btn.parent;
									if(btn_parent.GetProperty("text_theme") == SAND_TABLE[index].name["chinese"]){
										Event.Send({
											name : "player.effect.quick.to.position",
											player : player,
											id : SAND_TABLE[index]
										});
										SAND_TABLE_STATE = index;  
									}
									//王鑫添加英文快速定位功能
									if(btn_parent.GetProperty("text_theme") == SAND_TABLE[index].name["english"]){
										Event.Send({
											name : "player.effect.quick.to.position",
											player : player,
											id : SAND_TABLE[index]
										});
										SAND_TABLE_STATE = index; 
									}
								}
								
							}
						}
					});
					//autoGo
					FUNCTION_DATA.get_windows(autoGo[i-1]).Subscribe(GUI.Windows.MouseEnters,function(){
						player.mini_map_state = "true";
						////CONSOLE.WriteLine(player.mini_map_state);
						//CONSOLE.WriteLine("enter!");
						Event.Send({
								name : "ui.mouse.hover.isrolemove"
						});
					});
					FUNCTION_DATA.get_windows(autoGo[i-1]).Subscribe(GUI.Windows.MouseLeaves,function(){
						player.mini_map_state = "false";
						CONSOLE.WriteLine("leave!");
						// Event.Send({
								// name : "ui.mouse.out.isrolemove"
						// });
					});
				}
			},
			serch_info_close:function(){
				var text = FUNCTION_DATA.get_windows("serch/info/text");
				text.SetProperty("Text","");
				for(var i=1;i<=player.list_info.length;i++){
					var info = "serch/info_btn"+i;
					var image_info ="serch/image_btn"+i;
					GUI.Windows.DestroyWindow(image_info);
					GUI.Windows.DestroyWindow(info);
				}
				FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","False");
				Event.Send({
					name : "ui.mouse.out.isrolemove"
				});
			},
			serch_Editbox:function(){
				var edi_btn = GUI.Editbox.Get("search/Editbox");
				edi_btn.SetProperty("Text","");
			},
			serch_ecitbox_change:function(){
				//销毁button
				var text = FUNCTION_DATA.get_windows("serch/btn/text");
				text.SetProperty("Text","");
				for(var i=1;i<=player.list_info.length;i++){
					var info1 = "serch/list_btn"+i;
					if(GUI.Windows.IsWindowPresent(info1)){
						GUI.Windows.DestroyWindow(info1);
					}
				}
				var serch_value = FUNCTION_DATA.get_windows("search/Editbox").GetProperty("Text");
				////CONSOLE.WriteLine("serch.value: "+serch_value);
				//给逻辑实时发送输入框的值 
				if(serch_value !=""){
					Event.Send({
								name : "data.effect.search",
								value : serch_value
						});
				//窗口的显示与隐藏
				FUNCTION_DATA.get_windows("search/but/text_background").SetProperty("Visible","True");
				}
				
				//动态的添加button
				var t_info = "";
				var creButton = new Array;
				for(var i=1;i<=player.list_info.length;i++){
					//button
					var info = "serch/list_btn"+i;
					var button = GUI.Windows.CreateWindow("General/RadioButton",info);
					////CONSOLE.WriteLine("button.name:"+button.name);
					button.SetProperty("HoverImage","set:help image:help_bg");
					button.SetProperty("NormalImage","set:help image:help_bg");
					button.SetProperty("SelectedImage","set:help image:help_bg");
					button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
					button.SetProperty("UnifiedAreaRect","{{0.110216,0},{0.0740201,0},{0.999866,0},{0.2238698,0}}");
					button.SetProperty("text_theme",player.list_info[i-1]);
					button.parent=text;
					creButton.push(button.name);
					
					t_info +="\n\[padding='l:2 t:2 r:2 b:2'][window='"+info+"']";
					text.SetProperty("Text",t_info);
				}
				for(var i=1;i<=player.list_info.length;i++){
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseEnters,function(){
						player.mini_map_state = "true";
						////CONSOLE.WriteLine(player.mini_map_state);
						////CONSOLE.WriteLine("enter!");
						Event.Send({
								name : "ui.mouse.hover.isrolemove"
						});
					});
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseLeaves,function(){
						player.mini_map_state = "false";
						CONSOLE.WriteLine("leave!");
						// Event.Send({
								// name : "ui.mouse.out.isrolemove"
						// });
					});
					FUNCTION_DATA.get_windows(creButton[i-1]).Subscribe(GUI.Windows.MouseClick,function(){
						for(var i = 0 ; i<creButton.length ; i++){
							var list_btn = FUNCTION_DATA.get_windows(creButton[i]);
							if(list_btn.GetProperty("Selected")=="True"){
								//alert(creButton[i]);
								var list_btn_text = list_btn.GetProperty("text_theme");
								FUNCTION_DATA.get_windows("search/Editbox").SetProperty("Text",list_btn_text);
								break;
							}
						}
					});
				}
			},
			serch_ecitbox_Activated:function (){
				player.pcarray["pccommandinput"].PerformAction("Activate", ['activate', false]);//王鑫修改(2012-06-12)
				//player.is_mouse_Activated = "true";
				//屏蔽搜索中的bug[王鑫修改(2012-06-17)]
				//停止前进
				Event.Send({
					name : "player.effect.forward.stop" , 
					player : player 
				});
				//停止后退
				Event.Send({
					name : "player.effect.backward.stop" , 
					player : player 
				});
				//停止左转
				Event.Send({
					name : "player.effect.rotateleft.stop" , 
					player : player 
				});
				//停止右转
				Event.Send({
					name : "player.effect.rotateright.stop" , 
					player : player 
				});
				//停止左平移
				Event.Send({
					name : "player.effect.StrafeLeft.stop" , 
					player : player 
				});
				//停止右平移
				Event.Send({
					name : "player.effect.StrafeRight.stop" , 
					player : player 
				});
				//停止上平移
				Event.Send({
					name : "player.effect.StrafeUp.stop" , 
					player : player 
				});
				//停止下平移
				Event.Send({
					name : "player.effect.StrafeDown.stop" , 
					player : player 
				});
				//停止A键左转
				Event.Send({
					name : "player.effect.rotateleft1.stop" , 
					player : player 
				});
				//停止D键右转
				Event.Send({
					name : "player.effect.rotateright1.stop" , 
					player : player 
				});
			},
			serch_ecitbox_Deactivated:function (){
				player.pcarray["pccommandinput"].PerformAction("Activate", ['activate', true]);//王鑫修改(2012-06-12)
				//player.is_mouse_Activated = "false";
			},
			sand_propmt : function (){
				var wnd = FUNCTION_DATA.get_windows(this.name+"/text");
				if(wnd.GetProperty("Visible")=="False"){
					wnd.SetProperty("Visible","True");
				}else{
					wnd.SetProperty("Visible","False");
				}
			},
			show_sand_propmt : function (){
				var language;
				if(LANGUAGE_STATE["state"]=="chinese"){
					language="chinese";
				}else{
					language="english";
				}
				//360气泡事件
				if(SAND_ENTRY["sand_entry"]=="entry_true1"){
					for(var i in FLASH_PANORAMA){
						for(var u=1;u<FLASH_PANORAMA[i]["genus"]["length"]+1;u++){
								if(FUNCTION_DATA.get_windows(this.name+"/t").GetProperty("text_theme")==FLASH_PANORAMA[i]["genus"][u-1]["name"][language]){
									var filename=(FLASH_PANORAMA[i]["genus"][u-1]["url"].substring(FLASH_PANORAMA[i]["genus"][u-1]["url"].indexOf("%")+1,FLASH_PANORAMA[i]["genus"][u-1]["url"]["length"]));
									var fname=(FLASH_PANORAMA[i]["genus"][u-1]["url"].substring(0,FLASH_PANORAMA[i]["genus"][u-1]["url"].indexOf("%")));
									if(FLASH_PANORAMA[i]["genus"][u-1]["url"].substring(0,7)!="http://"){
									// var xmlString = "var filepath = { \n";
										// xmlString += "\t\"filename\" :";
										// xmlString += "\""+filename+"\",\n";
										// xmlString += "\t\"name\" :";
										// xmlString += "\""+fname+"\"\n";
										// xmlString += "};";
										// var file_to_write = VFS.Open("flash360/flashfilepath.js",VFS.WRITE);
										// VFS.WriteFile("flash360/flashfilepath.js",xmlString);
										// System.Open("flash360/360/"+filename+".swf");
										//var path =System.StartupPath()+"\\flash360\\360\\";
										//var pa = path.replace(/[\/\\]/g,'\\');
										//System.Open(filename+".swf", pa);
										var path = System.StartupPath();
										var pa = path.replace(/[\/\\]/g,'\\');
										var path = "@"+pa+"\\flash360\\flashplayer.exe";
										var args = [pa+"\\flash360\\360\\"+filename+".swf"];
										var pipes1 = ["", "", ""];
										var ping = IPC.StartProcess(path,args, pipes1);
									}else{
										System.Open(FLASH_PANORAMA[i]["genus"][u-1]["url"]);
									}
									
								}
						}
					}			
				}
				//沙盘气泡事件
				if(SAND_ENTRY["sand_entry"]=="entry_true"){
					for(var i in SAND_TABLE){
						if(FUNCTION_DATA.get_windows(this.name+"/t").GetProperty("text_theme")==SAND_TABLE[i]["name"][language]){
							FUNCTION_DATA.get_windows("school_sand/window/text").SetProperty("Text",SAND_TABLE[i][LANGUAGE_STATE.state]);
							//获取文字窗口school_sand/window/text 设置它的文字内容
							var wnd = FUNCTION_DATA.get_windows("school_sand/window");
							wnd.SetProperty("text_theme",SAND_TABLE[i].name[LANGUAGE_STATE.state]);
							//wnd.SetProperty("text_theme",SAND_TABLE[this.state].name); //王鑫修改,上面行可以注释掉.
							//如果窗口为不显示，加载显示窗口动画
							if(wnd.GetProperty("Visible")=="False")
							{
								var anim = GUI.Animations.GetAnimation("school_sand/window/show");
								if(!anim){
									alert("动画获取失败!!");
								}
								var instant = GUI.Animations.InstantiateAnimation(anim);
								instant.SetTargetWindow(wnd);
								instant.Start();
							}
							SAND_TABLE_STATE = i;
						}	
					}
				}
			},
			display_sand_table : function (){
				var wnd = FUNCTION_DATA.get_windows(this.associatedWindow);
				var anim = GUI.Animations.GetAnimation(this.associatedWindow + "/display");
				if(!anim){
					alert("动画获取失败!!");
				}
				var instant = GUI.Animations.InstantiateAnimation(anim);
				instant.SetTargetWindow(wnd);
				instant.Start();
			},
			sand_goto_url : function (){
				System.Open(SAND_TABLE[SAND_TABLE_STATE].url);
			},
			about_school_goto_url : function (){
				System.Open(URL.home_url);
			},
			/* 学校视频集中的“更多信息”链接*/
			about_video_goto_url : function (){
				System.Open(URL.video_url);
			},
			open_video : function (){
				var path =System.StartupPath()+"\\ui\\website\\video\\";
				var pa = path.replace(/[\/\\]/g,'\\');
				System.Open(this.url,pa);
			},
			serch_win_info_close : function (){
				FUNCTION_DATA.get_windows("school_sand_serch/window/info").SetProperty("Visible","False");
				Event.Send({
					name : "ui.mouse.out.isrolemove"
				});
			},
			itemChange:function (){
				if(this.GetFirstSelectedItem()!=null){
					var text=this.GetFirstSelectedItem().text;
					var text_theme="";
					for(var index in SAND_TABLE)
					{
						if(text==SAND_TABLE[index]["name"][LANGUAGE_STATE.state]){
							var text_theme=SAND_TABLE[index][LANGUAGE_STATE.state];
							SAND_TABLE_STATE = index;
						}
					}
					FUNCTION_DATA.get_windows("about_sort/content__auto_hscrollbar__").SetProperty("ScrollPosition",0);
					FUNCTION_DATA.get_windows("about_sort/content__auto_vscrollbar__").SetProperty("ScrollPosition",0);
					var text_con=FUNCTION_DATA.get_windows("about_sort/content");
					text_con.SetProperty("Text",text_theme);
					if(text_theme!=""){
						text_con.SetProperty("Visible","True");
						FUNCTION_DATA.get_windows("about_sort/goto").SetProperty("Visible","True");
						FUNCTION_DATA.get_windows("about_sort/more").SetProperty("Visible","True");
					}else{
						text_con.SetProperty("Visible","False");
						FUNCTION_DATA.get_windows("about_sort/goto").SetProperty("Visible","False");
						FUNCTION_DATA.get_windows("about_sort/more").SetProperty("Visible","False");
					}
				}else{
					FUNCTION_DATA.get_windows("about_sort/content").SetProperty("Visible","False");
					FUNCTION_DATA.get_windows("about_sort/goto").SetProperty("Visible","False");
					FUNCTION_DATA.get_windows("about_sort/more").SetProperty("Visible","False");
				}
			},
			schoolGoto:function(){
				FUNCTION_DATA.get_windows(this.associatedWindow).SetProperty("Visible","False");
				Event.Send({
						name : "player.effect.quick.to.position_shapan",
						player : player,
						id : SAND_TABLE[SAND_TABLE_STATE]
					});
			},
			//360全景展示
			zhanshi_scenen:function(){
				var FLASH_PANORAMA_lenth2 = 0;
				var lenth_int = 0;
				for(index in FLASH_PANORAMA){
					FLASH_PANORAMA_lenth2 +=1;
				}
				if(FLASH_PANORAMA_lenth2==1){
					for(var u=1;u<FLASH_PANORAMA["0"]["genus"]["length"]+1;u++){
						if(FLASH_PANORAMA["0"]["genus"][u-1]["name"][LANGUAGE_STATE["state"]]!=""){
							lenth_int  += 1;
						}
					}
				}
				if(lenth_int==1){
					System.Open(FLASH_PANORAMA["0"]["genus"][0]["url"]);
				}else{
					//隐藏搜索功能的UI
					var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
					if(sea_window.GetProperty("Visible")=="True"){
						FUNCTION_DATA.set_hide(this.searchWindow);
					}
					SAND_ENTRY["sand_entry"]="entry_true1";
					// FUNCTION_DATA.get_windows("shapan_bg/introschool").SetProperty("Visible","True");
					//窗口的显示与隐藏
					var rootse = FUNCTION_DATA.get_windows(this.root);
					var windowse=new Array;
					for (var i = 0;i<rootse.childCount;i++ )
					{
						var window_name = rootse.GetChildAtIdx(i);
						windowse.push(window_name.name);
					}
					FUNCTION_DATA.set_hide(windowse);
					FUNCTION_DATA.set_hide(this.associatedWindow);
					FUNCTION_DATA.get_windows("school_sand").SetProperty("Visible","True");
					// FUNCTION_DATA.get_windows("school_sand/sand").SetProperty("Visible","True");
					// FUNCTION_DATA.get_windows("school_sand/menu").SetProperty("Visible","True");				
					for(var j=1;j<31;j++){
						FUNCTION_DATA.get_windows("sand/1_"+j).jointVisibleCtrl = false;
						FUNCTION_DATA.get_windows("sand/1_"+j).SetProperty("Visible","False");
						//默认气泡大小
						FUNCTION_DATA.get_windows("1_"+j+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + 0.354383+",0},{" + 1 + ",0}}");
					}
					if(player.is_in_shapan =="false"){
						Event.Send({
						name : "player.effect.hoarse"
						});
					}
					player.is_in_shapan ="true"
				}
			},
			//校区切换
			qiehuan_xiaoqu:function(){
				
				//判断校区 2个以上弹出2级窗口
				var leng =0;
				for(index in JSON_PATH["rel_path"]){
					leng++;
				}
				//二级窗口button位置属性
				var x1=0.1;
				var x2=0.45;
				var y1=0.32;
				var y2=0.45;
				if(leng>2){
				//判断有几个子按钮，如果大于四个的，动态调整窗口大小
					var t=0;
					for(var index in JSON_PATH["rel_path"]){
						t++
					}
					if(t>4){
							//alert(FUNCTION_DATA.get_windows("zhucaidan/qiehuan").GetProperty("UnifiedAreaRect"));
							FUNCTION_DATA.get_windows("zhucaidan/qiehuan").SetProperty("UnifiedAreaRect","{{0.310313,0},{"+(0.331746-(t-4)*0.015)+",0},{0.688477,0},{"+(0.678693+(t-4)*0.025)+",0}}");
							//alert(FUNCTION_DATA.get_windows("zhucaidan/qiehuan").GetProperty("UnifiedAreaRect"));
							
							y1=y1-(t-4)*0.02;
						    y2=y2-(t-4)*0.04;
						}
						if(FUNCTION_DATA.get_windows("zhucaidan/qiehuan").GetProperty("Visible")=="False"){
							FUNCTION_DATA.get_windows("zhucaidan/qiehuan").SetProperty("Visible","True");
						}else{
							//关闭窗口
							FUNCTION_DATA.get_windows("zhucaidan/qiehuan").SetProperty("Visible","False");
						}
						//获取父窗口
						var map_bg = FUNCTION_DATA.get_windows("zhucaidan/qiehuan");
						var createButton = new Array;
						
						//alert(this.name);
						if(this.name == "menu_bar/button_qiehuan" ||this.name == "menu_bar/button_xiaoyuanjieshao" || this.name == "menu_bar/button_shezhi" || this.name == "menu_bar/button_yuyanqiehuan" || this.name == "menu_bar/button_manyou" || this.name == "menu_bar/button_bangzhu"){
							var menu_window = FUNCTION_DATA.get_windows("zhucaidan/menu_bar");
							var top_menu = FUNCTION_DATA.get_windows("zhucaidan/menu_bar_up");
							for(var i = 0;i<menu_window.childCount;i++){
								var bar_name = menu_window.GetChildAtIdx(i);
								var other_image = "";
								other_image = bar_name.GetProperty("button_bg").split("image:")[1];
								if(other_image){
									bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
								}
							}
							for(var i = 0;i<top_menu.childCount;i++){
								var bar_name = top_menu.GetChildAtIdx(i);
								var other_image = "";
								other_image = bar_name.GetProperty("button_bg").split("image:")[1];
								if(other_image){
									bar_name.GetChildAtIdx(0).SetProperty("image","set:new_zhucaidan image:"+other_image.split("_")[0]+"_normal");
									
								}
							}
							
							for (var i = 0;i<this.childCount;i++ )
							{
								var window_name = this.GetChildAtIdx(i);
								window_name.SetProperty("image",this.GetProperty("button_bg"));
							}
						}
						for(var index in JSON_PATH["rel_path"]){
							var info = "qiehuan/Button" + index;
							//创建button
							var button = GUI.Windows.CreateWindow("General/RadioButton",info);
							//设置window属性
							//设置button的其他属性
							button.SetProperty("HoverImage","set:introschool image:text_border_down");
							button.SetProperty("text_theme",JSON_PATH["rel_path"][index]["id"]);
							button.SetProperty("NormalImage","set:introschool image:text_border_normal");
							button.SetProperty("SelectedImage","set:introschool image:text_border_down");
							button.SetProperty("UnifiedMaxSize","{{2,0},{1,0}}");
							button.SetProperty("SelectedTextColour","FFFFFFFF");
							
							button.SetProperty("NormalTextColour","FFFFFFFF");
							button.SetProperty("SelectedTextColour","FFFFFFFF");
							i = parseFloat(index);
							button.SetProperty("UnifiedAreaRect","{{"+ x1 +",0},{"+ y1 +",0},{"+ x2 +",0},{"+ y2 +",0}}");
							//第二个button时候 x轴移动
							if((i+1)%2==1){
							  x1=x1+0.42;
							  x2=x2+0.42;
							}
							//第三个button时候 x轴回到原点 y轴移动
							if((i+1)%2==0){
							  x1=0.1;
							  x2=0.45;
							  y1=y1+(10-t)*0.055;
							  y2=y2+(10-t)*0.055;
							  
							}
							//设置创建button的父窗口
							button.parent=map_bg;
							createButton.push(button.name);
							var qiehuan_btn = createButton;
							/*	button触发事件	*/
							//屏蔽鼠标点击地面行走事件
							FUNCTION_DATA.get_windows(qiehuan_btn[index]).Subscribe(GUI.Windows.MouseEntersArea,function(){
								Event.Send({
									name : "ui.mouse.hover.isrolemove"
								});
							});
							//切换校区的button点击事件
							FUNCTION_DATA.get_windows(qiehuan_btn[index]).Subscribe(GUI.Windows.MouseClick,function(){
								for(var i = 0 ; i<qiehuan_btn.length ; i++){
									var locate_btn = FUNCTION_DATA.get_windows(qiehuan_btn[i]);
									if(locate_btn.GetProperty("Selected")=="True"){
										var pos_name = locate_btn.GetProperty("text_theme");
										for(var index in JSON_PATH["rel_path"])
										{
											if(JSON_PATH["rel_path"][index]["id"] == pos_name ){
												var path = JSON_PATH.spp_path[0].value+"spp.exe";
												
												var args = JSON_PATH.rel_path[pos_name-1].value+"start.js";
												var pipes1 = ["", "", ""];
												var ping = IPC.StartProcess(path,args, pipes1);
												//设置2秒钟后本场景将关闭
												setTimeout("exit(1)",2000);
											}
										}
									}
									 /*	调用set_visible方法	*/
									 var show_window = FUNCTION_DATA.get_windows("zhucaidan/qiehuan");
									 if(!show_window)
									 {
										 CONSOLE.Write("\n Failed to Get '" + show_window.name + "' \n");	    
									 }
									 var isVisible = show_window.GetProperty("Visible");
									 if (isVisible == "True") {
										 show_window.SetProperty("Visible","False");
									 }
								}
							});
						}
					}else{
						var path = JSON_PATH.spp_path[0].value+"spp.exe";
						var args = JSON_PATH.rel_path[0].value+"start.js";
						var pipes1 = ["", "", ""];
						var ping = IPC.StartProcess(path,args, pipes1);
					
						//设置2秒钟后本场景将关闭
						setTimeout("exit(1)",2000);
					}
				
			},
			//切换校区关闭
			qiehuan_Close:function(){
				FUNCTION_DATA.get_windows("zhucaidan/qiehuan").SetProperty("Visible","False");
				//销毁按钮
				for(var i in JSON_PATH["rel_path"]){
					var info1 = "qiehuan/Button"+i;
					if(GUI.Windows.IsWindowPresent(info1)){
						GUI.Windows.DestroyWindow(info1);
					}
				}
			},
			go_to_url:function(){
				//隐藏搜索功能的UI
				var sea_window = FUNCTION_DATA.get_windows(this.searchWindow[0]);
				if(sea_window.GetProperty("Visible")=="True"){
					FUNCTION_DATA.set_hide(this.searchWindow);
				}
				player.window_name_bar = this.menu_window[0];
				ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
				System.Open(this.url);
			},
			VertChanged:function(){
				alert(1);
				alert(this.childCount);
			}
		},
		window : {
			"serch/menu_bar":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+parseFloat(0.334181+(1-UpdateWidth)/2)+",0},{0.00960153,0},{"+parseFloat(0.334181+(0.591016-0.334181)*UpdateWidth+(1-UpdateWidth)/2)+",0},{0.262538,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.334181,0},{0.00960153,0},{0.591016,0},{"+parseFloat(0.00960153+(0.262538-0.00960153)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
			   },
			   subscribe:{}
			},
			"about_road/arrive":{
				property:{
					root:function(obj,propt_name){
						obj[propt_name]="about_road/window";
					},
					num:function (obj,propt_name){
						obj[propt_name]=0;
					}
				},
				event:{
					"MouseClick":"setSelectTab"
				},
				subscribe:{}
			},
			"about_road/transit":{
				property:{
					root:function(obj,propt_name){
						obj[propt_name]="about_road/window";
					},
					num:function (obj,propt_name){
						obj[propt_name]=0;
					}
				},
				event:{
					"MouseClick":"setSelectTab"
				},
				subscribe:{}
			},
			"about_road/address":{
				property:{
					root:function(obj,propt_name){
						obj[propt_name]="about_road/window";
					},
					num:function (obj,propt_name){
						obj[propt_name]=0;
					}
				},
				event:{
					"MouseClick":"setSelectTab"
				},
				subscribe:{}
			},
			"about_road/address/window":{
				property:{
					init:function(obj,propt_name){
						if(GUI.Imagesets.IsPresent("address_image")){
							GUI.Imagesets.DestroyImageset(GUI.Imagesets.Get("address_image"));
						}
						GUI.Imagesets.CreateImageset("address_image","/ui/data/address.jpg");
						obj.SetProperty("image","set:address_image image:full_image");
					}
				},
				event:{},
				subscribe:{}
			},
			"about_road/arrive/window":{
				property:{
					init:function(obj,propt_name){}
				},
				event:{},
				subscribe:{}
			},
			"about_road/transit/window":{
				property:{
					init:function(obj,propt_name){}
				},
				event:{},
				subscribe:{}
			},
			"about_sort/more":{
				property:{},
				event:{
					"MouseClick":"sand_goto_url"
				},
				subscribe:{}
			},
			"about_sort/goto":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]="school_info";
					}
				},
				event : {
					"Clicked":"schoolGoto"
				},
				subscribe:{}
			},
			"about_sort/tree":{
				property:{
					"init":function(obj,propt_name){
						var tree=JSON_SCHOOL["ui"]["categorys"]["category"];
						for(var i=0;i<tree.length;i++)
						{	
							
							if(tree[i][LANGUAGE_STATE.state]!=""){
								var item=new GUI.TreeItem(tree[i][LANGUAGE_STATE.state]);
								item.SetSelectionBrushImage("introschool","tab_hover");
								item.spacing=4;
								// item.buttonLoaction=[0,0,100,40];
								obj.AddItem(item);
								var tree_item=tree[i]["seed"];
								for(var j=0;j<tree_item.length;j++){
									if(tree_item[j][LANGUAGE_STATE.state]["name"]!=""){
										var second=new GUI.TreeItem(tree_item[j][LANGUAGE_STATE.state]["name"]);
										second.SetSelectionBrushImage("introschool","tab_hover");
										second.font=GUI.Fonts.Get("You8");
										second.spacing=6;
										item.AddItem(second);
									}
								}
							}
						}
					}
				},
				event:{
					 "ItemSelectionChanged":"itemChange"
				},
				subscribe:{}
			},
			"school_info/tab_window/about_sort/window":{
				property:{},
				event:{},
				subscribe:{}
			},
			"school_info/tab_window/about_sort":{
				property : {
					root:function (obj,propt_name){
						obj[propt_name]="school_info";
					},
					num : function (obj,propt_name){
						obj[propt_name]=3;
					}
				},
				event : {
					"MouseClick" :"setSelectTab"
				},
				subscribe :{}
			},
			"school_info/tab_window/about_road":{
				property : {
					root:function (obj,propt_name){
						obj[propt_name]="school_info";
					},
					num : function (obj,propt_name){
						obj[propt_name]=3;
					}
				},
				event : {
					"MouseClick" :"setSelectTab"
				},
				subscribe :{}
			},
			// "about_video/celebration":{
				// property : {
					// root:function (obj,propt_name){
						// obj[propt_name]="school_info/tab_window/about_video/window";
					// },
					// num : function (obj,propt_name){
						// obj[propt_name]=2;
					// }
				// },
				// event : {
					// "MouseClick" :"setSelectTab",
					// "MouseEnter":"but_enter",
					// "MouseLeave":"but_leave"
				// },
				// subscribe :{}
			// },
			// "celebration/one":{
				// property:{
					// url:function (obj,propt_name){
						// obj[propt_name]="wo.swf";
					// }
				// },
				// event :{
					// "MouseClick" :"open_video",
					// "MouseEnter":"but_enter",
					// "MouseLeave":"but_leave"
				// },
				// subscribe :{}
			// },
			// "celebration/two":{
				// property:{
					// url:function (obj,propt_name){
						// obj[propt_name]="wo.swf";
					// }
				// },
				// event :{
					// "MouseClick" :"open_video",
					// "MouseEnter":"but_enter",
					// "MouseLeave":"but_leave"
				// },
				// subscribe :{}
			// },
			//沙盘按钮
				"sand/1_1":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_1/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_1/button";
						}
					},
					event :{
						"Clicked" : "show_sand_propmt"
						
					},
					subscribe :{}
				},
				"sand/1_2":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_2/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_2/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_3":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_3/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_3/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_4":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_4/button":{
					property : {
						state : function (obj,propt_name){
							obj[propt_name]=2;
						},
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_4/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_5":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_5/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_5/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_6":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_6/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_6/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_7":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_7/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_7/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_8":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_8/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_8/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_9":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_9/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_9/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_10":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_10/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_10/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_11":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_11/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_11/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_12":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_12/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_12/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_13":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_13/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_13/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_14":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_14/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_14/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_15":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_15/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_15/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_16":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_16/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_16/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_17":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_17/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_17/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_18":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_18/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_18/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_19":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_19/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_19/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_20":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_20/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_20/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_21":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_21/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_21/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_22":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_22/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_22/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_23":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_23/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_23/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_24":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_24/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_24/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_25":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_25/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_25/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_26":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_26/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_26/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_27":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_27/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_27/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_28":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_28/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_28/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_29":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_29/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_29/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
				"sand/1_30":{
					property : {
						pos_3d : function (obj,propt_name){
							obj.jointPivot = [-13.55987,0,314.3121];
							obj.jointMethod = 5;
						}
					},
					event :{},
					subscribe :{}
				},
				"1_30/button":{
					property : {
						associatedWindow : function (obj,propt_name){
							obj[propt_name]="1_30/button";
						}
					},
					event :{
						//"MouseEnter" : "sand_propmt",
						//"MouseLeave" : "sand_propmt",
						"Clicked" : "show_sand_propmt"
					},
					subscribe :{}
				},
			//关闭沙盘提示框
			"school_sand/window/close_button":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]="school_sand/window";
					}
				},
				event :{
					"Clicked" : "display_sand_table"
				},
				subscribe :{}
			},
			//前往沙盘点
			"school_sand/window/goto":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","shapan_bg/introschool","school_sand","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["school_sand/window"];
					},
					location : function (obj,propt_name){
						obj[propt_name]= "yes";
					}
				},
				event :{
					"Clicked" : "backing_out_hoarse"
				},
				subscribe :{}
			},
			"school_sand_serch/hoarse_mark":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.5009,0},{0.615386,0},{0.529977,0},{0.675267,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.5009,0},{0.615386,0},{"+parseFloat(0.5009+(0.529977-0.5009)*UpdateWidth)+",0},{0.675267,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.5009,0},{0.615386,0},{0.529977,0},{"+parseFloat(0.615386+(0.675267-0.615386)*UpdateHeight)+",0}}");
						}
					}
			   },
			   event:{},
			   subscribe:{}
			},
			"school_sand_serch/window/goto":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","school_sand_serch/window/info","school_sand_serch/hoarse_back","school_sand_serch/hoarse_mark","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["school_sand/window"];
					},
					location : function (obj,propt_name){
						obj[propt_name]= "yes";
					}
				},
				event :{
					"Clicked" : "backing_out_hoarse"
				},
				subscribe :{}
			},
			//沙盘返回:
			"school_sand/hoarse":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","school_sand","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["school_sand/window","shapan_bg/introschool"];
					}
				},
				event :{
					"Clicked" : "backing_out_hoarse"
				},
				subscribe :{}
			},
			"school_sand_serch/hoarse_back":{
				property : {
					associatedWindow : function (obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.888595,0},{0.833811,0},{0.949899,0},{0.899636,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.888595,0},{0.833811,0},{"+parseFloat(0.888595+(0.949899-0.888595)*UpdateWidth)+",0},{0.899636,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.888595,0},{0.833811,0},{0.949899,0},{"+parseFloat(0.833811+(0.899636-0.833811)*UpdateHeight)+",0}}");
						}
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","school_sand_serch/window/info","school_sand_serch/hoarse_back","school_sand_serch/hoarse_mark","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["school_sand/window"];
					}
				},
				event :{
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea",
					"Clicked" : "backing_out_hoarse"
				},
				subscribe :{}
			},
			//去官网子页
			"school_sand/window/open" :{
				property : {},
				event :{
					"Clicked" :"sand_goto_url"
				},
				subscribe :{}
			},
			"school_sand/menu":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{0.85204,0},{"+UpdateWidth+",0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{"+parseFloat(UpdateHeight+0.85204-1)+",0},{1,0},{1,0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"school_sand/button":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+parseFloat(1-UpdateWidth)+",0},{0.85204,0},{1,0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{"+parseFloat(UpdateHeight+0.85204-1)+",0},{1,0},{1,0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"help/for_ui/zhucaidan":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+(1-UpdateWidth)/2+",0},{0,0},{"+parseFloat((1-UpdateWidth)/2+UpdateWidth)+",0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{"+parseFloat(1-UpdateHeight)+",0},{1,0},{1,0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			
			"help/start/propmt":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.269612,0},{0.333321,0},{0.717069,0},{0.588385,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.269612,0},{0.333321,0},{"+parseFloat(0.269612+(0.717069-0.269612)*UpdateWidth)+",0},{0.588385,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.269612,0},{0.333321,0},{0.717069,0},{"+parseFloat(0.333321+(0.588385-0.333321)*UpdateHeight)+",0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"sand_table/ren":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.445854,0},{0.506379,0},{0.554147,0},{0.584182,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.445854,0},{0.506379,0},{"+parseFloat(0.445854+(0.554147-0.445854)*UpdateWidth)+",0},{0.584182,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.445854,0},{0.506379,0},{0.554147,0},{"+parseFloat(0.506379+(0.584182-0.506379)*UpdateHeight)+",0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"school_sand/window":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.555222,0},{0.230468,0},{0.97837,0},{0.573132,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.555222,0},{0.230468,0},{"+parseFloat(0.555222+(0.97837-0.555222)*UpdateWidth)+",0},{0.573132,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.555222,0},{0.230468,0},{0.97837,0},{"+parseFloat(0.230468+(0.573132-0.230468)*UpdateHeight)+",0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			//the menu for school_sand table 沙盘的菜单项
			"school_sand/menu/0":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "bulid";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/1":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "teach";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/2":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "admin";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/3":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "unit";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/4":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "flat";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/5":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "living";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/6":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "traffic";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			"school_sand/menu/7":{
				property : {
					state : function (obj,propt_name){
						obj[propt_name] = "other";
					},
					root : function (obj,propt_name){
						obj[propt_name] = "school_sand/sand";
					},
					associatedWindow :function (obj,propt_name){
							obj[propt_name]=["school_sand/menu/0","school_sand/menu/1","school_sand/menu/2","school_sand/menu/3","school_sand/menu/4",
							"school_sand/menu/5","school_sand/menu/6","school_sand/menu/7"];
					}
				},
				event :{
					"MouseEnter" : "sub_alpha",
					"MouseLeave" : "add_alpha",
					"Clicked" :"sand_change"
				},
				subscribe :{}
			},
			//下一张图片
			/*	屏蔽ui穿透--校园介绍 岳朝凤修改 2012-6-14 begin	*/
			"about_photo/next":{
				property :{
					textWindow : function(obj,propt_name){
						obj[propt_name]="about_photo/text";
					},
					state : function (obj,propt_name){
						obj[propt_name]="next";
					}
				},
				event :{
					"Clicked" : "next_or_last_photo"
				},
				subscribe :{}
			},
			"about_photo/last":{
				property :{
					textWindow : function(obj,propt_name){
						obj[propt_name]="about_photo/text";
					},
					state : function (obj,propt_name){
						obj[propt_name]="last";
					}
				},
				event :{
					"Clicked" : "next_or_last_photo"
				},
				subscribe :{}
			},
			/*	屏蔽ui穿透--校园介绍 岳朝凤修改 2012-6-14 end	*/
			"about_photo/magnify":{
				property :{
					url : function (obj,propt_name){
						obj[propt_name]="http://";
					}
				},
				event :{
					"Clicked" : "goto_url"
				},
				subscribe :{}
			},
			"about_photo/text":{
				property : {
					text : function (obj,propt_name){
						obj.SetProperty("text_theme","[image-size='w:520 h:320'][image ='set:1_scenery image:full_image']\n ");
					}
				},
				event :{},
				subscribe :{}
			},
			"about_photo/campus_docenten":{
				property : {
					textWindow : function(obj,propt_name){
						obj[propt_name]="about_photo/text";
					}
				},
				event : {
					"MouseClick":"chang_photo"
				},
				subscribe :{}
			},
			"about_photo/campus_activity":{
				property : {
					textWindow : function(obj,propt_name)
					{
						obj[propt_name]="about_photo/text";
					}
				},
				event : {
					"MouseClick":"chang_photo"
				},
				subscribe :{}
			},
			"about_photo/campus_scenery":{
				property : {
					textWindow : function(obj,propt_name)
					{
						obj[propt_name]="about_photo/text";
					}
				},
				event : {
					"MouseClick":"chang_photo"
				},
				subscribe :{}
			},
			"school_info/tab_window/about_video":{
				property : {
					root:function (obj,propt_name){
						obj[propt_name]="school_info";
					},
					num : function (obj,propt_name){
						obj[propt_name]=3;
					}
					// url : function (obj,propt_name){
						// obj[propt_name] = "index.html";
					// }
				},
				event : {
					"MouseClick" :"setSelectTab"
				},
				subscribe :{}
			},
			"school_info/tab_window/about_photo":{
				property : {
					root:function (obj,propt_name){
						obj[propt_name]="school_info";
					},
					num : function (obj,propt_name){
						obj[propt_name]=3;
					}
				},
				event : {
					"MouseClick" :"setSelectTab"
				},
				subscribe :{}
			},
			"school_info/tab_window/about_school":{
				property : {
					root:function (obj,propt_name){
						obj[propt_name]="school_info";
					},
					num : function (obj,propt_name){
						obj[propt_name]=3;
					}
				},
				event : {
					"MouseClick" :"setSelectTab"
				},
				subscribe :{}
			},
			"school_info/close_button":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["school_info","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked":"setVisibles"
				},
				subscribe : {
					"ui.close.Animations" : function (e){
						var window_name = player.window_name;
						FUNCTION_DATA.get_windows(window_name).SetProperty("Visible","False");
					},
				}
			},
			"help/last":{
				property : {},
				event : {
					"Clicked" : "help_last"
				},
				subscribe : {}
			},
			"help/mini/last":{
				property : {},
				event : {
					"Clicked" : "help_last"
				},
				subscribe : {}
			},
			"help/mini/next":{
				property : {},
				event :{
					"Clicked":"help_ui_next"
				},
				subscribe : {}
			},
			"help/mini/cancel" : {
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name] = ["help/for_ui"];
					},
					showWindow : function (obj,propt_name){
						obj[propt_name] = ["help/start/propmt"];
					}
				},
				event : {
					"Clicked" : "close_help"
				},
				subscribe : {}
			},
			"help/next":{
				property : {},
				event :{
					"Clicked":"help_ui_next"
				},
				subscribe : {}
			},
			"help/cancel" : {
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name] = ["help/for_ui"];
					},
					showWindow : function (obj,propt_name){
						obj[propt_name] = ["help/start/propmt"];
					}
				},
				event : {
					"Clicked" : "close_help"
				},
				subscribe : {}
			},
			"help/start/next":{
				property : {},
				event :{
					"Clicked":"help_ui_next"
				},
				subscribe : {}
			},
			"help/start/cancel" : {
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name] = ["help/for_ui"];
					},
					showWindow : function (obj,propt_name){
						obj[propt_name] = ["help/start/propmt"];
					}
				},
				event : {
					"Clicked" : "close_help"
				},
				subscribe : {}
			},
		
			//小地图的隐藏
			"mini_map/display" : {
				property :{
					animationWindow : function (obj,propt_name) {
						obj[propt_name] =["zhucaidan/mini_map","zhucaidan/mini_map/menu"];
					},
					associatedWindow : function (obj,propt_name) {
						obj[propt_name] = "mini_map/show";
					}
				},
				event :{
					"Clicked" : "displayMap",
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe :{}
			},
			"mini_map/show" : {
				property :{
					animationWindow : function (obj,propt_name) {
						obj[propt_name] =["zhucaidan/mini_map","zhucaidan/mini_map/menu"];
					},
					associatedWindow : function (obj,propt_name) {
						obj[propt_name] = "mini_map/display";
					}
				},
				event :{
					"Clicked" : "displayMap",
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe :{}
			},
			//小地图背景图片的变大与变小
			"mini_map/add" :{
				property : {
					state : function (obj,propt_name){
						obj[propt_name]="add";
					},
					assocatedImage : function (obj,propt_name){
						obj[propt_name]="mini_map/image";
					}
				},
				event :{
					"Clicked" :"setMapChange",
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe :{}
			},
			"mini_map/sub" :{
				property : {
					state : function (obj,propt_name){
						obj[propt_name]="sub";
					},
					assocatedImage : function (obj,propt_name){
						obj[propt_name]="mini_map/image";
					}
				},
				event :{
					"Clicked" :"setMapChange",
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe :{}
			},
			//关闭建筑信息
			"building/close_button" :{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/building","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked" : "setVisibles"
				},
				subscribe :{}
			},
			//建筑信息
			"zhucaidan/building":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/building","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					associatedText : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/building","building/content"];
					},
					associatedImage : function (obj,propt_name){
						obj[propt_name] = "building/image";
					}
				},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe  : {
					"ui.build.information" : function (e){
						for(var index in JSON_SCHOOL.ui.BULID_DATA){
							var build_name = FUNCTION_DATA.get_windows("zhucaidan/building");
							build_name.SetProperty("text_theme",JSON_SCHOOL.ui.BULID_DATA[e.id][LANGUAGE_STATE.state].name); 
							var text = FUNCTION_DATA.get_windows("building/content");
							text.SetProperty("Text",JSON_SCHOOL.ui.BULID_DATA[e.id][LANGUAGE_STATE.state].intro);
						}
						var image_window = FUNCTION_DATA.get_windows(this.associatedImage);
						if(GUI.Imagesets.IsPresent("bulid_info")){
							GUI.Imagesets.DestroyImageset(GUI.Imagesets.Get("bulid_info"));
						}
						GUI.Imagesets.CreateImageset("bulid_info",JSON_SCHOOL.ui.BULID_DATA[e.id].image);
						image_window.SetProperty("image","set:bulid_info image:full_image");
						
						var windowse = new Array;
						var rootse = FUNCTION_DATA.get_windows(this.root);
						for (var i = 0;i<rootse.childCount;i++ )
						{
							var window_name = rootse.GetChildAtIdx(i);
							windowse.push(window_name.name);
						}
						if(FUNCTION_DATA.get_windows(this.associatedWindow[0]).GetProperty("Visible")=="False"){
							if(FUNCTION_DATA.get_windows("zhucaidan/shijiaokongzhi").GetProperty("Visible")=="True"){
								FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","True");
							}else{
								FUNCTION_DATA.set_hide(windowse);
								FUNCTION_DATA.set_show(this.associatedWindow);
							}
							
							var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name);
							if(!anim)
							{
								alert("动画获取失败了!!");
							}
							//alert("anim is undefined and createAnimation Start \n");
							var instant = GUI.Animations.InstantiateAnimation(anim);
							instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
							instant.Start();
						}else{
							var anim = GUI.Animations.GetAnimation(FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2");//FUNCTION_DATA.get_windows(this.associatedWindow[0]).name+"2"
							if(!anim)
							{
								alert("动画获取失败了!!");
							}
							//alert("anim is undefined and createAnimation Start \n");
							var instant = GUI.Animations.InstantiateAnimation(anim);
							instant.SetTargetWindow(FUNCTION_DATA.get_windows(this.associatedWindow[0]));
							instant.Start();
							//System.Sleep(5000);
							Event.Send({
									name : "player.ui.Animations.close",
									window : this.associatedWindow[0]
							});
							//FUNCTION_DATA.get_windows(this.associatedWindow[0]).SetProperty("Visible","False");
						}
						//this.SetProperty("Visible","True");
						//ZHUCAIDAN_LAYOUT.method.setVisibles();
					}
				}
			},
			"zhucaidan/mini_map":{
				property :{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//实时地图
			"mini_map/image":{
				property :{
					init : function (obj,propt_name){
						obj.SetProperty("UnifiedAreaRect","{{0,0},{0,0},{0,1024},{0,922}}");
					},
					areaSize : function (obj,propt_name){
						obj.SetProperty("UnifiedMaxSize",MINI_MAP.data[parseInt(MINI_MAP.index)].areaSize);
						obj.SetProperty("UnifiedMinSize",MINI_MAP.data[parseInt(MINI_MAP.index)].areaSize);
						obj[propt_name] = function (area){
							obj.SetProperty("UnifiedAreaRect",area);
						}
					}
				},
				event : {},
				subscribe : {
					"pctimer.player.position" : function (e){
						if(this.GetProperty("UnifiedMaxSize")!=MINI_MAP.data[parseInt(MINI_MAP.index)].areaSize)
						{
							this.SetProperty("UnifiedMaxSize",MINI_MAP.data[parseInt(MINI_MAP.index)].areaSize);
							this.SetProperty("UnifiedMinSize",MINI_MAP.data[parseInt(MINI_MAP.index)].areaSize);
						}
						/** 	2.人物在小地图上移动比率的计算	*/
						//获取信息并计算移动比率
						//map底图左上角的二维坐标
						var yEd_top_left_x = parseFloat(MINI_MAP.top_left.point2d.xpos)/1024*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].width);
						var yEd_top_left_y = parseFloat(MINI_MAP.top_left.point2d.ypos)/922*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].height);
						//map底图右下角的二维坐标
						var yEd_right_bottom_x = parseFloat(MINI_MAP.right_bottom.point2d.xpos)/1024*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].width);
						var yEd_right_bottom_y = parseFloat(MINI_MAP.right_bottom.point2d.ypos)/922*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].height);
						//3DMax中对应左上角的三维坐标x和y
						var Max_top_left_x = parseFloat(MINI_MAP.top_left.point3d.xpos);
						var Max_top_left_y = parseFloat(MINI_MAP.top_left.point3d.zpos);
						//3DMax中对应右下角的三维坐标x和y
						var Max_right_bottom_x = parseFloat(MINI_MAP.right_bottom.point3d.xpos);
						var Max_right_bottom_y = parseFloat(MINI_MAP.right_bottom.point3d.zpos);
						//计算小地图x方向上的移动比率
						var xrationx = -(Max_right_bottom_x - Max_top_left_x)/(yEd_right_bottom_x - yEd_top_left_x);
						//计算小地图y方向上的移动比率
						var zrationy = -(Max_right_bottom_y - Max_top_left_y)/(yEd_right_bottom_y - yEd_top_left_y);
						/** 	1.人物出生位置的计算 	*/
						//获取1024×922尺寸下的起始点二维坐标，计算其他尺寸下的起始点二维坐标
						var point2d_x = parseFloat(MINI_MAP.roleInitialize.point2d.xpos)/1024*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].width);
						var point2d_y = parseFloat(MINI_MAP.roleInitialize.point2d.ypos)/922*parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].height);
						//获取父窗口的绝对宽度和高度
						var parentWidth = this.parent.absoluteWidth;
						var parentHeight = this.parent.absoluteHeight;
						//计算小地图上标记点相对于父窗口--小地图窗口的偏移量
						var mark_x = parentWidth * (0.543108 + (0.650495 - 0.543108)/2);
						var mark_y = parentHeight * (0.535722 + (0.659561 - 0.535722)/2);
						//计算ui_x和ui_y的值
						var ui_x = mark_x - point2d_x;
						var ui_y = mark_y - point2d_y;
						var player_x = parseFloat(MINI_MAP.roleInitialize.point3d.xpos);
						var player_z = parseFloat(MINI_MAP.roleInitialize.point3d.zpos);
						var start_x = parseInt((e.position.x - player_x)/xrationx + ui_x);
						var start_y = parseInt((e.position.z - player_z)/zrationy + ui_y);
						var end_x = start_x + parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].width);
						var end_y = start_y + parseInt(MINI_MAP.data[parseInt(MINI_MAP.index)].height);
						var area = "{{0,"+start_x+"},{0," + start_y + "},{0," + end_x +"},{0," + end_y + "}}";
						this.areaSize(area);
					}
				}
			},
			//视角控制——主菜单
			"menu_bar/button_shijiaokongzhi":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/shijiaokongzhi","zhucaidan/mini_menu","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["shijiaokongzhi_tishi"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_shijiaokongzhi"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseClick":"shijiaokongzhi_in",
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi"
				},
				subscribe : {}
			},
			//视角控制窗口
			"zhucaidan/shijiaokongzhi":{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//视角控制——关闭 shijiaokongzhi/close_button
			"shijiaokongzhi/close_button":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_menu","serch/menu_bar"];
					}
				},
				event : {
					"Clicked":"shijiaokongzhi_close"
				},
				subscribe : {}
			},
			//快速定位——关闭
			"kuaisudingwei/close_button":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/kuaisudingwei"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["sand_table/menu","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked":"setVisibles"
				},
				subscribe : {}
			},
			"zhucaidan/multilingual":{
				property : {},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//设置切换——关闭
			"Multilingual/close_button":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/multilingual","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked":"setVisibles"
				},
				subscribe : {}
			},
			//汉语
			"Multilingual/one":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["Multilingual_ok_zhongwen/btn","Multilingual_ok_yingwen/btn"];
					},
					language : function (obj,propt_name){
						obj[propt_name]="chinese";
					}
				},
				event : {
					"Clicked":"change_language"
				},
				subscribe : {}
			},
			//英语
			"Multilingual/two":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["Multilingual_ok_yingwen/btn","Multilingual_ok_zhongwen/btn"];
					},
					language : function (obj,propt_name){
						obj[propt_name]="english";
					}
				},
				event : {
					"Clicked":"change_language"
				},
				subscribe : {}
			},
			//设置应用
			"shezhi_ok/btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/multilingual"];
					}
				},
				event : {
					"Clicked":"shezhi_ok_Clicked"
				},
				subscribe : {}
			},
			//沙盘返回
			"backing_out_Window/hoarse" :{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","shapan_bg/introschool","zhucaidan/sand_table","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["sand_table/menu"];
					}
				},
				event : {
					"Clicked":"backing_out_hoarse"
				},
				subscribe : {}
			},
			//沙盘介绍
			"shapan_bg/introschool" :{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["shapan_bg/introschool"];
					}
				},
				event : {
					"MouseEnter":"shapan_bg_introschool_Enter",
					"MouseLeave":"shapan_bg_introschool_Leave"
				},
				subscribe : {}
			},
			// //空中漫游一
			 "one_manyou_one":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou_kongzhi/window","zhucaidan/mini_menu"];
					}
				},
				event : {
					"Clicked":"one_manyou_one_logic"
				},
				subscribe : {}
			},
			// //空中漫游二
			"one_manyou_two":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou_kongzhi/window","zhucaidan/mini_menu"];
					}
				},
				event : {
					"Clicked":"one_manyou_two_logic"
				},
				subscribe : {}
			},
			// //地面漫游一
			"two_manyou_one":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou_kongzhi/window","zhucaidan/mini_menu"];
					}
				},
				event : {
					"Clicked":"two_manyou_one_logic"
				},
				subscribe : {}
			},
			// //地面漫游二
			"two_manyou_two":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou_kongzhi/window","zhucaidan/mini_menu"];
					}
				},
				event : {
					"Clicked":"two_manyou_two_logic"
				},
				subscribe : {}
			},
			//漫游控制窗口
			"zhucaidan/manyou_kongzhi/window":{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//漫游暂停
			"manyou_kongzhi/zanting/btn" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["manyou_kongzhi/zanting/btn","manyou_kongzhi/jixu/btn"];
					}
				},
				event : {
					"Clicked":"manyou_kongzhi_zanting"
				},
				subscribe : {}
			},
			//漫游继续
			"manyou_kongzhi/jixu/btn" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["manyou_kongzhi/zanting/btn","manyou_kongzhi/jixu/btn"];
					}
				},
				event : {
					"Clicked":"manyou_kongzhi_jixu"
				},
				subscribe : {}
			},
			//漫游停止
			"manyou_kongzhi/tingzhi/btn" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou_kongzhi/window","zhucaidan/menu_bar","zhucaidan/mini_menu"];
					}
				},
				event : {
					"Clicked":"manyou_kongzhi_tingzhi"
				},
				subscribe : {
					"player.manyou.stop" : function (){
						player.role_ok = "ok";
						//显示player
						player.pcarray['pcmesh'].SetVisible(true);
						//切换到相应人称视角 
						var personmode = player.personMode ; 
						if(personmode == "thirdperson"){
							iCamera.pcarray['pcdefaultcamera'].SetCamera("thirdperson");
						}else{
							iCamera.pcarray['pcdefaultcamera'].SetCamera("firstperson");
						}
						//恢复鼠标拖拽功能
						player.is_close_MouseAxis0 = false ;
						// 恢复键盘按键操作
						var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
						keyControl.EnableKeyboardEvents();
						//设置人物动画
						player.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', player.stopAnim],['cycle',true],['reset', true]);
						//复位操作
						Event.Send({
							name : 'effect.camera.change.player0' , 
							player : player 
						}) ;
						FUNCTION_DATA.set_visibles(this.associatedWindow);
						FUNCTION_DATA.get_windows("serch/menu_bar").SetProperty("Visible","True");
					}
				}
			},
			//校区切换关闭
			"qiehuan/close_button":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="root";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/qiehuan","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					}
				},
				event : {
					"Clicked":"qiehuan_Close"
				},
				subscribe : {}
			},
			//漫游——关闭
			"manyou/close_button":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="root";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked":"setVisibles"
				},
				subscribe : {}
			},
			//帮助——主菜单 menu_bar/button_shezhi
			"menu_bar/button_bangzhu":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/help","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					assoWindow : function (obj,propt_name){
						obj[propt_name]=["bangzhu_tishi"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_bangzhu"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseClick":"setVisibles",
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi"
				},
				subscribe : {}
			},
			//帮助
			"zhucaidan/help":{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//帮助一级
			"help/one" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["one/help/window","two/help/window","three/help/window"];
					}
				},
				event : {
					"MouseClick":"one_help_window"
				},
				subscribe : {}
			},
			//帮助二级
			"help/two" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["two/help/window","one/help/window","three/help/window"];
					}
				},
				event : {
					"MouseClick":"two_help_window"
				},
				subscribe : {}
			},
			//帮助三级
			"help/three" :{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["three/help/window","one/help/window","two/help/window"];
					}
				},
				event : {
					"MouseClick":"three_help_window"
				},
				subscribe : {}
			},
			//帮助关闭 help/close_button
			"help/close_button":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="root";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/help","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"Clicked":"setVisibles"
				},
				subscribe : {}
			},
			//视角控制左转
			"shijiaokongzhi/btn_shijiao_left":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "turn_left";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制右转
			"shijiaokongzhi/btn_shijiao_right":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "turn_right";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制上转
			"shijiaokongzhi/btn_shijiao_up":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "turn_up";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制下转
			"shijiaokongzhi/btn_shijiao_down":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "turn_down";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制左移
			"shijiaokongzhi/btn_shijiao_left2":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_left";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制右移
			"shijiaokongzhi/btn_shijiao_right2":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_right";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制上移
			"shijiaokongzhi/btn_shijiao_up2":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_up";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制下移
			"shijiaokongzhi/btn_shijiao_down2":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_down";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制前进
			"shijiaokongzhi/btn_shijiao_forward":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_ahead";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//视角控制后退
			"shijiaokongzhi/btn_shijiao_back":{
				property : {
					control : function (obj , propt_name){
						obj[propt_name] = "move_back";
					}
				},
				event : {
					"MouseButtonDown":"controlDown",
					"MouseButtonUp":"controlUp"
				},
				subscribe : {}
			},
			//导航提示
			"menu_bar/button_manyou":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_manyou"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"setVisibles"
				},
				subscribe : {}
			},
			//校区切换
			"menu_bar/button_qiehuan":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/manyou","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_qiehuan"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"qiehuan_xiaoqu"
				},
				subscribe : {}
			},
			//漫游
			"zhucaidan/manyou":{
				property : {},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"menu_bar/button_linshi1":{
				property : {
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_linshi1"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"linshi1"
				},
				subscribe : {}
			},
			"menu_bar/button_linshi2":{
				property : {
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_linshi2"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"linshi2"
				},
				subscribe : {}
			},
			"menu_bar/button_shijiaoqiehuan":{
				property : {
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_shijiaoqiehuan"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"shijiaoqiehuan"
				},
				subscribe : {}
			},
			"menu_bar/button_zoupaoqiehuan":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zoupaoqiehuan1","menu_bar/button_zoupaoqiehuan"];
					},
					selected : function (obj,propt_name){
						obj[propt_name]="menu_bar/button_zoupaoqiehuan1";
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zoupaoqiehuan1"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"zoupaoqiehuan"
				},
				subscribe : {}
			},
			"menu_bar/button_zoupaoqiehuan1":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zoupaoqiehuan","menu_bar/button_zoupaoqiehuan1"];
					},
					selected : function (obj,propt_name){
						obj[propt_name]="menu_bar/button_zoupaoqiehuan";
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zoupaoqiehuan"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"zoupaoqiehuan"
				},
				subscribe : {}
			},
			"menu_bar/button_yuyanqiehuan":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/multilingual","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_yuyanqiehuan"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"setVisibles"
				},
				subscribe : {}
			},
			"menu_bar/button_paizhao":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/tishikuang_Window/erji","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_paizhao"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"paizhao"
				},
				subscribe : {
					"ui.take.photos.look" : function (e){
						var xiaotu_int = 1;
						for(var i=parseInt(e.photos_name);i>(parseInt(e.photos_name)-5);i--){
							if(i>0){
								var image_window = FUNCTION_DATA.get_windows("tishikuang_Window/xiaotu"+xiaotu_int);
								if(GUI.Imagesets.IsPresent("photos_info"+i)){
									GUI.Imagesets.DestroyImageset(GUI.Imagesets.Get("photos_info"+i));
								}
								GUI.Imagesets.CreateImageset("photos_info"+i,"/abc"+i+".png");
								image_window.SetProperty("bg_image","set:photos_info"+i+" image:full_image");
								if(xiaotu_int==1){
									FUNCTION_DATA.get_windows("tishikuang_Window/datu").SetProperty("bg_image","set:photos_info"+i+" image:full_image");
								}
								xiaotu_int+=1;
							}else{
								break;
							}
						}
						player.window_name_bar = this.menu_window[0];
						ZHUCAIDAN_LAYOUT.method.click_set_gaoliang_image();
						FUNCTION_DATA.set_visibles(this.associatedWindow);
						var windowse = new Array;
						var rootse = FUNCTION_DATA.get_windows(this.root);
						for (var i = 0;i<rootse.childCount;i++ )
						{
							var window_name = rootse.GetChildAtIdx(i);
							windowse.push(window_name.name);
						}
						FUNCTION_DATA.set_hide(windowse);
						FUNCTION_DATA.set_visibles(this.associatedWindow);	
	
					}		
                }
			},
			//展示相片窗口
			"zhucaidan/tishikuang_Window/erji":{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"tishikuang_Window/two/erji":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/tishikuang_Window","tishikuang_Window/xiaotu1_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu4_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_close_look"
				},
				subscribe : {}
			},
			
			//点击小相片
			"tishikuang_Window/xiaotu1":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["tishikuang_Window/xiaotu1","tishikuang_Window/xiaotu1_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu4_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_photos_look"
				},
				subscribe : {}
			},
			"tishikuang_Window/xiaotu2":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["tishikuang_Window/xiaotu2","tishikuang_Window/xiaotu2_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu1_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu4_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_photos_look"
				},
				subscribe : {}
			},
			"tishikuang_Window/xiaotu3":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["tishikuang_Window/xiaotu3","tishikuang_Window/xiaotu3_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu1_ditu","tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu4_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_photos_look"
				},
				subscribe : {}
			},
			"tishikuang_Window/xiaotu4":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["tishikuang_Window/xiaotu4","tishikuang_Window/xiaotu4_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu1_ditu","tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_photos_look"
				},
				subscribe : {}
			},
			"tishikuang_Window/xiaotu5":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["tishikuang_Window/xiaotu5","tishikuang_Window/xiaotu5_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu1_ditu","tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu4_ditu"];
					}
				},
				event : {
					"MouseClick":"click_photos_look"
				},
				subscribe : {}
			},
			//显示照片的窗口
			"zhucaidan/tishikuang_Window" :{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			//提示ui框关闭
			"tishikuang_Window/close_button/erji":{
				property:{},
				event : {
					"MouseClick":"tishikuang_erji_close"
				},
				subscribe : {}
			},
			//相片ui关闭
			"tishikuang_Window/close_button":{
				property:{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/tishikuang_Window","tishikuang_Window/xiaotu1_ditu"];
					},
					image_window :function (obj,propt_name){
						obj[propt_name] = ["tishikuang_Window/xiaotu2_ditu","tishikuang_Window/xiaotu3_ditu","tishikuang_Window/xiaotu4_ditu","tishikuang_Window/xiaotu5_ditu"];
					}
				},
				event : {
					"MouseClick":"click_close_look"
				},
				subscribe : {}
			},
			//主菜单——快速定位 岳朝凤修改 2012-6-13
			"menu_bar/button_shezhi":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/kuaisudingwei","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_shezhi"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					},
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"kuaisudingwei"
				},
				subscribe : {}
			},
			/*360全景展示 --author：高伟*/
			"menu_bar/button_zhanshi":{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zhanshi"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"zhanshi_scenen"
				},
				subscribe : {}
			},
			"menu_bar/button_zhuye":{
				property:{
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_zhuye"];
					},
					url:function(obj,propt_name){
						obj[propt_name]=URL.home_url;
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"go_to_url"
				},
				subscribe : {}
			},
			//快速定位窗口
			"zhucaidan/kuaisudingwei":{
				property:{},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"menu_bar/button_xiaoditu":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["shapan_bg/introschool","school_sand","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];//
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_xiaoditu"];
					},
					image_window :function (obj,propt_name){
							obj[propt_name] = ["school_sand/menu/0/image","school_sand/menu/1/image","school_sand/menu/2/image","school_sand/menu/3/image"
							,"school_sand/menu/4/image","school_sand/menu/5/image","school_sand/menu/6/image","school_sand/menu/7/image"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"hoarse_in"
				},
				subscribe : {}
			},
			"menu_bar/button_xiaoyuanjieshao":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["school_info","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					menu_window : function (obj,propt_name){
						obj[propt_name]=["menu_bar/button_xiaoyuanjieshao"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseEnter":"display_tishi",
					"MouseLeave":"cancel_tishi",
					"MouseClick":"xiaoyuanjieshao_win"
				},
				subscribe : {}
			},
			/*	屏蔽ui穿透--校园介绍 岳朝凤新增 2012-6-14 begin	*/
			"school_info":{
				property : {},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"about_video/celebration/window":{
				property : {
					init : function (obj,propt_name){
						//动态的创建视频Button
						for(var i in VIDEO_FREQUENCY){
							//创建子button的外框
							var w_info = VIDEO_FREQUENCY[i].english;
							var w_button = GUI.Windows.CreateWindow("General/DefaultWindow",w_info);
							
							if(w_button!=undefined){
								w_button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
								w_button.SetProperty("UnifiedAreaRect","{{0.0167662,0},{0.158023,0},{0.976248,0},{0.970228,0}}");
								w_button.SetProperty("MousePassThroughEnabled","True");
								w_button.parent=FUNCTION_DATA.get_windows("about_video/celebration/window");
							
								if(i!=0){
									w_button.SetProperty("Visible","False");
								}else{
									w_button.SetProperty("Visible","True");
								}	
							}
							var pos_x = 0.0211875;
							var pos_y = 0.0729185;
							for(var index in VIDEO_FREQUENCY[i].genus){
								if(VIDEO_FREQUENCY[i].genus[index].chinese != ""){
									var info = "shipin/info_btn"+i+index;
									var button = GUI.Windows.CreateWindow("General/RadioButton",info);
									button.SetProperty("HoverImage","set:introschool image:btn_down");
									button.SetProperty("NormalImage","set:introschool image:btn_normal");
									button.SetProperty("SelectedImage","set:introschool image:btn_down");
									button.SetProperty("UnifiedMaxSize","{{1,0},{1,0}}");
									button.SetProperty("UnifiedAreaRect","{{0.0270913,0},{"+pos_x+",0},{0.152953,0},{"+pos_y+",0}}");
									button.SetProperty("text_theme",VIDEO_FREQUENCY[i].genus[index][LANGUAGE_STATE.state]);
									button.parent=FUNCTION_DATA.get_windows(w_info);
									pos_x+=0.07;
									pos_y+=0.07;
								}
							}
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"about_school/window/open" : {
				property : {},
				event : {
					"MouseClick":"about_school_goto_url"
				},
				subscribe :{}
			},
			"about_video/window/open" : {
				property : {},
				event : {
					"MouseClick":"about_video_goto_url"
				},
				subscribe :{}
			},
			/*	屏蔽ui穿透--校园介绍 岳朝凤新增 2012-6-14 end	*/
			"music_close/btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["yinyue_on/btn","yinyue_ok/btn"];
					}
				},
				event : {
					"MouseClick":"music_close"
				},
				subscribe : {}
			},
			"music_open/btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["yinyue_ok/btn","yinyue_on/btn"];
					}
				},
				event : {
					"MouseClick":"music_open"
				},
				subscribe : {}
			},
			"jianzhuxinxi_tishi":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["jianzhuxinxi_tishi"];
					}
				},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {
					"ui.build.name.information" : function (e){
						////CONSOLE.WriteLine("mouse_x:"+e.mouse_x);
						////CONSOLE.WriteLine("mouse_y:"+e.mouse_y);
						start_x = e.mouse_x/e.width;
						end_x = start_x + 0.1;
						start_y = e.mouse_y/e.height;
						end_y = start_y + 0.10;
						areaSize = "{{"+start_x + ",0},{ " +start_y +",0},{ " + end_x +",0},{ " + end_y +",0}}" ;
						var win_open_or_close = "false";
						var win_info = new Array;
						win_info.push("zhucaidan/building");
						win_info.push("school_info");
						//win_info.push("zhucaidan/introschool");
						win_info.push("zhucaidan/kuaisudingwei");
						win_info.push("zhucaidan/shijiaokongzhi");
						win_info.push("zhucaidan/help");
						win_info.push("zhucaidan/manyou");
						win_info.push("zhucaidan/multilingual");
						win_info.push("zhucaidan/tishikuang_Window");
						
						for(var index in win_info){
							////CONSOLE.WriteLine(index);
							if(FUNCTION_DATA.get_windows(win_info[index]).GetProperty("Visible") == "True"){
								win_open_or_close = "true";
							}
						}
						////CONSOLE.WriteLine(player.mini_map_state);
						if(win_open_or_close == "false" && player.mini_map_state == "false"){
							if(e.id == "false"){
								////CONSOLE.WriteLine("AAAAAAAAAA");
								var info_window = FUNCTION_DATA.get_windows(this.associatedWindow);
								info_window.SetProperty("Visible","False");
								GUI.System.SetDefaultMouseCursor("zhucaidan","mouse_jian");
							}else{
								////CONSOLE.WriteLine("BBBBBBBBBB");
								var info;
								if(LANGUAGE_STATE.state =="chinese"){
									info =JSON_SCHOOL.ui.BULID_DATA[e.id].chinese.name;
								}else{
									info =JSON_SCHOOL.ui.BULID_DATA[e.id].english.name;
								}
								var info_window = FUNCTION_DATA.get_windows(this.associatedWindow);
								info_window.SetProperty("text_theme",info);
								info_window.SetProperty("UnifiedAreaRect",areaSize);
								info_window.SetProperty("Visible","True");
								GUI.System.SetDefaultMouseCursor("zhucaidan","xinxi_hover");	
							}
						}
						if(win_open_or_close == "true" || player.mini_map_state=="true"){
							GUI.System.SetDefaultMouseCursor("zhucaidan","mouse_jian");
							var info_window = FUNCTION_DATA.get_windows(this.associatedWindow);
							info_window.SetProperty("Visible","False");
						}
					}
				}
			},
			"mini_map/obstruct":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["mini_map/obstruct"];
					}
				},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"zhucaidan/mini_map/menu":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/mini_map/menu"];
					}
				},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			//新手操作帮助
			"zhucaidan/new_help_choose":{
				property : {},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"new_help_choose/no_btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/new_help_choose"];
					}
				},
				event : {
					"MouseClick":"new_help_choose_no"
				},
				subscribe : {}
			},
			"new_help_choose/yes_btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["zhucaidan/new_help_choose","zhucaidan/new_help1"];
					}
				},
				event : {
					"MouseClick":"new_help_choose_yes"
				},
				subscribe : {}
			},
			"new_help1/renwuduigou_btn":{
				property :{
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["new_help1/renwuduigou_btn"];
					}
				},
				event :{},
				subscribe:{
					"ui.help.mouse": function(e){
						if(player.mouseOver== true){
							var renwu_duigou_win = FUNCTION_DATA.get_windows(this.associatedWindow);
							renwu_duigou_win.SetProperty("Visible","True");
							//关闭新手指导1，打开新手指导2
							var anim = GUI.Animations.GetAnimation("set_help_alpha_three");
								if(!anim)
								{
									alert("动画获取失败了!!");
								}
								var instant = GUI.Animations.InstantiateAnimation(anim);
								var win = FUNCTION_DATA.get_windows("zhucaidan/new_help1");
								instant.SetTargetWindow(win);
								instant.Start();
								
								var wancheng_win = FUNCTION_DATA.get_windows("zhucaidan/new_help2");
								wancheng_win.SetProperty("Alpha","0.0");
								wancheng_win.SetProperty("Visible","True");
								player.isHelp= true;
								anim = GUI.Animations.GetAnimation("set_help_alpha_four");
								if(!anim)
								{
									alert("动画获取失败了!!");
								}
								var instant = GUI.Animations.InstantiateAnimation(anim);
								var win = FUNCTION_DATA.get_windows("zhucaidan/new_help2");
								instant.SetTargetWindow(win);
								instant.Start();
								player.mouseOver= false;
						}
						
					}
				}
			},
			"new_help2/renwuduigou_btn":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["new_help2/renwuduigou_btn"];
					}
				},
				event : {
					
				},
				subscribe : {
					"ui.help.forward" : function(e){
							if(player.anjian_state == "shang"){
								var renwu_xia_win = FUNCTION_DATA.get_windows("new_help2/renwufangxiang_btn");
								renwu_xia_win.SetProperty("button_bg","set:xinshourenwu image:jianpan_anniu_xia");
								var renwu_win_text = FUNCTION_DATA.get_windows("new_help2/info");
								if(player.reloading_lan_state == "chinese"){
									renwu_win_text.SetProperty("text_theme","手动漫游时，可使用键盘方向键(下)或(S)控制人物向后行走。");
								}else{
									renwu_win_text.SetProperty("text_theme","Manually when roaming, use the keyboard arrow keys control character to walk forward.");
								}
								player.anjian_state = "xia";
							}
						},
						"ui.help.backward" : function(e){
							if(player.anjian_state == "xia"){
								var renwu_zuo_win = FUNCTION_DATA.get_windows("new_help2/renwufangxiang_btn");
								renwu_zuo_win.SetProperty("button_bg","set:xinshourenwu image:jianpan_anniu_zuo");
								var renwu_win_text = FUNCTION_DATA.get_windows("new_help2/info");
								if(player.reloading_lan_state == "chinese"){
									renwu_win_text.SetProperty("text_theme","手动漫游时，可使用键盘方向键(左)或(A)控制人物向左旋转。");
								}else{
									renwu_win_text.SetProperty("text_theme","Manually when roaming, use the keyboard arrow keys control character to walk forward.");
								}
								player.anjian_state = "zuo";
							}
						},
						"ui.help.rotateLeft" : function(e){
							if(player.anjian_state == "zuo"){
								var renwu_you_win = FUNCTION_DATA.get_windows("new_help2/renwufangxiang_btn");
								renwu_you_win.SetProperty("button_bg","set:xinshourenwu image:jianpan_anniu_you");
								var renwu_win_text = FUNCTION_DATA.get_windows("new_help2/info");
								if(player.reloading_lan_state == "chinese"){
									renwu_win_text.SetProperty("text_theme","手动漫游时，可使用键盘方向键(右)或(D)控制人物向右旋转。");
								}else{
									renwu_win_text.SetProperty("text_theme","Manually when roaming, use the keyboard arrow keys control character to walk forward.");
								}
								player.anjian_state = "you";
							}
						},
					"ui.help.rotateRight" : function(e){
						if(player.anjian_state == "you"){
							var renwu_duigou_win = FUNCTION_DATA.get_windows(this.associatedWindow);
							renwu_duigou_win.SetProperty("Visible","True");
							var anim = GUI.Animations.GetAnimation("set_help_alpha_three");
							if(!anim)
							{
								alert("动画获取失败了!!");
							}
							var instant = GUI.Animations.InstantiateAnimation(anim);
							var win = FUNCTION_DATA.get_windows("zhucaidan/new_help2");
							instant.SetTargetWindow(win);
							instant.Start();
							
							var wancheng_win = FUNCTION_DATA.get_windows("zhucaidan/new_help_over");
							wancheng_win.SetProperty("Alpha","0.0");
							wancheng_win.SetProperty("Visible","True");
							anim = GUI.Animations.GetAnimation("set_help_alpha_two");
							if(!anim)
							{
								alert("动画获取失败了!!");
							}
							var instant = GUI.Animations.InstantiateAnimation(anim);
							var win = FUNCTION_DATA.get_windows("zhucaidan/new_help_over");
							instant.SetTargetWindow(win);
							instant.Start();
							player.isHelp= false;
							player.anjian_state = "shang";
						}
					}
				}
			},
			"search/Editbox":{
				property :{},
				event :{
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave",
					"MouseClick":"serch_Editbox",
					"TextChanged":"serch_ecitbox_change",
					"Activated":"serch_ecitbox_Activated",
					"Deactivated":"serch_ecitbox_Deactivated"
				},
				subscribe : {
					"search_effect_dataBack" : function(e){
						player.list_info = e.data.split("_");
						player.list_info.pop(player.list_info[player.list_info.length]);
						////CONSOLE.WriteLine("list_info: "+player.list_info);
					}
				}
			},
			"search/button" :{
				property :{
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					}
				},
				event :{
					"MouseClick":"serch_info_open"
				},
				subscribe : {}
			},
			"search/info_close" :{
				property:{
					root : function (obj,propt_name){
						obj[propt_name]="root";
					},
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map"];
					}
				},
				event : {
					"Clicked":"serch_info_close",
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"serch/info/text" :{
				property:{},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"serch/btn/text" :{
				property:{},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"zhucaidan/menu":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+(1-UpdateWidth)/2+",0},{0,0},{"+parseFloat((1-UpdateWidth)/2+UpdateWidth)+",0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{"+parseFloat(1-UpdateHeight)+",0},{1,0},{1,0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"help/for_ui/mini_map":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+parseFloat(1-UpdateWidth)+",0},{0,0},{1,0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{0,0},{1,0},{"+UpdateHeight+",0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"zhucaidan/mini_menu":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{
							obj.SetProperty("UnifiedAreaRect","{{"+parseFloat(1-UpdateWidth)+",0},{0,0},{1,0},{1,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0,0},{0,0},{1,0},{"+UpdateHeight+",0}}");
						}
					}
				},
				event : {},
				subscribe : {}
			},
			"serch/content_info" :{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.00781245,0},{0.0876672,0},{0.363282,0},{0.655275,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.00781245,0},{0.0876672,0},{"+parseFloat(0.00781245+(0.363282-0.00781245)*UpdateWidth)+",0},{0.655275,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.00781245,0},{0.0876672,0},{0.363282,0},{"+parseFloat(0.0876672+(0.655275-0.0876672)*UpdateHeight)+",0}}");
						}
					}
				},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {}
			},
			"school_sand_serch/window/info":{
				property:{
					init:function(obj,propt_name){
						if((SystemWidth/SystemHeight)>1024/768)
						{//{{0.598523,0},{0.288154,0},{0.933079,0},{0.609733,0}}
							obj.SetProperty("UnifiedAreaRect","{{0.598523,0},{0.288154,0},{"+parseFloat(0.598523+(0.933079-0.598523)*UpdateWidth)+",0},{0.609733,0}}");
						}else{
							obj.SetProperty("UnifiedAreaRect","{{0.598523,0},{0.288154,0},{0.933079,0},{"+parseFloat(0.288154+(0.609733-0.288154)*UpdateHeight)+",0}}");
						}
					}
				},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"school_sand_serch/window/close":{
				property:{},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave",
					"MouseClick":"serch_win_info_close"
				},
				subscribe : {}
			},
			"school_sand_serch/window/text":{
				property:{},
				event : {
					"MouseEnter":"mini_map_jiantou",
					"MouseLeave":"mimi_map_leave"
				},
				subscribe : {}
			},
			"display/full_view_prompt":{
				property : {
					associatedWindow : function (obj,propt_name){
						obj[propt_name]=["display/full_view_prompt","next_gate_Window/full_view","backing_out_Window/full_view"];
					}
				},
				event : {
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea"
				},
				subscribe : {
					"ui.full_view_prompt.display" : function (e){
						// iprint(e.show);
						//判断是否显示UI提示框
						if(e.show){
							FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","True");
						}else{
							FUNCTION_DATA.get_windows("display/full_view_prompt").SetProperty("Visible","False");
						}
					}
				}
			},
			"full_view_prompt/yes_btn":{
				property : {
					root : function (obj,propt_name){
						obj[propt_name]="zhucaidan/menu";
					},
					hideWindow : function(obj,propt_name){
						obj[propt_name] = ["display/full_view_prompt","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					},
					showWindow : function(obj,propt_name){
						obj[propt_name] = ["full_view_next/menu","full_view_back/menu","full_view_help/menu"];
					},
					searchWindow : function (obj,propt_name){
						obj[propt_name]=["serch/content_info","school_sand_serch/window/info"];
					}
				},
				event : {
					"MouseClick" : "enter_full_view"
				},
				subscribe : {}
			},
			"full_view_prompt/no_btn":{
				property : {
					hideWindow : function(obj,propt_name){
						obj[propt_name] = ["display/full_view_prompt"];
					}
				},
				event : {
					"MouseClick" : "no_enter_full_view"
				},
				subscribe : {}
			},
			"next_gate_Window/full_view":{
				property : {
					hideWindow : function(obj,propt_name){
						obj[propt_name] = ["full_view_next/menu","full_view_back/menu","full_view_help/menu","help/full_view"];
					},
					showWindow : function(obj,propt_name){
						obj[propt_name] = ["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					}
				},
				event:{
					"MouseClick" : "from_next_gate_exit"
				},
				subscribe:{}
			},
			"backing_out_Window/full_view":{
				property : {
					hideWindow : function(obj,propt_name){
						obj[propt_name] = ["full_view_next/menu","full_view_back/menu","full_view_help/menu","help/full_view"];
					},
					showWindow : function(obj,propt_name){
						obj[propt_name] = ["zhucaidan/menu_bar","zhucaidan/mini_map/menu","zhucaidan/mini_map","serch/menu_bar"];
					}
				},
				event:{
					"MouseClick" : "exit_full_view"
				},
				subscribe:{}
			},
			"ask_help_Window/full_view":{
				property : {
					showWindow : function(obj,propt_name){
						obj[propt_name] = ["help/full_view"];
					}
				},
				event:{
					"MouseEntersArea":"but_enterarea",
					"MouseLeavesArea":"but_leavearea",
					"MouseClick" : "full_view_Instruction"
				},
				subscribe:{}
			},
			"help/full_view/close_button":{
				property : {
					hideWindow : function(obj,propt_name){
						obj[propt_name] = ["help/full_view"];
					}
				},
				event:{
					"MouseClick" : "full_view_Instruction_close"
				},
				subscribe:{}
			}
		}
	}
} catch( e )
{
	alert( e );
}