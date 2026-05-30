"use client";

import { useState } from "react";
import Link from "next/link";

type QAItem = { q: string; a: string };
type QAData = { [key: string]: QAItem[] };

const QA_DATA: QAData = {
  "IIT Bombay": [
    { q: "What is the average placement package at IIT Bombay?", a: "The average CTC at IIT Bombay is around 25 LPA for BTech students. Top recruiters include Google, Microsoft, Goldman Sachs, and McKinsey. The highest package in recent years has crossed 2 Crore+ for international offers." },
    { q: "How is the hostel life at IIT Bombay?", a: "IIT Bombay has 17 hostels on campus. Each hostel has its own culture and sports teams. Rooms are generally spacious with good amenities. The campus is like a mini-city with everything available within walking distance." },
    { q: "What is the fee structure for BTech at IIT Bombay?", a: "The annual fee is approximately Rs 2.2 Lakh per year. Students who qualify under SC/ST or have family income below Rs 1 lakh per year may get a full fee waiver plus a monthly stipend." },
    { q: "How difficult is it to get into IIT Bombay Computer Science?", a: "CSE at IIT Bombay is the most competitive branch. You typically need a JEE Advanced rank under 100 in General category. It consistently tops the preference list during JoSAA counselling every year." },
    { q: "Are there research opportunities for BTech students?", a: "Yes, IIT Bombay has a strong research culture. The SURGE and UROP programs allow BTech students to work with professors from Semester 3 onwards. International collaborations with MIT and ETH Zurich are also available." },
    { q: "What is campus life like at IIT Bombay?", a: "Campus life is vibrant with Mood Indigo (Asia's largest college cultural fest) and Techfest (Asia's largest science and technology festival). The campus has its own market, hospital, and even a deer park." },
    { q: "Does IIT Bombay offer international exchange programs?", a: "Yes, IIT Bombay has exchange agreements with 40+ universities worldwide including MIT, ETH Zurich, NUS Singapore, and TU Munich. Students can apply for semester exchange in their 6th or 7th semester." },
  ],
  "IIT Delhi": [
    { q: "What is the placement scenario at IIT Delhi?", a: "IIT Delhi has excellent placements with an average CTC of around 28 LPA. Microsoft, Adobe, Samsung Research, and top consulting firms are regular recruiters. Nearly 80-85% of students get placed through campus placements." },
    { q: "How is the location of IIT Delhi helpful for students?", a: "IIT Delhi is located in Hauz Khas, South Delhi. Students get excellent access to Delhi's startup ecosystem, government institutions like AIIMS nearby, and a strong alumni network across Delhi NCR." },
    { q: "What branches are most popular at IIT Delhi?", a: "Computer Science and Electrical Engineering are the most sought-after branches. Mathematics and Computing is also extremely popular. These three see the highest competition during JoSAA counselling." },
    { q: "Is IIT Delhi good for entrepreneurship?", a: "Yes, IIT Delhi has FIIT (Foundation for Innovation and Technology Transfer), a technology business incubator. Several successful startups like Housing.com were founded by IIT Delhi alumni." },
    { q: "What is the fee structure at IIT Delhi?", a: "Annual tuition fee is approximately Rs 2.3 Lakh. Hostel and mess charges add another Rs 1 to 1.5 Lakh annually. Financial aid is available for economically weaker sections through the Institute Free Studentship scheme." },
    { q: "What JEE Advanced rank is needed for IIT Delhi CSE?", a: "For CSE at IIT Delhi, you typically need a JEE Advanced All India Rank under 150-200 in General category. It is one of the most competitive seats in the entire JoSAA counselling process." },
    { q: "How is the faculty quality at IIT Delhi?", a: "IIT Delhi has world-class faculty, many of whom hold PhDs from top global universities. The student-to-faculty ratio is approximately 10:1, ensuring good mentorship and research interaction opportunities." },
  ],
  "COEP": [
    { q: "What is the average placement package at COEP Pune?", a: "The average placement package at COEP is around 8-12 LPA. Top companies like Infosys, TCS, Wipro, L&T, and several Pune-based IT companies recruit from campus regularly. Core companies also hire in good numbers." },
    { q: "How is COEP different from other Pune engineering colleges?", a: "COEP (College of Engineering Pune) is one of the oldest engineering colleges in Asia, established in 1854. Its government status means very affordable fees of around Rs 95,000 per year with solid academics and placements." },
    { q: "What is the admission process for COEP?", a: "Admission to COEP is through MHT CET for Maharashtra students and JEE Main for students from other states via CAP rounds. COEP has Autonomous Institute status and follows its own well-designed curriculum." },
    { q: "Is COEP good for Computer Engineering?", a: "Yes, Computer Engineering at COEP is very reputed. The department has strong industry connections and a solid alumni network. Students get good opportunities in product companies across Pune's growing tech ecosystem." },
    { q: "How is the campus and infrastructure at COEP?", a: "COEP has a beautiful heritage campus on the banks of the Mula river. The campus includes modern labs, a well-stocked library, sports facilities, and hostels. The iconic Boat Club is a unique feature not found at other engineering colleges." },
    { q: "What MHT CET percentile is needed for COEP Computer Engineering?", a: "For Computer Engineering at COEP, you typically need 99.8+ percentile in MHT CET for open category Maharashtra students. It is one of the most competitive government engineering seats in Pune." },
    { q: "What are the popular fests and clubs at COEP?", a: "COEP has Mindspark (annual technical fest) and Impressions (cultural fest). There are numerous active clubs in robotics, coding, and electronics. The student council organizes events and competitions throughout the academic year." },
  ],
  "VJTI": [
    { q: "What is the average placement package at VJTI Mumbai?", a: "VJTI students see an average placement package of around 10-14 LPA. Being in Mumbai gives a big advantage with companies like TCS, Capgemini, Goldman Sachs, and many fintech startups actively recruiting from campus." },
    { q: "How does VJTI's Mumbai location benefit students?", a: "VJTI is located in Matunga, Central Mumbai, putting students at the heart of India's financial capital. Internship and placement opportunities in Mumbai's thriving tech, finance, and startup ecosystem are very abundant." },
    { q: "What is the annual fee at VJTI?", a: "As a government-aided autonomous institute, VJTI's fees are very affordable at approximately Rs 85,000 per year. This makes it one of the best value-for-money engineering colleges in the entire state of Maharashtra." },
    { q: "Which branches are best at VJTI?", a: "Computer Engineering and Electronics Engineering are the most competitive and highest-placed branches at VJTI. Mechanical Engineering also has a strong legacy given Mumbai's large industrial and manufacturing base." },
    { q: "How is the hostel facility at VJTI?", a: "VJTI has separate hostels for boys and girls within the campus. Many students also prefer renting accommodations in nearby Matunga and Dadar areas, which are very well connected via Mumbai's local train network." },
    { q: "What is the admission cutoff for VJTI Computer Engineering?", a: "For Computer Engineering at VJTI, you typically need 99.5+ percentile in MHT CET for Maharashtra students. It is one of the most sought-after seats among government engineering colleges in Mumbai." },
    { q: "How does VJTI compare to COEP Pune?", a: "Both are premier Maharashtra government engineering colleges. VJTI has an edge in placement packages due to Mumbai's job market. COEP has a unique heritage campus and Boat Club. Both are excellent choices and comparable in academic quality." },
  ],
  "BITS Pilani": [
    { q: "What makes BITS Pilani unique compared to other private colleges?", a: "BITS Pilani is unique for its Practice School (PS) program — a mandatory 5-6 month industry internship where students work at top companies and earn a stipend. This real-world exposure makes BITS graduates extremely industry-ready." },
    { q: "What is the fee structure at BITS Pilani?", a: "BITS Pilani charges around Rs 4.5-5 Lakh per year. Total 4-year cost can reach Rs 18-20 Lakh. However, merit scholarships are available for students with excellent BITSAT scores to partially offset the high cost." },
    { q: "How is the placement record at BITS Pilani?", a: "BITS Pilani has excellent placements with an average CTC of around 20-22 LPA. The Practice School program often converts to PPOs. Google, Microsoft, Qualcomm, Goldman Sachs, and Samsung are among the top recruiters." },
    { q: "What is the dual degree program at BITS Pilani?", a: "BITS offers a unique integrated dual degree where students pursue two degrees simultaneously — for example BE Computer Science plus MSc Mathematics in 5 years. This is extremely popular and valued highly by employers." },
    { q: "How is campus life at BITS Pilani?", a: "Campus life is lively with OASIS (cultural fest), APOGEE (technical fest), and BOSM (sports meet). The campus is fully self-contained. The freedom culture with no strict attendance policy is something students love at BITS." },
    { q: "What is BITSAT and how does admission work?", a: "BITSAT is BITS's own online entrance exam with 130 questions in 3 hours covering Physics, Chemistry, Maths, English, and Logical Reasoning. Scores are accepted for the Pilani, Goa, and Hyderabad campuses." },
    { q: "Does BITS Pilani have a strong alumni network?", a: "Yes, BITS has an outstanding global alumni network. Notable alumni include Sabeer Bhatia who founded Hotmail and hundreds of founders and senior executives at top companies across Silicon Valley and India." },
    { q: "Is Pilani campus better than BITS Goa and Hyderabad?", a: "The Pilani campus is the original and has the strongest research infrastructure and faculty. BITS Goa has a scenic location. BITS Hyderabad is growing rapidly. For pure academics and placements, Pilani is considered the best of the three campuses." },
  ],
  "NIT Trichy": [
    { q: "Why is NIT Trichy considered the best NIT in India?", a: "NIT Trichy consistently ranks as the number 1 NIT due to its strong academics, excellent placements, vibrant student culture, and top research output. It has held the best NIRF ranking among all NITs year after year consistently." },
    { q: "What is the average placement package at NIT Trichy?", a: "The average CTC at NIT Trichy is around 14-16 LPA. Microsoft, Amazon, Qualcomm, Samsung, and top core companies regularly recruit here. CSE and ECE branches consistently see the highest salary packages." },
    { q: "What JEE Main rank is required for NIT Trichy CSE?", a: "For CSE at NIT Trichy home state quota (Tamil Nadu), you need approximately a rank under 2,000 in General category. For other state students, the cutoff is different and changes slightly every year through JoSAA counselling." },
    { q: "How is the campus and facilities at NIT Trichy?", a: "NIT Trichy has a sprawling 800-acre campus with AC labs, a central library, an Olympic-size swimming pool, and excellent sports facilities. The campus is fully residential with 16 hostels accommodating all students." },
    { q: "Is NIT Trichy good for core engineering placements?", a: "Yes, NIT Trichy has a very strong reputation in core engineering. Companies like L&T, Hyundai, BHEL, and ISRO recruit regularly. The core engineering placement percentage is above 70%, which is exceptional among NITs." },
    { q: "What are the major fests at NIT Trichy?", a: "Pragyan is NIT Trichy's annual technical festival and one of the largest in South India. Festember is the cultural festival held annually. Both events attract thousands of participants from colleges across India every year." },
    { q: "How is the research environment at NIT Trichy?", a: "NIT Trichy has excellent MTech and PhD programs across all departments. Admission to MTech is through GATE scores. The research output from NIT Trichy in terms of publications and patents is among the highest of all NITs in India." },
  ],
  "MIT Pune": [
    { q: "Is MIT Pune (MIT-WPU) worth the fees?", a: "MIT-WPU offers good infrastructure and solid industry connections in Pune's tech corridor. For students who do not secure seats in government colleges, it can be a good option especially for CSE and IT due to Pune's strong job market." },
    { q: "What is the average placement package at MIT Pune?", a: "MIT Pune's average placement package is around 6-9 LPA. Infosys, Wipro, TCS, Cognizant, and several Pune-based product startups recruit regularly here. Placement rate for IT branches is approximately 65-70% through campus." },
    { q: "What is the annual fee at MIT Pune?", a: "MIT-WPU charges approximately Rs 2.8 to 3.2 Lakh per year for engineering programs. The total 4-year cost including hostel can reach Rs 14-16 Lakh, which is on the higher side among private colleges in Pune." },
    { q: "How is the infrastructure at MIT Pune?", a: "MIT Pune has a modern campus with well-equipped computer labs, a large central library, sports facilities, and hostel accommodations. The Kothrud campus is well-connected to major IT hubs of Hinjewadi and Baner in Pune." },
    { q: "Which branches are best at MIT Pune?", a: "Computer Engineering, Information Technology, and Electronics are the most popular and well-placed branches. Mechanical Engineering also has decent core placements due to Pune's very strong automotive and manufacturing industry presence." },
    { q: "How does MIT Pune compare to other private colleges in Pune?", a: "MIT Pune is among the better private options in Pune alongside Symbiosis Institute of Technology and VIT Pune. Compared to government colleges like COEP and PCCOE, fees are higher but infrastructure is more modern and well-maintained." },
  ],
  "IIIT Hyderabad": [
    { q: "Why is IIIT Hyderabad called a coding powerhouse?", a: "IIIT Hyderabad is entirely focused on Computer Science and related disciplines. Its research-driven curriculum, strong dual degree program, and location inside Hyderabad's tech corridor where Google, Microsoft, and Amazon have offices make it exceptional for CS." },
    { q: "What is the placement package at IIIT Hyderabad?", a: "IIIT Hyderabad has outstanding placements with an average CTC of 28-32 LPA for BTech graduates. Highest packages frequently cross Rs 1 Crore for international offers. Google, Microsoft, Uber, and top global tech companies actively recruit here." },
    { q: "What is the UGEE exam for IIIT Hyderabad?", a: "IIIT Hyderabad conducts its own UGEE (Undergraduate Engineering Entrance Exam) for its research-oriented Dual Degree program. Students can also get admission through JEE Main scores via JoSAA counselling for the regular BTech program." },
    { q: "How is the research culture at IIIT Hyderabad?", a: "Research is absolutely central to IIIT Hyderabad's identity. Even undergraduate students do research from their early years. The institute has world-class labs in Artificial Intelligence, Machine Learning, Computational Linguistics, and Computer Vision." },
    { q: "What is the annual fee at IIIT Hyderabad?", a: "The annual fee at IIIT Hyderabad is approximately Rs 3.5 Lakh per year. Being an IIIT under the PPP model it is self-funded and hence fees are higher than IITs. However ROI is excellent given the extraordinary placement outcomes for students." },
    { q: "Is IIIT Hyderabad better than IITs for Computer Science?", a: "For pure CS, AI, and ML research, IIIT Hyderabad is genuinely comparable to top IITs. While IITs have broader brand value, IIIT Hyderabad's specialized CS focus, research publications, and placement quality rival IIT Bombay and IIT Delhi for CSE." },
    { q: "What is campus life like at IIIT Hyderabad?", a: "IIIT Hyderabad has a tight-knit campus community with a strong coding culture. Felicity is the annual tech-cultural fest. The fully residential campus in Gachibowli is literally surrounded by the offices of Google, Microsoft, Amazon, and other tech giants." },
  ],
};

