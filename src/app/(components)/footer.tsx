import Link from 'next/link';
import { Logo } from './logo';
import { navLinks, socialLinks } from '@/lib/data';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const socialIcons: { [key: string]: React.ReactNode } = {
  facebook: <Facebook className="h-6 w-6" />,
  twitter: <Twitter className="h-6 w-6" />,
  linkedin: <Linkedin className="h-6 w-6" />,
  youtube: <Youtube className="h-6 w-6" />,
};

export function Footer() {
  const allNavLinks = navLinks.flatMap((link) => (link.isDropdown ? link.dropdownLinks || [] : [link]));
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-secondary-foreground/80">
              Your community for learning, growing, and connecting with creators and developers worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} className="text-secondary-foreground/80 hover:text-primary transition-colors" aria-label={social.name}>
                  {socialIcons[social.icon]}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Upgrade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
