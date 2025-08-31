import { useState, useEffect } from 'react';
import './App.css'; // Make sure this CSS file exists for your dark mode styles

function getYear() {
    return new Date().getFullYear();
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState('light'); // State to manage the current theme

  const projectsData = [
    {
      "title": "paid-detector",
      "link": "https://github.com/isg32-pavillion/paid-detector",
      "description": "My First Freelance Project - Basically there exists a portal that displays diffrent websites in an iframe, and this tool scrapes contents and determines if this.displayed website is relevent to us or not, if no - skip, if yes ring a bell and pause for human verification and data entry."
    },
    {
      "title": "Fempeg",
      "link": "https://github.com/isg32-pavillion/fempeg",
      "description": "A very Random gui tool I made, Flac to AAC Converter (this is to use offline flac files in Apple Music)."
    },
    {
      "title": "techhunt 2025",
      "link": "https://github.com/isg32-pavillion/techhunt2025",
      "description": "Terminal UI themed website I using google gemini in 3 mins. (exactly) for a college event."
    },
    {
      "title": "Android Valhalla",
      "link": "https://github.com/Android-Valhalla",
      "description": "At the time of Android Fifteen's initial release, there were no ROMs to build, so I made my own with the resources I had available.",
      "status": "deprecated now"
    },
    {
      "title": "BookPiler",
      "link": "https://github.com/isg32/bookpiler",
      "description": "Another one of my Freelance Projects, Basically take PDFs and Merge Sort them using their data with also inline Header/footer designing using pyton. Very Obscure & Out-dated Modules were used."
    },
    {
      "title": "ID-Gen",
      "link": "https://github.com/isg32/id-gen",
      "description": "A tool Made to make Duplicate ID Cards for Colleges, EVIL."
    },
    {
      "title": "VideoSauce",
      "link": "https://github.com/isg32/videosauce",
      "description": "My Attempt on making a No Recommendation & Straight Forward Netflix."
    }
  ];

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to apply the theme class to the document body
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
  }, [theme]); // The effect runs whenever the 'theme' state changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div className='bg-brown px-10 py-10'>
        <div>
          <div style={{
            border: "dashed 1px",
            padding: "5px",
            margin: "10px",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row"
          }}>
            <div>
              {theme == 'light' ? (
                // Desktop view: button with sun SVG
                <button onClick={toggleTheme}>
                  <svg color="var(--primary)" id="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </button>
              ) : (
                // Mobile view: moon SVG
                <button onClick={toggleTheme}>
                <svg color="var(--primary)" id="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg></button>
              )}
            </div>
            <div>
              <button onClick={() => {window.open("https://github.com/isg32")}}><svg color="var(--primary)" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg></button>
            </div>
          </div>

          <a href="/" target="_blank">
            <img src="https://avatars.githubusercontent.com/u/95901240?v=4" className="logo" alt="logo" style={{ borderRadius: "100px" }} />
          </a>
          <h1>Sapan Gajjar</h1>
          <h3>Developer | Ahmedabad</h3>
          <p>
            <a href="mailto:sapangajjar101105@gmail.com">sapangajjar101105@gmail.com</a> / <a href="https://www.linkedin.com/in/sapangajjar101105/">LinkedIn</a> / <a href="https://github.com/isg32">GitHub</a> / <a href="https://t.me/semisapeol">Telegram</a>
          </p>

          <hr style={{ border: "dashed 1px" }} />

          <div>
            {windowWidth > 768 ? (
              <div style={{ display: "flex", flexDirection: "row", textAlign: "justify", gap: "1em" }}>
                <h2>Professional Overview</h2>
                <p>Versatile developer with expertise in both low-level systems programming and full-stack web and mobile development. Extensive technical background includes C, Rust, Python, Java, JavaScript, and Bash. He is proficient in a range of frameworks and tools such as React.js, Flask, Flutter, Scikit-Learn, Selenium, Supabase, Git, Gerrit, Makefile, and systemd. deep understanding of core development platforms including Android, AOSP, and Linux. He is experienced in DevOps principles, CI/CD, and automation, with practical knowledge of Google Cloud Platform (GCP). Specialized abilities include Web Scraping, Data Mining, OEM ROM Modifying and Porting, and Front-End Design. With a passion for problem-solving, he is adept at tackling complex challenges across various technical domains.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", textAlign: "justify", gap: "1em" }}>
                <h2>Professional Overview</h2>
                <p>Versatile developer with expertise in both low-level systems programming and full-stack web and mobile development. Extensive technical background includes C, Rust, Python, Java, JavaScript, and Bash. He is proficient in a range of frameworks and tools such as React.js, Flask, Flutter, Scikit-Learn, Selenium, Supabase, Git, Gerrit, Makefile, and systemd. deep understanding of core development platforms including Android, AOSP, and Linux. He is experienced in DevOps principles, CI/CD, and automation, with practical knowledge of Google Cloud Platform (GCP). Specialized abilities include Web Scraping, Data Mining, OEM ROM Modifying and Porting, and Front-End Design. With a passion for problem-solving, he is adept at tackling complex challenges across various technical domains.</p>
              </div>
            )}
          </div>

          <div>
            {windowWidth > 768 ? (
              <div style={{ display: "flex", flexDirection: "row", textAlign: "justify", gap: "1em" }}>
                <div>
                  <div>
                    <h2>Work Experience</h2>
                    <hr style={{ border: "dashed 1px" }} />
                    <h3>Plutosolve, Lead Developer</h3>
                    <p><i>Ahmedabad (remote), Part-time · Mar 2024 - Present</i></p>
                    <p style={{ textAlign: "left" }}>Full-Stack Developer with a strong specialization in mobile development (Flutter) and DevOps principles (CI/CD, GCP, automation). Capable of building, deploying, and maintaining robust applications across the entire stack.</p>
                    <h3>PixelBuilds, Device Engineer</h3>
                    <p><i>Ahmedabad (remote), Community Developer · May 2023 - Feb 2024</i></p>
                    <p style={{ textAlign: "left" }}>Engineered and maintained Android custom ROMs, focusing on performance optimization, security patches, and device-specific modifications. Contributed to open-source projects using C, C++, and Rust, and collaborated on a global team via Git and Gerrit for code reviews.</p>
                  </div>
                  <div style={{ paddingTop: "10px" }} >
                    <h2>Volunteering Experience</h2>
                    <hr style={{ border: "dashed 1px" }} />
                    <h3>SSIP Gujarat (Syntaxium Club), Lead</h3>
                    <p>IoT Development, Graphics, and Printing & Merchandise Coordinator</p>
                    <p><i>Ahmedabad · Mar 2024 - Aug 2025 · 1yr, 2mos</i></p>
                    <p style={{ textAlign: "left" }}>Key member (One Of the Leads) of the Syxtaxium Club, leveraging my expertise in UI/UX design and content strategy to create compelling digital experiences. Additionally, I contribute to the club's physical presence by overseeing printing and merchandise coordination (Id-cards, Leashes, Bagtags, Atriculate Keychains).</p>
                    <h3>Motorola, Community Developer</h3>
                    <p><i>Ahmedabad (remote), Community Developer · May 2023 - Feb 2024</i></p>
                    <p style={{ textAlign: "left" }}>Engineered and maintained Android custom ROMs For Motorola (device: hanoi/p - Moto G60 / G40 Fusion), focusing on performance optimization, security patches, and device-specific modifications.</p>
                  </div>
                </div>
                <div>
                  <h2>Key Skill & Technologies</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <h3>Programming Languages & Frameworks</h3>
                  <ul>
                    <li><b>Python:</b> Proficient in back-end development with <b>Flask</b> and data-centric tasks using <b>Scikit-Learn</b> and other libraries for <b>Machine Learning</b> and <b>Data Mining</b>.</li>
                    <li><b>JavaScript:</b> Experienced with the <b>React.js</b> framework for building dynamic and responsive web applications.</li>
                    <li><b>Flutter:</b> Skilled in cross-platform mobile app development.</li>
                    <li><b>Low-Level Languages:</b> Expertise in <b>C</b>, <b>C++</b>, and <b>Rust</b> for performance-critical and embedded systems.</li>
                    <li><b>Java</b> and <b>Kotlin:</b> Knowledgeable in Android application development.</li>
                    <li><b>Shell Scripting</b> and <b>Bash:</b> Experienced in automation and system management tasks.</li>
                  </ul>
                  <h3>DevOps & Infrastructure</h3>
                  <ul>
                    <li><b>Google Cloud Platform (GCP):</b> Proficient in deploying and managing applications on a major cloud provider.</li>
                    <li><b>systemd:</b> Expertise in managing services and daemons on Linux systems.</li>
                    <li><b>Git</b> and <b>Gerrit:</b> Highly skilled in version control and collaborative code review processes.</li>
                    <li><b>Makefile:</b> Competent in automating software builds and compilation.</li>
                    <li><b>Linux:</b> Deep understanding of the Linux operating system from both a user and a developer perspective.</li>
                  </ul>
                  <h3>Specialized & Other Skills</h3>
                  <ul>
                    <li><b>Web Development:</b> Strong command of <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Front-End Design</b>.</li>
                    <li><b>Testing & Automation:</b> Experience with <b>Selenium</b> for web automation and testing.</li>
                    <li><b>Web Scraping</b> and <b>Data Mining:</b> Skilled in gathering and processing data from various sources.</li>
                    <li><b>Mobile Development:</b> Expertise in <b>Android</b> and <b>AOSP</b> (Android Open Source Project).</li>
                    <li><b>Database:</b> Experience with <b>Supabase</b>, a powerful backend-as-a-service.</li>
                    <li><b>Problem Solving:</b> Proven ability to tackle complex technical challenges and innovate.</li>
                    <li><b>Multimedia:</b> Basic skills in <b>After Effects</b>.</li>
                    <li><b>IoT:</b> Familiar with the concepts and technologies related to the Internet of Things.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", textAlign: "justify", gap: "1em" }}>
                <div>
                  <div>
                    <h2>Work Experience</h2>
                    <hr style={{ border: "dashed 1px" }} />
                    <h3>Plutosolve, Lead Developer</h3>
                    <p><i>Ahmedabad (remote), Part-time · Mar 2024 - Present</i></p>
                    <p style={{ textAlign: "left" }}>Full-Stack Developer with a strong specialization in mobile development (Flutter) and DevOps principles (CI/CD, GCP, automation). Capable of building, deploying, and maintaining robust applications across the entire stack.</p>
                    <h3>PixelBuilds, Device Engineer</h3>
                    <p><i>Ahmedabad (remote), Community Developer · May 2023 - Feb 2024</i></p>
                    <p style={{ textAlign: "left" }}>Engineered and maintained Android custom ROMs, focusing on performance optimization, security patches, and device-specific modifications. Contributed to open-source projects using C, C++, and Rust, and collaborated on a global team via Git and Gerrit for code reviews.</p>
                  </div>
                  <div style={{ paddingTop: "10px" }} >
                    <h2>Volunteering Experience</h2>
                    <hr style={{ border: "dashed 1px" }} />
                    <h3>SSIP Gujarat (Syntaxium Club), Lead</h3>
                    <p>IoT Development, Graphics, and Printing & Merchandise Coordinator</p>
                    <p><i>Ahmedabad · Mar 2024 - Aug 2025 · 1yr, 2mos</i></p>
                    <p style={{ textAlign: "left" }}>Key member (One Of the Leads) of the Syxtaxium Club, leveraging my expertise in UI/UX design and content strategy to create compelling digital experiences. Additionally, I contribute to the club's physical presence by overseeing printing and merchandise coordination (Id-cards, Leashes, Bagtags, Atriculate Keychains).</p>
                    <h3>Motorola, Community Developer</h3>
                    <p><i>Ahmedabad (remote), Community Developer · May 2023 - Feb 2024</i></p>
                    <p style={{ textAlign: "left" }}>Engineered and maintained Android custom ROMs For Motorola (device: hanoi/p - Moto G60 / G40 Fusion), focusing on performance optimization, security patches, and device-specific modifications.</p>
                  </div>
                </div>
                <div>
                  <h2>Key Skill & Technologies</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <h3>Programming Languages & Frameworks</h3>
                  <ul>
                    <li><b>Python:</b> Proficient in back-end development with <b>Flask</b> and data-centric tasks using <b>Scikit-Learn</b> and other libraries for <b>Machine Learning</b> and <b>Data Mining</b>.</li>
                    <li><b>JavaScript:</b> Experienced with the <b>React.js</b> framework for building dynamic and responsive web applications.</li>
                    <li><b>Flutter:</b> Skilled in cross-platform mobile app development.</li>
                    <li><b>Low-Level Languages:</b> Expertise in <b>C</b>, <b>C++</b>, and <b>Rust</b> for performance-critical and embedded systems.</li>
                    <li><b>Java</b> and <b>Kotlin:</b> Knowledgeable in Android application development.</li>
                    <li><b>Shell Scripting</b> and <b>Bash:</b> Experienced in automation and system management tasks.</li>
                  </ul>
                  <h3>DevOps & Infrastructure</h3>
                  <ul>
                    <li><b>Google Cloud Platform (GCP):</b> Proficient in deploying and managing applications on a major cloud provider.</li>
                    <li><b>systemd:</b> Expertise in managing services and daemons on Linux systems.</li>
                    <li><b>Git</b> and <b>Gerrit:</b> Highly skilled in version control and collaborative code review processes.</li>
                    <li><b>Makefile:</b> Competent in automating software builds and compilation.</li>
                    <li><b>Linux:</b> Deep understanding of the Linux operating system from both a user and a developer perspective.</li>
                  </ul>
                  <h3>Specialized & Other Skills</h3>
                  <ul>
                    <li><b>Web Development:</b> Strong command of <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Front-End Design</b>.</li>
                    <li><b>Testing & Automation:</b> Experience with <b>Selenium</b> for web automation and testing.</li>
                    <li><b>Web Scraping</b> and <b>Data Mining:</b> Skilled in gathering and processing data from various sources.</li>
                    <li><b>Mobile Development:</b> Expertise in <b>Android</b> and <b>AOSP</b> (Android Open Source Project).</li>
                    <li><b>Database:</b> Experience with <b>Supabase</b>, a powerful backend-as-a-service.</li>
                    <li><b>Problem Solving:</b> Proven ability to tackle complex technical challenges and innovate.</li>
                    <li><b>Multimedia:</b> Basic skills in <b>After Effects</b>.</li>
                    <li><b>IoT:</b> Familiar with the concepts and technologies related to the Internet of Things.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div>
            {windowWidth > 768 ? (
              <div style={{ display: "flex", flexDirection: "row", textAlign: "justify", gap: "1em" }}>
                <div>
                  <h2>Personal Projects Highlight</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <p>Explore the source code for all my projects on <a href="https://github.com/isg32">GitHub</a> & <a href="https://github.com/isg32-pavillion">Github Org</a>.</p>
                  {projectsData.map((project, index) => (
                    <div key={index}>
                      <p>
                        <span style={{ fontSize: "large", fontWeight: "bold" }}>{project.title}
                          {project.status && ` [${project.status}]`} : </span> <u><a href={project.link}>Link</a></u>
                      </p>
                      <p style={{ textAlign: 'justify' }}>{project.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h2>Miscellaneous Endeavors</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <h3>My Youtube Channel</h3>
                  <p><i>Mar 2018 - Present</i></p>
                  <p style={{ textAlign: "justify" }}>I post Random Things there. Here is the <a href="https://www.youtube.com/@ISG32">refrence link</a> in case you want to find out!</p>
                  <h3>Self Hosted Debian Infrastruture</h3>
                  <p><i>Located in Ahmedabad (My own home) · May 2025 - Present</i></p>
                  <p style={{ textAlign: "justify" }}>So I Do Self host, Yes I am one of the people who Seed Obscure Torrents so that other people can Download The files long lost, I also host my own Netflix, Spotify, GoogleDrive (Jellyfin/SwingMusic/SFTP Server) Service with my Own Media Collection. You Can Access it <a href="https://isg32.dpdns.org">here</a> if you have the credentials.</p>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", textAlign: "justify", gap: "1em" }}>
                <div>
                  <h2>Personal Projects Highlight</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <p>Explore the source code for all my projects on <a href="https://github.com/isg32">GitHub</a> & <a href="https://github.com/isg32-pavillion">Github Org</a>.</p>
                  {projectsData.map((project, index) => (
                    <div key={index}>
                      <p>
                        <span style={{ fontSize: "large", fontWeight: "bold" }}>{project.title}
                          {project.status && ` [${project.status}]`} : </span> <u><a href={project.link}>Link</a></u>
                      </p>
                      <p style={{ textAlign: 'justify' }}>{project.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h2>Miscellaneous Endeavors</h2>
                  <hr style={{ border: "dashed 1px" }} />
                  <h3>My Youtube Channel</h3>
                  <p><i>Mar 2018 - Present</i></p>
                  <p style={{ textAlign: "justify" }}>I post Random Things there. Here is the <a href="https://www.youtube.com/@ISG32">refrence link</a> in case you want to find out!</p>
                  <h3>Self Hosted Debian Infrastruture</h3>
                  <p><i>Located in Ahmedabad (My own home) · May 2025 - Present</i></p>
                  <p style={{ textAlign: "justify" }}>So I Do Self host, Yes I am one of the people who Seed Obscure Torrents so that other people can Download The files long lost, I also host my own Netflix, Spotify, GoogleDrive (Jellyfin/SwingMusic/SFTP Server) Service with my Own Media Collection. You Can Access it <a href="https://isg32.dpdns.org">here</a> if you have the credentials.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
          <div style={{
            border: "dashed 1px",
            padding: "5px",
            margin: "10px",
          }}>
            © {getYear()} Sapan Gajjar. Some Rights Reserved. This work is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. <br />
            For inquiries: <a href="mailto:sapangajjar101105@gmail.com">sapangajjar101105@gmail.com</a>
          </div>
        </div>
    </>
  );
}

export default App;