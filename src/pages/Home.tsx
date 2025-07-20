import { Button } from "@/components/ui/button";
import { Play, Camera, Users, Film, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  const quickActions = [
    { icon: Film, label: "Watch Films", desc: "Explore our documentary collection" },
    { icon: Camera, label: "Learn Filmmaking", desc: "Join our workshops" },
    { icon: Users, label: "Community Stories", desc: "Share your narrative" },
    { icon: Heart, label: "Support Us", desc: "Help us grow" }
  ];

  const features = [
    { title: "Free Film Education", desc: "Learn from industry professionals at no cost" },
    { title: "Equipment Access", desc: "Borrow cameras and editing tools for your projects" },
    { title: "Community Screenings", desc: "Regular film screenings in local neighborhoods" },
    { title: "Mentorship Program", desc: "One-on-one guidance from experienced filmmakers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Film Strip Header */}
      <div className="h-8 bg-film-strip border-b-4 border-primary"></div>
      
      {/* Hero Section - Hand-drawn inspired */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Sketch-like decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border-4 border-primary transform rotate-12 opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 border-4 border-primary transform -rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-primary rounded-full opacity-15"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Hand-drawn style logo */}
          <div className="mb-12">
            <div className="inline-block p-8 border-4 border-primary shadow-bold bg-card transform -rotate-1">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
                FILM
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
                FOR
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider">
                US
              </h1>
            </div>
          </div>

          {/* Stick figure inspired mission */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-4 border-primary rounded-full flex items-center justify-center bg-card shadow-sketch">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">EDUCATE</h3>
              <p className="text-muted-foreground">Teaching film literacy to mass people</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-4 border-primary rounded-full flex items-center justify-center bg-card shadow-sketch">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">EMPOWER</h3>
              <p className="text-muted-foreground">Supporting underprivileged filmmakers</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 border-4 border-primary rounded-full flex items-center justify-center bg-card shadow-sketch">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">AMPLIFY</h3>
              <p className="text-muted-foreground">Telling diverse community stories</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4 mb-16">
            <Button size="lg" className="shadow-bold transform hover:scale-105 transition-all">
              <Play className="mr-2 h-5 w-5" />
              Start Your Film Journey
            </Button>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of storytellers, filmmakers, and cinema enthusiasts. 
              Together, we're democratizing film education and amplifying diverse voices.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get Started Today</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {quickActions.map((action) => (
              <Card key={action.label} className="hover:shadow-bold transition-all transform hover:-rotate-1 cursor-pointer border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-primary rounded-full flex items-center justify-center bg-background">
                    <action.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold mb-2">{action.label}</h3>
                  <p className="text-sm text-muted-foreground">{action.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Film For Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-8 h-8 border-2 border-primary bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats with film strip design */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="border-4 border-primary bg-card p-8 shadow-bold transform rotate-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-sm font-semibold">Films Created</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm font-semibold">People Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm font-semibold">Communities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12+</div>
                <div className="text-sm font-semibold">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Strip Footer */}
      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default Home;