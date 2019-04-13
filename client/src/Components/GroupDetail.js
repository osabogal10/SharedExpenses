import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Accordion, Icon, Header, Grid, Rail, Item, Segment, Statistic, Image, Divider, GridColumn, GridRow, Button } from 'semantic-ui-react';
import Services from '../Services/services';
import Participants from './Participants'
import ExpenseDetail from './ExpenseDetail'

class GroupDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {
        name: 'Grupo',
        participants: [],
        expenses: [],
      },
      viewDetail:[]
    }
  }

  toggleDetail = (e,data) =>{
    let d = this.state.viewDetail
    if(this.state.viewDetail.includes(data.id)){
      d.splice(this.state.viewDetail.indexOf(data.id),1)
    }
    else{
      d.push(data.id)
    }
    this.setState({viewDetail:d})
  }

  componentDidMount() {
    Services.getGroupDetail(this.props.id, 'Token aaaaaaaaaa1234', (res) => {
      this.setState({ group: res.data })
    })
  }

  render() {

    let { group } = this.state
    let date = new Date(Date.parse(group.creation_date)).toLocaleDateString('es', { year: 'numeric', month: 'long', day: 'numeric' })

    return (
      <div>
        <Header as='h1'>
          <Icon name='users' />
          <Header.Content>{group.name}</Header.Content>
        </Header>
        <Header as='h2' content='Descripción' />
        <p>{group.description}</p>
        <Header as='h3' content={`Creado: ${date}`} />
        <Divider />
        <Header as='h2' content='Gastos' />
        <Grid columns={2}>
          <Grid.Column width={12}>
            <Segment>
              {group.expenses.map((e, i) => {
                return (
                  <Segment key={i}>
                    <Grid>
                      <GridRow columns={2}>

                        <GridColumn width={12}>
                          <Header as='h3'>
                            {e.name}
                          </Header>
                          <Statistic color='green'>
                            <Statistic.Value>{e.price}</Statistic.Value>
                            <Statistic.Label>Precio</Statistic.Label>
                          </Statistic>
                          <Button
                            floated='right'
                            id={e.id}
                            onClick={this.toggleDetail}
                          >Ver Detalle</Button>
                          <ExpenseDetail
                            id={e.id}
                            visible={this.state.viewDetail.includes(e.id)}
                          />
                        </GridColumn>
                        <GridColumn width={4}>
                          <Item
                            key={i}
                          >
                            <Image avatar src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' />
                            <Item.Content>
                              <Header as='a'>{`${e.owner.first_name} ${e.owner.last_name}`}</Header>
                              <Item.Description>
                                {e.owner.cellphone}
                              </Item.Description>
                            </Item.Content>
                          </Item>
                          <Divider/>

                          <Item.Meta>
                            {new Date(Date.parse(e.creation_date)).toLocaleDateString('es',{year: 'numeric', month: 'long', day: 'numeric' })}
                          </Item.Meta>
                        </GridColumn>
                      </GridRow>
                    </Grid>

                  </Segment>
                );
              })}
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Participants
              data={group.participants}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

GroupDetail.propTypes = {

};

export default GroupDetail;