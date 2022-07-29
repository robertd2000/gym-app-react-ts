import { memo, useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { IExercise } from "../types/exerciseTypes";

const Home = () => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default memo(Home);
