import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from "react-i18next";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from '@emailjs/browser';

export const SignupForm = () => {
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  async function sendEmail(values) {
    setIsSending(true);
    emailjs
      .sendForm('service_f9ssw8p', 'template_zp00tlt', form.current, {
        publicKey: 'SIe7ztYLajLPVd9WA',
      })
      .then(
        () => {
          setError(false)
          setIsSending(false);
        },
        (error) => {
          setError(true)
          setIsSending(false);
        },
      );
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validate,
    onSubmit: async (values) => {
        if(error !== null){
            resetState()
        }
        else{
            await sendEmail(values);
        }
    },
  });

  function resetState() {
    setIsSending(false);
    setError(null);
  }


  return (
    <form ref={form} onSubmit={formik.handleSubmit} className='flex-1'>
      <p className="font-s11 font-bold text-2xl text-start mb-4">{t('five.text-1')}</p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          label={t('five.text-2')}
          placeholder={t('five.text-3')}
          isInvalid={formik.errors.name ? true : false}
          errorMessage={formik.errors.name ? formik.errors.name : null}
        />
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label={t('five.text-4')}
          placeholder={t('five.text-5')}
          isInvalid={formik.errors.email ? true : false}
          errorMessage={formik.errors.email ? formik.errors.email : null}
        />
      </div>
      <Textarea
        label={t('five.text-6')}
        placeholder={t('five.text-7')}
        className="mb-4"
        id="message"
        name='message'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.message}
        isInvalid={formik.errors.message ? true : false}
        errorMessage={formik.errors.message ? formik.errors.message : null}
      />
        <Button type="submit" className="w-full" isLoading={isSending} color={`${error !== null ? (error ? 'danger' : 'success') : 'default'}`}>
            {error === null ?
                t('five.text-8') :
                (error ?
                    t('five.text-9') :
                    t('five.text-10')
                )
            }
        </Button>
    </form>
  );
};
