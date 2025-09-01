import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Twitter, Instagram } from "lucide-react";
// widgets
import { Navbar, CurvedArrow } from "../../widgets";

// data
import { serviceList, stepsList } from "../../data/data";

// models

const HomePage = () => {
  const ServiceSection = () => {
    return (
      <section className="w-full bg-gray-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          {/* Heading + description */}
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From quick repairs to major home improvements, Moorland Fix has
              you covered with trusted, professional services.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-16 h-16 mb-4"
                  />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const HowItWorks = () => {
    return (
      <section className="w-full bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section heading */}
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <p className="text-sm font-medium text-purple-500 tracking-wide uppercase">
              Our Working Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              How do we work?
            </h2>
          </div>

          {/* Steps grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {stepsList.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center max-w-[220px] relative"
              >
                {/* Circle with number */}
                <div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center font-bold mb-4 ${step.color}`}
                >
                  {step.number}
                </div>

                {/* Title + description */}
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {step.description}
                </p>

                {/* Arrow (only if not last) */}
                {idx < stepsList.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-[-50px]">
                    {/* <ArrowRight className="w-6 h-6 text-gray-400" /> */}
                    <CurvedArrow />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactSection = () => {
    return (
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: text */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have a question, need a service, or want to partner with us? Fill
              out the form and we’ll get back to you as soon as possible.
            </p>
            <p className="text-gray-600">
              You can also reach us at{" "}
              <span className="font-medium">info@yourcompany.com</span>
              <br /> or call{" "}
              <span className="font-medium">+1 (555) 123-4567</span>.
            </p>
          </div>

          {/* Right side: contact form */}
          <div className="bg-white rounded-2xl shadow p-6 md:p-8">
            <form className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
          {/* Column 1: Logo and about */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Moorland Fix</h3>
            <p className="text-sm leading-relaxed">
              Your trusted partner for home services — from cleaning and
              gardening to plumbing, electrical, painting, and more.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-sm">Email: info@moorlandfix.com</p>
            <p className="text-sm mb-4">Phone: +1 (555) 123-4567</p>

            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Moorland Fix. All rights reserved.
        </div>
      </footer>
    );
  };

  return (
    <React.Fragment>
      <Navbar />

      <section className="w-full bg-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left side: text */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                Reliable Home Services, Right When You Need Them
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                Book trusted professionals for plumbing, cleaning, gardening,
                electrical work, or painting — all in just a few clicks. Choose
                your date and time slot, <br /> and let Moorland Fix handle the
                rest.
              </p>
              <div>
                <Button size="lg">Book Now</Button>
              </div>
            </div>

            {/* Right side: image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/hero-image.png"
                alt="Home service illustration"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceSection />

      <HowItWorks />

      <ContactSection />

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
