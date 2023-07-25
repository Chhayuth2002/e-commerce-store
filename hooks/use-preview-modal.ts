import { Product } from "@/types"
import {create} from "zustand"

interface UsePreviewModalStore{
    isOpen: boolean
    data?: Product
    onOpen: (data: Product) => void
    onClose: () => void
}

const UsePreviewModal = create<UsePreviewModalStore>((set)=>({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({data: data, isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default UsePreviewModal