info=null;
$(document).ready(function()
 {
	getInfo();
	$("#imghome").click(homeTextAjax);
	$("#imgacerca").click(acercaAjax);
	$("#imggallery").click(galleryAjax);
	$("#imgcontacto").click(contactoAjax);
	 var url = window.location.toString();
	 if(url.indexOf("#acercaanc")!=-1)
		acercaAjax();
	 else if(url.indexOf("#galleryanc")!=-1)
		 galleryAjax();
	 else if(url.indexOf("#contactoanc")!=-1)
		 contactoAjax();
	 else
		 homeTextAjax();

 });



function getInfo()
{
	
	var jqxhr = $.getJSON( "/cositas/json/catobj.json", function(data) 
			{
				info=data;				
			})
			.done(
					function() 
					{
						 //console.log( "second success" ); 
					})
			.fail(
					function() 
					{
						//console.log( "error" ); 
					})
			.always(
					function() 
					{ 
						//console.log( "complete" ); 
					}
					);
}

function homeTextAjax()
{
	$.ajax(
			{
				url:'/cositas/html/hometext.html',
				method:'post'
			}
		).done(function(html)
				{
					 $("#central").html(html);
					 $("#home-comments").show();
					 $("#acerca-comments").hide();
					 $("#galeria-comments").hide();
					 $("#sticker").sticky({ topSpacing: 50 }).click(irPaArriba);
				}
		);
}

function acercaAjax()
{
	$.ajax(
			{
				url:'/cositas/html/acerca.html',
				method:'post'
			}
		).done(function(html)
				{
					 $("#central").html(html);
					 $("#home-comments").hide();
					 $("#acerca-comments").show();
					 $("#galeria-comments").hide();
					 $("#divacercabody").scrollTop(0);
					 $("#sticker").sticky({ topSpacing: 50 }).click(irPaArriba);					 
				}
		);
}


function contactoAjax()
{
	$.ajax(
			{
			url:'/cositas/php/mailform.php',
			method:'post'
			}
			).done(function(html)
			{
			$("#central").html(html);
			$("#home-comments").hide();
			$("#acerca-comments").hide();
			$("#galeria-comments").hide();
			}
			); 
}


function galleryAjax()
{
	$.ajax(
			{
				url:'/cositas/html/gallerynew.html',
				method:'post'
			}
		).done(function(html)
				{
					var elHtml='';
					  					    
					elHtml+="<div id='sticker'><p><img src='/cositas/images/mosca.png'></img></p><p id='parriba'>Ir pa arriba</p></div>";					  
					elHtml+="<div id='accordion'>";	
					elHtml+=imprimeCategoria("Lo nuevo",info.items.categorias.lonuevo);
					elHtml+=imprimeCategoria("Madera Country",info.items.categorias.maderacountry);
					elHtml+=imprimeCategoria("Madera Country - Halloween",info.items.categorias.halloween);
					elHtml+=imprimeCategoria("Madera Country - Santitos",info.items.categorias.santitos);
					elHtml+=imprimeCategoria("Madera Country - Navidad",info.items.categorias.navidad);					
					elHtml+=imprimeCategoria("Borreguitos de la Lana",info.items.categorias.borregos);
					elHtml+=imprimeCategoria("Reposteria",info.items.categorias.reposteria);
					elHtml+=imprimeCategoria("Peg-Dolls",info.items.categorias.pegdolls);
					elHtml+=imprimeCategoria("Vintage",info.items.categorias.vintage);					
					elHtml+="</div>";
					 $("#central").html(elHtml);
					 $("#home-comments").hide();
					 $("#acerca-comments").hide();
					 $("#galeria-comments").show();
					 $("#sticker").sticky({ topSpacing: 50 }).click(irPaArriba);					    
					 $("#accordion").accordion({
						 active:false,
						 	collapsible: true,
				            autoHeight: false,
					 		heightStyle: "auto" });
					 
					 
				}
		);
	
	function imprimeCategoria(categoria,elems)
	{
		var elHtml ='';
		elHtml+="<h3><a href='#'>"+categoria+"</a></h3>";
		elHtml+="<div id='galelem'>";
		elHtml+="<ul>";
		for(i=0;i<elems.length;i++)
		{						
			elHtml+="<li id='ligal'>";
			elHtml+="<p><img src='/cositas/images/galeria/"+elems[i].item.imagen+"'></img></p>";
			elHtml+="<p>Descripcion:"+elems[i].item.desc+"</p>";
			elHtml+="</li>";
			elHtml+="<li>&nbsp;</li>";
		}
		elHtml+="</ul>";
		elHtml+="</div>";
		return elHtml; 
	}
	
}
function irPaArriba()
{
	window.scrollTo(0, 0);
}
