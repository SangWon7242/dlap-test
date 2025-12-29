// components/BusinessCard.tsx
import React from "react";
import styles from "@/app/viewer/viewer.module.css"; // 기존 CSS 모듈 경로
import { blackHanSans, pressStart2P, gaegu, robotoMono } from "@/app/ui/fonts";
import Image from "next/image";

type ThemeType = "neon" | "pixel" | "magic";

interface BusinessCardProps {
  name: string;
  dream: string;
  theme: ThemeType;
}

export default function BusinessCard({
  name,
  dream,
  theme,
}: BusinessCardProps) {
  // 테마별 설정 (폰트, 로봇 세트, CSS 클래스)
  const themeConfig = {
    neon: {
      fontBody: robotoMono.className,
      fontTitle: blackHanSans.className,
      roboSet: "set1",
      bgClass: styles.neon,
    },
    pixel: {
      fontBody: pressStart2P.className,
      fontTitle: blackHanSans.className,
      roboSet: "set2",
      bgClass: styles.pixel,
    },
    magic: {
      fontBody: gaegu.className,
      fontTitle: gaegu.className,
      roboSet: "set4",
      bgClass: styles.magic,
    },
  };

  const currentTheme = themeConfig[theme] || themeConfig.neon;

  return (
    // 전체 화면 중앙 정렬을 위한 래퍼는 제외하고, 카드 자체 스타일만 적용
    <div
      className={`w-full h-full flex justify-center items-center ${currentTheme.bgClass} ${currentTheme.fontBody}`}
    >
      <div className={styles.card}>
        <div className={styles.avatar}>
          <Image
            src={`https://robohash.org/${encodeURIComponent(name)}?set=${
              currentTheme.roboSet
            }&size=200x200`}
            alt="Avatar"
            width={200}
            height={200}
          />
        </div>

        <p>FUTURE DEVELOPER</p>
        <h1 className={currentTheme.fontTitle}>{name}</h1>
        <p>
          나의 꿈: <span>{dream}</span>
        </p>

        <footer className={styles.footer}>
          <div className={styles.btn}>🚀 OO코딩학원</div>
        </footer>
      </div>
    </div>
  );
}
