<?php
error_reporting(E_WARNING | E_ERROR);

include_once("functions.inc.php");

$erreurs = array ();
$feedback ='';

//Fonction toute faite pour valider les adresses mails, elle fait le café
function is_valid_email($mail) {
	return filter_var($mail, FILTER_VALIDATE_EMAIL); 
	}


//FORM PROCESSING

    $email = '';
    $prenom = '';
    $nom = '';
    $msg = '';

    //Honeypot check. Kill les robots
	if ($_POST['honeypot'] != '')
        {
		die ('meurs robot');
        }


if(count($_POST)>0){
	
	//Nettoyage
	$email = trim( strip_tags ($_POST['mail']));
	$prenom = trim( strip_tags ($_POST['prenom']));
	$nom = trim( strip_tags ($_POST['nom']));
	$msg = trim( strip_tags ($_POST['msg']));
		
		if(!is_valid_email($email))
		{
		$erreurs['email'] = "! The e-mail adress seems to not be valid";
		}

		if($prenom=="")
		{
		$erreurs['prenom'] = "! You didn't say your first name";
		}

		if($nom=="")
		{
		$erreurs['nom'] = "! You didn't say your surname";
		}
		
		if($msg=="")
		{
		$erreurs['msg'] = "! Don't you want to tell us anything?";
		}
		
			
			if(count($erreurs)==0){

                $db = connexion();
                if($db != null)
                {
                    try
                    {
                        $email_sql = addslashes($email);
                        $prenom_sql = addslashes($prenom);
                        $nom_sql = addslashes($nom);
                        $msg_sql = addslashes($msg);
                        $sql = "insert into mail_list (mail,prenom,nom,message) values ('$email_sql','$prenom_sql','$nom_sql','$msg_sql')";
                        $sqlinsert = $db->exec($sql);
                        //return $sqlinsert;

                    }
                    catch(PDOException $e)
                    {
                        $erreurs['sql'] = 'Erreur : '.$e->getMessage();
                    }
                }

                $feedback = 'Your message has been successfully sent.<br>Thank you! ';
                

                $sujet = 'message depuis This moment.';
			    $result = mail ('hubert.maxime.emilien@gmail.com',$sujet,$msg);
			}
		
	}


?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Contact us - This moment.</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="description" content="‘This moment’ is a publishing platform allowing you to create and share a story of a moment of your life.">
        <meta name="keywords" content="maxime-emilien, hubert, tfe, story, publishing, publication, writing, infographie, albert jacquard, heaj, esiaj, begique, belgium">
        <link rel="icon" type="img/png" href="img/favicon.png" />
        <!--[if lt IE 9]><link href="img/favicon.ico" type="image/x-icon" rel="shortcut icon" /><![endif]-->

        <link rel="stylesheet" type="text/css" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" href="fonts/fontsheet.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
       
       
    </head>
		<body>

            <header>

                <div class="sectioncontainer">

                    <h1><a href="index.html">This moment.</a></h1>

                    <nav id="headernav">

                        <ul>
                            <li><a href="explore.html">Explore stories</a></li>
                            <li><a href="write.html">Write a story</a></li>
                            <!--<li><a href="#">Login</a></li>-->
                        </ul>

                        <button class="showsidemenu">Showsidemenu</button>

                    </nav>

                </div><!--sectioncontainer-->

            </header>

            <?php
                    if ($erreurs['sql'] != ''){
                        echo ($erreurs['sql']);
                    }
                    

                    ?>
                    <div id="content">

                        <section class="greybg">

                     <div class="sectioncontainer">

                        <p class="revelation">

            <?php
            if ($feedback != ''){
                        echo ($feedback);
                    }
            ?>


        </p>

                        <p class="formexplain">Thank you for using 'This moment.'.<br>You can ask us anything by completing this one-minute form.</p>
		
        

        <form id="contactus" method="POST">
            
        
        	<ul>
                <li>
                    <label for="mail">Ton mail<span>*</span></label>
                    <?php
                    echo "<input id=\"mail\" type=\"text\" name=\"mail\" placeholder=\"What is your email adress?\" value=\"$email\" >"
                    ?>
                    <div class="errordisplay">
                    <?php
                    if ($erreurs['email'] != ''){
                    	echo ($erreurs['email']);
                    }
                    

                    ?>
                    </div>
                </li>
            
                <li>
                    <label for="prenom">Ton prenom</label>
                    <?php
                    echo "<input id=\"prenom\" type=\"text\" name=\"prenom\" placeholder=\"What is your first name?\" value=\"$prenom\" >"
                    ?>
                    <div class="errordisplay">
                    <?php
                    if ($erreurs['prenom'] != ''){
                    	echo ($erreurs['prenom']);
                    }

                    ?>
                </div>
                </li>
                
                <li>  
                    <label for="nom">Ton nom</label>
                    <?php
                    echo "<input id=\"nom\" type=\"text\" name=\"nom\" placeholder=\"What is your surname?\" value=\"$nom\" >"
                    ?>
                    <div class="errordisplay">
                    <?php
                    if ($erreurs['nom'] != ''){
                    	echo ($erreurs['nom']);
                    }

                    ?>
                </div>
                </li>

                <li>
                    <label for="honeypot">Ne pas remplir !</label>
                    <input id="honeypot" type="text" name="honeypot" >
                </li>
                
                <li>  
                    <label for="msg">Ton message<span>*</span></label>

                    <textarea id="msg" type="text" name="msg" placeholder="What do you want to tell us?"><?php echo $msg; ?></textarea>

                    <div class="errordisplay">
                    <?php
                    if ($erreurs['msg'] != ''){
                    	echo ($erreurs['msg']);
                    }

                    ?>
                </div>
                </li>
               
            </ul>
                 
            <input id="envoi" type="submit" name='soumission' value="Submit">
    	
    	</form>

    </div>

</section>

</div>

        <footer>

                <div class="sectioncontainer">

                    <nav>

                        <ul>
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="index.html">GUIDELINES</a></li>
                            <li><a href="index.html">CONTACT</a></li>
                            <li><a href="index.html">FACEBOOK</a></li>
                        </ul>

                    </nav>

                    <p>&copy;Maxime-Emilien Hubert<br>2015 ESIAJ</p>

                </div><!--sectioncontainer-->

            </footer>
        
        
        </body>
</html>
