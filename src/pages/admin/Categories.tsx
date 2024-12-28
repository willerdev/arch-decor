import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../lib/firebaseConfig';
import { Plus, Edit, Trash, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
  featured: boolean;
}

const AdminCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null as File | null,
    featured: false,
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'));
      const categoriesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Category[];
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    const storageRef = ref(storage, `categories/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  };

  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = selectedCategory?.image;
      if (formData.image) {
        imageUrl = await handleImageUpload(formData.image);
      }

      const categoryData = {
        name: formData.name,
        description: formData.description,
        image: imageUrl,
        featured: formData.featured,
        slug: createSlug(formData.name)
      };

      if (selectedCategory) {
        await updateDoc(doc(db, 'categories', selectedCategory.id), categoryData);
      } else {
        await addDoc(collection(db, 'categories'), categoryData);
      }

      fetchCategories();
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving category:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setIsLoading(true);
      try {
        await deleteDoc(doc(db, 'categories', categoryId));
        setCategories(prevCategories => 
          prevCategories.filter(category => category.id !== categoryId)
        );
        alert('Category deleted successfully');
      } catch (error) {
        console.error('Error deleting category:', error);
        alert('Failed to delete category. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      image: null,
      featured: false
    });
    setSelectedCategory(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Categories Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Image</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Name</th>
                  <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Description</th>
                  <th className="hidden sm:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Featured</th>
                  <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider sm:px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-3 py-4 whitespace-nowrap sm:px-6">
                      <img src={category.image} alt={category.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded" />
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap sm:px-6">
                      <div className="text-sm font-medium text-gray-900">{category.name}</div>
                      <div className="text-sm text-gray-500 sm:hidden">{category.description}</div>
                    </td>
                    <td className="hidden sm:table-cell px-3 py-4 sm:px-6">
                      <div className="text-sm text-gray-900">{category.description}</div>
                    </td>
                    <td className="hidden sm:table-cell px-3 py-4 whitespace-nowrap sm:px-6">
                      {category.featured ? 'Yes' : 'No'}
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium sm:px-6">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedCategory(category);
                            setFormData({
                              name: category.name,
                              description: category.description,
                              image: null,
                              featured: category.featured,
                            });
                            setIsModalOpen(true);
                          }}
                          className="text-blue-500 hover:text-blue-700 p-2"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Category Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">
                {selectedCategory ? 'Edit Category' : 'Add New Category'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  required={!selectedCategory}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Featured Category</label>
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
                  {isLoading ? 'Saving...' : 'Save Category'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;