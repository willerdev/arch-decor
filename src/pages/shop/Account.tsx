import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../../lib/firebaseConfig';
import { signOut } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { User, CreditCard, Phone, Mail, LogOut, Camera, Wallet, Plus } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

// Move interfaces outside of the component
interface PaymentMethod {
  type: 'card' | 'mobile';
  name: string;
  details: string;
  isDefault: boolean;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  photoURL: string;
  paymentMethods: PaymentMethod[];
}

const Account = () => {
  const { user, userData, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    phone: '',
    photoURL: '',
    paymentMethods: []
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [newPaymentMethod, setNewPaymentMethod] = useState<PaymentMethod>({
    type: 'card',
    name: '',
    details: '',
    isDefault: false
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate('/boutique/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/boutique/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !auth.currentUser) return;

    try {
      const storageRef = ref(storage, `profile-photos/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const photoURL = await getDownloadURL(storageRef);

      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        photoURL
      });

      setProfile(prev => ({ ...prev, photoURL }));
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const handleProfileUpdate = async () => {
    if (!auth.currentUser) return;

    try {
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        name: profile.name,
        phone: profile.phone,
        paymentMethods: profile.paymentMethods
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleAddPaymentMethod = () => {
    setProfile(prev => ({
      ...prev,
      paymentMethods: [...prev.paymentMethods, newPaymentMethod]
    }));
    setNewPaymentMethod({
      type: 'card',
      name: '',
      details: '',
      isDefault: false
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Mon Compte</h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 hover:text-red-700"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Déconnexion
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={profile.photoURL || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label className="absolute bottom-0 right-0 bg-red-600 p-2 rounded-full cursor-pointer hover:bg-red-700">
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  className="w-full px-4 py-2 border rounded-md bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              {isEditing ? (
                <div className="space-x-4">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleProfileUpdate}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Enregistrer
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Modifier
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Moyens de paiement</h2>
        
        <div className="space-y-4">
          {profile.paymentMethods.map((method, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-md">
              {method.type === 'card' ? (
                <CreditCard className="w-6 h-6 text-gray-500" />
              ) : (
                <Phone className="w-6 h-6 text-gray-500" />
              )}
              <div className="flex-1 ml-4">
                <p className="font-medium">{method.name}</p>
                <p className="text-sm text-gray-600">{method.details}</p>
              </div>
              {method.isDefault && (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                  Par défaut
                </span>
              )}
            </div>
          ))}

          {/* Add New Payment Method Form */}
          <div className="mt-6 p-4 border rounded-md">
            <h3 className="text-lg font-medium mb-4">Ajouter un moyen de paiement</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={newPaymentMethod.type}
                  onChange={e => setNewPaymentMethod(prev => ({ ...prev, type: e.target.value as 'card' | 'mobile' }))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                >
                  <option value="card">Carte bancaire</option>
                  <option value="mobile">Mobile Money</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  value={newPaymentMethod.name}
                  onChange={e => setNewPaymentMethod(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder={newPaymentMethod.type === 'card' ? 'Visa se terminant par 1234' : 'Mobile Money Account'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Détails
                </label>
                <input
                  type="text"
                  value={newPaymentMethod.details}
                  onChange={e => setNewPaymentMethod(prev => ({ ...prev, details: e.target.value }))}
                  className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500"
                  placeholder={newPaymentMethod.type === 'card' ? '**** **** **** 1234' : '+1234567890'}
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="default"
                  checked={newPaymentMethod.isDefault}
                  onChange={e => setNewPaymentMethod(prev => ({ ...prev, isDefault: e.target.checked }))}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="default" className="ml-2 block text-sm text-gray-700">
                  Définir comme moyen de paiement par défaut
                </label>
              </div>
              <button
                onClick={handleAddPaymentMethod}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
