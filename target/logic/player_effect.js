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
	
// ==========================================================================================================
// ===   当前 effect 提取出来的公共函数   ===================================================================
// ==========================================================================================================
		// 定义一个数组用来记录角色的所有动作状态 // 分别代表[前进,后退,左转,右转,左平移,右平移]
		var arr_amin_state = [0,0,0,0,0,0];   
		// 该函数用来检查角色的当前动作是否为空, 所有动作为0时返回true,否则返回false;
		function checkAminState(){
			var res = true;
			for(var st in arr_amin_state){
				if(arr_amin_state[st] == 1){
					res = false;
					break;
				}
			}
			return res;
		}

		/* 改变角色动作 */
		function changeAnimation(actor, index, value){
			// 将动作记录到数组
			arr_amin_state[index] = value;
			// 改变动作
			actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.currentAnim],['cycle',true],['reset', false]);
		}
		
		function stopAnimation(actor, index, value){
			// 将动作记录到数组
			arr_amin_state[index] = value;
			if(checkAminState()){ // 如果所有控制键都弹起了，执行停止动作
				actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.stopAnim],['cycle',true],['reset', true]);
			}else{
				actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.currentAnim],['cycle',true],['reset', false]);
			}
		}
		
		/* 判断角色是否只进行单键操作*/
		function checkPlayerRotation(index) {
			var res = true;
			var array = [];
			//将arr_amin_state数组中的值复制给array
			for(var id in arr_amin_state){
				array[id] = arr_amin_state[id];
			}
			array.splice(index,1);
			for(var st in array){
				if(array[st] == 1){
					res = false;
					break;
				}
			}
			return res;
		}
		

		//角色选择适合的动作修改
		/* 改变角色动作 */
		function changeAnimation1(actor, index, value){
			// 将动作记录到数组
			arr_amin_state[index] = value;
			// 改变动作
			actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.currentAnim],['cycle',true],['reset', false]);
		}
		
		function stopAnimation1(actor, index, value){
			// 将动作记录到数组
			arr_amin_state[index] = value;
			if(checkAminState()){ // 如果所有控制键都弹起了，执行停止动作
				actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.stopAnim],['cycle',true],['reset', true]);
			}else{
				actor.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', actor.currentAnim],['cycle',true],['reset', false]);
			}
			actor.currentAnim='walk';
			

		}

		// 换装备、衣服
		var changeMeshRole = {
			"woman":{
				// 角色所有可以更换的mesh，按部位分类;
				// 每个部位的第一件装备为默认穿着装备;
				"allChangeMesh" : {	
					'toufa' : ['toufa1','toufa2'],
					'yifu' : ['yifu4','yifu2']
				},			
				// 角色上次穿的mesh，按部位分
				"currentMesh" : {
					'toufa' : 'toufa1',
					'yifu' : 'yifu4'
				}
			},
			
			"man":{
				"allChangeMesh" : {	
					'maozi' : ['maozi'],
					'toufa' : ['toufa1','toufa2'],
					'yifu' : ['yifu1','yifu2'],
					'kuzi' : ['kuzi1','kuzi2']
				},			
				// 角色上次穿的mesh，按部位分
				"currentMesh" : {
					'maozi' : 'maozi',
					'toufa' : 'toufa1',
					'yifu' : 'yifu1',
					'kuzi' : 'kuzi1'
				}
			}
		};

		// 初始化角色的 mesh
		Event.Subscribe(function(e){
			try{
				var roleName = e.role;
				
				var iEngine = Registry.Get('iEngine');                
				var iMeshWrapper = iEngine.FindMeshObject(roleName,0);
				var iMeshObject = iMeshWrapper.meshObject;
				var iSpriteCal3DState = iMeshObject.QueryInterface('iSpriteCal3DState');
				
				// 先将重复的装备detach，留下默认装备
				var allMesh = changeMeshRole[roleName]["allChangeMesh"];
				for(var mesh in allMesh){
					var partMesh = allMesh[mesh];
					var isFirst = true;
					for(var oneMesh in partMesh){
						if(isFirst){
							isFirst = false;
							continue;
						}
						iSpriteCal3DState.DetachMesh(partMesh[oneMesh]);
					}
				}
			}catch(e){
				alert('ERROR: init.role.mesh error!  '+e);
			}
		
		},"init.role.mesh");
		
		// 角色换装
		Event.Subscribe(function(e){
			var role = e.role;		// 该参数决定了执行换装的  角色
			var change = e.changeMesh; //  参数格式：  changeMesh: {'toufa':'toufa1'}
			
			var iEngine = Registry.Get('iEngine');                
			var iMeshWrapper = iEngine.FindMeshObject(role, 0);
			var iMeshObject = iMeshWrapper.meshObject;
			var iSpriteCal3DState = iMeshObject.QueryInterface('iSpriteCal3DState');
			
			var curMesh = changeMeshRole[role]["currentMesh"];
			
			// 遍历穿过来的更换装备列表，逐件更换
			for(var mesh in change){
				// 如果要更换的装备就是现在身上穿着的装备则跳过
				if(change[mesh] != curMesh[mesh]){
					// 先穿上要更换的新装备
					iSpriteCal3DState.AttachMesh(change[mesh]);
					// 卸下身上原来的旧装备
					iSpriteCal3DState.DetachMesh(curMesh[mesh]);
					// 将新装备记录到装备列表
					curMesh[mesh] = change[mesh];
				}
			}
			
			
		},"role.change.mesh");
		
		// 角色各种移动状态的通用函数,参数:
		// par1: e.state = "walk"(走)   or     "run"(跑)    or    "viewCtrl"(视角控制)    or    "sand"(沙盘模式)
		// par2: e.isSaveState = true  or =false  是否记录当前状态,如果不记录,执行完当前状态后自动返回到前一个状态,如果记录,执行完当前状态后,保持当前状态.
		Event.Subscribe(function(e){
			// 根据 e.state 决定角色的移动速度和动作
			var speed = player.walkSpeed;
			////CONSOLE.WriteLine(e.state+"................");
			switch(e.state){
				case "walk":
					speed = player.walkSpeed;
					player.currentAnim = e.state;
					break;
				case "run":
					speed = player.runSpeed;
					player.currentAnim = e.state;
				
					break;
				case "viewCtrl":
					speed = player.viewCtrlSpeed;
					break;
				case "sand":
					speed = player.sandSpeed;
					break;
				default:
					alert('function player_forward_state_switch parameter wrong!');
					return;
			}

			
			// 如果不记录,执行完当前状态后自动返回到前一个状态,
			// 如果记录,执行完当前状态后,保持当前状态.
			if(e.isSaveState){
				player.currentMoveSpeed = speed['movement'];
				player.current_forward_state = e.state;
			}
			
			// 修改移动速度
			player.pcarray['pcactormove'].PerformAction(
				'SetSpeed', 
					['movement', speed['movement'] ], 
					['running', speed['running'] ], 
					['rotation', speed['rotation'] ], 
					['jumping', speed['jumping']   ]
			);
				
			
			// 开始移动
			player.pcarray['pcactormove'].PerformAction(e.orientations,['start',true]);
			
			//分别记录动作
				switch(e.orientations){
					case "Forward":
						changeAnimation(player, 0, 1);
						break;
					case "Backward":
						changeAnimation(player, 1, 1);
						break;
					case "StrafeRight":
						changeAnimation(player, 5, 1);
						break;
					case "StrafeLeft":
						changeAnimation(player, 4, 1);
						break;
					default:
						alert('e.orientations change wrong!');
						return;
			}
		},"player_forward_state_switch");
		
