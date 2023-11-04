"use client";

import {NextUIProvider} from "@nextui-org/react";

const providers = ({children}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default providers
