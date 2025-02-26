import { protectedRoute } from "@/lib/protect-route";

export default async function Page() {
  await protectedRoute('access_admin_dashboard')

  return (
    <>
    </>
  );
}