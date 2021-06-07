import React from 'react';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

// import images
// import confLogo from '../images/platziconf-logo.svg';

import './styles/Loader.css';
import '../pages/styles/Badges.css';

export default class Loader extends React.Component {
    render() {
        return (
            <div className="lds-grid">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
            
            // <React.Fragment>
            //     <div className="Badges">
            //         <div className="Badges__hero">
            //             <div className="Badges__container">
            //                 <img className="Badges_conf-logo" src={confLogo} alt="Conf logo" />
            //             </div>
            //         </div>
            //     </div>

            //     <div className="Badges__container">
            //         <SkeletonTheme>
            //             <li className="mb-3 BadgesList__element">
            //                 <Skeleton circle={true} height={86} width={86} className="ml-3 mr-3 " />

            //                 <div className="mr-3 BadgesList__section-info d-flex flex-column">
            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                     <Skeleton />

            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                 </div>
            //             </li>
            //             <li className="mb-3 BadgesList__element">
            //                 <Skeleton circle={true} height={86} width={86} className="ml-3 mr-3 " />

            //                 <div className="mr-3 BadgesList__section-info d-flex flex-column">
            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                     <Skeleton />

            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                 </div>
            //             </li>
            //             <li className="mb-3 BadgesList__element">
            //                 <Skeleton circle={true} height={86} width={86} className="ml-3 mr-3 " />

            //                 <div className="mr-3 BadgesList__section-info d-flex flex-column">
            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                     <Skeleton />

            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                 </div>
            //             </li>
            //             <li className="mb-3 BadgesList__element">
            //                 <Skeleton circle={true} height={86} width={86} className="ml-3 mr-3 " />

            //                 <div className="mr-3 BadgesList__section-info d-flex flex-column">
            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                     <Skeleton />

            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                 </div>
            //             </li>
            //             <li className="mb-3 BadgesList__element">
            //                 <Skeleton circle={true} height={86} width={86} className="ml-3 mr-3 " />

            //                 <div className="mr-3 BadgesList__section-info d-flex flex-column">
            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                     <Skeleton />

            //                     <p>
            //                         <Skeleton />
            //                     </p>

            //                 </div>
            //             </li>
            //         </SkeletonTheme>
            //     </div>

            // </React.Fragment>
        )
    }
}