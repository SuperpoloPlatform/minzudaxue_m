/**************************************************************************
 *
 *  This file is part of the UGE(Uniform Game Engine).
 *  Copyright (C) by SanPolo Co.Ltd.
 *  All rights reserved.
 *
 *  See http://uge.spolo.org/ for more information.
 *
 *  SanPolo Co.Ltd
 *  http://uge.spolo.org/   sales@spolo.org uge-support@spolo.org
 *
**************************************************************************/


try{
	(function(){
	
// ==========================================================================================================
// ===   当前 effect 提取出来的公共函数   ===================================================================
// ==========================================================================================================
	
		

// ==========================================================================================================		
// ======  订阅的事件  ======================================================================================
// ==========================================================================================================
		
		/* 接受搜索按钮发送的消息，用于字符匹配处理，含英文搜索，暂时实现全文字符匹配，主要匹配的是建筑信息的名字 */
		var count = 0;
		Event.Subscribe(function(e){
			var str= e.value;	
			var data="";		
			for (var index in SEARCH_DATA){	
				////CONSOLE.WriteLine(SEARCH_DATA[index].chinese.name.indexOf(str)+"............");
				if(SEARCH_DATA[index].chinese.name.indexOf(str)!=-1 ){  //如果存在发送给UI SEARCH_DATA[index].english.name.indexOf(str)!=-1
						data+=SEARCH_DATA[index].chinese.name+"_";
						count++;
				} 
				
				if(SEARCH_DATA[index].english.name.indexOf(str)!=-1){
					data+=SEARCH_DATA[index].english.name+"_";
					count++;
				}
				// //CONSOLE.WriteLine(str+"...查无信息............");
			} 
				//if(data=="") data="查无信息";
				//count=data.split("_").length;
				////CONSOLE.WriteLine(data+"............");	
				////CONSOLE.WriteLine(count+"............");	
				Event.Send({
						name:"search_effect_dataBack",
						data: data,
						count: count 
					});
					count = 0;		 //清零				
		}, "data.effect.search");
		
	
	})();

} catch(e){
	alert(e);
}