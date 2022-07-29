import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fechData, youtubeOptions } from "../utils/fechData";

import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { IExercise, IVideo } from "../types/exerciseTypes";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<IExercise>({
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: ""
  });
  const [exerciseVideos, setExerciseVideos] = useState<IVideo[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<
    IExercise[]
  >([]);
  const [equipmentExercises, setEquipmentExercises] = useState<IExercise[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExersiseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fechData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      const exerciseVideosData = await fechData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );

      const targetMuscleExercisesData = await fechData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      const equimentExercisesData = await fechData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(exerciseVideosData.contents);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equimentExercisesData);
    };

    fetchExersiseData();
  }, [id]);

  console.log(targetMuscleExercises);

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equimentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default memo(ExerciseDetail);
