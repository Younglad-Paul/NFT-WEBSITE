<?php
/** Contact us form mail*/

if(isset($_POST['email'])){    
	$to = 'contact@example.com';    
	$subject = $_POST['subject'];    
	$form_user_name = $_POST['name'];    
	$form_user_email = $_POST['email'];    
	$form_comment = $_POST['message']; 

	$message = '';    
	$message .= $form_comment . "\r\n" . "\r\n";    
	$message .= "From: " .  $form_user_name . "\r\n";    
	$message .= "Email: " . $form_user_email . "\r\n";   
	$message .= "Subject: " . $subject;    
	$headers = 'From: ' . $form_user_name . '<'. $form_user_email . '>';    

	if( mail( $to, $subject, $message, $headers ) ) {        
		echo "Submitted";    
	}else{        
		echo "Not Submitted";    
	}
}