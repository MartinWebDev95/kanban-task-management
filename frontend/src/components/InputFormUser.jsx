import useAuthContext from '../hooks/useAuthContext';

function InputFormUser({ typeInput, inputValue, inputName }) {
  const {
    userFormData, setUserFormData,
  } = useAuthContext();

  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  return (
    <label htmlFor={inputName} className="flex flex-col gap-2">
      <span className="dark:text-white font-semibold text-black text-sm">
        {`${inputName.charAt(0).toUpperCase()}${inputName.substring(1)}:`}
      </span>
      <input
        type={typeInput}
        name={inputName}
        id={inputName}
        value={inputValue}
        className="bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-500 p-2 font-semibold text-sm dark:text-white"
        onChange={handleChange}
      />
    </label>
  );
}

export default InputFormUser;
