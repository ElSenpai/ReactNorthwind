import React from 'react'
import { Dropdown, Image, Menu,Icon } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/77545626?v=4"/>
                <Dropdown pointing="top left" text="Senpai">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                       
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
