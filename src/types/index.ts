export interface InteriorStyle {
  id: string;
  name: string;
  imageUrl: string;
  category: 'residential' | 'kitchen' | 'bedroom' | 'office' | 'commercial';
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  variants: ProductVariant[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
}

export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  imageUrl: string;
}

export interface Visualization {
  id: string;
  interiorImage: string;
  productImage: string;
  productPosition: {
    x: number;
    y: number;
  };
  productScale: number;
  productRotation: number;
  productFlip: boolean;
  timestamp: Date;
}

export interface VisualizerState {
  selectedStyle: string | null;
  selectedInterior: InteriorStyle | null;
  selectedProduct: Product | null;
  selectedVariant: ProductVariant | null;
  transformations: {
    scale: number;
    rotation: number;
    flip: boolean;
    perspective: number;
    shadowOpacity: number;
  };
  showGrid: boolean;
}
