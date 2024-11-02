import React, { ReactNode } from "react";

/**
 * Custom props for data-* attributes need to be defined
 */
export interface ContentProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode
}


const MyContent: React.FC<ContentProps> = ({
  children,
  ...rest
}) => {
  
  return (
    <div
      {...rest}
    >
      <h1 className="content">This is MyContent</h1>
      {children}
    </div>
  )
}

export default MyContent;