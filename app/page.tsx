export default function HomePage() {
  return (
    <div className="container">
      <header>
        <h1>Understanding Vercel</h1>
      </header>

      <main>
        <section className="content-section">
          <h2>What is Vercel?</h2>
          <p>Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host websites and web services that deploy instantly, scale automatically, and require no supervision.</p>
        </section>

        <section className="content-section">
          <h2>Why Use Vercel for Deployment?</h2>
          <ul>
            <li>Zero configuration required for common frameworks</li>
            <li>Automatic SSL certificates and HTTPS</li>
            <li>Global CDN for optimal performance</li>
            <li>Preview deployments for every git push</li>
            <li>Serverless Functions support</li>
            <li>Real-time analytics and performance monitoring</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>GitHub Integration</h2>
          <p>Vercel seamlessly integrates with GitHub through these features:</p>
          <ul>
            <li>Automatic deployments on every push</li>
            <li>Preview deployments for pull requests</li>
            <li>Branch deployments</li>
            <li>Easy team collaboration</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Basic Deployment Steps</h2>
          <ol>
            <li>Push your project to GitHub</li>
            <li>Connect your GitHub account to Vercel</li>
            <li>Import your repository in Vercel</li>
            <li>Configure your project settings (if needed)</li>
            <li>Deploy!</li>
          </ol>
        </section>
      </main>

      <footer>
        <p>Created for learning purposes</p>
      </footer>
    </div>
  );
}
