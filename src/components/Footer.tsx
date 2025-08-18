import {
  Instagram,
  Facebook,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300 text-sm mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        {/* LEFT COLUMN */}
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">LANDAS</h2>
          <p>CEO: Jung Jin Jang</p>
          <p>Business Registration No: 201-86-15245</p>
          <p>Address: 6F, 139 Dasan-ro, Jung-gu, Seoul, South Korea (Landas Building)</p>
          <p>Mail-Order License: Jung-gu No. 0755</p>
          <p>Data Protection Officer: Choi Jumin</p>
          <p className="text-xs text-gray-500 mt-3">
            Copyright © www.landsbizmall.com. All rights reserved.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-3">
          <div>
            <p className="text-sm text-gray-400">Customer Service & Support</p>
            <p className="text-2xl text-white font-bold">1661-6244</p>
          </div>
          <p>Weekdays: 09:00 AM – 06:00 PM</p>
          <p>Standard Support: Basic Inquiry</p>
          <p>Bank Account: 213-111127-04-035</p>
          <p>Account Holder: Landas Co., Ltd.</p>
         </div>
          {/* Social Media Icons */}
          <div className="gap-4 mt-3">


          {/* Policy Links */}
          <div className="flex justify-end gap-4 text-xs mt-2 text-gray-400">
            <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400">Terms of Service</a>
              </div>
            <div className='flex'>

               <a href="#" aria-label="Instagram" className="hover:text-yellow-400">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-yellow-400">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-yellow-400">
              <Youtube size={20} />
            </a>
            </div>
          
          </div>
        </div>
    </footer>
  );
};

export default Footer;
