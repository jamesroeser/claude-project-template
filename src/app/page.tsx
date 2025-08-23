export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            PROJECT_NAME
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Welcome to PROJECT_NAME - your application will be customized here during setup.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <a
              href="#getting-started"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Started
              <span className="ml-2">🚀</span>
            </a>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
            This template provides everything you need to build a professional web application. 
            Your content and features will be customized during the setup process.
          </p>

          <div className="bg-muted/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Next Steps:</h3>
            <ol className="text-left space-y-2">
              <li>1. Run <code className="bg-muted px-2 py-1 rounded">qnew</code> in Claude Code</li>
              <li>2. Answer the setup questions about your project</li>
              <li>3. Review the created GitHub issues</li>
              <li>4. Start building your MVP!</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}
