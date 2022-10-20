import React from 'react';

import { Container } from '@mui/material';

import { AddPost, PostList } from '../../common';

const Posts: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ marginY: '40px' }}>
      <AddPost />
      <PostList />
    </Container>
  );
};

export { Posts };
