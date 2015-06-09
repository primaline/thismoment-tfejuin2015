<?php

//FONCTION CONNEXION
function connexion()
{
	require('config.inc.php');
	try 
	{
		$db = new PDO("mysql:host=$hostname;dbname=$dbname", $username,$password);
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		return $db;
		//echo 'Connected to database';
    }
	catch(PDOException $e)
    {
		echo "erreur : ".$e->getMessage();
		return null;
    }
}

//FONCTION DECONNEXION
function deconnexion($db)
{
	$db=null;
}
	
?>