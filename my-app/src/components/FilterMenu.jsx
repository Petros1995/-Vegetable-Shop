import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
const Filter = ({setFilterFruit,setFilterVegetable, filterBy}) => (
    <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      // onClick={setFilter.bind(this, "all")}
    >All</Menu.Item>
    <Menu.Item
      active={filterBy === 'fruit'}
      onClick={setFilterFruit.bind(this, "fruit")}
    >Fruit</Menu.Item>
    <Menu.Item
      active={filterBy === 'vegetable'}
      onClick={setFilterVegetable.bind(this, "vegetable")}
    >Vegetable</Menu.Item>
  </Menu>
  )

export default Filter;
