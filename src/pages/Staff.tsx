import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import headmaster from "@/assets/headmaster.jpg";

const Staff = () => {
  const leadership = [
    {
      name: "Dr. Amoah Godfred",
      position: "Headmaster",
      email: "m.anderson@ellenwhitecomplex.edu",
      image: headmaster,
      bio: "Ph.D. in Educational Leadership with 20 years of experience in secondary education.",
    },
  ];

  const faculty = [
    {
      name: "Sarah Mitchell",
      position: "Mathematics Department Head",
      subject: "Mathematics & Algebra",
      email: "s.mitchell@ellenwhitecomplex.edu",
    },
    {
      name: "Dr. James Carter",
      position: "Science Teacher",
      subject: "Biology & Chemistry",
      email: "j.carter@ellenwhitecomplex.edu",
    },
    {
      name: "Emily Rodriguez",
      position: "Language Arts Teacher",
      subject: "English & Literature",
      email: "e.rodriguez@ellenwhitecomplex.edu",
    },
    {
      name: "David Thompson",
      position: "Social Studies Teacher",
      subject: "History & Geography",
      email: "d.thompson@ellenwhitecomplex.edu",
    },
    {
      name: "Maria Gonzalez",
      position: "Foreign Language Teacher",
      subject: "Spanish & French",
      email: "m.gonzalez@ellenwhitecomplex.edu",
    },
    {
      name: "Robert Chen",
      position: "Technology Coordinator",
      subject: "Computer Science & IT",
      email: "r.chen@ellenwhitecomplex.edu",
    },
    {
      name: "Jennifer Lee",
      position: "Physical Education Teacher",
      subject: "PE & Health",
      email: "j.lee@ellenwhitecomplex.edu",
    },
    {
      name: "Michael Brown",
      position: "Arts Teacher",
      subject: "Visual & Performing Arts",
      email: "m.brown@ellenwhitecomplex.edu",
    },
  ];

  const support = [
    {
      name: "Lisa Johnson",
      position: "School Counselor",
      email: "l.johnson@ellenwhitecomplex.edu",
    },
    {
      name: "Patricia Wilson",
      position: "Librarian",
      email: "p.wilson@ellenwhitecomplex.edu",
    },
    {
      name: "Thomas Davis",
      position: "Administrative Coordinator",
      email: "t.davis@ellenwhitecomplex.edu",
    },
    {
      name: "Amanda Martinez",
      position: "School Nurse",
      email: "a.martinez@ellenwhitecomplex.edu",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="Our Staff"
        subtitle="Dedicated Professionals Committed to Student Success"
      />

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            School Leadership
          </h2>
          <div className="max-w-2xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-border shadow-strong">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-40 h-40 rounded-xl object-cover shadow-medium"
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-1 text-foreground">{leader.name}</h3>
                      <p className="text-accent font-semibold mb-2">{leader.position}</p>
                      <p className="text-muted-foreground mb-3">{leader.bio}</p>
                      <a
                        href={`mailto:${leader.email}`}
                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Teaching Faculty
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our experienced educators are passionate about teaching and dedicated to helping every student reach their full potential.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((teacher, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-accent">
                        {teacher.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{teacher.name}</h3>
                    <p className="text-accent font-semibold text-sm mb-2">{teacher.position}</p>
                    <p className="text-muted-foreground text-sm mb-3">{teacher.subject}</p>
                    <a
                      href={`mailto:${teacher.email}`}
                      className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent/80 transition-colors"
                    >
                      <Mail className="h-3 w-3" />
                      {teacher.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Support Staff
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our dedicated support team ensures a safe, healthy, and enriching environment for all students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {support.map((staff, index) => (
              <Card key={index} className="border-border shadow-medium">
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{staff.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{staff.position}</p>
                  <a
                    href={`mailto:${staff.email}`}
                    className="inline-flex items-center gap-2 text-xs text-accent hover:text-accent/80 transition-colors"
                  >
                    <Mail className="h-3 w-3" />
                    <span className="break-all">{staff.email}</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate educators to join our team. If you're interested in making a difference,
            we'd love to hear from you.
          </p>
          <a href="mailto:careers@ellenwhitecomplex.edu">
            <button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 px-8 rounded-lg shadow-strong transition-all">
              View Career Opportunities
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staff;
