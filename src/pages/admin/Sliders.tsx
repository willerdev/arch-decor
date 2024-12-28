import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebaseConfig';
import { Plus, Edit, Trash, X } from 'lucide-react';

interface Slider {
  id: string;
  title: string;
  description: string;
  image: string;
  active: boolean;
  order: number;
}

const AdminSliders = () => {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSlider, setSelectedSlider] = useState<Slider | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null as File | null,
    active: true,
    order: 0
  });

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'sliders'));
      const slidersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Slider[];
      // Sort sliders by order
      setSliders(slidersData.sort((a, b) => a.order - b.order));
    } catch (error) {
      console.error('Error fetching sliders:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    const storageRef = ref(storage, `sliders/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = selectedSlider?.image;
      if (formData.image) {
        imageUrl = await handleImageUpload(formData.image);
      }

      const sliderData = {
        title: formData.title,
        description: formData.description,
        image: imageUrl,
        active: formData.active,
        order: selectedSlider ? formData.order : sliders.length + 1
      };

      if (selectedSlider) {
        await updateDoc(doc(db, 'sliders', selectedSlider.id), sliderData);
      } else {
        await addDoc(collection(db, 'sliders'), sliderData);
      }

      fetchSliders();
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving slider:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (sliderId: string) => {
    if (window.confirm('Are you sure you want to delete this slider?')) {
      setIsLoading(true);
      try {
        await deleteDoc(doc(db, 'sliders', sliderId));
        setSliders(prevSliders => 
          prevSliders.filter(slider => slider.id !== sliderId)
        );
        alert('Slider deleted successfully');
      } catch (error) {
        console.error('Error deleting slider:', error);
        alert('Failed to delete slider. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: null,
      active: true,
      order: 0
    });
    setSelectedSlider(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sliders Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          Add Slider
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sliders.map((slider) => (
          <div key={slider.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img 
                src={slider.image} 
                alt={slider.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => {
                    setSelectedSlider(slider);
                    setFormData({
                      title: slider.title,
                      description: slider.description,
                      image: null,
                      active: slider.active,
                      order: slider.order
                    });
                    setIsModalOpen(true);
                  }}
                  className="p-2 bg-white rounded-full shadow-md text-blue-500 hover:text-blue-700"
                >
                  <Edit size={16} />
                </button>
                <button
                  onClick={() => handleDelete(slider.id)}
                  className="p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-700"
                >
                  <Trash size={16} />
                </button>
              </div>
              {!slider.active && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
                  Inactive
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{slider.title}</h3>
              <p className="text-gray-600 text-sm">{slider.description}</p>
              <div className="mt-2 text-sm text-gray-500">Order: {slider.order}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Slider Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {selectedSlider ? 'Edit Slider' : 'Add New Slider'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                  className="mt-1 block w-full"
                  accept="image/*"
                  required={!selectedSlider}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Order</label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  min="1"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.active}
                  onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Active</label>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? 'Saving...' : 'Save Slider'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSliders;