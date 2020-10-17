import React, { useState } from 'react';
import './App.scss';

import TagsInput from './components/TagsInput';

const App = () => {
  const [tags, setTags] = useState([]);
  const [emails, setEmails] = useState([]);
  const [errors, setErrors] = useState({});

  const changeHandler = (name, value) => {
    if(name === 'tags') {
      setTags(value);
      if(value.length > 0 && errors.tags) {
        setErrors(prev => {
          const prevErrors = {...prev};
          delete prevErrors.tags;
          return prevErrors;
        });
      }
    }else if(name === 'emails') {
      setEmails(value);
      if(value.length > 0 && errors.emails) {
        setErrors(prev => {
          const prevErrors = {...prev};
          delete prevErrors.emails;
          return prevErrors;
        });
      }
    }
  }

  const submitHandler = e => {
    e.preventDefault();

    if(tags.length === 0) {
      setErrors(prev => ({
        ...prev,
        tags: 'Please add at least one tag'
      }));
    }
    if(emails.length === 0) {
      setErrors(prev => ({
        ...prev,
        emails: 'Please add at least one email'
      }));
    }

    if(tags.length > 0 && emails.length > 0) {
      console.log(tags, emails);
      // Submit form
    }
  }

  return (
    <div>
      <header className="header">
        <h1>Tags input with react js</h1>
      </header>
      <form onSubmit={submitHandler}>
        <TagsInput 
          label="Tags"
          id="tags"
          name="tags"
          placeholder="Add tag"
          onChange={changeHandler}
          error={errors.tags}
          defaultTags={tags}
        />
        <TagsInput 
          label="Send email to"
          id="emails"
          name="emails"
          placeholder="Add email"
          onChange={changeHandler}
          emailValidation
          error={errors.emails}
          defaultTags={emails}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
