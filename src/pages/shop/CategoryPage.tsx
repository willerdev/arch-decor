import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig';
import { Product } from '../../types/product';

import { Search, SlidersHorizontal } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let productsQuery;
        if (category === 'tous-les-produits') {
          productsQuery = query(collection(db, 'products'));
        } else {
          // Convert URL-friendly category back to original format
          const decodedCategory = category ? category.replace(/-/g, ' ') : '';
          productsQuery = query(
            collection(db, 'products'),
            where('category', '==', decodedCategory.toLowerCase())
          );
        }
        
        const querySnapshot = await getDocs(productsQuery);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];
        
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = products
    .filter(product => 
      (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase())) ?? false
    )
    .sort((a, b) => {
        switch (sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {category === 'tous-les-produits' ? 'Tous les produits' : category}
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Trier par</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="name-asc">Nom A-Z</option>
              <option value="name-desc">Nom Z-A</option>
            </select>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <SlidersHorizontal size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
          >
            <div className="relative">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <button 
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">Aucun produit trouvé</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;