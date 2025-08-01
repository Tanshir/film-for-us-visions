
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Film, Users, Award } from "lucide-react";

const OurFilms = () => {
  const films = [
    {
      title: "A Friendship Deal",
      videoUrl: "https://youtu.be/1eRHQS9TROs?si=ZxZOs9SoKj4VFaVS",
      description: "A film about a friendship of a different kind, a friendship between a father and his son. A Father, afraid of his wife, is trying to prove himself not guilty of smoking in front of his son who soon explored a cigarette packet from his pocket and threatening the father to disclose the matter to his wife.",
      director: "Masudur Rahman",
      producer: "Sadia Afrin",
      type: "Short Film",
      year: "2024"
    },
    {
      title: "Circle of Desire",
      videoUrl: "https://youtu.be/_OBHNtf-_JM?si=YYg9WQkrf3ZTG6Rk",
      description: "'Circle of Desire 22' is the story of the reality of common men's civic life in the socio-economic context told through the realities of an ordinary film director.",
      director: "Masudur Rahman",
      producer: "Sadia Afrin",
      type: "Short Film",
      year: "2024"
    },
    {
      title: "Unrecognized",
      videoUrl: "#",
      description: "The documentary, 'Unrecognized' sheds light on the undeserving anonymity of a lionhearted martyred freedom fighter in the independence war of Bangladesh 1971 and the negligence towards him as well as brings, in a heartfelt manner, into light the tragic experiences of his unrecognized widow paved by the war.",
      director: "Masudur Rahman",
      producer: "Sadia Afrin",
      type: "Documentary",
      year: "2024"
    },
    {
      title: "The Scrap",
      videoUrl: "#",
      description: "The Scrap is a story about a ship that was destroyed during Bangladesh's 1971 War of Independence and was salvaged after being under water for 37 years, at the same time it is the story of the endless struggle to survive from the selfishness and negligence of different groups of people and from the procrastination and irresponsible attitude of the administration in making decisions.",
      director: "Masudur Rahman",
      producer: "Sadia Afrin",
      type: "Documentary",
      year: "2024"
    }
  ];

  const stats = [
    { number: "4", label: "Films Produced", icon: Film },
    { number: "2", label: "Directors", icon: Users },
    { number: "100K+", label: "Total Views", icon: Play },
    { number: "Multiple", label: "Festivals", icon: Award }
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
              <div className="w-32 h-6 border-2 border-primary bg-card shadow-sketch transform rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Our <span className="bg-primary text-primary-foreground px-4 py-2 transform -rotate-1 inline-block">Films</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our collection of powerful documentaries and short films that capture 
              authentic stories from Bangladesh and beyond. Each film represents our commitment 
              to amplifying unheard voices and preserving important narratives.
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <Card className="border-4 border-primary shadow-bold transform rotate-1">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto flex items-center justify-center bg-background">
                        <stat.icon className="w-8 h-8" />
                      </div>
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Films Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {films.map((film, idx) => (
              <Card 
                key={film.title}
                className={`border-2 border-primary hover:shadow-bold transition-all transform ${
                  idx % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}
              >
                <CardContent className="p-6">
                  {/* Film Thumbnail/Preview */}
                  <div className="relative bg-muted rounded border-2 border-primary mb-4 p-8 text-center min-h-[200px] flex items-center justify-center">
                    <div className="text-6xl mb-2">🎬</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/80">
                      {film.videoUrl !== "#" ? (
                        <Button 
                          size="lg" 
                          className="rounded-full"
                          onClick={() => window.open(film.videoUrl, '_blank')}
                        >
                          <Play className="w-6 h-6 mr-2" />
                          Watch Film
                        </Button>
                      ) : (
                        <Button size="lg" variant="secondary" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Film Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded">
                        {film.type}
                      </span>
                      <span className="text-xs text-muted-foreground">{film.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold">{film.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {film.description}
                    </p>
                    
                    <div className="space-y-2 text-sm border-t pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold">Director:</span>
                        <span>{film.director}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Producer:</span>
                        <span>{film.producer}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      {film.videoUrl !== "#" ? (
                        <>
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => window.open(film.videoUrl, '_blank')}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Now
                          </Button>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={() => window.open(film.videoUrl, '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" variant="secondary" className="flex-1" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Support Independent Filmmaking</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Help us continue creating powerful documentaries that preserve important stories 
                  and amplify voices from marginalized communities. Your support makes these films possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-sketch hover:shadow-bold">
                    Support Our Work
                  </Button>
                  <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                    Subscribe for Updates
                  </Button>
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

export default OurFilms;
