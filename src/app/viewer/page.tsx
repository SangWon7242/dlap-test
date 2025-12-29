"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./viewer.module.css";
import { blackHanSans, pressStart2P, gaegu, robotoMono } from "@/app/ui/fonts"; // 2번 단계 파일 경로

// 테마 타입 정의
type ThemeType = "neon" | "pixel" | "magic";

function CardContent() {
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "이름없음";
  const dream = searchParams.get("dream") || "꿈나무";
  const theme = (searchParams.get("theme") as ThemeType) || "neon";

  // 테마별 설정 (폰트, 로봇 세트)
  const themeConfig = {
    neon: {
      fontBody: robotoMono.className,
      fontTitle: blackHanSans.className,
      roboSet: "set1", // 로봇
      bgClass: styles.neon,
    },
    pixel: {
      fontBody: pressStart2P.className,
      fontTitle: blackHanSans.className,
      roboSet: "set2", // 몬스터
      bgClass: styles.pixel,
    },
    magic: {
      fontBody: gaegu.className,
      fontTitle: gaegu.className,
      roboSet: "set4", // 고양이
      bgClass: styles.magic,
    },
  };

  const currentTheme = themeConfig[theme] || themeConfig.neon;

  return (
    <div
      className={`${styles.container} ${currentTheme.bgClass} ${currentTheme.fontBody}`}
    >
      <div className={styles.card}>
        <div className={styles.avatar}>
          <img
            src={`https://robohash.org/${encodeURIComponent(name)}?set=${
              currentTheme.roboSet
            }&size=200x200`}
            alt="Avatar"
          />
        </div>

        <p>FUTURE DEVELOPER</p>
        <h1 className={currentTheme.fontTitle}>{name}</h1>
        <p>
          나의 꿈: <span>{dream}</span>
        </p>

        <footer className={styles.footer}>
          <a href="tel:010-0000-0000" className={styles.btn}>
            🚀 OO코딩학원 상담하기
          </a>
        </footer>
      </div>
    </div>
  );
}

export default function ViewerPage() {
  return (
    // useSearchParams 사용 시 Suspense 권장 (빌드 에러 방지)
    <Suspense fallback={<div>Loading card...</div>}>
      <CardContent />
    </Suspense>
  );
}
