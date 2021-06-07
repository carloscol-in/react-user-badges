// import react
import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

// import styles
import './styles/BadgesList.css';
import './styles/all.min.css';
import '../pages/styles/Badges.css';

function useSearchBadges(badges) {
    const [ query, setQuery ] = React.useState('');

    const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes( query.toLowerCase() );
        });

        setFilteredBadges(result);
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges };
}

function BadgesList (props) {
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);

    if(filteredBadges.length === 0){
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>
                        Filter Badges
                    </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}    
                    />
                </div>
                <h3>No data found.</h3>
                <Link to="/badges/new" className="btn btn-primary">
                    Create new badge
                </Link>
            </React.Fragment>
        )
    }
    
    return(
        <ul className="list-unstyled">
            <div className="form-group">
                <label>
                    Filter Badges
                </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}    
                />
            </div>
            {filteredBadges.map((badge) => {
                return (
                    <li className="mb-3" key={badge.id}>
                        <Link
                            to={`/badges/${badge.id}`}
                            className="text-reset text-decoration-none"
                        >
                            <div className="BadgesList__element">
                                {/* TODO: make this a component called BadgeListItem */}
                                <Gravatar className="ml-3 mr-3 rounded-circle" email={badge.email} alt="Badge avatar" style={{ width: '86px', height: '86px' }} />

                                <div className="mr-3 BadgesList__section-info d-flex flex-column">
                                    <p>
                                        {`${badge.firstName} ${badge.lastName}`}
                                    </p>

                                    <div className="BadgesList__twitter d-flex flex-row align-items-center">
                                        <i className="fab fa-twitter mr-2"></i>

                                        <p>@{badge.twitter }</p>
                                    </div>

                                    <p>
                                        {badge.jobTitle}
                                    </p>

                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default BadgesList;