import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


class Utente extends Component {
  render() {
    return (
      <div>
        <Query query={gql`
        query myQuery($userData : ID!)
     {
        User(id: $userData) {
            id
            firstName
            lastName
        }
     }
     ` }
     variables={{userData: 5}}
     >
          {({ loading, error, data }) => (
            <div>
              {loading &&
                <p>caricamento...</p>
              }
              {!loading && <Card>
                {console.log(data)}

                <CardBody>
                  <CardTitle>USER</CardTitle>
                  <CardText>ID: {data.User.id}</CardText>
                  <CardText>First name: {data.User.firstName}</CardText>
                  <CardText>Last name: {data.User.lastName}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>}
            </div>
          )}
        </Query>

      </div>
    );
  }
}

export default Utente;
