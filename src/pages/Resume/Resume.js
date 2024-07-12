import { Grid, Typography, Paper, TextField } from "@mui/material";
import React from "react";
import ResumeData from "../../utils/ResumeData";
import "./Resume.css";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineDot from "@mui/lab/TimelineDot";
import CustomButton from "../../components/Button/Button";

function Resume() {
  const Skilled = ({ ResumeData, class1 }) => {
    return (
      // <div >
      <div className={`innerclass ${class1}`}>
        {ResumeData.skill.map((skill) => (
          <Grid md={6} xs={12} sm={6} lg={3}>
            {/* <Carousel.Item> */}
            <Paper elevation={3} className="skill" fullWidth>
              <Typography variant="h6" className="skill_title">
                {skill.title}
              </Typography>
              {skill.description.map((desc) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot variant={"outlined"} className="timeline_dot" />
                  {desc}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
        {/* // </div> */}
      </div>
    );
  };

  return (
    <>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {ResumeData.about}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item>
          <Grid container xs={12} className="resume_timeline">
            <Grid item xs={12} lg={6}>
              <CustomTimeline title="Work Experiance" icon={<WorkIcon />}>
                {ResumeData.experiance.map((experiance) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experiance.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experiance.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        <ul style={{ paddingLeft: "16px" }}>
                          {" "}
                          {experiance.description.map((desc) => (
                            <li>{desc}</li>
                          ))}
                        </ul>
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            <Grid item xs={12} lg={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {ResumeData.education.map((experiance) => (
                  <TimelineItem>
                    <CustomTimelineSeperator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experiance.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experiance.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experiance.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Service</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent={"space-around"}>
            {ResumeData.service.map((key) => (
              <Grid item md={6} lg={3} sm={6} xs={12}>
                <div className="service">
                  {/* <Icon className='service_icon'>{key.icon}</Icon> */}
                  <span>{key.icon}</span>
                  <Typography className="service_title">{key.title}</Typography>
                  <Typography className="service_description">
                    {key.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent={"center"}>
            <div className="outerClass" style={{ width: "760px" }}>
              <Skilled ResumeData={ResumeData} class1="first" />
              <Skilled ResumeData={ResumeData} class1="second" />
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid className="section pb_45" spacing={4}>
        <Grid item xs={12}>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  name="name"
                  label="Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid marginTop={2} item xs={12}>
                <CustomButton text={"Submit"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5} className="p_left pt_45">
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={4} sm={6} md={4}>
                <Typography className="contactInfo_item">
                  <span>Address: </span>
                  {ResumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12} xl={4} sm={6} md={4}>
                <Typography className="contactInfo_item">
                  <span>Phone: </span>
                  {ResumeData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12} xl={4} sm={6} md={4}>
                <Typography className="contactInfo_item">
                  <span>Email: </span>
                  {ResumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container class="contactInfo_socialsContainer">
              {Object.keys(ResumeData.socials).map((key) => (
                <Grid
                  marginTop={2}
                  item
                  xs={12}
                  md={6}
                  sm={6}
                  className="contactInfo_social "
                >
                  <a href={ResumeData.socials[key].link}>
                    {ResumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
