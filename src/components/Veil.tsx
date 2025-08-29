const Veil = (props: {fade?: boolean}) => {
  return (
    <div
      className={`absolute inset-0 ${props.fade ? 'bg-gradient-to-t from-black/70 to-black/30' : 'bg-black/60'}`}
    />
  );
};

export default Veil;
