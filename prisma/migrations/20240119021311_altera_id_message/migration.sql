/*
  Warnings:

  - The primary key for the `tb_messages` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "tb_messages_userId_key";

-- AlterTable
ALTER TABLE "tb_messages" DROP CONSTRAINT "tb_messages_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tb_messages_pkey" PRIMARY KEY ("id");
