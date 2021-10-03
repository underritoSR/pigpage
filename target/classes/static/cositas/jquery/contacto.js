//pre-submit callback
 function showRequestContacto(formData, jqForm, options) 
 {

      return true;
 }

 // post-submit callback
 function showResponseContacto(responseText, statusText, xhr, $form)   
 {		
	 jQuery("#acerca-comments").hide();
	 jQuery("#home-comments").hide();
	 jQuery("#galeria-comments").hide();
	 return true;
  }

 $(document).ready(function()
 {
 	var FRMCONTACTO		= '#frmcontacto'; 	
 	var BTNCONTACTO		= '#imgcontacto';
 	var BTNCONTACTO2	= '#imgcontacto2';
 	var DIVCONTACTO		= '#central';
 	var options 	= {
         target:         DIVCONTACTO,
         action:		'/cositas/php/mailform.php',
         beforeSubmit:  showRequestContacto,
         success:       showResponseContacto,
         clearForm:     false
 	};
 	
 	
 	$(FRMCONTACTO).submit(function(){

 		$(this).ajaxSubmit(options);
         	return false;
 	});
 	$(BTNCONTACTO).click(function(){
 	        $(FRMCONTACTO).submit();
 	        return false;	
 	});
 	$(BTNCONTACTO2).click(function(){
	 	        $(FRMCONTACTO).submit();
	 	        return false;	
 	});

 });