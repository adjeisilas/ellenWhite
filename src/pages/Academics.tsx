import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Microscope, 
  Globe, 
  Calculator, 
  Music, 
  Palette, 
  Dumbbell, 
  Users,
  Award,
  Calendar,
  Clock,
  Library,
  Monitor,
  FlaskConical,
  Music2,
  BookText,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import library from "@/assets/library.jpg";
import student1 from "@/assets/student1.jpg";
import Seo from "@/components/Seo";

const Academics = () => {
  <Seo
        title="Academic Programs"
        description="Explore our comprehensive academic curriculum, extracurricular activities, and state-of-the-art facilities at Ellen White Educational Complex. JHS 1-3 programs designed for success."
        keywords="academic curriculum, subjects, extracurricular activities, facilities, JHS program"
        canonical="https://ellenwhitecomplex.edu/academics"
      />
  // Use placeholder images if needed
  const scienceLabImg = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop";
  const computerLabImg = "https://images.unsplash.com/photo-1581091226825-c6b00e8d1a1f?w=600&h=400&fit=crop";

  const subjects = [
    {
      icon: BookOpen,
      title: "Language Arts",
      description: "Comprehensive English language instruction focusing on reading, writing, and communication skills.",
      skills: ["Critical Reading", "Creative Writing", "Public Speaking", "Literary Analysis"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Advanced math curriculum covering algebra, geometry, and problem-solving techniques.",
      skills: ["Algebra", "Geometry", "Statistics", "Problem Solving"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Hands-on laboratory experiences in biology, chemistry, physics, and environmental science.",
      skills: ["Scientific Method", "Lab Techniques", "Research Skills", "Critical Thinking"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Exploring history, geography, civics, and cultural studies to develop global awareness.",
      skills: ["Historical Analysis", "Geographic Literacy", "Civic Engagement", "Cultural Awareness"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Monitor,
      title: "ICT & Computing",
      description: "Computer literacy, and innovative technology integration.",
      skills: ["Programming", "Digital Literacy", "Creative Design"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: BookText,
      title: "Religious & Moral Education",
      description: "Developing moral character, ethical reasoning, and spiritual awareness.",
      skills: ["Ethical Reasoning", "Moral Development", "Community Values", "Cultural Respect"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description: "Exploring visual arts, music, drama, and creative expression.",
      skills: ["Artistic Expression", "Music Theory", "Performance Skills", "Creative Thinking"],
      gradeLevels: ["JHS 1-3"]
    },
    {
      icon: Dumbbell,
      title: "Physical Education",
      description: "Promoting physical fitness, sportsmanship, and healthy lifestyle habits.",
      skills: ["Team Sports", "Fitness Training", "Health Education"],
      gradeLevels: ["JHS 1-3"]
    }
  ];

  const extracurricular = [
    {
      icon: Dumbbell,
      title: "Sports & Athletics",
      activities: ["Basketball", "Soccer", "Volleyball"],
      description: "Competitive and recreational sports programs",
      schedule: "Wed, Fri - 3:00 PM"
    },
    {
      icon: Music2,
      title: "Music & Performing Arts",
      activities: ["School Band", "Choir", "Drama Club", "Visual Arts", "Dance"],
      description: "Creative expression through various art forms",
      schedule: "Tue, Thu - 3:00 PM"
    },
    {
      icon: Target,
      title: "Academic Clubs",
      activities: ["Science Club", "Math Olympiad", "Debate Team"],
      description: "Enhancing academic skills beyond the classroom",
      schedule: "Mon, Wed - 4:00 PM"
    },
    {
      icon: Users,
      title: "Leadership & Service",
      activities: ["Student Council", "Peer Tutoring",],
      description: "Developing leadership and community engagement",
      schedule: "Fri - 3:30 PM"
    },
  ];

  const academicCalendar = [
    {
      term: "First Term",
      period: "September - December",
      events: [
        "Orientation Week",
        "Mid-Term Exams",
        "Sports Day",
        "End of Term Exams"
      ]
    },
    {
      term: "Second Term",
      period: "January - March",
      events: [
        "Term Begins",
        "Science Fair",
        "Mid-Term Break",
        "Cultural Day"
      ]
    },
    {
      term: "Third Term",
      period: "April - July",
      events: [
        "Term Begins",
        "Math Olympiad",
        "Final Exams",
        "Graduation Ceremony"
      ]
    }
  ];

  const facilities = [
    {
      icon: Library,
      title: "Digital Library",
      description: "15,000+ books and digital resources",
      features: ["Reading Areas", "Computer Station", "Study Rooms", "Online Databases"],
      image: library
    },
    {
      icon: FlaskConical,
      title: "Science Laboratories",
      description: "Fully equipped for hands-on experiments",
      features: ["Chemistry Lab", "Physics Lab", "Biology Lab", "Research Equipment"],
      image: scienceLabImg
    },
    {
      icon: Monitor,
      title: "Computer Labs",
      description: "Latest technology and software",
      features: ["Programming Stations", "3D Printing", "Robotics Kits", "Digital Design"],
      image: computerLabImg
    },
    {
      icon: Music,
      title: "Arts Complex",
      description: "Dedicated creative spaces",
      features: ["Music Rooms", "Art Studio", "Drama Theater", "Practice Rooms"],
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&h=400&fit=crop"
    }
  ];

  const academicAchievements = [
    { year: "2023", achievement: "98% BECE Pass Rate", description: "National average: 85%" },
    // { year: "2023", achievement: "5 National Science Fair Awards", description: "1st place in Robotics" },
    // { year: "2022", achievement: "Best School in Mathematics", description: "Regional competition" },
    { year: "2022", achievement: "100% Senior High School Placement", description: "All graduates placed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Enhanced Page Header */}
      <PageHeader
        title="Academic Excellence"
        subtitle="Rigorous Curriculum, Innovative Teaching, Exceptional Results"
        backgroundImage={student1}
      />

      {/* Quick Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-foreground/80">BECE Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20:1</div>
              <div className="text-primary-foreground/80">Student-Teacher Ratio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-primary-foreground/80">Academic Clubs</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-foreground/80">SHS Placement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Subjects - Enhanced */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive <span className="text-accent">Curriculum</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our rigorous academic program is designed to challenge students and prepare them for high school, university, and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <subject.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {subject.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {subject.description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-1">
                      {subject.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-primary font-medium">
                    Grades: {subject.gradeLevels.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic <span className="text-accent">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating our students' outstanding achievements and academic success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicAchievements.map((achievement, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-3 rounded-xl">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {achievement.year}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {achievement.achievement}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button asChild>
              <Link to="/achievements" className="flex items-center gap-2">
                View All Achievements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* Facilities Section - Enhanced */}
      {/* <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              State-of-the-Art <span className="text-accent">Facilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern learning environments designed to inspire innovation and academic excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-strong transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-primary-foreground">{facility.title}</h3>
                    <p className="text-primary-foreground/80 text-sm">{facility.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-2">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced Extracurricular Activities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Beyond the <span className="text-accent">Classroom</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover passions, develop skills, and build lasting friendships through our diverse extracurricular programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extracurricular.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-accent/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                      <div className="flex items-center gap-1 text-xs text-primary font-medium">
                        <Clock className="h-3 w-3" />
                        {category.schedule}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {category.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Academic Calendar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Academic <span className="text-accent">Calendar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plan your academic year with our comprehensive schedule of terms, exams, and special events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicCalendar.map((term, index) => (
              <Card key={index} className="border-border hover:shadow-strong transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{term.term}</h3>
                    <p className="text-primary font-semibold">{term.period}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {term.events.map((event, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <a href="/academic-calendar.pdf" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Full Calendar
              </a>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Excel Academically?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our academic community and discover how Ellen White Educational Complex can help your child achieve their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-strong text-lg px-8"
              asChild
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              asChild
            >
              <Link to="/contact">Request Prospectus</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;