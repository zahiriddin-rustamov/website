"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <ReactFullpage
      licenseKey={""}
      scrollingSpeed={800}
      navigation={true}
      navigationPosition={"right"}
      showActiveTooltip={true}
      anchors={["home", "publications", "blogs", "projects", "education", "contact"]}
      navigationTooltips={["Home", "Publications", "Blog", "Projects", "Education", "Contact"]}
      credits={{ enabled: false }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* Home Section */}
            <div className="section relative overflow-hidden bg-white text-gray-800">
              {/* Particles Background */}
              <ParticlesBackground />
              
              <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <div className="backdrop-blur-sm p-10 rounded-xl shadow-md">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-indigo-700">
                    Zahiriddin Rustamov
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-light mb-8 text-indigo-600">
                    PhD Student at UAEU & KU Leuven
                  </h2>
                  <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700">
                    Researching at the intersection of data selection and graphs.<br/>Check out my work!
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <button 
                      onClick={() => fullpageApi.moveTo("publications")} 
                      className="button px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all"
                    >
                      Publications
                    </button>
                    <button 
                      onClick={() => fullpageApi.moveTo("projects")} 
                      className="button px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all"
                    >
                      Projects
                    </button>
                    <button 
                      onClick={() => fullpageApi.moveTo("contact")} 
                      className="button px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all"
                    >
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Publications Section */}
            <div className="section bg-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Selected Publications</h2>
                <div className="space-y-8">
                  <div className="card p-6 bg-gray-50 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:flex-1">
                        <h3 className="text-xl font-medium mb-2">Publication Title 1</h3>
                        <p className="text-gray-600 mb-3 text-sm">Journal Name (Year)</p>
                        <p className="mb-4 text-gray-700">Brief description of the publication and its significance to your field. Highlight key findings or contributions.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Read Paper</a>
                          <span className="text-gray-300">|</span>
                          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View Citation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card p-6 bg-gray-50 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:flex-1">
                        <h3 className="text-xl font-medium mb-2">Publication Title 2</h3>
                        <p className="text-gray-600 mb-3 text-sm">Journal Name (Year)</p>
                        <p className="mb-4 text-gray-700">Brief description of the publication and its significance to your field. Highlight key findings or contributions.</p>
                        <div className="flex gap-2">
                          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Read Paper</a>
                          <span className="text-gray-300">|</span>
                          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View Citation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blogs/Posts Section */}
            <div className="section bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog & Thoughts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="card bg-white overflow-hidden shadow-sm">
                    <div className="h-48 image-placeholder"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">Post Title 1</h3>
                      <p className="text-gray-500 mb-3 text-sm">April 2, 2025</p>
                      <p className="mb-4 text-gray-700">A short excerpt from the blog post that gives readers an idea of what to expect.</p>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Continue Reading →</a>
                    </div>
                  </div>
                  
                  <div className="card bg-white overflow-hidden shadow-sm">
                    <div className="h-48 image-placeholder"></div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">Post Title 2</h3>
                      <p className="text-gray-500 mb-3 text-sm">March 15, 2025</p>
                      <p className="mb-4 text-gray-700">A short excerpt from the blog post that gives readers an idea of what to expect.</p>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Continue Reading →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="section bg-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="card bg-gray-50 overflow-hidden shadow-sm">
                    <div className="h-40 image-placeholder"></div>
                    <div className="p-5">
                      <h3 className="text-lg font-medium mb-2">Project 1</h3>
                      <p className="mb-4 text-gray-700 text-sm">A brief overview of the project, its goals, and why it matters.</p>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn More</a>
                    </div>
                  </div>
                  
                  <div className="card bg-gray-50 overflow-hidden shadow-sm">
                    <div className="h-40 image-placeholder"></div>
                    <div className="p-5">
                      <h3 className="text-lg font-medium mb-2">Project 2</h3>
                      <p className="mb-4 text-gray-700 text-sm">A brief overview of the project, its goals, and why it matters.</p>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn More</a>
                    </div>
                  </div>
                  
                  <div className="card bg-gray-50 overflow-hidden shadow-sm">
                    <div className="h-40 image-placeholder"></div>
                    <div className="p-5">
                      <h3 className="text-lg font-medium mb-2">Project 3</h3>
                      <p className="mb-4 text-gray-700 text-sm">A brief overview of the project, its goals, and why it matters.</p>
                      <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education/Background Section */}
            <div className="section bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education & Background</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/4 text-white/80">
                        <div className="text-lg font-medium">20XX - Present</div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-medium mb-1">PhD in [Your Field]</h3>
                        <p className="text-lg mb-3 opacity-90">United Arab Emirates University & KU Leuven</p>
                        <p className="opacity-80">Description of your PhD research focus and achievements. Mention any awards, publications, or notable projects.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/4 text-white/80">
                        <div className="text-lg font-medium">20XX - 20XX</div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-medium mb-1">Master's Degree</h3>
                        <p className="text-lg mb-3 opacity-90">University Name</p>
                        <p className="opacity-80">Details about your master's program, thesis, and notable achievements.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="md:w-1/4 text-white/80">
                        <div className="text-lg font-medium">20XX - 20XX</div>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-medium mb-1">Bachelor's Degree</h3>
                        <p className="text-lg mb-3 opacity-90">University Name</p>
                        <p className="opacity-80">Overview of your undergraduate studies, major, and any honors or distinctions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="section bg-gray-900 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-2/5">
                    <h3 className="text-xl font-medium mb-6">Contact Information</h3>
                    <div className="space-y-4 mb-8">
                      <p className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </span>
                        <span className="text-white/90">email@example.com</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </span>
                        <span className="text-white/90">+xxx xxx xxxxx</span>
                      </p>
                      <p className="flex items-center gap-3">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600/30">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-white/90">Your University, City, Country</span>
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-medium mb-4">Connect</h3>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo-600/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:w-3/5 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h3 className="text-xl font-medium mb-6">Send a Message</h3>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Name</label>
                          <input 
                            type="text" 
                            id="name"
                            placeholder="Your Name" 
                            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email</label>
                          <input 
                            type="email" 
                            id="email"
                            placeholder="Your Email" 
                            className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject</label>
                        <input 
                          type="text" 
                          id="subject"
                          placeholder="Subject" 
                          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" 
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                        <textarea 
                          id="message"
                          placeholder="Your Message" 
                          rows={4} 
                          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        ></textarea>
                      </div>
                      <button type="button" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium transition-colors">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
