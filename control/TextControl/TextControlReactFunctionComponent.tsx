import * as React from 'react';

export interface TextControlReactProps {
  value: string | null
  onChange: (newValue: string) => void
}

export function TextControlReact(props: TextControlReactProps): JSX.Element {
  const [value, setValue] = React.useState(props.value)
  
  function onChange(newValue: string): void {
    setValue(newValue)
    props.onChange(newValue)
  }

  return (
    <input 
      value={value ?? ''} 
      placeholder='---' 
      onChange={e => onChange(e.currentTarget.value)} 
      className='TextControl' />
  )
}
