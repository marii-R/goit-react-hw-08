import { Field, Formik, Form } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import css from './LoginForm.module.css';


export default function LoginForm() { 
    const dispatch = useDispatch();
    
    const handleSubmit = (values,actions) => { 
        dispatch(logIn(values)).unwrap().then(() => console.log('login success'));
        actions.resetForm();
    };

       const idEmail = useId();
       const idPassword = useId();
    return (
        <Formik initialValues={{ email: '', password: '', }} onSubmit={handleSubmit}>
            <Form autoComplete='off' className={css.form}>
                <div className={css.container} >
                     <label htmlFor={idEmail} className={css.label}>Email
                    <Field className={css.input} type='email' name='email' id={idEmail} />
                </label>
                </div>
               <div className={css.container}>
                <label htmlFor={idPassword} className={css.label}>Password
                    <Field className={css.input} type='password' name='password'id={idPassword} />
                    </label>
                    </div>
                <button className={css.button} type='submit'>Log In</button>
           </Form>
        </Formik>
    );
};