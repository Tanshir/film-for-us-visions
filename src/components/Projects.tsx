import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Users, Award } from "lucide-react";
import projectsImage from "@/assets/projects-collage.jpg";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Voices of the Market",
      category: "Documentary",
      duration: "45 min",
      year: "2024",
      description: "A powerful documentary showcasing the stories of local market vendors and their daily struggles and triumphs.",
      participants: 12,
      awards: 2
    },
    {
      title: "Youth Dreams",
      category: "Short Film Series",
      duration: "8 episodes",
      year: "2024",
      description: "Young filmmakers from underprivileged communities share their aspirations and creative journeys.",
      participants: 25,
      awards: 1
    },
    {
      title: "Heritage Tales",
      category: "Cultural Documentary",
      duration: "60 min",
      year: "2023",
      description: "Preserving oral traditions and cultural heritage through the lens of community elders.",
      participants: 18,
      awards: 3
    }
  ];

  const stats = [
    { number: "50+", label: "Films Produced" },
    { number: "200+", label: "Community Members" },
    { number: "15+", label: "Awards Won" },
    { number: "10+", label: "Festivals" }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the powerful stories and impactful films created by our community members, 
            showcasing diverse voices and authentic narratives.
          </p>
        </div>

        {/* Hero Project */}
        <div className="mb-20">
          <Card className="overflow-hidden bg-card/30 backdrop-blur-md border-border/50 shadow-cinematic">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative group">
                <img 
                  src={projectsImage} 
                  alt="Featured Projects" 
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary hover:scale-110 transition-all duration-500 shadow-glow-spotlight"
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-primary font-semibold">Latest Release</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Community Chronicles 2024</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our most ambitious project yet - a collaborative documentary series 
                  featuring stories from 15 different communities, showcasing the 
                  diversity and resilience of human experiences.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Released 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>45 Participants</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>3 Festival Selections</span>
                  </div>
                </div>
                <Button className="bg-gradient-spotlight hover:shadow-glow-spotlight transition-all duration-500 w-fit">
                  Watch Full Series
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-accent animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants:</span>
                    <span>{project.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Awards:</span>
                    <span>{project.awards}</span>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  className="w-full hover:border-primary hover:shadow-glow-accent transition-all duration-500"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch Project
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;