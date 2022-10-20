import { store } from '../../../store/store';

type RootStateType = ReturnType<typeof store.getState>;

export type { RootStateType };
