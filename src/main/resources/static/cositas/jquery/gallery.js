//pre-submit callback
 function showRequestGallery(formData, jqForm, options) 
 {

	
      return true;
 }
	    
 // post-submit callback
 function showResponseGallery(responseText, statusText, xhr, $form)   
 {		
	//alert('hola');
	 jQuery("#acerca-comments").hide();
	 jQuery("#home-comments").hide();
	 jQuery("#galeria-comments").show();
	return true;
  }

 $(document).ready(function()
 {
 	var FRMGALLERY		= '#frmgallery'; 	
 	var BTNGALLERY		= '#imggallery';	
 	var DIVGALLERY		= '#central';
 	var options 	= {
         target:         DIVGALLERY,
         action:		'/cositas/html/gallery.html',
         beforeSubmit:  showResponseGallery,
         success:       showResponseGallery,
         clearForm:     false
 	};
 	
 	
 	$(FRMGALLERY).submit(function(){
 		$(this).ajaxSubmit(options);
         	return false;
 	});
 	$(BTNGALLERY).click(function(){
 	        $(FRMGALLERY).submit();
 	        return false;	
 	});
 });