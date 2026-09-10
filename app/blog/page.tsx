/* oxlint-disable next/no-html-link-for-pages -- Full page navigation is the most reliable option on the hosted site. */
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, Phone } from 'lucide-react';
import { blogPosts } from '@/lib/blog-posts';
import { bookingUrl, contact } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog | Kinga Nails',
  description: 'Részletes, képes útmutatók körömápolásról, lenövésről, higiéniáról, formákról és modern körömtrendekről.',
  alternates: { canonical: 'https://debrecenmukorom.hu/blog' },
};

export default function BlogPage() {
  return (
    <main className="inner-page blog-page">
      <section className="page-hero blog-hero">
        <p className="section-kicker">Kinga Nails körömnapló</p>
        <h1>Szakmai tudás.<br /><em>Szép részletek.</em></h1>
        <p>Részletes, közérthető útmutatók, amelyek segítenek megőrizni a körmöd szépségét, kényelmét és ápolt megjelenését.</p>
      </section>

      <section className="blog-card-grid" aria-label="Körömápolási cikkek">
        {blogPosts.map((post, index) => (
          <article className={`blog-card${index === 0 ? ' blog-card-featured' : ''}`} key={post.slug}>
            <a className="blog-card-image" href={`/blog/${post.slug}`} aria-label={`${post.title} – cikk megnyitása`}>
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes={index === 0 ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 25vw'}
                priority={index < 2}
              />
            </a>
            <div className="blog-card-content">
              <h2><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
              <p>{post.excerpt}</p>
              <a className="blog-card-link" href={`/blog/${post.slug}`}>
                Elolvasom <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="blog-cta">
        <div>
          <p>Van kérdésed a saját körmöddel kapcsolatban?</p>
          <a className="blog-phone" href={contact.phoneHref}><Phone aria-hidden="true" /> {contact.phoneDisplay}</a>
        </div>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Időpontfoglalás <ArrowUpRight aria-hidden="true" /></a>
      </section>
    </main>
  );
}
