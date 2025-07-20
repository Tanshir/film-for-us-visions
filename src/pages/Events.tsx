import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Film Screening",
      date: "2024-08-15",
      time: "7:00 PM",
      location: "City Community Center",
      description: "Join us for a special screening of our latest community-produced documentaries.",
      attendees: 150,
      type: "Screening"
    },
    {
      title: "Filmmaking Workshop",
      date: "2024-08-22",
      time: "10:00 AM",
      location: "Film For Us Studio",
      description: "Hands-on workshop covering basics of digital filmmaking and storytelling techniques.",
      attendees: 30,
      type: "Workshop"
    },
    {
      title: "Youth Film Festival",
      date: "2024-09-05",
      time: "2:00 PM",
      location: "Downtown Arts Plaza",
      description: "Celebrating young filmmakers with screenings, awards, and networking opportunities.",
      attendees: 200,
      type: "Festival"
    }
  ];

  const pastEvents = [
    {
      title: "Annual Film Gala 2024",
      date: "2024-06-10",
      description: "A celebration of community cinema achievements and fundraising for future projects."
    },
    {
      title: "Documentary Photography Exhibition",
      date: "2024-05-15",
      description: "Visual storytelling exhibition featuring work from our community artists."
    },
    {
      title: "Film Education Symposium",
      date: "2024-04-20",
      description: "Educational forum discussing the future of community-based film education."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Events & <span className="text-primary">Workshops</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our community events, workshops, and screenings. Connect with fellow 
            film enthusiasts and learn new skills in a supportive environment.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.title} className="hover:shadow-medium transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-muted px-2 py-1 rounded">
                      {event.type}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
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
                      <span>{event.attendees} attendees expected</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.title} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="shadow-medium">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Never miss an event! Subscribe to our newsletter to get notifications 
                about upcoming workshops, screenings, and community gatherings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Subscribe to Newsletter
                </Button>
                <Button variant="secondary" size="lg">
                  View Event Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Events;