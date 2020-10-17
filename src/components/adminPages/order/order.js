/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//css import
import './order.css'
//MUI import
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const order = () => {
    const classes = useStyles();
    const [orderData, setOrderData] = useState([])
    useEffect(() => {
        fetch('https://evening-fortress-71039.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [])
    return (
        <div >
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Service Type</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {orderData.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.orderName}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.serviceType}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right"><div className={
                    row.action==='pending'?
                        'badge badge-primary p-2' :
                        row.action==='on going'?
                            'badge badge-warning p-2' :
                            'badge badge-success p-2'
                } >{row.action}</div></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default order;