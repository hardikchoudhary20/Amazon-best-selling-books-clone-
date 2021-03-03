export const Book = ({ img, title, author }) => {
  //attribut event handler
  //onCLick , onMouseOver
  const clickHandler = () => {
    alert("you clicked ");
  };
  const complexExxample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
