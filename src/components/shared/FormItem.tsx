interface IformItem {
  settings: {
    type: string
    label: string
    placeholder: string
    alert: string
  }
  hook: [any, (e: any) => void]
  isValid: any
}
export default function FormItem({ settings, hook, isValid }: IformItem) {
  const [state, setState] = hook
  const { label, type, placeholder, alert } = settings

  const displayError = !(isValid || state === "")

  return (
    <label>
      <div className='label-header'>
        <h4>{label}</h4>
        {displayError && <p className='verif'>{alert}</p>}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
    </label>
  )
}
