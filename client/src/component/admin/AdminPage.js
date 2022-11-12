import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AdminContext = createContext(null);

function AdminPage() {
  const { getAccessTokenSilently } = useAuth0();
  const [tokenData, setTokenData] = useState(null);
  useEffect(() => {
    (async () => {
      const audience = process.env.REACT_APP_AUDIENCE;
      const token = await getAccessTokenSilently({ audience });
      setTokenData(token);
    })();
  });
  return (
    <>
      <AdminContext.Provider value={tokenData}>
        <div>Admin page</div>
        {/* The Outlet component will always render the next match.  */}
        <Outlet />
      </AdminContext.Provider>
    </>
  );
}

export default AdminPage;
