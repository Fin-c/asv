import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import InstagramIcon from '@mui/icons-material/Instagram';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
const icon = {
  fontSize: 25,
  color: 'common.white',
  ml: 3,
  cursor: "pointer",
};

const leftLinks = {
  fontSize: 20,
  color: "common.white",
  mr: "25px",
}

const toolbarStyle = {
  minHeight: '50px',
  borderBottom: "solid",
  borderColor: "black",
  borderWidth: "1px",
};




function navbar() {

  return (
    <div>
      <AppBar sx={{ bgcolor: "#212121" }} position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-between' }} style={toolbarStyle}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Aktuelles"
              sx={{ ...leftLinks }}
            >
              {'Aktuelles'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Vergleichsangeln"
              sx={{ ...leftLinks }}
            >
              {'Vergleichsangeln'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Jugendsparte"
              sx={{ ...leftLinks }}
            >
              {'Jugendsparte'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Blog"
              sx={{ ...leftLinks }}
            >
              {'Blog'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/about-us/"
              sx={{ ...leftLinks }}
            >
              {'über uns'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/Termine"
              sx={{ ...leftLinks }}
            >
              {'Termine'}
            </Link>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={{ ...rightLink }}
            >
              {'Intern'}
            </Link>
            <InstagramIcon
              href="https://www.instagram.com/asv_rostiger_haken/?hl=de"
              sx={{ ...icon }}
            />

          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div >
  );
}

export default navbar;

