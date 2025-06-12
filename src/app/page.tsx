import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
             {/* Background decorative pattern */}
       <div className="absolute inset-0 pointer-events-none opacity-20">
         <Image 
           src="/illustrations/decorative-pattern.svg" 
           alt="" 
           width={300} 
           height={100} 
           className="absolute top-20 left-10 rotate-12" 
         />
         <Image 
           src="/illustrations/decorative-pattern.svg" 
           alt="" 
           width={300} 
           height={100} 
           className="absolute top-96 right-10 -rotate-12" 
         />
         <Image 
           src="/illustrations/decorative-pattern.svg" 
           alt="" 
           width={300} 
           height={100} 
           className="absolute bottom-96 left-1/4 rotate-6" 
         />
         <Image 
           src="/illustrations/trees-pattern.svg" 
           alt="" 
           width={250} 
           height={120} 
           className="absolute top-1/2 left-5 rotate-3 opacity-15" 
         />
         <Image 
           src="/illustrations/mountain-silhouette.svg" 
           alt="" 
           width={400} 
           height={80} 
           className="absolute bottom-1/3 right-5 -rotate-6 opacity-10" 
         />
       </div>

      {/* Navigation */}
      <nav className="bg-green-900 shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="The Backpack Market Logo" width={50} height={20} className="mr-3" />
              <div className="text-2xl font-bold text-amber-100">The Backpack Market</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-amber-100 hover:text-amber-300 transition-colors">About</a>
              <a href="#vendor-spots" className="text-amber-100 hover:text-amber-300 transition-colors">Vendor Spots</a>
              <a href="#vendor-directory" className="text-amber-100 hover:text-amber-300 transition-colors">Vendor Directory</a>
              <a href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 relative">
            Welcome to <span className="text-orange-600">The Backpack Market</span>
                         {/* Decorative elements around title */}
             <Image 
               src="/illustrations/backpack-doodle.svg" 
               alt="" 
               width={80} 
               height={100} 
               className="absolute -right-16 -top-8 hidden lg:block rotate-12 opacity-60"
             />
             <Image 
               src="/illustrations/hiking-boots.svg" 
               alt="" 
               width={70} 
               height={90} 
               className="absolute -left-20 -bottom-4 hidden lg:block -rotate-15 opacity-50"
             />
          </h1>
          <p className="text-xl text-green-800 mb-8 max-w-3xl mx-auto">
            A vibrant local popup marketplace at new locations every month, where community/student vendors come together 
            to share their unique goods, crafts, and services with neighbors and visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#vendor-spots" className="bg-green-700 hover:bg-green-800 text-amber-50 px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg transform hover:scale-105">
              Reserve Your Spot
            </a>
            <a href="#vendor-directory" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg transform hover:scale-105">
              View Our Vendors
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-r from-green-100 to-emerald-50 relative">
                 {/* Community hands illustration */}
         <div className="absolute top-8 right-8 hidden lg:block opacity-60">
           <Image 
             src="/illustrations/community-hands.svg" 
             alt="" 
             width={200} 
             height={150} 
             className="rotate-12"
           />
         </div>
         <div className="absolute bottom-8 left-8 hidden lg:block opacity-40">
           <Image 
             src="/illustrations/camping-tent.svg" 
             alt="" 
             width={150} 
             height={120} 
             className="-rotate-6"
           />
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">About The Backpack Market</h2>
            <p className="text-lg text-green-800 max-w-3xl mx-auto">
              Every month, new locations transform into a bustling marketplace where local entrepreneurs, 
              artisans, and vendors showcase their best products in a family-friendly environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform">
                             <div className="flex justify-center mb-4">
                 <Image 
                   src="/illustrations/icon-vendors.svg" 
                   alt="Everchanging Vendors" 
                   width={80} 
                   height={80} 
                   className="drop-shadow-md"
                 />
               </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Everchanging Vendors</h3>
              <p className="text-green-700">We bring in a variety of vendors from different backgrounds and interests to showcase their products.</p>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform">
                             <div className="flex justify-center mb-4">
                 <Image 
                   src="/illustrations/icon-community.svg" 
                   alt="Community Focused" 
                   width={80} 
                   height={80} 
                   className="drop-shadow-md"
                 />
               </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Community Focused</h3>
              <p className="text-green-700">Supporting local businesses and bringing the community together through commerce and connection.</p>
            </div>
            
            <div className="text-center transform hover:scale-105 transition-transform">
                             <div className="flex justify-center mb-4">
                 <Image 
                   src="/illustrations/icon-unique-finds.svg" 
                   alt="Unique Finds" 
                   width={80} 
                   height={80} 
                   className="drop-shadow-md"
                 />
               </div>
              <h3 className="text-xl font-semibold mb-2 text-green-900">Unique Finds</h3>
              <p className="text-green-700">Discover one-of-a-kind products, handmade crafts, and local specialties you won&apos;t find elsewhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Spots Section */}
      <section id="vendor-spots" className="py-16 bg-gradient-to-r from-amber-50 to-yellow-50 relative">
                 {/* Decorative backpack illustration */}
         <div className="absolute top-8 left-8 hidden lg:block opacity-40">
           <Image 
             src="/illustrations/backpack-doodle.svg" 
             alt="" 
             width={120} 
             height={150} 
             className="-rotate-12"
           />
         </div>
         <div className="absolute bottom-12 right-12 hidden lg:block opacity-30">
           <Image 
             src="/illustrations/market-stall.svg" 
             alt="" 
             width={180} 
             height={140} 
             className="rotate-6"
           />
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Reserve Your Vendor Spot</h2>
            <p className="text-lg text-green-800 max-w-3xl mx-auto">
              Join our community of local entrepreneurs! Secure your space at Porter Park and start connecting with customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold text-green-900 mb-6">Vendor Spot Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-3 text-2xl">📍</span>
                    <div>
                      <h4 className="font-semibold text-green-800">Prime Location</h4>
                      <p className="text-green-700">High-traffic spots at Porter Park with excellent visibility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-orange-600 mr-3 text-2xl">💡</span>
                    <div>
                      <h4 className="font-semibold text-green-800">Marketing Support</h4>
                      <p className="text-green-700">Promotion through our social media and community channels</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Apply for a Vendor Spot</h3>
              <p className="text-green-700 mb-6">
                Ready to join The Backpack Market? Fill out our vendor application form to get started. 
                We&apos;ll review your application and get back to you within 2-3 business days.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-6 border-2 border-dashed border-green-200">
                <h4 className="font-semibold text-green-800 mb-3">What to expect:</h4>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Quick and easy application process
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Response within 2-3 business days
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Spot assignment based on availability
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://docs.google.com/forms/d/1e-Q_KUQE6lSGl7Zxtr1n9xS2kkbsdS5Dzl7i0sRI8zk/viewform?edit_requested=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-green-700 hover:bg-green-800 text-amber-50 py-4 px-6 rounded-lg font-semibold transition-all shadow-lg inline-block text-center transform hover:scale-105"
              >
                Apply Now - Google Form
              </a>
              
              <p className="text-sm text-green-600 mt-4 text-center">
                Questions? Email us at <a href="mailto:hello@thebackpackmarket.com" className="underline hover:text-green-800 font-semibold">hello@thebackpackmarket.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Directory Section */}
      <section id="vendor-directory" className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 relative">
                 {/* Floating decorative elements */}
         <div className="absolute top-12 right-12 hidden lg:block opacity-30">
           <Image 
             src="/illustrations/decorative-pattern.svg" 
             alt="" 
             width={200} 
             height={80} 
             className="rotate-45"
           />
         </div>
         <div className="absolute bottom-16 left-16 hidden lg:block opacity-25">
           <Image 
             src="/illustrations/vendor-cart.svg" 
             alt="" 
             width={160} 
             height={120} 
             className="-rotate-12"
           />
         </div>
         <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 hidden lg:block opacity-15">
           <Image 
             src="/illustrations/circle-pattern.svg" 
             alt="" 
             width={300} 
             height={300} 
             className="rotate-45"
           />
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Our Vendor Directory</h2>
            <p className="text-lg text-green-800 max-w-3xl mx-auto">
              Connect with our amazing local vendors! Follow them on social media to stay updated on their latest products and market appearances.
            </p>
          </div>

          {/* Sample Vendor Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-green-200 transform hover:scale-105 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-amber-400 to-orange-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-white">🍯</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Golden Hive Honey</h3>
              <p className="text-green-700 mb-4">Local artisanal honey and bee products</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-green-700 hover:text-green-900 transition-colors transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">🌐</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-green-200 transform hover:scale-105 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-white">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Handmade Soaps Co.</h3>
              <p className="text-green-700 mb-4">Natural organic soaps and skincare</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-green-700 hover:text-green-900 transition-colors transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">🌐</span>
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-green-200 transform hover:scale-105 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-white">🧶</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-900">Cozy Crafts</h3>
              <p className="text-green-700 mb-4">Hand-knitted scarves, hats, and mittens</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-green-700 hover:text-green-900 transition-colors transform hover:scale-110">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-orange-600 hover:text-orange-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">📷</span>
                </a>
                <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors transform hover:scale-110">
                  <span className="text-xl">🌐</span>
                </a>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-stone-100 to-amber-50 relative">
                 {/* Decorative illustrations around contact section */}
         <div className="absolute top-4 left-4 hidden lg:block opacity-40">
           <Image 
             src="/illustrations/community-hands.svg" 
             alt="" 
             width={150} 
             height={100} 
             className="-rotate-6"
           />
         </div>
         <div className="absolute bottom-4 right-4 hidden lg:block opacity-40">
           <Image 
             src="/illustrations/backpack-doodle.svg" 
             alt="" 
             width={100} 
             height={125} 
             className="rotate-12"
           />
         </div>
         <div className="absolute top-1/2 right-8 hidden lg:block opacity-20">
           <Image 
             src="/illustrations/compass.svg" 
             alt="" 
             width={80} 
             height={80} 
             className="rotate-45"
           />
         </div>
         <div className="absolute bottom-1/3 left-8 hidden lg:block opacity-25">
           <Image 
             src="/illustrations/campfire.svg" 
             alt="" 
             width={100} 
             height={120} 
             className="-rotate-6"
           />
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-green-800 max-w-3xl mx-auto">
              Have questions about vendor spots, our directory, or The Backpack Market? 
              We&apos;d love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Email Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">📧</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Email</h4>
                <a href="mailto:hello@thebackpackmarket.com" className="text-green-700 hover:text-green-900 transition-colors break-all font-medium">
                  hello@thebackpackmarket.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Phone</h4>
                <a href="tel:+15551234567" className="text-green-700 hover:text-green-900 transition-colors font-medium">
                  (555) 123-4567
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-yellow-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Location</h4>
                <p className="text-green-700 text-sm">
                  Check Our Socials<br />
                  Every Month for New Locations
                </p>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-green-200 text-center transform hover:scale-105 transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">🕒</span>
                </div>
                <h4 className="font-semibold text-green-800 mb-2">Market Hours</h4>
                <p className="text-green-700 text-sm">
                  Check Socials for Dates and Times<br />
                </p>
              </div>
            </div>

            {/* Customer Feedback Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200 text-center mb-8 transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-green-800">What Would You Like to See?</h4>
              <p className="text-green-700 mb-6 max-w-2xl mx-auto">
                Help us plan future markets! Tell us what types of vendors, products, or experiences 
                you&apos;d love to see at The Backpack Market.
              </p>
              <a 
                href="https://docs.google.com/forms/d/1Ub7ZSSyMdGOopspaVXJvc0ROycuXY2BCjNb4G-kV6D8/viewform?edit_requested=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all shadow-lg inline-block transform hover:scale-105"
              >
                Share Your Ideas
              </a>
            </div>

            {/* Social Media Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200 text-center transform hover:scale-105 transition-all">
              <h4 className="text-xl font-semibold mb-6 text-green-800">Connect With Us</h4>
              <div className="flex justify-center items-center space-x-8">
                <a href="#" className="group flex flex-col items-center transition-transform hover:scale-110">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow">
                    <span className="text-xl">📘</span>
                  </div>
                  <span className="text-green-700 hover:text-green-900 transition-colors text-sm font-medium">Facebook</span>
                </a>
                
                <a href="#" className="group flex flex-col items-center transition-transform hover:scale-110">
                  <div className="bg-gradient-to-br from-pink-100 to-orange-200 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow">
                    <span className="text-xl">📷</span>
                  </div>
                  <span className="text-orange-600 hover:text-orange-800 transition-colors text-sm font-medium">Instagram</span>
                </a>
                
                <a href="#" className="group flex flex-col items-center transition-transform hover:scale-110">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-200 w-12 h-12 rounded-full flex items-center justify-center mb-2 group-hover:shadow-md transition-shadow">
                    <span className="text-xl">🐦</span>
                  </div>
                  <span className="text-amber-600 hover:text-amber-800 transition-colors text-sm font-medium">Twitter</span>
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-green-200">
                <p className="text-green-600 text-sm">
                  Follow us for market updates, vendor spotlights, and community events!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-amber-100 py-12 relative overflow-hidden">
                 {/* Decorative footer pattern */}
         <div className="absolute inset-0 pointer-events-none opacity-10">
           <Image 
             src="/illustrations/decorative-pattern.svg" 
             alt="" 
             width={300} 
             height={100} 
             className="absolute bottom-10 left-10" 
           />
           <Image 
             src="/illustrations/decorative-pattern.svg" 
             alt="" 
             width={300} 
             height={100} 
             className="absolute top-10 right-10 rotate-180" 
           />
           <Image 
             src="/illustrations/pine-trees.svg" 
             alt="" 
             width={200} 
             height={150} 
             className="absolute bottom-5 right-1/3 opacity-15" 
           />
           <Image 
             src="/illustrations/hiking-trail.svg" 
             alt="" 
             width={250} 
             height={80} 
             className="absolute top-1/2 left-1/4 rotate-12 opacity-8" 
           />
         </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/logo.svg" alt="The Backpack Market Logo" width={40} height={16} className="mr-3" />
                <div className="text-2xl font-bold text-amber-100">The Backpack Market</div>
              </div>
              <p className="text-green-200 mb-4">
                Bringing the community together through local commerce.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-amber-300 transition-colors transform hover:scale-110">Facebook</a>
                <a href="#" className="text-green-200 hover:text-amber-300 transition-colors transform hover:scale-110">Instagram</a>
                <a href="#" className="text-green-200 hover:text-amber-300 transition-colors transform hover:scale-110">Twitter</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-green-200 hover:text-amber-300 transition-colors">About Us</a></li>
                <li><a href="#vendor-spots" className="text-green-200 hover:text-amber-300 transition-colors">Vendor Spots</a></li>
                <li><a href="#vendor-directory" className="text-green-200 hover:text-amber-300 transition-colors">Vendor Directory</a></li>
                <li><a href="#contact" className="text-green-200 hover:text-amber-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-amber-100">Market Info</h4>
              <p className="text-green-200 mb-2">Check Our Socials for New Locations, Dates, and Times Every Month </p>
              <p className="text-green-200">hello@thebackpackmarket.com</p>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2025 The Backpack Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
