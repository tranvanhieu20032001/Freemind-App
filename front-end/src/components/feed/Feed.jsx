import React, { useContext, useEffect, useState } from 'react'
import { showLeftBarContext } from "../../App";
import './feed.css'
import Share from "../share/Share";

function Feed() {

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
  return (
    <div className={`feed`}>
      <div className="feed-wrapper">
      <Share/>
      </div>
      <div className={`${isScreenSmall && context.showleftbar?'overlay':''}`}></div>
    </div>
  )
}

export default Feed