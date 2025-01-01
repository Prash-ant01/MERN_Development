import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios' ;

function Menu()
{
	
	const [list , setList] = useState([]);

	useEffect(() =>  
	{
		axios.get('http://localhost:5646/api/getproduct').then((response) => 
		{
			setList(response.data);
		})
	},[]);

	let user=JSON.parse(localStorage.getItem('mydata'));
	
	const cart=(pid)=>{
		var pid=pid;
		if(localStorage.getItem('mydata')==null)
		{
			alert("please Login");
			window.location.href='/log';
		}
		else
		{
			var uemail=user.uemail;
			//alert(uemail)
			axios.post('http://localhost:5646/api/addcart',
		{uemail:uemail,pid:pid}).then( (Response)=> 
		{
			if(Response.data.message)
			{
				alert(Response.data.message);
				//window.location='/log';
			}
			else
			{

			alert("Product Added to cart");
			window.location.href='/menu';
			}
		});
		}

	}

    return (<>
   <div class="main-banner-2">

    </div>
	<section class="portfolio py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="title-section text-center mb-md-5 mb-4">
				<h3 class="w3ls-title mb-3">Our <span>Menu</span></h3>
				<p class="titile-para-text mx-auto">Inventore veritatis et quasi architecto beatae vitae dicta sunt
					explicabo.Nemo
					enim totam rem aperiam.</p>
			</div>

{
list.map((val)=>{
	return (


			<div class="row mt-4">
				<div class="col-md-4">
					<div class="gallery-demo">
						<a href="#gal1">
							<img src="images/blog1.jpg" alt=" " class="img-fluid" />
							<h4 class="p-mask">{val.p_name} - <span>{val.p_price}</span></h4>
						</a>
						<button type="button" onClick={()=>cart(val.pid)}> Add to cart</button>
					</div>
				</div>
				
			</div>
	)
})
}

		</div>
	</section>

	
	<div id="gal1" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/blog1.jpg" alt=""/>
			<h4 class="p-mask">French Burger - - <span>$22</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
	
	<div id="gal2" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/blog2.jpg" alt=""/>
			<h4 class="p-mask">Veg Muffin - <span>$16</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
	
	<div id="gal3" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/blog3.jpg" alt=""/>
			<h4 class="p-mask">Brioche - <span>$18</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
	
	<div id="gal4" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/g1.jpg" alt=""/>
			<h4 class="p-mask">Cheese Burger - <span>$20</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
	
	<div id="gal5" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/g2.jpg" alt="" />
			<h4 class="p-mask">Chicken Burger - <span>$22</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
	
	<div id="gal6" class="pop-overlay">
		<div class="popup">
			<img class="img-fluid" src="images/g3.jpg" alt="" />
			<h4 class="p-mask">Veg Burger - <span>$16</span></h4>
			<a href="login.html" class="button-w3ls active mt-3">Order Now
				<span class="fa fa-caret-right ml-1" aria-hidden="true"></span>
			</a>
			<a class="close" href="#gallery">×</a>
		</div>
	</div>
    </>)
    
}
export default Menu;