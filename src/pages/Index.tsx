import { Button } from "@/components/ui/button";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { SocialLinks } from "@/components/SocialLinks";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=%2B17027602707&text=%D8%A7%D8%B4%D8%AA%D8%B1%D8%A7%D9%83%20%D9%87%D9%88%D9%84%D9%83";

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

const features = [
  "دعم فني ١٢/٢٤",
  "محتوي عائلي",
  "تحديثات مستمرة",
  "أفلام ومسلسلات ٤K",
  "مشاهدة بدون تقطيع",
  "اسعار مناسبة للجميع",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#201b13] text-white rtl">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <img
          src="https://saleshulk.com/wp-content/uploads/2024/10/hulk-tv.png"
          alt="HULK TV"
          className="mx-auto mb-8 h-32 md:h-40"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-[#cdae51] mb-6">
          HULK اشتراكات
        </h1>
        <p className="text-xl text-[#fff] mb-8">
          أفضل خدمة مشاهدة للقنوات والأفلام والمسلسلات
        </p>
        <Button
          size="lg"
          className="bg-[#cdae51] hover:bg-[#b69a46] text-[#201b13] animate-float"
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
        >
          احصل على تجربة مجانية الآن!
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#cdae51] mb-12">
          مميزاتنا
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-lg text-white"
            >
              <CheckCircle2 className="w-6 h-6 text-[#cdae51]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Subscriptions Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#cdae51] mb-12">
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
      <section className="container mx-auto px-4 py-16 text-center bg-[#cdae51] rounded-lg my-16">
        <h2 className="text-3xl font-bold mb-6 text-[#201b13]">اطلب التجربة المجانية الآن!</h2>
        <p className="text-xl mb-8 text-[#201b13]">
          احصل الآن على الحزمة التجريبية المجانية من سيرفر هالك
          <br />
          واستمتع بتجربة غير محدودة للخدمات قبل اتخاذ قرارك
        </p>
        <Button
          size="lg"
          className="bg-[#201b13] text-white hover:bg-[#302820]"
          onClick={() => window.open(WHATSAPP_LINK, "_blank")}
        >
          ابدأ التجربة المجانية
        </Button>
      </section>

      {/* Social Links Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-[#cdae51] mb-12">
          تواصل معنا
        </h2>
        <SocialLinks />
      </section>
    </div>
  );
};

export default Index;
