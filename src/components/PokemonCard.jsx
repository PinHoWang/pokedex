import '../styles/PokemonCard.css';
import Badge from './Badge';

export default function PokemonCard({ name, picture, types }) {
    return (
        <div className='pokemon-card' data-testid='pokemon-card'>
            <h2>{name}</h2>
            <img src={`/images/${picture}`} alt={picture} width="100" height="100" />
            <div className='badges-row'>
            {
                types.map((type, index) => (
                    <Badge key={index} text={type} />
                ))
            }
            </div>
        </div>
    );
};