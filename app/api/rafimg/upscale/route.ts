import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const scale = formData.get('scale') as string || '2';
        const sharpen = formData.get('sharpen') as string || 'true';

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const scaleValue = scale === '4' ? 4 : 2;
        const shouldSharpen = sharpen.toLowerCase() === 'true';

        const sharp = (await import('sharp')).default;

        const metadata = await sharp(buffer).metadata();
        const originalWidth = metadata.width || 100;
        const originalHeight = metadata.height || 100;
        const newWidth = originalWidth * scaleValue;
        const newHeight = originalHeight * scaleValue;

        let sharpInstance = sharp(buffer)
            .resize(newWidth, newHeight, {
                kernel: 'lanczos3',
                fit: 'fill'
            });

        if (shouldSharpen) {
            sharpInstance = sharpInstance.sharpen({ sigma: 0.5 });
        }

        const upscaled = await sharpInstance.png({ quality: 95 }).toBuffer();

        return new NextResponse(new Uint8Array(upscaled), {
            headers: {
                'Content-Type': 'image/png',
                'Content-Disposition': `attachment; filename="upscaled_${scaleValue}x.png"`,
                'X-Original-Dimensions': `${originalWidth}x${originalHeight}`,
                'X-Upscaled-Dimensions': `${newWidth}x${newHeight}`,
                'X-Scale-Factor': `${scaleValue}x`,
            },
        });
    } catch (error) {
        console.error('Upscale error:', error);
        return NextResponse.json({ error: 'Upscaling failed' }, { status: 500 });
    }
}
