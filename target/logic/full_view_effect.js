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
		Event.Subscribe(function(e){
			//点击进入场景后执行以下代码
			if(player.role_ok == "ok"){
				//根据name获取Box meshobj
				var meshobj = C3D.engine.FindMeshObject('Box01#1')
				//判断Box是否存在，存在执行if语句，不存在执行else语句
				if(meshobj){
					//声明触发距离
					var gap = 10;
					var show = false;
					var flag = true;
					var index = 0;
					while(flag)
					{
						if( typeof(FULL_VIEW_POSITION[index]) == "undefined" )
						{
							flag = false;
						}else{
							//获取人物当前坐标向量
							var pre_posx = e.position.x;
							var pre_posy = e.position.y;
							var pre_posz = e.position.z;
							var pre_pos = new Math3.Vector3(pre_posx,pre_posy,pre_posz);
							// 获取触发进入360全景展示的坐标向量
							var FV_posx = FULL_VIEW_POSITION[index].position.position_x;
							var FV_posy = FULL_VIEW_POSITION[index].position.position_y;
							var FV_posz = FULL_VIEW_POSITION[index].position.position_z;
							var FV_pos = new Math3.Vector3(FV_posx,FV_posy,FV_posz);
							//计算当前坐标向量与触发全景展示的坐标向量差
							var vec_gap = pre_pos.Subtract(FV_pos);
							var len = vec_gap.Length();
							//比较向量差和触发距离--满足条件，则发送消息给UI--显示是否进入全景展示提示框
							if(len <= gap){
								show = true;
								flag = false;
								player.fview_id = index;
							}else{
								show = false;
								
							}
							Event.Send({
								name : "ui.full_view_prompt.display",
								player : player,
								show : show
							});
						}
						index ++;
					}
				}else{
					var show = false;
					Event.Send({
						name : "ui.full_view_prompt.display",
						player : player,
						show : show
					});
				}
			}
		},"player.effect.full_view");

		//动态更换Box贴图
		Event.Subscribe(function(e){
			var id = e.id;
			var boxindex = FULL_VIEW_POSITION[id].textures;
			var iEngine = Registry.Get('iEngine');
			//	根据名称取得iMeshWrapper对象
			var iMeshWrapper = iEngine.FindMeshObject('Box01#1');
			//iMeshObject对象
			var iMeshObject = iMeshWrapper.meshObject;
			//iMaterialWrapper
			var iMaterialWrapper = iMeshObject.GetMaterialWrapper()
			//iMaterial
			var iMaterial = iMaterialWrapper.GetMaterial();
			//iTextureManager
			var texturemanager = g3d.texturemanager;
			//这里需要循环
			//itexturewrapper
			var itexturewrapper = iEngine.CreateTexture('box.jpg', '/textures/box.jpg');
			//注册对象
			itexturewrapper.Register(texturemanager);
			
			
			
			var iSpriteCal3DState = iMeshObject.QueryInterface('iSpriteCal3DState');
			//获得Box当前的贴图
			var curTextures = FULL_VIEW_POSITION[id]["textures"];
			//遍历box的六个面，逐一更换
			for(var index in boxindex){
				//先换上要换的贴图
				iSpriteCal3DState.AttachMesh(boxindex[index]);
				//卸下原来的贴图
				iSpriteCal3DState.DetachMesh(curTextures[index]);
				//将新换上的贴图记录下来
				curTextures[index] = change[index]
			}
		},"change.box.textures");
		
		//鼠标双击停止旋转
		Event.Subscribe(function(e){
			if(player.isFullView && player.isRotateRight){
				player.pcarray['pcactormove'].PerformAction('RotateRight',['start',false]);
				player.isRotateRight = false;
			}else{
				return;
			}
		},"crystalspace.input.mouse.0.button.doubleclick");
	})();
}catch(e){
	alert("error:",e);
}