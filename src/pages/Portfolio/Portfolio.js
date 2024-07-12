import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ResumeData from '../../utils/ResumeData'
import './Portfolio.css'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import { Link, NavLink } from 'react-router-dom'

function Portfolio() {
  const [tabValue,setTabValue]= useState('All')
  const [projectDialog,setProjectDialog] = useState(false)

  const DialogModal=()=>(
      <Dialog onClose={()=>setProjectDialog(false)} open={projectDialog} className='projectDialog'>
          <div style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
          <DialogTitle onClose={()=>setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
          
          <DialogContent  >
            { projectDialog.image && <Link to={projectDialog.links[0].link} target='_blank'><ImageGallery  image={projectDialog.image} /></Link>}
            <Typography className='projectDialog_description'>
               {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className='projectDialog_actions'>
             {projectDialog?.links?.map(item=>(
              <a href={item.link} target='_blank' className='projectDialog_icon'>{item.icon}</a>
             ))}
          </DialogActions>
          </div>
      </Dialog>
  )

  const UniqueTag=(data)=>{
   const newData= data.map(tag=>tag.tag)
    //  console.log('newData',new Set(newData.flat()))
     return [...new Set(newData.flat())]
  }

  // console.log('tabValue',tabValue)

  // const selectedTab=(data,tabValue)=>{
  //   console.log('data',data.tag)
  //    console.log('data',data.tag.includes(tabValue))
  //    return data.tag.includes(tabValue)
  // }
  

  return (
    <>
      <Grid container  className='section pb_45'>

        <Grid container>
          <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Skills</h6>
          </Grid>
        </Grid>
        

        {/* Tab */}
        <Grid item xs={12}>
          <Tabs 
          value={tabValue} 
          indicatorColor='white'
          onChange={(event,newValue)=>setTabValue(newValue)} 
          className='customTab'
          >
            {/* <div className=''> */}
            <Tab label="All" value="All" className={tabValue=='All' ? 'customeTab_item active':'customeTab_item'} ></Tab>
            {UniqueTag(ResumeData.projects).map(tag=>(
              <Tab label={tag} value={tag} className={tabValue=='All' ? 'customeTab_item active':'customeTab_item'}></Tab>
            ))}
            {/* </div> */}
            
          </Tabs>
        </Grid>

        {/* Projects */}
        <Grid xs={12} item>
          <Grid container spacing={3}>
            {ResumeData.projects.map(items=>(
              <>
              {items.tag.includes(tabValue) || tabValue=='All' ?  
              <Grid item lg={4} md={6} sm={6} xs={12} className='cardjj' >
              <Grow in timeout={1000}>
            <Card  onClick={()=>setProjectDialog(items)} className='customCard'>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                 image={items.image[0]}
                 title={items.title}
                 className='customeCard_image'
                 />
               <CardContent className='customeCard_Content'>
                <Typography sx={{ mb: 1.5 }} className='customeCard_title'>
                  {items.title}
                </Typography>
               <Typography variant="body2" className='customeCard_caption'>
                {items.caption}
              </Typography>
              </CardContent>
            </Card>
            </Grow>
            </Grid>
              : null}
              </>
            ))}
          </Grid>
        </Grid>
        <DialogModal />

      </Grid>
    </>
  )
}

export default Portfolio
