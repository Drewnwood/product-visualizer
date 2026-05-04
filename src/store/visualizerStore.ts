import create from 'zustand';
import { VisualizerState, InteriorStyle, Product, ProductVariant } from '../types';

interface VisualizerStore extends VisualizerState {
  setSelectedStyle: (style: string) => void;
  setSelectedInterior: (interior: InteriorStyle) => void;
  setSelectedProduct: (product: Product) => void;
  setSelectedVariant: (variant: ProductVariant) => void;
  setTransformation: (key: string, value: any) => void;
  toggleGrid: () => void;
  reset: () => void;
}

const initialState: VisualizerState = {
  selectedStyle: null,
  selectedInterior: null,
  selectedProduct: null,
  selectedVariant: null,
  transformations: {
    scale: 1,
    rotation: 0,
    flip: false,
    perspective: 0,
    shadowOpacity: 0.5,
  },
  showGrid: false,
};

export const useVisualizerStore = create<VisualizerStore>((set) => ({
  ...initialState,
  setSelectedStyle: (style) => set({ selectedStyle: style }),
  setSelectedInterior: (interior) => set({ selectedInterior: interior }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setSelectedVariant: (variant) => set({ selectedVariant: variant }),
  setTransformation: (key, value) =>
    set((state) => ({
      transformations: { ...state.transformations, [key]: value },
    })),
  toggleGrid: () =>
    set((state) => ({
      showGrid: !state.showGrid,
    })),
  reset: () => set(initialState),
}));
