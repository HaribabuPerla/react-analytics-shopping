import "../css/header.css"

export default function ItemCard(props){
    const{data}=props
    return(
        <div className="card item-card mt-3">
            <div className="card-head card-img" >
                 <img className="card-img img-rounded" src={data?.imgUrl} alt="" />
            </div>
            <div className="card-body bg-dark">
                <h4 className="card-title text-warning">{data?.name}</h4>
                <div className="cad-text text-warning"> {data?.price}</div>
                <div className="d-flex flex-row justify-content-between w-100">
                    <div>
                    <a href="/" className="btn btn-primary mt-3">See details</a>
                    </div>
                    <div>
                    <a href="/" className="btn btn-success mt-3">Add to cart</a>
                    </div>
            
            
                </div>
                

            </div>

        </div>
    )
}