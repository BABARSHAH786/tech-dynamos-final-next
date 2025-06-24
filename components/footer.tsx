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
  Youtube,
  X,
} from "lucide-react"



export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-2 py-4"> {/* reduced py-8 */}
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
            {/* <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer"  />
              <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
            </div> */}


            {/* new */}
            <div className="flex space-x-3">
  <Facebook className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
  <X className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
  <a href="https://www.linkedin.com/in/tech-dynamos-708336371/" target="_blank" rel="noopener noreferrer">
    <Linkedin className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
  </a>
  {/*linkedin link techdynamos  https://www.linkedin.com/in/tech-dynamos-708336371/ */}
  <a href="https://www.youtube.com/@TechDynamos-g5y2y" target="_blank" rel="noopener noreferrer">
    <Youtube className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" />
  </a>
  {/* <Instagram className="w-5 h-5 text-white/60 hover:text-white cursor-pointer" /> */}
    

</div>

          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-3 text-accent">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                // { label: "Solutions", href: "/solotions" },
                // { label: "Login", href: "/login" },
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
                <a
                  href="mailto:techdynamoss@gmail.com"
                  className="text-white/80 hover:underline"
                >
                  techdynamoss@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a
                  href="https://wa.me/923173955659"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:underline"
                >
                  +92 317 3955659
                </a>
              </div>
              
            </div>
            <div className="mt-3 text-sm text-white/60">
              <strong>Working Hours:</strong><br />
              Mon - Fri: 9:00 AM - 6:00 PM<br />
              Sat: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-4 pt-4 text-center text-xs text-white/60">
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





