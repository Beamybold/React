function GreetingCard({name, message, color = "#EFBBFF"})
{
    const cardStyle = {
    backgroundColor: color,
    padding: "20px",
    borderRadius: "10px",
    color: "black",
    textAlign: "center",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
  };

    return (
        
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
     
}

export default GreetingCard;