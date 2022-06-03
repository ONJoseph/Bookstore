import BooksList from '../BooksList';
import Form from '../Form';

function Books() {
  return (
    <div className="inner-container">
      <BooksList />
      <hr className="line" />
      <Form />
    </div>
  );
}

export default Books;
