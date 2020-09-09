import React from 'react';
import axios from "axios";
import { Container, Card } from 'semantic-ui-react'
import  Menu  from './menu';
import  FilterMenu  from '../containers/FilterMenu';
import  VegetableCard  from './vegetableCard';
class App extends React.Component{
  componentWillMount(){
    const {setFruit} = this.props;
    axios.get('/vegetable.json').then(({data}) => {
      setFruit(data)
    })
  }
  render(){
    const {vegetable,isReady} = this.props;
    return(
      <Container>   
        <Menu/>
        <FilterMenu />
        <Card.Group itemsPerRow={4}>
        {!isReady 
   ?'Loading...'
   :vegetable.map((vegetable, i) => (
         <VegetableCard key={i} {...vegetable}/>
     ))
   }
        </Card.Group>
 
    </Container>

    )

  }
}

export default App;