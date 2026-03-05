import { motion, useScroll, useTransform } from "motion/react";
import { Mail, MapPin, Phone, BookOpen, Film, Award, ArrowDown, Download, Linkedin } from "lucide-react";
import { useState, useRef, ReactNode, FC } from "react";

// --- Shared Components ---

const Section: FC<{ children: ReactNode; className?: string; id?: string }> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-12 md:py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const FadeIn: FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className="h-[1px] w-full bg-current opacity-15 my-8 md:my-12"
  />
);

// --- App ---

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const bg = isDarkMode ? "#0a0a0a" : "#ffffff";
  const theme = isDarkMode
    ? "bg-[#0a0a0a] text-white"
    : "bg-white text-[#1a1a1a]";

  const accentColor = isDarkMode ? "text-neutral-400" : "text-neutral-500";
  const borderColor = isDarkMode ? "border-white/15" : "border-black/10";
  const buttonHoverClass = isDarkMode ? "hover:bg-white hover:text-black" : "hover:bg-[#1a1a1a] hover:text-white";

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className={`min-h-screen ${theme} font-sans overflow-x-hidden transition-colors duration-700`}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-8 md:px-12 mix-blend-difference text-white">
        <span className="text-base font-serif tracking-[0.3em] font-semibold uppercase">BG.</span>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="relative inline-flex items-center w-12 h-6 rounded-full border border-white/60 transition-all duration-500 shrink-0"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <div className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full shadow-md transition-all duration-500 ease-in-out ${isDarkMode ? "left-[22px]" : "left-[3px]"}`} />
        </button>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — Elegant, clean, minimal
      ═══════════════════════════════════════════ */}
      <header ref={heroRef} className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        
        {/* ──── MOBILE LAYOUT ──── */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="lg:hidden w-full flex flex-col pt-20 pb-12 px-6 gap-12"
        >
          {/* TEXT COMES FIRST with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >

            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.45, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-7xl leading-[0.95] font-light mt-4"
              >
                Binita
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.6, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-7xl leading-[0.95] font-light italic ml-4"
              >
                Gobinda
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.75, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-7xl leading-[0.95] font-light"
              >
                Ghosh
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className={`h-px w-12 my-6 origin-left ${isDarkMode ? "bg-white/15" : "bg-black/10"}`}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="space-y-2 mb-6"
            >
              <div className={`flex items-center gap-2 text-xs tracking-wide ${accentColor}`}>
                <MapPin size={14} className="shrink-0" strokeWidth={1.5} />
                <span>Diva East, Thane</span>
              </div>
              <div className={`flex items-center gap-2 text-xs tracking-wide ${accentColor}`}>
                <Mail size={14} className="shrink-0" strokeWidth={1.5} />
                <span>binitaghosh636@gmail.com</span>
              </div>
            </motion.div>

            <motion.a
              href="/Binita_Gobinda_Ghosh_Resume.docx"
              download
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.3em] border ${borderColor} ${buttonHoverClass} transition-all duration-500`}
            >
              <Download size={14} strokeWidth={1.5} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* IMAGE COMES AFTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-80 mx-auto overflow-hidden border"
            style={{ y: imgY, borderColor: isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)" }}
          >
            <img
              src="/Gemini_Generated_Image_xhb1jyxhb1jyxhb1.png"
              alt="Binita Gobinda Ghosh"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className={`flex items-center gap-2 justify-center ${accentColor} opacity-40`}
          >
            <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown size={12} strokeWidth={1.5} />
            </motion.div>
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          </motion.div>
        </motion.div>

        {/* ──── DESKTOP LAYOUT ──── */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden lg:flex w-full min-h-screen"
        >
          {/* Left — Text content */}
          <div className="w-1/2 flex flex-col justify-center px-16 py-20 pr-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="font-serif text-[7rem] leading-[0.95] font-light mt-6 mb-0">
                <span className="block">Binita</span>
                <span className="block italic ml-10">Gobinda</span>
                <span className="block">Ghosh</span>
              </h1>
            </motion.div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="space-y-5 mt-8"
            >
              <div className={`h-px ${isDarkMode ? "bg-white/15" : "bg-black/10"}`} />
              
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-xs tracking-wider ${accentColor}`}>
                  <MapPin size={14} className="shrink-0" strokeWidth={1.5} />
                  <span>Diva East, Thane</span>
                </div>
                <div className={`flex items-center gap-2 text-xs tracking-wider ${accentColor}`}>
                  <Mail size={14} className="shrink-0" strokeWidth={1.5} />
                  <span>binitaghosh636@gmail.com</span>
                </div>
              </div>

              <motion.a
                href="/Binita_Gobinda_Ghosh_Resume.docx"
                download
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.3em] border ${borderColor} ${buttonHoverClass} transition-all duration-500`}
              >
                <Download size={13} strokeWidth={1.5} />
                Download Resume
              </motion.a>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className={`flex items-center gap-2 pt-2 ${accentColor} opacity-30`}
              >
                <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <ArrowDown size={12} strokeWidth={1.5} />
                </motion.div>
                <span className="text-[9px] tracking-[0.3em] uppercase">Scroll</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Image with clean border */}
          <motion.div
            className="w-1/2 relative px-6 py-16 flex items-center justify-center"
            style={{ y: imgY }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm overflow-hidden"
              style={{
                boxShadow: isDarkMode
                  ? "0 0 0 1px rgba(255,255,255,0.1)"
                  : "0 4px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)"
              }}
            >
              <img
                src="/Gemini_Generated_Image_xhb1jyxhb1jyxhb1.png"
                alt="Binita Gobinda Ghosh"
                className="w-full h-auto block"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </header>

      {/* ─── REST OF PAGE ─── */}

      <Divider />

      {/* Summary */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl italic">The Profile</h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.15}>
              <p className="text-lg md:text-2xl leading-relaxed font-light opacity-85">
                BMS Graduate with hands-on experience in HR operations, data management, and administrative support.
                Proven ability to handle employee records, coordinate payroll documentation, and assist with end-to-end HR processes.
                Strong communicator with a keen eye for detail and a commitment to data confidentiality.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
                {["HR Management", "Talent Acquisition", "Recruitment"].map(t => (
                  <span key={t} className={`px-4 py-2 rounded-full border ${borderColor} text-[10px] md:text-xs uppercase tracking-wider`}>{t}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Experience */}
      <Section>
        <FadeIn>
          <div className="flex items-end justify-between mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl">Experience</h2>
            <span className={`hidden md:block text-sm uppercase tracking-widest ${accentColor}`}>01</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className={`group relative p-6 md:p-12 border ${borderColor} transition-all duration-500 hover:-translate-y-0.5 ${isDarkMode ? "hover:bg-white/[0.04] hover:border-white/25" : "hover:bg-black/[0.03] hover:border-black/18"}`}>
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <h3 className="text-xl md:text-3xl font-serif">Operations Assistant</h3>
              <span className={`text-xs md:text-sm uppercase tracking-widest mt-2 md:mt-0 ${accentColor}`}>Kanchan Jewels | Nov 2024 – Present</span>
            </div>
            <ul className={`space-y-4 text-sm md:text-base font-light leading-relaxed ${accentColor} list-disc pl-5`}>
              <li>Managed and maintained employee and operational data records with high accuracy, version control, and strict confidentiality.</li>
              <li>Executed data entry, verification, and documentation to ensure error-free payroll processing and production tracking records.</li>
              <li>Delivered remote administrative and operational support via AnyDesk, ensuring seamless coordination and uninterrupted daily operations.</li>
              <li>Administered workforce and artisan payment records in full compliance with organizational confidentiality and data protection standards.</li>
              <li>Assisted senior management with documentation, MIS reporting, and process coordination — enhancing overall HR operational efficiency.</li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      {/* Education & Certifications */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <FadeIn>
              <div className="flex items-end justify-between mb-8 md:mb-12">
                <h2 className="font-serif text-3xl md:text-4xl italic">Education</h2>
                <span className={`text-sm uppercase tracking-widest ${accentColor}`}>02</span>
              </div>
              <div className={`border-l-2 ${borderColor} pl-6 md:pl-8 py-2`}>
                <h3 className="text-lg md:text-xl font-medium">Bachelor of Management Studies (BMS)</h3>
                <p className={`mt-2 text-xs md:text-sm uppercase tracking-wider ${accentColor}`}>Mumbai University – V.K. Krishna Menon College</p>
                <p className={`mt-1 text-xs md:text-sm ${accentColor}`}>2022 – 2025</p>
                <p className="mt-4 text-sm md:text-base font-light">Specialization: Human Resources Management</p>
              </div>
            </FadeIn>
          </div>
          <div>
            <FadeIn delay={0.15}>
              <div className="flex items-end justify-between mb-8 md:mb-12">
                <h2 className="font-serif text-3xl md:text-4xl italic">Certifications</h2>
                <span className={`text-sm uppercase tracking-widest ${accentColor}`}>03</span>
              </div>
              <ul className="space-y-6">
                {[
                  "G.E. Aerospace: Human Resource Policies & Decision Making",
                  "G.E. Aerospace: Compensation & Benefits Fundamentals",
                  "Siemens AG: KPIs & Organizational Coordination",
                  "JP Morgan Chase & Co: Business Communication & Client Management"
                ].map((cert, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <Award size={18} className={`mt-0.5 shrink-0 ${accentColor}`} strokeWidth={1.5} />
                    <span className="font-light text-sm md:text-base leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Skills */}
      <Section>
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-5xl mb-12 md:mb-16 text-center">Technical &amp; Functional Skills</h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { title: "HR Tools", skills: ["MS Word", "MS Excel (HR Data)", "AnyDesk", "Ultraviewer"] },
            { title: "Core Functions", skills: ["Record Management", "Employee Documentation", "Payroll Coordination", "Data Entry"] },
            { title: "Communication", skills: ["Email Drafting", "Report Writing", "Client Coordination", "Stakeholder Mgmt"] },
            { title: "Operations", skills: ["Remote Support", "Admin Coordination", "Confidentiality", "Data Handling"] }
          ].map((cat, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className={`group h-full p-5 md:p-8 border ${borderColor} transition-all duration-500 hover:-translate-y-1 ${isDarkMode ? "hover:bg-white/[0.05]" : "hover:bg-black/[0.03]"}`}>
                <h3 className={`text-base font-serif italic mb-4 md:mb-5 ${accentColor}`}>{cat.title}</h3>
                <ul className="space-y-2.5">
                  {cat.skills.map((s, j) => (
                    <li key={j} className={`text-xs md:text-sm font-light ${accentColor} transition-all duration-300`}
                      style={{ transitionDelay: `${j * 40}ms` }}>{s}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Personal Interests */}
      <Section>
        <FadeIn>
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <span className={`text-[9px] uppercase tracking-[0.5em] mb-5 ${accentColor}`}>Beyond the Resume</span>
            <h2 className="font-serif text-3xl md:text-5xl">The Personal Archive</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
          {[
            {
              icon: <BookOpen size={28} strokeWidth={1} />, title: "Literature",
              text: "An avid reader finding strategic insights and human complexity within the pages of classic and contemporary works."
            },
            {
              icon: <Film size={28} strokeWidth={1} />, title: "Cinema & Series",
              text: "Drawn to complex narratives of power and strategy — from the political intrigue of Game of Thrones to the corporate chess of Suits and Succession."
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center gap-4">
                <div className={accentColor}>{item.icon}</div>
                <h3 className="text-xl font-serif italic">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${accentColor} max-w-xs`}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Contact */}
      <Section className="pb-24 md:pb-36">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-7xl mb-6 md:mb-8">Let's Connect</h2>
            <p className={`text-base md:text-lg mb-10 md:mb-14 ${accentColor}`}>
              Open to opportunities in HR Management and Talent Acquisition.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <a
                href="mailto:binitaghosh636@gmail.com"
                className={`flex items-center justify-center gap-3 px-8 py-4 border ${borderColor} ${buttonHoverClass} transition-all duration-300 w-full md:w-auto`}
              >
                <Mail size={16} strokeWidth={1.5} />
                <span className="uppercase tracking-widest text-sm">Email Me</span>
              </a>
              <a
                href="tel:+919326360513"
                className={`flex items-center justify-center gap-3 px-8 py-4 border ${borderColor} ${buttonHoverClass} transition-all duration-300 w-full md:w-auto`}
              >
                <Phone size={16} strokeWidth={1.5} />
                <span className="uppercase tracking-widest text-sm">+91 9326360513</span>
              </a>
              <a
                href="https://www.linkedin.com/in/binita-ghosh-0b5485342"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 px-8 py-4 border ${borderColor} ${buttonHoverClass} transition-all duration-300 w-full md:w-auto`}
              >
                <Linkedin size={16} strokeWidth={1.5} />
                <span className="uppercase tracking-widest text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className={`py-8 px-6 md:px-12 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest ${accentColor}`}>
        <span>© {new Date().getFullYear()} Binita Gobinda Ghosh</span>
        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <a href="https://www.linkedin.com/in/binita-ghosh-0b5485342" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-60 transition-opacity duration-300">
            <Linkedin size={14} strokeWidth={1.5} />
          </a>
          <span>Diva East, Thane</span>
        </div>
      </footer>

    </div>
  );
}
