// app/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 text-gray-500 text-sm border-t">
      © {new Date().getFullYear()} SnapPrint. All rights reserved.
    </footer>
  );
};

export default Footer;
