import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Auth = () => {
  return (
    <div>
        <form>
            <Box display="flex" flexDirection={'column'} 
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
               borderRadius={5}
               boxShadow={"5px 5px 10px #ccc "}
               sx={{":hover":{boxShadow:'10px 10px 20px #ccc'}}}>
               <Typography variant='h5' padding={3} textAlign="center">Login page</Typography> 
            
            <TextField margin='normal' type={"text"} variant='outlined' placeholder='Name'/>
            <TextField margin='normal' type={"email"} variant='outlined' placeholder='email'/>
            <TextField margin='normal' type={"password"} variant='outlined'placeholder='password'/>
            <Button sx={{marginTop:3, borderRadius:3} } variant={"contained"}>login</Button>
            <Button sx={{marginTop:3, borderRadius:3} }>CHANGE TO SIGNUP</Button>
           
            </Box>
        </form>
    </div>
  )
}
