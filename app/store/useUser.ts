import { State, create } from 'zustand';
import { persist } from 'zustand/middleware';

// the store itself does not need any change
type IUser = {
  id: string;
  token: string;
};
interface UserStoreState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  getUser: () => IUser | null;
  resetUser: () => void;
}

const initialState: UserStoreState = {
  user: null,
  setUser: (user) => null,
  getUser: () => null,
  resetUser: () => null,
};

export const useUserStore = create<UserStoreState>()(
  persist(
    (set, get) => ({
      ...initialState,
      user: (get()?.user as IUser) || null, // Retrieve persisted user if exists
      setUser: (user) => set(() => ({ user })),
      getUser: () => get()?.user,
      resetUser: () => set(initialState),
    }),
    {
      name: 'user-store',
    }
  )
);
