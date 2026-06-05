import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Film, Award, Globe, ArrowRight, Clock, Users, MessageSquare } from "lucide-react";
import poster from "@/assets/ciawff-2026-poster.png.asset.json";
import CountdownTimer from "@/components/CountdownTimer";

const SUBMISSION_DEADLINE = "2026-08-01T23:59:59";

const rules = [
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

const Ciawff2026 = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="h-8 bg-film-strip border-b-4 border-primary"></div>

      {/* Hero / Poster */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 border-2 border-primary bg-primary/10 text-sm font-bold tracking-wider mb-4">
              CALL FOR ENTRIES
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              2nd Chittagong International All Women Film Festival 2026
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              From Vision to Screen — Celebrating Women's Voices Through Cinema
            </p>
          </div>

          {/* Countdown to Submission Deadline */}
          <div className="mb-10 border-4 border-primary bg-card shadow-bold p-6 md:p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <p className="text-sm md:text-base font-bold tracking-wider uppercase">
                Submission Deadline · August 01, 2026
              </p>
            </div>
            <CountdownTimer targetDate={SUBMISSION_DEADLINE} />
          </div>

          <div className="border-4 border-primary shadow-bold overflow-hidden bg-card">
            <img
              src={poster.url}
              alt="CIAWFF 2026 Festival Poster"
              className="w-full h-auto"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
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
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4">About the Festival</h2>
          <p className="text-lg leading-relaxed">
            The 2nd Chittagong International All Women Film Festival 2026 (CIAWFF 2026) proudly invites
            submissions from women filmmakers around the world.
          </p>
          <p className="text-lg leading-relaxed">
            Following the successful launch of Bangladesh's first international film festival dedicated
            exclusively to women filmmakers, CIAWFF returns with an even stronger commitment to creating
            a platform for women's stories, perspectives and creative expressions through cinema.
          </p>
          <p className="text-lg leading-relaxed">
            The festival will take place from <strong>September 17–19, 2026</strong> at{" "}
            <strong>Alliance Française de Chittagong, Bangladesh</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Organized by <strong>Film for Us</strong> and presented by <strong>ConnectHER</strong>, in
            collaboration with <strong>Alliance Française de Chittagong</strong>,{" "}
            <strong>AUW Film Club</strong> and <strong>LekhaLikhi — লেখালিখি</strong>, CIAWFF 2026 aims
            to empower women in cinema by showcasing outstanding films, fostering international cultural
            exchange and supporting independent women filmmakers from diverse backgrounds.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Festival Sections</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* International Competition */}
            <Card className="border-4 border-primary shadow-bold">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">International Competition</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Selected films will compete in the following categories:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-primary" /> Best Fiction Film
                  </li>
                  <li className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-primary" /> Best Documentary Film
                  </li>
                  <li className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-primary" /> Best July Uprising Film
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  An international jury panel comprising filmmakers, academics, critics and industry
                  professionals will evaluate entries based on artistic merit, creativity, storytelling,
                  social impact and technical excellence.
                </p>
              </CardContent>
            </Card>

            {/* Iranian Session */}
            <Card className="border-4 border-primary shadow-bold">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Special Iranian Film Session</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This year's festival will feature a special curated section dedicated to{" "}
                  <strong>Iranian cinema by women filmmakers</strong>, celebrating the artistic
                  achievements and powerful voices of Iranian women through film.
                </p>
              </CardContent>
            </Card>

            {/* ConnectHER Session */}
            <Card className="border-4 border-primary shadow-bold">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Special ConnectHER Film Session</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A dedicated curated session presented by <strong>ConnectHER</strong>, spotlighting
                  films that amplify women's voices and global stories from the ConnectHER community.
                </p>
              </CardContent>
            </Card>

            {/* Screenings & Networking */}
            <Card className="border-4 border-primary shadow-bold">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Screenings, Discussions & Networking</h3>
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
      </section>

      {/* Eligibility & Rules */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Eligibility & Rules</h2>
          <Card className="border-4 border-primary shadow-bold">
            <CardContent className="p-8">
              <ol className="space-y-3 list-decimal list-inside">
                {rules.map((rule, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {rule}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="border-4 border-primary bg-card shadow-bold p-8 text-center space-y-4">
            <h2 className="text-3xl font-bold">Submit Your Film</h2>
            <p className="text-lg">
              <strong>Submission Deadline:</strong>{" "}
              <span className="text-primary font-semibold">August 01, 2026</span>
            </p>
            <p><strong>Festival Dates:</strong> September 17–19, 2026</p>
            <p><strong>Venue:</strong> Alliance Française de Chittagong, Bangladesh</p>
            <Button asChild size="lg" className="mt-4">
              <a
                href="https://forms.gle/bTwMQfg5amwgUE4MA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Your Film <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Footer */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-lg"><strong>Duration:</strong> 3 Days</p>
          <p className="text-lg"><strong>Event by:</strong> Film for Us</p>
          <p className="text-lg"><strong>Presented by:</strong> ConnectHER</p>
          <p className="text-lg">
            <strong>In Collaboration with:</strong> Alliance Française de Chittagong, AUW Film Club, LekhaLikhi — লেখালিখি
          </p>
          <p className="text-muted-foreground">Public · Anyone on or off Facebook</p>
        </div>
      </section>

      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default Ciawff2026;
