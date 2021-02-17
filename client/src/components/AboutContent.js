import React from 'react'
import AboutComponent from './AboutComponent'

const AboutContent = () => {

    const PEOPLE = [
        {image:"https://www.w3schools.com/w3images/team2.jpg",name:"John Doe",title:"CEO & Founder",bio:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {image:"https://www.w3schools.com/w3images/team1.jpg",name:"Jane Doe",title:"Architect",bio:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {image:"https://www.w3schools.com/w3images/team3.jpg",name:"Mike Ross",title:"Architect",bio:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."},
        {image:"https://www.w3schools.com/w3images/team4.jpg",name:"Dan Star",title:"Architect",bio:"Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."}
    ]

    return (
        <>
            <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
            </div>
            <AboutComponent people={PEOPLE}/>
        </>
    )
}

export default AboutContent
