import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import Button from '@mui/material/Button';

const NextFormPage = () => {
  const formData = useSelector(state => state.form.formData);
  const formData2 = useSelector(state => state.form.formData2);

  return (
  <>
      <h2>Form Data</h2>
      <TableContainer component={Paper}>
        <Table aria-label="form data table">
          <TableBody>
            <TableRow>
              <TableCell>FirstName:</TableCell>
              <TableCell>{formData && formData.firstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LastName:</TableCell>
              <TableCell>{formData && formData.lastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Password:</TableCell>
              <TableCell>{formData && formData.password}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email:</TableCell>
              <TableCell>{formData && formData.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country:</TableCell>
              <TableCell>{formData2 && formData2.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State:</TableCell>
              <TableCell>{formData2 && formData2.state}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1:</TableCell>
              <TableCell>{formData2 && formData2.address1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 2:</TableCell>
              <TableCell>{formData2 && formData2.address2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pincode:</TableCell>
              <TableCell>{formData2 && formData2.pincode}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/" >
      <Button variant="contained" disableElevation sx={{ mt: 3, mb: 2 }} >
Back    
</Button>
      </Link>
      </>
  );
};

export default NextFormPage;
