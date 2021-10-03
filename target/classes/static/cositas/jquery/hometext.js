// pre-submit callback
function showRequestHomeText(formData, jqForm, options) 
{

     return true;
}

// post-submit callback
function showResponseHomeText(responseText, statusText, xhr, $form)   
{		
	 jQuery("#acerca-comments").hide();
	 jQuery("#home-comments").show();
	 jQuery("#galeria-comments").hide();
	 return true;
}

$(document).ready(function()
{
	var FRMHOMETEXT		= '#frmhome'; 	
	var BTNHOMETEXT		= '#imghome';	
	var DIVHOMETEXT		= '#central';
	var options 	= {
        target:         DIVHOMETEXT,
        action:		'/cositas/html/hometext.html',
        beforeSubmit:  showRequestHomeText,
        success:       showResponseHomeText,
        clearForm:     false
	};
	
	
	$(FRMHOMETEXT).submit(function(){
		$(this).ajaxSubmit(options);
        	return false;
	});
	$(BTNHOMETEXT).click(function(){
	        $(FRMHOMETEXT).submit();
	        return false;	
	});	

});