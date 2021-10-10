import { IProps } from "./propState";

function HomeComponent(props: IProps) {
  const _goToSetting = () => {
    props.history.push("settings");
  };
  return (
    <div className="Home">
      <h2>home</h2>
      <button onClick={_goToSetting}>go to settings</button>
    </div>
  );
}

export default HomeComponent;
