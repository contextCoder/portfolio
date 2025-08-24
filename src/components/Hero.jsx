"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import image from "../assets/images/profile-circle_blue_bg.png";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Ball {
      constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 25;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update(balls) {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        for (let i = 0; i < balls.length; i++) {
          if (balls[i] !== this) {
            const dist = Math.hypot(this.x - balls[i].x, this.y - balls[i].y);
            if (dist < this.radius + balls[i].radius) {
              balls.splice(balls.indexOf(this), 1);

              let radius = 10 + Math.random() * 15;
              let x = Math.random() * (canvas.width - radius * 2) + radius;
              let y = Math.random() * (canvas.height - radius * 2) + radius;
              let dx = (Math.random() - 0.5) * 3;
              let dy = (Math.random() - 0.5) * 3;
              let color = colors[Math.floor(Math.random() * colors.length)];
              balls.push(new Ball(x, y, dx, dy, radius, color));
            }
          }
        }

        this.draw();
      }
    }

    let balls = [];
    const colors = ["#22d3ee", "#3b82f6", "#8b5cf6", "#f472b6", "#facc15"];
    for (let i = 0; i < 15; i++) {
      let radius = 10 + Math.random() * 15;
      let x = Math.random() * (canvas.width - radius * 2) + radius;
      let y = Math.random() * (canvas.height - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * 3;
      let dy = (Math.random() - 0.5) * 3;
      let color = colors[Math.floor(Math.random() * colors.length)];
      balls.push(new Ball(x, y, dx, dy, radius, color));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      balls.forEach((ball) => ball.update(balls));
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden font-sans">
      {/* Canvas Balls */}
      <canvas ref={canvasRef} className="absolute inset-0"></canvas>

      {/* Left Content */}
      <div className="z-10 flex flex-col items-start justify-center max-w-lg relative flex-1">
        {/* Big Welcome Text */}
        <motion.h2
          className="absolute -top-32 left-0 text-[200px] md:text-[300px] font-extrabold 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 
             opacity-10 leading-none select-none pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          WELCOME
        </motion.h2>

        {/* Name */}
        <motion.h1
          className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 drop-shadow-[0_0_25px_rgba(250,204,21,0.9)] font-serif mt-28"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tukaram <br /> Todkari
        </motion.h1>

        {/* Underline */}
        <motion.div
          className="h-[3px] w-40 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full mt-3 shadow-[0_0_20px_rgba(250,204,21,0.8)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Role */}
        <motion.p
          className="text-black font-medium text-2xl mt-5 tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          mern stack developer
        </motion.p>
      </div>

      {/* Right Content - Image */}
      <motion.div
        className="z-10 flex-1 flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <img
          src={image}
          alt="Profile"
          className="w-[400px] md:w-[550px] lg:w-[650px] object-contain drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