// ==========================================================================================================		
// ======  订阅的事件  ======================================================================================
// ==========================================================================================================
	    /* 隐藏建筑信息 */
		Event.Subscribe(function(e){
			player.is_show_build_message = false ; 
		},'player.effect.hide_build_message') ;
		
		 /*显示建筑信息 */
		Event.Subscribe(function(e){
			player.is_show_build_message = true ; 
		},'player.effect.show_build_message') ;
		
		/* 屏蔽鼠标的拖拽功能 */
		Event.Subscribe(function(e){
			player.is_close_MouseAxis0 = false ; 
		},'player.effect.close_MouseAxis0') ;
		
		/*恢复鼠标的拖拽功能 */
		Event.Subscribe(function(e){
			player.is_close_MouseAxis0 = true ; 
		},'player.effect.not_close_MouseAxis0') ;
		
		/* 验证鼠标是否点击地面 */
		Event.Subscribe(function(e){
			var actor = e.player ; 
			// 判断鼠标是否点击地面
			if(!player.canMouseCtrlMove){
				return;
			}
			//获得当前摄像机
			var iPcCamera = iCamera.pcarray['pcdefaultcamera'].QueryInterface('iPcCamera');
			var cameraobj = iPcCamera.GetCamera();
			var g2d = C3D.g2d;
			var v3d = cameraobj.InvPerspective([player.mousex, g2d.height - player.mousey], 1000);
			var startBeam = cameraobj.GetTransform().GetOrigin();
			var endBeam = cameraobj.GetTransform().This2Other(v3d);
					
			// 获得第一个点击到的模型
			var targetObj = engine.FindScreenTarget([actor.mousex, actor.mousey], 50, cameraobj);
			var meshObj;
			if(targetObj && targetObj.mesh){
				meshObj = targetObj.mesh;
			}	
			// 如果 meshObj 为空值时, 不执行
			if(!meshObj){
				return;
			}		
					
		},"player.effect.check.mouse_click_ground");
		
		/* 通用复位方法 : 同步 camera 至 player */
		/*(用于视角切换,人称切换,沙盘,漫游,前进,后退,鼠标点击地面等操作)*/
		Event.Subscribe(function(e){
				var actor = e.player ; 
				 //恢复鼠标的拖拽功能 
				 Event.Send({
					 name : "player.effect.not_close_MouseAxis0" 
				 });
				if((!player.isRotation)&&(!player.isMouseRotation)){
					// 没有进行原地旋转操作 
					Event.Send({	
						name : "player.effect.setcameraplayer1" ,
						player : player 
					}) ;
				}else{
					//如果利用鼠标进行了原地旋转
					player.isMouseRotation = false ; 
					player.isRotation = false ; 
					Event.Send({	
						name : "player.effect.setcameraplayer0" ,
						player : player 
					}) ;
				}
				if(!player.is_inShaPan){
					//重新设置camera的pitch值,恢复为默认值
					iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',iCamera.defaultPitch );
				}else{
					//判断是否屏蔽鼠标的拖拽功能
					player.is_close_MouseAxis0 = false ; 
				}
		},"effect.camera.change.player0");
		
		/*(用于视角切换,人称切换,沙盘,漫游,前进,后退,鼠标点击地面等操作)*/
		Event.Subscribe(function(e){
			player.isRotation = false ; 
			player.isMouseRotation = false ; 
		},"player.effect.clear.pctimer");
		
		
		/* 有人 无人模型切换 */
		var isPersonMode = true;
		Event.Subscribe(function(e){
			if(isPersonMode){
				// 复位操作 
				Event.Send({
					name : "effect.camera.change.player0" , 
					player : player 
				});
				isPersonMode = false;
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);				
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','firstperson']);
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
				player.personMode = "firstperson";
			}else{
				// 复位操作 
				Event.Send({
					name : "effect.camera.change.player0" , 
					player : player 
				});
				isPersonMode = true;
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);	
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetCamera",['modename','thirdperson']);
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);	
				player.personMode = "thirdperson";
			}				
		},"effect.camare.change.mode");
		
		/*  走跑切换 */
		//var run_or_walk = "zou";
		var isRunOrWalk = true;
		Event.Subscribe(function(e){
			//  修改角色的移动状态
			if(isRunOrWalk){
				isRunOrWalk = false;
				player.current_forward_state = "run";
			}else{
				isRunOrWalk = true;
				player.current_forward_state = "walk";
			}
			// 如果角色正移动,则直接改变走/跑状态
			if(!checkAminState()){
				// 直接调用 forward 
				Event.Send({
					name: "player.effect.forward.stop",
					player: player
				});
			}
		}, "effect.go.run.change");
		
		/*  take pictures */
       	var i = 0;
		Event.Subscribe(function(e){
			var img = Registry.Get('iImage'); //实例一个图片对象
			img = C3D.g2d.ScreenShot(); //把屏幕放进图像
			i++;
			img.SetName("abc"+i);	 //设置文件名
			imageio = Registry.Get('iImageIO');
			vfs = Registry.Get('iVFS');
			dataBuffer = Registry.Get('iDataBuffer');
			dataBuffer = imageio.Save(img,"image/png", "progressive");
			var t = vfs.WriteFile(img.GetName()+".png", dataBuffer);
			//alert("The picture you are  saving is successful!");
			Event.Send({
				name : "ui.take.photos.look",
				photos_name : i
			});
		}, "effect.take.photos");

		var first_change_man = true;
		/* 选择男女角色 */
		Event.Subscribe(function(e){
			var actor = e.self;
			var sex = e.sex;
			var rot = JSON_SCHOOL.roleSelect.role.rotation ; 
			var pos = JSON_SCHOOL.roleSelect.role.position ; 
			if(sex == 'nan'){
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
				//player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[pos[0] , pos[1]+1 , pos[2]]],['rotation',[rot[0] , rot[1] , rot[2]]]);
				player.pcarray['pcmesh'].PerformAction('SetMesh',['name','man']);
				player.pcarray['pcmesh'].PerformAction(
					'MoveMesh',
						["position",[pos[0] , pos[1] , pos[2]]], 
						['rotation',[rot[0] , rot[1] , rot[2]]]
				);
				player.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', 'stand'],['cycle',true],['reset', true]);
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
				//if(first_change_man){
					//first_change_man = false;
					//player.pcarray['pcmesh'].PerformAction('RotateMesh',['rotation', [0, 0.3, 0]]);				
				//}
			}else if(sex == 'nv'){
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
				//player.pcarray['pcmesh'].PerformAction('MoveMesh',['position',[pos[0] , pos[1]+1 , pos[2]]],['rotation',[rot[0] , rot[1] , rot[2]]]);
				player.pcarray['pcmesh'].PerformAction('SetMesh',['name','woman']);
				player.pcarray['pcmesh'].PerformAction(
					'MoveMesh',
						["position",[pos[0] , pos[1] , pos[2]]], 
						['rotation',[rot[0] , rot[1] , rot[2]]]
				);
				player.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', 'stand'],['cycle',true],['reset', true]);
				player.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
			}
		}, "ui.click.change.sex");

		/* 订阅进度条加载完成的事件，在这里处理角色mesh初始化操作 */
		Event.Subscribe(function(e){
			// 初始化女角色的默认Mesh
			Event.Send({
				name: "init.role.mesh",
				role: "woman"
			});
			// 初始化男角色的默认Mesh
			Event.Send({
				name: "init.role.mesh",
				role: "man"
			});
		},"loading.finished");
		
		/* 改变女角色服装 */
		Event.Subscribe(function(e){
			Event.Send({
				name: "role.change.mesh",
				role: "woman",
				changeMesh : {"yifu" : e.image}
			});
			
		}, "ui.click.woman.clothes");
		
		/* 改变女角色头发 */
		Event.Subscribe(function(e){
			var actor = e.self;
			Event.Send({
				name: "role.change.mesh",
				role: "woman",
				changeMesh : {"toufa" : e.image}
			});
			
		}, "ui.click.woman.hair");
		
		/* 改变男角色服装 */
		Event.Subscribe(function(e){
			Event.Send({
				name: "role.change.mesh",
				role: "man",
				changeMesh : {
					"yifu" : e.image[0],
					"kuzi" : e.image[1]
				}
			});
		}, "ui.click.man.clothes");
		
		/* 改变男角色头发 */
		Event.Subscribe(function(e){
			var actor = e.self;
			Event.Send({
				name: "role.change.mesh",
				role: "man",
				changeMesh : {
					"toufa" : e.image[0],
					"maozi" : e.image[1]
				}
			});
		}, "ui.click.man.hair");
		
		/* 订阅W键的双击事件 */
		Event.Subscribe(function(e){
			Event.Send({
				name: "player_forward_state_switch",
				state: "run",
				isSaveState: false,
				orientations: "Forward"
			});	
		},"w_key_double_click");
		
		/*设置 player旋转到 camera方向 */
		Event.Subscribe(function(e){
			var actor  = e.player;
			var position = actor.pcarray['pcmesh'].GetProperty('position');
			var rotation = iCamera.pcarray['pcmesh'].GetProperty('rotation');
			actor.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
						[
							position.x , 
							position.y ,
							position.z
						]
				],
				[
					'rotation',
						[
							rotation.x,
							0-rotation.y,
							rotation.z
						]
				]
			);
			// 设置camera
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
		},"player.effect.setcameraplayer0");
		
		
		/*设置 player旋转到 camera方向 */
		Event.Subscribe(function(e){
			// 设置camera
			var position = player.pcarray['pcmesh'].GetProperty('position');
			var rotation = player.pcarray['pcmesh'].GetProperty('rotation');
			iCamera.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
						[
							position.x , 
							position.y ,
							position.z
						]
				],
				[
					'rotation',
						[
							rotation.x,
							0-rotation.y,
							rotation.z
						]
				]
			);
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
		},"player.effect.setcameraplayer1");
		
		/*设置 camera旋转到 player方向 */
		Event.Subscribe(function(e){
			var actor  = e.player;
			var position = player.pcarray['pcmesh'].GetProperty('position');
			var rotation = player.pcarray['pcmesh'].GetProperty('rotation');
			iCamera.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
						[
							position.x , 
							position.y,
							position.z
						]
				],
				[
					'rotation',
						[
							rotation.x,
							0-rotation.y,
							rotation.z
						]
				]
			);
			// 设置camera
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','camera']);
			player.cameraRotationY = rotation.y ; //获取camera的Rotation的y的初始值(2012-06-17王鑫修改)
		},"player.effect.setplayercamera");
		
		/*人物 前进 事件触发*/
		Event.Subscribe(function(e){
			var actor  = e.player;
			var state = actor.current_forward_state;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			// camera 复位到 player 
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player
			}) ; 
			//player先原地旋转,后前进
			if(iCamera.is_rotate_left){
				//a键按下
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true ]);
			}else if(iCamera.is_rotate_right){
				//d键按下
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);
			}
			//发送前进事件
			Event.Send({
					name: "player_forward_state_switch",
					state: state,
					isSaveState: true,
					orientations: "Forward"
			});	
			// 当角色处于鼠标点击移动中时 ,按下 w 键后清空鼠标点击移动计时
			player.isMouseDownMoving = false;
			player.pcarray['pctimer'].PerformAction('Clear', ['name','mouse_click_move_stop']); 
		},"player.effect.forward.begin");
		
		/*人物 停止前进 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//player 停止前进,同时停止旋转 
			if(iCamera.is_rotate_left){
				iCamera.is_rotate_left = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false ]);
			}
			if(iCamera.is_rotate_right){
				iCamera.is_rotate_right = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			}
			//清空iCamera的旋转操作 
			iCamera.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			iCamera.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			actor.pcarray['pcactormove'].PerformAction('Forward',['start',false]);
			stopAnimation(actor, 0, 0);
			//隐藏星星对象
			Event.Send({
				name : "player.effect.star.hide",
				player : player 
			});
		}, "player.effect.forward.stop");
		
		/*人物 后退 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			// camera 复位到 player 
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player
			}) ; 
			if(iCamera.is_rotate_left){//王鑫修改(2012-06-10)
				//a键按下
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true ]);
			}else if(iCamera.is_rotate_right){
				//d键按下
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);
			}
			//隐藏星星对象
			Event.Send({
				name : "player.effect.star.hide",
				player : player 
			});
			var state = actor.current_forward_state;
			Event.Send({
				name: "player_forward_state_switch",
				state: state,
				isSaveState: true,
				orientations: "Backward"
			});
			// 这里发出鼠标控制角色行走的停止事件
			if(player.isMouseDownMoving){
				Event.Send({
					name:"player_mouse_click_move_stop"
				});
			}
		}, "player.effect.backward");
		/*人物 停止后退 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pcactormove'].PerformAction('Backward',['start',false]);
			if(iCamera.is_rotate_left){//王鑫修改(2012-06-10)
				iCamera.is_rotate_left = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false ]);
			}
			if(iCamera.is_rotate_right){
				iCamera.is_rotate_right = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			}
			//清空iCamera的旋转操作 
			iCamera.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			iCamera.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			stopAnimation(actor,1, 0);
			if(actor.isHelp){
				Event.Send({
					name: "ui.help.backward",
				});
			}
		}, "player.effect.backward.stop");
		
		
		/* 从 UI 上操作player的旋转 */
		/*人物 左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true]);
			changeAnimation(actor, 2, 1);
			
			// 这里发出鼠标控制角色行走的停止事件
			if(player.isMouseDownMoving){
				Event.Send({
					name:"player_mouse_click_move_stop"
				});
			}
		}, "player.effect.rotateleft");
		
		/*人物 停止左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			stopAnimation(actor, 2, 0);
			if(actor.isHelp){
				Event.Send({
					name: "ui.help.rotateLeft",
				});
			}
		}, "player.effect.rotateleft.stop");
		
		/*人物 右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);	
			changeAnimation(actor, 3, 1);
			
			// 这里发出鼠标控制角色行走的停止事件
			if(player.isMouseDownMoving){
				Event.Send({
					name:"player_mouse_click_move_stop"
				});
			}
		}, "player.effect.rotateright");
		
		/*人物 停止右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			stopAnimation(actor, 3, 0);
			if(actor.isHelp){
				Event.Send({
					name: "ui.help.rotateRight",
				});
			}
		}, "player.effect.rotateright.stop");
		
		/*人物 左平移 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			
			// 复位操作
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player 
			});
			
			var state = actor.current_forward_state;
			Event.Send({
				name: "player_forward_state_switch",
				state: state,
				isSaveState: true,
				orientations: "StrafeLeft"
			});
			
			actor.pcarray['pcactormove'].PerformAction('StrafeLeft',['start',true]);
			changeAnimation(actor, 4, 1);
		}, "player.effect.StrafeLeft");
		
		/*人物 左平移停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pcactormove'].PerformAction('StrafeLeft',['start',false]);
			stopAnimation(actor, 4, 0);
		}, "player.effect.StrafeLeft.stop");
		
		/*人物 右平移 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			if(!player.is_inShaPan && !player.is_viewControl){
				actor.pcarray['pclinearmovement'].SetProperty('gravity',19.6);
			}
			// 复位操作
			Event.Send({
				name : "effect.camera.change.player0" ,
				player : player 
			});
			
			var state = actor.current_forward_state;
			Event.Send({
				name: "player_forward_state_switch",
				state: state,
				isSaveState: true,
				orientations: "StrafeRight"
			});
			
			actor.pcarray['pcactormove'].PerformAction('StrafeRight',['start',true]);
			changeAnimation(actor, 5, 1);
		}, "player.effect.StrafeRight");
		
		/*人物 右平移停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pcactormove'].PerformAction('StrafeRight',['start',false]);
			stopAnimation(actor, 5, 0);
		}, "player.effect.StrafeRight.stop");
		
			///////////视角控制////////////////////////////////////////////////
		/* 视角控制 : 人物 抬头 事件触发 wangxin update 2012-06-27 */
		Event.Subscribe(function(e){
			var actor = iCamera;
			if(iCamera.openMinPitch == true) {
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',1.0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','shijiaokongzhi_sendPitch']);
				// 启动pctimer实时发送camera的pitch值
				iCamera.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', true], 
					['name', 'shijiaokongzhi_sendPitch']
				);
			}
			if(iCamera.openMinPitch == false){
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','shijiaokongzhi_sendPitch']);
			}
		}, "player.effect.rotateup_shijiaokongzhi");
		
		/*视角控制 : 人物停止抬头 事件触发 wangxin update */
		Event.Subscribe(function(e){
			var actor = iCamera;
			iCamera.pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
			if(iCamera.pitch >= 0.1 ){ // modifyed by wangxin 2012-04-09 (将 > 修改为 >=)
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',0.1); // modifyed by wangxin 2012-04-09 (将 0.12 设置为0.1)
			}else{
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',iCamera.Pitch) ; 
			}
			actor.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);	
			actor.pcarray['pctimer'].PerformAction('Clear', ['name','shijiaokongzhi_sendPitch']); 
		}, "player.effect.rotateup.stop_shijiaokongzhi");
		
		/* 视角控制 : 人物低头 事件触发 wangxin update 2012-06-27 */
		Event.Subscribe(function(e){
			var actor = iCamera;
			iCamera.openMinPitch = true;
			if(iCamera.openMinPitch == true) {
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',-1.0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','shijiaokongzhi_sendPitch']);
				iCamera.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', true], 
					['name', 'shijiaokongzhi_sendPitch']
				);
			}	
		}, "player.effect.rotatedown_shijiaokongzhi");
		
		/* 视角控制 : 人物 停止低头 事件触发 wangxin update 2012-06-27 */
		Event.Subscribe(function(e){
			var actor = iCamera;
			actor.pcarray['pcdefaultcamera'].SetProperty('pitch',iCamera.Pitch) ;//王鑫修改(2012-06-09)
			actor.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
			actor.pcarray['pctimer'].PerformAction('Clear', ['name','shijiaokongzhi_sendPitch']); 
		}, "player.effect.rotatedown.stop_shijiaokongzhi");
		
		///////////视角控制////////////////////////////////////////////////
		
		/*人物 抬头 事件触发*/
		Event.Subscribe(function(e){
			var actor = iCamera;
			if(iCamera.openMinPitch == true) {
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',1.0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']);
				// 启动pctimer实时发送camera的pitch值
				iCamera.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', true], 
					['name', 'sendPitch']
				);
			}
			if(iCamera.openMinPitch == false){
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']);
			}
		}, "player.effect.rotateup");

		/*人物 停止抬头 事件触发*/
		Event.Subscribe(function(e){
			var actor = iCamera;
			iCamera.pitch = iCamera.pcarray['pcdefaultcamera'].GetProperty('pitch');
			if(iCamera.pitch <=0.25){ // wangxin update 2012-06-27 将>=0.1改为<=0.25
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',0.1); // modifyed by wangxin 2012-04-09 (将 0.12 设置为0.1)
			}else{
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitch',iCamera.Pitch) ; 
			}
			actor.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);	
			actor.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']); 
		}, "player.effect.rotateup.stop");

		/*人物 低头 事件触发*/
		Event.Subscribe(function(e){
			var actor = iCamera;
			iCamera.openMinPitch = true;
			if(iCamera.openMinPitch == true) {
				iCamera.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',-1.0);
				iCamera.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']);
				iCamera.pcarray['pctimer'].PerformAction(
					'WakeUp', 
					['time', 1], 
					['repeat', true], 
					['name', 'sendPitch']
				);
			}	
		}, "player.effect.rotatedown");
		
		/*人物 停止低头 事件触发*/
		Event.Subscribe(function(e){
			var actor = iCamera;
			actor.pcarray['pcdefaultcamera'].SetProperty('pitch',iCamera.Pitch) ;//王鑫修改(2012-06-09)
			actor.pcarray['pcdefaultcamera'].SetProperty('pitchvelocity',0);
			actor.pcarray['pctimer'].PerformAction('Clear', ['name','sendPitch']); 
		}, "player.effect.rotatedown.stop");
		
		/*人物 垂直向上 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//将重力设为0
			actor.pcarray['pclinearmovement'].SetProperty('gravity',0.0);
			//设置移动的速度
			var speed = actor.pcarray['pclinearmovement'].SetProperty('speed',player.strafeUpSpeed);
			actor.pcarray['pclinearmovement'].PerformAction('SetVelocity',['velocity',[0,speed,0]]);
		}, "player.effect.StrafeUp");
		
		/*人物 垂直向上停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pclinearmovement'].PerformAction('SetVelocity',['velocity',[0,0,0]]);
		}, "player.effect.StrafeUp.stop");	
		
		/*人物 垂直向下 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//将重力设为0
			actor.pcarray['pclinearmovement'].SetProperty('gravity',0.0);
			//设置移动的速度
			var speed = actor.pcarray['pclinearmovement'].SetProperty('speed',player.strafeDownSpeed);
			actor.pcarray['pclinearmovement'].PerformAction('SetVelocity',['velocity',[0,-speed,0]]);
		}, "player.effect.StrafeDown");
		
		/*人物 垂直向下停止 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			actor.pcarray['pclinearmovement'].PerformAction('SetVelocity',['velocity',[0,0,0]]);
		}, "player.effect.StrafeDown.stop");
		
		/*人物 快速定位 事件触发	岳朝凤修改 2012-6-13	*/
		Event.Subscribe(function(e){
			var actor = e.player;
			var pos = e.id;
			actor.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
					[
						pos.reach_position_x,
						pos.reach_position_y,
						pos.reach_position_z
					]
				],
				[
					'rotation',
					[
						0,
						0 - pos.reach_rotation_y,
						0
					]
				]
			);
			if(isPersonMode){
				actor.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
			}else{
			   actor.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
			}
			
			actor.pcarray['pclinearmovement'].SetProperty('gravity', [19.6]);
			//复位操作 
			Event.Send({
					name :  "effect.camera.change.player0" , 
					player : player 
			});
		}, "player.effect.quick.arrive.position");
		
		/*人物 快速定位 事件触发(搜索)*///王鑫修改(2012-06-09)
		Event.Subscribe(function(e){
			var actor = e.player;
			var pos = e.id;
			actor.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
					[
						pos.position_x,
						pos.position_y,
						pos.position_z
					]
				],
				[
					'rotation',
					[
						0,
						0 - pos.rotation_y,
						0
					]
				]
			);
			if(isPersonMode){
				actor.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
			}else{
			   actor.pcarray['pcmesh'].PerformAction('SetVisible',['visible', false]);
			}
			actor.pcarray['pclinearmovement'].SetProperty('gravity', [19.6]);
			//复位操作 
			Event.Send({
					name :  "effect.camera.change.player0" , 
					player : player 
			});
		}, "player.effect.quick.to.position");
		
		/*人物 快速定位 事件触发(沙盘)*///王鑫修改(2012-06-09)
		Event.Subscribe(function(e){
			var actor = e.player;
			var pos = e.id;
			actor.pcarray['pcmesh'].PerformAction(
				'MoveMesh',
				[
					'position',
					[
						pos.position_x,
						pos.position_y,
						pos.position_z
					]
				],
				[
					'rotation',
					[
						0,
						0 - pos.rotation_y,
						0
					]
				]
			);
			actor.pcarray['pcmesh'].PerformAction('SetVisible',['visible', true]);
			actor.pcarray['pclinearmovement'].SetProperty('gravity', [19.6]);
			//复位操作 
			Event.Send({
					name :  "effect.camera.change.player0" , 
					player : player 
			});
		}, "player.effect.quick.to.position_shapan");
		
		// 实时获取鼠标信息
		Event.Subscribe(function(e){
			var actor = e.player;
			//在鼠标移动的过程中时刻获取当前的屏幕的像素坐标，x和y
			player.mousex = e.x;
			player.mousey = e.y;
		},"crystalspace.input.mouse.0.move");
		
		/*	鼠标滑动到建筑上显示建筑物名称	*/
		Event.Subscribe(function(e){
			if(player.role_ok == "ok"){
				var h = C3D.g2d.height;
				var w = C3D.g2d.width;
				var pccam = iCamera.pcarray['pcdefaultcamera'].QueryInterface("iPcDefaultCamera");
				var iPcCamera = pccam.QueryInterface('iPcCamera');
				var cameraobj = iPcCamera.GetCamera();
				var id = "false";
				//通过像素坐标获取当前像素坐标对应的场景中的meshobj的name
				var targetObj = engine.FindScreenTarget([player.mousex, player.mousey], 50, cameraobj);
				if(targetObj && targetObj.mesh){
					var meshwrapper = targetObj.mesh.object.name;
					//player.isMeshName = meshwrapper.substr(0, 6);
					player.isMeshName = meshwrapper ; 
					for (var index in JSON_SCHOOL.ui.BULID_DATA)
					{	
						if(player.isMeshName == JSON_SCHOOL.ui.BULID_DATA[index].meshobj){
							id = index;
							break;
						}else{
							id = "false";
						}
					}
					Event.Send({
						name : "ui.build.name.information",
						player : player,
						id : id,
						height : h,
						width : w,
						mouse_x : player.mousex,
						mouse_y : player.mousey
					});
				}else{
					id = "false";
					Event.Send({
						name : "ui.build.name.information",
						player : player,
						id : id
					});
				}
			}
		}, "player.effect.mouse.coord");

		/*	鼠标点击建筑抬起时显示建筑信息	*/
		Event.Subscribe(function(e){
			if(player.role_ok == "ok"){
				//显示建筑信息
				if(player.is_show_build_message){
					for (var index in JSON_SCHOOL.ui.BULID_DATA)
					{
						if(player.isMeshName == JSON_SCHOOL.ui.BULID_DATA[index].meshobj){
								Event.Send({
									name : "ui.build.information",
									player : player,
									id : index
								});
						}
					}
				}	
			}
		}, "crystalspace.input.mouse.0.button.up");
		
		/*鼠标点击地面控制角色行走*/
		Event.Subscribe(function(e){
			var actor = e.player ;
			//复位操作 
			Event.Send({
					name :  "effect.camera.change.player0" , 
					player : player 
			});
			//清除旋转 
			player.isRotation = false ; 
			player.isMouseRotation = false ;
			// 判断鼠标点击地面行走控制开发是否打开
			if(!player.canMouseCtrlMove){
				return;
			}
			//获得当前摄像机
			var iPcCamera = iCamera.pcarray['pcdefaultcamera'].QueryInterface('iPcCamera');
			var cameraobj = iPcCamera.GetCamera();
			var g2d = C3D.g2d;
			var v3d = cameraobj.InvPerspective([actor.mousex, g2d.height - actor.mousey], 1000);
			var startBeam = cameraobj.GetTransform().GetOrigin();
			var endBeam = cameraobj.GetTransform().This2Other(v3d);
			// 获得点击模型的数组
			// var sector = engine.sectors.FindByName('Scene')
			// var target = engine.GetNearbyMeshes(sector, startBeam, endBeam, true);
			// 获得第一个点击到的模型
			var targetObj = engine.FindScreenTarget([player.mousex, player.mousey], 50, cameraobj);
			var meshObj;
			if(targetObj && targetObj.mesh){
				meshObj = targetObj.mesh;
			}
			// var meshObj = target.Next();
			// 如果 meshObj 为空值时, 不执行
			if(!meshObj){
				// iprint(11111);
				return;
			}
			//获得保存点击的位置和场景的交点的struct
			var pointintersect = meshObj.HitBeam(startBeam, endBeam, true);
			intersectpos = pointintersect.isect;
			// 如果获得的坐标中 Y 轴过小 , 不执行
			// (王鑫修改 鼠标点击地面 不触发人物行走 的BUG ) 开始
			//if(intersectpos.y > 4 || intersectpos.y < -10) {
				// iprint(22222);
				//return;
			//}
			//王鑫新增
			//修改方案:1.美术将地面的meshobj进行命名,以g开头.
			//         2.逻辑这获取 鼠标点击的meshobj , 判断它是不是以g开头.
			var mesh_name =  targetObj.mesh.object.name; 
			var name = mesh_name.substring(0,1);
			if(name != "g"){
				return ; 
			}
			//如果点击到导游,return
			var guides_name = mesh_name.substring(0,6);
			if(guides_name == "guides"){
				return ; 
			}
			//新增结束
			// (王鑫修改 鼠标点击地面 不触发人物行走 的BUG )结束
			//创建星星对象 , 并将它移动到 鼠标点击的位置 (intersectpos 场景的三维 Position) 
			//var star = Entities.CreateEntity(STAR) ; //王鑫修改(2012-06-09)
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
			star.pcarray['pcmesh'].SetMesh('star');
			star.pcarray['pcmesh'].SetVisible(true); 
			var starX = intersectpos.x  ; 
			var starY = intersectpos.y  ; 
			var starZ = intersectpos.z  ; 
			player.isStarVisible = true ; // 显示星星对象
			// 发出触发角色移动的事件
			Event.Send({
				name: "player.effect.forward.begin",
				player: player
			});
			// 获得角色当前位置
			var currentPos = player.pcarray["pcmesh"].GetProperty("position");
			// 目标位置减当前位置
			var st = intersectpos.Subtract(currentPos);	
			// 计算角色需要移动的距离
			var len = st.Length();
			// 计算角色移动到目的地所需要的时间
			var moveTime = len / player.currentMoveSpeed * 750;
			// 计算角色的目标朝向
			var vec1 = new Math3.Vector3(0,0,1);  
			var dotVec = st.Dot(vec1);
			var v1len = st.Length();
			var v2len = vec1.Length();
			var angle = Math.asin(dotVec / (v1len * v2len) );
			// 根据目标向量的符号来确定目标转向的符号
			var finalAngle = (angle+Math.PI/2) * (st.x<0?-1:1) ;
			// 控制角色转向
			// player.pcarray["pcactormove"].PerformAction("RotateTo",["yrot", -finalAngle]);
			player.pcarray['pcmesh'].PerformAction(
				'MoveMesh', 
				[ 'position',  [	currentPos.x,	   currentPos.y,	currentPos.z	]	],
				[ 'rotation',  [  0,	-finalAngle,	0 	]   ]
			);
			var rotationY = Math.PI/2 - finalAngle ; 
			star.pcarray['pcmesh'].PerformAction('MoveMesh',["position",[starX , starY , starZ]] , ['rotation',[0,rotationY,0]]);
			var rotation = star.pcarray['pcmesh'].GetProperty('rotation');
			// 开始计时 , 时间结束时停止移动
			player.pcarray['pctimer'].PerformAction('Clear', ['name','mouse_click_move_stop']); 
			player.pcarray['pctimer'].PerformAction(
				'WakeUp', 
				['time', moveTime], 
				['repeat', false], 
				['name', 'mouse_click_move_stop']
			);
			//供新手帮助 鼠标事件判断处理
			//记录角色当前开始鼠标点击行走
			player.isMouseDownMoving = true;
		}, "player.effect.mouse.click.ground");

		// 鼠标点击地面控制角色移动 ,   订阅角色到达目的地后的事件
		// 这里就是移动的时间结束了
		Event.Subscribe(function(e){
			Event.Send({
				name: "player.effect.forward.stop",
				player: player
			});
			player.pcarray['pctimer'].PerformAction('Clear', ['name','mouse_click_move_stop']);
			// 停止所有操作 
			player.isMouseDownMoving = false;
			player.isRotaton = false ;
			player.isMouseRotation = false ; 
			//隐藏星星对象
			Event.Send({
				name : "player.effect.star.hide" ,
				player : player 
			}) ; 
			if(player.mouseOver){
				Event.Send({
					name: "ui.help.mouse",
				});
			}
		},"player_mouse_click_move_stop");
		// 订阅鼠标以上UI的事件 , 
		// 当鼠标以上UI时需要关闭鼠标点击地面行走功能 , 否则点击UI时会触发角色行走
		Event.Subscribe(function(e){
			player.canMouseCtrlMove = false;
			//player.canMouseRotation = false ; 
		},"ui.mouse.hover.isrolemove");
		Event.Subscribe(function(e){
			player.canMouseCtrlMove = true;
			//player.canMouseRotation = true ; 
		},"ui.mouse.out.isrolemove");
		
		//执行完动画后关闭窗口
		Event.Subscribe(function(e){
			//var actor = e.player;
			player.window_name = e.window;
			player.pcarray['pctimer'].PerformAction(
				'WakeUp', 
				['time', 500], 
				['repeat', false], 
				['name', 'ui_close_Animations']
			);
		}, "player.ui.Animations.close");
		
		/* 角色选择时 人物的左转 */
		/*人物 左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.self;
			actor.currentAnim='stand';
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true]);
			changeAnimation1(actor,2, 1);
		}, "player.effect.rotateleft2");
					
					
		/*人物 停止左转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.self;
			actor.currentAnim='stand';
			actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			stopAnimation1(actor, 2, 0);
		}, "player.effect.rotateleft2.stop");
					
		/*人物 右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.self;
			actor.currentAnim='stand';
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);				
			changeAnimation1(actor, 3, 1);
		}, "player.effect.rotateright2");
					
		/*人物 停止右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.self;
			actor.currentAnim='stand';
			actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
			stopAnimation1(actor, 3, 0);
		}, "player.effect.rotateright2.stop");

		/* 通过按键操作player的旋转 (logic) */
		/*人物左转事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//隐藏星星对象
			Event.Send({
				name : "player.effect.star.hide",
				player : player 
			});
			var  bool = checkPlayerRotation(2) ; //判断是不是只进行了左转操作
			if(bool) { 
				//将camera移动到 player位置 
				var position = actor.pcarray['pcmesh'].GetProperty('position');
				var rotation = actor.pcarray['pcmesh'].GetProperty('rotation');
				if((!actor.isRotation)&&(!actor.isMouseRotation)){
					// camera 第一次进行原地旋转
					iCamera.pcarray['pcmesh'].PerformAction(
						'MoveMesh', 
						[
							'position', 
							[
								position.x ,
								position.y , 
								position.z
							] 
						] ,
						[
							'rotation',
							[
								rotation.x,
								0-rotation.y,
								rotation.z
							]
						]
					);
				}else{
					// camera 已经进行原地旋转 
				    iCamera.pcarray['pcmesh'].PerformAction(
						'MoveMesh', 
						[
							'position', 
							[
								position.x ,
								position.y , 
								position.z
							] 
						] 
					);	
				}
				// 这里发出鼠标控制角色行走的停止事件
				if(player.isMouseDownMoving){
					Event.Send({
						name:"player_mouse_click_move_stop"
					});
				}
				// 设置camera 
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','camera']);
				//启动camera进行左旋转
				Event.Send({
					name : "camera.effect.rotateleft" , 
					camera : iCamera
				});
				actor.isRotation = true ; 
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);//王鑫修改(2012-06-11)
				stopAnimation(actor, 3, 0);
			}else{
				actor.isRotation = false ; 
				actor.isMouseRotation = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',true]);
				changeAnimation(actor, 2, 1);
			}// bool END
		}, "player.effect.rotateleft1");
		
		/*人物 停止左转 事件触发*/
		Event.Subscribe(function(e){
		    var actor = e.player;
			// 判断 player 是不是进行了原地旋转
			if(actor.isRotation) {
				// 如果player进行原地旋转,让camera停止旋转
				iCamera.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
			    actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);//王鑫修改(2012-06-11)
				stopAnimation(actor, 3, 0);
			}else{
			    // 如果不是,则让player停止转动
				actor.isRotation = false ; 
				actor.isMouseRotation = false ;
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);
				stopAnimation(actor, 2, 0);
			}
			//修改camera的左旋属性,设置为false
			iCamera.is_rotate_left = false ;
			if(actor.isHelp){
				Event.Send({
					name: "ui.help.rotateLeft",
				});
			}
		}, "player.effect.rotateleft1.stop");
		
		/*人物右转事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//隐藏星星对象
			Event.Send({
				name : "player.effect.star.hide",
				player : player 
			});
			var  bool = checkPlayerRotation(3) ;  // 判断player是否只进行了右转操作
			if(bool) {
			    // 将 camera 移动到 player位置 
				var position = actor.pcarray['pcmesh'].GetProperty('position');
				var rotation = actor.pcarray['pcmesh'].GetProperty('rotation');
				if((!actor.isRotation)&&(!actor.isMouseRotation)){
					// camera 第一次进行原地旋转
					iCamera.pcarray['pcmesh'].PerformAction(
						'MoveMesh', 
						[
							'position', 
							[
								position.x ,
								position.y , 
								position.z
							] 
						] ,
						[
							'rotation',
							[
								rotation.x,
								0-rotation.y,
								rotation.z
							]
						]
					);
				}else{
					// camera 已经进行原地旋转
				    iCamera.pcarray['pcmesh'].PerformAction(
						'MoveMesh', 
						[
							'position', 
							[
								position.x ,
								position.y , 
								position.z
							] 
						]
					);	
				}
				// 这里发出鼠标控制角色行走的停止事件
				if(player.isMouseDownMoving){
					Event.Send({
						name:"player_mouse_click_move_stop"
					});
				}
				// 设置camera 
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','camera']);
				// 启动camera右转
				Event.Send({
					name : "camera.effect.rotateright" , 
					camera : iCamera
				});
				actor.isRotation = true ;
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]);//王鑫修改(2012-06-11) 
				stopAnimation(actor, 2, 0);
			}else{
				actor.isRotation = false ; 
				actor.isMouseRotation = false ; 
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',true]);
				changeAnimation(actor, 3, 1);
			}
		}, "player.effect.rotateright1");
		
		/*人物 停止右转 事件触发*/
		Event.Subscribe(function(e){
			var actor = e.player;
			// 判断 player 是不是进行了原地旋转
			if(actor.isRotation) {
				// 如果player进行原地旋转,让camera停止旋转
				iCamera.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
				actor.pcarray['pcactormove'].PerformAction('RotateLeft',['start',false]); 
				stopAnimation(actor, 2, 0);
			}else{
			    // 如果 Player不是原地旋转 , 让 Player 停止
				actor.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
				player.isRotation = false ; 
				player.isMouseRotation = false ;
				stopAnimation(actor, 3, 0);
			}
			//修改camera的右旋属性,设置为false
			iCamera.is_rotate_right = false ;
			if(actor.isHelp){
				Event.Send({
					name: "ui.help.rotateRight",
				});
			}
		}, "player.effect.rotateright1.stop");
					
					
		/* 鼠标左键旋转 */
		Event.Subscribe(function(e){ 
				/*
					判断player是停止还是移动.
					1.如果鼠标左键点击窗体 
					2.如果player停止 , 旋转 camera 
					3.如果player移动 , 旋转 player 
				*/
				// 1.判断鼠标左键是否点击其他窗体 
				if(!player.canMouseCtrlMove){
					return;
				}
				var actor = e.player ; 
				actor.mouseleft=true;
				// 2.player处于停止状态,旋转camera
				if(checkAminState()){ 
					var position =  actor.pcarray['pcmesh'].GetProperty('position');
					if((!player.isRotation)&&(!player.isMouseRotation)){
						Event.Send({
								name : "player.effect.setplayercamera" , 
								player : player  
						});
					}else{
						iCamera.pcarray['pcmesh'].PerformAction(
								'MoveMesh',
										[
											'position',
											[
													position.x , 
													position.y ,
													position.z
											]
										] 
				
						);
						iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','camera']); 	
					}
				}
		}, "player.effect.mouseleftrotation");
		
		/* 鼠标点击地面 */
		Event.Subscribe(function(e){
			var actor = e.player;
			// 鼠标点击地面
			if(arr_amin_state[0]==1){
				if(player.isMouseDownMoving){
					// player运动时,触发鼠标点击地面 
					Event.Send({
						name : "player.effect.mouse.click.ground",
						player : player
					});
				}else{
					// player 运动时,触发player转向事件 
					//Event.Send({
						//name : "player.effect.playermoverotation" , 
						//player : player 
					//});
				}	
			}else{
				//player静止时 ,触发鼠标点击地面行走事件
				if(checkAminState()){
					Event.Send({
						name : "player.effect.mouse.click.ground",
						player : player
					});
					
				}	
			}
		}, "player.effect.mouseleft.click");
		
		/* player移动时,鼠标点击地面 ,player进行转向操作 */
		Event.Subscribe(function(e){
			var actor = e.player ;
			//清除旋转 
			player.isRotation = false ; 
			player.isMouseRotation = false ;
			//获得当前摄像机
			var iPcCamera = iCamera.pcarray['pcdefaultcamera'].QueryInterface('iPcCamera');
			var cameraobj = iPcCamera.GetCamera();
			var g2d = C3D.g2d;
			var v3d = cameraobj.InvPerspective([actor.mousex, g2d.height - actor.mousey], 1000);
			var startBeam = cameraobj.GetTransform().GetOrigin();
			var endBeam = cameraobj.GetTransform().This2Other(v3d);
			// 获得第一个点击到的模型
			var targetObj = engine.FindScreenTarget([player.mousex, player.mousey], 50, cameraobj);
			var meshObj;
			if(targetObj && targetObj.mesh){
					meshObj = targetObj.mesh;
			}
			// 如果 meshObj 为空值时, 不执行
			if(!meshObj){
				return;
			}
			//获得保存点击的位置和场景的交点的struct
			var pointintersect = meshObj.HitBeam(startBeam, endBeam, true);
			intersectpos = pointintersect.isect;
			//王鑫新增
			//修改方案:1.美术将地面的meshobj进行命名,以g开头.
			//         2.逻辑这获取 鼠标点击的meshobj , 判断它是不是以g开头.
			var mesh_name =  targetObj.mesh.object.name; 
			var name = mesh_name.substring(0,1);
			if(name != "g"){
				return ; 
			}
			//如果点击到导游,return
			var guides_name = mesh_name.substring(0,6);
			if(guides_name == "guides"){
				return ; 
			}
			//新增结束
			//
			// (王鑫修改 鼠标点击地面 不触发人物行走 的BUG ) 结束
			//创建星星对象 , 并将它移动到 鼠标点击的位置 (intersectpos 场景的三维 Position) 
			//var star = Entities.CreateEntity(STAR) ; 
			iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
			star.pcarray['pcmesh'].SetMesh('star');
			star.pcarray['pcmesh'].SetVisible(true); 
			var starX = intersectpos.x  ; 
			var starY = intersectpos.y  ; 
			var starZ = intersectpos.z  ; 
			player.isStarVisible = true ;  //标记星星对象在地面显示
			// 获得角色当前位置
			var currentPos = player.pcarray["pcmesh"].GetProperty("position");
			// 目标位置减当前位置
			var st = intersectpos.Subtract(currentPos);	
			// 计算角色的目标朝向
			var vec1 = new Math3.Vector3(0,0,1);  
			var dotVec = st.Dot(vec1);
			var v1len = st.Length();
			var v2len = vec1.Length();
			var angle = Math.asin(dotVec / (v1len * v2len) );
			// 根据目标向量的符号来确定目标转向的符号
			var finalAngle = (angle+Math.PI/2) * (st.x<0?-1:1) ;
			// 控制角色转向
			player.pcarray['pcmesh'].PerformAction(
				'MoveMesh', 
				[ 'position',  [	currentPos.x,	   currentPos.y,	currentPos.z	]	],
				[ 'rotation',  [  0,	-finalAngle,	0 	]   ]
			);
			var rotationY = Math.PI/2 - finalAngle ; 
			star.pcarray['pcmesh'].PerformAction('MoveMesh',["position",[starX , starY , starZ]] , ['rotation',[0,rotationY,0]]);
			var rotation = star.pcarray['pcmesh'].GetProperty('rotation');
			//记录角色当前开始鼠标点击行走
			player.isMouseDownMoving = false;
		},"player.effect.playermoverotation");
		
		/* 隐藏星星对象 */
		Event.Subscribe(function(e){ 
			if(player.isStarVisible){
				var star = Entities.CreateEntity(STAR) ; 
				iCamera.pcarray["pcdefaultcamera"].PerformAction("SetFollowEntity",['entity','player']);
				star.pcarray['pcmesh'].SetMesh('star');
				star.pcarray['pcmesh'].SetVisible(false);
				player.isStarVisible = false ;
			}
		},"player.effect.star.hide");
		
		/////////////////////////////////////////////////////
		/////////////////自动寻路模块////////////////////////
		/////////////////////////////////////////////////////
		//等数据完善后添加
		
		
		
		
		/////////////////////////////////////////////////////
		////////////////导游模块/////////////////////////////
		/////////////////////////////////////////////////////
		//等数据完善后添加

		
		/*	岳朝凤新增---调节环境亮度	事件触发		2012-6-6	*/
		/*	增加环境亮度	---事件触发	*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//设置环境亮度增加的幅度
			sector.ambient = sector.ambient.Add([0.05, 0.05, 0.05]);
		},"player.effect.raiseBrightness");
		/*	降低环境亮度---事件触发	*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//设置环境亮度降低的幅度
			sector.ambient = sector.ambient.Add([-0.05, -0.05, -0.05]);
		},"player.effect.reduceBrightness");
		/*	获取进入场景时环境光的初始值sector.ambient	*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//将进入场景时的环境光初始值记录下来
			actor.start_ambient = sector.ambient;
		},"player.effect.getSector_ambient");
		/*	恢复环境亮度---事件触发	*/
		Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//将环境亮度恢复到原来的状态
			sector.ambient = player.start_ambient;
		},"player.effect.recoverBrightness");
		/** 	灯光跟随人物移动--事件触发	*/
		/*Event.Subscribe(function(e){
			// 获得sector
			var sector = C3D.engine.sectors.Get(0);
			var lightlist = sector.lights;
			var light = lightlist.Get(0);
			var pcactor = player.pcarray['pcactormove'].QueryInterface('iPcActorMove');
			C3D.engine.SubscribeFrame(function(){
				iprint(pcactor.IsMoving());
				if(pcactor.IsMoving())
				{
					player.pcarray['pcmesh'].SetAnimation(player.currentAnim,true,false);
					position = player.pcarray['pcmesh'].position;
					light.center = [position.x, position.y + 2, position.z];
				}else{
					player.pcarray['pcmesh'].SetAnimation("stand",true,false);
				}
			});
		},"player.effect.light.followPlayer.move");*/
		/** 	特殊模式时提高环境亮度	*/
		/*Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//将环境亮度恢复到原来的状态
			sector.ambient = [1.2,1.2,1.2];
		},"player.effect.enter.special.mode");*/
		/** 	退出特殊模式时，恢复环境亮度	*/
		/*Event.Subscribe(function(e){
			var actor = e.player;
			//获取sectorList
			var sectorList = engine.sectors;
			//获取sector
			var sector = sectorList.Get(0);
			//将环境亮度恢复到原来的状态
			sector.ambient = player.start_ambient;
		},"player.effect.exit.special.mode");*/
	})();

} catch(e){
	alert(e);
}