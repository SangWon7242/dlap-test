import Link from "next/link";
import { Sparkles, QrCode, Smartphone, Code2, ArrowRight } from "lucide-react";
import { blackHanSans, robotoMono } from "@/app/ui/fonts"; // 폰트 파일 경로 확인

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-purple-500 selection:text-white">
      {/* 1. 네비게이션 / 헤더 */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <Code2 className="text-blue-400" />
          <span>디랩코딩학원</span>
        </div>
        <div className="text-sm text-slate-400 border border-slate-700 px-3 py-1 rounded-full">
          초등 코딩 체험 부스 👋
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* 2. 히어로 섹션 (타이틀) */}
        <div className="mb-16 animate-fade-in-up">
          <h1
            className={`${blackHanSans.className} text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight`}
          >
            나만의 AI 코딩 명함
            <br />
            지금 바로 만들기!
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            내 이름과 꿈을 입력하면 <b>세상에 하나뿐인 웹사이트</b>가
            만들어져요.
            <br />
            멋진 캐릭터와 함께 나를 소개하는 QR 키링을 받아가세요!
          </p>

          {/* 시작 버튼 (CTA) */}
          <Link href="/maker">
            <button className="mt-10 group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-blue-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-500 hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
              <span className="mr-2">명함 만들기 시작</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* 3. 프로세스 설명 (3단계) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-24">
          <StepCard
            icon={<Code2 className="w-8 h-8 text-green-400" />}
            step="STEP 01"
            title="정보 입력하기"
            desc="노트북에 내 이름과 되고 싶은 장래희망을 입력해주세요."
          />
          <StepCard
            icon={<QrCode className="w-8 h-8 text-blue-400" />}
            step="STEP 02"
            title="QR코드 생성"
            desc="엔터를 치면 나만의 웹사이트 주소가 담긴 QR코드가 나와요."
          />
          <StepCard
            icon={<Smartphone className="w-8 h-8 text-purple-400" />}
            step="STEP 03"
            title="키링 획득!"
            desc="QR코드를 스티커로 출력해서 멋진 키링에 붙여 가져가세요."
          />
        </div>

        {/* 4. 디자인 테마 미리보기 */}
        <div className="w-full max-w-6xl bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-yellow-400 w-6 h-6" />
            <h2 className={`${blackHanSans.className} text-3xl`}>
              어떤 디자인이 나올까?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Theme 1: Cyberpunk */}
            <Link href="/preview/neon" className="block">
              <ThemePreview
                title="해커 (Neon)"
                color="border-green-500 text-green-500"
                bg="bg-gray-900"
                desc="미래의 개발자 느낌! 야광으로 빛나는 멋진 디자인"
              />
            </Link>

            {/* Theme 2: Pixel */}
            <Link href="/preview/pixel" className="block">
              <ThemePreview
                title="게임 (Pixel)"
                color="border-black text-black"
                bg="bg-yellow-400"
                desc="마인크래프트 감성! 귀여운 도트 캐릭터와 폰트"
              />
            </Link>

            {/* Theme 3: Magic */}
            <Link href="/preview/magic" className="block">
              <ThemePreview
                title="매직 (Magic)"
                color="border-white text-purple-600"
                bg="bg-gradient-to-br from-pink-200 to-blue-200"
                desc="신비로운 마법사 느낌! 몽글몽글 움직이는 카드"
              />
            </Link>
          </div>
        </div>
      </main>

      {/* 5. 푸터 */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>© 2026 디랩코딩학원. All rights reserved.</p>
        <p className="mt-2">
          교육문의: 010-0000-0000 | 인스타그램 @coding_academy
        </p>
      </footer>
    </div>
  );
}

/* --- 작은 컴포넌트들 (같은 파일 하단에 두거나 분리 가능) --- */

function StepCard({
  icon,
  step,
  title,
  desc,
}: {
  icon: React.ReactNode;
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
      <div className="bg-slate-900 p-4 rounded-full mb-4 ring-1 ring-slate-700">
        {icon}
      </div>
      <span className="text-xs font-bold text-slate-400 mb-2 tracking-widest">
        {step}
      </span>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function ThemePreview({
  title,
  color,
  bg,
  desc,
}: {
  title: string;
  color: string;
  bg: string;
  desc: string;
}) {
  return (
    <div
      className={`group relative h-64 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${bg}`}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">
        <div
          className={`text-2xl font-bold border-2 px-4 py-2 rounded-lg mb-4 ${color} ${robotoMono.className}`}
        >
          {title}
        </div>
        <p
          className={`text-sm font-medium ${
            title === "해커 (Neon)" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {desc}
        </p>
      </div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
    </div>
  );
}
