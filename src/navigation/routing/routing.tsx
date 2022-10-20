import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../common/enums';
import { NotFound, Post, Posts } from '../../components/page';
import { EditPost } from '../../components/page/edit-post/edit-post';

const Routing: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Posts />} />
        <Route path={AppRoute.POST} element={<Post />} />
        <Route path={AppRoute.EDIT_POST} element={<EditPost />} />
        <Route path={AppRoute.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Routing };
