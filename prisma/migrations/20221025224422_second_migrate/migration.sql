/*
  Warnings:

  - You are about to drop the column `user_password` on the `subscribers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "subscribers" DROP COLUMN "user_password";

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");
