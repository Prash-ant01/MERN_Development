import React from 'react';
import axios from 'axios' ;
import { json } from 'react-router-dom';

function Addproduct()
{
	function submitdata()
	{
		var name=document.getElementById("pname").value;
		var price=document.getElementById("pprice").value;

        axios.post('http://localhost:5646/api/addproduct',
		{pname:name,price:price}).then( (Response)=> 
		{
				alert("Success");
				window.location.href="/";
		});
	}
    return (<>
	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Add Product </h5>
					<form onSubmit = {()=>submitdata()}>
						<div class="form-group">
							<label>Product Name</label>
							<input id="pname" type="text" class="form-control" placeholder="" required  />
						</div>
						<div class="form-group">
							<label class="mb-2">Product Price</label>
							<input id="pprice" type="text" class="form-control" placeholder="" required />
						</div>
						<button type="submit" class="btn submit mb-4">Add</button>
					</form>
				</div>
			</div>
		</div>
	</div>  
    </>)
    
}
export default Addproduct;