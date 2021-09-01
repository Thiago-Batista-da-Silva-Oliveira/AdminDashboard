import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">TBSO</span>
                    </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone />
                            <span className="topInconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Language />
                            <span className="topInconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                            <Settings />
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" className="topAvatar" />
                    </div>
                </div>
            </div>
        </>
    )
}
