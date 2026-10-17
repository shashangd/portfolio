/**
 * Shashang Dhoriyani - Portfolio & Resume Interactive Engine
 * 
 * Features:
 * - Dynamic project rendering & multi-tag category filtering
 * - Interactive Project Case Study modal with deep-linking support
 * - Journey chapters rendering with flight-path timeline
 * - Skills matrix rendering with practical operational contexts
 * - Ideas I Explore sticky notes
 * - Interactive hand-drawn doodle canvas trail (customizable & togglable)
 * - Copy email to clipboard with animated doodle feedback
 * - Interactive Contact form with client-side validation
 * - Printable resume trigger
 * - Verification drawer for pre-publish review
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error('Portfolio data not loaded.');
    return;
  }

  // Initialize all modules
  initHeroDoodles(data);
  initJourney(data);
  initProjects(data);
  initSkills(data);
  initIdeas(data);
  initPhilosophy(data);
  initEducationAndLeadership(data);
  initInteractiveDoodleCanvas();
  initContactForm();
  initCopyEmail();
  initVerificationDrawer(data);
  initModalHandling(data);
  initLucideIcons();
  checkDeepLink(data);
});

/* -------------------------------------------------------------
   HERO DOODLES & STATS
------------------------------------------------------------- */
function initHeroDoodles(data) {
  const currentRoleEl = document.getElementById('hero-current-role');
  if (currentRoleEl) {
    currentRoleEl.textContent = `${data.personal.currentRole} • ${data.personal.organization}`;
  }
}

/* -------------------------------------------------------------
   JOURNEY CHAPTERS STORYBOARD
------------------------------------------------------------- */
function initJourney(data) {
  const container = document.getElementById('journey-chapters-container');
  if (!container) return;

  container.innerHTML = data.journeyChapters.map((ch, idx) => `
    <div class="story-chapter mb-10 group" data-chapter="${ch.number}">
      <div class="story-chapter-node bg-white text-sky-700 font-bold font-display text-sm">
        ${ch.number}
      </div>

      <div class="rough-box p-6 md:p-8 bg-white relative">
        <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <div class="flex items-center gap-2">
            <span class="doodle-badge doodle-badge-sky text-xs">${ch.chapterTitle}</span>
            <span class="text-xs font-semibold text-slate-500 font-display">${ch.period}</span>
          </div>
          <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 inline"></i> ${ch.location}
          </span>
        </div>

        <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-1 font-display">
          ${ch.title}
        </h3>
        
        <div class="text-sky-700 font-semibold text-sm mb-3">
          ${ch.institution} <span class="text-slate-400 mx-1.5">•</span> <span class="text-slate-700 font-medium">${ch.highlight}</span>
        </div>

        <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
          ${ch.description}
        </p>

        <!-- Chapter Key Takeaway Areas -->
        <div class="pt-3 border-t border-dashed border-slate-200">
          <span class="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2 font-display">
            Key Scope & Exposure:
          </span>
          <div class="flex flex-wrap gap-2">
            ${ch.keyAreas.map(area => `
              <span class="inline-flex items-center gap-1.5 text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                ${area}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/* -------------------------------------------------------------
   PROJECTS & FILTERING
------------------------------------------------------------- */
let currentFilter = 'All';

function initProjects(data) {
  const filterContainer = document.getElementById('project-filters');
  const projectsGrid = document.getElementById('projects-grid');
  if (!filterContainer || !projectsGrid) return;

  const filterCategories = [
    'All',
    'Airport Technology',
    'Digital Transformation',
    'AI and Analytics',
    'Automation',
    'Infrastructure',
    'Academic'
  ];

  // Render Filter Buttons
  filterContainer.innerHTML = filterCategories.map(cat => `
    <button class="filter-pill ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">
      ${cat}
    </button>
  `).join('');

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;

    filterContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentFilter = btn.dataset.filter;
    renderFilteredProjects(data);
  });

  renderFilteredProjects(data);
}

