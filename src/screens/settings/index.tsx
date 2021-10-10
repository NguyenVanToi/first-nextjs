import { IProps } from "./propState";

function SettingsComponent(props: IProps) {
  console.log(props);

  const _goToHome = () => {
    props.history.push("/home");
  };
  return (
    <div className="Home">
      <h2>settings</h2>
      <button onClick={_goToHome}>go to home</button>
    </div>
  );
}

export default SettingsComponent;
