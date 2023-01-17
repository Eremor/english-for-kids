import { Card, styled, PaperProps } from '@mui/material';

interface CustomCardProps extends PaperProps {
  flip: string | undefined;
}

const CustomCard = styled(Card)(({ flip }: CustomCardProps) => ({
  position: 'relative',
  width: '100%',
  minHeight: '283px',
  transformStyle: 'preserve-3d',
  transition: 'all 0.5s ease',
  transform: `perspective(1000px) rotateY(${flip ? '180deg' : undefined})`,
  '& .front': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: `${flip ? '0' : undefined}`,
  },
  '& .back': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: `${!flip ? 'hidden' : undefined}`,
    transform: 'rotateY(180deg)',
  },
}));

export default CustomCard;
