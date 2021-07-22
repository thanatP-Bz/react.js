function items(props) {
  return (
    <div>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        <p>{props.amount}</p>
      </div>
      <div>
        <p>{props.date.toISOString()}</p>
      </div>
    </div>
  );
}

export default items;
