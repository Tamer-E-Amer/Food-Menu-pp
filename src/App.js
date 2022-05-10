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
  // filtering menu data by category
  /**
   * @description this function accept a string as a prop for the category and check th is category if it is not equal word all, it should filter the array of data according to the categor parameter and then set the state with the returned filtered array. this function then is passed to the buttons list component as a prop
   * to be run there with in the onClick handler function
   */
  const filterMeuByCategory =(cat)=>{
    if(cat !== "all"){
      const filteredMenu = menuDataArray.filter((item)=> item.category === cat)
      setMenuData(filteredMenu)
    }else{
      setMenuData(menuDataArray)
    }
  }
  return (
    <>
    <CssBaseLine/>
    <Navbar/>
    <Container>
      <FilterButtons filterMeuByCategory = {filterMeuByCategory}/>
      <MenuItemsList menuData={menuData} />
    </Container>
    </>
  )
}

export default Food