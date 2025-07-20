import { Button } from "@/components/ui/button";
import { Play, Camera, Users } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Film For Us - Independent Cinema" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
                FILM FOR US
              </h1>
            </div>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Mission Statement */}
          <h2 className="text-2xl md:text-4xl font-light mb-6 leading-relaxed">
            Socializing Films Among
            <span className="block text-primary font-semibold">
              Mass People
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Educating communities through cinema, empowering underprivileged voices, 
            and telling diverse stories through digital visual media.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Stories
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="text-lg px-8 py-6"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Mission
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Films Produced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">People Educated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Communities Reached</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;