import React from 'react';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt: React.FC = () => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredSurName,
    isValid: surNameIsValid,
    valueChangeHandler: surNameChangeHandler,
    inputBlurHandler: surNameBlurHandler,
    reset: surNameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    reset: mailReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const {
    value: enteredPhoneNumber,
    isValid: phoneNumberIsValid,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: phoneNumberReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (
    nameIsValid &&
    surNameIsValid &&
    phoneNumberIsValid &&
    mailIsValid &&
    messageIsValid
  ) {
    formIsValid = true;
  }

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    nameReset();
    surNameReset();
    mailReset();
    phoneNumberReset();
    messageReset();
  };

  return (
    <div className={styles.kontakt}>
      <div className={styles['title-wrap']}>
        <div className={styles.title}>
          <h1>Skontaktuj się z nami</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae maximus magna. Suspendisse potenti. Integer lacus metus,
            iaculis non erat id, placerat dictum urna.
          </h2>
        </div>
      </div>

      <div className={styles['form-wrap']}>
        <form onSubmit={formHandler}>
          <div className={styles['name-surname']}>
            <div>
              <label htmlFor='name'>
                Imię<span>*</span>
              </label>
              <br />
              <input
                type='text'
                id='name'
                placeholder='Imię'
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                autoComplete='on'
              />
            </div>
            <div>
              <label htmlFor='surname'>
                Nazwisko<span>*</span>
              </label>
              <br />
              <input
                type='text'
                id='surname'
                placeholder='Nazwisko'
                autoComplete='on'
                value={enteredSurName}
                onChange={surNameChangeHandler}
                onBlur={surNameBlurHandler}
              />
            </div>
          </div>
          <label htmlFor='temat'>
            Temat<span>*</span>
          </label>
          <select id='temat'>
            {/* zmienić na button z opcjami wyboru przy użyciu arraya i state */}
            <option>Wybierz</option>
            <option>Opcja 1 Opcja 1 Opcja 1</option>
            <option>Opcja 2</option>
            <option>Opcja 3</option>
          </select>
          <label htmlFor='company'>Nazwa firmy</label>
          <input
            type='text'
            id='company'
            placeholder='Nazwa firmy'
            autoComplete='no'
          />
          <label htmlFor='mail'>
            Email<span>*</span>
          </label>
          <input
            type='mail'
            id='mail'
            placeholder='Email'
            autoComplete='on'
            value={enteredMail}
            onChange={mailChangeHandler}
            onBlur={mailBlurHandler}
          />
          <label htmlFor='phone'>
            Numer telefonu<span>*</span>
          </label>
          <input
            type='text'
            id='phone'
            placeholder='Numer telefonu'
            autoComplete='on'
            value={enteredPhoneNumber}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
          />
          <label htmlFor='message'>
            Wiadomość<span>*</span>
          </label>
          <textarea
            id='message'
            placeholder='Wiadomość'
            rows={8}
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
          />
          <div className={`${styles.buttons} flex`}>
            <button type='button'>RESET</button>
            <button type='submit'>WYŚLIJ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
