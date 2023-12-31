import React from 'react'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'


export default function Home() {
  return (
    <>
    <Topbar/>
    <Leftbar/>
    <Feed/>
    <Rightbar/>
    </>
  )
}
