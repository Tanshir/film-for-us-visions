import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Trophy, Users, FileText, Clock, Film } from "lucide-react";
import { Link } from "react-router-dom";
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
      
      {/* Hero Section with Event Recap */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Chittagong International All Women Film Festival 2025
              </h1>
              <div className="border-l-4 border-primary pl-4 mb-8 bg-muted/20 p-4 rounded-r-lg">
                <p className="text-lg font-semibold text-primary mb-2">Event Completed Successfully!</p>
                <p className="text-muted-foreground">
                  Thank you to everyone who joined us for this historic celebration of women's voices in cinema. 
                  Relive the magic and explore what made this festival special.
                </p>
              </div>
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

              <Button size="lg" className="shadow-bold" asChild>
                <a href="https://forms.gle/YF9T4pXWMgzL3rnQA" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Submit Your Film
                </a>
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

      {/* Festival Memories - Poster Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Festival Memories
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A look back at the poster and schedule that brought us together for this incredible celebration.
            </p>
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/87ac8c06-fa7e-4b31-ae66-ac1282896091.png" 
                alt="Chittagong International All Women Film Festival 2025 - September 4-5, Alliance Française de Chittagong"
                className="w-full max-w-2xl mx-auto rounded-lg shadow-bold border-2 border-primary/20 hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg pointer-events-none"></div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-2xl mx-auto">
              The official poster that announced our historic festival to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Festival Schedule Archive */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Festival Schedule</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Relive every moment of our two-day celebration through this detailed schedule archive.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5" />
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
                  <CalendarDays className="w-6 h-6" />
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
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-muted p-3 text-left">Movie</th>
                          <th className="border border-muted p-3 text-left">Director</th>
                          <th className="border border-muted p-3 text-left">Category</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-muted p-3 font-medium">Sila... The Pain of Flying</td><td className="border border-muted p-3">Nayanee Borogohain</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">13 min 1 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Pottery - A Forgotten Art</td><td className="border border-muted p-3">Progiya Paromita Das</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">8 min 17 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">4th Floor</td><td className="border border-muted p-3">Fabilha Sumaita Hasan</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">9 min 23 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">The Bedridden</td><td className="border border-muted p-3">Suraya Rahman</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">19 min 59 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Colors of Hope</td><td className="border border-muted p-3">Mrittika Rashed</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">2 min 29 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">From Level 3</td><td className="border border-muted p-3">Nabila Anjum</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">10 min 30 sec</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Second Session */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">6:30 pm - 7:45 pm: Competition Films</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-muted p-3 text-left">Movie</th>
                          <th className="border border-muted p-3 text-left">Director</th>
                          <th className="border border-muted p-3 text-left">Category</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-muted p-3 font-medium">When Light Fades Away</td><td className="border border-muted p-3">Mallika Roy</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">10 min 23 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Flower Boy in DC Hills Park</td><td className="border border-muted p-3">Eurosia Gutierres Pereira</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">8 min 18 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">No Face</td><td className="border border-muted p-3">Tasnum Shobnam</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">2 min 25 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">The Veveless Wallet</td><td className="border border-muted p-3">Suha Mehnaz Ahmed</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">7 min 2 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Blank Texts</td><td className="border border-muted p-3">Maliha Maliyat</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">1 min 33 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Against The Rubble</td><td className="border border-muted p-3">Gulzar Nayani</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">20 min 32 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Ek Rater Upakhyan</td><td className="border border-muted p-3">Maisha Maliha Mou, Mehfuza Binta Rashid Moon, Noor-A-Jannat, Madhury Debnath</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">12 min 22 sec</td></tr>
                      </tbody>
                    </table>
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
                  <CalendarDays className="w-6 h-6" />
                  Day 2: September 5th, 2025
                </h3>
                
                {/* ConnectHER Films */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">11:00 am - 12:30 pm: ConnectHER Films</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-muted p-3 text-left">Movie</th>
                          <th className="border border-muted p-3 text-left">Director</th>
                          <th className="border border-muted p-3 text-left">Category</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-muted p-3 font-medium">In A Moment Breaker</td><td className="border border-muted p-3">Asil Majed AlWadiya</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 31 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">The Chain</td><td className="border border-muted p-3">Muhammad Waseem</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">5 min 54 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">We Could Be Champion Too</td><td className="border border-muted p-3">Novera Hasan Nikkon</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">5 min 56 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">The Sand Game</td><td className="border border-muted p-3">Suraj Kantuwal and Mira Khadka</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">6 min 54 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">One Step Forward</td><td className="border border-muted p-3">Rita Xiang</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">6 min 4 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Asma</td><td className="border border-muted p-3">Pooja Khati</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 42 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Diversity Hire</td><td className="border border-muted p-3">Aiko Lozar</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">5 min 58 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Al Maram</td><td className="border border-muted p-3">Huda Lulu and Ahmed Younis</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 17 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Grit and Glitter</td><td className="border border-muted p-3">Adnida Qrana Zahra Faizah Rokhmah, Rahma Attaya Syakira, and Akriya Zhafira</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 44 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">And That's On Period</td><td className="border border-muted p-3">Tinayeishe Wakalama</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">6 min 01 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Professional Football Team</td><td className="border border-muted p-3">Anonymous</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">3 min 8 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Mother's Football Team</td><td className="border border-muted p-3">Prince Kumar</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 24 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Kharbasha Behind The Horizon</td><td className="border border-muted p-3">Nader Alrozzi, Samir El Souissi, and Barea El Whady</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">3 min 35 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Aguan-Sun Behind The Horizon</td><td className="border border-muted p-3">Novera Hasan Nikkon</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 31 sec</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">The Ripple Effect</td><td className="border border-muted p-3">Sarah Jehaan Khan</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">5 min 43 sec</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Palestinian Film Screenings */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">3:00 pm - 4:20 pm: Palestinian Film Screening and Director's Talk</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-muted p-3 text-left">Movie</th>
                          <th className="border border-muted p-3 text-left">Director</th>
                          <th className="border border-muted p-3 text-left">Category</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-muted p-3 font-medium">25 Kilometers</td><td className="border border-muted p-3">Nahed Awwad</td><td className="border border-muted p-3">Biography</td><td className="border border-muted p-3">16 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Electrical Gaza</td><td className="border border-muted p-3">Rosalind Nashashibi</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">18 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">O. Persecuted</td><td className="border border-muted p-3">Basel Mansour</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">2 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">One Minute</td><td className="border border-muted p-3">Dina Naser</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">11 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Children Without Childhood</td><td className="border border-muted p-3">Khadijeh Habashneh</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">22 min</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Second Palestinian Session */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">4:40 pm - 5:50 pm: Palestinian Film Screening and Director's Talk</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-muted">
                      <thead>
                        <tr className="bg-muted/20">
                          <th className="border border-muted p-3 text-left">Movie</th>
                          <th className="border border-muted p-3 text-left">Director</th>
                          <th className="border border-muted p-3 text-left">Category</th>
                          <th className="border border-muted p-3 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-muted p-3 font-medium">The White Elephant</td><td className="border border-muted p-3">Shuruq Harb</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">12 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Wahdon</td><td className="border border-muted p-3">Norma Marcos</td><td className="border border-muted p-3">Documentary and Fiction</td><td className="border border-muted p-3">11 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">This Home Is Ours</td><td className="border border-muted p-3">Shayma' Awadiyah</td><td className="border border-muted p-3">Documentary</td><td className="border border-muted p-3">21 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Nightmare of Gaza</td><td className="border border-muted p-3">Farah Nabulsi</td><td className="border border-muted p-3">Short Film</td><td className="border border-muted p-3">13 min</td></tr>
                        <tr><td className="border border-muted p-3 font-medium">Today They Took My Son</td><td className="border border-muted p-3">Farah Nabulsi</td><td className="border border-muted p-3">Fiction</td><td className="border border-muted p-3">8 min</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cultural Programme and Awards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/20 rounded-lg border-2 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">6:00 pm - 6:30 pm</span>
                    </div>
                    <h4 className="text-lg font-bold">Cultural Programme by AUW Students</h4>
                  </div>
                  <div className="p-4 bg-muted/20 rounded-lg border-2 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">6:30 pm - 7:30 pm</span>
                    </div>
                    <h4 className="text-lg font-bold">Award Giving Ceremony</h4>
                  </div>
                </div>
              </CardContent>
            </Card>
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

      {/* Festival Legacy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-4 border-primary bg-card p-8 shadow-bold transform rotate-1">
            <h2 className="text-3xl font-bold mb-6">Festival Legacy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you to all the incredible filmmakers who participated in making CIAWFF 2025 a historic success. 
              This festival has paved the way for future celebrations of women's voices in cinema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-bold" asChild>
                <Link to="/our-films">
                  <Film className="mr-2 h-5 w-5" />
                  Watch Festival Films
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="shadow-bold" asChild>
                <Link to="/events">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  View All Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Film Strip Footer */}
      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default Ciawff2025;