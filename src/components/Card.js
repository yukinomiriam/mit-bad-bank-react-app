
function Card(props) {

    return (
      <div className="card mb-3 brand-centered" style={{ maxWidth: "28rem" }}>
        <div className="card-header brand-background">{props.header}</div>
        <div className="card-body">
          {props.title && <h3 className="card-title">{props.title}</h3>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body}
          {props.status && <div style={{color:'red'}} id="createStatus">{props.status}</div>}
        </div>
      </div>
    );
  }
  
export default Card 