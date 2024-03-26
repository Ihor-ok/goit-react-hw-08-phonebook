import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import css from './PhonebookEditor.module.css'




const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.number().typeError('enter a number').required(),
})
        
const initialValues = {
    name: '',
    phone: '',
}




function PhonebookEditor({handleSubmit}) { 
       
        return (
            <>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
                    <Form className={css.form} autoComplete='off'>
                        <label htmlFor="Name">
                            Name
                            <Field className={css.input_name} type="text" placeholder="Enter name" name="name" required />
                            <ErrorMessage className={css.input_error} name="name" component="div"/>
                        </label>
                        <label htmlFor="phone">
                            Number
                            <Field className={css.input_tel} type="tel" placeholder="Enter phone number" name="phone" required />
                            <ErrorMessage className={css.input_error} name="phone" component="div"/>
                        </label>
                        <button type='submit'>Add contact</button>
                    </Form>

                </Formik>
                
               

                
                
            </>
        )
    }

export default PhonebookEditor