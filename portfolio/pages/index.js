import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.emojiBg}>
        <span className={styles.e1}>🎮</span>
        <span className={styles.e2}>🐍</span>
        <span className={styles.e3}>📫</span>
        <span className={styles.e4}>💻</span>
        <span className={styles.e5}>✨</span>
        <span className={styles.e6}>🚀</span>
      </div>
      <div className={styles.container}>
        <Head>
          <title>JaePyJs Portfolio</title>
          <meta name="description" content="JaePyJs - Student, Developer, Beatboxer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <img src="/banner.svg" alt="Banner" className={styles.banner} />
          {/* Large waving hand emoji at the top for personality */}
          <div style={{fontSize:'3.5rem', textAlign:'center', marginBottom:'-1.2rem', marginTop:'-2rem'}}>👋</div>
          <h1 className={`${styles.title} gradientText`}>Hi, I'm JaePyJs!</h1>
          <p className={styles.bio}>Computer Science student passionate about AI, web dev, and logic programming.</p>
          <p className={styles.funFact}>🎵 Fun fact: I can do beat box while coding</p>
        </header>
        <nav className={styles.nav}>
          <a href="#projects">🚀 Projects</a>
          <a href="#stack">💻 Tech Stack</a>
          <a href="#learning">📚 Learning</a>
          <a href="#quote">✨ Quote</a>
          <a href="/contact">📫 Contact</a>
          <a href="/snake">🐍 Snake</a>
          <a href="/games">🎮 Games & Quiz</a>
        </nav>
        <main>
          <section id="projects" className={`${styles.section} reveal`}>
            <h2 style={{fontSize: '2rem', fontWeight: 700}}>🚀 Projects</h2>
            <ul style={{fontSize: '1.25rem', fontWeight: 600, color: '#fff', listStyle: 'none', padding: 0}}>
              <li className={styles.projectItem} style={{marginBottom: '1rem'}}>
                <a href="https://github.com/JaePyJs/perpetual-help-enrollment-system" target="_blank" rel="noopener noreferrer" style={{color:'#fff', fontSize:'1.18em', display:'flex', alignItems:'center', gap:'0.7em'}}>
                  <span role="img" aria-label="school" style={{fontSize:'1.5em'}}>🏫</span> Perpetual Help Enrollment System
                </a>
              </li>
              <li className={styles.projectItem} style={{marginBottom: '1rem'}}>
                <a href="https://github.com/JaePyJs/reddit2discord-memes" target="_blank" rel="noopener noreferrer" style={{color:'#fff', fontSize:'1.18em', display:'flex', alignItems:'center', gap:'0.7em'}}>
                  <span role="img" aria-label="meme" style={{fontSize:'1.5em'}}>😂</span> Reddit2Discord Memes
                </a>
              </li>
              <li className={styles.projectItem}>
                <a href="https://github.com/JaePyJs/mix-and-munch" target="_blank" rel="noopener noreferrer" style={{color:'#fff', fontSize:'1.18em', display:'flex', alignItems:'center', gap:'0.7em'}}>
                  <span role="img" aria-label="chef" style={{fontSize:'1.5em'}}>👨‍🍳</span> Mix and Munch: Filipino Recipe Generator
                </a>
              </li>
            </ul>
          </section>
          <section id="stack" className={`${styles.section} reveal`}>
            <h2 style={{fontSize: '2rem', fontWeight: 700}}>🛠️ Tech Stack</h2>
            <div className={styles.stackIcons}>
              <span title="Python">🐍</span>
              <span title="JavaScript">🟨</span>
              <span title="React">⚛️</span>
              <span title="Node.js">🟩</span>
              <span title="Next.js">⬛</span>
            </div>
          </section>
          <section id="learning" className={`${styles.section} reveal`}>
            <h2>🌱 Currently Learning</h2>
            <ul>
              <li>Next.js</li>
              <li>AI/ML fundamentals</li>
              <li>Advanced algorithms</li>
            </ul>
          </section>
          <section id="quote" className={`${styles.section} reveal`}>
            <blockquote>
              "To live is to suffer, to survive is to find some meaning in the suffering."
            </blockquote>
          </section>
        </main>
        <hr style={{border:'none',borderTop:'2px dashed #F67280',margin:'2.5rem 0',opacity:0.3}} />
        <section className={styles.interactiveLinks}>
          {/* Floating emoji animation for liveliness */}
          <span className={styles.floatingEmoji} style={{left:'10%', animationDelay:'0s'}}>🎮</span>
          <span className={styles.floatingEmoji} style={{left:'30%', animationDelay:'2s'}}>🐍</span>
          <span className={styles.floatingEmoji} style={{left:'60%', animationDelay:'4s'}}>📫</span>
          <span className={styles.floatingEmoji} style={{left:'80%', animationDelay:'1.5s'}}>💻</span>
          <h2 style={{background:'none',color:'#22223B'}}>✨ Explore More</h2>
          <div className={styles.interactiveCards}>
            <a href="/contact" className={styles.interactiveCard} data-emoji=":mailbox:">Contact Me</a>
            <a href="/snake" className={styles.interactiveCard} data-emoji=":snake:">Contribution Snake</a>
            <a href="/games" className={styles.interactiveCard} data-emoji=":video_game:">Games & Quizzes</a>
          </div>
        </section>
        <hr style={{border:'none',borderTop:'2px dashed #F67280',margin:'2.5rem 0',opacity:0.3}} />
        <hr style={{border:'none',borderTop:'2px dashed #355C7D',margin:'2.5rem 0',opacity:0.2}} />
        <footer className={styles.footer}>
          <span>© {new Date().getFullYear()} JaePyJs</span>
          <span className={styles.visitor}>👁️ Visitor badge coming soon!</span>
        </footer>
      </div>
    </>
  );
}
