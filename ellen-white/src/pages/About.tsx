import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import headmaster from "@/assets/headmaster.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="About Us"
        subtitle="Committed to Excellence in Education Since 2005"
      />

      {/* School History */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2005, Ellen White Educational Complex has been a beacon of academic excellence
                and character development in our community for nearly two decades. Named after the renowned
                educator and visionary Ellen G. White, our school embodies the principles of holistic
                education and moral integrity.
              </p>
              <p>
                What began as a small institution with just 50 students has grown into a thriving educational
                community serving over 500 junior high school students. Our growth reflects the trust that
                families place in our commitment to providing quality education in a nurturing environment.
              </p>
              <p>
                Throughout our history, we have maintained our founding vision: to develop not just
                academically proficient students, but well-rounded individuals who are prepared to make
                positive contributions to society. Our graduates consistently excel in their chosen fields,
                carrying with them the values and knowledge they gained at Ellen White Educational Complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border shadow-medium">
              <CardContent className="pt-6">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a comprehensive and balanced education that develops the intellectual,
                  physical, social, and moral potential of every student, preparing them for lifelong
                  learning and responsible citizenship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium">
              <CardContent className="pt-6">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, character
                  development, and innovative teaching methods that inspire students to become confident,
                  compassionate, and contributing members of society.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-medium">
              <CardContent className="pt-6">
                <div className="bg-accent/10 p-4 rounded-lg w-fit mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Core Values</h3>
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong>Integrity:</strong> Honesty and moral principles</li>
                  <li>• <strong>Excellence:</strong> Striving for the highest standards</li>
                  <li>• <strong>Respect:</strong> Valuing diversity and dignity</li>
                  <li>• <strong>Compassion:</strong> Caring for others</li>
                  <li>• <strong>Innovation:</strong> Embracing creativity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Headmaster Message */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Message from the Headmaster
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img
                  src={headmaster}
                  alt="Dr. Michael Anderson, Headmaster"
                  className="w-full rounded-xl shadow-strong"
                />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Dr. Michael Anderson</h3>
                <p className="text-accent font-medium">Headmaster</p>
                <div className="text-muted-foreground leading-relaxed space-y-3">
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
                    I invite you to explore our programs and discover how Ellen White Educational Complex
                    can be the perfect place for your child's educational journey. Together, we can help
                    them reach their full potential and prepare them for a bright future.
                  </p>
                  <p className="font-semibold text-foreground">
                    Dr. Michael Anderson<br />
                    Headmaster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
