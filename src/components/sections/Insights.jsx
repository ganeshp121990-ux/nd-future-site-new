"use client";

import { motion } from "framer-motion";

export default function Insights() {
  const posts = [
    {
      title: "2026 UK Tax Changes Every Business Should Know",
      category: "Tax Update",
      date: "Jan 2026"
    },
    {
      title: "How Smart Directors Reduce Corporation Tax",
      category: "Strategy",
      date: "Dec 2025"
    },
    {
      title: "HMRC Compliance: Avoid Costly Mistakes",
      category: "Compliance",
      date: "Nov 2025"
    }
  ];

  return (
    <section id="insights" className="relative py-32 md:py-48 bg-creme text-deepBlue overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-32"
        >
          <p className="text-deepBlue/50 font-medium text-xs tracking-[0.25em] uppercase mb-8">
            Insights
          </p>

          <h2 className="text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight font-heading">
            Clarity beyond
            <br />
            compliance.
          </h2>

          <p className="text-deepBlue/60 mt-8 text-xl font-light tracking-wide">
            Expert insights, tax updates, and strategic thinking for UK
            business owners and directors.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">

          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              onClick={() => {
                const target = document.getElementById("contact");
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-white border border-deepBlue/5 p-10 h-[360px] flex flex-col justify-between hover:shadow-2xl hover:shadow-deepBlue/5 transition-all duration-500 cursor-pointer"
            >
              {/* category */}
              <p className="text-[11px] tracking-[0.2em] text-deepBlue/40 font-medium uppercase">
                {post.category}
              </p>

              {/* title */}
              <h3 className="text-2xl font-light mt-8 leading-snug tracking-tight font-heading text-deepBlue group-hover:text-deepBlue/80 transition-colors duration-300">
                {post.title}
              </h3>

              {/* footer */}
              <div className="flex items-center justify-between mt-auto pt-10 border-t border-deepBlue/5">
                <span className="text-deepBlue/40 text-sm tracking-wide font-light">{post.date}</span>

                <span className="text-[11px] tracking-[0.2em] font-medium uppercase text-deepBlue group-hover:text-deepBlue/60 transition-colors duration-300">
                  Read Article
                </span>
              </div>
            </motion.article>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <button 
            onClick={() => {
              const target = document.getElementById("insights");
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 rounded-full border border-deepBlue/20 text-sm font-medium tracking-wide text-deepBlue hover:bg-deepBlue hover:text-white transition-all duration-300 min-h-[56px]"
          >
            View All Insights
          </button>
        </div>

      </div>
    </section>
  );
}
