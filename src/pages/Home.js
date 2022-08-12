import { Box } from '@mui/material'
import React from 'react'
import Banner from '../components/Banner/Banner'
import SearchExercises from '../components/SearchExercises/SearchExercises'

function Home() {
  return (
    <Box>
      <Banner/>
      <SearchExercises/>
    </Box>
  )
}

export default Home