import React from 'react';

import Gravatar from './Gravatar';

import './styles/Badge.css';
import conflogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render() {

        // destructure props
        const {
            firstName,
            lastName,
            email,
            jobTitle,
            twitter
        } = this.props;

        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={conflogo} alt="Logo de la Platzi Conf." />
            </div>

            <div className="Badge__section-name">
                <Gravatar
                    email={email} 
                    className="Badge__avatar" 
                    alt="Logo de la Platzi Conf."
                />
                
                <h1>
                    {firstName} <br/> {lastName}
                </h1>
            </div>

            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>

            <div className="Badge__footer">
                #PlatziConf
            </div>
        </div>
        )
    }
}

export default Badge;