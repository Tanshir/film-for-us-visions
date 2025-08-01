
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Users, Heart, Film, Phone, Award, Play, ArrowRight } from "lucide-react";

const CitizenFilmmaking = () => {
  const empowermentAreas = [
    {
      title: "Students",
      description: "Documenting educational experiences and campus life",
      icon: "🎓"
    },
    {
      title: "Workers",
      description: "Sharing stories from the workplace and labor rights",
      icon: "👷"
    },
    {
      title: "Women",
      description: "Amplifying women's voices and experiences",
      icon: "👩"
    },
    {
      title: "Farmers",
      description: "Rural stories and agricultural challenges",
      icon: "👨‍🌾"
    },
    {
      title: "Youth",
      description: "Next generation perspectives and dreams",
      icon: "🌟"
    },
    {
      title: "Changemakers",
      description: "Activists and community organizers",
      icon: "✊"
    }
  ];

  const features = [
    {
      title: "Personal",
      description: "Individual stories that matter",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "Political",
      description: "Social justice and systemic change",
      color: "bg-red-100 border-red-300"
    },
    {
      title: "Poetic",
      description: "Artistic expression and creativity",
      color: "bg-purple-100 border-purple-300"
    },
    {
      title: "Powerful",
      description: "Impact that creates real change",
      color: "bg-green-100 border-green-300"
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
              <div className="w-32 h-6 border-2 border-primary bg-card shadow-sketch transform rotate-2"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              <span className="bg-primary text-primary-foreground px-4 py-2 transform -rotate-1 inline-block">Citizen</span> Filmmaking
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering everyday people to become storytellers of their own communities. 
              Powerful stories don't always come from trained professionals — they come from those who live the experience.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <Card className="border-4 border-primary shadow-bold transform rotate-1 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative bg-primary/10 p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-8xl transform -rotate-12 opacity-30">📱</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Phone className="w-16 h-16 text-primary" />
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Accessible Filmmaking</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Through this project, we provide training, mentorship, and a platform for aspiring filmmakers — 
                    especially from marginalized or underrepresented backgrounds — to create meaningful short 
                    documentary films using accessible tools like mobile phones.
                  </p>
                  <div className="flex gap-3">
                    <Button className="shadow-sketch hover:shadow-bold">
                      <Camera className="mr-2 h-4 w-4" />
                      Join the Movement
                    </Button>
                    <Button variant="secondary" className="shadow-sketch hover:shadow-bold">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Films
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Who We Empower */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Who We Empower</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {empowermentAreas.map((area, idx) => (
                <Card 
                  key={area.title}
                  className={`border-2 border-primary hover:shadow-bold transition-all transform ${
                    idx % 3 === 0 ? 'hover:rotate-1' : idx % 3 === 1 ? 'hover:-rotate-1' : 'hover:rotate-1'
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Films Are */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Films Are</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <Card 
                  key={feature.title}
                  className={`border-4 ${feature.color} hover:shadow-bold transition-all transform hover:scale-105`}
                >
                  <CardHeader className="text-center pb-3">
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mb-20">
            <Card className="border-4 border-primary shadow-bold bg-muted/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Challenging Dominant Narratives</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                  This project brings together students, workers, women, farmers, youth, and everyday 
                  changemakers — turning them into citizen filmmakers who document their realities, 
                  raise unheard voices, and challenge dominant narratives.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-background">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">Document Realities</h3>
                    <p className="text-sm text-muted-foreground">Authentic stories from lived experiences</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-background">
                      <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">Raise Unheard Voices</h3>
                    <p className="text-sm text-muted-foreground">Platform for marginalized communities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-primary rounded-full mx-auto mb-4 flex items-center justify-center bg-background">
                      <Award className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold mb-2">Challenge Narratives</h3>
                    <p className="text-sm text-muted-foreground">Question and reshape dominant stories</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-4 border-primary shadow-bold transform -rotate-1">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Become a Citizen Filmmaker</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Ready to tell your story? Join our community of citizen filmmakers and start creating 
                  meaningful documentaries that matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="shadow-sketch hover:shadow-bold">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="lg" className="shadow-sketch hover:shadow-bold">
                    Learn More
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

export default CitizenFilmmaking;
