import style from "./Contacts.module.css";
import PropTypes from 'prop-types';


export const Contacts = ({ contacts, onDeleteContact}) => {
  return (
    <>
      <div className={style.wraper}>
        <ul className={style.list}>
      {contacts.map(({ id, name, number}) => (
        <li
          key={id}
          className={style.list_item}
        >
          <div>
            <p className={style.item_text}>{name}:</p> 
            <p className={style.item_text}>{number}</p>
          </div>
          <button className={style.button} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
      </ul>
      </div>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};