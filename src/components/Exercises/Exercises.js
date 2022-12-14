import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import {exerciseOptions, fetchData} from '../../utils/fetchData';
import { useEffect, useState } from 'react';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage =8;
  const indexOfLastExercise= currentPage*exercisesPerPage;
  const indexOfFirstExercise= indexOfLastExercise-exercisesPerPage;
  const currentExercises = exercises?.slice(indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top: 1800 , behaviour:'smooth'})
  }
  const fetchExercisesData = async()=>{
    let exercisesData=[];
    if(bodyPart === 'all') {
      exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
    }else{
      exercisesData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
    }
    setExercises(exercisesData)
  }
  useEffect(()=>{
    fetchExercisesData()
  },[bodyPart])
  return (
    <Box id='exercises' sx={{mt:{lg:'6rem'}}} mt='3rem' p='1.3rem'>
        <Typography varient="h3" mb="2.5rem">
           Showing Results
        </Typography>
        <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent='center'>
            {currentExercises.map((exercise, index)=>{
              return(
                <ExerciseCard key={index} exercise={exercise} />
              )
            })}
        </Stack>
        <Stack mt='100px' alignItems='center'>
            {exercises.length > exercisesPerPage && (
              <Pagination color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)}
                page={currentPage} onChange={paginate} size='large' />
            )}
        </Stack>
    </Box>
  )
}
export default Exercises