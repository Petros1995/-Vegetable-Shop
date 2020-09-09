import { Menu } from 'semantic-ui-react'
import React from 'react';
 const MenuComponent = () => (
<Menu>
      <Menu.Item
        name='browse'
      >
   Fruit Shop
      </Menu.Item>


      <Menu.Menu position='right'>
        <Menu.Item
          name='signup'
        >
          Account &nbsp; 0 &nbsp; USD
        </Menu.Item>

        <Menu.Item
          name='help'
        >
          Cart &nbsp; <b>(0)</b> 
        </Menu.Item>
      </Menu.Menu>
    </Menu> 

)
export default MenuComponent;
