import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/sections').then(mod => mod.Header));
const About = dynamic(() => import('./components/sections').then(mod => mod.About));
const FeaturedPosts = dynamic(() => import('./components/sections').then(mod => mod.FeaturedPosts));
const Experience = dynamic(() => import('./components/sections').then(mod => mod.Experience));
const Education = dynamic(() => import('./components/sections').then(mod => mod.Education));

const Projects = dynamic(() => import('./components/sections').then(mod => mod.Projects));
const Recommendations = dynamic(() => import('./components/sections').then(mod => mod.Recommendations));
const HonorsAndAwards = dynamic(() => import('./components/sections').then(mod => mod.HonorsAndAwards));
const Footer = dynamic(() => import('./components/sections').then(mod => mod.Footer));

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-zinc-950 dark:via-blue-950 dark:to-indigo-950">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <Header />
        <About />
        <FeaturedPosts />
        <Experience />
        <Education />

        <Projects />
        <Recommendations />
        <HonorsAndAwards />
        <Footer />
      </main>
    </div>
  );
}
