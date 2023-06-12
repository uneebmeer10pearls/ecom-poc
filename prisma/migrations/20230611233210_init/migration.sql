/*
  Warnings:

  - You are about to drop the `user_address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_address" DROP CONSTRAINT "user_address_userId_fkey";

-- DropTable
DROP TABLE "user_address";
