import { Formik, Form } from "formik";

const initialValues = {
    name: '',
    number: '',
}

export const ContactForm = () => {
    const handleSubmit = (values, actions) => {
        console.log(values);
    }
    return (
        <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <label htmlFor="name">Name
                   <input type="text" name="name"/>
                </label>
                <label htmlFor="tel">Number
                   <input type="text" name="number"/>
                </label>
                <button type="submit">Add contact</button>
            </Form>

        </Formik>
    )
}