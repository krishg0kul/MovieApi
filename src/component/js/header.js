import React, { Component } from "react";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";

export default class header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    this.props.childFunction(e.target.value);
  };

  render() {
    return (
      <div>
        <Navbar bg='primary' variant='dark'>
          <Navbar.Brand href='#home'>Box Office</Navbar.Brand>
          <Nav className='mr-auto'></Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
              name='inputValue'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Button
              variant='outline-light'
              onClick={() => {
                this.props.childFunction(this.state.inputValue);
                console.log(this.state.inputValue);
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
