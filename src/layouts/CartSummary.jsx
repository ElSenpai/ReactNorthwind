import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import {  Dropdown, Label,Button } from 'semantic-ui-react'
import { removeFromCart } from '../store/actions/cartActions'
export default function CartSummary() {

  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)

  const handleRemoveToCart=(product)=>{
   dispatch(removeFromCart(product))
   toast.error("Sepetten Silindi",1)
  }

    return (
        <div>
            <Dropdown style={{marginTop:"7px"}} item text="Sepetiniz">
              <Dropdown.Menu>
                {
                  cartItems.map((cartItem)=>(
                    <Dropdown.Item key={cartItem.product.id} >{cartItem.product.productName} <Label color="olive"> {cartItem.quantity}</Label> <Button  onClick={()=>handleRemoveToCart(cartItem.product)}  circular  color="red"  icon="delete"/></Dropdown.Item>
                    
                  ))
                }
             
                
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           
        </div>
    )
}
