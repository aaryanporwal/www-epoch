export default ({ children, setProgress, index, progress, ...props }) => {
  const active = index == progress

  const onClick = () => {
    console.log('click!')
  }

  return (
    <>
      <style jsx>{`
        button {
          font-family: 'Bellefair', serif;
          background: none;
          border: none;
          opacity: ${active ? 1 : 0.6};
          cursor: pointer;
        }

        button:hover {
          opacity: 0.8;
        }
      `}</style>
      <button onClick={onClick} {...props}>
        {children}
      </button>
    </>
  )
}
