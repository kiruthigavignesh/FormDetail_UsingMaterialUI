import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, setFieldValue } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveAdditionalFormData } from '../redux/actions';



const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(saveAdditionalFormData(values)); 
    navigate('/details');
    console.log(values);
  };

  const validationSchema = Yup.object({
    address1: Yup.string().required('Address is required'),
    pincode: Yup.string().required('Pincode is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),

  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;', borderRadius: '10px' }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 5 }}>
            Registration Form
          </Typography>
          <Formik
            initialValues={{
              address1: '',
              address2: '',
              pincode: '',
              country: '',
              state: '',
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
                      autoComplete="given-name"
                      name="address1"
                      required
                      fullWidth
                      id="address1"
                      label="Address Line1"
                      autoFocus
                      error={errors.address1 && touched.address1}
                      helperText={errors.address1 && touched.address1 ? errors.address1 : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      autoComplete="given-name"
                      name="address2"
                      fullWidth
                      id="address2"
                      label="Address Line2"
                      autoFocus
                      error={errors.address2 && touched.address2}
                      helperText={errors.address2 && touched.address1 ? errors.address2 : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      autoComplete="given-name"
                      name="country"
                      required
                      fullWidth
                      id="country"
                      label="Country"
                      autoFocus
                      error={errors.country && touched.country}
                      helperText={errors.country && touched.country ? errors.country : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      autoComplete="given-name"
                      name="state"
                      required
                      fullWidth
                      id="state"
                      label="State"
                      autoFocus
                      error={errors.state && touched.state}
                      helperText={errors.state && touched.state ? errors.state : ''}
                    />
                  </Grid>
                  <Grid item xs={12}>
  <Field
    as={TextField}
    autoComplete="given-name"
    name="pincode"
    required
    fullWidth
    id="pincode"
    label="Pin Code"
    autoFocus
    error={errors.pincode && touched.pincode}
    helperText={errors.pincode && touched.pincode ? errors.pincode : ''}
    validate={(value) => {
      if (!/^\d+$/.test(value)) {
        return "Pin code must be a number";
      }
    }}
  />
</Grid>

                </Grid>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2 }}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
