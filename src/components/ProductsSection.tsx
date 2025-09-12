import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Bone, Shield, ArrowRight } from "lucide-react";
import pharmaceuticalsImage from "@/assets/pharmaceuticals.jpg";
import apiImage from "@/assets/api-ingredients.jpg";
import veterinaryImage from "@/assets/veterinary.jpg";

const ProductsSection = () => {
  const productCategories = [
    {
      icon: Heart,
      title: "Cardiovascular",
      description: "Premium heart medications with proven efficacy and safety profiles.",
      features: ["ACE Inhibitors", "Beta Blockers", "Statins", "Anticoagulants"],
      highlight: "Beyond Generics",
      image: pharmaceuticalsImage
    },
    {
      icon: Brain,
      title: "Neurological",
      description: "Advanced neurological treatments for better patient outcomes.",
      features: ["Anticonvulsants", "Antidepressants", "Cognitive Enhancers", "Pain Management"],
      highlight: "Premium Quality",
      image: apiImage
    },
    {
      icon: Bone,
      title: "Orthopedic",
      description: "Specialized solutions for bone and joint health.",
      features: ["Anti-inflammatories", "Bone Health", "Joint Care", "Muscle Relaxants"],
      highlight: "Trusted Formula",
      image: veterinaryImage
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Comprehensive preventive healthcare solutions.",
      features: ["Vitamins", "Supplements", "Immunity Boosters", "Wellness Products"],
      highlight: "Daily Wellness",
      image: pharmaceuticalsImage
    }
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Products
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Premium Healthcare for
            <span className="text-accent"> All</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality medicines designed to meet 
            diverse healthcare needs without compromising on quality or affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-celtic-lg group h-full overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <Badge variant="outline" className="mb-2 border-gray-accent text-gray-accent-dark">
                  {category.highlight}
                </Badge>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-center">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/5 group/btn"
                >
                  Explore Range
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team of experts can work with you to develop tailored pharmaceutical 
              solutions that meet your specific requirements.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 transition-smooth shadow-celtic-md"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;