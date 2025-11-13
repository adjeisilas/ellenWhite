import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  Clock,
  BookOpen,
  Users,
  Heart,
  ArrowRight,
  Star,
  Linkedin,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";
import headmaster from "@/assets/headmaster.jpg";
import deputyHeadmaster from "@/assets/deputy-headmaster.jpg";
import mathTeacher from "@/assets/math-teacher.jpg";
import scienceTeacher from "@/assets/science-teacher.jpg";
import englishTeacher from "@/assets/english-teacher.jpg";
import socialStudiesTeacher from "@/assets/social-studies-teacher.jpg";
import frenchTeacher from "@/assets/french-teacher.jpg";
import ictTeacher from "@/assets/ict-teacher.jpg";
import peTeacher from "@/assets/pe-teacher.jpg";
import artsTeacher from "@/assets/arts-teacher.jpg";
import counselor from "@/assets/counselor.jpg";
import librarian from "@/assets/librarian.jpg";
import admin from "@/assets/admin-coordinator.jpg";
import nurse from "@/assets/school-nurse.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher5 from "@/assets/teacher5.jpg";
import teacher6 from "@/assets/teacher6.jpg";
import teacher7 from "@/assets/teacher7.jpg";
import teacher8 from "@/assets/teacher8.jpg";

const Staff = () => {
  // Use placeholder images if actual images aren't available
  const placeholderImages = {
    deputyHeadmaster: "teacher3",
    mathTeacher: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop&crop=face",
    scienceTeacher: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    englishTeacher: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    socialStudiesTeacher: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    frenchTeacher: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    ictTeacher: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    peTeacher: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=400&h=400&fit=crop&crop=face",
    artsTeacher: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop&crop=face",
    counselor: "https://images.unsplash.com/photo-1551836026-d5c88ac5c73d?w=400&h=400&fit=crop&crop=face",
    librarian: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    admin: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    nurse: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
  };

  const leadership = [
    {
      name: "Dr. Godfred Amoah",
      position: "Headmaster",
      email: "g.amoah@ellenwhitecomplex.edu",
      phone: "+233 24 123 4567",
      image: headmaster,
      bio: "Ph.D. in Educational Leadership with 20 years of experience in secondary education. Passionate about innovative teaching methods and student development.",
      qualifications: ["Ph.D. Educational Leadership", "M.Ed. Curriculum Development", "B.Sc. Mathematics"],
      experience: "20+ years",
      specialty: "Educational Leadership & Administration",
      achievements: ["National Education Award 2020", "Published 3 Research Papers", "Speaker at International Education Conferences"]
    },
    {
      name: "Mr. David Baafabu",
      position: "Deputy Headmaster",
      email: "davidbaafa@gmail.com",
      phone: "+233 24 123 4568",
      image: teacher3,
      bio: "M.Ed. in Educational Administration with 15 years of teaching experience. Specializes in student affairs and academic planning.",
      qualifications: ["M.Ed. Educational Administration", "B.A. Education", "PGDE"],
      experience: "15+ years",
      specialty: "Student Affairs & Academic Planning",
      achievements: ["Excellence in Administration Award", "Student Mentorship Program Founder"]
    }
  ];

  const faculty = [
    {
      name: "Mr. Kwame Osei",
      position: "Mathematics Department Head",
      subject: "Mathematics & Algebra",
      email: "k.osei@ellenwhitecomplex.edu",
      phone: "+233 24 123 4569",
      image: teacher1,
      qualifications: ["M.Sc. Mathematics", "B.Ed. Mathematics", "Certified Math Educator"],
      experience: "12 years",
      specialty: "Advanced Algebra & Calculus",
      officeHours: "Mon, Wed, Fri - 2:00 PM to 3:30 PM"
    },
    {
      name: "Dr. James Carter",
      position: "Science Department Head",
      subject: "Biology & Chemistry",
      email: "j.carter@ellenwhitecomplex.edu",
      phone: "+233 24 123 4570",
      image: teacher2,
      qualifications: ["Ph.D. Biochemistry", "M.Sc. Biology", "B.Sc. Chemistry"],
      experience: "10 years",
      specialty: "Laboratory Sciences & Research",
      officeHours: "Tue, Thu - 2:00 PM to 4:00 PM"
    },
    {
      name: "Ms. Evelyn Nkrumah",
      position: "English Language Teacher",
      subject: "English & Literature",
      email: "e.nkrumah@ellenwhitecomplex.edu",
      phone: "+233 24 123 4571",
      image: teacher3,
      qualifications: ["M.A. English Literature", "B.A. English", "TESOL Certified"],
      experience: "8 years",
      specialty: "Creative Writing & Literary Analysis",
      officeHours: "Mon, Wed - 3:00 PM to 4:30 PM"
    },
    {
      name: "Mr. David Thompson",
      position: "Social Studies Teacher",
      subject: "History & Geography",
      email: "d.thompson@ellenwhitecomplex.edu",
      phone: "+233 24 123 4572",
      image: teacher5,
      qualifications: ["M.A. History", "B.Ed. Social Studies", "Diploma in African Studies"],
      experience: "9 years",
      specialty: "African History & Cultural Studies",
      officeHours: "Tue, Thu - 1:30 PM to 3:00 PM"
    },
    {
      name: "Mrs. Maria Gonzalez",
      position: "French Language Teacher",
      subject: "French & Spanish",
      email: "m.gonzalez@ellenwhitecomplex.edu",
      phone: "+233 24 123 4573",
      image: teacher6,
      qualifications: ["M.A. French Literature", "DELF Certified", "B.A. Modern Languages"],
      experience: "7 years",
      specialty: "French Language & Culture",
      officeHours: "Mon, Fri - 2:30 PM to 4:00 PM"
    },
    {
      name: "Mr. Robert Chen",
      position: "ICT Coordinator",
      subject: "Computer Science & IT",
      email: "r.chen@ellenwhitecomplex.edu",
      phone: "+233 24 123 4574",
      image: teacher7,
      qualifications: ["M.Sc. Computer Science", "B.Sc. IT", "Microsoft Certified"],
      experience: "6 years",
      specialty: "Programming & Digital Literacy",
      officeHours: "Wed, Thu - 3:00 PM to 5:00 PM"
    },
    {
      name: "Ms. Jennifer Lee",
      position: "Physical Education",
      subject: "PE & Health Education",
      email: "j.lee@ellenwhitecomplex.edu",
      phone: "+233 24 123 4575",
      image: teacher8,
      qualifications: ["M.Sc. Sports Science", "B.Ed. Physical Education", "First Aid Certified"],
      experience: "8 years",
      specialty: "Sports Training & Fitness",
      officeHours: "Daily - 4:00 PM to 5:00 PM"
    },
    {
      name: "Mr. Michael Brown",
      position: "Creative Arts Teacher",
      subject: "Visual & Performing Arts",
      email: "m.brown@ellenwhitecomplex.edu",
      phone: "+233 24 123 4576",
      image: teacher3,
      qualifications: ["M.F.A. Visual Arts", "B.A. Fine Arts", "Certified Art Educator"],
      experience: "11 years",
      specialty: "Painting & Sculpture",
      officeHours: "Tue, Thu - 2:00 PM to 4:00 PM"
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
      name: "Ms. Patricia Wilson",
      position: "Head Librarian",
      email: "p.wilson@ellenwhitecomplex.edu",
      phone: "+233 24 123 4578",
      image: teacher8,
      qualifications: ["M.L.I.S.", "B.A. Library Science", "Digital Resources Certified"],
      specialty: "Research & Information Literacy",
      office: "Main Library, 2nd Floor"
    },
    {
      name: "Mr. Thomas Davis",
      position: "Administrative Coordinator",
      email: "t.davis@ellenwhitecomplex.edu",
      phone: "+233 24 123 4579",
      image: teacher7,
      qualifications: ["B.A. Administration", "Office Management Certified"],
      specialty: "School Administration & Operations",
      office: "Administration Building, Room 201"
    },
    {
      name: "Mrs. Amanda Martinez",
      position: "School Nurse",
      email: "a.martinez@ellenwhitecomplex.edu",
      phone: "+233 24 123 4580",
      image: teacher6,
      qualifications: ["R.N. Registered Nurse", "B.Sc. Nursing", "First Aid Instructor"],
      specialty: "Student Health & Wellness",
      office: "Health Center, Ground Floor"
    }
  ];

  const stats = [
    { number: "30+", label: "Qualified Staff" },
    { number: "8+", label: "Years Average Experience" },
    { number: "95%", label: "Staff Retention Rate" },
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
                        
                        <div>
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
                        </div>
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
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {teacher.experience}
                    </div>
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
                      href={`mailto:${teacher.email}`}
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      title="Send Email"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                    </a>
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
      <section className="py-20 bg-background">
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
                  <p className="text-muted-foreground text-xs mb-3">{staff.specialty}</p>
                  <p className="text-xs text-primary font-medium mb-4">{staff.office}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${staff.email}`}
                      className="p-2 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors"
                      title="Send Email"
                    >
                      <Mail className="h-4 w-4 text-accent" />
                    </a>
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
      </section>

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
                    alt="Mr. Kwame Osei"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Mr. Kwame Osei</div>
                    <div className="text-sm text-muted-foreground">Mathematics Department Head</div>
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
                    alt="Dr. James Carter"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Dr. James Carter</div>
                    <div className="text-sm text-muted-foreground">Science Department Head</div>
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
                    alt="Ms. Evelyn Nkrumah"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Ms. Evelyn Nkrumah</div>
                    <div className="text-sm text-muted-foreground">English Language Teacher</div>
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