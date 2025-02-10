export function Navbar( props ) {
    console.log( props )

    return (
        <div className="bg-light p-4 m-3">
            <h1>{props.title || 'Default Value'}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt autem corrupti quo non maiores fugiat inventore aspernatur iusto? Exercitationem blanditiis aspernatur harum mollitia nobis ex eos omnis laboriosam obcaecati at?</p>
            <button className="btn btn-dark">Show More</button>
        </div> )
}