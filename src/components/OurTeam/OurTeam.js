import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';

const OurTeam = () => {
    const[teams,setTeams]=useState([])
    useEffect(()=>{
        fetch('team.json')
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div className='container'>
            <div className='row'>
                {
                    teams.map(team=><Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default OurTeam;