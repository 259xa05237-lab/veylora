/* ==========================================================================
   STUDENT NEXUS — Core Platform Engine
   Vanilla JavaScript ES6+ | State Management | Dynamic UI Rendering
   ========================================================================== */

// --- CENTRAL VERIFIED EXTERNAL LINKS CONFIGURATION ---
const VERIFIED_LINKS = {
  linkedIn: "https://www.linkedin.com",
  leetCode: "https://leetcode.com",
  hackerRank: "https://www.hackerrank.com",
  gitHub: "https://github.com",
  geeksForGeeks: "https://www.geeksforgeeks.org",
  nptel: "https://nptel.ac.in",
  mitOCW: "https://ocw.mit.edu",
  coursera: "https://www.coursera.org",
  freeCodeCamp: "https://www.freecodecamp.org",
  codeforces: "https://codeforces.com",
  gprec: "https://www.gprec.ac.in",
  chatGPT: "https://chatgpt.com",
  claude: "https://claude.ai",
  gemini: "https://gemini.google.com"
};

// --- DATASETS ARCHITECTURE ---

// 1. 10 Engineering Branches
const BRANCHES_DATA = [
  { id: "cse", name: "Computer Science & Engineering", icon: "💻", code: "CSE", desc: "Software engineering, algorithms, data structures, AI/ML, cloud, cybersecurity, web development & system design." },
  { id: "aids", name: "Artificial Intelligence & Data Science", icon: "🤖", code: "AI & DS", desc: "Machine learning algorithms, neural networks, deep learning, data analytics, big data engineering & NLP." },
  { id: "it", name: "Information Technology", icon: "🌐", code: "IT", desc: "Web services, database systems, networking architecture, cloud infrastructure & software development." },
  { id: "ece", name: "Electronics & Communication", icon: "📡", code: "ECE", desc: "VLSI design, embedded systems, signal processing, wireless communication & IoT devices." },
  { id: "eee", name: "Electrical & Electronics", icon: "⚡", code: "EEE", desc: "Power electronics, smart grids, control systems, electric vehicles & microcontrollers." },
  { id: "mech", name: "Mechanical Engineering", icon: "⚙️", code: "MECH", desc: "Thermodynamics, CAD/CAM, robotics, fluid mechanics, mechatronics & manufacturing processes." },
  { id: "civil", name: "Civil Engineering", icon: "🏗️", code: "CIVIL", desc: "Structural analysis, surveying, geotech, transportation engineering & sustainable construction." },
  { id: "chem", name: "Chemical Engineering", icon: "🧪", code: "CHEM", desc: "Process dynamics, reaction engineering, unit operations, thermodynamics & biochemical technology." },
  { id: "biotech", name: "Biotechnology", icon: "🧬", code: "BIOTECH", desc: "Genetic engineering, bioinformatics, bioprocess engineering, molecular biology & pharmaceuticals." },
  { id: "other", name: "Other Engineering Branches", icon: "📐", code: "OTHER", desc: "Aerospace, Biomedical, Environmental, Mining, Industrial Production & Metallurgical Engineering." }
];

// 2. 18 Standard Branch Features
const BRANCH_FEATURES = [
  { id: "subjects", title: "1. Subjects", icon: "📚" },
  { id: "videos", title: "2. Video Lectures", icon: "🎥" },
  { id: "notes", title: "3. Notes & Study Materials", icon: "📄" },
  { id: "practice", title: "4. Practice Problems", icon: "🧩" },
  { id: "coding", title: "5. Coding/Technical Practice", icon: "⚡" },
  { id: "doubt", title: "6. Doubt Solver", icon: "💡" },
  { id: "voice_doubt", title: "7. Voice Doubt Solver", icon: "🎙️" },
  { id: "roadmap", title: "8. Career Roadmap", icon: "🗺️" },
  { id: "skills", title: "9. Required Skills", icon: "🎯" },
  { id: "books", title: "10. Reference Books", icon: "📖" },
  { id: "projects", title: "11. Projects & Mini Projects", icon: "🚀" },
  { id: "internships", title: "12. Internship Guidance", icon: "💼" },
  { id: "placements", title: "13. Placement Preparation", icon: "🎓" },
  { id: "interviews", title: "14. Interview Preparation", icon: "🗣️" },
  { id: "certifications", title: "15. Certifications", icon: "🏆" },
  { id: "experts", title: "16. Expert Guidance", icon: "👨‍🏫" },
  { id: "community", title: "17. Community Discussions", icon: "💬" },
  { id: "tools", title: "18. Useful Tools & Websites", icon: "🛠️" }
];

