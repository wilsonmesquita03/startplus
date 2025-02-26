import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export async function GET() {
  const session = await getSession();

  if (!session.user) {
    return redirect("/login");
  }

  if (!session.user.permissions.includes("access_admin_dashboard")) {
    redirect("/dashboard/admin");
  }
}

