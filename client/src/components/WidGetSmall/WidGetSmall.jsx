import { Visibility  } from '@material-ui/icons'
import React from 'react'
import './widgetsmall.css'

export default function WidGetSmall() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" />
                    <div className="widgetSmUser">
                       <span className="widgetSmUsername">Thiago Oliveira</span>
                       <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"  />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" />
                    <div className="widgetSmUser">
                       <span className="widgetSmUsername">Thiago Oliveira</span>
                       <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        < Visibility className="widgetSmIcon"  />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" />
                    <div className="widgetSmUser">
                       <span className="widgetSmUsername">Thiago Oliveira</span>
                       <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"   />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" />
                    <div className="widgetSmUser">
                       <span className="widgetSmUsername">Thiago Oliveira</span>
                       <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        < Visibility className="widgetSmIcon"  />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
