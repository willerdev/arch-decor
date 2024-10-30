import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../lib/firebaseConfig';
import { Product } from '../../types/product';
import { Heart, ShoppingCart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { addToCart } from './cartUtils';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  //const { productId } = useParams();
  const { productId } = useParams<{ productId: string }>();
  console.log('Current productId:', productId);
  const staticProductId = productId;
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      setIsLoading(true);
      
      try {
        const docRef = doc(db, 'products', staticProductId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const productData = { id: docSnap.id, ...docSnap.data() } as Product;
          if (isMounted) {
            setProduct(productData);
            setIsLoading(false);
          }
        } else {
          console.error('Product not found');
          if (isMounted) {
            setProduct(null);
            setIsLoading(false);
            navigate('/boutique');
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        if (isMounted) {
          setProduct(null);
          setIsLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleAddToCart = () => {
    if (!product) return;

    try {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold mb-4">
              ${product.price.toFixed(2)}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="quantity" className="font-medium">
                Quantité:
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-3 py-2"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddToCart}
              className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                addedToCart
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              {addedToCart ? (
                'Ajouté au panier ✓'
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" />
                  Ajouter au panier
                </>
              )}
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-gray-600" />
              <span>Livraison gratuite à partir de 50€</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <span>Garantie satisfait ou remboursé sous 30 jours</span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="mt-6">
            <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} en stock` : 'Rupture de stock'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;