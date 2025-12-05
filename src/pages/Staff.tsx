import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  GraduationCap,
  Clock,
  Star,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import headmaster from "@/assets/headmaster.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher5 from "@/assets/teacher5.jpg";
import teacher6 from "@/assets/teacher6.jpg";
import teacher7 from "@/assets/teacher7.jpg";
import teacher8 from "@/assets/teacher8.jpg";
import awuahJoseph from "@/assets/awauhJoseph.jpg"
import evansAwuah from "@/assets/evansAwuah.jpg"
import kwatemaa from "@/assets/Kwatemaa.jpg"
import opokuVincent from "@/assets/opokuVincent.jpg"
import akuShikaGlover from "@/assets/akuShikaGlover.jpg"

const Staff = () => {
  // Use placeholder images if actual images aren't available
  const placeholderImages = {
    deputyHeadmaster: "teacher3"
  }

  const leadership = [
    {
      name: "Mr. Godfred Amoah",
      position: "Proprietor",
      email: "g.amoah@ellenwhitecomplex.edu",
      phone: "+233 54 113 6868",
      image: headmaster,
      bio: "Degree in Education with 15 years of experience in Basic education. Passionate about innovative teaching methods and student development.",
      qualifications: ["Bachelor of Business Education", "Degree in Education", "B.Sc. Mathematics"],
      experience: "15+ years",
      specialty: "Educational Leadership & Administration",
    },
    {
      name: "Mr. David Baafabu",
      position: "Headmaster",
      email: "davidbaafa@gmail.com",
      phone: "+233 55 071 14302",
      image: teacher3,
      bio: "B.Sc. in Mathematics with 8 years of teaching experience. Specializes in mathematics and academic planning.",
      qualifications: ["B.Sc. Education"],
      experience: "8+ years",
      specialty: "Mathematic & Academic Planning",
      achievements: ["Excellence in Administration Award", "Student Mentorship Program Founder"]
    }
  ];

  const faculty = [
    {
      name: "Antwi Gifty",
      position: "English Teacher",
      subject: "English",
      phone: "+233 24 731 3916",
      image: kwatemaa,
      officeHours: "Mon, Wed, Fri - 2:00 PM to 3:30 PM"
    },
    {
      name: "Ms. Amoako Hagar",
      position: "Asante Twi Teacher",
      phone: "+233 55 045 2186",
      image: teacher2,
      officeHours: "Tue, Thu - 2:00 PM to 4:00 PM"
    },
    {
      name: "Mr. Awuah Joseph",
      position: "Science Teacher",
      subject: "Integrated Science",
      phone: "+233 24 116 6275",
      image: awuahJoseph,
      officeHours: "Mon, Wed - 3:00 PM to 4:30 PM"
    },
    {
      name: "Mr. Awuah Evans",
      position: "Social Studies Teacher",
      subject: "Social Studies",
      phone: "+233 24 987 7059",
      image: evansAwuah,
      officeHours: "Tue, Thu - 1:30 PM to 3:00 PM"
    },
    {
      name: "Ms. Ali Hassana",
      position: "Form Mistress",
      phone: "+233 55 433 8200",
      image: teacher1,
      officeHours: "Mon, Fri - 2:30 PM to 4:00 PM"
    },
    {
      name: "Mr. Opoku Vincent",
      position: "RME Teacher",
      phone: "+233 54 330 1884",
      image: opokuVincent,
      officeHours: "Wed, Thu - 3:00 PM to 5:00 PM"
    },
    {
      name: "Ms. Aku Shika Glover",
      position: "Physical Education",
      subject: "Form Mistress",
      phone: "+233 55 554 2629",
      image: akuShikaGlover,
      officeHours: "Daily - 4:00 PM to 5:00 PM"
    }
  ];

  const support = [
    {
      name: "Mrs. Comfort Asare",
      position: "School Counselor",
      email: "c.asare@ellenwhitecomplex.edu",
      phone: "+233 24 123 4577",
      image: teacher5,
      qualifications: ["M.A. Psychology", "B.Sc. Counseling", "Certified Counselor"],
      specialty: "Student Counseling & Career Guidance",
      office: "Counseling Office, Room 101"
    },
    {
      name: "Ms. Patricia Adams",
      position: "Head Librarian",
      phone: "+233 24 123 4578",
      image: teacher8,
      office: "Main Library, 2nd Floor"
    },
    {
      name: "Mr. Thomas Boakye",
      position: "Administrative Coordinator",
      phone: "+233 24 123 4579",
      image: teacher7,
      office: "Administration Building, Room 201"
    },
    {
      name: "Mrs. Amanda Martinez",
      position: "School Nurse",
      phone: "+233 24 123 4580",
      image: teacher6,
      office: "Health Center, Ground Floor"
    }
  ];

  const stats = [
    { number: "20+", label: "Qualified Staff" },
    { number: "8+", label: "Years Average Experience" },
    { number: "80%", label: "Staff Retention Rate" },
    { number: "10+", label: "Advanced Degrees" }
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
        title="Meet Our Team"
        subtitle="Passionate Educators Dedicated to Student Success and Excellence"
        backgroundImage={headmaster}
      />

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Enhanced */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              School <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders guiding our institution towards academic excellence and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    <div className="w-full lg:w-1/3 text-center">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-48 h-48 rounded-2xl object-cover shadow-strong mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="mt-4 flex justify-center space-x-3">
                        <a
                          href={`mailto:${leader.email}`}
                          className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                          title="Send Email"
                        >
                          <Mail className="h-5 w-5 text-accent" />
                        </a>
                        <a
                          href={`tel:${leader.phone}`}
                          className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                          title="Call"
                        >
                          <Phone className="h-5 w-5 text-accent" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">{leader.name}</h3>
                          <p className="text-accent font-semibold text-lg mb-2">{leader.position}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Clock className="h-4 w-4" />
                            {leader.experience} Experience
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">{leader.bio}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-accent" />
                            Qualifications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {leader.qualifications.map((qual, idx) => (
                              <span key={idx} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                                {qual}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4 text-accent" />
                            Achievements
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section - Enhanced */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teaching <span className="text-accent">Faculty</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our experienced educators are passionate about teaching and dedicated to helping every student reach their full potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {faculty.map((teacher, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-32 h-32 rounded-2xl object-cover shadow-medium mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1 text-foreground">{teacher.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{teacher.position}</p>
                  <p className="text-muted-foreground text-sm mb-3">{teacher.subject}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2 flex items-center justify-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Office Hours
                    </h4>
                    <p className="text-xs text-muted-foreground">{teacher.officeHours}</p>
                  </div>
                  
                  <div className="flex justify-center space-x-3">
                    
                    <a
                      href={`tel:${teacher.phone}`}
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff - Enhanced */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Support <span className="text-accent">Staff</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated support team ensures a safe, healthy, and enriching environment for all students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {support.map((staff, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-24 h-24 rounded-2xl object-cover shadow-medium mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  <h3 className="text-lg font-bold mb-1 text-foreground">{staff.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{staff.position}</p>
                  <p className="text-xs text-primary font-medium mb-4">{staff.office}</p>
                  
                  <div className="flex justify-center space-x-3">
                    
                    <a
                      href={`tel:${staff.phone}`}
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4 text-accent" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Staff Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why We <span className="text-accent">Teach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our staff about their passion for education and why they love being part of Ellen White
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "Teaching at Ellen White has been the most rewarding experience of my career. The students' enthusiasm for learning and the supportive community make every day special."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={teacher3}
                    alt="Mr. Baafabu David"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Mr. Baafabu David</div>
                    <div className="text-sm text-muted-foreground">Head Master</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "The collaborative environment among staff and the school's commitment to innovation in education create the perfect setting for both teachers and students to thrive."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={teacher1}
                    alt="Miss. Ali Hassana"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Miss. Ali Hassana</div>
                    <div className="text-sm text-muted-foreground">Form Mistress</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "Watching students discover their potential and grow into confident young adults is why I became an educator. Ellen White provides the perfect environment for this transformation."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={teacher5}
                    alt="Mr. Evans Awuah"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Mr. Evans Awuah</div>
                    <div className="text-sm text-muted-foreground">Social Studies Teacher</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Join Our Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate educators to join our team. If you're interested in making a difference,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong text-lg px-8"
              asChild
            >
              <a href="mailto:careers@ellenwhitecomplex.edu">
                View Career Opportunities
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              asChild
            >
              <Link to="/contact">Schedule an Interview</Link>
            </Button>
          </div>
          <div className="mt-8 text-sm text-primary-foreground/70">
            Current openings: Mathematics Teacher, Science Lab Assistant, Sports Coach
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;