import { MailOutline } from '@material-ui/icons'
import { PhoneAndroid } from '@material-ui/icons'
import { Publish } from '@material-ui/icons'
import { LocationSearching } from '@material-ui/icons'
import { CalendarToday, PermIdentity } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <div className="user">
          <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
              <Link to="/newUser">
              <button className="userAddButton">Create</button>
              </Link>
          </div>
          <div className="userContainer">
              <div className="userShow">
                 <div className="userShowTop">
                     <img alt="profile" src="https://avatars.githubusercontent.com/u/77520434?v=4" className="userShowImg" />
                     <div className="userShowTopTitle">
                         <span className="userShowUsername">Thiago Oliveira</span>
                         <span className="userShowUserTitle">Software Engineer</span>
                     </div>
                 </div>
                 <div className="userShowButton">
                     <span className="userShowTitle">Account Details</span>
                     <div className="userShowInfo">
                     <PermIdentity className="userShowIcon" />
                     <span className="userShowInfoTitle">Gethi</span>
                     </div>
                     <div className="userShowInfo">
                     <CalendarToday className="userShowIcon" />
                     <span className="userShowInfoTitle">15.10.2001</span>
                     </div>
                     <span className="userShowTitle">Contact Details</span>
                     <div className="userShowInfo">
                     <PhoneAndroid className="userShowIcon" />
                     <span className="userShowInfoTitle">+55 21 967163455</span>
                     </div>
                     <div className="userShowInfo">
                     <MailOutline className="userShowIcon" />
                     <span className="userShowInfoTitle">thiagoliveira01@globomail.com</span>
                     </div>
                     <div className="userShowInfo">
                     <LocationSearching className="userShowIcon" />
                     <span className="userShowInfoTitle">Rio de Janeiro, Brazil</span>
                     </div>
                 </div>
              </div>
              <div className="userUpdate">
                     <span className="userUpdateTitle">Edit</span>
                     <form className="userUpdateForm">
                         <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>
                                    Username
                                </label>
                                <input type="text" placeholder="Gethi" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Full Name
                                </label>
                                <input type="text" placeholder="Thiago Oliveira" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Email
                                </label>
                                <input type="text" placeholder="thiagoliveira01@globomail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Phone
                                </label>
                                <input type="text" placeholder="+55 21 967163455" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>
                                    Address
                                </label>
                                <input type="text" placeholder="Rio de Janeiro, Brazil" className="userUpdateInput" />
                            </div>
                           
                         </div>
                         <div className="userUpdateRight">
                              <div className="userUpdateUpload">
                                  <img src="https://avatars.githubusercontent.com/u/77520434?v=4" alt="profile" className="userUpdateImg" />
                                  <label htmlFor="file">
                                      <Publish className="userUpdateIcon" />
                                  </label>
                                  <input type="file" id="file" style={{display: 'none'}} />
                              </div>
                              <button className="userUpdateButton">Update</button>
                         </div>
                     </form>
              </div>
          </div>
        </div>
    )
}
