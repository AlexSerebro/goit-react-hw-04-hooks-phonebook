import style from './Filter.module.css'

export const Filter = ({ value, onChange }) => {
  return (
    <label >
      <p className={style.text}>Find contacts by name</p>
      <input className={style.input} type="text" value={value} onChange={onChange} />
    </label>
  );
};