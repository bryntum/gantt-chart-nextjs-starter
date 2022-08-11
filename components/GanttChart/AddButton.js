export default function AddButton() {
  return (
    <button type="submit">
      Add
      <style jsx>{`
        button {
          font-family: Lato, 'Open Sans', Helvetica, Arial, sans-serif;
          font-size: 13px;
          justify-content: center;
          width: 70px;
          height: 50px;
          color: white;
          background: var(--color-secondary);
          font-size: 1.1rem;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
          border: 0;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        button:hover,
        button:focus {
          opacity: 0.85;
        }
      `}</style>
    </button>
  );
}
