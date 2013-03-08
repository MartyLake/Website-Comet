<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title></title>

<meta charset="utf-8">

<style>
    @font-face 
    {
        font-family: 'Bitter';
        font-style: normal;
        font-weight: 400;
        src: local('Bitter-Regular'), url(font/bitter.ttf) format('truetype');
    }
</style>

<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
<script src="js/jquery-1.7.1.js"></script>
<script src="js/jquery.easing.js"></script>
<script src="js/jquery.animate-colors-min.js"></script>
<script src="js/forms.js"></script>
<script src="js/googleMap.js"></script>
<script src="js/switcher.js"></script>
<script src="js/superfish.js"></script>
<script src="js/bgStretch.js"></script>
<script src="js/jquery.backgroundpos.min.js"></script>
<script src="js/uScroll.js"></script>
<script src="js/jquery.mousewheel.js"></script>
<script src="js/sprites.js"></script>
<script src="js/scripts.js"></script>

</head>
<body>
    <div class="page_spinner"></div>
    <div id="bgStretch"><img src="images/bg.jpg" alt=""></div>
    <div class="main"> 
		<h1><a href="#!/page_news" id="logo">Comet</a></h1>
		<div class="close_main"><a href="#!/"><div class="close"></div>close</a></div>
      
		<article id="content">
		
            <!--LOGO COMET-->
            <div id="splash">
               <h1><a href="#!/page_news" id="logo_splash">Comet</a></h1>
            </div>
            <!--FIN LOGO COMET -->

            
			<ul>
				
            <!-- ============================== LA PAGE DES NEWS avec la video + l'affiche ========================  -->
			
			<?php
			     include('contents/news.php');
            ?>
            
            <!-- ============================== LA PAGE DE La billetterie evenementielle ========================  -->
			
			<?php
			     include('contents/billetterie.php');
            ?>
				
				
            <!-- ===================================  LA PAGE DES Partenaires BDE / Sogé / Weemove ...  ============================  -->
				
			<?php
			     include('contents/partenaires.php');
            ?>	
				
            <!-- ================================== LA PAGE DES PHOTOS =========================== -->
				
            <?php
			     include('contents/photos.php');
            ?>
				
            <!-- ================================== LA PAGE DE L'EQUIPE =========================== -->
			
			<?php
			     include('contents/team.php');
            ?>	
				
            <!-- ================================== LA PAGE DE CONTACT =========================== -->
				
			<?php
			     include('contents/contact.php');
            ?>		
				
            <!-- ================================== LA PAGE DES MENTIONS LEGALES =========================== -->
				
            <?php
			     include('contents/policy.php');
            ?>
				
				
			</ul>
		</article>
		
		
		<!--content end-->
		
		<!-- Menu -->
		<header>
			<div>
            <nav class="menu">
        			<ul id="menu">
    					<li class="with_ul"><a><span></span>ESTU</a>
                            <ul class="submenu_1">
        						<li><a href="#!/page_news"><b></b>Évènement à venir</a></li>
        						<li><a href="#!/page_billetterie"><b></b>Billetterie</a></li>
        				    </ul> 
                        </li>
    					<li><a href="#!/page_partneraires"><span></span>Partenaires</a></li>
    					<li><a href="#!/page_photos"><span></span>Photos</a></li>
    					<li><a href="#!/page_equipe"><span></span>Equipe</a></li>
    					<li class="last"><a href="#!/page_contacts"><span></span>Contact</a></li>
    				</ul>
    			</nav>
			</div>
		</header>
    <!-- Fin du Menu -->
		
        <!--footer -->
    	<footer>
         <span class="bold">Comet</span> &copy;  2013 | <a href="#!/page_privacy">privacy policy</a>

			<ul class="follow-icon">
			  <li><a href="#"><img src="images/social_icon_1_act.png" alt="" class="img_act"><img src="images/social_icon_1.png" alt=""></a></li>
			  <li><a href="#"><img src="images/social_icon_2_act.png" alt="" class="img_act"><img src="images/social_icon_2.png" alt=""></a></li>
			  <li><a href="#"><img src="images/social_icon_3_act.png" alt="" class="img_act"><img src="images/social_icon_3.png" alt=""></a></li>
			  <li><a href="#"><img src="images/social_icon_4_act.png" alt="" class="img_act"><img src="images/social_icon_4.png" alt=""></a></li>
			</ul>
			
    	</footer>
    	<!--footer end-->
    </div>
	 <div class="bottom_bg"></div>
	 
	 
<script>
$(window).load(function() {	
	$('.page_spinner').fadeOut(600);
	$('body').css({overflow:'visible'})
})
</script>


</body>
</html>