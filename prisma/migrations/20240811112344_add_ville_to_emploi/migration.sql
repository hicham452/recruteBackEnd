/*
  Warnings:

  - Added the required column `ville` to the `offre_emploi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "offre_emploi" ADD COLUMN     "ville" TEXT NOT NULL;
