import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Film, Megaphone, Award, Bell } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Mobile Cinema Night",
      date: "2024-08-15",
      time: "7:00 PM",
      location: "Riverside Community Park",
      description: "Outdoor screening of community-produced documentaries under the stars. Bring blankets and popcorn!",
      attendees: 150,
      type: "Screening",
      icon: Film,
      featured: true
    },
    {
      title: "Storytelling Workshop",
      date: "2024-08-22",
      time: "10:00 AM",
      location: "Community Center Room B",
      description: "Learn the fundamentals of visual storytelling with hands-on camera exercises and editing basics.",
      attendees: 25,
      type: "Workshop",
      icon: Megaphone,
      featured: false
    },
    {
      title: "Youth Film Showcase",
      date: "2024-09-05",
      time: "2:00 PM",
      location: "Downtown Arts Plaza",
      description: "Celebrating young filmmakers aged 16-25 with screenings, networking, and award presentations.",
      attendees: 200,
      type: "Festival",
      icon: Award,
      featured: true
    },
    {
      title: "Documentary Ethics Seminar",
      date: "2024-09-12",
      time: "6:00 PM",
      location: "Film For Us Studio",
      description: "Discussion on ethical considerations in documentary filmmaking with industry professionals.",
      attendees: 40,
      type: "Seminar",
      icon: Users,
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "Annual Community Film Gala 2024",
      date: "2024-06-10",
      description: "A celebration of community cinema achievements with awards ceremony and fundraising auction.",
      highlight: "Raised $15,000 for scholarships"
    },
    {
      title: "Street Stories Photography Walk",
      date: "2024-05-15",
      description: "Community members documented neighborhood stories through collaborative photography project.",
      highlight: "50 participants, 200+ photos collected"
    },
    {
      title: "Film Education Summit",
      date: "2024-04-20",
      description: "Regional gathering of educators discussing community-based film education methodologies.",
      highlight: "Attendees from 12 organizations"
    },
    {
      title: "Equipment Sharing Launch",
      date: "2024-03-08",
      description: "Grand opening of our community equipment library with training workshops.",
      highlight: "100+ people trained on equipment"
    }
  ];

  const eventTypes = [
    { name: "Screenings", count: 12, color: "bg-primary" },
    { name: "Workshops", count: 8, color: "bg-secondary" },
    { name: "Festivals", count: 3, color: "bg-accent" },
    { name: "Community Events", count: 15, color: "bg-muted-foreground" }
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
              <div className="w-36 h-6 border-2 border-primary bg-card shadow-sketch transform rotate-1"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Community <span className="bg-primary text-primary-foreground px-4 py-2 transform -rotate-1 inline-block">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join our vibrant community through screenings, workshops, festivals, and collaborative 
              events. Every gathering is an opportunity to learn, create, and connect.
            </p>
          </div>

          {/* Event Stats */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">This Year's Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {eventTypes.map((type, idx) => (
                <Card key={type.name} className={`border-2 border-primary shadow-sketch hover:shadow-bold transition-all transform ${
                  idx % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${type.color} mx-auto mb-3 rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{type.count}</span>
                    </div>
                    <h3 className="font-bold text-sm">{type.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="space-y-8">
              {upcomingEvents.map((event, idx) => (
                <Card 
                  key={event.title} 
                  className={`border-4 border-primary shadow-bold overflow-hidden transform ${
                    event.featured ? 'bg-muted/20' : ''
                  } ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                  <div className={`grid ${event.featured ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-0`}>
                    {/* Event Icon/Visual */}
                    <div className={`bg-primary text-primary-foreground p-8 flex items-center justify-center ${
                      event.featured ? 'lg:col-span-1' : ''
                    }`}>
                      <event.icon className="w-16 h-16" />
                    </div>
                    
                    {/* Event Details */}
                    <div className={`${event.featured ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold bg-card text-foreground px-3 py-1 border-2 border-primary shadow-sketch">
                            {event.type.toUpperCase()}
                          </span>
                          {event.featured && (
                            <span className="text-xs font-bold bg-accent text-accent-foreground px-2 py-1 rounded">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <CardTitle className={`${event.featured ? 'text-2xl' : 'text-xl'}`}>
                          {event.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{event.attendees} expected</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="shadow-sketch hover:shadow-bold">
                            Register Free
                          </Button>
                          <Button variant="secondary" className="shadow-sketch hover:shadow-bold">
                            Share Event
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Events Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event, idx) => (
                <Card 
                  key={event.title} 
                  className={`border-2 border-primary shadow-sketch hover:shadow-bold transition-all transform ${
                    idx % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-primary font-semibold">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="bg-muted/50 p-3 border-l-4 border-primary">
                      <span className="text-sm font-semibold">Impact: {event.highlight}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform rotate-1 overflow-hidden">
              <CardContent className="p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto mb-6 flex items-center justify-center bg-background">
                    <Bell className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">Never Miss an Event!</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Stay connected with our community calendar. Get notifications about workshops, 
                    screenings, and special events delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="shadow-sketch hover:shadow-bold">
                      <Bell className="mr-2 h-5 w-5" />
                      Subscribe to Updates
                    </Button>
                    <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                      <Calendar className="mr-2 h-5 w-5" />
                      View Full Calendar
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

export default Events;