import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import './user.css'


class User extends Component {
    render() {
        return (
            <Query
                query={gql`
        {
            me {
                country
                display_name
                top_tracks{
                    id
                    name
                    album {
                      id
                      name
                    }
                }
            }
            user (id: "lepa.julia"){
                images
                {
                  url
                    width
                  height
                }
            }
        }
      `}
            >


                {({ loading, error, data }) => {
                    if (loading) {
                        return (
                            <p>...caricamento...</p>)
                    } else {
                        return (<div className="info-container">
                            <img src={data.user.images[0].url} alt="propic" />
                            <div>
                                <p>{data.me.display_name}</p>
                                <p>{data.me.country}</p>
                                <p>{data.me.top_tracks.name}</p>
                            </div>
                          
                        </div>)
                    }
                }}

            </Query>
        );
    }
}

export default User


