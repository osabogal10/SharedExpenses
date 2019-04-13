import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react'

class GroupCard extends Component {
  
  onClick = () => {
    this.props.onClick(this.props.id)
  }

  render() {
    return (
      <Card onClick={this.onClick}>
        <Image size='medium' src={this.props.image?this.props.image:'https://img.etimg.com/thumb/msid-65975178,width-643,imgsize-201359,resizemode-4/travellinginagroup.jpg'} />
        <Card.Content>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Creada: {this.props.creation}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

GroupCard.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
  creation: PropTypes.string
};

export default GroupCard;