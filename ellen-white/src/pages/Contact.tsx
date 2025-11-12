import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="Contact Us"
        subtitle="We'd Love to Hear From You"
      />

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border shadow-medium">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">
                  123 Education Ave<br />
                  Learning District, ED 12345
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">
                  (555) 123-4567<br />
                  (555) 123-4568
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">
                  info@ellenwhitecomplex.edu<br />
                  admissions@ellenwhitecomplex.edu
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium">
              <CardContent className="pt-6 text-center">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">School Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri: 7:30 AM - 3:30 PM<br />
                  Office: 7:00 AM - 4:00 PM
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about enrollment, programs, or campus visits? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 min-h-[150px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Visit Our Campus
              </h2>
              <p className="text-muted-foreground mb-8">
                We welcome visitors to tour our campus and experience our vibrant learning community firsthand. Schedule a visit today!
              </p>
              <div className="bg-card border border-border rounded-xl overflow-hidden shadow-medium h-96">
                <iframe
                  title="School Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-6 bg-card border border-border rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-foreground mb-3">Campus Tours</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Tours are available Monday through Friday by appointment. Contact our admissions office to schedule your visit.
                </p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
