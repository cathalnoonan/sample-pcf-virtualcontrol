declare namespace ComponentFramework {
  // Temporarily implement the ReactControl interface as it does not exist in 
  // @types/powerapps-component-framework
  export interface ReactControl<TInputs, TOutputs> {
    init(context: ComponentFramework.Context<TInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary): void
    updateView(context: ComponentFramework.Context<TInputs>): React.Component | React.FunctionComponentElement<any> | JSX.Element
    getOutputs(): TOutputs
    destroy(): void
  }
}