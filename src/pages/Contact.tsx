import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Heart, HandHeart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@filmforus.org",
      description: "Best for general inquiries and project proposals"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) FILM-123",
      description: "Monday-Friday, 9AM-6PM for urgent matters"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Community Arts Street\nCreative District, City 12345",
      description: "Our doors are always open for the community"
    },
    {
      icon: Clock,
      title: "Office Hours",
      info: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM\nSun: Community Events Only",
      description: "Drop-in visits welcome during these hours"
    }
  ];

  const getInvolvedOptions = [
    {
      icon: Users,
      title: "Volunteer",
      description: "Help with events, workshops, and community outreach programs"
    },
    {
      icon: Heart,
      title: "Partner",
      description: "Collaborate on projects or sponsor community film initiatives"
    },
    {
      icon: HandHeart,
      title: "Donate",
      description: "Support scholarships, equipment, and free community programs"
    },
    {
      icon: MessageCircle,
      title: "Share Stories",
      description: "Tell us about your community's stories that need to be shared"
    }
  ];

  const locations = [
    {
      name: "Main Studio",
      address: "123 Community Arts Street",
      description: "Equipment library, editing suites, and workshop space"
    },
    {
      name: "Mobile Units",
      address: "Various Community Locations",
      description: "We bring filmmaking workshops directly to neighborhoods"
    },
    {
      name: "Community Screening Room",
      address: "456 Downtown Plaza",
      description: "Monthly community film screenings and discussions"
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
              <div className="w-28 h-6 border-2 border-primary bg-card shadow-sketch transform -rotate-1"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Connect With <span className="bg-primary text-primary-foreground px-4 py-2 transform rotate-1 inline-block">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to join our community? Have a story to tell? Want to learn filmmaking? 
              We'd love to hear from you and help you get started on your creative journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-4 border-primary shadow-bold transform rotate-1">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <MessageCircle className="w-8 h-8" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your interests, project ideas, or how you'd like to get involved.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-bold block mb-2">First Name *</label>
                      <Input placeholder="Your first name" className="border-2 border-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-2">Last Name *</label>
                      <Input placeholder="Your last name" className="border-2 border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-bold block mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-2 border-primary" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-bold block mb-2">I'm interested in...</label>
                    <select className="w-full p-3 border-2 border-primary rounded bg-background">
                      <option>Learning filmmaking basics</option>
                      <option>Sharing my community's story</option>
                      <option>Volunteering with Film For Us</option>
                      <option>Partnering on a project</option>
                      <option>Equipment access and training</option>
                      <option>Other (please specify in message)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-bold block mb-2">Tell us more</label>
                    <Textarea 
                      placeholder="Share your story, project idea, or let us know how we can help you get started with filmmaking..."
                      className="min-h-[120px] border-2 border-primary"
                    />
                  </div>
                  
                  <Button className="w-full shadow-sketch hover:shadow-bold">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Getting Involved */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="border-2 border-primary shadow-sketch">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method, idx) => (
                    <div key={method.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center bg-background flex-shrink-0">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{method.title}</h4>
                        <p className="text-sm font-mono mb-1 whitespace-pre-line">{method.info}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Ways to Get Involved */}
              <Card className="border-2 border-primary shadow-sketch">
                <CardHeader>
                  <CardTitle>Ways to Get Involved</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    There are many ways to be part of our community mission
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {getInvolvedOptions.map((option, idx) => (
                    <div key={option.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center bg-background flex-shrink-0">
                        <option.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Locations */}
              <Card className="border-2 border-primary shadow-sketch">
                <CardHeader>
                  <CardTitle>Find Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {locations.map((location, idx) => (
                    <div key={location.name} className="border-l-4 border-primary pl-4">
                      <h4 className="font-bold">{location.name}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                      <p className="text-xs text-muted-foreground">{location.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency/Urgent Contact */}
          <div className="mt-16">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1 bg-muted/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Community Emergency Support</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you're a community member facing urgent documentation needs 
                  (crisis situations, community issues requiring immediate attention), 
                  please contact our emergency response line.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="destructive" className="shadow-sketch hover:shadow-bold">
                    Emergency Line: (555) 911-FILM
                  </Button>
                  <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                    Learn About Crisis Documentation
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

export default Contact;