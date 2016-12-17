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
			
			//屏蔽键盘(w,a,s,d)按键操作
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.DisableKeyboardEvents();
			
			/* 复位操作 */
			Event.Send({
				name : 'effect.camera.change.player0' , 
				player : player 
			}) ; 
			
			// 当角色处于鼠标点击移动状态时 , 进入沙盘模式 , 需要立刻停止角色移动
			Event.Send({
				name:"player_mouse_click_move_stop"
			});
			
			// 把角色隐藏
			player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
			
			// 沙盘模式需要切换为第三人称视角 , 否则会有BUG
			if(player.personMode == "firstperson"){
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
			}
			
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
				[
					'position',
					[ 333.996337890625, 134.6717071533203, -271.01959228515625 ]
				],
				[
					'rotation',
					[ 0, 2.246399164199829, 0 ]
				]
			);
			
			var cameraSets = iCamera.sandMode;
			iCamera.minDistance = cameraSets['minDistance'];		// 摄像机离角色的最近距离
			iCamera.maxDistance = cameraSets['maxDistance'];		// 摄像机离角色的最远距离
			iCamera.wheelSpeed = cameraSets['wheelSpeed'];	        // 摄像机的拉近/远速度
			// iCamera.currentDistance = cameraSets['currentDistance'];
			
			// 改变摄像机的 distance 
			//iCamera.pcarray["pcdefaultcamera"].SetProperty("distance", cameraSets['currentDistance']);
			iCamera.pcarray["pcdefaultcamera"].SetProperty("distance", 130);	//改变出生时摄像机的距离

			// 改变摄像机的 俯角
			iCamera.pcarray["pcdefaultcamera"].SetProperty("pitch", -0.4529995918273926);
 
			// 进入沙盘模式后,要关闭鼠标点击地面行走
			player.canMouseCtrlMove = false;
 
		},"player.effect.hoarse");
		
		
		
		// 退出沙盘模式
		Event.Subscribe(function(e){
			
			
			// 恢复键盘(w,a,s,d)按键操作
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.EnableKeyboardEvents();
			
			// 将角色的状态修改为前一个状态
			player.current_forward_state = player.previous_forward_state;			
			
			// 设置重力
			player.pcarray['pclinearmovement'].SetProperty('gravity', 19.6);
			
			// 将角色放回到地面
			var pos = player.prePosition;
			var rot = player.preRotation;
			player.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',	
					[ pos.x, pos.y, pos.z ]
				],
				[
					'rotation',
					[ rot.x, 0-rot.y, rot.z  ]
				]					
			);
			
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