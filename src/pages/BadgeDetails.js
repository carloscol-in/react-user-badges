// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// components
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

// assets
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

function useIncreaseCount(max) {
    const [ count, setCount ] = React.useState(0);

    if(count > max) {
        setCount(0);
    }

    return [ count, setCount ];
}

export default function BadgeDetails (props) {

    const badge = props.badge;

    const [ count, setCount ] = useIncreaseCount(4);
    
    return(
        <React.Fragment>

            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => {
                    setCount(count + 1);
                }}
                className="btn btn-primary"
            >
                Increase count: {count}
            </button>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            jobTitle={badge.jobTitle}
                            twitter={badge.twitter}
                        />
                    </div>

                    <div className="col">
                        <h2>Actions:</h2>

                        <div>
                            <div>
                                <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary col-3 mb-3 mt-2">
                                    Edit
                                </Link>
                            </div>

                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger col-3">
                                    Delete
                                </button>
                                    
                                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}