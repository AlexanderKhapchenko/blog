import React from 'react';

import { Divider, Stack } from '@mui/material';

import { useGetPostsQuery } from '../../../store/query/post/post';
import { PostItem } from '../post-item/post-item';
import { Spinner } from '../spinner/spinner';

const PostList: React.FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) return <Spinner />;

  return (
    <Stack
      spacing={2}
      alignItems="center"
      divider={<Divider orientation="horizontal" flexItem />}
      sx={{ width: '100%' }}
    >
      {posts &&
        posts.map((post) => {
          return <PostItem key={post.id} {...post} />;
        })}
    </Stack>
  );
};

export { PostList };
