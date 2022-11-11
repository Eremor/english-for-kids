import { styled, Switch } from '@mui/material';

const ModeSwitch = styled(Switch)(({ theme }) => ({
  padding: '5px 12px',
  width: 120,
  height: 40,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    width: 40,
    height: 40,
    transitionDuration: '300ms',
    transform: 'translateX(8px)',
    '&.Mui-checked': {
      transform: 'translateX(72px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.primary,
        opacity: 1,
        border: 0,
        '&:before': {
          content: '"train"',
          left: '20px',
        },
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.secondary.main,
    opacity: 1,
    border: 0,
    height: 30,
    borderRadius: 15,
    '&:before': {
      content: '"play"',
      position: 'absolute',
      top: '46%',
      left: '50px',
      transform: 'translateY(-50%)',
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#fff',
    },
  },
  '& .MuiSwitch-thumb': {
    width: 24,
    height: 24,
  },
}));

export default ModeSwitch;
