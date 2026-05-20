/* ==========================================================================
   THE TNEVE EVENT - APPLICATION CONTROLLER (UPDATED COORDINATES)
   ========================================================================== */

// --- Event Database (Grounded Conducted Events Only) ---
const EVENT_DATABASE = [
    {
        id: "mumbai-maze",
        name: "THE MUMBAI MAZE: THE GLITCHED ROUTES",
        subtitle: "Conducted Mission Log — 19 April 2026",
        type: "hunt",
        date: "past",
        priceScale: "elite",
        priceFormatted: "₹21,000",
        priceNumeric: 21000,
        priceUnit: "team",
        dateStr: "19 APRIL 2026",
        timeStr: "16:30 – 19:00 (150 mins)",
        location: "Bandra to Juhu",
        startPoint: "Bandra Reclamation Garden",
        endPoint: "Juhu Aeroplane Garden",
        capacity: "10 Teams (2 people per team)",
        status: "Conducted on 19 April 2026",
        image: "assets/mumbai_maze.png",
        story: "Answers are hidden in plain sight. You’ll get lost, you’ll trust the wrong clue, and you’ll definitely blame your teammate. It’s productivity—because Samay Raina said so. Explore the grit, urban paths, and blind spots of the city under pressure.",
        expectations: [
            "Glitched routes mapped across historical checkpoints",
            "Cryptic clues embedded in local street signs and murals",
            "High-energy competitive navigation dynamics",
            "Exciting premium rewards for the winning guild"
        ],
        stops: "Bandra, Juhu, Reclamation Garden"
    },
    {
        id: "next-stop-bandra",
        name: "NEXT STOP, BANDRA: AN EXPERIENCE",
        subtitle: "Conducted Mission Log — Weekly Sundays",
        type: "walk",
        date: "past",
        priceScale: "budget",
        priceFormatted: "₹750",
        priceNumeric: 750,
        priceUnit: "person",
        dateStr: "WEEKLY (SUNDAYS)",
        timeStr: "16:00 – 18:00 (120 mins)",
        location: "Bandra West",
        startPoint: "Bandra West (General Launch)",
        endPoint: "Chimbai Beach / Street Market",
        capacity: "10 People total (Intimate crew)",
        status: "Weekly Sunday Runs Conducted",
        image: "assets/bandra_walk.png",
        story: "\"Baccha hai Tu Mera, aaja Bandra ghooma deta hoon.\" You think you know Bandra. You don’t. Experience the city’s reflection across Chimbai Beach, vintage lanes, and historical landmarks. Perfect for explorers wanting to see Bandra's raw, unvarnished soul.",
        expectations: [
            "Frictionless walks through historic Portuguese villages",
            "Tactile urban interactions and local culinary bites",
            "Stories of local fishermen and architectural heritage",
            "Intimate group dynamic with zero tourist tropes"
        ],
        stops: "Hearsch & Co., Mehboob Studios, Bandra Street Market"
    }
];

// --- Application State ---
let currentTab = "home";

// --- DOM References ---
const navTabs = document.querySelectorAll(".nav-tab");
const mobileNavTabs = document.querySelectorAll(".mobile-nav-tab");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mobileDrawer = document.querySelector(".mobile-drawer");
const logoTrigger = document.getElementById("logo-trigger");

