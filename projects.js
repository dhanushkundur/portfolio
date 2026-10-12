/* =====================================================================
   SITE CONTENT: this is the only file you need to edit.
   ---------------------------------------------------------------------
   HOW TO EDIT
   - Change any text between the quotes. Keep the quotes and the commas.
   - If your text has an apostrophe (like don't), that's fine because
     everything here uses double quotes " ".
   - If your text needs a double quote, write it as \" instead.

   HOW TO ADD A PHOTO
   1. Upload the photo on github.com into the project's folder,
      for example img/atlas/
   2. Add a line to that project's "gallery" list:
        { src: "img/atlas/my-photo.jpg", caption: "What the photo shows" },

   HOW TO ADD A VIDEO
   1. Upload it to YouTube as Unlisted.
   2. Copy the ID: the part after "v=" in the link, or after "youtu.be/".
      Example: youtu.be/dQw4w9WgXcQ  ->  the ID is  dQw4w9WgXcQ
   3. Paste it into the project's  video: ""  line.
      For a Shorts link (youtube.com/shorts/XXXX) the ID is the XXXX part.
      If the video was filmed tall on a phone, also set  verticalVideo: true

   HOW TO ADD A NEW PROJECT
   Copy one whole project block (from its { to its matching },
   including the comma), paste it below the others, give it a new
   "id" (lowercase, dashes, no spaces) and change the text.
   Its page will be at  project.html?id=your-id  automatically.
   ===================================================================== */

const SITE = {
  name: "Dhanush Kundur",
  role: "Mechanical Engineering @ Ohio State",
  focus: "Robotics · Autonomy · Mechatronics",
  intro:
        "Mechanical engineering student at Ohio State working on drones, robotics, and autonomous systems. I like building things end to end, from CAD and fabrication to wiring and code. Looking for Summer 2027 internships in robotics, autonomy, and aerospace.",
  facts: ["B.S. Mechanical Engineering, May 2029", "Minor: Robotics & Autonomous Systems", "U.S. Citizen", "Columbus, OH · Ashburn, VA"],
  email: "dhanushkundur@gmail.com",
  github: "https://github.com/dhanushkundur",
  linkedin: "https://www.linkedin.com/in/dhanush-kundur",
  resume: "resume.pdf",
};

/* Experience shown on the home page (newest first) */
const EXPERIENCE = [
  {
    title: "Undergraduate Researcher, SOAR Lab",
    org: "The Ohio State University",
    dates: "Aug 2026 - Present",
    text: "Building and flight-testing UAV platforms for the lab's control and autonomy research (Pixhawk Cube Orange, PX4, NVIDIA Jetson).",
  },
  {
    title: "Chassis Subteam Member, Baja SAE",
    org: "Ohio State Baja SAE",
    dates: "Aug 2026 - Present",
    text: "Designing the chassis weld jig in SolidWorks and fabricating chassis parts: tube notching, fixturing, and welding.",
  },
  {
    title: "Code Coach",
    org: "The Coder School",
    dates: "May 2024 - Aug 2025",
    text: "Coached 10+ students a week (ages 7 to 17) in Python and Java with custom lesson plans.",
  },
  {
    title: "Assistant Researcher",
    org: "MyEdMaster",
    dates: "Jan 2022 - Mar 2022",
    text: "Co-developed a Python NLP pipeline on COVID-19 data; co-authored a paper published in IJSSER (2022).",
  },
];

/* Skills shown on the home page */
const SKILLS = [
  { group: "CAD & Analysis", items: ["SolidWorks", "Onshape", "Fusion 360", "ANSYS (FEA)", "GD&T fundamentals", "Engineering drawings"] },
  { group: "Manufacturing & Test", items: ["FDM 3D printing (PETG/PLA)", "Tube notching", "Fixturing", "Welding", "Soldering", "Bench & flight testing"] },
  { group: "Electronics & Embedded", items: ["Arduino", "ArduPilot", "PX4", "Mission Planner", "I2C", "PWM", "Oscilloscope", "Multimeter"] },
  { group: "Programming", items: ["Python", "pymavlink", "OpenCV", "C++ (Arduino)", "MATLAB", "Java", "Git/GitHub", "Linux"] },
];

