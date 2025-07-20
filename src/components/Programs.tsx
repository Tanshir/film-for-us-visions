import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Camera, Megaphone, Users, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Film Education Initiative",
      description: "Comprehensive workshops and courses teaching film production, storytelling, and cinema literacy to communities.",
      features: [
        "Basic to advanced filmmaking techniques",
        "Storytelling and screenplay writing",
        "Digital editing and post-production",
        "Film history and analysis"
      ],
      cta: "Learn More"
    },
    {
      icon: Camera,
      title: "Community Storytelling Project",
      description: "Empowering local communities to document and share their unique stories through collaborative film projects.",
      features: [
        "Documentary production support",
        "Community-driven narratives",
        "Equipment lending program",
        "Mentorship from industry professionals"
      ],
      cta: "Join Project"
    },
    {
      icon: Megaphone,
      title: "Underprivileged Support Program",
      description: "Providing scholarships, equipment, and mentorship to underprivileged individuals pursuing film careers.",
      features: [
        "Full and partial scholarships",
        "Equipment access and training",
        "Industry networking opportunities",
        "Career placement assistance"
      ],
      cta: "Apply Now"
    },
    {
      icon: Users,
      title: "Youth Cinema Outreach",
      description: "Engaging young people through mobile cinema screenings and hands-on filmmaking workshops in schools and communities.",
      features: [
        "Mobile screening units",
        "Interactive workshops",
        "Youth film competitions",
        "Peer-to-peer learning programs"
      ],
      cta: "Get Involved"
    }
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Programs</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive initiatives designed to make film education accessible, 
            empower diverse voices, and build stronger communities through cinema.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={program.title}
              className="bg-card/50 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-cinematic animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-spotlight flex items-center justify-center shadow-glow-spotlight group-hover:scale-110 transition-transform duration-500">
                    <program.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500 group"
                >
                  {program.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-spotlight/10 border-primary/30 shadow-glow-spotlight">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our mission to democratize film education and empower communities 
                through the transformative power of storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500">
                  Become a Volunteer
                </Button>
                <Button variant="secondary" size="lg" className="border-primary/50 hover:border-primary transition-all duration-500">
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;