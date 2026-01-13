export default function Home() {
  return (
    <div className="h-screen bg-white dark:bg-neutral-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-4 font-[family-name:var(--font-saira)]">
          CodifyCamp<sup className="text-lg md:text-2xl relative -top-5 md:-top-7">®</sup>
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
          Learn to code anytime, anywhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            Learn More
          </button>
          <button className="px-6 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}
