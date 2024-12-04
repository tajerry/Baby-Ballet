import "./Form.css";
function Form() {
  return (
    <form className="contactUs__form">
      <div className="contactUs__formHeader">
        <h2>Contact Us</h2>
      </div>
      <input
        placeholder={"Name"}
        className={"contactUs__formInput"}
        type="text"
      />
      <input
        placeholder={"Email"}
        className={"contactUs__formInput"}
        type="text"
      />
      <textarea
        placeholder={"Message"}
        className={"contactUs__formTextarea"}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button className={"contactUs__formButton"} type={"submit"}>
        Submit
      </button>
    </form>
  );
}
export default Form;
