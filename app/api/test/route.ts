import { prisma } from "@/lib/prisma";

export async function GET() {
    const users = await prisma.lead.findMany();

    return Response.json(users);
}