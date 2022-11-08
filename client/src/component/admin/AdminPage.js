import { Outlet } from "react-router-dom";

function AdminPage() {
  return (
    <>
      <div>Admin page</div>
      {/* The Outlet component will always render the next match.  */}
      <Outlet />
    </>
  );
}

export default AdminPage;
