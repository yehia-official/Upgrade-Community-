import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { pastCourses } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import images from '@/lib/placeholder-images.json';

export async function generateStaticParams() {
  return pastCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = pastCourses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  let eventImage;
  switch (course.slug) {
    case 'graphic-design-course': eventImage = images.courses.graphicDesign; break;
    case 'cs50-computer-science': eventImage = images.courses.cs50; break;
    case 'psychology-sessions': eventImage = images.courses.psychology; break;
    case 'english-language-courses': eventImage = images.courses.english; break;
    case 'python-programming-course': eventImage = images.courses.python; break;
    case 'creative-writing-course': eventImage = images.courses.creativeWriting; break;
    default: eventImage = { src: "https://picsum.photos/seed/default/600/400", alt: "Course image", hint: "education online course"};
  }

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
            {/* Course Header */}
            <section className="mb-12">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-2xl">
                    <Image
                        src={course.imageUrl}
                        alt={eventImage.alt}
                        fill
                        className="object-cover"
                        data-ai-hint={eventImage.hint}
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-4">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-white text-center">{course.title}</h1>
                    </div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground text-center">
                    {course.description}
                </p>
            </section>

            {/* Course Lessons */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-center">Course Curriculum</h2>
                <Accordion type="single" collapsible className="w-full bg-card p-4 sm:p-6 rounded-lg shadow-sm border">
                    {course.lessons?.map((lesson, index) => (
                        <AccordionItem key={index} value={`item-${index + 1}`} className={index === course.lessons.length - 1 ? 'border-b-0' : ''}>
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline data-[state=open]:text-primary">
                                <div className="flex items-center gap-4 text-left">
                                    <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
                                    <span>{lesson.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground pt-2 pb-4 pl-12">
                                {lesson.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Back Button */}
            <div className="text-center">
            <Button asChild variant="outline">
                <Link href="/events">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Back to All Events</span>
                </Link>
            </Button>
            </div>
        </div>
        </div>
    </div>
  );
}
