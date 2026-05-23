import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "./generated/prisma/client";

// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClient | undefined;
// };

// const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// export const prisma =
//     globalForPrisma.prisma ??
//     new PrismaClient({ adapter: adapter });

// if (process.env.NODE_ENV !== "production") {
//     globalForPrisma.prisma = prisma;
// }