import React from 'react';
import './Form.css';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    number: '',
    message: '',
    submitted: false,
  };
  sendEmail = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });

    emailjs
      .sendForm(
        'service_pbjcjte',
        'template_ueylrud',
        e.target,
        'user_atqn5FizjiXP13egltGrm'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      name: '',
      email: '',
      number: '',
      message: '',
    });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fade top>
        <div className='form-container' id='consultation'>
          <form className='form' onSubmit={this.sendEmail}>
            <h1>Scheadule Consultation</h1>
            <label className='form-label'>Name :&nbsp;</label>
            <input
              required
              className='form-inputs'
              type='text'
              name='name'
              placeholder='Enter your name'
              value={this.state.name}
              onChange={this.handleOnChange}
            />
            <br></br>
            <label className='form-label'>Email :&nbsp;</label>
            <input
              required
              className='form-inputs'
              type='email'
              name='email'
              value={this.state.email}
              placeholder='Enter your email'
              onChange={this.handleOnChange}
              pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
            />
            <br></br>
            <label className='form-label'>Cell # :&nbsp;</label>
            <input
              required
              className='form-inputs'
              type='text'
              name='number'
              placeholder='Enter your phone number'
              value={this.state.number}
              onChange={this.handleOnChange}
            />
            <br></br>
            <p className='form-label'>Tell us about your project :&nbsp;</p>
            <textarea
              required
              name='message'
              rows='10'
              className='form-textarea'
              cols='20'
              value={this.state.message}
              onChange={this.handleOnChange}
              placeholder='What do you want to build?'
            ></textarea>
            <button className='form-input-btn' type='submit'>
              Get In Touch!
            </button>
            <p className='form-input-phone'>
              <a href='tel://+4152258732'>&nbsp;CALL US:&nbsp;415.225.8732</a>
            </p>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Form;
