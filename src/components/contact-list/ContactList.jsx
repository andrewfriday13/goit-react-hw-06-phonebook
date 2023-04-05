import { PropTypes } from "prop-types"
import React from 'react';
import css from './ContactListStyle.module.css'
import { useSelector } from "react-redux";
import { allContacts } from "redux/selectors";


export const ContactList = ({ filter, onRemove})=>{
 const contactSecond =useSelector(allContacts)

  return(
      <ul className={css.list__contact}>
        {contactSecond.length > 0 ? (
        contactSecond.filter(({name})=>
        name.toLowerCase().includes(filter.toLowerCase())).map(({id, name, number}) =>
          <li key={id}
          className={css.items__contact}
          >
            <p className={css.contact}>{name}: {number}</p>
            <button 
            className={css.remove__btn}
            onClick={()=>{onRemove(id)}}>Remove</button>
          </li>
        )): (<span style={{fontSize: "30px"}} >You don`t have contacts</span>)}
      </ul>
    
  )
}

ContactList.propTypes ={
  contactSecond: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  filter: PropTypes.string,
  onRemove: PropTypes.func,


}

