import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SubscriptionCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  whatsappLink: string;
}

export function SubscriptionCard({ title, price, originalPrice, image, whatsappLink }: SubscriptionCardProps) {
  return (
    <Card className="w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl text-center text-hulk-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-hulk-primary">{price} ريال</p>
          {originalPrice && (
            <p className="text-gray-500 line-through text-sm">{originalPrice} ريال</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-hulk-primary hover:bg-hulk-secondary text-white"
          onClick={() => window.open(whatsappLink, "_blank")}
        >
          اشترك الآن
        </Button>
      </CardFooter>
    </Card>
  );
}