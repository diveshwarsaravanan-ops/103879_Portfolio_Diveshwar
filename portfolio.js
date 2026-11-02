// --- Feature 1: Time-Based Greeting ---
    const greetingHeader = document.getElementById('greeting-text');
    const hour = new Date().getHours();
    
    if (greetingHeader) {
        if (hour < 12) {
            greetingHeader.innerHTML = "Good Morning!<br>I'm Diveshwar";
        } else if (hour < 18) {
            greetingHeader.innerHTML = "Good Afternoon!<br>I'm Diveshwar";
        } else {
            greetingHeader.innerHTML = "Good Evening!<br>I'm Diveshwar";
        }
    }

    // --- Feature 2: Interactive Click Dropdown ---
// --- Interactive Header Dropdown ---
    const menuBtn = document.getElementById("menu-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownContainer = menuBtn.closest(".dropdown");

        menuBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdownContainer.classList.toggle("open");
        });

        window.addEventListener("click", function (event) {
        if (!dropdownContainer.contains(event.target)) {
            dropdownContainer.classList.remove("open");
        }
        });

        // Smooth scroll to selected section
        document.querySelectorAll(".dropdown-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            }

            dropdownContainer.classList.remove("open");
        });
    });

// --- Feature 3: Dark and Light Mode Toggle ---
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Switch icon between sun and moon
        if (document.body.classList.contains('dark-mode')) {
            themeToggleBtn.innerHTML = '🌙';
        } else {
            themeToggleBtn.innerHTML = '☀️';
        }
    });
}

// --- Projects Section ---
const projects = [
  {
    title: "Johorcore",
    short: "A multi-component hackathon app integrating real-time weather APIs, currency conversion, and live chat features.",
    full: "This project was built for Hackathon 2026. It features a robust multi-component web application structure, seamlessly integrating real-time weather API lookups, currency conversion web services, and an active chat framework for users.",
    image: "images/johor_core.png",
    gallery: [
      "images/johor_core.png"
    ],
    links: [{
      name: "View Live Demo",
      url: "https://johor-core-33d8c.firebaseapp.com/"
    }, {
      name: "View Source Code",
      url: "https://github.com/diveshwarsaravanan-ops"
    }]
  },
  {
    title: "Project Corona",
    short: "A new solution to track attendance of school student during the COVID-19 pandemic",
    full: "Me and my brother built a machine to safely track the attendance of school students while adhering to the contraints of social distancing and COVID-19 safety protocols. The machine uses a combination of sensors and a camera to detect the presence of students and record their attendance automatically. I made the database and the website for the machine to track the attendace of students as well as their temperature, categorising them into green and red zones.", 

    image: "images/corona2 (1).jpeg",
    gallery: [
      "images/corona1.png",
      "images/corona2 (1).jpeg",
      "images/corona2 (2).jpeg",
      "images/corona2 (3).jpeg",
      "images/corona2 (4).jpeg",
      "images/corona3.jpeg",
    ],
    links: []
  },
  {
    title: "The Last Lantern",
    short: "An indie mobile game title with custom design assets and presentation materials.",
    full: "With a three person team, we made a dark fantasy action-adventure game and submitted it to the UMPSA Hackathon 2026. I was in charge of the enemy A.I, the progression system, the levels, the final boss and power up mechanics. We also made a video submission for the competition.",
    image: "images/last_lantern_2.png",
    gallery: [
      "images/last_lantern_1.png",
      "images/last_lantern_2.png",
      "images/last_lantern_3.png",
      "images/last_lantern_4.png",
      "images/last_lantern_5.png"
    
    ],
    links: [{
        name: "View presentation",
        url: "https://youtu.be/aDnV-pp6RKM"
    }
    ]
  }
];

let currentProject = 0;
let currentGalleryImage = 0;

const projectImage = document.getElementById("project-image");
const projectTitle = document.getElementById("project-title");
const projectShort = document.getElementById("project-short");
const projectFull = document.getElementById("project-full");
const projectLinks = document.getElementById("project-links");
const projectDetails = document.getElementById("project-details");
const projectToggle = document.getElementById("project-toggle");

const galleryOverlay = document.getElementById("gallery-overlay");
const galleryImage = document.getElementById("gallery-image");

function showProject(index) {
  if (!projectImage || !projectTitle) return;

  const project = projects[index];

  currentProject = index;
  projectImage.src = project.image;
  projectTitle.textContent = project.title;
  projectShort.textContent = project.short;
  projectFull.textContent = project.full;

  if (projectLinks) {
    projectLinks.innerHTML = "";

    project.links.forEach(link => {
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.textContent = link.name;
      projectLinks.appendChild(a);
    });
  }

  if (projectDetails && projectToggle) {
    projectDetails.classList.remove("open");
    projectToggle.textContent = "View Details";
  }
}

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
  });
}

if (projectToggle && projectDetails) {
  projectToggle.addEventListener("click", () => {
    projectDetails.classList.toggle("open");

    projectToggle.textContent = projectDetails.classList.contains("open")
      ? "Hide Details"
      : "View Details";
  });
}

if (projectImage && galleryOverlay && galleryImage) {
  projectImage.addEventListener("click", () => {
    currentGalleryImage = 0;
    galleryImage.src = projects[currentProject].gallery[currentGalleryImage];
    galleryOverlay.classList.add("open");
  });

  const galleryClose = document.getElementById("gallery-close");
  const galleryPrev = document.getElementById("gallery-prev");
  const galleryNext = document.getElementById("gallery-next");

  if (galleryClose) {
    galleryClose.addEventListener("click", () => {
      galleryOverlay.classList.remove("open");
    });
  }

  galleryOverlay.addEventListener("click", (event) => {
    if (event.target === galleryOverlay) {
      galleryOverlay.classList.remove("open");
    }
  });

  if (galleryPrev) {
    galleryPrev.addEventListener("click", () => {
      const gallery = projects[currentProject].gallery;
      currentGalleryImage = (currentGalleryImage - 1 + gallery.length) % gallery.length;
      galleryImage.src = gallery[currentGalleryImage];
    });
  }

  if (galleryNext) {
    galleryNext.addEventListener("click", () => {
      const gallery = projects[currentProject].gallery;
      currentGalleryImage = (currentGalleryImage + 1) % gallery.length;
      galleryImage.src = gallery[currentGalleryImage];
    });
  }
}

showProject(0);