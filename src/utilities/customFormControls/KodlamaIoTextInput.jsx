import { useField } from 'formik'
import React from 'react'
import { FormField,Label} from "semantic-ui-react";

export default function KodlamaIoTextInput({...props}) {
    
  const [field,meta]=useField(props)



    return (
       <FormField error={meta.touched && !!meta.error}>
        <input {...field} {...props}/>
        {meta.touched &&  !!meta.error ? (<Label color="red" pointing content={meta.error}></Label>):null}
       </FormField>
       
    )
}
