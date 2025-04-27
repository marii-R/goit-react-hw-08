import { Formik, Form, Field } from "formik";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";
import { logIn } from '../../redux/auth/operations';

export default function LoginForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values))
            .unwrap()
            .then(() => {
                navigate('/contacts');

            })
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
        >
            <Form className={css.form} autoComplete="off">
                <label className={css.label}>
                    Email
                    <Field type="email" name="email" />
                </label>
                <label className={css.label}>
                    Password
                    <Field type="password" name="password" />
                </label>
                <button type="submit">Log in</button>
            </Form>
        </Formik>


    );
}
