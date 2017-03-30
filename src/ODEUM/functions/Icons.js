import * as Icons from 'react-icons/lib/fa'
import React from 'react'

export function renderIcons(icon) {
        switch (icon) {
            case 'settings':
                return (
                   <Icons.FaCog/>
                );
            case 'design':
                return (
                   <Icons.FaCamera/>
                );
            case 'handlinger':
                return (
                   <Icons.FaArrowCircleORight/>
                );
            case 'felter':
                return (
                       <Icons.FaList />
                );
            case 'generelt':
                return (
                    <Icons.FaFileText />
                );
            case 'brugere':
            return(
                <Icons.FaBook/>
            );
            case 'arbejdsgang':
            return(
                <Icons.FaAreaChart/>
            );
            default:
                return (null);
            // Add more icons here
        }
    };