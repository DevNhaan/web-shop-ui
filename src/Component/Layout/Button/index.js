import { Link } from 'react-router-dom';

function Button({ to, icon, href, className, disabled = false, children, onClick, ...passProps }) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    //delete fucntion on when have disable attribute
    // if (disabled) {
    //     Object.keys(props).forEach((key) => {
    //         if (key.startsWith('on') && typeof props[key] === 'function') {
    //             delete props[key];
    //         }
    //     });
    //     delete props.to;
    //     Comp = 'div';
    // }
    return (
        <Comp {...props} className={className}>
            {icon && <span className="icon">{icon}</span>}
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
