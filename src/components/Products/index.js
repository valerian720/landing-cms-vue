import ProductsCaruselBlock from "./ProductsCaruselBlock.vue";
import ProductsSimpleBlock from "./ProductslistBlock.vue";

export const productsComponents = {
  default: { block: ProductsCaruselBlock, name: "Карусель" },
  simple: { block: ProductsSimpleBlock, name: "Список" },
};
