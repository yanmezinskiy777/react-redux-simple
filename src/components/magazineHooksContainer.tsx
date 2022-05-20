import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onBuyMagazineAction } from "../redux/magazine/magazineActions";

import { AppDispatch, ApplicationState } from "../redux/rootStore";

const MagazineHooksContainer = () => {
  const [magazines, setMagazines] = useState(0);
  const numberOfMagazines = useSelector(
    (state: ApplicationState) => state.magazine.numberOfMagazines
  );
  const dispatch = useDispatch<AppDispatch>();
  const onBuyMagazine = () => dispatch(onBuyMagazineAction());
  const onChangeMagazine = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMagazines(+event.target.value);
  const onBuyMagazineInput = () => dispatch(onBuyMagazineAction(magazines));
  return (
    <>
      <div>
        <h2>Number of magazines: {numberOfMagazines}</h2>
        <button onClick={onBuyMagazine}>buy magazine</button>
      </div>
      <div>
        <input
          type="text"
          name="magazine"
          onChange={onChangeMagazine}
          value={magazines}
        />
        <button onClick={onBuyMagazineInput}>buy magazine</button>
      </div>
    </>
  );
};

export default MagazineHooksContainer;
