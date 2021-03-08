import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile: {
  user: {_id, name}, 
  status,
  company, 
  location,
  skills,
  avatar
}}) => {

  return (
    <div className="profile bg-light">
       <img
            className={avatar ? "dev-profile-img" : "imgLogo dev-profile-img my-1"}
            src={`https://pair-pro-app.s3-us-west-1.amazonaws.com/media/${avatar}`}
            alt=""
          />
      <div>
        <h2>{name}</h2> 
        <p>{status} {company && <span> at {company}</span>}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0,4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check" /> {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileItem;
