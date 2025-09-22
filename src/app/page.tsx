import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Users, Sparkles, HeartHandshake, BrainCircuit, Mic } from 'lucide-react';
import { blogPosts, testimonials, achievements } from '@/lib/data';
import images from '@/lib/placeholder-images.json';

const whyJoinPoints = [
 {
  icon: Sparkles,
  title: "Real Learning, Real Impact",
  description: "You'll learn for real, work for real, and see your work turn into something tangible!",
 },
 {
  icon: BrainCircuit,
  title: "A Space for Creativity",
  description: "You'll hear 'Try it and bring your ideas to life' more than in any other team.",
 },
 {
  icon: HeartHandshake,
  title: "A Supportive Team",
  description: "Because we listen to, support, and stand by each other.",
 },
 {
  icon: Users,
  title: "You Are a Key Element",
  description: "Because you're not just a number... you're a key element that makes a difference!",
 },
];

const volunteerBenefits = [
  {
    icon: Sparkles,
    title: "Practical Experience",
    description: "Every task you do = a line on your CV.",
  },
  {
    icon: BrainCircuit,
    title: "Continuous Development",
    description: "Every meeting you attend = a new idea + a stronger skill.",
  },
  {
    icon: Mic,
    title: "A Real Opportunity",
    description: "Every project = a real chance to develop, learn, and showcase your work!",
  },
]

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);
  const testimonialImages = images.testimonials;

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-secondary text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-4 tracking-tight text-primary">
              Upgrade – Your Place for Empowerment and Creativity
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl text-foreground/80 mb-8">
              We are an interactive community that believes in the power of youth. We provide you with the education, training, and opportunities you need to unleash your potential and make a change.
            </p>
            <Button asChild size="lg">
              <Link href="/join">Join Our Community</Link>
            </Button>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
             <div className="grid gap-8 md:grid-cols-3">
              {achievements.map((item, index) => (
                <Card key={index} className="text-center border-2 border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <p className="text-4xl md:text-5xl font-bold font-headline text-primary">{item.value}</p>
                    <p className="text-base md:text-lg text-muted-foreground">{item.label}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Upgrade Team */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-headline font-bold">If you're looking for an extraordinary team... come to Upgrade!</h2>
               <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-muted-foreground">We're not just a team; we're a family, an idea, and a place where the first spark of everything that can grow and shine is born!</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               {whyJoinPoints.map((point) => (
                  <Card key={point.title} className="text-center p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <point.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </Card>
               ))}
            </div>
             <div className="text-center mt-12">
               <Button asChild size="lg" variant="outline">
                  <Link href="/join">#JoinUpgrade <ArrowRight className="h-4 w-4 ml-2"/></Link>
               </Button>
            </div>
          </div>
        </section>
        
        {/* Volunteer Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-headline font-bold">Not just volunteering!</h2>
               <p className="max-w-2xl mx-auto mt-4 text-base md:text-lg text-muted-foreground">Every step with us is a real opportunity to build your skills and your future. Your work has meaning, and your impact is tangible.</p>
            </div>
             <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
               {volunteerBenefits.map((benefit) => (
                  <Card key={benefit.title} className="text-center p-6 bg-secondary hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-headline mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
               ))}
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Still lost and don't know where to start?</h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-primary-foreground/80 mb-8">
             At Upgrade, you'll find a space to talk, learn, and build yourself step by step. From a podcast that lights your way, to a community that encourages you, and real opportunities to develop your skills. You don't have to be on the team to benefit... but you have to start here!
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/community">Upgrade is your beginning</Link>
            </Button>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <Card key={post.slug} className="flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
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
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </div>
        </section>


        {/* Testimonials Slider */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">From Our Community</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((testimonial) => {
                let testimonialImage;
                switch (testimonial.id) {
                  case 1: testimonialImage = testimonialImages.ahmed; break;
                  case 2: testimonialImage = testimonialImages.fatima; break;
                  case 3: testimonialImage = testimonialImages.omar; break;
                  default: testimonialImage = { src: "https://picsum.photos/seed/default/100/100", alt: "Testimonial avatar", hint: "person portrait"};
                }
                return (
                  <Card key={testimonial.id} className="bg-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]">
                    <CardContent className="flex flex-col items-center text-center p-8">
                        <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                          <AvatarImage 
                            src={testimonial.avatar} 
                            alt={testimonialImage.alt} 
                            data-ai-hint={testimonialImage.hint}
                          />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      <p className="text-base md:text-lg font-medium text-foreground mb-4">"{testimonial.quote}"</p>
                      <footer className="text-md font-semibold text-primary">{testimonial.name}</footer>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="outline">
                  <Link href="/testimonials">
                    <span>View All Testimonials</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
