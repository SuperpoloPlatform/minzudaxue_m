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
// ===   ��ǰ effect ��ȡ�����Ĺ�������   ===================================================================
// ==========================================================================================================
	
		

// ==========================================================================================================		
// ======  ���ĵ��¼�  ======================================================================================
// ==========================================================================================================
		
	
		
		
		/*  music start */
		
		Event.Subscribe(function(e){
			if(music_bg.state == "stop" || music_bg.state == "close" || music_bg.state == "play"){
							music_bg.state = "play";
							music_bg.pcarray['pcsoundsource'].SetProperty('mode', 'relative');
							music_bg.pcarray['pcsoundsource'].SetProperty('soundname', 'lgly.wav');
							music_bg.pcarray['pcsoundsource'].SetProperty('volume', 1.5); //��ʼ����
							music_bg.pcarray['pcsoundsource'].Play();
							music_bg.pcarray['pcsoundsource'].SetProperty('loop', true);  /*Ĭ��Ϊѭ��*/
							
						}
		}, "music.effect.play");

		/*  music stop */
		Event.Subscribe(function(e){
				
			if(music_bg.state == "play"){
							music_bg.state = "stop";
							music_bg.pcarray['pcsoundsource'].Stop(); 
						}   
			}, "music.effect.stop");
		
	
	})();

} catch(e){
	alert(e);
}