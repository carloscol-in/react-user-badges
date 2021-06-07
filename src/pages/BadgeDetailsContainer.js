import React from 'react';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';


export default class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        badge: undefined,
        modalIsOpen: false
    };

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try{
            const badge = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({
                badge: badge
            });
        } catch(error){
            this.setState({
                error: null,
            });
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    handleOpenModal = () => {
        this.setState({
            modalIsOpen: true
        });
    }

    handleCloseModal = () => {
        this.setState({
            modalIsOpen: false
        });
    }

    handleDeleteBadge = async () => {
        this.setState({
            loading: true,
            error: null
        });

        const badgeId = this.props.match.params.badgeId;

        try {
            await api.badges.remove(badgeId);

            this.setState({
                loading: false,
            });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading />
        }

        if(this.state.error){
            return <PageError error={this.state.error} />
        }

        const badge = this.state.badge;
        
        return (
            <BadgeDetails
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                onDeleteBadge={this.handleDeleteBadge}
                modalIsOpen={this.state.modalIsOpen}
                badge={badge}
            />
        )
    }
}