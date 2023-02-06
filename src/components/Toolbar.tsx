import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 100,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;