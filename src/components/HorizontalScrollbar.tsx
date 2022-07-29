import { memo } from "react";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const RightArrowIcon =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/right-arrow.png?raw=true";
const LeftArrowIcon =
  "https://github.com/adrianhajdin/project_fitness_app/blob/main/src/assets/icons/left-arrow.png?raw=true";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

interface IProps {
  data: any[];
  bodyParts?: string[];
  bodyPart?: string;
  setBodyPart?: React.Dispatch<React.SetStateAction<string>>;
}

const HorizontalScrollbar = ({
  data,
  bodyPart,
  bodyParts,
  setBodyPart
}: IProps) => {
  return (
    <ScrollMenu
      wrapperClassName="scroll"
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
    >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default memo(HorizontalScrollbar);
