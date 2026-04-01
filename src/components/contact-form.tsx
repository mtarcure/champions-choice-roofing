"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const services = [
  "Roof Replacement",
  "Roof Repairs",
  "Roof Maintenance",
  "Storm Damage Inspection",
  "Ventilation Calculations",
  "Vinyl Siding",
  "Hardy Siding",
  "Aluminum Wraps & Soffits",
  "Seamless Gutters",
  "Gutter Guards",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [service, setService] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.set("service", service);

    try {
      const res = await fetch("https://formspree.io/f/xpznqkdo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle className="size-12 text-green-500 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">
          We&apos;ll get back to you within 24 hours. For urgent needs, call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-zinc-300">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-zinc-300">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-zinc-300">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(502) 555-0123"
            className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 h-11"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-zinc-300">Service Needed</Label>
          <Select value={service} onValueChange={(val) => setService(val ?? "")}>
            <SelectTrigger className="bg-zinc-900/50 border-zinc-700 text-white h-11 w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700">
              {services.map((s) => (
                <SelectItem key={s} value={s} className="text-zinc-200">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="service" value={service} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-zinc-300">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project or concerns..."
          className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[120px]"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
          <AlertCircle className="size-4 text-red-400 shrink-0" />
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-amber-500 text-black hover:bg-amber-400 font-bold h-12 text-base"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            <Send className="size-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
