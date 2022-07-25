import './NetworkButton.css'

export default function NetworkButton({onClick, id, timestamp, nodes, edges, className}) {
    return (
        <>
            <div onClick ={onClick} className = {`${className}`}>
                <h2 className ='network-button-id'>#{id}</h2>
                <p className ='network-button-timestamp'> Nós: {nodes}</p>
                <p className ='network-button-timestamp'> Arestas: {edges}</p>
            </div>
        </>
    );
}