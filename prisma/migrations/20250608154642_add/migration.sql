/*
  Warnings:

  - The `status` column on the `Parking_Spaces` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SpaceStatus" AS ENUM ('available', 'unavailable');

-- AlterTable
ALTER TABLE "Parking_Spaces" DROP COLUMN "status",
ADD COLUMN     "status" "SpaceStatus" NOT NULL DEFAULT 'available';
