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
	plan_flag = false;
	PLANIMAGE_LAYOUT = {
		name : "planimage.layout",
		method : {
			destory: function (){
				var rest = function (){
					// 发出进度条加载完成的事件
					Event.Send({
						name : "loading.finished"
					});
					// var image_one = GUI.Animations.GetAnimation("chang_image_one");
					// var image_two = GUI.Animations.GetAnimation("chang_image_two");
					var wheel = GUI.Animations.GetAnimation("wheel");
					// if(image_one){
						// GUI.Animations.DestroyAnimationInstance(image_one);
					// }
					// if(image_two){
						// GUI.Animations.DestroyAnimationInstance(image_two);
					// }
					if(wheel){
						GUI.Animations.DestroyAnimationInstance(wheel);
					}
					
					wnd.SetProperty("text_theme","100%");
					GUI.Imagesets.DestroyImageset(GUI.Imagesets.Get("planimage"));
					GUI.Windows.DestroyWindow(GUI.System.root);
					GUI.CreateObjectLayout(RELOADING_LAYOUT,"/ui/data");	
				}
				var wnd = GUI.GUISheet.Get("word");
				if(wnd.GetProperty("text_colour") == "FFF50701"){
					meval(rest);
					}
				if(!plan_flag){
					if(!load("/logic/logic_index.js"))
					{
						alert("Failed to load `/logic/logic_index.js`");
					}
					if(!load("/ui/ui_index.js"))
					{
						alert("Failed to load `/ui/ui_index.js`");
					}
					plan_flag = true;
				}
			}
		},
		window : {
			"word":{
				property :{
					changword : function (obj,propt_name){
						obj.SetProperty("text_theme","0%");
						if(!GUI.Animations.LoadAnimations("planimage.animation"))
						{
							alert("animation 文件导入失败!!");
						}
						var chang_word = GUI.Animations.GetAnimation("chang_word");
						if(!chang_word)
						{
							alert("动画获取失败!");
						}
						var instant = GUI.Animations.InstantiateAnimation(chang_word);
						instant.SetTargetWindow(obj);
						instant.Start();
					}
				},
				event :{},
				subscribe :{}
			},
			"word_normal":{
				property :{
					changimage :function (obj,propt_name)
					{	
						// if(!GUI.Animations.LoadAnimations("planimage.animation"))
						// {
							// alert("animation 文件导入失败!!");
						// }
						// var chang_image = GUI.Animations.GetAnimation("chang_image_one");
						// if(!chang_image)
						// {
							// alert("动画获取失败!");
						// }
						// var instant1 = GUI.Animations.InstantiateAnimation(chang_image);
						// instant1.SetTargetWindow(obj);
						// instant1.Start();
					}
				},
				event :{},
				subscribe :{}
			},
			"word_hover":{
				property :{
					changimage :function (obj,propt_name)
					{	
						// if(!GUI.Animations.LoadAnimations("planimage.animation"))
						// {
							// alert("animation 文件导入失败!!");
						// }
						// var chang_image = GUI.Animations.GetAnimation("chang_image_two");
						// if(!chang_image)
						// {
							// alert("动画获取失败!");
						// }
						var wheel = GUI.Animations.GetAnimation("wheel");
						if(!wheel)
						{
							alert("动画获取失败!");
						}
						// var instant = GUI.Animations.InstantiateAnimation(chang_image);
						// instant.SetTargetWindow(obj);
						// instant.Start();
						var ins = GUI.Animations.InstantiateAnimation(wheel);
						ins.SetTargetWindow(obj);
						ins.Start();
					}
				},
				event :{
					"Sized":"destory"
				},
				subscribe :{}
			}
		}
	}
} catch( e )
{
	alert( e );
}