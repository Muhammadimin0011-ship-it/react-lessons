const Input = ({ label, placeholder, type = "text" }) => {
    return (
        <div>
            <label>{label}</label>

            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;