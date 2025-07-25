import { homepageContent } from '@/lib/content/homepage'

export default function TemplatePage() {
  const { hero, features, quickStart, documentation, status } = homepageContent

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {hero.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={hero.primaryCta.href}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {hero.primaryCta.text}
          </a>
          <a 
            href={hero.secondaryCta.href}
            className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            {hero.secondaryCta.text}
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-card rounded-lg border space-y-2">
            <div className="text-2xl">{feature.icon}</div>
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Quick Start */}
      <section className="bg-muted rounded-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold">{quickStart.title}</h2>
        <div className="bg-card p-4 rounded-lg border font-mono text-sm">
          <div className="space-y-2">
            {quickStart.steps.map((step, index) => (
              <div key={index}>
                <div><span className="text-muted-foreground"># {step.description}</span></div>
                <div>{step.command}</div>
                {index < quickStart.steps.length - 1 && <div className="pt-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Links */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-center">{documentation.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {documentation.cards.map((card, index) => (
            <div key={index} className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">{card.icon} {card.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {card.description}
              </p>
              <a href={card.href} className="text-primary hover:text-primary/80 text-sm">
                Leggi la guida →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Status */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          {status.badge}
        </div>
        <p className="text-sm text-muted-foreground">
          {status.description}
        </p>
      </section>
    </div>
  )
}