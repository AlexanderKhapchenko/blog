import React from 'react';

import { CardContent, Typography } from '@mui/material';

interface PostContentProps {
  body: string;
  title: string;
}

const PostContent: React.FC<PostContentProps> = ({ body, title }) => {
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {body}
      </Typography>
    </CardContent>
  );
};

export { PostContent };
