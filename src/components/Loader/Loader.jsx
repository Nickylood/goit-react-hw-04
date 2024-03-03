import css from './Loader.module.css';
import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
        colors={["#4fa94d", "#4fa94d"]}
      />
    </>
  );
}
