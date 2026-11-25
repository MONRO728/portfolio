// Shaxsiy portfolio ma'lumotlari to'plami
// O'zgartirishlar kiritish juda qulay qilib tuzilgan.

export const PROFILE_DATA = {
  name: "Islomjonov Foziljon",
  nickname: "islomDev",
  role: "Axborot texnologiyalari talabasi & Dasturchi",
  bio: "Universitetda axborot texnologiyalari va dasturiy injiniring yo'nalishi bo'yicha tahsil olayotgan intiluvchan talabaman. Nazariy bilimlarni mustahkam amaliyot bilan birlashtirib, zamonaviy veb-texnologiyalar, avtomatlashtirish va sun'iy intellekt vositalaridan foydalangan holda muammolarga yechim yaratishga qiziqaman.",
  university: "Universitet talabasi",
  location: "O'zbekiston",
  status: "O'qish va amaliy izlanish jarayonida",
  github: "https://github.com/MONRO728",
  email: "foziljon.islomjonov@gmail.com",
  telegram: "https://t.me/f0z1l_2005",
  instagram: "https://instagram.com/f0z1l_2005",
  stats: [
    { label: "GitHub Repozitoriylar", value: "6+" },
    { label: "O'rganilgan texnologiyalar", value: "8+" },
    { label: "O'quv dalillari", value: "6 ta" },
    { label: "Amaliy topshiriqlar", value: "100%" }
  ]
};

export const GOALS_DATA = [
  {
    title: "Ta'limiy maqsadlar",
    description: "Universitet dasturi doirasidagi barcha modullarni a'lo baholarga o'zlashtirish, kompyuter ilmlari fundamentini chuqur o'rganish va o'quv tadqiqotlarida faol qatnashish.",
    icon: "GraduationCap"
  },
  {
    title: "Kasbiy va amaliy maqsadlar",
    description: "Zamonaviy veb-ekotizimda (React, Node.js, Python) to'liq ishlaydigan amaliy loyihalar yaratish, jamoaviy loyihalarda tajriba orttirish va Open Source loyihalarga hissa qo'shish.",
    icon: "Target"
  },
  {
    title: "Kelgusi rejalar",
    description: "Sun'iy intellekt algoritmlarini amaliy dasturlarga integratsiya qilish, cloud platformalarda (Vercel, Docker) deploy qilish va professional sertifikatlarga ega bo'lish.",
    icon: "Rocket"
  }
];

export const SKILLS_DATA = [
  {
    name: "Web dasturlash",
    category: "Frontend",
    level: "Yaxshi",
    percent: 80,
    description: "Zamonaviy veb-ilovalar ishlab chiqish, moslashuvchan (responsive) interfeyslar yaratish."
  },
  {
    name: "Python",
    category: "Dasturlash tili",
    level: "O'rta",
    percent: 75,
    description: "Skriptlar yozish, ma'lumotlar bilan ishlash, mantiqiy algoritmlar va sun'iy intellekt laboratoriyalari."
  },
  {
    name: "HTML va CSS",
    category: "Asosiy",
    level: "Yuqori",
    percent: 90,
    description: "Semantik tuzilma, zamonaviy CSS Grid/Flexbox, Tailwind CSS bilan tezkor stilizatsiya."
  },
  {
    name: "JavaScript",
    category: "Dasturlash tili",
    level: "Yaxshi",
    percent: 78,
    description: "ES6+ sintaksisi, asinxron dasturlash (Async/Await, Promises), DOM manipulyatsiyasi."
  },
  {
    name: "Git va GitHub",
    category: "Versiyalarni boshqarish",
    level: "Yaxshi",
    percent: 82,
    description: "Filiallarni boshqarish (branches), commit madaniyati, loyihalarni saqlash va deploy qilish."
  },
  {
    name: "UI/UX asoslari",
    category: "Dizayn",
    level: "O'rta",
    percent: 70,
    description: "Foydalanuvchi qulayligi, zamonaviy toza tipografiya, ranglar kontrasti va vizual iyerarxiya."
  },
  {
    name: "Sun'iy intellekt bilan ishlash",
    category: "AI & Innovation",
    level: "O'rganilmoqda",
    percent: 68,
    description: "AI vositalari (LLM, prompt engineering) orqali kod sifatini oshirish va innovatsion yechimlar qo'llash."
  }
];

