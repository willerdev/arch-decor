import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigation = [
   
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'African History', href: '/about/history' },
        { name: 'African Updates', href: '/about/updates' }
      ]
    },
    { name: 'Transit or Transport', href: '/transit' },
    {
      name: 'Shop',
      href: '/shop',
      submenu: [
        { name: 'East Africa', href: '/shop/east-africa' },
        { name: 'West Africa', href: '/shop/west-africa' },
        { name: 'Central Africa', href: '/shop/central-africa' },
        { name: 'North Africa', href: '/shop/north-africa' },
        { name: 'European Africa', href: '/shop/european-africa' },
        { name: 'USA Africa', href: '/shop/usa-africa' }
      ]
    },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Team', href: '/team' },
    { name: 'Services', href: '/services' }
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
        {/* logo */}

        <Link to="/" className="text-red-600 text-2xl font-bold">
              KMT
            </Link>
                 {/* logo */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
                
                {item.submenu && (
                  <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg rounded-md mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;