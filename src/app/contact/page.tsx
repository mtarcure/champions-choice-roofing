import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free roof inspection from Champions Choice Roofing. Call (502) 434-8253 or fill out our contact form. Serving Louisville, KY and surrounding areas.",
  openGraph: {
    title: "Contact Us | Champions Choice Roofing",
    description:
      "Get a free roof inspection. Call (502) 434-8253 or request a quote online.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    items: [
      { text: "(502) 434-8253", href: "tel:5024348253" },
      { text: "(502) 919-0278", href: "tel:5029190278" },
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-zinc-950 to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Ready for a free roof inspection? Fill out the form below or give us a
            call. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Request a Free Estimate
                  </h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.label} className="bg-zinc-900/50 border-zinc-800">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 shrink-0">
                        <info.icon className="size-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">
                          {info.label}
                        </h3>
                        {info.items.map((item) =>
                          "href" in item && item.href ? (
                            <a
                              key={item.text}
                              href={item.href}
                              className="block text-sm text-zinc-400 hover:text-white transition-colors"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <p key={item.text} className="text-sm text-zinc-400">
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
              <Card className="bg-amber-500/10 border-amber-500/20">
                <CardContent className="pt-4 pb-4">
                  <h3 className="text-sm font-bold text-amber-400 mb-1">
                    Emergency Storm Damage?
                  </h3>
                  <p className="text-sm text-zinc-400 mb-3">
                    Call us directly for priority response.
                  </p>
                  <a
                    href="tel:5024348253"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 transition-colors"
                  >
                    <Phone className="size-4" />
                    (502) 434-8253
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
