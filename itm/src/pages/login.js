import React from 'react';
import axios from 'axios' ;
import { json } from 'react-router-dom';

function Login()
{
	function submitdata()
	{
		var email=document.getElementById("uemail").value;
		var pass=document.getElementById("upass").value;
		//alert(email);
		// alert(pass);
		axios.post('http://localhost:5646/api/uselog',
		{uemail:email,upass:pass}).then( (Response)=> 
		{
			if(Response.data.message)
			{
				alert(Response.data.message);
				window.location='/log';
			}
			else
			{
				let obj={uname:Response.data[0].uname,uemail:email}
				localStorage.setItem("mydata",JSON.stringify(obj));
	
				alert('Welcome: '+Response.data[0].uname);
				window.location="/";
			}
		});
	}
	
    return (<>
	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Login Now</h5>
					<form onSubmit = {submitdata}>
						<div class="form-group">
							<label>Email</label>
							<input id="uemail" type="text" class="form-control" placeholder="" required  />
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input id="upass" type="password" class="form-control" placeholder="" required />
						</div>
						<button type="submit" class="btn submit mb-4">Login</button>
						<p class="forgot-w3ls text-center mb-3">
							<a href="#" class="text-da">Forgot your password?</a>
						</p>
						<p class="account-w3ls text-center text-da">
							Don't have an account?
							<a href="/reg">Create one now</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>  
    </>)
    
}
export default Login;