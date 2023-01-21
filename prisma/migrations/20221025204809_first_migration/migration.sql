-- CreateTable
CREATE TABLE "users" (
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_name" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "subscribers" (
    "user_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,

    CONSTRAINT "subscribers_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "components" (
    "component_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "html_code" TEXT NOT NULL,
    "css_code" TEXT NOT NULL,
    "js_code" TEXT,
    "tags" TEXT[],

    CONSTRAINT "components_pkey" PRIMARY KEY ("component_id")
);

-- CreateTable
CREATE TABLE "tags" (
    "tags_id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("tags_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscribers_user_email_key" ON "subscribers"("user_email");
