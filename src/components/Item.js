export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="todos">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="delete-btn">
        &#10005;
      </button>
    </li>
  );
}
