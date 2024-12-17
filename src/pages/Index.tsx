import { Button } from "@/components/ui/button";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { SocialLinks } from "@/components/SocialLinks";

const WHATSAPP_LINK = "https://wa.me/message/P5CBUNEVIOTCC1";

const subscriptions = [
  {
    title: "اشتراك سنتين",
    price: 400,
    originalPrice: 500,
    image: "https://saleshulk.com/wp-content/uploads/2024/09/produ-24-600x600.jpg",
  },
  {
    title: "اشتراك سنة",
    price: 250,
    image: "https://saleshulk.com/wp-content/uploads/2024/09/produ-12-600x600.jpg",
  },
  {
    title: "اشتراك 6 أشهر",
    price: 150,
    image: "https://saleshulk.com/wp-content/uploads/2024/09/produ-06-600x600.jpg",
  },
  {
    title: "اشتراك 3 أشهر",
    price: 100,
    image: "https://saleshulk.com/wp-content/uploads/2024/09/produ-03-copy-600x600.jpg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 rtl">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-hulk-dark mb-6">
          HULK اشتراكات
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          أفضل خدمة مشاهدة للقنوات والأفلام والمسلسلات
        </p>
        <Button
          size="lg"
          className="bg-hulk-primary hover:bg-hulk-secondary text-white animate-float"
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
        >
          احصل على تجربة مجانية الآن!
        </Button>
      </section>

      {/* Subscriptions Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-hulk-dark mb-12">
          اختر الباقة المناسبة لك
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subscriptions.map((sub) => (
            <SubscriptionCard
              key={sub.title}
              {...sub}
              whatsappLink={WHATSAPP_LINK}
            />
          ))}
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="container mx-auto px-4 py-16 text-center bg-hulk-dark text-white rounded-lg my-16">
        <h2 className="text-3xl font-bold mb-6">اطلب التجربة المجانية الآن!</h2>
        <p className="text-xl mb-8">
          احصل الآن على الحزمة التجريبية المجانية من سيرفر هالك
          <br />
          واستمتع بتجربة غير محدودة للخدمات قبل اتخاذ قرارك
        </p>
        <Button
          size="lg"
          className="bg-white text-hulk-dark hover:bg-gray-100"
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
        >
          ابدأ التجربة المجانية
        </Button>
      </section>

      {/* Social Links Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-hulk-dark mb-12">
          تواصل معنا
        </h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Index;