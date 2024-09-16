const Footer = ()=>{
    const year = new Date().getFullYear()
    return(
    <div className="footer">
         <h3 className="footer-heading">Created By  <a href="https://www.linkedin.com/in/kapil-sarkar-439754249/" target="_blank"> Kapil Sarkar 🚀</a> 
            {year}</h3>
    </div>
    )
}

export default Footer