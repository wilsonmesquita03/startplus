-- DropForeignKey
ALTER TABLE "CourseLesson" DROP CONSTRAINT "CourseLesson_courseModuleId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "hasCertificate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasForum" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasSubscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "hasSuport" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "private" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "CourseLesson" ADD CONSTRAINT "CourseLesson_courseModuleId_fkey" FOREIGN KEY ("courseModuleId") REFERENCES "CourseModule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
