/* oxlint-disable next/no-html-link-for-pages -- Full page navigation is the most reliable option on the hosted site. */
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight, Check, Phone } from 'lucide-react';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import { bookingUrl, contact } from '@/lib/site';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: 'A cikk nem található | Kinga Nails' };

  return {
    title: `${post.title} | Kinga Nails`,
    description: post.excerpt,
    alternates: { canonical: `https://debrecenmukorom.hu/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="inner-page missing-article">
        <p className="section-kicker">Kinga Nails körömnapló</p>
        <h1>Ez a cikk nem található.</h1>
        <a href="/blog"><ArrowLeft aria-hidden="true" /> Vissza a bloghoz</a>
      </main>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="inner-page article-page">
      <article>
        <header className="article-detail-hero">
          <div className="article-detail-copy">
            <a className="article-back" href="/blog"><ArrowLeft aria-hidden="true" /> Vissza a bloghoz</a>
            <p className="section-kicker">Kinga Nails körömnapló</p>
            <h1>{post.title}</h1>
            <p>{post.lead}</p>
          </div>
          <div className="article-detail-image">
            <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
        </header>

        <div className="article-detail-layout">
          <div className="article-prose">
            {post.sections.map((section, index) => (
              <section key={section.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {post.video && index === 0 && (
                  <figure className="article-video-block">
                    <video controls playsInline preload="metadata" poster={post.video.poster} aria-label={post.video.title}>
                      <source src={post.video.src} type="video/mp4" />
                      <track kind="captions" src="/videos/lenoves-veszelyei-hu.vtt" srcLang="hu" label="Magyar" default />
                      A böngésződ nem támogatja a videólejátszást.
                    </video>
                    <figcaption>
                      <strong>{post.video.title}</strong>
                      <span>{post.video.description}</span>
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>

          <aside className="article-aside" aria-label="A cikk legfontosabb tanácsai">
            <p>Amit vigyél magaddal</p>
            <ul>
              {post.highlights.map((highlight) => (
                <li key={highlight}><Check aria-hidden="true" /> <span>{highlight}</span></li>
              ))}
            </ul>
            <a href={contact.phoneHref}><Phone aria-hidden="true" /> {contact.phoneDisplay}</a>
            <a className="aside-booking" href={bookingUrl} target="_blank" rel="noreferrer">Időpontfoglalás <ArrowUpRight aria-hidden="true" /></a>
          </aside>
        </div>
      </article>

      <section className="related-articles">
        <div className="related-heading">
          <p className="section-kicker">További útmutatók</p>
          <h2>Olvass tovább</h2>
        </div>
        <div className="related-grid">
          {relatedPosts.map((related) => (
            <a href={`/blog/${related.slug}`} className="related-card" key={related.slug}>
              <span className="related-image"><Image src={related.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></span>
              <strong>{related.title}</strong>
              <span>Elolvasom <ArrowUpRight aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
