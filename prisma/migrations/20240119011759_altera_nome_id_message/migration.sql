/*
  Warnings:

  - The primary key for the `tb_messages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tb_messages` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `tb_messages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `tb_messages` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tb_messages_id_key";

-- AlterTable
ALTER TABLE "tb_messages" DROP CONSTRAINT "tb_messages_pkey",
DROP COLUMN "id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "tb_messages_pkey" PRIMARY KEY ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "tb_messages_userId_key" ON "tb_messages"("userId");
