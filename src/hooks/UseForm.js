import { useState } from 'react'

export const UseForm = ( initialForm = {} ) => {

    const [formState, setformState] = useState({initialForm})


    const onInputChange = ({ target }) =>{
        const {name, value} = target;

        console.log("PRUEBA", formState)
        setformState({
            ...formState,
            [ name ]: value
        })
    }

    

  return {
    ...formState,
    formState,
    onInputChange,
  }

}
