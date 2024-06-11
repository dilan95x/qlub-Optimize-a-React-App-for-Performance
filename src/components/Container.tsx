import { Suspense, lazy, memo, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SearchBox from "./SearchBox";
import { useGetImages } from "./hooks/useGetImages";
import { CircularProgress, Stack } from "@mui/material";

const ImageComponent = lazy(() => import("./Image"));

function Container() {
  const { images, fetchImages, loading } = useGetImages();
  const [isHDOn, setIsHDOn] = useState(false);

  return (
    <div className="App">
      <SearchBox
        isHDOn={isHDOn}
        setIsHDOn={setIsHDOn}
        onSearch={(query) => {
          fetchImages(query);
        }}
      />
      <h1 style={{padding:"5rem 0", textAlign:"center"}}>FIND piX</h1>

      {!loading && images.length > 0 ? (
        <ImageList variant="masonry" cols={3} gap={0} style={{ zIndex: 10 }}>
          {images.map((image) => (
            <Suspense
            key={image.id} 
              fallback={
                <Stack
                  mt={5}
                  direction={"column"}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ height: "100%" }}
                  gap={5}
                >
                  <span>Loading images...</span>
                  <CircularProgress />
                </Stack>
              }
            >
              <ImageListItem key={image.id}>
                <ImageComponent
                  image={{
                    id: image.id,
                    url: isHDOn ? image.src.small : image.src.tiny,
                    title: image.alt,
                  }}
                  styles={{ width: "100%", height: "auto" }}
                />
              </ImageListItem>
            </Suspense>
          ))}
        </ImageList>
      ) : (
        <Stack
          mt={5}
          direction={"column"}
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
          gap={5}
        >
          <span>Loading images...</span>
          <CircularProgress />
        </Stack>
      )}
    </div>
  );
}

export default memo(Container);
