import { db } from '../lib/firebaseConfig.js';
import { collection, addDoc, writeBatch, doc } from 'firebase/firestore';

const categories: {
  id: string;
  name: string;
  description: string;
  image: string;
}[] = [
  // Add your category objects here
];

const products = [
    {
      name: "Canapé Modern Comfort",
      description: "Canapé 3 places en velours, design contemporain",
      price: 1299.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      stock: 10,
      featured: true
    },
    {
      name: "Lampe Suspension Globe",
      description: "Suspension design en verre soufflé",
      price: 249.99,
      category: "lighting",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
      stock: 15,
      featured: false
    },
    {
      name: "Table Basse Industrielle",
      description: "Table basse en bois et métal pour salon moderne",
      price: 499.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1505692794401-ef5ae855e6f6",
      stock: 20,
      featured: false
    },
    {
      name: "Cadre Photo Vintage",
      description: "Cadre photo en bois rustique pour décoration murale",
      price: 49.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1556911073-52527ac43714",
      stock: 30,
      featured: false
    },
    {
      name: "Peinture Abstraite",
      description: "Peinture abstraite colorée sur toile",
      price: 799.99,
      category: "art",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      stock: 5,
      featured: true
    },
    {
      name: "Coussin Confort Luxe",
      description: "Coussin en velours doux pour une touche de luxe",
      price: 39.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1523575708161-22d1abf1e3dc",
      stock: 50,
      featured: false
    },
    {
      name: "Lampe de Chevet Minimaliste",
      description: "Lampe de chevet design minimaliste avec lumière douce",
      price: 119.99,
      category: "lighting",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      stock: 25,
      featured: false
    },
    {
      name: "Fauteuil Relax en Cuir",
      description: "Fauteuil en cuir véritable pour un confort optimal",
      price: 899.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1588854337117-f8d7f2f1a2f2",
      stock: 8,
      featured: true
    },
    {
      name: "Vase en Céramique",
      description: "Vase en céramique peint à la main pour décoration florale",
      price: 79.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1592194996308-fd6010d6379e",
      stock: 40,
      featured: false
    },
    {
      name: "Applique Murale",
      description: "Applique murale en métal avec lumière directionnelle",
      price: 149.99,
      category: "lighting",
      image: "https://images.unsplash.com/photo-1512299284048-0717452a48e7",
      stock: 18,
      featured: false
    },
    {
      name: "Peinture Paysage Naturel",
      description: "Tableau représentant un paysage naturel, idéal pour le salon",
      price: 999.99,
      category: "art",
      image: "https://images.unsplash.com/photo-1551033549-611cf9a28f76",
      stock: 7,
      featured: true
    },
    {
      name: "Étagère Murale Moderne",
      description: "Étagère en bois flottante pour un rangement élégant",
      price: 179.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1595526119942-bc2892014972",
      stock: 12,
      featured: false
    },
    {
      name: "Horloge Murale Vintage",
      description: "Horloge en bois style vintage pour une touche classique",
      price: 99.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542",
      stock: 30,
      featured: false
    },
    {
      name: "Lampe LED de Bureau",
      description: "Lampe de bureau LED avec réglage de la luminosité",
      price: 89.99,
      category: "lighting",
      image: "https://images.unsplash.com/photo-1574515632274-633c905ca014",
      stock: 22,
      featured: false
    },
    {
      name: "Canapé Lit Convertible",
      description: "Canapé convertible en lit avec rangement intégré",
      price: 1499.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1505691723518-36aee8a6049d",
      stock: 5,
      featured: true
    },
    {
      name: "Sculpture en Bois",
      description: "Sculpture décorative en bois sculpté à la main",
      price: 299.99,
      category: "art",
      image: "https://images.unsplash.com/photo-1581361882320-588b9f81591d",
      stock: 6,
      featured: false
    },
    {
      name: "Table de Nuit Design",
      description: "Table de nuit moderne en bois et métal",
      price: 199.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
      stock: 15,
      featured: false
    },
    {
      name: "Bougie Parfumée",
      description: "Bougie aromatique dans un pot en verre",
      price: 24.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1556229174-dbb4a901db20",
      stock: 70,
      featured: false
    },
    {
      name: "Peinture Sur Mesure",
      description: "Peinture personnalisée pour intérieur ou bureau",
      price: 1500.00,
      category: "art",
      image: "https://images.unsplash.com/photo-1532462493354-1118a941d59b",
      stock: 2,
      featured: true
    },
    {
      name: "Lampadaire Arc Moderne",
      description: "Lampadaire design en arc pour un éclairage doux",
      price: 279.99,
      category: "lighting",
      image: "https://images.unsplash.com/photo-1557682250-7a93574e21a7",
      stock: 13,
      featured: false
    },
    {
      name: "Rideaux en Lin",
      description: "Rideaux en lin beige pour un intérieur apaisant",
      price: 79.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      stock: 25,
      featured: false
    },
    {
      name: "Tabouret de Bar",
      description: "Tabouret en bois et cuir pour cuisine moderne",
      price: 149.99,
      category: "furniture",
      image: "https://images.unsplash.com/photo-1600573473393-847b9372aa4f",
      stock: 18,
      featured: false
    },
    {
      name: "Décoration Murale en Métal",
      description: "Décoration en métal doré pour ajouter du style",
      price: 199.99,
      category: "decoration",
      image: "https://images.unsplash.com/photo-1606661103869-86804d6d7ef2",
      stock: 30,
      featured: false
    },
    {
      name: "Statue en Résine",
      description: "Statue artistique en résine moderne",
      price: 249.99,
      category: "art",
      image: "https://images.unsplash.com/photo-1598346762291-f6fc01c5eaff",
      stock: 3,
      featured: true
    },
    
  
  {
    name: "Canapé Modern Comfort",
    description: "Canapé 3 places en velours, design contemporain",
    price: 1299.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    stock: 10,
    featured: true
  },
  {
    name: "Lampe Suspension Globe",
    description: "Suspension design en verre soufflé",
    price: 249.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15",
    stock: 15,
    featured: false
  },
  {
    name: "Table Basse Industrielle",
    description: "Table basse en bois et métal pour salon moderne",
    price: 499.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1505692794401-ef5ae855e6f6",
    stock: 20,
    featured: false
  },
  {
    name: "Cadre Photo Vintage",
    description: "Cadre photo en bois rustique pour décoration murale",
    price: 49.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1556911073-52527ac43714",
    stock: 30,
    featured: false
  },
  {
    name: "Peinture Abstraite",
    description: "Peinture abstraite colorée sur toile",
    price: 799.99,
    category: "art",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    stock: 5,
    featured: true
  },
  {
    name: "Coussin Confort Luxe",
    description: "Coussin en velours doux pour une touche de luxe",
    price: 39.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1523575708161-22d1abf1e3dc",
    stock: 50,
    featured: false
  },
  {
    name: "Lampe de Chevet Minimaliste",
    description: "Lampe de chevet design minimaliste avec lumière douce",
    price: 119.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    stock: 25,
    featured: false
  },
  {
    name: "Fauteuil Relax en Cuir",
    description: "Fauteuil en cuir véritable pour un confort optimal",
    price: 899.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1588854337117-f8d7f2f1a2f2",
    stock: 8,
    featured: true
  },
  {
    name: "Vase en Céramique",
    description: "Vase en céramique peint à la main pour décoration florale",
    price: 79.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1592194996308-fd6010d6379e",
    stock: 40,
    featured: false
  },
  {
    name: "Applique Murale",
    description: "Applique murale en métal avec lumière directionnelle",
    price: 149.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1512299284048-0717452a48e7",
    stock: 18,
    featured: false
  },
  {
    name: "Peinture Paysage Naturel",
    description: "Tableau représentant un paysage naturel, idéal pour le salon",
    price: 999.99,
    category: "art",
    image: "https://images.unsplash.com/photo-1551033549-611cf9a28f76",
    stock: 7,
    featured: true
  },
  {
    name: "Étagère Murale Moderne",
    description: "Étagère en bois flottante pour un rangement élégant",
    price: 179.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1595526119942-bc2892014972",
    stock: 12,
    featured: false
  },
  {
    name: "Horloge Murale Vintage",
    description: "Horloge en bois style vintage pour une touche classique",
    price: 99.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542",
    stock: 30,
    featured: false
  },
  {
    name: "Lampe LED de Bureau",
    description: "Lampe de bureau LED avec réglage de la luminosité",
    price: 89.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1574515632274-633c905ca014",
    stock: 22,
    featured: false
  },
  {
    name: "Canapé Lit Convertible",
    description: "Canapé convertible en lit avec rangement intégré",
    price: 1499.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1505691723518-36aee8a6049d",
    stock: 5,
    featured: true
  },
  {
    name: "Sculpture en Bois",
    description: "Sculpture décorative en bois sculpté à la main",
    price: 299.99,
    category: "art",
    image: "https://images.unsplash.com/photo-1581361882320-588b9f81591d",
    stock: 6,
    featured: false
  },
  {
    name: "Table de Nuit Design",
    description: "Table de nuit moderne en bois et métal",
    price: 199.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    stock: 15,
    featured: false
  },
  {
    name: "Bougie Parfumée",
    description: "Bougie aromatique dans un pot en verre",
    price: 24.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1556229174-dbb4a901db20",
    stock: 70,
    featured: false
  },
  {
    name: "Peinture Sur Mesure",
    description: "Peinture personnalisée pour intérieur ou bureau",
    price: 1500.00,
    category: "art",
    image: "https://images.unsplash.com/photo-1532462493354-1118a941d59b",
    stock: 2,
    featured: true
  },
  {
    name: "Lampadaire Arc Moderne",
    description: "Lampadaire design en arc pour un éclairage doux",
    price: 279.99,
    category: "lighting",
    image: "https://images.unsplash.com/photo-1557682250-7a93574e21a7",
    stock: 13,
    featured: false
  },
  {
    name: "Rideaux en Lin",
    description: "Rideaux en lin beige pour un intérieur apaisant",
    price: 79.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    stock: 25,
    featured: false
  },
  {
    name: "Tabouret de Bar",
    description: "Tabouret en bois et cuir pour cuisine moderne",
    price: 149.99,
    category: "furniture",
    image: "https://images.unsplash.com/photo-1600573473393-847b9372aa4f",
    stock: 18,
    featured: false
  },
  {
    name: "Décoration Murale en Métal",
    description: "Décoration en métal doré pour ajouter du style",
    price: 199.99,
    category: "decoration",
    image: "https://images.unsplash.com/photo-1606661103869-86804d6d7ef2",
    stock: 30,
    featured: false
  },
  {
    name: "Statue en Résine",
    description: "Statue artistique en résine moderne",
    price: 249.99,
    category: "art",
    image: "https://images.unsplash.com/photo-1598346762291-f6fc01c5eaff",
    stock: 3,
    featured: true
  },
 
];

const seedDatabase = async () => {
  try {
    // Create categories
    const batch = writeBatch(db);
    categories.forEach((category) => {
      const categoryRef = doc(db, 'categories', category.id);
      batch.set(categoryRef, {
        name: category.name,
        description: category.description,
        image: category.image
      });
    });
    await batch.commit();
    console.log('Categories seeded successfully');

    // Create products
    for (const product of products) {
      const productData = {
        ...product,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      await addDoc(collection(db, 'products'), productData);
    }
    console.log('Products seeded successfully');

  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Run the seeding
seedDatabase();
