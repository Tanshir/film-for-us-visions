import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Users, Award, Eye, Download, Share2, Film, Trophy, Star } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Voices of the Market",
      category: "Documentary",
      duration: "45 min",
      year: "2024",
      description: "A powerful documentary showcasing the stories of local market vendors and their daily struggles and triumphs.",
      participants: 12,
      awards: 2,
      views: "25K",
      status: "Available",
      festivals: ["Regional Documentary Festival", "Community Stories Awards"],
      director: "Community Collective",
      image: "📽️"
    },
    {
      title: "Youth Dreams",
      category: "Short Film Series",
      duration: "8 episodes × 15min",
      year: "2024", 
      description: "Young filmmakers from underprivileged communities share their aspirations and creative journeys.",
      participants: 25,
      awards: 1,
      views: "40K",
      status: "Available",
      festivals: ["Youth Film Festival"],
      director: "Film For Us Youth Collective",
      image: "🎬"
    },
    {
      title: "Heritage Tales",
      category: "Cultural Documentary",
      duration: "60 min",
      year: "2023",
      description: "Preserving oral traditions and cultural heritage through the lens of community elders.",
      participants: 18,
      awards: 3,
      views: "60K",
      status: "Available",
      festivals: ["Cultural Heritage Film Festival", "Documentary Showcase", "Regional Arts Festival"],
      director: "Elder Stories Collective",
      image: "📚"
    },
    {
      title: "Street Symphony",
      category: "Music Documentary",
      duration: "35 min",
      year: "2023",
      description: "Following street musicians and their role in creating community connections through music.",
      participants: 8,
      awards: 1,
      views: "15K",
      status: "Available",
      festivals: ["Music & Film Festival"],
      director: "Sound Stories Team",
      image: "🎵"
    },
    {
      title: "Water Stories",
      category: "Environmental Doc",
      duration: "50 min",
      year: "2022",
      description: "Communities affected by water scarcity tell their stories of resilience and adaptation.",
      participants: 20,
      awards: 4,
      views: "80K",
      status: "Available",
      festivals: ["Environmental Film Festival", "Social Impact Awards", "Documentary Excellence", "Water & Sustainability Festival"],
      director: "Environmental Voices Collective",
      image: "💧"
    },
    {
      title: "Learning to Fly",
      category: "Educational Series",
      duration: "6 episodes × 20min",
      year: "2022",
      description: "Following students in our film programs as they develop their skills and find their creative voice.",
      participants: 35,
      awards: 2,
      views: "30K",
      status: "Available",
      festivals: ["Educational Media Awards", "Community Impact Festival"],
      director: "Film For Us Education Team",
      image: "✈️"
    }
  ];

  const currentProjects = [
    {
      title: "Digital Divide Stories",
      status: "In Production",
      completion: "75%",
      expectedRelease: "Spring 2024",
      description: "Exploring how technology access affects different communities"
    },
    {
      title: "Micro-Business Chronicles", 
      status: "Pre-Production",
      completion: "30%",
      expectedRelease: "Summer 2024", 
      description: "Small entrepreneurs sharing their journey and challenges"
    },
    {
      title: "Climate Voices",
      status: "Development",
      completion: "15%",
      expectedRelease: "Fall 2024",
      description: "Local perspectives on climate change and community responses"
    }
  ];

  const stats = [
    { number: "150+", label: "Total Films", icon: Film },
    { number: "500K+", label: "Total Views", icon: Eye },
    { number: "25+", label: "Festival Awards", icon: Trophy },
    { number: "15+", label: "Film Festivals", icon: Star }
  ];

  const categories = [
    "All Projects", "Documentary", "Short Films", "Educational", "Music", "Environmental", "Cultural"
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
              <div className="w-32 h-6 border-2 border-primary bg-card shadow-sketch transform rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Community <span className="bg-primary text-primary-foreground px-4 py-2 transform -rotate-1 inline-block">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover powerful stories created by our community members. Each project represents 
              authentic voices, diverse perspectives, and collaborative filmmaking at its finest.
            </p>
          </div>

          {/* Project Stats */}
          <div className="mb-16">
            <Card className="border-4 border-primary shadow-bold transform rotate-1">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto flex items-center justify-center bg-background">
                        <stat.icon className="w-8 h-8" />
                      </div>
                      <div className="text-3xl font-bold">{stat.number}</div>
                      <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, idx) => (
                <Button 
                  key={category} 
                  variant={idx === 0 ? "default" : "secondary"}
                  size="sm"
                  className="shadow-sketch hover:shadow-bold"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Project Hero */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Release</h2>
            <Card className="border-4 border-primary shadow-bold overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative bg-muted p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-8xl transform rotate-12 opacity-20">📽️</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="rounded-full w-20 h-20 shadow-bold"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">
                      NOW STREAMING
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Community Chronicles 2024</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our most ambitious collaborative project featuring 15 different communities 
                    across the region. A powerful anthology of resilience, creativity, and human connection.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Released Jan 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>45 Participants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>3 Festival Awards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-primary" />
                      <span>100K+ Views</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="shadow-sketch hover:shadow-bold">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Button>
                    <Button variant="secondary" className="shadow-sketch hover:shadow-bold">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <Card 
                  key={project.title}
                  className={`border-2 border-primary hover:shadow-bold transition-all transform ${
                    idx % 3 === 0 ? 'hover:rotate-1' : idx % 3 === 1 ? 'hover:-rotate-1' : 'hover:rotate-1'
                  }`}
                >
                  <CardContent className="p-6">
                    {/* Project Thumbnail */}
                    <div className="relative bg-muted rounded border-2 border-primary mb-4 p-8 text-center">
                      <div className="text-6xl mb-2">{project.image}</div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/80">
                        <Button size="sm" className="rounded-full">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Duration: {project.duration}</div>
                        <div>Views: {project.views}</div>
                        <div>Participants: {project.participants}</div>
                        <div>Awards: {project.awards}</div>
                      </div>
                      
                      {project.festivals.length > 0 && (
                        <div className="text-xs">
                          <span className="font-semibold">Festivals: </span>
                          {project.festivals.slice(0, 2).join(", ")}
                          {project.festivals.length > 2 && "..."}
                        </div>
                      )}
                      
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">
                          <Play className="mr-1 h-3 w-3" />
                          Watch
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Projects in Development</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {currentProjects.map((project, idx) => (
                <Card key={project.title} className="border-2 border-primary shadow-sketch">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm font-bold text-primary">{project.status}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Progress:</span>
                        <span>{project.completion}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: project.completion }}
                        ></div>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Release:</span>
                        <span>{project.expectedRelease}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Have a Story to Tell?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Every community has unique stories worth sharing. Join our next project 
                  or propose your own community documentary idea.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-sketch hover:shadow-bold">
                    Propose a Project
                  </Button>
                  <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                    Join Next Production
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

export default Projects;