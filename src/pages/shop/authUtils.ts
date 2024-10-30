import { auth } from '../../../lib/firebaseConfig';
import { User } from 'firebase/auth';

export const getUser = (): User | null => {
  return auth.currentUser;
};

export const isUserLoggedIn = (): boolean => {
  return auth.currentUser !== null;
};
