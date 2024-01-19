-- CreateTable
CREATE TABLE "tb_messages" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(60) NOT NULL,
    "message" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_messages_id_key" ON "tb_messages"("id");
