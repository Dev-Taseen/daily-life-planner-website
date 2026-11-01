import Image from "next/image";

const features = [
  { icon: "☀", title: "Daily planning", text: "Turn busy days into clear, manageable plans with priorities and time blocks." },
  { icon: "▦", title: "Weekly & monthly goals", text: "See the bigger picture and keep your everyday tasks connected to your goals." },
  { icon: "◷", title: "Routine planner", text: "Build a routine that fits your day, with flexible activities and schedules." },
  { icon: "✓", title: "Helpful reminders", text: "Keep important tasks in sight and get local reminders on your device." },
];

export default function Home() {
  const apkUrl = process.env.NEXT_PUBLIC_APK_URL;
  return (
    <main>
      <nav><a className="brand" href="/"><Image src="/app-icon.png" alt="" width={42} height={42} /> <span>Daily Life Planner</span></a><a className="nav-link" href="#download">Get the app <span>↗</span></a></nav>
      <section className="hero">
        <div className="hero-copy"><div className="eyebrow"><i/> YOUR DAY, A LITTLE MORE ORGANIZED</div><h1>Make time for<br/><span>what matters.</span></h1><p>Plan your day, shape better routines, and keep your goals moving forward — all in one simple planner.</p><div className="hero-actions"><a className="button" href="#download">Explore the app <span>↓</span></a><span className="platform-note">Made for Android · Simple · Personal</span></div></div>
        <div className="app-showcase"><div className="glow"/><div className="phone"><div className="phone-top"><span>9:41</span><span>● ● ●</span></div><div className="greeting">Good morning <span>✦</span><h2>Let’s plan your day.</h2><p>A fresh start, one task at a time.</p></div><div className="today-card"><div><small>YOUR DAILY PROGRESS</small><b>4 of 7 tasks</b></div><strong>57%</strong><div className="progress"><i/></div></div><div className="today-heading">Today’s focus <span>View all</span></div><div className="task"><i className="check">✓</i><div><b>Review project notes</b><small>09:00 · High priority</small></div><em>Done</em></div><div className="task"><i/><div><b>Study for 45 minutes</b><small>11:30 · Personal</small></div><em>Today</em></div><div className="task"><i/><div><b>Plan tomorrow</b><small>20:00 · Routine</small></div><em>Later</em></div><div className="phone-nav"><span>⌂<small>Home</small></span><span>▤<small>Plans</small></span><span>◷<small>Routine</small></span><span>▦<small>Calendar</small></span></div></div></div>
      </section>
      <section className="trust-row"><span>PLAN WITH PURPOSE</span><b>Daily tasks</b><b>Weekly goals</b><b>Monthly progress</b><b>Everyday routines</b></section>
      <section className="features"><div className="section-heading"><div className="eyebrow">LESS CHAOS, MORE CLARITY</div><h2>Everything you need<br/>to stay on track.</h2><p>A focused space for the plans, routines, and little things that make up your day.</p></div><div className="feature-grid">{features.map((feature) => <article className="feature-card" key={feature.title}><div className="feature-icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div></section>
      <section id="download" className="download"><div className="download-icon"><Image src="/app-icon.png" alt="Daily Life Planner app icon" width={76} height={76}/></div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>A little more organized,<br/>every day.</h2>{apkUrl ? <><p>Get the latest Android version from the official download link.</p><a className="button" href={apkUrl}>Download Android APK <span>↓</span></a></> : <><p>The Android installer will be available here when the first public release is ready.</p><span className="coming">Android release coming soon</span></>}<small>Android installation may ask you to confirm before installing.</small></section>
      <footer><a className="footer-brand" href="/"><Image src="/app-icon.png" alt="" width={28} height={28}/> Daily Life Planner</a><span>© {new Date().getFullYear()} Daily Life Planner</span><div><a href="/support">Support</a><a href="/privacy">Privacy</a></div></footer>
    </main>
  );
}
