import type React from "react";

export const AboutPage: React.FC = async () => {
  return (
    <main className="container">
      <section className="space-y-8">
        <h1 className="text-4xl font-bold text-white/90">About Me</h1>
        
        <div className="space-y-6 text-white/70">
          <p className="text-lg">
            Hi! I'm a passionate developer who loves building things for the web.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white/80">Background</h2>
            <p>
              I specialize in modern web technologies and have experience with
              various frameworks and tools in the JavaScript ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white/80">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Node.js", "TailwindCSS"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
AboutPage.displayName = "About page";
