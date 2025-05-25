import fs from 'fs';
import path from 'path';

const uploadDir = path.join(process.cwd(), 'public/uploads');

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '25');

    const files = fs.readdirSync(uploadDir);
    const imageFiles = files.filter((f) => /\.(png|jpg|jpeg|gif|webp)$/.test(f));

    const total = imageFiles.length;
    const paginated = imageFiles.slice((page - 1) * limit, page * limit);

    return Response.json({
        total,
        images: paginated.map((file) => {
            const filePath = path.join(uploadDir, file);
            const { size } = fs.statSync(filePath);
            return {
                name: file,
                url: `/uploads/${file}`,
                size,
            };
        }),
    });
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get('name');
    const filePath = path.join(uploadDir, name);

    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return Response.json({ success: true });
    }

    return Response.json({ success: false, message: 'File not found' }, { status: 404 });
}

export async function PUT(req) {
    const body = await req.json();
    const oldPath = path.join(uploadDir, body.oldName);
    const newPath = path.join(uploadDir, body.newName);

    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        return Response.json({ success: true });
    }

    return Response.json({ success: false, message: 'File not found' }, { status: 404 });
}
