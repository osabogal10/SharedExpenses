import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Card,
  Button,
  CardDescription,
  CardMeta
} from 'semantic-ui-react'

class Navbar extends Component {
  render() {

    const {firstName,lastName,email,phone} = this.props;

    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' src='https://armatuvaca.com/assets/images/logo-box.png' style={{ marginRight: '1.5em' }} />
              ArmaTuPaseo
            </Menu.Item>
            <Menu.Item as='a' onClick={this.props.onClick} active={this.props.act}>Mis Grupos</Menu.Item>
            <Menu.Item position='right'>
              <Dropdown item simple text={`${firstName} ${lastName}`} >
                <Dropdown.Menu>
                  <Card>
                    <Card.Content>
                      <Image floated='left' src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' avatar />
                      <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                      <CardDescription>
                        {email}
                      </CardDescription>
                      <CardMeta>{phone}</CardMeta>
                    </Card.Content>
                    <Card.Content extra>
                      <Button floated='left' content='Mi cuenta' primary />
                      <Button floated='right' content='Cerrar Sesión' secondary />
                    </Card.Content>
                  </Card>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

Navbar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
};

Navbar.defaultProps = {
  firstName: 'Matt',
  lastName: 'Bellamy',
  phone: '+57 3053313221',
  email: 'matt@muse.com',
}

export default Navbar;