import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { currentInitiatives, futureInitiatives } from '@/lib/data';

export default function InitiativesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Initiatives</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
          We are constantly working on launching innovative projects and initiatives aimed at empowering youth and equipping them with the skills and knowledge needed to achieve their ambitions.
        </p>
      </div>

      {/* Current Initiatives Section */}
      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Current Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentInitiatives.map((initiative) => (
            <Card key={initiative.title} className="text-center bg-secondary transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <initiative.icon className="h-8 w-8" />
                </div>
                <CardTitle>{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Future Initiatives Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Future Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {futureInitiatives.map((initiative) => (
            <Card key={initiative.title} className="text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <initiative.icon className="h-8 w-8" />
                </div>
                <CardTitle>{initiative.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{initiative.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
