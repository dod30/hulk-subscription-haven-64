import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Send, Twitter } from "lucide-react";

export function SocialLinks() {
  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://wa.me/message/P5CBUNEVIOTCC1",
      label: "واتس اب",
      className: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Twitter,
      href: "https://x.com/tv_hulk_store",
      label: "تويتر",
      className: "bg-black hover:bg-gray-800",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hulktv/",
      label: "انستجرام",
      className: "bg-pink-500 hover:bg-pink-600",
    },
    {
      icon: Send,
      href: "https://t.me/SalesHulkTV",
      label: "تلجرام",
      className: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          onClick={() => window.open(link.href, "_blank")}
          className={`${link.className} text-white`}
        >
          <link.icon className="w-5 h-5 ml-2" />
          {link.label}
        </Button>
      ))}
    </div>
  );
}