// Fallback GitHub repozitoriylar ro'yxati (Agar GitHub API cheklovi yoki tarmoq xatosi yuz bersa ishlatiladi)
export const FALLBACK_REPOS = [
  {
    id: 1,
    name: "student-housing-app",
    description: "Student housing web application for finding rental rooms and roommates (Talabalar uchun ijara uylari va xonadoshlar topish tizimi).",
    language: "JavaScript",
    html_url: "https://github.com/MONRO728/student-housing-app",
    homepage: "https://talabauy.vercel.app",
    stargazers_count: 1,
    updated_at: "2026-04-22T14:54:54Z"
  },
  {
    id: 2,
    name: "ielts-academy",
    description: "IELTS tayyorgarlik akademiyasi uchun zamonaviy interaktiv o'quv platformasi.",
    language: "TypeScript",
    html_url: "https://github.com/MONRO728/ielts-academy",
    homepage: "https://ielts-academy-psi.vercel.app",
    stargazers_count: 0,
    updated_at: "2026-11-24T13:06:03Z"
  },
  {
    id: 3,
    name: "ai-codelab",
    description: "Sun'iy intellekt va dasturlash tajribalari, algoritmlar va amaliy laboratoriya ishlari.",
    language: "Python",
    html_url: "https://github.com/MONRO728/ai-codelab",
    homepage: null,
    stargazers_count: 0,
    updated_at: "2026-11-23T16:44:49Z"
  },
  {
    id: 4,
    name: "test-psixologiya",
    description: "Psixologik testlar to'plami va 200 talik savollar bazasi bilan ishlovchi onlayn test tizimi.",
    language: "JavaScript",
    html_url: "https://github.com/MONRO728/test-psixologiya",
    homepage: "https://test-psixologiya.vercel.app",
    stargazers_count: 0,
    updated_at: "2026-05-25T09:21:49Z"
  },
  {
    id: 5,
    name: "Essential",
    description: "Lug'at boyligini oshirish va o'quv leksikasini mustahkamlash uchun 300 so'zdan iborat ilova.",
    language: "TypeScript",
    html_url: "https://github.com/MONRO728/Essential",
    homepage: null,
    stargazers_count: 0,
    updated_at: "2026-06-27T03:49:51Z"
  },
  {
    id: 6,
    name: "test-ornatilgan",
    description: "Taxminiy bazadan tayyorgarlik ko'rish uchun mo'ljallangan interaktiv test trenajyori.",
    language: "HTML",
    html_url: "https://github.com/MONRO728/test-ornatilgan",
    homepage: "https://test-ornatilgan.vercel.app",
    stargazers_count: 0,
    updated_at: "2026-06-19T03:45:00Z"
  }
];

// O'quv dalillari (kamida 6 ta talab qilingan tur bo'yicha)
export const EVIDENCE_DATA = [
  {
    id: "evidence-1",
    type: "Amaliy topshiriq",
    title: "Algoritmlar va ma'lumotlar tuzilmasi amaliyoti",
    date: "2026-10-15",
    outcome: "Dasturlashda ma'lumotlar turlari va qidiruv algoritmlari bilan ishlash malakasini egallash",
    reflection: "Ushbu amaliy topshiriq davomida massivlar, bog'langan ro'yxatlar va saralash usullarini amalda kodlab sinab ko'rdim. Mantiqiy fikrlashim sezilarli darajada oshdi.",
    status: "Topshirilgan va baholangan",
    linkText: "Topshiriq hisoboti",
    url: "https://github.com/MONRO728/ai-codelab"
  },
  {
    id: "evidence-2",
    type: "Mustaqil ish",
    title: "Zamonaviy veb-arxitektura tamoyillari bo'yicha izlanish",
    date: "2026-10-28",
    outcome: "Mijoz-server (Client-Server) arxitekturasi va REST API integratsiyasini tahlil qilish",
    reflection: "Mustaqil izlanish olib borish natijasida frontend qismi backend bilan qanday xavfsiz va tezkor ma'lumot almashishini tushunib yetdim.",
    status: "Himoya qilingan",
    linkText: "Mustaqil ish hujjati",
    url: "https://github.com/MONRO728/student-housing-app"
  },
  {
    id: "evidence-3",
    type: "Taqdimot",
    title: "Veb-loyihalarda UI/UX qonuniyatlari taqdimoti",
    date: "2026-11-05",
    outcome: "Foydalanuvchi tajribasini loyihalash va auditoriyaga loyihani aniq taqdim etish ko'nikmasi",
    reflection: "Guruh oldida taqdimot qilish orqali notiqlik, vizual slaydlar tayyorlash va dizayndagi xatolarni tushuntirish mahoratimni oshirdim.",
    status: "Taqdim etilgan",
    linkText: "Slaydlar ko'rinishi",
    url: "https://github.com/MONRO728"
  },
  {
    id: "evidence-4",
    type: "Test natijasi",
    title: "Fan bo'yicha oraliq nazorat va test sinovi",
    date: "2026-11-12",
    outcome: "Nazariy tushunchalar va dasturlash sintaksisi bo'yicha bilimlarni tekshirish",
    reflection: "Oraliq nazorat testida 92% natija qayd etildi. Kamchiliklarim ustida ishlab, murakkab savollarga ko'proq e'tibor qaratishim kerakligini bildim.",
    status: "Natija: 92/100 ball",
    linkText: "Test sertifikati / Natijasi",
    url: "https://test-psixologiya.vercel.app"
  },
  {
    id: "evidence-5",
    type: "Dasturiy loyiha",
    title: "Talabalar uchun ijara uy qidirish platformasi (Student Housing)",
    date: "2026-11-18",
    outcome: "To'liq sikldagi amaliy veb-ilovani mustaqil ishlab chiqish va internetga joylash (deploy)",
    reflection: "Bu loyiha menga real hayotiy muammoni hal qilish imkonini berdi. Loyihani Vercel platformasiga muvaffaqiyatli joylashtirdim.",
    status: "Deploy qilingan va faol",
    linkText: "Jonli loyihani ko'rish",
    url: "https://talabauy.vercel.app"
  },
  {
    id: "evidence-6",
    type: "O'quv materiallari",
    title: "Dasturlash asoslari bo'yicha konspekt va qo'llanmalar",
    date: "2026-11-22",
    outcome: "Muntazam ravishda olingan bilimlarni tizimlashtirish va hujjatlashtirish",
    reflection: "Har bir o'tilgan mavzuni qisqa qaydlar shaklida saqlab borish qayta takrorlashda vaqtni ancha tejashini o'z tajribamda ko'rdim.",
    status: "Muntazam to'ldiriladi",
    linkText: "Materiallar arxivi",
    url: "https://github.com/MONRO728/Essential"
  }
];

