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
        <CheckCircle className="size-12 text-green-600 mb-4" />
        <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Message Sent!</h3>
        <p className="text-[#6B7280]">
          We&apos;ll get back to you within 24 hours. For urgent needs, call us directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#1C1C1C]">Name *</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="bg-white border-gray-300 text-[#1C1C1C] placeholder:text-[#6B7280] h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1C1C1C]">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-white border-gray-300 text-[#1C1C1C] placeholder:text-[#6B7280] h-11"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#1C1C1C]">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(502) 555-0123"
            className="bg-white border-gray-300 text-[#1C1C1C] placeholder:text-[#6B7280] h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service" className="text-[#1C1C1C]">Service Needed</Label>
          <Select value={service} onValueChange={(val) => setService(val ?? "")}>
            <SelectTrigger id="service" className="bg-white border-gray-300 text-[#1C1C1C] h-11 w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200">
              {services.map((s) => (
                <SelectItem key={s} value={s} className="text-[#1C1C1C]">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="service" value={service} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#1C1C1C]">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your project or concerns..."
          className="bg-white border-gray-300 text-[#1C1C1C] placeholder:text-[#6B7280] min-h-[120px]"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="size-4 text-[#CC0000] shrink-0" />
          <p className="text-sm text-[#CC0000]">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#CC0000] text-white hover:bg-[#A30000] font-bold h-12 text-base"
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
