import {
  CheckIcon,
  ExpenseIcon,
  IncomeIcon,
  OperationsIcon,
  UserIcon,
} from "./Icons";
import styles from "./AusnDataVisual.module.css";

const dataCards = [
  { label: "Доходы", icon: IncomeIcon, className: styles.income },
  { label: "Расходы", icon: ExpenseIcon, className: styles.expense },
  { label: "Операции", icon: OperationsIcon, className: styles.operations },
  { label: "НДФЛ", icon: UserIcon, className: styles.ndfl },
] as const;

const dataStreams = [
  {
    id: "expenses",
    path: "M122 192 C150 254 234 245 296 346",
    duration: "10.5s",
    delay: "-4.5s",
  },
  {
    id: "income",
    path: "M310 142 C302 216 302 266 318 333",
    duration: "9s",
    delay: "-1.8s",
  },
  {
    id: "operations",
    path: "M506 176 C458 240 393 247 341 340",
    duration: "11s",
    delay: "-7.2s",
  },
  {
    id: "ndfl",
    path: "M566 274 C501 298 429 306 354 360",
    duration: "12.5s",
    delay: "-3s",
  },
] as const;

export function AusnDataVisual() {
  return (
    <div
      className={styles.visual}
      role="img"
      aria-label="Банковские данные поступают в АУСН для автоматического расчёта налога"
    >
      <div className={styles.ambient} />
      <div className={styles.ribbonOne} />
      <div className={styles.ribbonTwo} />
      <div className={styles.convergenceGlow} />

      <svg className={styles.streams} viewBox="0 0 640 680" aria-hidden="true">
        <defs>
          <linearGradient id="streamGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff4ff" stopOpacity=".12" />
            <stop offset=".48" stopColor="#75bdf4" stopOpacity=".66" />
            <stop offset="1" stopColor="#eaf8ff" stopOpacity=".24" />
          </linearGradient>
          <linearGradient id="streamHighlight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".15" />
            <stop offset=".55" stopColor="#dff5ff" stopOpacity=".92" />
            <stop offset="1" stopColor="#77c5ff" stopOpacity=".3" />
          </linearGradient>
          <filter id="streamGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="particleGlow" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className={styles.inputStreams}>
          {dataStreams.map((stream) => (
            <g key={stream.id}>
              <path
                id={`stream-${stream.id}`}
                className={styles.streamTube}
                d={stream.path}
              />
              <path className={styles.streamLight} d={stream.path} />
              <path className={styles.streamHighlight} d={stream.path} />
              <circle
                className={styles.movingParticle}
                r="3.2"
                filter="url(#particleGlow)"
              >
                <animateMotion
                  dur={stream.duration}
                  begin={stream.delay}
                  repeatCount="indefinite"
                >
                  <mpath href={`#stream-${stream.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}
        </g>

        <g className={styles.outputStreams}>
          <path className={styles.streamTube} d="M300 492 C298 530 298 553 303 582" />
          <path className={styles.streamLight} d="M300 492 C298 530 298 553 303 582" />
          <path className={styles.streamHighlight} d="M300 492 C298 530 298 553 303 582" />
          <path className={styles.streamTube} d="M320 498 C320 531 319 555 320 582" />
          <path className={styles.streamLight} d="M320 498 C320 531 319 555 320 582" />
          <path className={styles.streamTube} d="M340 492 C343 530 341 555 337 582" />
          <path className={styles.streamLight} d="M340 492 C343 530 341 555 337 582" />
          <circle
            className={styles.movingParticle}
            r="3.4"
            filter="url(#particleGlow)"
          >
            <animateMotion dur="6s" begin="-2.2s" repeatCount="indefinite" path="M320 498 C320 531 319 555 320 582" />
          </circle>
        </g>
      </svg>

      {dataCards.map(({ label, icon: Icon, className }) => (
        <div className={`${styles.dataCard} ${className}`} key={label}>
          <Icon />
          <span>{label}</span>
          <i />
        </div>
      ))}

      <div className={styles.coreGlow} />
      <div className={styles.coreDepth} aria-hidden="true" />
      <div className={styles.coreCard}>
        <span className={styles.coreTitle}>АУСН</span>
        <span className={styles.coreText}>
          Налог
          <br />
          рассчитывается
          <br />
          автоматически
        </span>
      </div>

      <div className={styles.taxCard}>
        <CheckIcon />
        <span>Налог</span>
        <i />
      </div>
    </div>
  );
}
