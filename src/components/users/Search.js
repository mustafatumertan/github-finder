import React, { useState, useContext } from 'react';
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = () => {

   const ghContext = useContext(githubContext);
   const [text, setText] = useState('');

   const alContext = useContext(alertContext);

   //#region Event Handlers
   
   const onSubmit = e => {
      e.preventDefault();

      if (text === "") {
         alContext.setAlert("Please enter something to search", "light");
      } else {
         ghContext.searchUsers(text);
         setText('')
      }
   }

   const onChange = (e) => setText(e.target.value); 

   //#endregion

      return (
         <div>
            <form onSubmit={onSubmit} className="form">
               <input
                  type="text"
                  name="text"
                  placeholder="Search Users"
                  value={text}
                  onChange={onChange}
               />
               <input
                  type="submit"
                  value="Search"
                  className="btn btn-dark btn-block" />
            </form>

            { ghContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={ghContext.clearUsers}>Clear</button>}
         </div>
      )
}

export default Search;

