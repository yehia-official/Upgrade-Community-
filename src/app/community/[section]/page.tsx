import { notFound } from 'next/navigation';
import Link from 'next/link';
import { communitySections, blogPosts, pastCourses } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  return communitySections.map((section) => ({
    section: section.id,
  }));
}

export default function CommunitySectionPage({ params }: { params: { section: string } }) {
  const section = communitySections.find((s) => s.id === params.section);

  if (!section) {
    notFound();
  }
  
  const relatedPosts = blogPosts.filter(p => p.category === section.title).slice(0, 2);
  const relatedEvents = pastCourses.slice(0, 1); // Example: show one of the past events

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-16">
        <section.icon className="h-16 w-16 mx-auto mb-4 text-primary" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{section.title} Section</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">{section.description}</p>
      </div>

      <div className="space-y-16">
        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 flex items-center gap-3"><Calendar className="text-primary" /> Related Events</h2>
            <div className="grid gap-8">
              {relatedEvents.map(event => (
                 <Card key={event.id} className="hover:shadow-2xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                       <CardTitle>{event.title}</CardTitle>
                       <CardDescription>{event.date} - {event.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground mb-4">{event.description}</p>
                       <Button asChild variant="link" className="p-0">
                          <Link href="/events">Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                       </Button>
                    </CardContent>
                 </Card>
              ))}
            </div>
          </section>
        )}

        {/* Related Blog Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 flex items-center gap-3"><BookOpen className="text-primary" /> Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {relatedPosts.map(post => (
                 <Card key={post.slug} className="hover:shadow-2xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                       <CardTitle>{post.title}</CardTitle>
                       <CardDescription>By {post.author} | {post.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground mb-4">{post.description}</p>
                       <Button asChild variant="link" className="p-0">
                          <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                       </Button>
                    </CardContent>
                 </Card>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="text-center mt-16">
          <Button asChild variant="outline">
            <Link href="/community">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Sections
            </Link>
          </Button>
        </div>
    </div>
  );
}
