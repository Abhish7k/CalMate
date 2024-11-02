import { redirect } from "next/navigation";
import { auth } from "../lib/auth";

const DashboardPage = async () => {
  const authenticatedUser = await auth();

  if (!authenticatedUser?.user) {
    return redirect("/");
  }

  console.log("authenticated user ->", authenticatedUser);

  return <div>Dashboard</div>;
};

export default DashboardPage;
