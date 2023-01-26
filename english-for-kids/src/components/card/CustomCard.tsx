import { Card, styled, PaperProps } from '@mui/material';
import { useAppSelect } from '../../store/hooks';

interface CustomCardProps extends PaperProps {
  flip: string | undefined;
}

const CustomCard = styled(Card)(({ flip }: CustomCardProps) => {
  const { isTrainMode } = useAppSelect((state) => state.base);

  return {
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
    '&:hover': {
      boxShadow: `${
        isTrainMode
          ? '0px 2px 8px 6px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
          : 'none'
      }`,
    },
  };
});

export { CustomCard };
