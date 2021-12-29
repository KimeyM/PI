export default function ActivityDetails({details}) {
    return (
        <div>
            {
                details.length > 0 ?
                details.map(el => {
                    return (
                        <div className="activitiesDiv" key={el.id}>
                            <h2 key={el.id}>{el.name}</h2>
                            <p>Difficulty: {el.difficulty}</p>
                            <p>{el.duration}</p>
                            <p>{el.season}</p>
                        </div>
                    )
                })
                : <h3>No Activities</h3>
            }
        </div>
    )
}