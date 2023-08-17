import { useContext } from "react";
import { iChamp } from "../../utils/interfaces";
import { ChampsContext } from "../../context/champsContext";

interface cardProps extends iChamp{
    isSelected: boolean;
}

export default function ChampCard(
  { id, img, name, isSelected }: cardProps
) {
  const { selectChamp } = useContext(ChampsContext);

  if (isSelected) {
    return (
      <div
        className="champ-card card selected"
        id={id}
        onClick={() => {
          selectChamp({ id, img, name });
        }}
      >
        <img
          src={`./img/champs/${img}.jpg`}
          alt={`Ilustração do campeão ${name}`}
          width={300}
        />
        <h3>{name}</h3>
      </div>
    );
  } else {
    return (
      <div
        className="champ-card card"
        id={id}
        onClick={() => {
          selectChamp({ id, img, name });
        }}
      >
        <img
          src={`./img/champs/${img}.jpg`}
          alt={`Ilustração do campeão ${name}`}
          width={300}
        />
        <h3>{name}</h3>
      </div>
    );
  }
}
