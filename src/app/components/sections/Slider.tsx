"use client";

import { Keyframes, Scroll } from "scrollex";
import { cn } from "@/lib/utils";

const ScrollItem = Scroll.Item;
const ScrollSection = Scroll.Section;
const ScrollContainer = Scroll.Container;

// keyframes remain the same
const keyframes: Record<string, Keyframes> = {
  headerText: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateY: 0,
    },
    [section.bottomAt("container-top")]: {
      translateY: 200,
    },
  }),
  headerImage: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateY: 0,
    },
    [section.bottomAt("container-top")]: {
      translateY: 125,
    },
  }),
  galleryImage: ({ section, data }) => ({
    [section.topAt("container-top")]: {
      translateZ: data.initialZ,
    },
    [section.bottomAt("container-bottom")]: {
      translateZ: data.initialZ + 510,
    },
  }),
  footerText: ({ section, container }) => ({
    [section.topAt("container-bottom")]: {
      translateY: 200,
    },
    [section.bottomAt("container-bottom")]: {
      translateY: 0,
    },
  }),
};

const images = [
  {
    x: -600,
    y: -500,
    z: -200,
    src: "https://picsum.photos/id/121/600/600",
  },
  {
    x: 600,
    y: -500,
    z: -100,
    src: "https://picsum.photos/id/146/600/600",
  },
  {
    x: 0,
    y: -100,
    z: 0,
    src: "https://picsum.photos/id/152/1000/600",
  },
  {
    x: -450,
    y: 300,
    z: 100,
    src: "https://picsum.photos/id/235/600/600",
  },
  {
    x: 400,
    y: 250,
    z: 200,
    src: "https://picsum.photos/id/311/1000/800",
  },
];

export default function Scroller() {
  return (
    <ScrollContainer
      scrollAxis="y"
      className="relative block h-auto w-screen overflow-clip bg-black text-green-500"
    >
      <ScrollSection className="visible relative block h-screen">
        <ScrollItem
          keyframes={keyframes.headerImage}
          className="visible absolute inset-0 block"
        >
          <img
            src="https://picsum.photos/id/209/2000/1000"
            className="visible h-full w-full scale-125 transform overflow-clip object-cover"
          />
        </ScrollItem>
        <div className="flex h-full items-center justify-center">
          <ScrollItem
            keyframes={keyframes.headerText}
            className="visible block"
          >
            <h1 className="visible block text-9xl">Scrollex</h1>
          </ScrollItem>
        </div>
      </ScrollSection>
      <ScrollSection className="visible relative block h-[500vh] w-full">
        <div className="pers visible sticky top-0 block h-screen overflow-hidden">
          {images.map((image) => (
            <ScrollItem
              key={image.src}
              className={cn(
                "visible absolute inset-0 grid items-center justify-center ",
                {
                  "left-[-600px]": image.x === -600,
                  "left-[600px]": image.x === 600,
                  "left-0": image.x === 0,
                  "left-[-450px]": image.x === -450,
                  "left-[400px]": image.x === 400,
                  "top-[-500px]": image.y === -500,
                  "top-[-100px]": image.y === -100,
                  "top-[300px]": image.y === 300,
                  "top-[250px]": image.y === 250,
                }
              )}
              style={{
                transform: `translateX(0px) translateY(0px) translateZ(${image.z}px) scale(1) scaleX(1) scaleY(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg) translateZ(0px)`,
                opacity: 1,
              }}
              data={{ initialZ: image.z }}
              keyframes={keyframes.galleryImage}
            >
              <img
                src={image.src}
                className="clip-margin block h-[250px] object-cover"
              />
            </ScrollItem>
          ))}
        </div>
      </ScrollSection>
      <ScrollSection className="h-screen">
        <div className="flex h-full items-center justify-center">
          <ScrollItem keyframes={keyframes.footerText}>
            <h1 className="text-9xl">Scrollex</h1>
          </ScrollItem>
        </div>
      </ScrollSection>
    </ScrollContainer>
  );
}
