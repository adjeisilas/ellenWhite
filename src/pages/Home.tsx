import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Trophy,
  Heart,
  ArrowRight,
  Star,
  Calendar,
  Award,
  GraduationCap,
  PlayCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroSchool from "@/assets/hero-school.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import teacherStudents from "@/assets/teacher-students.jpg";
import sportsActivities from "@/assets/sports-activities.jpg";
import campusView from "@/assets/campus-view.jpeg";
import artClass from "@/assets/art-class.jpeg";
import scienceLab from "@/assets/science-lab.jpeg";
import student1 from "@/assets/student1.jpg";
import student6 from "@/assets/student6.jpg";
import student7 from "@/assets/student7.jpg";
import student8 from "@/assets/student8.jpg";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description:
        "Comprehensive curriculum designed to challenge and inspire every student.",
      stats: "98% Pass Rate",
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description:
        "Dedicated teachers committed to nurturing each student's potential.",
      stats: "20+ Teachers",
    },
    {
      icon: Trophy,
      title: "Extracurricular Activities",
      description:
        "Wide range of sports, arts, and clubs to develop well-rounded students.",
      stats: "5 Clubs",
    },
    {
      icon: Heart,
      title: "Character Development",
      description:
        "Focus on building integrity, respect, and strong moral values.",
      stats: "Community Focus",
    },
  ];

  const testimonials = [
    {
      name: "Amoah Patience",
      role: "Parent",
      content:
        "The transformation in my child's confidence and academic performance has been remarkable since joining Ellen White.",
      rating: 5,
    },
    {
      name: "Mr. Gabriel Afriyie",
      role: "Alumni",
      content:
        "The foundation I received here prepared me perfectly for university and my medical career.",
      rating: 5,
    },
    {
      name: "Agyapong Kofi",
      role: "PTA President",
      content:
        "The teachers genuinely care about our success and the community feels like family.",
      rating: 5,
    },
  ];

  const upcomingEvents = [
    {
      title: "Open House 2024",
      date: "March 15, 2024",
      description: "Come visit our campus and meet our faculty",
    },
    {
      title: "Science Fair",
      date: "April 5, 2024",
      description: "Student projects and innovations showcase",
    },
    {
      title: "Sports Day",
      date: "May 20, 2024",
      description: "Annual inter-house sports competition",
    },
  ];

  const stats = [
    { number: "400+", label: "Students Enrolled" },
    { number: "10+", label: "Years of Excellence" },
    { number: "98%", label: "Graduation Rate" },
    { number: "20:1", label: "Student-Teacher Ratio" },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${student6})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-transparent via-accent/20 to-transparent animate-spin-slow" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary-foreground/20">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Ranked #1 in Academic Excellence 2024
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Ellen White
            <span className="block text-3xl md:text-5xl lg:text-6xl text-accent mt-2">
              Educational Complex
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Empowering Minds, Building Character, Shaping Futures Through
            Innovative Education
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong hover:shadow-stronger text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Enroll Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              <Link to="/about" className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5" />
                Watch Video Tour
              </Link>
            </Button>
          </div> */}

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">Ellen White?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the difference that makes us the leading educational
              institution in the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="text-lg font-semibold text-primary">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Experience Our <span className="text-accent">Vibrant</span>{" "}
                Campus Life
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our campus is designed to inspire creativity, foster
                collaboration, and provide state-of-the-art facilities for
                academic and personal growth.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Modern Classrooms
                    </h4>
                    <p className="text-muted-foreground">
                      Interactive learning environments with latest technology
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Sports Facilities
                    </h4>
                    <p className="text-muted-foreground">
                      Olympic-standard fields, courts, and fitness centers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-xl">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Learning Commons
                    </h4>
                    <p className="text-muted-foreground">
                      Collaborative spaces for study and innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl shadow-medium group">
                  <img
                    src={student1}
                    alt="Science laboratory"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-medium group">
                  <img
                    src={student6}
                    alt="Art classroom"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl shadow-medium group">
                  <img
                    src={student7}
                    alt="Campus view"
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-medium group">
                  <img
                    src={student8}
                    alt="Sports activities"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-accent">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students, parents, and alumni about their Ellen White
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      {/* <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Upcoming <span className="text-accent">Events</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join us for these exciting upcoming events
              </p>
            </div>

            <Button variant="outline" className="hidden sm:flex">
              <Link to="/events" className="flex items-center gap-2">
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <div className="text-sm text-primary font-medium mb-2">
                        {event.date}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our community of learners and discover how Ellen White
            Educational Complex can help your child reach their full potential
            in a nurturing and innovative environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong hover:shadow-stronger text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Schedule a Campus Tour
              </Button>
            </Link>

            <Link to="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Download Brochure
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-primary-foreground/70">
            Limited spots available for the 2024-2025 academic year
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