/* ===================== PROJECTS (shown in this order) ===================== */
const PROJECTS = [
  /* ------------------------------------------------------------------ */
  {
    id: "atlas",
    title: "ATLAS",
    subtitle: "Autonomous Tracking and Landing Aerial System",
    tagline: "A 5-inch autonomous quadcopter I designed, built, and flew from the component level up.",
    status: "Flying · In progress",
    dates: "May 2026 - Present",
    role: "Solo · mechanical, electrical, and software",
    tags: ["ArduPilot", "Python", "MAVLink", "OpenCV", "Onshape", "PETG"],
    cover: "img/atlas/cover.jpg",
    video: "aUXbtKdd3sc", // YouTube ID of the flight video
    verticalVideo: true, // true for YouTube Shorts / phone videos filmed tall
    links: [{ label: "Code on GitHub", url: "https://github.com/dhanushkundur/ATLAS-Autonomous-Tracking-and-Landing-Aerial-System-" }],
    stats: [
      { value: "5 in", label: "class quadcopter" },
      { value: "4S", label: "LiPo power" },
      { value: "SITL", label: "tested autonomy" },
      { value: "Stable", label: "flight achieved" },
    ],
    sections: [
      {
        heading: "Overview",
        text: [
          "ATLAS is my own drone, built from parts instead of a kit. I picked every component, designed and printed the frame, soldered the electronics, set up the flight controller, and wrote the autonomy code. The goal is a drone that can fly itself to a target, track it with a camera, and land.",
          "It is flying stable now under ArduPilot. The next step is taking the autonomy scripts that already work in simulation and testing them on the real aircraft.",
        ],
      },
      {
        heading: "Frame",
        text: [
          "The frame is a single printed PETG center piece with carbon-fiber tube arms and heat-set inserts for every screw, designed in Onshape and printed on a Bambu Lab A1. I went through several print revisions trading off stiffness, weight, and how easy it is to fix after a crash.",
          "After a crash I redesigned it as two pieces with a removable top plate, so I can get to the electronics without taking the whole drone apart.",
        ],
      },
      {
        heading: "Electronics",
        list: [
          "Flight controller: Corvon H743 running ArduCopter",
          "ESC: Corvon 50A 4-in-1 with Bluejay firmware, DShot300",
          "Motors: Emax ECO II 2207 2400KV on 4S",
          "Props: HQProp 5x4.3x3 tri-blade",
          "GPS: Corvon M10 with an external QMC5883L compass",
          "Radio: ELRS (BetaFPV LiteRadio 3 transmitter, RadioMaster RP3 receiver)",
        ],
        text: ["I soldered and wired everything myself, mapped the receiver to its own serial port, and tuned the PID gains until it held a steady hover."],
      },
      {
        heading: "The hardest bug",
        text: [
          "On takeoff the drone kept flipping itself upside down. Instead of swapping parts and hoping, I went through the ArduPilot telemetry logs and traced it to an attitude-axis setting that was inverted, so the controller was correcting in the wrong direction. Fixing that one setting gave me stable flight.",
          "I also found out the hard way that DShot600 doesn't work with Bluejay on this ESC, so it runs DShot300.",
        ],
      },
      {
        heading: "Autonomy software",
        text: [
          "I wrote a Python library on top of MAVLink (pymavlink) that handles takeoff, GPS waypoint navigation, and return-to-launch, plus an OpenCV module for tracking a target with the camera. All of it runs in ArduPilot SITL (software-in-the-loop simulation) first, so I can catch bugs on my laptop before they cost me a crash.",
        ],
      },
    ],
    gallery: [
      { src: "img/atlas/cover.jpg", caption: "Finished build, powered on" },
      { src: "img/atlas/side-lit.jpg", caption: "Side profile" },
      { src: "img/atlas/top-outdoor.jpg", caption: "Top view: GPS module, 4S battery, and power wiring" },
      { src: "img/atlas/side-stack.jpg", caption: "Flight controller and ESC stack between the frame plates, Emax 2207 motors" },
      { src: "img/atlas/top-lit.jpg", caption: "Top view with carbon-fiber arms" },
      { src: "img/atlas/early-build.jpg", caption: "Earlier version of the build" },
      // Add a flight photo or CAD screenshot here when you have one
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "todo-board",
    title: "Dorm To-Do Board",
    subtitle: "ME 2900 Prototype Project",
    tagline: "A desk-mounted Arduino to-do list with a clock, a scroll knob, and a flag that pops up when you finish everything.",
    status: "Completed",
    dates: "Sep 2026 - Oct 2026",
    role: "Solo · design, wiring, code, enclosure",
    tags: ["Arduino", "C++", "I2C", "EEPROM", "SolidWorks"],
    cover: "img/todo-board/cover.jpg",
    video: "Gys1TPMcEvs", // YouTube ID of the demo video
    verticalVideo: true,
    links: [],
    stats: [
      { value: "6", label: "components in one system" },
      { value: "8", label: "tasks saved through power loss" },
      { value: "12 AM", label: "automatic daily reset" },
    ],
    sections: [
      {
        heading: "Overview",
        text: [
          "I kept forgetting small stuff in my dorm like laundry and taking out the trash, so I built a to-do board that sits on my desk. It shows the time and how many tasks are left. Turning the knob scrolls the list, pressing it checks a task off, and holding it deletes one.",
          "When there are tasks left the LED is red. When everything is done the LED turns green, the buzzer plays a short tune, and a servo raises a flag on top of the box. At midnight everything unchecks itself so it's ready for the next day.",
        ],
      },
      {
        heading: "Hardware",
        list: [
          "Arduino Uno R3",
          "16x2 LCD in 4-bit mode with a contrast potentiometer",
          "KY-040 rotary encoder (scroll + push button)",
          "DS1307 real-time clock over I2C",
          "SG90 servo for the done flag",
          "RGB LED and passive buzzer for feedback",
          "Separate 5V power module for the servo",
        ],
      },
      {
        heading: "How the code works",
        text: [
          "The program is a simple state machine with three screens: the clock, the task list, and the add-task menu. The loop never uses long delays, so the clock keeps updating and the knob always responds. The list is saved to EEPROM every time something changes, so unplugging the board doesn't wipe it, and the real-time clock lets it know when a new day starts.",
        ],
      },
      {
        heading: "Problems I had to fix",
        text: [
          "The biggest one: every time the servo moved, the LCD flickered and sometimes reset. The servo was pulling too much current off the same 5V rail as everything else. I moved it onto its own power module, but it still happened, and it turned out the two power rails were still bridged on the breadboard. Testing each rail with only the battery connected is how I found it.",
          "Later the whole screen went blank after I moved the clock module. I unplugged the I2C wires one at a time to narrow it down and found the clock's power was on the wrong rail, which froze the program. A weak 9V battery also made the servo only twitch, so I switched to a wall adapter.",
        ],
      },
      {
        heading: "Enclosure",
        text: [
          "I designed the enclosure in SolidWorks first, with cutouts for the LCD, the knob, and the LED. With the deadline coming I built the real one out of cardboard using the same layout, with the servo and flag mounted on top.",
        ],
      },
    ],
    gallery: [
      { src: "img/todo-board/front-panel.jpg", caption: "Finished front panel" },
      { src: "img/todo-board/cover.jpg", caption: "All tasks done: green LED and flag up" },
      { src: "img/todo-board/red-led.jpg", caption: "Tasks left: red LED" },
      { src: "img/todo-board/inside-labeled.jpg", caption: "Inside the enclosure, labeled" },
      { src: "img/todo-board/schematic.jpg", caption: "Circuit schematic" },
      { src: "img/todo-board/solidworks-panel.jpg", caption: "Front panel designed in SolidWorks" },
      { src: "img/todo-board/all-done.jpg", caption: "Clock screen after finishing the list" },
      { src: "img/todo-board/lcd-breadboard.jpg", caption: "Breadboard prototype" },
      { src: "img/todo-board/top-down.jpg", caption: "Full circuit before the enclosure" },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "construction-cart",
    title: "All-Terrain Construction Cart",
    subtitle: "ENGR 1182 · Ohio State",
    tagline: "A motor-assisted cart that helps construction workers move heavy material over rough ground.",
    status: "Completed",
    dates: "Jan 2026 - May 2026",
    role: "Design lead · 4-person team",
    tags: ["Onshape", "Pugh matrix", "3D printing", "Prototyping"],
    cover: "cadcart.png",
    video: "",
    links: [],
    stats: [
      { value: "200K+", label: "construction lifting injuries a year" },
      { value: "$11.5B", label: "yearly cost of those injuries" },
      { value: "20 lb", label: "prototype load over rough terrain" },
    ],
    sections: [
      {
        heading: "Overview",
        text: [
          "Lifting and hauling material by hand causes over 200,000 construction injuries a year. Our team designed a motor-assisted, all-terrain cart to take some of that load off them, and I led the design.",
        ],
      },
      {
        heading: "Process",
        list: [
          "User research and personas to figure out what workers actually need",
          "Pairwise comparison to weight the requirements",
          "Pugh matrix to pick a wagon-style concept",
          "Onshape CAD of the frame, treaded wheels, mechanical brake, and assist-handle motor",
          "Working drawings for the build",
          "Scale prototype in 3D-printed PLA and plywood",
          "Verification scorecard and an investor-style design review",
        ],
      },
      {
        heading: "Result",
        text: [
          "We built and tested a working scale prototype, changing the frame and load layout until it could reliably carry 20 lb over uneven ground.",
        ],
      },
    ],
    gallery: [{ src: "cadcart.png", caption: "Scale prototype" }],
  },

  /* ------------------------------------------------------------------ */
  {
    id: "combination-lock",
    title: "Combination Lock Mechanism",
    subtitle: "CAD assembly · Ohio State",
    tagline: "A working combination lock modeled and animated in Onshape.",
    status: "Completed",
    dates: "Spring 2026",
    role: "Solo",
    tags: ["Onshape", "Assemblies", "Mates"],
    cover: "img/lock/cover.jpg",
    video: "",
    links: [],
    stats: [],
    sections: [
      {
        heading: "Overview",
        text: [
          "A digital combination lock built as a full Onshape assembly. The parts move the way the real mechanism would, using pin-slot, fasten, and parallel mates, with limits on how far the slides can travel.",
        ],
      },
    ],
    gallery: [
      // { src: "img/lock/cover.jpg", caption: "Lock assembly in Onshape" },
    ],
  },
];
