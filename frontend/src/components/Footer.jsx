import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            {/* ── Top Row ── */}
            <div className="footer-top">

                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <span className="footer-logo-fest">Fest</span>
                        <span className="footer-logo-nest">Nest</span>
                    </div>
                    <p className="footer-tagline">
                        Where grand stays meet unforgettable celebrations.<br />
                        Premium hotels &amp; events, curated for you.
                    </p>
                </div>

                {/* Hotels */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Hotels</h4>
                    <ul className="footer-links">
                        <li><a href="/hotels/luxury">Luxury Hotels</a></li>
                        <li><a href="/hotels/boutique">Boutique Stays</a></li>
                        <li><a href="/hotels/resorts">Resorts</a></li>
                        <li><a href="/hotels/heritage">Heritage Properties</a></li>
                    </ul>
                </div>

                {/* Events */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Events</h4>
                    <ul className="footer-links">
                        <li><a href="/events/weddings">Weddings</a></li>
                        <li><a href="/events/corporate">Corporate Events</a></li>
                        <li><a href="/events/galas">Private Galas</a></li>
                        <li><a href="/events/conferences">Conferences</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="footer-col">
                    <h4 className="footer-col-heading">Company</h4>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/press">Press</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

            </div>

            {/* ── Divider ── */}
            <div className="footer-divider" />

            {/* ── Bottom Row ── */}
            <div className="footer-bottom">
                <p className="footer-copy">© 2025 FestNest. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="https://x.com" className="footer-social-btn" aria-label="X / Twitter">𝕏</a>
                    <a href="https://linkedin.com" className="footer-social-btn" aria-label="LinkedIn">in</a>
                    <a href="https://instagram.com" className="footer-social-btn" aria-label="Instagram">ig</a>
                    <a href="https://youtube.com" className="footer-social-btn" aria-label="YouTube">yt</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;