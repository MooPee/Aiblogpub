import { Outlet } from "react-router";
import AdminHeader from "../../components/admin/AdminHeader";

export default function AdminRoot() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AdminHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
