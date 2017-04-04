import * as Icons from 'react-icons/lib/md'
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
                   <Icons.MdSettings color={color(active)}/>
                );
            case 'design':
                return (
                   <Icons.MdOpacity color={color(active)}/>
                );
            case 'handlinger':
                return (
                   <Icons.MdCode color={color(active)}/>
                );
            case 'felter':
                return (
                       <Icons.MdTimeline color={color(active)}/>
                );
            case 'generelt':
                return (
                    <Icons.MdInfo color={color(active)}/>
                );
            case 'brugere':
            return(
                <Icons.MdPeople color={color(active)}/>
            );
            case 'arbejdsgang':
            return(
                <Icons.MdInfo color={color(active)}/>
            );
            default:
                return (null);
            // Add more icons here
        }
    };