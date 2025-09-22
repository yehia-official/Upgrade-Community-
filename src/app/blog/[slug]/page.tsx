import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, teamMembers } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import images from '@/lib/placeholder-images.json';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const authorInfo = teamMembers.find(member => member.name === post.author);
  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 2);

  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <p className="text-primary font-semibold mb-2">{post.category}</p>
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
             {authorInfo ? (
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage 
                    src={authorInfo.image} 
                    alt={images.team.yehia.alt} 
                    data-ai-hint={images.team.yehia.hint} 
                  />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
             ) : (
                <span>{post.author}</span>
             )}
            <span>&bull;</span>
            <time dateTime={post.date}>{post.date}</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground">
          <p className="lead text-lg md:text-xl mb-8">{post.description}</p>
          <p>{post.content}</p>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <aside className="max-w-5xl mx-auto mt-24">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-center mb-8">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {relatedPosts.map(relatedPost => (
               <Card key={relatedPost.slug} className="overflow-hidden hover:shadow-2xl transition-all hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle>{relatedPost.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{relatedPost.description}</p>
                    <Button asChild variant="link" className="p-0">
                       <Link href={`/blog/${relatedPost.slug}`}>
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                       </Link>
                    </Button>
                  </CardContent>
                </Card>
            ))}
          </div>
        </aside>
      )}

       <div className="text-center mt-16">
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>
    </div>
  );
}
