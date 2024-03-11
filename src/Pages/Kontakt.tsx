import { ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

const Kontakt: React.FC = () => {
  const [topicState, ChangeTopicState] = useState<boolean>(false);
  const [pickedOption, setPickedOption] = useState('Wybierz');

  const optionsToPick = [
    'Opcja nr 1',
    'Opcja nr 2',
    'Opcja nr 3',
    'Opcja nr 4',
  ];

  const TopicHandler = () => {
    ChangeTopicState((s) => !s);
  };

  const optionPicker = (index: number) => {
    setPickedOption(optionsToPick[index]);
    ChangeTopicState(false);
  };

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
    value: enteredFirm,
    isValid: firmIsValid,
    valueChangeHandler: firmChangeHandler,
    inputBlurHandler: firmBlurHandler,
    reset: firmReset,
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

    setPickedOption('Wybierz');
    firmReset();
    nameReset();
    surNameReset();
    mailReset();
    phoneNumberReset();
    messageReset();
  };

  const resetHandler = () => {
    setPickedOption('Wybierz');
    firmReset();
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
          <label>
            Temat<span>*</span>
          </label>
          <div className='relative'>
            <div
              id='temat'
              className={`${styles['topic-select']} relative`}
              onClick={TopicHandler}
            >
              {pickedOption} <ArrowDown2 size={'16'} variant='Bold' />
            </div>
            {topicState && (
              <div className={styles.options}>
                {optionsToPick.map((opcja, index) => (
                  <div
                    className={styles.option}
                    onClick={() => optionPicker(index)}
                    key={opcja}
                  >
                    <span>{opcja}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <label htmlFor='company'>Nazwa firmy</label>
          <input
            type='text'
            id='company'
            placeholder='Nazwa firmy'
            autoComplete='no'
            value={enteredFirm}
            onChange={firmChangeHandler}
            onBlur={firmBlurHandler}
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
            <button type='button' onClick={resetHandler}>
              RESET
            </button>
            <button type='submit'>WYŚLIJ</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
