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

/*-------------------------摄像机公共的订阅事件----------------------------------*/	
		
		/*摄像机 前进 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('Forward',['start',true]);
		}, "camera.effect.forward");
		
		/*摄像机 停止前进 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('Forward',['start',false]);
		}, "camera.effect.forward.stop");
		
		/*摄像机 后退 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('Backward',['start',true]);			
		}, "camera.effect.backward");
		
		/*摄像机 停止后退 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('Backward',['start',false]);
		}, "camera.effect.backward.stop");
		
		/*摄像机 左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true]);
			iCamera.is_rotate_left = true ; 
		}, "camera.effect.rotateleft");
		
		/*摄像机 停止左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			iCamera.is_rotate_left = false ; 
		}, "camera.effect.rotateleft.stop");
		
		/*摄像机 右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);
			iCamera.is_rotate_right = true ;
		}, "camera.effect.rotateright");
		
		/*摄像机 停止右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			iCamera.is_rotate_right = false ;
		}, "camera.effect.rotateright.stop");
		
		/*	接收camera的pitch值，并作相应判断	*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			iCamera.pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
			iCamera.Pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch'); 
			if(iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch') >= 0.25) { //wangxin update 
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']); 
			}
		},"camera.effect.pctimer.sendPitch");
		
		/*	 视角控制 : 接收camera的pitch值，并作相应判断 (wangxin update 2012-06-27)*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			iCamera.pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
			iCamera.Pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch'); 
			if(iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch') >= 0.9) {
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']); 
			}
		},"camera.effect.pctimer.shijiaokongzhi_sendPitch");
		
		/*摄像机 左平移 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('StrafeLeft',['start',true]);
		}, "camera.effect.StrafeLeft");
		
		/*摄像机 左平移停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('StrafeLeft',['start',false]);
		}, "camera.effect.StrafeLeft.stop");
		
		/*摄像机 右平移 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('StrafeRight',['start',true]);
		}, "camera.effect.StrafeRight");
		
		/*摄像机 右平移停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.camera;
			actor.pcarray['pcactormove'].PerformAction('StrafeRight',['start',false]);
		}, "camera.effect.StrafeRight.stop");
		
		
		/* 打开 视角控制功能  切换为第一人称 */
		Event.Subscribe(function(e){
			//屏蔽键盘(w,a,s,d)按键操作//王鑫添加(2012-06-15)
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.DisableKeyboardEvents();
			// 复位操作 
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player 
			});
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','firstperson']);
			player.prePosition = player.pcarray['pcmesh'].position;
			player.preRotation = player.pcarray['pcmesh'].rotation;
			player.pcarray['pclinearmovement'].SetProperty('gravity', 0);
			player.is_viewControl = true;
			player.previous_forward_state = player.current_forward_state;
			player.current_forward_state = "viewCtrl";
		},"logic.effect.shijiaokongzhi_in");
		
		/* 关闭 视角控制功能 */
		Event.Subscribe(function(e){
			// 恢复键盘(w,a,s,d)按键操作 //王鑫添加(2012-06-15)
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.EnableKeyboardEvents();
			// 复位操作 
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player 
			});
			var pos = player.prePosition;
			var rot = player.preRotation;
			var pos1 = player.pcarray['pcmesh'].GetProperty("position");
			var rot1 = player.pcarray['pcmesh'].GetProperty("rotation");
			if(pos1.y > 2){
				player.pcarray['pcmesh'].PerformAction(
					'MoveMesh', 
					[
						'position', [pos.x, pos.y ,pos.z],
					],
					[
						'rotation', [rot.x, rot.y ,rot.z],
					]
				);
			}else{
				player.pcarray['pcmesh'].PerformAction(
					'MoveMesh',
						[
							'position', [pos1.x, pos1.y, pos1.z],
						],
						[
							'ratation', [rot1.x, rot.y, rot.z],
						]
				);
			}
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
			player.pcarray['pclinearmovement'].SetProperty('gravity', 19.6);
			
			player.current_forward_state = player.previous_forward_state;
			player.is_viewControl = false;
			//CONSOLE.WriteLine(' out shijiao kongzhi ');
			//CONSOLE.WriteLine(' player forward_state : ' + player.current_forward_state );
			
		},"logic.effect.shijiaokongzhi_close");
		
		/*摄像机 随鼠标转动 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player ; 
		    // 鼠标的初始位置
			var startX = player.mouseStartX ; 
			var startY = player.mouseStartY ; 
			// 鼠标的实时位置
			var x = player.mousex  ; 
			var y = player.mousey  ; 
			
			var g2d = C3D.g2d;
			var screen_width  = g2d.width ; 
			
			// 计算camera的偏转角度 
			var rotationy = ((x - startX)/screen_width)*Math.PI ; 
			var rotationY = player.cameraRotationY-rotationy ;
			if( rotationY <= -Math.PI ){
				rotationY = 2*Math.PI + rotationY ;
			}
			if( rotationY <= Math.PI  ){
				rotationY = -2*Math.PI + rotationY ;
			}
			
			// 鼠标 x 影响 player rotation.y ; 鼠标 Y 影响 player 的 rotation.x

			// 获得角色当前位置
			var currentPos = actor.pcarray["pcmesh"].GetProperty("position");
			// camera 发生旋转
			iCamera.pcarray['pcmesh'].PerformAction(
					'MoveMesh',
						[
							'position', [currentPos.x, currentPos.y, currentPos.z],
						],
						[
							'rotation', [0,0-rotationY, 0],
						]
			);
			
			// 计算camera的pitch值 ,实现player俯仰视角的切换
			var screen_height =  g2d.height ;
			var cameraPitch = player.camera_pitch + ((startY-y)/screen_height)*0.5; 
			if(cameraPitch >= 0.5){ 
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',0.5); 
			}else{
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',cameraPitch);
			}
			
		}, "camera.effect.mousemove");
		
	})();

} catch(e){
	alert(e);
}