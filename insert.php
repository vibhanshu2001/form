<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $dob = $_POST['dob'];
    $pin = $_POST['pin'];
    //Database name is form
    //Database Connection
    $conn = new mysqli('localhost','root','','form');
    if($conn->connect_error){
        die('Connection Lost : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into form(name,email,mobile,dob,pin)
        values(?,?,?,?,?)");
        $stmt->bind_param("ssisi",$name,$email,$mobile,$dob,$pin);
        $stmt->execute();
        echo "Submitted data..";
        $stmt->close();
        $conn->close();
    }
?>