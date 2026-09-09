import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3 5.5 5.8v5.7c0 4.2 2.7 7.8 6.5 9.5 3.8-1.7 6.5-5.3 6.5-9.5V5.8L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function LoginIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M14 8l4 4-4 4M18 12H7" />
      <path d="M11 5V3H4v18h7v-2" />
    </svg>
  );
}

export function ReportIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5M10 13h5M10 17h5" />
    </svg>
  );
}

export function CalculateIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M8 7h8M8 12h2M14 12h2M8 16h2M14 16h2" />
    </svg>
  );
}

export function BankIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m3 9 9-5 9 5M5 10v7M10 10v7M14 10v7M19 10v7M3 20h18" />
    </svg>
  );
}

export function TimeIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IncomeIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 19V14M10 19V10M15 19V6M20 19V3" />
    </svg>
  );
}

export function ExpenseIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="3" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  );
}

export function OperationsIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5M10 12h5M10 16h5" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" />
      <path d="M7 7h2M7 11h2M7 15h2M15 12h2M15 16h2" />
    </svg>
  );
}

export function GovernmentIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m3 9 9-5 9 5M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M3 21h18" />
    </svg>
  );
}
