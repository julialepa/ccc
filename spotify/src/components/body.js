import React, { Component } from 'react';
import './body.css'
import User from './user'
import TopTrack from './toptrack'


class Body extends Component {
    render() {
        return (
            <div id="body">
                <section>
                    <User />
                </section>
                    <TopTrack/>
            </div>
        );
    }
}

export default Body
