import { useEffect } from "react";

function Alert(props) {
    const { name = "", closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [name]);
    
    return(
        <div className="toast-container">
            <span>{name}</span> добавлен в корзину
        </div>
    );
}

export {Alert};