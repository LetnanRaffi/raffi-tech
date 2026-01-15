import Link from "next/link";
import Image from "next/image";
import "./rafimg.css";

const CompressIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
    </svg>
);

const UpscaleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
    </svg>
);

export const metadata = {
    title: "RafIMG - Image Compression & Upscaling",
    description: "Professional image processing tool. Compress and upscale your images with high quality. Free, fast, and easy to use.",
};

export default function RafIMGHome() {
    return (
        <main className="rafimg-root">
            <div className="rafimg-background" />

            <nav className="rafimg-nav">
                <div className="rafimg-container rafimg-nav-content">
                    <Link href="/rafimg" className="rafimg-nav-brand">
                        <Image src="/rafimg/logo.png" alt="RafIMG" width={36} height={36} style={{ borderRadius: '8px' }} />
                        <span>RafIMG</span>
                    </Link>
                    <div className="rafimg-nav-links">
                        <Link href="/rafimg/compress" className="rafimg-btn rafimg-btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>Compress</Link>
                        <Link href="/rafimg/upscale" className="rafimg-btn rafimg-btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Upscale</Link>
                    </div>
                </div>
            </nav>

            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px' }}>
                <div className="rafimg-animate-fade-in">
                    <div style={{ marginBottom: '32px' }}>
                        <Image src="/rafimg/logo.png" alt="RafIMG Logo" width={120} height={120} style={{ borderRadius: '24px', boxShadow: '0 20px 60px rgba(139, 21, 56, 0.25)' }} />
                    </div>

                    <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(135deg, #fff 0%, #b0a0a5 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Professional Image Tools
                    </h1>

                    <p style={{ fontSize: '17px', color: '#b0a0a5', maxWidth: '520px', margin: '0 auto 48px', lineHeight: 1.7 }}>
                        Compress, upscale, and optimize your images in seconds. Fast, reliable, and beautifully simple.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', maxWidth: '700px', margin: '0 auto' }}>
                        <Link href="/rafimg/compress" style={{ textDecoration: 'none' }}>
                            <div className="rafimg-glass-card rafimg-tool-card">
                                <div className="rafimg-tool-icon"><CompressIcon /></div>
                                <h3>Compress Image</h3>
                                <p>Reduce file size up to 80% while maintaining visual quality. Perfect for web optimization.</p>
                            </div>
                        </Link>

                        <Link href="/rafimg/upscale" style={{ textDecoration: 'none' }}>
                            <div className="rafimg-glass-card rafimg-tool-card">
                                <div className="rafimg-tool-icon"><UpscaleIcon /></div>
                                <h3>Upscale Image</h3>
                                <p>Enlarge images up to 4x with enhanced sharpness. High-quality resolution enhancement.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ padding: '80px 24px', background: 'rgba(139, 21, 56, 0.02)' }}>
                <div className="rafimg-container">
                    <h2 style={{ fontSize: '28px', fontWeight: 700, textAlign: 'center', marginBottom: '48px' }}>Why Choose RafIMG?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
                        {[
                            { title: 'Lightning Fast', desc: 'Process images in seconds, not minutes' },
                            { title: 'High Quality', desc: 'Advanced algorithms for best results' },
                            { title: 'Easy to Use', desc: 'Simple drag and drop interface' },
                            { title: 'Free Forever', desc: 'No hidden fees, no watermarks' }
                        ].map((feature, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #8B1538 0%, #A91D3A 50%, #C73659 100%)', borderRadius: '12px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '18px' }}>{i + 1}</div>
                                <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}>{feature.title}</h3>
                                <p style={{ color: '#b0a0a5', fontSize: '14px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(139, 21, 56, 0.1)', textAlign: 'center' }}>
                <p style={{ color: '#706065', fontSize: '13px' }}>© 2025 RafIMG by RaffiTech. All rights reserved.</p>
            </footer>
        </main>
    );
}
