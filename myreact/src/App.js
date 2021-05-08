import React from 'react';
import Card from './card';
import { useState } from "react"
import "./App.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faTimes)

function App(props) {

	let details = [
		{
			plan: "FREE",
			cost: "$0",
			user: "Single User",
			storage: "5GB Storage",
			publicprojects: "Unlimited Public Projects",
			acccess: "Community Access",
			listItems: [
				{
					itemName: "Single User",
					isDisabled: false
				},
				{
					itemName: "5GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: true
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: true
				},
				{
					itemName: "Free Subdomain",
					isDisabled: true
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: true
				}
			]

		},
		{
			plan: "PLUS",
			cost: "$9",
			user: "5 Users",
			storage: "50GB Storage",
			publicprojects: "Unlimited Public Projects",
			acccess: "Community Access",
			listItems: [
				{
					itemName: "5 Users",
					isDisabled: false
				},
				{
					itemName: "50GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: false
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: false
				},
				{
					itemName: "Free Subdomain",
					isDisabled: false
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: true
				}
			]
		},
		{
			plan: "PRO",
			cost: "$49",
			user: "Unlimited Users",
			storage: "150GB Storage",
			publicprojects: "Unlimited Public Projects",
			acccess: "Community Access",
			listItems: [
				{
					itemName: "Unlimited Users",
					isDisabled: false
				},
				{
					itemName: "5GB Storage",
					isDisabled: false
				},
				{
					itemName: "Unlimited Public Projects",
					isDisabled: false
				},
				{
					itemName: "Community Access",
					isDisabled: false
				},
				{
					itemName: "Unlimited Private Projects",
					isDisabled: false
				},
				{
					itemName: "Dedicated Phone Support",
					isDisabled: false
				},
				{
					itemName: "Free Subdomain",
					isDisabled: false
				},
				{
					itemName: "Monthly Status Reports",
					isDisabled: false
				}
			]
		}

	];

	let [plan, displayplan] = useState("No plan selected");

	function display(plan) {
		displayplan(plan);
	}

	return (
		<div>
			<section className="pricing py-5">
				<h1 class="text-center">{plan}</h1>
				<div className="container">
					<div className="row">
						{
							details.map(detail => {
								return <div class="col-lg-4">
									<Card data={detail} displayPlan={display}>
									</Card>
								</div>
							}
							)
						}
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;

// import React from 'react';
// import Card from './card';
// import {useState} from "react"

// function App(){

// 	const details = [
// 		{
// 			itemName: "Item 1",
// 			price: "20",
// 			qty: 1
// 		},
// 		{
// 			itemName: "Item 2",
// 			price: "20",
// 			qty: 1
// 		},
// 		{
// 			itemName: "Item 3",
// 			price: "20",
// 			qty: 1
// 		}
// 	]

// 	let grandTotal = details.reduce((acc,item)=> {
//       		acc+= item.qty * item.price;
// 			  return acc;
//     	},0)

// 	return(
// 		<>
// 		<h1>Shopping Cart</h1>
// 		{details.map(detail => <Card data={detail}></Card>)}
// 		<h3>Grand Total : {grandTotal} </h3>
// 		</>
// 	)

// }

// export default App;