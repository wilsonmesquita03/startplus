import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const permissions = [
  { name: "access_dashboard" },
  { name: "access_marketing_dashboard" },
  { name: "access_courses_dashboard" },
  { name: "create_courses" },
  { name: "access_bundles_dashboard" },
  { name: "create_bundles" },
  { name: "view_upcoming_courses" },
  { name: "create_upcoming_courses" },
  { name: "access_quizzes" },
  { name: "access_certificates" },
  { name: "access_assignments" },
  { name: "access_webinars" },
  { name: "access_course_noticeboards" },
  { name: "manage_enrollments" },
  { name: "access_waitlists" },
  { name: "manage_categories" },
  { name: "create_category" },
  { name: "manage_filters" },
  { name: "view_reviews" },
  { name: "manage_consultants" },
  { name: "schedule_appointments" },
  { name: "manage_staff" },
  { name: "manage_students" },
  { name: "manage_instructors" },
  { name: "manage_organizations" },
  { name: "manage_users" },
  { name: "manage_roles" },
  { name: "create_role" },
  { name: "manage_groups" },
  { name: "manage_forums" },
  { name: "manage_featured_topics" },
  { name: "manage_recommended_topics" },
  { name: "manage_supports" },
  { name: "manage_store" },
  { name: "manage_blog" },
  { name: "manage_pages" },
  { name: "manage_testimonials" },
  { name: "manage_tags" },
  { name: "manage_regions" },
  { name: "manage_forms" },
  { name: "manage_ai_contents" },
  { name: "manage_content_delete_requests" },
  { name: "access_financial_data" },
  { name: "manage_rewards" },
  { name: "manage_abandoned_cart" },
  { name: "manage_webinar_features" },
  { name: "manage_cashback" },
  { name: "manage_gifts" },
  { name: "manage_advertising" },
  { name: "manage_newsletters" },
  { name: "manage_referrals" },
  { name: "manage_registration_bonus" },
  { name: "manage_advertising_modal" },
  { name: "manage_floating_bars" },
  { name: "manage_purchase_notifications" },
  { name: "manage_product_badges" },
  { name: "manage_translator" },
  { name: "system_settings" },
];

async function main() {
  console.log("Iniciando o seed...");

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { name: permission.name },
      update: {},
      create: {
        name: permission.name,
      },
    });
    console.log(`Permissão "${permission.name}" criada ou atualizada.`);
  }

  const findPermissions = await prisma.permission.findMany({
    select: {
      id: true,
    },
  });

  const adminRole = await prisma.role.upsert({
    where: { name: "superadmin" },
    update: {},
    create: {
      name: "superadmin",
    },
  });

  console.log(`Role "${adminRole.name}" criada ou atualizada.`);

  await prisma.rolePermission.createMany({
    data: findPermissions.map((permission) => ({
      roleId: adminRole.id,
      permissionId: permission.id,
    })),
  });

  console.log(`Permissões atribuidas a role "${adminRole.name}".`);

  const studentRole = await prisma.role.upsert({
    where: { name: "student" },
    update: {},
    create: {
      name: "student",
    },
  });

  console.log(`Role "${studentRole.name}" criada ou atualizada.`);

  await prisma.user.create({
    data: {
      displayName: "Admin",
      email: "admin@localhost.com",
      username: "superadmin",
      password: bcrypt.hashSync("superadmin", 10),
      roleId: adminRole.id,
    },
  });

  console.log("Admin criado.");

  await prisma.config.upsert({
    where: { id: 1 },
    update: {},
    create: {
      defaultRoleId: studentRole.id,
    },
  });

  console.log("Configuração criada ou atualizada.");

  console.log("Seed concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

