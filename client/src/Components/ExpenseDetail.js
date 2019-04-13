import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Services from '../Services/services'
import { Segment, Statistics, Item, Header, ItemDescription, Statistic, GridColumn, Grid } from 'semantic-ui-react'

class ExpenseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    }
  }

  componentDidMount() {
    Services.getExpenseDetail(this.props.id, 'Token 4564123321654', (res) => {
      this.setState({ participants: res.data.participants })
    })
  }

  render() {
    if (this.props.visible) {
      return (
        <div>

          {this.state.participants.map((p, i) => {
            return (
              <Segment key={i}>
                <Grid columns={2}>
                  <GridColumn>
                    <Item >
                      <Header as='h4'>
                        {p.first_name} {p.last_name}
                      </Header>
                      <ItemDescription>
                        {p.cellphone}
                      </ItemDescription>
                    </Item>
                  </GridColumn>
                  <GridColumn width={6}>
                    <Statistic size='tiny' color='yellow'>
                      <Statistic.Value>{p.due}</Statistic.Value>
                      <Statistic.Label>Deuda</Statistic.Label>
                    </Statistic>
                  </GridColumn>
                </Grid>
              </Segment>
            )
          })}
        </div>
      )
    }
    else {
      return (<div></div>)
    }
  }
}

ExpenseDetail.propTypes = {

};

export default ExpenseDetail;