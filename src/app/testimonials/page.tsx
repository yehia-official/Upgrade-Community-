import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import images from '@/lib/placeholder-images.json';

export default function TestimonialsPage() {
  const testimonialImages = images.testimonials;
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">What Our Members Say</h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
          Real stories from members who have grown and developed with the Upgrade community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => {
          let testimonialImage;
           switch (testimonial.id) {
            case 1: testimonialImage = testimonialImages.ahmed; break;
            case 2: testimonialImage = testimonialImages.fatima; break;
            case 3: testimonialImage = testimonialImages.omar; break;
            case 4: testimonialImage = testimonialImages.laila; break;
            case 5: testimonialImage = testimonialImages.youssef; break;
            case 6: testimonialImage = testimonialImages.nour; break;
            default: testimonialImage = { src: "https://picsum.photos/seed/default/100/100", alt: "Testimonial avatar", hint: "person portrait"};
          }
          return (
          <Card key={testimonial.id} className="flex flex-col text-center p-6 bg-secondary transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
            <CardContent className="flex flex-col items-center justify-center flex-grow">
              <Avatar className="w-24 h-24 mb-6 border-4 border-primary">
                <AvatarImage 
                  src={testimonial.avatar} 
                  alt={testimonialImage.alt} 
                  data-ai-hint={testimonialImage.hint} 
                />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <blockquote className="text-base md:text-lg font-medium text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-auto">
                <p className="text-lg md:text-xl font-bold font-headline text-primary">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </footer>
            </CardContent>
          </Card>
          )
        })}
      </div>
    </div>
  );
}
