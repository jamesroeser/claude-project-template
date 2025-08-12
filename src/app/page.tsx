/**
 * Home Page Component
 * 
 * The main landing page for the Khol Gray Archive.
 * This showcases the timeline-first approach with the most recent content
 * and provides navigation to different content types.
 * 
 * Features:
 * - Hero section with project introduction
 * - Recent timeline entries preview
 * - Navigation to full timeline and specific content types
 * - Responsive design for all screen sizes
 */

import { RecentTimeline } from '@/components/timeline/Timeline'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Khol Gray Archive
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Welcome to the digital archive - a timeline-focused journey through
            music, art, and creative expression. Every piece tells a story in time.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="/timeline"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore Timeline
              <span className="ml-2">📅</span>
            </a>
            <a
              href="/music"
              className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-base font-medium transition-colors hover:bg-muted"
            >
              Listen to Music
              <span className="ml-2">🎵</span>
            </a>
          </div>
        </div>
      </section>

      {/* Recent Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Recent Updates
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              The latest music, artwork, and behind-the-scenes content from the archive.
            </p>
          </div>

          {/* Recent Timeline Preview */}
          <RecentTimeline className="mx-auto max-w-4xl" />

          {/* View All Link */}
          <div className="mt-12 text-center">
            <a
              href="/timeline"
              className="inline-flex items-center text-primary hover:underline"
            >
              View complete timeline
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content Type Navigation */}
      <section className="border-t bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            Explore by Type
          </h2>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Music Card */}
            <a
              href="/music"
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-4xl">🎵</div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                Music
              </h3>
              <p className="text-sm text-muted-foreground">
                Original tracks, albums, and acoustic sessions
              </p>
            </a>

            {/* Blog Card */}
            <a
              href="/blog"
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-4xl">📝</div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                Blog
              </h3>
              <p className="text-sm text-muted-foreground">
                Behind-the-scenes stories and creative insights
              </p>
            </a>

            {/* Artwork Card */}
            <a
              href="/artwork"
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-4xl">🎨</div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                Artwork
              </h3>
              <p className="text-sm text-muted-foreground">
                Visual art, album covers, and creative projects
              </p>
            </a>

            {/* Projects Card */}
            <a
              href="/projects"
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Collaborations, experiments, and special releases
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
