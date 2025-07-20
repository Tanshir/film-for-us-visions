import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Film Screening",
      date: "March 15, 2025",
      time: "7:00 PM",
      location: "City Cultural Center",
      type: "Screening",
      description: "Join us for a special screening of locally produced documentaries, followed by Q&A with filmmakers.",
      capacity: "150 seats",
      status: "Open Registration"
    },
    {
      title: "Youth Filmmaking Workshop",
      date: "March 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Film For Us Studio",
      type: "Workshop",
      description: "Hands-on workshop for young aspiring filmmakers aged 16-25. Learn basic cinematography and editing.",
      capacity: "20 participants",
      status: "Limited Spots"
    },
    {
      title: "Storytelling Masterclass",
      date: "April 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Online & In-Person",
      type: "Masterclass",
      description: "Learn the art of compelling storytelling from award-winning documentary filmmaker Sarah Chen.",
      capacity: "50 participants",
      status: "Early Bird"
    }
  ];

  const pastEvents = [
    { title: "Annual Film Festival 2024", participants: 500, projects: 25 },
    { title: "Director's Roundtable", participants: 80, projects: 12 },
    { title: "Community Voices Workshop", participants: 120, projects: 18 }
  ];

  return (
    <section id="events" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our community events, workshops, and screenings to learn, connect, 
            and be part of the filmmaking journey.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Coming Soon</h3>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.title}
                className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-cinematic animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-4 gap-6 p-6">
                  {/* Event Details */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-spotlight flex items-center justify-center shadow-glow-spotlight flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-2 inline-block">
                          {event.type}
                        </span>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  {/* Registration */}
                  <div className="flex flex-col justify-center">
                    <div className="text-center mb-4">
                      <span className="text-sm font-medium text-primary">
                        {event.status}
                      </span>
                    </div>
                    <Button className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500 w-full">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events Stats */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title}
                className="bg-card/30 backdrop-blur-sm border-border/50 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">{event.title}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-primary">{event.participants}</div>
                      <div className="text-muted-foreground">Participants</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{event.projects}</div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-spotlight/10 border-primary/30 shadow-glow-spotlight">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to get notified about upcoming events, 
                workshops, and exclusive screenings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:border-primary focus:outline-none"
                />
                <Button className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;