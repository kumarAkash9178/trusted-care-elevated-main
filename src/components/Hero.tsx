import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern pharmaceutical laboratory" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-accent/10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-smooth">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by Healthcare Professionals
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Premium Quality
            </span>
            <br />
            Medicines at
            <br />
            <span className="text-accent">Affordable Prices</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We deliver world-class medicines that combine trusted quality with accessibility. 
            Beyond generics, beyond compromise — your health deserves excellence.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up">
            <div className="flex items-center space-x-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Trusted Quality</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Affordable Excellence</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Beyond Generics</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-celtic-md group px-8 py-6 text-lg"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg"
            >
              Quality Assurance
              <Star className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading healthcare institutions</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded animate-float" style={{ animationDelay: '0s' }} />
              <div className="h-8 w-24 bg-muted rounded animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="h-8 w-24 bg-muted rounded animate-float" style={{ animationDelay: '1s' }} />
              <div className="h-8 w-24 bg-muted rounded animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;