// O'z-o'zini baholash va refleksiya savollari
export const REFLECTION_DATA = [
  {
    question: "Nimalarni o'rgandim?",
    answer: "O'quv davomida zamonaviy HTML5, CSS3, JavaScript (ES6+), React kutubxonasi hamda Tailwind CSS bilan ishlashni o'rgandim. Shuningdek, loyihalar versiyasini boshqarish uchun Git va GitHub bilan ishlash, REST API so'rovlarini amalga oshirish va tayyor loyihalarni Vercel platformasida bepul deploy qilishni amalda sinab ko'rdim."
  },
  {
    question: "Qaysi ko'nikmalarim rivojlandi?",
    answer: "Texnik bilimlar bilan birga analitik fikrlash, mustaqil muammolarni aniqlash va ularni dasturiy yo'l bilan hal qilish (problem-solving) qobiliyatim rivojlandi. Xatolar (bugs) bilan ishlashda chidamlilik va sabr ortdi, kodni toza va tushunarli formatda yozish madaniyati shakllandi."
  },
  {
    question: "Qanday qiyinchiliklarga duch keldim?",
    answer: "Dastlabki bosqichlarda asinxron funksiyalar bilan ishlash, murakkab davlat boshqaruvi (state management) va CSS yordamida har xil ekran o'lchamlari uchun mukammal moslashuvchanlikni (responsive design) ta'minlashda qiyinchiliklar bo'ldi. Bu qiyinchiliklarni rasmiy hujjatlar (docs) va amaliy sinovlar orqali yengib o'tdim."
  },
  {
    question: "Kelgusida nimalarni o'rganmoqchiman?",
    answer: "Kelgusida TypeScript'dan yanada chuqurroq foydalanish, backend texnologiyalari (Node.js, PostgreSQL/MongoDB) hamda sun'iy intellekt API laridan unumli foydalanib aqlli veb-xizmatlar yaratishni o'z oldimga maqsad qilib qo'yganman."
  }
];

// Foydalanilgan manbalar va tavsiya etiladigan platformalar
export const RESOURCES_DATA = [
  {
    name: "GitHub",
    category: "Kod va versiya nazorati",
    url: "https://github.com",
    description: "Barcha loyihalarim, dars mashg'ulotlari kodlari va amaliyotlar saqlanadigan xalqaro dasturchilar platformasi."
  },
  {
    name: "MDN Web Docs",
    category: "Dasturlash hujjatlari",
    url: "https://developer.mozilla.org",
    description: "HTML, CSS va JavaScript standartlari bo'yicha dunyodagi eng ishonchli va batafsil rasmiy qo'llanma."
  },
  {
    name: "React Rasmiy Hujjatlari",
    category: "Framework & Kutubxona",
    url: "https://react.dev",
    description: "Zamonaviy React komponentlari, hook'lar va eng yaxshi amaliyotlar bo'yicha rasmiy bilimlar bazasi."
  },
  {
    name: "Tailwind CSS Documentation",
    category: "Dizayn va uslub",
    url: "https://tailwindcss.com",
    description: "Utility-first CSS sinflari yordamida zamonaviy va tezkor interfeyslar qurish bo'yicha to'liq qo'llanma."
  },
  {
    name: "YouTube Ta'lim Kanallari",
    category: "Video darslar",
    url: "https://youtube.com",
    description: "Dasturlash, yangi texnologiyalar va amaliy master-klasslarni vizual o'rganish uchun asosiy video platforma."
  },
  {
    name: "Google Qidiruv va Ilmiy Manbalar",
    category: "Qidiruv va Tadqiqot",
    url: "https://google.com",
    description: "Yuzaga kelgan texnik savollarga yechim topish, stackoverflow maqolalari va ilmiy manbalarni tadqiq qilish vositasi."
  }
];
