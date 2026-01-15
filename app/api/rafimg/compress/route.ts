import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const quality = formData.get('quality') as string || 'medium';

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const qualityMap: Record<string, number> = {
            'low': 60,
            'medium': 75,
            'high': 85,
            'maximum': 95
        };
        const qualityValue = qualityMap[quality.toLowerCase()] || 75;

        const sharp = (await import('sharp')).default;
        const originalSize = buffer.length;

        const compressed = await sharp(buffer)
            .jpeg({ quality: qualityValue, progressive: true })
            .toBuffer();

        const compressedSize = compressed.length;
        const ratio = Math.round((1 - compressedSize / originalSize) * 100 * 10) / 10;

        return new NextResponse(new Uint8Array(compressed), {
            headers: {
                'Content-Type': 'image/jpeg',
                'Content-Disposition': 'attachment; filename="compressed.jpg"',
                'X-Original-Size': originalSize.toString(),
                'X-Compressed-Size': compressedSize.toString(),
                'X-Compression-Ratio': ratio.toString(),
                'X-Quality-Level': quality.toUpperCase(),
            },
        });
    } catch (error) {
        console.error('Compression error:', error);
        return NextResponse.json({ error: 'Compression failed' }, { status: 500 });
    }
}
