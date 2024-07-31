-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "priority" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
