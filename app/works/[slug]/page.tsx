import { notFound } from 'next/navigation';
import { getAllWorks, getWorkBySlug } from '@/lib/works';
import CaseStudy from '@/components/CaseStudy';

export function generateStaticParams() {
  return getAllWorks().map((work) => ({ slug: work.slug }));
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return <CaseStudy work={work} />;
}
