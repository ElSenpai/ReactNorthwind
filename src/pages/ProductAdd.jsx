  
import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button ,Label} from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
    const initialValues = { productName: '', unitPrice: '' }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün Zorunlu"),
        unitPrice: Yup.number().required("ürün fiyatı zorunludur"),

    })
    return (
       
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
                    <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    <Button color="green" type="submit">Ürün Ekle</Button>
                </Form>
            </Formik>
        
    )
}
