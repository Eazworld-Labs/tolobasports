import styled from 'styled-components'
import { route } from './homeContent'

// The hero's signature: routes from Accra to the partner scouts' cities, drawn on
// a dot grid. The dashes drift slowly unless the visitor prefers less motion.
const Card = styled.figure`
  padding: var(--space-5) var(--space-5) var(--space-4);
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  background-color: var(--color-surface);
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-3);
  font-family: var(--font-mono);
  font-size: 1.2rem;
  color: var(--color-text);

  & strong {
    font-family: var(--font-body);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-heading);
  }
`

const Map = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  margin-top: var(--space-2);

  & .dot {
    fill: var(--color-map-dot);
  }
  & .arc {
    fill: none;
    stroke: var(--color-signal);
    stroke-width: 1.6;
    stroke-dasharray: 5 5;
  }
  & .city {
    fill: var(--color-surface);
    stroke: var(--color-heading);
    stroke-width: 1.6;
  }
  & .home {
    fill: var(--color-lime);
    stroke: var(--color-heading);
    stroke-width: 1.6;
  }
  & text {
    font-family: var(--font-mono);
    font-size: 12px;
    fill: var(--color-heading);
  }
  & text.coord {
    font-size: 10.5px;
    fill: var(--color-text);
  }

  @media (prefers-reduced-motion: no-preference) {
    & .arc {
      animation: travel 1.6s linear infinite;
    }
    @keyframes travel {
      to {
        stroke-dashoffset: -20;
      }
    }
  }
`

const Caption = styled.figcaption`
  margin-top: var(--space-2);
  font-size: 1.4rem;
  color: var(--color-text);
`

const DOTS = []
for (let x = 12; x < 600; x += 24) {
  for (let y = 12; y < 420; y += 24) DOTS.push([x, y])
}

function ScoutRoute() {
  const { home, cities } = route
  const names = cities.map((c) => c.name).join(', ')

  return (
    <Card aria-labelledby="route-caption">
      <Head>
        <strong>{route.title}</strong>
        <span>{route.note}</span>
      </Head>
      <Map
        viewBox="0 0 600 420"
        role="img"
        aria-label={`Lines from ${home.name}, Ghana to partner scouts in ${names}`}
      >
        <g aria-hidden="true">
          {DOTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} className="dot" cx={x} cy={y} r="1.4" />
          ))}
        </g>
        {cities.map((c) => (
          <path
            key={`arc-${c.name}`}
            className="arc"
            d={`M${home.x} ${home.y} Q${c.bend[0]} ${c.bend[1]} ${c.x} ${c.y}`}
          />
        ))}
        {cities.map((c) => (
          <g key={c.name}>
            <circle className="city" cx={c.x} cy={c.y} r="6" />
            <text x={c.label[0]} y={c.label[1]}>
              {c.name}
            </text>
            <text className="coord" x={c.label[0]} y={c.label[1] + 15}>
              {c.coord}
            </text>
          </g>
        ))}
        <circle className="home" cx={home.x} cy={home.y} r="8" />
        <text x={home.x + 18} y={home.y - 3}>
          {home.name}
        </text>
        <text className="coord" x={home.x + 18} y={home.y + 13}>
          {home.coord}
        </text>
      </Map>
      <Caption id="route-caption">{route.caption}</Caption>
    </Card>
  )
}

export default ScoutRoute
