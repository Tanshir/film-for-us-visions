import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Trophy, Users, FileText, Clock, Film } from "lucide-react";
// Featured image will be added when available

const Ciawff2025 = () => {
  const categories = [
    { title: "Best Fiction", description: "Fictional narratives up to 20 minutes" },
    { title: "Best Documentary", description: "Documentary films up to 20 minutes" }
  ];

  const rules = [
    "Only women Filmmakers are invited to submit their original work",
    "Films produced after January 1, 2024 are eligible for submission",
    "Film is not published in any platform yet",
    "No submission fee",
    "CIAWFF retains the right to accept or decline any film, for whatever reason, without any explanation",
    "Applicants admit that they are authorized to submit the film, being the rights-holders or authorized representatives",
    "CIAWFF receives exhibition copy in high resolution MP4 file via a downloadable link",
    "All films must have English subtitles",
    "The festival does not pay screening fees for selected films",
    "CIAWFF holds the right to use the selected films for trailers and publicity usage"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Film Strip Header */}
      <div className="h-8 bg-film-strip border-b-4 border-primary"></div>
      
      {/* Hero Section with Featured Image */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Chittagong International All Women Film Festival 2025
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                The first-of-its-kind film festival in Bangladesh dedicated to showcasing and 
                celebrating the works of female filmmakers.
              </p>
              
              {/* Key Info Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="border-2 shadow-sketch">
                  <CardContent className="p-4 flex items-center gap-3">
                    <CalendarDays className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="font-bold">September 4-6, 2025</div>
                      <div className="text-sm text-muted-foreground">Festival Dates</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 shadow-sketch">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Alliance Française</div>
                      <div className="text-sm text-muted-foreground">Chittagong</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="shadow-bold">
                <FileText className="mr-2 h-5 w-5" />
                Submit Your Film
              </Button>
            </div>
            
            <div className="order-first lg:order-last">
              <div className="border-4 border-primary shadow-bold transform rotate-1 bg-card p-8">
                <img 
                  src="/lovable-uploads/13602abb-dfaa-49c3-9988-2f3cae5562d7.png" 
                  alt="CIAWFF 2025 Festival Poster" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Festival */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About the Festival</h2>
          
          <div className="border-4 border-primary bg-card p-8 shadow-bold transform -rotate-1 mb-12">
            <p className="text-lg leading-relaxed">
              The Chittagong International All Women Film Festival 2025 (CIAWFF 2025) is a groundbreaking 
              initiative, set to be the first-of-its-kind film festival in Bangladesh dedicated to showcasing and 
              celebrating the works of female filmmakers scheduled for September 04-06 at Alliance 
              Française de Chittagong. Co-organized by Film for Us and AUW Film Club, and presented by 
              ConnectHER, this prestigious event aims to empower women in cinema, providing a platform 
              for independent female voices from around the world.
            </p>
          </div>

          {/* Organizers */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="border-2 shadow-sketch">
              <CardContent className="p-6">
                <Users className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Co-organized by</h3>
                <p className="text-sm">Film for Us & AUW Film Club</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 shadow-sketch">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Presented by</h3>
                <p className="text-sm">ConnectHER</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 shadow-sketch">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Venue</h3>
                <p className="text-sm">Alliance Française de Chittagong</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Competition Categories</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category) => (
              <Card key={category.title} className="border-2 shadow-sketch">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Trophy className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{category.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Duration: Up to 20 minutes</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              A distinguished group of jury will evaluate the entries based on artistic merit, 
              creativity, and technical excellence. Entries must be directed by women filmmakers.
            </p>
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Rules and Regulations</h2>
          
          <Card className="border-4 border-primary shadow-bold">
            <CardContent className="p-8">
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 border-2 border-primary bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{rule}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-4 border-primary bg-card p-8 shadow-bold transform rotate-1">
            <h2 className="text-3xl font-bold mb-6">Ready to Submit Your Film?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in celebrating women's voices in cinema. Submit your original work today!
            </p>
            <Button size="lg" className="shadow-bold">
              <FileText className="mr-2 h-5 w-5" />
              Submit Your Film Now
            </Button>
          </div>
        </div>
      </section>

      {/* Film Strip Footer */}
      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default Ciawff2025;