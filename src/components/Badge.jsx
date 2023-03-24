import '../styles/Badge.css';

export default function Badge({ text }) {
    return (
        <div className='badge' data-testid='badge'>
            <span className='badge__text'>{text}</span>
        </div>
    );
};