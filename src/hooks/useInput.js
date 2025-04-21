import React, { useState } from 'react'

function UseInput(defaultValue='') {
    const [value,setValue] =useState(defaultValue)
    return {
        value,
        onChange: (evt) => setValue(evt.target.value)
    }
}

export default UseInput
