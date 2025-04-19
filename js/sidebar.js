// Create and initialize the sidebar
function createSidebar() {
    // Check if sidebar already exists to prevent duplicates
    if (document.querySelector('.sidebar')) {
        return;
    }
    
    // Create sidebar HTML elements
    const sidebarHTML = `
        <div class="sidebar">
            <div class="sidebar-close">
                <i class="fas fa-times"></i>
            </div>
            <div class="sidebar-header">
                <h3>Moron Members</h3>
                <p>Get to know our team</p>
            </div>
            <ul class="sidebar-members">
                <!-- Will be populated with team members -->
            </ul>
        </div>
        <div class="sidebar-toggle">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
    `;
    
    // Insert sidebar HTML into the document
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // Add CSS link for the sidebar
    if (!document.querySelector('link[href$="sidebar.css"]')) {
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        
        // Check if we're in a subdirectory and adjust path accordingly
        const isInSubdirectory = window.location.pathname.includes('/templates/');
        cssLink.href = isInSubdirectory ? '../css/sidebar.css' : 'css/sidebar.css';
        
        document.head.appendChild(cssLink);
    }
    
    // Initialize sidebar functionality
    initSidebarFunctionality();
    
    // Populate sidebar with team members
    populateSidebarMembers();
}

// Initialize sidebar functionality
function initSidebarFunctionality() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const overlay = document.querySelector('.overlay');
    const sidebarClose = document.querySelector('.sidebar-close');
    
    // Toggle sidebar when clicking the button
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
    });
    
    // Close sidebar when clicking the X button
    sidebarClose.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebarToggle.classList.remove('active');
    });
    
    // Close sidebar when clicking the overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebarToggle.classList.remove('active');
    });
}

// Populate sidebar with team members
function populateSidebarMembers() {
    const sidebarMembers = document.querySelector('.sidebar-members');
    
    // Team members data
    const teamData = [
        {
            name: "Lance Lordvin - Concio",
            role: "Front End Developer / UI/UX Designer",
            image: "../img/Lance.jpg",
            hasPersonalPage: true,
            pageUrl: "lance"
        },
        {
            name: "Mar Aldrei Y. Avila",
            role: "Back End Developer/ Database Specialist",
            image: "../img/Mar.jpg",
            hasPersonalPage: true,
            pageUrl: "mar"
        },
        {
            name: "Godffrey Bonza",
            role: "Front End Developer / UI/UX Designer",
            image: "../img/Godffrey.jpg",
            hasPersonalPage: true,
            pageUrl: "goddfrey"
        },
        {
            name: "Jake Paul Valenzuela",
            role: "UI/UX Designer / Documenter",
            image: "../img/jake.jpg",
            hasPersonalPage: true,
            pageUrl: "jake"
        },
        {
            name: "John Railey Raymundo",
            role: "UI/UX Designer / Documenter",
            image: "../img/Railey.jpg",
            hasPersonalPage: true,
            pageUrl: "railey"
        },
        {
            name: "Lean Jay Javier",
            role: "UI/UX Designer / Documenter",
            image: "../img/Lean.jpg",
            hasPersonalPage: true,
            pageUrl: "lean"
        }
    ];
    
    // Clear existing members first
    sidebarMembers.innerHTML = '';
    
    // Create and append member elements
    teamData.forEach(member => {
        const memberElement = document.createElement('li');
        memberElement.className = 'sidebar-member';
        
        memberElement.innerHTML = `
            <div class="member-sidebar-info" data-member="${member.name}">
                <div class="member-sidebar-img">
                    <img src="${member.image}" alt="${member.name}" onerror="console.error('Failed to load:', this.src);">
                </div>
                <div class="member-sidebar-details">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                </div>
            </div>
        `;
        
        // Add click event
        memberElement.querySelector('.member-sidebar-info').addEventListener('click', () => {
            if (member.hasPersonalPage) {
                window.location.href = member.pageUrl + '.html';
            } else {
                window.location.href = '../index.html#team';
            }
        });
        
        sidebarMembers.appendChild(memberElement);
    });
}

// Scroll to specific team member
function scrollToMember(memberName) {
    const teamSection = document.getElementById('team');
    if (!teamSection) return;
    
    const teamMembers = teamSection.querySelectorAll('.team-member');
    
    // Find the specific team member card
    for (let i = 0; i < teamMembers.length; i++) {
        const nameElement = teamMembers[i].querySelector('.member-name');
        if (nameElement && nameElement.textContent === memberName) {
            // Scroll to the team member
            teamMembers[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add highlight effect
            teamMembers[i].classList.add('highlight');
            setTimeout(() => {
                teamMembers[i].classList.remove('highlight');
            }, 2000);
            
            break;
        }
    }
}

// Initialize the sidebar when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createSidebar);

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
