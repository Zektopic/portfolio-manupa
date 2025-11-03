import { profileData } from "./data/profile";
import { experienceData } from "./data/experience";
import { educationData } from "./data/education";
import { projectsData, featuredPosts } from "./data/projects";
import { certificationsData, honorsAwards } from "./data/certifications";
import { volunteeringData } from "./data/volunteering";
import { publicationsData } from "./data/publications";
import { recommendationsData } from "./data/recommendations";
import { skillsData } from "./data/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header Section */}
        <header className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-8 mb-6">
          <div className="flex items-start gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              MW
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {profileData.name}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-3">
                {profileData.title}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                📍 {profileData.location}
              </p>
              <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span>{profileData.followers} followers</span>
                <span>{profileData.connections} connections</span>
              </div>
            </div>
          </div>
        </header>

        {/* Analytics */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold text-blue-600">{profileData.profileViews}</p>
              <p className="text-gray-600 dark:text-gray-400">Profile views</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">{profileData.postImpressions}</p>
              <p className="text-gray-600 dark:text-gray-400">Post impressions</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">{profileData.searchAppearances}</p>
              <p className="text-gray-600 dark:text-gray-400">Search appearances</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{profileData.about}</p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.topSkills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Featured</h2>
          <div className="space-y-4">
            {featuredPosts.slice(0, 3).map((post, idx) => (
              <div key={idx} className="border-b dark:border-gray-700 pb-4 last:border-0">
                <p className="text-gray-700 dark:text-gray-300 mb-2 whitespace-pre-line">{post.content}</p>
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-blue-600 dark:text-blue-400 text-sm">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>👍 {post.engagement.likes}</span>
                  {post.engagement.comments && <span>💬 {post.engagement.comments}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="border-b dark:border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position || exp.company}</h3>
                <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.duration}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.location}</p>
                {exp.skills && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <div key={idx} className="border-b dark:border-gray-700 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.duration}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skillsData.slice(0, 20).map((skill, idx) => (
              <span key={idx} className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="space-y-4">
            {projectsData.map((project, idx) => (
              <div key={idx} className="border-b dark:border-gray-700 pb-4 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{project.duration}</p>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Recommendations</h2>
          <div className="space-y-6">
            {recommendationsData.map((rec, idx) => (
              <div key={idx} className="border-b dark:border-gray-700 pb-6 last:border-0">
                <h3 className="font-semibold text-gray-900 dark:text-white">{rec.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{rec.title}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm italic">&ldquo;{rec.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Honors & Awards</h2>
          <div className="space-y-3">
            {honorsAwards.map((award, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-900 dark:text-white">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{award.issuer} · {award.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
