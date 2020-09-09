import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


const VegetableCard = ({type, name, image, price}) => (
  
  <Card>
    
    <Image src={image} wrapped ui={false} />
    <Card.Content>
<Card.Header>{name}</Card.Header>
      <Card.Meta>
<span className='date'>{type}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='usd' />
       {price}
      </a>
    </Card.Content>
  </Card>
)
debugger

export default VegetableCard;