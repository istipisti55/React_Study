function NumericButton({ onClick, children }) {
  return (
    <button type="button" onClick={() => onClick(children)}>
      {children}
    </button>
  );
}

export default NumericButton;
