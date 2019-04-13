import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard';
import { Header, Icon, CardGroup } from 'semantic-ui-react';

class GroupList extends Component {

  onSelectCard = (id) => {
    this.props.onSelectedCard(id)
  }

  render() {
    return (
      <div>
        <Header as='h1'>
          <Icon name='users' />
          <Header.Content>Mis Grupos</Header.Content>
        </Header>
        <CardGroup itemsPerRow={4} stackable>
          {this.props.data.map(group => {
            let date = new Date(Date.parse(group.creation_date)).toLocaleDateString('es',{year: 'numeric', month: 'long', day: 'numeric' })
            return (
              <GroupCard
                key={group.id}
                id={group.id}
                name={group.name}
                creation={date}
                onClick={this.onSelectCard}
              />)
          })}
        </CardGroup>
      </div>
    );
  }
}

GroupList.propTypes = {
  data: PropTypes.array,
  onSelectedCard: PropTypes.func
};

export default GroupList;