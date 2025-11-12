import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Microscope, Globe, Calculator, Music, Palette, Dumbbell, Users } from "lucide-react";
import library from "@/assets/library.jpg";

const Academics = () => {
  const subjects = [
    {
      icon: BookOpen,
      title: "Language Arts",
      description: "Comprehensive English language instruction focusing on reading, writing, and communication skills.",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Advanced math curriculum covering algebra, geometry, and problem-solving techniques.",
    },
    {
      icon: Microscope,
      title: "Science",
      description: "Hands-on laboratory experiences in biology, chemistry, physics, and environmental science.",
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Exploring history, geography, civics, and cultural studies to develop global awareness.",
    },
    {
      icon: Users,
      title: "Foreign Languages",
      description: "Spanish and French language programs to develop multilingual communication skills.",
    },
    {
      icon: BookOpen,
      title: "Technology",
      description: "Computer science, coding, digital literacy, and innovative technology integration.",
    },
  ];

  const extracurricular = [
    {
      icon: Dumbbell,
      title: "Sports",
      activities: ["Basketball", "Soccer", "Volleyball", "Track & Field", "Swimming"],
    },
    {
      icon: Music,
      title: "Music & Arts",
      activities: ["School Band", "Choir", "Drama Club", "Visual Arts", "Dance"],
    },
    {
      icon: Palette,
      title: "Academic Clubs",
      activities: ["Science Club", "Math Olympiad", "Debate Team", "Chess Club", "Robotics"],
    },
    {
      icon: Users,
      title: "Community Service",
      activities: ["Student Council", "Peer Tutoring", "Environmental Club", "Community Outreach"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="Academics"
        subtitle="A Comprehensive Curriculum for Academic Excellence"
      />

      {/* Core Subjects */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Core Subjects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our rigorous academic program is designed to challenge students and prepare them for high school and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4">
                    <subject.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{subject.title}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  State-of-the-Art Facilities
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our modern campus features cutting-edge facilities designed to enhance learning
                    and provide students with the best educational experience possible.
                  </p>
                  <ul className="space-y-2">
                    <li>• <strong>Digital Library:</strong> Over 15,000 books and e-resources</li>
                    <li>• <strong>Science Labs:</strong> Fully equipped for hands-on experiments</li>
                    <li>• <strong>Computer Labs:</strong> Latest technology and software</li>
                    <li>• <strong>Sports Complex:</strong> Indoor and outdoor facilities</li>
                    <li>• <strong>Art Studios:</strong> Dedicated spaces for creative expression</li>
                    <li>• <strong>Music Rooms:</strong> Practice and performance spaces</li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src={library}
                  alt="Modern school library with students"
                  className="w-full rounded-xl shadow-strong"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Extracurricular Activities
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Beyond academics, we offer a wide range of activities to help students discover their passions and develop new skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extracurricular.map((category, index) => (
              <Card key={index} className="border-border shadow-medium">
                <CardContent className="pt-6">
                  <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4">
                    <category.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {category.activities.map((activity, idx) => (
                      <li key={idx} className="text-sm">• {activity}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Academic Calendar</h2>
          <div className="max-w-3xl mx-auto space-y-3 text-primary-foreground/90">
            <p><strong>Fall Semester:</strong> September - December</p>
            <p><strong>Spring Semester:</strong> January - June</p>
            <p><strong>Summer Programs:</strong> July - August (Optional enrichment courses)</p>
            <p className="pt-4 text-sm">
              Detailed calendar with holidays, exam schedules, and special events available upon enrollment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
