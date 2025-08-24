export function PortfolioHero() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">Our Portfolio</h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover how we've transformed businesses, government agencies, and consumer experiences with AI-enabled web
          applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">50+ Projects Delivered</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">3 Market Sectors</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">AI-First Approach</span>
        </div>
      </div>
    </section>
  )
}
