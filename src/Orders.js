import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Bharath',
    '12:21 AM',
    '98%',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Sree',
    '6:40 AM',
    '97 %',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Krishna', '6:20 PM', '98 %', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Prajeeth',
    '8:30 AM',
    '97 %',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Aswin',
    '7:50 AM',
    '97 %',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Student Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>SrartTime</TableCell>
            <TableCell>Marks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more data
      </Link>
    </React.Fragment>
  );
}