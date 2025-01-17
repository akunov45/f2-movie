

const Button = ({ children , className }) => {
    return (
        <button className={`rounded-[36px] bg-[#EF4234] text-white ${className}`}>
            {children}
        </button>
    )
}

export default Button