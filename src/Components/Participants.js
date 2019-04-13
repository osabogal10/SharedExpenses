import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, List, Image, Divider, Item } from 'semantic-ui-react'

class Participants extends Component {
  render() {
    let {data} = this.props

    return (
      <Segment>
        <Item.Header as='h3'>
          Participantes
        </Item.Header>
        <Divider />
        <List relaxed='very'>
          {data.map((p,i) => {
            return (
              <List.Item
                key={i}
              >
                <Image avatar src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                <List.Content>
                  <List.Header as='a'>{`${p.first_name} ${p.last_name}`}</List.Header>
                  <List.Description>
                    {p.cellphone}
                  </List.Description>
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </Segment>
    );
  }
}

Participants.propTypes = {

};

export default Participants;