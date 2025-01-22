const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('you can navigate to specific pokemons', async ({ page }) => {
    await page.goto('/')
    const locator = await page.locator('a').locator('text=Bulbasaur')
    await page.click(locator)
    await page.waitForNavigation()
    await expect(page).toHaveURL('/pokemon/bulbasaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
