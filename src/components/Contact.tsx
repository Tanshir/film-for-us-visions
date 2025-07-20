import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@filmforus.org",
      description: "Send us your questions or collaboration ideas"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Creative Avenue, Film District",
      description: "Our studio is open for scheduled visits"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission? Have a story to tell? Want to collaborate? 
            We'd love to hear from you and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-card/50 backdrop-blur-md border-border/50 shadow-cinematic">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                      <option value="volunteer">Volunteer Interest</option>
                      <option value="workshop">Workshop Inquiry</option>
                      <option value="story">Share a Story</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.title}
                  className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-accent"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-spotlight flex items-center justify-center shadow-glow-spotlight flex-shrink-0">
                        <contact.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{contact.title}</h4>
                        <p className="text-primary font-medium mb-1">{contact.details}</p>
                        <p className="text-sm text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-card/30 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Follow Our Journey</h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Stay connected with our community and see the latest projects and behind-the-scenes content.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:shadow-glow-spotlight flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-spotlight/10 border-primary/30 shadow-glow-spotlight">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-3">Ready to Start Your Film Journey?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our next workshop or volunteer with us to make a difference in your community.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500"
                  >
                    Join Workshop
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    className="border-primary/50 hover:border-primary transition-all duration-500"
                  >
                    Volunteer Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;