import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { communitySections } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Community Sections</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Browse our specialized sections, join the discussions, and find content that matches your interests.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {communitySections.map((section) => (
          <Card key={section.id} className="flex flex-col text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <CardHeader>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <section.icon className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl md:text-2xl font-headline">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-6">{section.description}</p>
              <Button asChild>
                <Link href={`/community/${section.id}`}>
                  Explore Section
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
