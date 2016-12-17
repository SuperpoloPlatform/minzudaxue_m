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

	CAMERA = {
		name : "camera",
		
		property : {
			currentDistance: 3.2,	// 记录摄像机离角色的当前距离
			defaultDistance: 3.2,	// 记录摄像机离角色的最佳距离
			minDistance: 1.8,		// 摄像机离角色的最近距离
			maxDistance: 8,			// 摄像机离角色的最远距离
			wheelSpeed: 0.5,		// 摄像机的拉近/远速度
			//rotationY : 3.14 ,         // 摄像机的旋转角度 
			
			defaultPitch : -0.04499990493059158,

			defaultMode:{
				'minDistance' : 1.8,		// 摄像机离角色的最近距离
				'maxDistance' : 8,		// 摄像机离角色的最远距离
				'wheelSpeed' : 0.5,			// 摄像机的拉近/远速度
				'currentDistance':3.2
			},
			
			sandMode:{
				'minDistance' : 10,		// 摄像机离角色的最近距离
				'maxDistance' : 600,		// 摄像机离角色的最远距离
				'wheelSpeed' : 10,			// 摄像机的拉近/远速度
				'currentDistance':460
			},
			
			_isWheelClose: false,
			
			minPitch : 0.2,
			openMinPitch : true,
			
			is_rotate_left : false , //camera是否进行左旋转
			is_rotate_right : false  //camera是否进行右旋转
		},
		
		pc : {
			// "pczonemanager" : {
				// action : [
					// {
						// name : "Load",
						// param : [
							// ['path', '.'],
							// ['file', 'art/level.xml']
						// ]
					// }
				// ]
			// },
			"pcdefaultcamera" : {
				action : [
					{
						name : "SetCamera",
						param : [
							['modename', 'firstperson'],
							['pitch', -0.04499990493059158]
						]
					},
					{
						name : "SetZoneManager",
						param : [
							['entity', 'camera'], //player 是 entity.name 的属性值
							['region', 'main'],
							['start', 'Camera']
						]
					}
					
				],
				property : [
					{
						name : "distance",
						value : 3.2
					}
				]
				
			},
			"pcmesh" : {
				action : [
					{
						name : "SetMesh",
						param : [
							['name','mesh_camera']
						]
					},
					{
						name : "SetVisible",
						param : [
							['visible',true]
						]
					},
					{
						name : "MoveMesh",
						param : [
							['rotation',JSON_SCHOOL.roleSelect.camera.rotation],
							['position',JSON_SCHOOL.roleSelect.camera.position]
						]
					}
				]
			},
			"pcmover" : {},
			"pclight" : {
			},
			"pclinearmovement" : {
				action : [
					{
						name : "InitCD",
						param : [
							['offset',[0, 0.0, 0]],
							['body',[0.5,0.65,0.5]],
							['legs',[0.5,1.1,0.5]]
						]
					}
				]
				
			},
			"pcactormove" : {
				action : [
					{
						name : "SetSpeed",
						param : [
							['movement',1.1],
							['running',3],
							['rotation',1],
							['jumping',1]
						]
					}
				]
			},
			"pctimer" : {
			
			},
			"pccommandinput" : {
				action : [
					{
						name: "Activate",
						param:[
							['activate',false]
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','w'],
							['command','forward']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','s'],
							['command','backward']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','a'],
							['command','rotateleft']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','d'],
							['command','rotateright']
						]
					},

					{
						name : "Bind",
						param : [
							['trigger','r'],
							['command','rotateup']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','f'],
							['command','rotatedown']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','tab'],
							['command','change_view']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','q'],
							['command','strafeLeft']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','e'],
							['command','strafeRight']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','z'],
							['command','printTransform']
						]
					}
				]
			}
		},
		
		// 订阅来自entity自身发出的事件，类似于`ent.behavious();`，
		// 一般这些事件都是entity内部的property class发出的。		
		event : {
			
			/*
				开始向前
			*/
			"pccommandinput_forward1" : function(){
				Event.Send({
					name: "camera.effect.forward",
					camera: this
				});
			},
			
			/*
				停止前进
			*/
			"pccommandinput_forward0" : function(){
				Event.Send({
					name: "camera.effect.forward.stop",
					camera: this
				});
			},
			
			/*
				开始后退
			*/
			"pccommandinput_backward1" : function(){
				Event.Send({
					name: "camera.effect.backward",
					camera: this
				});
			},
			
			/*
				停止后退
			*/
			"pccommandinput_backward0" : function(){
				Event.Send({
					name: "camera.effect.backward.stop",
					camera: this
				});
			},
			
			/*
				开始左转
			*/
			"pccommandinput_rotateleft1" : function(){
				Event.Send({
					name: "camera.effect.rotateleft",
					camera: this
				});
			},
			
			/*
				停止左转
			*/
			"pccommandinput_rotateleft0" : function(){
				Event.Send({
					name: "camera.effect.rotateleft.stop",
					camera: this
				});
			},
			
			/*
				开始右转
			*/
			"pccommandinput_rotateright1" : function(){
				Event.Send({
					name: "camera.effect.rotateright",
					camera: this
				});
			},
			
			/*
				停止右转
			*/
			"pccommandinput_rotateright0" : function(){
				Event.Send({
					name: "camera.effect.rotateright.stop",
					camera: this
				});
			},
			
			/*
				开始抬头
			*/
			"pccommandinput_rotateup1" : function(){
				Event.Send({
					name: "camera.effect.rotateup",
					camera: this
				});
			},
			
			/*
				停止抬头
			*/
			"pccommandinput_rotateup0" : function(){
				Event.Send({
					name: "camera.effect.rotateup.stop",
					camera: this
				});
			},
			
			/*
				开始低头
			*/
			"pccommandinput_rotatedown1" : function(){
				Event.Send({
					name: "camera.effect.rotatedown",
					camera: this
				});
			},
			
			/*
				停止低头
			*/
			"pccommandinput_rotatedown0" : function(){
				Event.Send({
					name: "camera.effect.rotatedown.stop",
					camera: this
				});
			},
			
			/*
				左平移
			*/
			"pccommandinput_strafeLeft1" : function(){
				Event.Send({
					name: "camera.effect.StrafeLeft",
					camera: this
				});
			},
			
			/*
				左平移停止
			*/
			"pccommandinput_strafeLeft0" : function(){
				Event.Send({
					name: "camera.effect.StrafeLeft.stop",
					camera: this
				});
			},
			
			/*
				右平移
			*/
			"pccommandinput_strafeRight1" : function(){
				Event.Send({
					name: "camera.effect.StrafeRight",
					camera: this
				});
			},
			
			/*
				右平移停止
			*/
			"pccommandinput_strafeRight0" : function(){
				Event.Send({
					name: "camera.effect.StrafeRight.stop",
					camera: this
				});
			},
			
			/*
				切换摄像机模式
			*/
			"pccommandinput_change_view0" : function(){
				this.pcarray['pcactormove'].PerformAction('ToggleCameraMode', []);
				//this.pcarray['pcdefaultcamera'].GetProperty('modename');
			},
			
			/*
				打印出摄像机当前的位置、朝向
			*/
			"pccommandinput_printTransform0" : function(){
				var position = this.pcarray['pcmesh'].GetProperty("position");
				var rotation = this.pcarray['pcmesh'].GetProperty("rotation");
				var pitch = this.pcarray['pcdefaultcamera'].GetProperty('pitch');
				//CONSOLE.Write("player's position is : [" + position.x + ", " + position.y + ", " + position.z + "]\n");
				/* iprint("position："+ position.x + ", " + position.y + ", " + position.z);
				iprint("rotation：" + rotation.x +", "+ rotation.y +", "+ rotation.z);
				iprint("pitch："+pitch); */
			},
			
			/*	实时发送camera的pitch值		*/
			"pctimer_sendPitch" : function(){
				var pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
				Event.Send({
					name: "camera.effect.pctimer.sendPitch",
					camera : this
				});
			},
			/* 视角控制:	实时发送camera的pitch值	 wangxin update 2012-06-27	*/
			"pctimer_shijiaokongzhi_sendPitch" : function(){
				var pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
				Event.Send({
					name: "camera.effect.pctimer.shijiaokongzhi_sendPitch",
					camera : this
				});
			},
			// 切换到第三人称模式
			"mode.change.thirdperson":function(){
				// alert('mode.change.thirdperson');
				// this.pcarray["pccommandinput"].PerformAction("Activate", ['activate', false]);
				// this.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
				// this.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
			} //freelook
			
			
			
			
		},
		
		// 订阅全局的事件。
		subscribe : {
			// 角色选择确定后，调用摄像机的模式切换，第三人称
			"role.select.enter.click": function(){
				this.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
				this.pcarray["pccommandinput"].PerformAction("Activate", ['activate', false]);
				this.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
				this.pcarray["pcdefaultcamera"].SetProperty("distance", 3.2);
				this.pcarray["pcdefaultcamera"].SetProperty("pitch", -0.169999957);
				
				this.pcarray["pcmesh"].PerformAction("SetVisible",['visible',true]);
				
			},
			
			// 控制摄像机的 distance 拉近
			"change.camera.distance.near":function(){
				if(this._isWheelClose)	// 判断 distance 控制是否关闭
					return;
				
				this.currentDistance -= this.wheelSpeed;
				if(this.currentDistance < this.minDistance)
					this.currentDistance = this.minDistance;
					
				this.pcarray["pcdefaultcamera"].SetProperty("distance", this.currentDistance);
			},
			
			// 控制摄像机的 distance 拉远
			"change.camera.distance.far":function(){
				if(this._isWheelClose)	// 判断 distance 控制是否关闭
					return;
					
				this.currentDistance += this.wheelSpeed;
				if(this.currentDistance > this.maxDistance)
					this.currentDistance = this.maxDistance;
					
				this.pcarray["pcdefaultcamera"].SetProperty("distance", this.currentDistance);
			},
			
			// 关闭摄像机的 distance 控制
			"close.camera.distance.change":function(e){
				var flag = e.close;
				this._isWheelClose = flag;
				this.pcarray["pcdefaultcamera"].SetProperty("distance", this.defaultDistance);
			}
			
	       
			
		}
	};

}
catch (e)
{
	alert(e);
}