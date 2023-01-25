import React, { FC, useState } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

type CategoryProp = {
  image: string;
  title: string;
  length: number;
};

const Category: FC<CategoryProp> = ({ title, image, length }) => {
  const theme = useTheme();
  const [gameMode] = useState('play');

  return (
    <Card sx={{ maxWidth: 295, borderRadius: 3, width: '100%' }}>
      <CardActionArea>
        <CardMedia component="img" image={image} height="203" sx={{ backgroundColor: 'grey' }} />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: '700', textTransform: 'capitalize' }}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="body2" sx={{ fontSize: 11 }} color={theme.palette.primary.main}>
              {length}
              {length > 1 ? ' words' : ' word'}
            </Typography>
            <Box
              sx={{
                width: 17,
                height: 17,
                backgroundColor: `${
                  gameMode === 'train' ? theme.palette.primary.main : theme.palette.secondary.main
                }`,
                borderRadius: '50%',
              }}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export { Category };
