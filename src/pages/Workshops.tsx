
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Film, Play, ArrowRight } from "lucide-react";

const Workshops = () => {
  const workshops = [
    {
      name: "Asian University for Women",
      type: "In-Person Workshop",
      location: "Chittagong, Bangladesh",
      filmsCreated: 6,
      description: "Empowering women students to tell their stories through film"
    },
    {
      name: "Port City International University", 
      type: "In-Person Workshop",
      location: "Chittagong, Bangladesh",
      filmsCreated: 5,
      description: "Building filmmaking skills among university students"
    },
    {
      name: "Online Workshop",
      type: "Virtual Session",
      location: "Global Participants",
      filmsCreated: 4,
      description: "Connecting citizen filmmakers across borders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Film Strip Header */}
      <div className="h-8 bg-film-strip border-b-4 border-primary"></div>
      
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="w-40 h-6 border-2 border-primary bg-card shadow-sketch transform -rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Hands-on <span className="bg-primary text-primary-foreground px-4 py-2 transform rotate-1 inline-block">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We have successfully conducted three hands-on workshops, empowering participants 
              to create impactful films that capture unique stories from their communities.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="mb-16">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">3</div>
                    <div className="text-lg font-semibold">Workshops Conducted</div>
                    <div className="text-sm text-muted-foreground">Across institutions and online</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">15+</div>
                    <div className="text-lg font-semibold">Films Created</div>
                    <div className="text-sm text-muted-foreground">Impactful short documentaries</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">100%</div>
                    <div className="text-lg font-semibold">Unique Stories</div>
                    <div className="text-sm text-muted-foreground">Struggles and voices from the ground</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Workshop Details */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Workshop Locations</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {workshops.map((workshop, idx) => (
                <Card 
                  key={workshop.name}
                  className={`border-4 border-primary shadow-bold hover:shadow-sketch transition-all transform ${
                    idx % 2 === 0 ? 'rotate-1 hover:-rotate-1' : '-rotate-1 hover:rotate-1'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 border-4 border-primary rounded-full flex items-center justify-center bg-background">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">{workshop.name}</CardTitle>
                        <p className="text-sm text-primary font-semibold">{workshop.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{workshop.location}</span>
                    </div>
                    
                    <p className="text-sm leading-relaxed">{workshop.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="border-t-2 border-primary pt-4">
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <Film className="w-5 h-5" />
                        <span className="font-bold text-lg">{workshop.filmsCreated} Films Created</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Films Section */}
          <div className="mb-20">
            <Card className="border-4 border-primary shadow-bold bg-muted/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Films from the Workshops</CardTitle>
                <p className="text-center text-muted-foreground">
                  Each film captures unique stories, struggles, and voices from the ground — 
                  personal, political, poetic, and powerful.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto border-4 border-primary rounded-full flex items-center justify-center bg-background">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold">Personal Stories</h4>
                    <p className="text-sm text-muted-foreground">Individual journeys and experiences</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto border-4 border-primary rounded-full flex items-center justify-center bg-background">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold">Political Voices</h4>
                    <p className="text-sm text-muted-foreground">Challenging dominant narratives</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-16 h-16 mx-auto border-4 border-primary rounded-full flex items-center justify-center bg-background">
                      <Film className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold">Poetic Expression</h4>
                    <p className="text-sm text-muted-foreground">Artistic and creative storytelling</p>
                  </div>
                </div>
                <Button size="lg" className="shadow-sketch hover:shadow-bold">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Workshop Films
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform rotate-1 overflow-hidden">
              <CardContent className="p-12">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Join Our Next Workshop</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Ready to become a citizen filmmaker? Our workshops provide training, mentorship, 
                    and tools to help you document your reality and share your story.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="shadow-sketch hover:shadow-bold">
                      <Users className="mr-2 h-5 w-5" />
                      Register for Workshop
                    </Button>
                    <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Learn About Citizen Filmmaking
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Film Strip Footer */}
      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default Workshops;
