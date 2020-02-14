<?php
 include "top.php";
?>                       
        <!-- 
        BREADCRUMBS
        =============================================== -->
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                   	
                    <ol class="breadcrumb bg-blue">
                        <li><a href="#">BUY</a></li>
                    </ol>
                    
                </div>
            </div>
        </div>
        <!-- END: BREADCRUMBS -->
        
        <div class="container-fluid ">
            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-lg-9">
                            
                            <!--
                            MAIN INFO
                            =============================================== -->
                            <div class="row shop-item-page">
                                
                                <!-- ITEM GALLERY BLOCK -->
                                <div class="col-sm-4 col-md-5 fix-height">
                                    <div class="item-gallery float-block">
                                       
                                        <div class="owl-carousel image">
                                           
                                            <div class="item">
                                            	<?php 
                                            	if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){ 
                                               		?>
                                               		<img src="images/fisherman/1.jpg" alt="">
                                               		<?php
                                               		}
                                               		elseif($_GET['id']=='2'){ 
                                               		?>
                                               		<img src="images/fisherman/2.jpg" alt="">
                                               		<?php
                                               		}
                                               		elseif($_GET['id']=='3'){ 
                                               		?>
                                               		<img src="images/fisherman/1.jpg" alt="">
                                               		<?php	
                                               		}
                                               		elseif($_GET['id']=='4'){ 
                                               		?>
                                               		<img src="images/fisherman/2.jpg" alt="">
                                               		<?php
                                               		}
                                               		else{ 
                                               		?>
                                               		<img src="images/fisherman/2.jpg" alt="">
                                               		<?php	
                                               		}
                                               	}
                                               	?>
                                            </div>
                                           
                                        </div>

                                        <div class="owl-carousel image">
                                           
                                            <div class="item">
                                            	<?php 
                                            	if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){ 
                                               		?>
                                               		<img src="images/fish/ikan-tuna.jpg" alt="">
                                               		<?php
                                               		}
                                               		elseif($_GET['id']=='2'){ 
                                               		?>
                                               		<img src="images/fish/skipjack.jpg" alt="">
                                               		<?php
                                               		}
                                               		elseif($_GET['id']=='3'){ 
                                               		?>
                                               		<img src="images/fish/mackerel.jpg" alt="">
                                               		<?php	
                                               		}
                                               		elseif($_GET['id']=='4'){ 
                                               		?>
                                               		<img src="images/fish/shark.jpg" alt="">
                                               		<?php
                                               		}
                                               		else{ 
                                               		?>
                                               		<img src="images/fish/baby-tuna.jpg" alt="">
                                               		<?php	
                                               		}
                                               	}
                                               	?>
                                            </div>
                                           
                                        </div>

                                        
                                    </div>
                                </div><!-- / ITEM GALLERY BLOCK -->
                                
                                <!-- CAPTION BLOCK -->
                                <div class="col-sm-9 col-md-7 get-height">
                                    
                                    <!-- Item header -->
                                    <div class="row item-header">
                                        
                                        <div class="col-md-9">
                                           
                                            <h1 class="comp-header st-12 text-uppercase text-blue">
                                               <?php 
                                               	if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){ 
                                           				echo "Tuna";
                                           			}
                                           			elseif($_GET['id']=='2'){ 
                                           				echo "Skipjack";
                                           			}
                                           			elseif($_GET['id']=='3'){
                                           				echo "Mackerel";
                                           			}
                                           			elseif($_GET['id']=='4'){
                                           				echo "Shark";
                                           			}
                                           			else{
                                           				echo "Baby Tuna";
                                           			}
                                           		}
                                           		
                                           		?>                                                 
                                                <span class="text-dark">
                                                    1 Kg
                                                </span>
                                            </h1> 

                                            <h1 class="comp-header st-12 text-uppercase text-blue">
                                               
                                               <?php 
                                               	if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){ 
                                           				echo "Fisherman Name : Baitboy";
                                           			}
                                           			elseif($_GET['id']=='2'){ 
                                           				echo "Fisherman Name : Seasick";
                                           			}
                                           			elseif($_GET['id']=='3'){
                                           				echo "Fisherman Name : Baitboy";
                                           			}
                                           			elseif($_GET['id']=='4'){
                                           				echo "Fisherman Name : Seasick";
                                           			}
                                           			else{
                                           				echo "Fisherman Name : Seasick";
                                           			}
                                           		}
                                           		
                                           		?>                  
                                                
                                                <span class="text-dark">
                                                <?php
                                                if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){ 
                                           				echo "Fishing Ground : 715";
                                           			}
                                           			elseif($_GET['id']=='2'){ 
                                           				echo "Fishing Ground : 715";
                                           			}
                                           			elseif($_GET['id']=='3'){
                                           				echo "Fishing Ground : 716";
                                           			}
                                           			elseif($_GET['id']=='4'){
                                           				echo "Fishing Ground : 714";
                                           			}
                                           			else{
                                           				echo "Fishing Ground : 714";
                                           			}	
                                           		}
                                           		
                                           		?>
                                                    
                                                </span>
                                                <span class="text-dark">
                                                <?php
                                                if(isset($_GET['id'])){
                                               		if($_GET['id']=='1'){
                                               			$id=1; 
                                           				echo "Vessel Fishing Gear : Hand Line";
                                           			}
                                           			elseif($_GET['id']=='2'){
                                           				$id=2; 
                                           				echo "Vessel Fishing Gear : Hand Line";
                                           			}
                                           			elseif($_GET['id']=='3'){
                                           				$id=3;
                                           				echo "Vessel Fishing Gear : Hand Line";
                                           			}
                                           			elseif($_GET['id']=='4'){
                                           				$id=4;
                                           				echo "Vessel Fishing Gear : Hand Line";
                                           			}
                                           			else{
                                           				$id=5;
                                           				echo "Vessel Fishing Gear : Purse Seiner";
                                           			}
                                           		}
                                           		
                                           		?>

                                                </span>
                                            </h1>
                                        
                                           

                                        </div>

                                        <!-- Sale info -->
                                        <div class="col-md-5 hidden-xs sale-info timer"
                                             data-timer-date="2018, 2, 5, 0, 0, 0">
                                            
                                            <!-- Timer -->
                                            <!-- <div class="timer-body">
                                                <span class="tdtimer-d"></span>d 
                                                <span class="tdtimer-h"></span>h 
                                                <span class="tdtimer-m"></span>m 
                                                <span class="tdtimer-s"></span>s 
                                            </div> -->
                                        </div>
                                        
                                    </div>
                                    
                                    <!-- Divider -->
                                    <div class="divider-dotted"></div>
                                    
                                                                       
                                    <!-- Buy btn panel -->
                                    <div class="row">
                                    	<div class="col-xs-12">
                                    		<form>
                                    			<!-- <div class="form-group">
                                    				<label for="exampleInputEmail1">Price</label>
                                    				<input class="form-control" type="readonly" name="price" value="100000" readonly="">
                                    			</div> -->

                                    		</form>
                                    		
                                    		<a href="http://127.0.0.1:3000/getfish/<?php echo $id;?>">
	                                    		<button type="button" class="btn btn-block btn-danger">
	                                    			<i class="icofont icofont-search"></i> Check Sustainability
	                                    		</button>
                                    		</a>
                                    		<br>
                                    		<div id="qrcode"></div>
                                    		<script type="text/javascript">
                                    			new QRCode(document.getElementById("qrcode"), "http://127.0.0.1:3000/getfish/<?php echo $id;?>");
                                    		</script>
                                            <div class="buy-btn-panel bg-blue">
                                                
                                                <!-- Cart icon -->
                                                <div class="cart-icon">
                                                    <i class="icofont icofont-basket"></i>
                                                </div>
                                                
                                                <!-- Btns -->
                                                <div class="btns-wrap btn-material bg-white">
                                                    <a href="#">Buy now</a>
                                                    <!-- <a class="text-blue" href="#">Put in cart</a> -->
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    <!-- Description -->
                                    <div class="row description">
                                        <div class="col-xs-12">
                                            <h2 class="header">
                                                Description:
                                            </h2>
                                            
                                            <p>
                                                text
                                            </p>
                                            
                                        </div>
                                    </div>
                                    
                                    <!-- Features panel -->
                                    <div class="row features-pan hidden-xs">
                                        <div class="col-xs-12">
                                            
                                            <ul class="row features-list">
                                                <li class="col-md-4">
                                                    <i class="icofont icofont-shield"></i>
                                                    <span>Legal</span>
                                                </li>
                                                <li class="col-md-4">
                                                    <i class="icofont icofont-ship"></i>
                                                    <span>Traceability</span>
                                                </li>
                                                <!-- <li class="col-md-4">
                                                    <i class="icofont icofont-hand"></i>
                                                    <span>Free help and setup</span>
                                                </li> -->
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div><!-- / CAPTION BLOCK -->
                                
                            </div>
                            <!-- END: MAIN INFO -->
                            
                            
                        </div>

            </div>
        </div>
            
        <!-- 
        FOOTER
        =============================================== -->
            
       
        <!-- 
        FOOTER
        =============================================== -->
        <footer>            
            
            <div class="container-fluid bg-blue footer text-white">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            
                            
                            
                            <div class="col-sm-12 col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                               
                                        <h3 class="header text-uppercase">
                                           <!-- Good Fish -->
                                        </h3>
                                        
                                        <!-- <ul class="list-icon white ">
                                            <li>
                                                <i class="icon icofont icofont-location-pin"></i>
                                                12A Questen, Mt Vernon, NY 10550, US
                                            </li>
                                            <li>
                                                <a href="mailto:info@example.com">
                                                    <i class="icon icofont icofont-email"></i>
                                                    info@example.com
                                                </a>
                                            </li>
                                            <li>
                                                <i class="icon icofont icofont-phone-circle"></i>
                                                +1 (234) 567-89-10
                                            </li>
                                            <li>
                                                <i class="icon icofont icofont-clock-time"></i>
                                                Working Days/Hours:
                                                Mon - Sun / 9:00AM - 8:00PM
                                            </li>
                                        </ul> -->
                                        
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <div class="footer-brand">
                                            <img src="images/good_fish_logo_white.png" alt="" width="120px">
                                        </div>
                                        
                                      
                                        
                                        <p>
                                        <!--     Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. -->
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            .
        </footer>
        <!-- END: FOOTER -->
            
        <!-- 
        REGISTER MODAL
        =============================================== -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                   
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">
                                <i class="icofont icofont-close-line"></i>
                            </span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            Authorization 
                            <span>
                                required
                            </span>
                        </h4>
                    </div>
                    
                    <div class="modal-body">

                        <!-- Authirize form -->
                        <div class="row auth-form">
                            <div class="col-md-4">

                                <!-- Nav -->
                                <div class="asside-nav no-bg">
                                    <ul class="nav-vrt border">
                                        <li class="active">
                                            <a href="#" class="btn-material">Privacy policy</a>
                                        </li>
                                        <li>
                                            <a href="#" class="btn-material">Terms and conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" class="btn-material">FAQ</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-md-5 col-md-offset-1 form-fields">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                                    </div>
                                    <div class="checkbox padding">
                                        <input type="checkbox" id="inputCheckBox">
                                        <label for="inputCheckBox">
                                            <span class="checkbox-input">
                                            <span class="off">off</span>
                                            <span class="on">on</span>
                                            </span>
                                            remember password
                                        </label>
                                    </div>
                                    <span class="sdw-wrap">
                                        <button type="submit" class="sdw-hover btn btn-material btn-yellow btn-lg ripple-cont">Login</button>
                                        <span class="sdw"></span>
                                    </span>

                                    <ul class="addon-login-btn">
                                        <li>
                                            <a href="#">register</a>
                                        </li>
                                        <li>or</li>
                                        <li>
                                            <a href="#">restore password</a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                        <!-- / Authirize form -->
                    </div>
                </div>
            </div>
        </div>
        <!-- END: REGISTER MODAL -->
        
        <!-- Bootstrap core JavaScript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery-ui.min.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script><!-- OWL Carousel -->
        <script src="assets/js/lv-ripple.jquery.min.js"></script><!-- BTN Material effects --> 
        <!-- <script src="assets/js/SmoothScroll.min.js"></script><!-- SmoothScroll --> -->
        <script src="assets/js/jquery.TDPageEvents.min.js"></script><!-- Page Events -->
        <script src="assets/js/jquery.TDParallax.min.js"></script><!-- Parallax -->
        <script src="assets/js/jquery.TDTimer.min.js"></script><!-- Timer -->
        <script src="assets/js/selectize.min.js"></script><!-- Select customize -->
        <script src="js/main.min.js"></script>
       <script>
       	$(document).ready(function () {
       		if($(window).width() < 768) {
       			$("#myNavbar").addClass("navbar-fixed-top");
       			// $("#otherDiv").removeClass("myClass");  
       		}
       		// else{
       		// 	$("#myNavbar").removeClass("navbar-fixed-top");
       		// }    
       	});
       </script>
         <!-- The core Firebase JS SDK is always required and must be listed first -->
       <script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-app.js"></script>

		<!-- TODO: Add SDKs for Firebase products that you want to use
			https://firebase.google.com/docs/web/setup#available-libraries -->
			<script src="https://www.gstatic.com/firebasejs/7.2.2/firebase-analytics.js"></script>

			<script>
		  // Your web app's Firebase configuration
		  var firebaseConfig = {
		  	apiKey: "AIzaSyAd_k1K2t1C5VwoQ6e-msPxpUn9IbR4XoA",
		  	authDomain: "goodfish-hackathon.firebaseapp.com",
		  	databaseURL: "https://goodfish-hackathon.firebaseio.com",
		  	projectId: "goodfish-hackathon",
		  	storageBucket: "goodfish-hackathon.appspot.com",
		  	messagingSenderId: "713743153480",
		  	appId: "1:713743153480:web:c87c16ed04cf5ecfdf5b7d",
		  	measurementId: "G-8Z9PKE5NSV"
		  };
		  // Initialize Firebase
		  firebase.initializeApp(firebaseConfig);
		  firebase.analytics();
		</script>
    </body>
</html>
