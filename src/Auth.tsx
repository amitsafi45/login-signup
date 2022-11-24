import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const Auth = () => {
const [isSignUp,setIsSignUp]=useState(false)
const [input,setInput]=useState({
  name:"",email:"",password:""
})
const handleChange=(e:any)=>{
    setInput((prevState)=>({
      ...prevState,[e.target.name]:e.target.value
    }))
}
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
          sx={{ ":hover": { boxShadow: '10px 10px 20px #ccc' } }}>
          <Typography variant='h5' padding={3} textAlign="center">{isSignUp ? "signup":"login"}</Typography>

          {isSignUp&&(<TextField name='name' value={input.name} onChange={handleChange} margin='normal' type={"text"} variant='outlined' placeholder='Name' />)}
          <TextField name='email'value={input.email} onChange={handleChange} margin='normal' type={"email"} variant='outlined' placeholder='email' />
          <TextField name='password' value={input.password} onChange={handleChange} margin='normal' type={"password"} variant='outlined' placeholder='password' />
          <Button sx={{ marginTop: 3, borderRadius: 3 }} variant={"contained"}>{isSignUp ?"signup":"login"}</Button>
          <Button onClick={()=>{setIsSignUp(!isSignUp)}} sx={{ marginTop: 3, borderRadius: 3 }}>Change to{ isSignUp ?"Login":"signup"}</Button>

        </Box>
      </form>
    </div>
  )
}
