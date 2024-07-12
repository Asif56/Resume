import { Typography } from "@mui/material";
import React from "react";
import "./Profile.css";
import CustomTimeline, { CustomTimelineSeperator } from "../Timeline/Timeline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TimelineItem from "@mui/lab/TimelineItem";
import resumeData from "../../utils/ResumeData.js";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button.js";
import GetAppIcon from "@mui/icons-material/GetApp";
const CustomTimelineItem = ({ title, text, link, icon }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <span style={{ textAlign: "center" }}>
            <span id="iconSize">{icon}</span>
            <a href={link} rel="noreferrer" target="_blank">
              {text}
            </a>
          </span>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <div className="profile_image">
        <img src={resumeData.image} alt="" />
      </div>

      <div className="profile_info">
        <CustomTimeline icon={<PersonOutlinedIcon />} title={resumeData.name}>
          <CustomTimelineItem key="Name" title="Name" text={resumeData.name} />
          <CustomTimelineItem
            key="Title"
            title="Title"
            text={resumeData.title}
          />
          <CustomTimelineItem
            key="Email"
            title="Email"
            text={resumeData.email}
          />
          {Object.keys(resumeData.socials).map((key) => {
            return (
              <CustomTimelineItem
                key={key}
                title={key}
                text={resumeData.socials[key].text}
                link={resumeData.socials[key].link}
                icon={resumeData.socials[key].icon}
              />
            );
          })}
        </CustomTimeline>
        {/* <br/> */}
        <div className="btn_container">
          <a
            href="https://drive.google.com/file/d/1X2g8FEO4CaR7EJxPERDdz8NNmzlRF_N9/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CustomButton text={"Download-CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
