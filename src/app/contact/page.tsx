import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free roof inspection from Champions Choice Roofing. Call (502) 919-0278 or fill out our contact form. Serving Louisville, KY and surrounding areas.",
  openGraph: {
    title: "Contact Us | Champions Choice Roofing",
    description:
      "Get a free roof inspection. Call (502) 919-0278 or request a quote online.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    items: [
      { text: "(502) 919-0278", href: "tel:5029190278" },
      { text: "(502) 434-8253", href: "tel:5024348253" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    items: [
      {
        text: "dean@roofwithchampions.com",
        href: "mailto:dean@roofwithchampions.com",
      },
    ],
  },
  {
    icon: MapPin,
    label: "Service Area",
    items: [{ text: "Louisville, KY & surrounding areas" }],
  },
  {
    icon: Clock,
    label: "Hours",
    items: [
      { text: "Mon-Fri: 8:00 AM - 6:00 PM" },
      { text: "Sat: By Appointment" },
      { text: "Sun: Closed" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-[#1A1A2E] to-[#F5F5F5]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
            Ready for a free roof inspection? Fill out our form or give us a
            call. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* CTA */}
            <div className="lg:col-span-3">
              <Card className="bg-white border-gray-200 shadow-sm">
                <CardContent className="pt-8 pb-8 text-center">
                  <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                    Request a Free Estimate
                  </h2>
                  <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
                    Click below to fill out our quick assessment form. We&apos;ll review your
                    information and get back to you within 24 hours.
                  </p>
                  <a
                    href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#CC0000] text-white hover:bg-[#A30000] font-bold text-lg px-10 py-6">
                      Start Your Free Assessment
                      <ArrowRight className="size-5 ml-2" />
                    </Button>
                  </a>
                  <p className="mt-6 text-sm text-zinc-500">
                    Or call us directly at{" "}
                    <a href="tel:5029190278" className="text-[#0033A0] hover:text-[#002878] transition-colors">
                      (502) 919-0278
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.label} className="bg-white border-gray-200 shadow-sm">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#0033A0]/10 shrink-0">
                        <info.icon className="size-4 text-[#0033A0]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#1C1C1C] mb-1">
                          {info.label}
                        </h3>
                        {info.items.map((item) =>
                          "href" in item && item.href ? (
                            <a
                              key={item.text}
                              href={item.href}
                              className="block text-sm text-[#6B7280] hover:text-[#1C1C1C] transition-colors"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p key={item.text} className="text-sm text-[#6B7280]">
                              {item.text}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Emergency CTA */}
              <Card className="bg-[#CC0000]/10 border-[#CC0000]/20">
                <CardContent className="pt-4 pb-4">
                  <h3 className="text-sm font-bold text-[#CC0000] mb-1">
                    Emergency Storm Damage?
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Call us directly for priority response.
                  </p>
                  <a
                    href="tel:5029190278"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#CC0000] text-white font-semibold text-sm hover:bg-[#A30000] transition-colors"
                  >
                    <Phone className="size-4" />
                    (502) 919-0278
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
