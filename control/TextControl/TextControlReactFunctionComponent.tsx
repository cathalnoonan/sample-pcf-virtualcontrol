import * as React from 'react';

export interface TextControlReactProps {
  value: string | null;
  onChange: (newValue: string) => void
}

export function TextControlReact(props: TextControlReactProps): JSX.Element {
  const [value, setValue] = React.useState(props.value)
  
  // Use a ref to get access to the DIV containing the React control.
  // Do this to set thw width of the DIV to '100%', otherwise the width of the DIV gets precedence over our control.
  const ref = React.createRef<HTMLInputElement>()
  React.useEffect(() => {
    ref.current?.parentElement?.style && (ref.current.parentElement.style.width = '100%')
  }, [])

  function onChange(newValue: string): void {
    setValue(newValue)
    props.onChange(newValue)
  }

  return (
    <input 
      ref={ref} 
      value={value ?? ''} 
      placeholder='---' 
      onChange={e => onChange(e.currentTarget.value)} 
      className='TextControl' />
  )
}
