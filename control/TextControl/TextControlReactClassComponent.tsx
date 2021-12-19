import * as React from 'react';

export interface TextControlReactProps {
  value: string | null
  onChange: (newValue: string) => void
}

export interface TextControlReactState {
  value: string | null
}

export class TextControlReact extends React.Component<TextControlReactProps, TextControlReactState> {
  constructor(props: TextControlReactProps) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  public render(): JSX.Element {
    return (
        <input 
          value={this.state.value ?? ''} 
          placeholder='---' 
          onChange={e => this.onChange(e.currentTarget.value)} 
          className='TextControl' />
    )
  }

  private onChange(newValue: string): void {
    this.setState({ value: newValue })
    this.props.onChange(newValue)
  }
}
