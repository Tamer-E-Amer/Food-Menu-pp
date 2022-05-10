import React from 'react'
// app components
import { Navbar,FilterButtons} from './components'
import {MenuItemsList} from './containers'
// mui components
import CssBaseLine from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
// import menu arrays that hold the data of the meals
import menuDataArray from './data/MenuData'
const Food = () => {
  // set menu data array into a state
  const [menuData, setMenuData] = React.useState(menuDataArray)
  return (
    <>
    <CssBaseLine/>
    <Navbar/>
    <Container>
      <FilterButtons/>
      <MenuItemsList menuData={menuData}/>
    </Container>
    </>
  )
}

export default Food