// 3. CSE Detailed Specialization Topics
const CSE_TOPICS = [
  { id: "prog", title: "Programming (C, C++, Java, Python)", desc: "Master core syntax, OOP concepts, pointers, memory management, and clean code practices." },
  { id: "dsa", title: "Data Structures & Algorithms", desc: "Comprehensive 3-tier progression from Arrays & Strings to Dynamic Programming & Graph Theory." },
  { id: "dbms", title: "Database Management Systems (DBMS)", desc: "SQL, Relational algebra, Normalization, ACID properties, Indexing, and NoSQL databases." },
  { id: "os", title: "Operating Systems (OS)", desc: "Process scheduling, Concurrency, Memory management, Virtual memory, File systems & Linux commands." },
  { id: "cn", title: "Computer Networks (CN)", desc: "OSI model, TCP/IP stack, Routing protocols, Socket programming, HTTP/HTTPS & Network Security." },
  { id: "se", title: "Software Engineering", desc: "Agile methodologies, System Design, SDLC models, Design Patterns & Testing frameworks." },
  { id: "webdev", title: "Web Development", desc: "HTML5, CSS3, Modern JS (ES6+), Web APIs, Full Stack Architecture, Responsive UI/UX." },
  { id: "aiml", title: "Artificial Intelligence & ML", desc: "Supervised & Unsupervised Learning, Regression, Classification, Neural Networks & PyTorch/TensorFlow." },
  { id: "cloud", title: "Cloud Computing", desc: "AWS, Azure, Docker containers, Kubernetes orchestration, Serverless architecture & DevOps." },
  { id: "cyber", title: "Cybersecurity & Cryptography", desc: "Network security, Hashing, Symmetric/Asymmetric encryption, Penetration testing & Ethical Hacking." },
  { id: "git", title: "Git & GitHub", desc: "Version control, Branching strategies, Merging, Pull requests, CI/CD pipelines & open source." }
];

// 4. DSA 3-Tier Progression Data
const DSA_PROGRESSION = [
  {
    level: "Level 1: Beginner",
    badgeClass: "badge-beginner",
    desc: "Build fundamental problem-solving skills, complexity analysis, and linear data structures.",
    topics: [
      "Time & Space Complexity (Big-O)",
      "Arrays & Dynamic Arrays",
      "String Manipulation",
      "Two Pointers & Sliding Window",
      "Singly & Doubly Linked Lists",
      "Recursion Fundamentals",
      "Sorting (Bubble, Insertion, Selection)"
    ],
    resource: "GeeksforGeeks / NeetCode Beginner",
    resourceUrl: VERIFIED_LINKS.geeksForGeeks,
    practicePlatform: "LeetCode Easy / HackerRank",
    practiceUrl: VERIFIED_LINKS.leetCode,
    project: "Array Visualization Tool & Contact Directory Manager"
  },
  {
    level: "Level 2: Intermediate",
    badgeClass: "badge-intermediate",
    desc: "Master non-linear data structures, searching, tree traversals, and algorithmic patterns.",
    topics: [
      "Stacks & Queues (Monotonic Stack)",
      "Binary Trees & BST Traversals",
      "Heap & Priority Queues",
      "Hashing & Hash Tables",
      "Fast Sorting (Merge Sort, Quick Sort)",
      "Binary Search & Search Space",
      "Backtracking & Combinations"
    ],
    resource: "Striver's A2Z DSA Sheet / NPTEL",
    resourceUrl: VERIFIED_LINKS.nptel,
    practicePlatform: "LeetCode Medium / Codeforces",
    practiceUrl: VERIFIED_LINKS.leetCode,
    project: "Interactive Binary Search Tree & Expression Evaluator"
  },
  {
    level: "Level 3: Advanced",
    badgeClass: "badge-advanced",
    desc: "Tackle complex graph algorithms, dynamic programming optimization, and advanced trees.",
    topics: [
      "Graph BFS/DFS & Topological Sort",
      "Shortest Path (Dijkstra, Bellman-Ford)",
      "Disjoint Set Union (DSU) & Prim's/Kruskal's",
      "Dynamic Programming (1D, 2D, DP on Trees)",
      "Trie (Prefix Trees)",
      "Segment Trees & Fenwick Trees",
      "Bit Manipulation Tricks"
    ],
    resource: "MIT OpenCourseWare (6.006) / FreeCodeCamp",
    resourceUrl: VERIFIED_LINKS.mitOCW,
    practicePlatform: "LeetCode Hard / Codeforces Div 2",
    practiceUrl: VERIFIED_LINKS.codeforces,
    project: "Shortest Path Route Planner & Custom Compression Engine"
  }
];

