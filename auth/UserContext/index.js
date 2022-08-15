import { useEffect, useContext, useState, createContext } from 'react';
import { useRouter } from 'next/router';
import { Auth, Amplify } from 'aws-amplify';
import awsmobile from '../../../src/aws-exports';

Amplify.configure(awsmobile);

const UserContext = createContext();
export const initUser = { user: null };

export const UserProvider = ({ children, user }) => {
  const [currentUserContext, setCurrentUserContext] = useState(user || initUser);

  const setUserContext = (values) => {
    setCurrentUserContext(values);
  };

  return (
    <UserContext.Provider value={{ userContext: currentUserContext, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export function useAuth(redirect = false, path) {
  const { userContext, setUserContext } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (!userContext.user) {
      let updateUser = async () => {
        try {
          let user = await Auth.currentAuthenticatedUser();
          setUserContext({ user });
          if (path) {
            router.push(path);
          }
        } catch {
          if (redirect) {
            router.push('/');
          }
        }
      };
      updateUser();
    }
  }, [userContext.user]);
  return { user: userContext.user };
}

export default UserContext;