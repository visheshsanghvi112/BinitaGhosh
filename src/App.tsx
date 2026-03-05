import { motion } from "motion/react";
import { Briefcase, GraduationCap, Mail, MapPin, Phone, User, BookOpen, Film, Award, ChevronDown } from "lucide-react";
import { useState, ReactNode, FC } from "react";

// --- Components ---

const Section: FC<{ children: ReactNode; className?: string; id?: string }> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-12 md:py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const FadeIn: FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
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
    className="h-[1px] w-full bg-current opacity-20 my-8 md:my-12" 
  />
);

// --- Main App ---

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Theme classes
  const theme = isDarkMode
    ? "bg-[#0a0a0a] text-white selection:bg-white selection:text-black"
    : "bg-[#f5f5f5] text-black selection:bg-black selection:text-white";
    
  const accentColor = isDarkMode ? "text-gray-300" : "text-gray-600";
  const borderColor = isDarkMode ? "border-white/20" : "border-black/10";
  const cardBg = isDarkMode ? "bg-white/5" : "bg-black/5";

  const buttonHoverClass = isDarkMode 
    ? "hover:bg-white hover:text-black" 
    : "hover:bg-black hover:text-white";

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${theme} font-sans overflow-x-hidden`}>
      
      {/* Navigation / Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white`}>
        <div className="text-xl font-serif tracking-widest font-bold uppercase">BG.</div>
        <button 
          onClick={toggleTheme}
          className="text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-24 lg:py-0 gap-12">
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start z-10 w-full">
          <FadeIn>
            <p className={`text-xs md:text-base uppercase tracking-[0.3em] mb-4 ${accentColor}`}>
              HR Executive & Talent Acquisition Specialist
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] font-light tracking-tight mb-8">
              Binita <br />
              <span className="italic font-normal ml-8 md:ml-24">Gobinda</span> <br />
              Ghosh
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center mt-8 lg:mt-12">
              <div className="flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase opacity-80">
                <MapPin size={16} />
                <span>Diva East, Thane</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-current opacity-30"></div>
              <div className="flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase opacity-80">
                <Mail size={16} />
                <span>binitaghosh636@gmail.com</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Image Content */}
        <div className="flex-1 flex justify-center lg:justify-end items-center w-full max-w-md lg:max-w-full relative z-0 mt-8 lg:mt-0">
           <FadeIn delay={0.2}>
             <div className={`relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-h-[60vh] lg:max-h-[80vh] overflow-hidden rounded-sm border ${borderColor}`}>
                {/* Replace src with your uploaded image path, e.g., "/hero.jpg" */}
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Binita Gobinda Ghosh" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
             </div>
           </FadeIn>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0"
        >
          <ChevronDown className="animate-bounce opacity-50" size={24} />
        </motion.div>
      </header>

      <Divider />

      {/* Summary */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <FadeIn>
              <h2 className="font-serif text-3xl md:text-5xl italic">The Profile</h2>
            </FadeIn>
          </div>
          <div className="md:col-span-8">
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl leading-relaxed font-light opacity-90">
                BMS Graduate with hands-on experience in HR operations, data management, and administrative support. 
                Proven ability to handle employee records, coordinate payroll documentation, and assist with end-to-end HR processes. 
                Strong communicator with a keen eye for detail and a commitment to data confidentiality.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
                <span className={`px-4 py-2 rounded-full border ${borderColor} text-[10px] md:text-xs uppercase tracking-wider`}>HR Management</span>
                <span className={`px-4 py-2 rounded-full border ${borderColor} text-[10px] md:text-xs uppercase tracking-wider`}>Talent Acquisition</span>
                <span className={`px-4 py-2 rounded-full border ${borderColor} text-[10px] md:text-xs uppercase tracking-wider`}>Recruitment</span>
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

        <div className="space-y-12">
          <FadeIn delay={0.2}>
            <div className={`group relative p-6 md:p-12 border ${borderColor} ${isDarkMode ? 'hover:bg-white/5' : 'hover:bg-black/5'} transition-colors duration-500`}>
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
        </div>
      </Section>

      {/* Education & Certifications Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Education */}
          <div>
            <FadeIn>
              <div className="flex items-end justify-between mb-8 md:mb-12">
                <h2 className="font-serif text-3xl md:text-4xl italic">Education</h2>
                <span className={`text-sm uppercase tracking-widest ${accentColor}`}>02</span>
              </div>
              <div className={`border-l ${borderColor} pl-6 md:pl-8 py-2`}>
                <h3 className="text-lg md:text-xl font-medium">Bachelor of Management Studies (BMS)</h3>
                <p className={`mt-2 text-xs md:text-sm uppercase tracking-wider ${accentColor}`}>Mumbai University – V.K. Krishna Menon College</p>
                <p className={`mt-1 text-xs md:text-sm ${accentColor}`}>2022 – 2025</p>
                <p className="mt-4 text-sm md:text-base font-light">Specialization: Human Resources Management</p>
              </div>
            </FadeIn>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn delay={0.2}>
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
                ].map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Award size={20} className={`mt-1 shrink-0 ${accentColor}`} />
                    <span className="font-light text-sm md:text-base">{cert}</span>
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
          <h2 className="font-serif text-3xl md:text-5xl mb-12 md:mb-16 text-center">Technical & Functional Skills</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: "HR Tools", skills: ["MS Word", "MS Excel (HR Data)", "AnyDesk", "Ultraviewer"] },
            { title: "Core Functions", skills: ["Record Management", "Employee Documentation", "Payroll Coordination", "Data Entry"] },
            { title: "Communication", skills: ["Email Drafting", "Report Writing", "Client Coordination", "Stakeholder Mgmt"] },
            { title: "Operations", skills: ["Remote Support", "Admin Coordination", "Confidentiality", "Data Handling"] }
          ].map((category, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className={`h-full p-6 md:p-8 border ${borderColor} hover:bg-current hover:bg-opacity-5 transition-colors`}>
                <h3 className="text-lg font-serif italic mb-4 md:mb-6">{category.title}</h3>
                <ul className={`space-y-2 text-sm ${accentColor}`}>
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Personal Interests (The "Suits" Touch) */}
      <Section className="relative overflow-hidden">
        <div className={`absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-500 to-transparent`}></div>
        <div className="relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center text-center mb-12 md:mb-16">
              <span className={`text-xs uppercase tracking-[0.4em] mb-4 ${accentColor}`}>Beyond the Resume</span>
              <h2 className="font-serif text-3xl md:text-6xl">The Personal Archive</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="flex flex-col items-center text-center space-y-4">
                <BookOpen size={32} strokeWidth={1} />
                <h3 className="text-xl font-serif italic">Literature</h3>
                <p className={`text-sm leading-relaxed ${accentColor} max-w-xs`}>
                  An avid reader finding strategic insights and human complexity within the pages of classic and contemporary works.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center text-center space-y-4">
                <Film size={32} strokeWidth={1} />
                <h3 className="text-xl font-serif italic">Cinema & Series</h3>
                <p className={`text-sm leading-relaxed ${accentColor} max-w-xs`}>
                  Drawn to complex narratives of power and strategy, from the political intrigue of <em>Game of Thrones</em> to the corporate chess of <em>Suits</em> and <em>Succession</em>.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Contact */}
      <Section className="pb-24 md:pb-32">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-7xl mb-6 md:mb-8">Let's Connect</h2>
            <p className={`text-base md:text-lg mb-8 md:mb-12 ${accentColor}`}>
              Open to opportunities in HR Management and Talent Acquisition.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
              <a 
                href="mailto:binitaghosh636@gmail.com"
                className={`group flex items-center justify-center gap-3 px-8 py-4 border ${borderColor} ${buttonHoverClass} transition-all duration-300 w-full md:w-auto`}
              >
                <Mail size={18} />
                <span className="uppercase tracking-widest text-sm">Email Me</span>
              </a>
              <a 
                href="tel:+919326360513"
                className={`group flex items-center justify-center gap-3 px-8 py-4 border ${borderColor} ${buttonHoverClass} transition-all duration-300 w-full md:w-auto`}
              >
                <Phone size={18} />
                <span className="uppercase tracking-widest text-sm">+91 9326360513</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className={`py-8 px-6 md:px-12 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-70`}>
        <span>© {new Date().getFullYear()} Binita Gobinda Ghosh</span>
        <span className="mt-2 md:mt-0">Mumbai, India</span>
      </footer>

    </div>
  );
}
