import style from './Form.module.css'
import { useState} from 'react'

export  function Form({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const hendleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default: return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit( name, number )
    reset()
  };

  const reset = () => {
    setName('');
    setNumber('');
  }; 
    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          <p className={style.text}>Name</p>
          <input
        className={style.input_name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={hendleChange}
          />
        </label>
        <label>
          <p className={style.text}>Number</p>
          <input
            className={style.input_name}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={hendleChange}
          />
          <button type='submit' className={style.button} >Add contact</button>
        </label>
      </form>

    )
}

// export class Form extends Component{
//   state = {
//     name: "",
//     number:"",
//   };

//   hendleChangeName = (e) => {
//     this.setState({
//       name: e.currentTarget.value,
//     });
//   };

//    hendleChangeNumber = (e) => {
//     this.setState({
//        number: e.currentTarget.value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.name, this.state.number);
//     this.setState({ name: "", number:"" });
//   };

//   render() {
//     return (
//       <form className={style.form} onSubmit={this.handleSubmit}>
//         <label>
//           <p className={style.text}>Name</p>
//           <input
//         className={style.input_name}
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         value={this.state.name}
//         onChange={this.hendleChangeName}
//           />
//         </label>
//         <label>
//           <p className={style.text}>Number</p>
//           <input
//             className={style.input_name}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.hendleChangeNumber}
//           />
//           <button type='submit' className={style.button}>Add contact</button>
//         </label>
//       </form>

//     )}
// }
