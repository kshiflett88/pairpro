import React, {Fragment, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/post';


const PostFormTwo = () => { 
 
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    tech: '',
    group: 0
  })

  const initialState = {
    title: '',
    text: '',
    tech: '',
    group: 0
  }

  const clearState = () => {
    setFormData({...initialState})
  }

  const {title, text, tech, group } = formData;

  const dispatch = useDispatch();

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
  
  const onSubmit = e => {
    e.preventDefault();
    dispatch(addPost(formData));
    clearState();
  }


  return (
    <div className="post-form">
        <div className="bg-primary p">
          <h3>Have A Project...</h3>
        </div>
        <form className="form my-1" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" placeholder="Title" name="title" value={title} onChange={e => onChange(e)}/>
            <small className="form-text">What is the title of this project</small>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Tech" name="tech" value={tech} onChange={e => onChange(e)}/>
            <small className="form-text">List technologies used in this project seperated by comma</small>
          </div>
          <div className="form-group">
          <input type="number" name="group" value={group} onChange={e => onChange(e)} min="2" max="10">
          </input>
          <small className="form-text">How many people are you looking for to help with this project?</small>
        </div>
          <textarea
            value={text}
            name="text"
            cols="30"
            rows="5"
            placeholder="Describe this project"
            onChange={e => onChange(e)}
            required
          ></textarea>
          <input type="submit" className="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
  )
}

export default PostFormTwo
