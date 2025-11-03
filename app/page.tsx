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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-zinc-950 dark:via-blue-950 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden mb-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 opacity-10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
          }}></div>
          
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative group">
                <div className="w-40 h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  MW
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {profileData.name}
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  {profileData.title}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                    {profileData.location}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{profileData.followers}</span>
                    <span className="text-gray-600 dark:text-gray-400">followers</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/30 rounded-full">
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{profileData.connections}</span>
                    <span className="text-gray-600 dark:text-gray-400">connections</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Analytics */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-4xl font-bold mb-2">{profileData.profileViews}</p>
            <p className="text-blue-100">Profile Views</p>
            <p className="text-sm text-blue-100 mt-2">Past 7 days</p>
          </div>

          <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-4xl font-bold mb-2">{profileData.postImpressions}</p>
            <p className="text-purple-100">Post Impressions</p>
            <p className="text-sm text-purple-100 mt-2">Past 7 days</p>
          </div>

          <div className="group bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <svg className="w-10 h-10 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-4xl font-bold mb-2">{profileData.searchAppearances}</p>
            <p className="text-indigo-100">Search Appearances</p>
            <p className="text-sm text-indigo-100 mt-2">Past 7 days</p>
          </div>
        </section>

        {/* About */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">{profileData.about}</p>
          
          <div className="border-t border-gray-200 dark:border-zinc-700 pt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Top Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {profileData.topSkills.map((skill, idx) => (
                <span key={idx} className="group px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-2 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Posts</h2>
          </div>
          <div className="space-y-6">
            {featuredPosts.slice(0, 3).map((post, idx) => (
              <div key={idx} className="group p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-800 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-zinc-700 hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed whitespace-pre-line">{post.content}</p>
                {post.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline cursor-pointer">{tag}</span>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-6 text-sm">
                  <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                    </svg>
                    {post.engagement.likes}
                  </span>
                  {post.engagement.comments && (
                    <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                      </svg>
                      {post.engagement.comments}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
          </div>
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <div key={idx} className="group relative pl-8 pb-8 last:pb-0">
                {/* Timeline line */}
                {idx !== experienceData.length - 1 && (
                  <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full ring-4 ring-white dark:ring-zinc-900"></div>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-zinc-800 dark:to-blue-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-zinc-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position || exp.company}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white dark:bg-zinc-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-zinc-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
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
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z"/>
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skillsData.slice(0, 20).map((skill, idx) => (
              <div key={idx} className="group relative">
                <div className="px-4 py-3 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-700 rounded-xl text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-zinc-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-md text-center">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              View All {skillsData.length} Skills
            </button>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-white to-pink-50 dark:from-zinc-800 dark:to-pink-900/20 rounded-2xl p-6 border-2 border-gray-200 dark:border-zinc-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {project.title.charAt(0)}
                  </div>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  {project.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                {project.associatedWith && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    @ {project.associatedWith}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Recommendations</h2>
          </div>
          <div className="space-y-6">
            {recommendationsData.map((rec, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-zinc-800 dark:to-yellow-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-700/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
                    {rec.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{rec.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{rec.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{rec.date}</p>
                  </div>
                </div>
                <div className="relative pl-4 border-l-4 border-yellow-400 dark:border-yellow-600">
                  <svg className="absolute -left-2 -top-2 w-8 h-8 text-yellow-400 dark:text-yellow-600 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">{rec.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honors & Awards */}
        <section className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Honors & Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {honorsAwards.map((award, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-zinc-800 dark:to-purple-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{award.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{award.issuer}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{award.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 w-32 mx-auto rounded-full mb-6"></div>
          <p className="text-sm">© 2025 Manupa Wickramasinghe. All rights reserved.</p>
          <p className="text-xs mt-2">Built with Next.js, Tailwind CSS & deployed via Cloudflare Tunnel</p>
        </footer>
      </main>
    </div>
  );
}
