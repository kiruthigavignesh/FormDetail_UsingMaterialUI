import React, { useState } from "react";
import { Typography, TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { saveFormData } from "../redux/actions";
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


import { Grid } from "@mui/material";
import NextFormPage from "./Details";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

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

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Personal Information",
    "Check Details",
  ];
}

const BasicForm = () => (
  <>
   <Grid container spacing={2}>
   <Grid item xs={12}>
    <Field
      as={TextField}
      id="first-name"
      name="firstName"
      label="First Name"
      variant="outlined"
      placeholder="Enter Your First Name"
      fullWidth
      margin="normal"
    />
    </Grid>

    <Grid item xs={12}>
    <Field
      as={TextField}
      id="last-name"
      name="lastName"
      label="Last Name"
      variant="outlined"
      placeholder="Enter Your Last Name"
      fullWidth
      margin="normal"
    />
    </Grid>
    <Grid item xs={12}>
 <Field
      as={TextField}
      id="email"
      name="email"
      label="Email Id"
      variant="outlined"
      placeholder="Enter Your Email Id"
      fullWidth
      margin="normal"
    />
    </Grid>
    </Grid>
  </>
);

const ContactForm = () => (
  <>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
  <Field
      as={TextField}
      id="phone"
      name="phone"
      label="Phone Number"
      variant="outlined"
      placeholder="Enter Your Phone Number"
     fullWidth
      margin="normal"
    />
   </Grid>
   <Grid item xs={12}>
    <Field
      as={TextField}
      id="country"
      name="country"
      label="Country"
      fullWidth
      variant="outlined"
      placeholder="Enter Your Country"
      margin="normal"
    /></Grid>
    <Grid item xs={12}>
     <Field
      as={TextField}
      id="state"
      fullWidth
      name="state"
      label="State"
      variant="outlined"
      placeholder="Enter Your state"
    
      margin="normal"
    />
    </Grid>
    </Grid>
  </>
);

const PersonalForm = () => (
  <> 
   <Grid container spacing={2}>
  <Grid item xs={12}>
   
   <Field
      as={TextField}
      id="pincode"
      fullWidth
      name="pincode"
      label="PinCode"
      variant="outlined"
      placeholder="Enter PinCode"
    
      margin="normal"
    />
    </Grid>
    <Grid item xs={12}>
    <Field
      as={TextField}
      id="address1"
      fullWidth
      name="address1"
      label="Address1"
      variant="outlined"
      placeholder="Enter Your Addres1"
     
      margin="normal"
    />

  
  </Grid>
  <Grid item xs={12}>
    <Field
      as={TextField}
      id="address2"
      name="address2"
      label="Adress2"
      variant="outlined"
      placeholder="Enter Your address2"
     fullWidth
      margin="normal"
    />
    </Grid>
    </Grid>
  </>
);

const PaymentForm = () => (
  <>
   <NextFormPage/>
  </>
);

function getStepContent(step, values) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;

    case 2:
      return <PersonalForm />;

    case 3:
      return <PaymentForm />;

    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); // Get the dispatch function
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const navigate = useNavigate();



  const handleNext = (values) => {
    dispatch(saveFormData(values)); // Dispatch action to update Redux state
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>


      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{ boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px;',borderRadius:'10px'}}>
      
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding:'15px'
           
          }}
        >

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          country: "",
          state: "",
          address1: "",
          address2: "",
          email: "",
          pincode: "",
        }}
        onSubmit={(values) => {
          if (activeStep === steps.length - 1) {
            navigate('/message');

            console.log("Finish button clicked");
            // Display the new component
          } else {
            handleNext(values);
          }
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
           
                 
            {getStepContent(activeStep)}
        
<Box sx={{marginTop:'20px',display:'flex',gap:'10px'}}>
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
            </Box>
          </Form>
        )}
      </Formik>
      </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
};

export default LinearStepper;
