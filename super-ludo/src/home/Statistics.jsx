import './Statistics.css'

export default function Statistics(){

    const scores = {
        1: 0,
        2: 5,
        3: 3,
        4: 2,
        5: 0
    };

    const places = {
        1: 'last',
        2: 'first',
        3: 'second',
        4: 'third',
        5: 'last'
    };

    return(
        <div className='statistics-container'>
            <div className="statistics">
                <h2>Last Games</h2> 
                {Object.keys(scores).map(key => (
                    <p key={key}>Score: {scores[key]} points
                    <br></br>
                    Place: {places[key]}
                    </p>
                ))}
            </div>
        </div>


    );
}