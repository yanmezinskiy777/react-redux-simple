import { useSelector, useDispatch } from "react-redux"
import { onBuyMagazineAction } from "../redux/magazine/magazineActions";

import { AppDispatch, ApplicationState } from "../redux/rootStore";

const MagazineHooksContainer = () => {
  const numberOfMagazines = useSelector((state: ApplicationState ) => state.magazine.numberOfMagazines)
  const dispatch = useDispatch<AppDispatch>();
  const onBuyMagazine = () => dispatch(onBuyMagazineAction())
  return (
    <div>
      <h2>Number of magazines: {numberOfMagazines}</h2>
      <button onClick={onBuyMagazine}>buy books</button>
    </div>
  )
}

export default MagazineHooksContainer