// --- Tab Router Engine ---
function switchTab(targetId, subCategoryFilter = null) {
    currentTab = targetId;

    // 1. Close mobile drawer if open
    mobileDrawer.classList.remove("open");
    mobileNavToggle.classList.remove("active");
    document.body.style.overflow = "";

    // 2. Manage the B2B Pastel Shift Styling Triggers
    // Corporate and About sections switch the site into Pastel Mode!
    if (targetId === "corporate" || targetId === "about") {
        document.body.classList.add("in-corporate-view");
        document.body.classList.remove("dark-theme");
        document.body.style.backgroundColor = "#f5f7fa";
    } else {
        document.body.classList.remove("in-corporate-view");
        document.body.classList.add("dark-theme");
        document.body.style.backgroundColor = "#000000";
    }

    // 3. Toggle View visibility
    document.querySelectorAll(".view-section").forEach(section => {
        section.classList.remove("active");
    });
    
    const targetSection = document.getElementById(`view-${targetId}`);
    if (targetSection) {
        targetSection.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 4. Update Header Nav Tabs styling
    navTabs.forEach(tab => {
        if (tab.getAttribute("data-target") === targetId) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    mobileNavTabs.forEach(tab => {
        if (tab.getAttribute("data-target") === targetId) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    // 5. If switching to Explore view
    if (targetId === "explore") {
        renderExploreGrid();
    }

    // 6. Handle sticky listing CTA appearance
    const stickyExploreBox = document.getElementById("sticky-explore-box");
    if (targetId === "home" || targetId === "about" || targetId === "explore") {
        stickyExploreBox.style.display = "flex";
    } else {
        stickyExploreBox.style.display = "none";
    }

    // 7. Auto-populate subject field if jumping to Contact from a specific button
    if (targetId === "contact" && subCategoryFilter === "corporate-booking") {
        const subjectSelect = document.getElementById("form-subject");
        if (subjectSelect) {
            subjectSelect.value = "corporate";
        }
    }
}

// --- Navigation Event Bindings ---
navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        switchTab(tab.getAttribute("data-target"));
    });
});

mobileNavTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        switchTab(tab.getAttribute("data-target"));
    });
});

mobileNavToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.toggle("open");
    mobileNavToggle.classList.toggle("active");
    document.body.style.overflow = isOpen ? "hidden" : "";
});

logoTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    switchTab("home");
});

