import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar'
import Loader from '../Loader/Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <Box sx={{ mt: { lg: '6rem', xs: '0' }, p:'1.5rem' }}>
            <Typography variant='h4' mb='5' >
                Exercises targeting same muscle group
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant='h4' mb='5' >
                Exercises trageting same equipment
            </Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}
export default SimilarExercises