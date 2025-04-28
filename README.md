<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>

<body>
  <header class="responsive-header">
    <div class="profile-photo">
      <img src="assets/images/logo.png" alt="Photo of Althea Apostol" style="width:150px; height:auto; border-radius:50%;">
    </div>
    <h1>Althea Apostol</h1>
    <p>Web Developer | UI/UX Designer | Back end sa Capstone namin hehe</p>
    <button class="toggle-btn" onclick="toggleTheme()">🌙 Dark Mode</button>

    <hr style="border: 1px solid #ccc; width: 100%; margin: 20px auto;">
    <nav>
      <a href="#home">Home</a> | 
      <a href="#about">About</a> | 
      <a href="#projects">Projects</a> | 
      <a href="#contact">Contact</a> | 
      <a href="#skills">Skills</a> | 
      <a href="#experience">Experience</a> | 
      <a href="#education">Education</a> | 
      <a href="#certifications">Certifications</a> | 
      <a href="#testimonials">Testimonials</a>
    </nav>
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
    <p>Hello! I'm Althea Apostol you can call me <strong>Thea</strong>, a passionate developer with a love for clean code, beautiful designs, and smooth user experiences. I'm still learning, so feel free to teach me T~T</p>
  </section>

  <!-- Add your other sections here -->

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
