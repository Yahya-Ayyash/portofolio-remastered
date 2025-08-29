import Image from "next/image";
import { FaUser, FaPhone, FaEnvelope, FaVectorSquare, FaDesktop, FaCode, FaPencilRuler } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#0d0d29] text-white font-poppins">
      {/* Navbar */}
      <nav className="bg-[#0d0d29] fixed w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#" className="flex items-center text-2xl font-bold">
            <Image src="/file.svg" alt="Logo" width={40} height={40} />
          </a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-[#00ff85] transition">Home</a></li>
            <li><a href="#recent-works" className="hover:text-[#00ff85] transition">Recent Works</a></li>
            <li><a href="#skills" className="hover:text-[#00ff85] transition">Skills</a></li>
            <li><a href="#certificates" className="hover:text-[#00ff85] transition">Certificates</a></li>
            <li><a href="#contact" className="hover:text-[#00ff85] transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-between px-10 bg-gradient-to-r from-[#14143c] to-[#0d0d29] pt-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">Helloooo <span>👋</span></h1>
          <h1 className="text-4xl md:text-6xl font-bold">Im <span className="bg-gradient-to-r from-[#00ff85] to-blue-500 bg-clip-text text-transparent">Yahya Abdurrahman Ayyash</span></h1>
          <p className="text-xl mt-4">Web Developer</p>
          <div className="mt-6 flex space-x-4">
            <a href="/image/CV1.png" target="_blank" className="bg-[#00ff85] text-[#0d0d29] px-5 py-3 rounded-lg shadow hover:bg-[#00d173]">See My CV</a>
            <a href="https://wa.me/6281319233622" className="bg-[#00ff85] text-[#0d0d29] px-5 py-3 rounded-lg shadow hover:bg-[#00d173]">Contact Me</a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src="/image/ya.png" alt="Profile" width={400} height={400} className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* About Me */}
      <section className="about-me py-20 px-10" id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl font-bold">About Me</h1>
            <div className="w-32 h-1 bg-[#00ff85] my-4"></div>
            <p className="mb-6">Perkenalkan nama saya Yahya Abdurrahman Ayyash, Lahir di Depok, 05 Oktober 2006. Senang mencoba hal-hal baru, mimpi terbesar saya adalah menjadi seorang expert Cyber Security.</p>
            <ul className="space-y-3">
              <li className="flex items-center"><FaUser className="text-[#00ff85] mr-3" /> <strong>Name:</strong> Yahya Abdurrahman Ayyash</li>
              <li className="flex items-center"><FaPhone className="text-[#00ff85] mr-3" /> <strong>Phone:</strong> +6281319233622</li>
              <li className="flex items-center"><FaEnvelope className="text-[#00ff85] mr-3" /> <strong>Email:</strong> ayyash179@gmail.com</li>
            </ul>
          </div>
          <div className="text-end">
            <a href="/image/Web-1.png" target="_blank" className="bg-[#00ff85] px-6 py-3 rounded-lg shadow text-[#0d0d29] hover:bg-[#00d173]">See My Resume</a>
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="recent-works py-20 px-10 bg-[#14143c]" id="recent-works">
        <h2 className="text-3xl font-bold text-center">Recent Works</h2>
        <div className="w-32 h-1 bg-[#00ff85] mx-auto my-6"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/Front End-1.png" alt="Frontend Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Frontend Project</h3>
          </div>
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/JavaScript-1.png" alt="JavaScript Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">JavaScript Project</h3>
          </div>
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/DevOps-1.png" alt="DevOps Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">DevOps Project</h3>
          </div>
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/Java-1.png" alt="Java Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Java Project</h3>
          </div>
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/Web-1.png" alt="Web Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Web Project</h3>
          </div>
          <div className="work-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/bg2.png" alt="Other Project" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Other Project</h3>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="certificates py-20 px-10 bg-[#0d0d29]" id="certificates">
        <h2 className="text-3xl font-bold text-center">Certificates</h2>
        <div className="w-32 h-1 bg-[#00ff85] mx-auto my-6"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/thumbnail-pekanan-1.png" alt="Certificate 1" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 1</h3>
          </div>
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/thumbnail-pekanan-3.png" alt="Certificate 2" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 2</h3>
          </div>
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/thumbnail-pekanan-4.png" alt="Certificate 3" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 3</h3>
          </div>
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/image.png" alt="Certificate 4" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 4</h3>
          </div>
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/image 1.png" alt="Certificate 5" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 5</h3>
          </div>
          <div className="cert-box bg-[#1c1c5c] p-4 rounded-lg hover:scale-105 transition">
            <Image src="/image/hytam.png" alt="Certificate 6" width={400} height={250} className="rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">Certificate 6</h3>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills py-20 px-10 text-center bg-[#0d0d29]" id="skills">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <div className="w-32 h-1 bg-[#00ff85] mx-auto my-6"></div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="skill-box bg-[#1c1c5c] p-6 rounded-lg hover:bg-[#00d173] transition transform hover:scale-105">
            <FaVectorSquare className="text-4xl text-[#00ff85] mx-auto mb-4" />
            <h3>UI/UX Design</h3>
          </div>
          <div className="skill-box bg-[#1c1c5c] p-6 rounded-lg hover:bg-[#00d173] transition transform hover:scale-105">
            <FaDesktop className="text-4xl text-[#00ff85] mx-auto mb-4" />
            <h3>Web Design</h3>
          </div>
          <div className="skill-box bg-[#1c1c5c] p-6 rounded-lg hover:bg-[#00d173] transition transform hover:scale-105">
            <FaCode className="text-4xl text-[#00ff85] mx-auto mb-4" />
            <h3>Web Developer</h3>
          </div>
          <div className="skill-box bg-[#1c1c5c] p-6 rounded-lg hover:bg-[#00d173] transition transform hover:scale-105">
            <FaPencilRuler className="text-4xl text-[#00ff85] mx-auto mb-4" />
            <h3>Graphic Design</h3>
          </div>
        </div>
        <button className="mt-6 bg-[#00ff85] text-[#0d0d29] px-6 py-3 rounded-lg shadow hover:bg-[#00d173]">See All Skills</button>
      </section>

      {/* Get In Touch */}
      <section className="get-in-touch py-20 px-10 bg-[#14143c] text-center" id="contact">
        <h1 className="text-3xl font-bold">Get In Touch</h1>
        <div className="w-32 h-1 bg-[#00ff85] mx-auto my-6"></div>
        <p>You can reach me through any of the following:</p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="tel:+6281319233622" className="bg-[#00ff85] px-6 py-3 rounded-lg shadow text-[#0d0d29] hover:bg-[#00d173]"><FaPhone className="inline mr-2" /> Call Me</a>
          <a href="https://wa.me/6281319233622" className="bg-[#00ff85] px-6 py-3 rounded-lg shadow text-[#0d0d29] hover:bg-[#00d173]"><FaWhatsapp className="inline mr-2" /> WhatsApp</a>
          <a href="mailto:ayyash179@gmail.com" className="bg-[#00ff85] px-6 py-3 rounded-lg shadow text-[#0d0d29] hover:bg-[#00d173]"><FaEnvelope className="inline mr-2" /> Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-[#0d0d29]">
        <Image src="/file.svg" alt="Logo" width={50} height={50} className="mx-auto" />
        <p className="mt-4">Made with ❤️ by Yahya Abdurrahman Ayyash - 2024</p>
      </footer>
    </div>
  );
}
