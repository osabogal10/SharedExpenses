import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import { Container } from 'semantic-ui-react';
import Services from './Services/services';
import GroupList from './Components/GroupList';
import GroupDetail from './Components/GroupDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      groups: [],
      selectedCard: 0
    }
  }

  updateCard = (id) => {
    this.setState({ selectedCard: id });
  }

  componentDidMount() {
    Services.getUser('Token aaaaaaa123456', (res) => this.setState({ user: res.data }))
    Services.getGroups('Token aaaaaaa123456', (res) => this.setState({ groups: res.data }))
  }

  goHome = () =>{
    this.setState({selectedCard:0})
  }

  renderSelectedCard() {
    if (this.state.selectedCard === 0) {
      return (<GroupList
        data={this.state.groups}
        onSelectedCard={this.updateCard}
      />)
    }
    else {
      return (
        <GroupDetail
          id={this.state.selectedCard}
        />)
    }
  }

  render() {
    let { first_name, last_name, phone, email } = this.state.user
    return (
      <div className="App">
        <NavBar
          firstName={first_name}
          lastName={last_name}
          phone={phone}
          email={email}
          onClick={this.goHome}
          act={this.state.selectedCard===0?true:false}
        />
        <Container style={{ marginTop: '10vh' }}>
          {this.renderSelectedCard()}
        </Container>
      </div>
    );
  }
}

export default App;
