import "./styles.css";

import Nav from "./components/Nav";
import Logo from "./components/Logo";
import { useState } from "react";
import Router from "./components/Router";

export default function App() {
  const [pageUrl, setPageUrl] = useState("/");

  const sidebarLinks = [
    {
      id: 1,
      title: "Users",
      href: "/users/"
    },
    {
      id: 2,
      title: "Companies",
      href: "/companies/"
    },
    {
      id: 3,
      title: "Settings",
      href: "/settings/"
    }
  ];

  const userbarLinks = [
    {
      id: 1,
      title: "Reports",
      href: "/reports/"
    },
    {
      id: 2,
      title: "Notes",
      href: "/notes/"
    }
  ];

  const showPage = (e, href) => {
    e.preventDefault();

    if (href !== pageUrl) {
      setPageUrl(href);
    }
  };

  return (
    <div className="container clearfix two-columns">
      <div className="sidebar">
        <div className="header mb-30">
          <Logo handler={showPage} />
        </div>
        <Nav links={sidebarLinks} handler={showPage} />
      </div>
      <div className="mainbar">
        <div className="userbar mb-30">
          <Nav links={userbarLinks} type="horizontal" handler={showPage} />
        </div>
        <div className="content">
          <Router url={pageUrl} />
        </div>
      </div>
    </div>
  );
}