function renderFilteredProjects(data) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const filtered = data.projects.filter(p => {
    if (currentFilter === 'All') return true;
    return p.categories.includes(currentFilter) || p.category === currentFilter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <p class="text-lg text-slate-500 font-doodle text-2xl">No projects in this category yet. Check back soon!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((proj, idx) => {
    // Select a doodle badge style based on category
    let badgeClass = 'doodle-badge-sky';
    if (proj.category === 'Automation') badgeClass = 'doodle-badge-emerald';
    if (proj.category === 'AI and Analytics') badgeClass = 'doodle-badge-purple';
    if (proj.category === 'Infrastructure') badgeClass = 'doodle-badge-amber';
    if (proj.category === 'Academic') badgeClass = 'doodle-badge-coral';

    return `
      <div class="rough-box p-6 flex flex-col justify-between bg-white cursor-pointer group transition-all"
           onclick="openProjectModal('${proj.id}')"
           data-project-id="${proj.id}">
        <div>
          <!-- Card Header & Badge -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="doodle-badge ${badgeClass}">${proj.badge}</span>
            <span class="text-xs font-semibold text-slate-400 font-display">${proj.status}</span>
          </div>

          <h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors font-display mb-2">
            ${proj.title}
          </h3>

          <p class="text-slate-600 text-sm leading-relaxed mb-4">
            ${proj.summary}
          </p>
        </div>

        <div>
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-dashed border-slate-200">
            ${proj.tags.slice(0, 3).map(tag => `
              <span class="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">#${tag}</span>
            `).join('')}
            ${proj.tags.length > 3 ? `<span class="text-[11px] text-slate-400 px-1 py-0.5">+${proj.tags.length - 3}</span>` : ''}
          </div>

          <!-- Action Footer -->
          <div class="flex items-center justify-between text-xs font-bold text-sky-700 group-hover:text-sky-800">
            <span class="inline-flex items-center gap-1 font-display">
              Read Operational Case Study 
              <span class="transition-transform group-hover:translate-x-1 font-doodle text-base">➔</span>
            </span>
            <span class="font-doodle text-slate-400 text-base">Doodle Study</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

/* -------------------------------------------------------------
   MODAL CASE STUDY VIEW
------------------------------------------------------------- */
function initModalHandling(data) {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeProjectModal());
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    const modalEl = document.getElementById('project-modal');
    if (!modalEl || !modalEl.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft') {
      window.navigateProjectModal(-1);
    } else if (e.key === 'ArrowRight') {
      window.navigateProjectModal(1);
    }
  });

  window.addEventListener('popstate', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#project-')) {
      const id = hash.replace('#project-', '');
      if (data.projects.some(p => p.id === id)) {
        openProjectModal(id);
      }
    } else {
      closeProjectModal(false);
    }
  });
}

window.openProjectModal = function(projectId) {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const project = data.projects.find(p => p.id === projectId);
  if (!project) return;

  window.currentModalProjectId = projectId;
  const projectIndex = data.projects.findIndex(p => p.id === projectId);
  const prevProject = projectIndex > 0 ? data.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < data.projects.length - 1 ? data.projects[projectIndex + 1] : null;

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-dynamic-body');
  if (!modal || !modalBody) return;

  let badgeColor = 'doodle-badge-sky';
  if (project.category === 'Automation') badgeColor = 'doodle-badge-emerald';
  if (project.category === 'AI and Analytics') badgeColor = 'doodle-badge-purple';
  if (project.category === 'Infrastructure') badgeColor = 'doodle-badge-amber';
  if (project.category === 'Academic') badgeColor = 'doodle-badge-coral';

  modalBody.innerHTML = `
    <!-- Modal Header -->
    <div class="mb-6 pb-5 border-b-2 border-slate-800">
      <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
        <span class="doodle-badge ${badgeColor}">${project.badge}</span>
        <div class="flex items-center gap-2">
          <button onclick="copyCaseStudyLink('${project.id}', this)" class="rough-btn rough-btn-sm text-xs py-1 px-2.5 inline-flex items-center gap-1.5" title="Copy direct link to this study">
            <i data-lucide="share-2" class="w-3.5 h-3.5 text-slate-700"></i>
            <span>Share Link</span>
          </button>
          <span class="text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
            Status: <span class="text-slate-800">${project.status}</span>
          </span>
        </div>
      </div>
      <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 font-display leading-tight mb-2">
        ${project.title}
      </h2>
      <p class="text-slate-600 font-medium text-sm md:text-base">
        ${project.summary}
      </p>
    </div>

    <!-- Case Study Sections -->
    <div class="space-y-6 text-sm md:text-base">
      <!-- 1. Context & Operational Challenge -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-amber-50/70 p-4 rounded-lg border border-amber-200">
          <div class="flex items-center gap-2 text-amber-900 font-bold text-sm font-display mb-1.5">
            <i data-lucide="info" class="w-4 h-4 text-amber-600"></i>
            Operational Context
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">${project.context}</p>
        </div>

        <div class="bg-rose-50/70 p-4 rounded-lg border border-rose-200">
          <div class="flex items-center gap-2 text-rose-900 font-bold text-sm font-display mb-1.5">
            <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-600"></i>
            The Operational Challenge
          </div>
          <p class="text-slate-700 text-sm leading-relaxed">${project.operationalChallenge}</p>
        </div>
      </div>

      <!-- 2. My Contribution (Exact & Grounded) -->
      <div class="bg-sky-50/80 p-5 rounded-lg border-2 border-sky-300">
        <div class="flex items-center gap-2 text-sky-950 font-bold text-base font-display mb-2">
          <i data-lucide="check-circle-2" class="w-5 h-5 text-sky-600"></i>
          My Practical Contribution
        </div>
        <p class="text-slate-800 text-sm md:text-base leading-relaxed font-medium">
          ${project.contribution}
        </p>
      </div>

      <!-- 3. Working Method & Intended Outcome -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <div class="text-xs uppercase font-bold tracking-wider text-slate-500 font-display mb-1">
            Working Method / Approach
          </div>
          <p class="text-slate-700 text-sm">${project.workingMethod}</p>
        </div>

        <div class="bg-emerald-50/70 p-4 rounded-lg border border-emerald-200">
          <div class="text-xs uppercase font-bold tracking-wider text-emerald-800 font-display mb-1">
            Intended Operational Outcome
          </div>
          <p class="text-slate-800 text-sm font-medium">${project.intendedOutcome}</p>
        </div>
      </div>

      <!-- 4. Skills Demonstrated -->
      <div class="pt-4 border-t border-dashed border-slate-300">
        <div class="text-xs uppercase font-bold tracking-wider text-slate-500 font-display mb-2.5">
          Skills & Capabilities Demonstrated:
        </div>
        <div class="flex flex-wrap gap-2">
          ${project.skillsDemonstrated.map(s => `
            <span class="inline-flex items-center gap-1 text-xs bg-white border-2 border-slate-800 px-3 py-1 rounded-full font-bold text-slate-800 shadow-[1.5px_1.5px_0px_#1e293b]">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer Controls -->
    <div class="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
      <div class="flex items-center gap-2">
        <span class="font-doodle text-slate-600 text-base">
          * Strictly documented within enterprise confidentiality guidelines.
        </span>
      </div>
      <div class="flex items-center gap-2">
        ${prevProject ? `
          <button class="rough-btn rough-btn-sm inline-flex items-center gap-1" onclick="openProjectModal('${prevProject.id}')" title="${prevProject.title}">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Prev [←]</span>
          </button>
        ` : ''}
        ${nextProject ? `
          <button class="rough-btn rough-btn-sm inline-flex items-center gap-1" onclick="openProjectModal('${nextProject.id}')" title="${nextProject.title}">
            <span>Next [→]</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        ` : ''}
        <button class="rough-btn rough-btn-sm bg-slate-900 text-white hover:bg-slate-800" onclick="closeProjectModal()">
          Close Study [Esc]
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  history.replaceState(null, null, `#project-${projectId}`);
  initLucideIcons();
};

window.navigateProjectModal = function(direction) {
  const data = window.PORTFOLIO_DATA;
  if (!data || !window.currentModalProjectId) return;
  const idx = data.projects.findIndex(p => p.id === window.currentModalProjectId);
  if (idx === -1) return;
  const newIdx = idx + direction;
  if (newIdx >= 0 && newIdx < data.projects.length) {
    openProjectModal(data.projects[newIdx].id);
  }
};

window.copyCaseStudyLink = function(projectId, btn) {
  const url = `${window.location.origin}${window.location.pathname}#project-${projectId}`;
  navigator.clipboard.writeText(url).then(() => {
    const originalText = btn.innerHTML;
    btn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i> Copied!`;
    initLucideIcons();
    setTimeout(() => {
      btn.innerHTML = originalText;
      initLucideIcons();
    }, 2000);
  }).catch(() => {
    prompt("Copy case study direct link:", url);
  });
};

window.closeProjectModal = function(updateHistory = true) {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  document.body.style.overflow = '';
  window.currentModalProjectId = null;
  if (updateHistory && window.location.hash.startsWith('#project-')) {
    history.replaceState(null, null, window.location.pathname);
  }
};

function checkDeepLink(data) {
  const hash = window.location.hash;
  if (hash.startsWith('#project-')) {
    const id = hash.replace('#project-', '');
    if (data.projects.some(p => p.id === id)) {
      setTimeout(() => openProjectModal(id), 200);
    }
  }
}

/* -------------------------------------------------------------
   SKILLS & PRACTICAL CAPABILITIES
------------------------------------------------------------- */
function initSkills(data) {
  const categoryContainer = document.getElementById('skills-category-container');
  const capabilitiesContainer = document.getElementById('capabilities-container');

  if (categoryContainer) {
    categoryContainer.innerHTML = data.skills.categories.map(cat => `
      <div class="rough-box p-6 bg-white">
        <div class="flex items-center gap-2 mb-4 pb-2 border-b border-dashed border-slate-200">
          <div class="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center border border-sky-300">
            <i data-lucide="${cat.icon}" class="w-4 h-4"></i>
          </div>
          <h4 class="font-bold text-slate-900 font-display text-lg">${cat.name}</h4>
        </div>

        <div class="space-y-3">
          ${cat.items.map(skill => `
            <div>
              <div class="flex items-center justify-between text-sm">
                <span class="font-bold text-slate-800">${skill.name}</span>
              </div>
              <p class="text-xs text-slate-500 leading-snug mt-0.5">
                ${skill.context}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  if (capabilitiesContainer) {
    capabilitiesContainer.innerHTML = data.skills.businessCapabilities.map(cap => `
      <div class="inline-flex items-center gap-2 bg-white border-2 border-slate-800 px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#1e293b] text-xs md:text-sm font-semibold text-slate-800 hover:-translate-y-0.5 transition-transform">
        <span class="text-sky-600 font-doodle text-base">✔</span>
        ${cap}
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------
   IDEAS I EXPLORE (CREATIVE STICKY NOTES)
------------------------------------------------------------- */
function initIdeas(data) {
  const container = document.getElementById('ideas-container');
  if (!container) return;

  // Small organic tilts for sticky note doodle feel
  const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0'];

  container.innerHTML = data.ideasIExplore.map((idea, idx) => {
    const tilt = tilts[idx % tilts.length];
    return `
      <div class="sticky-note ${tilt}">
        <div class="washi-tape washi-tape-cyan"></div>
        <div class="text-xs font-bold uppercase tracking-wider text-amber-800 font-display mb-2 flex items-center justify-between">
          <span>Idea #${idx + 1}</span>
          <span class="font-doodle text-base text-amber-700">Exploration</span>
        </div>
        <h4 class="text-base font-extrabold text-slate-900 font-display mb-2">
          ${idea.title}
        </h4>
        <p class="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
          ${idea.description}
        </p>
      </div>
    `;
  }).join('');
}

/* -------------------------------------------------------------
   WORKING PHILOSOPHY
------------------------------------------------------------- */
function initPhilosophy(data) {
  const quoteEl = document.getElementById('philosophy-quote');
  const tenetsContainer = document.getElementById('philosophy-tenets-container');

  if (quoteEl) {
    quoteEl.textContent = `“${data.philosophy.quote}”`;
  }

  if (tenetsContainer) {
    tenetsContainer.innerHTML = data.philosophy.tenets.map((t, idx) => `
      <div class="rough-box p-5 bg-white relative">
        <div class="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center font-bold text-sm mb-3">
          ${idx + 1}
        </div>
        <h4 class="font-bold text-slate-900 font-display text-base mb-1.5">
          ${t.title}
        </h4>
        <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
          ${t.description}
        </p>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------
   EDUCATION & LEADERSHIP
------------------------------------------------------------- */
function initEducationAndLeadership(data) {
  const eduContainer = document.getElementById('education-container');
  const leadContainer = document.getElementById('leadership-container');

  if (eduContainer) {
    eduContainer.innerHTML = data.education.map(edu => `
      <div class="rough-box p-6 bg-white mb-4">
        <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <span class="doodle-badge doodle-badge-sky text-xs">${edu.period}</span>
          <span class="font-bold text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            ${edu.grade}
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 font-display mb-1">${edu.degree}</h4>
        <div class="text-sm text-sky-800 font-semibold mb-2">${edu.institution} • ${edu.location}</div>
        <p class="text-slate-600 text-xs md:text-sm leading-relaxed">${edu.description}</p>
      </div>
    `).join('');
  }

  if (leadContainer) {
    leadContainer.innerHTML = data.leadership.map(item => `
      <div class="rough-box p-6 bg-white mb-4">
        <div class="flex items-center justify-between gap-2 mb-1">
          <span class="doodle-badge doodle-badge-amber text-xs">${item.period}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-900 font-display mb-1">${item.role}</h4>
        <div class="text-sm text-slate-700 font-semibold mb-2">${item.organization}</div>
        <p class="text-slate-600 text-xs md:text-sm leading-relaxed mb-3">${item.contribution}</p>
        <div class="text-xs text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-200 font-medium">
          <span class="font-bold text-slate-700">Takeaway:</span> ${item.takeaway}
        </div>
      </div>
    `).join('');
  }
}

/* -------------------------------------------------------------
   INTERACTIVE DOODLE CANVAS TRAIL
------------------------------------------------------------- */
function initInteractiveDoodleCanvas() {
  const canvas = document.getElementById('doodle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let points = [];
  let isEnabled = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    if (!isEnabled) return;
    points.push({
      x: e.clientX,
      y: e.clientY,
      age: 0,
      size: Math.random() * 3 + 2,
      color: Math.random() > 0.5 ? '#0284c7' : '#f59e0b'
    });
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isEnabled && points.length > 0) {
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];
        pt.age++;

        const alpha = Math.max(0, 1 - pt.age / 35);
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * (1 - pt.age / 40), 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha * 0.45;
        ctx.fill();

        // Connect nearby points with delicate doodle line
        if (i > 0) {
          const prev = points[i - 1];
          const dist = Math.hypot(pt.x - prev.x, pt.y - prev.y);
          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.strokeStyle = pt.color;
            ctx.lineWidth = 1;
            ctx.globalAlpha = alpha * 0.35;
            ctx.stroke();
          }
        }
      }
      points = points.filter(p => p.age < 35);
    }

    requestAnimationFrame(animate);
  }
  animate();

  // Toggle button support
  const toggleBtn = document.getElementById('doodle-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isEnabled = !isEnabled;
      toggleBtn.textContent = isEnabled ? '✨ Doodle Trail: On' : '💤 Doodle Trail: Off';
      toggleBtn.classList.toggle('bg-sky-100', isEnabled);
    });
  }
}

/* -------------------------------------------------------------
   COPY EMAIL INTERACTION
------------------------------------------------------------- */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = 'dhoriyanishashang777@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="text-emerald-700 font-bold font-display">✓ Copied to clipboard!</span>`;
        setTimeout(() => {
          btn.innerHTML = originalText;
          initLucideIcons();
        }, 2200);
      });
    });
  });
}

/* -------------------------------------------------------------
   CONTACT FORM HANDLER
------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const responseBox = document.getElementById('form-feedback');
  const submitBtn = form?.querySelector('button[type="submit"]');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.elements['name']?.value.trim();
    const email = form.elements['email']?.value.trim();
    const subject = form.elements['subject']?.value.trim() || 'Aviation & Technology Discussion';
    const message = form.elements['message']?.value.trim();

    if (!name || !email || !message) {
      if (responseBox) {
        responseBox.className = 'mt-4 p-3 rounded-lg bg-rose-50 border-2 border-rose-400 text-rose-800 text-sm font-semibold';
        responseBox.textContent = 'Please fill out your name, email, and message.';
        responseBox.classList.remove('hidden');
      }
      return;
    }

    const accessKey = window.PORTFOLIO_DATA?.personal?.web3FormsAccessKey?.trim();
    const mailtoUrl = `mailto:dhoriyanishashang777@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shashang,\n\nMy name is ${name} (${email}).\n\n${message}`)}`;

    // Silent background delivery via Web3Forms API
    if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="inline-flex items-center gap-2"><span>Transmitting...</span> <span class="animate-pulse">✈️</span></span>`;
      }

      if (responseBox) {
        responseBox.className = 'mt-4 p-3 rounded-lg bg-sky-50 border-2 border-sky-400 text-sky-800 text-xs font-medium';
        responseBox.textContent = 'Transmitting your message securely in the background...';
        responseBox.classList.remove('hidden');
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            subject: subject,
            message: message,
            from_name: `${name} (via shashang.me)`
          })
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          if (responseBox) {
            responseBox.className = 'mt-4 p-4 rounded-lg bg-emerald-50 border-2 border-emerald-500 text-emerald-900 text-sm font-medium';
            responseBox.innerHTML = `
              <div class="flex items-center gap-2 font-bold mb-1">
                <span class="font-doodle text-xl text-emerald-700 font-bold">✓</span> Message Sent Successfully!
              </div>
              <p class="text-xs text-slate-700">Thank you, <strong>${name}</strong>! Your message was delivered directly to Shashang's mailbox. You will hear back soon.</p>
            `;
          }
          form.reset();
        } else {
          throw new Error(result.message || 'Transmission error');
        }
      } catch (err) {
        console.warn('Web3Forms submission failed, falling back to mail client:', err);
        if (responseBox) {
          responseBox.className = 'mt-4 p-4 rounded-lg bg-amber-50 border-2 border-amber-400 text-amber-900 text-sm font-medium';
          responseBox.innerHTML = `
            <div class="font-bold mb-1">Notice</div>
            <p class="text-xs mb-2">Direct transmission couldn't complete. Opening your mail client as fallback...</p>
            <a href="${mailtoUrl}" class="underline text-sky-800 font-bold text-xs">Click here if mail app doesn't open</a>.
          `;
        }
        window.location.href = mailtoUrl;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
          initLucideIcons();
        }
      }
    } else {
      // Fallback mode when Web3Forms key is not yet set
      if (responseBox) {
        responseBox.className = 'mt-4 p-4 rounded-lg bg-emerald-50 border-2 border-emerald-400 text-emerald-900 text-sm font-medium';
        responseBox.innerHTML = `
          <div class="flex items-center gap-2 font-bold mb-1">
            <span class="font-doodle text-xl text-emerald-700">✓</span> Draft Prepared!
          </div>
          <p class="mb-2 text-xs">Opening your default email client to send to <span class="font-mono text-xs font-bold">dhoriyanishashang777@gmail.com</span>...</p>
          <a href="${mailtoUrl}" class="underline text-sky-800 font-bold text-xs">Click here if your mail app doesn't open automatically</a>.
        `;
        responseBox.classList.remove('hidden');
      }
      window.location.href = mailtoUrl;
      form.reset();
    }
  });
}

/* -------------------------------------------------------------
   VERIFICATION DRAWER (PRE-PUBLISH CHECKLIST)
------------------------------------------------------------- */
function initVerificationDrawer(data) {
  const trigger = document.getElementById('privacy-drawer-toggle');
  const panel = document.getElementById('privacy-verification-drawer');
  const closeBtn = document.getElementById('privacy-drawer-close');
  const listContainer = document.getElementById('privacy-checklist-container');

  if (listContainer && data.privacyNotice) {
    listContainer.innerHTML = data.privacyNotice.verificationItems.map(item => `
      <div class="flex items-start justify-between gap-3 py-2 border-b border-dashed border-slate-200 text-xs">
        <div>
          <span class="font-bold text-slate-800 block">${item.item}</span>
          <span class="text-slate-500">${item.action}</span>
        </div>
        <span class="doodle-badge ${item.status === 'Ready' ? 'doodle-badge-emerald' : 'doodle-badge-amber'} text-[10px]">
          ${item.status}
        </span>
      </div>
    `).join('');
  }

  if (trigger && panel) {
    trigger.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });
  }

  if (closeBtn && panel) {
    closeBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
    });
  }
}

/* -------------------------------------------------------------
   LUCIDE ICONS HELPER
------------------------------------------------------------- */
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}
