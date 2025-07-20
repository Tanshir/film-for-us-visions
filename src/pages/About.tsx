import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Globe, Award, Calendar, Target, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of storytelling to bring communities together and amplify unheard voices."
    },
    {
      icon: Lightbulb,
      title: "Educational Impact",
      description: "Making film education accessible to all, regardless of economic background or social status."
    },
    {
      icon: Users,
      title: "Inclusive Storytelling",
      description: "Empowering diverse communities to tell their own stories through digital visual media."
    },
    {
      icon: Globe,
      title: "Social Change",
      description: "Using cinema as a catalyst for social awareness and positive change in society."
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded Film For Us with 5 founding members", icon: Target },
    { year: "2021", event: "First community workshop with 25 participants", icon: Users },
    { year: "2022", event: "Launched mobile cinema program", icon: Zap },
    { year: "2023", event: "Won first documentary award at regional festival", icon: Award },
    { year: "2024", event: "Expanded to 15 communities across the region", icon: Globe }
  ];

  const team = [
    { name: "Sarah Ahmed", role: "Founder & Creative Director", experience: "15 years in documentary filmmaking" },
    { name: "Michael Chen", role: "Education Program Manager", experience: "Former film school instructor" },
    { name: "Priya Patel", role: "Community Outreach Coordinator", experience: "Social work and community engagement" },
    { name: "David Rodriguez", role: "Technical Director", experience: "Post-production and equipment specialist" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Film Strip Header */}
      <div className="h-8 bg-film-strip border-b-4 border-primary"></div>
      
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header with sketch style */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="w-32 h-4 border-2 border-primary bg-card shadow-sketch transform rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              About <span className="bg-primary text-primary-foreground px-4 py-2 transform -rotate-1 inline-block">Film For Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              An independent film collective democratizing cinema through community education, 
              storytelling, and creative empowerment since 2020.
            </p>
          </div>

          {/* Story Section */}
          <div className="mb-20">
            <Card className="border-4 border-primary shadow-bold transform rotate-1 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-6">
                    Film For Us was born from a simple belief: everyone has a story worth telling, 
                    and everyone deserves access to the tools and knowledge to tell it. What started 
                    as a small group of filmmakers conducting weekend workshops has grown into a 
                    thriving community movement.
                  </p>
                  <p className="mb-6">
                    We've witnessed the transformative power of putting a camera in someone's hands 
                    for the first time, the joy of a community seeing their stories on screen, and 
                    the pride of underprivileged youth mastering new technical skills.
                  </p>
                  <p>
                    Today, we continue to break down barriers in film education, creating pathways 
                    for diverse voices to enter the industry and ensuring that cinema truly becomes 
                    a medium for all people, not just a privileged few.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mission Cards */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Three-Pillar Mission</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary shadow-sketch hover:shadow-bold transition-all transform hover:-rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-card">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">EDUCATE</h3>
                  <p className="text-muted-foreground">
                    Teaching film literacy, technical skills, and storytelling to mass audiences 
                    through hands-on workshops and community screenings.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary shadow-sketch hover:shadow-bold transition-all transform hover:rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-card">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">EMPOWER</h3>
                  <p className="text-muted-foreground">
                    Providing scholarships, equipment access, and mentorship to underprivileged 
                    individuals pursuing careers in filmmaking.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary shadow-sketch hover:shadow-bold transition-all transform hover:-rotate-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-card">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AMPLIFY</h3>
                  <p className="text-muted-foreground">
                    Helping communities document and share their diverse stories through 
                    collaborative digital visual media projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, idx) => (
                <div key={milestone.year} className="flex items-center gap-6">
                  <div className="w-20 h-20 border-4 border-primary rounded-full flex items-center justify-center bg-card shadow-sketch flex-shrink-0">
                    <milestone.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <Card className="border-2 border-primary">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <p className="text-muted-foreground">{milestone.event}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <Card 
                  key={value.title}
                  className={`border-2 border-primary hover:shadow-bold transition-all transform ${
                    idx % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-background">
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, idx) => (
                <Card key={member.name} className="border-2 border-primary shadow-sketch">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 border-4 border-primary rounded-full mx-auto mb-4 bg-muted flex items-center justify-center">
                      <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                    <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Film Strip Footer */}
      <div className="h-8 bg-film-strip border-t-4 border-primary"></div>
    </div>
  );
};

export default About;