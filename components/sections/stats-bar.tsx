export function StatsBar() {
  return (
    <section className="w-full bg-primary-container/[0.04] border-y border-primary-container/20 py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center flex flex-col gap-2">
          <span className="font-data text-4xl md:text-5xl text-primary-container">+١٢٤</span>
          <span className="text-muted-foreground font-bold">فكرة ومشروع</span>
        </div>
        <div className="text-center flex flex-col gap-2">
          <span className="font-data text-4xl md:text-5xl text-secondary">٤٧</span>
          <span className="text-muted-foreground font-bold">مستثمر معتمد</span>
        </div>
        <div className="text-center flex flex-col gap-2">
          <span className="font-data text-4xl md:text-5xl text-tertiary-fixed-dim">٢٩</span>
          <span className="text-muted-foreground font-bold">صفقة مُنجزة</span>
        </div>
        <div className="text-center flex flex-col gap-2">
          <span className="font-data text-4xl md:text-5xl text-primary-container">٦٨M</span>
          <span className="text-muted-foreground font-bold">ريال تمويل مُوجَّه</span>
        </div>
      </div>
    </section>
  );
}