// 5. Global Searchable Index Data
const SEARCH_INDEX = [
  { title: "Computer Science & Engineering", category: "Branch", link: "branch:cse" },
  { title: "AI & Data Science", category: "Branch", link: "branch:aids" },
  { title: "Information Technology", category: "Branch", link: "branch:it" },
  { title: "Electronics & Communication", category: "Branch", link: "branch:ece" },
  { title: "Electrical & Electronics", category: "Branch", link: "branch:eee" },
  { title: "Mechanical Engineering", category: "Branch", link: "branch:mech" },
  { title: "Civil Engineering", category: "Branch", link: "branch:civil" },
  { title: "Data Structures & Algorithms (DSA)", category: "Topic", link: "topic:dsa" },
  { title: "DBMS & SQL Querying", category: "Subject", link: "topic:dbms" },
  { title: "Operating Systems & Linux", category: "Subject", link: "topic:os" },
  { title: "Computer Networks & Sockets", category: "Subject", link: "topic:cn" },
  { title: "Web Development (HTML/CSS/JS)", category: "Skill", link: "topic:webdev" },
  { title: "Artificial Intelligence & ML", category: "Skill", link: "topic:aiml" },
  { title: "LeetCode Practice Platform", category: "Platform", link: VERIFIED_LINKS.leetCode, isExternal: true },
  { title: "HackerRank Coding Practice", category: "Platform", link: VERIFIED_LINKS.hackerRank, isExternal: true },
  { title: "GeeksforGeeks CS Portal", category: "Resource", link: VERIFIED_LINKS.geeksForGeeks, isExternal: true },
  { title: "NPTEL Online Courses", category: "Resource", link: VERIFIED_LINKS.nptel, isExternal: true },
  { title: "GitHub Code Repositories", category: "Resource", link: VERIFIED_LINKS.gitHub, isExternal: true },
  { title: "Software Engineer Roadmap", category: "Roadmap", link: "feature:roadmap" },
  { title: "Voice Doubt Solver", category: "Tool", link: "feature:voice_doubt" },
  { title: "Petlu Vijay (Founder Profile)", category: "Founder", link: "#hero" }
];

// --- APP STATE ---
const AppState = {
  currentBranchId: "cse",
  currentFeatureId: "subjects",
  theme: localStorage.getItem("sn_theme") || "dark",
  completedTopics: JSON.parse(localStorage.getItem("sn_dsa_completed") || "[]"),
  dailyMissions: JSON.parse(localStorage.getItem("sn_missions") || "[false, false, false]")
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStarfieldCanvas();
  renderBranchesSidebar();
  selectBranch(AppState.currentBranchId);
  initGlobalSearch();
  initVoiceDoubtSolver();
  initDailyMissions();
  updateMetrics();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  document.documentElement.setAttribute("data-theme", AppState.theme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    themeBtn.textContent = AppState.theme === "dark" ? "🌙" : "☀️";
    themeBtn.addEventListener("click", () => {
      AppState.theme = AppState.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", AppState.theme);
      localStorage.setItem("sn_theme", AppState.theme);
      themeBtn.textContent = AppState.theme === "dark" ? "🌙" : "☀️";
    });
  }
}

