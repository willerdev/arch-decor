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
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser: User | null) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          if (userDoc.exists()) {
            setUserData({
              ...userDoc.data() as UserData,
              email: firebaseUser.email
            });
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, userData, loading };
};