import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy, Target, TrendingUp, ExternalLink } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
}

const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since LeetCode doesn't have a public API, we'll use mock data
    // In a real implementation, you might need to use a third-party service or scraper
    const mockStats: LeetCodeStats = {
      totalSolved: 50,
      totalQuestions: 3596,
      easySolved: 24,
      mediumSolved: 20,
      hardSolved: 1,
      acceptanceRate: 76.4,
      ranking: 2142073
    };

    setTimeout(() => {
      setStats(mockStats);
      setLoading(false);
    }, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            LeetCode Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass rounded-xl p-6 animate-pulse">
                <div className="h-12 w-12 bg-gray-600 rounded-lg mb-4"></div>
                <div className="h-8 bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!stats) return null;

  const progressPercentage = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            LeetCode Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tracking my problem-solving progress and algorithmic thinking development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{stats.totalSolved}</h3>
            <p className="text-gray-400">Problems Solved</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{stats.acceptanceRate}%</h3>
            <p className="text-gray-400">Acceptance Rate</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">#{stats.ranking.toLocaleString()}</h3>
            <p className="text-gray-400">Global Ranking</p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{progressPercentage.toFixed(1)}%</h3>
            <p className="text-gray-400">Progress</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Problem Distribution</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{stats.easySolved}</div>
              <div className="text-gray-400">Easy</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(stats.easySolved / 100) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.mediumSolved}</div>
              <div className="text-gray-400">Medium</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(stats.mediumSolved / 100) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">{stats.hardSolved}</div>
              <div className="text-gray-400">Hard</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-400 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(stats.hardSolved / 50) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://leetcode.com/u/kartik-singhhh03/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 glow group"
            >
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View LeetCode Profile</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCode;