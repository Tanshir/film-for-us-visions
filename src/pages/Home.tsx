import { Button } from "@/components/ui/button";
import { Play, Camera, Users, Film, Heart, Lightbulb, Calendar, ArrowRight, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";

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
      
      {/* Film Festival Poster Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Join Us at the Film Festival
            </h2>
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/87ac8c06-fa7e-4b31-ae66-ac1282896091.png" 
                alt="Chittagong International All Women Film Festival 2025 - September 4-5, Alliance Française de Chittagong"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-bold border-2 border-primary/20 hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg pointer-events-none"></div>
            </div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss this incredible celebration of women's voices in cinema. 
              Mark your calendars for September 4-5, 2025!
            </p>
          </div>
        </div>
      </section>

      {/* Festival Schedule Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Festival Schedule</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>September 4-5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Alliance Française de Chittagong</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Presented by CONNECTHER • Co-organized by Film For Us, New View Club, and AUW Film Club
            </p>
          </div>

          {/* Day 1 Schedule */}
          <div className="mb-12">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1 mb-8">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Day 1: September 4th, 2025
                </h3>
                
                {/* Opening Ceremony */}
                <div className="mb-6 p-4 bg-muted/20 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">4:00 pm - 5:00 pm</span>
                  </div>
                  <h4 className="text-lg font-bold">Opening Ceremony</h4>
                </div>

                {/* First Session */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">5:00 pm - 6:15 pm: Competition Films</span>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Movie</TableHead>
                          <TableHead>Director</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Sila... The Pain of Flying</TableCell>
                          <TableCell>Nayanee Borogohain</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>13 min 1 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Pottery - A Forgotten Art</TableCell>
                          <TableCell>Progiya Paromita Das</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>8 min 17 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">4th Floor</TableCell>
                          <TableCell>Fabilha Sumaita Hasan</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>9 min 23 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">The Bedridden</TableCell>
                          <TableCell>Suraya Rahman</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>19 min 59 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Colors of Hope</TableCell>
                          <TableCell>Mrittika Rashed</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>2 min 29 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">From Level 3</TableCell>
                          <TableCell>Nabila Anjum</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>10 min 30 sec</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Second Session */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">6:30 pm - 7:45 pm: Competition Films</span>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Movie</TableHead>
                          <TableHead>Director</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">When Light Fades Away</TableCell>
                          <TableCell>Mallika Roy</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>10 min 23 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Flower Boy in DC Hills Park</TableCell>
                          <TableCell>Eurosia Gutierres Pereira</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>8 min 18 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">No Face</TableCell>
                          <TableCell>Tasnum Shobnam</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>2 min 25 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">The Veveless Wallet</TableCell>
                          <TableCell>Suha Mehnaz Ahmed</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>7 min 2 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Blank Texts</TableCell>
                          <TableCell>Maliha Maliyat</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>1 min 33 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Against The Rubble</TableCell>
                          <TableCell>Gulzar Nayani</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>20 min 32 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Ek Rater Upakhyan</TableCell>
                          <TableCell>Maisha Maliha Mou, Mehfuza Binta Rashid Moon, Noor-A-Jannat, Madhury Debnath</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>12 min 22 sec</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Day 2 Schedule */}
          <div>
            <Card className="border-4 border-primary shadow-bold transform rotate-1">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  Day 2: September 5th, 2025
                </h3>
                
                {/* ConnectHER Films */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">11:00 am - 12:30 pm: ConnectHER Films</span>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Movie</TableHead>
                          <TableHead>Director</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">In A Moment Breaker</TableCell>
                          <TableCell>Asil Majed AlWadiya</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 31 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">The Chain</TableCell>
                          <TableCell>Muhammad Waseem</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>5 min 54 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">We Could Be Champion Too</TableCell>
                          <TableCell>Novera Hasan Nikkon</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>5 min 56 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">The Sand Game</TableCell>
                          <TableCell>Suraj Kantuwal and Mira Khadka</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>6 min 54 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">One Step Forward</TableCell>
                          <TableCell>Rita Xiang</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>6 min 4 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Asma</TableCell>
                          <TableCell>Pooja Khati</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 42 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Diversity Hire</TableCell>
                          <TableCell>Aiko Lozar</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>5 min 58 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Al Maram</TableCell>
                          <TableCell>Huda Lulu and Ahmed Younis</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 17 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Grit and Glitter</TableCell>
                          <TableCell>Adnida Qrana Zahra Faizah Rokhmah, Rahma Attaya Syakira, and Akriya Zhafira</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 44 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">And That's On Period</TableCell>
                          <TableCell>Tinayeishe Wakalama</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>6 min 01 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Professional Football Team</TableCell>
                          <TableCell>Anonymous</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>3 min 8 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Mother's Football Team</TableCell>
                          <TableCell>Prince Kumar</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 24 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Kharbasha Behind The Horizon</TableCell>
                          <TableCell>Nader Alrozzi, Samir El Souissi, and Barea El Whady</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>3 min 35 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Aguan-Sun Behind The Horizon</TableCell>
                          <TableCell>Novera Hasan Nikkon</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 31 sec</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">The Ripple Effect</TableCell>
                          <TableCell>Sarah Jehaan Khan</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>5 min 43 sec</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Palestinian Film Screenings */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">3:00 pm - 4:20 pm: Palestinian Film Screening and Director's Talk</span>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Movie</TableHead>
                          <TableHead>Director</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">25 Kilometers</TableCell>
                          <TableCell>Nahed Awwad</TableCell>
                          <TableCell>Biography</TableCell>
                          <TableCell>16 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Electrical Gaza</TableCell>
                          <TableCell>Rosalind Nashashibi</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>18 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">O. Persecuted</TableCell>
                          <TableCell>Basel Mansour</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>2 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">One Minute</TableCell>
                          <TableCell>Dina Naser</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>11 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Children Without Childhood</TableCell>
                          <TableCell>Khadijeh Habashneh</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>22 min</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">4:40 pm - 5:50 pm: Palestinian Film Screening and Director's Talk</span>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Movie</TableHead>
                          <TableHead>Director</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">The White Elephant</TableCell>
                          <TableCell>Shuruq Harb</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>12 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Wahdon</TableCell>
                          <TableCell>Norma Marcos</TableCell>
                          <TableCell>Documentary and Fiction</TableCell>
                          <TableCell>11 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">This Home Is Ours</TableCell>
                          <TableCell>Shayma' Awadiyah</TableCell>
                          <TableCell>Documentary</TableCell>
                          <TableCell>21 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Nightmare of Gaza</TableCell>
                          <TableCell>Farah Nabulsi</TableCell>
                          <TableCell>Short Film</TableCell>
                          <TableCell>13 min</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Today They Took My Son</TableCell>
                          <TableCell>Farah Nabulsi</TableCell>
                          <TableCell>Fiction</TableCell>
                          <TableCell>8 min</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Final Events */}
                <div className="space-y-4">
                  <div className="p-4 bg-muted/20 rounded-lg border-2 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">6:00 pm - 6:30 pm</span>
                    </div>
                    <h4 className="text-lg font-bold">Cultural Programme by AUW Students</h4>
                  </div>
                  
                  <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary/40">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">6:30 pm - 7:30 pm</span>
                    </div>
                    <h4 className="text-lg font-bold flex items-center gap-2">
                      <Film className="w-5 h-5" />
                      Award Giving Ceremony
                    </h4>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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