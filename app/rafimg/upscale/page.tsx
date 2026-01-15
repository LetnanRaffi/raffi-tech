"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "../rafimg.css";

type ScaleFactor = "2" | "4";

const UploadIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const UpscaleIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

export default function UpscalePage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [scale, setScale] = useState<ScaleFactor>("2");
    const [sharpen, setSharpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ url: string; originalDims: string; upscaledDims: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = useCallback((selectedFile: File) => {
        if (!selectedFile.type.startsWith("image/")) { setError("Please select an image file"); return; }
        setFile(selectedFile);
        setPreview(URL.createObjectURL(selectedFile));
        setResult(null);
        setError(null);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) handleFile(droppedFile);
    }, [handleFile]);

    const handleUpscale = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("scale", scale);
            formData.append("sharpen", sharpen.toString());
            const response = await fetch("/api/rafimg/upscale", { method: "POST", body: formData });
            if (!response.ok) throw new Error("Upscaling failed");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const originalDims = response.headers.get("X-Original-Dimensions") || "Unknown";
            const upscaledDims = response.headers.get("X-Upscaled-Dimensions") || "Unknown";
            setResult({ url, originalDims, upscaledDims });
        } catch { setError("Failed to upscale image. Please try again."); }
        finally { setLoading(false); }
    };

    const reset = () => { setFile(null); setPreview(null); setResult(null); setError(null); };

    return (
        <main className="rafimg-root" style={{ minHeight: "100vh", padding: "90px 24px 60px" }}>
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

            <div className="rafimg-container" style={{ maxWidth: '800px' }}>
                <div className="rafimg-animate-fade-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div className="rafimg-tool-icon" style={{ margin: '0 auto 20px', width: '72px', height: '72px' }}><UpscaleIcon /></div>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '10px' }}>Upscale Image</h1>
                    <p style={{ color: '#b0a0a5', fontSize: '15px' }}>Enlarge images with enhanced quality</p>
                </div>

                {!file ? (
                    <div className={`rafimg-upload-zone ${isDragging ? 'dragging' : ''}`} onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop} onClick={() => inputRef.current?.click()}>
                        <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
                        <div className="rafimg-upload-zone-icon"><UploadIcon /></div>
                        <h3>Drop your image here</h3>
                        <p>or click to browse — JPG, PNG, WebP supported</p>
                    </div>
                ) : (
                    <div className="rafimg-glass-card" style={{ padding: '28px', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ flex: '1 1 280px' }}>
                                <p style={{ fontSize: '11px', color: '#706065', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Original</p>
                                <img src={preview!} alt="Preview" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(139,21,56,0.15)' }} />
                                <p style={{ fontSize: '13px', color: '#b0a0a5', marginTop: '8px' }}>{file.name} {result && `— ${result.originalDims}`}</p>
                            </div>
                            {result && (
                                <div style={{ flex: '1 1 280px' }}>
                                    <p style={{ fontSize: '11px', color: '#706065', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Upscaled {scale}x</p>
                                    <img src={result.url} alt="Upscaled" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(139,21,56,0.15)' }} />
                                    <p style={{ fontSize: '13px', color: '#22c55e', marginTop: '8px' }}>{result.upscaledDims}</p>
                                </div>
                            )}
                        </div>
                        {!result && (
                            <div style={{ marginTop: '24px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '12px', color: '#b0a0a5' }}>Scale Factor</label>
                                <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                                    {(['2', '4'] as const).map((s) => (
                                        <button key={s} onClick={() => setScale(s)} style={{ padding: '14px 32px', borderRadius: '10px', border: scale === s ? '2px solid #8B1538' : '1px solid rgba(139,21,56,0.2)', background: scale === s ? 'rgba(139, 21, 56, 0.15)' : 'transparent', color: 'white', fontSize: '16px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}>{s}x</button>
                                    ))}
                                </div>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                                    <div onClick={() => setSharpen(!sharpen)} style={{ width: '44px', height: '24px', borderRadius: '12px', background: sharpen ? '#8B1538' : 'rgba(139,21,56,0.2)', position: 'relative', transition: 'all 0.2s' }}>
                                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'white', position: 'absolute', top: '3px', left: sharpen ? '23px' : '3px', transition: 'all 0.2s' }} />
                                    </div>
                                    <span style={{ fontSize: '13px', color: '#b0a0a5' }}>Enhance Sharpness</span>
                                </label>
                                <p style={{ fontSize: '11px', color: '#706065', marginTop: '6px', marginLeft: '56px' }}>Apply subtle sharpening to reduce blur</p>
                            </div>
                        )}
                        {error && <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', color: '#ef4444', fontSize: '13px' }}>{error}</div>}
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {!result ? (
                                <>
                                    <button className="rafimg-btn rafimg-btn-primary" onClick={handleUpscale} disabled={loading}>{loading ? <><span className="rafimg-spinner">◌</span> Upscaling...</> : `Upscale ${scale}x`}</button>
                                    <button className="rafimg-btn rafimg-btn-secondary" onClick={reset}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <a href={result.url} download={`upscaled_${scale}x.png`} className="rafimg-btn rafimg-btn-primary"><DownloadIcon /> Download</a>
                                    <button className="rafimg-btn rafimg-btn-secondary" onClick={reset}>Upscale Another</button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <div className="rafimg-glass-card" style={{ padding: '20px', marginTop: '24px' }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '10px', color: '#b0a0a5' }}>Tips for Best Results</h3>
                    <ul style={{ color: '#706065', fontSize: '13px', lineHeight: 1.7, paddingLeft: '18px' }}>
                        <li>Use high-quality source images</li>
                        <li>2x recommended for most images, 4x for thumbnails</li>
                        <li>Keep sharpening enabled to reduce blur</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
