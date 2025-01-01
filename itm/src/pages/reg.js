import React from 'react';
import {useState} from 'react' ;
import axios from 'axios' ;
import {useForm} from 'react-hook-form';

function Reg()
{
    const {register,formState:{ errors }  ,handleSubmit}=useForm(); 
	const submitdata=(data)=>
	{
		var name=document.getElementById("uname").value;
		var email=document.getElementById("uemail").value;
		var pass=document.getElementById("password").value;
		var add=document.getElementById("address").value;
		// alert(name);
		// alert(email);
		// alert(pass);
		// alert(add);
		axios.post('http://localhost:5646/api/usereg',
		{uname:name,uemail:email,upass:pass,uadd:add}).then( (Response)=> 
		{
			
			if(Response.data.message)
			{
				alert(Response.data.message);
				window.location='/reg';
			}
			else
			{
				
				alert("Success");
				window.location="/";
			}
		});
	}

    return (<>


	<div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Register Now</h5>
					<form onSubmit = {handleSubmit(submitdata)} >
					
							<label>Your Name</label>
							<input {...register("uname",{required:"Please Enter Username"})} id="uname" type="text" className="form-control" name="uname"  />
							
						
						{errors.uname  && <span style={{color:"red"}}>{errors.uname.message}</span>}
						<div class="form-group">
							<label>Email</label>
							<input id="uemail" type="email" class="form-control" name="email" placeholder="" {...register("email",{required:"Please Enter Email Id"})} />
							{errors.email  && <span style={{color:"red"}}>{errors.email.message}</span>}
						
						</div>
						<div class="form-group">
							<label class="mb-2">Password</label>
							<input id="password" type="password" class="form-control" name="password"  placeholder="" {...register("password",{required:" Please Enter Password"})}
								/>
							{errors.password  && <span style={{color:"red"}}>{errors.password.message}</span>}
						</div>
						<div class="form-group">
							<label>Address</label>
							<input  id="address" type="text" class="form-control" name="address"  placeholder="" {...register("address",{required:"Please Enter Address"})}
								/>
							{errors.address  && <span style={{color:"red"}}>{errors.address.message}</span>}
						</div>
						<button type="submit" class="btn submit mb-4">Register</button>
						<p class="text-center">
							<a href="#" class="text-da">By clicking Register, I agree to your terms</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
	
        
    </>)
    
}
export default Reg;