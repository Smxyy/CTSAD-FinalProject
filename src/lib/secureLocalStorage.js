import secureLocalStorage from "react-secure-storage";

export const storeAccessToken = (accessToken) => {
    console.log("accessToken", accessToken);
    secureLocalStorage.setItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX,
        accessToken.access_token
    );
};

export const getAccessToken = () => {
    return secureLocalStorage.getItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX);
};

export const removeAccessToken = () => {
    secureLocalStorage.removeItem(
        import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX);
};