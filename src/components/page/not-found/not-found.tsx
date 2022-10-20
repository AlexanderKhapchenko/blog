import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';

import { AppRoute } from '../../../common/enums';
import styles from './styles.module.scss';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.box}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <Typography variant="h5" color="text.secondary">
            Page Not Found
          </Typography>
          <Button
            variant="contained"
            onClick={(): void => navigate(AppRoute.ROOT)}
          >
            Go to main page
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export { NotFound };
