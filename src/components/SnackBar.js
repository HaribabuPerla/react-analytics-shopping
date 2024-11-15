import "../css/header.css"

export default function SnackBar(props){
    const{bgColor,txtColor,message}=props

    return(
        <div className="snackbar">
           <div style={{backgroundColor:bgColor,borderRadius:"20px"}}>
            <div className="snackbar-inner">
               <div style={{color:txtColor}}>{message}</div> 
               </div>
           </div>

        </div>
    )

}