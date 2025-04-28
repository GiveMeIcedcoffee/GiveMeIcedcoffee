<!DOCTYPE html>
<link rel="stylesheet" href="style.css">
<script src="javascript.js" defer></script>

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title> Portfolio</title>
  <style>

h3 {
  color: var(--text-color);
}
h3{
 background-color: rgba(56, 56, 56, 0.87);
}

* {
  transition: all 0.3s ease-in-out;
}
body, header, section, nav, .project, .toggle-btn {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.6;
}
body.dark-mode p, body.dark-mode cite {
  color: #ffffff;
}
body.dark-mode h2, body.dark-mode ul {
  color: #ffffff;
}
body.dark-mode {
  color: #ffffff;
}
body.dark-mode .project {
  background-color: #1e1e1e;
  color: #ffffff;
  border: 1px solid #444;
  padding: 10px;
  border-radius: 5px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  letter-spacing: 1px;
}

nav a {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
}

.toggle-btn {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
}

.project {
  font-family: 'Lora', serif;
  font-size: 1rem;
}

header {
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
}
.hidden {
    display: none;
}
.visible {
    display: block;
}
    :root {
      --main-color: #b2956b;
      --background: #f9f5f0;
      --text-color: #333;
      --card-color: #fff;
    }
    [data-theme="dark"] {
      --background: #1a1a1a;
      --text-color: #f1f1f1;
      --card-color: #2c2c2c;
    }
    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: var(--background);
      color: var(--text-color);
      scroll-behavior: smooth;
      transition: background 0.5s, color 0.5s;
    }
    header {
      background: var(--main-color);
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      animation: fadeDown 1s ease-in-out;
      position: relative;
    }
    header h1 {
      font-size: 2.5rem;
      margin: 0;
    }
    header p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
    .toggle-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s;
    }
    .toggle-btn:hover {
      background: #eee;
    }
    nav {
      margin-top: 1rem;
    }
    nav a {
      margin: 0 10px;
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    section {
      padding: 4rem 2rem;
      max-width: 1000px;
      margin: auto;
      animation: fadeIn 1.5s ease;
    }
    h2 {
      font-size: 2rem;
      color: var(--main-color);
      text-align: center;
      margin-bottom: 2rem;
    }
    .about, .contact {
      text-align: center;
    }
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    .project {
      background: var(--card-color);
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      padding: 1.5rem;
      text-align: center;
      font-family: 'Lora', serif;
      font-size: 1rem;
      transition: transform 0.3s, box-shadow 0.3s, background 0.5s;
    }
    .project:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    }
    footer {
      text-align: center;
      padding: 2rem;
      background: var(--main-color);
      color: rgb(172, 158, 111);
      margin-top: 3rem;
      animation: fadeUp 1s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
      #scrollTopBtn:hover {
        background-color: #a28155;
        transform: scale(1.1);

        .profile-photo {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--main-color);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: ease-in 0.3s, ease-out 0.3s;
        }
        .testimonial-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
        }
    
        .testimonial-card {
          background: #ffffff;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 300px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
    
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
    
        .testimonial-card p {
          font-style: italic;
          color: #555;
          margin-bottom: 10px;
        }
    
        .testimonial-card cite {
          font-weight: bold;
          color: #333;
        }
      
      
    </style>
</head>
<body>

<header class="responsive-header">
  <div class="profile-photo">
    <img src="D:\frontend\logo.png" alt="Photo of Althea Apostol" style="width:150px; height:auto; border-radius:50%;">
  </div>
  
  
  
</div>
  <h1>Althea Apostol</h1>
  <p>Web Developer | UI/UX Designer | Back end sa Capstone namin hehe</p>
  <button class="toggle-btn" onclick="toggleTheme()">🌙 Dark Mode</button>
  <script>
    function toggleTheme() {
      const body = document.body;
      body.classList.toggle('dark-mode');
      const button = document.querySelector('.toggle-btn');
      if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
      } else {
        button.textContent = '🌙 Dark Mode';
      }
    }
  </script>
  <style>
    body.dark-mode {
      background-color: #121212;
      color: #000000;
    }
    h3 {
      color: #ffffff;
    }
    body.dark-mode hr {
      border-color: #2c2828;
      background-color: bisque;
    }
  </style>
  <button class="toggle-btn" onclick="toggleTheme()">🌙 Dark Mode</button>

  <hr style="border: 1px solid #ccc; width: 100%; margin: 20px auto;">
  <div id="home" class="home">
    <nav>
      <a href="#home">Home</a>| 
      <a href="#about">About</a>| 
      <a href="#projects">Projects</a>| 
      <a href="#contact">Contact</a>| 
      <a href="#skills">Skills</a>| 
      <a href="#experience">Experience</a>| 
      <a href="#education">Education</a>| 
      <a href="#certifications">Certifications</a>| 
      <a href="#testimonials">Testimonials</a>
    </nav>
  </div>
