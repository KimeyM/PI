import './ActivityDetails.css'
export default function ActivityDetails({details}) {
    return (
        <div className="activities">
            {
                details.length > 0 ?
                details.map(el => {
                    return (
                        <div key={el.id}>
                            <p className="actname" key={el.id}>{el.name}</p>
                            <p>Difficulty {el.difficulty} <br />
                            {el.duration} <br />
                            {el.season}
                            </p>
                        </div>
                    )
                })
               : <p className="noact">No Activities</p>
            }
        </div>
    );
};