import Link from "next/link"
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8"> {/* reduced py-8 */}
        <div className="grid md:grid-cols-4 gap-6"> {/* reduced gap */}
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">Tech Dynamos</span>
            </div>
            <p className="text-white/80 text-sm mb-3">
              Transforming businesses through innovative digital solutions. Your
              partner for e-commerce and management systems.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-accent">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Solutions", href: "/solotions" },
                { label: "Login", href: "/login" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-accent">Our Services</h3>
            <ul className="space-y-1 text-sm">
              {[
                "E-commerce Websites",
                "School Management",
                "College Systems",
                "University Platforms",
                "Madrasa Management",
              ].map((label, i) => (
                <li key={i}>
                  <Link
                    href="/education"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-accent">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-white/80">syedbabarali640@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-white/80">+92 3052374486</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-white/80">123 Tech Street, Digital City Karachi</span>
              </div>
            </div>
            <div className="mt-3 text-sm text-white/60">
              <strong>Working Hours:</strong><br />
              Mon - Fri: 9:00 AM - 6:00 PM<br />
              Sat: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Tech Dynamos. All rights reserved. |
          <Link href="/privacy" className="hover:text-white ml-1">
            Privacy Policy
          </Link>{" "}
          |
          <Link href="/terms" className="hover:text-white ml-1">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}







// import Link from "next/link"
// import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <Zap className="w-8 h-8 text-blue-400" />
//               <span className="text-2xl font-bold">Tech Dynamos</span>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Transforming businesses through innovative digital solutions. Your partner for e-commerce and management
//               systems.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
//               <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
//               <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
//               <Instagram className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
//                   Our Services
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/solotions" className="text-gray-300 hover:text-white transition-colors">
//                   Solutions
//                 </Link>
//               </li>
//                <li>
//                 <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
//                   Login
//                 </Link>
//               </li>
              
//               {/*
//               <li>
//                 <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
//                   Blog
//                 </Link>
//               </li> */}
//               <li>
//                 <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Our Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/ecommerce" className="text-gray-300 hover:text-white transition-colors">
//                   E-commerce Websites
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
//                   School Management
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
//                   College Systems
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
//                   University Platforms
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
//                   Madrasa Management
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">syedbabarali640@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-3">
              
//                 <Phone className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">+92 3052374486</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <MapPin className="w-5 h-5 text-blue-400" />
//                 <span className="text-gray-300">123 Tech Street, Digital City Karachi</span>
//               </div>
//             </div>
//             <div className="mt-4">
//               <p className="text-sm text-gray-400">
//                 <strong>Working Hours:</strong>
//                 <br />
//                 Mon - Fri: 9:00 AM - 6:00 PM
//                 <br />
//                 Sat: 10:00 AM - 4:00 PM
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © {new Date().getFullYear()} Tech Dynamos. All rights reserved. |
//             <Link href="/privacy" className="hover:text-white ml-1">
//               Privacy Policy
//             </Link>{" "}
//             |
//             <Link href="/terms" className="hover:text-white ml-1">
//               Terms of Service
//             </Link>
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
