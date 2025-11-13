import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin,
  ArrowRight,
  Clock,
  Send,
  Heart,
  Shield,
  Award,
  BookOpen,
  Users,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Our Staff", path: "/staff" },
    { name: "Admissions", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "News & Events", path: "/news" },
  ];

  const academicLinks = [
    { name: "Curriculum", path: "/academics/curriculum" },
    { name: "Subjects", path: "/academics/subjects" },
    { name: "Extracurricular", path: "/academics/extracurricular" },
    { name: "Academic Calendar", path: "/academics/calendar" },
    { name: "Exam Results", path: "/academics/results" },
    { name: "Library", path: "/academics/library" },
  ];

  const supportLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Parent Portal", path: "/parents" },
    { name: "Student Portal", path: "/students" },
    { name: "Careers", path: "/careers" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/ellenwhitecomplex", 
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/ellenwhitecomplex", 
      label: "Twitter",
      color: "hover:bg-blue-400"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/ellenwhitecomplex", 
      label: "Instagram",
      color: "hover:bg-pink-600"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/ellenwhitecomplex", 
      label: "YouTube",
      color: "hover:bg-red-600"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/school/ellenwhitecomplex", 
      label: "LinkedIn",
      color: "hover:bg-blue-700"
    },
  ];

  const achievements = [
    { number: "98%", label: "BECE Pass Rate" },
    { number: "500+", label: "Students" },
    { number: "50+", label: "Qualified Staff" },
    { number: "19", label: "Years of Excellence" },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-primary-foreground/80">
                Subscribe to our newsletter for the latest news, events, and important announcements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong whitespace-nowrap">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent p-2 sm:p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-strong">
    <img 
      src={schoolLogo} 
      alt="Ellen White Educational Complex Logo"
      className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain" // Responsive sizes
    />
  </div>
              <div>
                <h3 className="font-bold text-2xl">Ellen White</h3>
                <p className="text-primary-foreground/80 font-semibold">Educational Complex</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Committed to academic excellence, character development, and holistic education. 
              Empowering students to become confident, compassionate, and contributing members of society.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-3 bg-primary-foreground/5 rounded-lg">
                  <div className="text-xl font-bold text-accent mb-1">{achievement.number}</div>
                  <div className="text-xs text-primary-foreground/70">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Certified</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                <span>Accredited</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>Safe Environment</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-accent" />
              Academics
            </h4>
            <ul className="space-y-3">
              {academicLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-primary-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              Get In Touch
            </h4>
            
            {/* Contact Info */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block">Ntensere, Ghana</span>
                  <span className="text-sm text-primary-foreground/60">Main Campus</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <a href="tel:+233541136868" className="hover:text-accent transition-colors">
                    (+233) 54 113 6868
                  </a>
                  <div className="text-sm text-primary-foreground/60">Main Line</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <a href="mailto:info@ellenwhitecomplex.edu" className="hover:text-accent transition-colors break-all">
                    info@ellenwhitecomplex.edu
                  </a>
                  <div className="text-sm text-primary-foreground/60">General Inquiries</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <span>Mon - Fri: 7:30 AM - 3:30 PM</span>
                  <div className="text-sm text-primary-foreground/60">Office: 7:00 AM - 4:00 PM</div>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-primary-foreground/10 p-3 rounded-lg hover:text-primary transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/60">
                © {currentYear} Ellen White Educational Complex. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/40 mt-1">
                Empowering Minds, Building Character, Shaping Futures
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-accent transition-colors">
                Sitemap
              </Link>
              <Link to="/accessibility" className="hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-400 fill-red-400" />
              <span>for education</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Bar */}
      <div className="bg-primary-foreground/5 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span>Upcoming: Open House - March 15, 2024</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                size="sm" 
                variant="outline" 
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary text-xs"
                asChild
              >
                <Link to="/calendar">View Calendar</Link>
              </Button>
              <Button 
                size="sm" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs"
                asChild
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;