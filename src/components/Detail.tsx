import { memo } from "react";
import { IExercise } from "../types/exerciseTypes";
import { Typography, Stack, Button } from "@mui/material";

const BodyPartImage =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/body-part.png?raw=true";
const TargetImage =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/target.png?raw=true";
const EquipmentImage =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/equipment.png?raw=true";

interface IProps {
  exerciseDetail: IExercise;
}

const Detail = ({ exerciseDetail }: IProps) => {
  const { name, bodyPart, target, gifUrl, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart
    },
    {
      icon: TargetImage,
      name: target
    },
    {
      icon: EquipmentImage,
      name: equipment
    }
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you
          improve your <br /> mood and gain energy.
        </Typography>
        {extraDetail?.map((item, i) => (
          <Stack
            key={item.name + Math.random()}
            direction="row"
            gap="24px"
            alignItems="center"
          >
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px"
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(Detail);
