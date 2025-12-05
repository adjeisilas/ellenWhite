import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  GraduationCap,
  BookOpen,
  Heart,
  Quote,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import headmaster from "@/assets/headmaster.jpg";
import Seo from "@/components/Seo";

const About = () => {

  <Seo
        title="About Our School"
        description="Learn about Ellen White Educational Complex's history, mission, vision, and commitment to academic excellence since 2005. Meet our leadership team and discover our values."
        keywords="school history, mission vision, educational philosophy, school leadership, core values"
        canonical="https://ellen-white..vercel.app/about"
      />
  // Use placeholder images if needed
  const teachersTeamImg = "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop";
  const schoolBuildingImg = "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop";
  const classroomImg = "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop";

  const milestones = [
    { year: "2011", event: "School Founded", description: "Started with 50 students and 5 teachers" },
    { year: "2020", event: "First Graduating Class", description: "Celebrated our first batch of graduates" },
    { year: "2015", event: "New Campus Built", description: "Expanded to modern facilities" },
  ];

  const leadershipTeam = [
    {
      name: "Mr. Godfred Amoah",
      role: "Proprietor",
      qualification: "Bachelor of Business Education",
      experience: "15+ years",
      specialty: "Curriculum Development"
    },
    {
      name: "Mr. Baafabu David",
      role: "Headmaster",
      qualification: "Bsc in Mathematics",
      experience: "8+ years",
      specialty: "Student Affairs"
    }
  ];

  const schoolFacilities = [
    {
      icon: BookOpen,
      title: "Modern Library",
      description: "10,000+ books and digital resources",
      features: ["Reading Areas", "Computer Station", "Study Rooms"]
    },
    {
      icon: GraduationCap,
      title: "Science Labs",
      description: "Fully equipped laboratories",
      features: ["Chemistry Lab", "Physics Lab", "Biology Lab"]
    },
    {
      icon: Users,
      title: "Sports Complex",
      description: "Comprehensive athletic facilities",
      features: ["Basketball Court", "Soccer Field", "Track & Field"]
    },
    {
      icon: Heart,
      title: "Health Center",
      description: "Student health and wellness",
      features: ["First Aid", "Counseling", "Regular Check-ups"]
    }
  ];

  const testimonials = [
    {
      name: "Mr. James Boateng",
      role: "Parent of Graduate",
      content: "The transformation in my son's academic performance and character has been remarkable. Ellen White truly cares about holistic development.",
      rating: 5
    },
    {
      name: "Dr. Ama Serwaa",
      role: "Alumni (Class of 2020)",
      content: "The foundation I received here prepared me perfectly for medical school. The teachers were incredibly supportive and dedicated.",
      rating: 5
    },
    {
      name: "Mrs. Comfort Asare",
      role: "PTA Chairperson",
      content: "As a parent and PTA member, I've seen firsthand the commitment to excellence and the wonderful community spirit at Ellen White.",
      rating: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Enhanced Page Header */}
      <PageHeader
        title="About Our School"
        subtitle="Committed to Excellence in Education Since 2005"
        backgroundImage={schoolBuildingImg}
      />

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">400+</div>
              <div className="text-primary-foreground/80">Students</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-foreground/80">Teachers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">Graduation Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* School History with Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Our <span className="text-accent">Journey</span> of Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Founded in 2011, Ellen White Educational Complex has been a beacon of academic excellence visionary Ellen G. White, our school embodies the principles of holistic
                  education and moral integrity.
                </p>
                <p>
                  What began as a small institution with just 10 students has grown into a thriving educational
                  community serving over 400 basic and junior high school students. Our growth reflects the trust that
                  families place in our commitment to providing quality education in a nurturing environment.
                </p>
                <p>
                  Throughout our history, we have maintained our founding vision: to develop not just
                  academically proficient students, but well-rounded individuals who are prepared to make
                  positive contributions to society.
                </p>
              </div>
              
              {/* <div className="mt-8 flex gap-4">
                <Button asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Visit Our Campus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/academics">View Academics</Link>
                </Button>
              </div> */}
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300" />
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values - Enhanced */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Foundation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our educational philosophy and daily practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border shadow-strong hover:shadow-stronger transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-5 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a comprehensive and balanced education that develops the intellectual,
                  physical, social, and moral potential of every student, preparing them for lifelong
                  learning and responsible citizenship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-strong hover:shadow-stronger transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-5 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, character
                  development, and innovative teaching methods that inspire students to become confident,
                  compassionate, and contributing members of society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-strong hover:shadow-stronger transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-5 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  Core Values
                </h3>
                <ul className="text-muted-foreground leading-relaxed space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span><strong className="text-foreground">Integrity:</strong> Honesty and moral principles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span><strong className="text-foreground">Excellence:</strong> Striving for the highest standards</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span><strong className="text-foreground">Respect:</strong> Valuing diversity and dignity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span><strong className="text-foreground">Compassion:</strong> Caring for others</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span><strong className="text-foreground">Innovation:</strong> Embracing creativity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art learning environments designed to inspire and support student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolFacilities.map((facility, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 p-4 rounded-xl w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <facility.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{facility.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{facility.description}</p>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced educators dedicated to student success and school excellence
            </p>
          </div>
          
          <div className="flex justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{member.qualification}</p>
                    <p>{member.experience} Experience</p>
                    <p className="font-medium text-foreground">{member.specialty}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Headmaster Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 shadow-strong">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/3">
                  <img
                    src={headmaster}
                    alt="Dr. Godfred Amoah, Proprietor"
                    className="w-full rounded-2xl shadow-strong"
                  />
                  <div className="mt-4 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground">Dr. Godfred Amoah</h3>
                    <p className="text-accent font-semibold">Proprietor</p>
                    <p className="text-sm text-muted-foreground mt-1">Bacheor of Business Eduacation</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-2/3">
                  <div className="flex items-center gap-2 mb-6">
                    <Quote className="h-8 w-8 text-accent rotate-180" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      A Message from Our Headmaster
                    </h2>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                    <p>
                      Welcome to Ellen White Educational Complex. It is my privilege to lead this exceptional
                      institution where academic excellence meets character development.
                    </p>
                    <p>
                      At Ellen White, we believe that education extends far beyond textbooks and examinations.
                      Our goal is to nurture young minds, cultivate critical thinking, and instill values that
                      will guide our students throughout their lives. We are committed to providing a safe,
                      supportive, and stimulating environment where every student can thrive.
                    </p>
                    <p>
                      Our dedicated team of educators works tirelessly to create learning experiences that
                      challenge, inspire, and prepare students for the complexities of the modern world. We
                      celebrate diversity, encourage innovation, and foster a love for learning that lasts
                      a lifetime.
                    </p>
                    <p>
                      I invite you to explore our programs and discover how Ellen White Educational Complex
                      can be the perfect place for your child's educational journey. Together, we can help
                      them reach their full potential and prepare them for a bright future.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-background/50 rounded-xl border">
                    <p className="font-semibold text-foreground text-lg">
                      "Education is the most powerful weapon which you can use to change the world."
                    </p>
                    <p className="text-muted-foreground mt-2">- Nelson Mandela</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our <span className="text-accent">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from parents, alumni, and community members about their Ellen White experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300">
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

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour or speak with our admissions team to discover how Ellen White can benefit your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong text-lg px-8"
              asChild
            >
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              asChild
            >
              <Link to="/admissions">Download Brochure</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;