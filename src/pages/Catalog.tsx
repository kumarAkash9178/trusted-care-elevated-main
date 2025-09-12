import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Pill,
  Heart,
  Brain,
  Bone,
  Shield,
  Zap,
  Activity,
  Eye,
  Smile,
  Stethoscope,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Catalog = () => {
  const medicines = [
    {
      id: 1,
      name: "Cardioplex",
      category: "Cardiovascular",
      frontImage:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=1240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Advanced ACE inhibitor for managing hypertension and heart failure. Proven to reduce cardiovascular events and improve patient outcomes with minimal side effects.",
    },
    {
      id: 2,
      name: "Neurostim",
      category: "Neurological",
      icon: Brain,
      description:
        "Selective serotonin reuptake inhibitor (SSRI) for treating depression and anxiety disorders. Fast-acting formula with enhanced bioavailability.",
    },
    {
      id: 3,
      name: "Bonecalc",
      category: "Orthopedic",
      icon: Bone,
      description:
        "Calcium and Vitamin D3 supplement for maintaining bone density and preventing osteoporosis in adults and elderly patients.",
    },
    {
      id: 4,
      name: "Immunofort",
      category: "Immune System",
      icon: Shield,
      description:
        "Comprehensive immune system booster containing vitamins C, D, zinc, and echinacea extract for enhanced resistance to infections.",
    },
    {
      id: 5,
      name: "Energivit",
      category: "Vitamins",
      icon: Zap,
      description:
        "High-potency B-complex vitamin supplement for energy metabolism and nervous system support. Ideal for active individuals and professionals.",
    },
    {
      id: 6,
      name: "Glucocontrol",
      category: "Diabetes",
      icon: Activity,
      description:
        "Metformin-based medication for Type 2 diabetes management. Helps control blood sugar levels and improves insulin sensitivity.",
    },
    {
      id: 7,
      name: "Visioncare",
      category: "Ophthalmology",
      icon: Eye,
      description:
        "Lutein and zeaxanthin supplement for eye health and protection against age-related macular degeneration and cataracts.",
    },
    {
      id: 8,
      name: "Arthrex",
      category: "Anti-inflammatory",
      icon: Bone,
      description:
        "Non-steroidal anti-inflammatory drug (NSAID) for treating arthritis, joint pain, and inflammatory conditions with gastric protection.",
    },
    {
      id: 9,
      name: "Sleepwell",
      category: "Sleep Aid",
      icon: Brain,
      description:
        "Natural melatonin-based sleep aid for treating insomnia and regulating sleep-wake cycles without dependency risks.",
    },
    {
      id: 10,
      name: "Digestease",
      category: "Gastroenterology",
      icon: Smile,
      description:
        "Probiotic supplement containing beneficial bacteria strains for digestive health and maintaining healthy gut microbiome.",
    },
    {
      id: 11,
      name: "Painrelief",
      category: "Analgesic",
      icon: Zap,
      description:
        "Fast-acting acetaminophen and ibuprofen combination for effective pain relief from headaches, muscle aches, and fever.",
    },
    {
      id: 12,
      name: "Allerblock",
      category: "Allergy",
      icon: Shield,
      description:
        "Antihistamine medication for seasonal allergies, hay fever, and allergic reactions with 24-hour relief formula.",
    },
    {
      id: 13,
      name: "Respirex",
      category: "Respiratory",
      icon: Activity,
      description:
        "Bronchodilator for asthma and COPD management. Provides rapid relief from breathing difficulties and bronchospasm.",
    },
    {
      id: 14,
      name: "Skinhealth",
      category: "Dermatology",
      icon: Smile,
      description:
        "Topical treatment for eczema and dermatitis containing hydrocortisone and moisturizing agents for skin barrier repair.",
    },
    {
      id: 15,
      name: "Thyrobalance",
      category: "Endocrine",
      icon: Stethoscope,
      description:
        "Levothyroxine sodium for hypothyroidism treatment. Synthetic thyroid hormone replacement therapy with consistent potency.",
    },
    {
      id: 16,
      name: "Bloodflow",
      category: "Circulation",
      icon: Heart,
      description:
        "Anticoagulant medication for preventing blood clots and reducing stroke risk in patients with atrial fibrillation.",
    },
    {
      id: 17,
      name: "Memorymax",
      category: "Cognitive",
      icon: Brain,
      description:
        "Nootropic supplement with ginkgo biloba and omega-3 fatty acids for cognitive enhancement and memory support.",
    },
    {
      id: 18,
      name: "Jointflex",
      category: "Joint Health",
      icon: Bone,
      description:
        "Glucosamine and chondroitin supplement for maintaining joint health and reducing cartilage degradation in arthritis.",
    },
    {
      id: 19,
      name: "Anxiocalm",
      category: "Anxiety",
      icon: Brain,
      description:
        "Mild anxiolytic medication for treating generalized anxiety disorder and panic attacks with minimal sedation.",
    },
    {
      id: 20,
      name: "Heartstrong",
      category: "Cardiology",
      icon: Heart,
      description:
        "Statin medication for cholesterol management and cardiovascular protection. Reduces LDL cholesterol and inflammation.",
    },
    {
      id: 21,
      name: "Woundhealer",
      category: "Wound Care",
      icon: Shield,
      description:
        "Antimicrobial wound dressing with silver ions for preventing infection and promoting faster healing of cuts and burns.",
    },
    {
      id: 22,
      name: "Livercleanse",
      category: "Hepatology",
      icon: Activity,
      description:
        "Milk thistle and dandelion extract supplement for liver detoxification and protection against hepatotoxicity.",
    },
    {
      id: 23,
      name: "Kidneyprotect",
      category: "Nephrology",
      icon: Stethoscope,
      description:
        "ACE inhibitor specifically formulated for kidney protection in diabetic patients and chronic kidney disease management.",
    },
    {
      id: 24,
      name: "Stomachsoothe",
      category: "Gastric Health",
      icon: Smile,
      description:
        "Proton pump inhibitor for treating gastroesophageal reflux disease (GERD) and peptic ulcers with long-lasting relief.",
    },
    {
      id: 25,
      name: "Cancersupport",
      category: "Oncology Support",
      icon: Shield,
      description:
        "Nutritional supplement designed to support cancer patients during chemotherapy with essential vitamins and antioxidants.",
    },
  ];

  const categories = [
    "All",
    "Cardiovascular",
    "Neurological",
    "Orthopedic",
    "Immune System",
    "Vitamins",
    "Diabetes",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              Medicine Catalog
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Complete <span className="text-accent">Medicine Range</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive collection of high-quality medicines
              across various therapeutic categories.
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="border-primary/20 hover:border-primary/50"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Medicine Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* First Card with Image + Learn More Link */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-celtic-lg group h-full">
              <CardHeader className="text-center pb-4">
                <img
                  src={medicines[0].frontImage}
                  alt="Cardioplex Front"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <Badge
                  variant="outline"
                  className="mb-2 border-gray-accent text-gray-accent-dark"
                >
                  {medicines[0].category}
                </Badge>
                <CardTitle className="text-xl text-foreground">
                  {medicines[0].name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {medicines[0].description}
                </p>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary/5"
                    onClick={() => window.open("/medicine-detail/1", "_blank")}
                  >
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-accent hover:opacity-90"
                  >
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Remaining 24 Cards Stay As-Is */}
            {medicines.slice(1).map((medicine) => (
              <Card
                key={medicine.id}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-celtic-lg group h-full"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <medicine.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge
                    variant="outline"
                    className="mb-2 border-gray-accent text-gray-accent-dark"
                  >
                    {medicine.category}
                  </Badge>
                  <CardTitle className="text-xl text-foreground">
                    {medicine.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {medicine.description}
                  </p>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary/5"
                    >
                      Learn More
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-accent hover:opacity-90"
                    >
                      Request Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Need Specific Formulations?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our pharmaceutical experts can develop custom formulations
                tailored to your specific therapeutic needs.
              </p>
              <Button
                size="lg"
                className="bg-gradient-accent hover:opacity-90 transition-smooth shadow-celtic-md"
              >
                Contact Our Specialists
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
