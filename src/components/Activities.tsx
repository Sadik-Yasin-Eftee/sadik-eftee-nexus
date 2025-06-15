
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy } from "lucide-react";

const Activities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const activities = [
    {
      organization: "IUT Computer Society (IUTCS)",
      role: "Junior Web Developer",
      period: "2020 - 2021"
    },
    {
      organization: "IUT Debating Society (IUTDS)",
      role: "Junior Member",
      period: "2020"
    }
  ];

  const achievements = [
    {
      title: "Robi Datathon 3.0",
      achievement: "193rd Position (out of 3,500+ teams)",
      location: "Dhaka, Bangladesh",
      year: "2024"
    },
    {
      title: "Orange Corners Ideation Challenge",
      achievement: "Stage 2",
      location: "Dhaka, Bangladesh",
      year: "2023"
    },
    {
      title: "IUT Novice Debate Competition",
      achievement: "Semifinalist",
      location: "Gazipur, Bangladesh",
      year: "2020"
    },
    {
      title: "Rajuk College Inter-Shift Cricket Tournament",
      achievement: "Runner-Up (Senior Level)",
      location: "Dhaka, Bangladesh",
      year: "2018"
    },
    {
      title: "Rajuk College Inter-Shift Cricket Tournament",
      achievement: "Champion (Junior Level)",
      location: "Dhaka, Bangladesh",
      year: "2014"
    }
  ];

  return (
    <section ref={ref} id="activities" className="py-20 px-6 bg-charcoal-900/10">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Activities & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Leadership experience and recognition across various domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Extracurricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-icy-blue-400" />
              </div>
              <h3 className="text-2xl font-medium text-icy-blue-400">Extracurricular Activities</h3>
            </div>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  whileHover={{ y: -3 }}
                >
                  <h4 className="font-medium text-lavender-400 mb-1">{activity.organization}</h4>
                  <p className="text-foreground/70 font-light text-sm mb-1">{activity.role}</p>
                  <p className="text-foreground/60 font-light text-xs">{activity.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-icy-blue-400" />
              </div>
              <h3 className="text-2xl font-medium text-icy-blue-400">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -3 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lavender-400">{achievement.title}</h4>
                    <span className="text-xs text-foreground/60 font-light">{achievement.year}</span>
                  </div>
                  <p className="text-foreground/70 font-light text-sm mb-1">{achievement.achievement}</p>
                  <p className="text-foreground/60 font-light text-xs">{achievement.location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
