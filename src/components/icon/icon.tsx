import At from "../../assets/icons/at-sign.svg";
import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eye-off.svg";

type IconName = "at" | "eye" | "eye-off";

interface Props {
  name: IconName;
  size?: string;
}

const Icons = {
  at: At,
  eye: Eye,
  "eye-off": EyeOff,
};

export default function Icon({ name, size = "100%" }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={Icons[name]} alt="icon" style={{ maxWidth: size, maxHeight: size }} />
    </div>
  );
}
