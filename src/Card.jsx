
function Card(props) {


 


    return (
      <> 
        <div className="cards">
          <div className="card">
            <img src={props.img_scr} alt="netflix" className="img" />
            <div className="info">
              <p className="catagory">Netflix Original Series</p>
              <h3 className="serialName">{props.name}</h3>
              <a href={props.link} target="_blank">
                <button> Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Card;