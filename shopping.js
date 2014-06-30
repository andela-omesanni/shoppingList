// JavaScript Document

$(document).ready(function() { 
		
		//check off items that have been bought in shooping list
		function checkOff($this) {
		   if ($this.is(':checked')) {
			  $this.parent().parent().parent().removeClass().addClass("checked");
			  $this.parent().parent().parent().effect("pulsate", {times:1}, 2000);
		   }
		   else { 
			  $this.parent().parent().parent().removeClass().addClass("unchecked"); 
		   }
		}
		
		//event for checkbox
	    $("#added").on('change', 'input[type=checkbox]', function(){
			  var $this = $(this);	
			  checkOff($this); //call checkOff function
		});
		
		
		//event for handling removal of items from shopping list
		$("#list").on('click', 'a', function(event){
				  event.preventDefault();							  
			      var $this = $(this); 
				  $this.parent().parent().remove(); 
				   
				  if ($("#list").has("span").length === 0 ){
					   $("#list > h2").css("border-bottom", "none");
				  }
		});
		
		//adds new items to shopping list
		function add(item) {
			 var appendItem = 
	         '<div id="wrap"><div style="float: left; width: 80%"><span><input type="checkbox"> <label>' + item + '</label></span></div><div style="width:40%; position: relative; top: -18px; left: 90%; clear: both;"><a href="#" class="delete"><img src="images/delete.png"/></a></div></div>';
			$("#added").append(appendItem);
			$("input#item").val('');
		}
	
		//event for button that adds new items
		$("#addNew").on('submit', function(event){
             event.preventDefault();
			  $("#list h2").css("border-bottom", "1px solid tomato");
          
		     var item = $.trim($("input#item").val());
		     
		     if(item === "")      //validate user input 
		        alert("Input field cannot be blank");
			 else {
				 add(item); //call add function
			 }
		});	
		
});