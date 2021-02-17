import React from 'react'

const AboutComponent = (props) => {

    return (
        <div className="w3-row-padding w3-grayscale">

            {props.people.map((person) => {
                return (
                <div key={person.name}>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src={person.image} alt={person.name} style={{ width: '100%' }} />
                        <h3>{person.name}</h3>
                        <p className="w3-opacity">{person.title}</p>
                        <p>{person.bio}</p>
                        <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default AboutComponent
