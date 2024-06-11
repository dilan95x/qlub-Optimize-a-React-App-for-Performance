import { createClient } from "pexels";
import { useCallback, useEffect, useState } from "react";
import { PexelsPhoto } from "../../types/PexelsPhoto.types";

const initialState: PexelsPhoto[] = [
  {
    id: 0,
    width: 0,
    height: 0,
    url: "",
    photographer: "",
    photographer_url: "",
    photographer_id: 0,
    avg_color: "#4E4340",
    src: {
      original: "",
      large2x: "",
      large: "",
      medium: "",
      small: "",
      portrait: "",
      landscape: "",
      tiny: "",
    },
    liked: false,
    alt: "",
  },
];

function useGetImages() {
  const [images, setImages] = useState<PexelsPhoto[]>(initialState);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async (queryVal: string) => {
    try {
      setLoading(true);
      const client = createClient(`${process.env.REACT_APP_PIXELS_API_KEY}`);

      await client.photos
        .search({ query: queryVal || "cats", perPage: 1 })
        .then((photos: any) => {
          if (photos.photos.length > 0) {
            setImages(photos.photos);
          } else {
            setImages(initialState);
          }
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (images[0].url === "") {
      fetchImages("cats");
    }
  }, [fetchImages, images]);

  return { images, fetchImages, loading };
}

export { useGetImages };
