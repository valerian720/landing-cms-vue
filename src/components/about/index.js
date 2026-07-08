import defaultBlock from "./DefaultAboutBlock.vue";
import wideBlock from "./WideAboutBlock.vue";

export const aboutComponents = {
  default: { block: defaultBlock, name: "Обычный" },
  wide: { block: wideBlock, name: "Широкий" },
};
