// app/preview/[theme]/page.tsx
"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import BusinessCard from "@/app/components/BusinessCard";
import { ArrowLeft } from "lucide-react";

// 예시 데이터
const EXAMPLE_DATA = {
  neon: { name: "김해커", dream: "정보보안 전문가" },
  pixel: { name: "이게임", dream: "마인크래프트 건축가" },
  magic: { name: "박마법", dream: "UX/UI 디자이너" },
};

type ThemeType = "neon" | "pixel" | "magic";

export default function PreviewPage({
  params,
}: {
  params: Promise<{ theme: ThemeType }>;
}) {
  const { theme } = use(params);
  const router = useRouter();

  // 유효하지 않은 테마가 들어오면 기본값 설정
  const data = EXAMPLE_DATA[theme] || EXAMPLE_DATA.neon;

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* 1. 명함 컴포넌트 렌더링 */}
      <BusinessCard name={data.name} dream={data.dream} theme={theme} />

      {/* 2. 오버레이 UI (뒤로가기 버튼 등) */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none">
        <button
          onClick={() => router.back()}
          className="pointer-events-auto flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-md transition-all"
        >
          <ArrowLeft size={20} />
          <span>돌아가기</span>
        </button>

        <div
          className="pointer-events-auto bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold shadow-lg animate-bounce cursor-pointer"
          onClick={() => router.push("/maker")}
        >
          나도 만들어볼래! ✨
        </div>
      </div>

      <div className="absolute bottom-10 w-full text-center text-white/50 text-sm pointer-events-none">
        * 예시 화면입니다. 실제로는 내 이름이 들어갑니다.
      </div>
    </div>
  );
}
