import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as profileActions from '../../actions/profile';
import Moment from 'react-moment';


import PropTypes from 'prop-types'

const Education = ({ education }) => {

  const dispatch = useDispatch();

  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {
          edu.to === null ? (
            'now'
            ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
            )}
      </td>
      <td>
        <button onClick={() => dispatch(profileActions.deleteEducation(edu._id))} className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ))
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  )
}


export default Education;