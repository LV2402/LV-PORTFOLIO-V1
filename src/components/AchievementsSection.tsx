import { Trophy, Code, Award, Zap, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const credentials = [
  {
    title: "Tech Lead — VISWAM.AI",
    organization: "IIIT Hyderabad × Swecha × Meta",
    date: "May – July 2025",
    description:
      "Selected as Technical Lead for an 8-week national AI internship focused on building technology solutions for the Global South. Recognized for resolving technical blockers, mentoring interns, and contributing to efficient execution of the program.",
    note: "Backed by IIIT Hyderabad, Swecha, and Meta — publicly verifiable",
    certificateUrl: "https://drive.google.com/file/d/1EU1ml1NXGmBAHaPPxGKhFnT-5m-_hbk3/view?usp=sharing",
  },
  {
    title: "Infosys Springboard — Java Programming Fundamentals",
    organization: "Infosys",
    date: "October 2024",
    description:
      "Completed a corporate-certified Java programming course by Infosys, covering object-oriented programming, core Java concepts, and industry-relevant coding practices.",
    certificateUrl: "https://drive.google.com/file/d/1UXztxYYB3v5iWyx8S9h-dRgbB_ky85zJ/view?usp=sharing",
  },
];

const hackathons = [
  "Adobe India Hackathon — Online MCQ + Coding Round",
  "Flipkart GRiD 6.0 — Software Development Track (Level 1)",
  "VJ Hackathon 2024 — Team VAV",
];

const codingProfiles = [
  {
    name: "LeetCode",
    badge: "Top 15% globally",
    description:
      "Consistently solving algorithmic problems across arrays, strings, trees, graphs, dynamic programming, and recursion, ranking in the top 15% of all global users.",
    url: "https://leetcode.com/u/vamshishetty24/",
  },
  {
    name: "CodeChef",
    badge: "Rating: 1355 · 500+ problems solved",
    description:
      "Solved over 500 algorithmic problems and actively participate in rated contests, demonstrating consistency, speed, and competitive problem-solving under time pressure.",
    url: "https://www.codechef.com/users/vamshishetty24",
  },
  {
    name: "HackerRank",
    description:
      "Practicing core programming, SQL, and problem-solving challenges across multiple domains, reinforcing fundamentals and coding accuracy.",
    url: "https://www.hackerrank.com/profile/vamshi_shetty_",
  },
  {
    name: "Codeforces",
    description:
      "Active participant in Codeforces contests, testing algorithmic thinking, edge-case handling, and solution correctness in high-pressure competitive environments. Codeforces signals raw thinking ability. Just being active matters.",
    url: "https://codeforces.com/profile/vamshishetty",
  },
];

const AchievementsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Achievements
          </h2>
          <div 
            className={`h-1 bg-foreground mt-4 transition-all duration-700 delay-300 ${
              headerVisible ? "w-24" : "w-0"
            }`} 
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side — Credentials */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-8">
              {/* Credentials Header */}
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-5 h-5" />
                <h3 className="text-xl font-bold tracking-tight">Credentials</h3>
              </div>

              {/* Credential Items */}
              {credentials.map((cred, index) => (
                <a
                  key={cred.title}
                  href={cred.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-foreground p-6 bg-background relative block hover:bg-muted/50 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="absolute -top-3 left-6 px-2 bg-background font-mono text-xs text-muted-foreground">
                    {cred.date}
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-lg font-bold mb-1">{cred.title}</h4>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </div>
                  <p className="font-mono text-sm text-muted-foreground mb-3">
                    {cred.organization}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {cred.description}
                  </p>
                  {cred.note && (
                    <p className="text-xs font-mono text-muted-foreground mt-3 italic">
                      ({cred.note})
                    </p>
                  )}
                </a>
              ))}

              {/* Hackathons */}
              <div className="border-2 border-foreground p-6 bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-4 h-4" />
                  <h4 className="text-lg font-bold">Hackathons & Competitive Programs</h4>
                </div>
                <ul className="space-y-2">
                  {hackathons.map((hack) => (
                    <li key={hack} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{hack}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Participated in multiple national-level coding and product hackathons, gaining experience in competitive problem-solving and time-bound development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side — Competitive Coding */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 delay-150 ${
              rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-5 h-5" />
                <h3 className="text-xl font-bold tracking-tight">Competitive Coding Profiles</h3>
              </div>

              {/* Coding Profiles */}
              <div className="space-y-4">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-foreground p-5 bg-background hover:bg-muted/50 transition-colors duration-300 group block cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center font-mono text-sm font-bold group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                          {profile.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold">{profile.name}</h4>
                          {profile.badge && (
                            <p className="text-xs font-mono text-primary">{profile.badge}</p>
                          )}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-13">
                      {profile.description}
                    </p>
                  </a>
                ))}
              </div>

              {/* Subtle note */}
              <div className="border-l-4 border-foreground pl-5 py-3 mt-8">
                <p className="text-sm text-muted-foreground italic">
                  This is where I quietly prove I can actually code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
