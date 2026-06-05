import { Button } from "@/components/ui/button";
import { Play, Camera, Users, Film, Heart, Lightbulb, Calendar, ArrowRight, Clock, MapPin, Award, Globe, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import poster from "@/assets/ciawff-2026-poster.png.asset.json";

const SUBMISSION_DEADLINE = "2026-08-01T23:59:59";

const ciawffRules = [
  "Films must be directed by women filmmakers.",
  "Films completed after July 1, 2024 are eligible for submission.",
  "Films may be fiction, documentary, experimental, animation, or hybrid forms.",
  "Films must not be publicly available online before the festival screening.",
  "No submission fee.",
  "Applicants must hold the necessary rights to submit and screen the film.",
  "Exhibition copies must be provided in high-quality digital format (MP4 or MOV).",
  "All films must include English subtitles if the original language is not English.",
  "The festival reserves the right to accept or decline any submission.",
  "Selected filmmakers will be notified via email.",
  "The festival does not pay screening fees for selected films.",
  "Chittagong International All Women Film Festival (CIAWFF) holds the right to use the selected films for trailers and publicity usage.",
];

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

      {/* CIAWFF 2026 — Full Call for Entries */}
      <section className="py-12 px-6 bg-muted/20 border-b-4 border-primary">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Heading */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 border-2 border-primary bg-primary/10 text-sm font-bold tracking-wider mb-4">
              CALL FOR ENTRIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              2nd Chittagong International All Women Film Festival 2026
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              From Vision to Screen — Celebrating Women's Voices Through Cinema
            </p>
          </div>

          {/* Countdown */}
          <div className="border-4 border-primary bg-card shadow-bold p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-sm md:text-base font-bold tracking-wider uppercase">
                Submission Deadline · August 01, 2026
              </p>
            </div>
            <CountdownTimer targetDate={SUBMISSION_DEADLINE} />
          </div>

          {/* Poster */}
          <div className="border-4 border-primary shadow-bold overflow-hidden bg-card">
            <img src={poster.url} alt="CIAWFF 2026 Festival Poster" className="w-full h-auto" />
          </div>

          {/* Key info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-2 border-primary">
              <CardContent className="p-6 flex items-start gap-4">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Festival Dates</h3>
                  <p className="text-muted-foreground">September 17–19, 2026</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Venue</h3>
                  <p className="text-muted-foreground">Alliance Française de Chittagong, Bangladesh</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About */}
          <div className="max-w-4xl mx-auto space-y-5">
            <h3 className="text-2xl md:text-3xl font-bold">About the Festival</h3>
            <p className="text-lg leading-relaxed">
              The 2nd Chittagong International All Women Film Festival 2026 (CIAWFF 2026) proudly
              invites submissions from women filmmakers around the world.
            </p>
            <p className="text-lg leading-relaxed">
              Following the successful launch of Bangladesh's first international film festival
              dedicated exclusively to women filmmakers, CIAWFF returns with an even stronger
              commitment to creating a platform for women's stories, perspectives and creative
              expressions through cinema.
            </p>
            <p className="text-lg leading-relaxed">
              The festival will take place from <strong>September 17–19, 2026</strong> at{" "}
              <strong>Alliance Française de Chittagong, Bangladesh</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Organized by <strong>Film for Us</strong> and presented by <strong>ConnectHER</strong>,
              in collaboration with <strong>Alliance Française de Chittagong</strong>,{" "}
              <strong>AUW Film Club</strong> and <strong>LekhaLikhi — লেখালিখি</strong>, CIAWFF 2026
              aims to empower women in cinema by showcasing outstanding films, fostering
              international cultural exchange and supporting independent women filmmakers from
              diverse backgrounds.
            </p>
          </div>

          {/* Festival Sections */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Festival Sections</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-4 border-primary shadow-bold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-7 h-7 text-primary" />
                    <h4 className="text-xl font-bold">International Competition</h4>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Selected films will compete in the following categories:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center gap-2"><Film className="w-4 h-4 text-primary" /> Best Fiction Film</li>
                    <li className="flex items-center gap-2"><Film className="w-4 h-4 text-primary" /> Best Documentary Film</li>
                    <li className="flex items-center gap-2"><Film className="w-4 h-4 text-primary" /> Best July Uprising Film</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    An international jury panel comprising filmmakers, academics, critics and
                    industry professionals will evaluate entries based on artistic merit, creativity,
                    storytelling, social impact and technical excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-4 border-primary shadow-bold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-7 h-7 text-primary" />
                    <h4 className="text-xl font-bold">Special Iranian Film Session</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A special curated section dedicated to{" "}
                    <strong>Iranian cinema by women filmmakers</strong>, celebrating the artistic
                    achievements and powerful voices of Iranian women through film.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-4 border-primary shadow-bold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-7 h-7 text-primary" />
                    <h4 className="text-xl font-bold">Special ConnectHER Film Session</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    A dedicated curated session presented by <strong>ConnectHER</strong>,
                    spotlighting films that amplify women's voices and global stories from the
                    ConnectHER community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-4 border-primary shadow-bold">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-7 h-7 text-primary" />
                    <h4 className="text-xl font-bold">Screenings, Discussions & Networking</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    The festival will also include filmmaker discussions, audience interactions,
                    networking opportunities and educational sessions designed to inspire emerging
                    filmmakers and students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Eligibility & Rules */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">Eligibility & Rules</h3>
            <Card className="border-4 border-primary shadow-bold">
              <CardContent className="p-6 md:p-8">
                <ol className="space-y-3 list-decimal list-inside">
                  {ciawffRules.map((rule, idx) => (
                    <li key={idx} className="leading-relaxed">{rule}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Submission CTA */}
          <div className="max-w-3xl mx-auto">
            <div className="border-4 border-primary bg-card shadow-bold p-8 text-center space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">Submit Your Film</h3>
              <p className="text-lg">
                <strong>Submission Deadline:</strong>{" "}
                <span className="text-primary font-semibold">August 01, 2026</span>
              </p>
              <p><strong>Festival Dates:</strong> September 17–19, 2026</p>
              <p><strong>Venue:</strong> Alliance Française de Chittagong, Bangladesh</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button asChild size="lg">
                  <a href="https://forms.gle/bTwMQfg5amwgUE4MA" target="_blank" rel="noopener noreferrer">
                    Submit Your Film <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/ciawff-2026">View Festival Page</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Info Footer */}
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <p className="text-lg"><strong>Duration:</strong> 3 Days</p>
            <p className="text-lg"><strong>Event by:</strong> Film for Us</p>
            <p className="text-lg"><strong>Presented by:</strong> ConnectHER</p>
            <p className="text-lg">
              <strong>In Collaboration with:</strong> Alliance Française de Chittagong, AUW Film Club, LekhaLikhi — লেখালিখি
            </p>
            <p className="text-muted-foreground">Public · Anyone on or off Facebook</p>
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