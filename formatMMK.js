export function formatMMK(amount) {
    return new Intl.NumberFormat("en-US", {
         style:"currency",
       currency:"MMK"
  }).format(amount)};