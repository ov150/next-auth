import React from "react";

const AuthLayout = ({ children } :{children : React.ReactNode}) =>{
    return (
        <div>
            <nav className="bg-black text-white">
                nav bar
            </nav>
            {children}
        </div>
    );
};
export default AuthLayout;