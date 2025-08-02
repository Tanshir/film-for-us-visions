
import { Button } from "@/components/ui/button";
import { Play, Users } from "lucide-react";
import heroImage from "@/assets/hero-cinema.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Film For Us - Independent Cinema" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Film Strip Animation */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-film opacity-30 animate-film-roll"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-film opacity-30 animate-film-roll" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-cinematic-entrance">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <img 
              src="/lovable-uploads/2fe75908-8a91-4b15-808a-f72594532869.png" 
              alt="Film For Us Logo" 
              className="w-16 h-16 object-contain bg-white/90 rounded-lg p-2 shadow-glow-spotlight"
            />
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
              FILM FOR US
            </h1>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 shadow-glow-spotlight"></div>
        </div>

        {/* Mission Statement */}
        <h2 className="text-2xl md:text-4xl font-light mb-6 leading-relaxed">
          Socializing Films Among
          <span className="block text-primary font-semibold animate-spotlight">
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
            className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500 text-lg px-8 py-6"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Our Stories
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            className="border-primary/50 hover:border-primary hover:shadow-glow-accent transition-all duration-500 text-lg px-8 py-6"
          >
            <Users className="mr-2 h-5 w-5" />
            Join Our Mission
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Films Produced</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">People Educated</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Communities Reached</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
