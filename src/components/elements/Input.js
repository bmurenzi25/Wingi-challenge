export default function Input({ id, name, type, autoComplete, required, placeholder, ...rest }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {name}
            </label>
            <div className="mt-1">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    required={required}
                    placeholder={placeholder}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-afca05 focus:border-afca05 focus:z-10 sm:text-sm"
                    {...rest}
                />
            </div>
        </div>
    )
}
