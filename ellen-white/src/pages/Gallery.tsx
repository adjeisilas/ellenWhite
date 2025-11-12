import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroSchool from "@/assets/hero-school.jpg";
import studentsLearning from "@/assets/students-learning.jpg";
import teacherStudents from "@/assets/teacher-students.jpg";
import sportsActivities from "@/assets/sports-activities.jpg";
import library from "@/assets/library.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroSchool,
      title: "School Campus",
      description: "Our beautiful modern campus with state-of-the-art facilities",
    },
    {
      src: studentsLearning,
      title: "Collaborative Learning",
      description: "Students working together in our interactive classrooms",
    },
    {
      src: teacherStudents,
      title: "Science Laboratory",
      description: "Hands-on experiments and discovery in our science labs",
    },
    {
      src: sportsActivities,
      title: "Sports & Athletics",
      description: "Active and engaged students in our sports programs",
    },
    {
      src: library,
      title: "Modern Library",
      description: "Our comprehensive library and study spaces",
    },
    {
      src: studentsLearning,
      title: "Classroom Activities",
      description: "Engaging lessons and interactive learning experiences",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHeader
        title="Gallery"
        subtitle="Capturing Moments of Learning, Growth, and Achievement"
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-medium cursor-pointer transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-primary-foreground font-bold text-xl mb-1">
                      {image.title}
                    </h3>
                    <p className="text-primary-foreground/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Upcoming Events
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join us for exciting school events, celebrations, and community gatherings throughout the year.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                date: "March 15, 2025",
                event: "Science Fair",
                description: "Student projects and experiments on display",
              },
              {
                date: "April 8, 2025",
                event: "Spring Concert",
                description: "Music and choir performances by our talented students",
              },
              {
                date: "May 20, 2025",
                event: "Sports Day",
                description: "Athletic competitions and team spirit activities",
              },
              {
                date: "June 5, 2025",
                event: "Graduation Ceremony",
                description: "Celebrating our graduating class achievements",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{event.event}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="bg-accent/10 px-4 py-2 rounded-lg">
                    <p className="text-accent font-semibold whitespace-nowrap">{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
