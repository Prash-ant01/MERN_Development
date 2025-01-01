import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios' ;


function Cart()
{
    const [list , setList] = useState([]);

	useEffect(() =>  
	{
		axios.get('http://localhost:5646/api/getcart').then((response) => 
		{
			setList(response.data);
		})
	},[]);

    return( <>
    <div class="login-contect py-5">
		<div class="container py-xl-5 py-3">
			<div class="login-body">
				<div class="login p-4 mx-auto">
					<h5 class="text-center mb-4">Cart View</h5>
                    <table class="timetable_sub">
        <thead>
            <tr>
                <th> SL No. </th>
                <th> Product </th>
                <th> Quantity </th>
                <th> Product Id </th>
                <th> User Email </th>
                <th> Remove</th>
            </tr>
        </thead>
        {
            list.map((val)=> {
                return (
            <tr class="rem1">
                <td class="invert">1</td>
                <td class="invert-image">
                    <a href="#">
                        <img src="#" alt=" " class="img-responsive" />
                    </a>
                </td>
                <td>
                    <div class="quantity-controls">
                        <a href="" class="quantity-button">-</a>
                        <button class="quantity-button" name="qty">1</button>
                        <a href="#" class="quantity-button">+</a>
                    </div>
                </td>
                <td class="invert">{val.product_id} </td>
                <td class="invert">{val.user_email} </td>
                <td>
                    <a href="#" class="btn-remove" onclick="return confirm('Are You Sure Delete Item?">Remove</a>
                </td>
            </tr>
            )
            })
        }
    </table>
					
				</div>
			</div>
		</div>
	</div>  

    </>)
}
export default Cart;