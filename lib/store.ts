import { create } from "zustand";
import { shallow, useShallow } from 'zustand/shallow';

export interface StoreState {
  showMenu: boolean,
  setShowMenu: (showMenu: boolean) => void,
  gallery: FileField[] | null
  galleryId: string | null
  setGallery: (gallery: FileField[] | null) => void
  setGalleryId: (galleryId: string | null) => void
}

const useStore = create<StoreState>((set) => ({
  showMenu: false,
  gallery: null,
  galleryId: null,
  setShowMenu: (showMenu) => set({ showMenu }),
  setGallery: (gallery: FileField[] | null) => set({ gallery }),
  setGalleryId: (galleryId: string | null) => set({ galleryId })
}));

export { shallow, useStore, useShallow };
