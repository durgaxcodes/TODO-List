export default function Stats({ items }) {
  if (!items.length) return;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const totalItems = numItems - numPacked;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <span>
        {percentage === 100 ? "Add A Todo" : ` ${totalItems} items left`}
      </span>
    </footer>
  );
}
