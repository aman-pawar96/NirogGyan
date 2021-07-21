import {Box,Grid} from '@material-ui/core'
import patient from '../constants/patient.json'
import capsule from '../constants/Images/capsule.png'
import headache from '../constants/Images/headache.png'
import constipation from '../constants/Images/constipation.png'
import apetite from '../constants/Images/customer.png'
import diziness from '../constants/Images/diziness.png'
import fatigue from '../constants/Images/exhausted-man.png'
import nausea from '../constants/Images/vomit.png'
import { Chrono } from "react-chrono";
import TimeLine from '../component/TimeLine'
import moment from 'moment'
import { useEffect, useState } from 'react'

export default function Medication(){

   
        let timeLines:any=[]
        for(let index=0;index<patient.Medication.length;index++){
            let timeLineData=[
                {
                    title:"Morning",
                    contentTitle:"Start of Day"
                }
            ]
            for (let doseIndex=0;doseIndex<patient.Medication[index]["dose"].length;doseIndex++){
                timeLineData.push(
                    {
                    title:patient.Medication[index]["dose"][doseIndex]["time"],
                    contentTitle:`Take ${patient.Medication[index]["dose"][doseIndex]["time"]} ${patient.Medication[index]["type"]}`
                }
                )
            }

            timeLineData.push(  
                {
                    title:"Night",
                    contentTitle:"End of Day"

                }
            )
            timeLines.push(timeLineData);
        }
        console.log(timeLines);

    return(
        <div>
        <Box m={1} p={1}></Box>
        <Grid spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
            <Grid container>
                <Grid item xs={6} md={6} sm={6} lg={6}>
                <Box m={1} p={1} height={50}>
                <div style={{ position:"relative",bottom:0}}>
                    <div style={{fontSize:16}}>
                        <strong>MEDICATIONS</strong>
                    </div>
                    <div style={{fontSize:30,display: "inline-flex",alignItems: "center" }}>
                        <img src={capsule} height={28} width={28}/>
                        <strong>Active Medications ({patient.Medication.length})</strong>
                    </div>
                </div>
                </Box>
                </Grid>
                <Grid item xs={2} md={2} sm={2} lg={2}>
                    <Box m={1} p={1} height={50}>
                    <div style={{bottom:0}}>
                    <div style={{fontSize:16,opacity:"56%"}}>
                        <strong>Patient Name</strong>
                    </div>
                    <div  style={{fontSize:16}}>
                        {patient.patientName}
                    </div>
                    </div>
                    </Box>
                </Grid>
                <Grid item xs={2} md={2} sm={2} lg={2}>
                    <Box m={1} p={1} height={50}>
                    <div style={{bottom:0}}>
                    <div style={{fontSize:16,opacity:"56%"}}>
                        <strong>Date of Birth</strong>
                    </div>
                    <div  style={{fontSize:16}}>
                        {patient.DOB}
                    </div>
                    </div>
                    </Box>
                </Grid>
                <Grid item xs={2} md={2} sm={2} lg={2}>
                    <Box m={1} p={1} height={50}>
                    <div style={{bottom:0}}>
                    <div style={{fontSize:16,opacity:"56%"}}>
                        <strong>Date of Issue</strong>
                    </div>
                    <div  style={{fontSize:16}}>
                        {patient.DOI}
                    </div>
                    </div>
                    </Box>
                </Grid>
                {patient.Medication.map((medication,index)=>{
                    console.log(index);
                    return(
                        <Grid  item xs={12} md={12} sm={12} lg={12}>
                            <Box m={1} p={1} borderTop={1}>
                            <div style={{fontSize:18,opacity:"56%"}}>
                                        <strong>{medication.name.toUpperCase()}</strong>
                            </div>
                            <Grid container>
                                <Grid item xs={3} md={3} sm={3} lg={3}>
                                    <Box m={1} p={1} height={200} borderRight={1}>
                                    <div>
                                    <Box m={1} p={1} height={80} borderBottom={1}>
                                    <div style={{fontSize:18,opacity:"56%"}}>
                                        Apperance
                                    </div>
                                    </Box>
                                    <Box m={1} p={1} height={50}>
                                    <div  style={{fontSize:18,opacity:"56%"}}>
                                       REASON FOR MEDICATION
                                    </div>
                                    <div  style={{fontSize:14}}>
                                        {medication.reason}
                                    </div>
                                    </Box>
                                    </div>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} md={6} sm={6} lg={6}>
                                    <Box m={1} p={1} height={200}>
                                    <Box m={1} p={1} height={80}>
                                    <div style={{bottom:0}}>
                                    <div style={{fontSize:18,opacity:"56%"}}>
                                        <strong>DIRECTIONS/NOTES</strong>
                                    </div>
                                    <div style={{fontSize:18}}>
                                        <strong>{medication.notes.heading}</strong>
                                    </div>
                                    {
                                        medication.notes.des?(
                                            <div style={{fontSize:14}}>
                                            <strong>{medication.notes.des}</strong>
                                            </div>
                                        ):(null)
                                    }
                                    </div>
                                    </Box>
                                    <Box m={1} p={1} height={100}>
                                         <TimeLine doses={medication.dose} type={medication.type}/>
                                    </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={3} md={3} sm={3} lg={3}>
                                    <Box m={1} p={1} height={200} borderLeft={1}>
                                        
                                    <Box m={1} p={1} height={120}>
                                    <div style={{bottom:0}}>
                                        <div style={{fontSize:18,opacity:"56%"}}>
                                            <strong>POSSIBLE SIDE EFFECTS</strong>
                                        </div>
                                        <div style={{fontSize:14}}>
                                            {
                                                medication.sideEffects.map((sideEffect)=>{
                                                    if(sideEffect.toLowerCase()==="headache"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={headache} height={18} width={18}/> &nbsp; {sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if(sideEffect.toLowerCase()==="dizziness"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={diziness} height={18} width={18}/> &nbsp;{sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (sideEffect.toLowerCase()==="fatigue"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={fatigue} height={18} width={18}/> &nbsp;{sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (sideEffect.toLowerCase()==="Nausea"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={nausea} height={18} width={18}/> &nbsp;{sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (sideEffect.toLowerCase()==="loss of appetite"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={apetite} height={18} width={18}/> &nbsp;{sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                    else if (sideEffect.toLowerCase()==="constipation"){
                                                        return(
                                                            <div>
                                                            <div style={{fontSize:14,display: "inline-flex",alignItems: "center" }}>
                                                                <img src={constipation} height={18} width={18}/> &nbsp;{sideEffect}
                                                            </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            }
                                        </div>
                                    </div>
                                    </Box>
                                    <Box m={1} p={1}>
                                        
                                        {   medication.medicalHelp?(
                                            <div>
                                            <div style={{fontSize:18,opacity:"56%"}}>
                                            GET MEDICAL HELP IF
                                        </div>
                                        <div style={{fontSize:14}}>
                                            {medication.medicalHelp}
                                        </div>
                                        </div>):(null)
                                        }
                                    </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            </Box>
                        </Grid>
                    )
                })}
                
            </Grid>

        </Grid>
        </Grid>
        
    </div>
    )
}