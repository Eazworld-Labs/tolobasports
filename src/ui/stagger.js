// Reveal delay for the nth item of a list: a fixed step, capped so long lists stay quick.
export function stagger(index, { step = 90, cap = 5 } = {}) {
  return Math.min(index, cap) * step
}
