import type { ColoringPage } from "@/lib/content";

type Props = {
  variant: ColoringPage["illustration"];
  title: string;
  large?: boolean;
};

const stroke = "currentColor";

export function ColoringIllustration({ variant, title, large = false }: Props) {
  const sizeClass = large ? "h-[460px]" : "h-56";

  return (
    <svg
      viewBox="0 0 420 520"
      role="img"
      aria-label={title}
      className={`${sizeClass} w-full text-stone-950`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="26" y="26" width="368" height="468" rx="28" stroke={stroke} strokeWidth="8" />
      {variant === "cat" && <Cat />}
      {variant === "apple" && <Apple />}
      {variant === "number" && <NumberOne />}
      {variant === "dino" && <Dino />}
      {variant === "car" && <Car />}
      {variant === "shape" && <Shape />}
      {variant === "tree" && <Tree />}
      {variant === "gift" && <Gift />}
      {variant === "rabbit" && <Rabbit />}
      {variant === "lines" && <Lines />}
    </svg>
  );
}

function Cat() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M126 228l30-62 44 42 48-42 34 62" />
      <path d="M118 252c0-64 184-64 184 0v82c0 72-184 72-184 0v-82z" />
      <circle cx="174" cy="278" r="8" fill="currentColor" />
      <circle cx="246" cy="278" r="8" fill="currentColor" />
      <path d="M210 302v22m0 0c-18 0-32-8-42-20m42 20c18 0 32-8 42-20" />
      <path d="M110 308H70m44 34H82m224-34h44m-44 34h32" />
      <path d="M152 396c18 18 98 18 116 0" />
    </g>
  );
}

function Apple() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M204 160c-28-34-70-16-86 24-26 64 6 178 70 178 14 0 22-8 32-8s18 8 32 8c64 0 96-114 70-178-16-40-58-58-86-24" />
      <path d="M210 160c0-42 20-62 54-72" />
      <path d="M258 94c32-8 54 8 62 36-34 10-58 0-62-36z" />
      <path d="M102 422h216" />
      <path d="M132 102h46v270" />
      <path d="M112 190h70" />
    </g>
  );
}

function NumberOne() {
  return (
    <g stroke={stroke} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M204 132l-58 44" />
      <path d="M210 132v246" />
      <path d="M158 382h110" />
      <path d="M92 410c52 32 192 32 244 0" />
      <circle cx="114" cy="122" r="28" />
      <path d="M100 114c14-20 36-16 48 0" />
    </g>
  );
}

function Dino() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M108 330c0-88 68-146 152-122 38 10 58 34 72 64l38 6-34 28c-4 78-76 112-154 102-48-6-74-34-74-78z" />
      <path d="M274 204c8-44 34-70 70-72 22 42 2 82-42 92" />
      <circle cx="302" cy="246" r="8" fill="currentColor" />
      <path d="M146 402v38h42v-34m90-16v50h42v-62" />
      <path d="M118 312l-56-24c-22-10-20-42 4-48" />
      <path d="M188 204l-16-36m54 30l4-42m40 58l32-28" />
    </g>
  );
}

function Car() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M84 302h42l32-70h122l44 70h28v70H84v-70z" />
      <path d="M162 302h120" />
      <circle cx="148" cy="374" r="32" />
      <circle cx="292" cy="374" r="32" />
      <path d="M174 232l-16 70m64-70v70m58-70l34 70" />
      <path d="M110 280h-34m268 0h34" />
      <path d="M108 214h70" />
    </g>
  );
}

function Shape() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="140" cy="192" r="64" />
      <rect x="224" y="128" width="112" height="112" rx="10" />
      <path d="M212 306l-74 124h148l-74-124z" />
      <path d="M78 94h264" />
      <path d="M92 462h236" />
    </g>
  );
}

function Tree() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M196 300v116h50V300" />
      <path d="M110 302c-24-44 8-84 48-80-2-52 42-88 86-58 42-28 88 2 86 54 42 2 66 42 48 84H110z" />
      <path d="M118 392c34-12 46 22 70 6 22-14 42-18 66 0 22 16 48-18 74-2" />
      <path d="M122 446h200" />
      <path d="M118 150l-24-26m210 26l28-28m-66-46l8-34" />
    </g>
  );
}

function Gift() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <rect x="106" y="214" width="208" height="188" rx="14" />
      <path d="M210 214v188M106 276h208" />
      <path d="M204 214c-56-8-74-50-52-72 30-30 58 8 58 72z" />
      <path d="M216 214c56-8 74-50 52-72-30-30-58 8-58 72z" />
      <path d="M132 430h156" />
      <path d="M92 112l-22-24m258 24l22-24" />
    </g>
  );
}

function Rabbit() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M174 210c-22-88-6-140 28-140 28 0 30 70 18 136" />
      <path d="M232 210c18-86 46-130 76-112 28 18-4 82-50 132" />
      <path d="M122 292c0-70 56-116 126-98 64 16 96 68 84 126-14 74-210 76-210-28z" />
      <circle cx="188" cy="278" r="8" fill="currentColor" />
      <circle cx="258" cy="278" r="8" fill="currentColor" />
      <path d="M222 302v22m0 0c-16 0-28-6-38-18m38 18c16 0 28-6 38-18" />
      <path d="M98 338h-40m48 30H72m248-30h42m-52 30h34" />
      <path d="M124 418h184" />
    </g>
  );
}

function Lines() {
  return (
    <g stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
      <path d="M88 142c48 40 92 40 136 0s88-40 132 0" />
      <path d="M88 218h268" strokeDasharray="16 20" />
      <path d="M88 296c42-44 84-44 126 0s84 44 126 0" strokeDasharray="18 18" />
      <path d="M96 374l44-44 44 44 44-44 44 44 44-44" />
      <circle cx="98" cy="142" r="10" fill="currentColor" />
      <circle cx="354" cy="374" r="10" fill="currentColor" />
    </g>
  );
}
