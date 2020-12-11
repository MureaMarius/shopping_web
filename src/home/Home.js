import React, { useState } from "react";
import {Redirect, withRouter} from 'react-router-dom';

class Home extends React.Component  {

    render() {
        return (
            <div>
                SALUT
            </div>
        )
    };
}

export default withRouter(Home)