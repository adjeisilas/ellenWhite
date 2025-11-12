import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Ellen White</h3>
                <p className="text-sm text-primary-foreground/80">Educational Complex</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Committed to academic excellence, character development, and holistic education for every student.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Our Staff
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>123 Education Ave, Learning District, ED 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span>info@ellenwhitecomplex.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-accent hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60 mt-6">
              School Hours: Mon-Fri, 7:30 AM - 3:30 PM
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Ellen White Educational Complex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
