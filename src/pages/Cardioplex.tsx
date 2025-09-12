import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Cardioplex = () => {
  const images = [
    "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1747930318086-8dbe46e52ddb?auto=format&fit=crop&w=800&q=80",
    "https://plus.unsplash.com/premium_photo-1672163163696-a477b6930c28?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cardioplex</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Advanced ACE inhibitor for managing hypertension and heart failure. Proven to reduce cardiovascular events and improve patient outcomes with minimal side effects.
          </p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="mb-12"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Cardioplex Packaging ${index + 1}`}
                  className="w-full h-80 md:h-96 object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              For more inquiries or bulk orders, contact our pharmaceutical specialists.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cardioplex;
