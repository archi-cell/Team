import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const features = [
    {
        icon: "✦",
        title: "Curated Properties",
        desc: "Every hotel and venue is personally vetted for quality, service, and atmosphere before listing.",
    },
    {
        icon: "⚡",
        title: "Instant Booking",
        desc: "Confirm your stay or event in seconds with real-time availability and instant confirmation.",
    },
    {
        icon: "🛡",
        title: "Secure Payments",
        desc: "Bank-grade encryption protects every transaction, with flexible cancellation policies.",
    },
    {
        icon: "🎩",
        title: "Concierge Support",
        desc: "Dedicated event specialists available 24/7 to help plan and coordinate your occasion.",
    },
];

const Hero = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* ── Hero ── */}
            <section className="hero-section">

                {/* Atmospheric depth layers */}
                <div className="hero-wall-left" />
                <div className="hero-wall-right" />
                <div className="hero-floor" />

                {/* Corner brackets */}
                <div className="hero-corner-tl" />
                <div className="hero-corner-br" />

                {/* Gold dust particles */}
                <div className="hero-particle" style={{width:'3px',height:'3px',left:'10%',bottom:'8%', animationDuration:'10s',animationDelay:'0s'}}/>
                <div className="hero-particle" style={{width:'2px',height:'2px',left:'24%',bottom:'4%', animationDuration:'14s',animationDelay:'1.5s'}}/>
                <div className="hero-particle" style={{width:'5px',height:'5px',left:'40%',bottom:'10%',animationDuration:'9s', animationDelay:'3s'}}/>
                <div className="hero-particle" style={{width:'2px',height:'2px',left:'55%',bottom:'6%', animationDuration:'12s',animationDelay:'0.8s'}}/>
                <div className="hero-particle" style={{width:'4px',height:'4px',left:'68%',bottom:'14%',animationDuration:'11s',animationDelay:'2s'}}/>
                <div className="hero-particle" style={{width:'2px',height:'2px',left:'80%',bottom:'5%', animationDuration:'13s',animationDelay:'4s'}}/>
                <div className="hero-particle" style={{width:'3px',height:'3px',left:'90%',bottom:'9%', animationDuration:'8s', animationDelay:'5s'}}/>

                {/* Horizon glow bar */}
                <div className="hero-glow-bar" />

                {/* Eyebrow */}
                <p className="hero-eyebrow">Luxury Redefined</p>

                <h1>When Grand Stays Meet Unforgettable Celebrations</h1>

                {/* Vertical gold divider */}
                <div className="hero-divider" />

                <p>
                    Discover Amazing Events &amp; Book The Best Hotels
                    For Your Stay Or Event Hosting
                </p>

                <div className="hero-buttons">
                    <button
                        onClick={() => navigate("/events")}
                        className="hero-btn hero-btn-primary"
                    >
                        Explore Events
                    </button>
                    <button
                        onClick={() => navigate("/hotels/stay")}
                        className="hero-btn hero-btn-ghost"
                    >
                        Hotels For Stay
                    </button>
                    <button
                        onClick={() => navigate("/hotels/events")}
                        className="hero-btn hero-btn-ghost"
                    >
                        Hotels For Events
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll">
                    <span>Scroll</span>
                    <div className="hero-scroll-line" />
                </div>

            </section>

            {/* ── Why FestNest Features ── */}
            <section className="features-section">

                {/* Gold top rule */}
                <div className="features-top-line" />

                <div className="features-header">
                    <span className="features-eyebrow">Why FestNest</span>
                </div>

                <h2 className="features-heading">
                    Every Detail,<br />
                    <em>Perfectly</em> Considered
                </h2>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div className="feature-card" key={i}>
                            <div className="feature-icon">{f.icon}</div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    );
};

export default Hero;