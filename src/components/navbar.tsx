"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/roof-replacements", label: "Roof Replacements" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#1A1A2E]/98 backdrop-blur-md border-b border-white/10"
          : "bg-[#1A1A2E]"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/logo.jpeg"
              alt="Champions Choice Roofing"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-wider text-white uppercase">
                Champions Choice
              </span>
              <span className="text-[10px] tracking-[0.2em] text-zinc-400 uppercase">
                Roofing
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:5029190278" className="flex items-center gap-1.5 text-sm text-zinc-300 hover:text-white transition-colors">
              <Phone className="size-4" />
              (502) 919-0278
            </a>
            <a
              href="https://forms.gle/RaFpTL7RmBaLgeGF6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-[#CC0000] text-white hover:bg-[#A30000] font-semibold">
                Free Inspection
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <a href="tel:5029190278" aria-label="Call (502) 919-0278">
              <Button variant="ghost" size="icon" className="text-white">
                <Phone className="size-5" />
              </Button>
            </a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="inline-flex items-center justify-center size-8 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#1A1A2E] border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white flex items-center gap-2">
                    <Image
                      src="/images/logo/logo.jpeg"
                      alt="Champions Choice Roofing"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                    Champions Choice
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-6 px-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-zinc-300 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href="tel:5029190278"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/5 text-white font-medium"
                    >
                      <Phone className="size-4" />
                      (502) 919-0278
                    </a>
                    <a
                      href="https://forms.gle/RaFpTL7RmBaLgeGF6"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <Button className="w-full bg-[#CC0000] text-white hover:bg-[#A30000] font-semibold">
                        Get Free Inspection
                      </Button>
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
