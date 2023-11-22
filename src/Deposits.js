import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import image from './image/skcetedu.jpg';
function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Achievements</Title>
      <Typography component="p" variant="h4">
        Nothing 😅
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View more Achievements
        </Link>
      </div>
    </React.Fragment>
  );
}