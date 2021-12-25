<?php 
        
    $User_name = $_POST['name'];
    $Number = $_POST['number'];
    $User_email = $_POST['email'];
    $User_address = $_POST['addresss'];
    $User_message = $_POST['message'];

    $email_from = 'no-reply@skynetonlinebd.com';
    $email_subject = 'Customer form submission';
    $email_body = "Customer Name: $User_name.\n".
                    "Contact No: $Number.\n".
                    "Email ID: $User_email.\n".
                    "Address: $User_address.\n".
                    "Message: $User_message.\n";
                                    
    $to_email = "sazzad.albi97@gmail.com";
    $headers = "From: $email_from \r\n";                   
    $headers .= "Reply-To: $User_email \r\n";     
    
    mail($to_email,$email_subject,$email_body,$headers);

    header("Location: form.html");

?>