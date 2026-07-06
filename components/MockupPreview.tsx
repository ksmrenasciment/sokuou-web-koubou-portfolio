export default function MockupPreview({ slug, title }: { slug: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line-hairline">
      <div className="flex items-center gap-1.5 border-b border-line-hairline bg-base-gray px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-line-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-hairline" />
      </div>
      <iframe
        src={`/mockups/${slug}/`}
        title={`${title}のモックアッププレビュー`}
        className="h-[480px] w-full"
        loading="lazy"
      />
    </div>
  );
}
