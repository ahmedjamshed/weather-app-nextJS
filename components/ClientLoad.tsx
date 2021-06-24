import React, { useEffect, useState } from "react";

type ClientProps = {
    children: React.ReactNode
}

export default function ClientLoad({ children }: ClientProps) {
  const [hasMounted, setHasMounted] = useState<Boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
}