/**************************************************************************
 *  This file is part of the UGE(Uniform Game Engine) of SPP.
 *  Copyright (C) by SanPolo Co.Ltd. 
 *  All rights reserved.
 *  See http://spp.spolo.org/ for more information.
 *
 *  SanPolo Co.Ltd
 *  http://spp.spolo.org/  sales@spolo.org spp-support@spolo.org
**************************************************************************/
try{
	(function(){
		// 进入沙盘模式
		Event.Subscribe(function(e){
			//动态显示沙盘buttom
			if(FUNCTION_DATA.get_windows("school_sand").GetProperty("Visible")=="False"){
				FUNCTION_DATA.get_windows("school_sand").SetProperty("Visible","True");
			}
			if(FUNCTION_DATA.get_windows("school_sand/menu").GetProperty("Visible")=="False"){
				FUNCTION_DATA.get_windows("school_sand/menu").SetProperty("Visible","True");
			}
			if(FUNCTION_DATA.get_windows("school_sand/button").GetProperty("Visible")=="False"){
				FUNCTION_DATA.get_windows("school_sand/button").SetProperty("Visible","True");
			}
			//沙盘按钮坐标
			var sand_zuobiao = new Array()
			sand_zuobiao[0]="{{0.000551693,0},{0.513469,0},{0.0603816,0},{0.949515,0}}";
			sand_zuobiao[1]="{{0.0620151,0},{0.513469,0},{0.121845,0},{0.949515,0}}";
			sand_zuobiao[2]="{{0.117625,0},{0.513469,0},{0.177455,0},{0.949515,0}}";
			sand_zuobiao[3]="{{0.176161,0},{0.513469,0},{0.235991,0},{0.949515,0}}";
			sand_zuobiao[4]="{{0.234698,0},{0.513469,0},{0.294528,0},{0.949515,0}}";
			sand_zuobiao[5]="{{0.293235,0},{0.513469,0},{0.353064,0},{0.949515,0}}";
			sand_zuobiao[6]="{{0.351771,0},{0.513469,0},{0.411601,0},{0.949515,0}}";
			sand_zuobiao[7]="{{0.410308,0},{0.513469,0},{0.470137,0},{0.949515,0}}";
			//沙盘按钮提示坐标
			// var sand_tzuobiao = new Array()
			// sand_tzuobiao[0]="{{0.00195128,0},{0.177487,0},{0.0790248,0},{0.558823,0}}";
			// sand_tzuobiao[1]="{{0.0595123,0},{0.168866,0},{0.144391,0},{0.558823,0}}";
			// sand_tzuobiao[2]="{{0.118049,0},{0.168866,0},{0.220488,0},{0.558823,0}}";
			// sand_tzuobiao[3]="{{0.178537,0},{0.160246,0},{0.268293,0},{0.550202,0}}";
			// sand_tzuobiao[4]="{{0.236098,0},{0.151625,0},{0.324878,0},{0.558823,0}}";
			// sand_tzuobiao[5]="{{0.294634,0},{0.160246,0},{0.377561,0},{0.558823,0}}";
			// sand_tzuobiao[6]="{{0.353171,0},{0.168866,0},{0.408781,0},{0.558823,0}}";
			// sand_tzuobiao[7]="{{0.411707,0},{0.177487,0},{0.47122,0},{0.558823,0}}";
			var k=0;
			var txt;
			//沙盘按钮
			if(SAND_ENTRY["sand_entry"]=="entry_true"){
				for(var i=0;i<JSON_SCHOOL["ui"]["categorys"]["category"]["length"];i++){
					//动态设置 按钮位置 提示 提示位置   	
					FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("UnifiedAreaRect",sand_zuobiao[k]);
					if(LANGUAGE_STATE["state"]=="chinese"){
					    txt=JSON_SCHOOL["ui"]["categorys"]["category"][i]["chinese"];
						FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",JSON_SCHOOL["ui"]["categorys"]["category"][i]["chinese"]);
						if(txt.length<=3){
								FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect","{{"+(k*0.06)+ ",0},{0.177487,0},{"+(((k+1)*0.06+0.020)-((5-txt.length)*0.0035))+",0},{0.558823,0}}");
						}
						if(txt.length>3){
							FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect","{{"+(k*0.06)+ ",0},{0.177487,0},{"+(((k+1)*0.06+0.020)+((txt.length-3)*0.02))+",0},{0.558823,0}}");
						}
					}else {
						 FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",JSON_SCHOOL["ui"]["categorys"]["category"][i]["english"]);
					}
				//	FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect",sand_tzuobiao[k]);
					//for(index2 in JSON_SAND){
					//	y = parseFloat(index2);
					//	if(JSON_SCHOOL["ui"]["categorys"]["category"][i][language]==JSON_SAND[y][language]){
					FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("button_bg","set:sand_button"+(i+1)+"-hover image:full_image");
					FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/image").SetProperty("image","set:sand_button"+(i+1)+"-normal image:full_image");
					//	}
					//}
					FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("Visible","true");
					k++;
				}
				for(var j=JSON_SCHOOL["ui"]["categorys"]["category"]["length"]; j<8;j++){
					FUNCTION_DATA.get_windows("school_sand/menu/"+j).SetProperty("Visible","false");
				}
			}
			//360按钮
			if(SAND_ENTRY["sand_entry"]=="entry_true1"){
				var i;
				var FLASH_PANORAMA_lenth = 0;
				for(index in FLASH_PANORAMA){
					FLASH_PANORAMA_lenth +=1;
				}
				//只有一个按钮的话 不显示
				if(FLASH_PANORAMA_lenth==1){
					for(index in FLASH_PANORAMA){
						i = parseFloat(index);
						//动态设置 按钮位置 提示 提示位置   	
						FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("UnifiedAreaRect",sand_zuobiao[k]);
						if(LANGUAGE_STATE["state"]=="chinese"){
							FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",FLASH_PANORAMA[i]["chinese"]);
						}else {
							 FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",FLASH_PANORAMA[i]["english"]);
						}
						//FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect",sand_tzuobiao[k]);
						FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("Visible","false");
						k++;	
					}
					//判断当前语言模式
					var language;
					if(LANGUAGE_STATE["state"]=="chinese"){
						language="chinese";
					}else{
						language="english";
					}
					if(FUNCTION_DATA.get_windows("school_sand/sand").GetProperty("Visible")=="False"){
						FUNCTION_DATA.get_windows("school_sand/sand").SetProperty("Visible","True");
					}
					for(var u=1;u<FLASH_PANORAMA["0"]["genus"]["length"]+1;u++)
					{
						if(FLASH_PANORAMA["0"]["genus"][u-1]["name"][language]!=""){
							FUNCTION_DATA.get_windows("sand/1_"+u).jointPivot = [FLASH_PANORAMA["0"]["genus"][u-1]["position_x"],FLASH_PANORAMA["0"]["genus"][u-1]["position_y"],FLASH_PANORAMA["0"]["genus"][u-1]["position_z"]];
							FUNCTION_DATA.get_windows("sand/1_"+u).jointMethod = 5;
							FUNCTION_DATA.get_windows("1_"+u+"/button/t").SetProperty("text_theme",FLASH_PANORAMA["0"]["genus"][u-1]["name"][language]);
							FUNCTION_DATA.get_windows("sand/1_"+u).SetProperty("Visible","True");
							//建筑物名称大于4个字的时候动态加长气泡
							var txt=FLASH_PANORAMA[0]["genus"][u-1]["name"][language];
							if(language=="english"){
								if(txt.length<8){
									FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((8-txt.length)*0.02))+",0},{" + 1 + ",0}}");
								}
								if(txt.length>8){
									FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-8)*0.04))+",0},{" + 1 + ",0}}");
								}
							}else{
								if(txt.length<4){
									FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383-((4-txt.length)*0.07))+",0},{" + 1 + ",0}}");
								}
								if(txt.length>4){
									FUNCTION_DATA.get_windows("1_"+u+"/button").SetProperty("UnifiedAreaRect","{{" + 0 + ",0},{" + 0.54 + ",0},{" + (0.354383+((txt.length-4)*0.07))+",0},{" + 1 + ",0}}");
								}
							}
						}
					}
				}else{
					for(index in FLASH_PANORAMA){
						i = parseFloat(index);
						//动态设置 按钮位置 提示 提示位置   	
						FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("UnifiedAreaRect",sand_zuobiao[k]);
						if(LANGUAGE_STATE["state"]=="chinese"){
							txt=FLASH_PANORAMA[i]["chinese"];
							if(txt.length<=3){
								FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect","{{"+(k*0.06)+ ",0},{0.177487,0},{"+(((k+1)*0.06+0.020)-((5-txt.length)*0.0035))+",0},{0.558823,0}}");
							}
							if(txt.length>3){
								FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect","{{"+(k*0.06)+ ",0},{0.177487,0},{"+(((k+1)*0.06+0.020)+((txt.length-3)*0.02))+",0},{0.558823,0}}");
							}
							FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",FLASH_PANORAMA[i]["chinese"]);
						}else {
							 FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("text_theme",FLASH_PANORAMA[i]["english"]);
						}
						//FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/word").SetProperty("UnifiedAreaRect",sand_tzuobiao[k]);
						FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("button_bg","set:360_button"+(i+1)+"-hover image:full_image");
						FUNCTION_DATA.get_windows("school_sand/menu/"+i+"/image").SetProperty("image","set:360_button"+(i+1)+"-normal image:full_image");
						FUNCTION_DATA.get_windows("school_sand/menu/"+i).SetProperty("Visible","true");
						k++;	
					}
				}
				for(var j=i+1; j<8;j++){
					FUNCTION_DATA.get_windows("school_sand/menu/"+j).SetProperty("Visible","false");
				}
			}
			/* 复位操作 */
			Event.Send({
				name : 'effect.camera.change.player0' , 
				player : player 
			}) ; 
			//提高环境亮度
			// Event.Send({
				// name : "player.effect.enter.special.mode", 
				// player : player 
			// });
			player.is_close_MouseAxis0 = false ; 
			player.is_inShaPan = true ; 
			// 当角色处于鼠标点击移动状态时 , 进入沙盘模式 , 需要立刻停止角色移动
			Event.Send({
				name:"player_mouse_click_move_stop"
			});
			// 沙盘模式需要切换为第三人称视角 , 否则会有BUG
			if(player.personMode == "firstperson"){
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
			}
			// 把角色隐藏
			player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
			// 保存角色沙盘模式之前的位置
			player.prePosition = player.pcarray['pcmesh'].position;
			player.preRotation = player.pcarray['pcmesh'].rotation;
			// 设置重力为0
			player.pcarray['pclinearmovement'].SetProperty('gravity', 0);
			// 修改速度为 沙盘模式 速度
			player.previous_forward_state = player.current_forward_state;	//记录角色的上一个状态
			player.current_forward_state = "sand";
			// 将角色放到地面以下 (或者 去除角色的碰撞检测)
			player.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				['position',SAND_VIEW.position],
				['rotation',SAND_VIEW.rotation]
			);
			var cameraSets = iCamera.sandMode;
			iCamera.minDistance = cameraSets['minDistance'];		// 摄像机离角色的最近距离
			iCamera.maxDistance = cameraSets['maxDistance'];		// 摄像机离角色的最远距离
			iCamera.wheelSpeed = cameraSets['wheelSpeed'];	        // 摄像机的拉近/远速度
			// 改变摄像机的 distance 
			iCamera.pcarray["pcdefaultcamera"].SetProperty("distance", SAND_VIEW.distance);	//改变出生时摄像机的距离
			// 改变摄像机的 俯角
			iCamera.pcarray["pcdefaultcamera"].SetProperty("pitch", SAND_VIEW.pitch);
			// 进入沙盘模式后,要关闭鼠标点击地面行走
			player.canMouseCtrlMove = false;
		},"player.effect.hoarse");

		// 退出沙盘模式
		Event.Subscribe(function(e){
			player.is_inShaPan = false ; 
			player.is_close_MouseAxis0 = true ; 			
			// 设置重力
			player.pcarray['pclinearmovement'].SetProperty('gravity', 19.6);
			//还原沙盘入口判断的值
			SAND_ENTRY["sand_entry"]="entry";
			//隐藏沙盘气泡
			FUNCTION_DATA.get_windows("school_sand/sand").SetProperty("Visible","False");
			// 将角色放回到地面
			var pos = player.prePosition;
			var rot = player.preRotation;
			if(!isNaN(pos.x) && !isNaN(pos.y) && !isNaN(pos.z) && !isNaN(rot.x) && !isNaN(rot.y) && !isNaN(rot.z)){
				player.pcarray['pcmesh'].MoveMesh
				(
					[
						pos.x,
						pos.y,
						pos.z
					],
					[ 
						rot.x,
						0 - rot.y,
						rot.z 
					]
				);
			}else{
				iprint("位置坐标获取错误，直接回到南门！！");
				var Number1 = POSITION_DATA[0];
				player.pcarray['pcmesh'].MoveMesh
				(
					[
						Number1.reach_position_x,
						Number1.reach_position_y,
						Number1.reach_position_z
					],
					[ 
						0,
						0 - Number1.reach_rotation_y,
						0 
					]
				);
			}
			var cameraSets = iCamera.defaultMode;
			iCamera.minDistance = cameraSets['minDistance'];		// 摄像机离角色的最近距离
			iCamera.maxDistance = cameraSets['maxDistance'];		// 摄像机离角色的最远距离
			iCamera.wheelSpeed = cameraSets['wheelSpeed'];	        // 摄像机的拉近/远速度
			iCamera.currentDistance = 3.2;
			// 改变摄像机的 distance 
			iCamera.pcarray["pcdefaultcamera"].SetProperty("distance", iCamera.defaultDistance);
			// 改变摄像机的 俯角
			iCamera.pcarray["pcdefaultcamera"].SetProperty("pitch", iCamera.defaultPitch);
			// 显示角色
			// 如果进入沙盘模式之前是无人模式 ,  则退出沙盘后也要设置为第一人称模式
			if(player.personMode == "firstperson"){
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','firstperson']);
			}else{
				// 如果是第三人称 , 则显示角色
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
			}
			// 离开沙盘模式后将鼠标点击地面行走控制打开
			player.canMouseCtrlMove = true;
			/* 复位操作 */
			Event.Send({
				name : 'effect.camera.change.player0' , 
				player : player 
			}) ;
			//恢复环境亮度
			// Event.Send({
				// name : "player.effect.exit.special.mode", 
				// player : player 
			// });
			// 将角色的状态修改为前一个状态
			player.current_forward_state = player.previous_forward_state;
			player.mini_map_state = "false" ; //王鑫修改(2012-06-13)
		},"player.effect.hoarse.backing_out");
		
		//添加沙盘的billboard
		Event.Subscribe(function (e){
			Entities.LoadPropertyClassFactory('cel.pcfactory.2d.billboard');
			var bb = Entities.CreateEntity();
			bb.name = "bb";
			prop_bb = Entities.CreatePropertyClass(bb,'pcbillboard');
			//prop_aa = Entities.CreatePropertyClass(bb,'pcbillboard');
			prop_bb.SetProperty("materialname","bb");
			  // prop_bb.movable = false;
			  //alert(prop_bb.GetProperty("materialname"));
			 C3D.engine.SubscribeFrame(function(rv){
				prop_bb.SetProperty("materialname","bb");
				var cam = rv.camera;
				var v2d = cam.Perspective([0,0,100]);
				var x = v2d.x / C3D.g3d.width;
			    var y = v2d.y / C3D.g3d.height;
				prop_bb.SetProperty("visible",true);
				prop_bb.SetProperty("clickable",true);
				prop_bb.SetProperty("restack",false);
				prop_bb.SetProperty("text","billboard"); 
				prop_bb.SetProperty("text_offset",[10000,10000]);
				prop_bb.SetProperty("width",41440);
				prop_bb.SetProperty("height",17800);
				prop_bb.SetProperty("x",x*307200);
				prop_bb.SetProperty("y",y*307200); 
				//prop_bb.SetProperty("text_default_font_size","12");
				//prop_bb.SetProperty("text_default_font","/fonts/SIMYOU.TTF");
				//prop_bb.SetProperty("text","clicked me 我点击");
			 });
			/* prop_aa.SetProperty("materialname","bb");
			  // prop_bb.movable = false;
			 C3D.engine.SubscribeFrame(function(rv){
				var cam = rv.camera;
				var v2d = cam.Perspective([0,1,0]);
				var x = v2d.x / C3D.g3d.width;
				var y = v2d.y / C3D.g3d.height;
				prop_aa.SetProperty("visible",true);
				prop_aa.SetProperty("clickable",true);
				prop_aa.SetProperty("restack",false);
				prop_aa.SetProperty("width",61440);
				prop_aa.SetProperty("height",34800);
				prop_aa.SetProperty("x",x*307200);
				prop_aa.SetProperty("y",y*307200); 
			 });*/
		},"effect.sand.table");
	})();
} catch(e){
	alert(e);
}