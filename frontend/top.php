<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        <!--link rel="icon" href="#"-->

        <title>Good Fish</title>

        <!-- Bootstrap core CSS -->
        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        
        <!-- Custom styles for this template -->
        <link href="css/theme.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:500,800" rel="stylesheet">
        
        <!-- Icons -->
        <link href="assets/fonts/icofont/icofont.min.css" rel="stylesheet">

        <script type="text/javascript" src="js/qrcode.js"></script>
        
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <style>
            @media screen and (max-width: 480px)  
            {
                .container-fluid
                {
                  margin-top: 20px;
                }   
         }
        </style>
    </head>

    <body>
        
        <!-- 
        PRELOADER
        =============================================== -->
        <div class="preloader">
            <img src="images/preloader.gif" alt="">
        </div>
        <!-- END: PRELOADER -->
        
        <!-- 
        NAVBAR
        =============================================== -->
        <nav class="navbar navbar-default" id="myNavbar">
            
            <div class="container">
               
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">
                        <img src="images/good_fish_logo_white.png" alt="" class="brand" width="120px">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    
                    <!-- Top panel / search / phone -->
                    <div class="top-panel">
                       
                        <div class="phone text-blue">
                            <i class="icofont icofont-phone-circle"></i>
                            +62 xxx xxx xx xx
                        </div>
                        
                        <!-- <form class="search bg-grey-light btn-material">
                            <input type="text" class="search-form" id="top-search">
                            <label for="top-search">search</label>
                        </form> -->
                        
                        <div class="btn-cols">
                            
                            <ul class="list-btn-group">
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal">
                                        Sign in
                                    </a>
                                </li>
                                <li>
                                    <a href="register.php">
                                        <b>Sign up</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <ul class="nav navbar-nav navbar-right info-panel">
                        
                        <!-- Profile -->
                        <li class="profile">
                            <span class="wrap">
                                
                                <!-- Image -->
                                <span class="image bg-white">
                                    
                                    <!-- New message badge -->
                                    <!-- <span class="badge bg-blue hidden-xs hidden-sm">5</span> -->
                                   
                                    <span class="icon">
                                        <i class="icofont icofont-user-alt-4 text-blue"></i>
                                    </span>

                                    <!--img src="images/profile/profile-img.jpg" alt=""-->
                                </span>
                                
                                <!-- Info -->
                                <span class="info">
                                    <!-- Name -->
                                    <span class="name text-uppercase">Username</span>
                                    <a href="#">edit profile</a>
                                </span>
                            </span>
                        </li>
                        
                        <!-- Cart -->
                        <li class="cart">
                            
                            <a href="#" class="cart-icon hidden-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                
                                <span class="badge bg-blue">1</span>
                                
                                <i class="icofont icofont-cart-alt"></i>
                            </a>
                            
                            <a href="#" class="visible-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="icofont icofont-cart-alt"></i>
                                Shopping cart
                            </a>
                            
                            <!-- Dropdown items list -->
                            <ul class="dropdown-menu">
                                
                                <!-- Item -->
                                <li>
                                    <div class="wrap">
                                        
                                        <!-- Image -->
                                        <div class="image">
                                            <img src="images/fish/ikan-tuna.jpg" alt="">
                                        </div>
                                        
                                        <!-- Caption -->
                                        <div class="caption">
                                            <span class="comp-header st-1 text-uppercase">
                                                TUNA
                                                <span>
                                                    WEIGHT : 1 Kg
                                                </span>
                                            </span>
                                           
                                            <span class="price">
                                                <span class="text-grey-dark">Rp</span>
                                                100,000 <small class="text-grey-dark"></small>
                                            </span>
                                        </div>
                                        
                                        <!-- Remove btn -->
                                        <span class="remove-btn bg-blue">
                                            <i class="icofont icofont-bucket"></i>
                                        </span>
                                    </div>
                                </li>
                                           
                               <li class="more-btn sdw">
                                   <a href="#" class="btn-material btn-primary">
                                       View order <i class="icofont icofont-check-circled"></i>
                                   </a>
                               </li>
                                            
                                             
                            </ul>
                        </li>
                    </ul>
                
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <a href="index.php">
                                home
                            </a>
                        </li>
                        <!-- <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                categories <i class="icofont icofont-curved-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Tuna</a></li>
                                <li><a href="#">SkipJack</a></li>
                                <li><a href="#">Mackerel</a></li>
                                <li><a href="#">Squid</a></li>
                                <li><a href="#">Crabs</a></li>
                            </ul>
                        </li> -->
                        <!-- <li>
                            <a href="index.php" class="dropdown-toggle" data-toggle="dropdown">
                                new
                            </a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                pages <i class="icofont icofont-curved-down"></i>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="shop-list.html">Shop category</a></li>
                                <li><a href="shop-item.html">Shop item</a></li>
                                <li><a href="card-page-step-1.html">Shopping card. Step 1</a></li>
                                <li><a href="card-page-step-2.html">Shopping card. Step 2</a></li>
                                <li><a href="card-page-step-3.html">Shopping card. Step 3</a></li>
                                <li><a href="register-page.php">Register page</a></li>
                                <li><a href="blog-item.html">Item blog</a></li>
                            </ul>
                        </li> -->
                    </ul>
                
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
            
        </nav>
        <!-- END: NAVBAR -->
        <br><br>