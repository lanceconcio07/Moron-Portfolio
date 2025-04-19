// Team members data - Updated with detailed role descriptions
const teamMembers = [
    {
        name: "Lance Lordvin - Concio",
        role: "Front End Developer / UI/UX Designer",
        image: "img/Lance.jpg",
        pageUrl: "lance",
        bio: "Lance is a skilled Front End Developer with a strong focus on UI/UX design. He creates responsive and user-friendly interfaces while ensuring optimal user experience across all platforms.",
        social: {
            instagram: "https://www.instagram.com/kuya_yanz/",
            twitter: "https://www.facebook.com/concio07",
            github: "https://github.com/lanceconcio07"
        }
    },
    {
        name: "Mar Aldrei Y. Avila",
        role: "Back End Developer/ Database Specialist",
        image: "img/Mar.jpg",
        pageUrl: "mar",
        bio: "Mar is an expert Back End Developer and Database Specialist. He designs and implements robust server-side solutions and efficient database architectures to ensure optimal performance and data security.",
        social: {
            instagram: "https://www.instagram.com/kingyavila/?hl=en",
            twitter: "https://www.facebook.com/maraldrei.avila",
            github: "#"
        }
    },
    {
        name: "Godffrey Bonza",
        role: "Front End Developer / UI/UX Designer",
        image: "img/Godffrey.jpg",
        pageUrl: "godffrey",
        bio: "Godffrey is a talented Front End Developer with a passion for UI/UX design. He combines technical expertise with creative design skills to build engaging and intuitive user interfaces.",
        social: {
            instagram: "https://www.instagram.com/godffreybonza/?hl=en",
            github: "#",
            twitter: "https://www.facebook.com/prey16"
        }
    },
    {
        name: "Jake Paul Valenzuela",
        role: "UI/UX Designer / Documenter",
        image: "img/jake.jpg",
        pageUrl: "jake",
        bio: "Jake is a creative UI/UX designer with a keen eye for detail. He specializes in creating user-friendly interfaces and comprehensive documentation that ensures smooth project execution and knowledge transfer.",
        social: {
            instagram: "https://www.instagram.com/jakepauljaravalenzuela/?hl=en",
            twitter: "https://www.facebook.com/jake.valenzuela.73307",
            github: "#"
        }
    },
    {
        name: "John Railey Raymundo",
        role: "UI/UX Designer / Documenter",
        image: "img/Railey.jpg",
        pageUrl: "railey",
        bio: "Railey excels in UI/UX design with a focus on user-centered solutions. His documentation skills help bridge the gap between design concepts and implementation, ensuring clear communication across the team.",
        social: {
            instagram: "#",
            twitter: "https://www.facebook.com/profile.php?id=61568311196145",
            github: "#"
        }
    },
    {
        name: "Lean Jay Javier",
        role: "UI/UX Designer / Documenter",
        image: "img/Lean.jpg",
        pageUrl: "lean",
        bio: "Lean combines UI/UX design expertise with strong documentation skills. He creates intuitive user experiences while maintaining detailed records of design decisions and project requirements.",
        social: {
            instagram: "#",
            twitter: "https://www.facebook.com/leanjay.javier.9",
            github: "#"
        }
    }
];

