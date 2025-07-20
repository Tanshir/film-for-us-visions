import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Film Education", href: "#programs" },
    { name: "Community Storytelling", href: "#programs" },
    { name: "Youth Outreach", href: "#programs" },
    { name: "Support Program", href: "#programs" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-spotlight flex items-center justify-center shadow-glow-spotlight">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-wider">FILM FOR US</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Democratizing film education and empowering communities through 
              the transformative power of storytelling and cinema.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:shadow-glow-spotlight flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm">hello@filmforus.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-sm">123 Creative Avenue<br />Film District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Film For Us. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;