/**************************************************************************
 *  This file is part of the UGE(Uniform Game Engine) of SPP.
 *  Copyright (C) by SanPolo Co.Ltd. 
 *  All rights reserved.
 *  See http://spp.spolo.org/ for more information.
 *
 *  SanPolo Co.Ltd
 *  http://spp.spolo.org/  sales@spolo.org spp-support@spolo.org
**************************************************************************/
try {

	PLAYER = {
		name : "player",
		
		property : {
			currentAnim : "walk",	// 记录当前动作
			stopAnim: "stand",		// 角色停止移动后的动作
			meshName: "woman",		// 角色当前模型
			sex : "nv" , // 角色当前性别 
			viewCtrlSpeed: {
				'movement' : 8, 
				'running' : 1, 
				'rotation': 1, 
				'jumping' : 1
			},
			
			walkSpeed: {
				'movement' : 1.1, 
				'running' : 1, 
				'rotation': 1, 
				'jumping' : 1
			},
			
			runSpeed: {
				'movement' : 3.2, 
				'running' : 1, 
				'rotation': 1, 
				'jumping' : 1
			},
			
			sandSpeed : {
				'movement' : 25, 
				'running' : 1, 
				'rotation': 0.3, 
				'jumping' : 1
			},
			
			strafeUpSpeed: 2,		// 向上的速度
			strafeDownSpeed: 2,	// 向下的速度
			
			prePosition: [0,0,0], 	// 角色的上一个位置
			preRotation: [0,0,0],	// 角色的上一个朝向
			
			window_name: "",          //执行动画后关闭的窗口
			window_name_bar : "",     //判断主菜单的按钮状态
			window_name_bar_choose: "",//主菜单点击
			music_state_int: 0, //音乐状态
			role_ok : "",	//判断是否进入场景
			
			w_click_count:0,	// 记录W键的按下次数
			current_forward_state:"walk", // 记录角色当前的移动状态    walk   run   viewCtrl   sand
			previous_forward_state:"walk",// 保存上一个移动状态
			mini_map_state: "false",//判断是否滑到小地图窗口上
			//sand_state : "false",//判断是否进入沙盘模式
			current_position: [0,0,0],    // 记录实时位置 需要调用时候 player.current_position.x  player.current_position.y  player.current_position.z
            isHelp: false,   //是否需要帮助 默认为false，当点击进入后变为true。
			mouseOver:false,  //新手帮助下是否点击了鼠标
			//helpStep2:"false"    //帮助2： 完成状态
            anjian_state : "shang",

			//  记录角色当前的移动速度
			currentMoveSpeed: 1.1,
			// 记录角色当前是否处于鼠标点击移动状态
			isMouseDownMoving: false,
			// 控制是否可以鼠标点击地面行走
			canMouseCtrlMove: true,
			// 记录角色的显示/隐藏状态
			personMode : "thirdperson",
			// 记录角色是否有按键进行旋转 
			isRotation : false  , 
			is_show_build_message : false  , //是否显示建筑信息
			
			mouseStartX : 0 , //鼠标左键按下的 X轴初始位置 
			mouseStartY : 0 ,  //鼠标左键按下的 Y轴初始位置
			mouseEndX : 0 ,  // 鼠标左键弹起 时的 X轴的位置
			mouseEndY : 0 ,  // 鼠标左键弹起 时的 Y轴的位置 
			
			isMouseRotation : false , // 记录角色是否由鼠标进行旋转
			cameraRotationY : Math.PI ,  // 记录鼠标左键单击后的camera的rotation.y的值
			list_info : "" ,//记录根据搜索框检索数据的数组
			list_info_length: 0 , //记录销毁时button的个数
			isStarVisible : false, 
			//isReset : false  // 是否进行了复位
			is_in_shapan: "false", //记录是否在沙盘模式下
			is_inShaPan : false , //记录是否在沙盘模式下
			is_mouse_Activated:"false" , //判断是否获取了搜索输入框的焦点
			camera_pitch : 0.2 , //camera实时的pitch值 
			is_close_MouseAxis0 : true , // 是否关闭鼠标的拖拽功能 
			is_show_guides_window : false, //是否显示导游介绍窗体
			snd_int : 0,
			is_inShaPan : false,  //记录是否在沙盘模式下
			reloading_lan_state : "chinese", //语言状态
			
			is_viewControl : false,	//记录是否在视角控制模式下
			
			/*	新增--快速定位--岳朝凤 2012-6-13 begin	*/
			is_create_dingwei_btn : true, //判断是否需要创建快速定位的位置按钮
			dingwei_btn : "" ,//记录快速定位创建button的数组
			/*	新增--快速定位--岳朝凤 2012-6-13 end	*/
			first_in_xiaoyuanjieshao :true, //记录是否是第一次打开校园介绍
			shipin_lei: new Array, //记录视频父类的数组
			isFullView : false	//判断是否在全景展示模式下
		},
		
		pc : {
			"pcmesh" : {
				action : [
					{
						name : "SetMesh",
						param : [
							['name','woman']
						]
					},
					{
						name : "SetAnimation",
						param : [
							['animation','stand'],
							['cycle',true]
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
							['rotation',JSON_SCHOOL.roleSelect.role.rotation],
							['position',JSON_SCHOOL.roleSelect.role.position]
						]
					}
				]
			},
			"pclight" : {},
			// "pcprojectile":{},
			"pclinearmovement" : {
				action : [
					{
						name : "InitCD",
						param : [
							['offset',[0, 0.0, 0]],
							['body',[0.5,0.65,0.5]],
							['legs',[0.5,0.37,0.5]]
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
							['rotation',2],
							['jumping',1]
						]
					}
				]
			},
			"pcpathfinder" : {},
			"pcsteer" : {},
			"pcmover" : {},
			"pctimer" : {
				action : [
					{
						name : "WakeUp",
						param : [
							['time', 33],
							['repeat', true],
							['name', 'player_position']
						]
					},
					{	//实时发送消息给UI（显示建筑名称）
						name : "WakeUp",
						param : [
							['time', 10],
							['repeat', true],
							['name', 'mouse.coord']
						]
					}
				]
			},
			"pccommandinput" : {
				action : [
					{
						name: "Activate",
						param:[
							['activate', false]
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
							['trigger','t'],
							['command','strafeUp']
						]
					},
					{
						name : "Bind",
						param : [
							['trigger','y'],
							['command','strafeDown']
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
							['trigger','z'],
							['command','printTransform']
						]
					},
					{
						name : "Bind",   //鼠标滚轮向前
						param : [
							['trigger', '0Mousebutton3'],
							['command', 'wheelForward']
						]
					},
					{
						name : "Bind",   //鼠标滚轮向后
						param : [
							['trigger', '0Mousebutton4'],
							['command', 'wheelBackward']
						]
					},
					//鼠标控制
					{
							name : "Bind",
							param : [
								['trigger','MouseAxis0'],
								['command','mousemove']
							]
					},
					{
						name : "Bind",	//鼠标左键点击
						param : [
							['trigger','MouseButton0'],
							['command','mouseleft']
						]
					},
					{
						name : "Bind",//角色向前
						param : [
							['trigger','up'],
							['command','forward']
						]
					},
					{
						name : "Bind",//角色向后
						param : [
							['trigger','down'],
							['command','backward']
						]
					},
					{
						name : "Bind",//角色向左
						param : [
							['trigger','left'],
							['command','rotateleft']
						]
					},
					{
						name : "Bind",//角色向右
						param : [
							['trigger','right'],
							['command','rotateright']
						]
					},
					/*	岳朝凤新增---环境亮度的调节	2012-6-6	*/
					{
						name : "Bind",//增加环境亮度
						param : [
							['trigger','PadPlus'],
							['command','raiseBrightness']
						]
					},
					{
						name : "Bind",//降低环境亮度
						param : [
							['trigger','PadMinus'],
							['command','reduceBrightness']
						]
					},
					{
						name : "Bind",//将环境亮度恢复到一个默认值
						param : [
							['trigger','Backspace'],
							['command','recoverBrightness']
						]
					}
				]
			}
		},
		
		// 订阅来自entity自身发出的事件，类似于`ent.behavious();`，
		// 一般这些事件都是entity内部的property class发出的。		
		event : {
						
			/* w键的双击事件 */
			"pctimer_setDoubleClick":function(e){
				// 1 秒过去后将点击次数设置为0,以便重新累积
				this.w_click_count = 0;
			},
			
			/*  开始向前  */
			"pccommandinput_forward1" : function(){
				
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				
				player.flag ++;				
				Event.Send({
					name: "player.effect.forward.begin",
					player: this
				});
				if(player.isHelp){
					Event.Send({
						name: "ui.help.forward",
					
					});
				////CONSOLE.WriteLine(actor.isHelp+" come on. . . ");
				}
				
				// 开始记录时间,判断是否双击
				if(this.w_click_count==0){
					// 当第一次按下w键的时候启动时间
					// 如果在 1 秒内继续按了第二次,则判断为双击
					// 否则为单击
					this.pcarray['pctimer'].PerformAction(
						'WakeUp', 
						['time', 1000], 
						['repeat', false], 
						['name', 'setDoubleClick']
					);
				}
				this.w_click_count ++;	// 点击次数累加1
				// 判断如果按下次数大于1,则判断为双击,
				if(this.w_click_count > 1){
					// 发出w键的双击事件
					Event.Send({
						name:"w_key_double_click",
					});
				}
			},
			/*  停止前进  */
			"pccommandinput_forward0" : function(){
			
				Event.Send({
					name: "player.effect.forward.stop",
					player: this
				});
			},
			/*  开始后退  */
			"pccommandinput_backward1" : function(){
				
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				Event.Send({
					name: "player.effect.backward",
					player: this
				});
			},
			
			/*  停止后退  */
			"pccommandinput_backward0" : function(){
			
				Event.Send({
					name: "player.effect.backward.stop",
					player: this
				});
			},
			
			/*  开始左转  */
			"pccommandinput_rotateleft1" : function(){
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true"){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.rotateleft1",
					player: this
				});
			},
			
			/*  停止左转  */
			"pccommandinput_rotateleft0" : function(){
				Event.Send({
					name: "player.effect.rotateleft1.stop",
					player: this
				});
			},
			
			/*  开始右转  */
			"pccommandinput_rotateright1" : function(){
			
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true"){
					return ; 
				}
				Event.Send({
					name: "player.effect.rotateright1",
					player: this
				});
			},
			
			/*  停止右转  */
			"pccommandinput_rotateright0" : function(){
				Event.Send({
					name: "player.effect.rotateright1.stop",
					player: this
				});
			},
			
			/*  开始抬头  */
			"pccommandinput_rotateup1" : function(){
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true"){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.rotateup",
					player: this
				});
			},
			
			/*  停止抬头  */
			"pccommandinput_rotateup0" : function(){
				Event.Send({
					name: "player.effect.rotateup.stop",
					player: this
				});
			},
			
			/*  开始低头  */
			"pccommandinput_rotatedown1" : function(){
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true"){
					return ; 
				}
				Event.Send({
					name: "player.effect.rotatedown",
					player: this
				});
			},
			
			/*  停止低头  */
			"pccommandinput_rotatedown0" : function(){
				Event.Send({
					name: "player.effect.rotatedown.stop",
					player: this
				});
			},
			
			/*  左平移  */
			"pccommandinput_strafeLeft1" : function(){
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.StrafeLeft",
					player: this
				});
			},
			/*  左平移停止  */
			"pccommandinput_strafeLeft0" : function(){
				Event.Send({
					name: "player.effect.StrafeLeft.stop",
					player: this
				});
			},
			
			/*  右平移  */
			"pccommandinput_strafeRight1" : function(){
			
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.StrafeRight",
					player: this
				});
			},
			
			/*  右平移停止  */
			"pccommandinput_strafeRight0" : function(){
				Event.Send({
					name: "player.effect.StrafeRight.stop",
					player: this
				});
			},
			
			/*  上平移  */
			"pccommandinput_strafeUp1" : function(){
			
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.StrafeUp",
					player: this
				});
			},
			/*  上平移停止  */
			"pccommandinput_strafeUp0" : function(){
				Event.Send({
					name: "player.effect.StrafeUp.stop",
					player: this
				});
			},
			/*  下平移  */
			"pccommandinput_strafeDown1" : function(){
			
				//屏蔽搜索时,键盘操作对player的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				
				Event.Send({
					name: "player.effect.StrafeDown",
					player: this
				});
			},
			/*  上平移停止  */
			"pccommandinput_strafeDown0" : function(){
				Event.Send({
					name: "player.effect.StrafeDown.stop",
					player: this
				});
			},
			
			/*	实时发送camera的pitch值		*/
			"pctimer_sendPitch" : function(){
				var pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
				Event.Send({
					name: "player.effect.pctimer.sendPitch",
					camera : this
				});
			},
						
			/*	快速定位	*/
			"pccommandinput_quick.to.position1" :function(){
				Event.Send({
					name : "player.effect.quick.to.position",
					player : this,
					id:POSITION[10]
				});
			},
			
			// 激活控制
			"active.control":function(){
				// alert(111);
				// this.pcarray["pccommandinput"].PerformAction("Activate", ['activate', true]);
			},
			
			/*切换摄像机模式		*/
			"pccommandinput_change_view0" : function(){
				// iprint(11111);
				// iCamera.pcarray['pcactormove'].PerformAction('ToggleCameraMode', []);
				//this.pcarray['pcdefaultcamera'].GetProperty('modename');
			},
			
			/*打印出摄像机当前的位置、朝向			*/
			"pccommandinput_printTransform0" : function(){
				var position = this.pcarray['pcmesh'].GetProperty("position");
				var rotation = this.pcarray['pcmesh'].GetProperty("rotation");
				var pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
				var distance = iCamera.pcarray['pcdefaultcamera'].GetProperty('distance');
				//CONSOLE.Write("player's position is : [" + position.x + ", " + position.y + ", " + position.z + "]\n");
				iprint("position："+ position.x + ", " + position.y + ", " + position.z);
				iprint("rotation：" + rotation.x +", "+ rotation.y +", "+ rotation.z);
				iprint("pitch："+pitch);
				iprint("distance"+distance);
				
			},
			
			/*鼠标滚轮向前			*/
			"pccommandinput_wheelForward1":function(){
				Event.Send({
					name:"change.camera.distance.near",
				});
			},
			
			/*鼠标滚轮向后			*/
			"pccommandinput_wheelBackward1":function(){
				Event.Send({
					name:"change.camera.distance.far",
				});
			},
		
			/*  定时发送角色的位置 */
			"pctimer_player_position" : function(e){
				this.current_position=this.pcarray['pcmesh'].position;
				Event.Send({
					name : "pctimer.player.position",
					player : this,
					position : this.pcarray['pcmesh'].position
				});
				Event.Send({
					name : "player.effect.full_view",
					player : this,
					position : this.pcarray['pcmesh'].position
				});
			},
			//动画执行完后关闭窗口
			"pctimer_ui_close_Animations" : function(e){
				Event.Send({
					name : "ui.close.Animations",
					window_name : this.window_name
				});
			},
			
			/*	实时发送消息给UI（显示建筑名称）	*/
			"pctimer_mouse.coord" : function()
			{
				Event.Send({
					name : "player.effect.mouse.coord",
					player : this
				});
			},
			
			/*	使人物在退出全景展示时及时显示出来	*/
			"pctimer_setPlayerVisible" : function(e)
			{
				player.pcarray['pcmesh'].SetVisible(true);
			},
			
			/* 鼠标左键按下*/
			"pccommandinput_mouseleft1" : function()
			{
				//判断是否屏蔽鼠标的拖拽功能 (王鑫修改取消注释)
				if(!player.is_close_MouseAxis0){
					return  ; 
				}
				if(player.isFullView){
					this.mouseleft = true;
				}
				//记录鼠标左键按下的位置
				player.mouseStartX = player.mousex ; 
				player.mouseStartY = player.mousey ; 
				var rotation =  iCamera.pcarray['pcmesh'].GetProperty('rotation');
				player.cameraRotationY = rotation.y ; //获取camera的Rotation的y的初始值
				var cameraPitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
				player.camera_pitch =  cameraPitch ; //获取player的pitch 
				Event.Send({
					name : "player.effect.mouseleftrotation" , 
					player : this 
				}); 
			},
			/* 鼠标左键弹起 */
			"pccommandinput_mouseleft0" : function()
			{
				//判断是否屏蔽鼠标的拖拽功能 (王鑫修改取消注释)
				if(!player.is_close_MouseAxis0){
					return  ; 
				}
				this.mouseleft=false;
				// 鼠标左键弹起的位置
				player.mouseEndX = player.mousex ; 
				player.mouseEndY = player.mousey ; 
				//判断鼠标的起始和终止位置是否相同
				if ((player.mouseStartX >= player.mouseEndX-0.7 && player.mouseStartX <= player.mouseEndX + 0.7 ) 
					&& (player.mouseStartY >= player.mouseEndY - 0.7 && player.mouseStartY <= player.mouseEndY + 0.7 )){
					//显示建筑信息
					Event.Send({
						name : "player.effect.show_build_message"
					});
					// 判断鼠标是否点击地面
					Event.Send({
						name : "player.effect.check.mouse_click_ground" ,
						player : player 
					});
					// 鼠标点击地面
					Event.Send({
						name : 'player.effect.mouseleft.click',
						player : player 
					});
					// 清除旋转的状态 
					player.isMouseRotation = false ; 
					player.isRotation = false ; 
				}else{
					 
					player.isMouseRotation = true ;  // 标注player已经进行旋转 .
					//隐藏建筑信息
					Event.Send({
						name : "player.effect.hide_build_message" 
					});	
				}
			},
			// 鼠标移动
			"pccommandinput_mousemove" : function (msgid, x, y){
				//判断是否屏蔽鼠标的拖拽功能
				if(!player.is_close_MouseAxis0){	
					return  ; 
				}
				if(this.mouseleft){
					Event.Send({
						name : "camera.effect.mousemove",
						player : this 
					});
				}
			},
			/*	鼠标点击地面行走控制 , 发出停止行走事件	*/
			"pctimer_mouse_click_move_stop":function(){
				Event.Send({
					name:"player_mouse_click_move_stop",
				});
			},
			/*	岳朝凤新增---环境亮度的调节	2012-6-6	*/
			//增加环境亮度
			"pccommandinput_raiseBrightness1" : function(){
				//屏蔽搜索时,键盘操作对环境亮度的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				Event.Send({
					name : "player.effect.raiseBrightness",
					player : this
				});
			},
			//降低环境亮度
			"pccommandinput_reduceBrightness1" : function(){
				//屏蔽搜索时,键盘操作对环境亮度的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				Event.Send({
					name : "player.effect.reduceBrightness",
					player : this
				});
			},
			//恢复环境亮度初始值
			"pccommandinput_recoverBrightness1" : function(){
				//屏蔽搜索时,键盘操作对环境亮度的影响
				if(player.is_mouse_Activated == "true" || player.isFullView){
					return ; 
				}
				Event.Send({
					name : "player.effect.recoverBrightness",
					player : this
				});
			}
		},
		
		// 订阅全局的事件
		subscribe : {
			// 角色选择确定后，调用角色的
			"role.select.enter.click": function(e){
				this.pcarray["pccommandinput"].PerformAction("Activate", ['activate', true]);
				// this.pcarray["pcmesh"].PerformAction("RotateMesh", ["rotation", [0, 3.1155, 0]]);
				var currentPos = this.pcarray["pcmesh"].GetProperty("position");
				//初始换人物朝向
				this.pcarray['pcmesh'].PerformAction(
					'MoveMesh', 
					[ 'position',  JSON_SCHOOL.roleInitialize.role.position],
					[ 'rotation',  JSON_SCHOOL.roleInitialize.role.rotation]
				);
				this.role_ok = "ok";
				
				
				//this.pcarray['pcmesh'].SetProperty("rotation").y= 0.25000056624412537;

//			 player.pcarray['pcmesh'].PerformAction(
//				'MoveMesh', 
//				[ 'position',  [	currentPos.x,	   currentPos.y,	currentPos.z	]	],
//				[ 'rotation',  [  0,	0.25000056624412537,	0 	]   ]  //-finalAngle
//			);
			
				/*	岳朝凤新增--获取进入场景时环境光的初始值sector.ambient	2012-6-6	*/
				//发送消息---获取进入场景时环境光的初始值
				Event.Send({
					name : "player.effect.getSector_ambient",
					player : this
				});
				/** 	发送消息---灯光跟随人物移动	*/
				/*Event.Send({
					name : "player.effect.light.followPlayer.move",
					player : this
				});*/
			}  
		}
	}

}
catch (e)
{
	alert(e);
}