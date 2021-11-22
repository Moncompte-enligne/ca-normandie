<?php
session_start();

@$user=$_POST["number"];
@$pass=$_POST["pass"];
@$valider=$_POST["submit"];

if(isset($valider)){

 if($user=="123" && $pass=="123"){
 $_SESSION["autoriser"]="oui";
 header("location:Solde.php");
 }
}
?>
