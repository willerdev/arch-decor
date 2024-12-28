import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebaseConfig';
import { Save, Upload } from 'lucide-react';

interface SiteSettings {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  logo: string;
  facebook: string;
  instagram: string;
  twitter: string;
  aboutUs: string;
}

const AdminSettings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>({
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    logo: '',
    facebook: '',
    instagram: '',
    twitter: '',
    aboutUs: ''
  });
  const [newLogo, setNewLogo] = useState<File | null>(null);
  const [previewLogo, setPreviewLogo] = useState<string>('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const settingsDoc = await getDoc(doc(db, 'settings', 'site'));
      if (settingsDoc.exists()) {
        setSettings(settingsDoc.data() as SiteSettings);
        setPreviewLogo(settingsDoc.data().logo);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      alert('Failed to load settings. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewLogo(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreviewLogo(previewUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let logoUrl = settings.logo;

      // Upload new logo if selected
      if (newLogo) {
        const storageRef = ref(storage, `settings/${newLogo.name}`);
        await uploadBytes(storageRef, newLogo);
        logoUrl = await getDownloadURL(storageRef);
      }

      // Update settings in Firestore
      await updateDoc(doc(db, 'settings', 'site'), {
        ...settings,
        logo: logoUrl
      });

      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('Failed to save settings. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Site Settings</h1>
        <p className="text-gray-600">Manage your website's general settings and contact information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
        {/* Logo Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold pb-2 border-b">Logo</h2>
          <div className="flex items-start space-x-4">
            <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
              {previewLogo ? (
                <img 
                  src={previewLogo} 
                  alt="Site Logo" 
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Upload size={32} />
                </div>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload New Logo
              </label>
              <input
                type="file"
                onChange={handleLogoChange}
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="mt-2 text-sm text-gray-500">
                Recommended size: 200x200 pixels
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold pb-2 border-b">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={settings.whatsapp}
                onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Social Media Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold pb-2 border-b">Social Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facebook URL
              </label>
              <input
                type="url"
                value={settings.facebook}
                onChange={(e) => setSettings({ ...settings, facebook: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instagram URL
              </label>
              <input
                type="url"
                value={settings.instagram}
                onChange={(e) => setSettings({ ...settings, instagram: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter URL
              </label>
              <input
                type="url"
                value={settings.twitter}
                onChange={(e) => setSettings({ ...settings, twitter: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold pb-2 border-b">About Us</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              About Us Text
            </label>
            <textarea
              value={settings.aboutUs}
              onChange={(e) => setSettings({ ...settings, aboutUs: e.target.value })}
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Save size={20} className="mr-2" />
            {isSaving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;