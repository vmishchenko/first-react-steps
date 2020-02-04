import React from 'react';
import {NavLink} from "react-router-dom";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import InboxIcon from "@material-ui/icons/Inbox";
import TodayIcon from "@material-ui/icons/Today";
import TimelineIcon from "@material-ui/icons/Timeline";
import SettingsIcon from "@material-ui/icons/Settings";

function MenuList() {
  return (
    <ul className="menu-list">
      <NavLink
        to="/home"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <DataUsageIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Home
        </li>
      </NavLink>
      <NavLink
        to="/time"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <QueryBuilderIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Time management
        </li>
      </NavLink>
      <NavLink
        to="/index"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <InboxIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Index
        </li>
      </NavLink>
      <NavLink
        to="/calendar"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <TodayIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Calendar
        </li>
      </NavLink>
      <NavLink
        to="/analytics"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <TimelineIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Analytics
        </li>
      </NavLink>
      <NavLink
        to="/settings"
        className="menu-list__link"
        activeClassName="menu-list__link-active">
        <li className="menu-list__item">
          <SettingsIcon
            fontSize="inherit"
            className="menu-list__icon"
          />
          Settings
        </li>
      </NavLink>

    </ul>
  );
}

export default MenuList;
