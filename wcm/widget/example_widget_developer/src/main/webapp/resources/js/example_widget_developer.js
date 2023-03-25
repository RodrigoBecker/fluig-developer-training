var HelloWorld = SuperWidget.extend({
  message: null,

  init: function () {
    //code
  },

  bindings: {
    local: {
      "show-message": ["click_showMessage"],
      "search": ["click_search"],
    },
  },


  search: function () {
    var cep = $("#cep").val()
    
    $.ajax({
    	"method": "GET",
    	"url": "https://viacep.com.br/ws/" + cep +"/json/",
    	"success": function(data){
    		$("#street").val(data["logradouro"])
    		$("#neighborhood").val(data["bairro"])
    		$("#city").val(data["localidade"])
    	},
    	"error": function(request, error){
    		alert("Request" + JSON.stringify(request));
    	}
    })
    
  },
});
