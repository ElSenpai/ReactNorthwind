import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Button primary onClick={props.signIn} >Giriş Yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}  >Kayıt Ol</Button>
        </div>
    )
}
