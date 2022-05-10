import React from 'react'
// app components
import { Navbar,FilterButtons } from './components'
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
    </Container>
    </>
  )
}

export default Food