export type LocaleString = {
  en: string;
  am?: string;
};

export type Service = {
  title: LocaleString;
  description: LocaleString;
  highlights: LocaleString[];
};

export type OpeningHours = {
  label: LocaleString;
  hours: string;
};

export type PricingPlan = {
  name: LocaleString;
  priceNote: LocaleString;
  description: LocaleString;
  includes: LocaleString[];
  highlight?: boolean;
};

export const site = {
  brand: {
    name: {
      en: "AK Gym 26",
      am: "ኤኬ ጂም",
    },
    tagline: {
      en: "Strength. Discipline. Transformation.",
      am: "ኃይል፣ ስነ-ሥርዓት፣ ለውጥ",
    },
  },
  location: {
    city: "Addis Ababa",
    area: {
      en: "Kara",
      am: "ካራ",
    },
    fullAddress: {
      en: "Kara, Addis Ababa",
      am: "ካራ፣ አዲስ አበባ",
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Kara%2C%20Addis%20Ababa&output=embed",
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kara%2C%20Addis%20Ababa",
  },
  contact: {
    phoneDisplay: "+251 95 545 9624",
    phoneE164: "+251955459624",
    instagramUrl: "https://instagram.com/akgym26",
  },
  hours: {
    title: {
      en: "Opening Hours",
      am: "የመክፈቻ ሰዓታት",
    },
    schedule: [
      {
        label: { en: "Saturday", am: "ቅዳሜ" },
        hours: "7:00 AM – 9:00 PM",
      },
      {
        label: { en: "Sunday", am: "እሁድ" },
        hours: "7:00 AM – 10:00 AM",
      },
      {
        label: { en: "Monday – Friday", am: "ሰኞ – አርብ" },
        hours: "7:00 AM – 9:00 PM",
      },
    ] satisfies OpeningHours[],
  },
  nav: [
    { href: "/", label: { en: "Home", am: "መነሻ" } },
    { href: "/about", label: { en: "About", am: "ስለ እኛ" } },
    { href: "/services", label: { en: "Programs", am: "ፕሮግራሞች" } },
    { href: "/pricing", label: { en: "Pricing", am: "ዋጋ" } },
    { href: "/hours", label: { en: "Hours", am: "ሰዓታት" } },
    { href: "/contact", label: { en: "Contact", am: "አግኙን" } },
  ],
  ctas: {
    primary: { en: "Join Now", am: "ዛሬ ይጀምሩ" },
    secondary: { en: "Contact Us", am: "አግኙን" },
    call: { en: "Call", am: "ደውሉ" },
    directions: { en: "Get Directions", am: "መንገድ ያግኙ" },
  },
  home: {
    hero: {
      headline: {
        en: "Build real strength. Train with discipline.",
        am: "እውነተኛ ኃይል ይገንቡ፤ በስነ-ሥርዓት ይለማመዱ።",
      },
      subheadline: {
        en: "A premium, focused gym experience in Kara, Addis Ababa—designed for results, consistency, and confidence.",
        am: "በካራ አዲስ አበባ ውስጥ ውጤት የሚያመጣ የጂም ልምድ—ለቋሚነትና ለራስ መተማመን የተሠራ።",
      },
      proof: [
        {
          label: { en: "Coached Programs", am: "በአሰልጣኞች እጅ" },
          value: { en: "Structured", am: "የተዋቀሩ" },
        },
        {
          label: { en: "Training Focus", am: "ትኩረት" },
          value: { en: "Results", am: "ውጤት" },
        },
        {
          label: { en: "Community", am: "ማህበረሰብ" },
          value: { en: "Motivation", am: "ተነሳሽነት" },
        },
      ],
    },
    intro: {
      title: { en: "Train for the life you want.", am: "ለሚፈልጉት ሕይወት ይለማመዱ።" },
      body: {
        en: "AK Gym 26 is a modern fitness center built around consistency: smart programming, supportive coaching, and a clean space that keeps you coming back.",
        am: "AK Gym 26 ቋሚነትን በመሰረት ያደረገ ዘመናዊ የአካል ብቃት ማዕከል ነው—ተመጣጣኝ ፕሮግራሞች፣ የሚደግፍ አሰልጣኝ እና ንጹህ ቦታ።",
      },
    },
    cta: {
      title: {
        en: "Affordable. Accessible. Built for results.",
        am: "ተመጣጣኝ፣ ቀላል መዳረሻ፣ ውጤት ያመጣ",
      },
      body: {
        en: "Whether you’re starting from scratch or leveling up, we’ll help you stay consistent and see progress.",
        am: "ከዜሮ ቢጀምሩም ሆነ ደረጃ ማሳደግ ቢፈልጉ፣ ቋሚ እንዲሆኑና እድገት እንዲያዩ እንረዳዎታለን።",
      },
    },
  },
  about: {
    title: { en: "About AK Gym 26", am: "ስለ AK Gym 26" },
    intro: {
      en: "We’re here to help you train with purpose—strength, conditioning, and confidence—inside a premium space in Kara, Addis Ababa.",
      am: "በካራ አዲስ አበባ ውስጥ በተሻለ ቦታ ውስጥ በዓላማ ይለማመዱ እንዲችሉ እናግዛለን—ኃይል፣ ኮንዲሽኒንግ፣ ራስ መተማመን።",
    },
    mission: {
      title: { en: "Mission", am: "ተልዕኮ" },
      body: {
        en: "Deliver a focused training environment that makes consistency easy and transformation inevitable.",
        am: "ቋሚነትን ቀላል የሚያደርግ እና ለውጥን የሚያፋጥን የስልጠና አካባቢ ማቅረብ።",
      },
    },
    values: {
      title: { en: "Values", am: "እሴቶቻችን" },
      items: [
        {
          en: "Discipline over hype — progress comes from showing up.",
          am: "በተነሳሽ ቃላት ሳይሆን በስነ-ሥርዓት — እድገት በመገኘት ይመጣል።",
        },
        {
          en: "Coaching that meets you where you are.",
          am: "የእርስዎን ደረጃ የሚገባ መመሪያ።",
        },
        {
          en: "A clean, respectful space for everyone.",
          am: "ለሁሉም ንጹህ እና አክባሪ ቦታ።",
        },
      ],
    },
  },
  services: {
    title: { en: "Services & Programs", am: "አገልግሎቶች & ፕሮግራሞች" },
    intro: {
      en: "Choose a training path that fits your goals. Every program is designed for progress, safety, and consistency.",
      am: "የሚመችዎትን የስልጠና መንገድ ይምረጡ፤ እያንዳንዱ ፕሮግራም ለእድገት፣ ለደህንነት እና ለቋሚነት የተነደፈ ነው።",
    },
    list: [
      {
        title: { en: "Strength Training", am: "የኃይል ስልጠና" },
        description: {
          en: "Build muscle and power with progressive overload, smart technique, and structured sessions.",
          am: "በትክክለኛ ቴክኒክ እና ተደራሽ ፕሮግሬሽን ጡንቻና ኃይል ይገንቡ።",
        },
        highlights: [
          { en: "Beginner-friendly progressions", am: "ለጀማሪ የሚመች" },
          { en: "Technique-first coaching", am: "ቴክኒክ በመጀመሪያ" },
          { en: "Full-body & split routines", am: "ፉል-ቦዲ እና ስፕሊት" },
        ],
      },
      {
        title: { en: "Cardio Training", am: "ካርዲዮ" },
        description: {
          en: "Improve endurance and heart health with sustainable, goal-based cardio sessions.",
          am: "የልብ ጤናን እና የመቋቋም ኃይልን በቀጣይ ካርዲዮ ያሻሽሉ።",
        },
        highlights: [
          { en: "Fat-loss supportive", am: "ለቅብ መቀነስ ይረዳ" },
          { en: "Low-impact options", am: "ዝቅተኛ ጫና" },
          { en: "Intervals & steady-state", am: "ኢንተርቫል እና ስቴዲ" },
        ],
      },
      {
        title: { en: "Weight Loss Programs", am: "የክብደት መቀነስ" },
        description: {
          en: "A balanced approach: training plans + habit coaching to help you stay consistent.",
          am: "ተመጣጣኝ መንገድ—የስልጠና እቅድ እና የልማድ መመሪያ ለቋሚነት።",
        },
        highlights: [
          { en: "Structured weekly plan", am: "ሳምንታዊ እቅድ" },
          { en: "Progress tracking", am: "እድገት መከታተል" },
          { en: "Sustainable intensity", am: "ቀጣይ ጥረት" },
        ],
      },
      {
        title: { en: "Personal Training", am: "ግል ስልጠና" },
        description: {
          en: "One-on-one coaching tailored to your body, your schedule, and your goals.",
          am: "ለሰውነትዎ፣ ለጊዜዎ እና ለግብዎ የተስማማ የ1-ለ-1 መመሪያ።",
        },
        highlights: [
          { en: "Goal-based programming", am: "በግብ የተመሠረተ" },
          { en: "Form correction", am: "ፎርም ማስተካከል" },
          { en: "Accountability", am: "ተጠያቂነት" },
        ],
      },
      {
        title: { en: "General Fitness", am: "አጠቃላይ ብቃት" },
        description: {
          en: "For everyday strength and energy—mobility, conditioning, and foundational training.",
          am: "ለዕለታዊ ኃይልና ኃይለኛ እንቅስቃሴ—ሞቢሊቲ፣ ኮንዲሽኒንግ እና መሠረታዊ ስልጠና።",
        },
        highlights: [
          { en: "Mobility & core", am: "ሞቢሊቲ እና ኮር" },
          { en: "Beginner onboarding", am: "ለጀማሪ መጀመር" },
          { en: "Balanced routines", am: "ተመጣጣኝ ስርዓት" },
        ],
      },
    ] satisfies Service[],
  },
  pricing: {
    title: { en: "Pricing & Membership", am: "ዋጋ & አባልነት" },
    intro: {
      en: "Simple options, flexible access. For current rates and promotions, call us or message on Instagram.",
      am: "ቀላል ምርጫዎች፣ ተለዋዋጭ መዳረሻ። የዛሬ ዋጋ እና ፕሮሞሽን ለማወቅ ደውሉ ወይም በኢንስታግራም ይላኩ።",
    },
    plans: [
      {
        name: { en: "Day Pass", am: "የቀን መግቢያ" },
        priceNote: { en: "Contact for today’s price", am: "የዛሬ ዋጋ ይጠይቁ" },
        description: {
          en: "Perfect for first-time visitors or drop-in training.",
          am: "ለመጀመሪያ ጊዜ የሚመጡ ወይም አንድ ቀን ብቻ ለሚለማመዱ።",
        },
        includes: [
          { en: "Full gym access for the day", am: "ሙሉ የጂም መዳረሻ" },
          { en: "Program guidance (on request)", am: "መመሪያ (በጥያቄ)" },
          { en: "Great way to try AK Gym 26", am: "AK Gym 26 ለመሞከር ተስማሚ" },
        ],
      },
      {
        name: { en: "Monthly Membership", am: "ወርሃዊ አባልነት" },
        priceNote: { en: "Best value", am: "ከፍተኛ ዋጋ-ጥቅም" },
        description: {
          en: "Build consistency with ongoing access and structured training.",
          am: "ቋሚነት ለመገንባት ቀጣይ መዳረሻ እና የተዋቀሩ ስልጠናዎች።",
        },
        includes: [
          { en: "Ongoing gym access", am: "ቀጣይ የጂም መዳረሻ" },
          { en: "Goal-based program suggestions", am: "በግብ የተመሠረተ እቅድ" },
          { en: "Progress check-ins", am: "እድገት መከታተል" },
        ],
        highlight: true,
      },
      {
        name: { en: "Personal Training", am: "ግል ስልጠና" },
        priceNote: { en: "Packages available", am: "ፓኬጆች አሉ" },
        description: {
          en: "1:1 coaching for faster progress, better form, and accountability.",
          am: "ለፈጣን እድገት፣ ትክክለኛ ፎርም እና ተጠያቂነት የ1-ለ-1 መመሪያ።",
        },
        includes: [
          { en: "Assessment + plan", am: "ግምገማ + እቅድ" },
          { en: "Technique correction", am: "ቴክኒክ ማስተካከል" },
          { en: "Schedule-based sessions", am: "በጊዜ ስርዓት ስብሰባ" },
        ],
      },
    ] satisfies PricingPlan[],
    signup: {
      title: { en: "Membership signup", am: "የአባልነት መመዝገብ" },
      body: {
        en: "Ready to start? Choose a plan and send us a quick message, or call now. We’ll confirm the best program for your goal.",
        am: "መጀመር ትፈልጋላችሁ? እቅድ ይምረጡ እና አጭር መልዕክት ይላኩ፣ ወይም ደውሉ። ለግብዎ የሚስተካከል ፕሮግራም እንመክራለን።",
      },
      steps: [
        {
          en: "Pick your plan (or tell us your goal).",
          am: "እቅድ ይምረጡ (ወይም ግብዎን ይንገሩን)።",
        },
        {
          en: "Call or message us on Instagram to confirm current price and availability.",
          am: "የዛሬ ዋጋ እና ቦታ ለማረጋገጥ ደውሉ ወይም በኢንስታግራም ይላኩ።",
        },
        {
          en: "Visit the gym in Kara, Addis Ababa and start training.",
          am: "በካራ አዲስ አበባ ያለውን ጂም ይጎብኙ እና ስልጠና ይጀምሩ።",
        },
      ],
    },
    faq: {
      title: { en: "FAQ", am: "ተደጋጋሚ ጥያቄዎች" },
      items: [
        {
          q: { en: "Do you offer affordable memberships?", am: "ተመጣጣኝ አባልነት አለ?" },
          a: {
            en: "Yes — we keep options accessible. Call us for the current rates and any promotions.",
            am: "አዎ—አማራጮችን ተመጣጣኝ እንዲሆኑ እናደርጋለን። የዛሬ ዋጋ እና ፕሮሞሽን ለማወቅ ደውሉ።",
          },
        },
        {
          q: { en: "Can beginners join?", am: "ጀማሪዎች መቀላቀል ይችላሉ?" },
          a: {
            en: "Absolutely. We’ll help you get started with a simple plan and technique guidance.",
            am: "በእርግጥ። ቀላል እቅድ እና ቴክኒክ መመሪያ እንሰጣለን።",
          },
        },
      ],
    },
  },
  contactPage: {
    title: { en: "Contact", am: "አግኙን" },
    intro: {
      en: "Visit us in Kara, Addis Ababa. Call for details or message us on Instagram.",
      am: "በካራ አዲስ አበባ ይጎብኙን፤ ለመረጃ ደውሉ ወይም በኢንስታግራም ይላኩ።",
    },
  },
} as const;