const COLLEGES = Object.keys(QA_DATA);

export default function QAPage() {
  const [selected, setSelected] = useState<string>("IIT Bombay");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [extra, setExtra] = useState<{ [k: string]: QAItem[] }>({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [toast, setToast] = useState(false);

 const currentQuestions = [
  ...(QA_DATA[selected] || []),
  ...(extra[selected] || []),
];

  const handleCollegeChange = (collegeName: string) => {
    setSelected(collegeName);
    setOpenIdx(null);
    setShowForm(false);
  };

  const handlePost = () => {
    if (!name.trim() || !title.trim()) return;
    const newQ: QAItem = {
      q: title,
      a: `Thank you ${name} for your question! Our community of students and alumni will answer this soon. Please check back in a while.`,
    };
    setExtra((prev) => ({ ...prev, [selected]: [...(prev[selected] || []), newQ] }));
    setName("");
    setTitle("");
    setDetails("");
    setShowForm(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-black text-white px-4 md:px-8 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-lg md:text-2xl font-bold">Q&A Discussion</h1>
        <Link href="/">
          <button className="border border-white/40 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition text-sm font-medium cursor-pointer">
            ← Back
          </button>
        </Link>
      </nav>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-sm mb-8">Select a college below and browse questions asked by students.</p>

        <div className="mb-8">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select College</label>
          <select
            value={selected}
            onChange={(e) => handleCollegeChange(e.target.value)}
            className="w-full border-2 border-gray-300 bg-white text-black px-5 py-3 rounded-2xl text-base font-semibold focus:outline-none focus:border-black cursor-pointer shadow-sm"
          >
            {COLLEGES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {toast && (
          <div className="mb-5 bg-green-100 border border-green-400 text-green-800 px-5 py-3 rounded-2xl font-semibold text-sm">
            Your question has been posted! Community will answer soon.
          </div>
        )}

        {showForm && (
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Ask about {selected}</h3>
                <p className="text-gray-400 text-xs mt-1">Students and alumni will answer your question.</p>
              </div>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-700 text-xl cursor-pointer">×</button>
            </div>
            <div className="space-y-3">
              <input
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                placeholder="Your Question *"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                placeholder="More details (optional)..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                rows={3}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
              <div className="flex gap-3">
                <button
                  onClick={handlePost}
                  disabled={!name.trim() || !title.trim()}
                  className="flex-1 bg-black text-white py-3 rounded-2xl font-bold text-sm hover:bg-gray-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer"
                >
                  Post Question
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl font-semibold text-sm hover:bg-gray-200 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="text-sm text-gray-500 mb-4">
          <span className="font-bold text-black">{currentQuestions.length}</span> questions for <span className="font-semibold text-gray-800">{selected}</span>
        </p>

        <div className="space-y-3">
            {/* <p className="text-red-500 mb-4">
                Current College: {selected}
                </p>

                <p className="text-blue-500 mb-4">
                Questions Count: {currentQuestions.length}
                </p> */}
          {currentQuestions.map((item, idx) => (
            <div key={`${selected}-${idx}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => {
                    console.log("clicked", idx);
                    console.log(item.a);
                    setOpenIdx(openIdx === idx ? null : idx);
                }}
                className="w-full text-left px-5 py-4 flex justify-between items-start gap-3 hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex gap-3 items-start">
                  <span className="text-blue-500 font-bold shrink-0 mt-0.5">Q</span>
                  <span className="text-gray-900 font-semibold text-sm md:text-base leading-snug">{item.q}</span>
                </div>
                <span className={`text-gray-400 shrink-0 transition-transform duration-200 text-lg ${openIdx === idx ? "rotate-180" : ""}`}>▾</span>
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 pt-3 border-t border-gray-100 bg-blue-50/40">
                  <div className="flex gap-3">
                    <span className="text-green-600 font-bold shrink-0 text-sm">A</span>
                    <p className="text-gray-700 text-sm leading-7">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}