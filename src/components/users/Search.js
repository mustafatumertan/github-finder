import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {

   static propTypes = {
      searchUsers: PropTypes.func.isRequired,
      clearUsers: PropTypes.func.isRequired,
      showClear: PropTypes.bool.isRequired,
      setAlert: PropTypes.func.isRequired
   }

   state = {
      text: ''
   };

   onSubmit = e => {
      e.preventDefault();

      if (this.state.text === "") {
         this.props.setAlert("Please enter something to search", "light");
      } else {
         this.props.searchUsers(this.state.text);
         this.setState({ text: this.state.text });
      }

   }

   onChange = (e) => this.setState({ [e.target.name]: e.target.value }); 

   render() {

      const { clearUsers, showClear } = this.props;

      return (
         <div>
            <form onSubmit={this.onSubmit} className="form">
               <input
                  type="text"
                  name="text"
                  placeholder="Search Users"
                  value={this.state.text}
                  onChange={this.onChange}
               />
               <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark btn-block" />
            </form>

            { showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
         </div>
      )
   }
}


