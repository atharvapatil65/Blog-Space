import React, {useId} from 'react'

const Select = React.forwardRef(function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='inline-block mb-2 pl-1 text-sm font-medium text-gray-700'>{label}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`
            px-4 py-2.5 rounded-lg bg-white text-gray-900 
            outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            duration-200 border border-gray-300 hover:border-gray-400
            w-full shadow-sm cursor-pointer
            disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
            ${className}
        `}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
            ))}
        </select>
    </div>
  )
})

export default Select