</header>

  <hr style="border: 1px solid #ccc; width: 100%; margin: 20px auto;">
</header>
<section id="skills" class="skills">
    <h2>Skills</h2>
    <ul>
        <li><strong>HTML & CSS:</strong> Crafting responsive and accessible designs.</li>
        <li><strong>JavaScript:</strong> Building dynamic and interactive web experiences.</li>
        <li><strong>UI/UX Design:</strong> Designing user-friendly interfaces with Figma.</li>
        <li><strong>Back-End Development:</strong> Creating robust server-side applications.</li>
        <li><strong>Version Control:</strong> Proficient with Git and GitHub workflows.</li>
    </ul>
</section>


<section id="about" class="about">
  <h2>About Me</h2>
  <p>Hello! I'm Althea Apostol you can call me<strong> Thea</strong> , a passionate developer with a love for clean code, beautiful designs, and smooth user experiences. I specialize in creating modern, responsive websites. Im still learning so feel free to teach me T~T</p>
</section>
<section id="experience" class="experience">
  <h2>Experience</h2>
  <div class="job">
    <h3>Web Developer Intern</h3>
    <p><strong>Company Name</strong> | June 2024 - August 2024</p>
    <p>Developed and maintained responsive websites, collaborated with designers and back-end developers, and optimized website performance.</p>
  </div>
  <div class="job">
    <h3>Freelance UI/UX Designer</h3>
    <p><strong>Self-Employed</strong> | January 2023 - Present</p>
    <p>Designed user-friendly interfaces for various clients, ensuring seamless user experiences and modern aesthetics.</p>
  </div>
</section>

<section id="education" class="education">
  <h2>Education</h2>
  <div class="school">
    <h3>Bachelor of Science in Information Technology</h3>
    <p><strong>University Name</strong> | 2021 - 2025</p>
    <p>Specialized in web development, software engineering, and user experience design.</p>
  </div>
</section>

<section id="certifications" class="certifications">
  <h2>Certifications</h2>
  <ul>
    <li><strong>Responsive Web Design</strong> - freeCodeCamp</li>
    <li><strong>JavaScript Algorithms and Data Structures</strong> - freeCodeCamp</li>
    <li><strong>UI/UX Design Essentials</strong> - Udemy</li>
  </ul>
</section>

<style>

</style>
<section id="projects" class="projects">
  <h2>Projects</h2>
  <div class="project">
    <h3>Awesome Website</h3>
    <p>Built an awesome responsive site using HTML, CSS, JS.</p>
  </div>
  <div class="project">
    <h3>Creative App</h3>
    <p>Designed and developed a mobile-first application that users love.</p>
  </div>
  <div class="project">
    <h3>Portfolio Site</h3>
    <p>My personal site showcasing everything I love doing.</p>
  </div>
</section>

<section id="contact" class="contact">
    <h2>Contact</h2>
    <p>Email me at: <strong>altheaapostol001@gmail.com</strong></p>
    <p>Follow me on:</p>
    <ul>
        <li>
            <a href="https://www.facebook.com/thea.apostol.1/" target="_blank">
          <img src="D:/frontend/facebook-logo.png" alt="Facebook Logo" style="width:30px; height:30px;"> 
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/icedcoffeex_x?igsh=MW9lNWgwcTYyaWY1aA==" target="_blank">
          <img src="D:/frontend/instagram-logo.png" alt="Instagram Logo" style="width:30px; height:30px;"> 
            </a>
        
        </li>
    </ul>
</section>
<section id="testimonials" class="testimonials">
  <div class="testimonial-container">
    <div class="testimonial-card">
      <h2>Testimonials</h2>
      <p>"Althea's work is exceptional! She delivered beyond expectations."</p>
      <cite>- Happy Client</cite>
    </div>
    <div class="testimonial-card">
      <p>"A true professional with an eye for detail. Highly recommended!"</p>
      <cite>- Team Lead</cite>
    </div>
    <div class="testimonial-card">
      <p>"Working with Althea was a pleasure. Her creativity and dedication are unmatched."</p>
      <cite>- Project Manager</cite>
    </div>
  </div>
</section>  
<footer class="cute-footer">
  <div class="footer-content">
    <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="cute star" class="footer-icon">
    <nav class="footer-nav"> 
      <a href="#about">About</a> | 
      <a href="#projects">Projects</a> | 
      <a href="#contact">Contact</a>
    </nav>
  </div>
</footer>

</body>
</html>

