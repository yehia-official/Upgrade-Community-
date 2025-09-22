import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { upgradeGoals, teamMembers } from '@/lib/data';
import images from '@/lib/placeholder-images.json';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Story Section */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-primary">Our Story</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground">
          Upgrade was founded by <span className="font-bold text-primary">Yehia Mohammed</span> with a clear vision: to create a launchpad for the next generation of creators, developers, and leaders. We believe that talent is universal, but opportunity is not. Our mission is to bridge that gap by providing accessible, high-quality education and a supportive community where anyone can level up their skills and build their future.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="mb-24 bg-secondary py-16 rounded-lg">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-headline font-bold mb-4">Our Vision</h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                    To make learning accessible to everyone regardless of financial means, provide an educational experience that combines practical application with creativity and direct interaction, stimulate innovation and an entrepreneurial spirit among youth, and connect them to the job market through practical training and direct opportunities.
                    </p>
                </div>
                <div className="relative h-64 w-full">
                     <Image 
                        src={images.about.vision.src} 
                        alt={images.about.vision.alt} 
                        layout="fill" 
                        className="rounded-lg object-cover" 
                        data-ai-hint={images.about.vision.hint} 
                      />
                </div>
            </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="mb-24">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Core Goals</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {upgradeGoals.map((goal) => (
            <Card key={goal.title} className="text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <goal.icon className="h-8 w-8" />
                </div>
                <CardTitle>{goal.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Our Leader</h2>
        <div className="flex justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 mx-auto mb-4">
                 <Image 
                    src={member.image} 
                    alt={images.team.yehia.alt} 
                    layout="fill" 
                    className="rounded-full object-cover shadow-lg border-4 border-primary/50" 
                    data-ai-hint={images.team.yehia.hint} 
                  />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-headline">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
