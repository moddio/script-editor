import React from 'react'

interface MultiEditorModalContent {
  name: string,
  desc: string
}

interface MultiEditorModalProps {
  title: string,
  action: string,
  actionDesc: string,
  contents: MultiEditorModalContent[]
}

const MultiEditorModal:React.FC<MultiEditorModalProps> = ({title, action, actionDesc, contents}) => {
  return (
    <div className='w-[750px] h-[518px] rounded border gap-2.5 pl-4 pr-[16px,] py-[8px,]'>
      <span>{title}</span>
    </div>
  )
}

export default MultiEditorModal
