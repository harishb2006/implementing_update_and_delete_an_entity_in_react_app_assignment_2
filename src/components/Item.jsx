const Item = ({ item, onDelete }) => {
    return (
      <li>
        {item.name}
        <button onClick={() => onDelete(item.id)}>Delete</button>
        <button>Edit</button>
      </li>
    );
  };
  
  export default Item;