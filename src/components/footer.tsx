import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const services = [
  "Roof Replacement",
  "Roof Repairs",
  "Roof Maintenance",
  "Vinyl Siding",
  "Hardy Siding",
  "Seamless Gutters",
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services We Offer" },
  { href: "/roof-replacements", label: "Roof Replacements" },
  { href: "/about", label: "Meet the Champions" },
  { href: "/blog", label: "Champions Blog" },
  { href: "/%23teamblue", label: "#TeamBlue" },
  { href: "/%23teamred", label: "#TeamRed" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A1A2E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo/logo.jpeg"
                alt="Champions Choice Roofing"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">Champions Choice</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Storm-Tested. Champion-Approved. Louisville&apos;s trusted roofing
              contractor delivering quality craftsmanship and unmatched warranties.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/share/18zCDqTtdS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:5029190278"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  (502) 919-0278
                </a>
              </li>
              <li>
                <a
                  href="tel:5024348253"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Phone className="size-4 shrink-0" />
                  (502) 434-8253
                </a>
              </li>
              <li>
                <a
                  href="mailto:dean@roofwithchampions.com"
                  className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="size-4 shrink-0" />
                  dean@roofwithchampions.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-300">
                <MapPin className="size-4 shrink-0" />
                Louisville, Kentucky
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Champions Choice Roofing. All rights reserved.</p>
          <p>Serving Louisville, KY &amp; surrounding areas</p>
        </div>
      </div>
    </footer>
  );
}
