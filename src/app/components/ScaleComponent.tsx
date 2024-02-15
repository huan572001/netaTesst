"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function ScaleComponent({
  children,
  maxWidth,
}: Readonly<{
  children: React.ReactNode;
  maxWidth: number;
}>) {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    // Kiểm tra kích thước màn hình khi trang web được tải

    // Đặt sự kiện lắng nghe để kiểm tra kích thước màn hình khi thay đổi
    const handleResize = () => {
      if (window.innerWidth < maxWidth) {
        setScale(window.innerWidth / maxWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up để tránh memory leak khi component bị unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // useEffect chỉ chạy một lần khi component được mount
  console.log(scale);
  return (
    <div
      style={{
        scale: scale.toFixed(2),
      }}
    >
      {children}
    </div>
  );
}
