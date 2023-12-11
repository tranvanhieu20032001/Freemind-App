import React, { useContext, useEffect, useState } from "react";
import {
  MdGroup,
  MdRssFeed,
  MdVideoLibrary,
} from "react-icons/md";
import {
  BsFacebook,
  BsFillCalendarDayFill,
  BsFillPersonCheckFill,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import "./leftbar.css";
import DarkMode from "../../layouts/darkmode/DarkMode";
import { showLeftBarContext } from "../../App";


function Leftbar() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const handleResize = () => {
    setIsScreenSmall(window.innerWidth <= 768);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup: loại bỏ sự kiện resize khi component bị unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const context = useContext(showLeftBarContext)
  const listItems = [
    {
      id: 1,
      icon: (
        <>
          <MdRssFeed size={25} className="icon" />
        </>
      ),
      text: "Feed",
    },
    {
      id: 2,
      icon: (
        <>
          <BsFillPersonCheckFill size={25} className="icon" />
        </>
      ),
      text: "Add Friend",
    },
    {
      id: 3,
      icon: (
        <>
          <MdVideoLibrary size={25} className="icon" />
        </>
      ),
      text: "Video",
    },
    {
      id: 4,
      icon: (
        <>
          <BsFillCalendarDayFill size={25} className="icon" />
        </>
      ),
      text: "Memory",
    },
    {
      id: 5,
      icon: (
        <>
          <MdGroup size={25} className="icon" />
        </>
      ),
      text: "Group",
    },
  ];

  const shortcut = [
    {
      id: 1,
      icon: (
        <>
          <BsFacebook size={25} color="#395693" className="icon" />
        </>
      ),
      text: "Facebook",
    },
    {
      id: 2,
      icon: (
        <>
          <BsInstagram size={25} color="#e64d55" className="icon" />
        </>
      ),
      text: "Instagram",
    },
    {
      id: 3,
      icon: (
        <>
          <BsYoutube size={25} color="#f70000" className="icon" />
        </>
      ),
      text: "Youtube",
    },
  ];

  return (
    <div className={`leftbar ${context.showleftbar?'active':''}`}>
      <div className="leftbar-wrapper">
        <div className="leftbarList-item">
          <img
            className="avatar"
            src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg"
            alt=""
          />
          <span className="leftbarList-item-text text">Văn Hiếu</span>
        </div>

        <ul className="leftbarList" >
          {listItems.map(({ id, icon, text }) => (
            <li key={id} className="leftbarList-item">
              {icon}
              <span className="leftbarList-item-text text">{text}</span>
            </li>
          ))}
          <DarkMode />
        </ul>
        
            <hr/>

        <div className="shortcut">
          <h1 className="sub-title text">Short Cut</h1>
          <ul className="list_shortcut">
            {shortcut.map(({ id, icon, text }) => (
              <li key={id} className="leftbarList-item">
                {icon}
                <span className="leftbarList-item-text text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className={`overlay ${isScreenSmall && context.showleftbar?'active':''}`}></div> */}
    </div>
  );
}

export default Leftbar;
