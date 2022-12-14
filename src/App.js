/* eslint-disable no-unused-vars */
import './App.css';
import Typography from '@mui/material/Typography';
import { Box} from '@mui/system';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Autocomplete } from '@mui/material';
function App() {

  const [Creator , setCreator] = useState('');
  const [phase , setPhase] = useState('');
  const [week , setWeek] = useState('');
  const [content , setContent] = useState();
  const [folder , setFolder] = useState('');

  const [links] = useState({
    link_1 : '',
    link_2 : '',
    link_3 : '',
    link_4 : '',
  });


   const Datas ={
    Creator : Creator,
    phase : phase,
    week : week,
    content : content,
    folder : folder,
    links : links,
  }




  const events = [
    { label: "Phase_6"},
    { label: "Phase_7"},
    { label: "Phase_8"},
    { label: "Phase_9"},
    { label: "Phase_10"},
    { label: "Special_task"},
  ];

  const creator_name = [
    { label: 'abu_hasmi'},
    { label: 'abu_saeed'},
    { label: 'ahiyan_ayan'},
    { label: 'ahsanul_haque'},
    { label: 'al_fahad'},
    { label: "ashikur_rahman"},
    { label: 'drake'},
    {label: "epic_gamer_yt"},
    {label: "evan_khan_nur"},
    {label: "fariya_jannat"},
    {label: "glory_gaming"},
    {label: "hasan_faiad"},
    {label: "isabella_lily"},
    {label: "johnny_d_wazzer"},
    {label: "kane"},
    {label: "mahbub_anam_rhythm"},
    {label: "mohammad_abdullah_baki"},
    {label: "momtahin_islam_johan"},
    {label: "musfiq_mahin"},
    {label: "nazmus_saydat_shaium"},
    {label: "neon_frost"},
    {label: "nine_teens"},
    {label: "orchi_rei"},
    {label: "rakib_hasan_suhan"},
    {label: "rezwan"},
    {label: "seelorshi_dewan"},
    {label: "shadman_shahriar"},
    {label: "shorno_jee"},
    {label: "shorno_kamal_roy"},
    {label: "smiley_shorif"},
    {label: "tahcina_toma"},
    {label:"xavier_rahat"},
    {label:"xing"},
    {label:"yuunie"},
  ];


  const Weeks = [
    { label: "Week_1"},
    { label: "Week_2"},
    { label: "Week_3"},
    { label: "Week_4"},
    { label: "Week_5"},
  ];


  const Content = [
    { label: 1},
    { label: 2},
    { label: 3},
    { label: 4},
  ];
  

  
  

  return (
    <div className="App">
        <Box>
           <Typography variant="h1" component="div" gutterBottom sx={{mt:4 , fontSize:'35px'}}> 
           Work Submission
            </Typography>
            <Typography variant='p'>
            MII Weekly task submission
              </Typography>
          </Box>

         <Box sx={{background:'#fafafa'}}>
         <Box
          sx={{mt:4 , background:'#fafafa'}}
         >
        <Typography sx={{fontSize:'23px'}}>Creator's Name *</Typography>
        <Typography sx={{mt:2}}>Please Chose your name from the list</Typography>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{mt:2}}
        >
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={creator_name}
      sx={{ width: 300 , display:'flex' , alignItems:'center' , justifyContent:'center'}}
      renderInput={(params) => <TextField {...params} label="Creator's Name" />}
      onChange={(event, value) => setCreator(value.label)}
    />
        </Box>
        </Box>


        <Box
          sx={{mt:4}}
         >
        <Typography sx={{fontSize:'23px'}}>Phase/event *</Typography>
        <Typography sx={{mt:2}}>please choose the current phase you would like to submit for  or <br></br> select "Special_task" if it's an event..</Typography>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{mt:2}}
        >
         <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={events}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Phase/event"/>}
      onChange={(event, value) => setPhase(value.label)}
    />
        </Box>

        <Box>
        <Box sx={{mt:4 , display:phase.length === 0 ? 'none' : 'block'}}>
          <Typography sx={{fontSize:'23px'}}>Week no*</Typography>
          <Typography sx={{mt:2}}>Please choose the week you would like to submit for</Typography>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{mt:2}}
        >
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Weeks}
      sx={{ width: 300 }}
      onChange={(event, value) => setWeek(value.label)}
      renderInput={(params) => <TextField {...params} label="Phase/event"/>}
    />
        </Box>
        </Box> 
        </Box>

            {/* Content */}
        <Box
        sx={{mt:4}}
        >
          <Typography sx={{fontSize:'23px'}}>How many content have you posted this week? *</Typography>
          <Typography sx={{mt:2}}>Please select how many content have you posted on the group this week. Maximum limit is 4</Typography>
          <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{mt:2}}
          >
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Content}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Content"/>}
      onChange={(event, value) => setContent(value.label)}
    />
        </Box>
       <Box>
       <Box sx={{display: content >= 1 ? 'block' : 'none'}}>
          <Typography sx={{fontSize:"20px" , mt:4 }}>Link 1 *</Typography>
          <Typography sx={{mt:2}}>The content you submitted first/Your first post link of the week.</Typography>
          <TextField label="Link 1*" id="fullWidth" sx={{width:300 , mt:2}} onChange={(e) => links.link_1 = e.target.value}/>
        </Box>
        <Box sx={{display: content >= 2 ? 'block' : 'none'}}>
          <Typography sx={{fontSize:"20px" , mt:4}}>Link 2 *</Typography>
          <Typography sx={{mt:2}}>Content link which you posted on day 2</Typography>
          <TextField label="Link 2*" id="fullWidth" sx={{width:300 , mt:2}} onChange={(e) => links.link_2 = e.target.value}/>
        </Box>
        <Box sx={{display: content >= 3 ? 'block' : 'none'}}>
          <Typography sx={{fontSize:"20px" , mt:4}}>Link 3 *</Typography>
          <Typography sx={{mt:2}}>Content link which you posted on day 3</Typography>
          <TextField label="Link 3*" id="fullWidth" sx={{width:300 , mt:2}} onChange={(e) => links.link_3 = e.target.value}/>
       </Box>
       <Box sx={{display: content >= 4 ? 'block' : 'none'}}>
          <Typography sx={{fontSize:"20px" , mt:4}}>Link 4 *</Typography>
          <Typography sx={{mt:2}}>Content link which you posted on day 4</Typography>
          <TextField label="Link 4*" id="fullWidth" sx={{width:300 , mt:2}}onChange={(e) => links.link_4 = e.target.value}/>
          </Box>
          </Box>
        </Box>

        {/* Folder  */}


        <Box>
        <Typography sx={{mt:4 , fontSize:'23px'}}>
        Drive Folder link *
        </Typography>
        <Typography sx={{mt:2}}>
        Please upload all of your works to a google drive folder & paste the link of that folder here. You can also put multiple links using ',' after one link.
          </Typography>
          <TextField id="outlined-basic" label="Folder" variant="standard" onChange={(e => setFolder(e.target.value))}/>
        </Box>
        <Box 
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{mt:5}}
        >
        <Checkbox/>
        <Typography>Email me a copy of my responses</Typography>
        </Box>
        <Box>
        <Button variant="contained" sx={{mt:4}}>Submit</Button>
        </Box>
        </Box>
        </Box>
    </div>
  );
}

export default App;
