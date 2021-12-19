import * as React from 'react';

export interface TextControlReactProps {
  value: string | null;
  onChange: (newValue: string) => void
}

export interface TextControlReactState {
  value: string | null;
}

export class TextControlReact extends React.Component<TextControlReactProps, TextControlReactState> {
  // 'ref' is needed to set the width of the container DIV to 100%
  private ref: React.RefObject<HTMLInputElement>

  constructor(props: TextControlReactProps) {
    super(props)
    this.ref = React.createRef<HTMLInputElement>()
    this.state = {
      value: props.value
    }
  }

  public render(): JSX.Element {
    return (
        <input 
          ref={this.ref}
          value={this.state.value ?? ''} 
          placeholder='---' 
          onChange={e => this.onChange(e.currentTarget.value)} 
          className='TextControl' />
    )
  }

  public componentDidMount() {
    // Use the 'ref' to set the parent DIV's width to 100%
    this.ref?.current?.parentElement?.style && (this.ref.current.parentElement.style.width = '100%')
  }

  private onChange(newValue: string): void {
    this.setState({ value: newValue })
    this.props.onChange(newValue)
  }
}
