import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">C</div>
              <span className="font-bold text-xl tracking-tight">CodifyCamp</span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              <Link href="#curriculum" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Curriculum</Link>
              <Link href="#community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Community</Link>
              <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <Link href="#success" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Success Stories</Link>
            </div>
            <div>
              <Link href="/login" className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-all shadow-sm">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Your Career in Web Dev <br className="hidden md:block" /> Starts Here.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-600 dark:text-neutral-300 mb-10">
            CodifyCamp is the <span className="font-semibold text-blue-600 dark:text-blue-400">free</span>, open-source, full-stack coding bootcamp.
            Learn by building real projects and join a community of aspiring developers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#curriculum" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-blue-500/20">
              Start Learning Now
            </Link>
            <Link href="#curriculum" className="inline-flex items-center justify-center px-8 py-3 border border-neutral-200 dark:border-neutral-700 text-base font-medium rounded-lg text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 md:py-4 md:text-lg md:px-10 transition-all">
              View Curriculum
            </Link>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="community" className="bg-neutral-50 dark:bg-neutral-900/50 py-12 border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">0$</div>
              <div className="text-lg font-medium text-neutral-700 dark:text-neutral-300">Tuition Cost</div>
              <p className="text-sm text-neutral-500 mt-1">Totally free, forever.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-lg font-medium text-neutral-700 dark:text-neutral-300">Open Source</div>
              <p className="text-sm text-neutral-500 mt-1">Transparent and community driven.</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Projects</div>
              <div className="text-lg font-medium text-neutral-700 dark:text-neutral-300">Based Learning</div>
              <p className="text-sm text-neutral-500 mt-1">Learn by doing, not watching.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Why CodifyCamp?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-500 dark:text-neutral-400">
            We provide a path to success for aspiring developers who want to take control of their education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Full Stack Curriculum</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              From HTML & CSS to advanced React and Node.js. Our curriculum covers everything you need to become a production-ready developer.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Build Real Projects</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Theory is important, but practice makes perfect. You'll build dozens of projects to reinforce your learning and build a portfolio.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Active Community</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Connect with thousands of other students. Get help, share your progress, and pair program with peers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Preview Section */}
      <section id="curriculum" className="py-24 bg-neutral-50 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">The Path to Pro</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-500 dark:text-neutral-400">
              A structured path to guide you from absolute beginner to employed developer.
            </p>
          </div>

          <div className="space-y-8">
            {/* Path Item 1 */}
            <div className="flex flex-col md:flex-row items-center bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center font-bold text-2xl text-neutral-500">1</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Foundations</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Start here if you're new to coding. Learn how the web works, set up your developer environment, and build your first pages with HTML, CSS, and basic JavaScript.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-semibold text-neutral-600 dark:text-neutral-400">Git</span>
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-semibold text-neutral-600 dark:text-neutral-400">HTML</span>
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-semibold text-neutral-600 dark:text-neutral-400">CSS</span>
                  <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-semibold text-neutral-600 dark:text-neutral-400">Flexbox</span>
                </div>
              </div>
            </div>

            {/* Path Item 2 */}
            <div className="flex flex-col md:flex-row items-center bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 ring-1 ring-blue-500/20">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center font-bold text-2xl text-blue-600 dark:text-blue-400">2</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">Full Stack JavaScript</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Deep dive into the JavaScript ecosystem. Master React for the frontend and Node.js for the backend. Build complex applications with databases and authentication.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-300">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-300">React</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-300">Node.js</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-300">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">Success Stories</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-neutral-500 dark:text-neutral-400">
              Hear from our students who have transformed their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <p className="text-lg italic text-neutral-600 dark:text-neutral-300 mb-6">
                "CodifyCamp was the best investment of time I've ever made. The curriculum is challenging but incredibly rewarding. I got a job as a Junior Developer 6 months after starting."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">JD</div>
                <div className="ml-3">
                  <div className="font-bold">John Doe</div>
                  <div className="text-sm text-neutral-500">Frontend Developer at Tech Co.</div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <p className="text-lg italic text-neutral-600 dark:text-neutral-300 mb-6">
                "I tried other tutorials, but nothing clicked until CodifyCamp. The community is amazing and always there to help. I'm now working full-time as a Full Stack Engineer."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">AS</div>
                <div className="ml-3">
                  <div className="font-bold">Alice Smith</div>
                  <div className="text-sm text-neutral-500">Software Engineer at Startup Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to change your career?</h2>
          <p className="text-xl text-neutral-300 mb-10">
            Join thousands of students learning to code right now. It's free, self-paced, and proven to work.
          </p>
          <Link href="/signup" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-lg text-neutral-900 bg-white hover:bg-neutral-100 transition-colors">
            Create Free Account
          </Link>
          <p className="mt-4 text-sm text-neutral-400">No credit card required. Ever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">C</div>
                <span className="font-bold text-lg">CodifyCamp</span>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                A free, open-source coding bootcamp for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><Link href="#" className="hover:text-blue-600">Curriculum</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Projects</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Success Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><Link href="#" className="hover:text-blue-600">Discord</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Github</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Twitter</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li><Link href="#" className="hover:text-blue-600">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-blue-600">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">© 2024 CodifyCamp. Open Source.</p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

