import React, { createContext, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { getCookie } from "../utilities/cookies";
import { env, handleAxiosError } from "../utilities/function";
import axios from "axios";
// import Setup from '../components/Setup';
import { useMessage } from "../components/Header";

const authorizeContext = createContext();

const authServer = axios.create({
    baseURL: env("AUTHENTICATION_SERVER"),
});

const accessToken = getCookie("accessToken");
authServer.defaults.withCredentials = false;
authServer.defaults.headers.Authorization = `Bearer ${accessToken}`;

const AuthorizationProvider = ({ children }) => {
    const [content, setContent] = useState(
        <Loading message="Please wait, logging you in..." />
    );
    const [user, setUser] = useState({});
    const { showError } = useMessage();

    const authorize = async (loggedIn, cb) => {
        if (loggedIn) {
            setContent(children);
        } else {
            const redirectTo =
                env("AUTHENTICATION_CLIENT") +
                "/login?redirectto=" +
                encodeURIComponent(window.location.href);
            setContent(
                <Loading
                    message="Please wait, redirecting you to Easy Meeting Accounts"
                    redirectTo={redirectTo}
                />
            );
        }
        if (typeof cb === "function") cb(setUser);
    };

    useEffect(() => {
        (async () => {
            try {
                const role = getCookie("role");
                if (!role) throw new Error("role not found");
                const response = await authServer.get(`/${role}/profile`);
                const user = response.data.user;

                authorize(true, (setUser) => setUser(user));
            } catch (err) {
                console.log(err);
                handleAxiosError(err, showError);
                authorize(false);
            }
        })();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <authorizeContext.Provider
            value={{ authorize, setUser, user, setContent }}>
            {content}
        </authorizeContext.Provider>
    );
};

const useAuthorize = () => useContext(authorizeContext).authorize;
const useUser = () => useContext(authorizeContext)?.user;
const useSetUser = () => useContext(authorizeContext).setUser;
const useSetContent = () => useContext(authorizeContext).setContent;

export default AuthorizationProvider;
export { useAuthorize, useUser, useSetUser, useSetContent };
