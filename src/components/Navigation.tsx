
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Film, Users, Calendar, Play, Camera } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const learnItems = [
  { name: "Programs", href: "/programs", icon: Users },
  { name: "Workshops", href: "/workshops", icon: Play },
  { name: "Citizen Filmmaking", href: "/citizen-filmmaking", icon: Camera },
];

const watchItems = [
  { name: "Our Films", href: "/our-films", icon: Film },
  { name: "Projects", href: "/projects", icon: Users },
];

const eventsItems = [
  { name: "Events", href: "/events", icon: Calendar },
  { name: "CIAWFF 2025", href: "/ciawff-2025", icon: Film },
];

const singleItems = [
  { name: "Contact", href: "/contact" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/2fe75908-8a91-4b15-808a-f72594532869.png" 
              alt="Film For Us Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-xl font-bold tracking-wider">FILM FOR US</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Single Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}

              {/* Learn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group flex items-center gap-1">
                  Learn
                  <ChevronDown className="h-4 w-4" />
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full`}></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border shadow-lg z-50 min-w-48">
                  {learnItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Watch Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group flex items-center gap-1">
                  Watch
                  <ChevronDown className="h-4 w-4" />
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full`}></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border shadow-lg z-50 min-w-48">
                  {watchItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Events Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group flex items-center gap-1">
                  Events
                  <ChevronDown className="h-4 w-4" />
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full`}></span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border shadow-lg z-50 min-w-48">
                  {eventsItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-2 px-4 py-2 hover:bg-muted transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Remaining Single Items */}
              {singleItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-primary transition-colors duration-300 font-medium relative group ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button>
              Get Involved
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
            {/* Single Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Learn Section */}
            <div className="pt-2">
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Learn</div>
              {learnItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Watch Section */}
            <div className="pt-2">
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Watch</div>
              {watchItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Events Section */}
            <div className="pt-2">
              <div className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Events</div>
              {eventsItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-foreground hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact */}
            {singleItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-primary' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-3 py-2">
              <Button className="w-full">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
