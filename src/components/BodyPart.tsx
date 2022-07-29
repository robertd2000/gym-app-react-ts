import { memo } from "react";
import { Stack, Typography } from "@mui/material";

const Icon =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/gym.png?raw=true";

interface IProps {
  item: any;
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const BodyPart = ({ item, bodyPart, setBodyPart }: IProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",

        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "282px",
        cursor: "pointer",
        gap: "47px"
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: 1800,
          // left: 100,
          behavior: "smooth"
        });
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {" "}
        {item}
      </Typography>
    </Stack>
  );
};

export default memo(BodyPart);
