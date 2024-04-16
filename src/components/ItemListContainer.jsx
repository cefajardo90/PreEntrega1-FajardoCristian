const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p style={{color: 'black', lineHeight : 10, padding: 20, textAlign:"center", fontSize:25}}>{mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