// Populate team members
function populateTeamMembers() {
    const teamGrid = document.querySelector('.team-grid');
    
    if (!teamGrid) {
        console.error('Team grid element not found');
        return;
    }
    
    // Map of filenames for each team member
    const pageNames = {
        "Lance Lordvin - Concio": "lance",
        "Mar Aldrei Y. Avila": "mar",
        "Godffrey Bonza": "goddfrey",
        "Jake Paul Valenzuela": "jake",
        "John Railey Raymundo": "railey",
        "Lean Jay Javier": "lean"
    };
    
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.className = 'team-member';
        
        // Fix image paths based on current page location
        const imagePath = window.location.pathname.includes('/templates/') ? 
            '../' + member.image : 
            member.image;
        
        console.log('Loading image:', imagePath); // Debug log
        
        memberElement.innerHTML = `
            <div class="member-img">
                <img src="${imagePath}" alt="${member.name}" onerror="this.onerror=null; console.error('Failed to load:', this.src);">
            </div>
            <div class="member-info">
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <p class="member-bio">${member.bio}</p>
                <div class="member-social">
                    ${member.social.github !== '#' ? `<a href="${member.social.github}" target="_blank" class="social-link" onclick="event.stopPropagation();"><i class="fab fa-github"></i></a>` : ''}
                    ${member.social.twitter !== '#' ? `<a href="${member.social.twitter}" target="_blank" class="social-link" onclick="event.stopPropagation();"><i class="fab fa-facebook"></i></a>` : ''}
                    ${member.social.instagram !== '#' ? `<a href="${member.social.instagram}" target="_blank" class="social-link" onclick="event.stopPropagation();"><i class="fab fa-instagram"></i></a>` : ''}
                </div>
            </div>
        `;
        
        // Add click handlers for navigation
        memberElement.style.cursor = "pointer";
        memberElement.addEventListener('click', () => {
            // Get the correct page name from the mapping
            const pageName = pageNames[member.name];
            
            const currentPath = window.location.pathname;
            let targetPath;
            
            // Check if we're in the templates directory
            if (currentPath.includes('/templates/')) {
                // We're already in templates, just use the filename
                targetPath = pageName + '.html';
            } else {
                // We're in the root, navigate to templates directory
                targetPath = 'templates/' + pageName + '.html';
            }
            
            // Navigate to the page
            window.location.href = targetPath;
        });
        
        teamGrid.appendChild(memberElement);
    });
}

// Navigation menu toggle for mobile
function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
}

// Form submission handling
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! Our team will get back to you soon.');
            form.reset();
        });
    }
}

// Add fade-in effects when scrolling
function addScrollAnimations() {
  const fadeElements = document.querySelectorAll('h2, .team-member, .about p, .value-item, .contact-form, .info-item');
  
  fadeElements.forEach(element => {
    element.classList.add('fade-in-element');
  });
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });
}

// Update the team member bios with more professional information
function updateTeamMemberBios() {
  teamMembers.forEach(member => {
    switch(member.name) {
      case "Lance Lordvin - Concio":
        member.bio = "Lance is a skilled Front End Developer with a strong focus on UI/UX design. He creates responsive and user-friendly interfaces while ensuring optimal user experience across all platforms.";
        break;
      case "Mar Aldrei Y. Avila":
        member.bio = "Mar is an expert Back End Developer and Database Specialist. He designs and implements robust server-side solutions and efficient database architectures to ensure optimal performance and data security.";
        break;
      case "Godffrey Bonza":
        member.bio = "Godffrey is a talented Front End Developer with a passion for UI/UX design. He combines technical expertise with creative design skills to build engaging and intuitive user interfaces.";
        break;
      case "Jake Paul Valenzuela":
        member.bio = "Jake is a creative UI/UX designer with a keen eye for detail. He specializes in creating user-friendly interfaces and comprehensive documentation that ensures smooth project execution and knowledge transfer.";
        break;
      case "John Railey Raymundo":
        member.bio = "Railey excels in UI/UX design with a focus on user-centered solutions. His documentation skills help bridge the gap between design concepts and implementation, ensuring clear communication across the team.";
        break;
      case "Lean Jay Javier":
        member.bio = "Lean combines UI/UX design expertise with strong documentation skills. He creates intuitive user experiences while maintaining detailed records of design decisions and project requirements.";
        break;
      default:
        break;
    }
  });
}

// Function to handle image paths
function getImagePath(imagePath) {
    return imagePath;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateTeamMemberBios();
    populateTeamMembers();
    navSlide();
    handleFormSubmission();
    addScrollAnimations();
    
    // Add a small delay to ensure images are loaded before animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = 1;
    }, 300);
    
    // Fix image paths on all pages
    const allImages = document.querySelectorAll('img[src^="../img/"]');
    allImages.forEach(img => {
        img.src = getImagePath(img.src);
    });
}); 