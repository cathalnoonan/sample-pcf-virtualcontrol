import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IInputs, IOutputs } from './generated/ManifestTypes'

// Use the Class component version:
//import { ReactTextControl } from './TextControlReactClassComponent'

// Use the Function component version:
import { TextControlReact } from './TextControlReactFunctionComponent'

export class TextControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private value: string | null
	private notifyOutputChanged: () => void
	private container: HTMLDivElement

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		this.notifyOutputChanged = notifyOutputChanged
		this.container = container
	}

	public updateView(context: ComponentFramework.Context<IInputs>) {
		this.value = context.parameters.sampleProperty.raw || null

		ReactDOM.render(
			React.createElement(TextControlReact, {
				value: this.value,
				onChange: (newValue: string | null) => {
					this.value = newValue
					this.notifyOutputChanged()
				}
			}),
			this.container
		)
	}

	public getOutputs(): IOutputs {
		return {
			sampleProperty: this.value!
		}
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
		ReactDOM.unmountComponentAtNode(this.container)
	}
}
