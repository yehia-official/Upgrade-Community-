'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { blogPosts, pastCourses, communitySections, currentInitiatives, futureInitiatives } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

type SearchResult = {
  title: string;
  description: string;
  href: string;
  type: string;
};

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Reset search on dialog close
    if (!open) {
      setQuery('');
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();

    const allContent: SearchResult[] = [
      ...blogPosts.map(post => ({
        title: post.title,
        description: post.description,
        href: `/blog/${post.slug}`,
        type: 'Blog Post',
      })),
      ...pastCourses.map(course => ({
        title: course.title,
        description: course.description,
        href: `/events/${course.slug}`,
        type: 'Course',
      })),
       ...communitySections.map(section => ({
        title: section.title,
        description: section.description,
        href: `/community/${section.id}`,
        type: 'Community Section',
      })),
      ...currentInitiatives.map(initiative => ({
        title: initiative.title,
        description: initiative.description,
        href: '/initiatives',
        type: 'Initiative',
      })),
       ...futureInitiatives.map(initiative => ({
        title: initiative.title,
        description: initiative.description,
        href: '/initiatives',
        type: 'Initiative',
      })),
    ];

    const filteredResults = allContent.filter(
      item =>
        item.title.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery)
    );

    setResults(filteredResults.slice(0, 10)); // Limit to 10 results
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Upgrade</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for articles, courses, resources..."
            className="w-full pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {query.length > 1 && results.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <p>No results found for "{query}"</p>
            </div>
          )}
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index}>
                <Link
                  href={result.href}
                  className="block p-4 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setOpen(false)}
                  target={result.type === 'Resource' ? '_blank' : '_self'}
                  rel={result.type === 'Resource' ? 'noopener noreferrer' : ''}
                >
                  <div className="flex items-center justify-between">
                     <h3 className="font-semibold">{result.title}</h3>
                     <Badge variant="outline">{result.type}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.description.length > 150
                      ? `${result.description.substring(0, 150)}...`
                      : result.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}
