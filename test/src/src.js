var Ractive_Task = {
	  
	 onReady : function(c){
   var progressbars =[];
   		 
		var ractive = new Ractive({
			el : "#container", //Target for output to display 
			template : "#template",//Data to display in output
			data : {
				progressbars : [ {
					name : 'ProgressOne',
					value : 20
				}, {
					name : 'ProgressTwo',
					value : 35
				}, {
					name : 'ProgressThree',
					value : 15
				} ],

				amounts : [ +25, +10, -10, -25 ]


			},
			//This function picks the progress bar dynamically
			adjust : function(d) {
			  
			
				var selected = this.get('selectedProgress');
				if (selected == null)
					return;
				var keypath = 'progressbars[' + selected + '].value';
				var keypath_value = this.get(String(keypath));

				if (keypath_value < 0) {
					keypath_value = 0;
				}
				  
				//Animates the change
				if(keypath_value % 5 == 0){ 
				ractive.animate(keypath, keypath_value + d);
				
				}
				 
				
			}
			

		});
		return progressbars;
}
}
