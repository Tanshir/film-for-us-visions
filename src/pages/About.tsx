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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Film For Us</span>
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are an independent film organization dedicated to democratizing cinema 
            and empowering communities through the art of storytelling.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Our Mission</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">1</span>
                  </div>
                  <h3 className="text-lg font-semibold">Educate</h3>
                  <p className="text-muted-foreground">
                    Teaching film literacy and production skills to mass audiences
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">2</span>
                  </div>
                  <h3 className="text-lg font-semibold">Empower</h3>
                  <p className="text-muted-foreground">
                    Supporting underprivileged individuals in pursuing film education
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">3</span>
                  </div>
                  <h3 className="text-lg font-semibold">Amplify</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card 
                key={value.title}
                className="hover:shadow-medium transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;