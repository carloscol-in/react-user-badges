// import React
import React from 'react';
import { Link } from 'react-router-dom';

// import components
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

// import api
import api from '../api';

// import images
import confLogo from '../images/platziconf-logo.svg';

// styles
import './styles/Badges.css';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount() {
        this.fetchData();

        // using polling
        // ! polling is bad practice and shouldn't be used on production, this is just to test automatic component refresh and MiniLoader component
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        })

        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data,
            })
        } catch (error) {
            this.setState({
                loading: false,
                error: error,
            })
        }
    }

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return(
            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <BadgesList badges={this.state.data} />

                    {this.state.loading && <MiniLoader />}
                </div>

            </React.Fragment>
        )
    }
}

export default Badges;