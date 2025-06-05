// lib/prisma.js
const { PrismaClient } = require('../lib/generated/prisma'); // Update the import path to match your generated Prisma client location

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;