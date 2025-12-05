import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Calendar,
  Users,
  BookOpen,
  MessageCircle,
  CheckCircle,
  School,
  Car,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Kwatemaa from "@/assets/Kwatemaa.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    studentGrade: "",
    inquiryType: "general",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      studentGrade: "",
      inquiryType: "general",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: ["Ntensere", "Off Sunyani road, Accra", "Ghana"],
      description: "Located in the boarding area of SOkwai",
      action: "Get Directions",
      link: "https://maps.google.com.gl/VLHmYocmbbvxp7jp7?g_st=iw",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+233 24 123 4567",
        "+233 24 123 4568",
        "Emergency: +233 24 123 4569",
      ],
      description: "Available during school hours",
      action: "Call Now",
      link: "tel:+233241234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@ellenwhitecomplex.edu",
        "admissions@ellenwhitecomplex.edu",
        "support@ellenwhitecomplex.edu",
      ],
      description: "We respond within 24 hours",
      action: "Send Email",
      link: "mailto:info@ellenwhitecomplex.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 7:00 AM - 4:00 PM",
        "Saturday: Closed",
        "Sunday: Closed",
      ],
      description: "Administrative office hours",
      action: "View Calendar",
      link: "/calendar",
    },
  ];

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@ellenwhitecomplex.edu",
      phone: "+233 24 123 4570",
      description: "Enrollment inquiries and applications",
    },
    {
      name: "Academic Office",
      email: "academics@ellenwhitecomplex.edu",
      phone: "+233 24 123 4571",
      description: "Curriculum and academic programs",
    },
    {
      name: "Student Affairs",
      email: "studentaffairs@ellenwhitecomplex.edu",
      phone: "+233 24 123 4572",
      description: "Student support and counseling",
    },
    {
      name: "Finance Office",
      email: "finance@ellenwhitecomplex.edu",
      phone: "+233 24 123 4573",
      description: "Tuition and financial matters",
    },
  ];

  const visitOptions = [
    {
      icon: Users,
      title: "Individual Tour",
      description: "Personalized campus tour for your family",
      duration: "1-2 hours",
      bestFor: "Prospective students and parents",
    },
    {
      icon: School,
      title: "Open House",
      description: "Group tour with other prospective families",
      duration: "2-3 hours",
      bestFor: "Multiple families, group visits",
    },
    {
      icon: BookOpen,
      title: "Classroom Visit",
      description: "Observe classes in session",
      duration: "Half day",
      bestFor: "Students considering enrollment",
    },
    {
      icon: Car,
      title: "Virtual Tour",
      description: "Online campus experience",
      duration: "45 minutes",
      bestFor: "International or remote families",
    },
  ];

  const faqs = [
    {
      question: "What are the school hours?",
      answer:
        "School hours are from 7:30 AM to 3:30 PM, Monday through Friday. Office hours are 7:00 AM to 4:00 PM.",
    },
    {
      question: "How do I schedule a campus tour?",
      answer:
        "You can schedule a tour by filling out the form on this page, calling our admissions office, or emailing admissions@ellenwhitecomplex.edu.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include birth certificate, previous school records, immunization records, and two passport-sized photographs.",
    },
    {
      question: "Is financial aid available?",
      answer:
        "Yes, we offer various scholarship and financial aid programs. Contact our finance office for more information.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Enhanced Page Header */}
      <PageHeader
        title="Get In Touch"
        subtitle="We're Here to Help You Discover the Ellen White Experience"
        backgroundImage={Kwatemaa}
      />

      {/* Quick Contact Bar */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Ready to Learn More?</h3>
              <p className="text-primary-foreground/80">
                Schedule a campus tour today
              </p>
            </div>
            <div className="flex gap-3">
              {/* <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong"
                asChild
              >
                <Link to="/tour">Book a Tour</Link>
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+233241234567">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Multiple Ways to <span className="text-accent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the method that works best for you. We're always here to
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-accent" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>

                  <p className="text-xs text-primary font-medium mb-4">
                    {item.description}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <a href={item.link}>{item.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map - Enhanced */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Enhanced Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-card border border-border rounded-2xl shadow-strong p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="h-8 w-8 text-accent" />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      Have questions? We're here to help! Fill out the form
                      below.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Adjei Silas"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="adjei@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="+233 24 123 4567"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="studentGrade"
                        className="text-sm font-semibold"
                      >
                        Student Grade Level
                      </Label>
                      <select
                        id="studentGrade"
                        name="studentGrade"
                        value={formData.studentGrade}
                        onChange={handleChange}
                        className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select Grade Level</option>
                        <option value="jhs1">JHS 1</option>
                        <option value="jhs2">JHS 2</option>
                        <option value="jhs3">JHS 3</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="inquiryType"
                      className="text-sm font-semibold"
                    >
                      Inquiry Type
                    </Label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="mt-2 w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="general">General Information</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academics</option>
                      <option value="financial">Financial Aid</option>
                      <option value="tour">Campus Tour</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px] resize-vertical"
                      placeholder="Tell us how we can help you and any specific questions you might have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong text-lg py-6"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and
                    consent to being contacted by Ellen White Educational
                    Complex.
                  </p>
                </form>
              </div>
            </div>

            {/* Enhanced Sidebar with Additional Information */}
            <div className="space-y-8">
              {/* Departments Contact */}
              {/* <Card className="border-border shadow-strong">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-accent" />
                    Contact Departments
                  </h3>
                  <div className="space-y-4">
                    {departments.map((dept, index) => (
                      <div key={index} className="border-l-4 border-accent/20 pl-4">
                        <h4 className="font-semibold text-foreground text-sm">{dept.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{dept.description}</p>
                        <div className="flex flex-col gap-1 text-xs">
                          <a href={`mailto:${dept.email}`} className="text-accent hover:text-accent/80">
                            {dept.email}
                          </a>
                          <a href={`tel:${dept.phone}`} className="text-accent hover:text-accent/80">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}

              {/* Visit Options */}
              <Card className="border-border shadow-strong">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-accent" />
                    Campus Visit Options
                  </h3>
                  <div className="space-y-4">
                    {visitOptions.map((option, index) => (
                      <div key={index} className="p-3 bg-muted rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-accent/10 p-2 rounded-lg">
                            <option.icon className="h-4 w-4 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground text-sm">
                              {option.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-1">
                              {option.description}
                            </p>
                            <div className="flex justify-between text-xs">
                              <span className="text-primary">
                                {option.duration}
                              </span>
                              <span className="text-muted-foreground">
                                {option.bestFor}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <Button className="w-full mt-4" asChild>
                    <Link to="/tour">Schedule Your Visit</Link>
                  </Button> */}
                </CardContent>
              </Card>

              {/* Quick FAQ */}
              <Card className="border-border shadow-strong">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    Quick Answers
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group">
                        <summary className="cursor-pointer text-sm font-medium text-foreground hover:text-accent transition-colors">
                          {faq.question}
                        </summary>
                        <p className="mt-2 text-xs text-muted-foreground pl-4">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                  {/* <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/faq">View All FAQs</Link>
                  </Button> */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Find Our <span className="text-accent">Campus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in a convenient and accessible area with excellent transportation links
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-2xl shadow-strong overflow-hidden">
            <div className="h-96 md:h-[500px]">
              <iframe
                title="Ellen White Educational Complex Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.447581366972!2d-0.201367924050313!3d5.651687932929562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7d72b89b13%3A0x4c1f8c1b0b5b5b5b!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 bg-muted/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Parking Information</h4>
                  <p className="text-sm text-muted-foreground">
                    Free visitor parking available at the main entrance. Additional parking in the rear lot.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Public Transportation</h4>
                  <p className="text-sm text-muted-foreground">
                    Bus routes 12, 15, and 27 stop within walking distance. Nearest station: Education District Station.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Fully wheelchair accessible with ramps and elevators throughout the campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Emergency Contact Banner */}
      <section className="py-12 bg-red-50 border border-red-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              Emergency Contact
            </h3>
            <p className="text-red-700 mb-4">
              For urgent matters outside of office hours, please contact our
              emergency line
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+233241234569"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Emergency: +233 54 113 6868
              </a>
              <p className="text-sm text-red-600">
                24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
