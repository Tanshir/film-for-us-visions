import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        
        {/* Film Festival Poster Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Join Us at the Film Festival
              </h2>
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/87ac8c06-fa7e-4b31-ae66-ac1282896091.png" 
                  alt="Chittagong International All Women Film Festival 2025 - September 4-5, Alliance Française de Chittagong"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-bold border-2 border-primary/20 hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-lg pointer-events-none"></div>
              </div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't miss this incredible celebration of women's voices in cinema. 
                Mark your calendars for September 4-5, 2025!
              </p>
            </div>
          </div>
        </section>
        
        <About />
        <Programs />
        <Projects />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
