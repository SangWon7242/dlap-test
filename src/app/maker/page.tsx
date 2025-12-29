"use client";

import React, { useState } from "react";
import QRCode from "react-qr-code";

type ThemeType = "neon" | "pixel" | "magic";

export default function MakerPage() {
  const [name, setName] = useState("");
  const [dream, setDream] = useState("");
  const [theme, setTheme] = useState<ThemeType>("neon");
  const [qrUrl, setQrUrl] = useState("");

  // 클라이언트 사이드에서만 window 객체에 접근 - lazy initialization 사용
  const [origin] = useState(() =>
    typeof window !== "undefined" ? window.location.origin : ""
  );

  const generateQR = () => {
    if (!name || !dream) {
      alert("이름과 장래희망을 모두 입력해주세요!");
      return;
    }
    // 실제 접속 가능한 URL 생성
    const url = `${origin}/viewer?name=${encodeURIComponent(
      name
    )}&dream=${encodeURIComponent(dream)}&theme=${theme}`;
    setQrUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          📇 나만의 코딩 명함
        </h2>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="이름 (예: 김코딩)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="장래희망 (예: 화이트해커)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={dream}
            onChange={(e) => setDream(e.target.value)}
          />

          {/* 테마 선택 */}
          <div className="flex justify-between gap-2">
            {(["neon", "pixel", "magic"] as ThemeType[]).map((t) => (
              <label
                key={t}
                className={`flex-1 p-2 border rounded-lg cursor-pointer transition-all ${
                  theme === t
                    ? "bg-blue-100 border-blue-500 text-blue-700 font-bold"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  value={t}
                  checked={theme === t}
                  onChange={() => setTheme(t)}
                  className="hidden"
                />
                <span className="capitalize">{t}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={generateQR}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors mb-8"
        >
          QR코드 생성하기
        </button>

        {/* QR 코드 영역 */}
        <div className="bg-gray-50 p-6 rounded-lg border border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[200px]">
          {qrUrl ? (
            <>
              <div className="bg-white p-2 rounded">
                <QRCode value={qrUrl} size={150} />
              </div>
              <p className="text-xs text-gray-500 mt-4 break-all">{qrUrl}</p>
            </>
          ) : (
            <span className="text-gray-400">버튼을 누르면 QR이 생성됩니다</span>
          )}
        </div>
      </div>
    </div>
  );
}
