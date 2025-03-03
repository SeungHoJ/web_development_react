function MyForm (){
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('폼이 제출되었습니다.')
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="submit" value="제출"/>
    </form>
  );
}

export default MyForm;