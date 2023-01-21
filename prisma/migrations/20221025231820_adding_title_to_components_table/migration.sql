/*
  Warnings:

  - Added the required column `title` to the `components` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "components" ADD COLUMN     "title" TEXT NOT NULL;
