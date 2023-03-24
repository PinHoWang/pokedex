import '../styles/PokemonCard.css';

export default function PokemonCard({ name, picture, types }) {
    return (
        <div className='pokemon-card' data-testid='pokemon-card'>
            <h2>{name}</h2>
            <img src={`/images/${picture}`} alt={picture} width="100" height="100" />
            <div className='row'>
            {
                types.map((type, index) => (
                    <span key={index} className='type' data-testid='type'>{type}</span>
                ))
            }
            </div>
        </div>
    );
};