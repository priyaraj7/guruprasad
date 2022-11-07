import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div>Admin page</div>
      <Outlet />
    </>
  );
}

export default AdminPage;
