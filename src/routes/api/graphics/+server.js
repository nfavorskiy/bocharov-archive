import { json } from '@sveltejs/kit';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
    try {
        const graphicsPath = 'static/graphics';
        const pencilPastelPath = join(graphicsPath, 'pencil&pastel');
        const watercolorsPath = join(graphicsPath, 'watercolors');
        
        const pencilPastelImages = await readdir(pencilPastelPath).catch(() => []);
        const watercolorImages = await readdir(watercolorsPath).catch(() => []);
        
        const allImages = [
            ...pencilPastelImages
                .filter(img => /\.(jpg|jpeg|png|gif|webp)$/i.test(img))
                .map(img => `/graphics/pencil&pastel/${img}`),
            ...watercolorImages
                .filter(img => /\.(jpg|jpeg|png|gif|webp)$/i.test(img))
                .map(img => `/graphics/watercolors/${img}`)
        ];
        
        return json({ images: allImages });
    } catch (error) {
        console.error('Error reading graphics folders:', error);
        return json({ images: [] });
    }
}