import React from 'react'
import NavbarLanding from '../../components/NavBarLanding/NavBarLanding'
import NewsFeedLanding from '../../components/NewFeedLanding/NewsFeedLanding.jsx'
import RightbarLanding from '../../components/RightbarLanding/RightbarLanding.jsx'
import SidebarLanding from '../../components/SidebarLanding/SidebarLanding'


const LandingPage = () => {
  return (
    <>
    <NavbarLanding />
    <div className="flex">
        <SidebarLanding />
        <NewsFeedLanding />
        <RightbarLanding />
</div>
    </>
  )
}

export default LandingPage