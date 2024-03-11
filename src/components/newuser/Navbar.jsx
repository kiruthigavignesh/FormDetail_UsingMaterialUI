import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import TipsAndUpdates from '@mui/icons-material/TipsAndUpdates';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
// import { signInWithPopup} from 'firebase/auth';
import { auth, provider,firestore} from "../../firebase";
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export default function Navbar() {
  const navigate = useNavigate();

  const[value,setValue]=React.useState('');
  const [openLoginDrawer, setOpenLoginDrawer] = React.useState(false);
  const [openSignupDrawer, setOpenSignupDrawer] = React.useState(false);

const[user,setUser]=React.useState('');
const[email,setEmail]=React.useState('');
const[password,setPassword]=React.useState('');
const[phone,setPhone]=React.useState('');

// const handlegoogle=()=>{
//   signInWithPopup(auth,provider).then((data)=>{
//     setValue(data.user.email)
//     localStorage.setItem("email",data.user.email)
//     navigate('/form');
//   })
// }



React.useEffect(()=>{
  setValue((localStorage.getItem('email')))
})

  const toggleLoginDrawer = (open) => (event) => {
    setOpenLoginDrawer(open);
  };

  const toggleSignupDrawer = (open) => (event) => {
    setOpenSignupDrawer(open);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    validationSchema.validate(values)
      .then(() => {
        alert("Login Successful");
        console.log(values);
      })
      .catch((errors) => {
        alert("Form validation failed. Please check the fields and try again.");
        console.error(errors);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleSubmitSignup = (values, { setSubmitting }, e) => {
   
    validationSchema.validate(values)
    firestore.collection("message")
      .add({
        username: values.username,
        email: values.email,
        phone: values.phone,
        password: values.password,
      })
      .then(() => {
        setUser("");
        setEmail("");
        setPhone("");
        setPassword("");
        alert("Signup Successful");
        console.log(values);
      })
      .catch((error) => {
        console.error("error", error);
        alert("Error occurred while signing up");
      });
  };
  




  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validationSchemaSignup = Yup.object({
    username: Yup.string().required('Username is required'),
    phone: Yup.string().required('Phone Number is required'),
    email: Yup.string()
      .matches(EMAIL_REGEX, 'Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one alphabet, one special character, one number, and be at least 6 characters long'
      ),
  });

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <TipsAndUpdates />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='title'>
            Instrive Labs
          </Typography>
          <Button
            color="inherit"
            onClick={toggleLoginDrawer(true)}
            sx={{ border: '1px solid white' }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={toggleSignupDrawer(true)}
            sx={{ border: '1px solid white', marginLeft: '20px' }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={openLoginDrawer}
        onClose={toggleLoginDrawer(false)}
        PaperProps={{ sx: { width: '400px' } }}
      >
         <Button onClick={toggleLoginDrawer(false)} 
         sx={{ marginTop: '20px',display:'flex',justifyContent:'flex-end',marginRight:'30px' ,color:'black',fontSize:'20px'}}>
           X
          </Button>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              Login
            </Typography>

            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        error={errors.username && touched.username}
                        helperText={errors.username && touched.username ? errors.username : ''}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        error={errors.password && touched.password}
                        helperText={errors.password && touched.password ? errors.password : ''}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: '20px' }}
                    type="submit" // Set type to submit
                  >
                    Log In
                  </Button>
                </Form>
              )}

            </Formik>
            <Box sx={{display:'flex',textAlign:'center',justifyContent:'center',marginTop:'20px'}}>
            <Typography variant="body1" align="center" gutterBottom >
     or
    </Typography>
    </Box>
            {/* <Button
        variant="outlined"
        sx={{width:'300px',marginTop:'20px'}}
        onClick={handlegoogle}
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button> */}
            <Grid container justifyContent="center" sx={{ marginTop: '20px', color: '#1976D2' }}>
              <Grid item>
                <Typography variant="body2" onClick={toggleSignupDrawer(true)} style={{ cursor: 'pointer' }}>
                  Don't have an account? Sign up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Drawer>
      <Drawer
        anchor="right"
        open={openSignupDrawer}
        onClose={toggleSignupDrawer(false)}
        PaperProps={{ sx: { width: '400px' } }}
      >
         <Button onClick={toggleSignupDrawer(false)} 
         sx={{ marginTop: '20px',display:'flex',justifyContent:'flex-end',marginRight:'30px' ,color:'black',fontSize:'20px'}}>
           X
          </Button>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '300px',
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                marginBottom: '20px',
                fontWeight: '600',
              }}
            >
              Create a New Account
            </Typography>

            <Formik
              initialValues={{
                username: '',
                password: '',
                email: '',
                phone: '',
              }}
              validationSchema={validationSchemaSignup}
              onSubmit={handleSubmitSignup}
            >
              {({ errors, touched }) => (
                <Form noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        error={errors.username && touched.username}
                      
                        helperText={errors.username && touched.username ? errors.username : ''}
                      value={user}
                      onChange={(e)=>setUser(e.target.value)}
                      
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        error={errors.email && touched.email}
                        helperText={errors.email && touched.email ? errors.email : ''}
                   
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                   />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        error={errors.phone && touched.phone}
                        helperText={errors.phone && touched.phone ? errors.phone : ''}
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        error={errors.password && touched.password}
                        helperText={errors.password && touched.password ? errors.password : ''}
                    
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    </Grid>
                  </Grid>
                  <Button variant="contained" color="primary" fullWidth sx={{ marginTop: '20px' }} type="submit">
                    Sign Up
                  </Button>
                
                </Form>
              )}
            </Formik>
            <Box sx={{display:'flex',textAlign:'center',justifyContent:'center',marginTop:'10px'}}>
            <Typography variant="body1" align="center" gutterBottom >
     or
    </Typography>
    </Box>
            {/* <Button
        variant="outlined"
        sx={{width:'300px',marginTop:'20px'}}
        onClick={handlegoogle}
        startIcon={<GoogleIcon />}
      >
        Sign in with Google
      </Button> */}
      <Grid container justifyContent="center" sx={{ marginTop: '10px', color: '#1976D2' }}>
              <Grid item>
                <Typography variant="body2" onClick={toggleLoginDrawer(true)} style={{ cursor: 'pointer' }}>
                  Already have an account? Log In
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
