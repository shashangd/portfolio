/**
 * Shashang Dhoriyani - Portfolio & Resume Data
 * 
 * Reusable, editable data structure containing all professional information,
 * project case studies, career chapters, technical skills, and exploration concepts.
 * 
 * NOTE FOR PUBLISHING:
 * Check the placeholders marked with "VERIFY_BEFORE_PUBLISHING" prior to final deployment.
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Shashangkumar Dhoriyani",
    preferredName: "Shashang Dhoriyani",
    headline: "Aviation Technology and Digital Transformation Professional",
    alternativeHeadline: "Building smarter airport operations through technology, analytics, automation, and practical execution",
    currentRole: "Assistant Manager – Information Technology",
    organization: "Ahmedabad International Airport Limited",
    industry: "Aviation and Airports",
    location: "Ahmedabad, Gujarat, India",
    email: "dhoriyanishashang777@gmail.com",
    githubUsername: "ShashangDhoriyani",
    linkedinUrl: "https://www.linkedin.com/in/shashang-dhoriyani-0b393a1b9/",
    linkedinDisplayName: "linkedin.com/in/shashang-dhoriyani",
    resumeUrl: "resume.html", // Built-in ATS-compliant printable resume
    photoUrl: "assets/profile.png", // Profile portrait
    photoFallback: "assets/airport-doodle.svg",
    avatarPlaceholder: "assets/airport-doodle.svg", // Doodle/Sketch avatar
    websiteUrl: "https://shashang.me/",
    // Contact Form Backend (Silent in-background submission):
    // Enter your free Web3Forms Access Key from https://web3forms.com (emailed instantly)
    // If left empty, it will fall back to opening the visitor's email client directly.
    web3FormsAccessKey: "9dff663c-7a60-4616-ab34-2abb89b443a9",
    shortBio: "I am Shashang Dhoriyani, an aviation technology and digital transformation professional working at Ahmedabad International Airport. My journey has taken me from computer engineering and frontend development to airport IT operations, digital projects, analytics, automation, infrastructure, and technology finance. I enjoy translating complex operational challenges into practical digital solutions that improve efficiency, visibility, reliability, and passenger experience.",
    positioningStatement: "I work at the intersection of airport operations, technology, and business transformation. My experience spans IT infrastructure, digital products, automation, analytics, passenger-processing systems, project finance, and stakeholder coordination. I focus on turning operational requirements into practical, scalable, and commercially sound technology solutions."
  },

  philosophy: {
    quote: "I believe the best technology decisions are made close to the operation. A solution should not only be technically sound; it should be usable, financially responsible, scalable, and relevant to the people who depend on it.",
    tenets: [
      {
        title: "Operational Value First",
        description: "Technology is valuable only when it solves a genuine operational or human problem. I prefer practical execution over technology for technology’s sake.",
        icon: "compass"
      },
      {
        title: "Cross-Functional Synergy",
        description: "Airport transformation requires close collaboration across operations, IT, finance, terminal infrastructure, regulatory bodies, external vendors, and frontline users.",
        icon: "users"
      },
      {
        title: "Adoption Over Deployment",
        description: "A successful digital project needs far more than technical deployment; it requires steady user adoption, measurable KPIs, feedback loops, and continuous operational improvement.",
        icon: "activity"
      },
      {
        title: "Commercially Sound Engineering",
        description: "A sustainable solution must respect financial realities, transparent procurement workflows, governance, lifecycle costs, and long-term operational sustainability.",
        icon: "scale"
      },
      {
        title: "Clear Communication",
        description: "I enjoy translating complex multi-stakeholder operational and technical topics into clear, structured, and actionable communication for executive leadership.",
        icon: "message-square"
      }
    ]
  },

  careerDirection: {
    summary: "My long-term goal is to grow into a cross-functional leadership role where I can combine technology, airport operations, passenger experience, and commercial thinking to build services that create measurable operational and business value.",
    focusAreas: [
      "Airport Digital Transformation & Smart-Airport Platforms",
      "Artificial Intelligence & Operational Video Analytics",
      "Mission-Critical Airport IT & Systems Resilience",
      "Passenger-Experience Innovation & Digital Touchpoints",
      "Business Process Automation & Intelligent Workflows",
      "Technology-Enabled Commercial Growth & Retail Analytics",
      "Non-Aeronautical Revenue Opportunities & Passenger Services",
      "Cross-Functional Leadership Across Technology, Finance & Operations"
    ]
  },

  journeyChapters: [
    {
      number: "01",
      chapterTitle: "Chapter 1",
      title: "Engineering Foundation",
      institution: "Pandit Deendayal Energy University (formerly PDPU)",
      location: "Gandhinagar, Gujarat, India",
      period: "Sep 2020 – Jun 2024",
      highlight: "Bachelor of Technology in Computer Engineering • GPA: 8.66 / 10",
      description: "Built a solid academic and technical foundation in core computer science, focusing on algorithmic thinking, system architecture, database management, and intelligent data systems.",
      keyAreas: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "Relational Database Management (RDBMS)",
        "Operating Systems & Computer Networks",
        "Machine Learning Techniques",
        "Digital Image Processing & Computer Vision",
        "Web Engineering & Systems Analysis"
      ],
      doodleIcon: "graduation-cap"
    },
    {
      number: "02",
      chapterTitle: "Chapter 2",
      title: "Frontend Engineering Experience",
      institution: "Vasoya Brothers Infotech",
      location: "Surat, Gujarat, India",
      period: "Jun 2023 – Jul 2023",
      highlight: "Frontend Engineering Intern",
      description: "Served as the vital bridge between academic programming and real-world software delivery. Developed responsive, dynamic user interfaces and translated user requirements into functional software.",
      keyAreas: [
        "Component-based architecture with ReactJS",
        "Responsive styling with Tailwind CSS & HTML5/CSS3",
        "Modern JavaScript (ES6+) and asynchronous state",
        "Requirement translation into intuitive interface flows",
        "Cross-functional teamwork, code reviews & iterative refinements"
      ],
      doodleIcon: "code"
    },
    {
      number: "03",
      chapterTitle: "Chapter 3",
      title: "Entry into the Aviation Industry",
      institution: "Ahmedabad International Airport Limited",
      location: "Ahmedabad, Gujarat, India",
      period: "Aug 2024",
      highlight: "Aviation Ecosystem & Executive Office Exposure",
      description: "Early immersive exposure around the Chief Airport Officer’s office, developing an in-depth understanding of how an airport functions as an interconnected, time-critical, safety-sensitive operational ecosystem.",
      keyAreas: [
        "Interconnected airport departmental dependencies (Airside, Terminal, Landside)",
        "Leadership-level decision making and strategic operational priorities",
        "Safety-sensitive operations and regulatory compliance frameworks",
        "Harmonizing operational imperatives with digital technology roadmaps",
        "Cross-functional stakeholder alignment during high-tempo operations"
      ],
      doodleIcon: "plane-takeoff"
    },
    {
      number: "04",
      chapterTitle: "Chapter 4",
      title: "IT Operations & Infrastructure",
      institution: "Ahmedabad International Airport Limited",
      location: "Ahmedabad, Gujarat, India",
      period: "Aug 2024 – Present",
      highlight: "Airport IT Operations, Availability & Passenger Touchpoints",
      description: "Gained direct hands-on exposure to high-availability airport IT operations, mission-critical infrastructure, passenger-processing devices, and rapid incident follow-up in a live 24/7 environment.",
      keyAreas: [
        "Flight Information Display Systems (FIDS)",
        "DigiYatra biometric touchpoints and E-gates",
        "Self-Baggage Drop (SBD) and common-use passenger systems",
        "Network connectivity, redundancy & data-centre infrastructure",
        "Terminal IT readiness, CCTV/video platforms & e-POS systems",
        "Operational troubleshooting, audit compliance & escalation management"
      ],
      doodleIcon: "server"
    },
    {
      number: "05",
      chapterTitle: "Chapter 5",
      title: "IT Finance & Commercial Understanding",
      institution: "Ahmedabad International Airport Limited",
      location: "Ahmedabad, Gujarat, India",
      period: "2024 – Present",
      highlight: "CAPEX, OPEX & SAP-Supported Procurement Workflows",
      description: "Developing a rare combination of technical delivery with financial planning, capital budgeting, procurement lifecycle tracking, and vendor governance without losing sight of business value.",
      keyAreas: [
        "Capital Expenditure (CAPEX) & Operating Expenditure (OPEX) planning",
        "Control-period planning inputs and comprehensive business case drafting",
        "Note-for-Approval (NFA) documentation and justification notes",
        "SAP-supported Purchase Requisitions (PR) and Purchase Orders (PO)",
        "Scope verification, quotation evaluation, invoice and payment tracking",
        "Annual Maintenance Contract (AMC) scope review & budget tracking"
      ],
      doodleIcon: "file-text"
    },
    {
      number: "06",
      chapterTitle: "Chapter 6",
      title: "Digital Transformation & Smart-Airport Work",
      institution: "Ahmedabad International Airport Limited",
      location: "Ahmedabad, Gujarat, India",
      period: "Present",
      highlight: "End-to-End Digital Product Lifecycle Delivery",
      description: "Actively contributing across the entire innovation lifecycle—from discovering operational bottlenecks on the ground to delivering smart-airport platforms, AI video analytics, and automation.",
      keyAreas: [
        "1. Understanding the operational problem on the ground",
        "2. Gathering detailed requirements from operational stakeholders",
        "3. Preparing structured functional documentation & user stories",
        "4. Mapping operational needs to robust technology architecture",
        "5. Coordinating with internal tech teams and specialized vendors",
        "6. Supporting technical feasibility studies and Proofs of Concept",
        "7. Structuring and coordinating User Acceptance Testing (UAT)",
        "8. Facilitating rollout, user training, and adoption tracking",
        "9. Monitoring post-launch operational feedback & iterative enhancements",
        "10. Presenting progress and strategic recommendations to leadership"
      ],
      doodleIcon: "sparkles"
    }
  ],

  projects: [
    {
      id: "aviio-operational-analytics",
      title: "AVIIO – Operational Analytics & Dashboards",
      badge: "Digital Transformation",
      category: "AI and Analytics",
      categories: ["Airport Technology", "Digital Transformation", "AI and Analytics"],
      status: "Active Operational Platform",
      summary: "Consolidated operational visibility platform providing real-time data on passenger loads, baggage handling, flight schedules, and airport performance scorecards.",
      context: "Airport leadership and operational departments require unified, real-time visibility into mission-critical operational KPIs and performance indicators rather than siloed reports.",
      operationalChallenge: "Operational data traditionally existed in disparate systems across passenger flow, flight schedules, ground handling, and terminal operations, slowing down real-time decision-making.",
      contribution: "Supported requirement definition; coordinated dashboard and feature requirements between ground stakeholders and development partners; supported data validation, user adoption, issue resolution, and ongoing enhancement discussions; contributed to operational reporting for management visibility.",
      workingMethod: "Agile requirement mapping, stakeholder interviews, data schema validation, cross-departmental alignment, executive dashboard prototyping.",
      intendedOutcome: "Enhanced operational situational awareness, faster cross-functional decision-making, and improved data-driven airport management.",
      skillsDemonstrated: ["Requirement Gathering", "Operational Dashboards", "Data Validation", "Stakeholder Alignment", "Executive Reporting", "Analytics Coordination"],
      tags: ["Operational Dashboards", "Passenger Flow", "Baggage Performance", "Data-Driven Decisions", "Airport KPIs"],
      doodleType: "chart-doodle"
    },
    {
      id: "digital-eye-video-analytics",
      title: "Digital Eye – AI Video Analytics",
      badge: "AI & Computer Vision",
      category: "AI and Analytics",
      categories: ["Airport Technology", "AI and Analytics"],
      status: "POC & Use-Case Evaluation",
      summary: "Evaluating and planning computer vision use cases on airport camera infrastructure for queue monitoring, heatmaps, intrusion detection, and kerbside traffic.",
      context: "Leveraging existing airport CCTV infrastructure to derive real-time operational intelligence and safety alerts beyond conventional surveillance recording.",
      operationalChallenge: "Manual monitoring of crowded terminal zones, check-in queues, boarding bottlenecks, and kerbside congestion is labor-intensive and reactive.",
      contribution: "Supported definition of operational use cases; coordinated closely with terminal stakeholders and AI technology partners; assisted with technical feasibility assessments; supported proof-of-concept planning; participated in outcome evaluation and use-case prioritization.",
      workingMethod: "Camera field-of-view analysis, operational use-case framing, vendor capability benchmarking, edge vs. server-side AI evaluation, proof-of-concept criteria definition.",
      intendedOutcome: "Heightened situational awareness, proactive passenger crowd management, optimized frontline staffing, and improved passenger safety response.",
      skillsDemonstrated: ["Computer Vision Assessment", "AI Use-Case Scoping", "Vendor Technical Coordination", "Proof-of-Concept Management", "Queue Analytics"],
      tags: ["AI Video Analytics", "Queue Detection", "Heatmaps", "Intrusion Detection", "Kerbside Monitoring"],
      doodleType: "eye-doodle"
    },
    {
      id: "apoc-integrated-control-centre",
      title: "Airport Operations Control Centre (APOC)",
      badge: "Operational Command",
      category: "Airport Technology",
      categories: ["Airport Technology", "Digital Transformation", "Infrastructure"],
      status: "Implementation Coordination",
      summary: "Coordinating dependencies and operational KPIs for an integrated Airport Operations Control Centre providing a single source of operational truth.",
      context: "Creating a unified command hub where Airside, Terminal, Landside, and Security operations share integrated operational visibility and collaborative decision-making.",
      operationalChallenge: "Managing high-volume aircraft arrivals, departures, taxiway status, runway movements, and gate allocations requires synchronized data flows and high system resilience.",
      contribution: "Supported design and implementation coordination; worked on operational KPI requirements; coordinated IT infrastructure and system dependencies; supported stakeholder alignment, user access requirements, validation, and implementation activities; contributed to discussions on resilience and disaster-recovery planning.",
      workingMethod: "Multi-departmental requirement gathering, IT infrastructure dependency mapping, operational KPI definition, failover & resilience planning.",
      intendedOutcome: "A cohesive, data-supported, real-time operating picture enabling synchronized responses to weather anomalies, delay propagation, and resource constraints.",
      skillsDemonstrated: ["Systems Integration", "KPI Definition", "Infrastructure Dependency Mapping", "Disaster Recovery Planning", "Cross-Functional Coordination"],
      tags: ["APOC", "Air Traffic Visibility", "Runway & Gate Ops", "Resilience", "Operational Control"],
      doodleType: "radar-doodle"
    },
    {
      id: "digital-sops-process-digitization",
      title: "Digital SOPs & Process Digitization",
      badge: "Automation & Workflows",
      category: "Automation",
      categories: ["Digital Transformation", "Automation"],
      status: "Continuous Digitization",
      summary: "Transforming paper-based inspections, checklists, and fragmented approval chains into auditable, standardized digital workflows.",
      context: "Terminal and operational workflows previously depended on manual paper forms, email chains, spreadsheets, and decentralized records.",
      operationalChallenge: "Paper and spreadsheet workflows suffered from delayed reporting, lack of accountability, cumbersome audit trails, and human transcription errors.",
      contribution: "Supported digitization of operational inspections, field reports, approvals, and workflows; coordinated between business users and technical delivery teams; supported user adoption, issue tracking, and iterative workflow improvements; helped identify manual or repetitive activities suitable for digitization.",
      workingMethod: "Process mapping (As-Is vs. To-Be), form schema digitization, role-based approval definition, end-user training, adoption monitoring.",
      intendedOutcome: "Drastically reduced manual effort, transparent audit trails, accelerated approvals, and consistent standards enforcement across terminal operations.",
      skillsDemonstrated: ["Business Process Mapping", "Workflow Digitization", "User Adoption Support", "SOP Automation", "Change Management"],
      tags: ["Digital Workflows", "SOP Digitization", "Paperless Operations", "Auditability", "Process Efficiency"],
      doodleType: "clipboard-doodle"
    },
    {
      id: "aviator-modules",
      title: "Aviator Modules – Operational Scoping & Rollout",
      badge: "Digital Products",
      category: "Digital Transformation",
      categories: ["Airport Technology", "Digital Transformation"],
      status: "Module Deployment & Support",
      summary: "Scoping and rolling out dedicated digital modules to streamline airport operational logs, incident tracking, and shift handovers.",
      context: "Equipping airport ground staff and supervisors with specialized digital modules to capture operational occurrences and coordinate response.",
      operationalChallenge: "Ensuring ground teams can seamlessly adopt new software modules in active terminal zones without disrupting ongoing flight turnaround operations.",
      contribution: "Supported functional scoping; coordinated requirements with airport business teams; supported module deployment and frontline user troubleshooting; participated in operational process digitization and reporting improvements.",
      workingMethod: "User journey mapping, on-site testing, frontline user support, defect logging and escalation, reporting enhancement discussions.",
      intendedOutcome: "Standardized operational reporting, structured shift handovers, and reliable historical logs for continuous operational analysis.",
      skillsDemonstrated: ["Functional Scoping", "Software Rollout Support", "Frontline User Support", "Defect Tracking", "Operational Reporting"],
      tags: ["Aviator", "Operational Modules", "Shift Management", "Field Operations"],
      doodleType: "layout-doodle"
    },
    {
      id: "arrival-baggage-analytics-poc",
      title: "Arrival Baggage Tracking & Analytics POC",
      badge: "Proof of Concept",
      category: "AI and Analytics",
      categories: ["Airport Technology", "AI and Analytics"],
      status: "Proof of Concept Evaluation",
      summary: "Investigating technology solutions to track first-bag and last-bag delivery times, ground-handler SLA adherence, and passenger belt wait times.",
      context: "Baggage delivery time is a major driver of passenger satisfaction and a core operational benchmark for airport ground handling.",
      operationalChallenge: "Lack of granular, automated tracking for baggage movement from aircraft hold to reclaim carousels makes identifying ground-handling bottlenecks difficult.",
      contribution: "Supported a proof of concept related to baggage visibility; coordinated requirements and stakeholder inputs across airlines and ground handlers; participated in technical evaluation of baggage monitoring technologies.",
      workingMethod: "Proof of concept scope definition, SLA milestone tracking criteria (First Bag / Last Bag delivery), multi-stakeholder feedback collection.",
      intendedOutcome: "Transparent ground handling performance metrics, reduced passenger wait anxiety, and actionable data to resolve carousel congestion.",
      skillsDemonstrated: ["POC Scoping", "Baggage Systems Exposure", "SLA Monitoring Metrics", "Vendor Solution Evaluation"],
      tags: ["Baggage Analytics", "First Bag Last Bag", "Ground Handling SLAs", "Passenger Experience"],
      doodleType: "luggage-doodle"
    },
    {
      id: "digiyatra-biometric-ecosystem",
      title: "DigiYatra & Biometric Passenger Processing",
      badge: "Smart Airport Touchpoints",
      category: "Airport Technology",
      categories: ["Airport Technology", "Infrastructure"],
      status: "Operational Ecosystem Coordination",
      summary: "Coordinating operational readiness, hardware touchpoints, E-gates, and stakeholder workflows for seamless facial recognition passenger entry.",
      context: "DigiYatra is India's flagship biometric digital passenger processing initiative enabling contactless, paperless terminal entry and boarding gate access.",
      operationalChallenge: "Operating a multi-stakeholder ecosystem involving airport IT, central identity infrastructure, airlines, CISF security personnel, biometric camera hardware, and E-gate mechanisms.",
      contribution: "Provided DigiYatra-related operational coordination; supported passenger-processing touchpoints and E-gate enablement; coordinated between airlines, ecosystem partners, and vendors; followed up on technical service issues; supported infrastructure and financial coordination.",
      workingMethod: "Daily operational checks, biometric gate uptime monitoring, multi-stakeholder alignment, technical ticket escalation, hardware readiness reviews.",
      intendedOutcome: "Frictionless terminal entry, shortened curb-to-gate transit times, and enhanced passenger flow through biometric touchpoints.",
      skillsDemonstrated: ["Biometric Systems Coordination", "E-Gate Integration Support", "Multi-Stakeholder Coordination", "High-Availability Support"],
      tags: ["DigiYatra", "Facial Biometrics", "E-Gates", "Contactless Travel", "Passenger Processing"],
      doodleType: "fingerprint-doodle"
    },
    {
      id: "self-baggage-drop-sbd",
      title: "Self-Baggage Drop (SBD) Systems",
      badge: "Passenger Technology",
      category: "Airport Technology",
      categories: ["Airport Technology", "Infrastructure"],
      status: "Terminal Deployment Support",
      summary: "Supporting deployment, passenger adoption, airline alignment, and operational reliability of automated self-baggage drop units.",
      context: "Modernizing terminal check-in halls by transitioning traditional check-in counters into intuitive, high-speed automated self-baggage drop units.",
      operationalChallenge: "Ensuring high hardware availability, conveyor system integration, barcode scanner accuracy, and intuitive UI flow to minimize passenger drop-off time.",
      contribution: "Supported self-baggage-drop deployments; assisted in passenger-processing infrastructure readiness; coordinated with airline station managers; monitored terminal technology readiness and user adoption; supported integration-related operational coordination.",
      workingMethod: "Hardware commissioning verification, airline acceptance checks, passenger flow observation, operational troubleshooting.",
      intendedOutcome: "Reduced check-in hall queuing times, optimized terminal counter space, and an autonomous, empowered passenger experience.",
      skillsDemonstrated: ["Passenger Processing Systems", "Hardware Commissioning", "Airline Coordination", "Terminal Flow Optimization"],
      tags: ["Self-Baggage Drop", "SBD", "Check-In Modernization", "Terminal Infrastructure"],
      doodleType: "box-doodle"
    },
    {
      id: "fso-high-speed-connectivity",
      title: "Free Space Optics (FSO) High-Speed Link Proposal",
      badge: "Next-Gen Connectivity",
      category: "Infrastructure",
      categories: ["Airport Technology", "Infrastructure"],
      status: "Proposal & Approval Stage",
      summary: "Drafting technical and commercial justifications for wireless optical communication links to overcome physical fiber-trenching constraints.",
      context: "Providing high-bandwidth, resilient communication links across critical airport operational facilities where laying physical underground fiber is cost-prohibitive or physically constrained.",
      operationalChallenge: "Trenching physical fiber cables across active apron areas or operational taxiways incurs immense operational disruption and lengthy civil clearance cycles.",
      contribution: "Supported proposal drafting and formal approval documentation; connected the technical optics requirement with operational and future digital bandwidth needs; coordinated procurement and technical implementation requirements.",
      workingMethod: "Technical feasibility analysis, line-of-sight assessment, commercial cost-benefit comparison vs. trenching, NFA documentation.",
      intendedOutcome: "A scalable, ultra-high-speed gigabit optical link between operational buildings with zero tarmac disturbance, subject to final implementation.",
      skillsDemonstrated: ["Telecom Feasibility", "Business Case Justification", "Optical Communication Scoping", "Procurement Documentation"],
      tags: ["Free Space Optics", "FSO", "Wireless Gigabit", "Airport Infrastructure", "Cost Avoidance"],
      doodleType: "wifi-doodle"
    },
    {
      id: "it-operational-automation",
      title: "IT & Operational Workflow Automation",
      badge: "Intelligent Automation",
      category: "Automation",
      categories: ["Automation", "Digital Transformation"],
      status: "Continuous Initiative",
      summary: "Building automated data consolidation pipelines, scheduled executive summaries, and Power Automate workflows to eliminate manual reporting.",
      context: "Multiple departments previously spent cumulative daily hours manually copy-pasting numbers from Excel files and drafting repetitive status emails.",
      operationalChallenge: "Manual reporting is prone to delayed distribution, inconsistent formatting, human calculation errors, and diverts engineers from core system support.",
      contribution: "Automated daily operational reports; created adoption summaries; built automated consolidation of Excel-based operational datasets; set up scheduled performance summaries; reduced repetitive manual reporting; exploring AI and agent-based automation frameworks; utilized Microsoft Power Automate for recurring workflows.",
      workingMethod: "Process automation mapping, data transformation formulas, Power Automate cloud flows, scheduled email triggers, error handling.",
      intendedOutcome: "Eliminated repetitive manual overhead, guaranteed timely distribution of daily operational metrics, and improved data consistency across management reports.",
      skillsDemonstrated: ["Power Automate", "Excel Automation", "Scripting & Data Pipelines", "Workflow Optimization", "Scheduled Reporting"],
      tags: ["Power Automate", "Automated Reporting", "Excel Consolidation", "Productivity Automation"],
      doodleType: "gear-doodle"
    },
    {
      id: "network-infrastructure-refresh",
      title: "Network & Terminal Infrastructure Upgrades",
      badge: "Mission-Critical IT",
      category: "Infrastructure",
      categories: ["Infrastructure", "Airport Technology"],
      status: "Active Operational Support",
      summary: "Supporting technology refreshes, network redundancy, dual-power resilience, and airport-device commissioning across terminal expansions.",
      context: "Ensuring 99.99%+ availability for mission-critical IT infrastructure spanning flight display boards, boarding gates, Wi-Fi access points, and data centres.",
      operationalChallenge: "Upgrades and hardware migrations must be executed without disrupting active airport operations, passenger check-in, or security screening.",
      contribution: "Supported and coordinated technology refresh activities; assisted with screen and display infrastructure (FIDS); supported airport-device commissioning; coordinated network-link upgrades, connectivity redundancy, and dual-power resilience; supported terminal-expansion IT readiness, passenger Wi-Fi support, data-centre availability, and retail shop technology enablement.",
      workingMethod: "Maintenance window coordination, vendor coordination, failover testing, device inventory tracking, cutover checklist execution.",
      intendedOutcome: "Robust terminal connectivity, zero unplanned passenger-facing outages, and seamless IT readiness for ongoing terminal capacity expansions.",
      skillsDemonstrated: ["Network Redundancy", "FIDS Maintenance", "Data Centre Operations", "Hardware Commissioning", "Vendor Follow-Up"],
      tags: ["Network Resilience", "FIDS", "Dual-Power", "Terminal Expansion", "High Availability"],
      doodleType: "network-doodle"
    },
    {
      id: "academic-motion-detection",
      title: "Object Motion Detection & Computer Vision",
      badge: "Academic Project",
      category: "Academic",
      categories: ["Academic", "AI and Analytics"],
      status: "Completed (April 2023)",
      summary: "Computer vision application built using Python and OpenCV for real-time object tracking and motion detection in live video feeds.",
      context: "Undergraduate computer engineering project investigating frame differencing, contour detection, and real-time video processing.",
      operationalChallenge: "Balancing detection accuracy with low-latency processing speeds on standard camera feeds.",
      contribution: "Independently designed and coded the detection pipeline; experimented with background subtraction, morphological transformations, and bounding box algorithms; benchmarked performance across varying lighting conditions; authored technical project documentation.",
      workingMethod: "Python script development, OpenCV library methods, live webcam testing, algorithmic tuning.",
      intendedOutcome: "A responsive motion-tracking tool that laid the theoretical and programming foundation for subsequent airport AI video analytics work.",
      skillsDemonstrated: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Algorithmic Analysis", "Technical Documentation"],
      tags: ["OpenCV", "Python", "Computer Vision", "Motion Tracking", "Academic Foundation"],
      doodleType: "camera-doodle"
    },
    {
      id: "academic-sales-inventory",
      title: "Sales & Inventory Management System",
      badge: "Academic Project",
      category: "Academic",
      categories: ["Academic", "Digital Transformation"],
      status: "Completed (November 2022)",
      summary: "Full-stack inventory and sales tracking web platform featuring role-based authentication, relational schema, and stock alerts.",
      context: "Designing an end-to-end database-backed enterprise web application for small-to-medium retail operations.",
      operationalChallenge: "Ensuring atomic database transactions, preventing stock discrepancies, and designing intuitive CRUD screens for non-technical users.",
      contribution: "Designed normalized relational schema; developed PHP backend logic and MySQL database queries; implemented secure session authentication and role authorization; constructed responsive frontend interfaces; optimized search and reporting queries.",
      workingMethod: "Entity-Relationship (ER) modeling, SQL schema design, PHP MVC patterns, manual unit and integration testing.",
      intendedOutcome: "A stable, secure inventory control web application that solidified practical understanding of transactional databases and web engineering.",
      skillsDemonstrated: ["PHP", "MySQL", "Relational Database Design", "CRUD Operations", "Authentication & Security", "Query Optimization"],
      tags: ["PHP", "MySQL", "RDBMS", "Full-Stack Web", "Inventory Management"],
      doodleType: "database-doodle"
    },
    {
      id: "academic-disk-scheduling",
      title: "Disk Scheduling Algorithm Visualizer",
      badge: "Academic Project",
      category: "Academic",
      categories: ["Academic", "Automation"],
      status: "Completed (May 2022)",
      summary: "Interactive educational web tool visualizing operating system disk head movement algorithms (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK).",
      context: "Operating systems coursework tool designed to help students and engineers compare seek time efficiencies visually.",
      operationalChallenge: "Accurately computing and dynamically animating track seek sequences in an accessible, interactive canvas UI.",
      contribution: "Implemented mathematical logic for all 6 disk scheduling algorithms; engineered interactive visualization using JavaScript and HTML5 Canvas/CSS; designed intuitive controls for custom track request queues and head positions.",
      workingMethod: "Algorithm implementation, graphical chart visualization, interactive DOM manipulation, algorithmic performance comparison.",
      intendedOutcome: "An intuitive visual simulator demonstrating seek time trade-offs, starvation characteristics, and directional traversal efficiency.",
      skillsDemonstrated: ["JavaScript", "HTML5/CSS3", "Algorithm Implementation", "Interactive Data Visualization", "Operating Systems Principles"],
      tags: ["Algorithms", "Operating Systems", "Visualization", "JavaScript", "Educational Tool"],
      doodleType: "disk-doodle"
    }
  ],

  ideasIExplore: [
    {
      title: "AI-Supported Passenger Flow Prediction",
      doodle: "waves",
      description: "Combining flight schedule data, passenger load factors, and historical dwell times to forecast TSA/CISF security queue spikes 45 minutes before they happen."
    },
    {
      title: "Smart Airport Retail & Journey Heatmaps",
      doodle: "map-pin",
      description: "Analyzing anonymous passenger movement patterns in departure lounges to optimize retail concessions, F&B layouts, and maximize non-aeronautical commercial revenues."
    },
    {
      title: "Autonomous Smart Pods & Micro-Rest Spaces",
      doodle: "coffee",
      description: "Self-cleaning, app-reserved private rest and productivity cabins for transit passengers, equipped with flight alert integration and smart climate controls."
    },
    {
      title: "AR-Powered Digital Wayfinding",
      doodle: "navigation",
      description: "Mobile web-based augmented reality navigation guiding passengers from curbside drop-off to their exact boarding gate, lounge, or duty-free store with zero app downloads."
    },
    {
      title: "Smart Trial-Rooms & Augmented Product Discovery",
      doodle: "sparkle",
      description: "Interactive digital mirrors in terminal fashion retail outlets enabling rapid sizing, outfit recommendation, and gate-delivery checkout."
    },
    {
      title: "Dynamic Passenger Engagement & Contextual Alerts",
      doodle: "bell",
      description: "Location-aware, time-sensitive airport alerts notifying passengers of gate changes, baggage belt allocations, and personalized dining offers via WhatsApp or Web."
    },
    {
      title: "AI-Assisted Baggage Anomaly Detection",
      doodle: "package",
      description: "Edge computer vision models at baggage induction belts to identify oversized, damaged, or unreadable baggage tags before bags enter high-speed sorting conveyors."
    },
    {
      title: "Digital Wildlife & Bird Hazard Monitoring",
      doodle: "feather",
      description: "Automated airside radar and thermal camera tracking to log and deter bird flock activity near runway thresholds, replacing manual perimeter patrolling."
    },
    {
      title: "Metaverse & Spatial Airport Previews",
      doodle: "glasses",
      description: "Immersive 3D digital twin previews of terminal architecture, premium lounges, and retail plazas for PR, airline partners, and accessibility planning."
    }
  ],

  skills: {
    categories: [
      {
        name: "Programming & Scripting",
        icon: "terminal",
        items: [
          { name: "Python", context: "Data manipulation, automation scripts, OpenCV experimentation" },
          { name: "JavaScript (ES6+)", context: "Interactive UI logic, frontend applications, visualization" },
          { name: "SQL", context: "Relational database querying, schema design, data extraction" },
          { name: "Java", context: "Object-oriented programming, academic foundation" },
          { name: "PHP", context: "Backend web application development, database integration" },
          { name: "C / C++", context: "Low-level programming, data structures, algorithms" }
        ]
      },
      {
        name: "Frontend & Web Technologies",
        icon: "layout",
        items: [
          { name: "ReactJS", context: "Component-based architecture, state management, modern UI" },
          { name: "Tailwind CSS", context: "Utility-first responsive design, modern design systems" },
          { name: "HTML5 & CSS3", context: "Semantic web architecture, accessible markup, animations" },
          { name: "Node.js (Basics)", context: "Runtime environment, package management, tooling" },
          { name: "Bootstrap", context: "Rapid prototyping, grid systems, responsive layouts" }
        ]
      },
      {
        name: "Data, AI & Computer Vision",
        icon: "cpu",
        items: [
          { name: "OpenCV", context: "Image processing, motion tracking, frame analysis" },
          { name: "Pandas & NumPy", context: "Operational dataset manipulation and numerical analysis" },
          { name: "MySQL & MongoDB", context: "Relational and document database management" },
          { name: "Operational Analytics", context: "Airport KPI tracking, throughput metrics, dashboards" },
          { name: "AI Video Analytics", context: "Queue monitoring, heatmap definition, perimeter alerts" }
        ]
      },
      {
        name: "Airport Technologies & Systems",
        icon: "plane",
        items: [
          { name: "Flight Information Display (FIDS)", context: "Display infrastructure, layout validation, operational uptime" },
          { name: "DigiYatra Ecosystem", context: "Biometric touchpoint coordination, E-gate operational flow" },
          { name: "Self-Baggage Drop (SBD)", context: "Terminal readiness, airline alignment, passenger adoption" },
          { name: "Airport Operations Centre (APOC)", context: "Operational KPI dependencies, centralized situational awareness" },
          { name: "Terminal IT Infrastructure", context: "Redundant connectivity, data centre availability, dual-power" }
        ]
      },
      {
        name: "Enterprise Workflows & Finance",
        icon: "briefcase",
        items: [
          { name: "SAP Procurement Workflows", context: "PR creation, PO tracking, vendor-code coordination" },
          { name: "IT Budgeting (CAPEX & OPEX)", context: "Capital planning, operating expenses, business case formulation" },
          { name: "Note for Approval (NFA)", context: "Structured justification documents for management clearance" },
          { name: "Invoice & Scope Validation", context: "Service-entry tracking, quotation review, contract compliance" },
          { name: "Power Automate", context: "Automating scheduled operational reports and data consolidation" }
        ]
      }
    ],

    businessCapabilities: [
      "Requirement Gathering & Scoping",
      "Business-to-Technology Translation",
      "Cross-Functional Coordination",
      "Vendor & Partner Management",
      "Proof of Concept (POC) Management",
      "User Acceptance Testing (UAT)",
      "Project & NFA Documentation",
      "Executive Management Presentations",
      "Operational Problem-Solving",
      "CAPEX & OPEX Budgeting",
      "SAP Procurement Coordination",
      "SLA & Contract Verification",
      "Digital Adoption Tracking",
      "Process Automation Identification",
      "Incident Escalation & Tracking",
      "Passenger Experience (PAX) Thinking",
      "Commercial & Non-Aero Awareness",
      "High-Availability IT Operations"
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Pandit Deendayal Energy University (formerly PDPU)",
      location: "Gandhinagar, Gujarat, India",
      period: "Sep 2020 – Jun 2024",
      grade: "GPA: 8.66 / 10",
      description: "Graduated with distinction. Comprehensive coursework spanning algorithms, system architecture, database design, computer vision, machine learning, and computer networks."
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Class XII",
      institution: "Nalanda Vidhyalaya",
      location: "Surat, Gujarat, India",
      period: "May 2018 – May 2020",
      grade: "Score: 89%",
      description: "Science Stream with specialization in Physics, Chemistry, and Mathematics (PCM)."
    }
  ],

  leadership: [
    {
      role: "General Secretary",
      organization: "The Network Club",
      period: "Jan 2022",
      contribution: "Supported organizing a flagship two-day collegiate symposium hosting business leaders and industry speakers. Facilitated speaker coordination, event planning, attendee communication, and execution logistics.",
      takeaway: "Fostered early cross-functional coordination, event execution, and stakeholder communication under strict timelines."
    },
    {
      role: "Event Management Head",
      organization: "Science and Technical Committee",
      period: "Nov 2022",
      contribution: "Played a key role in coordinating a major inter-college technology festival, liaising with more than 20 student technical clubs, aligning schedules, and managing live technical sessions.",
      takeaway: "Demonstrated team ownership, proactive logistics management, and conflict resolution across diverse student groups."
    }
  ],

  privacyNotice: {
    message: "This portfolio displays strictly public, non-confidential professional information adhering to strict aviation security, cybersecurity, and enterprise privacy protocols.",
    verificationItems: [
      { item: "LinkedIn Profile URL", status: "Verified & Connected", action: "Completed" },
      { item: "GitHub Profile URL", status: "Verified & Active", action: "Completed" },
      { item: "Printable Resume", status: "Ready (resume.html built-in)", action: "Completed" },
      { item: "Profile Photo", status: "assets/profile.jpg (fallback enabled)", action: "Ready for photo drop" },
      { item: "Commercial/Financial Numbers", status: "Protected", action: "Never displayed" },
      { item: "Employee ID / Personal Phone", status: "Protected", action: "Private" },
      { item: "Internal System Screenshots", status: "Protected / Doodle representations used", action: "Strict compliance" }
    ]
  }
};

// Export for browser environment
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