// --- STARFIELD CANVAS ANIMATION ---
function initStarfieldCanvas() {
  const canvas = document.getElementById("space-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numStars = 120;
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.01 + 0.005
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0.2) star.speed = -star.speed;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// --- BRANCHES SIDEBAR RENDERER ---
function renderBranchesSidebar() {
  const container = document.getElementById("branches-nav-list");
  if (!container) return;

  container.innerHTML = BRANCHES_DATA.map(b => `
    <li>
      <button class="branch-btn ${b.id === AppState.currentBranchId ? 'active' : ''}" 
              onclick="selectBranch('${b.id}')">
        <span class="branch-icon">${b.icon}</span>
        <span>${b.name}</span>
      </button>
    </li>
  `).join("");
}

// --- DYNAMIC BRANCH SELECTOR & RENDERER ---
function selectBranch(branchId) {
  AppState.currentBranchId = branchId;
  renderBranchesSidebar();

  const branch = BRANCHES_DATA.find(b => b.id === branchId) || BRANCHES_DATA[0];
  const container = document.getElementById("branch-dashboard-container");
  if (!container) return;

  container.innerHTML = `
    <div class="branch-header">
      <div class="branch-title-badge">${branch.icon} ${branch.code} DASHBOARD</div>
      <h2 class="branch-main-title">${branch.name}</h2>
      <p class="branch-desc">${branch.desc}</p>
    </div>

    <!-- 18 Branch Features Tabs -->
    <div class="features-nav-scroller">
      <ul class="features-tab-list">
        ${BRANCH_FEATURES.map(f => `
          <li>
            <button class="feature-tab-btn ${f.id === AppState.currentFeatureId ? 'active' : ''}" 
                    onclick="selectFeature('${f.id}')">
              <span>${f.icon}</span>
              <span>${f.title}</span>
            </button>
          </li>
        `).join("")}
      </ul>
    </div>

    <!-- Active Feature Display Panel -->
    <div class="feature-display-panel" id="feature-display-panel">
      ${renderFeatureContent(AppState.currentFeatureId, branch)}
    </div>
  `;
}

function selectFeature(featureId) {
  AppState.currentFeatureId = featureId;
  const branch = BRANCHES_DATA.find(b => b.id === AppState.currentBranchId);

  document.querySelectorAll(".feature-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  event?.currentTarget?.classList.add("active");

  const panel = document.getElementById("feature-display-panel");
  if (panel) {
    panel.innerHTML = renderFeatureContent(featureId, branch);
    if (featureId === "voice_doubt") {
      initVoiceDoubtSolver();
    }
  }
}

// --- FEATURE CONTENT RENDERER ENGINE ---
function renderFeatureContent(featureId, branch) {
  switch (featureId) {
    case "subjects":
      return renderSubjectsFeature(branch);
    case "practice":
    case "coding":
      return renderPracticeFeature(branch);
    case "doubt":
      return renderTextDoubtFeature();
    case "voice_doubt":
      return renderVoiceDoubtFeature();
    case "roadmap":
      return renderRoadmapFeature(branch);
    case "books":
      return renderBooksFeature(branch);
    case "projects":
      return renderProjectsFeature(branch);
    case "community":
      return renderCommunityFeature(branch);
    case "tools":
      return renderToolsFeature(branch);
    default:
      return renderGenericFeature(featureId, branch);
  }
}

// 1. Subjects Feature (With CSE Special Breakdown & DSA Level 1-3)
function renderSubjectsFeature(branch) {
  if (branch.id === "cse") {
    return `
      <h3 style="margin-bottom: 20px;">CSE Core Specialization & Curriculum</h3>
      <div class="cards-grid-3" style="margin-bottom: 40px;">
        ${CSE_TOPICS.map(t => `
          <div class="feature-card">
            <span class="card-tag">Core Module</span>
            <h4 class="card-title">${t.title}</h4>
            <p class="card-desc">${t.desc}</p>
            <a href="${VERIFIED_LINKS.geeksForGeeks}" target="_blank" rel="noopener" class="card-link-btn">
              Explore Topics &amp; Notes &rarr;
            </a>
          </div>
        `).join("")}
      </div>

      <h3 style="margin-bottom: 12px;" id="dsa-section">Data Structures &amp; Algorithms (3-Tier Mastery Hub)</h3>
      <p style="color: var(--text-secondary); margin-bottom: 24px;">Track your DSA progress across Beginner, Intermediate, and Advanced tiers.</p>
      
      <div class="dsa-levels-container">
        ${DSA_PROGRESSION.map((lvl, index) => `
          <div class="dsa-level-block">
            <div class="dsa-level-header">
              <div>
                <span class="level-badge ${lvl.badgeClass}">${lvl.level}</span>
                <p style="color: var(--text-secondary); margin-top: 6px; font-size: 0.9rem;">${lvl.desc}</p>
              </div>
            </div>
            
            <div class="topics-checklist-grid">
              ${lvl.topics.map(topic => {
      const isChecked = AppState.completedTopics.includes(topic);
      return `
                  <label class="topic-check-item">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleTopic('${topic}')">
                    <span>${topic}</span>
                  </label>
                `;
    }).join("")}
            </div>

            <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.88rem; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
              <div><strong>📖 Learning Resource:</strong> <a href="${lvl.resourceUrl}" target="_blank" rel="noopener" class="cyan-text">${lvl.resource}</a></div>
              <div><strong>⚡ Practice Platform:</strong> <a href="${lvl.practiceUrl}" target="_blank" rel="noopener" class="purple-text">${lvl.practicePlatform}</a></div>
              <div><strong>🛠️ Recommended Project:</strong> <span style="color: var(--text-primary);">${lvl.project}</span></div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  return `
    <h3 style="margin-bottom: 20px;">${branch.name} Core Subjects</h3>
    <div class="cards-grid-3">
      <div class="feature-card">
        <span class="card-tag">Semester 1 &amp; 2</span>
        <h4 class="card-title">Engineering Fundamentals</h4>
        <p class="card-desc">Mathematics, Physics, Basic Electrical/Electronics &amp; Engineering Graphics.</p>
        <a href="${VERIFIED_LINKS.nptel}" target="_blank" rel="noopener" class="card-link-btn">NPTEL Course Link &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Semester 3 &amp; 4</span>
        <h4 class="card-title">Core Branch Theory</h4>
        <p class="card-desc">Advanced domain principles, lab experiments, simulation tools &amp; mechanics.</p>
        <a href="${VERIFIED_LINKS.mitOCW}" target="_blank" rel="noopener" class="card-link-btn">MIT OCW Resources &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Semester 5 &amp; 6</span>
        <h4 class="card-title">Applied Engineering &amp; Electives</h4>
        <p class="card-desc">Specialized electives, industry case studies &amp; design calculations.</p>
        <a href="${VERIFIED_LINKS.geeksForGeeks}" target="_blank" rel="noopener" class="card-link-btn">GeeksforGeeks Notes &rarr;</a>
      </div>
    </div>
  `;
}

// 2. Practice Feature
function renderPracticeFeature(branch) {
  return `
    <h3 style="margin-bottom: 20px;">Interactive Technical &amp; Coding Practice</h3>
    <div class="cards-grid-3">
      <div class="feature-card">
        <span class="card-tag">LeetCode Platform</span>
        <h4 class="card-title">DSA &amp; Problem Solving</h4>
        <p class="card-desc">Solve 2000+ curated coding challenges across Easy, Medium, and Hard tiers.</p>
        <a href="${VERIFIED_LINKS.leetCode}" target="_blank" rel="noopener" class="btn-primary" style="margin-top: 12px; justify-content: center;">
          Launch LeetCode &rarr;
        </a>
      </div>
      <div class="feature-card">
        <span class="card-tag">HackerRank Platform</span>
        <h4 class="card-title">Language &amp; Domain Badges</h4>
        <p class="card-desc">Earn gold badges in Python, C++, Java, SQL, Problem Solving &amp; Algorithms.</p>
        <a href="${VERIFIED_LINKS.hackerRank}" target="_blank" rel="noopener" class="btn-secondary" style="margin-top: 12px; justify-content: center;">
          Launch HackerRank &rarr;
        </a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Codeforces</span>
        <h4 class="card-title">Competitive Programming</h4>
        <p class="card-desc">Participate in timed live contests, Division 2/3 rounds, and rating ladder.</p>
        <a href="${VERIFIED_LINKS.codeforces}" target="_blank" rel="noopener" class="btn-secondary" style="margin-top: 12px; justify-content: center;">
          Launch Codeforces &rarr;
        </a>
      </div>
    </div>
  `;
}

// 3. Text Doubt Solver
function renderTextDoubtFeature() {
  return `
    <div class="voice-solver-card">
      <h3>AI Technical Doubt Assistant</h3>
      <p style="color: var(--text-secondary); margin: 10px 0 20px;">Type any branch concept, code error, or engineering query for instant guidance.</p>
      
      <textarea class="doubt-input-box" id="text-doubt-input" placeholder="e.g. Explain how Dijkstra's algorithm works with an example..."></textarea>
      
      <button class="btn-primary" onclick="handleSolveTextDoubt()">
        Solve Doubt Instantly &rarr;
      </button>

      <div class="doubt-answer-box" id="text-doubt-answer"></div>

      <div class="api-placeholder-note">
        ⚙️ <strong>AI Backend Integration Note:</strong> Connect your OpenAI/Claude/Gemini API key in <code>window.STUDENT_NEXUS_AI_CONFIG</code> to enable live LLM stream responses.
      </div>
    </div>
  `;
}

// 4. Voice Doubt Solver (Web Speech API)
function renderVoiceDoubtFeature() {
  return `
    <div class="voice-solver-card">
      <span class="card-tag">Browser Native Web Speech API</span>
      <h3 style="margin-top: 6px;">Voice-Based Doubt Solver</h3>
      <p style="color: var(--text-secondary); margin: 10px 0 16px;">Click the microphone button and speak your doubt. Web Speech API will transcribe and read out solutions.</p>

      <button class="voice-mic-btn" id="voice-mic-btn" onclick="toggleVoiceListening()">
        🎙️
      </button>
      <div id="voice-status" style="font-weight: 600; color: var(--text-cyan); margin-bottom: 16px;">Click mic to start speaking</div>

      <textarea class="doubt-input-box" id="voice-transcription" placeholder="Your spoken question will appear here..."></textarea>

      <div class="hero-cta-group" style="justify-content: center;">
        <button class="btn-primary" onclick="handleSolveVoiceDoubt()">Generate &amp; Read Answer</button>
        <button class="btn-secondary" onclick="speakText('voice-transcription')">🔊 Listen Audio</button>
      </div>

      <div class="doubt-answer-box" id="voice-answer-box"></div>

      <div class="api-placeholder-note">
        ⚙️ <strong>API Placeholder:</strong> SpeechRecognition &amp; SpeechSynthesis active natively in browser.
      </div>
    </div>
  `;
}

// 5. Career Roadmap Feature
function renderRoadmapFeature(branch) {
  return `
    <h3 style="margin-bottom: 20px;">${branch.name} Career Roadmap</h3>
    <div style="background: var(--bg-deep); padding: 24px; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div class="logo-badge" style="width: 32px; height: 32px; font-size: 0.9rem;">1</div>
          <div>
            <h4>Foundations &amp; Core Principles</h4>
            <p style="color: var(--text-secondary); font-size: 0.92rem;">Master fundamentals, mathematics, programming languages, and core lab practices.</p>
          </div>
        </div>
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div class="logo-badge" style="width: 32px; height: 32px; font-size: 0.9rem;">2</div>
          <div>
            <h4>Specialization &amp; Hands-on Projects</h4>
            <p style="color: var(--text-secondary); font-size: 0.92rem;">Build mini-projects, master Git, write clean code, and participate in hackathons.</p>
          </div>
        </div>
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div class="logo-badge" style="width: 32px; height: 32px; font-size: 0.9rem;">3</div>
          <div>
            <h4>Internships &amp; Professional Portfolio</h4>
            <p style="color: var(--text-secondary); font-size: 0.92rem;">Apply for corporate internships via LinkedIn/GitHub, contribute to open source, and polish resume.</p>
          </div>
        </div>
        <div style="display: flex; gap: 16px; align-items: flex-start;">
          <div class="logo-badge" style="width: 32px; height: 32px; font-size: 0.9rem;">4</div>
          <div>
            <h4>Full Placement &amp; Career Launch</h4>
            <p style="color: var(--text-secondary); font-size: 0.92rem;">Mock interviews, system design practice, aptitude tests, and offer negotiations.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 6. Books Feature
function renderBooksFeature(branch) {
  return `
    <h3 style="margin-bottom: 20px;">Recommended Textbooks &amp; References</h3>
    <div class="cards-grid-3">
      <div class="feature-card">
        <span class="card-tag">Standard Textbook</span>
        <h4 class="card-title">Introduction to Algorithms (CLRS)</h4>
        <p class="card-desc">Thomas H. Cormen et al. — The definitive global textbook for algorithms &amp; data structures.</p>
        <a href="${VERIFIED_LINKS.mitOCW}" target="_blank" rel="noopener" class="card-link-btn">View Reference Guide &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Systems &amp; OS</span>
        <h4 class="card-title">Operating System Concepts</h4>
        <p class="card-desc">Silberschatz, Galvin &amp; Gagne — The dinosaur book for operating system design.</p>
        <a href="${VERIFIED_LINKS.geeksForGeeks}" target="_blank" rel="noopener" class="card-link-btn">View Summary Notes &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Database Systems</span>
        <h4 class="card-title">Database System Concepts</h4>
        <p class="card-desc">Korth &amp; Sudarshan — Fundamental textbook for SQL, relational model &amp; transaction management.</p>
        <a href="${VERIFIED_LINKS.nptel}" target="_blank" rel="noopener" class="card-link-btn">View NPTEL References &rarr;</a>
      </div>
    </div>
  `;
}

// 7. Projects Feature
function renderProjectsFeature(branch) {
  return `
    <h3 style="margin-bottom: 20px;">Projects &amp; Mini-Projects Portfolio</h3>
    <div class="cards-grid-3">
      <div class="feature-card">
        <span class="card-tag">Beginner Project</span>
        <h4 class="card-title">Student Management Portal</h4>
        <p class="card-desc">Build a CRUD web app using HTML, CSS, JavaScript, and LocalStorage persistence.</p>
        <a href="${VERIFIED_LINKS.gitHub}" target="_blank" rel="noopener" class="card-link-btn">View GitHub Template &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Intermediate Project</span>
        <h4 class="card-title">Interactive Algorithm Visualizer</h4>
        <p class="card-desc">Visualize Sorting algorithms (Bubble, Quick, Merge) with step-by-step canvas animations.</p>
        <a href="${VERIFIED_LINKS.gitHub}" target="_blank" rel="noopener" class="card-link-btn">View GitHub Repository &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Advanced Project</span>
        <h4 class="card-title">Full Stack Cloud Dashboard</h4>
        <p class="card-desc">Deploy a real-time web application connected to database &amp; cloud server API.</p>
        <a href="${VERIFIED_LINKS.gitHub}" target="_blank" rel="noopener" class="card-link-btn">View Architecture Code &rarr;</a>
      </div>
    </div>
  `;
}

// 8. Community Discussions Feature
function renderCommunityFeature(branch) {
  return `
    <div class="community-container">
      <div class="community-header">
        <h3>Student Community Discussions (${branch.code})</h3>
        <button class="btn-primary" onclick="alert('Post modal ready! Enter your discussion thread.')">+ New Discussion</button>
      </div>

      <div class="discussion-post-card">
        <div class="post-author">
          <div class="author-avatar">PV</div>
          <div>
            <strong style="color: var(--text-primary);">Petlu Vijay (Founder)</strong>
            <div style="font-size: 0.78rem; color: var(--text-muted);">Posted in #General-Guidance &bull; 2 hours ago</div>
          </div>
        </div>
        <h4 style="margin-bottom: 8px;">Welcome to STUDENT NEXUS Operating System!</h4>
        <p style="color: var(--text-secondary); font-size: 0.93rem;">Share your branch questions, project repositories, and daily learning milestones here. Let's build the future together!</p>
        <div class="post-actions">
          <button class="action-btn">👍 42 Upvotes</button>
          <button class="action-btn">💬 12 Replies</button>
          <button class="action-btn">🔖 Bookmark</button>
        </div>
      </div>
    </div>
  `;
}

// 9. Tools & Websites Feature
function renderToolsFeature(branch) {
  return `
    <h3 style="margin-bottom: 20px;">Verified Engineering Tools &amp; Websites</h3>
    <div class="cards-grid-3">
      <div class="feature-card">
        <span class="card-tag">Development</span>
        <h4 class="card-title">GitHub</h4>
        <p class="card-desc">Version control, open source collaboration, and project hosting.</p>
        <a href="${VERIFIED_LINKS.gitHub}" target="_blank" rel="noopener" class="card-link-btn">Open GitHub &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">Career</span>
        <h4 class="card-title">LinkedIn</h4>
        <p class="card-desc">Professional networking, job search, and engineering mentors.</p>
        <a href="${VERIFIED_LINKS.linkedIn}" target="_blank" rel="noopener" class="card-link-btn">Open LinkedIn &rarr;</a>
      </div>
      <div class="feature-card">
        <span class="card-tag">AI Assistant</span>
        <h4 class="card-title">ChatGPT / Claude / Gemini</h4>
        <p class="card-desc">Accelerate code debugging, documentation, and conceptual understanding.</p>
        <a href="${VERIFIED_LINKS.chatGPT}" target="_blank" rel="noopener" class="card-link-btn">Open ChatGPT &rarr;</a>
      </div>
    </div>
  `;
}

// Generic Fallback Feature Renderer
function renderGenericFeature(featureId, branch) {
  const feat = BRANCH_FEATURES.find(f => f.id === featureId);
  return `
    <h3 style="margin-bottom: 16px;">${feat ? feat.title : 'Feature'} — ${branch.name}</h3>
    <div class="feature-card">
      <p class="card-desc">Comprehensive content, verified resources, curated links, and downloadable guides for <strong>${feat ? feat.title : featureId}</strong> inside <strong>${branch.name}</strong>.</p>
      <div style="margin-top: 16px; display: flex; gap: 16px;">
        <a href="${VERIFIED_LINKS.nptel}" target="_blank" rel="noopener" class="btn-primary">NPTEL Verified Link</a>
        <a href="${VERIFIED_LINKS.geeksForGeeks}" target="_blank" rel="noopener" class="btn-secondary">GeeksforGeeks Notes</a>
      </div>
    </div>
  `;
}

// --- GLOBAL SEARCH ENGINE ---
function initGlobalSearch() {
  const overlay = document.getElementById("search-modal-overlay");
  const input = document.getElementById("global-search-input");
  const resultsContainer = document.getElementById("search-results-list");

  if (!overlay || !input || !resultsContainer) return;

  window.openSearchModal = function () {
    overlay.classList.add("active");
    input.focus();
  };

  window.closeSearchModal = function () {
    overlay.classList.remove("active");
    input.value = "";
    resultsContainer.innerHTML = "";
  };

  // Keyboard Shortcuts: Ctrl+K or / or Esc
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA")) {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeSearchModal();
    }
  });

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      resultsContainer.innerHTML = "";
      return;
    }

    const matches = SEARCH_INDEX.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      resultsContainer.innerHTML = `<li style="padding: 12px; color: var(--text-muted);">No matching content found for "${query}".</li>`;
      return;
    }

    resultsContainer.innerHTML = matches.map(item => `
      <li class="search-result-item" onclick="handleSearchClick('${item.link}', ${item.isExternal || false})">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <strong>${item.title}</strong>
          <span class="shortcut-badge">${item.category}</span>
        </div>
      </li>
    `).join("");
  });
}

function handleSearchClick(link, isExternal) {
  closeSearchModal();
  if (isExternal) {
    window.open(link, "_blank", "noopener");
  } else if (link.startsWith("branch:")) {
    const branchId = link.split(":")[1];
    selectBranch(branchId);
    document.getElementById("branches-section")?.scrollIntoView({ behavior: "smooth" });
  } else if (link.startsWith("feature:")) {
    const featId = link.split(":")[1];
    selectFeature(featId);
    document.getElementById("branch-dashboard-container")?.scrollIntoView({ behavior: "smooth" });
  } else if (link.startsWith("#")) {
    document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
  }
}

// --- VOICE DOUBT SOLVER (WEB SPEECH API) ---
let recognition = null;
let isListening = false;

function initVoiceDoubtSolver() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    const status = document.getElementById("voice-status");
    if (status) status.textContent = "Web Speech API SpeechRecognition is not supported in this browser. You can type your doubt below.";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    isListening = true;
    const btn = document.getElementById("voice-mic-btn");
    const status = document.getElementById("voice-status");
    if (btn) btn.classList.add("listening");
    if (status) status.textContent = "🎙️ Listening... Speak your question now.";
  };

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      transcript += event.results[i][0].transcript;
    }
    const input = document.getElementById("voice-transcription");
    if (input) input.value = transcript;
  };

  recognition.onerror = (e) => {
    isListening = false;
    const btn = document.getElementById("voice-mic-btn");
    const status = document.getElementById("voice-status");
    if (btn) btn.classList.remove("listening");
    if (status) status.textContent = "Speech recognition error: " + e.error;
  };

  recognition.onend = () => {
    isListening = false;
    const btn = document.getElementById("voice-mic-btn");
    const status = document.getElementById("voice-status");
    if (btn) btn.classList.remove("listening");
    if (status) status.textContent = "Click mic to start speaking";
  };
}

function toggleVoiceListening() {
  if (!recognition) initVoiceDoubtSolver();
  if (!recognition) return;

  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
}

function handleSolveVoiceDoubt() {
  const text = document.getElementById("voice-transcription")?.value.trim();
  const box = document.getElementById("voice-answer-box");
  if (!text) {
    alert("Please speak or type a doubt question first!");
    return;
  }

  const solution = `
    <h4 style="color: var(--text-cyan); margin-bottom: 8px;">Doubt Solution Overview:</h4>
    <p style="margin-bottom: 12px;"><strong>Question:</strong> "${text}"</p>
    <p style="color: var(--text-secondary); line-height: 1.6;">
      <strong>Structured Explanation:</strong><br>
      1. Core Concept: Review fundamental formulas and theoretical constraints.<br>
      2. Implementation Steps: Break down into logical code blocks or engineering design stages.<br>
      3. Best Practice: Verify time/space complexity and test edge cases.
    </p>
  `;
  if (box) {
    box.innerHTML = solution;
    box.classList.add("active");
  }
  speakTextContent(`Doubt solution generated for ${text}. Review the 3 step implementation breakdown.`);
}

function handleSolveTextDoubt() {
  const text = document.getElementById("text-doubt-input")?.value.trim();
  const box = document.getElementById("text-doubt-answer");
  if (!text) {
    alert("Please type your technical doubt first!");
    return;
  }

  const solution = `
    <h4 style="color: var(--text-cyan); margin-bottom: 8px;">Solution Breakdown:</h4>
    <p style="margin-bottom: 12px;"><strong>Query:</strong> "${text}"</p>
    <p style="color: var(--text-secondary); line-height: 1.6;">
      Here is the step-by-step solution for your query. Master the core principles, test with sample input data, and refer to GeeksforGeeks / NPTEL for deep dives.
    </p>
  `;
  if (box) {
    box.innerHTML = solution;
    box.classList.add("active");
  }
}

function speakText(elementId) {
  const text = document.getElementById(elementId)?.value;
  if (text) speakTextContent(text);
}

function speakTextContent(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}

// --- STATE PERSISTENCE & METRICS ---
function toggleTopic(topicName) {
  const index = AppState.completedTopics.indexOf(topicName);
  if (index > -1) {
    AppState.completedTopics.splice(index, 1);
  } else {
    AppState.completedTopics.push(topicName);
  }
  localStorage.setItem("sn_dsa_completed", JSON.stringify(AppState.completedTopics));
  updateMetrics();
}

function initDailyMissions() {
  const checkboxes = document.querySelectorAll(".mission-item input[type='checkbox']");
  checkboxes.forEach((cb, index) => {
    cb.checked = AppState.dailyMissions[index] || false;
    if (cb.checked) cb.parentElement.classList.add("completed");

    cb.addEventListener("change", (e) => {
      AppState.dailyMissions[index] = e.target.checked;
      if (e.target.checked) {
        e.target.parentElement.classList.add("completed");
      } else {
        e.target.parentElement.classList.remove("completed");
      }
      localStorage.setItem("sn_missions", JSON.stringify(AppState.dailyMissions));
      updateMetrics();
    });
  });
}

function updateMetrics() {
  const completedEl = document.getElementById("completed-topics-count");
  const progressEl = document.getElementById("progress-percent-text");
  const fillEl = document.getElementById("progress-bar-fill");

  const totalTopics = 21; // Total DSA topics across 3 levels
  const count = AppState.completedTopics.length;
  const percent = Math.round((count / totalTopics) * 100);

  if (completedEl) completedEl.textContent = `${count} Topics`;
  if (progressEl) progressEl.textContent = `${percent}%`;
  if (fillEl) fillEl.style.width = `${percent}%`;
}
