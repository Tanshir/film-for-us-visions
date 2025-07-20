import { Card, CardContent } from "@/components/ui/card";
import { Heart, Lightbulb, Users, Globe } from "lucide-react";

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

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Film For Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are an independent film organization dedicated to democratizing cinema 
            and empowering communities through the art of storytelling.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-card/50 backdrop-blur-md border-primary/20 shadow-cinematic">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Mission</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-spotlight mx-auto flex items-center justify-center shadow-glow-spotlight">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h4 className="text-lg font-semibold">Educate</h4>
                  <p className="text-muted-foreground">
                    Teaching film literacy and production skills to mass audiences
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-spotlight mx-auto flex items-center justify-center shadow-glow-spotlight">
                    <span className="text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h4 className="text-lg font-semibold">Empower</h4>
                  <p className="text-muted-foreground">
                    Supporting underprivileged individuals in pursuing film education
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-spotlight mx-auto flex items-center justify-center shadow-glow-spotlight">
                    <span className="text-2xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h4 className="text-lg font-semibold">Amplify</h4>
                  <p className="text-muted-foreground">
                    Helping communities tell their diverse stories through digital media
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-accent animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;