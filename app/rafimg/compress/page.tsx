"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import "../rafimg.css";

const UploadIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const CompressIcon = () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

type QualityLevel = "low" | "medium" | "high" | "maximum";

export default function CompressPage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [quality, setQuality] = useState<QualityLevel>("medium");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{ url: string; originalSize: number; compressedSize: number; ratio: number } | null>(null);
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

    const handleCompress = async () => {
        if (!file) return;
        setLoading(true);
        setError(null);
        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("quality", quality);
            const response = await fetch("/api/rafimg/compress", { method: "POST", body: formData });
            if (!response.ok) throw new Error("Compression failed");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            const originalSize = parseInt(response.headers.get("X-Original-Size") || "0");
            const compressedSize = parseInt(response.headers.get("X-Compressed-Size") || "0");
            const ratio = parseFloat(response.headers.get("X-Compression-Ratio") || "0");
            setResult({ url, originalSize, compressedSize, ratio });
        } catch { setError("Failed to compress image. Please try again."); }
        finally { setLoading(false); }
    };

    const formatBytes = (bytes: number) => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
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
                        <Link href="/rafimg/compress" className="rafimg-btn rafimg-btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Compress</Link>
                        <Link href="/rafimg/upscale" className="rafimg-btn rafimg-btn-secondary" style={{ padding: '10px 20px', fontSize: '14px' }}>Upscale</Link>
                    </div>
                </div>
            </nav>

            <div className="rafimg-container" style={{ maxWidth: '800px' }}>
                <div className="rafimg-animate-fade-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div className="rafimg-tool-icon" style={{ margin: '0 auto 20px', width: '72px', height: '72px' }}><CompressIcon /></div>
                    <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '10px' }}>Compress Image</h1>
                    <p style={{ color: '#b0a0a5', fontSize: '15px' }}>Reduce file size while maintaining quality</p>
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
                                <p style={{ fontSize: '13px', color: '#b0a0a5', marginTop: '8px' }}>{file.name} — {formatBytes(file.size)}</p>
                            </div>
                            {result && (
                                <div style={{ flex: '1 1 280px' }}>
                                    <p style={{ fontSize: '11px', color: '#706065', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 500 }}>Compressed</p>
                                    <img src={result.url} alt="Compressed" style={{ width: '100%', borderRadius: '12px', border: '1px solid rgba(139,21,56,0.15)' }} />
                                    <p style={{ fontSize: '13px', color: '#22c55e', marginTop: '8px' }}>{formatBytes(result.compressedSize)} — {result.ratio}% saved</p>
                                </div>
                            )}
                        </div>
                        {!result && (
                            <div style={{ marginTop: '24px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '12px', color: '#b0a0a5' }}>Compression Quality</label>
                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {(['low', 'medium', 'high', 'maximum'] as const).map((q) => (
                                        <button key={q} onClick={() => setQuality(q)} style={{ padding: '11px 22px', borderRadius: '10px', border: quality === q ? '2px solid #8B1538' : '1px solid rgba(139,21,56,0.2)', background: quality === q ? 'rgba(139, 21, 56, 0.15)' : 'transparent', color: 'white', fontSize: '13px', fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.2s' }}>{q}</button>
                                    ))}
                                </div>
                                <p style={{ fontSize: '12px', color: '#706065', marginTop: '8px' }}>
                                    {quality === 'low' && 'Smallest file size, visible quality loss'}
                                    {quality === 'medium' && 'Balanced compression and quality'}
                                    {quality === 'high' && 'Good quality, moderate compression'}
                                    {quality === 'maximum' && 'Best quality, minimal compression'}
                                </p>
                            </div>
                        )}
                        {error && <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', color: '#ef4444', fontSize: '13px' }}>{error}</div>}
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            {!result ? (
                                <>
                                    <button className="rafimg-btn rafimg-btn-primary" onClick={handleCompress} disabled={loading}>{loading ? <><span className="rafimg-spinner">◌</span> Compressing...</> : 'Compress Now'}</button>
                                    <button className="rafimg-btn rafimg-btn-secondary" onClick={reset}>Cancel</button>
                                </>
                            ) : (
                                <>
                                    <a href={result.url} download="compressed_image.jpg" className="rafimg-btn rafimg-btn-primary"><DownloadIcon /> Download</a>
                                    <button className="rafimg-btn rafimg-btn-secondary" onClick={reset}>Compress Another</button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
