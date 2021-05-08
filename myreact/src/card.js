import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    return(
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">{props.data.cost}<span className="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              {
                  props.data.listItems.map((item) => {
                      return !item.isDisabled ? 
                      <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>{item.itemName}</li> :
                      <li><span className="fa-li text-muted"><FontAwesomeIcon icon={faTimes}/></span>{item.itemName}</li>
                  })
              }
            </ul>
            <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={() => props.displayPlan(props.data.user)}>Button</a>
          </div>
        </div>
    )
}

export default Card;

// import React from "react"
// import {useState} from "react"


// const Card = (props) => {

//   const [qty, setQty] = useState(0);

//   const setQuantity = (item) => {
//     setQty(qty + item.qty + 1)
//   }

//   return(
    
//     <div class="row">
//       <div class="col-3">name: {props.data.name}</div>
//       <div class="col-3">price: {props.data.price}</div>
//       <div class="col-3">quantity: 
//       <button type="button" class="btn btn-light" onClick={setQuantity}>-</button>
//       {props.data.qty}
//       <button type="button" class="btn btn-light" onClick={setQuantity}>+</button>
//       </div>
//       <div class="col-3">total: {props.data.price * props.data.qty} </div>
//     </div>
//   )
// }

// export default Card;