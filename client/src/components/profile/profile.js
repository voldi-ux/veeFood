//the profile page should have the user's dashboard. it should show the amount of orders the user has, name and surname, money spent, current orders, logout button, last order date and amount. it should have two screens; one for the dashboard and one for the current order.

import React from "react";
import "./profile.scss";
import {
  AiOutlineMail,
  AiOutlineDollar,
  AiTwotoneWallet,
} from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import MainButton from "../button/button";
import { Spinner } from "react-bootstrap";
import moment from 'moment'
import {profileImg} from '../../data'
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-main">
        <div className="profile-content">
          <img
            src={profileImg}
            alt="profile-img"
          />
          <div className="profile-content-details">
            {/* name and surname should go here */}
            <h1>Voldi</h1>
            <h1>Muyumba</h1>
          </div>
        </div>
        <div className="profile-details">
          <div className="profile-detail">
            <div>
              <AiOutlineMail className="profile-icon" />
              <strong>Email</strong>
            </div>
            <h1>voldimuyumba57@gmail.com</h1>
          </div>

          <div className="profile-detail">
            <div>
              <AiTwotoneWallet className="profile-icon" />
              <strong>Total Orders</strong>
            </div>
            <h1>6</h1>
          </div>
          <div className="profile-detail">
            <div>
              <AiOutlineDollar className="profile-icon" />
              <strong>Total cash spent</strong>
            </div>
            <h1>R230</h1>
          </div>
          <MainButton style="black" value="Log Out" />
        </div>
      </div>
      <div className="orders">
        <h1 className="text-center my-4">You have 2 orders in progress</h1>
        <div className="order-container">
          <div className="order-item">
            <div className="order-item-content flex spb">
              <strong>Items</strong>
              <span>1 &times; 6</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Time</strong>
              <span>{moment().format("MMMM Do YYYY, h:mm:ss a")}</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Status</strong>

              <span className="status">
                {/* status value can either be of preparing, delivered, being delivered */}
                preparing <Spinner animation="grow" variant="success" />
              </span>
            </div>
          </div>
          <div className="order-item">
            <div className="order-item-content flex spb">
              <strong>Items</strong>
              <span>1 &times; 6</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Time</strong>
              <span>{moment().format("MMMM Do YYYY, h:mm:ss a")}</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Status</strong>

              <span className="status">
                {/* status value can either be of preparing, delivered, being delivered */}
                delivered <Spinner animation="grow" variant="primary" />
              </span>
            </div>
            <MainButton value="Clear" />
          </div>
          <div className="order-item">
            <div className="order-item-content flex spb">
              <strong>Items</strong>
              <span>1 &times; 6</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Time</strong>
              <span>{moment().format("MMMM Do YYYY, h:mm:ss a")}</span>
            </div>
            <div className="order-item-content flex spb">
              <strong>Status</strong>

              <span className="status">
                {/* status value can either be of preparing, delivered, being delivered */}
                Being delivered <Spinner animation="grow" variant="warning" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
