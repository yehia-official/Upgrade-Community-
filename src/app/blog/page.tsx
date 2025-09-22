import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Upgrade Blog</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Articles, tutorials, and success stories from our community leaders and members to help you grow.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <CardHeader>
              <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
              <CardTitle className="text-xl leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>By {post.author} &bull; {post.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{post.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="link" className="p-0">
                  <Link href={`/blog/${post.slug}`}>
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
               </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
