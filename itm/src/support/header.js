import React from 'react';


function Header()
{
	function logout()
	{
		localStorage.clear();
		window.location='/';
	}

	let user=JSON.parse(localStorage.getItem('mydata'));
    return (<>

	<header id="home">
		<div class="top-bar py-2 border-bottom">
			<div class="container">
				<div class="row middle-flex">
					<div class="col-xl-7 col-md-5 top-social-agile mb-md-0 mb-1 text-lg-left text-center">
						<div class="row">
							<div class="col-xl-3 col-6 header-top_w3layouts">
								<p class="text-da">
									<span class="fa fa-map-marker mr-2"></span>Parma Via, Italy
								</p>
							</div>
							<div class="col-xl-3 col-6 header-top_w3layouts">
								<p class="text-da">
									<span class="fa fa-phone mr-2"></span>+1 000263676
								</p>
							</div>
							<div class="col-xl-6"></div>
						</div>
					</div>
					<div class="col-xl-5 col-md-7 top-social-agile text-md-right text-center pr-sm-0 mt-md-0 mt-2">
						<div class="row middle-flex">
							<div class="col-lg-5 col-4 top-w3layouts p-md-0 text-right">
								
								{ localStorage.getItem( "mydata" ) ==null ? <>

									<a href="/log" class="btn login-button-2 text-uppercase text-wh">
									<span class="fa fa-sign-in mr-2"></span>Login</a>
									</>
									:
									<>
									Welcome {user && user.uname}
									<a href="/" onClick={logout} class="btn login-button-2 text-uppercase text-wh">
									<span class="fa fa-sign-in mr-2"></span>Log Out</a>
									</>
								
								}


							</div>
							<div class="col-lg-7 col-8 social-grid-w3">
								
								<ul class="top-right-info">
									<li>
										<p>Follow Us:</p>
									</li>
									<li class="facebook-w3">
										<a href="#facebook">
											<span class="fa fa-facebook-f"></span>
										</a>
									</li>
									<li class="twitter-w3">
										<a href="#twitter">
											<span class="fa fa-twitter"></span>
										</a>
									</li>
									<li class="google-w3">
										<a href="#google">
											<span class="fa fa-google-plus"></span>
										</a>
									</li>
									<li class="dribble-w3">
										<a href="#dribble">
											<span class="fa fa-dribbble"></span>
										</a>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	
	<div class="main-top py-1">
		<div class="container">
			<div class="nav-content">
				
				<h1>
					<a id="logo" class="logo" href="index.html">
						<img src="images/logo.png" alt="" class="img-fluid"></img><span>Tasty</span> Burger 
					</a>
				</h1>
				
				<div class="nav_web-dealingsls">
					<nav>
						<label for="drop" class="toggle">Menu</label>
						<input type="checkbox" id="drop" />
						<ul class="menu">
							<li><a href="/">Home</a></li>
							<li><a href="/about">About Us</a></li>
							<li>
								
								<label for="drop-3" class="toggle toogle-2">Pages <span class="fa fa-angle-down"
										aria-hidden="true"></span>
								</label>
								<a href="#pages">Pages <span class="fa fa-angle-down" aria-hidden="true"></span></a>
								<input type="checkbox" id="drop-3" />
								<ul>
									<li><a class="drop-text" href="#services">Services</a></li>
									<li><a class="drop-text" href="about.html">Our Chefs</a></li>
									<li><a class="drop-text" href="#blog">Blog</a></li>
									<li><a class="drop-text" href="single.html">Single Page</a></li>
									<li><a class="drop-text" href="login.html">Login</a></li>
									<li><a class="drop-text" href="register.html">Register</a></li>
								</ul>
							</li>
							<li><a href="/menu">Menu</a></li>
							<li><a href="/addproduct">Add Product</a></li>
							<li><a href="/cart">Cart</a></li>
							<li><a href="/contact">Contact Us</a></li>
							
							<li>
								
								<a href="https://w3layouts.com/" target="_blank" class="dwn-button ml-lg-5">
									<span class="fa fa-cloud-download mt-lg-0 mt-4" aria-hidden="true"></span>
								</a>
								
							</li>
						</ul>
					</nav>
				</div>
				
			</div>
		</div>
	</div>
	
    </>)
    
}
export default Header;