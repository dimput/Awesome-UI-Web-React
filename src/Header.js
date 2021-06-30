import React, { useEffect, useState } from "react";
import logo from './assets/images/logo.png';

export default function Header(){
        const [small, setSmall] = useState(false);

        useEffect(() => {
          if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
              setSmall(window.scrollY <= 300)
            );
          }
        }, []);

        return (
            <header className={`header ${
                small ? "" : "colored"
              }`}>
                <div className="wrapper">
                    <img src={logo} alt="logo" />
                    <div className="menu-header">
                        <div className="menu-item active">
                            Beranda
                            <div className="dot"></div>
                        </div>
                        <div className="menu-item">Restoran</div>
                        <div className="menu-item">Supplier</div>
                    </div>
                </div>
            </header>
        )
    }
