import "./header.css"
import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
    return (
        <div className="headerContainer">
            <div className="leftSideHeader">
                <span className="logo">CodeBud</span>
                <HomeIcon className="homeClick"/>
            </div>
            <div className="middleSideHeader">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input
                        placeholder="Search for a project"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="rightSideHeader">
                    <ChatIcon className="righHeaderIcons"/>
                    <NotificationsIcon className="righHeaderIcons"/>
                    <AccountBoxIcon className="righHeaderIcons"/>
            </div>
        </div>
    )
}

export default Header
