import {Box} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import capsule from '../constants/Images/capsule.png'
import tablet from '../constants/Images/tablet.png'
import injection from '../constants/Images/injection.png'

export default function TimeLine(props:any){
    const {doses,type} = props

    return(
        <div style={{fontSize:12}}>
            <Box p={1}>
                <div style={{display:'flex'}}>
                    {
                        doses.map((dose:any)=>{
                            return(
                                <div style={{flex:1,textAlign:'right'}}>
                                    {
                                        [...Array(dose.amount)].map((i,e)=>{
                                                if(type==='injection'){
                                                    return(<img src={injection} height={18} width={18}/>)
                                                }
                                                else if(type==='capsule'){
                                                    return(<img src={capsule} height={18} width={18}/>)
                                                }
                                                else if(type==='tablet'){
                                                    return(<img src={tablet} height={18} width={18}/>)
                                                }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    
                </div>
            </Box>
            <Box  p={1} borderRadius={5}>
                <div style={{display:'flex'}}>
                    {
                        doses.map((dose:any)=>{
                            return(
                            <div style={{flex:1,textAlign:'right'}}>
                                <ArrowUpwardIcon fontSize="small"/>
                            </div>
                            )
                        })
                    }
                </div>
            </Box>
            <Box p={1} bgcolor="#808080" borderRadius={5}>
                <div style={{display:'flex'}}>
                    {
                        doses.map((dose:any)=>{
                            return(
                            <div style={{flex:1,textAlign:'right'}}>
                                {dose.time}
                            </div>
                            )
                        })
                    }
                </div>
            </Box>
        </div>
    )
}