// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
// import AppBar from '../components/AppBar';
// import Toolbar from '../components/Toolbar';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import { Route, Routes } from 'react-router-dom';
// import { About } from './pages/About';
// import { Aktuelles } from './pages/Aktuelles';

// const rightLink = {
//   fontSize: 16,
//   color: 'common.white',
//   ml: 3,
// };
// const icon = {
//   fontSize: 25,
//   color: 'common.white',
//   ml: 3,
//   cursor: "pointer",
// };

// const leftLinks = {
//   fontSize: 20,
//   color: "common.white",
//   mr: "25px",
// }

// const toolbarStyle = {
//   minHeight: '50px',
//   borderBottom: "solid",
//   borderColor: "black",
//   borderWidth: "1px",
// };




// function navbar() {



//   return (
//     <div>
//       <AppBar sx={{ bgcolor: "#212121" }} position="fixed" >
//         <Toolbar sx={{ justifyContent: 'space-between' }} style={toolbarStyle}>
//           <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>

//             <Link
//               variant="h6"
//               underline="hover"
//               color="inherit"
//               href="/Jugendsparte"
//               sx={{ ...leftLinks }}
//             >
//             </Link>
//             <Link
//               variant="h6"
//               underline="hover"
//               color="inherit"
//               href="/Blog"
//               sx={{ ...leftLinks }}
//             >
//               {'Blog'}
//             </Link>
//             <Link
//               variant="h6"
//               underline="hover"
//               color="inherit"
//               href="/about-us/"
//               sx={{ ...leftLinks }}
//             >
//               {'über uns'}
//             </Link>
//             <Link
//               variant="h6"
//               underline="hover"
//               color="inherit"
//               href="/Termine"
//               sx={{ ...leftLinks }}
//             >
//               {'Termine'}
//             </Link>

//           </Box>
//           <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
//             <Link
//               color="inherit"
//               variant="h6"
//               underline="none"
//               href="/sign-in/"
//               sx={{ ...rightLink }}
//             >
//               {'Intern'}
//             </Link>
//             <InstagramIcon
//               href="https://www.instagram.com/asv_rostiger_haken/?hl=de"
//               sx={{ ...icon }}
//             />

//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Toolbar />
//     </div >
//   );
// }

// export default navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = ['Aktuelles', 'Jugendgruppe', 'Blog', 'Termine'];
const intern = ['intern'];
const socialMedia = ['instagram'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#212121" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 200,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ASV Rostiger Haken
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">

                    <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >     <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>{page}</Link>

              </Button>
            ))}
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {intern.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', mr: 1 }}
              >     <Link style={{ textDecoration: "none", color: "white" }} to={`/${page}`}>{page}</Link>

              </Button>
            ))}
            {socialMedia.map((page) => (
              <InstagramIcon
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontSize: 25,
                  color: 'common.white',
                  ml: 3,
                  mt: 0.5,
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >     <Link to={`/${page}`}>{page}</Link>
              </InstagramIcon>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default ResponsiveAppBar;