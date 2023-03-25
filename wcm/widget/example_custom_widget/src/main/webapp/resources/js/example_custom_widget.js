var CustomWidget = SuperWidget.extend({
    title: null,
    source: null,
    url: null,
    

    init: function () {
        //code
    },

    bindings: {
        local: {
            'save-preferences': ['click_savePreferences']
        }
    },
    
    savePreferences: function(){
        var view = (this.isEditMode) ? "" : "View";

        if (this.isEditMode){

    		this.title = $("#title" + "_" + this.instanceId).val(),
    		this.source = $("#source" + "_" + this.instanceId).val(),
    		this.url = $("#url" + "_" + this.instanceId).val()
    	
    		
	    	var preferences ={
	    			title: this.title,
	    			source: this.source,
	    			url: this.url
	    		}	
	    	
	    	var teste = WCMSpaceAPI.PageService.UPDATEPREFERENCES({
	    		
	    		 async: true,
	    		    success: function (data) {
	    		    	alert(JSON.stringify(data))
	    		    	FLUIGC.toast({
	    		    		title: 'Toast title: ',
	    		    		message: 'Sucess updated preferences',
	    		    		type: 'success'
	    		    		});
	    		    },
	    		    fail: function (xhr, message, errorData) {
	    		    	FLUIGC.toast({
	    		    		title: 'Toast title: ',
	    		    		message: 'Error execute update preferences ',
	    		    		type: 'danger'
	    		    		});
	    		    }
	    		}, this.instanceId, preferences
	    	);
	    }
    }

});