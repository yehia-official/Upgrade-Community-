import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { pastCourses } from '@/lib/data';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import images from '@/lib/placeholder-images.json';

export default function EventsPage() {
  const courseImages = images.courses;
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Courses and Events</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Here we showcase the most prominent training courses and events we have offered to empower our community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pastCourses.map((event) => {
          let eventImage;
          switch (event.slug) {
            case 'graphic-design-course': eventImage = courseImages.graphicDesign; break;
            case 'cs50-computer-science': eventImage = courseImages.cs50; break;
            case 'psychology-sessions': eventImage = courseImages.psychology; break;
            case 'english-language-courses': eventImage = courseImages.english; break;
            case 'python-programming-course': eventImage = courseImages.python; break;
            case 'creative-writing-course': eventImage = courseImages.creativeWriting; break;
            default: eventImage = { src: "https://picsum.photos/seed/default/600/400", alt: "Course image", hint: "education online course"};
          }
          return(
            <Card key={event.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <Image 
                src={event.imageUrl} 
                alt={eventImage.alt} 
                width={600} 
                height={400} 
                className="w-full h-56 object-cover" 
                data-ai-hint={eventImage.hint}
              />
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant="secondary">
                  <Link href={`/events/${event.slug}`}>
                    <span>Details</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
