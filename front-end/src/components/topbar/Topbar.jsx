import React, { useContext } from "react";

import "./topbar.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  BsBellFill,
  BsFillChatTextFill,
  BsHouseHeartFill,
  BsPersonFillAdd,
  BsSearch,
} from "react-icons/bs";
import {FaTimes} from 'react-icons/fa'
import { MdFormatListBulleted } from "react-icons/md";
import { showLeftBarContext } from "../../App";
function Topbar() {
  const context = useContext(showLeftBarContext);
  const icons = [
    {
      id: 1,
      name: "Home",
      icon: (
        <>
          <BsHouseHeartFill className="icon" />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 2,
      name: "Friends",
      icon: (
        <>
          <BsPersonFillAdd className="icon" />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 3,
      name: "Message",
      icon: (
        <>
          <BsFillChatTextFill className="icon" />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
    {
      id: 4,
      name: "Notification",
      icon: (
        <>
          <BsBellFill className="icon" />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100037458979961",
    },
  ];

  return (
    <div className="topbar background container">
      <div className="wrapper-topbar-lc">
        <div className="topbarLeft">
          <h1 className="logo">FREEMIND</h1>
          <h1 className="logo-mb">FM</h1>
        </div>

        <div className="topbarCenter">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search on Freemind..."
              className="search-input"
            />
            <Tippy content="Tìm kiếm">
              <div className="btn-search">
                <BsSearch className="icon" />
              </div>
            </Tippy>
          </div>
        </div>
        <div className="leftbar-menu" onClick={context._showLeftbar}>
          {context.showleftbar ? (
            <FaTimes size={25} className="icon" />
            ) : (
              <MdFormatListBulleted size={25} className="icon" />
          )}
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          {icons.map(({ id, name, icon }) => (
            <Tippy content={name} key={id}>
              <div className="icon-item">
                {icon}
                <span className="notify">1</span>
              </div>
            </Tippy>
          ))}
        </div>
        <Tippy content="Account">
          <div className="avatar-mini">
            <img
              className="avatar"
              src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg"
              alt=""
            />
          </div>
        </Tippy>
      </div>
    </div>
  );
}

export default Topbar;
