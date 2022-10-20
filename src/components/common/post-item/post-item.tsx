import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Card, CardActions } from '@mui/material';

import { AppRoute } from '../../../common/enums';
import { PostType } from '../../../common/types';
import { useDeletePostMutation } from '../../../store/query/post/post';
import { ModalDeletePost } from '../modal-delete-post/modal-delete-post';
import { PostContent } from '../post-content/post-content';
import styles from './styles.module.scss';

const PostItem: React.FC<PostType> = ({ title, body, id }) => {
  const [openEditPost, setOpenEditPost] = useState(false);
  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  const onDelete = async (): Promise<void> => {
    await deletePost(id);
  };

  const onShowComments = (): void => {
    const route = AppRoute.POST.replace(/:id/g, id.toString());
    navigate(route);
  };

  const onEdit = (): void => {
    navigate(AppRoute.EDIT_POST, {
      state: { oldBody: body, oldTitle: title, id },
    });
  };

  return (
    <>
      <Card className={styles.card}>
        <PostContent body={body} title={title} />
        <CardActions className={styles.cardAction}>
          <Button onClick={onShowComments} variant="contained">
            See Comments
          </Button>
          <Box className={styles.buttons}>
            <Button
              onClick={onEdit}
              variant="outlined"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              onClick={(): void => setOpenEditPost(true)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>
      <ModalDeletePost
        isOpen={openEditPost}
        handleCloseDialog={(): void => setOpenEditPost(false)}
        handleDeleteProfile={onDelete}
      />
    </>
  );
};

export { PostItem };
