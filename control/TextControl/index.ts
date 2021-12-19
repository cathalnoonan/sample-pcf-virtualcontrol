import * as React from 'react'
import { IInputs, IOutputs } from './generated/ManifestTypes'

// Use the Class component version:
//import { ReactTextControl } from './TextControlReactClassComponent'

// Use the Function component version:
import { TextControlReact } from './TextControlReactFunctionComponent'

export class TextControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
	private value: string | null
	private notifyOutputChanged: () => void

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary): void {
		this.notifyOutputChanged = notifyOutputChanged
	}

	public updateView(context: ComponentFramework.Context<IInputs>) {
		this.value = context.parameters.sampleProperty.raw || null

		return React.createElement(TextControlReact, {
			value: this.value,
			onChange: (newValue: string | null) => {
				this.value = newValue
				this.notifyOutputChanged()
			}
		})
	}

	public getOutputs(): IOutputs {
		return {
			sampleProperty: this.value!
		}
	}

	public destroy(): void {
		// Add code to cleanup control if necessary
	}
}
