import * as Icons from 'react-icons/lib/fa'
import React from 'react'
function color(active){
    if(active.includes('active'))
    {return('white');}
    else
    {return('#34495d')}
}
export function renderIcons(icon,active) {
        switch (icon) {
            case 'settings':
                return (
                   <Icons.FaCog color={color(active)}/>
                );
            case 'design':
                return (
                   <Icons.FaCamera color={color(active)}/>
                );
            case 'handlinger':
                return (
                   <Icons.FaArrowCircleORight color={color(active)}/>
                );
            case 'felter':
                return (
                       <Icons.FaList color={color(active)}/>
                );
            case 'generelt':
                return (
                    <Icons.FaFileText color={color(active)}/>
                );
            case 'brugere':
            return(
                <Icons.FaBook color={color(active)}/>
            );
            case 'arbejdsgang':
            return(
                <Icons.FaAreaChart color={color(active)}/>
            );
            default:
                return (null);
            // Add more icons here
        }
    };