import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Microscope, ShieldCheck, Users, Globe, CheckCircle2 } from "lucide-react";
import qualityLabImage from "@/assets/quality-lab.jpg";

const QualitySection = () => {
  const qualityFeatures = [
    {
      icon: Award,
      title: "ISO Certified Manufacturing",
      description: "All our medicines are manufactured in ISO-certified facilities with strict quality control protocols."
    },
    {
      icon: Microscope,
      title: "Advanced Testing",
      description: "Every batch undergoes rigorous testing using state-of-the-art analytical methods and equipment."
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description: "Full compliance with FDA, WHO-GMP, and international pharmaceutical standards."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by experienced pharmacists and quality assurance professionals with decades of expertise."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Meeting international quality benchmarks while maintaining affordability and accessibility."
    },
    {
      icon: CheckCircle2,
      title: "Batch Tracking",
      description: "Complete traceability from raw materials to final product with comprehensive documentation."
    }
  ];

  return (
    <section id="quality" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            Quality Assurance
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Quality You Can 
            <span className="text-primary"> Rely On</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence goes beyond compliance. We've built a reputation 
            on delivering medicines that healthcare professionals trust and patients depend on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-celtic-md group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Lab Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={qualityLabImage} 
              alt="Quality control laboratory" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">State-of-the-Art Quality Lab</h3>
                <p className="text-lg opacity-90">Where excellence meets precision in pharmaceutical testing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-accent-dark">Quality Score</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-accent-dark">Products Tested</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-accent-dark">Quality Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Zero</div>
            <div className="text-gray-accent-dark">Tolerance Policy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;