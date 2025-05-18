// components/Button.js
export default function Button({ cls = "py-2 px-4", theme="fill",  children }) {
    return (
        <button className={`cursor-pointer transition duration-500 ${cls} ${theme == "fill" ? "bg-blue-900 hover:bg-blue-800 text-white rounded-3xl" : "border-2 border-blue-900 rounded-3xl text-blue-900 hover:bg-blue-900 hover:text-white"} `}>
            {children}
        </button>
    );
}
