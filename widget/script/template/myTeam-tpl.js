define([],function(){
  var  temp={};
		temp.init1=function(domId){
		 var html = one();
		 $("#"+domId).append(html);		
		}
		var one = function(){
					return 	 '<script id="init1" type="text/html"> '+
    	                        '{{if data!=[]}}'+
    	                        '{{each res as val}}'+
									'<tr>'+
									'	<td><p>{{val.Mobile}}</p></td>'+
									'	<td width="22%">{{val.Test}}</td>'+
									'	<td width="24%" class="awardTime">{{val.AddDate}}</td>'+
									'	<td width="12px"></td>'+
									'</tr>'+
								'{{/each}}'+
    	                        '{{/if}}' +
    	                     '</script>'	
		}	
  return  temp;
})