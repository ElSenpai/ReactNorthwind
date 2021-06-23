import { Formik, Form, Field } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'
import * as Yup from 'yup'

export default function ProductAdd() {
    const initialValues = { productName: '', unitPrice: '' }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün Zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunludur"),

    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form>
                    <FormField>
                        <Field name="productName" placeholder="Ürün adı">

                        </Field>
                    </FormField>
                    <FormField>
                        <Field  name="unitPrice" placeholder="Ürün Fiyatı" >
                          
                        </Field>
                    </FormField>
                </Form>
            </Formik>
        </div>
    )
}
