import React ,{useState,useEffect} from 'react'
import { Container, Button, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
        <div>
            <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
   <CartSummary/>
         
          {isAuthenticated?<SignedIn/>:<SignedOut/> }         
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
        </div>
    )
}
