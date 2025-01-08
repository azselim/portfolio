import React, { useRef, useEffect } from "react";

type TextMorphProps = {
  morphTime?: number;
  cooldownTime?: number;
};

const TextMorph: React.FC<TextMorphProps> = ({
  morphTime = 1,
  cooldownTime = 0.25
}) => {
  const texts: string[] = [
    "Adam Selim",
    "a Developer 🧑‍💻",
    "a Problem Solver 🧩",
    "a polyglot 🇪🇬🇫🇷🇯🇵",
    "a musician 🎸",
  ];

  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  const textIndex = useRef<number>(texts.length - 1);
  const time = useRef<Date>(new Date());
  const morph = useRef<number>(0);
  const cooldown = useRef<number>(cooldownTime);

  useEffect(() => {

    if (text1Ref.current && text2Ref.current) {
        text1Ref.current.textContent = texts[textIndex.current % texts.length];
        text2Ref.current.textContent = texts[(textIndex.current + 1) % texts.length];
      }

    const setMorph = (fraction: number) => {
      if (!text1Ref.current || !text2Ref.current) return;

      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;

      text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      text1Ref.current.textContent = texts[textIndex.current % texts.length];
      text2Ref.current.textContent = texts[(textIndex.current + 1) % texts.length];
    };

    const doMorph = () => {
      morph.current -= cooldown.current;
      cooldown.current = 0;

      let fraction: number = morph.current / morphTime;

      if (fraction > 1) {
        cooldown.current = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const doCooldown = () => {
      morph.current = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";

        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const animate = () => {
      const newTime: Date = new Date();
      const shouldIncrementIndex = cooldown.current > 0;
      const dt: number = (newTime.getTime() - time.current.getTime()) / 1000;
      time.current = newTime;

      cooldown.current -= dt;

      if (cooldown.current <= 0) {
        if (shouldIncrementIndex) {
          textIndex.current++;
        }
        doMorph();
      } else {
        doCooldown();
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [morphTime, cooldownTime]);

  return (
    <div className="relative w-full h-[1.1em] z-50">
      <div
        ref={text1Ref}
        className=" md:text-left md:transform-none md:left-0 absolute inset-x-0 top-0 mx-auto font-bold text-4xl md:text-6xl leading-tight text-primary whitespace-nowrap text-center"
        style={{
          textShadow: "2px 2px 4px rgba(255, 0, 0, 0.7), -2px -2px 4px rgba(0, 255, 0, 0.7)"
        }}
      ></div>
      <div
        ref={text2Ref}
        className=" md:text-left md:transform-none md:left-0 absolute inset-x-0 top-0 mx-auto font-bold text-4xl md:text-6xl leading-tight text-primary whitespace-nowrap text-center"
      ></div>
    </div>
  );
};

export default TextMorph;