// --- Dynamic Event Renderer Engine ---
function renderExploreGrid() {
    const container = document.getElementById("explore-events-container");
    if (!container) return;

    container.innerHTML = EVENT_DATABASE.map(event => {
        return `
            <div class="event-card liquid-glass" data-event-id="${event.id}">
                <div class="event-card-img-wrap">
                    <img src="${event.image}" alt="${event.name}" class="event-card-img" loading="lazy">
                    <span class="event-badge-megaphone price-tag"><i class="fa-solid fa-circle-check"></i> Conducted</span>
                </div>
                <div class="event-card-body">
                    <span class="event-accent-typewriter accent-typewriter">
                        <i class="fa-solid ${event.type === 'hunt' ? 'fa-puzzle-piece' : 'fa-shoe-prints'}"></i> 
                        ${event.type.toUpperCase()} RECAP / ${event.dateStr}
                    </span>
                    <h3 class="event-card-title font-condensed">${event.name}</h3>
                    <p class="event-card-text">${event.story.substring(0, 115)}...</p>
                    <div class="event-card-footer">
                        <span class="event-tag-heritage"><i class="fa-solid fa-location-dot"></i> ${event.location}</span>
                        <button class="btn-card-action ripple-trigger" onclick="openEventDetails('${event.id}', event)">
                            View Recap & Story <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// --- Scrollytelling Modal Detailed Views ---
const detailModal = document.getElementById("event-detail-modal");
const modalScrollContainer = document.getElementById("modal-scroll-container");

function openEventDetails(eventId, eventObj) {
    if (eventObj) {
        eventObj.stopPropagation();
    }

    const eventData = EVENT_DATABASE.find(e => e.id === eventId);
    if (!eventData) return;

    // Populate fields
    document.getElementById("modal-hero-img").src = eventData.image;
    document.getElementById("modal-hero-img").alt = eventData.name;
    document.getElementById("modal-price-badge").innerHTML = `<i class="fa-solid fa-circle-check"></i> Conducted`;
    document.getElementById("modal-event-title").textContent = eventData.name;
    document.getElementById("modal-event-subtitle").textContent = eventData.subtitle.toUpperCase();
    
    document.getElementById("modal-info-location").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${eventData.location}`;
    document.getElementById("modal-info-time").innerHTML = `<i class="fa-solid fa-clock"></i> ${eventData.timeStr.split(" (")[0]}`;
    document.getElementById("modal-info-status").textContent = "Conducted";
    
    document.getElementById("modal-story-desc").textContent = eventData.story;
    
    // Expectations list
    const expectationsList = document.getElementById("modal-expectations-list");
    expectationsList.innerHTML = eventData.expectations.map(exp => `<li>${exp}</li>`).join("");
    
    // Logistics
    document.getElementById("modal-log-start").textContent = eventData.startPoint;
    document.getElementById("modal-log-end").textContent = eventData.endPoint;
    document.getElementById("modal-log-capacity").textContent = eventData.capacity;
    document.getElementById("modal-log-stops").textContent = eventData.stops;

    // Set Up Stay Notified action link (launches WhatsApp with a custom inquiry)
    const bookButton = document.getElementById("modal-book-now-btn");
    const messageText = `Hi TNEVE! I just saw the mission log and recap for "${eventData.name}". \n\nI want to stay notified when the next concurrence or walk launches! Please register my coordinate.`;
    const encodedText = encodeURIComponent(messageText);
    bookButton.href = `https://wa.me/919999999999?text=${encodedText}`;

    // Show modal & prevent parent scroll
    detailModal.style.display = "block";
    document.body.style.overflow = "hidden";
    modalScrollContainer.scrollTop = 0;
}

function closeEventDetails() {
    detailModal.style.display = "none";
    document.body.style.overflow = "";
}

// Close modal if clicked outside card
detailModal.addEventListener("click", (e) => {
    if (e.target === detailModal || e.target === modalScrollContainer) {
        closeEventDetails();
    }
});

// --- Dynamic Form Submit Operations ---
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const subject = document.getElementById("form-subject").value;
    const message = document.getElementById("form-message").value;

    // Mock transmission success ticket
    const formContainer = document.querySelector(".contact-form-block");
    
    formContainer.innerHTML = `
        <div class="form-success text-center liquid-glass" style="padding: 40px 20px; border-radius: var(--border-radius-lg); animation: ticketBounce 0.4s forwards;">
            <i class="fa-regular fa-paper-plane glow-cyan" style="font-size: 50px; color: var(--color-signature); margin-bottom: 20px;"></i>
            <h3 class="font-condensed">TRANSMISSION ENCRYPTED</h3>
            <p style="color: var(--color-text-secondary); margin-top: 10px; font-size: 14px;">Thank you explore agent <strong>${name}</strong>. Your coordinates have been registered. Our HQ unit will respond on <strong>${email}</strong> inside the hour.</p>
            <button class="btn btn-secondary ripple-trigger" style="margin-top: 30px;" onclick="location.reload()">Send New Signal</button>
        </div>
    `;
}

// --- Micro Animations & Interactive Tactile Elements ---
// Dynamic visual scroll effects
window.addEventListener("scroll", () => {
    // Subtle blur shift on header background based on scroll depth
    const header = document.querySelector(".main-header");
    if (header) {
        if (window.scrollY > 50) {
            header.style.backgroundColor = document.body.classList.contains("in-corporate-view") 
                ? "rgba(245, 247, 250, 0.95)" 
                : "rgba(0, 0, 0, 0.95)";
            header.style.borderBottomColor = document.body.classList.contains("in-corporate-view")
                ? "rgba(0, 0, 0, 0.12)"
                : "rgba(29, 209, 199, 0.2)";
        } else {
            header.style.backgroundColor = document.body.classList.contains("in-corporate-view")
                ? "rgba(245, 247, 250, 0.85)"
                : "rgba(0, 0, 0, 0.8)";
            header.style.borderBottomColor = document.body.classList.contains("in-corporate-view")
                ? "rgba(0, 0, 0, 0.08)"
                : "rgba(255, 255, 255, 0.05)";
        }
    }
});

// Custom Ripple Click Effects
document.addEventListener("click", (e) => {
    const btn = e.target.closest(".ripple-trigger");
    if (!btn) return;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-span");

    const rippleStyle = document.getElementById("ripple-effect-style");
    if (!rippleStyle) {
        const style = document.createElement("style");
        style.id = "ripple-effect-style";
        style.textContent = `
            .ripple-span {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.35);
                transform: scale(0);
                animation: rippleAnimation 0.6s linear;
                pointer-events: none;
            }
            @keyframes rippleAnimation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    btn.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 600);
});

// --- Initializing App Coordinates ---
document.addEventListener("DOMContentLoaded", () => {
    // Initial Render of listings
    renderExploreGrid();
    
    // Default initial page set up
    switchTab("home");
});
