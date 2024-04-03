import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operations';
import css from './RegisterForm.module.css';

import { Sheet } from '@mui/joy';


import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
    form.reset();
  };

  return (

    <main  >
  
      <CssBaseline />
      <Sheet 
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 20, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Please register to continue.</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            // html input attribute
            name="name"
            type="text"
            placeholder="Name"
          />
        </FormControl>
          <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            // html input attribute
            name="password"
            type="password"
            placeholder="password"
          />
          </FormControl>
          <Button type="submit" sx={{width: '100%', mt: 1 /* margin top */ }}>Register</Button>
        </form>
          
        

        
        
      </Sheet>
    </main>


    // <div className={css.form_style}>
    //       <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
      
    // </div>

  );
};
