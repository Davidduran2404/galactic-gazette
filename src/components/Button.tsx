import { Link } from 'react-router-dom';
import { IButton } from '../Interfaces';
import '../styles/Button.css';

const STYLES = ['btn-primary', 'btn-outlined'];

const SIZES = ['btn-medium', 'btn-large'];

export const Button : React.FC<IButton & React.ComponentProps<any>> = ({ children, type, onClick, style = '', size = '' }: IButton) => {
    const checkStyle = STYLES.includes(style) ? style : STYLES[0];

    const checkSize = SIZES.includes(size) ? size : SIZES[0];

    return (
        <Link to='/login' className='btn-mobile'>
            <button
                className={`btn ${checkStyle} ${checkSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}