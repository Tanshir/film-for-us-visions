import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Camera, Megaphone, Users, ArrowRight, Clock, MapPin, DollarSign, BookOpen, Film, Mic } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Foundation Film Academy",
      subtitle: "Complete Filmmaking Bootcamp",
      duration: "12 weeks",
      cost: "Free",
      location: "Community Centers",
      description: "Comprehensive program covering all aspects of filmmaking from pre-production to post-production.",
      curriculum: [
        "Storytelling & Screenplay Writing",
        "Camera Operations & Cinematography", 
        "Sound Recording & Audio Design",
        "Video Editing & Post-Production",
        "Final Project Production"
      ],
      nextStart: "March 15, 2024",
      spots: "25 available"
    },
    {
      icon: Camera,
      title: "Community Voice Project",
      subtitle: "Neighborhood Documentary Initiative",
      duration: "8 weeks",
      cost: "Free",
      location: "On-Location",
      description: "Collaborative documentary project where communities tell their own stories with professional support.",
      curriculum: [
        "Community Story Development",
        "Interview Techniques",
        "B-Roll & Establishing Shots",
        "Collaborative Editing",
        "Community Screening Event"
      ],
      nextStart: "April 1, 2024",
      spots: "15 communities"
    },
    {
      icon: Megaphone,
      title: "Youth Creator Intensive",
      subtitle: "16-25 Year Old Program",
      duration: "6 weeks",
      cost: "Scholarship Available",
      location: "Mobile Units",
      description: "Fast-paced program designed for young creators focusing on digital storytelling and social media content.",
      curriculum: [
        "Mobile Filmmaking Techniques",
        "Social Media Content Strategy",
        "Personal Branding & Portfolio",
        "Platform-Specific Production",
        "Creator Economy Basics"
      ],
      nextStart: "February 20, 2024",
      spots: "30 available"
    },
    {
      icon: Users,
      title: "Professional Mentorship",
      subtitle: "Industry Partnership Program", 
      duration: "6 months",
      cost: "Application Based",
      location: "Virtual & In-Person",
      description: "One-on-one mentorship with industry professionals for serious filmmaking career development.",
      curriculum: [
        "Industry Standards & Practices",
        "Professional Portfolio Development",
        "Networking & Industry Connections",
        "Career Path Planning",
        "Advanced Technical Skills"
      ],
      nextStart: "Rolling Admissions",
      spots: "12 mentees per cycle"
    }
  ];

  const workshops = [
    { title: "Smartphone Filmmaking", duration: "1 day", frequency: "Monthly" },
    { title: "Documentary Ethics", duration: "2 hours", frequency: "Bi-weekly" },
    { title: "Sound for Film", duration: "4 hours", frequency: "Monthly" },
    { title: "Color Grading Basics", duration: "3 hours", frequency: "Monthly" },
    { title: "Pitching Your Project", duration: "2 hours", frequency: "Weekly" },
    { title: "Film Festival Strategy", duration: "3 hours", frequency: "Quarterly" }
  ];

  const resources = [
    { item: "Camera Equipment Library", access: "Free with training", booking: "Online system" },
    { item: "Editing Workstations", access: "Free", booking: "24/7 access" },
    { item: "Sound Recording Kit", access: "Free with training", booking: "Weekly loans" },
    { item: "Lighting Equipment", access: "Program participants", booking: "Project basis" },
    { item: "Screening Venue", access: "Community events", booking: "Monthly slots" },
    { item: "Production Insurance", access: "All participants", booking: "Automatic coverage" }
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
              <div className="w-40 h-6 border-2 border-primary bg-card shadow-sketch transform -rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Film Education <span className="bg-primary text-primary-foreground px-4 py-2 transform rotate-1 inline-block">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From beginner workshops to professional mentorship - we offer comprehensive 
              film education programs designed for every skill level and background.
            </p>
          </div>

          {/* Main Programs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Core Programs</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {programs.map((program, idx) => (
                <Card 
                  key={program.title}
                  className={`border-4 border-primary shadow-bold hover:shadow-sketch transition-all transform ${
                    idx % 2 === 0 ? 'rotate-1 hover:-rotate-1' : '-rotate-1 hover:rotate-1'
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 border-4 border-primary rounded-full flex items-center justify-center bg-background flex-shrink-0">
                        <program.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{program.title}</CardTitle>
                        <p className="text-sm text-primary font-semibold">{program.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Program Details */}
                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span>{program.cost}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{program.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Curriculum:</h4>
                      <div className="space-y-2">
                        {program.curriculum.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 border border-primary bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="border-t-2 border-primary pt-4 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span><strong>Next Start:</strong> {program.nextStart}</span>
                        <span><strong>Spots:</strong> {program.spots}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full shadow-sketch hover:shadow-bold">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Workshops Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Drop-in Workshops</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.map((workshop, idx) => (
                <Card key={workshop.title} className="border-2 border-primary shadow-sketch hover:shadow-bold transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <h3 className="font-bold">{workshop.title}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div>Duration: {workshop.duration}</div>
                      <div>Schedule: {workshop.frequency}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Equipment & Resources */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Equipment & Resources</h2>
            <Card className="border-4 border-primary shadow-bold bg-muted/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource, idx) => (
                    <div key={resource.item} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 border-2 border-primary bg-primary rounded-full"></div>
                        <h4 className="font-bold">{resource.item}</h4>
                      </div>
                      <div className="text-sm text-muted-foreground ml-6">
                        <div>Access: {resource.access}</div>
                        <div>Booking: {resource.booking}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform rotate-1 overflow-hidden">
              <CardContent className="p-12">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Ready to Start Your Film Journey?</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Whether you're a complete beginner or looking to advance your skills, 
                    we have a program that's perfect for you. Join our community of storytellers today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="shadow-sketch hover:shadow-bold">
                      <Film className="mr-2 h-5 w-5" />
                      Browse All Programs
                    </Button>
                    <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                      <Mic className="mr-2 h-5 w-5" />
                      Schedule a Consultation
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

export default Programs;