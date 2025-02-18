-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('About', 'Clients', 'Discount', 'InstitutionalArea', 'StatsSection');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "displayName" TEXT,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Config" (
    "id" SERIAL NOT NULL,
    "defaultRoleId" INTEGER NOT NULL,

    CONSTRAINT "Config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrollmentCart" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "EnrollmentCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnrollmentItem" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,
    "priceAtAdd" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "EnrollmentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "pricePaid" DECIMAL(65,30) NOT NULL,
    "purchasedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseLandingPage" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CourseLandingPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandingComponent" (
    "id" SERIAL NOT NULL,
    "landingId" INTEGER NOT NULL,
    "type" "ComponentType" NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "settings" JSONB NOT NULL,

    CONSTRAINT "LandingComponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EnrollmentCart_userId_key" ON "EnrollmentCart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseLandingPage_courseId_key" ON "CourseLandingPage"("courseId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Config" ADD CONSTRAINT "Config_defaultRoleId_fkey" FOREIGN KEY ("defaultRoleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrollmentCart" ADD CONSTRAINT "EnrollmentCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrollmentItem" ADD CONSTRAINT "EnrollmentItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "EnrollmentCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnrollmentItem" ADD CONSTRAINT "EnrollmentItem_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseLandingPage" ADD CONSTRAINT "CourseLandingPage_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandingComponent" ADD CONSTRAINT "LandingComponent_landingId_fkey" FOREIGN KEY ("landingId") REFERENCES "CourseLandingPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
