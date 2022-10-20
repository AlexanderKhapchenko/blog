import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { QueryTags } from '../../common/enums';
import { ENV } from '../../common/enums/app/env.enum';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.API_PATH,
});

const api = createApi({
  reducerPath: 'blog',
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [QueryTags.POST, QueryTags.COMMENT],
});

export { api };
