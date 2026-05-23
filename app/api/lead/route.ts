import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const lead = await prisma.lead.create({
            data: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                course: body.course,
                source: body.source,
            },
        });

        return NextResponse.json({
            success: true,
            lead,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "error.message",
            },
            { status: 500 }
        );
    }
}