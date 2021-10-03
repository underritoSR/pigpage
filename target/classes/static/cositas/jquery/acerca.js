//pre-submit callback
 function showRequestAcerca(formData, jqForm, options) 
 {

      return true;
 }

 // post-submit callback
 function showResponseAcerca(responseText, statusText, xhr, $form)   
 {		
	 jQuery("#acerca-comments").show();
	 jQuery("#home-comments").hide();
	 jQuery("#galeria-comments").hide();
	 jQuery("#divacercabody").scrollTop(0);
	 jQuery( "#divacercascrollint" ).slider({			 
			 	orientation: "vertical",
				range: "max",
				min: 0,
				max: 100,
				value: 100,
				step: 1,
				slide: function( event, ui )
						{
		 					var height=jQuery("#divacercabody").outerHeight();
		 					var part=height/100;
		 					jQuery("#divacercabody").scrollTop((100-ui.value)*part);
							//$( "#amount" ).val( ui.value );
						}
			 });
	 
  }

 $(document).ready(function()
 {
 	var FRMACERCA		= '#frmacerca'; 	
 	var BTNACERCA		= '#imgacerca';	
 	var DIVACERCA		= '#central';
 	var options 	= {
         target:         DIVACERCA,
         action:		'/cositas/html/acerca.html',
         beforeSubmit:  showRequestAcerca,
         success:       showResponseAcerca,
         clearForm:     false
 	};
 	
 	
 	$(FRMACERCA).submit(function(){
 		$(this).ajaxSubmit(options);
         	return false;
 	});
 	$(BTNACERCA).click(function(){
 	        $(FRMACERCA).submit();
 	        return false;	
 	});

 });