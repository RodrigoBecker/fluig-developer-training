<div id="CustomWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="CustomWidget.instance()">

    <div class="panel panel-info">
    	<div class="panel-body"><h2>Widget - New (Edit)</h2></div>
    	
    	<div class="row custom-edit">
    		<div class="col-md-3">
    			<label>title:</label>
    			<input type="text" class="form-control" id="title_${instanceId}" value=${title!}></input>
    		</div>
    		
    		<div class="col-md-3">
    			<label>source:</label>
    			<input type="text" class="form-control" id="source_${instanceId}" value=${source!}></input>
    		</div>
    		
    		<div class="col-md-3">
    			<label>url:</label>
    			<input type="text" class="form-control" id="url_${instanceId}" value=${url!}></input>
    		</div>
    		<div class="col-md-3 btn-area">
    		<button class="btn btn-default btn-save" data-save-preferences>Save</button>
    		</div>
    	</div>
	</div>
</div>
