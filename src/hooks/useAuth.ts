import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { auth, db } from '../lib/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

interface UserData {
  name: string;
  email: string | null;
  phone?: string;
  photoURL?: string;
  createdAt?: Date;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
        setUser(firebaseUser);
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const isAdmin = userData?.role === 'admin';

  return { user, userData, loading, isAdmin };
};