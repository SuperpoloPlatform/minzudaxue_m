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
	
		/*	开始漫游	*/	
		Event.Subscribe(function(e){
			// 复位操作  added by wangxin 2012-04-18
			Event.Send({
				name : 'effect.camera.change.player0' , 
				player : player 
			});
			//提高环境亮度
			// Event.Send({
				// name : "player.effect.enter.special.mode", 
				// player : player 
			// });
			
			//屏蔽鼠标拖拽功能 added by wangxin 2012-04-24
			Event.Send({
				name : 'player.effect.close_MouseAxis0' 
			});
			//设置为第三人称视角
			iCamera.pcarray['pcdefaultcamera'].SetCamera("thirdperson");
			//隐藏player
			player.pcarray['pcmesh'].SetVisible(false);
			//屏蔽键盘按键操作
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.DisableKeyboardEvents();
			//添加对 e.value=sequence_name 的判断
			if(!e.value){
				alert("sequence_name 传值错误，没有找到相应的漫游路径！！");
				//发送消息给ui--显示/隐藏ui
				Event.Send({
					name : "player.manyou.stop" 
				});
			}else{
				//通过点击UI传值，判断漫游路线
				if(e.value == JSON_WANDER.wander_route.one_manyou_one.sequence_name) {
					var sequenceFrame1 = JSON_WANDER.wander_route.one_manyou_one.sequence_frame;
					var sequenceTime1 = JSON_WANDER.wander_route.one_manyou_one.sequence_time/sequenceFrame1;
					var file_name1 = JSON_WANDER.wander_route.one_manyou_one.file_path;
					WanderManager.RunWander(iCamera, sequenceFrame1 ,sequenceTime1,file_name1,"player.manyou.stop");
				}
				if(e.value == JSON_WANDER.wander_route.one_manyou_two.sequence_name) {
					var sequenceFrame2 = JSON_WANDER.wander_route.one_manyou_two.sequence_frame;
					var sequenceTime2 = JSON_WANDER.wander_route.one_manyou_two.sequence_time/sequenceFrame2;
					var file_name2 = JSON_WANDER.wander_route.one_manyou_two.file_path;
					WanderManager.RunWander(iCamera, sequenceFrame2 ,sequenceTime2,file_name2,"player.manyou.stop");
				}
				if(e.value == JSON_WANDER.wander_route.two_manyou_one.sequence_name) {
					var sequenceFrame3 = JSON_WANDER.wander_route.two_manyou_one.sequence_frame;
					var sequenceTime3 = JSON_WANDER.wander_route.two_manyou_one.sequence_time/sequenceFrame3;
					var file_name3 = JSON_WANDER.wander_route.two_manyou_one.file_path;
					WanderManager.RunWander(iCamera, sequenceFrame3 ,sequenceTime3,file_name3,"player.manyou.stop");
				}
				if(e.value == JSON_WANDER.wander_route.two_manyou_two.sequence_name) {
					var sequenceFrame4 = JSON_WANDER.wander_route.two_manyou_two.sequence_frame;
					var sequenceTime4 = JSON_WANDER.wander_route.two_manyou_two.sequence_time/sequenceFrame4;
					var file_name4 = JSON_WANDER.wander_route.two_manyou_two.file_path;
					WanderManager.RunWander(iCamera, sequenceFrame4 ,sequenceTime4,file_name4,"player.manyou.stop");
				}
			}
		},"player.effect.wander.begin");
		
		/*	暂停漫游	*/
		Event.Subscribe(function(e){
			//屏蔽鼠标拖拽功能 added by wangxin 2012-04-24
			Event.Send({
				name : 'player.effect.close_MouseAxis0' 
			});
			//暂停漫游
			WanderManager.Suspend();
		},"player.effect.wander.pause");
		
		/*	继续漫游	*/
		Event.Subscribe(function(e){
			//屏蔽鼠标拖拽功能 added by wangxin 2012-04-24
			Event.Send({
				name : 'player.effect.close_MouseAxis0' 
			});
			//继续漫游
			WanderManager.Resume();
		},"player.effect.wander.resume");
		
		/*	停止漫游	*/
		Event.Subscribe(function(e){
			//屏蔽鼠标拖拽功能 added by wangxin 2012-04-24
			Event.Send({
				name : 'player.effect.close_MouseAxis0' 
			});
			// 恢复键盘按键操作
			var keyControl = player.pcarray['pccommandinput'].QueryInterface('iPcCommandInput');
			keyControl.EnableKeyboardEvents();
			//显示player
			player.pcarray['pcmesh'].SetVisible(true);
			//切换到相应人称视角 // modifyed by wangxin 2012-04-18 
			var personmode = player.personMode ; 
			if(personmode == "thirdperson"){
				iCamera.pcarray['pcdefaultcamera'].SetCamera("thirdperson");
			}else{
			    iCamera.pcarray['pcdefaultcamera'].SetCamera("firstperson");
			}
			//停止漫游
			WanderManager.Stop();
			//设置人物动画
			player.pcarray['pcmesh'].PerformAction('SetAnimation',['animation', player.stopAnim],['cycle',true],['reset', true]);
			// 复位操作  added by wangxin 2012-04-18
			Event.Send({
				name : 'effect.camera.change.player0' , 
				player : player 
			}) ;
			//恢复环境亮度
			// Event.Send({
				// name : "player.effect.exit.special.mode", 
				// player : player 
			// });
		},"player.effect.wander.stop");
	})();
} catch(e){
	alert(e);
}