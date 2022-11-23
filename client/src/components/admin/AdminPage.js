import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

//React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
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
    //  useEffect call when dependency array changes (i.e it won't call every rerender)
  }, []);
  return (
    <>
      <AdminContext.Provider value={tokenData}>
        {/* The Outlet component will always render the next match.  */}
        <Outlet />
      </AdminContext.Provider>
    </>
  );
}

export default AdminPage;
