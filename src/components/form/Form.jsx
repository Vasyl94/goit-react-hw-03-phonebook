import shortid from 'shortid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormContact, LabelContact, FormDiv, FormInput } from './form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number, nameInputId } = this.state;

    return (
      <FormContact onSubmit={this.handleSubmit}>
        <FormDiv>
          <LabelContact htmlFor={nameInputId}>
            Name
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
              id={nameInputId}
            />
          </LabelContact>
          <LabelContact htmlFor={nameInputId}>
            Number
            < FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
              id={nameInputId}
            />
          </LabelContact>
          <button type="Submit">Add contact</button>
        </FormDiv>
      </FormContact>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};