/* eslint-disable no-unused-vars */
import { easeOut, motion } from 'motion/react';
import team1 from '../assets/team1.webp';
import team2 from '../assets/team2.jpg';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-slate-300 rounded-2xl min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-4xl rounded-br-4xl  border-blue-400 border-b-4 border-l-4 shadow-2xl"
            />
            <motion.img
              src={team2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-4xl rounded-br-4xl  border-blue-400 border-b-4 border-l-4 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 50, color: ['#F54927', '#27F549', '#2780F5'] }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }}
              className="text-5xl font-bold"
            >
              Latest Job News!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
