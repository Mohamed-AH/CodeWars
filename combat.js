function combat(health, damage) {
 //console.log(health,damage, health - damage)
  return (health - damage) > 0 ? health - damage : 0
}