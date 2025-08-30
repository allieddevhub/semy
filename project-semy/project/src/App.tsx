import React from 'react';
import { Factory, Leaf, Award, ChevronRight, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleExploreClick = () => {
    const message = "Hi! I'm interested in your e-cycle range. Can you provide more information?";
    const whatsappUrl = `https://wa.me/917358110762?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLearnMoreClick = (productName: string) => {
    const message = `Hi! I'm interested in the ${productName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/917358110762?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/f5msFJJ/Screenshot-2025-07-27-092954.pngauto=format&fit=crop&q=80"
            alt="E-Cycle Manufacturing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Navbar */}
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <img 
              src="https://i.ibb.co/QvpqQDcg/logo-Photoroom.png" 
              alt="SEMY Logo" 
              className="h-28"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-white hover:text-blue-400">Products</a>
              <a href="#manufacturing" className="text-white hover:text-blue-400">Manufacturing</a>
              <a href="#about" className="text-white hover:text-blue-400">About</a>
              <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black bg-opacity-80 rounded-lg p-4">
              <div className="flex flex-col space-y-4">
                <a href="#products" className="text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Products</a>
                <a href="#manufacturing" className="text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Manufacturing</a>
                <a href="#about" className="text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#contact" className="text-white hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SEMY URBAN MOBILITY REIMAGINED
            </h1>
            <p className="text-xl text-gray-200 mb-8">
            Reconnect with your childhood
            </p>
            <button 
              onClick={handleExploreClick}
              className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <span>Explore Our Range</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">Zero emissions and sustainable manufacturing processes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Advanced Manufacturing</h3>
              <p className="text-gray-600">State-of-the-art facilities and quality control</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Built to last with premium components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our E-Cycle Range</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                name: "Xpro",
                image: "https://i.ibb.co/JwQgz98W/Screenshot-2025-07-27-092848.png auto=format&fit=crop&q=80",
                battery: "36V 8Ah (LiFePO4)",
                motor: "36V 350W Hub Motor",
                range: "Up to 40KM",
                speed: "28 Kmph",
                price: "₹27,000 incl. tax"
              },
              {
                name: "X Variant",
                image: "https://i.ibb.co/1J9Bmvvc/Screenshot-2025-07-27-092954.png auto=format&fit=crop&q=80",
                battery: "24V 7Ah",
                motor: "24V 350W",
                range: "Up to 35KM",
                speed: "25 Kmph",
                price: "₹25,000 incl. tax"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">{product.name}</h3>
                  
                  {/* Specifications */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Battery:</span>
                      <span className="font-medium">{product.battery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Motor:</span>
                      <span className="font-medium">{product.motor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Range:</span>
                      <span className="font-medium">{product.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Top Speed:</span>
                      <span className="font-medium">{product.speed}</span>
                    </div>
                  </div>

                  {/* Color Options */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Available Colors:</p>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded-full" title="White"></div>
                      <div className="w-6 h-6 bg-blue-400 rounded-full" title="Moon Blue"></div>
                      <div className="w-6 h-6 bg-yellow-400 rounded-full" title="Golden Yellow"></div>
                      <div className="w-6 h-6 bg-gray-600 rounded-full" title="Dark Grey"></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Pedal Assist System</li>
                      <li>• Digital Speedometer</li>
                      <li>• Loud Horn</li>
                      <li>• Bright Front Light</li>
                      <li>• Odometer</li>
                      <li>• Optimized Frame Design</li>
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xl font-bold text-green-600 mb-4">{product.price}</p>
                  <button 
                    onClick={() => handleLearnMoreClick(product.name)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About SEMY</h2>
            <p className="text-lg text-gray-600 mb-8">
            Our company was founded with the primary goal of becoming a trusted partner in the field of design and technology. We manufacture bicycles, e-cycles especially for in-campus drives for MNCs. We make sure the quality of each product we make and the customer satisfaction is our utmost priority than anything. We make the urban mobility easy, green and clean with our products.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                At SEMY, our mission is to empower communities with innovative electric & pedal-powered cycles that offer safe, smart, and sustainable mobility solutions, especially designed for campus and short-distance travel. We aim to make eco-friendly transport accessible, affordable, and enjoyable for everyone
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                Our vision is to lead the future of sustainable urban commuting, shaping a world where mobility is smarter, cleaner, and more connected than ever before.We aim to redefine how campuses and cities move, replacing outdated, polluting transport with innovative, people-friendly solutions.Every journey should be seamless, efficient, and eco-conscious fostering healthier communities and a greener planet.At SEMY, we believe in transforming urban mobility, one smart, efficient, and environmentally responsible ride at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section id="manufacturing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">State-of-the-Art Manufacturing</h2>
              <p className="text-gray-600 mb-8">
                Our manufacturing facility combines cutting-edge technology with skilled craftsmanship to produce the highest quality e-cycles. Every bike is meticulously assembled and tested to ensure perfect performance.
              </p>
              <ul className="space-y-4">
                {[
                  "Advanced robotics and automation",
                  "Rigorous quality control",
                  "Sustainable production methods",
                  "Expert engineering team"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad? auto=format&fit=crop&q=80"
                alt="Manufacturing Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
{/* Contact Section */}
<section id="contact" className="py-6 flex justify-center items-center ">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-start text-left">
      
      {/* Contact Details */}
      <div className="flex flex-col items-start space-y-6 max-w-md">
        <div className="flex items-center space-x-4">
          <Phone className="h-6 w-6 text-blue-600" />
          <a 
            href="tel:+917358110762" 
            className="hover:text-blue-600 transition-colors"
          >
            +91 7358110762
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <a 
            href="mailto:semy.office@gmail.com" 
            className="hover:text-blue-600 transition-colors"
          >
            semy.office@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span>Coimbarore</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-1 mb-6">
                <span className="text-2xl font-bold"></span>
              </div>
             
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#manufacturing" className="text-gray-400 hover:text-white transition-colors">Manufacturing</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#manufacturing" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#products  " className="text-gray-400 hover:text-white transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news and offers</p>
              <div className="flex">
               
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SEMY . All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;