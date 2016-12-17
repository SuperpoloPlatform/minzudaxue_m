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
	SAND_TABLE_STATE = 0 ;	
	( function () {
		//引入UI布局文件。
		var UIDATA = [
			"zhucaidan.layout",
			"reloading.layout",
			"ui_function",
			"ui_position",
			"ui_bulid",
			//"ui_search",   //added by HouDongqiang
			"ui_language",
			"ui_language_reloading",
			"ui_language_help",
			//"ui_image",
			//"ui_sand"
		];
		for (var index in UIDATA )
		{
			if( !load ( "/ui/" + UIDATA[index] + ".js"))
				alert("Failed to load '/ui/" + UIDATA[index] + "'.js'");
		}
		
		
	})();
	
} catch( e )
{
	alert( e );
}