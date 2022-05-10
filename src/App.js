import React from 'react'
// app components
import { Navbar,FilterButtons, MenuItemCard} from './components'
// mui components
import CssBaseLine from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
const Food = () => {
  return (
    <>
    <CssBaseLine/>
    <Navbar/>
    <Container>
      <FilterButtons/>
      <MenuItemCard/>
    </Container>
    </>
  )
}

export default Food