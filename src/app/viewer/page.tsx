"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BusinessCard from "@/app/components/BusinessCard";

type ThemeType = "neon" | "pixel" | "magic";

function CardContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "이름없음";
  const dream = searchParams.get("dream") || "꿈나무";
  const theme = (searchParams.get("theme") as ThemeType) || "neon";

  // 복잡한 HTML 다 지우고 이거 한 줄이면 끝!
  return <BusinessCard name={name} dream={dream} theme={theme} />;
}

export default function ViewerPage() {
  return (
    // useSearchParams 사용 시 Suspense 권장 (빌드 에러 방지)
    <Suspense fallback={<div>Loading card...</div>}>
      <CardContent />
    </Suspense>
  );
}
