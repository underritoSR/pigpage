<script>
 $(document).ready(function()
 {
	$("#imgcontacto2").click(function()
 	{
		$("#frmcontacto2").ajaxSubmit({url: '/cositas/php/mailform.php', type: 'post',target:'#central'});
	 });
});
</script>
<div id="divcontacto">
	<div id="divcontactocontent">
		<ul>
			<li>Medios de Contacto</li>
			<p><br>En este momento estamos trabajando en establecer medios de
			contacto directos conmigo, pero por el momento te dejo los existentes<br><br>
			</p>
			<p><a href="http://www.facebook.com/cositas.felices" target="_BLANK">Facebook: http://www.facebook.com/cositas.felices</a><br><br></p>
			<p><a href="mailto:carlanavejas@cositasfelices.mx">Correo: carlanavejas@cositasfelices.mx</a><br><br></p>



<?php
if ($_POST["email"]<>'')
{
    $ToEmail = 'carlanavejas@cositasfelices.mx';
    $EmailSubject = 'Comentario para cositas felices';
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= 'Bcc: rminor@accival.com.mx, underrito@gmail.com, under_rito@hotmail.com'."\r\n";
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY .= "Comentario: ".nl2br($_POST["comment"])."";
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
?>
Tu mensaje ha sido enviado! Muchas gracias.
<?php
}
else
{
?>
<form name="frmcontacto2" id="frmcontacto2"  onsubmit="return false;" action="/cositas/php/mailform.php" method="post">
	<table width="400" border="0" cellspacing="2" cellpadding="0">
		<tr>
			<td width="29%" class="bodytext">Nombre:</td>
			<td width="71%"><input name="name" type="text" id="name" size="32"></td>
		</tr>
		<tr>
			<td class="bodytext">Email:</td>
			<td><input name="email" type="text" id="email" size="32"></td>
		</tr>
		<tr>
			<td class="bodytext">Comentario:</td>
			<td><textarea name="comment" cols="45" rows="6" id="comment" class="bodytext"></textarea></td>
		</tr>
		<tr>
			<td class="bodytext"></td>
			<td align="left" valign="top">
			<input id="imgcontacto2"  type="submit" name="Submit" value="Send">
			</td>
		</tr>
	</table>
</form>
<?php
};
?>
		</ul>
	</div>
</div>


