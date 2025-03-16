import { DownloadIcon } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: [
      "Led development of multiple web applications using Next.js and TypeScript",
      "Implemented modern UI/UX designs using TailwindCSS",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  // Add more experiences
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    period: "2018 - 2022",
    description: "Graduated with honors, specialized in web technologies"
  }
];

const skills = {
  technical: ["TypeScript", "React", "Next.js", "Node.js", "TailwindCSS"],
  soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"]
};

export const ResumePage = () => {
  return (
    <main className="container">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white/90">Resume</h1>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white/70 transition-colors hover:bg-white/20"
          >
            <DownloadIcon className="size-4" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white/80">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-medium text-white/70">{exp.title}</h3>
                <div className="flex justify-between text-white/60">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="list-disc space-y-1 pl-4 text-white/60">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white/80">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-medium text-white/70">{edu.degree}</h3>
                <div className="flex justify-between text-white/60">
                  <span>{edu.school}</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-white/60">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white/80">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium text-white/70">Technical</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-white/70">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
