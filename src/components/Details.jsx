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
      <h2>Check Details</h2>
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
              <TableCell>Email:</TableCell>
              <TableCell>{formData && formData.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone Number:</TableCell>
              <TableCell>{formData&& formData.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Country:</TableCell>
              <TableCell>{formData && formData.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>State:</TableCell>
              <TableCell>{formData && formData.state}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pincode:</TableCell>
              <TableCell>{formData && formData.pincode}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 1:</TableCell>
              <TableCell>{formData && formData.address1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address 2:</TableCell>
              <TableCell>{formData&& formData.address2}</TableCell>
            </TableRow>
           
          </TableBody>
        </Table>
      </TableContainer>
      
      </>
  );
};

export default NextFormPage;
