import defaultBlock from "./SelectedReviewsBlock.vue";
import minimalBlock from "./MinimalReviewsBlock.vue";

export const reviewsComponents = {
  default: { block: defaultBlock, name: "Обычный" },
  minimal: { block: minimalBlock, name: "Минималистичный" },
};
