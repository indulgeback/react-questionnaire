import { useState } from 'react'

const useGenerateDialog = () => {
  const [isGenerateDialogOpen, setIsGenerateDialogOpen] = useState(false)

  const openGenerateDialog = () => {
    setIsGenerateDialogOpen(true)
  }

  const closeGenerateDialog = () => {
    setIsGenerateDialogOpen(false)
  }

  return {
    isGenerateDialogOpen,
    openGenerateDialog,
    closeGenerateDialog
  }
}

export default useGenerateDialog
