import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, Card, Container } from '@mui/material';

import { useGetPostDetailQuery } from '../../../store/query/post/post';
import { Spinner, AddComment, CommentList, PostContent } from '../../common';
import styles from './styles.module.scss';

const Post: React.FC = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostDetailQuery(Number(id));

  if (isLoading) return <Spinner />;

  if (!post || !id) return <h1>Not found post</h1>;

  const { body, title, comments } = post;

  return (
    <Container maxWidth={'sm'} className={styles.container}>
      <Box className={styles.box}>
        <Card>
          <PostContent body={body} title={title} />
        </Card>
        {comments && <CommentList comments={comments} />}
        <AddComment id={Number(id)} />
      </Box>
    </Container>
  );
};

export { Post };
